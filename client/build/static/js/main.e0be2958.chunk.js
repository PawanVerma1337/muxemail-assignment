(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(9),s=n.n(i),j=n(34),l=n(11),d=n(154),o=n(153),b=n(16),u=n.n(b),O=n(25),x=n(18),h=n(143),m=n(147),p=n(148),f=n(162),v=n(161),g=n(152),y=n(54),S=n.n(y);S.a.defaults.baseURL="http://localhost:5000/api/v1";var w=S.a.create(),C=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),s=Object(x.a)(i,2),j=s[0],d=s[1];return Object(c.useEffect)(Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/store");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)}))),[]),""!==j?Object(a.jsx)(l.a,{to:{pathname:"/store/".concat(j)}}):Object(a.jsx)("header",{children:Object(a.jsx)(h.a,{position:"static",color:"primary",children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)("h3",{style:{flexGrow:"1"},children:"Store "}),Object(a.jsxs)(p.a,{style:{width:"150px"},children:[Object(a.jsx)(f.a,{id:"demo-simple-select-outlined-label",children:"Store"}),Object(a.jsxs)(v.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:j,onChange:function(e){d(e.target.value)},label:"Store",children:[Object(a.jsx)(g.a,{value:"",children:Object(a.jsx)("em",{children:"None"})}),n.map((function(e){return Object(a.jsx)(g.a,{value:e._id,children:e.name},e._id)}))]})]})]})})})},k=function(){return Object(a.jsx)("footer",{children:Object(a.jsx)(o.a,{maxWidth:"lg",children:"Footer"})})},E=function(e){var t=e.children;return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(d.a,{}),Object(a.jsx)(C,{}),Object(a.jsx)(o.a,{maxWidth:"md",style:{height:"100vh",maxHeight:"100%"},children:t}),Object(a.jsx)(k,{})]})},F=n(155),N=n(51),R=Object(F.a)((function(e){return{root:{padding:"120px"}}})),A=function(){var e=R();return Object(a.jsx)(E,{style:{backgroundColor:"#FFFFEE"},children:Object(a.jsx)(o.a,{maxWidth:"md",style:{textAlign:"center"},children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(N.a,{variant:"h2",gutterBottom:!0,children:"Store Demo"}),Object(a.jsx)(N.a,{variant:"p",gutterBottom:!0,children:"Mux-Email Assignment"})]})})})},I=n(151),T=n(113),W=n(156),B=function(){var e=Object(l.g)().id,t=Object(c.useState)({}),n=Object(x.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)([]),j=Object(x.a)(s,2),d=j[0],o=j[1];return Object(c.useEffect)(Object(O.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/store/".concat(e,"/"));case 2:n=t.sent,console.log(n),i(n.data),o(n.data.fields?n.data.fields:[]);case 6:case"end":return t.stop()}}),t)}))),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(N.a,{variant:"h2",component:"h1",children:[r.name,console.log(r)]}),Object(a.jsx)(I.a,{children:d.map((function(e,t){return Object(a.jsxs)(T.a,{button:!0,children:[Object(a.jsx)(W.a,{children:t+1}),Object(a.jsx)(W.a,{children:e.name}),Object(a.jsx)(W.a,{children:e.type}),Object(a.jsx)(W.a,{children:e.store})]},e.name)}))})]})},D=function(){return Object(a.jsx)(E,{children:Object(a.jsx)(B,{})})},M=n(29),q=n(57),J=n(157),U=n(164),_=n(158),G=n(159),H=n(160),L=Object(F.a)({margin:{margin:"5px"}});function P(e,t){switch(t.type){case"add":return[].concat(Object(q.a)(e),[t.field]);case"remove":var n=Object(q.a)(e);return n.splice(t.name,1),n}}var V=function(){var e=Object(l.g)().id,t=L(),n=Object(c.useState)([]),r=Object(x.a)(n,2),i=r[0],s=r[1],j=Object(c.useReducer)(P,[]),d=Object(x.a)(j,2),o=d[0],b=d[1],h=Object(c.useState)({name:"",type:""}),m=Object(x.a)(h,2),y=m[0],S=m[1],C=function(){var t=Object(O.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.post("/store/".concat(e,"/fields"),{fields:o});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)(Object(O.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/store/".concat(e));case 2:n=t.sent,s(n.data),(null!=n.data.fields?n.data.fields:[]).forEach((function(e){return b({field:e,type:"add"})}));case 6:case"end":return t.stop()}}),t)}))),[]),Object(a.jsxs)(E,{children:[Object(a.jsx)(N.a,{variant:"h2",component:"h1",children:i.name}),Object(a.jsxs)(J.a,{container:!0,className:t.margin,children:[Object(a.jsx)(J.a,{item:!0,xs:4,style:{padding:"5px"},children:Object(a.jsx)(U.a,{variant:"filled",fullWidth:!0,InputProps:{disableUnderline:!0},label:"Field Name",placeholder:"Field Name",helperText:"*Required",value:y.name,onChange:function(e){S((function(t){return Object(M.a)(Object(M.a)({},t),{},{name:e.target.value})}))}})}),Object(a.jsx)(J.a,{item:!0,xs:4,style:{padding:"5px"},children:Object(a.jsxs)(p.a,{variant:"outlined",style:{width:"100%"},children:[Object(a.jsx)(f.a,{id:"fieldname-label",children:"Type"}),Object(a.jsxs)(v.a,{labelId:"fieldname-label",id:"fieldname",helperText:"*Required",value:y.type,onChange:function(e){S((function(t){return Object(M.a)(Object(M.a)({},t),{},{type:e.target.value})}))},label:"Type",children:[Object(a.jsx)(g.a,{value:"",children:Object(a.jsx)("em",{children:"None"})}),Object(a.jsx)(g.a,{value:"string",children:"String"}),Object(a.jsx)(g.a,{value:"number",children:"Number"}),Object(a.jsx)(g.a,{value:"date",children:"Date"})]})]})}),Object(a.jsx)(J.a,{item:!0,xs:4,style:{padding:"5px"},children:Object(a.jsx)(_.a,{variant:"contained",color:"primary",style:{borderRadius:"100%"},onClick:function(){b({field:y,type:"add"}),S({name:"",type:""})},children:"+"})})]}),Object(a.jsx)(I.a,{children:o.map((function(e,t){return Object(a.jsxs)(T.a,{button:!0,children:[Object(a.jsx)(W.a,{children:t+1}),Object(a.jsx)(W.a,{children:e.name}),Object(a.jsx)(W.a,{children:e.type}),Object(a.jsx)(W.a,{children:e.store}),Object(a.jsx)(G.a,{children:Object(a.jsx)(H.a,{edge:"end","aria-label":"delete",onClick:function(e){b({index:t,type:"remove"})},children:"\u2716"})})]},e.name)}))}),Object(a.jsx)(_.a,{variant:"contained",color:"primary",onClick:C,children:"Save"})]})},z=n(50),K=function(){var e=Object(l.g)().id,t=Object(c.useState)({}),n=Object(x.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)([]),j=Object(x.a)(s,2),d=j[0],o=j[1],b=function(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(z.a)({},n,a))}))};return Object(c.useEffect)(Object(O.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/store/".concat(e));case 2:n=t.sent,o(n.data.fields);case 4:case"end":return t.stop()}}),t)}))),[]),Object(a.jsx)(E,{children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r)},noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(N.a,{variant:"h2",align:"center",children:"Customer Add Form"}),Object(a.jsxs)(J.a,{container:!0,justify:"center",children:[Object(a.jsx)(J.a,{item:!0,children:Object(a.jsx)(U.a,{id:"name",name:"name",label:"Name",variant:"outlined",style:{margin:"2px"},onChange:b})}),Object(a.jsx)(J.a,{item:!0,children:Object(a.jsx)(U.a,{id:"email",name:"email",label:"Email",variant:"outlined",style:{margin:"2px"},onChange:b})}),Object(a.jsx)(J.a,{item:!0,children:Object(a.jsx)(U.a,{id:"mobile",name:"mobile",label:"Mobile Number",variant:"outlined",style:{margin:"2px"},onChange:b})}),Object(a.jsx)(J.a,{item:!0,children:Object(a.jsx)(U.a,{id:"address",name:"address",label:"Address",variant:"outlined",style:{margin:"2px"},onChange:b})})]}),null!=d?Object(a.jsx)(J.a,{container:!0,justify:"center",children:d.map((function(e){return Object(a.jsx)(J.a,{item:!0,children:Object(a.jsx)(U.a,{id:e.name,name:e.name,label:e.name,variant:"outlined",style:{margin:"2px"},onChange:b})},"ele.name")}))}):" No custom fields",Object(a.jsx)(J.a,{container:!0,justify:"center",children:Object(a.jsx)(_.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})})]})})};var Q=function(){return Object(a.jsx)(j.a,{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/",component:A}),Object(a.jsx)(l.b,{path:"/store/:id/addfields",children:Object(a.jsx)(V,{})}),Object(a.jsx)(l.b,{path:"/store/:id/customers",children:Object(a.jsx)(K,{})}),Object(a.jsx)(l.b,{path:"/store/:id",children:Object(a.jsx)(D,{})})]})})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Q,{})}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.e0be2958.chunk.js.map