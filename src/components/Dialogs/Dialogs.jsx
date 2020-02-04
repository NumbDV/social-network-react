import React from "react";
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    Den
                </div>
                <div className={styles.dialog}>
                    Valera
                </div>
                <div className={styles.dialog}>
                    Sveta
                </div>
                <div className={styles.dialog}>
                    Marta
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hop</div>
                <div className={styles.message}>Hey</div>
                <div className={styles.message}>Lalaley</div>
            </div>
        </div>
    );
}
export default Dialogs;