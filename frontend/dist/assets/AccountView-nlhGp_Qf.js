import{_ as p,o as m,c as f,p as h,a as v,b as e,d as I,F as S,V as A,u as k,r as n,e as o,w as t,f as V,t as u}from"./index-CZpC5zdB.js";const N={name:"HeaderComponent"},F=s=>(h("data-v-8228066b"),s=s(),v(),s),B=F(()=>e("div",{class:"header-text"},[e("img",{src:I,alt:"logo"}),e("h1",null,[e("strong",null,"Account")])],-1)),E=[B];function D(s,g,b,w,a,i){return m(),f("header",null,E)}const H=p(N,[["render",D],["__scopeId","data-v-8228066b"]]);let d;const R={name:"AccountView",components:{AccountHeaderComponent:H,FooterComponent:S},data(){return{user:d}},async setup(){return d=A.get("userInfo"),d},methods:{async logout(){await k().logout()==200?this.$router.push("/login"):console.log("Failed to logout")}}},c=s=>(h("data-v-f221f792"),s=s(),v(),s),U=c(()=>e("h1",{class:"display-2",style:{"margin-left":"20px","margin-top":"40px"}},"Account",-1)),G=c(()=>e("h2",{class:"subtitle-1 mb-2"},"Naam:",-1)),L={class:"body-1"},M=c(()=>e("h2",{class:"subtitle-1 mb-2"},"Email:",-1)),O={class:"body-1"},j=c(()=>e("h2",{class:"subtitle-1 mb-2"},"Rol:",-1)),q={class:"body-1"},z=c(()=>e("strong",null,"Uitloggen",-1));function J(s,g,b,w,a,i){const $=n("account-header-component"),r=n("v-card"),l=n("v-col"),_=n("v-row"),x=n("v-btn"),y=n("v-container"),C=n("footer-component");return m(),f(V,null,[o($),e("div",null,[U,o(y,{class:"wrapper"},{default:t(()=>[o(_,null,{default:t(()=>[o(l,{cols:"12"},{default:t(()=>[o(r,{class:"pa-4",elevation:"2"},{default:t(()=>[G,e("h3",L,u(a.user.fullName),1)]),_:1})]),_:1})]),_:1}),o(_,null,{default:t(()=>[o(l,{cols:"12"},{default:t(()=>[o(r,{class:"pa-4",elevation:"2"},{default:t(()=>[M,e("h3",O,u(a.user.email),1)]),_:1})]),_:1})]),_:1}),o(_,null,{default:t(()=>[o(l,{cols:"12"},{default:t(()=>[o(r,{class:"pa-4",elevation:"2"},{default:t(()=>[j,e("h3",q,u(a.user.role=="ROLE_ADMIN"?"Administrator":"Gebruiker"),1)]),_:1})]),_:1})]),_:1}),o(_,null,{default:t(()=>[o(l,{cols:"12",class:"col-btn"},{default:t(()=>[o(x,{class:"logout-button",onClick:i.logout},{default:t(()=>[z]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),o(C)],64)}const P=p(R,[["render",J],["__scopeId","data-v-f221f792"]]);export{P as default};