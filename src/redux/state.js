const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
const ADD_POST='ADD-POST'
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE='SEND-MESSAGE'
let store={
  _state:{
    profilePage:{
      posts:[
          {id:1,message:'hi.how are you?',likesCount:12},
          {id:2,message:'its my first post hm',likesCount:14},
          {id:3,message:'ahahah',likesCount:14}
          
        ],
        newPostText:'awesome'
   

    },
    dialogsPage:{
      messages:[
          {id:1,message:'hi'},
          {id:2,message:'oh yeah'},
          {id:3,message:'wow'},
        ],
        dialogs:[
          {id:1,name:'Joe'},
          {id:2,name:'Mark'},
          {id:3,name:'James'},
          {id:4,name:'Kirk'},
          {id:5,name:'Lars'},
        ],
        newMessageBody:''

    }
  
},
_callSubscriber(){
  console.log('state was changed')
},
getState(){
  return this._state
},
subscribe(observer){
  this._callSubscriber=observer
 },

dispatch(action){
  if(action.type===ADD_POST){
    let newPost={
      id:5,
      message:this._state.profilePage.newPostText,
      likesCount:0
  }
  this._state.profilePage.posts.push(newPost)
  this._state.profilePage.newPostText=''
  this._callSubscriber(this._state)
  }else if(action.type===UPDATE_NEW_POST_TEXT){
    this._state.profilePage.newPostText=action.newText
    this._callSubscriber(this._state)
  }else if(action.type===UPDATE_NEW_MESSAGE_BODY){
    this._state.dialogsPage.newMessageBody=action.body
    this._callSubscriber(this._state)
  }else if(action.type===SEND_MESSAGE){
    let body=this._state.dialogsPage.newMessageBody
    this._state.dialogsPage.newMessageBody=''
    this._state.dialogsPage.messages.push({id:6,message:body})
    this._callSubscriber(this._state)
  }
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

export const sendMessageCreator=()=>{
  return{
    type:SEND_MESSAGE
  }
}
export const updateNewMessageBodyCreator=(body)=>{
  
  return{
    type:UPDATE_NEW_MESSAGE_BODY, body:body
  }
}




  // window.state=state;
//  export let addPost=(postMessage)=>{
//       let newPost={
//           id:5,
//           message:postMessage,
//           likesCount:0
//       }
//       state.profilePage.posts.push(newPost)
//       rerenderEntireTree(state)
//   }
// export const addPost=()=>{
//     let newPost={
//         id:5,
//         message:state.profilePage.newPostText,
//         likesCount:0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText=''
//     rerenderEntireTree(state)
// }

//   export const updateNewPostText=(newText)=>{
//     state.profilePage.newPostText=newText
//     rerenderEntireTree(state)
// }
// export const subscribe=(observer)=>{
//   rerenderEntireTree=observer
// }
window.store=store;
  export default store;
  