import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            my posts
				<div>
                    <textarea></textarea>
                    <button>Add post</button>
				</div>
            <Post message='Hi, how are you?' likes = '55' />
            <Post message="It's my first post" likes = '66' />
        </div>
    );
};
export default MyPosts;