import React from 'react';
import './Header.css';
import ChatBubbleSharpIcon from '@material-ui/icons/ChatBubbleSharp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link,useHistory} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

function Header({backButton}) {
    const history=useHistory();


   
    return (

           <div className="header" id="header">
            
       {
           
           backButton?
           
                   
          <IconButton  onClick={()=>history.replace(backButton)}>
              <ArrowBackIosIcon className="header__button"  fontSize="large" ></ArrowBackIosIcon>
          </IconButton>

           :(<Link to="/Profile/">
             
           <IconButton>
              {
              localStorage.getItem("Photo")!==null?(<Avatar src={`https://chatee.somee.com/Image/${localStorage.getItem("Photo")}`}/>):<Avatar/>


              }
              
               {/* <PersonIcon className="header__button" fontSize="large" /> */}
           </IconButton> 
           </Link>)
          
       }
    
      
      <Link to="/Chatty">
      <img className="header__logo" src="https://cdn.dribbble.com/users/27903/screenshots/6035052/chatty_2x.png" alt="tinder-logo"/>
      </Link>
   
      <Link to="/Chats/">
          <IconButton className="iconbtn">
          <ChatBubbleSharpIcon  className="header__button" fontSize="large" />
       
          </IconButton>
          </Link>
     
    
       
       
   </div>


       
       
    )
}

export default Header
