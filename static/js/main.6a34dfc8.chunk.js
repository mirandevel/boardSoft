(this.webpackJsonpboard=this.webpackJsonpboard||[]).push([[0],{57:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c(37),r=c.n(n),s=(c(57),c(29)),o=c(16),i=c(48),d=c(28),l=c(11),b=Object(i.a)({apiKey:"AIzaSyDE6IX21DqpdY70cWRP1gxNPeg-E7IQF0g",authDomain:"board-888dc.firebaseapp.com",projectId:"board-888dc",storageBucket:"board-888dc.appspot.com",messagingSenderId:"1072906349267",appId:"1:1072906349267:web:2e47467b611517325a0226",measurementId:"G-L8M229PQ46"}),j=Object(d.b)(b),u=Object(l.i)(b),x={login:function(){var e=new d.a;Object(d.d)(j,e).then((function(e){console.log(e)})).catch((function(e){console.log(e.message)}))},authState:function(e,t){Object(d.c)(j,(function(c){c?(e(c),t(!0)):(e(null),t(!1))}))},logout:function(e){Object(d.e)(j).then((function(){e(null)}))}},O=c(5);var f=function(e){return Object(O.jsx)("div",{className:"min-h-screen flex justify-center items-center bg-blue-50",children:Object(O.jsxs)("div",{className:"w-2/5 bg-white h-96 shadow-xl p-5 pt-10",children:[Object(O.jsx)("h1",{className:"text-xl font-medium text-center",children:"Accede para crear tus tableros"}),Object(O.jsx)("div",{className:"flex justify-center items-center h-full",children:Object(O.jsxs)("button",{className:"border rounded block my-5 inline-flex space-x-2 p-2 hover:shadow-lg",onClick:function(e){return x.login()},children:[Object(O.jsx)("img",{src:"https://img.icons8.com/color/24/000000/google-logo.png"}),Object(O.jsx)("span",{children:"Inicia con Google"})]})})]})})},h=c(14),m=c(52),p=c(12),g=Object(a.createContext)(),w=function(e){var t=e.children,c=Object(a.useState)(!0),n=Object(p.a)(c,2),r=n[0],s=n[1],o=Object(a.useState)(null),i=Object(p.a)(o,2),d=i[0],l=i[1];Object(a.useEffect)((function(){x.authState(l,s)}),[]);var b={user:d,setUser:l,isLogged:function(){return r}};return Object(O.jsx)(g.Provider,{value:b,children:t})};var v=function(){return Object(a.useContext)(g)},N=["component"];var y,I=function(e){var t=e.component,c=Object(m.a)(e,N),a=v();return Object(O.jsx)(o.b,Object(h.a)(Object(h.a)({},c),{},{children:a.isLogged()?Object(O.jsx)(t,{}):Object(O.jsx)(o.a,{to:"/"})}))},S=c(17),C=c(33),k=c.n(C),A=c(51),D=c.n(A),E={initBoards:function(e,t){var c=Object(l.l)(Object(l.e)(u,"boards"),Object(l.n)("participantsEmail","array-contains",t),Object(l.k)("timeStamp","desc"));y=Object(l.j)(c,(function(t){var c=[];t.forEach((function(e){c.push(Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id}))})),e(c),console.log(c)}))},createBoards:function(e,t){Object(l.b)(Object(l.e)(u,"boards"),{name:e,ownerId:t.uid,participantsEmail:[t.email],timeStamp:l.a.fromMillis(Date.parse((new Date).toISOString()))})},getBoard:function(e,t){Object(l.j)(Object(l.g)(u,"boards",t),(function(t){e(t.data())}))},deleteBoard:function(e){return Object(l.f)(Object(l.g)(u,"boards",e))},stop:function(){return y()},addParticipant:function(e,t){Object(l.m)(Object(l.g)(u,"boards",t),{participantsEmail:Object(l.d)(e)})},removeParticipant:function(e,t){Object(l.m)(Object(l.g)(u,"boards",t),{participantsEmail:Object(l.c)(e)})},initBoxes:function(e,t){var c=Object(l.l)(Object(l.e)(u,"boards",t,"boxes"),Object(l.k)("id","asc"));y=Object(l.j)(c,(function(t){var c=[];t.forEach((function(e){c.push(Object(h.a)(Object(h.a)({},e.data()),{},{docId:e.id}))})),e(c),console.log(c)}))},createBox:function(e,t){Object(l.b)(Object(l.e)(u,"boards",e,"boxes"),t)},updateBox:function(e,t){Object(l.m)(Object(l.g)(u,"boards",e,"boxes",t.docId),t)},deleteBox:function(e,t,c){console.log(c);var a=Object(l.l)(Object(l.e)(u,"boards",e,"arrows"),Object(l.n)("start","==",c)),n=Object(l.l)(Object(l.e)(u,"boards",e,"arrows"),Object(l.n)("end","==",c)),r=!1;Object(l.h)(a).then((function(c){c.forEach((function(e){Object(l.f)(e.ref)})),r?Object(l.f)(Object(l.g)(u,"boards",e,"boxes",t)):r=!r})),Object(l.h)(n).then((function(c){console.log(c.docs.length),c.forEach((function(e){Object(l.f)(e.ref)})),r?Object(l.f)(Object(l.g)(u,"boards",e,"boxes",t)):r=!r}))},initArrows:function(e,t){var c=Object(l.l)(Object(l.e)(u,"boards",t,"arrows"),Object(l.k)("id","asc"));y=Object(l.j)(c,(function(t){var c=[];t.forEach((function(e){c.push(Object(h.a)(Object(h.a)({},e.data()),{},{docId:e.id}))})),e(c)}))},createArrow:function(e,t){Object(l.b)(Object(l.e)(u,"boards",e,"arrows"),t)},updateArrow:function(e,t){Object(l.m)(Object(l.g)(u,"boards",e,"arrows",t.docId),t)},deleteArrow:function(e,t){Object(l.f)(Object(l.g)(u,"boards",e,"arrows",t))}};var T=function(e){var t=Object(o.h)(),c=(Object(C.useXarrow)(),Object(a.useState)({x:e.posX,y:e.posY})),n=Object(p.a)(c,2),r=n[0],s=n[1];Object(a.useEffect)((function(){s({x:e.posX,y:e.posY})}),[e.posX,e.posY]);var i={onStart:function(){},onStop:function(){var c={id:e.id,x:r.x,y:r.y,boxType:e.boxType,title:e.title,content:e.content,type:"box",docId:e.docId};E.updateBox(t.state.boardId,c)},onDrag:function(e,t){var c=t.x,a=t.y;s({x:c,y:a})}};function d(){if(0===e.arrows.length)return"arrow-0";var t=e.arrows[e.arrows.length-1];return"arrow-"+(Number(t.id.split("-")[1])+1)}return Object(O.jsx)(D.a,Object(h.a)(Object(h.a)({position:r},i),{},{bounds:{top:0,left:0},onMouseDown:function(c){return function(c){if(1===c.button&&(e.selected.id===e.id?(e.setShowOptions({box:!e.showOptions.box,arrow:!1}),e.setAction("")):(e.setSelected({id:e.id,x:r.x,y:r.y,boxType:e.boxType,title:e.title,content:e.content,type:"box",docId:e.docId}),e.setShowOptions({box:!0,arrow:!1}))),0===c.button)switch(e.action.name){case"addArrow":if(e.selected.id===e.id){e.setAction("");break}var a={id:d(),start:e.selected.id,end:e.id,dotted:e.action.options.dotted,label:"label",docId:0};E.createArrow(t.state.boardId,a),e.setArrows([].concat(Object(S.a)(e.arrows),[a])),e.setAction("");break;default:e.setAction("")}}(c)},children:"person"===e.boxType?Object(O.jsxs)("div",{className:"rounded text-white flex flex-col justify-center items-center",onDragStart:function(e){return e.dataTransfer.setData("shape","person")},draggable:"true",children:[Object(O.jsx)("div",{className:"rounded-full w-10 h-10 bg-blue-700"}),Object(O.jsx)("div",{className:"rounded w-full bg-blue-700 p-5 -mt-2 text-center",children:"Persona"})]}):"system"===e.boxType?Object(O.jsxs)("div",{className:"addArrow"===e.action.name&&e.selected.id!==e.id?"systemSelected":"system",id:e.id,children:[Object(O.jsx)("p",{className:"title",children:e.title}),Object(O.jsx)("p",{children:e.content})]}):"container"===e.boxType?Object(O.jsxs)("div",{className:"addArrow"===e.action.name&&e.selected.id!==e.id?"containerSelected":"container",id:e.id,children:[Object(O.jsx)("p",{className:"title",children:e.title}),Object(O.jsx)("p",{children:e.content})]}):"database"===e.boxType?Object(O.jsxs)("div",{className:"addArrow"===e.action.name&&e.selected.id!==e.id?"databaseSelected":"database",id:e.id,children:[Object(O.jsx)("p",{className:"title",children:e.title}),Object(O.jsx)("p",{children:e.content})]}):"component"===e.boxType?Object(O.jsxs)("div",{className:"addArrow"===e.action.name&&e.selected.id!==e.id?"componentSelected":"component",id:e.id,children:[Object(O.jsx)("p",{className:"title",children:e.title}),Object(O.jsx)("p",{children:e.content})]}):void 0}))};var B=function(e){var t={onClick:function(){return e.setAction(""),e.setShowOptions({box:!1,arrow:!e.showOptions.arrow}),void e.setSelected({id:e.id,start:e.start,end:e.end,dotted:e.dotted,label:e.label,type:"arrow",docId:e.docId})},cursor:"pointer"};return Object(O.jsx)(k.a,{dashness:e.dotted,path:"straight",strokeWidth:2,labels:{middle:e.label},start:e.start,end:e.end,passProps:t,color:"gray"})};var P=function(e){return Object(O.jsx)("div",{className:"absolute top-0 left-0 flex items-start justify-center z-50 w-full h-full bg-gray-500 bg-opacity-50 py-20",children:Object(O.jsxs)("div",{className:"h-auto p-4 mx-2 text-left bg-white rounded shadow-xl lg:w-1/2 w-full space-y-5",children:[Object(O.jsxs)("div",{className:"flex justify-between border-b border-gray-300 pb-2",children:[Object(O.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900 w-full",children:e.title}),Object(O.jsx)("button",{className:"order-last font-medium",onClick:function(t){return e.setModal(e.value)},children:"X"})]}),e.children]})})};var X=function(e){var t=Object(o.h)(),c=Object(o.g)(),n=v();void 0===t.state&&c.replace("/");var r=Object(a.useState)({}),s=Object(p.a)(r,2),i=s[0],d=s[1],l=Object(a.useState)(!1),b=Object(p.a)(l,2),j=b[0],u=b[1],x=Object(a.useState)([]),f=Object(p.a)(x,2),m=f[0],g=f[1],w=Object(a.useState)([]),N=Object(p.a)(w,2),y=N[0],I=N[1],k=Object(a.useState)({}),A=Object(p.a)(k,2),D=A[0],X=A[1],M=Object(a.useState)({}),Y=Object(p.a)(M,2),L=Y[0],z=Y[1],R=Object(a.useState)({box:!1,arrow:!1}),G=Object(p.a)(R,2),J=G[0],Q=G[1],U=Object(a.useState)({participants:!1,delete:!1}),W=Object(p.a)(U,2),q=W[0],F=W[1];Object(a.useEffect)((function(){void 0===i?c.replace("/"):0!==Object.entries(i).length&&(i.participantsEmail.includes(n.user.email)?u(i.ownerId===n.user.uid):c.replace("/"))}),[i]),Object(a.useEffect)((function(){void 0!==i&&0===Object.entries(i).length&&(E.getBoard(d,t.state.boardId),E.initBoxes(g,t.state.boardId),E.initArrows(I,t.state.boardId))}),[i]);var K={showOptions:J,setShowOptions:Q,action:D,setAction:X,selected:L,setSelected:z,arrows:y,setArrows:I},H={showOptions:J,setShowOptions:Q,selected:L,setSelected:z,setAction:X};function V(){if(0===m.length)return"box-0";var e=m[m.length-1];return"box-"+(Number(e.id.split("-")[1])+1)}return Object(O.jsxs)("div",{className:"flex min-h-screen",children:[Object(O.jsxs)("div",{className:"w-48 border border-4 shadow-xl p-5 flex flex-col justify-between",children:[Object(O.jsxs)("div",{className:"space-y-5 flex flex-col justify-center items-center",children:[Object(O.jsxs)("div",{className:"rounded text-white flex flex-col justify-center items-center",onDragStart:function(e){return e.dataTransfer.setData("shape","person")},draggable:"true",children:[Object(O.jsx)("div",{className:"rounded-full w-10 h-10 bg-blue-700"}),Object(O.jsx)("div",{className:"rounded w-full bg-blue-700 p-5 -mt-2 text-center",children:"Persona"})]}),Object(O.jsx)("div",{className:"rounded w-24 p-5 border-2 bg-blue-700 text-white",onDragStart:function(e){return e.dataTransfer.setData("shape","system")},draggable:"true",children:"Sistema"}),Object(O.jsx)("div",{className:"rounded p-5 border-2 bg-blue-500 text-white",onDragStart:function(e){return e.dataTransfer.setData("shape","container")},draggable:"true",children:"Contenedor"}),Object(O.jsx)("div",{className:"db text-center p-5",onDragStart:function(e){return e.dataTransfer.setData("shape","database")},draggable:"true",children:Object(O.jsx)("p",{className:"tex-center text-white",children:"Base de datos"})}),Object(O.jsx)("div",{className:"rounded p-5 border-2 bg-blue-400 text-white",onDragStart:function(e){return e.dataTransfer.setData("shape","component")},draggable:"true",children:"Componente"})]}),Object(O.jsxs)("div",{className:"space-y-2 flex flex-col",children:[Object(O.jsx)("button",{className:"w-full rounded p-1 hover:shadow-lg bg-blue-500 text-white font-medium",onClick:function(e){return F({participants:!0,delete:!1})},children:"Participantes"}),Object(O.jsx)("button",{className:"w-full rounded p-1 hover:shadow-lg bg-blue-500 text-white font-medium",onClick:function(e){c.push("/")},children:"Salir"}),j&&Object(O.jsx)("button",{className:"w-full rounded p-1 hover:shadow-lg bg-red-500 text-white font-medium",onClick:function(e){return F({participants:!1,delete:!0})},children:"Eliminar"})]})]}),Object(O.jsx)("div",{className:"w-full relative overflow-auto bg-blue-50",children:Object(O.jsx)(C.Xwrapper,{children:Object(O.jsxs)("div",{className:"w-full h-full p-2",onDragOver:function(e){return e.preventDefault()},onDrop:function(e){var c=e.dataTransfer.getData("shape"),a=e.target.getBoundingClientRect(),n=a.x,r=a.y,s={id:V(),x:e.clientX-n,y:e.clientY-r,boxType:c,title:"title",content:"descripci\xf3n",docId:0};E.createBox(t.state.boardId,s),g([].concat(Object(S.a)(m),[s]))},children:[m.map((function(e){return Object(O.jsx)(T,Object(h.a)(Object(h.a)({id:e.id,boxType:e.boxType,posX:e.x,posY:e.y},K),{},{title:e.title,content:e.content,docId:e.docId}),e.id)})),y.map((function(e,t){return Object(O.jsx)(B,Object(h.a)(Object(h.a)({id:e.id,start:e.start,end:e.end,dotted:e.dotted},H),{},{label:e.label,docId:e.docId}),t)}))]})})}),J.box&&Object(O.jsxs)("div",{className:"w-48 border border-4 shadow-xl p-2",children:[Object(O.jsx)("p",{className:"text-md font-medium text-center uppercase",children:L.id}),Object(O.jsx)("div",{className:"w-full h-0.5 bg-gray-200"}),Object(O.jsxs)("div",{className:"space-y-2 mt-5",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"T\xedtulo"}),Object(O.jsx)("input",{className:"w-full border",type:"text",value:L.title,onChange:function(e){return Z(e,"box","title")}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Descripci\xf3n"}),Object(O.jsx)("textarea",{className:"w-full border",value:L.content,onChange:function(e){return Z(e,"box","content")}})]})]}),Object(O.jsx)("p",{className:"text-md font-medium text-center mt-8 uppercase",children:"Conectores"}),Object(O.jsx)("div",{className:"w-full h-0.5 bg-gray-200"}),Object(O.jsx)("button",{className:"block",onClick:function(e){X({name:"addArrow",options:{dotted:!1}})},children:"->"}),Object(O.jsx)("button",{className:"block",onClick:function(e){X({name:"addArrow",options:{dotted:!0}})},children:"----\x3e"}),Object(O.jsx)("button",{className:"border-2 w-full mt-8",onClick:function(e){return E.deleteBox(t.state.boardId,L.docId,L.id)},children:"Eliminar"}),Object(O.jsx)("button",{className:"border-2 w-full mt-8",onClick:function(e){return Q({})},children:"Cerrar"})]}),J.arrow&&Object(O.jsxs)("div",{className:"w-48 border border-4 shadow-xl p-2",children:[Object(O.jsx)("p",{className:"text-md font-medium text-center uppercase",children:L.id}),Object(O.jsx)("div",{className:"w-full h-0.5 bg-gray-200"}),Object(O.jsxs)("div",{className:"mt-5",children:[Object(O.jsx)("label",{children:"Label"}),Object(O.jsx)("input",{className:"w-full border",type:"text",value:L.label,onChange:function(e){return Z(e,"arrow","label")}})]}),Object(O.jsxs)("div",{className:"mt-2",children:[Object(O.jsx)("label",{children:"Conector"}),Object(O.jsxs)("select",{className:"w-full",onChange:function(e){return Z(e,"arrow",e.target.value)},children:[Object(O.jsx)("option",{value:"normal",children:"->"}),Object(O.jsx)("option",{value:"dotted",children:"---\x3e"})]})]}),Object(O.jsx)("button",{className:"border-2 w-full mt-8",onClick:function(e){return E.deleteArrow(t.state.boardId,L.docId)},children:"Eliminar"}),Object(O.jsx)("button",{className:"border-2 w-full mt-8",onClick:function(e){return Q({box:!1,arrow:!1})},children:"Cerrar"})]}),q.delete&&Object(O.jsxs)(P,{title:"Crear Tablero",setModal:F,value:{participants:!1,delete:!1},children:[Object(O.jsxs)("div",{className:"p-5 space-y-10",children:[Object(O.jsx)("p",{children:"\xbfEstas seguro de eliminar este tablero?"}),Object(O.jsxs)("div",{className:"flex justify-end space-x-2",children:[Object(O.jsx)("button",{className:"rounded p-2 hover:shadow-lg bg-gray-300 text-black font-medium",onClick:function(e){return F({participants:!1,delete:!1})},children:"Cerrar"}),Object(O.jsx)("button",{className:"rounded p-2 hover:shadow-lg bg-red-500 text-white font-medium",onClick:function(e){E.deleteBoard(t.state.boardId).then((function(){c.replace("/")}))},children:"Eliminar"})]})]}),Object(O.jsx)("div",{className:"flex justify-center"})]}),q.participants&&Object(O.jsx)(P,{title:"Participantes",setModal:F,value:{participants:!1,delete:!1},children:Object(O.jsxs)("div",{className:"p-5 space-y-10",children:[j&&Object(O.jsxs)("form",{className:"flex space-x-2",onSubmit:function(e){e.preventDefault(),E.addParticipant(e.target.email.value,t.state.boardId)},children:[Object(O.jsx)("input",{className:"w-full",type:"text",name:"email",placeholder:"Correo del participante"}),Object(O.jsx)("button",{className:"rounded p-2 hover:shadow-lg bg-blue-500 text-white font-medium",children:"A\xf1adir"})]}),Object(O.jsx)("div",{className:"space-y-2",children:i.participantsEmail.map((function(e,c){return Object(O.jsxs)("div",{className:"flex space-x-2 items-center justify-center",children:[Object(O.jsx)("p",{className:"w-full block border-2 p-1.5 rounded text-gray-600 font-medium",children:e}),j&&Object(O.jsx)("button",{className:"rounded p-2 hover:shadow-lg bg-red-500 text-white font-medium",onClick:function(c){return E.removeParticipant(e,t.state.boardId)},children:"Remover"})]},c)}))})]})})]});function Z(e,c,a){if("box"===c){var n=Object(S.a)(m),r=n.findIndex((function(e){return L.id===e.id})),s="title"===a?{title:e.target.value}:{content:e.target.value};n.splice(r,1,Object(h.a)(Object(h.a)({},n[r]),s)),z(Object(h.a)(Object(h.a)({},L),s)),E.updateBox(t.state.boardId,n[r]),g(n)}else{var o,i=Object(S.a)(y),d=i.findIndex((function(e){return L.id===e.id}));switch(a){case"dotted":o={dotted:!0};break;case"normal":o={dotted:!1};break;case"label":o={label:e.target.value}}i.splice(d,1,Object(h.a)(Object(h.a)({},i[d]),o)),z(Object(h.a)(Object(h.a)({},L),o)),E.updateArrow(t.state.boardId,i[d]),I(i)}}};var M=function(e){var t=v(),c=Object(a.useState)([]),n=Object(p.a)(c,2),r=n[0],o=n[1],i=Object(a.useState)(!1),d=Object(p.a)(i,2),l=d[0],b=d[1];return Object(a.useEffect)((function(){t.user&&E.initBoards(o,t.user.email)}),[t.user]),Object(O.jsxs)("div",{className:"bg-blue-50 min-h-screen",children:[Object(O.jsx)("header",{children:Object(O.jsxs)("div",{className:"h-16 bg-white shadow-lg flex justify-between items-center px-5",children:[Object(O.jsx)("h1",{className:"text-xl font-medium",children:"Tableros"}),Object(O.jsx)("button",{className:"order-last border rounded p-2 hover:shadow-lg",onClick:function(e){x.logout(t.setUser)},children:"Cerrar sesi\xf3n"})]})}),Object(O.jsxs)("div",{className:"flex flex-col justify-center m-10 space-y-10",children:[Object(O.jsx)("div",{className:"flex justify-center",children:Object(O.jsx)("button",{className:"rounded p-2 hover:shadow-lg bg-blue-500 text-white font-medium",onClick:function(e){return b(!0)},children:"Crear nuevo"})}),Object(O.jsx)("div",{className:"grid grid-cols-5 gap-4",children:r.map((function(e,t){return Object(O.jsx)(s.b,{to:{pathname:"/board/".concat(e.name),state:{boardId:e.id}},onClick:function(e){return E.stop()},children:Object(O.jsx)("div",{className:"bg-white h-48 flex justify-center items-center shadow-lg rounded hover:bg-gray-200",children:Object(O.jsx)("h2",{className:"text-xl order-none capitalize font-medium pt-5",children:e.name})})},t)}))})]}),l&&Object(O.jsx)(P,{title:"Crear Tablero",setModal:b,value:!1,children:Object(O.jsxs)("form",{className:"w-full p-5 flex flex-col justify-center space-y-2",onSubmit:function(e){e.preventDefault(),E.createBoards(e.target.name.value,t.user),b(!1)},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Nombre"}),Object(O.jsx)("input",{className:"w-full",type:"text",id:"name"})]}),Object(O.jsx)("div",{className:"flex justify-center",children:Object(O.jsx)("button",{className:"rounded p-2 hover:shadow-lg bg-blue-500 text-white font-medium",children:"Crear"})})]})})]})};var Y=function(e){var t=v();return Object(O.jsx)(s.a,{children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{exact:!0,path:"/",component:t.isLogged()?M:f}),Object(O.jsx)(o.b,{path:"/test",children:Object(O.jsx)("h1",{children:"test"})}),Object(O.jsx)(I,{path:"/board/:name",component:X})]})})};var L=function(){return Object(O.jsx)(w,{children:Object(O.jsx)(Y,{})})};r.a.render(Object(O.jsx)(L,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.6a34dfc8.chunk.js.map