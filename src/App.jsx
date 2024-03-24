import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import './index.css'; // Adjust the path based on your file structure
import './App.css';
import AddTodos from './components/AddTodos';
import ShowTodos from './components/ShowTodos';
import { Navbar } from './components/Navbar.jsx';
import { Signup } from './components/Signup.jsx';
import { Signin } from './components/Signin.jsx';
import { StartPage } from './components/StartPage.jsx';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user.js';
import axios from 'axios';

function App() {

  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <InitUser />
        <Routes>
          <Route path={'/'} element={<StartPage/>}></Route>
          <Route path={"/signup"} element={<Signup />}></Route>
          <Route path={"/signin"} element={<Signin />}></Route>
          <Route path={"/addTodos"} element={<AddTodos />}></Route>
          <Route path={"/showTodos"} element={<ShowTodos />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

function InitUser() {
  const setUser = useSetRecoilState(userState);

  const init = async () => {
    try{
      const resp = await axios.get('http://localhost:3000/me',{
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })
      if (resp.data.username) {
        setUser({
          isLoading: false,
          username: resp.data.username
        })
        // console.log(resp.data.username);
      } else {
        setUser({
          isLoading: false,
          username: null
        })
        // console.log(resp);
      }
    } catch {
      setUser({
        isLoading: false,
        username: null
      })
  }
}
useEffect(() => {
  init()
},[])

return <></>
}

export default App
