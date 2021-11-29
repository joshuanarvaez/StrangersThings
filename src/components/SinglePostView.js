// this component is what the user will see when they click on the post. Will be similar to message form. 
import React, {useEffect, useState} from "react"
import { useParams } from "react-router"
import { TextField, Button } from "@mui/material"
import { getSinglePost } from '../api'

const SinglePostView = ({ posts, token }) => {
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
    }, [post])


    return <>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>Price: ${post.price}</p>
        <p>Location: {post.location}</p>
    { post.isAuthor ? 
    <>
    <button>Edit</button>
    <button>Delete</button>
    </>
     : null}        
        
    </>
}

export default SinglePostView