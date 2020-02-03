import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkVp7QvLe1aCpOgG2y66zkUic1kbcyT31sgGi04Hqgy0XrX2pzg&s' />
            { props.message }
            <div>
                <span>{props.likes} Likes</span>
            </div>
        </div>
    );
};
export default Post;