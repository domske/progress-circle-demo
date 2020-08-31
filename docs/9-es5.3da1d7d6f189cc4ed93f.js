function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"XAn/":function(e,t,r){"use strict";r.r(t),r.d(t,"ui_progress_circle",(function(){return n}));var s=r("x8+R"),a={success:{base:"#27ae60",contrast:"#ffffff"},info:{base:"#2980b9",contrast:"#ffffff"},warning:{base:"#f3d112",contrast:"#000000"},danger:{base:"#c0392b",contrast:"#ffffff"}},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=a[e]||{base:e,contrast:"currentColor"};return t?{color:r.base}:{"background-color":r.base,color:r.contrast}},n=function(){function e(t){_classCallCheck(this,e),Object(s.j)(this,t),this.value=-1,this.radius=100,this.stroke=10,this.shape="butt"}return _createClass(e,[{key:"isIndeterminate",value:function(){return this.value<0}},{key:"render",value:function(){var e=this.radius>100?100:this.radius,t=this.stroke>e?e:this.stroke,r=e-t/2,a=2*r*Math.PI,n=a-this.value/100*a;return Object(s.h)(s.b,{class:{indeterminate:this.isIndeterminate()}},Object(s.h)("svg",{viewBox:"0 0 200 200",width:"100%",height:"100%",style:Object.assign({"--circle-dash":""+a,"--circle-dash-inv":""+(1-a)},i(this.color,!0))},Object(s.h)("circle",{"stroke-dashoffset":n,"stroke-width":t,"stroke-linecap":this.shape,fill:"transparent",r:r,cx:"100",cy:"100"})))}},{key:"el",get:function(){return Object(s.g)(this)}}]),e}();n.style=":host{display:-ms-inline-flexbox;display:inline-flex;overflow:hidden;width:100%;height:100%}:host svg{width:100%;height:100%}:host circle{-webkit-transition:stroke-dashoffset 300ms;transition:stroke-dashoffset 300ms;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;stroke-dasharray:var(--circle-dash);stroke:currentColor}:host(.indeterminate) svg{-webkit-animation:rotate 1.1s linear infinite;animation:rotate 1.1s linear infinite}:host(.indeterminate) svg circle{stroke-dashoffset:0;-webkit-animation:dash 1.8s ease-in-out infinite;animation:dash 1.8s ease-in-out infinite}:host(.no-animation) circle{-webkit-transition:none !important;transition:none !important}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:0 var(--circle-dash);stroke-dashoffset:0}100%{stroke-dasharray:var(--circle-dash) var(--circle-dash);stroke-dashoffset:var(--circle-dash-inv)}}@keyframes dash{0%{stroke-dasharray:0 var(--circle-dash);stroke-dashoffset:0}100%{stroke-dasharray:var(--circle-dash) var(--circle-dash);stroke-dashoffset:var(--circle-dash-inv)}}"}}]);