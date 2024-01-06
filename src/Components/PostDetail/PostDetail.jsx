import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const postD = useLoaderData();
    console.log(postD);
    return (
        <div>
            <h2>{postD.id}</h2>
           <p>{postD.body}</p>
        </div>
    );
};

export default PostDetail;