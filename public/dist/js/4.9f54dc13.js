(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{ADMZ:function(t,a,n){"use strict";n.r(a);var r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-app",[n("v-toolbar",{attrs:{app:"",dark:""}},[n("v-toolbar-title",[t._v("Dining Room")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-chip",[n("v-avatar",[n("img",{attrs:{src:t.state.currentUser.photoURL}})]),t._v("\n          "+t._s(t.state.currentUser.displayName)+" \n        ")],1),t._l(t.links,function(a){return a.restaurant!==t.state.restaurant?n("v-btn",{key:a.name,attrs:{flat:""},on:{click:function(n){t.$router.push(a.uri)}}},[t._v("\n         "+t._s(a.name)+"\n       ")]):t._e()}),n("v-btn",{attrs:{flat:""},on:{click:t.logout}},[t._v("Logout")])],2)],1),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},e=[],s=(n("VRzm"),n("iqUP")),o=n.n(s),u=n("wNa6"),i={name:"layout",methods:{logout:function(){o.a.auth().signOut()}},data:function(){return{state:u["a"].state,links:[{name:"Search",uri:"home",restaurant:!0},{name:"Bookings",uri:"bookings"}]}},created:function(){var t=o.a.auth().currentUser;t&&u["a"].updateCurrentUser(t)}},c=i,l=(n("a9ks"),n("KHd+")),v=Object(l["a"])(c,r,e,!1,null,null,null);a["default"]=v.exports},RfOX:function(t,a,n){},a9ks:function(t,a,n){"use strict";var r=n("RfOX"),e=n.n(r);e.a}}]);
//# sourceMappingURL=4.9f54dc13.js.map