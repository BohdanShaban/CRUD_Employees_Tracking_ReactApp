import { render } from '@testing-library/react';
import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false
    }
  }

  getPromoted = () => {
    this.setState(state => ({
      increase: !this.state.increase
    }))
  }

  render() {

    const { name, salary } = this.props;
    const { increase } = this.state;

    let classNameStr = "list-group-item d-flex justify-content-between";
    if (increase) { classNameStr += " increase" }

    return (
      <li className={classNameStr}>
        <span className="list-group-item-label">{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className='d-flex justify-content-center align-items-center'>
          <button onClick={this.getPromoted}
            type="button"
            className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button"
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