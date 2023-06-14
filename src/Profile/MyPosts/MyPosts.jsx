import React from 'react';

import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

const postData = [
    {message : "Hi how are you", like : "0"},
    {message : "Its my first project", like : "23"}
]

const MyPosts = () => {
    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                <Post message={postData[0].message} like={postData[0].like}/>
                <Post message={postData[1].message} like={postData[1].like}/>
            </div>

        </div>
    );
};

export {MyPosts};