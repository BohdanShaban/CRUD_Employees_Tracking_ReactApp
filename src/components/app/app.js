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
        { name: 'Brad Pit', salary: 800, increased: false, liked: true, id: 1 },
        { name: 'Angelina Jolie', salary: 3000, increased: true, liked: false, id: 2 },
        { name: 'Michael Jackson', salary: 5000, increased: false, liked: false, id: 3 }
      ],
      searchStr: '',
      filterStr: 'allEmployessClicked'
    }
    this.maxId = 3;
  }

  onDeleate = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
  onItemAdd = (name, salary) => {
    const newDataItem = { name: name, salary: salary, increased: false, liked: false, id: ++this.maxId }

    this.setState(({ data }) => {
      const newArr = [...data, newDataItem];
      return { data: newArr }
    });
  }
  onLiked = (id) => {
    this.setState(({ data }) => {
      const likedId = data.findIndex(item => item.id === id);
      const oldItemCopy = data[likedId];
      const newItem = { ...oldItemCopy, liked: !oldItemCopy.liked };
      const newData = [...data.slice(0, likedId), newItem, ...data.slice(likedId + 1)]
      return { data: newData }
    })
  }
  onIncreased = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, increased: !item.increased };
        }
        return item;
      })
    }))
  }
  searchEmployee = (searchStr, dataArr) => {
    if (searchStr.length === 0) return dataArr;

    return dataArr.filter(item => {
      return item.name.indexOf(searchStr) > -1;
    })
  }
  onSearchByStr = (searchStr) => {
    this.setState({ searchStr })
  }
  onFilterClicked = (filterStr) => {
    this.setState({ filterStr })
  }
  filterEmployee = (filterStr, dataArr) => {
    switch (filterStr) {
      case 'allEmployessClicked':
        return dataArr
      case 'forPromotionClicked':
        return dataArr.filter(item => item.increased) // if (item.increased) return item
      case 'moreTan1000Clicked':
        return dataArr.filter(item => item.salary > 1000)
      default:
        return dataArr
    }
  }

  render() {
    const { data, searchStr, filterStr } = this.state;
    let visibleData = this.searchEmployee(searchStr, data);
    visibleData = this.filterEmployee(filterStr, visibleData);

    return (
      <div className="app">
        <AppInfo increasedEmplNum={data.filter(item => item.increased === true).length}
          enployeesNum={data.length} />

        <div className="search-panel">
          <SearchPanel onSearch={this.onSearchByStr} />
          <AppFilter filterStr={filterStr} onClicked={this.onFilterClicked} />
        </div>

        <EmployeesList onIncreased={this.onIncreased}
          onLiked={this.onLiked}
          onDeleate={this.onDeleate}
          data={visibleData} />

        <EmployeesAddForm onItemAdd={this.onItemAdd} />

      </div>
    )
  }
}

export default App;