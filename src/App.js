
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';




const App = (props) => {
 
  
  return (
   
    <div className='app-wrapper'>
      <HeaderContainer />
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
        <Route path='/profile/:userId?' render={()=><ProfileContainer 
        // posts={props.state.profilePage.posts} />} />
        // 

        // store={props.store}
        />}/>
        <Route path='/users' render={()=><UsersContainer /> }/>
        <Route path='/login' render={()=><Login /> }/>
      </div>
    </div>
    
  );
}


export default App;
