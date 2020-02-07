import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogs
        .map( d => <DialogItem name={d.name} id={d.id} /> )

    /*[ выше функция map которая перебирает все элементы в данных
        <DialogItem name={dialogs[1].name} id={dialogs[1].id} />,
        <DialogItem name={dialogs[2].name} id={dialogs[2].id} />,
        <DialogItem name={dialogs[3].name} id={dialogs[3].id} />
    ];*/
    let messageElements = props.messages
        .map(m => <Message message={m.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messageElements }
            </div>
        </div>
    );
}
export default Dialogs;