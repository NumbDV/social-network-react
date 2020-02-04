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

    let dialogs = [
        {id: 1, name: 'Den'},
        {id: 2, name: 'Marta'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Jonh'},
        {id: 5, name: 'Daynerys'},
        {id: 6, name: 'Tyrion'}
    ];
    let messages = [
        {id: 1, message: 'Hop'},
        {id: 2, message: 'Hey'},
        {id: 3, message: 'Lalaley'},
        {id: 4, message: 'Ya propil'},
        {id: 5, message: 'vseh'},
        {id: 6, message: 'druzey'}
    ];
    let dialogsElements = dialogs
        .map( d => <DialogItem name={d.name} id={d.id} /> )

    /*[ выше функция map которая перебирает все элементы в данных
        <DialogItem name={dialogs[1].name} id={dialogs[1].id} />,
        <DialogItem name={dialogs[2].name} id={dialogs[2].id} />,
        <DialogItem name={dialogs[3].name} id={dialogs[3].id} />
    ];*/
    let messageElements = messages
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