import React from 'react';
import ReactDOM from 'react-dom/client';

import {state, subscribe} from "./redux/state";
import './index.css';
import App from './App';
import {addDialog, addPost, updateNewDialogText, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderEntireTree = (state) => {
    root.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
             updateNewDialogText={updateNewDialogText} addDialog={addDialog}/>
    );
}


renderEntireTree(state)

subscribe(renderEntireTree)


