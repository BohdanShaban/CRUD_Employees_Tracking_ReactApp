import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, onDeleate }) => {

  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem onDeleate={() => onDeleate(id)} key={id} {...itemProps} />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}
export default EmployeesList;