import React, {useEffect, useState} from "react"
import { useParams } from "react-router"
import { TextField, Button } from "@mui/material"
import {sendMessage} from '../api'

const MessageForm = ({ posts, token }) => {
    const [message, setMessage] = useState('')
    const [post, setPost] = useState({})

    let { id } = useParams()
    
    useEffect(() => {
        const getPost = async () => {
            let current = await posts.find((post) => {
                return post._id === id
            })

            setPost(current)
        }

        getPost()
    }, [post, id, posts])


    // console.log(currentpost.title)
    const handleSubmit = async (event) => {
        event.preventDefault();
        
       const data = await sendMessage(id, token, message)
       console.log(data)

    }

    return <>
        {/* <h2>{post.title}</h2> */}
        <h3>Message User About Post</h3>
        <form onSubmit={handleSubmit}>
            <TextField
                required
                id="outlined-required"
                label="Message"
                defaultValue=""
                fullWidth
                onChange={ (event) => { setMessage(event.target.value)}}
            />
            <br />
            <Button fullWidth variant="contained" type="submit" value="Submit">Submit</Button>
        </form>
    </>
}

export default MessageForm