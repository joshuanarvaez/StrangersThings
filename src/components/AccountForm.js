import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser, registerUser } from '../api'
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

// this component will handle logging in a user, logging out and registering a user
const RegisterComponent = ({ setToken, setLoginView }) => {
  
    const navigate = useNavigate()
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await registerUser(username, password)
        // data will be a user token
        if (data) {
            setToken(data)
            navigate('/posts')
        }

        //else throw an error!
    }

    return <>
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    fullWidth
                    defaultValue=""
                    onChange={(event) => { setUsername(event.target.value) }}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    fullWidth
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                <TextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    onChange={(event) => { setPassword2(event.target.value) }}
                />
                <Button fullWidth variant="contained" type="submit" value="Submit">Submit</Button>
                <a onClick={(event) => { setLoginView(true) }}>Already have an account? Log In</a>
            </form>
        </Box>
    </>

}

const AccountForm = ({ setToken, user, setUser }) => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginView, setLoginView] = useState(true)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await loginUser(username, password)
        // data will be a user token

        if (data) {
            setToken(data)
            navigate('/posts')
        }

        //error should be thrown if data is not valid
    }

    return <>
        {
            loginView ?
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            defaultValue=""
                            fullWidth
                            onChange={(event) => { setUsername(event.target.value) }}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            fullWidth
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        <Button fullWidth variant="contained" type="submit" value="Submit">Submit</Button>
                        <a onClick={(event) => { setLoginView(false) }}>Don't have an account? Sign Up</a>
                    </form>
                </Box> :
                <RegisterComponent setToken={setToken} setLoginView={setLoginView} />
        }
    </>
}

export default AccountForm