import { render } from '@testing-library/react';
import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.name, this.state.salary)
    this.setState({
      name: '',
      salary: ''
    })
  }

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form" >
        <h3>Add New Employee</h3>
        <form onSubmit={this.onSubmit}
          className="add-form d-flex">
          <input value={name} name="name" onChange={this.onValueChange} type="text"
            className="form-control new-post-label"
            placeholder="The Name Of Employee ?" />
          <input value={salary} name="salary" onChange={this.onValueChange} type="number"
            className="form-control new-post-label"
            placeholder="Sallary in $?" />

          <button type="submit"
            className="btn btn-outline-light">Add</button>
        </form>
      </div>
    )
  }
}
export default EmployeesAddForm;