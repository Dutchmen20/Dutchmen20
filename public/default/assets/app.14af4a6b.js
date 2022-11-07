function sr(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Me={exports:{}},oe={exports:{}},He=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},or=He,ue=Object.prototype.toString,fe=function(r){return function(e){var t=ue.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return fe(t)===r}}function le(r){return Array.isArray(r)}function g(r){return typeof r>"u"}function ur(r){return r!==null&&!g(r)&&r.constructor!==null&&!g(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Je=A("ArrayBuffer");function fr(r){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Je(r.buffer),e}function lr(r){return typeof r=="string"}function cr(r){return typeof r=="number"}function We(r){return r!==null&&typeof r=="object"}function B(r){if(fe(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var dr=A("Date"),hr=A("File"),pr=A("Blob"),vr=A("FileList");function ce(r){return ue.call(r)==="[object Function]"}function mr(r){return We(r)&&ce(r.pipe)}function Er(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||ue.call(r)===e||ce(r.toString)&&r.toString()===e)}var Rr=A("URLSearchParams");function yr(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function wr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function de(r,e){if(!(r===null||typeof r>"u"))if(typeof r!="object"&&(r=[r]),le(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function se(){var r={};function e(n,a){B(r[a])&&B(n)?r[a]=se(r[a],n):B(n)?r[a]=se({},n):le(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)de(arguments[t],e);return r}function br(r,e,t){return de(e,function(n,a){t&&typeof n=="function"?r[a]=or(n,t):r[a]=n}),r}function Or(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Ar(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function Sr(r,e,t){var i,n,a,s={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function Cr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function xr(r){if(!r)return null;var e=r.length;if(g(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var Pr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:le,isArrayBuffer:Je,isBuffer:ur,isFormData:Er,isArrayBufferView:fr,isString:lr,isNumber:cr,isObject:We,isPlainObject:B,isUndefined:g,isDate:dr,isFile:hr,isBlob:pr,isFunction:ce,isStream:mr,isURLSearchParams:Rr,isStandardBrowserEnv:wr,forEach:de,merge:se,extend:br,trim:yr,stripBOM:Or,inherits:Ar,toFlatObject:Sr,kindOf:fe,kindOfTest:A,endsWith:Cr,toArray:xr,isTypedArray:Pr,isFileList:vr},P=v;function Re(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ve=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(P.isURLSearchParams(t))n=t.toString();else{var a=[];P.forEach(t,function(f,d){f===null||typeof f>"u"||(P.isArray(f)?d=d+"[]":f=[f],P.forEach(f,function(h){P.isDate(h)?h=h.toISOString():P.isObject(h)&&(h=JSON.stringify(h)),a.push(Re(d)+"="+Re(h))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Tr=v;function F(){this.handlers=[]}F.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};F.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};F.prototype.forEach=function(e){Tr.forEach(this.handlers,function(i){i!==null&&e(i)})};var _r=F,Nr=v,Dr=function(e,t){Nr.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},J,ye;function N(){if(ye)return J;ye=1;var r=v;function e(n,a,s,o,f){Error.call(this),this.message=n,this.name="AxiosError",a&&(this.code=a),s&&(this.config=s),o&&(this.request=o),f&&(this.response=f)}r.inherits(e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var t=e.prototype,i={};return["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(n){i[n]={value:n}}),Object.defineProperties(e,i),Object.defineProperty(t,"isAxiosError",{value:!0}),e.from=function(n,a,s,o,f,d){var c=Object.create(t);return r.toFlatObject(n,c,function(u){return u!==Error.prototype}),e.call(c,n.message,a,s,o,f),c.name=n.name,d&&Object.assign(c,d),c},J=e,J}var ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=v;function qr(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":w.isDate(a)?a.toISOString():w.isArrayBuffer(a)||w.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(w.isPlainObject(a)||w.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),w.forEach(a,function(f,d){if(!w.isUndefined(f)){var c=s?s+"."+d:d,h;if(f&&!s&&typeof f=="object"){if(w.endsWith(d,"{}"))f=JSON.stringify(f);else if(w.endsWith(d,"[]")&&(h=w.toArray(f))){h.forEach(function(u){!w.isUndefined(u)&&e.append(c,i(u))});return}}n(f,c)}}),t.pop()}else e.append(s,i(a))}return n(r),e}var Xe=qr,W,we;function Ur(){if(we)return W;we=1;var r=N();return W=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},W}var V,be;function Br(){if(be)return V;be=1;var r=v;return V=r.isStandardBrowserEnv()?function(){return{write:function(i,n,a,s,o,f){var d=[];d.push(i+"="+encodeURIComponent(n)),r.isNumber(a)&&d.push("expires="+new Date(a).toGMTString()),r.isString(s)&&d.push("path="+s),r.isString(o)&&d.push("domain="+o),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),V}var Lr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},gr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Fr=Lr,$r=gr,Ke=function(e,t){return e&&!Fr(t)?$r(e,t):t},z,Oe;function jr(){if(Oe)return z;Oe=1;var r=v,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return z=function(i){var n={},a,s,o;return i&&r.forEach(i.split(`
`),function(d){if(o=d.indexOf(":"),a=r.trim(d.substr(0,o)).toLowerCase(),s=r.trim(d.substr(o+1)),a){if(n[a]&&e.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([s]):n[a]=n[a]?n[a]+", "+s:s}}),n},z}var X,Ae;function Ir(){if(Ae)return X;Ae=1;var r=v;return X=r.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(s){var o=s;return t&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(o){var f=r.isString(o)?a(o):o;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),X}var K,Se;function $(){if(Se)return K;Se=1;var r=N(),e=v;function t(i){r.call(this,i==null?"canceled":i,r.ERR_CANCELED),this.name="CanceledError"}return e.inherits(t,r,{__CANCEL__:!0}),K=t,K}var Q,Ce;function kr(){return Ce||(Ce=1,Q=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}),Q}var Y,xe;function Pe(){if(xe)return Y;xe=1;var r=v,e=Ur(),t=Br(),i=Ve,n=Ke,a=jr(),s=Ir(),o=ze,f=N(),d=$(),c=kr();return Y=function(u){return new Promise(function(tr,S){var D=u.data,q=u.headers,U=u.responseType,C;function ve(){u.cancelToken&&u.cancelToken.unsubscribe(C),u.signal&&u.signal.removeEventListener("abort",C)}r.isFormData(D)&&r.isStandardBrowserEnv()&&delete q["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var nr=u.auth.username||"",ir=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";q.Authorization="Basic "+btoa(nr+":"+ir)}var k=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),i(k,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function me(){if(!!l){var y="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,x=!U||U==="text"||U==="json"?l.responseText:l.response,O={data:x,status:l.status,statusText:l.statusText,headers:y,config:u,request:l};e(function(H){tr(H),ve()},function(H){S(H),ve()},O),l=null}}if("onloadend"in l?l.onloadend=me:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(me)},l.onabort=function(){!l||(S(new f("Request aborted",f.ECONNABORTED,u,l)),l=null)},l.onerror=function(){S(new f("Network Error",f.ERR_NETWORK,u,l,l)),l=null},l.ontimeout=function(){var x=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",O=u.transitional||o;u.timeoutErrorMessage&&(x=u.timeoutErrorMessage),S(new f(x,O.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,l)),l=null},r.isStandardBrowserEnv()){var Ee=(u.withCredentials||s(k))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Ee&&(q[u.xsrfHeaderName]=Ee)}"setRequestHeader"in l&&r.forEach(q,function(x,O){typeof D>"u"&&O.toLowerCase()==="content-type"?delete q[O]:l.setRequestHeader(O,x)}),r.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),U&&U!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(C=function(y){!l||(S(!y||y&&y.type?new d:y),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(C),u.signal&&(u.signal.aborted?C():u.signal.addEventListener("abort",C))),D||(D=null);var M=c(k);if(M&&["http","https","file"].indexOf(M)===-1){S(new f("Unsupported protocol "+M+":",f.ERR_BAD_REQUEST,u));return}l.send(D)})},Y}var G,Te;function Mr(){return Te||(Te=1,G=null),G}var p=v,_e=Dr,Ne=N(),Hr=ze,Jr=Xe,Wr={"Content-Type":"application/x-www-form-urlencoded"};function De(r,e){!p.isUndefined(r)&&p.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Vr(){var r;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(r=Pe()),r}function zr(r,e,t){if(p.isString(r))try{return(e||JSON.parse)(r),p.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var j={transitional:Hr,adapter:Vr(),transformRequest:[function(e,t){if(_e(t,"Accept"),_e(t,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e))return e;if(p.isArrayBufferView(e))return e.buffer;if(p.isURLSearchParams(e))return De(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=p.isObject(e),n=t&&t["Content-Type"],a;if((a=p.isFileList(e))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Jr(a?{"files[]":e}:e,s&&new s)}else if(i||n==="application/json")return De(t,"application/json"),zr(e);return e}],transformResponse:[function(e){var t=this.transitional||j.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?Ne.from(s,Ne.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mr()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){j.headers[e]={}});p.forEach(["post","put","patch"],function(e){j.headers[e]=p.merge(Wr)});var he=j,Xr=v,Kr=he,Qr=function(e,t,i){var n=this||Kr;return Xr.forEach(i,function(s){e=s.call(n,e,t)}),e},Z,qe;function Qe(){return qe||(qe=1,Z=function(e){return!!(e&&e.__CANCEL__)}),Z}var Ue=v,ee=Qr,Yr=Qe(),Gr=he,Zr=$();function re(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Zr}var et=function(e){re(e),e.headers=e.headers||{},e.data=ee.call(e,e.data,e.headers,e.transformRequest),e.headers=Ue.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ue.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Gr.adapter;return t(e).then(function(n){return re(e),n.data=ee.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Yr(n)||(re(e),n&&n.response&&(n.response.data=ee.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=v,Ye=function(e,t){t=t||{};var i={};function n(c,h){return E.isPlainObject(c)&&E.isPlainObject(h)?E.merge(c,h):E.isPlainObject(h)?E.merge({},h):E.isArray(h)?h.slice():h}function a(c){if(E.isUndefined(t[c])){if(!E.isUndefined(e[c]))return n(void 0,e[c])}else return n(e[c],t[c])}function s(c){if(!E.isUndefined(t[c]))return n(void 0,t[c])}function o(c){if(E.isUndefined(t[c])){if(!E.isUndefined(e[c]))return n(void 0,e[c])}else return n(void 0,t[c])}function f(c){if(c in t)return n(e[c],t[c]);if(c in e)return n(void 0,e[c])}var d={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(h){var u=d[h]||a,R=u(h);E.isUndefined(R)&&u!==f||(i[h]=R)}),i},te,Be;function Ge(){return Be||(Be=1,te={version:"0.27.2"}),te}var rt=Ge().version,b=N(),pe={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){pe[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var Le={};pe.transitional=function(e,t,i){function n(a,s){return"[Axios v"+rt+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,o){if(e===!1)throw new b(n(s," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!Le[s]&&(Le[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,o):!0}};function tt(r,e,t){if(typeof r!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var o=r[a],f=o===void 0||s(o,a,r);if(f!==!0)throw new b("option "+a+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+a,b.ERR_BAD_OPTION)}}var nt={assertOptions:tt,validators:pe},Ze=v,it=Ve,ge=_r,Fe=et,I=Ye,at=Ke,er=nt,T=er.validators;function _(r){this.defaults=r,this.interceptors={request:new ge,response:new ge}}_.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=I(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&er.assertOptions(i,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(t)===!1||(a=a&&R.synchronous,n.unshift(R.fulfilled,R.rejected))});var s=[];this.interceptors.response.forEach(function(R){s.push(R.fulfilled,R.rejected)});var o;if(!a){var f=[Fe,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var d=t;n.length;){var c=n.shift(),h=n.shift();try{d=c(d)}catch(u){h(u);break}}try{o=Fe(d)}catch(u){return Promise.reject(u)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};_.prototype.getUri=function(e){e=I(this.defaults,e);var t=at(e.baseURL,e.url);return it(t,e.params,e.paramsSerializer)};Ze.forEach(["delete","get","head","options"],function(e){_.prototype[e]=function(t,i){return this.request(I(i||{},{method:e,url:t,data:(i||{}).data}))}});Ze.forEach(["post","put","patch"],function(e){function t(i){return function(a,s,o){return this.request(I(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}_.prototype[e]=t(),_.prototype[e+"Form"]=t(!0)});var st=_,ne,$e;function ot(){if($e)return ne;$e=1;var r=$();function e(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(s){i=s});var n=this;this.promise.then(function(a){if(!!n._listeners){var s,o=n._listeners.length;for(s=0;s<o;s++)n._listeners[s](a);n._listeners=null}}),this.promise.then=function(a){var s,o=new Promise(function(f){n.subscribe(f),s=f}).then(a);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s){n.reason||(n.reason=new r(s),i(n.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},e.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},e.source=function(){var i,n=new e(function(s){i=s});return{token:n,cancel:i}},ne=e,ne}var ie,je;function ut(){return je||(je=1,ie=function(e){return function(i){return e.apply(null,i)}}),ie}var ae,Ie;function ft(){if(Ie)return ae;Ie=1;var r=v;return ae=function(t){return r.isObject(t)&&t.isAxiosError===!0},ae}var ke=v,lt=He,L=st,ct=Ye,dt=he;function rr(r){var e=new L(r),t=lt(L.prototype.request,e);return ke.extend(t,L.prototype,e),ke.extend(t,e),t.create=function(n){return rr(ct(r,n))},t}var m=rr(dt);m.Axios=L;m.CanceledError=$();m.CancelToken=ot();m.isCancel=Qe();m.VERSION=Ge().version;m.toFormData=Xe;m.AxiosError=N();m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=ut();m.isAxiosError=ft();oe.exports=m;oe.exports.default=m;(function(r){r.exports=oe.exports})(Me);const ht=sr(Me.exports);window.axios=ht;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";
