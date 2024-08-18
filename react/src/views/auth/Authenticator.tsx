import { useNavigate } from "react-router-dom"
import { getUserBySession } from "../../helpers/http";
import { useEffect, useState, createContext } from "react";

export const AuthContext: React.Context<any> = createContext(null);

export default (props: any) => {
  const nav = useNavigate();
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await getUserBySession();

      setUser(res)

      if (!res && props?.type != 'admin') nav(props?.type == 'user' ? '/sign-in' : '/g/sign-in')
      else if (props?.type == 'admin' && !res?.isAdmin) nav('/a/sign-in')
    })()
  }, [])

	return (
		<AuthContext.Provider value={{user, setUser}}>
      {user && props.children}
    </AuthContext.Provider>
	)
}