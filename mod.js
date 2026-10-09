// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return Math.abs(n)}function r(){var r=function(){var r,t,u,e,f,i,o;return r=0,t=0,e=0,function(c){return 0===arguments.length?u?r+e+t:null:(u=!0,i=r+c,o=n(r)>=n(c)?r-i+c:c-i+r,r=i,i=e+o,f=n(e)>=n(o)?e-i+o:o-i+e,r+(e=i)+(t+=f))}}();return function(n,t){if(0===arguments.length)return r();return r(n*t)}}function t(n){return n!=n}function u(){var n=r();return function(r,u){if(0===arguments.length||t(r)||t(u))return n();return n(r,u)}}export{u as default};
//# sourceMappingURL=mod.js.map
