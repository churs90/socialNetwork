import React from 'react';
import styles from './Posts.module.css';
import Post from "./post/Post";

const Posts = (props) => {

    let addPost = () => {
        props.addPost();
    };

    let onChangePostText = (e) => {
        let newText = e.currentTarget.value;
        props.onChangePostText(newText)
    }
    let postsElement = props.profilePage.postsData.map(p => <Post message={p.message} like={p.like}/>);

    return (
        <div className={styles.content}>
            Мои посты
            <div className="newPost">
                <textarea value={props.profilePage.postText} onChange={onChangePostText} name="" id="" cols="40"
                          rows="8"></textarea>
                <button onClick={addPost}>Добавить пост</button>
            </div>
            {postsElement}
        </div>
    )
}

export default Posts;
