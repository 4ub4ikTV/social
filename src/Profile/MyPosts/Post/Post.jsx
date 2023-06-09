import React from 'react';

import c from './Post.module.css'

const Post = () => {
    return (
        <div className={c.item}>
            <img src="https://i.pinimg.com/736x/f4/c0/11/f4c011cb0105849da55b7de26cf10657.jpg" alt=""/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export {Post};