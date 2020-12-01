import profileReducer, { addPostActionCreator,deletePost } from "./profile-reducer";
let state={
  posts:[
      {id:1,message:'hi.how are you?',likesCount:12},
      {id:2,message:'its my first post hm',likesCount:14},
      {id:3,message:'ahahah',likesCount:14}
    ]
}
test('message should be correct',()=>{
  //1 test data
  let action=addPostActionCreator('new post')
 
  //action
  
  let newState=profileReducer(state,action)
  //expectation
  expect(newState.posts.length).toBe(4)
  
})

test('length of posts should be incremented',()=>{
  //1 test data
  let action=addPostActionCreator('new post')
  //action
  
  let newState=profileReducer(state,action)
  //expectation
 
  expect(newState.posts[3].message).toBe('new post')
})

test('after deleting length of messages should be decremented',()=>{
  //1 test data
  let action=deletePost(1)
  //action
  
  let newState=profileReducer(state,action)
  //expectation
 
  expect(newState.posts.length).toBe(2)
})
test('after deleting length should not  be decremented if id incorrect',()=>{
  //1 test data
  let action=deletePost(100)
  //action
  
  let newState=profileReducer(state,action)
  //expectation
 
  expect(newState.posts.length).toBe(3)
})