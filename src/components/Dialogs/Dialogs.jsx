import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name='Den' id='1'/>
                <DialogItem name='Valera' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Marta' id='4'/>
                <DialogItem name='John' id='5'/>
            </div>
            <div className={styles.messages}>
                <Message message='Hop'/>
                <Message message='Hey'/>
                <Message message='Lalaley'/>
            </div>
        </div>
    );
}
export default Dialogs;