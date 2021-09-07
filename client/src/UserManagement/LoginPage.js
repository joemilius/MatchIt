import React, {useState} from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Errors from './Errors'


const LoginPage = ({user, setUser, errors, setErrors}) => {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <div>
            {!showSignUp
            ?
            <LoginForm user={user} setUser={setUser} errors={errors} setErrors={setErrors} showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
            :
            <SignUpForm user={user} setUser={setUser} errors={errors} setErrors={setErrors}/>
            }
            {errors && errors.map((err) => (
                <Errors key={err}>{err}</Errors>
            ))}
        </div>
    )
}

export default LoginPage
