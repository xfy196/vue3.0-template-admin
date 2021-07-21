/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(r,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])})(r,n)};function r(r,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}var n=function(){return(n=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++)for(var e in r=arguments[n])Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t}).apply(this,arguments)};function o(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(o=Object.getOwnPropertySymbols(t);e<o.length;e++)r.indexOf(o[e])<0&&Object.prototype.propertyIsEnumerable.call(t,o[e])&&(n[o[e]]=t[o[e]])}return n}function e(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;var o=Array(t),e=0;for(r=0;r<n;r++)for(var a=arguments[r],c=0,l=a.length;c<l;c++,e++)o[e]=a[c];return o}function a(t,r,n){if(n||2===arguments.length)for(var o,e=0,a=r.length;e<a;e++)!o&&e in r||(o||(o=Array.prototype.slice.call(r,0,e)),o[e]=r[e]);return t.concat(o||r)}export{r as _,e as a,a as b,n as c,o as d};
