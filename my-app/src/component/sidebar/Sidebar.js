import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
    </nav>
    )
}

export default Sidebar;
