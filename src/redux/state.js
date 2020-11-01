let rerenderEntireTree=()=>{
console.log('state was changed')
}



  let state={
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

      }
    

  }
  window.state=state;
//  export let addPost=(postMessage)=>{
//       let newPost={
//           id:5,
//           message:postMessage,
//           likesCount:0
//       }
//       state.profilePage.posts.push(newPost)
//       rerenderEntireTree(state)
//   }
export const addPost=()=>{
    let newPost={
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
}

  export const updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}
export const subscribe=(observer)=>{
  rerenderEntireTree=observer
}
  export default state;
  //df