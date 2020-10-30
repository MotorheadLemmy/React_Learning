import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
//   let posts=[
//     {id:1,message:'hi.how are you?',likesCount:12},
//     {id:2,message:'its my first post hm',likesCount:14},
//     {id:3,message:'ahahah',likesCount:14}
    
// ]
let postsElements=props.posts.map(p=><Post message={p.message} likesCount={p.likesCount} />)
let newPostElement=React.createRef()
let addPost=()=>{
  // let text=newPostElement.current.value
  // props.addPost(text)
  // newPostElement.current.value=''
    props.addPost()

  //props.updateNewPostText('')
}
let onPostChange=()=>{
  let text=newPostElement.current.value
  props.updateNewPostText(text)

}

  return (
    <div className={s.postsBlock}>
       <h3> My Posts</h3>
      <div>
        <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
        <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post /> */}
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;