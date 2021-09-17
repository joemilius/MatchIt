import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

const Home = ({user, refresh, setRefresh}) => {
    const [showForm, setShowForm] = useState(false)
    const [profileData, setProfileData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: ''
    })

    console.log(profileData)

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
        .then(data => {
            setProfileData({
            first_name: '',
            last_name: '',
            email: '',
            phone_number: ''
            })
            setRefresh(!refresh)
    })
    }

    return (
        <div className="home">
            {showForm
            ?
            <Form onSubmit={handleSubmitProfile}>
            <Form.Group className='mb-3'>
                <Form.Label>First Name: {user.profile.first_name}</Form.Label>
                <Form.Control className='inputbox' name="first_name" value={profileData.first_name} onChange={handleEditProfile}></Form.Control>
                <Form.Label>Last Name: {user.profile.last_name}</Form.Label>
                <Form.Control className='inputbox' name="last_name" value={profileData.last_name} onChange={handleEditProfile}></Form.Control>
                <Form.Label>Email: {user.profile.email}</Form.Label>
                <Form.Control className='inputbox' name="email" value={profileData.email} onChange={handleEditProfile}></Form.Control>
                <Form.Label>Phone Number: {user.profile.phone_number}</Form.Label>
                <Form.Control className='inputbox' name="phone_number" value={profileData.phone_number} onChange={handleEditProfile}></Form.Control>
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
