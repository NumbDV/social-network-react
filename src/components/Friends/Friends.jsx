import React from "react";
import styles from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    /*let friendsProfiles = props.state.friends.map( f => <Friend url={f.url} name={f.name} />)*/
    return (
        <div className={styles.block}>
            {/*{friendsProfiles}*/}
            <Friend />

        </div>
    );
}
export default Friends;