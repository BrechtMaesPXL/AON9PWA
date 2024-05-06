import{_,q as f,r as w,c as h,b as e,t as d,e as a,w as n,f as v,o as b,p as D,a as y}from"./index-CZpC5zdB.js";import{u}from"./foalsStore-DiKilto-.js";import{_ as V}from"./go-back-arrow-nsKLNE-b.js";let r;const x={name:"DetailFoalView",data(){return{foal:r}},async setup(){const o=f().currentRoute.value.params.id;return r=await u().getFoalById(o),{foalId:o}},methods:{goToHomepage(){console.log("Go to home button clicked"),this.$router.push({name:"detailHorse",params:{id:r.motherId}})},async updateFoalDewormings(){const l={deworming1:r.dewormings.deworming1,deworming2:r.dewormings.deworming2,deworming3:r.dewormings.deworming3,deworming4:r.dewormings.deworming4};try{await u().updateFoalDewormings(this.foalId,l)}catch(o){console.error("Error adding dekdata"+o)}}}},i=l=>(D("data-v-d50d831d"),l=l(),y(),l),C={class:"header-content"},F={class:"wrapper"},S={class:"d-flex w-100 justify-space-between ml-5 mr-5"},k=i(()=>e("span",{class:"mr-4"},"Geboortedatum:",-1)),I={class:"data-wrapper"},j={class:"d-flex w-100 justify-space-between ml-5 mr-5"},L=i(()=>e("span",{class:"mr-4"},"Prijs:",-1)),O={class:"data-wrapper"},B=i(()=>e("div",{class:"mb-5"},[e("h2",{class:"ml-3 mt-5"},"Ontwormingen")],-1)),H={class:"d-flex w-100 justify-space-between align-center ml-5 mr-5"},U=i(()=>e("span",{class:"mr-4"},"Ontworming 1",-1)),T={class:"data-wrapper"},E={class:"d-flex w-100 justify-space-between align-center ml-5 mr-5"},G=i(()=>e("span",{class:"mr-4"},"Ontworming 2",-1)),N={class:"data-wrapper"},R={class:"d-flex w-100 justify-space-between align-center ml-5 mr-5"},q=i(()=>e("span",{class:"mr-4"},"Ontworming 3",-1)),P={class:"data-wrapper"},z={class:"d-flex w-100 justify-space-between align-center ml-5 mr-5"},A=i(()=>e("span",{class:"mr-4"},"Ontworming 4",-1)),J={class:"data-wrapper"};function K(l,o,M,Q,s,m){const c=w("v-row"),p=w("v-col"),g=w("v-checkbox");return b(),h(v,null,[e("header",null,[e("div",C,[e("img",{src:V,alt:"go back",class:"go-back",onClick:o[0]||(o[0]=(...t)=>m.goToHomepage&&m.goToHomepage(...t))}),e("h1",null,[e("strong",null,d(s.foal.name),1)])])]),e("div",F,[a(p,{class:"mt-5 px-5"},{default:n(()=>[a(c,{class:"v-data py-5 mb-4"},{default:n(()=>[e("div",S,[k,e("div",I,d(new Date(s.foal.birthDate).toLocaleDateString()),1)])]),_:1}),a(c,{class:"v-data py-5"},{default:n(()=>[e("div",j,[L,e("div",O,"€ "+d(s.foal.price),1)])]),_:1})]),_:1}),B,a(p,{class:"mt-5 px-5"},{default:n(()=>[a(c,{class:"v-data py-3 mb-4"},{default:n(()=>[e("div",H,[a(g,{modelValue:s.foal.dewormings.deworming1,"onUpdate:modelValue":o[1]||(o[1]=t=>s.foal.dewormings.deworming1=t),color:"success","hide-details":"",onChange:m.updateFoalDewormings},null,8,["modelValue","onChange"]),U,e("div",T,d(new Date(s.foal.dewormings.date1).toLocaleDateString()),1)])]),_:1}),a(c,{class:"v-data py-3 mb-4"},{default:n(()=>[e("div",E,[a(g,{modelValue:s.foal.dewormings.deworming2,"onUpdate:modelValue":o[2]||(o[2]=t=>s.foal.dewormings.deworming2=t),color:"success","hide-details":"",onChange:m.updateFoalDewormings},null,8,["modelValue","onChange"]),G,e("div",N,d(new Date(s.foal.dewormings.date2).toLocaleDateString()),1)])]),_:1}),a(c,{class:"v-data py-3 mb-4"},{default:n(()=>[e("div",R,[a(g,{modelValue:s.foal.dewormings.deworming3,"onUpdate:modelValue":o[3]||(o[3]=t=>s.foal.dewormings.deworming3=t),color:"success","hide-details":"",onChange:m.updateFoalDewormings},null,8,["modelValue","onChange"]),q,e("div",P,d(new Date(s.foal.dewormings.date3).toLocaleDateString()),1)])]),_:1}),a(c,{class:"v-data py-3 mb-4"},{default:n(()=>[e("div",z,[a(g,{modelValue:s.foal.dewormings.deworming4,"onUpdate:modelValue":o[4]||(o[4]=t=>s.foal.dewormings.deworming4=t),color:"success","hide-details":"",onChange:m.updateFoalDewormings},null,8,["modelValue","onChange"]),A,e("div",J,d(new Date(s.foal.dewormings.date4).toLocaleDateString()),1)])]),_:1})]),_:1})])],64)}const Z=_(x,[["render",K],["__scopeId","data-v-d50d831d"]]);export{Z as default};