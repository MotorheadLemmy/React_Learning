
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';




const App = (props) => {
  
  return (
   
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Route path='/dialogs' component ={Dialogs} />
        <Route path='/profile' component={Profile} /> */}

          <Route path='/dialogs' render={()=> <Dialogs
          //  dialogs={props.state.dialogsPage.dialogs}
          //   messages={props.state.dialogsPage.messages} />} />
          state={props.state.dialogsPage} />}  />
        <Route path='/profile' render={()=><Profile 
        // posts={props.state.profilePage.posts} />} />
        profilePage={props.state.profilePage} 
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}/>}/>
      </div>
    </div>
    
  );
}


export default App;
