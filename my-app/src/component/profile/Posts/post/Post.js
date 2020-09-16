import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post}>
        <img src="https://i.ya-webdesign.com/images/user-avatar-png-7.png" alt=""/>
        <span>{props.message}</span><br/>
        <span> like {props.like}</span>
    </div>
    )
}

export default Post;
