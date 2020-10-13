import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router,Redirect,Route,Switch, HashRouter,useHistory} from 'react-router-dom';
import Header from './Header';
import Chats from './Chats';
import Profile from './Profile';
import ChatScreen from './ChatScreen';
import './App.css';
import LoginNReg from './LoginNReg';
import axios from 'axios';
import Home from './Home';
import ErrorBoundry from './ErrorBoundry';



ReactDOM.render(

 localStorage.getItem("UserId")===null?(
   
<LoginNReg/>
 ):<App/>


  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
