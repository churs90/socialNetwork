import React from 'react';
import {addPostAC, onChangePostTextAC} from "../../../redux/profilePageReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onChangePostText: (newText) => {
            dispatch(onChangePostTextAC(newText))
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
