(this.webpackJsonpreactlab=this.webpackJsonpreactlab||[]).push([[0],{83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(54),c=n.n(s),o=n(30),i=n(8),u=n(28),l=n(40),d=n(41),j=n(46),b=n(45),p=n(110),m=Object(p.a)({counterParent:{marginBottom:"10px",paddingBottom:"10px",borderBottom:"1px solid black"},counterParent__button:{margin:"0 10px 0 10px",padding:"10px",fontSize:"18px",backgroundColor:"#FA6400",border:"1px solid black",borderRadius:"5px",cursor:"pointer"}}),x=n(2),O=function(e){var t=m();return Object(x.jsxs)("div",{className:t.counterParent,children:[Object(x.jsx)("input",{className:t.counterParent__button,type:"button",value:"Add",onClick:e.add}),Object(x.jsx)("input",{className:t.counterParent__button,type:"button",value:"Remove first",onClick:e.remove}),Object(x.jsx)("input",{className:t.counterParent__button,type:"button",value:"Reset all",onClick:e.reset})]})},h=Object(p.a)({counter:{marginBottom:"10px",borderBottom:"1px solid black"},counter__button:{margin:"0 10px 0 10px",padding:"10px",fontSize:"18px",backgroundColor:"#FA6400",border:"1px solid black",borderRadius:"5px",cursor:"pointer"},counter__text:{fontSize:"28px"}}),v=function(e){var t=h();return Object(x.jsxs)("div",{className:t.counter,children:[Object(x.jsx)("input",{className:t.counter__button,type:"button",value:"increment",onClick:e.increment}),Object(x.jsx)("input",{className:t.counter__button,type:"button",value:"decrement",onClick:e.decrement}),Object(x.jsx)("input",{className:t.counter__button,type:"button",value:"reset",onClick:e.reset}),Object(x.jsxs)("p",{className:t.counter__text,children:["ID: ",e.id]}),Object(x.jsxs)("p",{className:t.counter__text,children:["Value: ",e.value]})]})},f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleIncrement=function(){e.props.increment(e.props.id)},e.handleDecrement=function(){e.props.decrement(e.props.id)},e.handleReset=function(){e.props.reset(e.props.id)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(x.jsx)(v,{value:this.props.value,id:this.props.id,increment:this.handleIncrement,decrement:this.handleDecrement,reset:this.handleReset})}}]),n}(a.a.Component),g=f,_=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).increment=function(e){var t=r.state.counters.map((function(t){if(e===t.id){var n=t.value+1;return{id:e,value:n}}return t}));r.setState({counters:t})},r.decrement=function(e){var t=r.state.counters.map((function(t){if(e===t.id){var n=t.value-1;return{id:e,value:n}}return t}));r.setState({counters:t})},r.reset=function(e){var t=r.state.counters.map((function(t){t.value;return e===t.id?{id:e,value:0}:t}));r.setState({counters:t})},r.addCounter=function(){var e=r.state.counters.map((function(e){return e.value%2===0&&0!==e.value?{id:e.id,value:e.value+1}:e})),t=r.state.counters.length;e.push({id:t,value:0}),r.setState({counters:e})},r.removeFirstCounter=function(){var e=r.state.counters.map((function(e){return e.value%2!==0&&0!==e.value?{id:e.id,value:e.value-1}:e}));e.length>1&&e.pop(),r.setState({counters:e})},r.generalRemove=function(){r.setState({counters:[{id:0,value:0}]})},r.state={counters:[{id:0,value:0}]},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t={add:this.addCounter,remove:this.removeFirstCounter,reset:this.generalRemove};return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,Object(u.a)({},t)),this.state.counters.map((function(t){return Object(x.jsx)(g,{id:t.id,value:t.value,increment:e.increment,decrement:e.decrement,reset:e.reset},t.id)}))]})}}]),n}(a.a.Component),y=n(5),w=n(7),S=function(e){return!!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)&&e.length>=6)},C=function(e){return e.length>=6},N=Object(p.a)({form:{marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"center"},form__input:{margin:"0 10px 0 10px",fontSize:"18px"}}),k=function(e){var t=N();return Object(x.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(x.jsxs)("div",{className:t.form,children:[Object(x.jsx)("input",{className:t.form__input,type:"email",name:"email",value:e.data.email,placeholder:"E-mail",onChange:e.handleChange}),Object(x.jsx)("input",{className:t.form__input,type:"text",name:"password",value:e.data.password,placeholder:"Password",onChange:e.handleChange}),Object(x.jsx)("input",{className:t.form__input,type:"submit",value:"Log in"})]}),Object(x.jsxs)("h2",{children:["Entered data: ",e.data.formattedData]})]})},D=function(){var e=Object(r.useState)(""),t=Object(w.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),c=Object(w.a)(s,2),o=c[0],i=c[1],l=Object(r.useState)(JSON.stringify({email:n,password:o})),d=Object(w.a)(l,2),j=d[0],b=d[1],p={data:{email:n,password:o,formattedData:j},handleChange:function(e){var t=e.target.name,r=e.target.value;"email"===t&&a(r),"password"===t&&i(r),b(JSON.stringify(Object(y.a)({email:n,password:o},t,r)))},handleSubmit:function(e){e.preventDefault(),S(n)?C(o)?(console.log("".concat(n,": ").concat(o)),a(""),i(""),b(JSON.stringify({email:"",password:""})),Array.from(document.querySelectorAll("input")).forEach((function(e){e.value=""}))):alert("Entered password less then 6 symbols"):alert("Entered email less then 6 symbols")}};return Object(x.jsx)(k,Object(u.a)({},p))},E=n(65),A=function(e,t){return"UPDATE"===t.type&&(e[t.name]=t.value,e.formattedData=JSON.stringify({email:e.email,password:e.password})),e},P={email:"",password:"",formattedData:JSON.stringify({email:"",password:""})},R=Object(E.a)(A,P),J=function(){var e=R,t=Object(r.useState)(e.getState()),n=Object(w.a)(t,2),a=n[0],s=n[1],c={data:a,handleChange:function(t){var n,r;e.dispatch((n=t.target.name,r=t.target.value,{type:"UPDATE",name:n,value:r})),s(Object(u.a)({},e.getState()))},handleSubmit:function(e){e.preventDefault(),S(a.email)?C(a.password)?window.location.href+="/success":alert("Entered password less then 6 symbols"):alert("Entered email less then 6 symbols or not real email address")}};return Object(x.jsx)(k,Object(u.a)({},c))},B=function(){return Object(x.jsx)("h1",{children:"About us page"})},z=n(111),F=n(114),I=function(){var e=window.location.href,t=e.substr(e.indexOf("#/")+1),n=Object(r.useState)("/"===t?"/about":t),a=Object(w.a)(n,2),s=a[0],c=a[1];return Object(x.jsxs)(z.a,{value:s,onChange:function(e,t){c(t)},centered:!0,children:[Object(x.jsx)(F.a,{label:"About us",value:"/about",to:"/about",component:o.b}),Object(x.jsx)(F.a,{label:"Counters",value:"/counters",to:"/counters",component:o.b}),Object(x.jsx)(F.a,{label:"Log in",value:"/login",to:"/login",component:o.b}),Object(x.jsx)(F.a,{label:"Log in with Redux",value:"/login-redux",to:"/login-redux",component:o.b})]})},L=function(){var e=R.getState();return Object(x.jsxs)("div",{children:[(""===e.email||""===e.password)&&Object(x.jsx)("h1",{children:"Access denied"}),""!==e.email&&Object(x.jsxs)("h1",{children:["Email: ",e.email]}),""!==e.password&&Object(x.jsxs)("h1",{children:["Password: ",e.password]})]})},T=function(){return Object(x.jsx)("h1",{children:"Error 404: Page not found"})},U=function(){return Object(x.jsx)(o.a,{children:Object(x.jsx)("div",{children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",render:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(I,{}),Object(x.jsx)(B,{})]})}}),Object(x.jsx)(i.a,{path:"/about",render:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(I,{}),Object(x.jsx)(B,{})]})}}),Object(x.jsx)(i.a,{path:"/counters",render:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(I,{}),Object(x.jsx)(_,{})]})}}),Object(x.jsx)(i.a,{path:"/login",render:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(I,{}),Object(x.jsx)(D,{})]})}}),Object(x.jsx)(i.a,{exact:!0,path:"/login-redux",render:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(I,{}),Object(x.jsx)(J,{})]})}}),Object(x.jsx)(i.a,{path:"/login-redux/success",render:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(L,{})})}}),Object(x.jsx)(i.a,{render:function(){return Object(x.jsx)(T,{})}})]})})})};c.a.render(Object(x.jsx)(U,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.b3bf0bb4.chunk.js.map