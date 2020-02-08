import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef() // создает ссылку на элемент

    let addPost = () =>  {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={styles.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea> {/*привязываем ссылку к этому элементу*/}
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                { postsElements }
            </div>
        </div>
    );
};
export default MyPosts;