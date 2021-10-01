(this["webpackJsonpwebsite-alpha"]=this["webpackJsonpwebsite-alpha"]||[]).push([[0],{115:function(e,t){},117:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(63),r=n.n(c),i=(n(73),n(74),n(7)),l=n(4),o=n(10),j=n.n(o),u=n(2),d=n.n(u),h=n(8),b=n(19),x=n(20),m=n(22),p=n(21),O=n(5),f=n(65),g=n.n(f),v=n(0),w=function(e){var t=Object(a.useState)("hidden"),n=Object(O.a)(t,2),s=n[0],c=n[1],r=function(){c(""===s?"hidden":"")};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("nav",{className:e.className+" fixed top-0 w-full flex items-center bg-mukul-400 p-2 flex-wrap",children:[Object(v.jsx)(i.c,{to:"#",className:"px-2 mr-4 inline-flex items-center",children:Object(v.jsx)("span",{className:"text-xl text-white font-bold uppercase tracking-wide","data-target":"#navigation",children:"Alpha"})}),Object(v.jsx)("button",{className:"nav-toggler text-white inline-flex p-2 hover:bg-gray-900 lg:hidden ml-auto",onClick:function(){return r()},children:Object(v.jsx)(g.a,{})}),Object(v.jsx)("div",{className:s+" top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto",id:"navigation",onClick:function(){return r()},children:Object(v.jsxs)("div",{className:"lg:inline-flex lg:flex-row lg:ml-auto flex flex-col",children:[Object(v.jsx)(i.c,{to:"/website_alpha/",className:"lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-gray-800 hover:bg-red-50",children:Object(v.jsx)("span",{children:"Home"})}),Object(v.jsx)(i.c,{to:"/website_alpha/inbox/",params:{data:e.user_name},className:"lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-gray-800 hover:bg-red-50",children:Object(v.jsx)("span",{children:"Inbox"})}),Object(v.jsx)(i.c,{to:"/website_alpha/profile/",className:"lg:inline-flex lg:w-auto px-3 py-2 rounded text-white hover:text-gray-800 hover:bg-red-50",children:Object(v.jsx)("span",{children:e.user_name})})]})})]})})},y=function(e){var t=e.user;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"mt-16",children:[Object(v.jsx)("h1",{children:" Login Successful "}),Object(v.jsxs)("h4",{children:["Name : ",t.name]}),Object(v.jsxs)("h4",{children:["User Name : ",t.user_name]}),Object(v.jsxs)("h4",{children:["email : ",t.email]}),Object(v.jsxs)("h4",{children:["Phone No : ",t.phone]})]}),Object(v.jsx)(i.b,{to:"/website_alpha/",children:Object(v.jsx)("button",{onClick:function(){j.a.remove("token")},children:"Log out"})})]})},k=function(e){var t=e.data.user,n=e.data.user_data;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"mt-16",children:[Object(v.jsxs)("h1",{children:["Hello ",t.name]}),Object(v.jsx)("h2",{children:" Welcome to the Website Alpha"})]}),Object(v.jsx)("div",{children:n.data[0]?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:["Your link is available ",Object(v.jsx)("a",{href:"/website_alpha/page/"+n.user_name,children:"Here"})]}),Object(v.jsx)(i.b,{to:"/website_alpha/links/",params:{data:n},children:Object(v.jsx)("button",{children:"Add Links"})})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:"You have not saved anything yet"}),Object(v.jsx)(i.b,{to:"/website_alpha/links/",params:{data:n},children:Object(v.jsx)("button",{children:"Add Links"})})]})})]})},N=n(11),_=!0,S=[],F=function(e){_&&(S=e.data.user_data.data,_=!1);var t=Object(a.useState)(S),n=Object(O.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){C(s),S=s}),[s]),Object(v.jsxs)("div",{className:"mt-16 grid justify-center justify-items-center",children:[Object(v.jsx)(L,{addLink:function(e,t){var n={title:e,link:t};c([].concat(Object(N.a)(s),[n]))}}),Object(v.jsxs)("h3",{children:["Your link is available on"," ",Object(v.jsx)("a",{href:"/website_alpha/page/"+e.data.user_data.user_name,target:"blank",children:"/website_alpha/page/"+e.data.user_data.user_name})]}),Object(v.jsx)(T,{links:s,onDelete:function(e){c(s.filter((function(t){return t!==e})))}})]})},C=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.a.get("token"),e.prev=1,e.next=4,fetch("https://website-alpha-backend.herokuapp.com/update/link",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:n},body:JSON.stringify({data:t})});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0),alert("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),T=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"grid justify-center justify-items-center",children:[Object(v.jsx)("h3",{children:"Your Links"}),0===e.links.length?"No links to display":e.links.map((function(t,n){return Object(v.jsx)(A,{link:t,onDelete:e.onDelete},n)}))]})})},A=function(e){var t=e.link,n=e.onDelete;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"grid justify-items-center pt-5",children:[Object(v.jsxs)("div",{className:"flex flex-wrap",children:[Object(v.jsx)("h3",{className:"mx-2",children:t.title}),Object(v.jsx)("button",{onClick:function(){n(t)},children:"Delete"})]}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:t.link,target:"blank",children:t.link})})]})})},L=function(e){var t=Object(a.useState)(""),n=Object(O.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),i=Object(O.a)(r,2),l=i[0],o=i[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{children:Object(v.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),s&&l?(e.addLink(s,l),c(""),o("")):alert("Title or Link cannot be blank")},children:[Object(v.jsx)("h2",{children:"Add a Link"}),Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Link Name"}),Object(v.jsx)("input",{type:"text",value:s,onChange:function(e){c(e.target.value)}})]}),Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Link"}),Object(v.jsx)("input",{type:"text",value:l,onChange:function(e){o(e.target.value)}})]}),Object(v.jsx)("button",{type:"submit",children:"Add Link"})]})})})},E=n(36),D=(n(115),function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(i.b,{to:e.data.chat_id,className:"bg-white",children:Object(v.jsx)("div",{className:"flex sm:justify-center cursor-pointer mt-0.5 px-4 py-2 bg-gray-300",children:Object(v.jsx)("h3",{children:e.data.to_user_name})})})})}),M=n(66),P=n.n(M),I=n(67),J=function(e){var t="",n="middle",a="";return e.data&&(t=e.own?"":e.data.name,n=e.own?"float-right clear-both":"float-left clear-both",a=e.own?"bg-gray-300":"bg-white"),Object(v.jsx)(v.Fragment,{children:e.data?Object(v.jsxs)("div",{ref:e.scrollRef,className:"message_box "+n,children:[Object(v.jsx)("label",{className:"text-xs text-white opacity-40",children:t}),Object(v.jsxs)("div",{className:"overflow-x-hidden px-3.5 py-1.5 rounded-xl "+a,children:[e.data.message,Object(v.jsx)("br",{})]}),Object(v.jsx)("p",{className:e.own?"justify-end flex text-xs p-0 m-0":"justify-start flex text-xsm p-0 m-0",children:Object(v.jsx)("span",{className:"text-white opacity-80",children:e.data.time?Object(I.a)(e.data.time):""})})]}):Object(v.jsxs)("div",{ref:e.scrollRef,className:"message_box float-left clear-both",children:[Object(v.jsx)("label",{className:"text-xs text-white opacity-40",children:e.inMsgLive.from_user_name}),Object(v.jsxs)("div",{className:"overflow-x-hidden px-3.5 py-1.5 rounded-xl bg-gray-200",children:[e.inMsgLive.message,Object(v.jsx)("br",{})]}),Object(v.jsx)("p",{className:e.own?"justify-end flex text-xs p-0 m-0":"justify-start flex text-xsm p-0 m-0",children:Object(v.jsx)("span",{className:"text-white opacity-80",children:e.inMsgLive?"typing...":""})})]})})},R=function(e){var t=Object(a.useState)(""),n=Object(O.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(null),l=Object(O.a)(r,2),o=l[0],j=l[1],u=Object(a.useState)(""),b=Object(O.a)(u,2),x=b[0],m=b[1],p=Object(a.useState)([]),f=Object(O.a)(p,2),g=f[0],w=f[1],y=Object(a.useState)(null),k=Object(O.a)(y,2),_=k[0],S=k[1],F=Object(a.useState)(null),C=Object(O.a)(F,2),T=C[0],A=C[1],L=Object(a.useState)({from_user_name:"",message:""}),D=Object(O.a)(L,2),M=D[0],I=D[1],R=Object(a.useRef)(),H=Object(a.useRef)(),U=Object(a.useState)(null),q=Object(O.a)(U,2),Y=q[0],W=q[1];Object(a.useEffect)((function(){R.current=Object(E.io)("https://website-alpha-backend.herokuapp.com"),R.current.on("getMessage",(function(e){S({message:e.message,name:e.from_user_name,time:e.time}),I({from_user_name:"",message:""})})),R.current.on("getMsgLive",(function(e){A({from_user_name:e.from_user_name,message:e.message})}))}),[]),Object(a.useEffect)((function(){o&&R.current.emit("addUser",{user_name:o,user_id:"data"})}),[o]),Object(a.useEffect)((function(){T&&x===T.from_user_name&&I(T)}),[T,x]),Object(a.useEffect)((function(){_&&x===_.name&&w((function(e){return[].concat(Object(N.a)(e),[_])}))}),[_,x]),Object(a.useEffect)((function(){function t(){return(t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e.chat_id);case 2:n=t.sent,W(n),w(n.chat_data),m(n.chats_of.with),j(n.chats_of.owner);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.chat_id]);var G=function(e){if(e.preventDefault(),s){R.current.emit("sendMessage",{from_user_name:o,to_user_name:x,message:s,time:new Date});var t={message:s,name:o,time:new Date};B(x,t),w([].concat(Object(N.a)(g),[t])),c("")}};return Object(a.useEffect)((function(){var e=x;R.current.emit("sendMsgLive",{from_user_name:o,to_user_name:e,message:s})}),[s,x,o]),Object(a.useEffect)((function(){var e;null===(e=H.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[g,M]),Object(v.jsx)(v.Fragment,{children:Y?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"fixed w-full z-10 sm:w-96 flex justify-center p-3 bg-gray-700 text-white",children:[Object(v.jsx)(i.b,{to:"/website_alpha/inbox/",className:"sm:hidden absolute left-3 text-white cursor-pointer",children:Object(v.jsx)(P.a,{})}),Object(v.jsx)("h2",{children:x})]}),Object(v.jsxs)("div",{className:"flex-grow pt-16 pb-5 mb-8 overflow-y-auto",id:"scrollBottom",children:[g.map((function(e,t){return Object(v.jsx)(J,{user:o,data:e,own:o===e.name,scrollRef:H},t)})),M.message?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(J,{friend:x,inMsgLive:M,scrollRef:H})}):Object(v.jsx)(v.Fragment,{})]}),Object(v.jsxs)("form",{className:"fixed bottom-0 w-full flex h-12",id:"chats-send-container",children:[Object(v.jsx)("input",{className:"flex-grow p-2.5",type:"text",placeholder:" Message...",value:s,onChange:function(e){return c(e.currentTarget.value)},id:"chats-messageInp",onKeyDownCapture:function(e){return"Enter"===e.key?G(e):null}}),Object(v.jsx)("button",{className:"px-4 border-none rounded-none",id:"chats-btn",onClick:function(e){G(e)},children:"Send"})]})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("span",{className:"flex justify-center text-6xl mt-16 text-white p-3 opacity-50 cursor-default",children:"Loading..."})})})},z=function(){var e=Object(h.a)(d.a.mark((function e(t){var n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.a.get("token"),e.prev=1,e.next=4,fetch("https://website-alpha-backend.herokuapp.com/add/chats/"+t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:n}});case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),alert("user not found");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.a.get("token"),e.prev=1,e.next=4,fetch("https://website-alpha-backend.herokuapp.com/update/chat",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:a},body:JSON.stringify({to_user_name:t,message:n})});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0),alert("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),H=function(e){var t=Object(a.useState)(""),n=Object(O.a)(t,2),s=n[0],c=n[1],r=Object(a.useRef)();Object(a.useEffect)((function(){r.current=Object(E.io)("https://website-alpha-backend.herokuapp.com"),r.current.emit("addUser",{user_name:e.user.user_name,user_id:e.user._id}),r.current.on("getUsers",(function(e){console.log(e)}))}),[e.user]);var i=window.location.pathname.split("/").slice(2,4),o=Object(a.useState)("hidden"),j=Object(O.a)(o,2),u=j[0],b=j[1],x=Object(a.useState)("flex"),m=Object(O.a)(x,2),p=m[0],f=m[1];Object(a.useEffect)((function(){"inbox"===i[0]&&i[1]?(b("flex"),f("hidden")):(b("hidden"),f("flex"))}),[i]);var g=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!s){e.next=7;break}return console.log(s),e.next=5,U(s);case 5:e.sent&&window.location.reload();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"flex sm:pt-16 h-screen justify-center",children:Object(v.jsxs)("div",{className:"flex h-full sm:border-2 rounded-lg",children:[Object(v.jsxs)("div",{className:p+" chat_list mt-16 sm:mt-0 w-screen sm:w-auto bg-gray-500 sm:flex flex-col",children:[Object(v.jsx)("div",{className:"grid justify-center bg-gray-700 text-white px-1 py-3",children:Object(v.jsx)("h2",{children:e.user.user_name})}),Object(v.jsxs)("div",{className:"overflow-y-auto",children:[e.user.chats_id.map((function(e,t){return Object(v.jsx)(D,{data:e},t)})),Object(v.jsxs)("div",{className:"flex flex-col m-1",children:[Object(v.jsx)("input",{type:"text",placeholder:"Enter friend's user name",value:s,onChange:function(e){return c(e.currentTarget.value)}}),Object(v.jsx)("button",{className:"m-1",onClick:function(e){g(e)},children:"Add friend"})]})]})]}),Object(v.jsx)("div",{className:u+" sm:flex h-screen sm:h-auto z-50 sm:z-0 flex-col w-screen sm:w-96 bg-blue-600",children:Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/inbox/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("span",{className:"flex justify-center text-6xl mt-16 text-white p-3 opacity-50 cursor-default",children:"open a chat"})})}}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/inbox/:id",render:function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(R,{chat_id:e.match.params.id})})}})]})})]})})})},U=function(){var e=Object(h.a)(d.a.mark((function e(t){var n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.a.get("token"),e.prev=1,e.next=4,fetch("https://website-alpha-backend.herokuapp.com/add/chats",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:n},body:JSON.stringify({user_name:t})});case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),alert("user not found");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),q=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,data:null,status:null},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.props.token)){e.next=9;break}return e.next=4,fetch("https://website-alpha-backend.herokuapp.com/",{method:"GET",headers:{Accept:"*/*",Authorization:t}});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,this.setState({data:a,loading:!1,status:n.status});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:this.state.loading?Object(v.jsx)("section",{className:"main_body",children:" Loading... "}):Object(v.jsx)(v.Fragment,{children:200===this.state.status?Object(v.jsx)(Y,{data:this.state.data,token:this.props.token}):Object(v.jsx)(l.a,{to:"/website_alpha/signin/"})})})}}]),n}(s.a.Component),Y=function(e){var t=e.data;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(w,{user_name:t.user.user_name,className:"z-10"}),Object(v.jsx)("section",{className:"grid justify-center align-middle h-full bg-mukul-100",children:Object(v.jsx)(l.b,{path:"/website_alpha/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(k,{data:t})})}}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/links/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(F,{data:t,token:e.token})})}}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/profile/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y,{user:t.user})})}}),Object(v.jsx)(l.b,{path:"/website_alpha/inbox/",render:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(H,{user:t.user})})}})]})})}})})]})},W=function(){var e=j.a.get("token");return Object(v.jsx)(v.Fragment,{children:e?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{to:"/website_alpha/inbox/"}),Object(v.jsx)(q,{token:e})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(l.a,{to:"/website_alpha/signin/"})})})},G="https://website-alpha-backend.herokuapp.com/signin",K=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={islogin:!1,data:null,user_name:"",password:""},e.submit=Object(h.a)(d.a.mark((function t(){var n,a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(G,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user_name:e.state.user_name,password:e.state.password})});case 2:return n=t.sent,t.next=5,n.json();case 5:if(!(a=t.sent).token){t.next=13;break}return s="Bearer "+a.token,t.next=10,j.a.set("token",s);case 10:e.setState({username:"",password:"",islogin:!0}),t.next=15;break;case 13:alert(a.error),e.setState({user_name:"",password:""});case 15:case"end":return t.stop()}}),t)}))),e}return Object(x.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)(v.Fragment,{children:this.state.islogin?Object(v.jsx)(l.a,{to:"/website_alpha/inbox/"}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"main_body",children:Object(v.jsxs)("div",{className:"form",children:[Object(v.jsx)("h2",{className:"form-heading",children:"Login"}),Object(v.jsxs)("div",{className:"signin-form",children:[Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"user_name",children:"User Name"}),Object(v.jsx)("input",{type:"text",value:this.state.user_name,onChange:function(t){e.setState({user_name:t.target.value})}})]}),Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"text",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})},onKeyDownCapture:function(t){return"Enter"===t.key?e.submit(t):null}})]}),Object(v.jsx)("div",{className:"form-cell",children:Object(v.jsx)("button",{onClick:function(){e.submit()},children:"Login"})})]}),Object(v.jsx)(i.b,{className:"form-link",to:"/website_alpha/signup/",children:"Click to make an account"})]})})})})}}]),n}(s.a.Component),V="https://website-alpha-backend.herokuapp.com/signup",Q=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={islogin:!1,data:null,name:"",user_name:"",email:"",password:"",phone:""},e.submit=Object(h.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(V,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,user_name:e.state.user_name,email:e.state.email,password:e.state.password,phone:e.state.phone})});case 2:return n=t.sent,t.next=5,n.json();case 5:(a=t.sent).token?(alert("account created please login"),e.setState({name:"",user_name:"",email:"",password:"",phone:0,islogin:!0})):alert(a.error);case 7:case"end":return t.stop()}}),t)}))),e}return Object(x.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)(v.Fragment,{children:this.state.islogin?Object(v.jsx)(l.a,{to:"/website_alpha/signin/"}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"main_body",children:Object(v.jsxs)("div",{className:"form",children:[Object(v.jsx)("h2",{className:"form-heading",children:"Sign UP"}),Object(v.jsxs)("div",{className:"signup-form",children:[Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"name",children:"Name"}),Object(v.jsx)("input",{type:"text",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}})]}),Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"user_name",children:"User Name"}),Object(v.jsx)("input",{type:"text",value:this.state.user_name,onChange:function(t){e.setState({user_name:t.target.value})}})]}),Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"user_name",children:"Email"}),Object(v.jsx)("input",{type:"text",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}})]}),Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"text",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})}})]}),Object(v.jsxs)("div",{className:"form-cell",children:[Object(v.jsx)("label",{htmlFor:"phone",children:"Phone No"}),Object(v.jsx)("input",{type:"number",value:this.state.phone,onChange:function(t){e.setState({phone:t.target.value})}})]}),Object(v.jsx)("div",{className:"form-cell",children:Object(v.jsx)("button",{onClick:function(){e.submit()},children:"Signup"})})]}),Object(v.jsx)(i.b,{className:"form-link",to:"/website_alpha/signin/",children:"Already have an account ?? Login"})]})})})})}}]),n}(s.a.Component),X=(n(62),function(e){var t=e.data;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{id:"link-page",children:[Object(v.jsx)("header",{children:Object(v.jsxs)("nav",{children:[Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"BTech 20"})}),Object(v.jsxs)("div",{className:"time",children:[Object(v.jsx)("div",{id:"time"}),Object(v.jsx)("div",{id:"date"})]})]})}),Object(v.jsxs)("section",{className:"body",children:[Object(v.jsxs)("div",{className:"color_code",children:[Object(v.jsx)("h5",{className:"live",children:"Running..."}),Object(v.jsx)("h5",{className:"leftToday",children:"Left"}),Object(v.jsx)("h5",{className:"today_class",children:"Todays Class"}),Object(v.jsx)("h5",{className:"status",children:"Not for Today"})]}),Object(v.jsx)("h2",{children:"Semester 3"}),Object(v.jsx)("h2",{className:"running",children:"No Class is Running Now "}),Object(v.jsx)("div",{className:"card-container",children:t.map((function(e,t){return Object(v.jsx)(Z,{data:e,class:"hide"},t)}))}),Object(v.jsx)("h2",{className:"today",children:"No Classes are Left Today"}),Object(v.jsx)("div",{className:"card-container",children:t.map((function(e,t){return Object(v.jsx)(Z,{data:e,class:"hide2"},t)}))}),Object(v.jsx)("h2",{children:"All Class Timing and Link"}),Object(v.jsx)("div",{className:"card-container",children:t.map((function(e,t){return Object(v.jsx)(Z,{data:e,class:"course status"},t)}))})]})]})})}),Z=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:e.class,children:[Object(v.jsx)("h3",{children:e.data.course}),e.data.time.map((function(e,t){return Object(v.jsx)($,{data:e},t)}))]})})},$=function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{className:"time",children:e.data.time}),e.data.section.map((function(e,t){return Object(v.jsx)(ee,{data:e},t)}))]})},ee=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("h5",{children:Object(v.jsx)("a",{href:e.data.link,target:"blank",children:e.data.section})})})},te=function(e){var t=e.data;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{id:"link-page",children:Object(v.jsx)("section",{className:"body",children:Object(v.jsx)("div",{className:"card-container",children:t.map((function(e,t){return Object(v.jsx)(ne,{data:e},t)}))})})})})},ne=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"status course",children:Object(v.jsx)("a",{href:e.data.link,target:"blank",children:e.data.title})})})},ae=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,data:null},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://website-alpha-backend.herokuapp.com/link/"+this.props.id);case 2:if(404!==(t=e.sent).status){e.next=7;break}this.setState({loading:!1}),e.next=11;break;case 7:return e.next=9,t.json();case 9:n=e.sent,this.setState({data:n,loading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:this.state.loading?Object(v.jsx)("section",{className:"main_body",children:Object(v.jsx)("h2",{children:" Loading... "})}):Object(v.jsx)(v.Fragment,{children:this.state.data?Object(v.jsx)(v.Fragment,{children:"btech20"!==this.props.id?Object(v.jsx)("div",{children:Object(v.jsx)(te,{data:this.state.data})}):Object(v.jsx)("div",{children:Object(v.jsx)(X,{data:this.state.data})})}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("section",{className:"main_body",children:Object(v.jsx)("h2",{children:"Page not found"})})})})})}}]),n}(s.a.Component),se=function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"w-56 h-56 sm:bg-gray-300 md:bg-gray-400",children:"Hello Test"}),Object(v.jsx)("a",{href:"https://whatsapp.com",children:"This is link"}),Object(v.jsx)("button",{className:"m-4 block",children:"This is button"}),Object(v.jsx)("input",{type:"text"})]})},ce=function(){var e=window.location.search.split("?").slice(1,2).join();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(i.a,{children:[e?Object(v.jsx)(l.a,{to:"/website_alpha"+e}):Object(v.jsx)(v.Fragment,{}),Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/signin/",component:K}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/signup/",component:Q}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/page/:id",render:function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(ae,{id:e.match.params.id})})}}),Object(v.jsx)(l.b,{exact:!0,path:"/website_alpha/test/",render:function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(se,{})})}}),Object(v.jsx)(W,{path:"/website_alpha/"})]})]})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(ce,{})}),document.getElementById("root")),re()},62:function(e,t){var n=setInterval((function(){document.getElementById("time")&&(!function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=new Date,a=n.getDay(),s=n.getHours();s.toString().length<2&&(s="0"+s);var c=n.getMinutes();c.toString().length<2&&(c="0"+c);var r=n.getSeconds();r.toString().length<2&&(r="0"+r);var i=n.getDate();i.toString().length<2&&(i="0"+i);var l=n.getMonth(),o=s+":"+c,j=document.querySelectorAll("#link-page .course"),u=document.querySelectorAll("#link-page .hide"),d=document.querySelectorAll("#link-page .hide2");j.forEach((function(e,n){e.innerText.split("\n").forEach((function(e,s){":"===e[e.length-3]&&e.split(",").forEach((function(e,s){var c=e.split(" ");o<c[c.length-3]&&-1!==c.indexOf(t[a])&&(document.querySelectorAll(".today")[0].innerHTML="Today's Classes Left",d[n].setAttribute("class","course leftToday")),o>=c[c.length-3]&&o<c[c.length-1]&&-1!==c.indexOf(t[a])&&(document.querySelectorAll(".running")[0].innerHTML="Classes Running...",u[n].setAttribute("class","course live")),-1!==c.indexOf(t[a])&&j[n].setAttribute("class","course today_class")}))}))}));var h=setInterval((function(){n=new Date,a=n.getDay(),(s=n.getHours()).toString().length<2&&(s="0"+s),(c=n.getMinutes()).toString().length<2&&(c="0"+c),(r=n.getSeconds()).toString().length<2&&(r="0"+r);try{document.getElementById("time").innerText=s+":"+c+":"+r,document.getElementById("date").innerText=t[a]+", "+e[l]+" "+i}catch(o){clearInterval(h)}"00"!==c.toString()&&"30"!==c.toString()||"00"!==r.toString()||window.location.reload()}),1e3)}(),clearInterval(n))}),100)},73:function(e,t,n){},74:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.538ef484.chunk.js.map