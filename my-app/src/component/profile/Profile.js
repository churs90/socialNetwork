import React from 'react';
import styles from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className="avatar">Аватар</div>
      <div className="decription">Информация о пользователе</div>
        <hr/>
      <Posts/>
    </div>
    )
}

export default Profile;
