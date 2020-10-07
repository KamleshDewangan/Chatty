import React, { useState} from 'react'
import './LoginNReg.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';


function LoginNReg() {
   
    const history=useHistory();
    const[isLoginStart,setStart]=useState(false);
    const [errMsg, seterrMsg] = useState("");
    const [email, setEmail] = useState("");
    
    const submitHandler = (event) => {
     
        var x = document.forms["myForm"]["txtEmail"].value;
        if (x === "") {

            seterrMsg("Required");

        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)) {
            seterrMsg(" Enter Valid Email");

        }
        else {
            setStart(true);

            axios.post("https://chatee.somee.com/api/Chat/LoginOrRegister", { 'Email': email }, {
                headers: {
                    'Content-Type': 'application/json',

                },

            }).then(response => {
                localStorage.setItem("UserId", response.data.UserId);
                localStorage.setItem("Photo",response.data.Photo);
                history.replace("/");
              setStart(false)
               
            }).catch(e => console.log(e));


        }


        event.preventDefault();
    }
    const changeHandler = (e) => {
        seterrMsg("");
        setEmail(e.target.value);
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            seterrMsg(" Enter Valid Email");

        }

    }
    return (
        <>
            
            {!localStorage.getItem("UserId") ? (
                <>
                {isLoginStart?(
                <div className={classNames("card")} style={{ border:'none',marginTop:'130px', width: '20rem',marginLeft:'auto',marginRight:'auto' }}>
                   <div className="card-body">
                       <img className="card-img-top" alt="Loading..." src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"/>
                   </div>
                   </div>):(
              
              <> <div className="login__logoContainer" style={{display:'flex',justifyContent:"center"}}> <img className="login__logo" src="https://cdn.dribbble.com/users/27903/screenshots/6035052/chatty_2x.png" alt="tinder-logo"/></div>
              <div className={classNames("card")} style={{ width: '20rem',marginLeft:'auto',marginRight:'auto' }}>
              
                  <div className="card-body">
                      <h5 className="card-title" style={{color:'#f50057'}}>Login/Register</h5>
                      <hr/>
                      <form name="myForm" method="post" onSubmit={submitHandler}>
                       
                              
                                  <TextField id="standard-secondary"   helperText={errMsg} inputProps={{style:{color:'#f50057',paddingLeft:'5px'}}}   label="Email" name="txtEmail" value={email} onChange={changeHandler} className="loginnreg__input" />
                  
                          <Button style={{marginTop:'20px'}} variant="contained" color="secondary"  disabled={isLoginStart} classes={{disabled:'clr'}}   type="submit">
                           Login/Register 
                              </Button>
    
                      </form>
                  </div>
              </div></>
                  
            )}
               

            </>


            ) : (
                    
                      
                    <App/>
                        

                 
                    
                )
            }
        </>
    );
}

export default LoginNReg
