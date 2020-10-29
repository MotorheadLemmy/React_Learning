import React from 'react';
import s from './ProfileInfo.module.css';
const ProfileInfo=(props)=>{
    return(
      <div>
        <div className={s.main_image}>
        <img src='https://izobrazhenie.net/uploads/photos/show/1454_814448875.jpg' />
        </div>
        <div className={s.descriptionBlock}>
          ava+desc
        </div>
        
      </div>
    )
}
export default ProfileInfo;