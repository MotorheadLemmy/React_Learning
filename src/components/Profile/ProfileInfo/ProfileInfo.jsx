import React,{useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm';
const ProfileInfo=({profile,status,updateStatus,isOwner,savePhoto,saveProfile})=>{
  let [editMode,setEditMode]=useState(false)



  if(!profile){
    return <Preloader/>
  }
  const onMainPhotoSelected=(e)=>{
    if(e.target.files.length){
      savePhoto(e.target.files[0])

    }
  }
  const onSubmit=(formData)=>{
   saveProfile(formData).then(
      ()=>{
       setEditMode(false)
    })
  
    
}  
// const onSubmit=(formData)=>{
//   saveProfile(formData)
// } 
  
    return(
      <div>
        {/* <div className={s.main_image}>
        <img src='https://izobrazhenie.net/uploads/photos/show/1454_814448875.jpg' />
        </div> */}
        <div className={s.descriptionBlock}>
          <img src={profile.photos.large || userPhoto } />
          {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
          {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileData profile={profile}
           isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}
         
      



          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}  />
        </div>
      </div>
    )
}
const ProfileData=({profile, isOwner,goToEditMode})=>{
  return(
    
    <div>
     {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
     <b> FullName</b>:{profile.fullName}
    </div>
      <div>
     <b> Looking for a job</b>:{profile.lookingForAJob ? 'yes' :'no'}
      </div>
      {profile.lookingForAJob &&
        <div>
        <b> My Professional skills</b>:{profile.lookingForAJobDescription}
         </div>
      }
      <div>
     <b>About me</b>:{profile.aboutMe}
      </div>
      <div>
     <b>Contacts</b>:{Object.keys(profile.contacts).map(key=>{
       return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> 
      }  )}       
      </div> 
    </div>

  )
}

const Contact=({contactTitle,contactValue})=>{
  return <div className={s.contact}><b>{contactTitle}</b> :{contactValue} </div>
}
export default ProfileInfo;