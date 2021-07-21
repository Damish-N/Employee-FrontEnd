import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function UpdateEmployee() {
  let { id } = useParams();
  console.log("oras-" + id);
  const Employee_API_Url = "http://localhost:8080/api/v1/employee/" + id;
  const EmployeeUpdate_API_Url = "http://localhost:8080/api/v1/employees";
  const history = useHistory();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    axios.get(Employee_API_Url).then((res) => {
      console.log(res.data);
      setState({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
      });
    });
  }, []);

  function changeTheName(e) {
    const vak = e.target.value;
    setState({
      ...state,
      [e.target.name]: vak,
    });
    console.log(e.target.value);
  }

  function saveEmploye(e) {
    e.preventDefault();
    let employee = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
    };
    console.log(JSON.stringify(employee));
    axios.put(Employee_API_Url, employee).then((res) => {
      history.push("/");
    });
  }

  function BacktoHome() {
    history.push("/");
  }

  return (
    <div>
      <button className="btn btn-secondary mt-2">Back</button>

      <div className="container">
        <div className="row-cols-auto">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={state.firstName}
                    onChange={changeTheName}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={state.lastName}
                    onChange={changeTheName}
                  ></input>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={state.email}
                      onChange={changeTheName}
                    ></input>
                  </div>
                </div>
                <button className="btn btn-success" onClick={saveEmploye}>
                  {" "}
                  Update{" "}
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "20px" }}
                  onClick={BacktoHome}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
