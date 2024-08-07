import './app-info.css';
import { Fragment } from 'react';


const AppInfo = ({ enployeesNum, increasedEmplNum }) => {
  return (
    <div className="app-info">
      <h1>Accounting Of Employees in Corporation ...</h1>
      <h2>Total number of employees: {enployeesNum} </h2>
      <h2>Number of employees which will be increased: {increasedEmplNum} </h2>
    </div>
  )
}
export default AppInfo;