(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(13),o=t.n(u),c=(t(19),t(2)),l=t(3),i=t.n(l),s="/api/persons",d=function(){return i.a.get(s).then(function(e){return e.data})},m=function(e){return i.a.post(s,e).then(function(e){return e.data})},f=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then(function(e){return e.data})},b=function(e){return console.log(e),i.a.delete("".concat(s,"/").concat(e)).then(function(e){return e.data})},v=function(e){var n=e.person;return a.a.createElement("div",null,a.a.createElement("li",null,n.name," ",n.number))},p=function(e){var n=e.filterName,t=e.persons,r=e.setPersons;return n&&(t=function(){var e=n.toLowerCase();return t.filter(function(n){return n.name.toLowerCase().includes(e)})}()),a.a.createElement("div",null,t.map(function(e){return a.a.createElement("div",{key:e.id},a.a.createElement(v,{person:e})," ",a.a.createElement("button",{onClick:function(){return n=e.id,void b(n).then(function(e){r(t.filter(function(e){return e.id!==n}))});var n}},"delete"))}))},E=function(e){var n=e.persons,t=e.setPersons,u=e.setMessage,o=Object(r.useState)(""),l=Object(c.a)(o,2),i=l[0],s=l[1],d=Object(r.useState)(""),b=Object(c.a)(d,2),v=b[0],p=b[1],E=function(){return n.find(function(e){return e.name===i})};return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={name:i,number:v},a=E();a?window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))&&f(a.id,r).then(function(e){t(n.map(function(n){return n.id!==e.id?n:e})),u({text:"Number changed to ".concat(e.number),success:!0}),setTimeout(function(){return u(null)},5e3)}).catch(function(e){u({text:"Information of ".concat(a.name," has already been removed from server"),success:!1}),setTimeout(function(){return u(null)},5e3)}):m(r).then(function(e){t(n.concat(e)),u({text:"Added ".concat(e.name),success:!0}),setTimeout(function(){return u(null)},5e3)}),s(""),p("")}},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:i,onChange:function(e){return s(e.target.value)}})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{value:v,onChange:function(e){return p(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},h=function(e){var n=e.message;return null===n?null:a.a.createElement("div",{style:n.success?{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n.text)},g=function(){var e=Object(r.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(r.useState)(""),l=Object(c.a)(o,2),i=l[0],s=l[1],m=Object(r.useState)(null),f=Object(c.a)(m,2),b=f[0],v=f[1];return Object(r.useEffect)(function(){d().then(function(e){u(e)})},[]),a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(h,{message:b}),a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{value:i,onChange:function(e){return s(e.target.value)}})),a.a.createElement("h2",null,"add a new"),a.a.createElement(E,{persons:t,setPersons:u,setMessage:v}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(p,{filterName:i,persons:t,setPersons:u}))};o.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7476f2cd.chunk.js.map