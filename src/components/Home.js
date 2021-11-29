import React from "react";
import { Link } from 'react-router-dom'

const Home = ({user}) => {
    return (
        <div>
            <h1> Welcome to Stranger's Things!</h1> 
            {
                 Object.keys(user).length > 0 ?
                <div>
                <h2>Logged in as {user.email}</h2>
                <Link to="/profile">View Profile</Link>
                </div> : null
            }
        </div>
    )
}

export default Home
