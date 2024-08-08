export default (props: any) => {
  return (
    <div className="service-card flex  flex flex--a-center flex--j-space-between">
      <div className="service-card__details">
        <p>{props.name}</p>
        <p>R{props.price}</p>
      </div>
      <i className="fa-solid fa-xmark" onClick={(e) => props.removeService(e, props._id)}></i>
    </div>
  )
}