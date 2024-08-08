import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEmployessClicked: true,
      forPromotionClicked: false,
      moreTan1000Clicked: false
    }
  }
  onButtonClicked = (e) => {
    const dataAtributeStr = e.target.getAttribute('data-toggle');
    this.props.onClicked(dataAtributeStr)
    this.setState(() => {
      return {
        allEmployessClicked: false,
        forPromotionClicked: false,
        moreTan1000Clicked: false,
        [dataAtributeStr]: !this.state[dataAtributeStr]
      }
    })
  }

  render() {
    const { allEmployessClicked, forPromotionClicked, moreTan1000Clicked } = this.state;

    return (
      <div className="btn-group">
        <button className={allEmployessClicked ? "btn btn-light" : "btn btn-outline-light"}
          onClick={this.onButtonClicked}
          data-toggle="allEmployessClicked"
          type="button">
          All Employees
        </button>
        <button className={forPromotionClicked ? "btn btn-light" : "btn btn-outline-light"}
          onClick={this.onButtonClicked}
          data-toggle="forPromotionClicked"
          type="button">
          For Promotion
        </button>
        <button className={moreTan1000Clicked ? "btn btn-light" : "btn btn-outline-light"}
          onClick={this.onButtonClicked}
          data-toggle=" "
          type="button">
          More Than 1000$ Sallary
        </button>
      </div>
    )
  }
}
export default AppFilter;