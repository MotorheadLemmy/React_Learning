
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
         
          // messages={props.state.dialogsPage.messages}
          // dialogs={props.state.dialogsPage.dialogs} 
          // dispatch={props.dispatch} 
          // newMessageBody={props.state.dialogsPage.newMessageBody}
          store={props.store}
           />} />
        <Route path='/profile' render={()=><Profile 
        // posts={props.state.profilePage.posts} />} />
        profilePage={props.state.profilePage} 
        dispatch={props.dispatch}/>}/>
      </div>
    </div>
    
  );
}


export default App;
