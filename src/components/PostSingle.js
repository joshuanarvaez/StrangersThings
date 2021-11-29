// we may want to make 2 post components (PostSingle and PostView). We need to pass the data from the API through them.
import { useNavigate } from 'react-router';
import React from 'react';

const PostSingle = ({ post, children }) => {
    const navigate = useNavigate()
    return <>
        <a href="#" onClick={ () => {navigate('/posts/view/' + post._id)}}><h2>{post.title}</h2></a>
        <p>{post.description}</p>
        <p>Price: ${post.price}</p>
        <p>Location: {post.location}</p>
        <div>
        {
            children
        }
        </div>
    </>
}

export default PostSingle

