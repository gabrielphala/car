import EmployeeCard from "../../components/employee-card/EmployeeCard";
import GarageManager from "../../components/info/GarageManager";

export default () => {
  const employees = [
    {
      id: 1,
      name: 'Gabriel Phala'
    }
  ];

  return (
    <GarageManager>
      <div className="info__page-heading">
        <h1>Employees</h1>
        <p>Your colleages from your garage</p>
      </div>

      <div className="info__employees">
        { employees.map((item: any) => <EmployeeCard key={item.id} {...item} />) }
      </div>

      <button className="btn btn--primary margin--top-2">Add new employee</button>
    </GarageManager>
  )
}