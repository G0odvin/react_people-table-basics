(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(20),c(21),c(8)),s=c(11),i=c(4),j=(c(22),c(2)),l=c(1),o=c(6),b=c.n(o),d=(c(23),c(0)),h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.person;return Object(d.jsx)(a.b,{to:"../".concat(t.slug),className:b()({"has-text-danger":"f"===t.sex}),children:t.name})},u=function(e){var t=e.people,c=e.isLoading,n=e.selectPeopleSlug,a=function(e){var c=t.find((function(t){return t.name===e}));return c?Object(d.jsx)(p,{person:c}):e||"-"},r=function(e){return e.slug===n};return Object(d.jsx)("div",{className:"block",children:Object(d.jsx)("div",{className:"box table-container",children:c?Object(d.jsx)(h,{}):Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"person",className:b()({"has-background-warning":r(e)}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(p,{person:e})}),Object(d.jsx)("td",{children:e.sex}),Object(d.jsx)("td",{children:e.born}),Object(d.jsx)("td",{children:e.died}),Object(d.jsx)("td",{children:a(e.motherName)}),Object(d.jsx)("td",{children:a(e.fatherName)})]},e.slug)}))})]})})})},x=function(e){var t=e.isError,c=e.arePeoplePresent,n=e.isLoading,a=e.people,r=Object(j.h)().peopleSlug,s=void 0===r?null:r;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),t&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(d.jsx)(u,{people:a,isLoading:n,selectPeopleSlug:s})]})},O=function(){return Object(d.jsx)("h1",{className:"title",children:"Page not found"})};function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=function(e){var t=e.to,c=e.text;return Object(d.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return b()("navbar-item",{"has-background-grey-lighter":t})},children:c})},v=function(){return Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(f,{to:"/",text:"Home"}),Object(d.jsx)(f,{to:"/people",text:"People"})]})})})},g=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!0),o=Object(i.a)(a,2),b=o[0],h=o[1],p=Object(l.useState)(!1),u=Object(i.a)(p,2),f=u[0],g=u[1],N=Object(l.useState)(!0),P=Object(i.a)(N,2),y=P[0],w=P[1],S=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:0===(t=e.sent).length&&w(!1),n(t),h(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),g(!0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){S()}),[]),Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)(v,{}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(j.b,{path:"home",element:Object(d.jsx)(j.a,{to:"/",replace:!0})}),Object(d.jsxs)(j.b,{path:"people",children:[Object(d.jsx)(j.b,{path:":peopleSlug",element:Object(d.jsx)(x,{people:c,isLoading:b,isError:f,arePeoplePresent:y})}),Object(d.jsx)(j.b,{index:!0,element:Object(d.jsx)(x,{people:c,isLoading:b,isError:f,arePeoplePresent:y})})]}),Object(d.jsx)(j.b,{path:"*",element:Object(d.jsx)(O,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(g,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.edf180f3.chunk.js.map