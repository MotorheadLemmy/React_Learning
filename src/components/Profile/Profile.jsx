import React from 'react';
import MyPostsContainer from './My Posts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile=(props)=>{
 
    return(
      <div>
        <ProfileInfo />
       
        <MyPostsContainer 
        store={props.store}
        // posts={props.profilePage.posts} 
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
        />
      </div>
    )
}
export default Profile;