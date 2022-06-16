import logo from './logo.svg';
import './App.css';
import React from 'react';
import Chao from './components/Chao';

function App() {
  // return React.createElement('h1', {className:'heading'},'Hi,JSX!');
  //  return  <h1/> 
  //return <h1 className="heading" title="title">Hi, JSX!</h1>

  //return React.createElement(Chao);

  const user = {
    fullName: "Elon Musk",
    avatar: "http://localhost:3000/favicon.ico"
  }
  return <>
    <Chao name={user.fullName} photo={user.avatar} />
    <Chao name="Max Polyakov" />
    <Chao name="Peter Higgc " />
  </>;
}

export default App;
