import React from 'react';

import c from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts post={props.state.posts} addPost={props.addPost} newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export {Profile};