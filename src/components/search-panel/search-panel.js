import { Component } from 'react';
import './search-panel.css';


class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serathStr: '',
    }
  }

  onInput = (e) => {
    this.setState({
      serathStr: e.target.value
    })
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <input onChange={this.onInput} value={this.state.serathStr}
        type="text"
        className="form-control search-input"
        placeholder="Find employee by name..." />
    )
  }
}
export default SearchPanel;