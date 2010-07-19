/*------------------------------------------------------------------------------
Function:      EmmissionsTest.js
Author:        Aaron Gustafson (aaron at easy-designs dot net)
Creation Date: 2010-07-19
Version:       0.1
Homepage:      http://github.com/easy-designs/EmissionsTest.js
License:       MIT License (see homepage)
------------------------------------------------------------------------------*/
(function(h,f){var j="EmissionsTest.js",a={},g=[];for(var c in h){a[c]=""}function i(){setTimeout(e,2000)}function e(){for(var d in h){if(!(d in a)){g.push(d)}}b()}function b(){var m={},l=g.length,k=j+" found "+l+" objects added to the global namespace",d=h.console;if(d){d.log(k);while(l--){m[g[l]]=h[g[l]]}d.log(m)}else{d=f.createElement("p");d.style.background="#fff";d.style.border="10px solid";d.style.color="#333";d.style.marginLeft="-25%";d.style.padding="10px";d.style.position="absolute";d.style.top="100px";d.style.zIndex="1000";d.style.left=d.style.width="50%";d.innerHTML=k+":<br/>"+g.join(", ")+".";f.body.appendChild(d)}}(function(){var l="DOMContentLoaded",k="onreadystatechange",m=false,o="complete",n=h.onload,d=f.documentElement.doScroll;if(f.addEventListener){f.addEventListener(l,function(){f.removeEventListener(l,arguments.callee,m);i()},m)}else{if(f.attachEvent){f.attachEvent(k,function(){if(f.readyState===o){f.detachEvent(k,arguments.callee);i()}});if(d&&h==h.top){(function(){try{d("left")}catch(p){setTimeout(arguments.callee,0);return}i()})()}}}})()})(window,document);