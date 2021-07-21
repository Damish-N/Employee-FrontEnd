import axios from "axios";

const Employee_API_Url = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(Employee_API_Url);
  }
}

export default new EmployeeService();
