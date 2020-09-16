import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <div className="avatar">Аватар</div>
            <div className="decription">Информация о пользователе</div>
        </div>
    )
}

export default ProfileInfo;
