import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Errors from './Errors'

const LoginPage = ({user, setUser, errors, setErrors}) => {
    return (
        <div>
            <LoginForm user={user} setUser={setUser} errors={errors} setErrors={setErrors}/>
            <SignUpForm user={user} setUser={setUser} errors={errors} setErrors={setErrors}/>
            {errors.map((err) => (
                <Errors key={err}>{err}</Errors>
            ))}
        </div>
    )
}

export default LoginPage
