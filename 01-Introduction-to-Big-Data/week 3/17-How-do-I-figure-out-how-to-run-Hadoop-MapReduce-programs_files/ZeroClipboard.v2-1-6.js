"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(b,y){var n=b,i=n.document,d=n.navigator,T=n.setTimeout,B=n.encodeURIComponent,Fe=n.ActiveXObject,Xe=n.Error,ie=n.Number.parseInt||n.parseInt,Y=n.Number.parseFloat||n.parseFloat,ze=n.Number.isNaN||n.isNaN,x=n.Math.round,X=n.Date.now,A=n.Object.keys,se=n.Object.defineProperty,l=n.Object.prototype.hasOwnProperty,Oe=n.Array.prototype.slice,Ne=function(){var e=function unwrapper(e){return e};if("function"==typeof n.wrap&&"function"==typeof n.unwrap)try{var t=i.createElement("div"),r=n.unwrap(t);1===t.nodeType&&r&&1===r.nodeType&&(e=n.unwrap)}catch(a){}return e}(),a=function _args(e){return Oe.call(e,0)},o=function _extend(){var t,s,n,e,u,r,o=a(arguments),i=o[0]||{};for(t=1,s=o.length;s>t;t++)if(null!=(n=o[t]))for(e in n)l.call(n,e)&&(u=i[e],r=n[e],i!==r&&r!==y&&(i[e]=r));return i},m=function _deepCopy(e){var t,n,a,r;if("object"!==("undefined"==typeof e?"undefined":_typeof(e))||null==e)t=e;else if("number"==typeof e.length)for(t=[],n=0,a=e.length;a>n;n++)l.call(e,n)&&(t[n]=_deepCopy(e[n]));else{t={};for(r in e)l.call(e,r)&&(t[r]=_deepCopy(e[r]))}return t},Ye=function _pick(n,t){for(var r={},e=0,a=t.length;a>e;e++)t[e]in n&&(r[t[e]]=n[t[e]]);return r},M=function _omit(t,r){var n={};for(var e in t)-1===r.indexOf(e)&&(n[e]=t[e]);return n},ee=function _deleteOwnProperties(e){if(e)for(var t in e)l.call(e,t)&&delete e[t];return e},z=function _containedBy(e,t){if(e&&1===e.nodeType&&e.ownerDocument&&t&&(1===t.nodeType&&t.ownerDocument&&t.ownerDocument===e.ownerDocument||9===t.nodeType&&!t.ownerDocument&&t===e.ownerDocument))do{if(e===t)return!0;e=e.parentNode}while(e);return!1},N=function _getDirPathOfUrl(e){var t;return"string"==typeof e&&e&&(t=e.split("#")[0].split("?")[0],t=e.slice(0,e.lastIndexOf("/")+1)),t},ue=function _getCurrentScriptUrlFromErrorStack(t){var n,e;return"string"==typeof t&&t&&(e=t.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),e&&e[1]?n=e[1]:(e=t.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),e&&e[1]&&(n=e[1]))),n},de=function _getCurrentScriptUrlFromError(){var t,e;try{throw new Xe}catch(n){e=n}return e&&(t=e.sourceURL||e.fileName||ue(e.stack)),t},ye=function _getCurrentScriptUrl(){var t,e,n;if(i.currentScript&&(t=i.currentScript.src))return t;if(e=i.getElementsByTagName("script"),1===e.length)return e[0].src||y;if("readyState"in e[0])for(n=e.length;n--;)if("interactive"===e[n].readyState&&(t=e[n].src))return t;if("loading"===i.readyState&&(t=e[e.length-1].src))return t;if(t=de())return t;return y},xe=function _getUnanimousScriptParentDir(){var n,e,t,r=i.getElementsByTagName("script");for(n=r.length;n--;){if(!(t=r[n].src)){e=null;break}if(t=N(t),null==e)e=t;else if(e!==t){e=null;break}}return e||y},Ee=function _getDefaultSwfPath(){var e=N(ye())||xe()||"";return e+"ZeroClipboard.swf"},t={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,deactivated:null,overdue:null,ready:null},I="11.0.0",c={},u,D,f={},C=null,Je={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate","flash-overdue":"Flash communication was established but NOT within the acceptable time limit"}},r={swfPath:Ee(),trustedDomains:b.location.host?[b.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},P=function _config(e){if("object"===("undefined"==typeof e?"undefined":_typeof(e))&&null!==e)for(var n in e)if(l.call(e,n))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(n))r[n]=e[n];else if(null==t.bridge)if("containerId"===n||"swfObjectId"===n){if(!ae(e[n]))throw new Error("The specified `"+n+"` value is not valid as an HTML4 Element ID");r[n]=e[n]}else r[n]=e[n];if("string"==typeof e&&e){if(l.call(r,e))return r[e];return}return m(r)},R=function _state(){return{browser:Ye(d,["userAgent","platform","appName"]),flash:M(t,["bridge"]),zeroclipboard:{version:e.version,config:e.config()}}},Z=function _isFlashUnusable(){return!!(t.disabled||t.outdated||t.unavailable||t.deactivated)},V=function _on(r,u){var n,i,a,o={};if("string"==typeof r&&r)a=r.toLowerCase().split(/\s+/);else if("object"===("undefined"==typeof r?"undefined":_typeof(r))&&r&&"undefined"==typeof u)for(n in r)l.call(r,n)&&"string"==typeof n&&n&&"function"==typeof r[n]&&e.on(n,r[n]);if(a&&a.length){for(n=0,i=a.length;i>n;n++)r=a[n].replace(/^on/,""),o[r]=!0,c[r]||(c[r]=[]),c[r].push(u);if(o.ready&&t.ready&&e.emit({type:"ready"}),o.error){var s=["disabled","outdated","unavailable","deactivated","overdue"];for(n=0,i=s.length;i>n;n++)if(t[s[n]]===!0){e.emit({type:"error",name:"flash-"+s[n]});break}}}return e},K=function _off(t,o){var n,s,i,a,r;if(0===arguments.length)a=A(c);else if("string"==typeof t&&t)a=t.split(/\s+/);else if("object"===("undefined"==typeof t?"undefined":_typeof(t))&&t&&"undefined"==typeof o)for(n in t)l.call(t,n)&&"string"==typeof n&&n&&"function"==typeof t[n]&&e.off(n,t[n]);if(a&&a.length)for(n=0,s=a.length;s>n;n++)if(t=a[n].toLowerCase().replace(/^on/,""),r=c[t],r&&r.length)if(o)for(i=r.indexOf(o);-1!==i;)r.splice(i,1),i=r.indexOf(o,i);else r.length=0;return e},U=function _listeners(e){var t;return t="string"==typeof e&&e?m(c[e])||null:m(c)},G=function _emit(n){var a,i,r;if(n=k(n),!n)return;if(ce(n))return;if("ready"===n.type&&t.overdue===!0)return e.emit({type:"error",name:"flash-overdue"});return a=o({},n),fe.call(this,a),"copy"===n.type&&(r=me(f),i=r.data,C=r.formatMap),i},J=function _create(){if("boolean"!=typeof t.ready&&(t.ready=!1),!e.isFlashUnusable()&&null===t.bridge){var n=r.flashLoadTimeout;"number"==typeof n&&n>=0&&T(function(){"boolean"!=typeof t.deactivated&&(t.deactivated=!0),t.deactivated===!0&&e.emit({type:"error",name:"flash-deactivated"})},n),t.overdue=!1,he()}},W=function _destroy(){e.clearData(),e.blur(),e.emit("destroy"),ve(),e.off()},q=function _setData(n,a){var t;if("object"===("undefined"==typeof n?"undefined":_typeof(n))&&n&&"undefined"==typeof a)t=n,e.clearData();else{if("string"!=typeof n||!n)return;t={},t[n]=a}for(var r in t)"string"==typeof r&&r&&l.call(t,r)&&"string"==typeof t[r]&&t[r]&&(f[r]=t[r])},Q=function _clearData(e){"undefined"==typeof e?(ee(f),C=null):"string"==typeof e&&l.call(f,e)&&delete f[e]},qe=function _getData(e){if("undefined"==typeof e)return m(f);if("string"==typeof e&&l.call(f,e))return f[e]},te=function _focus(e){if(!e||1!==e.nodeType)return;u&&(v(u,r.activeClass),u!==e&&v(u,r.hoverClass)),u=e,L(e,r.hoverClass);var n=e.getAttribute("title")||r.title;if("string"==typeof n&&n){var a=h(t.bridge);a&&a.setAttribute("title",n)}var i=r.forceHandCursor===!0||"pointer"===_e(e,"cursor");Ie(i),ke()},ne=function _blur(){var e=h(t.bridge);e&&(e.removeAttribute("title"),e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.top="1px"),u&&(v(u,r.hoverClass),v(u,r.activeClass),u=null)},re=function _activeElement(){return u||null},ae=function _isValidHtml4Id(e){return"string"==typeof e&&e&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)},k=function _createEvent(n){var r;if("string"==typeof n&&n?(r=n,n={}):"object"===("undefined"==typeof n?"undefined":_typeof(n))&&n&&"string"==typeof n.type&&n.type&&(r=n.type),!r)return;!n.target&&/^(copy|aftercopy|_click)$/.test(r.toLowerCase())&&(n.target=D),o(n,{type:r.toLowerCase(),target:n.target||u||null,relatedTarget:n.relatedTarget||null,currentTarget:t&&t.bridge||null,timeStamp:n.timeStamp||X()||null});var a=Je[n.type];return"error"===n.type&&n.name&&a&&(a=a[n.name]),a&&(n.message=a),"ready"===n.type&&o(n,{target:null,version:t.version}),"error"===n.type&&(/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(n.name)&&o(n,{target:null,minimumVersion:I}),/^flash-(outdated|unavailable|deactivated|overdue)$/.test(n.name)&&o(n,{version:t.version})),"copy"===n.type&&(n.clipboardData={setData:e.setData,clearData:e.clearData}),"aftercopy"===n.type&&(n=ge(n,C)),n.target&&!n.relatedTarget&&(n.relatedTarget=oe(n.target)),n=le(n)},oe=function _getRelatedTarget(e){var t=e&&e.getAttribute&&e.getAttribute("data-clipboard-target");return t?i.getElementById(t):null},le=function _addMouseData(e){if(e&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)){var a=e.target,d="_mouseover"===e.type&&e.relatedTarget?e.relatedTarget:y,p="_mouseout"===e.type&&e.relatedTarget?e.relatedTarget:y,l=j(a),v=n.screenLeft||n.screenX||0,m=n.screenTop||n.screenY||0,c=i.body.scrollLeft+i.documentElement.scrollLeft,f=i.body.scrollTop+i.documentElement.scrollTop,s=l.left+("number"==typeof e._stageX?e._stageX:0),u=l.top+("number"==typeof e._stageY?e._stageY:0),t=s-c,r=u-f,g=v+t,b=m+r,w="number"==typeof e.movementX?e.movementX:0,h="number"==typeof e.movementY?e.movementY:0;delete e._stageX,delete e._stageY,o(e,{srcElement:a,fromElement:d,toElement:p,screenX:g,screenY:b,pageX:s,pageY:u,clientX:t,clientY:r,x:t,y:r,movementX:w,movementY:h,offsetX:0,offsetY:0,layerX:0,layerY:0})}return e},O=function _shouldPerformAsync(e){var t=e&&"string"==typeof e.type&&e.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(t)},S=function _dispatchCallback(e,t,n,r){r?T(function(){e.apply(t,n)},0):e.apply(t,n)},fe=function _dispatchCallbacks(t){if("object"!==("undefined"==typeof t?"undefined":_typeof(t))||!t||!t.type)return;var p=O(t),u=c["*"]||[],f=c[t.type]||[],a=u.concat(f);if(a&&a.length){var r,l,e,i,s,d=this;for(r=0,l=a.length;l>r;r++)e=a[r],i=d,"string"==typeof e&&"function"==typeof n[e]&&(e=n[e]),"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e&&"function"==typeof e.handleEvent&&(i=e,e=e.handleEvent),"function"==typeof e&&(s=o({},t),S(e,i,[s],p))}return this},ce=function _preprocessEvent(n){var a=n.target||u||null,l="swf"===n._source;delete n._source;var y=["flash-disabled","flash-outdated","flash-unavailable","flash-deactivated","flash-overdue"];switch(n.type){case"error":-1!==y.indexOf(n.name)&&o(t,{disabled:"flash-disabled"===n.name,outdated:"flash-outdated"===n.name,unavailable:"flash-unavailable"===n.name,deactivated:"flash-deactivated"===n.name,overdue:"flash-overdue"===n.name,ready:!1});break;case"ready":var d=t.deactivated===!0;o(t,{disabled:!1,outdated:!1,unavailable:!1,deactivated:!1,overdue:d,ready:!d});break;case"beforecopy":D=a;break;case"copy":var s,c,i=n.relatedTarget;!f["text/html"]&&!f["text/plain"]&&i&&(c=i.value||i.outerHTML||i.innerHTML)&&(s=i.value||i.textContent||i.innerText)?(n.clipboardData.clearData(),n.clipboardData.setData("text/plain",s),c!==s&&n.clipboardData.setData("text/html",c)):!f["text/plain"]&&n.target&&(s=n.target.getAttribute("data-clipboard-text"))&&(n.clipboardData.clearData(),n.clipboardData.setData("text/plain",s));break;case"aftercopy":e.clearData(),a&&a!==Te()&&a.focus&&a.focus();break;case"_mouseover":e.focus(a),r.bubbleEvents===!0&&l&&(a&&a!==n.relatedTarget&&!z(n.relatedTarget,a)&&p(o({},n,{type:"mouseenter",bubbles:!1,cancelable:!1})),p(o({},n,{type:"mouseover"})));break;case"_mouseout":e.blur(),r.bubbleEvents===!0&&l&&(a&&a!==n.relatedTarget&&!z(n.relatedTarget,a)&&p(o({},n,{type:"mouseleave",bubbles:!1,cancelable:!1})),p(o({},n,{type:"mouseout"})));break;case"_mousedown":L(a,r.activeClass),r.bubbleEvents===!0&&l&&p(o({},n,{type:n.type.slice(1)}));break;case"_mouseup":v(a,r.activeClass),r.bubbleEvents===!0&&l&&p(o({},n,{type:n.type.slice(1)}));break;case"_click":D=null,r.bubbleEvents===!0&&l&&p(o({},n,{type:n.type.slice(1)}));break;case"_mousemove":r.bubbleEvents===!0&&l&&p(o({},n,{type:n.type.slice(1)}))}if(/^_(?:click|mouse(?:over|out|down|up|move))$/.test(n.type))return!0},p=function _fireMouseEvent(t){if(!t||"string"!=typeof t.type||!t)return;var r,a=t.target||null,l=a&&a.ownerDocument||i,s={view:l.defaultView||n,canBubble:!0,cancelable:!0,detail:"click"===t.type?1:0,button:"number"==typeof t.which?t.which-1:"number"==typeof t.button?t.button:l.createEvent?0:1},e=o(s,t);if(!a)return;l.createEvent&&a.dispatchEvent&&(e=[e.type,e.canBubble,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget],r=l.createEvent("MouseEvents"),r.initMouseEvent&&(r.initMouseEvent.apply(r,e),r._source="js",a.dispatchEvent(r)))},pe=function _createHtmlBridge(){var e=i.createElement("div");return e.id=r.containerId,e.className=r.containerClass,e.style.position="absolute",e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.height="1px",e.style.zIndex=""+F(r.zIndex),e},h=function _getHtmlBridge(t){for(var e=t&&t.parentNode;e&&"OBJECT"===e.nodeName&&e.parentNode;)e=e.parentNode;return e||null},he=function _embedSwf(){var f,a=t.bridge,o=h(a);if(!a){var u=Ce(n.location.host,r),y="never"===u?"none":"all",p=we(r),c=r.swfPath+be(r.swfPath,r);o=pe();var d=i.createElement("div");o.appendChild(d),i.body.appendChild(o);var l=i.createElement("div"),s="activex"===t.pluginType;l.innerHTML='<object id="'+r.swfObjectId+'" name="'+r.swfObjectId+'" width="100%" height="100%" '+(s?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+c+'"')+">"+(s?'<param name="movie" value="'+c+'"/>':"")+'<param name="allowScriptAccess" value="'+u+'"/><param name="allowNetworking" value="'+y+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+p+'"/></object>',a=l.firstChild,l=null,Ne(a).ZeroClipboard=e,o.replaceChild(a,d)}return a||(a=i[r.swfObjectId],a&&(f=a.length)&&(a=a[f-1]),!a&&o&&(a=o.firstChild)),t.bridge=a||null,a},ve=function _unembedSwf(){var e=t.bridge;if(e){var n=h(e);n&&("activex"===t.pluginType&&"readyState"in e?(e.style.display="none",function removeSwfFromIE(){if(4===e.readyState){for(var t in e)"function"==typeof e[t]&&(e[t]=null);e.parentNode&&e.parentNode.removeChild(e),n.parentNode&&n.parentNode.removeChild(n)}else T(removeSwfFromIE,10)}()):(e.parentNode&&e.parentNode.removeChild(e),n.parentNode&&n.parentNode.removeChild(n))),t.ready=null,t.bridge=null,t.deactivated=null}},me=function _mapClipDataToFlash(t){var n={},r={};if("object"!==("undefined"==typeof t?"undefined":_typeof(t))||!t)return;for(var e in t)if(e&&l.call(t,e)&&"string"==typeof t[e]&&t[e])switch(e.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":n.text=t[e],r.text=e;break;case"text/html":case"html":case"air:html":case"flash:html":n.html=t[e],r.html=e;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":n.rtf=t[e],r.rtf=e}return{data:n,formatMap:r}},ge=function _mapClipResultsFromFlash(e,n){if("object"!==("undefined"==typeof e?"undefined":_typeof(e))||!e||"object"!==("undefined"==typeof n?"undefined":_typeof(n))||!n)return e;var a={};for(var t in e)if(l.call(e,t)){if("success"!==t&&"data"!==t){a[t]=e[t];continue}a[t]={};var i=e[t];for(var r in i)r&&l.call(i,r)&&l.call(n,r)&&(a[t][n[r]]=i[r])}return a},be=function _cacheBust(t,e){var n=null==e||e&&e.cacheBust===!0;return n?(-1===t.indexOf("?")?"?":"&")+"noCache="+X():""},we=function _vars(e){var r,s,a,t,i="",o=[];if(e.trustedDomains&&("string"==typeof e.trustedDomains?t=[e.trustedDomains]:"object"===_typeof(e.trustedDomains)&&"length"in e.trustedDomains&&(t=e.trustedDomains)),t&&t.length)for(r=0,s=t.length;s>r;r++)if(l.call(t,r)&&t[r]&&"string"==typeof t[r]){if(a=w(t[r]),!a)continue;if("*"===a){o.length=0,o.push(a);break}o.push.apply(o,[a,"//"+a,n.location.protocol+"//"+a])}return o.length&&(i+="trustedOrigins="+B(o.join(","))),e.forceEnhancedClipboard===!0&&(i+=(i?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof e.swfObjectId&&e.swfObjectId&&(i+=(i?"&":"")+"swfObjectId="+B(e.swfObjectId)),i},w=function _extractDomain(e){if(null==e||""===e)return null;if(e=e.replace(/^\s+|\s+$/g,""),""===e)return null;var t=e.indexOf("//");e=-1===t?e:e.slice(t+2);var n=e.indexOf("/");if(e=-1===n?e:-1===t||0===n?null:e.slice(0,n),e&&".swf"===e.slice(-4).toLowerCase())return null;return e||null},Ce=function(){var e=function _extractAllDomains(e){var n,a,r,t=[];if("string"==typeof e&&(e=[e]),"object"!==("undefined"==typeof e?"undefined":_typeof(e))||!e||"number"!=typeof e.length)return t;for(n=0,a=e.length;a>n;n++)if(l.call(e,n)&&(r=w(e[n]))){if("*"===r){t.length=0,t.push("*");break}-1===t.indexOf(r)&&t.push(r)}return t};return function(t,i){var n=w(i.swfPath);null===n&&(n=t);var r=e(i.trustedDomains),a=r.length;if(a>0){if(1===a&&"*"===r[0])return"always";if(-1!==r.indexOf(t)){if(1===a&&t===n)return"sameDomain";return"always"}}return"never"}}(),Te=function _safeActiveElement(){try{return i.activeElement}catch(e){return null}},L=function _addClass(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)||e.classList.add(t),e;if(t&&"string"==typeof t){var r=(t||"").split(/\s+/);if(1===e.nodeType)if(e.className){for(var i=" "+e.className+" ",a=e.className,n=0,o=r.length;o>n;n++)i.indexOf(" "+r[n]+" ")<0&&(a+=" "+r[n]);e.className=a.replace(/^\s+|\s+$/g,"")}else e.className=t}return e},v=function _removeClass(e,t){if(!e||1!==e.nodeType)return e;if(e.classList)return e.classList.contains(t)&&e.classList.remove(t),e;if("string"==typeof t&&t){var a=t.split(/\s+/);if(1===e.nodeType&&e.className){for(var n=(" "+e.className+" ").replace(/[\n\t]/g," "),r=0,i=a.length;i>r;r++)n=n.replace(" "+a[r]+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}}return e},_e=function _getStyle(t,r){var e=n.getComputedStyle(t,null).getPropertyValue(r);if("cursor"===r&&(!e||"auto"===e)&&"A"===t.nodeName)return"pointer";return e},je=function _getZoomFactor(){var e,t,n,r=1;return"function"==typeof i.body.getBoundingClientRect&&(e=i.body.getBoundingClientRect(),t=e.right-e.left,n=i.body.offsetWidth,r=x(t/n*100)/100),r},j=function _getDOMObjectPosition(l){var t={left:0,top:0,width:0,height:0};if(l.getBoundingClientRect){var e=l.getBoundingClientRect(),r,a,o;"pageXOffset"in n&&"pageYOffset"in n?(r=n.pageXOffset,a=n.pageYOffset):(o=je(),r=x(i.documentElement.scrollLeft/o),a=x(i.documentElement.scrollTop/o));var s=i.documentElement.clientLeft||0,u=i.documentElement.clientTop||0;t.left=e.left+r-s,t.top=e.top+a-u,t.width="width"in e?e.width:e.right-e.left,t.height="height"in e?e.height:e.bottom-e.top}return t},ke=function _reposition(){var n;if(u&&(n=h(t.bridge))){var e=j(u);o(n.style,{width:e.width+"px",height:e.height+"px",top:e.top+"px",left:e.left+"px",zIndex:""+F(r.zIndex)})}},Ie=function _setHandCursor(e){t.ready===!0&&(t.bridge&&"function"==typeof t.bridge.setHandCursor?t.bridge.setHandCursor(e):t.ready=!1)},F=function _getSafeZIndex(e){if(/^(?:auto|inherit)$/.test(e))return e;var t;return"number"!=typeof e||ze(e)?"string"==typeof e&&(t=_getSafeZIndex(ie(e,10))):t=e,"number"==typeof t?t:"auto"},Le=function _detectFlashSupport(i){function parseFlashVersion(t){var e=t.match(/[\d]+/g);return e.length=3,e.join(".")}function isPepperFlash(e){return!!e&&(e=e.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e)||"chrome.plugin"===e.slice(-13))}function inspectPlugin(t){t&&(n=!0,t.version&&(e=parseFlashVersion(t.version)),!e&&t.description&&(e=parseFlashVersion(t.description)),t.filename&&(s=isPepperFlash(t.filename)))}var a,r,l,n=!1,o=!1,s=!1,e="";if(d.plugins&&d.plugins.length)a=d.plugins["Shockwave Flash"],inspectPlugin(a),d.plugins["Shockwave Flash 2.0"]&&(n=!0,e="2.0.0.11");else if(d.mimeTypes&&d.mimeTypes.length)l=d.mimeTypes["application/x-shockwave-flash"],a=l&&l.enabledPlugin,inspectPlugin(a);else if("undefined"!=typeof i){o=!0;try{r=new i("ShockwaveFlash.ShockwaveFlash.7"),n=!0,e=parseFlashVersion(r.GetVariable("$version"))}catch(u){try{r=new i("ShockwaveFlash.ShockwaveFlash.6"),n=!0,e="6.0.21"}catch(f){try{r=new i("ShockwaveFlash.ShockwaveFlash"),n=!0,e=parseFlashVersion(r.GetVariable("$version"))}catch(c){o=!1}}}}t.disabled=n!==!0,t.outdated=e&&Y(e)<Y(I),t.version=e||"0.0.0",t.pluginType=s?"pepper":o?"activex":n?"netscape":"unknown"};Le(Fe);var e=function ZeroClipboard(){if(!(this instanceof ZeroClipboard))return new ZeroClipboard;"function"==typeof ZeroClipboard._createClient&&ZeroClipboard._createClient.apply(this,a(arguments))};se(e,"version",{value:"2.1.6",writable:!1,configurable:!0,enumerable:!0}),e.config=function(){return P.apply(this,a(arguments))},e.state=function(){return R.apply(this,a(arguments))},e.isFlashUnusable=function(){return Z.apply(this,a(arguments))},e.on=function(){return V.apply(this,a(arguments))},e.off=function(){return K.apply(this,a(arguments))},e.handlers=function(){return U.apply(this,a(arguments))},e.emit=function(){return G.apply(this,a(arguments))},e.create=function(){return J.apply(this,a(arguments))},e.destroy=function(){return W.apply(this,a(arguments))},e.setData=function(){return q.apply(this,a(arguments))},e.clearData=function(){return Q.apply(this,a(arguments))},e.getData=function(){return qe.apply(this,a(arguments))},e.focus=e.activate=function(){return te.apply(this,a(arguments))},e.blur=e.deactivate=function(){return ne.apply(this,a(arguments))},e.activeElement=function(){return re.apply(this,a(arguments))};var Se=0,s={},Ae=0,g={},E={};o(r,{autoActivate:!0});var $e=function _clientConstructor(n){var t=this;t.id=""+Se++,s[t.id]={instance:t,elements:[],handlers:{}},n&&t.clip(n),e.on("*",function(e){return t.emit(e)}),e.on("destroy",function(){t.destroy()}),e.create()},Be=function _clientOn(n,f){var e,a,r,i={},o=s[this.id]&&s[this.id].handlers;if("string"==typeof n&&n)r=n.toLowerCase().split(/\s+/);else if("object"===("undefined"==typeof n?"undefined":_typeof(n))&&n&&"undefined"==typeof f)for(e in n)l.call(n,e)&&"string"==typeof e&&e&&"function"==typeof n[e]&&this.on(e,n[e]);if(r&&r.length){for(e=0,a=r.length;a>e;e++)n=r[e].replace(/^on/,""),i[n]=!0,o[n]||(o[n]=[]),o[n].push(f);if(i.ready&&t.ready&&this.emit({type:"ready",client:this}),i.error){var u=["disabled","outdated","unavailable","deactivated","overdue"];for(e=0,a=u.length;a>e;e++)if(t[u[e]]){this.emit({type:"error",name:"flash-"+u[e],client:this});break}}}return this},He=function _clientOff(e,i){var t,o,a,r,n,u=s[this.id]&&s[this.id].handlers;if(0===arguments.length)r=A(u);else if("string"==typeof e&&e)r=e.split(/\s+/);else if("object"===("undefined"==typeof e?"undefined":_typeof(e))&&e&&"undefined"==typeof i)for(t in e)l.call(e,t)&&"string"==typeof t&&t&&"function"==typeof e[t]&&this.off(t,e[t]);if(r&&r.length)for(t=0,o=r.length;o>t;t++)if(e=r[t].toLowerCase().replace(/^on/,""),n=u[e],n&&n.length)if(i)for(a=n.indexOf(i);-1!==a;)n.splice(a,1),a=n.indexOf(i,a);else n.length=0;return this},Me=function _clientListeners(e){var n=null,t=s[this.id]&&s[this.id].handlers;return t&&(n="string"==typeof e&&e?t[e]?t[e].slice(0):[]:m(t)),n},Pe=function _clientEmit(e){if(Ue.call(this,e)){"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e&&"string"==typeof e.type&&e.type&&(e=o({},e));var t=o({},k(e),{client:this});Ge.call(this,t)}return this},Re=function _clientClip(e){e=H(e);for(var t=0;t<e.length;t++)if(l.call(e,t)&&e[t]&&1===e[t].nodeType){e[t].zcClippingId?-1===g[e[t].zcClippingId].indexOf(this.id)&&g[e[t].zcClippingId].push(this.id):(e[t].zcClippingId="zcClippingId_"+Ae++,g[e[t].zcClippingId]=[this.id],r.autoActivate===!0&&We(e[t]));var n=s[this.id]&&s[this.id].elements;-1===n.indexOf(e[t])&&n.push(e[t])}return this},Ze=function _clientUnclip(e){var o=s[this.id];if(!o)return this;var i=o.elements,t;e="undefined"==typeof e?i.slice(0):H(e);for(var n=e.length;n--;)if(l.call(e,n)&&e[n]&&1===e[n].nodeType){for(t=0;-1!==(t=i.indexOf(e[n],t));)i.splice(t,1);var a=g[e[n].zcClippingId];if(a){for(t=0;-1!==(t=a.indexOf(this.id,t));)a.splice(t,1);0===a.length&&(r.autoActivate===!0&&De(e[n]),delete e[n].zcClippingId)}}return this},Ve=function _clientElements(){var e=s[this.id];return e&&e.elements?e.elements.slice(0):[]},Ke=function _clientDestroy(){this.unclip(),this.off(),delete s[this.id]},Ue=function _clientShouldEmit(e){if(!e||!e.type)return!1;if(e.client&&e.client!==this)return!1;var t=s[this.id]&&s[this.id].elements,n=!!t&&t.length>0,r=!e.target||n&&-1!==t.indexOf(e.target),a=e.relatedTarget&&n&&-1!==t.indexOf(e.relatedTarget),i=e.client&&e.client===this;if(!(r||a||i))return!1;return!0},Ge=function _clientDispatchCallbacks(t){if("object"!==("undefined"==typeof t?"undefined":_typeof(t))||!t||!t.type)return;var p=O(t),f=s[this.id]&&s[this.id].handlers["*"]||[],c=s[this.id]&&s[this.id].handlers[t.type]||[],a=f.concat(c);if(a&&a.length){var r,l,e,i,u,d=this;for(r=0,l=a.length;l>r;r++)e=a[r],i=d,"string"==typeof e&&"function"==typeof n[e]&&(e=n[e]),"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e&&"function"==typeof e.handleEvent&&(i=e,e=e.handleEvent),"function"==typeof e&&(u=o({},t),S(e,i,[u],p))}return this},H=function _prepClip(e){return"string"==typeof e&&(e=[]),"number"!=typeof e.length?[e]:e},We=function _addMouseHandlers(t){if(!t||1!==t.nodeType)return;var r=function _suppressMouseEvents(e){if(!e&&!(e=n.event))return;"js"!==e._source&&(e.stopImmediatePropagation(),e.preventDefault()),delete e._source},a=function _elementMouseOver(a){if(!a&&!(a=n.event))return;r(a),e.focus(t)};t.addEventListener("mouseover",a,!1),t.addEventListener("mouseout",r,!1),t.addEventListener("mouseenter",r,!1),t.addEventListener("mouseleave",r,!1),t.addEventListener("mousemove",r,!1),E[t.zcClippingId]={mouseover:a,mouseout:r,mouseenter:r,mouseleave:r,mousemove:r}},De=function _removeMouseHandlers(e){if(!e||1!==e.nodeType)return;var t=E[e.zcClippingId];if("object"!==("undefined"==typeof t?"undefined":_typeof(t))||!t)return;for(var n,r,i=["move","leave","enter","out","over"],a=0,o=i.length;o>a;a++)n="mouse"+i[a],r=t[n],"function"==typeof r&&e.removeEventListener(n,r,!1);delete E[e.zcClippingId]};e._createClient=function(){$e.apply(this,a(arguments))},e.prototype.on=function(){return Be.apply(this,a(arguments))},e.prototype.off=function(){return He.apply(this,a(arguments))},e.prototype.handlers=function(){return Me.apply(this,a(arguments))},e.prototype.emit=function(){return Pe.apply(this,a(arguments))},e.prototype.clip=function(){return Re.apply(this,a(arguments))},e.prototype.unclip=function(){return Ze.apply(this,a(arguments))},e.prototype.elements=function(){return Ve.apply(this,a(arguments))},e.prototype.destroy=function(){return Ke.apply(this,a(arguments))},e.prototype.setText=function(t){return e.setData("text/plain",t),this},e.prototype.setHtml=function(t){return e.setData("text/html",t),this},e.prototype.setRichText=function(t){return e.setData("application/rtf",t),this},e.prototype.setData=function(){return e.setData.apply(this,a(arguments)),this},e.prototype.clearData=function(){return e.clearData.apply(this,a(arguments)),this},e.prototype.getData=function(){return e.getData.apply(this,a(arguments))},"function"==typeof define&&define.amd?define("bundles/zeroclipboard/ZeroClipboard.v2-1-6",[],function(){return e}):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module&&"object"===_typeof(module.exports)&&module.exports?module.exports=e:b.ZeroClipboard=e}(function(){return this||window}());