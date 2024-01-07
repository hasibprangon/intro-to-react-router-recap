import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    // console.log(post);
    const {id, title} = post;
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p> <Link to={`/post/${id}`}>See more</Link> </p>
            <Link to={`/post/${id}`}><button>Show Detail</button></Link>
        </div>
    );
};

export default Post;