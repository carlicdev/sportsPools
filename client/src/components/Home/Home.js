import React from 'react'
import LoginForm from '../UserForms/LoginForm'
import SignupForm from '../UserForms/SignupForm'

const Home = () => {
    return (
        <div>
            <h1>Hello from Home</h1>
            <LoginForm />
            <SignupForm />
        </div>
    )
}

export default Home
