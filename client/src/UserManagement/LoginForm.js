import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
const LoginForm = ({user, setUser, errors, setErrors, showSignUp, setShowSignUp}) => {
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
                response.json()
                .then((user) => {
                    setUser(user)
                });
            } else {
                response.json().then((err) => {
                    console.log(err)
                    // setErrors(err.errors)
                });
                }
        });
    }

    return (
        <div className="login">
            <Form onSubmit={loginSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control className='inputbox' name="username" value={loginData.username} placeholder="ex. TwinkleToes" onChange={handleLogin}></Form.Control>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='inputbox' name="password" value={loginData.password} placeholder="ex. 1234" onChange={handleLogin}></Form.Control>
                </Form.Group>
                <style type="text/css">
                    {`
                    .btn-custom {
                        background-color: #FFFAFA;
                        color: #66CDAA;
                    }
                    .btn-custom:hover {
                        background-color: #CD853F;
                        color: #66CDAA
                        border: .2em solid #66CDAA;
                    }
                    
                    `}
                </style>
                <Button variant='custom' type='submit'>Login</Button>
                <Button variant='custom' onClick={()=> setShowSignUp(true)}>SignUp</Button>
            </Form>
        </div>
    )
}

export default LoginForm
