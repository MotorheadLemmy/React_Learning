import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { addPostActionCreator} from '../../../redux/profile-reducer';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
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

let onAddPost=(values)=>{
   props.addPost(values.newPostText)
  
}
// let onPostChange=()=>{
//   let text=newPostElement.current.value
//   props.updateNewPostText(text)
// }

  return (
    <div className={s.postsBlock}>
       <h3> My Posts</h3>
       <AddNewPostFormRedux onSubmit={onAddPost}/>
      {/* <form>
        <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
        <button onClick={onAddPost}>Add Post</button>
        </div>
      </form> */}
      <div className={s.posts}>
        {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post /> */}
        {postsElements}
      </div>
    </div>
  )
}
const maxLength10=maxLengthCreator(10)
let AddNewPostForm=(props)=>{
  return(
  <form onSubmit={props.handleSubmit}>
  <div>
  <Field component={Textarea} name='newPostText' 
  validate={[required, maxLength10]} placeholder={'Post message'} />
  </div>
  <div>
  <button>Add Post</button>
  </div>
</form>
  )
}

let AddNewPostFormRedux=reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;