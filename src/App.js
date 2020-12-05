
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
//import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp} from './redux/app-reducer';

import { getAuthUserData} from './redux/auth-reducer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialized){
    return <Preloader/>
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() =>{
            return <Suspense fallback={<Preloader />}>
           <DialogsContainer /> 
           </Suspense> }} />
          <Route path='/profile/:userId?' render={() => {
          return <Suspense fallback={<Preloader />}><ProfileContainer /> 
          </Suspense>}} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>

    );
  }
}

const mapStateToProps=(state)=>{
  return{
    initialized:state.app.initialized
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps,{initializeApp}))
  (App);
