import EmployeesListItem from "../employees-list-item/employees-list-item"

import "./employees-list.css"

const EmployeesList = ({ data, onDelete }) => {
  const elements = data.map((i) => {
    const { id, ...iProps } = i
    return (
      <EmployeesListItem onDelete={() => onDelete(id)} key={id} {...iProps} />
    )
  })

  return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList
