import { useEffect, useState } from "react"
import { getQuery } from "../../helpers/URL"
import { getValueById } from "../../helpers/dom"
import { getUserBySession, postWithAuth } from "../../helpers/http"
import "./chat.css"

const getAll = async () => {
  const res = await postWithAuth('/chat/get', {
    receiver: getQuery('r')
  })

  return res.messages;
}

export default () => {
  const [messages, setMessages] = useState([]) as any;
  const [__user, setUser] = useState([]) as any;
  const [kind, setKind] = useState('user')

  useEffect(() => {
    (async () => {
      let _user = await getUserBySession();

      setMessages(await getAll());
      setUser(_user)

      setKind(_user.garage ? 'admin' : 'user')
      
    })()
  }, [])

  const sendMessage = async () => {
    await postWithAuth('/chat/send', {
      receiverId: getQuery('r'),
      message: getValueById('mssg')
    });

    (document.getElementById('mssg') as HTMLInputElement).value = '';

    setMessages(await getAll());
  }

  return (
    <div className="chat">
      <div className="chat__messages flex">
        {messages.map((message: any) => (
          <p className={`chat__messages__item ${message.sender == kind ? 'chat__messages__item--right' : ''}`}>
            {message.message}
          </p>
        ))}
      </div>
    
      <div className="chat__footer flex margin--top-2">
        <div className="input">
          <input type="text" id="mssg" placeholder="Type message" />
        </div>
        <button className="btn btn--primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}