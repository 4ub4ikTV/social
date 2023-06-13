import React from 'react';

import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message = "Hi how are you" like = "0"/>
                <Post message = "Its my first project" like = "23"/>
            </div>

        </div>
    );
};

export {MyPosts};