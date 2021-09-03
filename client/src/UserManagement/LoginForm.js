import React, {useState} from 'react'

const LoginForm = ({user, setUser, errors, setErrors}) => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleLogin(event) {
        setLoginData({...loginData,
            [event.target.name] : event.target.value
        })
    }

    function loginSubmit(e){
        e.preventDefault()
        fetch("/login",  {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(loginData),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    setUser(user)
                });
            } else {
                response.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div>
            <form onSubmit={loginSubmit}>
                <label>Username</label>
                <input name="username" value={loginData.username} placeholder="ex. TwinkleToes" onChange={handleLogin}></input>
                <label>Password</label>
                <input name="password" value={loginData.password} placeholder="ex. 1234" onChange={handleLogin}></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm
