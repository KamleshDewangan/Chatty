import React, { useEffect, useState } from 'react';
import './Chats.css';
import Chat from './Chat';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Chats() {
    const [isloaded,setload]=useState(false);
    const [chatList, setchatList] = useState([]);
    useEffect(() => {

        axios.get(`https://chatee.somee.com/api/chat/Chats?UserId=${localStorage.getItem("UserId")}`, {
            headers: {

                'Accept': 'application/json'

            },

        }).then(response => {
          setload(true);
            setchatList(response.data)

        }).catch(e => console.log(e));
    }, [setchatList]);
    return (
        <>
        {isloaded?(  <div className="chats">
          
          <List>
          {chatList.length>0 ? (
               
              chatList.map(chat => {
                  if(chat.Receiver===localStorage.getItem("UserId")){
                      return(
                          <ListItem key={chat.Sender} className="chats__ListItem" button component={Link} to={`/Chat/${chat.Sender}/`}>
                          {
                         <Chat  IsReceiver={true} photo={chat.Photo} name={chat.Sender} msg={chat.Msg}/>
                          }
                          
                       </ListItem>
                      )
                  }

                  return (

                     
                          <ListItem key={chat.Receiver} className="chats__ListItem" button component={Link} to={`/Chat/${chat.Receiver}/`}>
                             {
                             <Chat  photo={chat.Photo} name={chat.Receiver} msg={chat.Msg}/>
                             }
                             
                          </ListItem>
                    
                  );
              })
              

          ) : <h3 style={{color:"lightgrey",textAlign:'center',margin:'auto',marginTop:'200px'}}>Start new conversation</h3>}
          
    </List>
  
  </div>):<h3 style={{color:"lightgrey",textAlign:'center',margin:'auto',marginTop:'200px'}}>Loading...</h3>}
        </>
      
    )
}

export default Chats
