
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';




const App = (props) => {
  
  return (
    <BrowserRouter>
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
        state={props.state.profilePage} />}/>
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
