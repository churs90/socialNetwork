import React from 'react';
import {onChangeMessageBodyAC, onSendMessageTextAC} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

    const mapStateToProps = (state) => {
        return {
            dialogPage:state.dialogPage
        }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            onChangeMessageBody: (messageBody) =>{dispatch(onChangeMessageBodyAC(messageBody))},
            onSendMessage: () => {dispatch(onSendMessageTextAC())}
        }
    };

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
