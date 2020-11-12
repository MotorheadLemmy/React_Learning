
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';




const App = (props) => {
 
  
  return (
   
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Route path='/dialogs' component ={Dialogs} />
        <Route path='/profile' component={Profile} /> */}

          <Route path='/dialogs' render={()=> <DialogsContainer
         
          // messages={props.state.dialogsPage.messages}
          // dialogs={props.state.dialogsPage.dialogs} 
          // dispatch={props.dispatch} 
          // newMessageBody={props.state.dialogsPage.newMessageBody}
          // store={props.store}
           />} />
        <Route path='/profile' render={()=><Profile 
        // posts={props.state.profilePage.posts} />} />
        // 

        // store={props.store}
        />}/>
        <Route path='/users' render={()=><UsersContainer /> }/>
      </div>
    </div>
    
  );
}


export default App;
