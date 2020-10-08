import React, {useEffect,useState,useRef} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';
import {HubConnectionBuilder,LogLevel} from '@microsoft/signalr';


function ChatScreen({targetUserId}) {
   
const [sendingMsg,setSendingMsg]=useState(false);
const[isloaded,setload]=useState(false);   
const [firstTime,setFirstTime]=useState(false);
const btnRef=useRef(null);
const [value,setValue]=useState("");
const messagesEndRef = useRef(null)
const [msg,setMsg]=useState([]);
const [receiverData,setReceiverData]=useState([]);

const connection=new HubConnectionBuilder().withUrl("https://www.aayan.somee.com/Chat").configureLogging(LogLevel.Information).build();
      
    useEffect(()=>{
       
       connection.start().then(()=>{
       
        connection.on("receiveMessage", (Sender,Receiver,Msg) => {
            setSendingMsg(false);
                   if((localStorage.getItem("UserId").toLowerCase()===Sender.toLowerCase()) && (targetUserId.toLowerCase()===Receiver.toLowerCase())){
                   
                    setMsg(preval=>[...preval,{
                
                        Sender: Sender,
                        Receiver: Receiver,
                        Msg:Msg
                    }])
                    scrollToBottom();
                }
                   else if(localStorage.getItem("UserId").toLowerCase()===Receiver.toLowerCase() && targetUserId.toLowerCase()===Sender.toLowerCase())
                   {
                    
                    setMsg(preval=>[...preval,{
                
                        Sender: Sender,
                        Receiver: Receiver,
                        Msg:Msg
                    }])
                    scrollToBottom();
                   }
          });

       })
      
        
       
        axios.get("https://chatee.somee.com/api/chat/ChatScreen",{headers:{
            'Accept':'application/json'
        },params:{
            Sender:localStorage.getItem("UserId"),
            Receiver:targetUserId
        }}).then(response=>{
            setload(true);
            if(response.data.MessageList.length>0)
            {
                setMsg(response.data.MessageList);
                setReceiverData(response.data.ReceiverData);
              
            }else{
                setFirstTime(true);
            }
            
            
            scrollToBottom()
            
        }).catch(err=>console.log(err));

    },[]);

    
    const submitHandler=(e)=>{
      setSendingMsg(true);
        var txtmsg=document.forms["frm"]["txtmsg"].value;
        axios.post("https://chatee.somee.com/api/Chat/PostMessage",{'Sender':localStorage.getItem("UserId"),'Receiver':targetUserId,'Msg':txtmsg},{
        headers:{
            'Content-Type':'application/json'
        }

        }).then(response=>{
            
            connection.start().then(()=>{
                
               
                  connection.invoke("sendMessage", localStorage.getItem("UserId"),targetUserId,txtmsg);
             
            }).catch(()=>console.log('not connected to the signalr'));
            
            }
             ).catch(err=>console.log(err));
       
         
        document.forms["frm"]["txtmsg"].value="";
        setValue("");
        scrollToBottom();
        btnRef.current.disabled=true;
        e.preventDefault();
        
    }
    
  
    
    const  scrollToBottom = () => {
   
         messagesEndRef.current.scrollIntoView({behavior: "smooth", block: "end"});
    
      }

      const onChangeHandler=(e)=>{
       if((e.target.value).trim())
       {
           
        setValue(e.target.value);
       }
   
      
      }
    
       
    return (
      <>
        {isloaded?(
            <> 
             <div className="chatscreen" id="chatscreen" ref={messagesEndRef}>
        {
            

            (msg.length>0)?(
               
                msg.map(m=>{
                  
                    if(m.Sender===localStorage.getItem("UserId"))
                    {
                        return(
                            <div key={m.Sender} className="chatscreen__message" >
                           
                            <p className="chatscreen__sendermsg">{m.Msg}</p>
                         
                            </div>

                            
                        )
                    }
                    else
                    {
                        return(
                            <div key={m.Receiver} className="chatscreen__message"  >
                            <Avatar style={{zIndex:-1}} src={`https://chatee.somee.com/Image/${receiverData.Photo}`}/>
                               
                            <p className="chatscreen__recevivermsg">
                                {m.Msg}
                            </p>
                            </div>
                        )
                      

                    }
                   
                    
                    

                
            })
         


            ):(firstTime?<p style={{marginTop:'25vh',textAlign:"center",color:'lightgrey'}}>Start the Conversation</p>:<p style={{marginTop:'25vh',textAlign:"center",color:'lightgrey'}}>Loading...</p>)
                
           
        }
         
          </div>
    
       
       <form method="post" name="frm" className="chatscreen__form" onSubmit={submitHandler}> 
      <textarea name="txtmsg"  onChange={onChangeHandler} style={{overflow:'auto',resize:'none'}} rows="1"  type="area" className="chatscreen__input" placeholder={sendingMsg?'Sending...':`send a message to ${targetUserId.toLowerCase()}`}></textarea>
      
       <button type="submit" id="submit" ref={btnRef} disabled={!value} className="chatscreen__button">Send</button>
       </form>
       </>)
       :<h3 style={{color:"lightgrey",textAlign:'center',margin:'auto',marginTop:'200px'}}>Loading...</h3>}
      
       </>
       
    )
}

export default ChatScreen
