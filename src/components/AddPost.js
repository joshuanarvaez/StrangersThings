import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Button , Radio, RadioGroup, FormControlLabel, FormLabel, formControlClasses} from '@mui/material';
import { Box } from '@mui/system';
import { addPost } from "../api"



const AddPostComponent = ({ token }) => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willingToDeliver, setWillingToDeliver] = useState([true, 'Yes']) 


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("logging data object")
        console.log({
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willingToDeliver[0]

        })
        const data = await addPost({
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willingToDeliver[0]

        }, token)
        // data will be a user token
        if (data) {
            console.log(data)
            navigate("/posts")
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
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    defaultValue=""
                    fullWidth
                    onChange={(event) => { setTitle(event.target.value) }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    defaultValue=""
                    fullWidth
                    onChange={(event) => { setDescription(event.target.value) }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Price"
                    defaultValue=""
                    fullWidth
                    onChange={(event) => { setPrice(event.target.value) }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Location"
                    defaultValue=""
                    fullWidth
                    onChange={(event) => { setLocation(event.target.value) }}
                />
                <RadioGroup row aria-label="will-deliver" defaultValue= "Yes" value={willingToDeliver[1]} onChange={(event) => {event.target.value === 'Yes' ? setWillingToDeliver([true, 'Yes']): setWillingToDeliver([false, 'No'])}} name="row-radio-buttons-group">
                <FormLabel component="legend">Will Deliver?</FormLabel>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" /> 
                </RadioGroup>
                <br />
                <Button fullWidth variant="contained" type="submit" value="Submit">Create</Button>
            </form>
        </Box>
    </>
}
export default AddPostComponent