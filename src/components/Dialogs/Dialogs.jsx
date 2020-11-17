import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';


const Dialogs=(props)=>{
   
   
    let state=props.dialogsPage
 
    let dialogsElements=state.dialogs.map(d=>{
       return <DialogItem name={d.name} id={d.id} key={d.id} />
    });
    // let dialogsElements=props.dialogs.map(d=>{
    //     return <DialogItem name={d.name} id={d.id} />
    //  });
    
     let messagesElements=state.messages.map(m=> <Message message={m.message} key={m.id} /> )
     let newMessageBody=state.newMessageBody
     //let messagesElements=props.messages.map(m=> <Message message={m.message} /> )
     //let newMessageBody=props.newMessageBody
    //  let onSendMessageClick=()=>{
    //     props.dispatch(sendMessageCreator())

    //  }
    //  let onNewMessageChange=(e)=>{
    //      let body=e.target.value
    //      props.dispatch(updateNewMessageBodyCreator(body))

    //  }
    let onSendMessageClick=()=>{
        //props.store.dispatch(sendMessageCreator())
        props.sendMessage()

     }
     let onNewMessageChange=(e)=>{
         let body=e.target.value
        //  props.store.dispatch(updateNewMessageBodyCreator(body))
        props.updateNewMessageBody(body)

     }
     
   


    //     [
    //     <DialogItem  name={dialogs[0].name} id={dialogsa[0].id} />,
    //     <DialogItem  name={dialogs[1].name} id={dialogs[1].id}/>
    // ]

    if(props.isAuth) return <Redirect to={'/login'} />

    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
           
               {dialogsElements}

            </div>
            <div className={s.messages}>
                 {/* <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message='wow'/>  */}
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='Enter message' onChange={onNewMessageChange} value={newMessageBody}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>

            </div>
        </div>

    )
}
export default Dialogs;