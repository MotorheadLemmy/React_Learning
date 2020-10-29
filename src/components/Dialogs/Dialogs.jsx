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
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem  name='Joe' id='1' />
                <DialogItem  name='MArk' id='2' />
                <DialogItem  name='James' id='3' />
                <DialogItem  name='Kirk' id='4' />
                <DialogItem  name='Lars' id='5' />

            </div>
            <div className={s.messages}>
                <Message message='hi'/>
                <Message message='oh yeah'/>
                <Message message='wow'/>

            </div>
        </div>

    )
}
export default Dialogs;