import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  return (
    <div className={s.postsBlock}>
       <h3> My Posts</h3>
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='hi.how are you?' likescount='10' />
        <Post message='it is my first post' likescount='4' />
        <Post />
      </div>
    </div>
  )
}
export default MyPosts;