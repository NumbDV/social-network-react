import React from "react";
import styles from '../Dialogs.module.css';

const Message = (props) => {
    let newMessageElement = React.createRef();
    let writeMessage = () => {
        let msg = newMessageElement.current.value;
    }
    return (
        <div>
            <div className={styles.message}>{props.message}</div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={ writeMessage }>Write message</button>
            </div>
        </div>

    );
}

export default Message;