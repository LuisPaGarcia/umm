!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=10)}([function(e,t,n){var a=n(6);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(3).default)("585d91bb",a,!0,{})},function(e,t,n){var a=n(8);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(3).default)("e61a93e0",a,!0,{})},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var o,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);a&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";function a(e,t){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],o=i[0],s={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return m}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,d=function(){},u=null,g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,r){l=n,u=r||{};var o=a(e,t);return p(o),function(t){for(var n=[],r=0;r<o.length;r++){var s=o[r];(c=i[s.id]).refs--,n.push(c)}t?p(o=a(e,t)):o=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}}function p(e){for(var t=0;t<e.length;t++){var n=e[t],a=i[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(h(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(h(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:o}}}}function f(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function h(e){var t,n,a=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(a){if(l)return d;a.parentNode.removeChild(a)}if(g){var r=c++;a=s||(s=f()),t=b.bind(null,a,r,!1),n=b.bind(null,a,r,!0)}else a=f(),t=_.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var y,v=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function b(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function _(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),u.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},function(e,t){const n=function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(let t=0,n="áéíóúöüñ".length;t<n;t++)e=e.replace(new RegExp("áéíóúöüñ".charAt(t),"g"),"aeiououn".charAt(t));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")};String.prototype.showMatching=function(e){for(var t=e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),n=new RegExp(t,"ig"),a=this;null!=(match=n.exec(this));)a=[(a=[a.slice(0,match.index),"<span>",a.slice(match.index)].join("")).slice(0,match.index+"<span>".length+e.length),"</span>",a.slice(match.index+"<span>".length+e.length)].join("");return a},e.exports={mtdBlurSearchInput:function(){},mtdDisplaySuggestions:function(){this.vdInputSuggestionTerm.length},mtdSuggestSearchTermChanged:function(){const e=[];if(0!==this.vdInputSuggestionTerm.length){var t=this._data;this.vpMemeList.forEach((function(a){""!==a.img&&(n(a.name).indexOf(n(t.vdInputSuggestionTerm))>-1||n(String(a.year)).indexOf(n(t.vdInputSuggestionTerm))>-1||n(String(a.category)).indexOf(n(t.vdInputSuggestionTerm))>-1)&&e.push({img:a.img,name:a.name.showMatching(t.vdInputSuggestionTerm),editable:a.editable})})),this.vdMatchingMemes=e}},mtdSuggestionSelected:function(e,t){},mtdMemeClicked:function(e){this.$emit("memeclicked",e)}}},function(e,t,n){"use strict";var a=n(0);n.n(a).a},function(e,t,n){(t=n(2)(!1)).push([e.i,"",""]),e.exports=t},function(e,t,n){"use strict";var a=n(1);n.n(a).a},function(e,t,n){(t=n(2)(!1)).push([e.i,".search__input{margin-top:10px;border:1px #666 solid;border-radius:5px;padding:10px 20px}.search__input:focus{border:1px #999 solid;outline:none}.search__results{display:flex;flex-wrap:wrap;list-style:none;margin:10px 0 0;padding:0}.search__results.search__results--cols3 li{width:33.3333%}.search__results.search__results--cols4 li{width:25%}.search__results li{box-sizing:border-box;display:block;margin:0;overflow:hidden;padding:0 5px 10px;width:50%;text-align:center}.search__results li img{display:block;width:100%}.search__suggestion span{font-weight:bold}.search__suggestion__title{padding-top:10px;text-align:center;width:100%}.search__suggestion__link{font-size:16px;color:#666;display:block;padding:5px 0}.search__suggestion__btn{background:#aaa;border:0;border-radius:5px;color:#fff;cursor:pointer;display:block;font-size:13px;margin:0 auto;padding:7px 12px}\n",""]),e.exports=t},function(e,t){e.exports=[{name:"Baby Yoda",img:"baby-yoda.png",editable:!0,year:2019,category:""},{name:"Me and the Boys",img:"me-and-the-boys.png",editable:!0,year:2019,category:""},{name:"Stonks",img:"stonks.png",editable:!0,year:2019,category:""},{name:"Woman Yelling at a Cat",img:"woman-yelling-at-a-cat.jpg",editable:!0,year:2019,category:""},{name:"Joker stairs",img:"joker-stairs.jpg",editable:!0,year:2019,category:""},{name:"Boomer vs Zoomer",img:"boomer-vs-zoomer.jpg",editable:!0,year:2019,category:""},{name:"American Chopper Argument",img:"american-chopper-argument.jpg",editable:!0,year:2018,category:""},{name:"Bongo Cat",img:"bongo-cat.jpg",editable:!0,year:2018,category:""},{name:"Bowsette",img:"bowsette.jpg",editable:!0,year:2018,category:""},{name:"Is This a Pigeon?",img:"is-this-a-pidgeon.jpg",editable:!0,year:2018,category:""},{name:"Kongchetumare",img:"kongchetumare.jpg",editable:!0,year:2018,category:""},{name:"Moth Lamp",img:"moth-lamp.jpg",editable:!0,year:2018,category:""},{name:"Steamed Hams / Hamburguejas al vapor",img:"steamed-hams.jpg",editable:!0,year:2018,category:"simpsons"},{name:"Surprised Pikachu",img:"surprised-pikachu.jpg",editable:!0,year:2018,category:""},{name:"Burns pero la concha de tu madre (blank)",img:"burns-pero-la-concha-de-tu-madre-blank.jpg",editable:!0,year:2019,category:"simpsons"},{name:"Burns pero la concha de tu madre",img:"burns-pero-la-concha-de-tu-madre.jpg",editable:!0,year:2019,category:"simpsons"},{name:"Rafa: Estoy feliz y enojado",img:"rafa-estoy-feliz-y-enojado.jpg",editable:!0,category:"simpsons"},{name:"Homero: Poder político",img:"homero-poder-politico.jpg",editable:!0,category:"simpsons"},{name:"Usted no aprende verdad",img:"usted-no-aprende-verdad.jpg",editable:!0,category:"simpsons"},{name:"Profesor Cocoon: Yo diría que sí",img:"yo-diria-que-si.jpg",editable:!0,category:"simpsons"},{name:"Skinner: no hay cuerpos",img:"skinner-no-hay-cuerpos.jpg",editable:!0,category:"simpsons"},{name:"Todo marcha bien Milhouse",img:"todo-marcha-bien-milhouse.jpg",editable:!0,category:"simpsons"},{name:"Lisa café",img:"lisa-cafe.jpg",editable:!0,category:"simpsons"},{name:"Lester",img:"lester.jpg",editable:!0,category:"simpsons"},{name:"Spider-Man pointing at Spider-Man",img:"spiderman-spiderman.jpg",editable:!0,category:"spiderman"},{name:"George Harrison en los Simpson: esto ya se ha visto",img:"esto-ya-se-ha-visto.jpg",editable:!0,category:"simpsons"},{name:"Si ya saben como me pongo para qué me invitan",img:"si-ya-saben-como-me-pongo.jpg",editable:!0,category:""},{name:"Conceited reaction",img:"conceited-reaction.gif",editable:!1,category:""},{name:"El Diablo",img:"el-diablo.gif",editable:!1,category:""},{name:"¿Por qué eres así?",img:"por-que-eres-asi.jpg",editable:!0,category:""},{name:"¿Por qué eres así?",img:"wey-ya.jpg",editable:!0,category:""},{name:"Roll Safe",img:"roll-safe.jpg",editable:!0,category:""},{name:"Just right",img:"just-right.jpg",editable:!0,category:""},{name:"White guy blinking",img:"white-guy-blinking.gif",editable:!1,category:""},{name:"Me explaining to my mom",img:"me-explaining-to-my-mom.jpg",editable:!0,category:""},{name:"Amargo y retruco animé",img:"amargo-y-retruco-anime.jpg",editable:!0,category:"argentina argentinos"},{name:"Gay Jesus enters",img:"gay-jesus-enters.gif",editable:!1,category:""},{name:"Terraplanista Rex",img:"terraplanista-rex.jpg",editable:!0,category:""},{name:"Ugly Sonic The Movie",img:"ugly-sonic-the-movie.jpg",editable:!0,category:"",year:2019}]},function(e,t,n){"use strict";n.r(t);var a={props:{vpMemeList:{required:!0,type:Array},vpCols:{default:2,type:Number}},methods:{mtdEditSelected:function(e){window.location.href="edit.html?i="+e}}};n(5);function r(e,t,n,a,r,i,o,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}var i=r(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"search__results",class:{"search__results--cols3":3===e.vpCols,"search__results--cols4":4===e.vpCols}},e._l(e.vpMemeList,(function(t,a){return n("li",{key:a,staticClass:"search__suggestion"},[n("img",{attrs:{src:"memes/"+t.img}}),e._v(" "),n("div",{staticClass:"search__suggestion__title",domProps:{innerHTML:e._s(t.name)}}),e._v(" "),n("a",{staticClass:"search__suggestion__link",attrs:{href:"memes/"+t.img,download:""},on:{click:function(n){return n.preventDefault(),e.$emit("memeclicked",t)}}},[e._v("\n      Download\n    ")]),e._v(" "),t.editable?n("button",{staticClass:"search__suggestion__btn",on:{click:function(n){return e.mtdEditSelected(t.img)}}},[e._v("\n      Edit\n    ")]):e._e()])})),0)}),[],!1,null,null,null).exports,o=n(4),s={components:{memelist:i},props:{vpMemeList:{required:!0,type:Array}},data:function(){return{vdInputSuggestionTerm:"",vdMatchingMemes:[]}},mounted:function(){this.$refs.searchinput.value=""},methods:o},c=(n(7),r(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"2px 10px 10px",background:"#eee","margin-top":"10px","border-radius":"5px"}},[n("form",{attrs:{autocomplete:"off"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.vdInputSuggestionTerm,expression:"vdInputSuggestionTerm"}],ref:"searchinput",staticClass:"search__input",attrs:{type:"text",placeholder:"Search meme by name, year or category"},domProps:{value:e.vdInputSuggestionTerm},on:{blur:e.mtdBlurSearchInput,focus:e.mtdDisplaySuggestions,keyup:e.mtdSuggestSearchTermChanged,input:function(t){t.target.composing||(e.vdInputSuggestionTerm=t.target.value)}}})]),e._v(" "),""!==e.vdInputSuggestionTerm?n("memelist",{attrs:{"vp-meme-list":e.vdMatchingMemes},on:{memeclicked:e.mtdMemeClicked}}):e._e()],1)}),[],!1,null,null,null).exports),l=n(9);let d=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}(l);d=d.slice(0,8),new Vue({el:"#app",components:{memelist:i,search:c},data:function(){return{vdFrequent:[],vdMemeList:l,vdRandomMemes:d}},mounted:function(){var e=[],t=window.localStorage.getItem("memesd3_frequent");null===t&&(t="[]");try{e=JSON.parse(t)}catch(t){e=[]}this.vdFrequent=e},methods:{memeClicked:function(e){var t=[],n=window.localStorage.getItem("memesd3_frequent");null===n&&(n="[]");try{t=JSON.parse(n)}catch(e){t=[]}var a=!1;t.forEach((function(t){t.name===e.name&&(a=!0)})),a||(t.length>5&&(t=t.slice(1,4)),t.push({name:e.name,img:e.img,editable:e.editable}),window.localStorage.setItem("memesd3_frequent",JSON.stringify(t))),this.vdFrequent=t;var r="memes/"+e.img,i=document.createElement("A");i.href=r,i.style.display="block",i.style.overflow="hidden",i.style.width="0",i.style.height="0",i.download=r.substr(r.lastIndexOf("/")+1),document.body.appendChild(i),i.click(),document.body.removeChild(i)}}})}]);