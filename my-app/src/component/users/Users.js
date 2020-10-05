import React from 'react';
import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import {userApi} from "../../api/api";
import {isFetching} from "../../redux/userPageReducer";


let Users = (props) => {
    let pagesArr = [];
    let pagesCounts = Math.ceil(props.usersPage.totalCount / props.usersPage.pageSize);
    for (let i = 1; i <= pagesCounts; i++) {
        pagesArr.push(i);
    }

    let pages = pagesArr.map((p) => <span onClick={() => props.changeCurrentPage(p)}
                                          className={props.usersPage.currentPage === p ? styles.selectedPage : ""}> {p}</span>);


    let users = props.usersPage.users.map((u) => <div className={styles.usersWrapper}>
        <div className={styles.avaBlock}>
            <div className={styles.ava}>
                <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
                </NavLink>
            </div>
            <div>
                {u.followed ? <button disabled={props.usersPage.followingProgress.some(f =>f===u.id)} onClick={() => {
                        props.unFollow(u.id)
                    }}>unFollow</button> :
                    <button disabled={props.usersPage.followingProgress.some(f =>f===u.id)} onClick={() => {
                        props.follow(u.id)
                    }}>follow</button>}
            </div>
        </div>
        <div className={styles.discriptionBlock}>
            <div>
                <p>{u.name}</p>
                <p className={styles.status}>{u.status}</p>
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
    </div>);
    return (
        <div>
            <h1>Users</h1>
            {pages}
            {users}
        </div>
    )

}

export default Users;
