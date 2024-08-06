import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Brad Pit', salary: 800, increase: false, id: 1 },
        { name: 'Angelina Jolie', salary: 3000, increase: true, id: 2 },
        { name: 'Michael Jackson', salary: 5000, increase: false, id: 3 }
      ],

    }
    this.maxId = 3;
  }

  onEmployeeDeleate = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
  onItemAdd = (name, salary) => {
    const newDataItem = { name: name, salary: salary, increase: false, id: ++this.maxId }

    this.setState(({ data }) => {
      const newArr = [...data, newDataItem];
      return {
        data: newArr
      }
    });
  }

  render() {

    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList onDeleate={this.onEmployeeDeleate} data={this.state.data} />

        <EmployeesAddForm onItemAdd={this.onItemAdd} />

      </div>
    )
  }
}

export default App;