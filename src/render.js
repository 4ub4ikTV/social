import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {addDialog, addPost, updateNewDialogText, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderEntireTree = (state) => {
    root.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewDialogText={updateNewDialogText} addDialog={addDialog}/>
    );
}


