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

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name="Orest" id="1"/>
                <DialogItem name="Nadia" id="2"/>
                <DialogItem name="Vlad" id="3"/>
                <DialogItem name="Nazar" id="4"/>
                <DialogItem name="Vira" id="5"/>
            </div>
            <div className={c.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Bye!"/>
            </div>
        </div>
    );
};

export {Dialogs};