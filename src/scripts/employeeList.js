import { getEmployees, getComputers, getDepartments, getLocations, getCustomers, getEmployeeCustomers } from "./dataAccess.js"

export const EmployeeList = () => {
    // Display Employee name && age,
    // Display computer's model and manufacture year
    const employees = getEmployees()
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    const employeeCustomers = getEmployeeCustomers()
    const customers = getCustomers()

    let html = `<section id="employees-section">`

    html += employees.map(employee => {
        const matchingComputer = computers.find(computer => computer.id === employee.computerId)
        const matchingDepartment = departments.find(department => department.id === employee.departmentId)
        const matchingLocation = locations.find(location => location.id === employee.locationId)
        const filteredEmployeeCustomers = employeeCustomers.filter(employeeCustomer => employeeCustomer.employeeId === employee.id)
        
        return `<div class="employee">
        <header class="employee__name">
        <h3>${employee.firstName} ${employee.lastName}</h3>
        </header>
        <section class="employee__computer">
        Currently using a ${matchingComputer.year} ${matchingComputer.model}
        </section>
        <section class="employee__department">
            Works in the ${matchingDepartment.name} department
        </section>
        <section class="employee__location">
            Works at the ${matchingLocation.name} office
        </section>
        <section class="employee__customers">
            Has worked for the following customers.
            <ul>
                ${filteredEmployeeCustomers.map(employeeCustomer => {
                    const customerObj = customers.find(customer => customer.id === employeeCustomer.customerId)

                    return `<li>${customerObj.name}</li>`
                }).join("")}
                </ul>
            </section>
        </div>`
    }).join("")

    return html += `</section>` 
}
