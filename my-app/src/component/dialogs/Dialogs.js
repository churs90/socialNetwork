import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./dialog/Dialog";
import Message from "./message/Message";



const Dialogs = (props) => {

    let dialogElements = props.dialogPage.dialogsData.map(d=><DialogItem name={d.name} id={d.id} ava={d.ava}/>);
    let messagesElements = props.dialogPage.messagesData.map(m=><Message message={m.message}/>);

    let onSendMessage = () => {
        props.onSendMessage()
    }

    let onChangeMessageBody = (e) => {
        props.onChangeMessageBody(e.target.value)
    }
  return (
    <div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
            {dialogElements}
        </div>
        <div className={styles.messages}>
            {messagesElements}
            <div>
                <div><textarea value={props.dialogPage.messageBody} placeholder={"введите текст"} onChange={onChangeMessageBody}></textarea></div>
                <div><button onClick={onSendMessage}>отправить сообщение</button></div>
            </div>
        </div>
    </div>
    )
}

export default Dialogs;
