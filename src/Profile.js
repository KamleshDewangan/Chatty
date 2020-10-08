import React, { useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import classNames from 'classnames'
import './resonsive.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Profile() {

    const history=useHistory();
   const [isUploadStart,setStart]=useState(false);
    const [isErrorOnChange,setErrorOnChange]=useState("");
    const [errMsg,setErrMsg]=useState("");
    const [isLoggedOut,setLoggedOut]=useState(false);
    
   
   
    const imgHandler = (e) => {
        setStart(true);  
  
        localStorage.removeItem("Photo");
       
       var formData=new FormData();
       formData.append("Photo",e.target.files[0]);
       formData.append("UserId",localStorage.getItem("UserId"));
   
       axios.post(`https://chatee.somee.com/api/Chat/PhotoUpload`,formData,
       {
           headers:{
               'Content-Type':'multipart/form-data',
            
               
           }
       }).then( response=>{
    
        localStorage.setItem("Photo",response.data);
           
      
          setStart(false);
        
    
        }).catch(error => {
            setStart(false);
            
           localStorage.removeItem("Photo");
            if(error.message==="Request failed with status code 500")
            {
                 alert('This image is currupted ! Try anothe one');
                 localStorage.setItem("Photo",null);
           
            }
            else{
                setErrMsg(error.message);
            }
            
            setErrorOnChange(error.message);
           console.log(error);
       });
  
      
   
    }

    
    const logoutHandler = () => {

        const ans=window.confirm('Are you sure?')
        if(ans)
        {
            localStorage.removeItem("UserId");
            localStorage.removeItem("Photo");
            setLoggedOut(true);
            history.replace("/Chatty/Login/")
        }
     
        
    }
   
    return (
        <>
        
        {
            !isLoggedOut?(<div id="profilecontainer" className={classNames("card", 'container')} style={{ width: '20rem' }}>
         {isUploadStart?(<img className="card-img-top" alt="Loading..." src="https://i.pinimg.com/originals/ec/d6/bc/ecd6bc09da634e4e2efa16b571618a22.gif"/>):(
             
            

             localStorage.getItem("Photo")!=="null"  ?(<img id="dp" src={`https://chatee.somee.com/Image/${localStorage.getItem("Photo")}`} className="card-img-top" alt={localStorage.getItem("Photo")} />): <img id="dp" src={"https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300242/97334667-user-icon-human-person-symbol-avatar-login-sign-circle-button-with-soft-color-gradient-background-ve.jpg"} className="card-img-top" alt="img__eroor" />)}
       

        <div className="card-body">
            <h5 className="card-title">{localStorage.getItem("UserId")}</h5>

            
            <input   type="file" id="dp__upload" accept=".jpg,.jpeg,.png" style={{ color: 'transparent'}} onChange={imgHandler} />
            
            <input type="button" style={{backgroundColor:'#f50057',marginTop:'10px',border:'none'}} className={classNames('btn','btn-primary','btn-block')} value="Logout" onClick={logoutHandler} />

            <label style={{color:'rgba(194, 17, 32, 0.747)',marginTop:'10px'}}>{errMsg}</label>
     
    </div>
   
</div>)

:     history.replace("/Chatty/Login/")
}
</>
        





 



    )
}

export default Profile