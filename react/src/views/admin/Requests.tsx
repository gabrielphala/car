import { useEffect, useState } from "react";
import AdminManager from "../../components/info/AdminManager";
import { postWithAuth } from "../../helpers/http";

import "./Garage.css"

const getRequests = async (): Promise<any> => {
  const res = await postWithAuth('/requests/get', {})

  return res.requests;
}

export default () => {
  const [requests, setRequests] = useState([]) as any;

  useEffect(() => {
    (async () => {
      setRequests(await getRequests());
    })()
  }, [])

  return (
    <AdminManager>
      <div className="info__page-heading">
        <h1>Requests</h1>
        <p>Monitor requests</p>
      </div>

      <div className="info__pad" style={{ padding: '0 15%' }}>
        <table className="table margin--top-2" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Request</th>
              <th>Price</th>
              <th>Garage</th>
              <th>Requester</th>
              <th>Employee</th>
            </tr>
          </thead>
          <tbody>
            {
              requests?.map((request: any, i: number) => (
                <tr key={request._id}>
                  <td>{i + 1}</td>
                  <td>{request.service}</td>
                  <td>{request.price}</td>
                  <td>{request.garage.name}</td>
                  <td>{request.requester.name}</td>
                  <td>{request.employee?.name || 'N/A'}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </AdminManager>
  )
}