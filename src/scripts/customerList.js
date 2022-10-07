import { getEmployees, getEmployeeCustomers, getCustomers } from "./dataAccess.js"

export const CustomerList = () => {
    const employees = getEmployees()
    const employeeCustomers = getEmployeeCustomers()
    const customers = getCustomers()

    let html = `<section id="customers-section">`

    html += customers.map(customer => {
        const filteredEmployeeCustomers = employeeCustomers.filter(eC => eC.customerId === customer.id)

        return `<div class="employee">
            <header class="employee__name">
                <h3>${customer.name}</h3>
            </header>
            <section class="employee__customers">
            Works with the following employees.
            <ul>
                ${filteredEmployeeCustomers.map(employeeCustomer => {
                    const employeeObj = employees.find(employee => employee.id === employeeCustomer.employeeId)

                    return `<li>${employeeObj.firstName} ${employeeObj.lastName}</li>`
                }).join("")}
            </ul>
            </section>
        </div>`
    }).join("")

    return html += `</section>`
}