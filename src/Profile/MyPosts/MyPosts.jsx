import React from 'react';

import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

const MyPosts = (props) => {

    const postElements = props.post.map(p => <Post message={p.message} like={p.like}/>)

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