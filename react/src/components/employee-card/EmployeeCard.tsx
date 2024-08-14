import "./employee-card.css"

export default (props: any) => {
  return (
    <div className="employee-card flex">
      <div className="employee-card__profile image--back image--round" style={{ backgroundImage: 'url("/profile/blank.jpg")' }}></div>
      <div className="employee-card__details">
        <p><b>{props.name}</b></p>
        <p>{props.email}</p>
      </div>
    </div>
  )
}