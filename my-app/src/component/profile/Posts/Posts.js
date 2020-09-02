import React from 'react';
import styles from './Posts.module.css';
import Post from "./post/Post";

const Posts = () => {
  return (
    <div className={styles.content}>
        Мои посты
        <div className="newPost">
            <textarea name="" id="" cols="40" rows="8"></textarea>
            <button>Добавить пост</button>
        </div>
        <Post/>
    </div>
    )
}

export default Posts;
