import React from 'react';

import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const Dialogs = (props) => {

    const dialogElements = props.state.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageElements = props.state.message.map(m => <Message message={m.message}/>)

    const newDialogElement = React.createRef()

    const addMessage = () => {
        props.addDialog()
    }

    const onDialogChange = () => {
        const text = newDialogElement.current.value
        props.updateNewDialogText(text)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {messageElements}
                <div>
                    <textarea ref={newDialogElement} value={props.state.newDialogText} onChange={onDialogChange}/>
                    <button onClick={addMessage}>Add Message</button>
                </div>

            </div>

        </div>
    );
};

export {Dialogs};