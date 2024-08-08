import Chat from "../../components/chat/Chat";
import UserManager from "../../components/info/UserManager";

export default () => {
  return (
    <UserManager>
      <div className="info__page-heading">
        <h1>Messaging</h1>
        <p>Message your mechanic</p>
      </div>

      <div className="info__pad">
        <Chat></Chat>
      </div>

    </UserManager>
  )
}