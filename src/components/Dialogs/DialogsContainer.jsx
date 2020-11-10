import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer=()=>{
   
   
    // let state=props.store.getState().dialogsPage
 
    // let dialogsElements=state.dialogs.map(d=>{
    //    return <DialogItem name={d.name} id={d.id} />
    // });
    // let dialogsElements=props.dialogs.map(d=>{
    //     return <DialogItem name={d.name} id={d.id} />
    //  });
    
    //  let messagesElements=state.messages.map(m=> <Message message={m.message} /> )
    //  let newMessageBody=state.newMessageBody
   
    // let onSendMessageClick=()=>{
    //     props.store.dispatch(sendMessageCreator())

    //  }
    //  let onNewMessageChange=(body)=>{
         
    //      props.store.dispatch(updateNewMessageBodyCreator(body))

    //  }
     
   


    //     [
    //     <DialogItem  name={dialogs[0].name} id={dialogsa[0].id} />,
    //     <DialogItem  name={dialogs[1].name} id={dialogs[1].id}/>
    // ]
    return(
        <StoreContext.Consumer>
            {
            (store)=>{
                //let state=store.getState().dialogsPage
                let onSendMessageClick=()=>{
                    store.dispatch(sendMessageCreator())
            
                 }
                 let onNewMessageChange=(body)=>{
                     
                     store.dispatch(updateNewMessageBodyCreator(body))
            
                 }

       return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
        dialogsPage={store.getState().dialogsPage} />
            }
}

        </StoreContext.Consumer>

    )
}
export default DialogsContainer;