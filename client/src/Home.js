import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

const Home = ({user}) => {
    const [showForm, setShowForm] = useState(false)
    const [profileData, setProfileData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: ''
    })

    console.log(user)

    function handleEditProfile(){
        setShowForm(false)
        fetch(`/profiles/${user.id}`, {
            method:"PATCH",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(profileData)
        })
    }

    return (
        <div className="home">
            {showForm
            ?
            <Form>
            <Form.Group className='mb-3'>
                <Form.Label>First Name</Form.Label>
                <Form.Control className='inputbox' type="first_name" value={profileData.first_name} placeholder="John" onChange={handleEditProfile}></Form.Control>
                <Form.Label>Last Name</Form.Label>
                <Form.Control className='inputbox' type="last_name" value={profileData.last_name} placeholder="Smith" onChange={handleEditProfile}></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control className='inputbox' type="email" value={profileData.email} placeholder="johnsmith@gmail.com" onChange={handleEditProfile}></Form.Control>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control className='inputbox' type="phone_number" value={profileData.phone_number} placeholder="0000000000" onChange={handleEditProfile}></Form.Control>
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
            <Button variant='custom' type='submit'>Submit Edit</Button>
            </Form>
            :
            <>
                <h2>{user.username}</h2>
                <h3>Profile</h3>
                <h4>Frist Name: {user.profile.first_name}</h4>
                <h4>Last Name: {user.profile.last_name}</h4>
                <h4>Email: {user.profile.email}</h4>
                <h4>Phone Number: {user.profile.phone_number}</h4>
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
                <Button variant='custom' onClick={() => setShowForm(true)}>Edit Profile</Button>
            </>
            }
        </div>
    )
}

export default Home
