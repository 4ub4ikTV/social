import React from 'react';

import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

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
                <Post message="Hi how are you" like="0"/>
                <Post message="Its my first project" like="23"/>
            </div>

        </div>
    );
};

export {MyPosts};