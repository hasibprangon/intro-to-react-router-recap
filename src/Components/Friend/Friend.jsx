import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    // console.log(friend);
    const {id, name, email, phone} = friend;
    return (
        <div className='friend'>
            <h2>{name}</h2>
            <p> <Link to={`/friend/${id}`}>See more</Link> </p>
        </div>
    );
};

export default Friend;