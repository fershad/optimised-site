function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,r){return!r||"object"!==n(r)&&"function"!=typeof r?e(t):r}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a,c,u,l=(function(t){var e=function(t){var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===y)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=y;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",y="executing",d="completed",v={};function b(){}function m(){}function g(){}var w={};w[a]=function(){return this};var x=Object.getPrototypeOf,k=x&&x(x(C([])));k&&k!==r&&o.call(k,a)&&(w=k);var _=g.prototype=b.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function $(t,e){function r(i,a,c,u){var l=s(t[i],t,a);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"===n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=_.constructor=g,g.constructor=m,m.displayName=l(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E($.prototype),$.prototype[c]=function(){return this},t.AsyncIterator=$,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new $(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),l(_,u,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(c={path:a,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&c.path)}},c.exports),c.exports);function f(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||p(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(){}function m(t){return t()}function g(){return Object.create(null)}function w(t){t.forEach(m)}function x(t){return"function"==typeof t}function k(t,e){return t!=t?e==e:t!==e||t&&"object"===n(t)||"function"==typeof t}function _(t,e){t.appendChild(e)}function E(t,e,r){t.insertBefore(e,r||null)}function $(t){t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function L(){return j(" ")}function S(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function C(t){return Array.from(t.childNodes)}function A(t){u=t}var P=[],N=[],I=[],T=[],R=Promise.resolve(),G=!1;function F(t){I.push(t)}var z=!1,M=new Set;function q(){if(!z){z=!0;do{for(var t=0;t<P.length;t+=1){var e=P[t];A(e),D(e.$$)}for(A(null),P.length=0;N.length;)N.pop()();for(var r=0;r<I.length;r+=1){var n=I[r];M.has(n)||(M.add(n),n())}I.length=0}while(P.length);for(;T.length;)T.pop()();G=!1,z=!1,M.clear()}}function D(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}var W,B=new Set;function H(t,e){t&&t.i&&(B.delete(t),t.i(e))}function J(t,e){var r,o=e.token={};function i(t,r,n,i){if(e.token===o){e.resolved=i;var a=e.ctx;void 0!==n&&((a=a.slice())[n]=i);var c=t&&(e.current=t)(a),u=!1;e.block&&(e.blocks?e.blocks.forEach((function(t,n){n!==r&&t&&(W={r:0,c:[],p:W},function(t,e,r,n){if(t&&t.o){if(B.has(t))return;B.add(t),W.c.push((function(){B.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}(t,1,1,(function(){e.blocks[n]===t&&(e.blocks[n]=null)})),W.r||w(W.c),W=W.p)})):e.block.d(1),c.c(),H(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[r]=c),u&&q()}}if((r=t)&&"object"===n(r)&&"function"==typeof r.then){var a=function(){if(!u)throw new Error("Function called outside component initialization");return u}();if(t.then((function(t){A(a),i(e.then,1,e.value,t),A(null)}),(function(t){if(A(a),i(e.catch,2,e.error,t),A(null),!e.hasCatch)throw t})),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function U(t,e,r){var n=t.$$,o=n.fragment,i=n.on_mount,a=n.on_destroy,c=n.after_update;o&&o.m(e,r),F((function(){var e=i.map(m).filter(x);a?a.push.apply(a,d(e)):w(e),t.$$.on_mount=[]})),c.forEach(F)}function Y(t,e){-1===t.$$.dirty[0]&&(P.push(t),G||(G=!0,R.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}var K=function(){function e(){t(this,e)}var r,n,o;return r=e,(n=[{key:"$destroy",value:function(){var t,e;t=1,null!==(e=this.$$).fragment&&(w(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[]),this.$destroy=b}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&v(r.prototype,n),o&&v(r,o),e}();function Q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=i(t);if(e){var a=i(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return o(this,r)}}function V(t){var e;return{c:function(){(e=O("div")).innerHTML='<span id="wcb_g" class="svelte-oyx3ko">No results</span> \n      <a id="wcb_a" target="_blank" rel="noopener" href="https://websitecarbon.com" class="svelte-oyx3ko">Website Carbon</a>',S(e,"id","wcb_p")},m:function(t,r){E(t,e,r)},p:b,d:function(t){t&&$(e)}}}function X(t){var e,r,n,o,i,a,c,u,l,f,s,h,p,y=t[4].c+"",d=t[4].p+"";return{c:function(){e=O("div"),r=O("span"),n=j(y),o=j("g of CO"),(i=O("sub")).textContent="2",a=j("/view"),c=L(),(u=O("a")).textContent="Website Carbon",l=L(),f=O("span"),s=j("Cleaner than "),h=j(d),p=j("% of pages tested"),S(i,"class","svelte-oyx3ko"),S(r,"id","wcb_g"),S(r,"class","svelte-oyx3ko"),S(u,"id","wcb_a"),S(u,"target","_blank"),S(u,"rel","noopener"),S(u,"href","https://websitecarbon.com"),S(u,"class","svelte-oyx3ko"),S(e,"id","wcb_p"),S(f,"id","wcb_2"),S(f,"class","svelte-oyx3ko")},m:function(t,y){E(t,e,y),_(e,r),_(r,n),_(r,o),_(r,i),_(r,a),_(e,c),_(e,u),E(t,l,y),E(t,f,y),_(f,s),_(f,h),_(f,p)},p:b,d:function(t){t&&$(e),t&&$(l),t&&$(f)}}}function Z(t){var e;return{c:function(){(e=O("div")).innerHTML='<span id="wcb_g" class="svelte-oyx3ko">Measuring CO<sub class="svelte-oyx3ko">2</sub>…</span> \n      <a id="wcb_a" target="_blank" rel="noopener" href="https://websitecarbon.com" class="svelte-oyx3ko">Website Carbon</a>',S(e,"id","wcb_p")},m:function(t,r){E(t,e,r)},p:b,d:function(t){t&&$(e)}}}function tt(t){var e,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Z,then:X,catch:V,value:4,error:5};return J(t[0],r),{c:function(){e=O("div"),r.block.c(),S(e,"id","wcb"),S(e,"class","carbon carbonbadge wcb-d svelte-oyx3ko")},m:function(t,n){E(t,e,n),r.block.m(e,r.anchor=null),r.mount=function(){return e},r.anchor=null},p:function(e,n){var o=y(n,1)[0],i=(t=e).slice();i[4]=i[5]=r.resolved,r.block.p(i,o)},i:b,o:b,d:function(t){t&&$(e),r.block.d(),r.token=null,r=null}}}function et(t,e){return rt.apply(this,arguments)}function rt(){return(rt=s(l.mark((function t(e,r){var n,o;return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://optimised.email/.netlify/functions/recordCarbon?site=".concat(e,"&c=").concat(r),t.next=3,fetch(n);case 3:(o=t.sent).ok||console.log("Error saving carbon data",o);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function nt(t){var e=encodeURIComponent(window.location.href),r=function(){var t=s(l.mark((function t(){var r,n;return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://api.websitecarbon.com/b?url="+e);case 3:if((r=t.sent).ok){t.next=6;break}throw Error(r);case 6:return t.prev=6,t.next=9,r.json();case 9:return n=t.sent,localStorage.setItem("wcb_"+e,JSON.stringify(n)),t.abrupt("return",n);case 14:throw t.prev=14,t.t0=t.catch(6),console.log(t.t0),localStorage.removeItem("wcb_"+e),Error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(){return t.apply(this,arguments)}}();function n(){return(n=s(l.mark((function t(){var n,o,i;return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("fetch"in window)){t.next=13;break}if(!(n=localStorage.getItem("wcb_"+e))){t.next=8;break}return o=JSON.parse(n),(new Date).getTime()-o.t>864e5&&r(!1),et(e,o.c),t.abrupt("return",o);case 8:return t.next=10,r();case 10:return i=t.sent,et(e,i.c),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return[function(){return n.apply(this,arguments)}()]}var ot=new(function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(i,K);var o=Q(i);function i(r){var n,a;return t(this,i),n=o.call(this),document.getElementById("svelte-oyx3ko-style")||((a=O("style")).id="svelte-oyx3ko-style",a.textContent="#wcb.carbonbadge.svelte-oyx3ko.svelte-oyx3ko{font-size:var(--size-400);text-align:center;color:var(--color-dark);line-height:1.15}#wcb.carbonbadge.svelte-oyx3ko sub.svelte-oyx3ko{vertical-align:middle;position:relative;top:0.3em;font-size:var(--size-400)}#wcb.svelte-oyx3ko #wcb_g.svelte-oyx3ko,#wcb.svelte-oyx3ko #wcb_a.svelte-oyx3ko,#wcb.svelte-oyx3ko #wcb_2.svelte-oyx3ko{display:inline-flex;justify-content:center;align-items:center;text-align:center;line-height:1.15;text-decoration:none;margin:0.2em 0}#wcb.svelte-oyx3ko #wcb_g.svelte-oyx3ko,#wcb.svelte-oyx3ko #wcb_a.svelte-oyx3ko{padding:0.3em 0.5em;border:0.13em solid var(--color-primary)}#wcb.svelte-oyx3ko #wcb_g.svelte-oyx3ko{border-radius:0.3em 0 0 0.3em;background:var(--color-light-alt);border-right:0;min-width:8.2em}#wcb.svelte-oyx3ko #wcb_a.svelte-oyx3ko{border-radius:0 0.3em 0.3em 0;border-left:0;background:var(--color-dark);color:var(--color-light-alt);font-weight:700;border-color:var(--color-primary);box-shadow:none;left:-0.43em;position:relative}.wcb-d.svelte-oyx3ko #wcb_a.svelte-oyx3ko{color:var(--color-dark);background:var(--color-primary);border-color:var(--color-primary);font-family:var(--heading-font);box-shadow:none}.wcb-d.svelte-oyx3ko #wcb_2.svelte-oyx3ko{color:var(--color-light-alt)}",_(document.head,a)),function(t,e,r,n,o,i){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=u;A(t);var l=t.$$={fragment:null,ctx:null,props:i,update:b,not_equal:o,bound:g(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:g(),dirty:a,skip_bound:!1},f=!1;if(l.ctx=r?r(t,e.props||{},(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return l.ctx&&o(l.ctx[e],l.ctx[e]=n)&&(!l.skip_bound&&l.bound[e]&&l.bound[e](n),f&&Y(t,e)),r})):[],l.update(),f=!0,w(l.before_update),l.fragment=!!n&&n(l.ctx),e.target){if(e.hydrate){var s=C(e.target);l.fragment&&l.fragment.l(s),s.forEach($)}else l.fragment&&l.fragment.c();e.intro&&H(t.$$.fragment),U(t,e.target,e.anchor),q()}A(c)}(e(n),r,nt,tt,k,{}),n}return i}())({target:document.querySelector("#wcb-wrapper")});export default ot;
