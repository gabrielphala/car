import { useEffect, useState } from "react";
import AdminManager from "../../components/info/AdminManager";
import { postWithAuth } from "../../helpers/http";

import "./Garage.css"
import date from "../../helpers/date";

const getServices = async (): Promise<any> => {
  const res = await postWithAuth('/services/get', {})

  return res.services;
}

export default () => {
  const [services, setServices] = useState([]) as any;

  useEffect(() => {
    (async () => {
      setServices(await getServices());
    })()
  }, [])

  return (
    <AdminManager>
      <div className="info__page-heading">
        <h1>Services</h1>
        <p>Service monitoring</p>
      </div>

      <div className="info__pad" style={{ padding: '0 15%' }}>
        <table className="table margin--top-2" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Garage</th>
              <th>Price</th>
              <th>Added on</th>
            </tr>
          </thead>
          <tbody>
            {
              services?.map((service: any, i: number) => (
                <tr key={service._id}>
                  <td>{i + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.garage.name}</td>
                  <td>R{service.price}</td>
                  <td>{date(new Date(service.createdAt))}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {/* <div className="info__employees">
        {employees.map((item: any) => <EmployeeCard key={item.id} {...item} />)}
      </div> */}

    </AdminManager>
  )
}