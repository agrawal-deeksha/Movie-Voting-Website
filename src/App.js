import './App.css';
import React from 'react'
import {BrowserRouter,Route} from "react-router-dom"
import LandingPage from './components/LandingPage'
import SignIn from './components/login'
import NavBar from './components/navbar'
import SignUp from './components/signup'
import Profile from './components/Profile'
import Leaderboard from './components/Leaderboard'

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/" component={SignUp}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/home" component={LandingPage}/>
      <Route exact path="/leaderboard" component={Leaderboard}/>
      <Route path="/movie/:id" component={MovieDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
