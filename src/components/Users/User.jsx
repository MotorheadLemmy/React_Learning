import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

let User = ({user,followingInProgress,unfollow,follow}) => {
    
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/'+user.id}>
                         <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                         </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button  disabled={followingInProgress.some(id=>id===user.id)}
                                 onClick={() => {unfollow(user.id) }}>UnFollow</button>
                                    // props.toggleFollowingProgress(true,u.id)
                                    // usersAPI.unfollow(u.id)
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    // { withCredentials:true,
                                    // headers:{
                                    //     "API-KEY":"db286642-ef58-47cb-9bf4-9afa84f2111e"
                                    // } }
                                    //  )
                                    //  .then(response=>{ 
                                    //      if(response.data.resultCode==0){
                                    //          props.ufollow(u.id)
                                    //      }
                                    //      props.toggleFollowingProgress(false,u.id)
                                    //  })

                                     
                                : <button disabled={followingInProgress.some(id=>id===user.id)}
                                 
                                    onClick={() => {follow(user.id) }}>Follow</button>}


                                    {/* props.toggleFollowingProgress(true,u.id)
                                    usersAPI.follow(u.id)
                                    .then(response=>{ 
                                        if(response.data.resultCode==0){
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false,u.id)
                                    })
                                 }}>Follow</button>} */}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
                </div>)

}
export default User