import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';


export default function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    
  <Route path="/" element = {<Home/>} />
  <Route path="/sign-in" element = {<SignIn/>} />
  <Route path="/sign-up" element = {<SignUp/>} />
  <Route path="/about" element = {<About/>} />
  <Route element = {<PrivateRoute/>} >
    <Route path="/profile" element = {<Profile/>} />
  </Route>

  </Routes>
  </BrowserRouter>)
}
