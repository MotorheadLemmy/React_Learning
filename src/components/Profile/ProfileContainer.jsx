import React from 'react';
import MyPostsContainer from './My Posts/MyPostsContainer';
import Profile from './Profile';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import * as axios from 'axios'
import {getUserProfile} from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
 componentDidMount(){
   let userId=this.props.match.params.userId
   if(!userId){
     userId=2
   }
   this.props.getUserProfile(userId)
//    usersAPI.getProfile(userId)
//    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
//   .then(response=>{ 
//     this.props.setUserProfile(response.data)
    
// })

 }
  render() {
    if(!this.props.isAuth) return <Redirect to={'/login'} />
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}
// let AuthRedirectComponent=(props)=>{
//   if(!this.props.isAuth) return <Redirect to={'/login'} />
//   return <ProfileContainer {...props}  />
// }
let AuthRedirectComponent=withAuthRedirect(ProfileContainer)

// let mapStateToPropsForRedirect=(state)=>({
//   isAuth:state.auth.isAuth
//   })

//   AuthRedirectComponent=connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let mapStateToProps=(state)=>({
profile:state.profilePage.profile,
//isAuth:state.auth.isAuth
})

// let WithUrlDataCountainerComponent=withRouter(ProfileContainer)


//let AuthRedirectComponent=withAuthRedirect(ProfileContainer)




// let WithUrlDataCountainerComponent=withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps,{getUserProfile})(WithUrlDataCountainerComponent);

export default compose(
connect(mapStateToProps,{getUserProfile}),
withRouter,
withAuthRedirect
)
(ProfileContainer)