import React, {useState} from 'react'

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
        <div>
            <form onSubmit={userSubmit}>
                <h5>Required</h5>
                <label>Username</label>
                <input name="username" value={userData.username} placeholder="ex. johnsmith2237" onChange={handleCreateUser}></input>
                <label>Password</label>
                <input name="password" value={userData.password} placeholder="ex. 12345678" onChange={handleCreateUser}></input>
                <label>Email</label>
                <input name="email" value={userData.profile_attributes.email} placeholder="johnsmith@gmail.com" onChange={handleCreateProfile}></input>
                <h5>Optional</h5>
                <label>First Name</label>
                <input name="first_name" value={userData.profile_attributes.first_name} placeholder="John" onChange={handleCreateProfile}></input>
                <label>Last Name</label>
                <input name="last_name" value={userData.profile_attributes.last_name} placeholder="Smith" onChange={handleCreateProfile}></input>
                <label>Phone Number</label>
                <input name="phone_number" value={userData.profile_attributes.phone_number} placeholder="0000000000" onChange={handleCreateProfile}></input>
                <label>Profile Picture</label>
                <input name="image" value={userData.profile_attributes.image} placeholder="Enter Url Here" onChange={handleCreateProfile}></input>
                <button>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp
