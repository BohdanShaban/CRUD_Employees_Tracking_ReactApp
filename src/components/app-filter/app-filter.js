import './app-filter.css';

const AppFilter = (props) => {

  const buttonsData = [
    { name: 'allEmployessClicked', label: "All Employees" },
    { name: 'forPromotionClicked', label: "For Promotion" },
    { name: 'moreTan1000Clicked', label: "More Than 1000$ Sallary" },
  ]
  const buttonsElements = buttonsData.map(({ name, label }) => {
    const active = props.filterStr === name;
    const clazzNameStr = active ? "btn-light" : "btn-outline-light"

    return (
      <button className={`btn ${clazzNameStr}`}
        onClick={() => props.onClicked(name)}
        key={name}
        type="button">
        {label}
      </button>
    )
  })


  return (
    <div className="btn-group">
      {buttonsElements}
    </div>
  )

}
export default AppFilter;