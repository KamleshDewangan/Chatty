(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),l=(a(96),a(19)),s=a(13),m=(a(97),a(79)),i=a.n(m),g=a(78),u=a.n(g),d=a(159),h=a(167);var p=function(e){var t=e.backButton,a=Object(s.f)();return c.a.createElement("div",{className:"header",id:"header"},t?c.a.createElement(d.a,{onClick:function(){return a.replace(t)}},c.a.createElement(u.a,{className:"header__button",fontSize:"large"})):c.a.createElement(l.b,{to:"/Profile/"},c.a.createElement(d.a,null,null!==localStorage.getItem("Photo")?c.a.createElement(h.a,{src:"https://chatee.somee.com/Image/".concat(localStorage.getItem("Photo"))}):c.a.createElement(h.a,null))),c.a.createElement(l.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"https://cdn.dribbble.com/users/27903/screenshots/6035052/chatty_2x.png",alt:"tinder-logo"})),c.a.createElement(l.b,{to:"/Chats/"},c.a.createElement(d.a,{className:"iconbtn"},c.a.createElement(i.a,{className:"header__button",fontSize:"large"}))))},f=a(12);a(103),a(104);var b=function(e){var t=e.name,a=e.photo,n=e.msg,r=e.IsReceiver;return c.a.createElement("div",{className:"chat"},"null"!==a?c.a.createElement(h.a,{src:"https://chatee.somee.com/Image/".concat(a),className:"chat_dp"}):c.a.createElement(h.a,{className:"chat_dp"}),c.a.createElement("div",{className:"chat__details"},c.a.createElement("h5",{id:"name"},t),c.a.createElement("p",{id:"msg"},n.substring(0,20)+" . . . ")),r?c.a.createElement("p",{style:{marginRight:"auto",paddingRight:"10px",fontWeight:"bold",color:"#f50057"},id:"undread"},"New"):null)},E=a(163),v=a(164),y=a(21),I=a.n(y);var j=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(f.a)(o,2),m=s[0],i=s[1];return Object(n.useEffect)((function(){I.a.get("https://chatee.somee.com/api/chat/Chats?UserId=".concat(localStorage.getItem("UserId")),{headers:{Accept:"application/json"}}).then((function(e){r(!0),i(e.data)})).catch((function(e){return console.log(e)}))}),[i]),c.a.createElement(c.a.Fragment,null,a?c.a.createElement("div",{className:"chats"},c.a.createElement(E.a,null,m.length>0?m.map((function(e){return e.Receiver===localStorage.getItem("UserId")?c.a.createElement(v.a,{key:e.Sender,className:"chats__ListItem",button:!0,component:l.b,to:"/Chat/".concat(e.Sender,"/")},c.a.createElement(b,{IsReceiver:!0,photo:e.Photo,name:e.Sender,msg:e.Msg})):c.a.createElement(v.a,{key:e.Receiver,className:"chats__ListItem",button:!0,component:l.b,to:"/Chat/".concat(e.Receiver,"/")},c.a.createElement(b,{photo:e.Photo,name:e.Receiver,msg:e.Msg}))})):c.a.createElement("h3",{style:{color:"lightgrey",textAlign:"center",margin:"auto",marginTop:"200px"}},"Start new conversation"))):c.a.createElement("h3",{style:{color:"lightgrey",textAlign:"center",margin:"auto",marginTop:"200px"}},"Loading..."))},S=(a(51),a(122),a(26)),w=a.n(S);a(123);var O=function(){var e=Object(s.f)(),t=Object(n.useState)(!1),a=Object(f.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(""),m=Object(f.a)(l,2),i=(m[0],m[1]),g=Object(n.useState)(""),u=Object(f.a)(g,2),d=u[0],h=u[1],p=Object(n.useState)(!1),b=Object(f.a)(p,2),E=b[0],v=b[1];return Object(n.useEffect)((function(){}),[E]),c.a.createElement(c.a.Fragment,null,E?null:c.a.createElement("div",{id:"profilecontainer",className:w()("card","container"),style:{width:"20rem"}},r?c.a.createElement("img",{className:"card-img-top",alt:"Loading...",src:"https://i.pinimg.com/originals/ec/d6/bc/ecd6bc09da634e4e2efa16b571618a22.gif"}):"null"!==localStorage.getItem("Photo")?c.a.createElement("img",{id:"dp",src:"https://chatee.somee.com/Image/".concat(localStorage.getItem("Photo")),className:"card-img-top",alt:localStorage.getItem("Photo")}):c.a.createElement("img",{id:"dp",src:"https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300242/97334667-user-icon-human-person-symbol-avatar-login-sign-circle-button-with-soft-color-gradient-background-ve.jpg",className:"card-img-top",alt:"img__eroor"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},localStorage.getItem("UserId")),c.a.createElement("input",{type:"file",id:"dp__upload",accept:".jpg,.jpeg,.png",style:{color:"transparent"},onChange:function(e){o(!0),localStorage.removeItem("Photo");var t=new FormData;t.append("Photo",e.target.files[0]),t.append("UserId",localStorage.getItem("UserId")),I.a.post("https://chatee.somee.com/api/Chat/PhotoUpload",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){localStorage.setItem("Photo",e.data),o(!1)})).catch((function(e){o(!1),localStorage.removeItem("Photo"),"Request failed with status code 500"===e.message?(alert("This image is currupted ! Try anothe one"),localStorage.setItem("Photo",null)):h(e.message),i(e.message),console.log(e)}))}}),c.a.createElement("input",{type:"button",style:{backgroundColor:"#f50057",marginTop:"10px",border:"none"},className:w()("btn","btn-primary","btn-block"),value:"Logout",onClick:function(t){window.confirm("Are you sure?")&&(localStorage.removeItem("UserId"),localStorage.removeItem("Photo"),e.replace("/Login"),v(!0),window.location.href="https://kamleshdewangan.github.io/Chatty")}}),c.a.createElement("label",{style:{color:"rgba(194, 17, 32, 0.747)",marginTop:"10px"}},d))))},N=a(55),_=(a(124),a(54));var C=function(e){var t=e.targetUserId,a=Object(n.useState)(!1),r=Object(f.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)(!1),m=Object(f.a)(s,2),i=m[0],g=m[1],u=Object(n.useState)(!1),d=Object(f.a)(u,2),p=d[0],b=d[1],E=Object(n.useRef)(null),v=Object(n.useState)(""),y=Object(f.a)(v,2),j=y[0],S=y[1],w=Object(n.useRef)(null),O=Object(n.useState)([]),C=Object(f.a)(O,2),x=C[0],k=C[1],L=Object(n.useState)([]),U=Object(f.a)(L,2),P=U[0],R=U[1],T=(new _.a).withUrl("https://www.aayan.somee.com/Chat").configureLogging(_.b.Information).build();Object(n.useEffect)((function(){T.start().then((function(){T.on("receiveMessage",(function(e,a,n){l(!1),(localStorage.getItem("UserId").toLowerCase()===e.toLowerCase()&&t.toLowerCase()===a.toLowerCase()||localStorage.getItem("UserId").toLowerCase()===a.toLowerCase()&&t.toLowerCase()===e.toLowerCase())&&(k((function(t){return[].concat(Object(N.a)(t),[{Sender:e,Receiver:a,Msg:n}])})),A())}))})),I.a.get("https://chatee.somee.com/api/chat/ChatScreen",{headers:{Accept:"application/json"},params:{Sender:localStorage.getItem("UserId"),Receiver:t}}).then((function(e){g(!0),e.data.MessageList.length>0?(k(e.data.MessageList),R(e.data.ReceiverData)):b(!0),A()})).catch((function(e){return console.log(e)}))}),[]);var A=function(){w.current.scrollIntoView({behavior:"smooth",block:"end"})};return c.a.createElement(c.a.Fragment,null,i?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"chatscreen",id:"chatscreen",ref:w},x.length>0?x.map((function(e){return e.Sender===localStorage.getItem("UserId")?c.a.createElement("div",{key:e.Sender,className:"chatscreen__message"},c.a.createElement("p",{className:"chatscreen__sendermsg"},e.Msg)):c.a.createElement("div",{key:e.Receiver,className:"chatscreen__message"},c.a.createElement(h.a,{style:{zIndex:-1},src:"https://chatee.somee.com/Image/".concat(P.Photo)}),c.a.createElement("p",{className:"chatscreen__recevivermsg"},e.Msg))})):p?c.a.createElement("p",{style:{marginTop:"25vh",textAlign:"center",color:"lightgrey"}},"Start the Conversation"):c.a.createElement("p",{style:{marginTop:"25vh",textAlign:"center",color:"lightgrey"}},"Loading...")),c.a.createElement("form",{method:"post",name:"frm",className:"chatscreen__form",onSubmit:function(e){l(!0);var a=document.forms.frm.txtmsg.value;I.a.post("https://chatee.somee.com/api/Chat/PostMessage",{Sender:localStorage.getItem("UserId"),Receiver:t,Msg:a},{headers:{"Content-Type":"application/json"}}).then((function(e){T.start().then((function(){T.invoke("sendMessage",localStorage.getItem("UserId"),t,a)})).catch((function(){return console.log("not connected to the signalr")}))})).catch((function(e){return console.log(e)})),document.forms.frm.txtmsg.value="",S(""),A(),E.current.disabled=!0,e.preventDefault()}},c.a.createElement("textarea",{name:"txtmsg",onChange:function(e){e.target.value.trim()&&S(e.target.value)},style:{overflow:"auto",resize:"none"},rows:"1",type:"area",className:"chatscreen__input",placeholder:o?"Sending...":"send a message to ".concat(t.toLowerCase())}),c.a.createElement("button",{type:"submit",id:"submit",ref:E,disabled:!j,className:"chatscreen__button"},"Send"))):c.a.createElement("h3",{style:{color:"lightgrey",textAlign:"center",margin:"auto",marginTop:"200px"}},"Loading..."))},x=(a(74),a(128),a(166)),k=a(165);var L=function(){Object(s.f)();var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),l=Object(f.a)(o,2),m=l[0],i=l[1],g=Object(n.useState)(""),u=Object(f.a)(g,2),d=u[0],h=u[1],p=Object(n.useState)(""),b=Object(f.a)(p,2),E=b[0],v=b[1];return Object(n.useEffect)((function(){}),[a]),c.a.createElement(c.a.Fragment,null,null===localStorage.getItem("UserId")?c.a.createElement(c.a.Fragment,null,m?c.a.createElement("div",{className:w()("card"),style:{border:"none",marginTop:"130px",width:"20rem",marginLeft:"auto",marginRight:"auto"}},c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{className:"card-img-top",alt:"Loading...",src:"https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"}))):c.a.createElement(c.a.Fragment,null," ",c.a.createElement("div",{className:"login__logoContainer",style:{display:"flex",justifyContent:"center"}}," ",c.a.createElement("img",{className:"login__logo",src:"https://cdn.dribbble.com/users/27903/screenshots/6035052/chatty_2x.png",alt:"tinder-logo"})),c.a.createElement("div",{className:w()("card"),style:{width:"20rem",marginLeft:"auto",marginRight:"auto"}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title",style:{color:"#f50057"}},"Login/Register"),c.a.createElement("hr",null),c.a.createElement("form",{name:"myForm",method:"post",onSubmit:function(e){var t=document.forms.myForm.txtEmail.value;""===t?h("Required"):/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)?(i(!0),I.a.post("https://chatee.somee.com/api/Chat/LoginOrRegister",{Email:E},{headers:{"Content-Type":"application/json"}}).then((function(e){localStorage.setItem("UserId",e.data.UserId),localStorage.setItem("Photo",e.data.Photo),r("done")})).catch((function(e){return console.log(e)}))):h(" Enter Valid Email"),e.preventDefault()}},c.a.createElement(x.a,{id:"standard-secondary",helperText:d,inputProps:{style:{color:"#f50057",paddingLeft:"5px"}},label:"Email",name:"txtEmail",value:E,onChange:function(e){h(""),v(e.target.value),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)||h(" Enter Valid Email")},className:"loginnreg__input"}),c.a.createElement(k.a,{style:{marginTop:"20px"},variant:"contained",color:"secondary",disabled:m,classes:{disabled:"clr"},type:"submit"},"Login/Register")))))):c.a.createElement(M,null))};a(129);var U=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(f.a)(o,2),m=s[0],i=s[1];return Object(n.useEffect)((function(){I.a.get("https://chatee.somee.com/api/Chat/GetData?userid=".concat(localStorage.getItem("UserId")),{headers:{Accept:"application/json"}}).then((function(e){i(e.data),r(!0)})).catch((function(e){return console.log(e)}))}),[]),a?m.length>0?c.a.createElement("div",{className:w()("home","conatiner","overflow-auto")},c.a.createElement("div",{style:{marginTop:"65px",justifyContent:"center"},className:"row"},m.map((function(e){return c.a.createElement("div",{key:e.UserId,className:"card",style:{width:"18rem",margin:"5px"}},e.Photo?c.a.createElement("img",{id:"dp",src:"https://chatee.somee.com/Image/".concat(e.Photo),className:"card-img-top",alt:"img__eroor"}):c.a.createElement("img",{id:"dp",src:"https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300242/97334667-user-icon-human-person-symbol-avatar-login-sign-circle-button-with-soft-color-gradient-background-ve.jpg",className:"card-img-top",alt:"img__eroor"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.UserId),c.a.createElement(l.b,{to:"/Chat/".concat(e.UserId,"/")},c.a.createElement("button",{className:w()("btn","btn-block"),style:{backgroundColor:"#f50057",color:"whitesmoke",fontWeight:"600"}},"Chat"))))})))):c.a.createElement("h3",{style:{color:"lightgrey",textAlign:"center",margin:"auto",marginTop:"200px"}},"No more user for chat..."):c.a.createElement("h3",{style:{color:"lightgrey",textAlign:"center",margin:"auto",marginTop:"200px"}},"Loading...")},P=a(82),R=a(83),T=a(85),A=a(84),F=function(e){Object(T.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(P.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(R.a)(a,[{key:"render",value:function(){return this.state.hasError?c.a.createElement("div",{style:{fontWeight:"bold"}},"Something went wrong"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),a}(n.Component);var M=function(){return Object(n.useEffect)((function(){}),[]),null===localStorage.getItem("UserId")?c.a.createElement(L,null):c.a.createElement(l.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,strict:!0,path:"/"},c.a.createElement(F,null,c.a.createElement(p,null),c.a.createElement(U,null))),c.a.createElement(s.a,{exact:!0,strict:!0,path:"/Chats/"},c.a.createElement(F,null,c.a.createElement(p,{backButton:"/"}),c.a.createElement(j,null))),c.a.createElement(s.a,{exact:!0,strict:!0,path:"/Profile/"},c.a.createElement(F,null,c.a.createElement(p,{backButton:"/"}),c.a.createElement(O,null))),c.a.createElement(s.a,{path:"/Chat/:UserId/",strict:!0,render:function(e){var t=e.match;return c.a.createElement(F,null,c.a.createElement(p,{backButton:"/Chats/"}),c.a.createElement(C,{targetUserId:t.params.UserId}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){},91:function(e,t,a){e.exports=a(130)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.feb4e550.chunk.js.map