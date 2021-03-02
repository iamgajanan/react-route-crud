import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/UserInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Contact}></Route>
          {/* <Route exact path="/new" component={New}></Route> */}
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/user/add" component={AddUser}></Route>
          <Route exact path="/user/edit/:id" component={EditUser}></Route>
          <Route exact path="/user/:id" component={User}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
