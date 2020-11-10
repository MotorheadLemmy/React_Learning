const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
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
let initialState={
    posts:[
        {id:1,message:'hi.how are you?',likesCount:12},
        {id:2,message:'its my first post hm',likesCount:14},
        {id:3,message:'ahahah',likesCount:14}
        
      ],
      newPostText:'awesome'
 

  }

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

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
      case ADD_POST:
          let newPost = {
              id: 5,
              message: state.newPostText,
              likesCount: 0
          }
          return {
            ...state,
            posts:[...state.posts,newPost],
            newPostText: '',
          }
      case UPDATE_NEW_POST_TEXT:
          return {
            ...state,
            newPostText: action.newText

          }
      default:
          return state
  }


}

export const addPostActionCreator=()=>{
    return{
      type:ADD_POST
    }
  }
  export const updateNewPostTextActionCreator=(text)=>{
    
    return{
      type:UPDATE_NEW_POST_TEXT, newText:text
    }
  }
export default profileReducer