import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
const DialogItem=(props)=>{
    let path='/dialogs/'+props.id;
    return(
    <div className={s.dialog +' '+ s.active}>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}
const Message=(props)=>{
    return(
        <div className={s.dialog}>{props.message}</div>

    )
}
const Dialogs=(props)=>{
    let dialogs=[
        {id:1,name:'Joe'},
        {id:2,name:'Mark'},
        {id:3,name:'James'},
        {id:4,name:'Kirk'},
        {id:5,name:'Lars'},
    ]
    let messages=[
        {id:1,message:'hi'},
        {id:2,message:'oh yeah'},
        {id:3,message:'wow'},
    ]
    let dialogsElements=dialogs.map(d=>{
       return <DialogItem name={d.name} id={d.id} />
    });
    
     let messagesElements=messages.map(m=> <Message message={m.message} /> )
   


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