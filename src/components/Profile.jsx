import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </div>
            <div>
                ava + descr
			</div>
            <div className={classes.posts}>
                my posts
				<div>
                    new post
				</div>
                <div className={classes.item}>
                    post 1
				</div>
                <div className={classes.item}>
                    post 2
				</div>
            </div>
        </div>
    );
};
export default Profile;