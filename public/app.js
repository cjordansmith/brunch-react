!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},r={},n={},o={}.hasOwnProperty,i=/^\.\.?(\/|$)/,u=function(e,t){for(var r,n=[],o=(i.test(t)?e+"/"+t:t).split("/"),u=0,a=o.length;u<a;u++)r=o[u],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},a=function(e){return e.split("/").slice(0,-1).join("/")},c=function(t){return function(r){var n=u(a(t),r);return e.require(n,t)}},f=function(e,t){var n=b&&b.createHot(e),o={id:e,exports:{},hot:n};return r[e]=o,t(o.exports,c(e),o),o.exports},l=function(e){return n[e]?l(n[e]):e},s=function(e,t){return l(u(a(e),t))},p=function(e,n){null==n&&(n="/");var i=l(e);if(o.call(r,i))return r[i].exports;if(o.call(t,i))return f(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};p.alias=function(e,t){n[t]=e};var d=/\.[^.\/]+$/,_=/\/index(\.[^\/]+)?$/,h=function(e){if(d.test(e)){var t=e.replace(d,"");o.call(n,t)&&n[t].replace(d,"")!==t+"/index"||(n[t]=e)}if(_.test(e)){var r=e.replace(_,"");o.call(n,r)||(n[r]=e)}};p.register=p.define=function(e,n){if(e&&"object"==typeof e)for(var i in e)o.call(e,i)&&p.register(i,e[i]);else t[e]=n,delete r[e],h(e)},p.list=function(){var e=[];for(var r in t)o.call(t,r)&&e.push(r);return e};var b=e._hmr&&new e._hmr(s,p,t,r);p._cache=r,p.hmr=b&&b.wrap,p.brunch=!0,e.require=p}}(),function(){var e;"undefined"==typeof window?this:window;require.register("components/App.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=t("react"),f=n(c),l=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement("div",{id:"content"},f["default"].createElement("h5",null,"Time to ",f["default"].createElement("a",{href:"https://facebook.github.io/react/"},"React"),"."))}}]),t}(f["default"].Component);e["default"]=l}),require.register("initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=t("react-dom"),i=n(o),u=t("react"),a=n(u),c=t("components/App"),f=n(c);document.addEventListener("DOMContentLoaded",function(){i["default"].render(a["default"].createElement(f["default"],null),document.querySelector("#app"))})}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,r){})}(),require("___globals___");