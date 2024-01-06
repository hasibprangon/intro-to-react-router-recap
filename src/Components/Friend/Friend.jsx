import React from 'react';
import './Friend.css'
const Friend = ({friend}) => {
    console.log(friend);
    const {id, name, email, phone} = friend;
    return (
        <div className='friend'>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <small>Phone:{phone}</small>
        </div>
    );
};

export default Friend;