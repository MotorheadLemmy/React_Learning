import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
//addPost('samuraj')
export let rerenderEntireTree=(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      {/* <App posts={posts} messages={messages} dialogs={dialogs}/> */}
      <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );

}