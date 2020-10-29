import React from 'react';
import MyPosts from './My Posts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile=()=>{
    return(
      <div>
        <ProfileInfo />
       
        <MyPosts />
      </div>
    )
}
export default Profile;