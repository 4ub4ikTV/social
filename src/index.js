import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const post = [
    {message: "Hi how are you", like: "0"},
    {message: "Its my first project", like: "23"}
]

const dialog = [
    {id: 1, name: "Orest"},
    {id: 2, name: "Nadia"},
    {id: 3, name: "Vlad"},
    {id: 4, name: "Nazar"},
    {id: 5, name: "Vira"},
]

const message = [
    {message: "Hi"},
    {message: "How is your it-kamasutra?"},
    {message: "Bye!"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App post={post} dialog={dialog} message={message}/>
);
