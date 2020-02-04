import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 55},
        {id: 2, message: "It's my first post", likesCount: 66}
    ]
    let postsElemenets = posts
        .map( p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={styles.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                { postsElemenets }
            </div>
        </div>
    );
};
export default MyPosts;