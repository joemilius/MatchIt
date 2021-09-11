import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./UserManagement/LoginPage"
import Navigation from "./NavBar/Navigation"
import Home from "./Home"
import SoloGame from "./SoloGame/SoloGame"
import VsGame from "./VsGame/VsGame"
import './App.css';


function App() {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState(null)
  
  
  console.log(user)

  
  useEffect(() => {
    fetch("/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
        });
      }
    })
  }, []);


  function handleLogOut() {
    fetch("/logout", { 
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
        <Route path="/vs-game" exact component={() => <VsGame 
                                                        user={user} setUser={setUser} 
                                                        />} />
      </Switch>
      </>
      }
    </Router>
  );
}

export default App;
