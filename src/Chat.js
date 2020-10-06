import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css';
function Chat({ name, photo, msg,IsReceiver }) {
    return (
        <div className="chat">
            {photo?<Avatar src={`https://chatee.somee.com/Image/${photo}`} className="chat_dp" />:<Avatar  className="chat_dp" />}
            
            <div className="chat__details">
                <h5 id="name">{name}</h5>
                <p id="msg">{msg.substring(0,100)}</p>
                
            </div>
            {IsReceiver?(<p style={{marginRight:'auto',paddingRight:'10px',fontWeight:'bold',color:'#f50057'}} id="undread">New</p>):null}
        </div>
    )
}

export default Chat
