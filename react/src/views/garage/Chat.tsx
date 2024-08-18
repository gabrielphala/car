import Chat from "../../components/chat/Chat";
import GarageManager from "../../components/info/GarageManager";

export default () => {
  return (
    <GarageManager>
      <div className="info__page-heading">
        <h1>Messaging</h1>
        <p>Message your client</p>
      </div>

      <div className="info__pad">
        <Chat></Chat>
      </div>
    </GarageManager>
  )
}