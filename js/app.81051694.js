(function(t){function e(e){for(var a,s,o=e[0],u=e[1],c=e[2],l=0,d=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vueajax/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Paintings")]),n("router-link",{attrs:{to:"/statues"}},[t._v("Statues")]),n("router-link",{attrs:{to:"/info"}},[t._v("Info")])],1),n("hr"),n("router-view")],1)},i=[],s={name:"App",components:{},data:function(){return{state:"Paintings"}}},o=s,u=(n("034f"),n("2877")),c=Object(u["a"])(o,r,i,!1,null,null,null),p=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Paintings")]),n("table",[t._m(0),n("tbody",[t._l(t.paintings,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.title))]),n("td",[t._v(t._s(e.year))]),n("td",[t._v(t._s(e.on_display))]),n("td",[n("button",{on:{click:function(n){return t.deletePainting(e.id)}}},[t._v("Törlés")]),n("button",{on:{click:function(n){return t.editPainting(e.id)}}},[t._v("Szerkesztés")])])])})),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.id,expression:"painting.id"}],attrs:{type:"hidden"},domProps:{value:t.painting.id},on:{input:function(e){e.target.composing||t.$set(t.painting,"id",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.title,expression:"painting.title"}],attrs:{type:"text"},domProps:{value:t.painting.title},on:{input:function(e){e.target.composing||t.$set(t.painting,"title",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.year,expression:"painting.year"}],attrs:{type:"number"},domProps:{value:t.painting.year},on:{input:function(e){e.target.composing||t.$set(t.painting,"year",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.painting.on_display,expression:"painting.on_display"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.painting.on_display)?t._i(t.painting.on_display,null)>-1:t.painting.on_display},on:{change:function(e){var n=t.painting.on_display,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=t._i(n,i);a.checked?s<0&&t.$set(t.painting,"on_display",n.concat([i])):s>-1&&t.$set(t.painting,"on_display",n.slice(0,s).concat(n.slice(s+1)))}else t.$set(t.painting,"on_display",r)}}})]),n("td",[t.mod_new?n("button",{attrs:{disabled:t.saving},on:{click:t.newPainting}},[t._v("Létrehoz")]):t._e(),t.mod_new?t._e():n("button",{attrs:{disabled:t.saving},on:{click:t.savePainting}},[t._v("Mentés")]),t.mod_new?t._e():n("button",{attrs:{disabled:t.saving},on:{click:t.cancelEdit}},[t._v("Mégse")])])])],2)]),n("button",{on:{click:t.loadData}},[t._v("Adatok betöltése")])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Azonsító")]),n("th",[t._v("Cím")]),n("th",[t._v("Év")]),n("th",[t._v("Kiállítva(piros lap)")]),n("th",[t._v("Műveletek")])])])}],m=n("5530"),h=n("1da1"),g=(n("96cf"),n("d3b7"),n("e9c4"),{name:"Paintings",components:{},data:function(){return{mod_new:!0,saving:!1,painting:{id:null,title:"",year:"",on_display:!1},paintings:[]}},methods:{loadData:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/paintings");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.paintings=a;case 7:case"end":return e.stop()}}),e)})))()},deletePainting:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://127.0.0.1:8000/api/paintings/".concat(t),{method:"DELETE"});case 2:return a=n.sent,console.log(a),n.next=6,e.loadData();case 6:case"end":return n.stop()}}),n)})))()},newPainting:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.saving="disabled",e.next=3,fetch("http://127.0.0.1:8000/api/paintings",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t.painting)});case 3:return e.next=5,t.loadData();case 5:t.saving=!1,t.resetForm();case 7:case"end":return e.stop()}}),e)})))()},savePainting:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.saving="disabled",e.next=3,fetch("http://127.0.0.1:8000/api/paintings/".concat(t.painting.id),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t.painting)});case 3:return e.next=5,t.loadData();case 5:t.saving=!1,t.resetForm();case 7:case"end":return e.stop()}}),e)})))()},editPainting:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://127.0.0.1:8000/api/paintings/".concat(t));case 2:return a=n.sent,n.next=5,a.json();case 5:r=n.sent,e.painting=Object(m["a"])({},r),e.mod_new=!1;case 8:case"end":return n.stop()}}),n)})))()},cancelEdit:function(){this.resetForm()},resetForm:function(){this.painting={id:null,title:"",year:"",on_display:!1},this.mod_new=!0}},mounted:function(){this.loadData()}}),f=g,_=Object(u["a"])(f,d,v,!1,null,null,null),b=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Statues")]),n("table",[t._m(0),n("tbody",[t._l(t.statues,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),n("td",[n("router-link",{attrs:{to:"/statues/"+e.id}},[t._v(t._s(e.person))])],1),n("td",[t._v(t._s(e.height))]),n("td",[t._v(t._s(e.price))]),n("td",[n("button",{on:{click:function(n){return t.deleteStatue(e.id)}}},[t._v("Törlés")]),n("router-link",{attrs:{to:"/statues/"+e.id+"/edit"}},[t._v("Szerkesztés")])],1)])})),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.id,expression:"statue.id"}],attrs:{type:"hidden"},domProps:{value:t.statue.id},on:{input:function(e){e.target.composing||t.$set(t.statue,"id",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.person,expression:"statue.person"}],attrs:{type:"text"},domProps:{value:t.statue.person},on:{input:function(e){e.target.composing||t.$set(t.statue,"person",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.height,expression:"statue.height"}],attrs:{type:"number"},domProps:{value:t.statue.height},on:{input:function(e){e.target.composing||t.$set(t.statue,"height",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.price,expression:"statue.price"}],attrs:{type:"number"},domProps:{value:t.statue.price},on:{input:function(e){e.target.composing||t.$set(t.statue,"price",e.target.value)}}})]),n("td",[t.mod_new?n("button",{attrs:{disabled:t.saving},on:{click:t.newStatue}},[t._v("Létrehoz")]):t._e(),t.mod_new?t._e():n("button",{attrs:{disabled:t.saving},on:{click:t.saveStatue}},[t._v("Mentés")]),t.mod_new?t._e():n("button",{attrs:{disabled:t.saving},on:{click:t.cancelEdit}},[t._v("Mégse")])])])],2)]),n("button",{on:{click:t.loadData}},[t._v("Adatok betöltése")])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Azonsító")]),n("th",[t._v("Cím")]),n("th",[t._v("Év")]),n("th",[t._v("Kiállítva(piros lap)")]),n("th",[t._v("Műveletek")])])])}],x={name:"Statues",components:{},data:function(){return{mod_new:!0,saving:!1,statue:{id:null,person:"",height:"",price:""},statues:[]}},methods:{loadData:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/statues");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t.statues=a;case 7:case"end":return e.stop()}}),e)})))()},deleteStatue:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(t),{method:"DELETE"});case 2:return a=n.sent,console.log(a),n.next=6,e.loadData();case 6:case"end":return n.stop()}}),n)})))()},newStatue:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.saving="disabled",e.next=3,fetch("http://127.0.0.1:8000/api/statues",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t.statue)});case 3:return e.next=5,t.loadData();case 5:t.saving=!1,t.resetForm();case 7:case"end":return e.stop()}}),e)})))()},saveStatue:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.saving="disabled",e.next=3,fetch("http://127.0.0.1:8000/api/statues/".concat(t.statue.id),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t.statue)});case 3:return e.next=5,t.loadData();case 5:t.saving=!1,t.resetForm();case 7:case"end":return e.stop()}}),e)})))()},editStatue:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(t));case 2:return a=n.sent,n.next=5,a.json();case 5:r=n.sent,e.statue=Object(m["a"])({},r),e.mod_new=!1;case 8:case"end":return n.stop()}}),n)})))()},cancelEdit:function(){this.resetForm()},resetForm:function(){this.statue={id:null,person:"",height:"",price:""},this.mod_new=!0}},mounted:function(){this.loadData()}},j=x,k=Object(u["a"])(j,w,y,!1,null,null,null),O=k.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Statue "+t._s(t.$route.params.id))]),n("table",[n("tr",[n("td",[t._v("Person:")]),n("td",[t._v(t._s(t.statue.person))])]),n("tr",[n("td",[t._v("Height:")]),n("td",[t._v(t._s(t.statue.height))])]),n("tr",[n("td",[t._v("Price:")]),n("td",[t._v(t._s(t.statue.price))])])])])},S=[],$={data:function(){return{statue:{id:null,person:"",height:"",price:""}}},methods:{loadData:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,fetch("http://127.0.0.1:8000/api/statues/".concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t.statue=Object(m["a"])({},r);case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadData()}},R=$,D=Object(u["a"])(R,P,S,!1,null,null,null),E=D.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Statue "+t._s(t.$route.params.id))]),n("table",[n("tr",[n("td",[t._v("Person:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.person,expression:"statue.person"}],attrs:{type:"text"},domProps:{value:t.statue.person},on:{input:function(e){e.target.composing||t.$set(t.statue,"person",e.target.value)}}})])]),n("tr",[n("td",[t._v("Height:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.height,expression:"statue.height"}],attrs:{type:"number"},domProps:{value:t.statue.height},on:{input:function(e){e.target.composing||t.$set(t.statue,"height",e.target.value)}}})])]),n("tr",[n("td",[t._v("Price:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.price,expression:"statue.price"}],attrs:{type:"number"},domProps:{value:t.statue.price},on:{input:function(e){e.target.composing||t.$set(t.statue,"price",e.target.value)}}})])])]),n("button",{on:{click:t.saveData}},[t._v("Save")])])},T=[],N={data:function(){return{statue:{id:null,person:"",height:"",price:""}}},methods:{loadData:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,fetch("http://127.0.0.1:8000/api/statues/".concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t.statue=Object(m["a"])({},r);case 8:case"end":return e.stop()}}),e)})))()},saveData:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(t.statue.id),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t.statue)});case 2:t.$router.go(-1);case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadData()}},C=N,M=Object(u["a"])(C,A,T,!1,null,null,null),z=M.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("Info")])},J=[],H={},L=H,I=Object(u["a"])(L,F,J,!1,null,null,null),K=I.exports;a["a"].use(l["a"]),a["a"].config.productionTip=!1;var q=[{path:"/",component:b},{path:"/statues",component:O},{path:"/statues/:id",component:E},{path:"/statues/:id/edit",component:z},{path:"/info",component:K}],B=new l["a"]({routes:q});new a["a"]({render:function(t){return t(p)},router:B}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.81051694.js.map