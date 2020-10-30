import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs=(props)=>{
    
 
    let dialogsElements=props.state.dialogs.map(d=>{
       return <DialogItem name={d.name} id={d.id} />
    });
    
     let messagesElements=props.state.messages.map(m=> <Message message={m.message} /> )
   


    //     [
    //     <DialogItem  name={dialogs[0].name} id={dialogsa[0].id} />,
    //     <DialogItem  name={dialogs[1].name} id={dialogs[1].id}/>
    // ]
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
               {dialogsElements}

            </div>
            <div className={s.messages}>
                 {/* <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message='wow'/>  */}
                {messagesElements}

            </div>
        </div>

    )
}
export default Dialogs;