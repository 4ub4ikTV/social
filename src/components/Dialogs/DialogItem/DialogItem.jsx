import {NavLink} from "react-router-dom";
import React from "react";

import c from "./../Dialogs.module.css";

const DialogItem = (props) => {

    const path = "/messages/" + props.id

    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export {DialogItem}