import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControls/FormsControls'
import s from './ProfileInfo.module.css'
import style from '../../common/FormsControls/FormsControls.module.css'

 const ProfileDataForm=({handleSubmit,profile,error})=>{
    return <form onSubmit={handleSubmit}>
     <div><button>save</button></div>
     {error && <div className={style.formSummaryError}>
                {error}
            </div>}

        
   <div>
    <b> FullName</b>:<Field placeholder={'Full name'} name={'fullName'} 
                validate={[]}
                component={Input} />
   </div>
     <div>
    <b> Looking for a job</b>:
    <Field type={'checkbox'} name={'lookingForAJob'} component={Input} validate={[]}/>
     </div>
     
       <div>
       <b> My Professional skills</b>
       <Field name={'lookingForAJobDescription'} component={Textarea} validate={[]} placeholder={'My Professional skills'}/>
        </div>
        <div>
    <b>About me</b>:  <Field name={'aboutMe'} component={Textarea} validate={[]} placeholder={'About me'}/>
     </div>

     
   
     <div>
    <b>Contacts</b>:{Object.keys(profile.contacts).map(key=>{
      return <div key={key} className={s.contact}>
          <b>{key}:<Field placeholder={key} name={'contacts.'+key} 
                validate={[]}
                component={Input} />
   </b>
           </div> 
     }  )}       
     </div> 
   </form>
    
}
const ProfileDataFormReduxForm=reduxForm({form:'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm
