import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router,Redirect,Route,Switch,useHistory} from 'react-router-dom';
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
 
 const history=useHistory();
  const [ischeck,setcheck]=useState(false);
  const [isloaded,setload]=useState(false);
 
 
 useEffect(()=>{

    axios.get("https://chatee.somee.com/api/Chat/CheckUserid",{headers:{

      "Accept":'application/json'
    }}).then(response=>
      {

        
      if(response.data.some(m=>m.UserId===localStorage.getItem("UserId")))
      {
        setload(true);
        setcheck(true);
       
      }else
      {
        localStorage.removeItem("UserId");
      localStorage.removeItem("Photo")
        setload(true);
        setcheck(false);
      }
   
 
      
      }).catch(err=>console.log(err));
  
  }

  ,[]);

  if(!localStorage.getItem("UserId")){
  
    return (
      
      <div className="App"> 
    
       <Router> 
        <Switch>
        {/* <Route exact strict path="/Chatty/Login" component={LoginNReg} />  */}
          <Redirect to="/Chatty/Login"/>
       </Switch>
        </Router>  
     
      </div>
    );
  }

 else
 {
  if(isloaded)
  {
    if(ischeck)
    {
      
      return(
     
 
        <Router>
     
        <Switch>
        {/* Home Screen */}
        <Route exact  path="/">
          <ErrorBoundry>
          <Header/>
          <Home/>
          </ErrorBoundry>
        </Route>
          {/*Chat List */}
        
       
          <Route exact strict path="/Chats/">
            <ErrorBoundry>
            <Header  backButton="/Chatty/" />
            <Chats />
            </ErrorBoundry>
          </Route>
           {/* Profile */}
          <Route  exact strict path="/Profile/">
          <ErrorBoundry>
          <Header  backButton="/Chatty/" />
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
        
         <Redirect  to="/" from="/Chatty/"/>
         

        </Switch>
      </Router>
   
  
      )
    }
    else
    {
      
      return( 
      <>
      
       {/* <Router>
       <Switch>
       
         <Redirect to="/Login"/>
         </Switch>
     </Router>  */}
          {/* <Route exact strict path="/Login"  component={LoginNReg}/> */}
        </>
        )
    }
  }
  else{
    return(
      <h3 style={{color:"lightgrey",textAlign:'center',margin:'auto',marginTop:'200px'}}>Loading...</h3>
    )
  }
 }

    

}

  export default App
