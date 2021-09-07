import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./UserManagement/LoginPage"
import Navigation from "./NavBar/Navigation"
import Home from "./Home"
import SoloGame from "./SoloGame/SoloGame"
import './App.css';


function App() {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState(null)
  console.log(user)

  
  useEffect(() => {
    fetch("http://localhost:3000/me", {method: "GET", credentials: "include"})
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
        });
      }
    })
  }, []);

  function handleLogOut() {
    fetch("http://localhost:3000/logout", { 
      method: "DELETE"})
      .then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    })
  }

  return (
    <Router>
      <Navigation user={user} handleLogOut={handleLogOut}/>
      {!user
      ?
      <LoginPage user={user} setUser={setUser} errors={errors} setErrors={setErrors}/>
      :
      <>
      <Switch>
        <Route path="/" exact component={() => <Home user={user} handleLogOut={handleLogOut}/>} /> 
      </Switch>
      <Switch>
        <Route path="/solo-game" exact component={() => <SoloGame user={user}/>} />
      </Switch>
      <Switch>
        {/* <Route path="/signup" exact component={() => <SignUp
                                                        handleLogOut={handleLogOut} 
                                                        user={user} setUser={setUser} 
                                                        errors={errors}
                                                        setErrors={setErrors}/>} /> */}
      </Switch>
      </>
      }
    </Router>
  );
}

export default App;
