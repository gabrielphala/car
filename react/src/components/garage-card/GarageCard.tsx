import "./garage-card.css"

export default (props: any) => {
  return (
    <div className="request-card flex">
      <div className="request-card__icon margin--right-1">
        <i className="fa fa-industry"></i>
      </div>
      <div className="request-card__details">
        <p><b>{props.name} - {props.type}</b></p>
        <p>4 Services</p>
      </div>
    </div>
  )
}