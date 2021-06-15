(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(n,t,e){},38:function(n,t,e){"use strict";e.r(t);var i,c,r,a,o,d,s,l,b,h,p,j,u,f,x,O=e(0),g=e.n(O),m=e(21),v=e.n(m),y=(e(30),e(16)),w=e(2),k=e(13),L=e(3),S=e(4),C=S.b.div(i||(i=Object(L.a)(["\n    width: 80%;\n    position: absolute;\n    top: ",";\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);\n    display: flex;\n    justify-content: center;\n    max-width: 600px;\n\n    input {\n        width: 90%;\n        border: none;\n        padding: 20px;\n        box-shadow: ",";\n        border-radius: 4px;\n        font-size: 18px;\n\n        &:focus {\n            outline: none;\n        }\n    }\n"])),(function(n){return n.hasValue?"10%":"50%"}),(function(n){return n.hasValue?"3px 3px 16px hsl(0deg 0% 0% / 20%)":"10px 10px 55px hsl(0deg 0% 0% / 20%)"})),_=S.b.div(c||(c=Object(L.a)(["\n    margin: 30px auto;\n    max-width: 600px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),D=S.b.form(r||(r=Object(L.a)(["\n    position: relative;\n    width: 80%;\n\n    > button {\n        position: absolute;\n        right: 10%;\n        top: 50%;\n        transform: translate(50%, -50%);\n    }\n"]))),z=S.b.button(a||(a=Object(L.a)(["\n    border-radius: 4px;\n    padding: 10px 15px;\n    border: none;\n    cursor: pointer;\n    background-color: #f3f3f3;\n\n    &:hover {\n        background-color: #ececec;\n    }\n"]))),T=e(20),A=e(25),F="https://blogsearch-prod.herokuapp.com",H=function(n){return n.map((function(n){return Object(T.a)(Object(T.a)({},n),{},{created_at:Object(A.a)(new Date(n.created_at),new Date,{addSuffix:!0})})}))},I=function(n){var t=encodeURI("".concat(F,"/search?q=").concat(n));return fetch(t).then((function(n){if(n.ok)return n.json()})).then((function(n){return H(n)}))},R=function(){return fetch("".concat(F,"/feed")).then((function(n){if(n.ok)return n.json()})).then((function(n){return H(n)}))},q=S.b.div(o||(o=Object(L.a)(["\n    width: 100%;\n    height: 100%;\n    position: relative;\n    padding: 10%;\n    box-sizing: border-box;\n"]))),B=Object(S.a)(d||(d=Object(L.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&family=Raleway&display=swap');\n    \n    html, body, #root, .App {\n        height: 100%;\n        width: 100%;\n        color: #424651;\n        background-color: #f2f2f5;\n        color: #424d54;\n        font-family: 'Raleway', sans-serif;\n    }\n"]))),E=S.b.div(s||(s=Object(L.a)(["\n    border-radius: 4px;\n    padding: 25px;\n    border: 1px solid #e6ebec;\n    margin: 20px 0;\n    background-color: white;\n    text-align: left;\n"]))),M=S.b.h2(l||(l=Object(L.a)(["\n    font-family: 'Cabin', sans-serif;\n    margin-bottom: 5px;\n"]))),P=S.b.a(b||(b=Object(L.a)(["\n    cursor: pointer;\n    color: #424d54;\n    text-decoration: none;\n\n    &:hover {\n        color: #BEDCFE;\n    }\n"]))),U=S.b.p(h||(h=Object(L.a)(["\n    color: #6290C3;\n    font-size: 14px;\n    margin: 0;\n"]))),V=S.b.p(p||(p=Object(L.a)(["\n    line-height: 1.4;\n    margin-top: 25px;\n"]))),J=S.b.div(j||(j=Object(L.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),N={Container:E,Title:M,Subtitle:U,Description:V,LinkContainer:P,Logo:S.b.div(u||(u=Object(L.a)(["\n    width: 90px;\n    height: 60px;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n"])),(function(n){return n.url})),Header:J},Z=e(1),G=function(n){var t=n.result,e="img/".concat(t.feed__name.split(" ").join("").toLowerCase(),".png");return Object(Z.jsx)(N.LinkContainer,{href:t.url,target:"_blank",children:Object(Z.jsxs)(N.Container,{children:[Object(Z.jsxs)(N.Header,{children:[Object(Z.jsx)(N.Logo,{url:e}),Object(Z.jsx)(N.Subtitle,{children:t.feed__name})]}),Object(Z.jsx)(N.Title,{children:t.title}),Object(Z.jsx)(N.Subtitle,{children:t.created_at}),Object(Z.jsx)(N.Description,{dangerouslySetInnerHTML:{__html:t.description}})]})})},K=S.b.div(f||(f=Object(L.a)(["\n  svg {\n    transform: rotate(180deg);\n  }\n"]))),Q=function(){return Object(Z.jsx)(K,{children:Object(Z.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"10",viewBox:"0 0 14 10",width:"14",children:[Object(Z.jsx)("title",{children:"ArrowLeftMedium"}),Object(Z.jsx)("rect",{id:"ToDelete",fill:"#ff13dc",opacity:"0",width:"14",height:"10"}),Object(Z.jsx)("path",{d:"M12.99,4H3.41406L5.69673,1.71734A.9999.9999,0,1,0,4.28266.30327L.30327,4.29266a.99965.99965,0,0,0,0,1.41468L4.28266,9.69673A.9999.9999,0,1,0,5.69673,8.28266L3.41406,6H12.99a1,1,0,1,0,0-2Z"})]})})},W=S.b.div(x||(x=Object(L.a)(['\n\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, 50%);\n    width: 80px;\n    height: 80px;\n\n\n  div {\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    transform-origin: 40px 40px;\n  }\n  div:after {\n    content: " ";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: black;\n    margin: -4px 0 0 -4px;\n  }\n  div:nth-child(1) {\n    animation-delay: -0.036s;\n  }\n  div:nth-child(1):after {\n    top: 63px;\n    left: 63px;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.072s;\n  }\n  div:nth-child(2):after {\n    top: 68px;\n    left: 56px;\n  }\n  div:nth-child(3) {\n    animation-delay: -0.108s;\n  }\n  div:nth-child(3):after {\n    top: 71px;\n    left: 48px;\n  }\n  div:nth-child(4) {\n    animation-delay: -0.144s;\n  }\n  div:nth-child(4):after {\n    top: 72px;\n    left: 40px;\n  }\n  div:nth-child(5) {\n    animation-delay: -0.18s;\n  }\n  div:nth-child(5):after {\n    top: 71px;\n    left: 32px;\n  }\n  div:nth-child(6) {\n    animation-delay: -0.216s;\n  }\n  div:nth-child(6):after {\n    top: 68px;\n    left: 24px;\n  }\n  div:nth-child(7) {\n    animation-delay: -0.252s;\n  }\n  div:nth-child(7):after {\n    top: 63px;\n    left: 17px;\n  }\n  div:nth-child(8) {\n    animation-delay: -0.288s;\n  }\n  div:nth-child(8):after {\n    top: 56px;\n    left: 12px;\n  }\n  @keyframes lds-roller {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  \n']))),X=function(){return Object(Z.jsxs)(W,{children:[Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{})]})},Y=function(){var n=Object(w.f)(),t=Object(w.g)(),e=Object(O.useState)(!0),i=Object(k.a)(e,2),c=i[0],r=(i[1],Object(O.useState)("")),a=Object(k.a)(r,2),o=a[0],d=a[1],s=Object(O.useState)([]),l=Object(k.a)(s,2),b=l[0],h=l[1],p=Object(O.useState)(!1),j=Object(k.a)(p,2),u=j[0],f=j[1];Object(O.useEffect)((function(){var n=new URLSearchParams(t.search).get("query");n?(f(!0),d(n),h([]),I(n).then((function(n){f(!1),h(n)}))):(f(!0),h([]),R().then((function(n){f(!1),h(n)})))}),[t]);return Object(Z.jsxs)(q,{children:[Object(Z.jsx)(C,{hasValue:c,children:Object(Z.jsxs)(D,{onSubmit:function(t){t.preventDefault(),h([]),n.push(encodeURI("/search?query=".concat(o)))},children:[Object(Z.jsx)("input",{name:"query",type:"text",placeholder:"Search tech posts",onChange:function(n){return d(n.target.value)},value:o}),Object(Z.jsx)(z,{type:"submit",children:Object(Z.jsx)(Q,{})})]})}),Object(Z.jsxs)(_,{children:[u&&Object(Z.jsx)(X,{}),b&&!u&&b.map((function(n){return Object(Z.jsx)(G,{result:n},n.id)}))]})]})},$=function(){return Object(Z.jsx)(y.a,{children:Object(Z.jsx)(w.c,{children:Object(Z.jsx)(w.a,{path:"/",children:Object(Z.jsx)(Y,{})})})})},nn=function(){return Object(Z.jsxs)("div",{className:"App",children:[Object(Z.jsx)(B,{}),Object(Z.jsx)($,{})]})},tn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,39)).then((function(t){var e=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;e(n),i(n),c(n),r(n),a(n)}))};v.a.render(Object(Z.jsx)(g.a.StrictMode,{children:Object(Z.jsx)(nn,{})}),document.getElementById("root")),tn()}},[[38,1,2]]]);
//# sourceMappingURL=main.b2e196f6.chunk.js.map