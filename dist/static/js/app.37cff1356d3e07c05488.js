webpackJsonp([2,0],[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=n(27),r=i(s),o=n(65),a=i(o),u=n(28),c=i(u);new r.default({el:"#app",template:"<App/>",store:c.default,components:{App:a.default}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(35),r=i(s),o=n(27),a=i(o),u=n(75),c=i(u);a.default.use(c.default);var l={itemList:[],survivingItemList:[],page:"welcome"},f={addItem:function(t,e){t.itemList.push(e)},removeItem:function(t,e){t.itemList=v(t.itemList,e)},removeAllItems:function(t){t.itemList=[]},beginTournament:function(t){t.page="tournament",t.survivingItemList=[].concat((0,r.default)(t.itemList))},beginRegistration:function(t){t.page="registration"},battle:function(t,e){var n=e.winner,i=e.loser;t.survivingItemList=v(t.survivingItemList,i),t.survivingItemList=v(t.survivingItemList,n),t.survivingItemList.push(n)}},m={},d={},v=function(t,e){return t.filter(function(t){return t!==e})};e.default=new c.default.Store({state:l,getters:d,actions:m,mutations:f})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(67),r=i(s),o=n(68),a=i(o),u=n(69),c=i(u);e.default={name:"app",components:{Registration:r.default,Tournament:a.default,Welcome:c.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"registered-items"}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(66),r=i(s);e.default={name:"registration",components:{RegisteredItems:r.default},data:function(){return{item:""}},methods:{submitItem:function(){this.$store.commit("addItem",this.item),this.item=""}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tournament",computed:{itemOne:function(){return this.$store.state.survivingItemList[0]},itemTwo:function(){return this.$store.state.survivingItemList[1]}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"welcome"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var i,s;n(62),i=n(29);var r=n(70);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,t.exports=i},function(t,e,n){var i,s;n(64),i=n(30);var r=n(74);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,t.exports=i},function(t,e,n){var i,s;n(63),i=n(31);var r=n(71);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,s._scopeId="data-v-292bd3c7",t.exports=i},function(t,e,n){var i,s;i=n(32);var r=n(72);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,t.exports=i},function(t,e,n){var i,s;i=n(33);var r=n(73);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},["registration"===t.$store.state.page?n("registration"):t._e(),t._v(" "),"tournament"===t.$store.state.page?n("tournament"):t._e(),t._v(" "),"welcome"===t.$store.state.page?n("welcome"):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("Set Up")]),t._v(" "),n("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.submitItem(e)}}},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label"},[t._v("What Shall Battle?")]),t._v(" "),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t._s(t.item)},on:{input:function(e){e.target.composing||(t.item=e.target.value)}}}),t._v(" "),t._m(0)])])]),t._v(" "),n("registered-items"),t._v(" "),t.$store.state.itemList.length>=2?n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label"},[t._v("Ready to Begin?")]),t._v(" "),n("div",{staticClass:"input-group"},[n("button",{staticClass:"btn btn-primary",on:{click:function(e){t.$store.commit("beginTournament")}}},[t._v("\n        Begin the Tournament!\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"input-group-btn"},[n("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Add"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Tournament")]),t._v(" "),1===t.$store.state.survivingItemList.length?n("div",{staticClass:"jumbotron"},[n("p",[t._v("The winner is...")]),t._v(" "),n("h1",[t._v(t._s(t.itemOne))]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-primary btn-lg",on:{click:function(e){t.$store.commit("beginRegistration")}}},[t._v("Start Another Tournament")])])]):n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-sm-5"},[n("div",{staticClass:"well"},[n("h3",[t._v(t._s(t.itemOne))]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(e){t.$store.commit("battle",{winner:t.itemOne,loser:t.itemTwo})}}},[t._v("\n          "+t._s(t.itemOne)+" Wins!\n        ")])])]),t._v(" "),n("div",{staticClass:"col-sm-2"},[n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("p",[t._v("vs")])]),t._v(" "),n("div",{staticClass:"col-sm-5"},[n("div",{staticClass:"well"},[n("h3",[t._v(t._s(t.itemTwo))]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(e){t.$store.commit("battle",{winner:t.itemTwo,loser:t.itemOne})}}},[t._v("\n          "+t._s(t.itemTwo)+" Wins!\n        ")])])]),t._v(" "),n("div",{staticClass:"col-sm-12"},[n("br"),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"btn btn-default",on:{click:function(e){t.$store.commit("beginRegistration")}}},[t._v("Quit")])])]),t._v(" ")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron"},[n("h1",[t._v("Mav's Tournaments")]),t._v(" "),n("p",[t._v("Let's play one now! What is the best cereal? What is the best dessert? What will Mav come up with next?")]),t._v(" "),n("p",[n("a",{staticClass:"btn btn-primary btn-lg",on:{click:function(e){t.$store.commit("beginRegistration")}}},[t._v("Start a Tournament")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-group"},t._l(t.$store.state.itemList,function(e){return n("li",{staticClass:"list-group-item"},[n("a",{staticClass:"pull-right",on:{click:function(n){t.$store.commit("removeItem",e)}}},[t._v("x")]),t._v(" "+t._s(e)+"\n  ")])}))},staticRenderFns:[]}}]);
//# sourceMappingURL=app.37cff1356d3e07c05488.js.map