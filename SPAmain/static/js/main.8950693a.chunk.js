(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{31:function(e,a,t){},51:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(24),r=t.n(s),i=(t(31),t(6)),l=t.n(i),o=t.p+"static/media/logo.6ce24c58.svg",j=(t(51),t(23),t(8)),b=t(9),d=t(1);var h=function(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/instrument/"}).then((function(e){c(e.data)}))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)("a",{class:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{class:"navbar-toggler-icon"})}),Object(d.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsx)("div",{className:"navbar-nav",children:t.map((function(e){return Object(d.jsx)(b.b,{className:"nav_link",to:{pathname:"/instrument/".concat(e.id,"/"),fromDashboard:!1},children:e.name})}))})})]})})})},p=t(2);var u=function(e){var a=e.match,t=Object(n.useState)({}),c=Object(j.a)(t,2),s=c[0],r=c[1],i=a.params.id;return Object(n.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/instrument/".concat(i)}).then((function(e){r(e.data)}))}),[i]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 ",s.name]}),Object(d.jsxs)("h1",{children:["\u0414\u043b\u0438\u043d\u0430 ",s.length]})]})};var v=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(p.c,{children:Object(d.jsx)(p.a,{path:"/instrument/:id",exact:!0,component:u})})]}),Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(d.jsx)("p",{children:Object(d.jsx)("h3",{children:"Hello react from django"})}),Object(d.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),O()}},[[61,1,2]]]);
//# sourceMappingURL=main.8950693a.chunk.js.map