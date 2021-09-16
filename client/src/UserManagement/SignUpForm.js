import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const SignUp = ({user, setUser, errors, setErrors}) => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        profile_attributes: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            image: ""
        }
    })

    function handleCreateUser(event) {
        setUserData({...userData, 
            [event.target.name] : event.target.value})
    }

    function handleCreateProfile(event) {
        setUserData({...userData,
        profile_attributes:{
            ...userData.profile_attributes, 
            [event.target.name] : event.target.value
        }})
    }


    function userSubmit(event) {
    event.preventDefault()
    fetch("/signup", {
        method: "POST",
        headers: {
        "Content-Type": "Application/json"
        },
        body: JSON.stringify(userData)
    }).then((resp) => {
        if (resp.ok) {
            resp.json().then((user) => setUser(user));
        } else {
            resp.json().then((err) => {
                console.log(err)
                setErrors(err.errors)
            });
        }
    })
}

    return (
        <div className="signup">
            <Form onSubmit={userSubmit}>
                <h5 className="formheading">Required</h5>
                <Form.Group className='mb-3'>
                    <Form.Label column sm='2'>Username</Form.Label>
                    <Form.Control className='inputbox' type="username" value={userData.username} placeholder="ex. johnsmith2237" onChange={handleCreateUser}></Form.Control>
                    <Form.Label column sm='2'>Password</Form.Label>
                    <Form.Control className='inputbox' type="password" value={userData.password} placeholder="ex. 12345678" onChange={handleCreateUser}></Form.Control>
                    <Form.Label>Email</Form.Label>
                    <Form.Control className='inputbox' type="email" value={userData.profile_attributes.email} placeholder="johnsmith@gmail.com" onChange={handleCreateProfile}></Form.Control>
                </Form.Group>
                <h5 className="formheading">Optional</h5>
                <Form.Group className='mb-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className='inputbox' type="first_name" value={userData.profile_attributes.first_name} placeholder="John" onChange={handleCreateProfile}></Form.Control>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className='inputbox' type="last_name" value={userData.profile_attributes.last_name} placeholder="Smith" onChange={handleCreateProfile}></Form.Control>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control className='inputbox' type="phone_number" value={userData.profile_attributes.phone_number} placeholder="0000000000" onChange={handleCreateProfile}></Form.Control>
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control className='inputbox' type="image" value={userData.profile_attributes.image} placeholder="Enter Url Here" onChange={handleCreateProfile}></Form.Control>
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
                <Button variant='custom' type='submit'>SignUp</Button>
            </Form>
        </div>
    )
}

export default SignUp
