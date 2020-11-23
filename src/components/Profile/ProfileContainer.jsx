import React from 'react';
import MyPostsContainer from './My Posts/MyPostsContainer';
import Profile from './Profile';
import s from './Profile.module.css';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
 componentDidMount(){
   let userId=this.props.match.params.userId
   if(!userId){
     userId=this.props.authorizedUserId
     if(!userId){
       this.props.history.push('/login')
     }
   }
   this.props.getUserProfile(userId)
   this.props.getStatus(userId)
//    usersAPI.getProfile(userId)
//    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
//   .then(response=>{ 
//     this.props.setUserProfile(response.data)
    
// })

 }
  render() {
   // if(!this.props.isAuth) return <Redirect to={'/login'} />
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} 
        updateStatus={this.props.updateStatus}/>
      </div>
    )
  }
}
// let AuthRedirectComponent=(props)=>{
//   if(!this.props.isAuth) return <Redirect to={'/login'} />
//   return <ProfileContainer {...props}  />
// }


//let AuthRedirectComponent=withAuthRedirect(ProfileContainer)



// let mapStateToPropsForRedirect=(state)=>({
//   isAuth:state.auth.isAuth
//   })

//   AuthRedirectComponent=connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let mapStateToProps=(state)=>({
profile:state.profilePage.profile,
status:state.profilePage.status,
authorizedUserId:state.auth.userId,
isAuth:state.auth.isAuth
//isAuth:state.auth.isAuth
})

 //let WithUrlDataContainerComponent=withRouter(ProfileContainer)


// let AuthRedirectComponent=withAuthRedirect(ProfileContainer)




// let WithUrlDataContainerComponent=withRouter(AuthRedirectComponent)
 //export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);

export default compose(
connect(mapStateToProps,{getUserProfile,getStatus,updateStatus}),
withRouter)
(ProfileContainer)
