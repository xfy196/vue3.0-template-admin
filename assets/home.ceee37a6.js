var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))r.call(t,a)&&s(e,a,t[a]);return e},l=(e,o)=>t(e,a(o));import{r as c,v as d}from"./index.5d10a90d.js";import{r as p,U as f,D as u,C as m}from"./index.6fcbea7e.js";import{d as v,m as g,f as b,q as h,p as w,a as y,i as k,o as j,c as x,b as S,F as P,j as _,w as O,z as I,U as z}from"./vendor.308b7906.js";import"./tslib.es6.1b24f972.js";var C=v({name:"Home",components:{},setup(){const e=g({swiperItems:[{name:"vue-next",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c588b8ab65a74d59aa379801136df4e0~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vuejs/docs-next-zh-cn"},{name:"vitejs",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7351d2dcd7846158604ac8bd57222b5~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vitejs"},{name:"element-plus",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48a7fd198df44cca9c0dc10a8047bbef~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/element-plus/element-plus"},{name:"tslang",itemSrc:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/610fc57450884ceaae9578689663fe2f~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/Microsoft/TypeScript"}]});p("point","cloud",{draw(e,t){const a=(e=>{var t;return l(n(n({},e.defaultStyle),e.style),{fontSize:e.data.size,text:e.data.text,textAlign:"center",fontFamily:e.data.font,fill:e.color||(null==(t=null==e?void 0:e.defaultStyle)?void 0:t.stroke),textBaseline:"alphabetic"})})(e),o=t.addShape("text",{attrs:l(n({},a),{x:null==e?void 0:e.x,y:null==e?void 0:e.y})}),i=e.data;return i.rotate&&f.rotate(o,i.rotate*Math.PI/180),o}});const t=async()=>{try{const e=await class{static getWorldPopulation(){return c({url:"/api/data/world-population",method:"get",json:!0}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}}.getWorldPopulation(),{dataSets:t}=e.data,a=(new u.View).source(t),o=a.range("value"),i=o[0],r=o[1];a.transform({type:"tag-cloud",fields:["x","value"],size:[800,600],font:"Verdana",padding:0,timeInterval:5e3,rotate(){let e=~~(4*Math.random())%4;return 2===e&&(e=0),90*e},fontSize:e=>e.value?(e.value-i)/(r-i)*56+24:0});const s=new m({container:"container",autoFit:!1,width:800,height:600,padding:0});s.data(a.rows),s.scale({x:{nice:!1},y:{nice:!1}}),s.legend(!1),s.axis(!1),s.tooltip({showTitle:!1,showMarkers:!1}),s.coordinate().reflect("x"),s.point().position("x*y").color("CornflowerBlue").shape("cloud").tooltip("value*category"),s.interaction("element-active"),s.render()}catch(e){console.error(e)}};return b((()=>{t()})),l(n({handleClickImg:e=>{window.open(e,"_blank")}},h(e)),{logo:d})}});const L=O();w("data-v-9ffcedfe");const M={class:"home-container page-container"},V={class:"top-container"},F=S("div",{class:"title"},"搜索词云",-1),T={class:"page-title"},B=I("信息链接:"),D=I("Vite2.x +"),E=I("Vue3.x +"),U=I("TypeScript +"),W=I("Element Plus"),q=z('<div class="word-cloud-wrapper" data-v-9ffcedfe><div class="right-bottom" data-v-9ffcedfe></div><div class="word-sets" data-v-9ffcedfe><div class="sets-module" data-v-9ffcedfe><div id="container" data-v-9ffcedfe></div></div></div></div>',1);y();const A=L(((e,t,a,o,i,r)=>{const s=k("el-carousel-item"),n=k("el-carousel"),l=k("el-link");return j(),x("div",M,[S(n,{interval:4e3,"indicator-position":"outside"},{default:L((()=>[(j(!0),x(P,null,_(e.swiperItems,(t=>(j(),x(s,{key:t},{default:L((()=>[S("img",{class:"vue-element-plus-logo",alt:t.name,src:t.itemSrc,onClick:a=>e.handleClickImg(t.targetLink)},null,8,["alt","src","onClick"])])),_:2},1024)))),128))])),_:1}),S("div",V,[F,S("div",T,[S(l,{type:"info"},{default:L((()=>[B])),_:1}),S(l,{type:"primary",href:"https://www.vitejs.net/guide/"},{default:L((()=>[D])),_:1}),S(l,{type:"success",href:"https://v3.cn.vuejs.org/"},{default:L((()=>[E])),_:1}),S(l,{type:"warning",href:"https://www.tslang.cn/"},{default:L((()=>[U])),_:1}),S(l,{type:"danger",href:"https://element-plus.gitee.io/#/zh-CN/component/link"},{default:L((()=>[W])),_:1})])]),q])}));C.render=A,C.__scopeId="data-v-9ffcedfe";export default C;
