import React from 'react';

import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog + ' ' + c.active}>
                    <NavLink to="/messages/1">Orest</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/messages/2">Nadia</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/messages/3">Vlad</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/messages/4">Nazar</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/messages/5">Vira</NavLink>
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Hi</div>
                <div className={c.message}>How is your it-kamasutra?</div>
                <div className={c.message}>Bye!</div>
            </div>
        </div>
    );
};

export {Dialogs};