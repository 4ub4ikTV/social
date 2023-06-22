import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {addPost, state} from "./redux/state";

export const renderEntireTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App appState={state} addPost={addPost}/>
    );
}


