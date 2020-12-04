import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

let Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,users,...props}) => {
   
    return (
        <div>
            {/* <div>
                {pages.map(p => {
                    return <span className={props.currentPage == p ? styles.selectedPage : styles.notselectedPage}
                        onClick={(e) => {props.onPageChanged(p) }}>{p}</span>
                })}

            </div> */}
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
             pageSize={pageSize}  totalItemsCount={totalUsersCount} />
            {
                users.map(u => <User user={u} key={u.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                     />
                // <div key={u.id}>
                //     <span>
                //         <div>
                //             <NavLink to={'/profile/'+u.id}>
                //          <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                //          </NavLink>
                //         </div>
                //         <div>
                //             {u.followed
                //                 ? <button  disabled={props.followingInProgress.some(id=>id===u.id)}
                //                  onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                //                     // props.toggleFollowingProgress(true,u.id)
                //                     // usersAPI.unfollow(u.id)
                //                     // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                //                     // { withCredentials:true,
                //                     // headers:{
                //                     //     "API-KEY":"db286642-ef58-47cb-9bf4-9afa84f2111e"
                //                     // } }
                //                     //  )
                //                     //  .then(response=>{ 
                //                     //      if(response.data.resultCode==0){
                //                     //          props.ufollow(u.id)
                //                     //      }
                //                     //      props.toggleFollowingProgress(false,u.id)
                //                     //  })

                                     
                //                 : <button disabled={props.followingInProgress.some(id=>id===u.id)}
                                 
                //                     onClick={() => { props.follow(u.id) }}>Follow</button>}


                //                     {/* props.toggleFollowingProgress(true,u.id)
                //                     usersAPI.follow(u.id)
                //                     .then(response=>{ 
                //                         if(response.data.resultCode==0){
                //                             props.follow(u.id)
                //                         }
                //                         props.toggleFollowingProgress(false,u.id)
                //                     })
                //                  }}>Follow</button>} */}

                //         </div>
                //     </span>
                //     <span>
                //         <span>
                //             <div>{u.name}</div>
                //             <div>{u.status}</div>
                //         </span>
                //         <span>
                //             <div>{'u.location.country'}</div>
                //             <div>{'u.location.city'}</div>
                //         </span>
                //     </span>

                // </div>
                )
            }
        </div>)

}
export default Users