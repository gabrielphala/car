export default function (props: any) {
  return (
    <div className="modal modal--closed" id="request-modal">
      <div className="modal__main card">
        <div className="card__header">
          <h4>New request</h4>
          <p>Send request to {props.garageName}</p>
        </div>
        <div className="card__body">
          <p><b>Services offered.</b></p>

          {
            props.services?.map((service: Array<any>) => (
              <p key={service[0]} className="flex flex--j-space-between"><span>{service[0]}</span><span onClick={() => props.sendRequest(props.garageId, service[0], service[1])}>Send request</span></p>
            ))
          }
        </div>
      </div>
    </div>
  )
}