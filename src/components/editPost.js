import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { editPost } from '../api'


const EditPost = ({ setToken }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(true)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await editPost(title, description, price, location, willDeliver)

        if (data) {
            setToken(data)
        }
    }

    return <>

        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" onChange={(event) => { setTitle(event.target.value) }} />
            </label>
            <label>
                Description:
                <input type="text" onChange={(event) => { setDescription(event.target.value) }} />
            </label>
            <label>
                Price:
                <input type="text" onChange={(event) => { setPrice(event.target.value) }} />
            </label>
            <label>
                Location:
                <input type="text" onChange={(event) => { setLocation(event.target.value) }} />
            </label>
            <label>
                Will Deliver:
                <input type="checkbox" onChange={(event) => { setWillDeliver(event.target.value) }} />
            </label>
            <input type="submit"> Create Post </input>
        </form>
    </>

}


export default EditPost