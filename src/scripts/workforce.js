import { EmployeeList } from "./employeeList.js"
import { CustomerList } from "./customerList.js"

export const WorkForce = () => {
    return `<h2>Employee Information Center</h2>
    ${ EmployeeList() }
    <h2>Customer Information Center</h2>
    ${ CustomerList() }`
}