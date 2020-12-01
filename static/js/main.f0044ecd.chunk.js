(this["webpackJsonpreact-sushi"]=this["webpackJsonpreact-sushi"]||[]).push([[0],{31:function(e,n,t){e.exports=t(46)},36:function(e,n,t){},37:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(12),i=t.n(o),c=(t(36),t(3)),l=t(10),s=(t(37),t(4)),d=t(18),m=t(5);function u(){var e=Object(c.a)(["\n  display: inline-block;\n  margin: 1rem;\n\n  .container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 23rem;\n    border: 0.6px solid black;\n    text-align: left;\n    vertical-align: top;\n    box-sizing: border-box;\n\n    .text {\n      margin: 1rem;\n    }\n\n    .bold {\n      font-weight: bold;\n    }\n  }\n  .container:hover{\n    border: 0.6px solid black;\n    background-color: #f9f9f9;\n  }\n"]);return u=function(){return e},e}var f=s.a.div(u()),p=function(e){return r.a.createElement(f,{onClick:function(){return e.setItemModalData(e.data)}},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("p",{className:"text bold"},e.data.attributes.name),r.a.createElement("p",{className:"text"},e.data.attributes.description)),r.a.createElement("p",{className:"text bold"},"$"+e.data.attributes.price.toFixed(2))))};function b(){var e=Object(c.a)(["\n  .categoryTitle{\n    font-size: 2rem;\n    font-weight: bold;\n  }\n"]);return b=function(){return e},e}var g=s.a.div(b()),h=function(e){return r.a.createElement("div",{id:"menuCategory"+e.name},r.a.createElement(g,null,r.a.createElement("p",{className:"categoryTitle"},e.name),e.data.map((function(n){return r.a.createElement(p,{data:n,key:n.attributes.id,addToCart:e.addToCart,setItemModalData:e.setItemModalData})}))))},v=t(15),E=t(13),y=t(14);function x(){var e=Object(c.a)(["\n  padding: .8rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  .quantityContainer{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    span{\n      padding: .3rem .8rem .3rem .8rem;\n      border-radius: .5rem;\n      font-size: 1.3rem;\n      font-weight: bold;\n      text-align: center;\n      cursor: pointer;\n    }\n\n    .increase{\n      background-color: #5cd65c;\n      border-radius:  .5rem 1rem 1rem .5rem;\n    }\n\n    .decrease{\n      background-color: #ff5c33;\n      border-radius:  1rem .5rem .5rem 1rem;\n    }\n\n    p{\n      margin:0 0 0 1rem;\n    }\n\n    .quantity{\n      width: 2.5rem;\n      text-align: center;\n      margin: 0 .3rem 0 .3rem;\n    }\n  }\n\n  .footerCloseContainer {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    .footerButton{\n      padding: .5rem .8rem .5rem .8rem;\n      height: 3rem;\n      border-radius: .5rem;\n      text-align: center;\n      font-weight: 500;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      cursor: pointer;\n    }\n\n    .addToCart {\n      background-color: #5cd65c;\n    }\n\n    .closeModal {\n      background-color: #ff5c33;\n    }\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(c.a)(["\n  border-bottom: .6px solid grey;\n  padding: 1rem;\n\n  .specialInstructions{\n    margin-top: 2rem;\n    p{\n      font-weight: 500;\n    }\n\n    textarea{\n      width: 100%;\n      border-radius: .5rem;\n      outline: none;\n      padding: .5rem;\n    }\n  }\n"]);return w=function(){return e},e}function k(){var e=Object(c.a)(["\n  border-bottom: .6px solid grey;\n  div{\n    padding: .5rem .5rem 0 0.5rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    svg{\n      color: red;\n      font-size: 2rem;\n      cursor: pointer;\n      padding-right: .5rem;\n    }\n  }\n\n  .headerPrice{\n    margin-left: 1rem;\n    font-weight: 600;\n  }\n"]);return k=function(){return e},e}var j=s.a.div(k()),C=s.a.div(w()),O=s.a.div(x()),N=function(e){var n=Object(a.useState)(1),t=Object(l.a)(n,2),o=t[0],i=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),d=s[0],m=s[1],u=function(){i(1),m(""),e.handleClose()};return r.a.createElement(v.a,{show:e.show,onHide:u,centered:!0},r.a.createElement(j,null,r.a.createElement("div",null,r.a.createElement(v.a.Title,null,e.data.attributes.name),r.a.createElement(E.a,{icon:y.c,onClick:u})),r.a.createElement("p",{className:"headerPrice"},"$"+e.data.attributes.price.toFixed(2))),r.a.createElement(C,null,r.a.createElement("p",null,e.data.attributes.description),r.a.createElement("div",{className:"specialInstructions"},r.a.createElement("p",null," Special instructions "),r.a.createElement("textarea",{value:d,onChange:function(e){return m(e.target.value)}}))),r.a.createElement(O,null,r.a.createElement("div",{className:"quantityContainer noselect"},r.a.createElement("span",{className:"decrease",onClick:function(){return i(o>1?o-1:1)}},"-"),r.a.createElement("input",{className:"quantity",type:"number",value:o,onChange:function(e){return i(e.target.value)}}),r.a.createElement("span",{className:"increase",onClick:function(){return i(o+1)}},"+"),r.a.createElement("p",null,"$"+(e.data.attributes.price*o).toFixed(2))),r.a.createElement("div",{className:"footerCloseContainer"},r.a.createElement("span",{className:"footerButton addToCart",onClick:function(){var n={id:e.data.attributes.id,name:e.data.attributes.name,price:e.data.attributes.price,quantity:o,comments:d};e.addToCart(n),u()}}," Add to Cart "))))};function T(){var e=Object(c.a)(["\n  padding: .8rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  .footerContainer {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-between;\n\n    .footerButton{\n      padding: .5rem .8rem .5rem .8rem;\n      height: 3rem;\n      border-radius: .5rem;\n      text-align: center;\n      font-weight: 500;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      cursor: pointer;\n    }\n\n    .resetModal {\n      background-color: #ff5c33;\n    }\n\n    .checkout {\n      background-color: #5cd65c;\n    }\n\n    .disabled {\n      background-color: grey;\n      pointer-events: none;\n      opacity: 70%;\n    }\n  }\n"]);return T=function(){return e},e}function z(){var e=Object(c.a)(["\n  border-bottom: .6px solid grey;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  .emptyMessage{\n    font-size: 1.3rem;\n    margin: 1.5rem;\n    color: grey;\n  }\n  .cartItem{\n    padding: .5rem 1.2rem .5rem 1.2rem;\n    width: 100%;\n    border-bottom: 0.6px solid grey;\n    span{\n      font-size: 1.3rem;\n      text-align: center;\n    }\n    .itemInfo{\n      text-align: left;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      .nameAndQuantity{\n        display: inline-block;\n\n        svg{\n          color: red;\n          font-size: 1.2rem;\n          cursor: pointer;\n        }\n\n        .quantity{\n          margin: 0 1rem 0 1rem;\n        }\n      }\n    }\n\n    .itemComments{\n      margin-top: -.2rem;\n      padding-left: 2rem;\n      span{\n        word-wrap: break-word;\n        font-size: .9rem;\n        box-sizing: border-box\n      }\n    }\n  }\n"]);return z=function(){return e},e}function B(){var e=Object(c.a)(["\n  border-bottom: .6px solid grey;\n  padding: .5rem;\n  text-align: center;\n\n  svg{\n    color: red;\n    font-size: 2rem;\n    position: absolute;\n    left: calc(100% - 2rem);\n    cursor: pointer;\n    padding-right: .5rem;\n  }\n"]);return B=function(){return e},e}var I=s.a.div(B()),M=s.a.div(z()),S=s.a.div(T()),q=function(e){return r.a.createElement(v.a,{show:e.show,onHide:e.handleClose,centered:!0},r.a.createElement(I,null,r.a.createElement(E.a,{icon:y.c,onClick:e.handleClose}),r.a.createElement(v.a.Title,null,"Cart")),e.data.length>0?r.a.createElement(M,null,e.data.map((function(n,t){return r.a.createElement("div",{className:"cartItem",key:t},r.a.createElement("div",{className:"itemInfo"},r.a.createElement("div",{className:"nameAndQuantity"},r.a.createElement(E.a,{icon:y.c,onClick:function(n){!function(n){e.setData(e.data.slice(0,n).concat(e.data.slice(n+1)))}(t)}}),r.a.createElement("span",{className:"quantity"},n.quantity),r.a.createElement("span",null,n.name)),r.a.createElement("span",null,"$"+(n.quantity*n.price).toFixed(2))),r.a.createElement("div",{className:"itemComments"},r.a.createElement("span",null,n.comments)))}))):r.a.createElement(M,null,r.a.createElement("p",{className:"emptyMessage"},"There's nothing here!")),r.a.createElement(S,null,r.a.createElement("div",{className:"footerContainer"},r.a.createElement("span",{className:(e.data.length>0?"resetModal":"disabled")+" noselect footerButton",onClick:function(){e.setData([])}}," Empty Cart "),r.a.createElement("span",{className:(e.data.length>0?"checkout":"disabled")+" noselect footerButton",onClick:function(){alert("checkitout!")}}," Checkout "))))};function D(){var e=Object(c.a)(["\n  width: 80vw;\n  text-align: center;\n  margin: auto;\n"]);return D=function(){return e},e}function $(){var e=Object(c.a)(["\n  font-size: 1.3rem;\n  position: fixed;\n  top: calc(100% - 7.3rem);\n  left: calc(80% + (20% - 2rem) / 2);\n  color: white;\n  border-radius: 100%;\n  .fa-stack{\n    .circle{\n      transition: 0.5s;\n      color: gray;\n    }\n    :hover{\n      .circle{\n        color: blue;\n      }\n    }\n  }\n"]);return $=function(){return e},e}function A(){var e=Object(c.a)(["\n  position: fixed;\n  top: 50%;\n  transform: translate(0, -50%);\n  display: flex;\n  flex-direction: column;\n  transition: 0.3s;\n\n  .sideNavButton {\n    padding: 0.5rem;\n    background-color: grey;\n    color: white;\n    text-decoration: none;\n    border-radius: 0 1rem 1rem 0;\n    margin: 0.2rem;\n    margin-left: 0;\n    :hover{\n      color:white;\n      background-color: blue;\n      transition: 0.5s;\n    }\n  }\n"]);return A=function(){return e},e}function F(){var e=Object(c.a)(["\n"]);return F=function(){return e},e}var H=s.a.div(F()),J=s.a.div(A()),P=s.a.div($()),Q=s.a.div(D()),R=function(){var e=Object(a.useState)({}),n=Object(l.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(!1),c=Object(l.a)(i,2),s=c[0],d=c[1],m=Object(a.useState)(!1),u=Object(l.a)(m,2),f=u[0],p=u[1],b=Object(a.useState)(null),g=Object(l.a)(b,2),v=g[0],x=g[1],w=Object(a.useState)([]),k=Object(l.a)(w,2),j=k[0],C=k[1],O=function(e){C(j.concat(e)),T()},T=function(){return d(!1)},z=function(e){x(e),d(!0)};return Object(a.useEffect)((function(){fetch("https://react-sushi-backend.herokuapp.com/menu_item",{method:"get",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var n={};e.data.forEach((function(e){n[e.attributes.category]?n[e.attributes.category]=n[e.attributes.category].concat(e):n[e.attributes.category]=[e]})),o(n)}))}),[]),r.a.createElement(H,null,r.a.createElement(J,null,Object.keys(t).length>1&&Object.keys(t).map((function(e){return r.a.createElement("a",{className:"sideNavButton",href:"#menuCategory"+e,key:e},e)}))),r.a.createElement(P,null,r.a.createElement("span",{className:"fa-stack fa-2x",onClick:function(){return p(!0)}},r.a.createElement(E.a,{className:"fa-stack-2x circle",icon:y.a}),r.a.createElement(E.a,{className:"fa-stack-1x",icon:y.b}))),v&&r.a.createElement(N,{data:v,addToCart:O,show:s,handleClose:T}),r.a.createElement(q,{data:j,setData:C,show:f,handleClose:function(){return p(!1)}}),r.a.createElement(Q,null,Object.keys(t).length>1&&Object.keys(t).map((function(e){return r.a.createElement(h,{data:t[e],name:e,setItemModalData:z,addToCart:O,key:e})}))))};function W(){var e=Object(c.a)(["\n  width: 80vw;\n  text-align: center;\n  margin: auto;\n"]);return W=function(){return e},e}function L(){var e=Object(c.a)(["\n"]);return L=function(){return e},e}var _=s.a.div(L()),G=s.a.div(W()),K=function(){return r.a.createElement(_,null,r.a.createElement(G,null,"sushi pictures and sushi words go here"))};function U(){var e=Object(c.a)(["\n  padding-top: 4rem;\n  .header{\n    background-color: blue;\n    padding: 1rem;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    display: block;\n    transition: top 0.3s;\n    \n    .headerOption {\n      color: white;\n      margin: 3rem;\n      padding: 0.5rem;\n    }\n  }\n\n  .active {\n    visibility: visible;\n    transition: 200ms;\n  }\n  .hidden {\n    visibility: hidden;\n    transition: 200ms;\n    transform: translate(0, -100%);\n  }\n"]);return U=function(){return e},e}var V=s.a.div(U()),X=function(){var e=Object(a.useState)(!0),n=Object(l.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(0),c=Object(l.a)(i,2),s=c[0],u=c[1],f=function(){u(document.body.getBoundingClientRect().top),o(document.body.getBoundingClientRect().top>s)};return Object(a.useEffect)((function(){window.addEventListener("scroll",f)})),r.a.createElement("div",{className:"App"},r.a.createElement(V,null,r.a.createElement("div",{className:(t?"active":"hidden")+" header"},r.a.createElement(d.b,{to:"/home"},r.a.createElement("span",{className:"headerOption"},"Home")),r.a.createElement(d.b,{to:"/menu"},r.a.createElement("span",{className:"headerOption"},"Menu")))),r.a.createElement("main",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/menu",component:R}),r.a.createElement(m.a,{path:"/home",component:K}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(45);i.a.render(r.a.createElement(d.a,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.f0044ecd.chunk.js.map