(this.webpackJsonpsignature=this.webpackJsonpsignature||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(29),c=n.n(i),l=(n(95),n.p+"static/media/logo.6ce24c58.svg"),o=(n(67),n(80)),d=n.p+"static/media/\uc9c0\uc6d0\uae08.586ebc74.PNG",r=n(105),j=n(1),u=function(e){console.log(e.inputs.month);var t,n,a,i,c,l,o,u=Object(s.useRef)(),p=Object(s.useRef)(),x=Object(s.useRef)();return Object(s.useEffect)((function(){t=u.current,n=p.current,i=t.getContext("2d"),c=n.getContext("2d"),(o=new Image).onload=function(){i.drawImage(o,0,0)},o.src=d})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:{position:"relative",width:"1039px",height:"990px"},children:[Object(j.jsx)("canvas",{id:"canvasTop",ref:u,width:1039,height:990}),Object(j.jsx)("canvas",{id:"canvasBottom",ref:p,width:1039,height:990}),Object(j.jsx)("canvas",{style:{display:"none"},id:"canvasSubmit",ref:x,width:1039,height:990})]}),Object(j.jsx)(r.a,{primary:!0,onClick:function(){n=p.current,(c=n.getContext("2d")).clearRect(0,0,1039,990),c.font="30px serif",c.font="50px serif",c.fillText(e.inputs.attendMonth,560,40),c.font="30px serif",c.fillText(e.inputs.location,230,183),c.fillText(e.inputs.classNum,480,183),c.fillText(e.inputs.name,840,190),c.font="bold  40px serif",c.fillText(e.inputs.name,210,330),c.font="30px serif",c.fillText(e.inputs.attendMonth,395,333),c.font="27px serif",console.log((e.inputs.totalDays+"").length),1===(e.inputs.totalDays+"").length?c.fillText(e.inputs.totalDays,600,330):c.fillText(e.inputs.totalDays,590,330),c.fillText(e.inputs.attendDays,900,330),c.fillText(e.inputs.month,840,764),1===(e.inputs.date+"").length?c.fillText(e.inputs.date,945,764):c.fillText(e.inputs.date,935,764),c.fillText(e.inputs.name,740,890),c.font="italic 30px serif",c.fillText(e.inputs.name,900,890)},children:"\uacb0\uacfc \ubbf8\ub9ac \ubcf4\uae30"}),Object(j.jsx)(r.a,{secondary:!0,onClick:function(){t=u.current,n=p.current,a=x.current,i=t.getContext("2d"),c=n.getContext("2d"),(l=a.getContext("2d")).drawImage(t,0,0),l.drawImage(n,0,0);var s=document.createElement("a"),o=e.inputs.location+"_"+e.inputs.classNum+"\ubc18_"+e.inputs.name;s.download=o+".JPG",s.href=a.toDataURL(),document.body.appendChild(s),s.click(),document.body.removeChild(s)},children:"\ub2e4\uc6b4\ub85c\ub4dc"})]})},p=n(57),x=n(72),h=n(120),b=function(e){var t=function(t){var n=t.target,s=n.value,a=n.name;e.setInputs(Object(x.a)(Object(x.a)({},e.inputs),{},Object(p.a)({},a,s)))};return Object(j.jsxs)("div",{className:"userInput",children:[Object(j.jsxs)("div",{className:"input-box input-once",children:[Object(j.jsx)("p",{children:"\uba87\uc6d4 \uad50\uc721 \uc9c0\uc6d0\uae08?"})," ",Object(j.jsx)("br",{}),Object(j.jsx)(h.a,{size:"mini",name:"attendMonth",onChange:t,placeholder:"\ub2ec",defaultValue:e.inputs.attendMonth})," ",Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"input-box  input-once",children:[Object(j.jsx)("p",{children:"\uc774\ub984"})," ",Object(j.jsx)("br",{}),Object(j.jsx)(h.a,{size:"mini",name:"name",onChange:t,placeholder:"\uc774\ub984"})," ",Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"input-box",children:[Object(j.jsx)("p",{children:"\uc9c0\uc5ed / \ubc18"}),Object(j.jsxs)("div",{className:"input-flex",children:[Object(j.jsx)(h.a,{size:"mini",name:"location",onChange:t,placeholder:"\uc9c0\uc5ed"}),Object(j.jsx)("span",{children:"/"}),Object(j.jsx)(h.a,{size:"mini",name:"classNum",onChange:t,placeholder:"\ubc18",className:"second-input"})]})]}),Object(j.jsxs)("div",{className:"input-box",children:[Object(j.jsx)("p",{children:"\ucd1d \ucd9c\uc11d\uc77c / \ucd1d \uc218\uc5c5\uc77c"}),Object(j.jsxs)("div",{className:"input-flex",children:[Object(j.jsx)(h.a,{size:"mini",name:"attendDays",onChange:t,placeholder:"\ucd1d \ucd9c\uc11d\uc77c"}),Object(j.jsx)("span",{children:"/"}),Object(j.jsx)(h.a,{size:"mini",name:"totalDays",onChange:t,placeholder:"\ucd1d \uc218\uc5c5\uc77c",className:"second-input"})]})]}),Object(j.jsxs)("div",{className:"input-box",children:[Object(j.jsx)("p",{children:"\uba87\uc6d4 / \uba87\uc77c"}),Object(j.jsxs)("div",{className:"input-flex",children:[Object(j.jsx)(h.a,{size:"mini",name:"month",onChange:t,placeholder:"\uba87\uc6d4",defaultValue:e.inputs.month}),Object(j.jsx)("span",{children:"/"}),Object(j.jsx)(h.a,{size:"mini",name:"date",onChange:t,placeholder:"\uba87\uc77c",defaultValue:e.inputs.date,className:"second-input"})]})]})]})},m=function(){var e=new Date,t=Object(s.useState)({name:"\uae40\uc2f8\ud53c",month:e.getMonth()+1,date:e.getDate(),attendMonth:e.getMonth(),totalDays:1,attendDays:1,location:"\uc11c\uc6b8",classNum:6}),n=Object(o.a)(t,2),a=n[0],i=n[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{children:Object(j.jsx)(u,{inputs:a})}),Object(j.jsx)(b,{inputs:a,setInputs:i})]})};var f=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{src:l,className:"App-logo",alt:"logo",height:"100px",width:"100px"}),Object(j.jsx)("h1",{children:"SSAFY \uad50\uc721\uc9c0\uc6d0\uae08 \uc11c\uba85 \uc0dd\uc131\uae30"})]}),Object(j.jsx)(m,{})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};n(103);c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),O()},67:function(e,t,n){},95:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.db12ad92.chunk.js.map