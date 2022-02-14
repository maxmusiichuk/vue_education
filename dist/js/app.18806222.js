(function(t){function e(e){for(var a,o,r=e[0],i=e[1],c=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(u.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},u=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00e3":function(t,e,n){"use strict";n("660c")},"20d5":function(t,e,n){},"2ad0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Todo")],1)},u=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-app"},[n("Input"),n("Output",{attrs:{"api-data":t.dataForOutput}})],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-input--wrapper"},[n("div",{staticClass:"header-title"},[t._v("TODO LIST")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input-field",attrs:{placeholder:t.placeholderValue,type:"text"},domProps:{value:t.inputValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnterKey.apply(null,arguments)},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})])},c=[],l=n("5530"),p=n("2f62"),d={name:"Input",data:function(){return{inputValue:"",localValue:"",taskId:0,placeholderValue:"Enter task & press Enter"}},computed:Object(l["a"])({},Object(p["c"])({storeValue:function(t){return t.main.storeValue}})),created:function(){this.localValue=this.storeValue},watch:{inputValue:function(){document.body.style.backgroundColor=this.inputValue}},methods:{taskFormatter:function(t){return{id:this.taskId,name:t,doneStatus:!1}},onEnterKey:function(){this.inputValue.length>=3&&(this.$store.commit("main/setTask",this.taskFormatter(this.inputValue)),this.taskId++,this.inputValue="")}}},f=d,m=(n("fa4e"),n("2877")),h=Object(m["a"])(f,i,c,!1,null,"6e15696a",null),k=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-output--wrapper"},[n("LeftSide")],1)},b=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-wrapper"},[n("ul",{staticClass:"task-list-wrapper"},t._l(t.tasksOutput,(function(e,a){return n("li",{key:e.id,staticClass:"task-list--item"},[n("div",{staticClass:"inside-items"},[n("span",{staticClass:"checkbox-item"},[n("input",{staticClass:"checkbox-switch",attrs:{type:"checkbox"},domProps:{value:e.id},on:{click:function(n){return t.setTaskStatus(e)}}})]),n("p",{class:["task-id",{"done-task":e.doneStatus}],staticStyle:{"text-align":"left"}},[t._v(" "+t._s(e.name))])]),n("div",{staticClass:"outside-items",on:{click:function(e){return t.removeItem(a)}}},[n("p",{staticStyle:{color:"#81a9d4"}},[t._v("X")])])])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tasksOutput.length>0,expression:"tasksOutput.length > 0"}],staticClass:"todo__buttons-wrapper"},[n("div",{staticClass:"delete-done__button",on:{click:t.clearDoneTasks}},[n("p",[t._v("Clear done tasks")])]),n("div",{staticClass:"delete-done__button",on:{click:t.removeAllItems}},[n("p",[t._v("Clear all")])])])])},y=[],_=(n("d3b7"),n("159b"),{name:"LeftSide",data:function(){return{tasksOutput:"",storeTask:{}}},computed:Object(l["a"])(Object(l["a"])({},Object(p["c"])({task:function(t){return t.main.tasks}})),Object(p["b"])({})),created:function(){this.tasksOutput=this.$store.getters["main/getTasks"]},watch:{task:function(){this.tasksOutput=this.task}},methods:{clearDoneTasks:function(){var t=[];this.task.forEach((function(e){0==e.doneStatus&&t.push(e)})),this.$store.commit("main/changeTaskStatus",t)},setTaskStatus:function(t){t.doneStatus=!t.doneStatus},removeItem:function(t){this.$store.commit("main/removeTask",t)},removeAllItems:function(){this.$store.commit("main/clearAllTasks")}}}),g=_,w=(n("950e"),Object(m["a"])(g,O,y,!1,null,"68e3bd52",null)),T=w.exports,j={components:{LeftSide:T},props:["apiData"],name:"Output",data:function(){return{outputData:""}},computed:Object(l["a"])({},Object(p["c"])({outputLocal:function(t){return t.main.storeValue}})),watch:{outputLocal:function(){this.outputData=this.outputLocal}}},S=j,x=(n("cfb7"),Object(m["a"])(S,v,b,!1,null,"fb9905fa",null)),C=x.exports,V={name:"Todo",data:function(){return{dataForOutput:""}},components:{Input:k,Output:C}},E=V,I=(n("00e3"),Object(m["a"])(E,o,r,!1,null,"3193afd6",null)),$=I.exports,P={name:"App",data:function(){return{}},components:{Todo:$},created:function(){},methods:{}},L=P,D=(n("5c0b"),Object(m["a"])(L,s,u,!1,null,null,null)),A=D.exports,F=(n("a434"),function(){return{tasks:[]}}),M={getTasks:function(t){return t.tasks}},J={},K={setTask:function(t,e){t.tasks.push(e)},removeTask:function(t,e){1==t.tasks.length?t.tasks=[]:t.tasks.splice(e,1)},changeTaskStatus:function(t,e){t.tasks=[],t.tasks=e},clearAllTasks:function(t,e){t.tasks=[]}},N={namespaced:!0,state:F,getters:M,actions:J,mutations:K};a["a"].use(p["a"]);var X=function(){return new p["a"].Store({modules:{main:N}})},q=X;a["a"].use(p["a"]),a["a"].config.productionTip=!1,new a["a"]({store:q,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"637e":function(t,e,n){},"660c":function(t,e,n){},"950e":function(t,e,n){"use strict";n("2ad0")},"9c0c":function(t,e,n){},cfb7:function(t,e,n){"use strict";n("637e")},fa4e:function(t,e,n){"use strict";n("20d5")}});
//# sourceMappingURL=app.18806222.js.map