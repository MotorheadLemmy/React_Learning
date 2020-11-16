import React from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, toggleFollowingProgressAC, toggleIsFetchingAC, unfollowAC } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from './../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'


class UsersContainer extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data=>{ 
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount/100)
            })
    }
    onPageChanged=(pageNumber)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        // {withCredentials:true}
        // )

        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data=>{ 
             this.props.toggleIsFetching(false)
             this.props.setUsers(data.items)
            
        })

    }
    render(){
        
        return <>
        {this.props.isFetching ?
        <Preloader />
        
         : null }

         <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}

        
        />
      </>
    }

}

let mapStateToProps=(state)=>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingProgress:(isFetching)=>{
            dispatch(toggleFollowingProgressAC(isFetching))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)