import React from 'react';

import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

const post = [
    {message: "Hi how are you", like: "0"},
    {message: "Its my first project", like: "23"}
]

const postElements = post.map(p => <Post message={p.message} like={p.like}/>)

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
                {postElements}
            </div>

        </div>
    );
};

export {MyPosts};