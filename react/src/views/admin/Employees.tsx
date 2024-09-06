import { useEffect, useState } from "react";
import AdminManager from "../../components/info/AdminManager";
import { postWithAuth } from "../../helpers/http";

import "./Garage.css"
import date from "../../helpers/date";

const getEmployees = async (): Promise<any> => {
  const res = await postWithAuth('/users/get/all/employees', {})

  return res.employees;
}

export default () => {
  const [employees, setEmployees] = useState([]) as any;

  useEffect(() => {
    (async () => {
      setEmployees(await getEmployees());
    })()
  }, [])

  return (
    <AdminManager>
      <div className="info__page-heading">
        <h1>Garage employees</h1>
        <p>Garage employee monitoring</p>
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
              employees?.map((emp: any, i: number) => (
                <tr key={emp._id}>
                  <td>{i + 1}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{date(new Date(emp.createdAt))}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </AdminManager>
  )
}