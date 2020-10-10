import React, { useState, useEffect} from 'react';
import {HashRouter as Router,Redirect,Route,Switch, HashRouter} from 'react-router-dom';
import Header from './Header';
import Chats from './Chats';
import Profile from './Profile';
import ChatScreen from './ChatScreen';
import './App.css';
import LoginNReg from './LoginNReg';
import axios from 'axios';
import Home from './Home';
import ErrorBoundry from './ErrorBoundry';

 function App() {


 
 useEffect(()=>{

  //   axios.get("https://chatee.somee.com/api/Chat/CheckUserid",{headers:{

  //     "Accept":'application/json'
  //   }}).then(response=>
  //     {

        
  //     if(response.data.some(m=>m.UserId===localStorage.getItem("UserId")))
  //     {
  //       setload(true);
  //       setcheck(true);
       
  //     }else
  //     {
  //       localStorage.removeItem("UserId");
  //     localStorage.removeItem("Photo")
  //       setload(true);
  //       setcheck(false);
  //     }
   
 
      
  //     }).catch(err=>console.log(err));
  
  }

  ,[]);
  

  
  if(!localStorage.getItem("UserId")){
   
    return (
      
      <div className="App"> 
    
       <HashRouter> 
        <Switch>
        <Route exact strict path="/Login/" component={LoginNReg} /> 
          <Redirect to="/Login/"/>
       </Switch>
        </HashRouter>  
     
      </div>
    );
  }

 else
 {
 
    
      return(
        <HashRouter>
     
        <Switch>
          
        {/* Home Screen */}
        <Route exact strict path="/">
          <ErrorBoundry>
          <Header/>
          <Home/>
          </ErrorBoundry>
        </Route>
          {/*Chat List */}
        
       
          <Route exact strict path="/Chats/">
            <ErrorBoundry>
            <Header  backButton="/" />
            <Chats />
            </ErrorBoundry>
          </Route>
           {/* Profile */}
          <Route  exact strict path="/Profile/">
          <ErrorBoundry>
          <Header  backButton="/" />
              <Profile/>
              </ErrorBoundry>
              </Route>

          {/* ChatScreen */}

          <Route  path="/Chat/:UserId/" strict render={
            ({match})=>(
              <ErrorBoundry>
              <Header backButton="/Chats/"/>
               <ChatScreen targetUserId={match.params.UserId} />
              </ErrorBoundry>
            )

          }/>

      
        <Route exact strict path="/Login/" component={LoginNReg} />
            {/* <Header backButton="/Chats" />

            <ChatScreen />
          </Route> */}
        {/* this below route redircect the home component wherever it gets the unknown routes */}
        
         <Redirect  to="/"/>
         

        </Switch>
      </HashRouter>
      )
    }
   

 


    

}

  export default App
