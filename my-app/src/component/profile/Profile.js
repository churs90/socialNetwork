import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo profilePage={props.profilePage} updateStatus={props.updateStatus}/>
            <hr/>
            <PostsContainer/>
        </div>
    )
};

export default Profile;
