import React,{useEffect,useState} from 'react';
import './Home.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

function Home() {
 
    const[isloaded,setload]=useState(false);
    const [userList,setUserList]=useState([]);
    const [conditionList,setConditionList]=useState([]);
    useEffect( ()=>{

        axios.get(`https://chatee.somee.com/api/Chat/GetData?userid=${localStorage.getItem("UserId")}`,{
            headers:{

                'Accept':'application/json'
            }
        }).then( (response)=>{

           setUserList(response.data.userlist);
            setload(true);

      for (let i = 0; i <response.data.conditionlist.length ;i++) {
          
        setConditionList(preval=>[...preval,response.data.conditionlist[i].Receiver]);
          
      }
      
              
          
        }).catch(err=>console.log(err));
    }, []);
    
    
    return (
       <>
       {isloaded?(<div  className={classNames('home','conatiner','overflow-auto')}>
            <div style={{marginTop:'65px',justifyContent:'center'}} className="row">
        
             {
                 userList.map(u=>{
                     if(u.UserId!==localStorage.getItem("UserId")){
                        if(!conditionList.includes(u.UserId))
                        {
                            
                            return(
                                
                                <div key={u.UserId} className="card" style={{ width: '18rem',margin:'5px'}}>
                                    {u.Photo?<img id="dp" src={`https://chatee.somee.com/Image/${u.Photo}`} className="card-img-top" alt="img__eroor" /> :<img id="dp" src={"https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300242/97334667-user-icon-human-person-symbol-avatar-login-sign-circle-button-with-soft-color-gradient-background-ve.jpg"} className="card-img-top" alt="img__eroor" /> }
                                
                  
                                  <div className="card-body">
                            <h5 className="card-title">{u.UserId}</h5>
                  
                                    <Link to={`/Chat/${u.UserId}/`} >
                                    <button  className={classNames('btn','btn-block')} style={{backgroundColor:'#f50057',color:'whitesmoke',fontWeight:'600'}}>Chat</button>
                                    </Link>
                               
                              </div>
                          </div>
                            )
                       
                        }
                     }
                       
                 })
             }
          </div>
       
        </div>)
       : <h3 style={{color:"lightgrey",textAlign:'center',margin:'auto',marginTop:'200px'}}>Loading...</h3>}
        
        </>
    )

}

export default Home
