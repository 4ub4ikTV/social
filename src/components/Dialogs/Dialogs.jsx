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

const dialogData = [
    {id: 1, name: "Orest"},
    {id: 2, name: "Nadia"},
    {id: 3, name: "Vlad"},
    {id: 4, name: "Nazar"},
    {id: 5, name: "Vira"},
]

const messageData = [
    {message: "Hi"},
    {message: "How is your it-kamasutra?"},
    {message: "Bye!"}
]
const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name = {dialogData[0].name} id = {dialogData[0].id}/>
                <DialogItem name = {dialogData[1].name} id = {dialogData[1].id}/>
                <DialogItem name = {dialogData[2].name} id = {dialogData[2].id}/>
                <DialogItem name = {dialogData[3].name} id = {dialogData[3].id}/>
                <DialogItem name = {dialogData[4].name} id = {dialogData[4].id}/>
            </div>
            <div className={c.messages}>
                <Message message = {messageData[0].message}/>
                <Message message = {messageData[1].message}/>
                <Message message = {messageData[2].message}/>
            </div>
        </div>
    );
};

export {Dialogs};