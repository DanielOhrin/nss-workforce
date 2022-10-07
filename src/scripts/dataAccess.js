const applicationState = {
    computers: [],
    employees: [],
    departments: [],
    locations: [],
    customers: [],
    employeeCustomers: []
}

const mainContainer = document.querySelector("#container")
const API = `http://localhost:8088`

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.employees = [...data]
            }
        )
}

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.computers = [...data]
            }
        )
}

export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.departments = [...data]
            }
        )
}

export const fetchLocations = () => {
    return fetch(`${API}/locations`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.locations = [...data]
            }
        )
}

export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.customers = [...data]
            }
        )
}

export const fetchEmployeeCustomers = () => {
    return fetch(`${API}/employeeCustomers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.employeeCustomers = [...data]
            }
        )
}

export const getEmployees = () => {
    return applicationState.employees.map(employee => ({ ...employee }))
}

export const getComputers = () => {
    return applicationState.computers.map(computer => ({ ...computer }))
}

export const getDepartments = () => {
    return applicationState.departments.map(department => ({ ...department }))
}

export const getLocations = () => {
    return applicationState.locations.map(location => ({ ...location }))
}

export const getCustomers = () => {
    return applicationState.customers.map(customer => ({ ...customer }))
}

export const getEmployeeCustomers = () => {
    return applicationState.employeeCustomers.map(eC => ({ ...eC }))
}