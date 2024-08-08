import { Link } from "react-router-dom"
import { formatTime } from "../../helpers/date"
import "./request-card.css"

export default (props: any) => {
  let start = props.isGarage ? props.employeeLocation : props.location;
  let end = !props.isGarage ? props.employeeLocation : props.location;

  return (
    <div className="request-card">
      <div className="flex" style={{ padding: "1rem 1rem .5rem" }}>
        <div className="request-card__icon margin--right-1">
          {
            <i className="fa fa-industry"></i>
          }
        </div>
        <div className="request-card__details">
          <p><b>{props.service}</b></p>
          <p>{props.isGarage ? props.requester.name : props.garage.name}</p>
          <p>{formatTime(new Date(props.createdAt))}</p>
        </div>
      </div>
      <div className="flex flex--a-center flex--j-space-between" style={{
        padding: ".5rem 1rem .3rem",
        backgroundColor: "#d6e9f9"
      }}>
        <p>
          {props.isAccepted ? 'Accepted' : (props.isDeclined ? 'Declined' : 'Pending')}
          {
            !props.hasPaid && (
              <span style={{ marginLeft: '2rem' }}><Link to={`/u/requests/pay?request=${props._id}`}>Pay now</Link></span>
            )
            
          }
        </p>
        <p><span onClick={() => props.calcRoute(start, end)}>Track</span></p>
        {
          props.employee ?
            <p><Link to={`/${props.isGarage ? 'g' : 'u'}/chat?r=${props.isGarage ? props.requester._id : props.employee._id}`}>Chat</Link></p> :
            <></> 
        }
        {
          (!props.isAccepted && !props.isDeclined && props.isGarage) ? (
            <p>
              <span className="margin--right-2" onClick={() => props.accept(props._id)}>Accept</span>
              <span onClick={() => props.decline(props._id)}>Decline</span>
            </p>
          ) :
          (!props.employee && props.isGarage) ? (
            <p><i className="fa-solid fa-user-plus" onClick={(e: any) => props.showEmployees(e, props._id)}></i></p>
          ) :
            (<p>{props.employee && props.employee.name}</p>)
        }
      </div>
    </div>
  )
}