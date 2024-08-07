import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, onDeleate, onLiked, onIncreased }) => {

  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem onIncreased={() => onIncreased(id)}
        onLiked={() => onLiked(id)}
        onDeleate={() => onDeleate(id)} key={id} {...itemProps} />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}
export default EmployeesList;