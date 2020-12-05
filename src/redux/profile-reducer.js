import { profileAPI, usersAPI } from "../api/api"

//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE='SET_USER_PROFILE'
const SET_STATUS='SET_STATUS'
const DELETE_POST='DELETE_POST'
const SAVE_PHOTO_SUCCESS='SAVE_PHOTO_SUCCESS'

let initialState={
    posts:[
        {id:1,message:'hi.how are you?',likesCount:12},
        {id:2,message:'its my first post hm',likesCount:14},
        {id:3,message:'ahahah',likesCount:14}
        
      ],
      //newPostText:'awesome',
      profile:null,
      status:''
  }

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
      case ADD_POST:
          let newPost = {
              id: 5,
              message: action.newPostText,
              likesCount: 0
          }
          return {
            ...state,
            posts:[...state.posts,newPost],
            newPostText: '',
          }
      // case UPDATE_NEW_POST_TEXT:
      //     return {
      //       ...state,
      //       newPostText: action.newText

      //     }
          case SET_USER_PROFILE:{
            return{
              ...state,profile:action.profile
            }
          }
          case SET_STATUS:{
            return{
              ...state,status:action.status
            }

          }
          case DELETE_POST:{
            return {...state,posts:state.posts.filter(p=>
            p.id!=action.postId)}

          }
          case SAVE_PHOTO_SUCCESS:{
            return {...state,profile:{...state.profile, photos:action.photos}}

          }
      default:
          return state
  }


}

export const addPostActionCreator=(newPostText)=>{
    return{
      type:ADD_POST,newPostText
    }
  }
  export const deletePost=(postId)=>{
    return{
      type:DELETE_POST,postId
    }
  }
  // export const updateNewPostTextActionCreator=(text)=>{
    
  //   return{
  //     type:UPDATE_NEW_POST_TEXT, newText:text
  //   }
  // }
   const setUserProfile=(profile)=>{
    
    return{
      type:SET_USER_PROFILE, profile
    }
  }

  export const setStatus=(status)=>{
    return{
    type:SET_STATUS,status
    }
  }
   export const savePhotoSuccess=(photos)=>{
    return{
      type:SAVE_PHOTO_SUCCESS,photos
    }
  }

  export const getUserProfile=(userId)=>{
    return (dispatch)=>{
      usersAPI.getProfile(userId)
      .then(response=>{ 
        dispatch(setUserProfile(response.data))
      })
  }
}

export const getStatus=(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId)
    .then(response=>{ 
      dispatch(setStatus(response.data))
    })
}
export const updateStatus=(status)=>(dispatch)=>{
  profileAPI.updateStatus(status)
  .then(response=>{ 
    if(response.data.resultCode===0){
    dispatch(setStatus(status))
    }
  })
}
export const savePhoto=(file)=>(dispatch)=>{
  profileAPI.savePhoto(file)
  .then(response=>{ 
    if(response.data.resultCode===0){
    dispatch(savePhotoSuccess(response.data.data.photos))
    }
  })
}


export default profileReducer




// const profileReducer=(state,action)=>{
 
//     if(action.type===ADD_POST){
//         let newPost={
//           id:5,
//           message:state.newPostText,
//           likesCount:0
//       }
//       state.posts.push(newPost)
//       state.newPostText=''

//       }else if(action.type===UPDATE_NEW_POST_TEXT){
//         state.newPostText=action.newText

//       }
//     return state
// }

// const profileReducer = (state=initialState, action) => {
//   switch (action.type) {
//       case ADD_POST:{
//           let newPost = {
//               id: 5,
//               message: state.newPostText,
//               likesCount: 0
//           }
//           let stateCopy={...state}
//           stateCopy.posts=[...state.posts]
//           stateCopy.posts.push(newPost)
//           stateCopy.newPostText = ''
//           return stateCopy
//           // state.posts.push(newPost)
//           // state.newPostText = ''
//           // return state
//         }
//       case UPDATE_NEW_POST_TEXT:{
//           let stateCopy={...state}
//            stateCopy.newPostText = action.newText
//            return stateCopy
//           // state.newPostText = action.newText
//           // return state
//       }
//       default:
//           return state
//   }


// }