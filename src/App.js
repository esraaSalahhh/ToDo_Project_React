import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';
import Routes from "./Routes";
import Login from "./Login/Login";
import Register from "./Register/Register";



function App() {
  return (
    <Router>
   <Routes />
   </Router>

  );
}

export default App;
