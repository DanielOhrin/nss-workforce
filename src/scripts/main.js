import { fetchComputers, fetchEmployees, fetchDepartments, fetchLocations, fetchCustomers, fetchEmployeeCustomers } from "./dataAccess.js"
import { WorkForce } from "./workforce.js"

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchComputers()
    .then(() => fetchEmployees())
    .then(() => fetchDepartments())
    .then(() => fetchLocations())
    .then(() => fetchCustomers())
    .then(() => fetchEmployeeCustomers())
    .then(
        () => {
            mainContainer.innerHTML = WorkForce()
        }
    )
}

renderHTML()

mainContainer.addEventListener(
    "stateChanged",
    event => {
        renderHTML()
    }
)