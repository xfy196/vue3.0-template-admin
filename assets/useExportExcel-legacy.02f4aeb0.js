!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}System.register(["./FileSaver.min-legacy.051a9d18.js","./xlsx-legacy.59069f17.js","./vendor-legacy.7b043fe3.js","./___vite-browser-external_commonjs-proxy-legacy.a711403a.js"],(function(t){"use strict";var n,o;return{setters:[function(e){n=e.F},function(e){o=e.X},function(){},function(){}],execute:function(){function l(e,t){for(var r,n={},l={s:{c:1e7,r:1e7},e:{c:0,r:0}},a=0;a!==e.length;++a)for(var i=0;i!==e[a].length;++i){l.s.r>a&&(l.s.r=a),l.s.c>i&&(l.s.c=i),l.e.r<a&&(l.e.r=a),l.e.c<i&&(l.e.c=i);var c={v:e[a][i]};if(null!==c.v){var u=o.utils.encode_cell({c:i,r:a});if("number"==typeof c.v)c.t="n";else if("boolean"==typeof c.v)c.t="b";else if(c.v instanceof Date){c.t="n";var s=o.SSF.parse_date_code(14);c.z=s,c.v=(r=c.v,void 0&&(r=Number(r)+1462),(Date.parse(String(r))-Date.parse(String(new Date(Date.UTC(1899,11,30)))))/864e5)}else c.t="s";n[u]=c}}return l.s.c<1e7&&(n["!ref"]=o.utils.encode_range(l)),n}t({exportJsonToExcel:u,exportTableToExcel:c});var a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e),this.SheetNames=t,this.Sheets=n};function i(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n!==e.length;++n)r[n]=255&e.charCodeAt(n);return t}function c(e){var t=function(e){console.log(e);for(var t=[],r=null==e?void 0:e.querySelectorAll("tr"),n=[],o=function(e){for(var o=[],l=r[e].querySelectorAll("td"),a=0;a<l.length;++a){var i=l[a],c=i.getAttribute("colspan"),u=i.getAttribute("rowspan"),s=i.innerText;if("number"==typeof s&&s===Number(s)&&(s=Number(s)),n.forEach((function(t){if(e>=t.s.r&&e<=t.e.r&&o.length>=t.s.c&&o.length<=t.e.c)for(var r=0;r<=t.e.c-t.s.c;++r)o.push(null)})),(u||c)&&(u=u||1,c=c||1,n.push({s:{r:e,c:o.length},e:{r:e+u-1,c:o.length+c-1}})),o.push(""!==s?s:null),c)for(var f=0;f<c-1;++f)o.push(null)}t.push(o)},l=0;l<r.length;++l)o(l);return[t,n]}(document.getElementById(e)),r=t[1],c=t[0],u="SheetJS",s=new a,f=l(c);f["!merges"]=r,s.SheetNames.push(u),s.Sheets.SheetJS=f;var h=o.write(s,{bookType:"xlsx",bookSST:!1,type:"binary"});n.exports.saveAs(new Blob([i(h)],{type:"application/octet-stream"}),"test.xlsx")}function u(t){var r,c,u,s,f,h=null!==(r=null==t?void 0:t.filename)&&void 0!==r?r:"defaultExcel",v=null!==(c=null==t?void 0:t.bookType)&&void 0!==c?c:"xlsx",p=null!==(u=null==t?void 0:t.multiHeader)&&void 0!==u?u:[],g=null!==(s=null==t?void 0:t.merges)&&void 0!==s?s:[],d=null===(f=t.autoWidth)||void 0===f||f,y=e(t.data);y.unshift(t.header);for(var m=p.length-1;m>-1;m--)y.unshift(p[m]);var S="SheetJS",b=new a,w=l(y);if(g.length>0&&(w["!merges"]||(w["!merges"]=[]),g.forEach((function(e){w["!merges"].push(o.utils.decode_range(e))}))),d){for(var x=y.map((function(e){return e.map((function(e){return null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}}))})),A=x[0],T=1;T<x.length;T++)for(var E=0;E<x[T].length;E++)A[E].wch<x[T][E].wch&&(A[E].wch=x[T][E].wch);w["!cols"]=A}b.SheetNames.push(S),b.Sheets.SheetJS=w;var _=o.write(b,{bookType:v,bookSST:!1,type:"binary"});n.exports.saveAs(new Blob([i(_)],{type:"application/octet-stream"}),"".concat(h,".").concat(v))}t("default",{exportTableToExcel:c,exportJsonToExcel:u})}}}))}();