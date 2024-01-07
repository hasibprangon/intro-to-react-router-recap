import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    // console.log(post);
    const {id, title} = post;
    const navigate = useNavigate();

    const handleNevigation = () => {
            navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p> <Link to={`/post/${id}`}>See more</Link> </p>
            <Link to={`/post/${id}`}><button>Show Detail</button></Link>
            <button onClick={handleNevigation}>With Button Handler</button>
        </div>
    );
};

export default Post;