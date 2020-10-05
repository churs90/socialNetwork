import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../assets/FormContols/FormControls";
import {maxLength, required} from "../../utils/validate/validate";
import {login} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from "./../../assets/FormContols/FormControls.module.css"



let maxLengthValidate=maxLength(30);


let FormLoginPage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>login:<Field type="text" component={Input} name={"email"} validate={[required,maxLengthValidate]}/></div>
            <div>password:<Field type="password" component={Input} name={"password"} validate={[required,maxLengthValidate]}/></div>
            <div><label><Field type="checkbox" component={Input} name={"rememberMe"}/>remember me</label></div>
            {props.error &&
                <div className={styles.errorForm}>{props.error}</div>
            }
            <div><button>click</button></div>
        </form>
    )
};

let ReduxFormLoginPage = reduxForm({form:"Login"})(FormLoginPage);

let LoginPage = (props) =>{
    let onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe);
    };
    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>login</h1>
            <ReduxFormLoginPage onSubmit={onSubmit}/>
        </div>
    )
};

let mapStateToProps = (state) =>{
    return {
      isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps,{login})(LoginPage) ;