import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";


let initialState={
    userData:{
        id:null,
        login:null,
        email: null
    },
    isAuth: false
};
let AuthReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_USER_DATA:
            let stateCopy = {...state};
            stateCopy.userData = {...state.userData};
            stateCopy.userData.id = action.userData.data.id;
            stateCopy.userData.login = action.userData.data.login;
            stateCopy.userData.email = action.userData.data.email;
            stateCopy.isAuth = action.isAuth;
            return stateCopy;
        default: return state;
    }
};

export const setUserDataSucces = (userData,isAuth) => {
    return {
        type: SET_USER_DATA,
        isAuth,
        userData
    }
};

export const setUserData = () => {
    return (dispatch) => {
       return authApi.getAuth().then((data) => {
            if(data.resultCode===0){
                dispatch(setUserDataSucces(data,true))
            }
        });
    }
};

export  const login = (email,password,rememberMe=false) => {
    return (dispatch) => {
        authApi.loginUser(email,password,rememberMe).then((data) =>{
            if(data.resultCode===0) {
                dispatch(setUserData())
            } else {
                dispatch(stopSubmit("Login",{_error:data.messages[0]}))
            }
        })
    }
};

export  const logout = () => {
    return (dispatch) => {
        authApi.logoutUser().then((data) =>{
            if(data.resultCode===0) {
                let userData = {data:{id:null,login:null, email:null}};
                dispatch(setUserDataSucces(userData,false))
            }
        })
    }
};



export default AuthReducer;