import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Preloader from './Components/Preloader/preloader';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import { initializeApp} from './redux/app-Reducer';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
}
  render() {
    if(!this.props.initialized) {
      return <Preloader/>
    }
      
    return(
      <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <Route path='/dialogs' render={() => <DialogsContainer />} />
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/users' render={() => <UsersContainer />} />
      <Route path='/login' render={()=> <LoginPage/>}></Route>
    </div>
    )
  }
}

let mapStateToProps = (state) =>({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp}))(App)

// export default connect(null, { getAuthUserData})(App);

