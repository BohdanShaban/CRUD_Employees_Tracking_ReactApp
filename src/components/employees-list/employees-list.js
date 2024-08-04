import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem name="John Smith" salary={500} />
      <EmployeesListItem name="Michael Jackson" salary={800} />
      <EmployeesListItem name="Marek Suchan" salary={1000} />
    </ul>
  )
}
export default EmployeesList;