import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import Header from "./components/Header";
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListEmployeeComponent}></Route>
            <Route
              exact
              path="/employees"
              component={ListEmployeeComponent}
            ></Route>
            <Route
              exact
              path="/add_employee"
              component={CreateEmployee}
            ></Route>
            <Route
              exact
              path="/update_employee/:id"
              component={UpdateEmployee}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
