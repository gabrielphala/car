import { useEffect, useState } from "react";
import { closeModal, openModal } from "../../helpers/modals";
import { postWithAuth } from "../../helpers/http";
import { getValueById } from "../../helpers/dom";
import GarageManager from "../../components/info/GarageManager";
import ServiceCard from "../../components/service-card/ServiceCard";

export default () => {
  const [services, setServices] = useState([]) as any;

  useEffect(() => {
    (async () => {
      await _setServices()
    })()
  }, [])

  async function _setServices () {
    const res = await postWithAuth('/services/get/by/garage', {})

    setServices(res.services);
  }

  async function addService (e: any) {
    (e as PointerEvent).preventDefault()

    const res = await postWithAuth('/services/add', {
      name: getValueById('service-name'),
      price: getValueById('service-price')
    })

    if (res.successful) closeModal('new-service')

    await _setServices()
  }

  async function removeService(e: any, id: string) {
    (e as PointerEvent).preventDefault()

    await postWithAuth('/services/remove', {
      id
    })

    await _setServices()
  }

  return (
    <GarageManager>
      <div className="info__page-heading">
        <h1>Services</h1>
        <p>Services offered by garage</p>
      </div>

      <div className="info__pad">
        <div className="info__services">
          {services.map((service: any) => <ServiceCard key={service._id} removeService={removeService} {...service} />)}
        </div>
        <button className="btn btn--primary" onClick={() => openModal('new-service')}>Add new service</button>
      </div>
      <ServiceModal addService={addService} />
    </GarageManager>
  )
}

function ServiceModal (props: any) {
  return (
    <div className="modal modal--closed" id="new-service-modal">
      <form className="modal__main" onSubmit={props.addService}>
        <div className="modal__main__header">
          <h4>New service</h4>
        </div>
        <div className="modal__main__body">
          <div className="model__main__body__form">
            <div className="input">
              <input type="text" id="service-name" placeholder="Service name" />
            </div>

            <div className="input">
              <input type="number" id="service-price" placeholder="Service price" />
            </div>
          </div>
        </div>
        <div className="modal__main__footer flex">
          <button className="btn btn--primary margin--right-1">Add service</button>
          <button className="btn" type="button" onClick={() => closeModal('new-service')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}