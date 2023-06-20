import React from 'react';

import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const Dialogs = (props) => {

    const dialogElements = props.state.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageElements = props.state.message.map(m => <Message message={m.message}/>)

    const textArea = React.createRef()

    const addMessage = () => {
        const textMessage = textArea.current.value
        alert(textMessage)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {messageElements}
                <div>
                    <textarea ref={textArea}></textarea>
                    <button onClick={addMessage}>Add Message</button>
                </div>

            </div>

        </div>
    );
};

export {Dialogs};