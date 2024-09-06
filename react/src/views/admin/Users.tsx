import { useEffect, useState } from "react";
import AdminManager from "../../components/info/AdminManager";
import { postWithAuth } from "../../helpers/http";

import "./Garage.css"
import date from "../../helpers/date";

const getDrivers = async (): Promise<any> => {
  const res = await postWithAuth('/users/get/drivers', {})

  return res.drivers;
}

export default () => {
  const [drivers, setDrivers] = useState([]) as any;

  useEffect(() => {
    (async () => {
      setDrivers(await getDrivers());
    })()
  }, [])

  return (
    <AdminManager>
      <div className="info__page-heading">
        <h1>Drivers</h1>
        <p>Driver monitoring</p>
      </div>

      <div className="info__pad" style={{ padding: '0 15%' }}>
        <table className="table margin--top-2" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Full name</th>
              <th>Email address</th>
              <th>Added on</th>
            </tr>
          </thead>
          <tbody>
            {
              drivers?.map((driver: any, i: number) => (
                <tr key={driver._id}>
                  <td>{i + 1}</td>
                  <td>{driver.name}</td>
                  <td>{driver.email}</td>
                  <td>{date(new Date(driver.createdAt))}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </AdminManager>
  )
}