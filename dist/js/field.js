!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e,t,n,r,i,l){var s,o=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,o=e.default);var a,u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i),l?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},u._ssrRegister=a):r&&(a=r),a){var f=u.functional,d=f?u.render:u.beforeCreate;f?(u._injectStyles=a,u.render=function(e,t){return a.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,a):[a]}return{esModule:s,exports:o,options:u}}},function(e,t,n){n(2),e.exports=n(9)},function(e,t,n){Nova.booting(function(e,t){e.component("index-external-url",n(3)),e.component("detail-external-url",n(6))})},function(e,t,n){var r=n(0)(n(4),n(5),!1,null,null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resourceName","field"],computed:{linkText:function(){return this.field.linkText?this.field.linkText:"External Link"}}}},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.field.value?t("div",[t("a",{staticClass:"no-underline text-90 block",attrs:{href:this.field.value,target:"_blank"}},[t("div",{staticClass:"flex items-center"},[t("svg",{staticClass:"fill-current w-4 h-4 mr-2 text-60",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[t("path",{attrs:{fill:"currentColor",d:"M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z"}})]),this._v(" "),t("span",[this._v(this._s(this.linkText))])])])]):t("p",[this._v("—")])])},staticRenderFns:[]}},function(e,t,n){var r=n(0)(n(7),n(8),!1,null,null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resource","resourceName","resourceId","field"],computed:{linkText:function(){return this.field.linkText?this.field.linkText:"External Link"}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("panel-item",{attrs:{field:e.field}},[n("template",{slot:"value"},[e.field.value?n("div",[n("a",{staticClass:"no-underline text-90 block",attrs:{href:e.field.value,target:"_blank"}},[n("div",{staticClass:"flex items-center"},[n("svg",{staticClass:"fill-current w-4 h-4 mr-2 text-60",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[n("path",{attrs:{fill:"currentColor",d:"M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z"}})]),e._v(" "),n("span",[e._v(e._s(e.linkText))])]),e._v(" "),n("span",{staticClass:"text-sm no-underline text-60"},[e._v(e._s(e.field.value))])])]):n("p",[e._v("—")])])],2)},staticRenderFns:[]}},function(e,t){}]);