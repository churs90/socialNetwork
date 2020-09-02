import React from 'react';
import styles from './App.module.css';
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Profile from "./component/profile/Profile";

const App = () => {
  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles.wrapper}>
         <Sidebar/>
         <Profile/>
      </div>
    </div>
    )
}

export default App;
