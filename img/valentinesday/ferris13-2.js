(function(){var c=void 0,g=!0,l=null,m=!1,n,p=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},r="closure_uid_"+(1E9*Math.random()>>>0),ba=0,ca=function(a,b,d){return a.call.apply(a.bind,arguments)},da=function(a,b,d){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,
arguments)}},u=function(a,b,d){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return u.apply(l,arguments)},ea=function(a,b){var d=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,d);return a.apply(this,b)}},fa=function(){var a=["google","doodle","jesr"],b=p;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());){var e;if(e=!a.length)e=g;e?b[d]=g:b=
b[d]?b[d]:b[d]={}}},w=function(a,b){function d(){}d.prototype=b.prototype;a.ra=b.prototype;a.prototype=new d};Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var d=Array.prototype.slice.call(arguments,1);d.unshift(this,a);return u.apply(l,d)}return u(this,a)};var ga=0<=navigator.userAgent.indexOf("MSIE"),ha=function(a,b){for(var d=1;d<arguments.length;d+=2){var e=arguments[d],f=arguments[d+1],h=a.style;h&&e in h?h[e]=f:e in a?a[e]=f:ga&&(h&&"opacity"==e)&&(a.zoom=1,e=(h.filter||"").replace(/alpha\([^)]*\)/,""),isNaN(parseFloat(f))||(e+="alpha(opacity="+100*f+")"),h.filter=e)}},ia=["Moz","ms","O","webkit"],ja=["","moz","ms","o","webkit"],ka=function(a){var b=document;if(!b)return l;for(var d=0;d<ja.length;d++){var e=ja[d],f=a;0<e.length&&(f=a.charAt(0).toUpperCase()+
a.substr(1));e+=f;if("undefined"!=typeof b[e])return e}return l},la=function(){for(var a=["requestAnimationFrame","mozRequestAnimationFrame","msRequestAnimationFrame","oRequestAnimationFrame","webkitRequestAnimationFrame"],b=0;b<a.length;b++){var d=window[a[b]];if(d)return u(d,window)}return function(a){window.setTimeout(a,17)}},ma=function(a){ma=la();return ma(a)};var na=function(a){Error.captureStackTrace?Error.captureStackTrace(this,na):this.stack=Error().stack||"";a&&(this.message=String(a))};w(na,Error);var oa=function(a,b){for(var d=1;d<arguments.length;d++){var e=String(arguments[d]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,e)}return a};var pa=function(a,b){b.unshift(a);na.call(this,oa.apply(l,b));b.shift()};w(pa,na);var qa=function(a,b,d){if(!a){var e=Array.prototype.slice.call(arguments,2),f="Assertion failed";if(b)var f=f+(": "+b),h=e;throw new pa(""+f,h||[]);}};var ra=Array.prototype,sa=ra.indexOf?function(a,b,d){qa(a.length!=l);return ra.indexOf.call(a,b,d)}:function(a,b,d){d=d==l?0:0>d?Math.max(0,a.length+d):d;if("string"==typeof a)return"string"!=typeof b||1!=b.length?-1:a.indexOf(b,d);for(;d<a.length;d++)if(d in a&&a[d]===b)return d;return-1},ta=ra.forEach?function(a,b,d){qa(a.length!=l);ra.forEach.call(a,b,d)}:function(a,b,d){for(var e=a.length,f="string"==typeof a?a.split(""):a,h=0;h<e;h++)h in f&&b.call(d,f[h],h,a)};var ua=function(){};ua.prototype.Ua=m;ua.prototype.ta=function(){this.Ua||(this.Ua=g,this.M())};ua.prototype.M=function(){if(this.W)for(;this.W.length;)this.W.shift()()};var va=function(a){a&&"function"==typeof a.ta&&a.ta()};var x,wa,xa,ya,za=function(){return p.navigator?p.navigator.userAgent:l};ya=xa=wa=x=m;var Aa;if(Aa=za()){var Ba=p.navigator;x=0==Aa.indexOf("Opera");wa=!x&&-1!=Aa.indexOf("MSIE");xa=!x&&-1!=Aa.indexOf("WebKit");ya=!x&&!xa&&"Gecko"==Ba.product}var Ca=x,y=wa,Da=ya,Ea=xa,Fa=function(){var a=p.document;return a?a.documentMode:c},Ga;
a:{var Ha="",Ia;if(Ca&&p.opera)var Ja=p.opera.version,Ha="function"==typeof Ja?Ja():Ja;else if(Da?Ia=/rv\:([^\);]+)(\)|;)/:y?Ia=/MSIE\s+([^\);]+)(\)|;)/:Ea&&(Ia=/WebKit\/(\S+)/),Ia)var Ka=Ia.exec(za()),Ha=Ka?Ka[1]:"";if(y){var La=Fa();if(La>parseFloat(Ha)){Ga=String(La);break a}}Ga=Ha}
var Ma=Ga,Na={},z=function(a){var b;if(!(b=Na[a])){b=0;for(var d=String(Ma).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),h=0;0==b&&h<f;h++){var k=d[h]||"",s=e[h]||"",q=RegExp("(\\d*)(\\D*)","g"),H=RegExp("(\\d*)(\\D*)","g");do{var t=q.exec(k)||["","",""],v=H.exec(s)||["","",""];if(0==t[0].length&&0==v[0].length)break;b=((0==t[1].length?0:parseInt(t[1],10))<(0==v[1].length?0:parseInt(v[1],10))?-1:(0==t[1].length?
0:parseInt(t[1],10))>(0==v[1].length?0:parseInt(v[1],10))?1:0)||((0==t[2].length)<(0==v[2].length)?-1:(0==t[2].length)>(0==v[2].length)?1:0)||(t[2]<v[2]?-1:t[2]>v[2]?1:0)}while(0==b)}b=Na[a]=0<=b}return b},Oa=p.document,Pa=!Oa||!y?c:Fa()||("CSS1Compat"==Oa.compatMode?parseInt(Ma,10):5);var Qa=function(a){Qa[" "](a);return a};Qa[" "]=function(){};var Ra;if(!(Ra=!y))Ra=y&&9<=Pa;var Sa=Ra,Ta=y&&!z("9");!Ea||z("528");Da&&z("1.9b")||y&&z("8")||Ca&&z("9.5")||Ea&&z("528");Da&&!z("8")||y&&z("9");var Ua=function(a,b){this.type=a;this.currentTarget=this.target=b};n=Ua.prototype;n.M=function(){};n.ta=function(){};n.ka=m;n.defaultPrevented=m;n.stopPropagation=function(){this.ka=g};n.preventDefault=function(){this.defaultPrevented=g};var A=function(a,b){a&&this.init(a,b)};w(A,Ua);n=A.prototype;n.target=l;n.relatedTarget=l;n.offsetX=0;n.offsetY=0;n.clientX=0;n.clientY=0;n.screenX=0;n.screenY=0;n.button=0;n.keyCode=0;n.charCode=0;n.ctrlKey=m;n.altKey=m;n.shiftKey=m;n.metaKey=m;n.Y=l;
n.init=function(a,b){var d=this.type=a.type;Ua.call(this,d);this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(Da){var f;a:{try{Qa(e.nodeName);f=g;break a}catch(h){}f=m}f||(e=l)}}else"mouseover"==d?e=a.fromElement:"mouseout"==d&&(e=a.toElement);this.relatedTarget=e;this.offsetX=Ea||a.offsetX!==c?a.offsetX:a.layerX;this.offsetY=Ea||a.offsetY!==c?a.offsetY:a.layerY;this.clientX=a.clientX!==c?a.clientX:a.pageX;this.clientY=a.clientY!==c?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==d?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.Y=a;a.defaultPrevented&&this.preventDefault();delete this.ka};n.stopPropagation=function(){A.ra.stopPropagation.call(this);this.Y.stopPropagation?this.Y.stopPropagation():this.Y.cancelBubble=g};
n.preventDefault=function(){A.ra.preventDefault.call(this);var a=this.Y;if(a.preventDefault)a.preventDefault();else if(a.returnValue=m,Ta)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};n.M=function(){};var Va=0;var Wa=function(){};n=Wa.prototype;n.key=0;n.J=m;n.ga=m;n.init=function(a,b,d,e,f,h){if("function"==aa(a))this.Sa=g;else if(a&&a.handleEvent&&"function"==aa(a.handleEvent))this.Sa=m;else throw Error("Invalid listener argument");this.L=a;this.Ma=b;this.src=d;this.type=e;this.capture=!!f;this.La=h;this.ga=m;this.key=++Va;this.J=m};n.handleEvent=function(a){return this.Sa?this.L.call(this.La||this.src,a):this.L.handleEvent.call(this.L,a)};var Xa={},B={},C={},D={},Ya=function(a,b,d,e,f){if("array"==aa(b)){for(var h=0;h<b.length;h++)Ya(a,b[h],d,e,f);return l}a:{if(!b)throw Error("Invalid event type");e=!!e;var k=B;b in k||(k[b]={C:0,D:0});k=k[b];e in k||(k[e]={C:0,D:0},k.C++);var k=k[e],h=a[r]||(a[r]=++ba),s;k.D++;if(k[h]){s=k[h];for(var q=0;q<s.length;q++)if(k=s[q],k.L==d&&k.La==f){if(k.J)break;s[q].ga=m;a=s[q];break a}}else s=k[h]=[],k.C++;q=Za();k=new Wa;k.init(d,q,a,b,e,f);k.ga=m;q.src=a;q.L=k;s.push(k);C[h]||(C[h]=[]);C[h].push(k);
a.addEventListener?(a==p||!a.Za)&&a.addEventListener(b,q,e):a.attachEvent(b in D?D[b]:D[b]="on"+b,q);a=k}b=a.key;Xa[b]=a;return b},Za=function(){var a=$a,b=Sa?function(d){return a.call(b.src,b.L,d)}:function(d){d=a.call(b.src,b.L,d);if(!d)return d};return b},bb=function(a){var b=Xa[a];if(!b||b.J)return m;var d=b.src,e=b.type,f=b.Ma,h=b.capture;d.removeEventListener?(d==p||!d.Za)&&d.removeEventListener(e,f,h):d.detachEvent&&d.detachEvent(e in D?D[e]:D[e]="on"+e,f);d=d[r]||(d[r]=++ba);if(C[d]){var f=
C[d],k=sa(f,b);0<=k&&(qa(f.length!=l),ra.splice.call(f,k,1));0==f.length&&delete C[d]}b.J=g;if(b=B[e][h][d])b.Ra=g,ab(e,h,d,b);delete Xa[a];return g},ab=function(a,b,d,e){if(!e.ia&&e.Ra){for(var f=0,h=0;f<e.length;f++)e[f].J?e[f].Ma.src=l:(f!=h&&(e[h]=e[f]),h++);e.length=h;e.Ra=m;0==h&&(delete B[a][b][d],B[a][b].C--,0==B[a][b].C&&(delete B[a][b],B[a].C--),0==B[a].C&&delete B[a])}},db=function(a,b,d,e,f){var h=1;b=b[r]||(b[r]=++ba);if(a[b]){var k=--a.D,s=a[b];s.ia?s.ia++:s.ia=1;try{for(var q=s.length,
H=0;H<q;H++){var t=s[H];t&&!t.J&&(h&=cb(t,f)!==m)}}finally{a.D=Math.max(k,a.D),s.ia--,ab(d,e,b,s)}}return Boolean(h)},cb=function(a,b){a.ga&&bb(a.key);return a.handleEvent(b)},$a=function(a,b){if(a.J)return g;var d=a.type,e=B;if(!(d in e))return g;var e=e[d],f,h;if(!Sa){var k;if(!(k=b))a:{k=["window","event"];for(var s=p;f=k.shift();)if(s[f]!=l)s=s[f];else{k=l;break a}k=s}f=k;k=g in e;s=m in e;if(k){if(0>f.keyCode||f.returnValue!=c)return g;a:{var q=m;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(H){q=
g}if(q||f.returnValue==c)f.returnValue=g}}q=new A;q.init(f,this);f=g;try{if(k){for(var t=[],v=q.currentTarget;v;v=v.parentNode)t.push(v);h=e[g];h.D=h.C;for(var E=t.length-1;!q.ka&&0<=E&&h.D;E--)q.currentTarget=t[E],f&=db(h,t[E],d,g,q);if(s){h=e[m];h.D=h.C;for(E=0;!q.ka&&E<t.length&&h.D;E++)q.currentTarget=t[E],f&=db(h,t[E],d,m,q)}}else f=cb(a,q)}finally{t&&(t.length=0)}return f}d=new A(b,this);return f=cb(a,d)};var F=function(a){this.gb=a;this.X=[]};w(F,ua);var eb=[];F.prototype.listen=function(a,b,d,e,f){"array"!=aa(b)&&(eb[0]=b,b=eb);for(var h=0;h<b.length;h++){var k=Ya(a,b[h],d||this,e||m,f||this.gb||this);this.X.push(k)}return this};F.prototype.M=function(){F.ra.M.call(this);ta(this.X,bb);this.X.length=0};F.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var G=function(a,b,d){a.style.left=b+"px";a.style.top=d+"px"},I=function(a,b,d,e,f){e=e||0;f=f||0;var h="";if(e||f)h+="translate("+e+"px,"+f+"px)";d&&(h+=" rotate("+d+"rad)");b!=l&&(h+=" scaleX("+b+")");b!=l&&(h+=" scaleY("+b+")");for(b=0;d=ia[b++];)a.style[d+"Transform"]=h},fb=l,J=function(a,b,d){fb==l&&(fb=new F);fb.listen(a,b,d,m)},gb={},K=function(a,b){var d=window.setTimeout(a,b);gb[d]=g;return d},hb=function(a){a!=l&&(window.clearTimeout(a),delete gb[a])},L=function(a){a.style.display="none"},
M=function(a){for(var b=0;b<a.length;b++)L(a[b])},N=function(a){a.style.display=""},O=function(a){for(var b=0;b<a.length;b++)N(a[b])},P=function(a){return parseInt(a.style.left.replace("px",""),10)},Q=function(a){return parseInt(a.style.top.replace("px",""),10)};var ib=function(a,b,d){this.Xa=a;this.Wa=b;this.ya=d;this.I=147;this.I=80;this.H=-15;this.U=0;this.Ja=[];this.Aa=[];a=2;for(var e=b.length*a,f=0;f<b.length;f++)this.Aa[f]=e,this.Ja[f]=this.Aa[f],e-=a;this.ca=8;this.ba=0;this.B=[];this.za=[];a=-7;for(f=0;f<d.length;f++)this.za[f]=f*a,this.B[f]=this.za[f];this.da=0},jb=[229,225,220,215,210,205,200,195,190,185,180,175,170,165,160,155,150,145,140,134,129,123,117,112,108,103,99,95,91,88,84,81,77,74,70,67,64,60,57,53,49,45,41,36,31,26,21,15,10,4,-2,-8,
-13,-19,-24,-30,-35,-39,-44,-47,-50,-52,-54,-54,-54,-54,-53,-52,-51,-49,-47,-44,-40,-37,-33,-29,-24,-19,-15,-10,-5,0,5,11,16,21,26,30,35,40,44,48,51,53,54,53,52,49,44,40,33,30,26,23,22,21,22,24,27,30,34,38,42,47,52,57,62,67,72,77,82,87,92,97,102,108,112,117,122,127,132,138,143,148,153,158,163,168,173,178,183,188,193,198,203,208,213,218,224,229],kb=[108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108,107,104,100,96,91,87,82,77,72,67,62,57,52,47,42,37,32,27,23,19,
15,12,9,6,4,2,1,0,0,1,2,3,5,7,10,13,17,22,27,32,37,43,49,54,59,64,69,74,78,82,86,90,93,96,98,100,102,103,103,103,103,103,102,102,101,99,98,96,93,90,85,81,76,71,66,62,59,58,58,59,63,67,72,77,82,86,91,94,98,101,104,106,108,108,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,108,108,108,108,108,108,108,108,108,108,108,108,108,108,108],lb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,36,42,46,49,50,52,53,54,55,55,56,56,56,56,55,52,49,45,42,38,34,30,26,21,15,6,0,-4,-7,-11,
-16,-20,-26,-32,-39,-47,-56,-64,-73,-80,-86,-91,-96,-100,-105,-110,-116,-122,-128,-133,-139,-144,-149,-155,-160,-165,-171,-177,-180,-182,-184,-187,-190,-194,-198,-203,-209,-216,-226,-237,-262,-270,-281,-296,-316,-337,-352,-365,-393,-410,-424,-439,-453,-468,-480,-489,-497,-501,-505,-510,-516,-523,-529,-535,-538,-540,-542,-542,-542,-542,-541,-540,-540,-540,-540,-540,-541,-541,-541,-541,-541,-541,-541,-541,-542,-542,-542,-541,-541,-541,-541,-541,-541,-541,-541,-541,-540],mb=[583,579,574,569,563,556,
548,542,535,527,520,513,506,498,490,486,483,480,477,475,473,473,474,475,477,480,484,487,491,494,498,502,505,509,512,515,517,519,519,515,509,503,496,489,485,482,478,475,473,471,470,471,473,478,483,488,494,499,505,510,513,515,516,516,515,512,509,506,502,499,495,491,486,482,478,475,474,474,477,481,487,492,498,503,509,515,521,526,532,538,544,549,555,561,567,572,576,580,583,586],nb=[112,107,102,96,92,91,90,90,90,90,90,90,90,90,90,91,91,92,94,96,98,101,105,108,111,112,113,114,115,115,116,117,118,119,121,
123,126,129,134,139,143,145,146,146,145,144,143,141,138,135,131,127,123,120,118,117,116,115,114,112,110,107,103,100,97,94,93,91,90,90,90,90,91,92,94,97,101,105,110,112,113,114,115,116,116,116,116,116,116,116,116,116,116,116,117,121,125,130,135,140],ob=[2,2,2,1,1,0,0,0,0,0,0,0,0,0,9,8,8,7,7,6,6,5,4,3,3,2,1,0,0,0,0,0,1,2,2,3,3,4,5,6,7,8,0,0,0,1,2,3,4,5,5,6,7,9,0,0,0,0,9,8,7,6,5,5,4,3,2,1,0,0,0,0,8,7,6,5,5,5,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2];
ib.prototype.update=function(a){0<this.U?this.U=Math.max(0,this.U-a):(this.I+=this.H*a,0>this.H?56>=this.I&&(this.H=0,this.U=2):(this.H=127>=this.I?this.H+120*a:Math.max(15,0.9*this.H),147<=this.I&&(this.H=-15,this.U=2)),ha(this.Xa,"top",Math.floor(this.I)+"px"));if(0<this.ba)this.ba=Math.max(0,this.ba-a);else{for(var b=jb.length-1,d=this.Ja,e=0;e<d.length;e++)d[e]=Math.min(b,d[e]+a*this.ca),I(this.Wa[e],1,pb(lb,d[e])*Math.PI/180,pb(jb,d[e]),pb(kb,d[e]));this.ca+=2*a;if(d[0]>=b){for(e=0;e<d.length;e++)d[e]=
this.Aa[e];this.ca=8;this.ba=4}}if(0<this.da)this.da=Math.max(0,this.da-a);else{b=mb.length-1;for(d=0;d<this.B.length;d++){this.B[d]+=19*a;var f=Math.max(0,Math.min(b,this.B[d])),e=pb(mb,f),h=pb(nb,f),f=ob[Math.floor(f)];M(this.ya[d]);N(this.ya[d][f]);G(this.ya[d][f],e,h)}if(this.B[this.B.length-1]>=b){for(d=0;d<this.B.length;d++)this.B[d]=this.za[d];this.da=2}}};var pb=function(a,b){var d=Math.floor(b),e=Math.ceil(b);return d==e?a[d]:a[d]+(b-d)/(e-d)*(a[e]-a[d])};var sb=function(a,b,d,e){var f=R;this.la=a;this.Ga=b;this.ja=d;this.G=document.createElement("div");ha(this.G,"cursor","pointer");f.insertBefore(this.G,this.la);this.G.appendChild(this.la);this.G.appendChild(this.Ga);this.G.appendChild(this.ja);this.Oa=this.Ha=m;J(this.G,"mousedown",u(function(){qb(this,g)},this));J(document,"mouseup",u(function(){qb(this,m)},this));J(this.G,"mouseover",u(function(){this.Ha=g;rb(this)},this));J(this.G,"mouseout",u(function(){this.Ha=m;rb(this)},this));this.Qa=e;rb(this)},
qb=function(a,b){a.Oa=b;rb(a);b&&a.Qa&&a.Qa()},rb=function(a){a.Oa?(L(a.la),N(a.Ga),L(a.ja)):(N(a.la),L(a.Ga),a.Ha?N(a.ja):L(a.ja))};var tb=function(a){this.qa=a;this.P=g;this.w=0;this.ma=1;this.Pa=3};tb.prototype.update=function(a){switch(this.Pa){case 1:this.P&&ub(this,2);break;case 2:N(this.qa[Math.floor(this.w)]);this.w+=0.5;this.w>=this.qa.length&&ub(this,3);break;case 3:this.ma-=a;(0>this.ma||!this.P)&&ub(this,4);break;case 4:L(this.qa[Math.floor(this.w)]),this.w+=0.5,this.w>=this.qa.length&&ub(this,1)}};var ub=function(a,b){a.Pa=b;switch(b){case 2:a.w=0;break;case 3:a.ma=1;break;case 4:a.w=0}};var vb=function(a,b,d,e){this.ua=a;this.wa=0;this.$=[0,0,0];this.xa=0;this.s=b;this.aa=d;this.A=e;for(a=0;a<e.length;a++)G(e[a],265+10*a,70);this.F=l;this.k=0;this.va=-1;this.z=[];this.T=[];this.O=[];this.v=[]},wb=[100,100,100,100,99.2,98.4,97.6,96.8,96,95.2,93.6,92,90.4,88.8,87.2,85.6,83.2,80.8,78.4,76,73.6,71.2,68,65.6,62.4,59.2,56,52.8,48.8],xb=[0.3,0.3,0.3,0.3,0.31,0.32,0.33,0.34,0.36,0.37,0.39,0.41,0.43,0.46,0.48,0.51,0.54,0.57,0.61,0.64,0.68,0.71,0.75,0.79,0.82,0.86,0.91,0.95,1,0.82,0.84,0.86,
0.88,0.9,0.92,0.94,0.96,0.98,1,0.97,0.95,0.93,0.91,0.89,0.87,0.85,0.83,0.83,0.85,0.87,0.89,0.9,0.92,0.94,0.96,0.98,1,0.97,0.95,0.93,0.91,0.89,0.87,0.84,0.82,0.84,0.86,0.88,0.9,0.91,0.93,0.95,0.97,0.99],yb=[0,0,0,0.02,0.03,0.06,0.08,0.12,0.15,0.19,0.24,0.29,0.35,0.41,0.48,0.55,0.63,0.71,0.79,0.88,0.98,0.9,0.79,0.67,0.55,0.42,0.28,0.14,0],zb=[0,0,0,0.01,0.02,0.03,0.05,0.07,0.09,0.12,0.15,0.18,0.22,0.25,0.3,0.34,0.39,0.44,0.49,0.55,0.61,0.67,0.74,0.81,0.88,0.96,1],Ab=[230,330,430],Bb=function(a,b,d,
e,f){var h=S;h.z.push([a,b]);h.T.push(d);h.s[0].appendChild(a);G(a,P(a)-P(h.s[0]),Q(a)-Q(h.s[0]));f||(h.s[1].appendChild(b),G(b,P(b)-P(h.s[1]),Q(b)-Q(h.s[1])));h.O.push(e);h.k=h.z.length-1;f&&(h.va=h.k)},Cb=function(){for(var a=S,b=0;b<a.v.length;b++)hb(a.v[b]);a.v=[];for(b=0;b<a.z.length;b++)M(a.z[b]),M(a.T[b]),M(a.O[b]);L(a.ua);M(a.A);M(a.aa);M(a.s)};
vb.prototype.update=function(a){if(this.F!=l){0==this.F&&O(this.aa);for(var b=0;b<this.aa.length;b++){var d=this.aa[b],e=5*b+Math.floor(this.F);I(d,xb[e],0);ha(d,"opacity",0==b?zb[e]:yb[e],"top",wb[e]+"px")}this.F+=30*a;this.F>xb.length&&(this.F=l)}1>this.xa&&Db(this,Math.min(1,this.xa+5*a));9<this.wa&&(b=this.wa-800*a,9<b?Eb(this,b):(Eb(this,9),M(this.z[this.k]),M(this.T[this.k]),M(this.s)));for(b=0;b<this.O[this.k].length;b++)26<this.$[b]&&(d=b,e=Math.max(26,this.$[b]-800*a),this.$[d]=e,this.O[this.k][d].style.top=
e+"px")};
var Gb=function(a){var b=S,d=Fb(b)==b.va;b.k=Fb(b);if(d)Db(b,0),N(b.z[b.k][0]),N(b.s[0]),b.v.push(K(u(function(){O(this.T[this.k])},b),400)),b.v.push(K(u(function(){N(this.z[this.k][1])},b),1500));else{Db(b,0);O(b.z[b.k]);O(b.s);b.v.push(K(u(function(){O(this.T[this.k])},b),400));for(var e=0;e<b.A.length/2;e++)b.v.push(K(u(function(a){N(this.A[a]);N(this.A[this.A.length-1-a])},b,e),400+80*e));b.v.push(K(u(function(){this.F=0},b,e),720));for(e=0;e<b.A.length/2;e++)b.v.push(K(u(function(a){L(this.A[a]);L(this.A[this.A.length-
1-a])},b,e),400+80*(7+e)))}b.v.push(K(u(function(){Eb(this,205);N(this.ua);for(var b=this.O[this.k],d=0;d<b.length;d++){var e=d,s=Ab[d];this.$[e]=s;this.O[this.k][e].style.top=s+"px"}O(b);a()},b),d?3500:4E3))},Fb=function(a){return a.k+1<a.z.length?a.k+1:0},Db=function(a,b){a.xa=b;I(a.s[0],b,0);I(a.s[1],b,0)},Eb=function(a,b){a.wa=b;a.ua.style.top=b+"px"};var T=function(a,b,d){this.Ka=a;this.$a=b;this.ab=d;this.ha=this.fa=this.Ea=m;this.Da=(new Date).getTime();this.bb=ka("hidden");if(this.Na=(this.Fa=ka("visibilityState"))?this.Fa.replace(/state$/i,"change").toLowerCase():l)a=new F,b=ea(va,a),this.W||(this.W=[]),this.W.push(u(b,c)),a.listen(document,this.Na,u(this.cb,this));Hb(this)};w(T,ua);T.prototype.M=function(){window.clearTimeout(this.oa);T.ra.M.call(this)};
T.prototype.fb=function(){this.oa=l;(this.fa=(new Date).getTime()-this.Da>=this.Ka)||Hb(this);Ib(this)};var Ib=function(a){var b=a.Ea||a.fa;a.ha&&!b?(a.ha=m,a.ab(),Hb(a)):!a.ha&&b&&(a.ha=g,a.$a())};T.prototype.cb=function(){var a=document[this.Fa];(this.Ea=document[this.bb]||"hidden"==a)?Ib(this):Jb(this)};var Hb=function(a){a.oa&&window.clearTimeout(a.oa);var b=Math.max(100,a.Ka-((new Date).getTime()-a.Da));a.oa=window.setTimeout(u(a.fb,a),b)},Jb=function(a){a.Da=(new Date).getTime();a.fa=m;Ib(a)};var Kb=function(a,b){var d=window.google;d&&d.doodle&&(b&&(d.doodle.cpDestroy=b),d.doodle.cpInit=function(){b&&b();a()})},Lb=function(a,b,d){var e=window.google;if(e){var f=e.msg,h=function(){var a=f&&f.unlisten;a&&(a(67,h),d&&a(94,d));b();return g},k=function(){var a=document.getElementById("hplogo");if(a&&"hidden"!=a.style.visibility){var a=e.psy,b=f&&f.listen;a&&(a.q&&b)&&(b(67,h),d&&b(94,d))}};k();if(!e.doodle||!e.doodle.jesr)fa(),e.rein&&e.dstr&&(e.rein.push(k,a),e.dstr.push(h))}};var Mb=function(a){this.eb=a;this.N=m;this.Ta=[];this.Q=new Image};Mb.prototype.S=function(){if(!this.Q.src){var a=u(function(){if(!this.N){this.N=g;for(var a=0,d;d=this.Ta[a];a++)d()}},this);this.Q.onload=a;this.Q.src=this.eb;(this.Q.complete||"complete"==this.Q.readyState)&&a()}};var Nb=function(a,b){a.N?b():a.Ta.push(b)};var Ob=function(a,b,d){this.Va=a;this.Ia=b;this.a=d||l;this.Z=new Mb(a);this.N=m;Nb(this.Z,u(function(){this.N=g},this))};Ob.prototype.d=function(){return this.Z.Q};Ob.prototype.S=function(a){a&&Nb(this.Z,a);this.Z.S()};var U=new Ob("img/valentinesday/ferris-animals2.png",[[0,518,172,126],[175,518,173,126],[175,389,173,126],[176,129,172,128],[553,0,172,127],[0,129,173,127],[258,1124,173,126],[351,518,173,126],[0,0,174,126],[553,357,172,126],[434,1124,172,126],[351,389,172,126],[0,389,172,126],[263,0,172,126],[351,129,172,126],[82,738,550,126],[0,995,550,126],[81,867,550,125],[0,260,550,126],[553,228,172,126],[0,1124,172,126],[553,493,172,126],[598,139,22,5],[381,647,76,85],[635,832,43,9],[553,622,62,59],[635,1042,
35,5],[618,622,80,75],[438,0,26,6],[635,952,70,87],[635,821,21,8],[635,1060,79,79],[553,486,26,4],[175,1124,80,88],[635,1050,24,7],[83,647,66,87],[211,0,21,7],[152,647,79,88],[177,0,31,7],[635,738,79,80],[526,129,8,7],[308,647,70,72],[553,139,42,14],[234,647,71,85],[635,942,8,7],[0,738,79,83],[438,9,7,6],[0,647,80,77],[681,832,7,7],[635,844,79,95],[553,130,30,6],[0,867,78,80],[235,0,25,5],[553,156,61,69]],{lb:0,mb:1,nb:2,ob:3,pb:4,qb:5,rb:6,tb:7,ub:8,vb:9,wb:10,xb:11,yb:12,zb:13,Ab:14,Bb:15,Cb:16,
Db:17,Eb:18,Fb:19,Gb:20,Hb:21,md:22,nd:23,od:24,pd:25,qd:26,rd:27,sd:28,td:29,ud:30,vd:31,wd:32,xd:33,yd:34,zd:35,Ad:36,Bd:37,be:38,ce:39,de:40,ee:41,ge:42,he:43,ie:44,je:45,ke:46,le:47,$e:48,af:49,bf:50,df:51,ef:52,ff:53}),V=new Ob("img/valentinesday/ferris-cool.png",[[17,208,595,55],[568,266,6,5],[149,266,13,8],[0,208,14,9],[615,266,12,8],[615,318,10,10],[590,305,10,10],[590,291,8,11],[590,343,9,11],[577,266,10,11],[149,277,12,8],[466,328,14,8],[313,266,125,58],[441,266,124,59],[0,266,146,95],
[165,266,145,88],[590,266,22,22],[441,328,22,25],[590,318,22,22],[0,0,629,205]],{hb:0,kb:1,Jb:2,Kb:3,Lb:4,Mb:5,Nb:6,Ob:7,Pb:8,Qb:9,Rb:10,Sb:11,Tb:12,Ub:13,Ac:14,oe:15,hf:16,jf:17,kf:18,qf:19}),W=new Ob("img/valentinesday/ferris-warm.png",[[1176,189,24,22],[108,0,610,187],[114,227,50,61],[399,227,10,5],[990,153,31,25],[235,238,26,14],[1176,49,36,133],[852,0,3,104],[1220,49,4,104],[108,198,3,104],[1078,19,68,32],[990,0,3,3],[603,210,2,10],[541,198,2,10],[163,291,2,10],[990,6,2,10],[747,0,2,10],[240,
225,2,10],[990,181,2,10],[742,0,2,10],[951,128,2,10],[1195,0,2,10],[946,141,3,8],[1170,13,3,10],[546,210,3,12],[795,14,3,16],[1170,0,2,10],[235,294,2,10],[1215,49,2,10],[598,210,2,10],[0,99,2,10],[0,0,105,96],[28,128,18,25],[114,198,10,10],[876,128,67,67],[413,198,125,125],[264,198,128,128],[685,198,1,11],[180,198,1,11],[240,294,1,11],[752,26,1,11],[0,128,1,11],[131,295,1,11],[395,198,1,11],[858,0,1,11],[0,325,11,1],[114,211,11,1],[1181,0,11,1],[135,295,11,1],[184,220,11,1],[1176,185,11,1],[149,295,
11,1],[0,112,11,1],[22,297,9,9],[1154,6,9,9],[114,215,9,9],[16,128,9,9],[20,99,9,9],[32,99,9,9],[399,211,9,9],[34,297,9,9],[46,297,9,9],[0,116,9,9],[721,26,9,9],[990,89,9,9],[202,198,9,9],[168,245,9,9],[783,33,9,9],[546,198,9,9],[608,210,69,32],[14,99,3,3],[235,255,2,10],[1078,6,2,10],[399,198,2,10],[946,128,2,10],[725,0,2,10],[1176,0,2,10],[235,198,2,10],[235,225,2,10],[168,232,2,10],[752,13,2,10],[1072,6,3,8],[1170,26,3,10],[126,309,3,12],[1072,54,3,16],[990,19,2,10],[244,294,2,10],[126,291,2,10],
[680,198,2,10],[1149,19,2,10],[0,198,105,96],[0,297,19,25],[752,0,10,10],[1002,19,67,67],[862,0,125,125],[721,59,128,128],[180,220,1,11],[721,45,1,11],[779,0,1,11],[779,14,1,11],[721,0,1,11],[235,211,1,11],[198,198,1,11],[235,280,1,11],[399,223,11,1],[1176,214,11,1],[765,0,11,1],[862,128,11,1],[180,212,11,1],[131,291,11,1],[1083,6,11,1],[168,216,11,1],[1176,37,9,9],[114,291,9,9],[801,0,9,9],[721,14,9,9],[168,220,9,9],[1176,25,9,9],[1176,13,9,9],[783,14,9,9],[608,198,9,9],[1176,287,9,9],[990,44,9,
9],[990,32,9,9],[235,268,9,9],[4,128,9,9],[168,198,9,9],[730,0,9,9],[552,210,43,43],[541,256,629,68],[1176,218,67,66],[168,257,64,65],[990,101,43,49],[1036,89,131,100]],{ib:0,jb:1,Ib:2,Vb:3,Wb:4,Cd:5,Dd:6,Ed:7,Fd:8,Gd:9,Xb:10,Yb:11,Zb:12,$b:13,cc:14,dc:15,ec:16,fc:17,gc:18,hc:19,ic:20,jc:21,kc:22,lc:23,nc:24,oc:25,qc:26,tc:27,uc:28,vc:29,wc:30,xc:31,yc:32,Bc:33,Cc:34,Dc:35,Ec:36,Fc:37,Gc:38,Hc:39,Ic:40,Jc:41,Kc:42,Lc:43,Mc:44,Nc:45,Oc:46,Pc:47,Qc:48,Rc:49,Sc:50,Tc:51,Uc:52,Vc:53,Wc:54,Xc:55,Yc:56,
Zc:57,$c:58,bd:59,cd:60,dd:61,ed:62,fd:63,gd:64,hd:65,jd:66,kd:67,ld:68,Hd:69,Id:70,Jd:71,Kd:72,Ld:73,Md:74,Nd:75,Od:76,Pd:77,Qd:78,Rd:79,Sd:80,Td:81,Ud:82,Vd:83,Wd:84,Xd:85,Yd:86,Zd:87,$d:88,ae:89,fe:90,ne:91,pe:92,qe:93,re:94,se:95,ue:96,ve:97,we:98,xe:99,ye:100,ze:101,Ae:102,Be:103,Ce:104,De:105,Ee:106,Fe:107,Ge:108,He:109,Ie:110,Je:111,Ke:112,Le:113,Me:114,Ne:115,Oe:116,Pe:117,Qe:118,Re:119,Se:120,Te:121,Ue:122,Ve:123,We:124,Xe:125,Ye:126,Ze:127,gf:128,lf:129,mf:130,nf:131,of:132,rf:133});var Pb=[W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,W,V,V,V,W,W,V,W,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,W,W,V,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,V,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,V,W,W,W,W,W,W,W,V,V,V,V,V,V,V,V,V,V,V,V,V],Qb=[W.a.nf,W.a.of,W.a.mf,W.a.lc,W.a.jc,W.a.ic,W.a.hc,W.a.gc,W.a.fc,W.a.ec,W.a.dc,
W.a.cc,W.a.$b,W.a.Zb,W.a.wc,W.a.vc,W.a.uc,W.a.tc,W.a.qc,W.a.oc,W.a.nc,W.a.kc,W.a.Yb,W.a.Xb,W.a.Ud,W.a.Sd,W.a.Rd,W.a.Qd,W.a.Pd,W.a.Od,W.a.Nd,W.a.Md,W.a.Ld,W.a.Kd,W.a.Jd,W.a.ae,W.a.$d,W.a.Zd,W.a.Yd,W.a.Xd,W.a.Wd,W.a.Vd,W.a.Td,W.a.Id,W.a.Hd,W.a.lf,W.a.ib,U.a.lb,U.a.mb,U.a.nb,U.a.ob,U.a.pb,U.a.qb,U.a.rb,U.a.tb,U.a.ub,U.a.vb,U.a.wb,U.a.xb,U.a.yb,U.a.zb,U.a.Ab,U.a.Bb,U.a.Cb,U.a.Db,U.a.Eb,U.a.Fb,U.a.Gb,U.a.Hb,W.a.jb,V.a.kf,V.a.jf,V.a.hf,W.a.gf,W.a.Wb,V.a.kb,W.a.rf,U.a.wd,U.a.xd,U.a.yd,U.a.zd,U.a.ud,U.a.vd,
U.a.Ad,U.a.Bd,U.a.sd,U.a.td,U.a.od,U.a.pd,U.a.md,U.a.nd,U.a.qd,U.a.rd,U.a.bf,U.a.df,U.a.ge,U.a.he,U.a.ie,U.a.je,U.a.ef,U.a.ff,U.a.$e,U.a.af,U.a.de,U.a.ee,U.a.ke,U.a.le,U.a.be,U.a.ce,W.a.xc,W.a.fe,V.a.Ac,W.a.ld,W.a.kd,W.a.jd,W.a.hd,W.a.gd,W.a.fd,W.a.ed,W.a.dd,W.a.cd,W.a.bd,W.a.$c,W.a.Zc,W.a.Yc,W.a.Xc,W.a.Wc,W.a.Vc,W.a.Uc,W.a.Tc,W.a.Sc,W.a.Rc,W.a.Qc,W.a.Pc,W.a.Oc,W.a.Nc,W.a.Mc,W.a.Lc,W.a.Kc,W.a.Jc,W.a.Ic,W.a.Hc,W.a.Gc,W.a.Fc,W.a.Dc,W.a.Cc,W.a.Bc,W.a.Ec,W.a.yc,V.a.oe,W.a.Ze,W.a.Ye,W.a.Xe,W.a.We,W.a.Ve,
W.a.Ue,W.a.Te,W.a.Se,W.a.Re,W.a.Qe,W.a.Pe,W.a.Oe,W.a.Ne,W.a.Me,W.a.Le,W.a.Ke,W.a.Je,W.a.Ie,W.a.He,W.a.Ge,W.a.Fe,W.a.Ee,W.a.De,W.a.Ce,W.a.Be,W.a.Ae,W.a.ze,W.a.ye,W.a.xe,W.a.we,W.a.ve,W.a.ue,W.a.re,W.a.qe,W.a.pe,W.a.se,W.a.ne,V.a.hb,W.a.Vb,W.a.Ib,W.a.Cd,W.a.Gd,W.a.Fd,W.a.Ed,W.a.Dd,V.a.Ub,V.a.Sb,V.a.Rb,V.a.Qb,V.a.Pb,V.a.Ob,V.a.Nb,V.a.Mb,V.a.Lb,V.a.Kb,V.a.Jb,V.a.Tb,V.a.qf],Rb=[283,293,281,209,213,216,219,222,225,228,231,234,237,240,243,246,249,252,255,257,260,263,266,206,415,412,409,406,403,400,397,394,
391,388,385,382,379,376,373,370,367,364,361,358,353,0,591,39,228,417,39,228,417,39,228,415,39,228,417,39,228,417,39,39,39,39,39,228,417,9,303,303,303,293,299,311,73,222,195,228,205,226,194,225,194,235,201,214,202,223,195,224,194,377,355,366,366,398,356,373,368,397,364,395,359,391,357,379,357,186,339,161,192,201,213,222,268,259,247,238,268,259,247,238,192,201,213,222,175,188,205,218,283,270,253,240,234,234,234,234,234,234,234,234,172,201,230,170,225,323,353,362,374,383,429,420,408,399,429,420,408,
399,353,362,374,383,336,349,366,379,444,431,414,401,395,395,395,395,395,395,395,395,333,362,391,331,386,14,79,569,536,552,542,548,531,469,485,481,477,476,476,475,476,482,486,494,469,0],Sb=[138,144,138,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,172,174,176,179,167,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,172,174,176,178,167,137,15,27,27,27,25,26,26,27,27,27,27,27,27,27,27,27,27,26,27,26,27,27,27,9,9,9,11,0,47,75,4,76,41,89,42,74,50,74,41,74,42,73,70,75,45,
75,54,75,49,71,43,74,45,75,61,73,48,75,57,74,52,74,49,36,36,77,116,107,95,86,116,107,95,86,40,49,61,70,40,49,61,70,83,83,83,83,83,83,83,83,131,118,102,89,24,37,54,67,20,50,79,19,18,84,116,107,95,86,116,107,95,86,40,49,61,70,40,49,61,70,83,83,83,83,83,83,83,83,131,118,102,89,24,37,54,67,20,50,79,19,18,143,52,111,78,57,57,57,35,98,119,118,112,110,106,104,101,97,94,93,93,0];var Tb=function(){this.g={};this.h={}};
Tb.prototype.load=function(){for(var a=207;0<=a;a--){var b=a,d;d=Pb[b];var e=Qb[b],f=document.createElement("div");f.style.position="absolute";f.style.sf="none";f.style.MozUserSelect="none";f.style.webkitUserSelect="none";f.style.webkitTapHighlightColor="rgba(0,0,0,0)";f.unselectable="on";var h=d.Ia[e];f.style.width=h[2]+"px";f.style.height=h[3]+"px";e=d.Ia[e];d=[f,"url("+d.Va+") "+-(e[0]+0)+"px "+-(e[1]+0)+"px no-repeat"];f=d[0];f.style.background=d[1];d=f;G(d,Rb[b],Sb[b]);this.g[a]=[d];for(b=0;b<
this.h[a]-1;b++)d=this.g[a][0].cloneNode(m),this.g[a].push(d);d=this.g[a];for(b=0;b<d.length;b++)R.appendChild(d[b])}};Tb.prototype.d=function(a){return this.g[a][0]};var Ub,Vb=function(a){Ub++;window.google&&window.google.log&&window.google.log("doodle-ferris","s:"+Ub+",d:"+a)};var Xb=function(a,b,d,e,f,h){this.Ya=b;this.x=f;this.y=h;this.o=0;this.i=l;this.K=0;Wb(this);this.R=1;this.Ba=d;this.ea=[];for(a=0;a<d.length;a++)this.ea[a]=2*Math.random()*Math.PI;this.V=999999;this.Ca=[];for(a=0;a<e.length;a++){d=e[a];for(var k=document.createElement("div"),s=0;s<d.length;s++){var q=d[s];k.appendChild(q);G(q,P(q)-f-1,Q(q)-h)}this.Ca[a]=k;b.appendChild(k)}K(u(this.blink,this),1E3)},Yb=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0.15,0.23,0.3,0.38,0.45,0.52,0.6,0.67,0.75,0.82,0.89,0.96,
1],[0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0.15,0.23,0.3,0.38,0.45,0.52,0.6,0.67,0.75,0.82,0.89,0.96,1],[0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0.15,0.23,0.3,0.38,0.45,0.52,0.6,0.67,0.75,0.82,0.89,0.96,1],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0.15,0.23,0.3,0.38,0.45,0.52,0.6,0.67,0.75,0.82,0.89,0.96,1],[0,0.33,0.48,0.63,0.78,0.93,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0.12,0.24,0.36,0.47,0.59,0.71,0.82,0.94,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0.08,0.16,0.23,0.31,0.39,0.47,
0.54,0.62,0.7,0.77,0.85,0.93,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],Zb=function(a){a.i=l;a.K=6.15},Wb=function(a){a.i=l;a.K=0.314};Xb.prototype.blink=function(){this.V=0};var $b=function(a,b){a.i=0<a.R?b-a.o:a.o-b;0>a.i&&(a.i+=2*Math.PI);a.i<Math.PI&&(a.i+=2*Math.PI)};
Xb.prototype.update=function(a){this.i!=l&&(this.K=3*Math.log(this.i+1));var b=this.R*this.K*a;this.i!=l&&(this.i-=(0<this.R?1:-1)*b,0.01>this.i&&(this.o+=this.i,this.i=l,this.K=0));this.o+=b;this.o>2*Math.PI?this.o-=2*Math.PI:0>this.o&&(this.o+=2*Math.PI);I(this.Ya,1,this.o);for(var b=this.y+63.5-parseInt(this.Ba[0].style.height,10)+3.5,d=this.Ba.length,e=0;e<d;e++){var f=this.o+2*e*Math.PI/d,h=60*Math.cos(f),f=60*Math.sin(f)+b;this.ea[e]+=2*a*Math.PI/2.5;I(this.Ba[e],1,0.1*Math.sin(this.ea[e]),
h,f)}if(this.V<Yb[0].length){b=Math.floor(this.V);for(d=0;d<this.Ca.length;d++)ha(this.Ca[d],"opacity",b<Yb[d].length?Yb[d][b]:1);this.V+=30*a}};var R=l,ac=m,bc=g,cc=l,X=l,S=l,Y=l,Z=l,dc=l,$=0,ec=l,fc=l,gc=l,hc=0,ic=2*Math.PI/8,jc=0,kc=function(){jc--;0>=jc&&(R.style.visibility="")},mc=function(){var a=dc;new sb(a.d(71),a.d(72),a.d(70),function(){var a=google.doodle;a&&a.url&&(a=a.url,google.nav&&google.nav.go?google.nav.go(a):window.parent?window.parent.location.replace(a):window.location.replace(a))});var b=new sb(a.d(1),a.d(2),a.d(0),function(){lc(1)});J(document,"keydown",function(){Jb(X)});J(document,"mousemove",function(){Jb(X)});J(document,
"mousedown",function(){Jb(X)});J(R,"keydown",function(a){if(32==a.keyCode)a.preventDefault(),qb(b,g);else if(27==a.keyCode&&(2==$||3==$))a.preventDefault(),a.stopPropagation(),lc(0)});J(R,"keyup",function(a){32==a.keyCode&&(a.preventDefault(),qb(b,m))});ha(a.d(46),"cursor","pointer");J(a.d(46),"mousedown",function(){lc(0)})},nc=function(){var a=dc,b=[],d=function(a,d,e,s,q,H){b.splice(Math.floor(Math.random()*(d+1-a))+a,0,[e,s,q,H])};d(0,b.length,a.g[78][0],a.d(108),[a.g[77][0],a.d(107)],[a.d(47),
a.d(48),a.d(49)]);d(0,b.length,a.g[78][1],a.d(102),[a.g[77][1],a.d(101)],[a.d(50),a.d(51),a.d(52)]);d(0,b.length,a.g[80][0],a.d(98),[a.g[79][0],a.d(97)],[a.d(53),a.d(54),a.d(55)]);d(0,b.length,a.d(82),a.d(106),[a.d(81),a.d(105)],[a.d(63)]);d(0,b.length,a.d(86),a.d(94),[a.d(85),a.d(93)],[a.d(64)]);d(0,b.length,a.d(88),a.g[104][0],[a.d(87),a.g[103][0]],[a.d(65)]);d(3,b.length,a.g[80][1],a.d(100),[a.g[79][1],a.d(99)],[a.d(56),a.d(57),a.d(58)]);d(3,b.length,a.d(84),a.d(96),[a.d(83),a.d(95)],[a.d(59),
a.d(60),a.d(61)]);d(3,b.length,a.d(92),a.g[104][1],[a.d(91),a.g[103][1]],[a.d(66),a.d(67),a.d(68)]);var e=a.d(90);d(b.length-2,b.length,e,a.d(76),[a.d(89)],[a.d(62)]);for(a=0;a<b.length;a++)Bb(b[a][0],b[a][1],b[a][2],b[a][3],b[a][0]==e);Cb()},lc=function(a){if(!(a==$||1==a&&0!=$&&3!=$)){var b=$;$=a;switch(a){case 0:Cb();Wb(Y);Wb(Z);break;case 1:R.title="";Vb(2==b||3==b);Cb();hc=(hc+ic)%(2*Math.PI);fc.P=m;gc.P=m;U.N?oc():(Zb(Y),Zb(Z));break;case 2:Gb(function(){lc(3)});break;case 3:fc.P=g,gc.P=g}}},
oc=function(){$b(Y,hc);var a=2*Math.PI-hc;Fb(S)==S.va&&(a+=2*Math.PI/16);$b(Z,a)},pc=function(){if(ac){if(!(0<jc)){var a=new Date,b=Math.min(0.1,(a-cc)/1E3);cc=a;fc.update(b);gc.update(b);Y.update(b);Z.update(b);S.update(b);ec.update(b);1==$&&(0==Y.K&&0==Z.K)&&lc(2)}ma(pc)}else bc=g},qc=function(){ac=m},rc=function(){bc?(ac=g,bc=m,cc=new Date,pc()):ac=g};
(function(a,b,d){var e=function(){Lb(a,b,d);Kb(a,b);a()},f=window.google;f&&f.x?f.x({id:"DOODLE"},e):e()})(function(){if(R=document.getElementById("hplogo")){R.innerHTML="";R.style.visibility="hidden";jc=2;V.S(kc);W.S(kc);U.S(function(){1==$&&oc()});Ub=$=0;X=new T(3E4,qc,rc);var a=dc=new Tb;a.h[148]=8;a.h[186]=8;a.h[188]=6;a.h[205]=2;a.h[204]=2;a.h[203]=2;a.h[202]=2;a.h[201]=2;a.h[200]=2;a.h[199]=2;a.h[198]=2;a.h[197]=2;a.h[196]=2;a.h[78]=2;a.h[77]=2;a.h[80]=2;a.h[79]=2;a.h[104]=2;a.h[103]=2;a.h[74]=
3;a.h[75]=10;a.load();L(a.d(110));L(a.d(109));ec=new ib(a.d(190),a.g[188],[[a.g[205][0],a.g[196][0],a.g[197][0],a.g[198][0],a.g[199][0],a.g[200][0],a.g[201][0],a.g[202][0],a.g[203][0],a.g[204][0]],[a.g[205][1],a.g[196][1],a.g[197][1],a.g[198][1],a.g[199][1],a.g[200][1],a.g[201][1],a.g[202][1],a.g[203][1],a.g[204][1]]]);Y=new Xb(0,a.d(147),a.g[148],[[a.d(143),a.d(139),a.d(135),a.d(131),a.d(127),a.d(123),a.d(119),a.d(115)],[a.d(142),a.d(138),a.d(134),a.d(130),a.d(126),a.d(122),a.d(118),a.d(114)],[a.d(141),
a.d(137),a.d(133),a.d(129),a.d(125),a.d(121),a.d(117),a.d(113)],[a.d(140),a.d(136),a.d(132),a.d(128),a.d(124),a.d(120),a.d(116),a.d(112)],[a.d(146)],[a.d(145)],[a.d(144)]],170,19);Y.R=1.1;Z=new Xb(0,a.d(185),a.g[186],[[a.d(181),a.d(177),a.d(173),a.d(169),a.d(165),a.d(161),a.d(157),a.d(153)],[a.d(180),a.d(176),a.d(172),a.d(168),a.d(164),a.d(160),a.d(156),a.d(152)],[a.d(179),a.d(175),a.d(171),a.d(167),a.d(163),a.d(159),a.d(155),a.d(151)],[a.d(178),a.d(174),a.d(170),a.d(166),a.d(162),a.d(158),a.d(154),
a.d(150)],[a.d(184)],[a.d(183)],[a.d(182)]],331,19);Z.R=-0.9;fc=new tb([a.d(3),a.d(4),a.d(5),a.d(6),a.d(7),a.d(8),a.d(9),a.d(10),a.d(11),a.d(12),a.d(13),a.d(14),a.d(15),a.d(16),a.d(17),a.d(18),a.d(19),a.d(20),a.d(21),a.d(22)]);gc=new tb([a.d(24),a.d(25),a.d(26),a.d(27),a.d(28),a.d(29),a.d(30),a.d(31),a.d(32),a.d(33),a.d(34),a.d(35),a.d(36),a.d(37),a.d(38),a.d(39),a.d(40),a.d(41),a.d(42),a.d(43)]);var b=a.d(69),d=a.d(46);b.appendChild(d);G(d,P(d)-P(b),Q(d)-Q(b));S=new vb(b,[a.d(109),a.d(110)],a.g[74],
a.g[75]);nc();mc();rc()}},function(){ac=m;if(fb!=l){var a=fb;ta(a.X,bb);a.X.length=0}for(var b in gb)hb(parseInt(b,10));X!=l&&X.ta()});})();
