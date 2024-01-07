import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postD = useLoaderData();
    console.log(postD);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <h2>Number of post: {postD.id}</h2>
            <p>{postD.body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;