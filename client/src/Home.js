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

    function handleEditProfile(event) {
        setProfileData({...profileData,
            [event.target.name] : event.target.value
        })
    }

    function handleSubmitProfile(){
        setShowForm(false)
        fetch(`/profiles/${user.profile.id}`, {
            method:"PATCH",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(profileData)
        })
        .then(response => response.json())
        .then(data => setProfileData({
            first_name: '',
            last_name: '',
            email: '',
            phone_number: ''
        }))
    }

    return (
        <div className="home">
            {showForm
            ?
            <Form onSubmit={handleSubmitProfile}>
            <Form.Group className='mb-3'>
                <Form.Label>First Name</Form.Label>
                <Form.Control className='inputbox' type="first_name" value={profileData.first_name} onChange={handleEditProfile}></Form.Control>
                <Form.Label>Last Name</Form.Label>
                <Form.Control className='inputbox' type="last_name" value={profileData.last_name} placeholder={user.profile.last_name} onChange={handleEditProfile}></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control className='inputbox' type="email" value={profileData.email} placeholder={user.profile.email} onChange={handleEditProfile}></Form.Control>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control className='inputbox' type="phone_number" value={profileData.phone_number} placeholder={user.profile.phone_number} onChange={handleEditProfile}></Form.Control>
            </Form.Group>
            <style type="text/css">
            {`
            .btn-custom {
                background-color: #FFFAFA;
                color: #66CDAA;
                margin: 1em;
            }
            .btn-custom:hover {
                background-color: #CD853F;
                color: #66CDAA
                border: .2em solid #66CDAA;
            }
            
            `}
            </style>
            <Button variant='custom' type='submit'>Submit Edit</Button>
            <Button variant='custom' onClick={() => setShowForm(false)}>Back to Profile</Button>
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
