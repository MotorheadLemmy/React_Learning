import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';


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
  
    // let onSendMessageClick=()=>{
    //     props.sendMessage()

    //  }
    //  let onNewMessageChange=(e)=>{
    //      let body=e.target.value

    //     props.updateNewMessageBody(body)

    //  }
     let addNewMessage=(values)=>{
         props.sendMessage(values.newMessageBody)
     }
     
   


    //     [
    //     <DialogItem  name={dialogs[0].name} id={dialogsa[0].id} />,
    //     <DialogItem  name={dialogs[1].name} id={dialogs[1].id}/>
    // ]

    //if(props.isAuth) return <Redirect to={'/login'} />

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
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>

    )
}
const maxLength50=maxLengthCreator(50)
const AddMessageForm=(props)=>{
    return(
    <form onSubmit={props.handleSubmit}>
    <div>
        <Field component={Textarea} name='newMessageBody'
         placeholder='Enter your message'
         validate={[required,maxLength50]} />
        </div>
    <div><button>Send</button></div>
   </form>
    )
}
const AddMessageFormRedux=reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;