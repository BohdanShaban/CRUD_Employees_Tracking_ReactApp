import { render } from '@testing-library/react';
import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {


  render() {
    const { name, salary, increased, liked, onDeleate, onLiked, onIncreased } = this.props;

    let classNameStr = "list-group-item d-flex justify-content-between";
    if (increased) { classNameStr += " increase" }
    if (liked) { classNameStr += " like" }

    return (
      <li className={classNameStr}>
        <span onClick={onLiked} className="list-group-item-label">{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className='d-flex justify-content-center align-items-center'>
          <button onClick={onIncreased}
            type="button"
            className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>

          <button onClick={onDeleate} type="button"
            className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}
export default EmployeesListItem;