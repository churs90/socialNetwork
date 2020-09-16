const ON_CHANGE_POST_TEXT = "ON-CHANGE-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState={
    postsData: [
        {message: "How are you?", like: 12},
        {message: "Where are you from?", like: 18},
        {message: "Where are you from?", like: 23},
        {message: "Where are you from?", like: 11},
        {message: "How are you?", like: 122},
    ],
    postText: ""
}
let profilePageReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_POST:
        {
            let newPostArr = {
                message: state.postText,
                like: 13
            };
            state.postsData.push(newPostArr);
            state.postText = '';
            return state;
        }
        case ON_CHANGE_POST_TEXT:
        {
            state.postText = action.newText;
            return state;
        }
        default: return state;
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    }
};

export const onChangePostTextAC = (newText) => {
    return {
        newText, type: ON_CHANGE_POST_TEXT
    }
};

export default profilePageReducer;