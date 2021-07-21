import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function ListEmployeeComponent() {
  const history = useHistory();
  const Employee_API_Url = "http://localhost:8080/api/v1/employees";

  const [Employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get(Employee_API_Url).then((res) => {
      console.log(res.data);
      setEmployee(res.data);
    });
  }, []);

  function addEmployee() {
    history.push("/add_employee");
  }

  return (
    <div>
      <h2 className="text-center"> Employee List</h2>
      <div className="row">
        <button
          className="btn btn-primary"
          onClick={() => {
            addEmployee();
          }}
        >
          add Employee
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-borderd">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Employee.map((em) => (
              <tr key={em.id}>
                <td>{em.firstName}</td>
                <td>{em.lastName}</td>
                <td>{em.email}</td>
                <td>{em.firstName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
