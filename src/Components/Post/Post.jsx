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
        </div>
    );
};

export default Post;