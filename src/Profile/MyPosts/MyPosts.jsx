import React from 'react';

import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

const MyPosts = (props) => {

    const postElements = props.post.map(p => <Post message={p.message} like={p.like}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        const text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postElements}
            </div>

        </div>
    );
};

export {MyPosts};