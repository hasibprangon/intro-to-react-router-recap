import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h2>{friend.username}</h2>
            <p>Email:{friend.email}</p>
            <small>Phone: {friend.phone}</small>
        </div>
    );
};

export default FriendDetail;