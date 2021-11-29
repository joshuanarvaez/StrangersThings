import { popoverClasses } from "@mui/material"
import React, { useState } from 'react'


export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const COHORT_NAME = '2108-UIC-RM-WEB-PT'
export const API_URL = BASE_URL + COHORT_NAME

// down here is where your api calls will be

export const getPosts = async (token) => {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

        const data = await response.json()
        return data.data.posts

    } catch (error) {
        throw error
    }

}


export const loginUser = async (usernameFromForm, passwordFromForm) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: usernameFromForm,
                    password: passwordFromForm
                }
            })
        })

        const token = await response.json()
        console.log("this is token in API ", token)
        return token.data.token

    } catch (error) {
        throw error
    }

}

export const registerUser = async (usernameFromForm, passwordFromForm) => {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: usernameFromForm,
                    password: passwordFromForm
                }
            })
        })

        const token = await response.json()
        return token.data.token

    } catch (error) {
        throw error
    }

}
export const getUser = async (token) => {
    if (token === '') {
        return {}
    }

    console.log("this is the token in get User")
    console.log(token)
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

        const data = await response.json()
        return data.data

    } catch (error) {
        throw error
    }
}

export const sendMessage = async (postId, token, messageFromUser) => {
    try {
        const response = await fetch(`${API_URL}/posts/${postId}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                message: {
                    content: messageFromUser
                }
            })
        })

        const data = await response.json()
        return data.data.message

    }
    catch (error) {
        throw error
    }
}

// when doing delete method, you can pass POST-ID to function.
export const Delete = ({ posts, setPosts, postId, setPostId, token }) => {
    const handleDelete = async () => {
        // event.preventDefault();
        const response = await fetch(`${API_URL}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);;
    }

    return <a onClick={handleDelete}>DELETE</a>

}

export const addPost = async (addPost, token) => {
    try {
        const response = await fetch(`${API_URL}/posts/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                post: {
                    title: addPost.title,
                    description: addPost.description,
                    price: addPost.price,
                    willDeliver: addPost.willDeliver
                }
            })
        })

        const data = await response.json()
        console.log(data)
        return data.data

    }
    catch (error) {
        throw error
    }
}


export const Update = ({ posts, setPosts, postId, setPostId, token }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    const [editView, setEditView] = useState(false)

    const handleEdit = async (event) => {
        event.preventDefault()
        const response = await fetch(`${API_URL}/posts/${postId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    location: location,
                    willDeliver: willDeliver
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
    }

    const handleChange = (eventValue, inputIndex) => {
        if (inputIndex === 0) {
            setTitle(eventValue.target.value)
        } else if (inputIndex === 1) {
            setDescription(eventValue.target.value)
        } else if (inputIndex === 2) {
            setPrice(eventValue.target.value)
        } else if (inputIndex === 3) {
            setLocation(eventValue.target.value)
        } else if (inputIndex === 4) {
            setWillDeliver(eventValue.target.value)
        }
    }

    const editViewFunc = () => {
        setEditView(true)
    }

    return <> {editView === false ?
        <button onClick={editViewFunc}>EDIT</button> :
        <form onSubmit={handleEdit} >
        <input type="text" placeholder="title" value={title}
            onChange={(event) => handleChange(event, 0)}>
        </input>
        <input type="text" placeholder="description" value={description}
            onChange={(event) => handleChange(event, 1)}>
        </input>
        <input type="text" placeholder="price" value={price}
            onChange={(event) => handleChange(event, 2)}>
        </input>
        <input type="text" placeholder="location" value={location}
            onChange={(event) => handleChange(event, 3)}>
        </input>
        <input type="checkbox" placeholder="Delivery available?" value={willDeliver}
            onChange={(event) => handleChange(event, 4)}>
        </input>

        <button type="submit">
            Submit
        </button>
    </form>
    }
    </>
}








