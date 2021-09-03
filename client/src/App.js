import React, {useState, useEffect} from "react"
import LoginPage from "./UserManagement/LoginPage"
import './App.css';

function App() {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState(null)
  

  
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
        });
      }
    })
  }, []);

  function handleLogOut() {
    fetch("/logout", { method: "DELETE"}).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    })
  }

  return (
    <div className="App">
      <LoginPage user={user} setUser={setUser} errors={errors} setErrors={setErrors}/>
    </div>
  );
}

export default App;
