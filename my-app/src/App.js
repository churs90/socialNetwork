import React from 'react';
import styles from './App.module.css';
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Profile from "./component/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./component/dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header state={props.state}/>
                <div className={styles.wrapper}>
                    <Sidebar stateSidebarPage={props.state.sidebarPage}/>
                    <div className={styles.wrapperContent}>
                        <Route path={"/profile"} render={() => <Profile/>}/>
                        <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
