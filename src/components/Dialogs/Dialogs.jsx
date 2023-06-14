import React from 'react';
import {NavLink} from "react-router-dom";

import c from './Dialogs.module.css'

const DialogItem = (props) => {

    const path = "/messages/" + props.id

    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {

    return (
        <div className={c.message}>{props.message}</div>
    )
}

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

const dialogElements = dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
const messageElements = message.map(m => <Message message={m.message}/>)

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export {Dialogs};