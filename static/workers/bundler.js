(function () {
	'use strict';

	/*
	  @license
		Rollup.js v1.20.3
		Wed, 28 Aug 2019 12:02:10 GMT - commit bce164e9b41dc724bd913ff66c6672da158ef9cf


		https://github.com/rollup/rollup

		Released under the MIT License.
	*/
	function e(e,t,n,i){return new(n||(n=Promise))(function(r,s){function a(e){try{h(i.next(e));}catch(e){s(e);}}function o(e){try{h(i.throw(e));}catch(e){s(e);}}function h(e){e.done?r(e.value):new n(function(t){t(e.value);}).then(a,o);}h((i=i.apply(e,t||[])).next());})}var t="1.20.3",n=i;function i(e,t){if(!e)throw new Error(t||"Assertion failed")}function r(e,t){return 55296==(64512&e.charCodeAt(t))&&(!(t<0||t+1>=e.length)&&56320==(64512&e.charCodeAt(t+1)))}function s(e){return (e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function a(e){return 1===e.length?"0"+e:e}function o(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}i.equal=function(e,t,n){if(e!=t)throw new Error(n||"Assertion failed: "+e+" != "+t)};var h={inherits:function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e;};}),toArray:function(e,t){if(Array.isArray(e))return e.slice();if(!e)return [];var n=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),s=0;s<e.length;s+=2)n.push(parseInt(e[s]+e[s+1],16));}else for(var i=0,s=0;s<e.length;s++){var a=e.charCodeAt(s);a<128?n[i++]=a:a<2048?(n[i++]=a>>6|192,n[i++]=63&a|128):r(e,s)?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++s)),n[i++]=a>>18|240,n[i++]=a>>12&63|128,n[i++]=a>>6&63|128,n[i++]=63&a|128):(n[i++]=a>>12|224,n[i++]=a>>6&63|128,n[i++]=63&a|128);}else for(s=0;s<e.length;s++)n[s]=0|e[s];return n},toHex:function(e){for(var t="",n=0;n<e.length;n++)t+=a(e[n].toString(16));return t},htonl:s,toHex32:function(e,t){for(var n="",i=0;i<e.length;i++){var r=e[i];"little"===t&&(r=s(r)),n+=o(r.toString(16));}return n},zero2:a,zero8:o,join32:function(e,t,i,r){var s=i-t;n(s%4==0);for(var a=new Array(s/4),o=0,h=t;o<a.length;o++,h+=4){var u;u="big"===r?e[h]<<24|e[h+1]<<16|e[h+2]<<8|e[h+3]:e[h+3]<<24|e[h+2]<<16|e[h+1]<<8|e[h],a[o]=u>>>0;}return a},split32:function(e,t){for(var n=new Array(4*e.length),i=0,r=0;i<e.length;i++,r+=4){var s=e[i];"big"===t?(n[r]=s>>>24,n[r+1]=s>>>16&255,n[r+2]=s>>>8&255,n[r+3]=255&s):(n[r+3]=s>>>24,n[r+2]=s>>>16&255,n[r+1]=s>>>8&255,n[r]=255&s);}return n},rotr32:function(e,t){return e>>>t|e<<32-t},rotl32:function(e,t){return e<<t|e>>>32-t},sum32:function(e,t){return e+t>>>0},sum32_3:function(e,t,n){return e+t+n>>>0},sum32_4:function(e,t,n,i){return e+t+n+i>>>0},sum32_5:function(e,t,n,i,r){return e+t+n+i+r>>>0},sum64:function(e,t,n,i){var r=e[t],s=i+e[t+1]>>>0,a=(s<i?1:0)+n+r;e[t]=a>>>0,e[t+1]=s;},sum64_hi:function(e,t,n,i){return (t+i>>>0<t?1:0)+e+n>>>0},sum64_lo:function(e,t,n,i){return t+i>>>0},sum64_4_hi:function(e,t,n,i,r,s,a,o){var h=0,u=t;return h+=(u=u+i>>>0)<t?1:0,h+=(u=u+s>>>0)<s?1:0,e+n+r+a+(h+=(u=u+o>>>0)<o?1:0)>>>0},sum64_4_lo:function(e,t,n,i,r,s,a,o){return t+i+s+o>>>0},sum64_5_hi:function(e,t,n,i,r,s,a,o,h,u){var c=0,l=t;return c+=(l=l+i>>>0)<t?1:0,c+=(l=l+s>>>0)<s?1:0,c+=(l=l+o>>>0)<o?1:0,e+n+r+a+h+(c+=(l=l+u>>>0)<u?1:0)>>>0},sum64_5_lo:function(e,t,n,i,r,s,a,o,h,u){return t+i+s+o+u>>>0},rotr64_hi:function(e,t,n){return (t<<32-n|e>>>n)>>>0},rotr64_lo:function(e,t,n){return (e<<32-n|t>>>n)>>>0},shr64_hi:function(e,t,n){return e>>>n},shr64_lo:function(e,t,n){return (e<<32-n|t>>>n)>>>0}};function u(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32;}var c=u;u.prototype.update=function(e,t){if(e=h.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var n=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-n,e.length),0===this.pending.length&&(this.pending=null),e=h.join32(e,0,e.length-n,this.endian);for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32);}return this},u.prototype.digest=function(e){return this.update(this._pad()),n(null===this.pending),this._digest(e)},u.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,n=t-(e+this.padLength)%t,i=new Array(n+this.padLength);i[0]=128;for(var r=1;r<n;r++)i[r]=0;if(e<<=3,"big"===this.endian){for(var s=8;s<this.padLength;s++)i[r++]=0;i[r++]=0,i[r++]=0,i[r++]=0,i[r++]=0,i[r++]=e>>>24&255,i[r++]=e>>>16&255,i[r++]=e>>>8&255,i[r++]=255&e;}else for(i[r++]=255&e,i[r++]=e>>>8&255,i[r++]=e>>>16&255,i[r++]=e>>>24&255,i[r++]=0,i[r++]=0,i[r++]=0,i[r++]=0,s=8;s<this.padLength;s++)i[r++]=0;return i};var l={BlockHash:c},p=h.rotr32;function d(e,t,n){return e&t^~e&n}function f(e,t,n){return e&t^e&n^t&n}function m(e,t,n){return e^t^n}var g={ft_1:function(e,t,n,i){return 0===e?d(t,n,i):1===e||3===e?m(t,n,i):2===e?f(t,n,i):void 0},ch32:d,maj32:f,p32:m,s0_256:function(e){return p(e,2)^p(e,13)^p(e,22)},s1_256:function(e){return p(e,6)^p(e,11)^p(e,25)},g0_256:function(e){return p(e,7)^p(e,18)^e>>>3},g1_256:function(e){return p(e,17)^p(e,19)^e>>>10}},y=h.sum32,v=h.sum32_4,x=h.sum32_5,_=g.ch32,E=g.maj32,b=g.s0_256,A=g.s1_256,S=g.g0_256,w=g.g1_256,I=l.BlockHash,C=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function P(){if(!(this instanceof P))return new P;I.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=C,this.W=new Array(64);}h.inherits(P,I);var k=P;P.blockSize=512,P.outSize=256,P.hmacStrength=192,P.padLength=64,P.prototype._update=function(e,t){for(var i=this.W,r=0;r<16;r++)i[r]=e[t+r];for(;r<i.length;r++)i[r]=v(w(i[r-2]),i[r-7],S(i[r-15]),i[r-16]);var s=this.h[0],a=this.h[1],o=this.h[2],h=this.h[3],u=this.h[4],c=this.h[5],l=this.h[6],p=this.h[7];for(n(this.k.length===i.length),r=0;r<i.length;r++){var d=x(p,A(u),_(u,c,l),this.k[r],i[r]),f=y(b(s),E(s,a,o));p=l,l=c,c=u,u=y(h,d),h=o,o=a,a=s,s=y(d,f);}this.h[0]=y(this.h[0],s),this.h[1]=y(this.h[1],a),this.h[2]=y(this.h[2],o),this.h[3]=y(this.h[3],h),this.h[4]=y(this.h[4],u),this.h[5]=y(this.h[5],c),this.h[6]=y(this.h[6],l),this.h[7]=y(this.h[7],p);},P.prototype._digest=function(e){return "hex"===e?h.toHex32(this.h,"big"):h.split32(this.h,"big")};for(var N={},$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",R=0;R<$.length;R++)N[$.charCodeAt(R)]=R;function O(e){var t="";e=e<0?-e<<1|1:e<<1;do{var n=31&e;(e>>>=5)>0&&(n|=32),t+=$[n];}while(e>0);return t}var M=function(e,t,n){this.start=e,this.end=t,this.original=n,this.intro="",this.outro="",this.content=n,this.storeName=!1,this.edited=!1,Object.defineProperties(this,{previous:{writable:!0,value:null},next:{writable:!0,value:null}});};M.prototype.appendLeft=function(e){this.outro+=e;},M.prototype.appendRight=function(e){this.intro=this.intro+e;},M.prototype.clone=function(){var e=new M(this.start,this.end,this.original);return e.intro=this.intro,e.outro=this.outro,e.content=this.content,e.storeName=this.storeName,e.edited=this.edited,e},M.prototype.contains=function(e){return this.start<e&&e<this.end},M.prototype.eachNext=function(e){for(var t=this;t;)e(t),t=t.next;},M.prototype.eachPrevious=function(e){for(var t=this;t;)e(t),t=t.previous;},M.prototype.edit=function(e,t,n){return this.content=e,n||(this.intro="",this.outro=""),this.storeName=t,this.edited=!0,this},M.prototype.prependLeft=function(e){this.outro=e+this.outro;},M.prototype.prependRight=function(e){this.intro=e+this.intro;},M.prototype.split=function(e){var t=e-this.start,n=this.original.slice(0,t),i=this.original.slice(t);this.original=n;var r=new M(e,this.end,i);return r.outro=this.outro,this.outro="",this.end=e,this.edited?(r.edit("",!1),this.content=""):this.content=n,r.next=this.next,r.next&&(r.next.previous=r),r.previous=this,this.next=r,r},M.prototype.toString=function(){return this.intro+this.content+this.outro},M.prototype.trimEnd=function(e){if(this.outro=this.outro.replace(e,""),this.outro.length)return !0;var t=this.content.replace(e,"");return t.length?(t!==this.content&&this.split(this.start+t.length).edit("",void 0,!0),!0):(this.edit("",void 0,!0),this.intro=this.intro.replace(e,""),!!this.intro.length||void 0)},M.prototype.trimStart=function(e){if(this.intro=this.intro.replace(e,""),this.intro.length)return !0;var t=this.content.replace(e,"");return t.length?(t!==this.content&&(this.split(this.end-t.length),this.edit("",void 0,!0)),!0):(this.edit("",void 0,!0),this.outro=this.outro.replace(e,""),!!this.outro.length||void 0)};var D=function(){throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.")};"undefined"!=typeof window&&"function"==typeof window.btoa?D=function(e){return window.btoa(unescape(encodeURIComponent(e)))}:"function"==typeof Buffer&&(D=function(e){return Buffer.from(e,"utf-8").toString("base64")});var T=function(e){this.version=3,this.file=e.file,this.sources=e.sources,this.sourcesContent=e.sourcesContent,this.names=e.names,this.mappings=function(e){for(var t=0,n=0,i=0,r=0,s="",a=0;a<e.length;a++){var o=e[a];if(a>0&&(s+=";"),0!==o.length){for(var h=0,u=[],c=0,l=o;c<l.length;c++){var p=l[c],d=O(p[0]-h);h=p[0],p.length>1&&(d+=O(p[1]-t)+O(p[2]-n)+O(p[3]-i),t=p[1],n=p[2],i=p[3]),5===p.length&&(d+=O(p[4]-r),r=p[4]),u.push(d);}s+=u.join(",");}}return s}(e.mappings);};function L(e){var t=e.split("\n"),n=t.filter(function(e){return /^\t+/.test(e)}),i=t.filter(function(e){return /^ {2,}/.test(e)});if(0===n.length&&0===i.length)return null;if(n.length>=i.length)return "\t";var r=i.reduce(function(e,t){var n=/^ +/.exec(t)[0].length;return Math.min(n,e)},1/0);return new Array(r+1).join(" ")}function V(e,t){var n=e.split(/[\/\\]/),i=t.split(/[\/\\]/);for(n.pop();n[0]===i[0];)n.shift(),i.shift();if(n.length)for(var r=n.length;r--;)n[r]="..";return n.concat(i).join("/")}T.prototype.toString=function(){return JSON.stringify(this)},T.prototype.toUrl=function(){return "data:application/json;charset=utf-8;base64,"+D(this.toString())};var B=Object.prototype.toString;function z(e){return "[object Object]"===B.call(e)}function j(e){for(var t=e.split("\n"),n=[],i=0,r=0;i<t.length;i++)n.push(r),r+=t[i].length+1;return function(e){for(var t=0,i=n.length;t<i;){var r=t+i>>1;e<n[r]?i=r:t=r+1;}var s=t-1;return {line:s,column:e-n[s]}}}var W=function(e){this.hires=e,this.generatedCodeLine=0,this.generatedCodeColumn=0,this.raw=[],this.rawSegments=this.raw[this.generatedCodeLine]=[],this.pending=null;};W.prototype.addEdit=function(e,t,n,i){if(t.length){var r=[this.generatedCodeColumn,e,n.line,n.column];i>=0&&r.push(i),this.rawSegments.push(r);}else this.pending&&this.rawSegments.push(this.pending);this.advance(t),this.pending=null;},W.prototype.addUneditedChunk=function(e,t,n,i,r){for(var s=t.start,a=!0;s<t.end;)(this.hires||a||r[s])&&this.rawSegments.push([this.generatedCodeColumn,e,i.line,i.column]),"\n"===n[s]?(i.line+=1,i.column=0,this.generatedCodeLine+=1,this.raw[this.generatedCodeLine]=this.rawSegments=[],this.generatedCodeColumn=0):(i.column+=1,this.generatedCodeColumn+=1),s+=1,a=!1;this.pending=[this.generatedCodeColumn,e,i.line,i.column];},W.prototype.advance=function(e){if(e){var t=e.split("\n");if(t.length>1){for(var n=0;n<t.length-1;n++)this.generatedCodeLine++,this.raw[this.generatedCodeLine]=this.rawSegments=[];this.generatedCodeColumn=0;}this.generatedCodeColumn+=t[t.length-1].length;}};var U="\n",F={insertLeft:!1,insertRight:!1,storeName:!1},q=function(e,t){void 0===t&&(t={});var n=new M(0,e.length,e);Object.defineProperties(this,{original:{writable:!0,value:e},outro:{writable:!0,value:""},intro:{writable:!0,value:""},firstChunk:{writable:!0,value:n},lastChunk:{writable:!0,value:n},lastSearchedChunk:{writable:!0,value:n},byStart:{writable:!0,value:{}},byEnd:{writable:!0,value:{}},filename:{writable:!0,value:t.filename},indentExclusionRanges:{writable:!0,value:t.indentExclusionRanges},sourcemapLocations:{writable:!0,value:{}},storedNames:{writable:!0,value:{}},indentStr:{writable:!0,value:L(e)}}),this.byStart[0]=n,this.byEnd[e.length]=n;};q.prototype.addSourcemapLocation=function(e){this.sourcemapLocations[e]=!0;},q.prototype.append=function(e){if("string"!=typeof e)throw new TypeError("outro content must be a string");return this.outro+=e,this},q.prototype.appendLeft=function(e,t){if("string"!=typeof t)throw new TypeError("inserted content must be a string");this._split(e);var n=this.byEnd[e];return n?n.appendLeft(t):this.intro+=t,this},q.prototype.appendRight=function(e,t){if("string"!=typeof t)throw new TypeError("inserted content must be a string");this._split(e);var n=this.byStart[e];return n?n.appendRight(t):this.outro+=t,this},q.prototype.clone=function(){for(var e=new q(this.original,{filename:this.filename}),t=this.firstChunk,n=e.firstChunk=e.lastSearchedChunk=t.clone();t;){e.byStart[n.start]=n,e.byEnd[n.end]=n;var i=t.next,r=i&&i.clone();r&&(n.next=r,r.previous=n,n=r),t=i;}return e.lastChunk=n,this.indentExclusionRanges&&(e.indentExclusionRanges=this.indentExclusionRanges.slice()),Object.keys(this.sourcemapLocations).forEach(function(t){e.sourcemapLocations[t]=!0;}),e},q.prototype.generateDecodedMap=function(e){var t=this;e=e||{};var n=Object.keys(this.storedNames),i=new W(e.hires),r=j(this.original);return this.intro&&i.advance(this.intro),this.firstChunk.eachNext(function(e){var s=r(e.start);e.intro.length&&i.advance(e.intro),e.edited?i.addEdit(0,e.content,s,e.storeName?n.indexOf(e.original):-1):i.addUneditedChunk(0,e,t.original,s,t.sourcemapLocations),e.outro.length&&i.advance(e.outro);}),{file:e.file?e.file.split(/[\/\\]/).pop():null,sources:[e.source?V(e.file||"",e.source):null],sourcesContent:e.includeContent?[this.original]:[null],names:n,mappings:i.raw}},q.prototype.generateMap=function(e){return new T(this.generateDecodedMap(e))},q.prototype.getIndentString=function(){return null===this.indentStr?"\t":this.indentStr},q.prototype.indent=function(e,t){var n=/^[^\r\n]/gm;if(z(e)&&(t=e,e=void 0),""===(e=void 0!==e?e:this.indentStr||"\t"))return this;var i={};(t=t||{}).exclude&&("number"==typeof t.exclude[0]?[t.exclude]:t.exclude).forEach(function(e){for(var t=e[0];t<e[1];t+=1)i[t]=!0;});var r=!1!==t.indentStart,s=function(t){return r?""+e+t:(r=!0,t)};this.intro=this.intro.replace(n,s);for(var a=0,o=this.firstChunk;o;){var h=o.end;if(o.edited)i[a]||(o.content=o.content.replace(n,s),o.content.length&&(r="\n"===o.content[o.content.length-1]));else for(a=o.start;a<h;){if(!i[a]){var u=this.original[a];"\n"===u?r=!0:"\r"!==u&&r&&(r=!1,a===o.start?o.prependRight(e):(this._splitChunk(o,a),(o=o.next).prependRight(e)));}a+=1;}a=o.end,o=o.next;}return this.outro=this.outro.replace(n,s),this},q.prototype.insert=function(){throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)")},q.prototype.insertLeft=function(e,t){return F.insertLeft||(console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"),F.insertLeft=!0),this.appendLeft(e,t)},q.prototype.insertRight=function(e,t){return F.insertRight||(console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"),F.insertRight=!0),this.prependRight(e,t)},q.prototype.move=function(e,t,n){if(n>=e&&n<=t)throw new Error("Cannot move a selection inside itself");this._split(e),this._split(t),this._split(n);var i=this.byStart[e],r=this.byEnd[t],s=i.previous,a=r.next,o=this.byStart[n];if(!o&&r===this.lastChunk)return this;var h=o?o.previous:this.lastChunk;return s&&(s.next=a),a&&(a.previous=s),h&&(h.next=i),o&&(o.previous=r),i.previous||(this.firstChunk=r.next),r.next||(this.lastChunk=i.previous,this.lastChunk.next=null),i.previous=h,r.next=o||null,h||(this.firstChunk=i),o||(this.lastChunk=r),this},q.prototype.overwrite=function(e,t,n,i){if("string"!=typeof n)throw new TypeError("replacement content must be a string");for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;if(t>this.original.length)throw new Error("end is out of bounds");if(e===t)throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");this._split(e),this._split(t),!0===i&&(F.storeName||(console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"),F.storeName=!0),i={storeName:!0});var r=void 0!==i&&i.storeName,s=void 0!==i&&i.contentOnly;if(r){var a=this.original.slice(e,t);this.storedNames[a]=!0;}var o=this.byStart[e],h=this.byEnd[t];if(o){if(t>o.end&&o.next!==this.byStart[o.end])throw new Error("Cannot overwrite across a split point");if(o.edit(n,r,s),o!==h){for(var u=o.next;u!==h;)u.edit("",!1),u=u.next;u.edit("",!1);}}else{var c=new M(e,t,"").edit(n,r);h.next=c,c.previous=h;}return this},q.prototype.prepend=function(e){if("string"!=typeof e)throw new TypeError("outro content must be a string");return this.intro=e+this.intro,this},q.prototype.prependLeft=function(e,t){if("string"!=typeof t)throw new TypeError("inserted content must be a string");this._split(e);var n=this.byEnd[e];return n?n.prependLeft(t):this.intro=t+this.intro,this},q.prototype.prependRight=function(e,t){if("string"!=typeof t)throw new TypeError("inserted content must be a string");this._split(e);var n=this.byStart[e];return n?n.prependRight(t):this.outro=t+this.outro,this},q.prototype.remove=function(e,t){for(;e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;if(e===t)return this;if(e<0||t>this.original.length)throw new Error("Character is out of bounds");if(e>t)throw new Error("end must be greater than start");this._split(e),this._split(t);for(var n=this.byStart[e];n;)n.intro="",n.outro="",n.edit(""),n=t>n.end?this.byStart[n.end]:null;return this},q.prototype.lastChar=function(){if(this.outro.length)return this.outro[this.outro.length-1];var e=this.lastChunk;do{if(e.outro.length)return e.outro[e.outro.length-1];if(e.content.length)return e.content[e.content.length-1];if(e.intro.length)return e.intro[e.intro.length-1]}while(e=e.previous);return this.intro.length?this.intro[this.intro.length-1]:""},q.prototype.lastLine=function(){var e=this.outro.lastIndexOf(U);if(-1!==e)return this.outro.substr(e+1);var t=this.outro,n=this.lastChunk;do{if(n.outro.length>0){if(-1!==(e=n.outro.lastIndexOf(U)))return n.outro.substr(e+1)+t;t=n.outro+t;}if(n.content.length>0){if(-1!==(e=n.content.lastIndexOf(U)))return n.content.substr(e+1)+t;t=n.content+t;}if(n.intro.length>0){if(-1!==(e=n.intro.lastIndexOf(U)))return n.intro.substr(e+1)+t;t=n.intro+t;}}while(n=n.previous);return -1!==(e=this.intro.lastIndexOf(U))?this.intro.substr(e+1)+t:this.intro+t},q.prototype.slice=function(e,t){for(void 0===e&&(e=0),void 0===t&&(t=this.original.length);e<0;)e+=this.original.length;for(;t<0;)t+=this.original.length;for(var n="",i=this.firstChunk;i&&(i.start>e||i.end<=e);){if(i.start<t&&i.end>=t)return n;i=i.next;}if(i&&i.edited&&i.start!==e)throw new Error("Cannot use replaced character "+e+" as slice start anchor.");for(var r=i;i;){!i.intro||r===i&&i.start!==e||(n+=i.intro);var s=i.start<t&&i.end>=t;if(s&&i.edited&&i.end!==t)throw new Error("Cannot use replaced character "+t+" as slice end anchor.");var a=r===i?e-i.start:0,o=s?i.content.length+t-i.end:i.content.length;if(n+=i.content.slice(a,o),!i.outro||s&&i.end!==t||(n+=i.outro),s)break;i=i.next;}return n},q.prototype.snip=function(e,t){var n=this.clone();return n.remove(0,e),n.remove(t,n.original.length),n},q.prototype._split=function(e){if(!this.byStart[e]&&!this.byEnd[e])for(var t=this.lastSearchedChunk,n=e>t.end;t;){if(t.contains(e))return this._splitChunk(t,e);t=n?this.byStart[t.end]:this.byEnd[t.start];}},q.prototype._splitChunk=function(e,t){if(e.edited&&e.content.length){var n=j(this.original)(t);throw new Error("Cannot split a chunk that has already been edited ("+n.line+":"+n.column+' – "'+e.original+'")')}var i=e.split(t);return this.byEnd[t]=e,this.byStart[t]=i,this.byEnd[i.end]=i,e===this.lastChunk&&(this.lastChunk=i),this.lastSearchedChunk=e,!0},q.prototype.toString=function(){for(var e=this.intro,t=this.firstChunk;t;)e+=t.toString(),t=t.next;return e+this.outro},q.prototype.isEmpty=function(){var e=this.firstChunk;do{if(e.intro.length&&e.intro.trim()||e.content.length&&e.content.trim()||e.outro.length&&e.outro.trim())return !1}while(e=e.next);return !0},q.prototype.length=function(){var e=this.firstChunk,t=0;do{t+=e.intro.length+e.content.length+e.outro.length;}while(e=e.next);return t},q.prototype.trimLines=function(){return this.trim("[\\r\\n]")},q.prototype.trim=function(e){return this.trimStart(e).trimEnd(e)},q.prototype.trimEndAborted=function(e){var t=new RegExp((e||"\\s")+"+$");if(this.outro=this.outro.replace(t,""),this.outro.length)return !0;var n=this.lastChunk;do{var i=n.end,r=n.trimEnd(t);if(n.end!==i&&(this.lastChunk===n&&(this.lastChunk=n.next),this.byEnd[n.end]=n,this.byStart[n.next.start]=n.next,this.byEnd[n.next.end]=n.next),r)return !0;n=n.previous;}while(n);return !1},q.prototype.trimEnd=function(e){return this.trimEndAborted(e),this},q.prototype.trimStartAborted=function(e){var t=new RegExp("^"+(e||"\\s")+"+");if(this.intro=this.intro.replace(t,""),this.intro.length)return !0;var n=this.firstChunk;do{var i=n.end,r=n.trimStart(t);if(n.end!==i&&(n===this.lastChunk&&(this.lastChunk=n.next),this.byEnd[n.end]=n,this.byStart[n.next.start]=n.next,this.byEnd[n.next.end]=n.next),r)return !0;n=n.next;}while(n);return !1},q.prototype.trimStart=function(e){return this.trimStartAborted(e),this};var H=Object.prototype.hasOwnProperty,G=function(e){void 0===e&&(e={}),this.intro=e.intro||"",this.separator=void 0!==e.separator?e.separator:"\n",this.sources=[],this.uniqueSources=[],this.uniqueSourceIndexByFilename={};};function K(e,t){const n=e.split(/[\/\\]/).filter(Boolean),i=t.split(/[\/\\]/).filter(Boolean);for("."===n[0]&&n.shift(),"."===i[0]&&i.shift();n[0]&&i[0]&&n[0]===i[0];)n.shift(),i.shift();for(;".."===i[0]&&n.length>0;)i.shift(),n.pop();for(;n.pop();)i.unshift("..");return i.join("/")}G.prototype.addSource=function(e){if(e instanceof q)return this.addSource({content:e,filename:e.filename,separator:this.separator});if(!z(e)||!e.content)throw new Error("bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`");if(["filename","indentExclusionRanges","separator"].forEach(function(t){H.call(e,t)||(e[t]=e.content[t]);}),void 0===e.separator&&(e.separator=this.separator),e.filename)if(H.call(this.uniqueSourceIndexByFilename,e.filename)){var t=this.uniqueSources[this.uniqueSourceIndexByFilename[e.filename]];if(e.content.original!==t.content)throw new Error("Illegal source: same filename ("+e.filename+"), different contents")}else this.uniqueSourceIndexByFilename[e.filename]=this.uniqueSources.length,this.uniqueSources.push({filename:e.filename,content:e.content.original});return this.sources.push(e),this},G.prototype.append=function(e,t){return this.addSource({content:new q(e),separator:t&&t.separator||""}),this},G.prototype.clone=function(){var e=new G({intro:this.intro,separator:this.separator});return this.sources.forEach(function(t){e.addSource({filename:t.filename,content:t.content.clone(),separator:t.separator});}),e},G.prototype.generateDecodedMap=function(e){var t=this;void 0===e&&(e={});var n=[];this.sources.forEach(function(e){Object.keys(e.content.storedNames).forEach(function(e){~n.indexOf(e)||n.push(e);});});var i=new W(e.hires);return this.intro&&i.advance(this.intro),this.sources.forEach(function(e,r){r>0&&i.advance(t.separator);var s=e.filename?t.uniqueSourceIndexByFilename[e.filename]:-1,a=e.content,o=j(a.original);a.intro&&i.advance(a.intro),a.firstChunk.eachNext(function(t){var r=o(t.start);t.intro.length&&i.advance(t.intro),e.filename?t.edited?i.addEdit(s,t.content,r,t.storeName?n.indexOf(t.original):-1):i.addUneditedChunk(s,t,a.original,r,a.sourcemapLocations):i.advance(t.content),t.outro.length&&i.advance(t.outro);}),a.outro&&i.advance(a.outro);}),{file:e.file?e.file.split(/[\/\\]/).pop():null,sources:this.uniqueSources.map(function(t){return e.file?V(e.file,t.filename):t.filename}),sourcesContent:this.uniqueSources.map(function(t){return e.includeContent?t.content:null}),names:n,mappings:i.raw}},G.prototype.generateMap=function(e){return new T(this.generateDecodedMap(e))},G.prototype.getIndentString=function(){var e={};return this.sources.forEach(function(t){var n=t.content.indentStr;null!==n&&(e[n]||(e[n]=0),e[n]+=1);}),Object.keys(e).sort(function(t,n){return e[t]-e[n]})[0]||"\t"},G.prototype.indent=function(e){var t=this;if(arguments.length||(e=this.getIndentString()),""===e)return this;var n=!this.intro||"\n"===this.intro.slice(-1);return this.sources.forEach(function(i,r){var s=void 0!==i.separator?i.separator:t.separator,a=n||r>0&&/\r?\n$/.test(s);i.content.indent(e,{exclude:i.indentExclusionRanges,indentStart:a}),n="\n"===i.content.lastChar();}),this.intro&&(this.intro=e+this.intro.replace(/^[^\n]/gm,function(t,n){return n>0?e+t:t})),this},G.prototype.prepend=function(e){return this.intro=e+this.intro,this},G.prototype.toString=function(){var e=this,t=this.sources.map(function(t,n){var i=void 0!==t.separator?t.separator:e.separator;return (n>0?i:"")+t.content.toString()}).join("");return this.intro+t},G.prototype.isEmpty=function(){return (!this.intro.length||!this.intro.trim())&&!this.sources.some(function(e){return !e.content.isEmpty()})},G.prototype.length=function(){return this.sources.reduce(function(e,t){return e+t.content.length()},this.intro.length)},G.prototype.trimLines=function(){return this.trim("[\\r\\n]")},G.prototype.trim=function(e){return this.trimStart(e).trimEnd(e)},G.prototype.trimStart=function(e){var t=new RegExp("^"+(e||"\\s")+"+");if(this.intro=this.intro.replace(t,""),!this.intro){var n,i=0;do{if(!(n=this.sources[i++]))break}while(!n.content.trimStartAborted(e))}return this},G.prototype.trimEnd=function(e){var t,n=new RegExp((e||"\\s")+"+$"),i=this.sources.length-1;do{if(!(t=this.sources[i--])){this.intro=this.intro.replace(n,"");break}}while(!t.content.trimEndAborted(e));return this};const Y=Object.create(null),X="BlockStatement",Q="CallExpression",J="ExportAllDeclaration",Z="ExpressionStatement",ee="FunctionExpression",te="Identifier",ne="ImportDefaultSpecifier",ie="ImportNamespaceSpecifier",re="Program",se="Property",ae="ReturnStatement",oe="VariableDeclaration";function he(e,t,n,i){if(t.remove(n,i),e.annotations)for(const i of e.annotations){if(!(i.start<n))return;t.remove(i.start,i.end);}}function ue(e,t){if(e.annotations||e.parent.type!==Z||(e=e.parent),e.annotations)for(const n of e.annotations)t.remove(n.start,n.end);}const ce={isNoStatement:!0};function le(e,t,n=0){let i,r;for(i=e.indexOf(t,n);;){if(-1===(n=e.indexOf("/",n))||n>i)return i;r=e.charCodeAt(++n),++n,(n=47===r?e.indexOf("\n",n)+1:e.indexOf("*/",n)+2)>i&&(i=e.indexOf(t,n));}}function pe(e){let t,n,i=0;for(t=e.indexOf("\n",i);;){if(-1===(i=e.indexOf("/",i))||i>t)return t;if(47===(n=e.charCodeAt(++i)))return t;(i=e.indexOf("*/",i+2)+2)>t&&(t=e.indexOf("\n",i));}}function de(e,t,n,i,r){let s,a,o,h,u=e[0],c=!u.included||u.needsBoundaries;c&&(h=n+pe(t.original.slice(n,u.start))+1);for(let n=1;n<=e.length;n++)s=u,a=h,o=c,c=void 0!==(u=e[n])&&(!u.included||u.needsBoundaries),o||c?(h=s.end+pe(t.original.slice(s.end,void 0===u?i:u.start))+1,s.included?o?s.render(t,r,{end:h,start:a}):s.render(t,r):he(s,t,a,h)):s.render(t,r);}function fe(e,t,n,i){const r=[];let s,a,o,h,u,c=n-1;for(let i=0;i<e.length;i++){for(a=e[i],void 0!==s&&(c=s.end+le(t.original.slice(s.end,a.start),",")),o=h=c+2+pe(t.original.slice(c+1,a.start));32===(u=t.original.charCodeAt(o))||9===u||10===u||13===u;)o++;void 0!==s&&r.push({contentEnd:h,end:o,node:s,separator:c,start:n}),s=a,n=o;}return r.push({contentEnd:i,end:i,node:s,separator:null,start:n}),r}function me(e,t,n){for(;;){const i=pe(e.original.slice(t,n));if(-1===i)break;t=t+i+1,e.remove(t-1,t);}}const ge="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$",ye=64;function ve(e){let t="";do{const n=e%ye;e=Math.floor(e/ye),t=ge[n]+t;}while(0!==e);return t}const xe=Object.assign(Object.create(null),{await:!0,break:!0,case:!0,catch:!0,class:!0,const:!0,continue:!0,debugger:!0,default:!0,delete:!0,do:!0,else:!0,enum:!0,eval:!0,export:!0,extends:!0,false:!0,finally:!0,for:!0,function:!0,if:!0,implements:!0,import:!0,in:!0,instanceof:!0,interface:!0,let:!0,new:!0,null:!0,package:!0,private:!0,protected:!0,public:!0,return:!0,static:!0,super:!0,switch:!0,this:!0,throw:!0,true:!0,try:!0,typeof:!0,undefined:!0,var:!0,void:!0,while:!0,with:!0,yield:!0});function _e(e,t){let n=e,i=1;for(;t.has(n)||xe[n];)n=`${e}$${ve(i++)}`;return t.add(n),n}class Ee{static create(e){return new this(e)}constructor({withNew:e=!1,args:t=[],callIdentifier:n}={}){this.withNew=e,this.args=t,this.callIdentifier=n;}equals(e){return e&&this.callIdentifier===e.callIdentifier}}const be={UNKNOWN_KEY:!0},Ae=[],Se=[be];function we(e,t=null){return Object.create(t,e)}const Ie={UNKNOWN_VALUE:!0},Ce={deoptimizePath:()=>{},getLiteralValueAtPath:()=>Ie,getReturnExpressionWhenCalledAtPath:()=>Ce,hasEffectsWhenAccessedAtPath:e=>e.length>0,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:()=>!0,include:()=>{},includeCallArguments(e){for(const t of e)t.include(!1);},included:!0,toString:()=>"[[UNKNOWN]]"},Pe={deoptimizePath:()=>{},getLiteralValueAtPath:()=>void 0,getReturnExpressionWhenCalledAtPath:()=>Ce,hasEffectsWhenAccessedAtPath:e=>e.length>0,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:()=>!0,include:()=>{},includeCallArguments(){},included:!0,toString:()=>"undefined"},ke={value:{returns:null,returnsPrimitive:Ce,callsArgs:null,mutatesSelf:!0}},Ne={value:{returns:null,returnsPrimitive:Ce,callsArgs:[0],mutatesSelf:!1}};class $e{constructor(){this.included=!1;}deoptimizePath(){}getLiteralValueAtPath(){return Ie}getReturnExpressionWhenCalledAtPath(e){return 1===e.length?Je(Ge,e[0]):Ce}hasEffectsWhenAccessedAtPath(e){return e.length>1}hasEffectsWhenAssignedAtPath(e){return e.length>1}hasEffectsWhenCalledAtPath(e,t,n){return 1!==e.length||Qe(Ge,e[0],this.included,t,n)}include(){this.included=!0;}includeCallArguments(e){for(const t of e)t.include(!1);}toString(){return "[[UNKNOWN ARRAY]]"}}const Re={value:{callsArgs:null,mutatesSelf:!1,returns:$e,returnsPrimitive:null}},Oe={value:{callsArgs:null,mutatesSelf:!0,returns:$e,returnsPrimitive:null}},Me={value:{callsArgs:[0],mutatesSelf:!1,returns:$e,returnsPrimitive:null}},De={value:{callsArgs:[0],mutatesSelf:!0,returns:$e,returnsPrimitive:null}},Te={deoptimizePath:()=>{},getLiteralValueAtPath:()=>Ie,getReturnExpressionWhenCalledAtPath:e=>1===e.length?Je(Ke,e[0]):Ce,hasEffectsWhenAccessedAtPath:e=>e.length>1,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:e=>{if(1===e.length){const t=e[0];return "string"!=typeof t||!Ke[t]}return !0},include:()=>{},includeCallArguments(e){for(const t of e)t.include(!1);},included:!0,toString:()=>"[[UNKNOWN BOOLEAN]]"},Le={value:{callsArgs:null,mutatesSelf:!1,returns:null,returnsPrimitive:Te}},Ve={value:{callsArgs:[0],mutatesSelf:!1,returns:null,returnsPrimitive:Te}},Be={deoptimizePath:()=>{},getLiteralValueAtPath:()=>Ie,getReturnExpressionWhenCalledAtPath:e=>1===e.length?Je(Ye,e[0]):Ce,hasEffectsWhenAccessedAtPath:e=>e.length>1,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:e=>{if(1===e.length){const t=e[0];return "string"!=typeof t||!Ye[t]}return !0},include:()=>{},includeCallArguments(e){for(const t of e)t.include(!1);},included:!0,toString:()=>"[[UNKNOWN NUMBER]]"},ze={value:{callsArgs:null,mutatesSelf:!1,returns:null,returnsPrimitive:Be}},je={value:{callsArgs:null,mutatesSelf:!0,returns:null,returnsPrimitive:Be}},We={value:{callsArgs:[0],mutatesSelf:!1,returns:null,returnsPrimitive:Be}},Ue={deoptimizePath:()=>{},getLiteralValueAtPath:()=>Ie,getReturnExpressionWhenCalledAtPath:e=>1===e.length?Je(Xe,e[0]):Ce,hasEffectsWhenAccessedAtPath:e=>e.length>1,hasEffectsWhenAssignedAtPath:e=>e.length>0,hasEffectsWhenCalledAtPath:(e,t,n)=>1!==e.length||Qe(Xe,e[0],!0,t,n),include:()=>{},includeCallArguments(e){for(const t of e)t.include(!1);},included:!0,toString:()=>"[[UNKNOWN STRING]]"},Fe={value:{callsArgs:null,mutatesSelf:!1,returns:null,returnsPrimitive:Ue}};class qe{constructor(){this.included=!1;}deoptimizePath(){}getLiteralValueAtPath(){return Ie}getReturnExpressionWhenCalledAtPath(e){return 1===e.length?Je(He,e[0]):Ce}hasEffectsWhenAccessedAtPath(e){return e.length>1}hasEffectsWhenAssignedAtPath(e){return e.length>1}hasEffectsWhenCalledAtPath(e,t,n){return 1!==e.length||Qe(He,e[0],this.included,t,n)}include(){this.included=!0;}includeCallArguments(e){for(const t of e)t.include(!1);}toString(){return "[[UNKNOWN OBJECT]]"}}const He=we({hasOwnProperty:Le,isPrototypeOf:Le,propertyIsEnumerable:Le,toLocaleString:Fe,toString:Fe,valueOf:{value:{callsArgs:null,mutatesSelf:!1,returns:null,returnsPrimitive:Ce}}}),Ge=we({concat:Re,copyWithin:Oe,every:Ve,fill:Oe,filter:Me,find:Ne,findIndex:We,forEach:Ne,includes:Le,indexOf:ze,join:Fe,lastIndexOf:ze,map:Me,pop:ke,push:je,reduce:Ne,reduceRight:Ne,reverse:Oe,shift:ke,slice:Re,some:Ve,sort:De,splice:Oe,unshift:je},He),Ke=we({valueOf:Le},He),Ye=we({toExponential:Fe,toFixed:Fe,toLocaleString:Fe,toPrecision:Fe,valueOf:ze},He),Xe=we({charAt:Fe,charCodeAt:ze,codePointAt:ze,concat:Fe,endsWith:Le,includes:Le,indexOf:ze,lastIndexOf:ze,localeCompare:ze,match:Le,normalize:Fe,padEnd:Fe,padStart:Fe,repeat:Fe,replace:{value:{callsArgs:[1],mutatesSelf:!1,returns:null,returnsPrimitive:Ue}},search:ze,slice:Fe,split:Re,startsWith:Le,substr:Fe,substring:Fe,toLocaleLowerCase:Fe,toLocaleUpperCase:Fe,toLowerCase:Fe,toUpperCase:Fe,trim:Fe,valueOf:Fe},He);function Qe(e,t,n,i,r){if("string"!=typeof t||!e[t])return !0;if(e[t].mutatesSelf&&n)return !0;if(!e[t].callsArgs)return !1;for(const n of e[t].callsArgs)if(i.args[n]&&i.args[n].hasEffectsWhenCalledAtPath(Ae,Ee.create({args:[],callIdentifier:{},withNew:!1}),r.getHasEffectsWhenCalledOptions()))return !0;return !1}function Je(e,t){return "string"==typeof t&&e[t]?null!==e[t].returnsPrimitive?e[t].returnsPrimitive:new e[t].returns:Ce}class Ze{constructor(e){this.alwaysRendered=!1,this.exportName=null,this.included=!1,this.isId=!1,this.isReassigned=!1,this.renderBaseName=null,this.renderName=null,this.safeExportName=null,this.name=e;}addReference(e){}deoptimizePath(e){}getBaseVariableName(){return this.renderBaseName||this.renderName||this.name}getLiteralValueAtPath(e,t,n){return Ie}getName(){const e=this.renderName||this.name;return this.renderBaseName?`${this.renderBaseName}.${e}`:e}getReturnExpressionWhenCalledAtPath(e,t,n){return Ce}hasEffectsWhenAccessedAtPath(e,t){return e.length>0}hasEffectsWhenAssignedAtPath(e,t){return !0}hasEffectsWhenCalledAtPath(e,t,n){return !0}include(){this.included=!0;}includeCallArguments(e){for(const t of e)t.include(!1);}markCalledFromTryStatement(){}setRenderNames(e,t){this.renderBaseName=e,this.renderName=t;}setSafeName(e){this.renderName=e;}toString(){return this.name}}class et extends Ze{constructor(e,t){super(t),this.module=e,this.isNamespace="*"===t,this.referenced=!1;}addReference(e){this.referenced=!0,"default"!==this.name&&"*"!==this.name||this.module.suggestName(e.name);}include(){this.included||(this.included=!0,this.module.used=!0);}}const tt="break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public".split(" "),nt="Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl".split(" "),it=Object.create(null);tt.concat(nt).forEach(e=>it[e]=!0);const rt=/[^$_a-zA-Z0-9]/g,st=e=>/\d/.test(e[0]);function at(e){return e=e.replace(/-(\w)/g,(e,t)=>t.toUpperCase()).replace(rt,"_"),(st(e)||it[e])&&(e=`_${e}`),e||"_"}const ot=/^(?:\/|(?:[A-Za-z]:)?[\\|\/])/,ht=/^\.?\.\//;function ut(e){return ot.test(e)}function ct(e){return ht.test(e)}function lt(e){return e.replace(/\\/g,"/")}function pt(e){return e.split(/(\/|\\)/).pop()}function dt(e){const t=/(\/|\\)[^\/\\]*$/.exec(e);if(!t)return ".";const n=e.slice(0,-t[0].length);return n||"/"}function ft(e){const t=/\.[^.]+$/.exec(pt(e));return t?t[0]:""}function mt(e,t){const n=e.split(/[\/\\]/).filter(Boolean),i=t.split(/[\/\\]/).filter(Boolean);for("."===n[0]&&n.shift(),"."===i[0]&&i.shift();n[0]&&i[0]&&n[0]===i[0];)n.shift(),i.shift();for(;".."===i[0]&&n.length>0;)i.shift(),n.pop();for(;n.pop();)i.unshift("..");return i.join("/")}function gt(...e){let t=e.shift().split(/[\/\\]/);return e.forEach(e=>{if(ut(e))t=e.split(/[\/\\]/);else{const n=e.split(/[\/\\]/);for(;"."===n[0]||".."===n[0];){".."===n.shift()&&t.pop();}t.push.apply(t,n);}}),t.join("/")}class yt{constructor(e,t,n){this.exportsNames=!1,this.exportsNamespace=!1,this.mostCommonSuggestion=0,this.reexported=!1,this.renderPath=void 0,this.renormalizeRenderPath=!1,this.used=!1,this.graph=e,this.id=t,this.execIndex=1/0,this.moduleSideEffects=n;const i=t.split(/[\\\/]/);this.variableName=at(i.pop()),this.nameSuggestions=Object.create(null),this.declarations=Object.create(null),this.exportedVariables=new Map;}getVariableForExportName(e,t){"*"===e?this.exportsNamespace=!0:"default"!==e&&(this.exportsNames=!0);let n=this.declarations[e];return n||(this.declarations[e]=n=new et(this,e),this.exportedVariables.set(n,e),n)}setRenderPath(e,t){return this.renderPath="",e.paths&&(this.renderPath="function"==typeof e.paths?e.paths(this.id):e.paths[this.id]),this.renderPath||(ut(this.id)?(this.renderPath=lt(mt(t,this.id)),this.renormalizeRenderPath=!0):this.renderPath=this.id),this.renderPath}suggestName(e){this.nameSuggestions[e]||(this.nameSuggestions[e]=0),this.nameSuggestions[e]+=1,this.nameSuggestions[e]>this.mostCommonSuggestion&&(this.mostCommonSuggestion=this.nameSuggestions[e],this.variableName=e);}warnUnusedImports(){const e=Object.keys(this.declarations).filter(e=>{if("*"===e)return !1;const t=this.declarations[e];return !t.included&&!this.reexported&&!t.referenced});if(0===e.length)return;const t=1===e.length?`'${e[0]}' is`:`${e.slice(0,-1).map(e=>`'${e}'`).join(", ")} and '${e.slice(-1)}' are`;this.graph.warn({code:"UNUSED_EXTERNAL_IMPORT",message:`${t} imported from external module '${this.id}' but never used`,names:e,source:this.id});}}function vt(e){e.isExecuted=!0;const t=[e],n=new Set;for(const e of t)for(const i of e.dependencies)i instanceof yt||i.isExecuted||!i.moduleSideEffects||n.has(i.id)||(i.isExecuted=!0,n.add(i.id),t.push(i));}const xt=7;class _t extends Ze{constructor(e,t,n,i){super(e),this.additionalInitializers=null,this.calledFromTryStatement=!1,this.expressionsToBeDeoptimized=[],this.declarations=t?[t]:[],this.init=n,this.deoptimizationTracker=i.deoptimizationTracker,this.module=i.module;}addDeclaration(e,t){this.declarations.push(e),null===this.additionalInitializers&&(this.additionalInitializers=null===this.init?[]:[this.init],this.init=Ce,this.isReassigned=!0),null!==t&&this.additionalInitializers.push(t);}consolidateInitializers(){if(null!==this.additionalInitializers){for(const e of this.additionalInitializers)e.deoptimizePath(Se);this.additionalInitializers=null;}}deoptimizePath(e){if(!(e.length>xt||this.isReassigned||this.deoptimizationTracker.track(this,e)))if(0===e.length){if(!this.isReassigned){this.isReassigned=!0;for(const e of this.expressionsToBeDeoptimized)e.deoptimizeCache();this.init&&this.init.deoptimizePath(Se);}}else this.init&&this.init.deoptimizePath(e);}getLiteralValueAtPath(e,t,n){return this.isReassigned||!this.init||e.length>xt||t.isTracked(this.init,e)?Ie:(this.expressionsToBeDeoptimized.push(n),this.init.getLiteralValueAtPath(e,t.track(this.init,e),n))}getReturnExpressionWhenCalledAtPath(e,t,n){return this.isReassigned||!this.init||e.length>xt||t.isTracked(this.init,e)?Ce:(this.expressionsToBeDeoptimized.push(n),this.init.getReturnExpressionWhenCalledAtPath(e,t.track(this.init,e),n))}hasEffectsWhenAccessedAtPath(e,t){return 0!==e.length&&(this.isReassigned||e.length>xt||this.init&&!t.hasNodeBeenAccessedAtPath(e,this.init)&&this.init.hasEffectsWhenAccessedAtPath(e,t.addAccessedNodeAtPath(e,this.init)))}hasEffectsWhenAssignedAtPath(e,t){return !!(this.included||e.length>xt)||0!==e.length&&(this.isReassigned||this.init&&!t.hasNodeBeenAssignedAtPath(e,this.init)&&this.init.hasEffectsWhenAssignedAtPath(e,t.addAssignedNodeAtPath(e,this.init)))}hasEffectsWhenCalledAtPath(e,t,n){return e.length>xt||(this.isReassigned||this.init&&!n.hasNodeBeenCalledAtPathWithOptions(e,this.init,t)&&this.init.hasEffectsWhenCalledAtPath(e,t,n.addCalledNodeAtPathWithOptions(e,this.init,t)))}include(){if(!this.included){this.included=!0,this.module.isExecuted||vt(this.module);for(const e of this.declarations){e.included||e.include(!1);let t=e.parent;for(;!t.included&&(t.included=!0,t.type!==re);)t=t.parent;}}}includeCallArguments(e){if(this.isReassigned)for(const t of e)t.include(!1);else this.init&&this.init.includeCallArguments(e);}markCalledFromTryStatement(){this.calledFromTryStatement=!0;}}class Et{constructor(){this.children=[],this.variables=new Map;}addDeclaration(e,t,n=null,i){const r=e.name;let s=this.variables.get(r);return s?s.addDeclaration(e,n):(s=new _t(e.name,e,n||Pe,t),this.variables.set(r,s)),s}contains(e){return this.variables.has(e)}findVariable(e){throw new Error("Internal Error: findVariable needs to be implemented by a subclass")}}class bt extends Et{constructor(e){super(),this.accessedOutsideVariables=new Map,this.parent=e,e.children.push(this);}addAccessedGlobalsByFormat(e){let t=this.accessedGlobalVariablesByFormat;t||(t=this.accessedGlobalVariablesByFormat=new Map);for(const n of Object.keys(e)){let i=t.get(n);i||(i=new Set,t.set(n,i));for(const t of e[n])i.add(t);}this.parent instanceof bt&&this.parent.addAccessedGlobalsByFormat(e);}addNamespaceMemberAccess(e,t){this.accessedOutsideVariables.set(e,t),this.parent instanceof bt&&this.parent.addNamespaceMemberAccess(e,t);}addReturnExpression(e){this.parent instanceof bt&&this.parent.addReturnExpression(e);}contains(e){return this.variables.has(e)||this.parent.contains(e)}deconflict(e){const t=new Set;for(const n of this.accessedOutsideVariables.values())n.included&&(t.add(n.getBaseVariableName()),n.exportName&&"system"===e&&t.add("exports"));const n=this.accessedGlobalVariablesByFormat&&this.accessedGlobalVariablesByFormat.get(e);if(n)for(const e of n)t.add(e);for(const[e,n]of this.variables)(n.included||n.alwaysRendered)&&n.setSafeName(_e(e,t));for(const t of this.children)t.deconflict(e);}findLexicalBoundary(){return this.parent instanceof bt?this.parent.findLexicalBoundary():this}findVariable(e){const t=this.variables.get(e)||this.accessedOutsideVariables.get(e);if(t)return t;const n=this.parent.findVariable(e);return this.accessedOutsideVariables.set(e,n),n}}function At(e,t,n){if("number"==typeof n)throw new Error("locate takes a { startIndex, offsetLine, offsetColumn } object as the third argument");return function(e,t){void 0===t&&(t={});var n=t.offsetLine||0,i=t.offsetColumn||0,r=e.split("\n"),s=0,a=r.map(function(e,t){var n=s+e.length+1,i={start:s,end:n,line:t};return s=n,i}),o=0;function h(e,t){return e.start<=t&&t<e.end}function u(e,t){return {line:n+e.line,column:i+t-e.start,character:t}}return function(t,n){"string"==typeof t&&(t=e.indexOf(t,n||0));for(var i=a[o],r=t>=i.end?1:-1;i;){if(h(i,t))return u(i,t);i=a[o+=r];}}}(e,n)(t,n&&n.startIndex)}var St=5,wt=1<<St,It=wt-1,Ct={};function Pt(e){e&&(e.value=!0);}function kt(){}function Nt(e){return void 0===e.size&&(e.size=e.__iterate(Rt)),e.size}function $t(e,t){if("number"!=typeof t){var n=t>>>0;if(""+n!==t||4294967295===n)return NaN;t=n;}return t<0?Nt(e)+t:t}function Rt(){return !0}function Ot(e,t,n){return (0===e&&!Lt(e)||void 0!==n&&e<=-n)&&(void 0===t||void 0!==n&&t>=n)}function Mt(e,t){return Tt(e,t,0)}function Dt(e,t){return Tt(e,t,t)}function Tt(e,t,n){return void 0===e?n:Lt(e)?t===1/0?t:0|Math.max(0,t+e):void 0===t||t===e?e:0|Math.min(t,e)}function Lt(e){return e<0||0===e&&1/e==-1/0}var Vt="@@__IMMUTABLE_ITERABLE__@@";function Bt(e){return Boolean(e&&e[Vt])}var zt="@@__IMMUTABLE_KEYED__@@";function jt(e){return Boolean(e&&e[zt])}var Wt="@@__IMMUTABLE_INDEXED__@@";function Ut(e){return Boolean(e&&e[Wt])}function Ft(e){return jt(e)||Ut(e)}var qt=function(e){return Bt(e)?e:vn(e)},Ht=function(e){function t(e){return jt(e)?e:xn(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(qt),Gt=function(e){function t(e){return Ut(e)?e:_n(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(qt),Kt=function(e){function t(e){return Bt(e)&&!Ft(e)?e:En(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(qt);qt.Keyed=Ht,qt.Indexed=Gt,qt.Set=Kt;var Yt="@@__IMMUTABLE_SEQ__@@";function Xt(e){return Boolean(e&&e[Yt])}var Qt="@@__IMMUTABLE_RECORD__@@";function Jt(e){return Boolean(e&&e[Qt])}function Zt(e){return Bt(e)||Jt(e)}var en="@@__IMMUTABLE_ORDERED__@@";function tn(e){return Boolean(e&&e[en])}var nn=0,rn=1,sn=2,an="function"==typeof Symbol&&Symbol.iterator,on="@@iterator",hn=an||on,un=function(e){this.next=e;};function cn(e,t,n,i){var r=0===e?t:1===e?n:[t,n];return i?i.value=r:i={value:r,done:!1},i}function ln(){return {value:void 0,done:!0}}function pn(e){return !!mn(e)}function dn(e){return e&&"function"==typeof e.next}function fn(e){var t=mn(e);return t&&t.call(e)}function mn(e){var t=e&&(an&&e[an]||e[on]);if("function"==typeof t)return t}un.prototype.toString=function(){return "[Iterator]"},un.KEYS=nn,un.VALUES=rn,un.ENTRIES=sn,un.prototype.inspect=un.prototype.toSource=function(){return this.toString()},un.prototype[hn]=function(){return this};var gn=Object.prototype.hasOwnProperty;function yn(e){return !(!Array.isArray(e)&&"string"!=typeof e)||e&&"object"==typeof e&&Number.isInteger(e.length)&&e.length>=0&&(0===e.length?1===Object.keys(e).length:e.hasOwnProperty(e.length-1))}var vn=function(e){function t(e){return null==e?In():Zt(e)?e.toSeq():function(e){var t=kn(e);if(t)return t;if("object"==typeof e)return new An(e);throw new TypeError("Expected Array or collection object of values, or keyed object: "+e)}(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toSeq=function(){return this},t.prototype.toString=function(){return this.__toString("Seq {","}")},t.prototype.cacheResult=function(){return !this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},t.prototype.__iterate=function(e,t){var n=this._cache;if(n){for(var i=n.length,r=0;r!==i;){var s=n[t?i-++r:r++];if(!1===e(s[1],s[0],this))break}return r}return this.__iterateUncached(e,t)},t.prototype.__iterator=function(e,t){var n=this._cache;if(n){var i=n.length,r=0;return new un(function(){if(r===i)return {value:void 0,done:!0};var s=n[t?i-++r:r++];return cn(e,s[0],s[1])})}return this.__iteratorUncached(e,t)},t}(qt),xn=function(e){function t(e){return null==e?In().toKeyedSeq():Bt(e)?jt(e)?e.toSeq():e.fromEntrySeq():Jt(e)?e.toSeq():Cn(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toKeyedSeq=function(){return this},t}(vn),_n=function(e){function t(e){return null==e?In():Bt(e)?jt(e)?e.entrySeq():e.toIndexedSeq():Jt(e)?e.toSeq().entrySeq():Pn(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return t(arguments)},t.prototype.toIndexedSeq=function(){return this},t.prototype.toString=function(){return this.__toString("Seq [","]")},t}(vn),En=function(e){function t(e){return (Bt(e)&&!Ft(e)?e:_n(e)).toSetSeq()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return t(arguments)},t.prototype.toSetSeq=function(){return this},t}(vn);vn.isSeq=Xt,vn.Keyed=xn,vn.Set=En,vn.Indexed=_n,vn.prototype[Yt]=!0;var bn=function(e){function t(e){this._array=e,this.size=e.length;}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(e,t){return this.has(e)?this._array[$t(this,e)]:t},t.prototype.__iterate=function(e,t){for(var n=this._array,i=n.length,r=0;r!==i;){var s=t?i-++r:r++;if(!1===e(n[s],s,this))break}return r},t.prototype.__iterator=function(e,t){var n=this._array,i=n.length,r=0;return new un(function(){if(r===i)return {value:void 0,done:!0};var s=t?i-++r:r++;return cn(e,s,n[s])})},t}(_n),An=function(e){function t(e){var t=Object.keys(e);this._object=e,this._keys=t,this.size=t.length;}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(e,t){return void 0===t||this.has(e)?this._object[e]:t},t.prototype.has=function(e){return gn.call(this._object,e)},t.prototype.__iterate=function(e,t){for(var n=this._object,i=this._keys,r=i.length,s=0;s!==r;){var a=i[t?r-++s:s++];if(!1===e(n[a],a,this))break}return s},t.prototype.__iterator=function(e,t){var n=this._object,i=this._keys,r=i.length,s=0;return new un(function(){if(s===r)return {value:void 0,done:!0};var a=i[t?r-++s:s++];return cn(e,a,n[a])})},t}(xn);An.prototype[en]=!0;var Sn,wn=function(e){function t(e){this._collection=e,this.size=e.length||e.size;}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t);var n=fn(this._collection),i=0;if(dn(n))for(var r;!(r=n.next()).done&&!1!==e(r.value,i++,this););return i},t.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t);var n=fn(this._collection);if(!dn(n))return new un(ln);var i=0;return new un(function(){var t=n.next();return t.done?t:cn(e,i++,t.value)})},t}(_n);function In(){return Sn||(Sn=new bn([]))}function Cn(e){var t=Array.isArray(e)?new bn(e):pn(e)?new wn(e):void 0;if(t)return t.fromEntrySeq();if("object"==typeof e)return new An(e);throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: "+e)}function Pn(e){var t=kn(e);if(t)return t;throw new TypeError("Expected Array or collection object of values: "+e)}function kn(e){return yn(e)?new bn(e):pn(e)?new wn(e):void 0}var Nn="@@__IMMUTABLE_MAP__@@";function $n(e){return Boolean(e&&e[Nn])}function Rn(e){return $n(e)&&tn(e)}function On(e){return Boolean(e&&"function"==typeof e.equals&&"function"==typeof e.hashCode)}function Mn(e,t){if(e===t||e!=e&&t!=t)return !0;if(!e||!t)return !1;if("function"==typeof e.valueOf&&"function"==typeof t.valueOf){if((e=e.valueOf())===(t=t.valueOf())||e!=e&&t!=t)return !0;if(!e||!t)return !1}return !!(On(e)&&On(t)&&e.equals(t))}var Dn="function"==typeof Math.imul&&-2===Math.imul(4294967295,2)?Math.imul:function(e,t){var n=65535&(e|=0),i=65535&(t|=0);return n*i+((e>>>16)*i+n*(t>>>16)<<16>>>0)|0};function Tn(e){return e>>>1&1073741824|3221225471&e}var Ln=Object.prototype.valueOf;function Vn(e){switch(typeof e){case"boolean":return e?1108378657:1108378656;case"number":return function(e){if(e!=e||e===1/0)return 0;var t=0|e;t!==e&&(t^=4294967295*e);for(;e>4294967295;)t^=e/=4294967295;return Tn(t)}(e);case"string":return e.length>Hn?function(e){var t=Yn[e];void 0===t&&(t=Bn(e),Kn===Gn&&(Kn=0,Yn={}),Kn++,Yn[e]=t);return t}(e):Bn(e);case"object":case"function":return null===e?1108378658:"function"==typeof e.hashCode?Tn(e.hashCode(e)):(e.valueOf!==Ln&&"function"==typeof e.valueOf&&(e=e.valueOf(e)),function(e){var t;if(Un&&void 0!==(t=Wn.get(e)))return t;if(void 0!==(t=e[qn]))return t;if(!jn){if(void 0!==(t=e.propertyIsEnumerable&&e.propertyIsEnumerable[qn]))return t;if(void 0!==(t=function(e){if(e&&e.nodeType>0)switch(e.nodeType){case 1:return e.uniqueID;case 9:return e.documentElement&&e.documentElement.uniqueID}}(e)))return t}t=++Fn,1073741824&Fn&&(Fn=0);if(Un)Wn.set(e,t);else{if(void 0!==zn&&!1===zn(e))throw new Error("Non-extensible objects are not allowed as keys.");if(jn)Object.defineProperty(e,qn,{enumerable:!1,configurable:!1,writable:!1,value:t});else if(void 0!==e.propertyIsEnumerable&&e.propertyIsEnumerable===e.constructor.prototype.propertyIsEnumerable)e.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},e.propertyIsEnumerable[qn]=t;else{if(void 0===e.nodeType)throw new Error("Unable to set a non-enumerable property on object.");e[qn]=t;}}return t}(e));case"undefined":return 1108378659;default:if("function"==typeof e.toString)return Bn(e.toString());throw new Error("Value type "+typeof e+" cannot be hashed.")}}function Bn(e){for(var t=0,n=0;n<e.length;n++)t=31*t+e.charCodeAt(n)|0;return Tn(t)}var zn=Object.isExtensible,jn=function(){try{return Object.defineProperty({},"@",{}),!0}catch(e){return !1}}();var Wn,Un="function"==typeof WeakMap;Un&&(Wn=new WeakMap);var Fn=0,qn="__immutablehash__";"function"==typeof Symbol&&(qn=Symbol(qn));var Hn=16,Gn=255,Kn=0,Yn={},Xn=function(e){function t(e,t){this._iter=e,this._useKeys=t,this.size=e.size;}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(e,t){return this._iter.get(e,t)},t.prototype.has=function(e){return this._iter.has(e)},t.prototype.valueSeq=function(){return this._iter.valueSeq()},t.prototype.reverse=function(){var e=this,t=ni(this,!0);return this._useKeys||(t.valueSeq=function(){return e._iter.toSeq().reverse()}),t},t.prototype.map=function(e,t){var n=this,i=ti(this,e,t);return this._useKeys||(i.valueSeq=function(){return n._iter.toSeq().map(e,t)}),i},t.prototype.__iterate=function(e,t){var n=this;return this._iter.__iterate(function(t,i){return e(t,i,n)},t)},t.prototype.__iterator=function(e,t){return this._iter.__iterator(e,t)},t}(xn);Xn.prototype[en]=!0;var Qn=function(e){function t(e){this._iter=e,this.size=e.size;}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.includes=function(e){return this._iter.includes(e)},t.prototype.__iterate=function(e,t){var n=this,i=0;return t&&Nt(this),this._iter.__iterate(function(r){return e(r,t?n.size-++i:i++,n)},t)},t.prototype.__iterator=function(e,t){var n=this,i=this._iter.__iterator(rn,t),r=0;return t&&Nt(this),new un(function(){var s=i.next();return s.done?s:cn(e,t?n.size-++r:r++,s.value,s)})},t}(_n),Jn=function(e){function t(e){this._iter=e,this.size=e.size;}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.has=function(e){return this._iter.includes(e)},t.prototype.__iterate=function(e,t){var n=this;return this._iter.__iterate(function(t){return e(t,t,n)},t)},t.prototype.__iterator=function(e,t){var n=this._iter.__iterator(rn,t);return new un(function(){var t=n.next();return t.done?t:cn(e,t.value,t.value,t)})},t}(En),Zn=function(e){function t(e){this._iter=e,this.size=e.size;}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.entrySeq=function(){return this._iter.toSeq()},t.prototype.__iterate=function(e,t){var n=this;return this._iter.__iterate(function(t){if(t){di(t);var i=Bt(t);return e(i?t.get(1):t[1],i?t.get(0):t[0],n)}},t)},t.prototype.__iterator=function(e,t){var n=this._iter.__iterator(rn,t);return new un(function(){for(;;){var t=n.next();if(t.done)return t;var i=t.value;if(i){di(i);var r=Bt(i);return cn(e,r?i.get(0):i[0],r?i.get(1):i[1],t)}}})},t}(xn);function ei(e){var t=mi(e);return t._iter=e,t.size=e.size,t.flip=function(){return e},t.reverse=function(){var t=e.reverse.apply(this);return t.flip=function(){return e.reverse()},t},t.has=function(t){return e.includes(t)},t.includes=function(t){return e.has(t)},t.cacheResult=gi,t.__iterateUncached=function(t,n){var i=this;return e.__iterate(function(e,n){return !1!==t(n,e,i)},n)},t.__iteratorUncached=function(t,n){if(t===sn){var i=e.__iterator(t,n);return new un(function(){var e=i.next();if(!e.done){var t=e.value[0];e.value[0]=e.value[1],e.value[1]=t;}return e})}return e.__iterator(t===rn?nn:rn,n)},t}function ti(e,t,n){var i=mi(e);return i.size=e.size,i.has=function(t){return e.has(t)},i.get=function(i,r){var s=e.get(i,Ct);return s===Ct?r:t.call(n,s,i,e)},i.__iterateUncached=function(i,r){var s=this;return e.__iterate(function(e,r,a){return !1!==i(t.call(n,e,r,a),r,s)},r)},i.__iteratorUncached=function(i,r){var s=e.__iterator(sn,r);return new un(function(){var r=s.next();if(r.done)return r;var a=r.value,o=a[0];return cn(i,o,t.call(n,a[1],o,e),r)})},i}function ni(e,t){var n=this,i=mi(e);return i._iter=e,i.size=e.size,i.reverse=function(){return e},e.flip&&(i.flip=function(){var t=ei(e);return t.reverse=function(){return e.flip()},t}),i.get=function(n,i){return e.get(t?n:-1-n,i)},i.has=function(n){return e.has(t?n:-1-n)},i.includes=function(t){return e.includes(t)},i.cacheResult=gi,i.__iterate=function(n,i){var r=this,s=0;return i&&Nt(e),e.__iterate(function(e,a){return n(e,t?a:i?r.size-++s:s++,r)},!i)},i.__iterator=function(i,r){var s=0;r&&Nt(e);var a=e.__iterator(sn,!r);return new un(function(){var e=a.next();if(e.done)return e;var o=e.value;return cn(i,t?o[0]:r?n.size-++s:s++,o[1],e)})},i}function ii(e,t,n,i){var r=mi(e);return i&&(r.has=function(i){var r=e.get(i,Ct);return r!==Ct&&!!t.call(n,r,i,e)},r.get=function(i,r){var s=e.get(i,Ct);return s!==Ct&&t.call(n,s,i,e)?s:r}),r.__iterateUncached=function(r,s){var a=this,o=0;return e.__iterate(function(e,s,h){if(t.call(n,e,s,h))return o++,r(e,i?s:o-1,a)},s),o},r.__iteratorUncached=function(r,s){var a=e.__iterator(sn,s),o=0;return new un(function(){for(;;){var s=a.next();if(s.done)return s;var h=s.value,u=h[0],c=h[1];if(t.call(n,c,u,e))return cn(r,i?u:o++,c,s)}})},r}function ri(e,t,n,i){var r=e.size;if(Ot(t,n,r))return e;var s=Mt(t,r),a=Dt(n,r);if(s!=s||a!=a)return ri(e.toSeq().cacheResult(),t,n,i);var o,h=a-s;h==h&&(o=h<0?0:h);var u=mi(e);return u.size=0===o?o:e.size&&o||void 0,!i&&Xt(e)&&o>=0&&(u.get=function(t,n){return (t=$t(this,t))>=0&&t<o?e.get(t+s,n):n}),u.__iterateUncached=function(t,n){var r=this;if(0===o)return 0;if(n)return this.cacheResult().__iterate(t,n);var a=0,h=!0,u=0;return e.__iterate(function(e,n){if(!h||!(h=a++<s))return u++,!1!==t(e,i?n:u-1,r)&&u!==o}),u},u.__iteratorUncached=function(t,n){if(0!==o&&n)return this.cacheResult().__iterator(t,n);if(0===o)return new un(ln);var r=e.__iterator(t,n),a=0,h=0;return new un(function(){for(;a++<s;)r.next();if(++h>o)return {value:void 0,done:!0};var e=r.next();return i||t===rn||e.done?e:cn(t,h-1,t===nn?void 0:e.value[1],e)})},u}function si(e,t,n,i){var r=mi(e);return r.__iterateUncached=function(r,s){var a=this;if(s)return this.cacheResult().__iterate(r,s);var o=!0,h=0;return e.__iterate(function(e,s,u){if(!o||!(o=t.call(n,e,s,u)))return h++,r(e,i?s:h-1,a)}),h},r.__iteratorUncached=function(r,s){var a=this;if(s)return this.cacheResult().__iterator(r,s);var o=e.__iterator(sn,s),h=!0,u=0;return new un(function(){var e,s,c;do{if((e=o.next()).done)return i||r===rn?e:cn(r,u++,r===nn?void 0:e.value[1],e);var l=e.value;s=l[0],c=l[1],h&&(h=t.call(n,c,s,a));}while(h);return r===sn?e:cn(r,s,c,e)})},r}function ai(e,t){var n=jt(e),i=[e].concat(t).map(function(e){return Bt(e)?n&&(e=Ht(e)):e=n?Cn(e):Pn(Array.isArray(e)?e:[e]),e}).filter(function(e){return 0!==e.size});if(0===i.length)return e;if(1===i.length){var r=i[0];if(r===e||n&&jt(r)||Ut(e)&&Ut(r))return r}var s=new bn(i);return n?s=s.toKeyedSeq():Ut(e)||(s=s.toSetSeq()),(s=s.flatten(!0)).size=i.reduce(function(e,t){if(void 0!==e){var n=t.size;if(void 0!==n)return e+n}},0),s}function oi(e,t,n){var i=mi(e);return i.__iterateUncached=function(r,s){if(s)return this.cacheResult().__iterate(r,s);var a=0,o=!1;return function e(h,u){h.__iterate(function(s,h){return (!t||u<t)&&Bt(s)?e(s,u+1):(a++,!1===r(s,n?h:a-1,i)&&(o=!0)),!o},s);}(e,0),a},i.__iteratorUncached=function(i,r){if(r)return this.cacheResult().__iterator(i,r);var s=e.__iterator(i,r),a=[],o=0;return new un(function(){for(;s;){var e=s.next();if(!1===e.done){var h=e.value;if(i===sn&&(h=h[1]),t&&!(a.length<t)||!Bt(h))return n?e:cn(i,o++,h,e);a.push(s),s=h.__iterator(i,r);}else s=a.pop();}return {value:void 0,done:!0}})},i}function hi(e,t,n){t||(t=yi);var i=jt(e),r=0,s=e.toSeq().map(function(t,i){return [i,t,r++,n?n(t,i,e):t]}).valueSeq().toArray();return s.sort(function(e,n){return t(e[3],n[3])||e[2]-n[2]}).forEach(i?function(e,t){s[t].length=2;}:function(e,t){s[t]=e[1];}),i?xn(s):Ut(e)?_n(s):En(s)}function ui(e,t,n){if(t||(t=yi),n){var i=e.toSeq().map(function(t,i){return [t,n(t,i,e)]}).reduce(function(e,n){return ci(t,e[1],n[1])?n:e});return i&&i[0]}return e.reduce(function(e,n){return ci(t,e,n)?n:e})}function ci(e,t,n){var i=e(n,t);return 0===i&&n!==t&&(null==n||n!=n)||i>0}function li(e,t,n,i){var r=mi(e),s=new bn(n).map(function(e){return e.size});return r.size=i?s.max():s.min(),r.__iterate=function(e,t){for(var n,i=this.__iterator(rn,t),r=0;!(n=i.next()).done&&!1!==e(n.value,r++,this););return r},r.__iteratorUncached=function(e,r){var s=n.map(function(e){return e=qt(e),fn(r?e.reverse():e)}),a=0,o=!1;return new un(function(){var n;return o||(n=s.map(function(e){return e.next()}),o=i?n.every(function(e){return e.done}):n.some(function(e){return e.done})),o?{value:void 0,done:!0}:cn(e,a++,t.apply(null,n.map(function(e){return e.value})))})},r}function pi(e,t){return e===t?e:Xt(e)?t:e.constructor(t)}function di(e){if(e!==Object(e))throw new TypeError("Expected [K, V] tuple: "+e)}function fi(e){return jt(e)?Ht:Ut(e)?Gt:Kt}function mi(e){return Object.create((jt(e)?xn:Ut(e)?_n:En).prototype)}function gi(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):vn.prototype.cacheResult.call(this)}function yi(e,t){return void 0===e&&void 0===t?0:void 0===e?1:void 0===t?-1:e>t?1:e<t?-1:0}function vi(e,t){t=t||0;for(var n=Math.max(0,e.length-t),i=new Array(n),r=0;r<n;r++)i[r]=e[r+t];return i}function xi(e,t){if(!e)throw new Error(t)}function _i(e){xi(e!==1/0,"Cannot perform this action with an infinite size.");}function Ei(e){if(yn(e)&&"string"!=typeof e)return e;if(tn(e))return e.toArray();throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: "+e)}function bi(e){return e&&("function"!=typeof e.constructor||"Object"===e.constructor.name)}function Ai(e){return "object"==typeof e&&(Zt(e)||Array.isArray(e)||bi(e))}function Si(e){try{return "string"==typeof e?JSON.stringify(e):String(e)}catch(t){return JSON.stringify(e)}}function wi(e,t){return Zt(e)?e.has(t):Ai(e)&&gn.call(e,t)}function Ii(e,t,n){return Zt(e)?e.get(t,n):wi(e,t)?"function"==typeof e.get?e.get(t):e[t]:n}function Ci(e){if(Array.isArray(e))return vi(e);var t={};for(var n in e)gn.call(e,n)&&(t[n]=e[n]);return t}function Pi(e,t){if(!Ai(e))throw new TypeError("Cannot update non-data-structure value: "+e);if(Zt(e)){if(!e.remove)throw new TypeError("Cannot update immutable value without .remove() method: "+e);return e.remove(t)}if(!gn.call(e,t))return e;var n=Ci(e);return Array.isArray(n)?n.splice(t,1):delete n[t],n}function ki(e,t,n){if(!Ai(e))throw new TypeError("Cannot update non-data-structure value: "+e);if(Zt(e)){if(!e.set)throw new TypeError("Cannot update immutable value without .set() method: "+e);return e.set(t,n)}if(gn.call(e,t)&&n===e[t])return e;var i=Ci(e);return i[t]=n,i}function Ni(e,t,n,i){i||(i=n,n=void 0);var r=function e(t,n,i,r,s,a){var o=n===Ct;if(r===i.length){var h=o?s:n,u=a(h);return u===h?n:u}if(!o&&!Ai(n))throw new TypeError("Cannot update within non-data-structure value in path ["+i.slice(0,r).map(Si)+"]: "+n);var c=i[r];var l=o?Ct:Ii(n,c,Ct);var p=e(l===Ct?t:Zt(l),l,i,r+1,s,a);return p===l?n:p===Ct?Pi(n,c):ki(o?t?ur():{}:n,c,p)}(Zt(e),e,Ei(t),0,n,i);return r===Ct?n:r}function $i(e,t,n){return Ni(e,t,Ct,function(){return n})}function Ri(e,t){return $i(this,e,t)}function Oi(e,t){return Ni(e,t,function(){return Ct})}function Mi(e){return Oi(this,e)}function Di(e,t,n,i){return Ni(e,[t],n,i)}function Ti(e,t,n){return 1===arguments.length?e(this):Di(this,e,t,n)}function Li(e,t,n){return Ni(this,e,t,n)}function Vi(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return zi(this,e)}function Bi(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if("function"!=typeof e)throw new TypeError("Invalid merger function: "+e);return zi(this,t,e)}function zi(e,t,n){for(var i=[],r=0;r<t.length;r++){var s=Ht(t[r]);0!==s.size&&i.push(s);}return 0===i.length?e:0!==e.toSeq().size||e.__ownerID||1!==i.length?e.withMutations(function(e){for(var t=n?function(t,i){Di(e,i,Ct,function(e){return e===Ct?t:n(e,t,i)});}:function(t,n){e.set(n,t);},r=0;r<i.length;r++)i[r].forEach(t);}):e.constructor(i[0])}function ji(e,t,n){return Wi(e,t,function(e){return function t(n,i,r){return Ai(n)&&Ai(i)?Wi(n,[i],t):e?e(n,i,r):i}}(n))}function Wi(e,t,n){if(!Ai(e))throw new TypeError("Cannot merge into non-data-structure value: "+e);if(Zt(e))return "function"==typeof n&&e.mergeWith?e.mergeWith.apply(e,[n].concat(t)):e.merge?e.merge.apply(e,t):e.concat.apply(e,t);for(var i=Array.isArray(e),r=e,s=i?Gt:Ht,a=i?function(t){r===e&&(r=Ci(r)),r.push(t);}:function(t,i){var s=gn.call(r,i),a=s&&n?n(r[i],t,i):t;s&&a===r[i]||(r===e&&(r=Ci(r)),r[i]=a);},o=0;o<t.length;o++)s(t[o]).forEach(a);return r}function Ui(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return ji(this,e)}function Fi(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return ji(this,t,e)}function qi(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return Ni(this,e,ur(),function(e){return Wi(e,t)})}function Hi(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return Ni(this,e,ur(),function(e){return ji(e,t)})}function Gi(e){var t=this.asMutable();return e(t),t.wasAltered()?t.__ensureOwner(this.__ownerID):this}function Ki(){return this.__ownerID?this:this.__ensureOwner(new kt)}function Yi(){return this.__ensureOwner()}function Xi(){return this.__altered}Qn.prototype.cacheResult=Xn.prototype.cacheResult=Jn.prototype.cacheResult=Zn.prototype.cacheResult=gi;var Qi=function(e){function t(t){return null==t?ur():$n(t)&&!tn(t)?t:ur().withMutations(function(n){var i=e(t);_i(i.size),i.forEach(function(e,t){return n.set(t,e)});})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return ur().withMutations(function(t){for(var n=0;n<e.length;n+=2){if(n+1>=e.length)throw new Error("Missing value for key: "+e[n]);t.set(e[n],e[n+1]);}})},t.prototype.toString=function(){return this.__toString("Map {","}")},t.prototype.get=function(e,t){return this._root?this._root.get(0,void 0,e,t):t},t.prototype.set=function(e,t){return cr(this,e,t)},t.prototype.remove=function(e){return cr(this,e,Ct)},t.prototype.deleteAll=function(e){var t=qt(e);return 0===t.size?this:this.withMutations(function(e){t.forEach(function(t){return e.remove(t)});})},t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):ur()},t.prototype.sort=function(e){return Dr(hi(this,e))},t.prototype.sortBy=function(e,t){return Dr(hi(this,t,e))},t.prototype.map=function(e,t){return this.withMutations(function(n){n.forEach(function(i,r){n.set(r,e.call(t,i,r,n));});})},t.prototype.__iterator=function(e,t){return new sr(this,e,t)},t.prototype.__iterate=function(e,t){var n=this,i=0;return this._root&&this._root.iterate(function(t){return i++,e(t[1],t[0],n)},t),i},t.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?hr(this.size,this._root,e,this.__hash):0===this.size?ur():(this.__ownerID=e,this.__altered=!1,this)},t}(Ht);Qi.isMap=$n;var Ji=Qi.prototype;Ji[Nn]=!0,Ji.delete=Ji.remove,Ji.removeAll=Ji.deleteAll,Ji.setIn=Ri,Ji.removeIn=Ji.deleteIn=Mi,Ji.update=Ti,Ji.updateIn=Li,Ji.merge=Ji.concat=Vi,Ji.mergeWith=Bi,Ji.mergeDeep=Ui,Ji.mergeDeepWith=Fi,Ji.mergeIn=qi,Ji.mergeDeepIn=Hi,Ji.withMutations=Gi,Ji.wasAltered=Xi,Ji.asImmutable=Yi,Ji["@@transducer/init"]=Ji.asMutable=Ki,Ji["@@transducer/step"]=function(e,t){return e.set(t[0],t[1])},Ji["@@transducer/result"]=function(e){return e.asImmutable()};var Zi=function(e,t){this.ownerID=e,this.entries=t;};Zi.prototype.get=function(e,t,n,i){for(var r=this.entries,s=0,a=r.length;s<a;s++)if(Mn(n,r[s][0]))return r[s][1];return i},Zi.prototype.update=function(e,t,n,i,r,s,a){for(var o=r===Ct,h=this.entries,u=0,c=h.length;u<c&&!Mn(i,h[u][0]);u++);var l=u<c;if(l?h[u][1]===r:o)return this;if(Pt(a),(o||!l)&&Pt(s),!o||1!==h.length){if(!l&&!o&&h.length>=gr)return function(e,t,n,i){e||(e=new kt);for(var r=new ir(e,Vn(n),[n,i]),s=0;s<t.length;s++){var a=t[s];r=r.update(e,0,void 0,a[0],a[1]);}return r}(e,h,i,r);var p=e&&e===this.ownerID,d=p?h:vi(h);return l?o?u===c-1?d.pop():d[u]=d.pop():d[u]=[i,r]:d.push([i,r]),p?(this.entries=d,this):new Zi(e,d)}};var er=function(e,t,n){this.ownerID=e,this.bitmap=t,this.nodes=n;};er.prototype.get=function(e,t,n,i){void 0===t&&(t=Vn(n));var r=1<<((0===e?t:t>>>e)&It),s=this.bitmap;return 0==(s&r)?i:this.nodes[fr(s&r-1)].get(e+St,t,n,i)},er.prototype.update=function(e,t,n,i,r,s,a){void 0===n&&(n=Vn(i));var o=(0===t?n:n>>>t)&It,h=1<<o,u=this.bitmap,c=0!=(u&h);if(!c&&r===Ct)return this;var l=fr(u&h-1),p=this.nodes,d=c?p[l]:void 0,f=lr(d,e,t+St,n,i,r,s,a);if(f===d)return this;if(!c&&f&&p.length>=yr)return function(e,t,n,i,r){for(var s=0,a=new Array(wt),o=0;0!==n;o++,n>>>=1)a[o]=1&n?t[s++]:void 0;return a[i]=r,new tr(e,s+1,a)}(e,p,u,o,f);if(c&&!f&&2===p.length&&pr(p[1^l]))return p[1^l];if(c&&f&&1===p.length&&pr(f))return f;var m=e&&e===this.ownerID,g=c?f?u:u^h:u|h,y=c?f?mr(p,l,f,m):function(e,t,n){var i=e.length-1;if(n&&t===i)return e.pop(),e;for(var r=new Array(i),s=0,a=0;a<i;a++)a===t&&(s=1),r[a]=e[a+s];return r}(p,l,m):function(e,t,n,i){var r=e.length+1;if(i&&t+1===r)return e[t]=n,e;for(var s=new Array(r),a=0,o=0;o<r;o++)o===t?(s[o]=n,a=-1):s[o]=e[o+a];return s}(p,l,f,m);return m?(this.bitmap=g,this.nodes=y,this):new er(e,g,y)};var tr=function(e,t,n){this.ownerID=e,this.count=t,this.nodes=n;};tr.prototype.get=function(e,t,n,i){void 0===t&&(t=Vn(n));var r=(0===e?t:t>>>e)&It,s=this.nodes[r];return s?s.get(e+St,t,n,i):i},tr.prototype.update=function(e,t,n,i,r,s,a){void 0===n&&(n=Vn(i));var o=(0===t?n:n>>>t)&It,h=r===Ct,u=this.nodes,c=u[o];if(h&&!c)return this;var l=lr(c,e,t+St,n,i,r,s,a);if(l===c)return this;var p=this.count;if(c){if(!l&&--p<vr)return function(e,t,n,i){for(var r=0,s=0,a=new Array(n),o=0,h=1,u=t.length;o<u;o++,h<<=1){var c=t[o];void 0!==c&&o!==i&&(r|=h,a[s++]=c);}return new er(e,r,a)}(e,u,p,o)}else p++;var d=e&&e===this.ownerID,f=mr(u,o,l,d);return d?(this.count=p,this.nodes=f,this):new tr(e,p,f)};var nr=function(e,t,n){this.ownerID=e,this.keyHash=t,this.entries=n;};nr.prototype.get=function(e,t,n,i){for(var r=this.entries,s=0,a=r.length;s<a;s++)if(Mn(n,r[s][0]))return r[s][1];return i},nr.prototype.update=function(e,t,n,i,r,s,a){void 0===n&&(n=Vn(i));var o=r===Ct;if(n!==this.keyHash)return o?this:(Pt(a),Pt(s),dr(this,e,t,n,[i,r]));for(var h=this.entries,u=0,c=h.length;u<c&&!Mn(i,h[u][0]);u++);var l=u<c;if(l?h[u][1]===r:o)return this;if(Pt(a),(o||!l)&&Pt(s),o&&2===c)return new ir(e,this.keyHash,h[1^u]);var p=e&&e===this.ownerID,d=p?h:vi(h);return l?o?u===c-1?d.pop():d[u]=d.pop():d[u]=[i,r]:d.push([i,r]),p?(this.entries=d,this):new nr(e,this.keyHash,d)};var ir=function(e,t,n){this.ownerID=e,this.keyHash=t,this.entry=n;};ir.prototype.get=function(e,t,n,i){return Mn(n,this.entry[0])?this.entry[1]:i},ir.prototype.update=function(e,t,n,i,r,s,a){var o=r===Ct,h=Mn(i,this.entry[0]);return (h?r===this.entry[1]:o)?this:(Pt(a),o?void Pt(s):h?e&&e===this.ownerID?(this.entry[1]=r,this):new ir(e,this.keyHash,[i,r]):(Pt(s),dr(this,e,t,Vn(i),[i,r])))},Zi.prototype.iterate=nr.prototype.iterate=function(e,t){for(var n=this.entries,i=0,r=n.length-1;i<=r;i++)if(!1===e(n[t?r-i:i]))return !1},er.prototype.iterate=tr.prototype.iterate=function(e,t){for(var n=this.nodes,i=0,r=n.length-1;i<=r;i++){var s=n[t?r-i:i];if(s&&!1===s.iterate(e,t))return !1}},ir.prototype.iterate=function(e,t){return e(this.entry)};var rr,sr=function(e){function t(e,t,n){this._type=t,this._reverse=n,this._stack=e._root&&or(e._root);}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.next=function(){for(var e=this._type,t=this._stack;t;){var n=t.node,i=t.index++,r=void 0;if(n.entry){if(0===i)return ar(e,n.entry)}else if(n.entries){if(i<=(r=n.entries.length-1))return ar(e,n.entries[this._reverse?r-i:i])}else if(i<=(r=n.nodes.length-1)){var s=n.nodes[this._reverse?r-i:i];if(s){if(s.entry)return ar(e,s.entry);t=this._stack=or(s,t);}continue}t=this._stack=this._stack.__prev;}return {value:void 0,done:!0}},t}(un);function ar(e,t){return cn(e,t[0],t[1])}function or(e,t){return {node:e,index:0,__prev:t}}function hr(e,t,n,i){var r=Object.create(Ji);return r.size=e,r._root=t,r.__ownerID=n,r.__hash=i,r.__altered=!1,r}function ur(){return rr||(rr=hr(0))}function cr(e,t,n){var i,r;if(e._root){var s={value:!1},a={value:!1};if(i=lr(e._root,e.__ownerID,0,void 0,t,n,s,a),!a.value)return e;r=e.size+(s.value?n===Ct?-1:1:0);}else{if(n===Ct)return e;r=1,i=new Zi(e.__ownerID,[[t,n]]);}return e.__ownerID?(e.size=r,e._root=i,e.__hash=void 0,e.__altered=!0,e):i?hr(r,i):ur()}function lr(e,t,n,i,r,s,a,o){return e?e.update(t,n,i,r,s,a,o):s===Ct?e:(Pt(o),Pt(a),new ir(t,i,[r,s]))}function pr(e){return e.constructor===ir||e.constructor===nr}function dr(e,t,n,i,r){if(e.keyHash===i)return new nr(t,i,[e.entry,r]);var s,a=(0===n?e.keyHash:e.keyHash>>>n)&It,o=(0===n?i:i>>>n)&It,h=a===o?[dr(e,t,n+St,i,r)]:(s=new ir(t,i,r),a<o?[e,s]:[s,e]);return new er(t,1<<a|1<<o,h)}function fr(e){return e=(e=(858993459&(e-=e>>1&1431655765))+(e>>2&858993459))+(e>>4)&252645135,e+=e>>8,127&(e+=e>>16)}function mr(e,t,n,i){var r=i?e:vi(e);return r[t]=n,r}var gr=wt/4,yr=wt/2,vr=wt/4,xr="@@__IMMUTABLE_LIST__@@";function _r(e){return Boolean(e&&e[xr])}var Er=function(e){function t(t){var n=Pr();if(null==t)return n;if(_r(t))return t;var i=e(t),r=i.size;return 0===r?n:(_i(r),r>0&&r<wt?Cr(0,r,St,null,new Ar(i.toArray())):n.withMutations(function(e){e.setSize(r),i.forEach(function(t,n){return e.set(n,t)});}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("List [","]")},t.prototype.get=function(e,t){if((e=$t(this,e))>=0&&e<this.size){var n=$r(this,e+=this._origin);return n&&n.array[e&It]}return t},t.prototype.set=function(e,t){return function(e,t,n){if((t=$t(e,t))!=t)return e;if(t>=e.size||t<0)return e.withMutations(function(e){t<0?Rr(e,t).set(0,n):Rr(e,0,t+1).set(t,n);});t+=e._origin;var i=e._tail,r=e._root,s={value:!1};t>=Or(e._capacity)?i=kr(i,e.__ownerID,0,t,n,s):r=kr(r,e.__ownerID,e._level,t,n,s);if(!s.value)return e;if(e.__ownerID)return e._root=r,e._tail=i,e.__hash=void 0,e.__altered=!0,e;return Cr(e._origin,e._capacity,e._level,r,i)}(this,e,t)},t.prototype.remove=function(e){return this.has(e)?0===e?this.shift():e===this.size-1?this.pop():this.splice(e,1):this},t.prototype.insert=function(e,t){return this.splice(e,0,t)},t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=St,this._root=this._tail=null,this.__hash=void 0,this.__altered=!0,this):Pr()},t.prototype.push=function(){var e=arguments,t=this.size;return this.withMutations(function(n){Rr(n,0,t+e.length);for(var i=0;i<e.length;i++)n.set(t+i,e[i]);})},t.prototype.pop=function(){return Rr(this,0,-1)},t.prototype.unshift=function(){var e=arguments;return this.withMutations(function(t){Rr(t,-e.length);for(var n=0;n<e.length;n++)t.set(n,e[n]);})},t.prototype.shift=function(){return Rr(this,1)},t.prototype.concat=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++){var r=t[i],s=e("string"!=typeof r&&pn(r)?r:[r]);0!==s.size&&n.push(s);}return 0===n.length?this:0!==this.size||this.__ownerID||1!==n.length?this.withMutations(function(e){n.forEach(function(t){return t.forEach(function(t){return e.push(t)})});}):this.constructor(n[0])},t.prototype.setSize=function(e){return Rr(this,0,e)},t.prototype.map=function(e,t){var n=this;return this.withMutations(function(i){for(var r=0;r<n.size;r++)i.set(r,e.call(t,i.get(r),r,i));})},t.prototype.slice=function(e,t){var n=this.size;return Ot(e,t,n)?this:Rr(this,Mt(e,n),Dt(t,n))},t.prototype.__iterator=function(e,t){var n=t?this.size:0,i=Ir(this,t);return new un(function(){var r=i();return r===wr?{value:void 0,done:!0}:cn(e,t?--n:n++,r)})},t.prototype.__iterate=function(e,t){for(var n,i=t?this.size:0,r=Ir(this,t);(n=r())!==wr&&!1!==e(n,t?--i:i++,this););return i},t.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?Cr(this._origin,this._capacity,this._level,this._root,this._tail,e,this.__hash):0===this.size?Pr():(this.__ownerID=e,this.__altered=!1,this)},t}(Gt);Er.isList=_r;var br=Er.prototype;br[xr]=!0,br.delete=br.remove,br.merge=br.concat,br.setIn=Ri,br.deleteIn=br.removeIn=Mi,br.update=Ti,br.updateIn=Li,br.mergeIn=qi,br.mergeDeepIn=Hi,br.withMutations=Gi,br.wasAltered=Xi,br.asImmutable=Yi,br["@@transducer/init"]=br.asMutable=Ki,br["@@transducer/step"]=function(e,t){return e.push(t)},br["@@transducer/result"]=function(e){return e.asImmutable()};var Ar=function(e,t){this.array=e,this.ownerID=t;};Ar.prototype.removeBefore=function(e,t,n){if(n===t?1<<t:0===this.array.length)return this;var i=n>>>t&It;if(i>=this.array.length)return new Ar([],e);var r,s=0===i;if(t>0){var a=this.array[i];if((r=a&&a.removeBefore(e,t-St,n))===a&&s)return this}if(s&&!r)return this;var o=Nr(this,e);if(!s)for(var h=0;h<i;h++)o.array[h]=void 0;return r&&(o.array[i]=r),o},Ar.prototype.removeAfter=function(e,t,n){if(n===(t?1<<t:0)||0===this.array.length)return this;var i,r=n-1>>>t&It;if(r>=this.array.length)return this;if(t>0){var s=this.array[r];if((i=s&&s.removeAfter(e,t-St,n))===s&&r===this.array.length-1)return this}var a=Nr(this,e);return a.array.splice(r+1),i&&(a.array[r]=i),a};var Sr,wr={};function Ir(e,t){var n=e._origin,i=e._capacity,r=Or(i),s=e._tail;return a(e._root,e._level,0);function a(e,o,h){return 0===o?function(e,a){var o=a===r?s&&s.array:e&&e.array,h=a>n?0:n-a,u=i-a;u>wt&&(u=wt);return function(){if(h===u)return wr;var e=t?--u:h++;return o&&o[e]}}(e,h):function(e,r,s){var o,h=e&&e.array,u=s>n?0:n-s>>r,c=1+(i-s>>r);c>wt&&(c=wt);return function(){for(;;){if(o){var e=o();if(e!==wr)return e;o=null;}if(u===c)return wr;var n=t?--c:u++;o=a(h&&h[n],r-St,s+(n<<r));}}}(e,o,h)}}function Cr(e,t,n,i,r,s,a){var o=Object.create(br);return o.size=t-e,o._origin=e,o._capacity=t,o._level=n,o._root=i,o._tail=r,o.__ownerID=s,o.__hash=a,o.__altered=!1,o}function Pr(){return Sr||(Sr=Cr(0,0,St))}function kr(e,t,n,i,r,s){var a,o=i>>>n&It,h=e&&o<e.array.length;if(!h&&void 0===r)return e;if(n>0){var u=e&&e.array[o],c=kr(u,t,n-St,i,r,s);return c===u?e:((a=Nr(e,t)).array[o]=c,a)}return h&&e.array[o]===r?e:(s&&Pt(s),a=Nr(e,t),void 0===r&&o===a.array.length-1?a.array.pop():a.array[o]=r,a)}function Nr(e,t){return t&&e&&t===e.ownerID?e:new Ar(e?e.array.slice():[],t)}function $r(e,t){if(t>=Or(e._capacity))return e._tail;if(t<1<<e._level+St){for(var n=e._root,i=e._level;n&&i>0;)n=n.array[t>>>i&It],i-=St;return n}}function Rr(e,t,n){void 0!==t&&(t|=0),void 0!==n&&(n|=0);var i=e.__ownerID||new kt,r=e._origin,s=e._capacity,a=r+t,o=void 0===n?s:n<0?s+n:r+n;if(a===r&&o===s)return e;if(a>=o)return e.clear();for(var h=e._level,u=e._root,c=0;a+c<0;)u=new Ar(u&&u.array.length?[void 0,u]:[],i),c+=1<<(h+=St);c&&(a+=c,r+=c,o+=c,s+=c);for(var l=Or(s),p=Or(o);p>=1<<h+St;)u=new Ar(u&&u.array.length?[u]:[],i),h+=St;var d=e._tail,f=p<l?$r(e,o-1):p>l?new Ar([],i):d;if(d&&p>l&&a<s&&d.array.length){for(var m=u=Nr(u,i),g=h;g>St;g-=St){var y=l>>>g&It;m=m.array[y]=Nr(m.array[y],i);}m.array[l>>>St&It]=d;}if(o<s&&(f=f&&f.removeAfter(i,0,o)),a>=p)a-=p,o-=p,h=St,u=null,f=f&&f.removeBefore(i,0,a);else if(a>r||p<l){for(c=0;u;){var v=a>>>h&It;if(v!==p>>>h&It)break;v&&(c+=(1<<h)*v),h-=St,u=u.array[v];}u&&a>r&&(u=u.removeBefore(i,h,a-c)),u&&p<l&&(u=u.removeAfter(i,h,p-c)),c&&(a-=c,o-=c);}return e.__ownerID?(e.size=o-a,e._origin=a,e._capacity=o,e._level=h,e._root=u,e._tail=f,e.__hash=void 0,e.__altered=!0,e):Cr(a,o,h,u,f)}function Or(e){return e<wt?0:e-1>>>St<<St}var Mr,Dr=function(e){function t(e){return null==e?Lr():Rn(e)?e:Lr().withMutations(function(t){var n=Ht(e);_i(n.size),n.forEach(function(e,n){return t.set(n,e)});})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("OrderedMap {","}")},t.prototype.get=function(e,t){var n=this._map.get(e);return void 0!==n?this._list.get(n)[1]:t},t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this):Lr()},t.prototype.set=function(e,t){return Vr(this,e,t)},t.prototype.remove=function(e){return Vr(this,e,Ct)},t.prototype.wasAltered=function(){return this._map.wasAltered()||this._list.wasAltered()},t.prototype.__iterate=function(e,t){var n=this;return this._list.__iterate(function(t){return t&&e(t[1],t[0],n)},t)},t.prototype.__iterator=function(e,t){return this._list.fromEntrySeq().__iterator(e,t)},t.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map.__ensureOwner(e),n=this._list.__ensureOwner(e);return e?Tr(t,n,e,this.__hash):0===this.size?Lr():(this.__ownerID=e,this._map=t,this._list=n,this)},t}(Qi);function Tr(e,t,n,i){var r=Object.create(Dr.prototype);return r.size=e?e.size:0,r._map=e,r._list=t,r.__ownerID=n,r.__hash=i,r}function Lr(){return Mr||(Mr=Tr(ur(),Pr()))}function Vr(e,t,n){var i,r,s=e._map,a=e._list,o=s.get(t),h=void 0!==o;if(n===Ct){if(!h)return e;a.size>=wt&&a.size>=2*s.size?(i=(r=a.filter(function(e,t){return void 0!==e&&o!==t})).toKeyedSeq().map(function(e){return e[0]}).flip().toMap(),e.__ownerID&&(i.__ownerID=r.__ownerID=e.__ownerID)):(i=s.remove(t),r=o===a.size-1?a.pop():a.set(o,void 0));}else if(h){if(n===a.get(o)[1])return e;i=s,r=a.set(o,[t,n]);}else i=s.set(t,a.size),r=a.set(a.size,[t,n]);return e.__ownerID?(e.size=i.size,e._map=i,e._list=r,e.__hash=void 0,e):Tr(i,r)}Dr.isOrderedMap=Rn,Dr.prototype[en]=!0,Dr.prototype.delete=Dr.prototype.remove;var Br="@@__IMMUTABLE_STACK__@@";function zr(e){return Boolean(e&&e[Br])}var jr=function(e){function t(e){return null==e?qr():zr(e)?e:qr().pushAll(e)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("Stack [","]")},t.prototype.get=function(e,t){var n=this._head;for(e=$t(this,e);n&&e--;)n=n.next;return n?n.value:t},t.prototype.peek=function(){return this._head&&this._head.value},t.prototype.push=function(){var e=arguments;if(0===arguments.length)return this;for(var t=this.size+arguments.length,n=this._head,i=arguments.length-1;i>=0;i--)n={value:e[i],next:n};return this.__ownerID?(this.size=t,this._head=n,this.__hash=void 0,this.__altered=!0,this):Fr(t,n)},t.prototype.pushAll=function(t){if(0===(t=e(t)).size)return this;if(0===this.size&&zr(t))return t;_i(t.size);var n=this.size,i=this._head;return t.__iterate(function(e){n++,i={value:e,next:i};},!0),this.__ownerID?(this.size=n,this._head=i,this.__hash=void 0,this.__altered=!0,this):Fr(n,i)},t.prototype.pop=function(){return this.slice(1)},t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):qr()},t.prototype.slice=function(t,n){if(Ot(t,n,this.size))return this;var i=Mt(t,this.size);if(Dt(n,this.size)!==this.size)return e.prototype.slice.call(this,t,n);for(var r=this.size-i,s=this._head;i--;)s=s.next;return this.__ownerID?(this.size=r,this._head=s,this.__hash=void 0,this.__altered=!0,this):Fr(r,s)},t.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?Fr(this.size,this._head,e,this.__hash):0===this.size?qr():(this.__ownerID=e,this.__altered=!1,this)},t.prototype.__iterate=function(e,t){var n=this;if(t)return new bn(this.toArray()).__iterate(function(t,i){return e(t,i,n)},t);for(var i=0,r=this._head;r&&!1!==e(r.value,i++,this);)r=r.next;return i},t.prototype.__iterator=function(e,t){if(t)return new bn(this.toArray()).__iterator(e,t);var n=0,i=this._head;return new un(function(){if(i){var t=i.value;return i=i.next,cn(e,n++,t)}return {value:void 0,done:!0}})},t}(Gt);jr.isStack=zr;var Wr,Ur=jr.prototype;function Fr(e,t,n,i){var r=Object.create(Ur);return r.size=e,r._head=t,r.__ownerID=n,r.__hash=i,r.__altered=!1,r}function qr(){return Wr||(Wr=Fr(0))}Ur[Br]=!0,Ur.shift=Ur.pop,Ur.unshift=Ur.push,Ur.unshiftAll=Ur.pushAll,Ur.withMutations=Gi,Ur.wasAltered=Xi,Ur.asImmutable=Yi,Ur["@@transducer/init"]=Ur.asMutable=Ki,Ur["@@transducer/step"]=function(e,t){return e.unshift(t)},Ur["@@transducer/result"]=function(e){return e.asImmutable()};var Hr="@@__IMMUTABLE_SET__@@";function Gr(e){return Boolean(e&&e[Hr])}function Kr(e){return Gr(e)&&tn(e)}function Yr(e,t){if(e===t)return !0;if(!Bt(t)||void 0!==e.size&&void 0!==t.size&&e.size!==t.size||void 0!==e.__hash&&void 0!==t.__hash&&e.__hash!==t.__hash||jt(e)!==jt(t)||Ut(e)!==Ut(t)||tn(e)!==tn(t))return !1;if(0===e.size&&0===t.size)return !0;var n=!Ft(e);if(tn(e)){var i=e.entries();return t.every(function(e,t){var r=i.next().value;return r&&Mn(r[1],e)&&(n||Mn(r[0],t))})&&i.next().done}var r=!1;if(void 0===e.size)if(void 0===t.size)"function"==typeof e.cacheResult&&e.cacheResult();else{r=!0;var s=e;e=t,t=s;}var a=!0,o=t.__iterate(function(t,i){if(n?!e.has(t):r?!Mn(t,e.get(i,Ct)):!Mn(e.get(i,Ct),t))return a=!1,!1});return a&&e.size===o}function Xr(e,t){var n=function(n){e.prototype[n]=t[n];};return Object.keys(t).forEach(n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(n),e}function Qr(e){if(!e||"object"!=typeof e)return e;if(!Bt(e)){if(!Ai(e))return e;e=vn(e);}if(jt(e)){var t={};return e.__iterate(function(e,n){t[n]=Qr(e);}),t}var n=[];return e.__iterate(function(e){n.push(Qr(e));}),n}var Jr=function(e){function t(t){return null==t?is():Gr(t)&&!tn(t)?t:is().withMutations(function(n){var i=e(t);_i(i.size),i.forEach(function(e){return n.add(e)});})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.fromKeys=function(e){return this(Ht(e).keySeq())},t.intersect=function(e){return (e=qt(e).toArray()).length?es.intersect.apply(t(e.pop()),e):is()},t.union=function(e){return (e=qt(e).toArray()).length?es.union.apply(t(e.pop()),e):is()},t.prototype.toString=function(){return this.__toString("Set {","}")},t.prototype.has=function(e){return this._map.has(e)},t.prototype.add=function(e){return ts(this,this._map.set(e,e))},t.prototype.remove=function(e){return ts(this,this._map.remove(e))},t.prototype.clear=function(){return ts(this,this._map.clear())},t.prototype.map=function(e,t){var n=this,i=[],r=[];return this.forEach(function(s){var a=e.call(t,s,s,n);a!==s&&(i.push(s),r.push(a));}),this.withMutations(function(e){i.forEach(function(t){return e.remove(t)}),r.forEach(function(t){return e.add(t)});})},t.prototype.union=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return 0===(t=t.filter(function(e){return 0!==e.size})).length?this:0!==this.size||this.__ownerID||1!==t.length?this.withMutations(function(n){for(var i=0;i<t.length;i++)e(t[i]).forEach(function(e){return n.add(e)});}):this.constructor(t[0])},t.prototype.intersect=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];if(0===t.length)return this;t=t.map(function(t){return e(t)});var i=[];return this.forEach(function(e){t.every(function(t){return t.includes(e)})||i.push(e);}),this.withMutations(function(e){i.forEach(function(t){e.remove(t);});})},t.prototype.subtract=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];if(0===t.length)return this;t=t.map(function(t){return e(t)});var i=[];return this.forEach(function(e){t.some(function(t){return t.includes(e)})&&i.push(e);}),this.withMutations(function(e){i.forEach(function(t){e.remove(t);});})},t.prototype.sort=function(e){return Es(hi(this,e))},t.prototype.sortBy=function(e,t){return Es(hi(this,t,e))},t.prototype.wasAltered=function(){return this._map.wasAltered()},t.prototype.__iterate=function(e,t){var n=this;return this._map.__iterate(function(t){return e(t,t,n)},t)},t.prototype.__iterator=function(e,t){return this._map.__iterator(e,t)},t.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map.__ensureOwner(e);return e?this.__make(t,e):0===this.size?this.__empty():(this.__ownerID=e,this._map=t,this)},t}(Kt);Jr.isSet=Gr;var Zr,es=Jr.prototype;function ts(e,t){return e.__ownerID?(e.size=t.size,e._map=t,e):t===e._map?e:0===t.size?e.__empty():e.__make(t)}function ns(e,t){var n=Object.create(es);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}function is(){return Zr||(Zr=ns(ur()))}es[Hr]=!0,es.delete=es.remove,es.merge=es.concat=es.union,es.withMutations=Gi,es.asImmutable=Yi,es["@@transducer/init"]=es.asMutable=Ki,es["@@transducer/step"]=function(e,t){return e.add(t)},es["@@transducer/result"]=function(e){return e.asImmutable()},es.__empty=is,es.__make=ns;var rs,ss=function(e){function t(e,n,i){if(!(this instanceof t))return new t(e,n,i);if(xi(0!==i,"Cannot step a Range by 0"),e=e||0,void 0===n&&(n=1/0),i=void 0===i?1:Math.abs(i),n<e&&(i=-i),this._start=e,this._end=n,this._step=i,this.size=Math.max(0,Math.ceil((n-e)/i-1)+1),0===this.size){if(rs)return rs;rs=this;}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return 0===this.size?"Range []":"Range [ "+this._start+"..."+this._end+(1!==this._step?" by "+this._step:"")+" ]"},t.prototype.get=function(e,t){return this.has(e)?this._start+$t(this,e)*this._step:t},t.prototype.includes=function(e){var t=(e-this._start)/this._step;return t>=0&&t<this.size&&t===Math.floor(t)},t.prototype.slice=function(e,n){return Ot(e,n,this.size)?this:(e=Mt(e,this.size),(n=Dt(n,this.size))<=e?new t(0,0):new t(this.get(e,this._end),this.get(n,this._end),this._step))},t.prototype.indexOf=function(e){var t=e-this._start;if(t%this._step==0){var n=t/this._step;if(n>=0&&n<this.size)return n}return -1},t.prototype.lastIndexOf=function(e){return this.indexOf(e)},t.prototype.__iterate=function(e,t){for(var n=this.size,i=this._step,r=t?this._start+(n-1)*i:this._start,s=0;s!==n&&!1!==e(r,t?n-++s:s++,this);)r+=t?-i:i;return s},t.prototype.__iterator=function(e,t){var n=this.size,i=this._step,r=t?this._start+(n-1)*i:this._start,s=0;return new un(function(){if(s===n)return {value:void 0,done:!0};var a=r;return r+=t?-i:i,cn(e,t?n-++s:s++,a)})},t.prototype.equals=function(e){return e instanceof t?this._start===e._start&&this._end===e._end&&this._step===e._step:Yr(this,e)},t}(_n);function as(e,t,n){for(var i=Ei(t),r=0;r!==i.length;)if((e=Ii(e,i[r++],Ct))===Ct)return n;return e}function os(e,t){return as(this,e,t)}function hs(e,t){return as(e,t,Ct)!==Ct}function us(){_i(this.size);var e={};return this.__iterate(function(t,n){e[n]=t;}),e}qt.isIterable=Bt,qt.isKeyed=jt,qt.isIndexed=Ut,qt.isAssociative=Ft,qt.isOrdered=tn,qt.Iterator=un,Xr(qt,{toArray:function(){_i(this.size);var e=new Array(this.size||0),t=jt(this),n=0;return this.__iterate(function(i,r){e[n++]=t?[r,i]:i;}),e},toIndexedSeq:function(){return new Qn(this)},toJS:function(){return Qr(this)},toKeyedSeq:function(){return new Xn(this,!0)},toMap:function(){return Qi(this.toKeyedSeq())},toObject:us,toOrderedMap:function(){return Dr(this.toKeyedSeq())},toOrderedSet:function(){return Es(jt(this)?this.valueSeq():this)},toSet:function(){return Jr(jt(this)?this.valueSeq():this)},toSetSeq:function(){return new Jn(this)},toSeq:function(){return Ut(this)?this.toIndexedSeq():jt(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return jr(jt(this)?this.valueSeq():this)},toList:function(){return Er(jt(this)?this.valueSeq():this)},toString:function(){return "[Collection]"},__toString:function(e,t){return 0===this.size?e+t:e+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+t},concat:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return pi(this,ai(this,e))},includes:function(e){return this.some(function(t){return Mn(t,e)})},entries:function(){return this.__iterator(sn)},every:function(e,t){_i(this.size);var n=!0;return this.__iterate(function(i,r,s){if(!e.call(t,i,r,s))return n=!1,!1}),n},filter:function(e,t){return pi(this,ii(this,e,t,!0))},find:function(e,t,n){var i=this.findEntry(e,t);return i?i[1]:n},forEach:function(e,t){return _i(this.size),this.__iterate(t?e.bind(t):e)},join:function(e){_i(this.size),e=void 0!==e?""+e:",";var t="",n=!0;return this.__iterate(function(i){n?n=!1:t+=e,t+=null!=i?i.toString():"";}),t},keys:function(){return this.__iterator(nn)},map:function(e,t){return pi(this,ti(this,e,t))},reduce:function(e,t,n){return ds(this,e,t,n,arguments.length<2,!1)},reduceRight:function(e,t,n){return ds(this,e,t,n,arguments.length<2,!0)},reverse:function(){return pi(this,ni(this,!0))},slice:function(e,t){return pi(this,ri(this,e,t,!0))},some:function(e,t){return !this.every(gs(e),t)},sort:function(e){return pi(this,hi(this,e))},values:function(){return this.__iterator(rn)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return void 0!==this.size?0===this.size:!this.some(function(){return !0})},count:function(e,t){return Nt(e?this.toSeq().filter(e,t):this)},countBy:function(e,t){return function(e,t,n){var i=Qi().asMutable();return e.__iterate(function(r,s){i.update(t.call(n,r,s,e),0,function(e){return e+1});}),i.asImmutable()}(this,e,t)},equals:function(e){return Yr(this,e)},entrySeq:function(){var e=this;if(e._cache)return new bn(e._cache);var t=e.toSeq().map(ms).toIndexedSeq();return t.fromEntrySeq=function(){return e.toSeq()},t},filterNot:function(e,t){return this.filter(gs(e),t)},findEntry:function(e,t,n){var i=n;return this.__iterate(function(n,r,s){if(e.call(t,n,r,s))return i=[r,n],!1}),i},findKey:function(e,t){var n=this.findEntry(e,t);return n&&n[0]},findLast:function(e,t,n){return this.toKeyedSeq().reverse().find(e,t,n)},findLastEntry:function(e,t,n){return this.toKeyedSeq().reverse().findEntry(e,t,n)},findLastKey:function(e,t){return this.toKeyedSeq().reverse().findKey(e,t)},first:function(e){return this.find(Rt,null,e)},flatMap:function(e,t){return pi(this,function(e,t,n){var i=fi(e);return e.toSeq().map(function(r,s){return i(t.call(n,r,s,e))}).flatten(!0)}(this,e,t))},flatten:function(e){return pi(this,oi(this,e,!0))},fromEntrySeq:function(){return new Zn(this)},get:function(e,t){return this.find(function(t,n){return Mn(n,e)},void 0,t)},getIn:os,groupBy:function(e,t){return function(e,t,n){var i=jt(e),r=(tn(e)?Dr():Qi()).asMutable();e.__iterate(function(s,a){r.update(t.call(n,s,a,e),function(e){return (e=e||[]).push(i?[a,s]:s),e});});var s=fi(e);return r.map(function(t){return pi(e,s(t))}).asImmutable()}(this,e,t)},has:function(e){return this.get(e,Ct)!==Ct},hasIn:function(e){return hs(this,e)},isSubset:function(e){return e="function"==typeof e.includes?e:qt(e),this.every(function(t){return e.includes(t)})},isSuperset:function(e){return (e="function"==typeof e.isSubset?e:qt(e)).isSubset(this)},keyOf:function(e){return this.findKey(function(t){return Mn(t,e)})},keySeq:function(){return this.toSeq().map(fs).toIndexedSeq()},last:function(e){return this.toSeq().reverse().first(e)},lastKeyOf:function(e){return this.toKeyedSeq().reverse().keyOf(e)},max:function(e){return ui(this,e)},maxBy:function(e,t){return ui(this,t,e)},min:function(e){return ui(this,e?ys(e):xs)},minBy:function(e,t){return ui(this,t?ys(t):xs,e)},rest:function(){return this.slice(1)},skip:function(e){return 0===e?this:this.slice(Math.max(0,e))},skipLast:function(e){return 0===e?this:this.slice(0,-Math.max(0,e))},skipWhile:function(e,t){return pi(this,si(this,e,t,!0))},skipUntil:function(e,t){return this.skipWhile(gs(e),t)},sortBy:function(e,t){return pi(this,hi(this,t,e))},take:function(e){return this.slice(0,Math.max(0,e))},takeLast:function(e){return this.slice(-Math.max(0,e))},takeWhile:function(e,t){return pi(this,function(e,t,n){var i=mi(e);return i.__iterateUncached=function(i,r){var s=this;if(r)return this.cacheResult().__iterate(i,r);var a=0;return e.__iterate(function(e,r,o){return t.call(n,e,r,o)&&++a&&i(e,r,s)}),a},i.__iteratorUncached=function(i,r){var s=this;if(r)return this.cacheResult().__iterator(i,r);var a=e.__iterator(sn,r),o=!0;return new un(function(){if(!o)return {value:void 0,done:!0};var e=a.next();if(e.done)return e;var r=e.value,h=r[0],u=r[1];return t.call(n,u,h,s)?i===sn?e:cn(i,h,u,e):(o=!1,{value:void 0,done:!0})})},i}(this,e,t))},takeUntil:function(e,t){return this.takeWhile(gs(e),t)},update:function(e){return e(this)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=function(e){if(e.size===1/0)return 0;var t=tn(e),n=jt(e),i=t?1:0;return function(e,t){return t=Dn(t,3432918353),t=Dn(t<<15|t>>>-15,461845907),t=Dn(t<<13|t>>>-13,5),t=Dn((t=(t+3864292196|0)^e)^t>>>16,2246822507),t=Tn((t=Dn(t^t>>>13,3266489909))^t>>>16)}(e.__iterate(n?t?function(e,t){i=31*i+_s(Vn(e),Vn(t))|0;}:function(e,t){i=i+_s(Vn(e),Vn(t))|0;}:t?function(e){i=31*i+Vn(e)|0;}:function(e){i=i+Vn(e)|0;}),i)}(this))}});var cs=qt.prototype;cs[Vt]=!0,cs[hn]=cs.values,cs.toJSON=cs.toArray,cs.__toStringMapper=Si,cs.inspect=cs.toSource=function(){return this.toString()},cs.chain=cs.flatMap,cs.contains=cs.includes,Xr(Ht,{flip:function(){return pi(this,ei(this))},mapEntries:function(e,t){var n=this,i=0;return pi(this,this.toSeq().map(function(r,s){return e.call(t,[s,r],i++,n)}).fromEntrySeq())},mapKeys:function(e,t){var n=this;return pi(this,this.toSeq().flip().map(function(i,r){return e.call(t,i,r,n)}).flip())}});var ls=Ht.prototype;ls[zt]=!0,ls[hn]=cs.entries,ls.toJSON=us,ls.__toStringMapper=function(e,t){return Si(t)+": "+Si(e)},Xr(Gt,{toKeyedSeq:function(){return new Xn(this,!1)},filter:function(e,t){return pi(this,ii(this,e,t,!1))},findIndex:function(e,t){var n=this.findEntry(e,t);return n?n[0]:-1},indexOf:function(e){var t=this.keyOf(e);return void 0===t?-1:t},lastIndexOf:function(e){var t=this.lastKeyOf(e);return void 0===t?-1:t},reverse:function(){return pi(this,ni(this,!1))},slice:function(e,t){return pi(this,ri(this,e,t,!1))},splice:function(e,t){var n=arguments.length;if(t=Math.max(t||0,0),0===n||2===n&&!t)return this;e=Mt(e,e<0?this.count():this.size);var i=this.slice(0,e);return pi(this,1===n?i:i.concat(vi(arguments,2),this.slice(e+t)))},findLastIndex:function(e,t){var n=this.findLastEntry(e,t);return n?n[0]:-1},first:function(e){return this.get(0,e)},flatten:function(e){return pi(this,oi(this,e,!1))},get:function(e,t){return (e=$t(this,e))<0||this.size===1/0||void 0!==this.size&&e>this.size?t:this.find(function(t,n){return n===e},void 0,t)},has:function(e){return (e=$t(this,e))>=0&&(void 0!==this.size?this.size===1/0||e<this.size:-1!==this.indexOf(e))},interpose:function(e){return pi(this,function(e,t){var n=mi(e);return n.size=e.size&&2*e.size-1,n.__iterateUncached=function(n,i){var r=this,s=0;return e.__iterate(function(e){return (!s||!1!==n(t,s++,r))&&!1!==n(e,s++,r)},i),s},n.__iteratorUncached=function(n,i){var r,s=e.__iterator(rn,i),a=0;return new un(function(){return (!r||a%2)&&(r=s.next()).done?r:a%2?cn(n,a++,t):cn(n,a++,r.value,r)})},n}(this,e))},interleave:function(){var e=[this].concat(vi(arguments)),t=li(this.toSeq(),_n.of,e),n=t.flatten(!0);return t.size&&(n.size=t.size*e.length),pi(this,n)},keySeq:function(){return ss(0,this.size)},last:function(e){return this.get(-1,e)},skipWhile:function(e,t){return pi(this,si(this,e,t,!1))},zip:function(){var e=[this].concat(vi(arguments));return pi(this,li(this,vs,e))},zipAll:function(){var e=[this].concat(vi(arguments));return pi(this,li(this,vs,e,!0))},zipWith:function(e){var t=vi(arguments);return t[0]=this,pi(this,li(this,e,t))}});var ps=Gt.prototype;function ds(e,t,n,i,r,s){return _i(e.size),e.__iterate(function(e,s,a){r?(r=!1,n=e):n=t.call(i,n,e,s,a);},s),n}function fs(e,t){return t}function ms(e,t){return [t,e]}function gs(e){return function(){return !e.apply(this,arguments)}}function ys(e){return function(){return -e.apply(this,arguments)}}function vs(){return vi(arguments)}function xs(e,t){return e<t?1:e>t?-1:0}function _s(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}ps[Wt]=!0,ps[en]=!0,Xr(Kt,{get:function(e,t){return this.has(e)?e:t},includes:function(e){return this.has(e)},keySeq:function(){return this.valueSeq()}}),Kt.prototype.has=cs.includes,Kt.prototype.contains=Kt.prototype.includes,Xr(xn,Ht.prototype),Xr(_n,Gt.prototype),Xr(En,Kt.prototype);var Es=function(e){function t(e){return null==e?ws():Kr(e)?e:ws().withMutations(function(t){var n=Kt(e);_i(n.size),n.forEach(function(e){return t.add(e)});})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.fromKeys=function(e){return this(Ht(e).keySeq())},t.prototype.toString=function(){return this.__toString("OrderedSet {","}")},t}(Jr);Es.isOrderedSet=Kr;var bs,As=Es.prototype;function Ss(e,t){var n=Object.create(As);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}function ws(){return bs||(bs=Ss(Lr()))}As[en]=!0,As.zip=ps.zip,As.zipWith=ps.zipWith,As.__empty=ws,As.__make=Ss;var Is=function(e,t){var n,i=function(s){var a=this;if(s instanceof i)return s;if(!(this instanceof i))return new i(s);if(!n){n=!0;var o=Object.keys(e),h=r._indices={};r._name=t,r._keys=o,r._defaultValues=e;for(var u=0;u<o.length;u++){var c=o[u];h[c]=u,r[c]?"object"==typeof console&&console.warn&&console.warn("Cannot define "+Ns(this)+' with property "'+c+'" since that property name is part of the Record API.'):Rs(r,c);}}this.__ownerID=void 0,this._values=Er().withMutations(function(e){e.setSize(a._keys.length),Ht(s).forEach(function(t,n){e.set(a._indices[n],t===a._defaultValues[n]?void 0:t);});});},r=i.prototype=Object.create(Ps);return r.constructor=i,t&&(i.displayName=t),i};Is.prototype.toString=function(){for(var e,t=Ns(this)+" { ",n=this._keys,i=0,r=n.length;i!==r;i++)t+=(i?", ":"")+(e=n[i])+": "+Si(this.get(e));return t+" }"},Is.prototype.equals=function(e){return this===e||e&&this._keys===e._keys&&$s(this).equals($s(e))},Is.prototype.hashCode=function(){return $s(this).hashCode()},Is.prototype.has=function(e){return this._indices.hasOwnProperty(e)},Is.prototype.get=function(e,t){if(!this.has(e))return t;var n=this._indices[e],i=this._values.get(n);return void 0===i?this._defaultValues[e]:i},Is.prototype.set=function(e,t){if(this.has(e)){var n=this._values.set(this._indices[e],t===this._defaultValues[e]?void 0:t);if(n!==this._values&&!this.__ownerID)return ks(this,n)}return this},Is.prototype.remove=function(e){return this.set(e)},Is.prototype.clear=function(){var e=this._values.clear().setSize(this._keys.length);return this.__ownerID?this:ks(this,e)},Is.prototype.wasAltered=function(){return this._values.wasAltered()},Is.prototype.toSeq=function(){return $s(this)},Is.prototype.toJS=function(){return Qr(this)},Is.prototype.entries=function(){return this.__iterator(sn)},Is.prototype.__iterator=function(e,t){return $s(this).__iterator(e,t)},Is.prototype.__iterate=function(e,t){return $s(this).__iterate(e,t)},Is.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._values.__ensureOwner(e);return e?ks(this,t,e):(this.__ownerID=e,this._values=t,this)},Is.isRecord=Jt,Is.getDescriptiveName=Ns;var Cs,Ps=Is.prototype;function ks(e,t,n){var i=Object.create(Object.getPrototypeOf(e));return i._values=t,i.__ownerID=n,i}function Ns(e){return e.constructor.displayName||e.constructor.name||"Record"}function $s(e){return Cn(e._keys.map(function(t){return [t,e.get(t)]}))}function Rs(e,t){try{Object.defineProperty(e,t,{get:function(){return this.get(t)},set:function(e){xi(this.__ownerID,"Cannot set on an immutable record."),this.set(t,e);}});}catch(e){}}function Os(e,t){return jt(t)?t.toMap():t.toList()}Ps[Qt]=!0,Ps.delete=Ps.remove,Ps.deleteIn=Ps.removeIn=Mi,Ps.getIn=os,Ps.hasIn=cs.hasIn,Ps.merge=Vi,Ps.mergeWith=Bi,Ps.mergeIn=qi,Ps.mergeDeep=Ui,Ps.mergeDeepWith=Fi,Ps.mergeDeepIn=Hi,Ps.setIn=Ri,Ps.update=Ti,Ps.updateIn=Li,Ps.withMutations=Gi,Ps.asMutable=Ki,Ps.asImmutable=Yi,Ps[hn]=Ps.entries,Ps.toJSON=Ps.toObject=cs.toObject,Ps.inspect=Ps.toSource=function(){return this.toString()};var Ms,Ds={version:"4.0.0-rc.11",Collection:qt,Iterable:qt,Seq:vn,Map:Qi,OrderedMap:Dr,List:Er,Stack:jr,Set:Jr,OrderedSet:Es,Record:Is,Range:ss,Repeat:function(e){function t(e,n){if(!(this instanceof t))return new t(e,n);if(this._value=e,this.size=void 0===n?1/0:Math.max(0,n),0===this.size){if(Cs)return Cs;Cs=this;}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return 0===this.size?"Repeat []":"Repeat [ "+this._value+" "+this.size+" times ]"},t.prototype.get=function(e,t){return this.has(e)?this._value:t},t.prototype.includes=function(e){return Mn(this._value,e)},t.prototype.slice=function(e,n){var i=this.size;return Ot(e,n,i)?this:new t(this._value,Dt(n,i)-Mt(e,i))},t.prototype.reverse=function(){return this},t.prototype.indexOf=function(e){return Mn(this._value,e)?0:-1},t.prototype.lastIndexOf=function(e){return Mn(this._value,e)?this.size:-1},t.prototype.__iterate=function(e,t){for(var n=this.size,i=0;i!==n&&!1!==e(this._value,t?n-++i:i++,this););return i},t.prototype.__iterator=function(e,t){var n=this,i=this.size,r=0;return new un(function(){return r===i?{value:void 0,done:!0}:cn(e,t?i-++r:r++,n._value)})},t.prototype.equals=function(e){return e instanceof t?Mn(this._value,e._value):Yr(e)},t}(_n),is:Mn,fromJS:function(e,t){return function e(t,n,i,r,s,a){var o=Array.isArray(i)?_n:bi(i)?xn:null;if(o){if(~t.indexOf(i))throw new TypeError("Cannot convert circular structure to Immutable");t.push(i),s&&""!==r&&s.push(r);var h=n.call(a,r,o(i).map(function(r,a){return e(t,n,r,a,s,i)}),s&&s.slice());return t.pop(),s&&s.pop(),h}return i}([],t||Os,e,"",t&&t.length>2?[]:void 0,{"":e})},hash:Vn,isImmutable:Zt,isCollection:Bt,isKeyed:jt,isIndexed:Ut,isAssociative:Ft,isOrdered:tn,isValueObject:On,isSeq:Xt,isList:_r,isMap:$n,isOrderedMap:Rn,isStack:zr,isSet:Gr,isOrderedSet:Kr,isRecord:Jt,get:Ii,getIn:as,has:wi,hasIn:hs,merge:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return Wi(e,t)},mergeDeep:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return ji(e,t)},mergeWith:function(e,t){for(var n=[],i=arguments.length-2;i-- >0;)n[i]=arguments[i+2];return Wi(t,n,e)},mergeDeepWith:function(e,t){for(var n=[],i=arguments.length-2;i-- >0;)n[i]=arguments[i+2];return ji(t,n,e)},remove:Pi,removeIn:Oi,set:ki,setIn:$i,update:Di,updateIn:Ni};!function(e){e[e.IGNORED_LABELS=0]="IGNORED_LABELS",e[e.ACCESSED_NODES=1]="ACCESSED_NODES",e[e.ASSIGNED_NODES=2]="ASSIGNED_NODES",e[e.IGNORE_BREAK_STATEMENTS=3]="IGNORE_BREAK_STATEMENTS",e[e.IGNORE_RETURN_AWAIT_YIELD=4]="IGNORE_RETURN_AWAIT_YIELD",e[e.NODES_CALLED_AT_PATH_WITH_OPTIONS=5]="NODES_CALLED_AT_PATH_WITH_OPTIONS",e[e.REPLACED_VARIABLE_INITS=6]="REPLACED_VARIABLE_INITS",e[e.RETURN_EXPRESSIONS_ACCESSED_AT_PATH=7]="RETURN_EXPRESSIONS_ACCESSED_AT_PATH",e[e.RETURN_EXPRESSIONS_ASSIGNED_AT_PATH=8]="RETURN_EXPRESSIONS_ASSIGNED_AT_PATH",e[e.RETURN_EXPRESSIONS_CALLED_AT_PATH=9]="RETURN_EXPRESSIONS_CALLED_AT_PATH";}(Ms||(Ms={}));const Ts={};class Ls{static create(){return new this(Ds.Map())}constructor(e){this.optionValues=e;}addAccessedNodeAtPath(e,t){return this.setIn([Ms.ACCESSED_NODES,t,...e,Ts],!0)}addAccessedReturnExpressionAtPath(e,t){return this.setIn([Ms.RETURN_EXPRESSIONS_ACCESSED_AT_PATH,t,...e,Ts],!0)}addAssignedNodeAtPath(e,t){return this.setIn([Ms.ASSIGNED_NODES,t,...e,Ts],!0)}addAssignedReturnExpressionAtPath(e,t){return this.setIn([Ms.RETURN_EXPRESSIONS_ASSIGNED_AT_PATH,t,...e,Ts],!0)}addCalledNodeAtPathWithOptions(e,t,n){return this.setIn([Ms.NODES_CALLED_AT_PATH_WITH_OPTIONS,t,...e,Ts,n],!0)}addCalledReturnExpressionAtPath(e,t){return this.setIn([Ms.RETURN_EXPRESSIONS_CALLED_AT_PATH,t,...e,Ts],!0)}getHasEffectsWhenCalledOptions(){return this.setIgnoreReturnAwaitYield().setIgnoreBreakStatements(!1).setIgnoreNoLabels()}getReplacedVariableInit(e){return this.optionValues.getIn([Ms.REPLACED_VARIABLE_INITS,e])}hasNodeBeenAccessedAtPath(e,t){return this.optionValues.getIn([Ms.ACCESSED_NODES,t,...e,Ts])}hasNodeBeenAssignedAtPath(e,t){return this.optionValues.getIn([Ms.ASSIGNED_NODES,t,...e,Ts])}hasNodeBeenCalledAtPathWithOptions(e,t,n){const i=this.optionValues.getIn([Ms.NODES_CALLED_AT_PATH_WITH_OPTIONS,t,...e,Ts]);return i&&i.find((e,t)=>t.equals(n))}hasReturnExpressionBeenAccessedAtPath(e,t){return this.optionValues.getIn([Ms.RETURN_EXPRESSIONS_ACCESSED_AT_PATH,t,...e,Ts])}hasReturnExpressionBeenAssignedAtPath(e,t){return this.optionValues.getIn([Ms.RETURN_EXPRESSIONS_ASSIGNED_AT_PATH,t,...e,Ts])}hasReturnExpressionBeenCalledAtPath(e,t){return this.optionValues.getIn([Ms.RETURN_EXPRESSIONS_CALLED_AT_PATH,t,...e,Ts])}ignoreBreakStatements(){return this.get(Ms.IGNORE_BREAK_STATEMENTS)}ignoreLabel(e){return this.optionValues.getIn([Ms.IGNORED_LABELS,e])}ignoreReturnAwaitYield(){return this.get(Ms.IGNORE_RETURN_AWAIT_YIELD)}replaceVariableInit(e,t){return this.setIn([Ms.REPLACED_VARIABLE_INITS,e],t)}setIgnoreBreakStatements(e=!0){return this.set(Ms.IGNORE_BREAK_STATEMENTS,e)}setIgnoreLabel(e){return this.setIn([Ms.IGNORED_LABELS,e],!0)}setIgnoreNoLabels(){return this.remove(Ms.IGNORED_LABELS)}setIgnoreReturnAwaitYield(e=!0){return this.set(Ms.IGNORE_RETURN_AWAIT_YIELD,e)}get(e){return this.optionValues.get(e)}remove(e){return new Ls(this.optionValues.remove(e))}set(e,t){return new Ls(this.optionValues.set(e,t))}setIn(e,t){return new Ls(this.optionValues.setIn(e,t))}}const Vs={Literal:[],Program:["body"]};const Bs="variables",zs=Ls.create();class js{constructor(e,t,n){this.included=!1,this.keys=Vs[e.type]||function(e){return Vs[e.type]=Object.keys(e).filter(t=>"object"==typeof e[t]),Vs[e.type]}(e),this.parent=t,this.context=t.context,this.createScope(n),this.parseNode(e),this.initialise(),this.context.magicString.addSourcemapLocation(this.start),this.context.magicString.addSourcemapLocation(this.end);}bind(){for(const e of this.keys){const t=this[e];if(null!==t&&"annotations"!==e)if(Array.isArray(t))for(const e of t)null!==e&&e.bind();else t.bind();}}createScope(e){this.scope=e;}declare(e,t){return []}deoptimizePath(e){}getLiteralValueAtPath(e,t,n){return Ie}getReturnExpressionWhenCalledAtPath(e,t,n){return Ce}hasEffects(e){for(const t of this.keys){const n=this[t];if(null!==n&&"annotations"!==t)if(Array.isArray(n)){for(const t of n)if(null!==t&&t.hasEffects(e))return !0}else if(n.hasEffects(e))return !0}return !1}hasEffectsWhenAccessedAtPath(e,t){return e.length>0}hasEffectsWhenAssignedAtPath(e,t){return !0}hasEffectsWhenCalledAtPath(e,t,n){return !0}include(e){this.included=!0;for(const t of this.keys){const n=this[t];if(null!==n&&"annotations"!==t)if(Array.isArray(n))for(const t of n)null!==t&&t.include(e);else n.include(e);}}includeCallArguments(e){for(const t of e)t.include(!1);}includeWithAllDeclaredVariables(e){this.include(e);}initialise(){}insertSemicolon(e){";"!==e.original[this.end-1]&&e.appendLeft(this.end,";");}locate(){const e=At(this.context.code,this.start,{offsetLine:1});return e.file=this.context.fileName,e.toString=()=>JSON.stringify(e),e}parseNode(e){for(const t of Object.keys(e)){if(this.hasOwnProperty(t))continue;const n=e[t];if("object"!=typeof n||null===n||"annotations"===t)this[t]=n;else if(Array.isArray(n)){this[t]=[];for(const e of n)this[t].push(null===e?null:new(this.context.nodeConstructors[e.type]||this.context.nodeConstructors.UnknownNode)(e,this,this.scope));}else this[t]=new(this.context.nodeConstructors[n.type]||this.context.nodeConstructors.UnknownNode)(n,this,this.scope);}}render(e,t){for(const n of this.keys){const i=this[n];if(null!==i&&"annotations"!==n)if(Array.isArray(i))for(const n of i)null!==n&&n.render(e,t);else i.render(e,t);}}shouldBeIncluded(){return this.included||this.hasEffects(zs)}toString(){return this.context.code.slice(this.start,this.end)}}class Ws extends js{createScope(e){this.scope=new bt(e);}hasEffectsWhenAccessedAtPath(e,t){return e.length>1}hasEffectsWhenAssignedAtPath(e,t){return e.length>1}hasEffectsWhenCalledAtPath(e,t,n){return this.body.hasEffectsWhenCalledAtPath(e,t,n)||null!==this.superClass&&this.superClass.hasEffectsWhenCalledAtPath(e,t,n)}initialise(){null!==this.id&&this.id.declare("class",this);}}class Us extends Ws{initialise(){super.initialise(),null!==this.id&&(this.id.variable.isId=!0);}parseNode(e){null!==e.id&&(this.id=new this.context.nodeConstructors.Identifier(e.id,this,this.scope.parent)),super.parseNode(e);}render(e,t){"system"===t.format&&this.id&&this.id.variable.exportName&&e.appendLeft(this.end,` exports('${this.id.variable.exportName}', ${this.id.variable.getName()});`),super.render(e,t);}}class Fs extends _t{constructor(e){super("arguments",null,Ce,e);}hasEffectsWhenAccessedAtPath(e){return e.length>1}hasEffectsWhenAssignedAtPath(){return !0}hasEffectsWhenCalledAtPath(){return !0}}class qs extends _t{constructor(e){super("this",null,null,e);}_getInit(e){return e.getReplacedVariableInit(this)||Ce}getLiteralValueAtPath(){return Ie}hasEffectsWhenAccessedAtPath(e,t){return this._getInit(t).hasEffectsWhenAccessedAtPath(e,t)||super.hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){return this._getInit(t).hasEffectsWhenAssignedAtPath(e,t)||super.hasEffectsWhenAssignedAtPath(e,t)}hasEffectsWhenCalledAtPath(e,t,n){return this._getInit(n).hasEffectsWhenCalledAtPath(e,t,n)||super.hasEffectsWhenCalledAtPath(e,t,n)}}class Hs extends bt{constructor(e,t){super(e),this.parameters=[],this.hasRest=!1,this.context=t,this.hoistedBodyVarScope=new bt(this);}addParameterDeclaration(e){const t=e.name;let n=this.hoistedBodyVarScope.variables.get(t);return n?n.addDeclaration(e,null):n=new _t(t,e,Ce,this.context),this.variables.set(t,n),n}addParameterVariables(e,t){this.parameters=e;for(const t of e)for(const e of t)e.alwaysRendered=!0;this.hasRest=t;}includeCallArguments(e){let t=!1,n=!1;const i=this.hasRest&&this.parameters[this.parameters.length-1];for(let r=e.length-1;r>=0;r--){const s=this.parameters[r]||i,a=e[r];if(s){t=!1;for(const e of s)e.included&&(n=!0),e.calledFromTryStatement&&(t=!0);}!n&&a.shouldBeIncluded()&&(n=!0),n&&a.include(t);}}}class Gs extends Hs{constructor(){super(...arguments),this.returnExpression=null,this.returnExpressions=[];}addReturnExpression(e){this.returnExpressions.push(e);}getReturnExpression(){return null===this.returnExpression&&this.updateReturnExpression(),this.returnExpression}updateReturnExpression(){if(1===this.returnExpressions.length)this.returnExpression=this.returnExpressions[0];else{this.returnExpression=Ce;for(const e of this.returnExpressions)e.deoptimizePath(Se);}}}class Ks extends Gs{constructor(e,t){super(e,t),this.variables.set("arguments",this.argumentsVariable=new Fs(t)),this.variables.set("this",this.thisVariable=new qs(t));}findLexicalBoundary(){return this}getOptionsWhenCalledWith({withNew:e},t){return t.replaceVariableInit(this.thisVariable,e?new qe:Ce)}includeCallArguments(e){if(super.includeCallArguments(e),this.argumentsVariable.included)for(const t of e)t.included||t.include(!1);}}class Ys extends js{constructor(){super(...arguments),this.variable=null,this.bound=!1;}addExportedVariables(e){null!==this.variable&&this.variable.exportName&&e.push(this.variable);}bind(){this.bound||(this.bound=!0,null===this.variable&&function e(t,n){if("MemberExpression"===t.type)return !t.computed&&e(t.object,t);if("Identifier"===t.type){if(!n)return !0;switch(n.type){case"MemberExpression":return n.computed||t===n.object;case"MethodDefinition":return n.computed;case"Property":return n.computed||t===n.value;case"ExportSpecifier":return t===n.local;case"LabeledStatement":case"BreakStatement":case"ContinueStatement":return !1;default:return !0}}return !1}(this,this.parent)&&(this.variable=this.scope.findVariable(this.name),this.variable.addReference(this)),null!==this.variable&&this.variable instanceof _t&&null!==this.variable.additionalInitializers&&this.variable.consolidateInitializers());}declare(e,t){let n;switch(e){case"var":case"function":n=this.scope.addDeclaration(this,this.context,t,!0);break;case"let":case"const":case"class":n=this.scope.addDeclaration(this,this.context,t,!1);break;case"parameter":n=this.scope.addParameterDeclaration(this);break;default:throw new Error(`Unexpected identifier kind ${e}.`)}return [this.variable=n]}deoptimizePath(e){this.bound||this.bind(),null!==this.variable&&(0===e.length&&this.name in this.context.importDescriptions&&!this.scope.contains(this.name)&&this.disallowImportReassignment(),this.variable.deoptimizePath(e));}getLiteralValueAtPath(e,t,n){return this.bound||this.bind(),null!==this.variable?this.variable.getLiteralValueAtPath(e,t,n):Ie}getReturnExpressionWhenCalledAtPath(e,t,n){return this.bound||this.bind(),null!==this.variable?this.variable.getReturnExpressionWhenCalledAtPath(e,t,n):Ce}hasEffectsWhenAccessedAtPath(e,t){return null!==this.variable&&this.variable.hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){return !this.variable||this.variable.hasEffectsWhenAssignedAtPath(e,t)}hasEffectsWhenCalledAtPath(e,t,n){return !this.variable||this.variable.hasEffectsWhenCalledAtPath(e,t,n)}include(){this.included||(this.included=!0,null!==this.variable&&this.context.includeVariable(this.variable));}includeCallArguments(e){this.variable&&this.variable.includeCallArguments(e);}render(e,t,{renderedParentType:n,isCalleeOfRenderedParent:i,isShorthandProperty:r}=Y){if(this.variable){const t=this.variable.getName();t!==this.name&&(e.overwrite(this.start,this.end,t,{contentOnly:!0,storeName:!0}),r&&e.prependRight(this.start,`${this.name}: `)),"eval"===t&&n===Q&&i&&e.appendRight(this.start,"0, ");}}disallowImportReassignment(){this.context.error({code:"ILLEGAL_REASSIGNMENT",message:`Illegal reassignment to import '${this.name}'`},this.start);}}class Xs extends js{constructor(){super(...arguments),this.declarationInit=null;}addExportedVariables(e){this.argument.addExportedVariables(e);}bind(){super.bind(),null!==this.declarationInit&&this.declarationInit.deoptimizePath([be,be]);}declare(e,t){return this.declarationInit=t,this.argument.declare(e,Ce)}deoptimizePath(e){0===e.length&&this.argument.deoptimizePath(Ae);}hasEffectsWhenAssignedAtPath(e,t){return e.length>0||this.argument.hasEffectsWhenAssignedAtPath(Ae,t)}}class Qs extends js{constructor(){super(...arguments),this.isPrototypeDeoptimized=!1;}createScope(e){this.scope=new Ks(e,this.context);}deoptimizePath(e){1===e.length&&("prototype"===e[0]?this.isPrototypeDeoptimized=!0:e[0]===be&&(this.isPrototypeDeoptimized=!0,this.scope.getReturnExpression().deoptimizePath(Se)));}getReturnExpressionWhenCalledAtPath(e){return 0===e.length?this.scope.getReturnExpression():Ce}hasEffects(e){return null!==this.id&&this.id.hasEffects(e)}hasEffectsWhenAccessedAtPath(e){return !(e.length<=1)&&(e.length>2||"prototype"!==e[0]||this.isPrototypeDeoptimized)}hasEffectsWhenAssignedAtPath(e){return !(e.length<=1)&&(e.length>2||"prototype"!==e[0]||this.isPrototypeDeoptimized)}hasEffectsWhenCalledAtPath(e,t,n){if(e.length>0)return !0;const i=this.scope.getOptionsWhenCalledWith(t,n);for(const e of this.params)if(e.hasEffects(i))return !0;return this.body.hasEffects(i)}include(e){this.included=!0,this.body.include(e),this.id&&this.id.include();const t=this.scope.argumentsVariable.included;for(const n of this.params)n instanceof Ys&&!t||n.include(e);}includeCallArguments(e){this.scope.includeCallArguments(e);}initialise(){null!==this.id&&this.id.declare("function",this),this.scope.addParameterVariables(this.params.map(e=>e.declare("parameter",Ce)),this.params[this.params.length-1]instanceof Xs),this.body.addImplicitReturnExpressionToScope();}parseNode(e){this.body=new this.context.nodeConstructors.BlockStatement(e.body,this,this.scope.hoistedBodyVarScope),super.parseNode(e);}}Qs.prototype.preventChildBlockScope=!0;class Js extends Qs{initialise(){super.initialise(),null!==this.id&&(this.id.variable.isId=!0);}parseNode(e){null!==e.id&&(this.id=new this.context.nodeConstructors.Identifier(e.id,this,this.scope.parent)),super.parseNode(e);}}const Zs=/\s/;class ea extends js{include(e){super.include(e),e&&this.context.includeVariable(this.variable);}initialise(){const e=this.declaration;this.declarationName=e.id&&e.id.name||this.declaration.name,this.variable=this.scope.addExportDefaultDeclaration(this.declarationName||this.context.getModuleName(),this,this.context),this.context.addExport(this);}render(e,t,{start:n,end:i}=Y){const r=function(e,t=0){for(t=le(e,"default",t)+7;Zs.test(e[t]);)t++;return t}(e.original,this.start);if(this.declaration instanceof Js)this.renderNamedDeclaration(e,r,"function",null===this.declaration.id,t);else if(this.declaration instanceof Us)this.renderNamedDeclaration(e,r,"class",null===this.declaration.id,t);else{if(this.variable.getOriginalVariable()!==this.variable)return void("system"===t.format&&this.variable.exportName?e.overwrite(n,i,`exports('${this.variable.exportName}', ${this.variable.getName()});`):he(this,e,n,i));if(!this.variable.included)return e.remove(this.start,r),this.declaration.render(e,t,{isCalleeOfRenderedParent:!1,renderedParentType:Z}),void(";"!==e.original[this.end-1]&&e.appendLeft(this.end,";"));this.renderVariableDeclaration(e,r,t);}this.declaration.render(e,t);}renderNamedDeclaration(e,t,n,i,r){const s=this.variable.getName();e.remove(this.start,t),i&&e.appendLeft(function(e,t,n=0){const i=le(e,t,n)+t.length;e=e.slice(i,le(e,"{",i));const r=le(e,"*");return -1===r?i:i+r+1}(e.original,n,t),` ${s}`),"system"===r.format&&this.declaration instanceof Us&&this.variable.exportName&&e.appendLeft(this.end,` exports('${this.variable.exportName}', ${s});`);}renderVariableDeclaration(e,t,n){const i="system"===n.format&&this.variable.exportName?`exports('${this.variable.exportName}', `:"";e.overwrite(this.start,t,`${n.varOrConst} ${this.variable.getName()} = ${i}`);const r=59===e.original.charCodeAt(this.end-1);i?e.appendRight(r?this.end-1:this.end,")"+(r?"":";")):r||e.appendLeft(this.end,";");}}ea.prototype.needsBoundaries=!0;class ta extends _t{constructor(e,t,n){super(e,t,t.declaration,n),this.hasId=!1,this.originalId=null,this.originalVariable=null;const i=t.declaration;(i instanceof Js||i instanceof Us)&&i.id?(this.hasId=!0,this.originalId=i.id):i instanceof Ys&&(this.originalId=i);}addReference(e){this.hasId||(this.name=e.name);}getAssignedVariableName(){return this.originalId&&this.originalId.name||null}getBaseVariableName(){const e=this.getOriginalVariable();return e===this?super.getBaseVariableName():e.getBaseVariableName()}getName(){const e=this.getOriginalVariable();return e===this?super.getName():e.getName()}getOriginalVariable(){if(null===this.originalVariable)if(!this.originalId||!this.hasId&&this.originalId.variable.isReassigned)this.originalVariable=this;else{const e=this.originalId.variable;this.originalVariable=e instanceof ta?e.getOriginalVariable():e;}return this.originalVariable}setRenderNames(e,t){const n=this.getOriginalVariable();n===this?super.setRenderNames(e,t):n.setRenderNames(e,t);}setSafeName(e){const t=this.getOriginalVariable();t===this?super.setSafeName(e):t.setSafeName(e);}}const na="_missingExportShim",ia="_interopDefault",ra="_interopNamespace";class sa extends Ze{constructor(e){super(na),this.module=e;}}const aa=["Array.isArray","Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape","Object","Object.create","Object.getNotifier","Object.getOwn","Object.getOwnPropertyDescriptor","Object.getOwnPropertyNames","Object.getOwnPropertySymbols","Object.getPrototypeOf","Object.is","Object.isExtensible","Object.isFrozen","Object.isSealed","Object.keys","Boolean","Number","Number.isFinite","Number.isInteger","Number.isNaN","Number.isSafeInteger","Number.parseFloat","Number.parseInt","Symbol","Symbol.for","Symbol.keyFor","Math.abs","Math.acos","Math.acosh","Math.asin","Math.asinh","Math.atan","Math.atan2","Math.atanh","Math.cbrt","Math.ceil","Math.clz32","Math.cos","Math.cosh","Math.exp","Math.expm1","Math.floor","Math.fround","Math.hypot","Math.imul","Math.log","Math.log10","Math.log1p","Math.log2","Math.max","Math.min","Math.pow","Math.random","Math.round","Math.sign","Math.sin","Math.sinh","Math.sqrt","Math.tan","Math.tanh","Math.trunc","Date","Date.UTC","Date.now","Date.parse","String","String.fromCharCode","String.fromCodePoint","String.raw","RegExp","Map","Set","WeakMap","WeakSet","ArrayBuffer","ArrayBuffer.isView","DataView","Promise.all","Promise.race","Promise.resolve","Intl.Collator","Intl.Collator.supportedLocalesOf","Intl.DateTimeFormat","Intl.DateTimeFormat.supportedLocalesOf","Intl.NumberFormat","Intl.NumberFormat.supportedLocalesOf"],oa="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");for(const e of oa)aa.push(e,`${e}.from`,`${e}.of`);const ha="Int8x16 Int16x8 Int32x4 Float32x4 Float64x2".split(" "),ua="abs add and bool check div equal extractLane fromFloat32x4 fromFloat32x4Bits fromFloat64x2 fromFloat64x2Bits fromInt16x8Bits fromInt32x4 fromInt32x4Bits fromInt8x16Bits greaterThan greaterThanOrEqual lessThan lessThanOrEqual load max maxNum min minNum mul neg not notEqual or reciprocalApproximation reciprocalSqrtApproximation replaceLane select selectBits shiftLeftByScalar shiftRightArithmeticByScalar shiftRightLogicalByScalar shuffle splat sqrt store sub swizzle xor".split(" ");for(const e of ha){const t=`SIMD.${e}`;aa.push(t);for(const e of ua)aa.push(`${t}.${e}`);}var ca=new Set(aa);class la extends Ze{hasEffectsWhenAccessedAtPath(e){return e.length>0&&!this.isPureFunctionMember(e)&&!("Reflect"===this.name&&1===e.length)}hasEffectsWhenCalledAtPath(e){return !ca.has([this.name,...e].join("."))}isPureFunctionMember(e){return ca.has([this.name,...e].join("."))||e.length>=1&&ca.has([this.name,...e.slice(0,-1)].join("."))||e.length>=2&&ca.has([this.name,...e.slice(0,-2)].join("."))&&"prototype"===e[e.length-2]}}class pa extends Ze{constructor(e){super(e.getModuleName()),this.memberVariables=Object.create(null),this.containsExternalNamespace=!1,this.referencedEarly=!1,this.references=[],this.context=e,this.module=e.module;}addReference(e){this.references.push(e),this.name=e.name;}deoptimizePath(){for(const e in this.memberVariables)this.memberVariables[e].deoptimizePath(Se);}include(){if(!this.included){this.containsExternalNamespace&&this.context.error({code:"NAMESPACE_CANNOT_CONTAIN_EXTERNAL",id:this.module.id,message:`Cannot create an explicit namespace object for module "${this.context.getModuleName()}" because it contains a reexported external namespace`},void 0),this.included=!0;for(const e of this.references)if(e.context.getModuleExecIndex()<=this.context.getModuleExecIndex()){this.referencedEarly=!0;break}if(this.context.preserveModules)for(const e of Object.keys(this.memberVariables))this.memberVariables[e].include();else for(const e of Object.keys(this.memberVariables))this.context.includeVariable(this.memberVariables[e]);}}initialise(){for(const e of this.context.getExports().concat(this.context.getReexports()))"*"===e[0]&&e.length>1&&(this.containsExternalNamespace=!0),this.memberVariables[e]=this.context.traceExport(e);}renderBlock(e){const t=e.compact?"":" ",n=e.compact?"":"\n",i=e.indent,r=Object.keys(this.memberVariables).map(n=>{const r=this.memberVariables[n];if(this.referencedEarly||r.isReassigned)return `${i}get ${n}${t}()${t}{${t}return ${r.getName()}${e.compact?"":";"}${t}}`;const s=xe[n]?`'${n}'`:n;return `${i}${s}: ${r.getName()}`}),s=this.getName(),a=e.freeze?"/*#__PURE__*/Object.freeze":"";let o=`${e.varOrConst} ${s} = ${e.namespaceToStringTag?`{${n}${r.join(`,${n}`)}${n}};`:`${a}({${n}${r.join(`,${n}`)}${n}});`}`;return e.namespaceToStringTag&&(o+=`${n}if${t}(typeof Symbol${t}!==${t}'undefined'${t}&&${t}Symbol.toStringTag)${n}`,o+=`${i}Object.defineProperty(${s},${t}Symbol.toStringTag,${t}{${t}value:${t}'Module'${t}});${n}`,o+=`else${n||" "}`,o+=`${i}Object.defineProperty(${s},${t}'toString',${t}{${t}value:${t}function${t}()${t}{${t}return${t}'[object Module]'${e.compact?";":""}${t}}${t}});${n}`,o+=`${a}(${s});`),"system"===e.format&&this.exportName&&(o+=`${n}exports('${this.exportName}',${t}${s});`),o}renderFirst(){return this.referencedEarly}}pa.prototype.isNamespace=!0;const da="Object.defineProperty(exports, '__esModule', { value: true });",fa="Object.defineProperty(exports,'__esModule',{value:true});";function ma(e,t,n,i,r,s,a="return "){const o=r?"":" ",h=r?"":"\n";if(!n){let n;if(e.length>0)n=e[0].local;else for(const e of t)if(e.reexports){const t=e.reexports[0];n=e.namedExportsMode&&"*"!==t.imported&&"default"!==t.imported?`${e.name}.${t.imported}`:e.name;}return `${a}${n};`}let u="";t.forEach(({name:e,reexports:t})=>{t&&n&&t.forEach(t=>{"*"===t.reexported&&(u&&(u+=h),t.needsLiveBinding?u+=`Object.keys(${e}).forEach(function${o}(k)${o}{${h}`+`${s}if${o}(k${o}!==${o}'default')${o}Object.defineProperty(exports,${o}k,${o}{${h}`+`${s}${s}enumerable:${o}true,${h}`+`${s}${s}get:${o}function${o}()${o}{${h}`+`${s}${s}${s}return ${e}[k];${h}`+`${s}${s}}${h}${s}});${h}});`:u+=`Object.keys(${e}).forEach(function${o}(k)${o}{${h}`+`${s}if${o}(k${o}!==${o}'default')${o}exports[k]${o}=${o}${e}[k];${h}});`);});});for(const{name:e,imports:r,reexports:a,isChunk:c,namedExportsMode:l,exportsNames:p}of t)if(a&&n)for(const t of a)if("default"!==t.imported||c)if("*"!==t.imported){u&&(u+=h);const n="default"!==t.imported||l?`${e}.${t.imported}`:e;u+=t.needsLiveBinding?`Object.defineProperty(exports,${o}'${t.reexported}',${o}{${h}`+`${s}enumerable:${o}true,${h}`+`${s}get:${o}function${o}()${o}{${h}`+`${s}${s}return ${n};${h}${s}}${h}});`:`exports.${t.reexported}${o}=${o}${n};`;}else"*"!==t.reexported&&(u&&(u+=h),u+=`exports.${t.reexported}${o}=${o}${e};`);else u&&(u+=h),p&&(a.some(e=>"default"===e.imported?"default"===e.reexported:"*"!==e.imported)||r&&r.some(e=>"default"!==e.imported))?u+=`exports.${t.reexported}${o}=${o}${e}${!1!==i?"__default":".default"};`:u+=`exports.${t.reexported}${o}=${o}${e};`;for(const t of e){const e=`exports.${t.exported}`,n=t.local;e!==n&&(u&&(u+=h),u+=`${e}${o}=${o}${n};`);}return u}function ga(e,t,n){const i=t.compact?"":" ";return e.map(({name:e,exportsNames:r,exportsDefault:s,namedExportsMode:a})=>a&&s&&!1!==t.interop?r?`${n} ${e}__default${i}=${i}'default'${i}in ${e}${i}?`+`${i}${e}['default']${i}:${i}${e};`:`${e}${i}=${i}${e}${i}&&${i}${e}.hasOwnProperty('default')${i}?`+`${i}${e}['default']${i}:${i}${e};`:null).filter(Boolean).join(t.compact?"":"\n")}function ya(e,t,n,i){return `function ${ra}(e)${e}{${t}`+`${n}if${e}(e${e}&&${e}e.__esModule)${e}{${e}return e;${e}}${e}else${e}{${t}`+`${n}${n}var n${e}=${e}{};${t}`+`${n}${n}if${e}(e)${e}{${t}`+`${n}${n}${n}Object.keys(e).forEach(function${e}(k)${e}{${t}`+(i?function(e,t,n,i){return `${i}var d${e}=${e}Object.getOwnPropertyDescriptor(e,${e}k);${t}`+`${i}Object.defineProperty(n,${e}k,${e}d.get${e}?${e}d${e}:${e}{${t}`+`${i}${n}enumerable:${e}true,${t}`+`${i}${n}get:${e}function${e}()${e}{${t}`+`${i}${n}${n}return e[k];${t}`+`${i}${n}}${t}`+`${i}});${t}`}:function(e,t,n,i){return `${i}n[k]${e}=e${e}[k];${t}`})(e,t,n,n+n+n+n)+`${n}${n}${n}});${t}`+`${n}${n}}${t}`+`${n}${n}n['default']${e}=${e}e;${t}`+`${n}${n}return n;${t}`+`${n}}${t}`+`}${t}${t}`}const va={assert:!0,buffer:!0,console:!0,constants:!0,domain:!0,events:!0,http:!0,https:!0,os:!0,path:!0,process:!0,punycode:!0,querystring:!0,stream:!0,string_decoder:!0,timers:!0,tty:!0,url:!0,util:!0,vm:!0,zlib:!0};function xa(e,t){const n=t.map(({id:e})=>e).filter(e=>e in va);n.length&&e({code:"MISSING_NODE_BUILTINS",message:`Creating a browser bundle that depends on Node.js built-in ${1===n.length?`module ('${n[0]}')`:`modules (${n.slice(0,-1).map(e=>`'${e}'`).join(", ")} and '${n.slice(-1)}')`}. You might need to include https://www.npmjs.com/package/rollup-plugin-node-builtins`,modules:n});}function _a(e){return e.replace(/^\t+/,e=>e.split("\t").join("  "))}function Ea(e,t,n){let i=e.split("\n");const r=Math.max(0,t-3);let s=Math.min(t+2,i.length);for(i=i.slice(r,s);!/\S/.test(i[i.length-1]);)i.pop(),s-=1;const a=String(s).length;return i.map((e,i)=>{const s=r+i+1===t;let o=String(i+r+1);for(;o.length<a;)o=` ${o}`;if(s){const t=function(e){let t="";for(;e--;)t+=" ";return t}(a+2+_a(e.slice(0,n)).length)+"^";return `${o}: ${_a(e)}\n${t}`}return `${o}: ${_a(e)}`}).join("\n")}function ba(e){return e.replace(/[\0?*]/g,"_")}function Aa(e){const t=pt(e);return t.substr(0,t.length-ft(e).length)}function Sa(e){return "undefined"!=typeof process&&ut(e)?mt(process.cwd(),e):e}function wa(e){return "/"!==e[0]&&!("."===e[0]&&("/"===e[1]||"."===e[1]))&&ba(e)===e}function Ia(e,t){throw e instanceof Error||(e=Object.assign(new Error(e.message),e)),t&&Object.assign(e,t),e}function Ca(e,t,n,i){if("object"==typeof t){const{line:n,column:r}=t;e.loc={file:i,line:n,column:r};}else{e.pos=t;const{line:r,column:s}=At(n,t,{offsetLine:1});e.loc={file:i,line:r,column:s};}if(void 0===e.frame){const{line:t,column:i}=e.loc;e.frame=Ea(n,t,i);}}var Pa;function ka(e){return Object.assign({code:Pa.DEPRECATED_FEATURE},"string"==typeof e?{message:e}:e)}function Na(e,t,n){return {code:Pa.NAMESPACE_CONFLICT,message:`Conflicting namespaces: ${Sa(t.id)} re-exports '${e}' from both ${Sa(t.exportsAll[e])} and ${Sa(n.exportsAll[e])} (will be ignored)`,name:e,reexporter:t.id,sources:[t.exportsAll[e],n.exportsAll[e]]}}function $a(e){return {code:Pa.VALIDATION_ERROR,message:e}}!function(e){e.ASSET_NOT_FINALISED="ASSET_NOT_FINALISED",e.ASSET_NOT_FOUND="ASSET_NOT_FOUND",e.ASSET_SOURCE_ALREADY_SET="ASSET_SOURCE_ALREADY_SET",e.ASSET_SOURCE_MISSING="ASSET_SOURCE_MISSING",e.BAD_LOADER="BAD_LOADER",e.CANNOT_EMIT_FROM_OPTIONS_HOOK="CANNOT_EMIT_FROM_OPTIONS_HOOK",e.CHUNK_NOT_GENERATED="CHUNK_NOT_GENERATED",e.DEPRECATED_FEATURE="DEPRECATED_FEATURE",e.FILE_NOT_FOUND="FILE_NOT_FOUND",e.FILE_NAME_CONFLICT="FILE_NAME_CONFLICT",e.INVALID_CHUNK="INVALID_CHUNK",e.INVALID_EXTERNAL_ID="INVALID_EXTERNAL_ID",e.INVALID_OPTION="INVALID_OPTION",e.INVALID_PLUGIN_HOOK="INVALID_PLUGIN_HOOK",e.INVALID_ROLLUP_PHASE="INVALID_ROLLUP_PHASE",e.NAMESPACE_CONFLICT="NAMESPACE_CONFLICT",e.PLUGIN_ERROR="PLUGIN_ERROR",e.UNRESOLVED_ENTRY="UNRESOLVED_ENTRY",e.UNRESOLVED_IMPORT="UNRESOLVED_IMPORT",e.VALIDATION_ERROR="VALIDATION_ERROR";}(Pa||(Pa={}));const Ra=/^[a-zA-Z$_][a-zA-Z0-9$_]*$/;function Oa(e){return Ra.test(e)?`.${e}`:`['${e}']`}function Ma(e){return e.split(".").map(Oa).join("")}function Da(e,t,n,i,r){const s=i?"":" ",a=e.split(".");n&&(a[0]=("function"==typeof n?n(a[0]):n[a[0]])||a[0]);const o=a.pop();let h=t,u=a.map(e=>(h+=Oa(e),`${h}${s}=${s}${h}${s}||${s}{}`)).concat(`${h}${Oa(o)}`).join(`,${s}`).concat(`${s}=${s}${r}`);return a.length>0&&(u=`(${u})`),u}function Ta(e){let t=e.length;for(;t--;){const n=e[t];if(n.exportsDefault||n.exportsNames)return e.slice(0,t+1)}return []}const La=e=>`this${Ma(e)}`;const Va=(e,t,n,i,r)=>e?`${r}${i}${t} _starExcludes${n}=${n}{${n}${Array.from(e).join(`:${n}1,${n}`)}${e.size?`:${n}1`:""}${n}};`:"",Ba=(e,t,n,i)=>e.length?`${i}${n}var ${e.join(`,${t}`)};`:"";function za(e,t,n,i){return 0===e.length?"":1===e.length?`${n}${n}${n}exports('${e[0].name}',${t}${e[0].value});${i}${i}`:`${n}${n}${n}exports({${i}`+e.map(({name:e,value:i})=>`${n}${n}${n}${n}${e}:${t}${i}`).join(`,${i}`)+`${i}${n}${n}${n}});${i}${i}`}const ja=(e,t,n,i)=>za(e.filter(e=>e.hoisted||e.uninitialized).map(e=>({name:e.exported,value:e.uninitialized?"void 0":e.local})),t,n,i),Wa=(e,t,n,i)=>za(e.filter(e=>e.local===na).map(e=>({name:e.exported,value:na})),t,n,i);function Ua(e,t){return e?`${t}${Ma(e)}`:"null"}var Fa={system:function(e,{accessedGlobals:t,dependencies:n,exports:i,hasExports:r,indentString:s,intro:a,outro:o,usesTopLevelAwait:h,varOrConst:u},c){const l=c.compact?"":"\n",p=c.compact?"":" ",d=n.map(e=>`'${e.id}'`),f=[];let m;const g=[];n.forEach(({imports:e,reexports:t})=>{const r=[];if(e&&e.forEach(e=>{f.push(e.local),"*"===e.imported?r.push(`${e.local}${p}=${p}module;`):r.push(`${e.local}${p}=${p}module.${e.imported};`);}),t){let e=!1;t.length>1||1===t.length&&("*"===t[0].reexported||"*"===t[0].imported)?(t.forEach(t=>{"*"===t.reexported&&(m||(m=function({dependencies:e,exports:t}){const n=new Set(t.map(e=>e.exported));return n.has("default")||n.add("default"),e.forEach(({reexports:e})=>{e&&e.forEach(e=>{"*"===e.imported||n.has(e.reexported)||n.add(e.reexported);});}),n}({dependencies:n,exports:i})),e||(r.push(`${u} _setter${p}=${p}{};`),e=!0),r.push(`for${p}(var _$p${p}in${p}module)${p}{`),r.push(`${s}if${p}(!_starExcludes[_$p])${p}_setter[_$p]${p}=${p}module[_$p];`),r.push("}"));}),t.forEach(e=>{"*"===e.imported&&"*"!==e.reexported&&r.push(`exports('${e.reexported}',${p}module);`);}),t.forEach(t=>{"*"!==t.reexported&&"*"!==t.imported&&(e||(r.push(`${u} _setter${p}=${p}{};`),e=!0),r.push(`_setter.${t.reexported}${p}=${p}module.${t.imported};`));}),e&&r.push("exports(_setter);")):t.forEach(e=>{r.push(`exports('${e.reexported}',${p}module.${e.imported});`);});}g.push(r.join(`${l}${s}${s}${s}`));});const y=c.name?`'${c.name}',${p}`:"",v=t.has("module")?`exports,${p}module`:r?"exports":"";let x=`System.register(${y}[`+d.join(`,${p}`)+`],${p}function${p}(${v})${p}{${l}${s}'use strict';`+Va(m,u,p,s,l)+Ba(f,p,s,l)+`${l}${s}return${p}{${g.length?`${l}${s}${s}setters:${p}[${g.map(e=>e?`function${p}(module)${p}{${l}${s}${s}${s}${e}${l}${s}${s}}`:`function${p}()${p}{}`).join(`,${p}`)}],`:""}${l}`;x+=`${s}${s}execute:${p}${h?`async${p}`:""}function${p}()${p}{${l}${l}`+ja(i,p,s,l);const _=`${l}${l}`+Wa(i,p,s,l)+`${s}${s}}${l}${s}}${c.compact?"":";"}${l}});`;return a&&e.prepend(a),o&&e.append(o),e.indent(`${s}${s}${s}`).append(_).prepend(x)},amd:function(e,{accessedGlobals:t,dependencies:n,exports:i,hasExports:r,indentString:s,intro:a,isEntryModuleFacade:o,namedExportsMode:h,outro:u,varOrConst:c,warn:l},p){xa(l,n);const d=n.map(e=>`'${function(e){return "."===e[0]&&e.endsWith(".js")?e.slice(0,-3):e}(e.id)}'`),f=n.map(e=>e.name),m=p.compact?"":"\n",g=p.compact?"":" ";h&&r&&(f.unshift("exports"),d.unshift("'exports'")),t.has("require")&&(f.unshift("require"),d.unshift("'require'")),t.has("module")&&(f.unshift("module"),d.unshift("'module'"));const y=p.amd||{},v=(y.id?`'${y.id}',${g}`:"")+(d.length?`[${d.join(`,${g}`)}],${g}`:""),x=!1!==p.strict?`${g}'use strict';`:"",_=`${y.define||"define"}(${v}function${g}(${f.join(`,${g}`)})${g}{${x}${m}${m}`,E=ga(n,p,c);E&&e.prepend(E+m+m),t.has(ra)&&e.prepend(ya(g,m,s,!1!==p.externalLiveBindings)),a&&e.prepend(a);const b=ma(i,n,h,p.interop,p.compact,s);return b&&e.append(m+m+b),h&&r&&o&&p.esModule&&e.append(`${m}${m}${p.compact?fa:da}`),u&&e.append(u),e.indent(s).append(m+m+"});").prepend(_)},cjs:function(e,{accessedGlobals:t,dependencies:n,exports:i,hasExports:r,indentString:s,intro:a,isEntryModuleFacade:o,namedExportsMode:h,outro:u,varOrConst:c},l){const p=l.compact?"":"\n",d=l.compact?"":" ";a=(!1===l.strict?a:`'use strict';${p}${p}${a}`)+(h&&r&&o&&l.esModule?`${l.compact?fa:da}${p}${p}`:"");let f=!1;const m=!1!==l.interop;let g,y=!1;g="";for(const{id:e,namedExportsMode:t,isChunk:i,name:r,reexports:s,imports:a,exportsNames:o,exportsDefault:h}of n)s||a?(g+=l.compact&&y?",":`${g?`;${p}`:""}${c} `,y=!0,m&&!i&&h&&t?(f=!0,g+=o?`${r}${d}=${d}require('${e}')${l.compact?",":`;\n${c} `}${r}__default${d}=${d}${ia}(${r})`:`${r}${d}=${d}${ia}(require('${e}'))`):g+=`${r}${d}=${d}require('${e}')`):(g&&(g+=!l.compact||y?`;${p}`:","),y=!1,g+=`require('${e}')`);if(g&&(g+=";"),f){const e=l.compact?"e":"ex";a+=`function ${ia}${d}(${e})${d}{${d}return${d}`+`(${e}${d}&&${d}(typeof ${e}${d}===${d}'object')${d}&&${d}'default'${d}in ${e})${d}`+`?${d}${e}['default']${d}:${d}${e}${l.compact?"":"; "}}${p}${p}`;}t.has(ra)&&(a+=ya(d,p,s,!1!==l.externalLiveBindings)),g&&(a+=g+p+p);const v=ma(i,n,h,l.interop,l.compact,s,`module.exports${d}=${d}`);return e.prepend(a),v&&e.append(p+p+v),u&&e.append(u),e},es:function(e,{intro:t,outro:n,dependencies:i,exports:r},s){const a=s.compact?"":" ",o=s.compact?"":"\n",h=i.map(({id:e,reexports:t,imports:n,name:i})=>{if(!t&&!n)return `import${a}'${e}';`;let r="";if(n){const t=n.find(e=>"default"===e.imported),i=n.find(e=>"*"===e.imported);i&&(r+=`import${a}*${a}as ${i.local} from${a}'${e}';`,n.length>1&&(r+=o)),t&&1===n.length?r+=`import ${t.local} from${a}'${e}';`:(!i||n.length>1)&&(r+=`import ${t?`${t.local},${a}`:""}{${a}${n.filter(e=>e!==t&&e!==i).map(e=>e.imported===e.local?e.imported:`${e.imported} as ${e.local}`).join(`,${a}`)}${a}}${a}from${a}'${e}';`);}if(t){n&&(r+=o);const s=t.find(e=>"*"===e.reexported),h=t.find(e=>"*"===e.imported&&"*"!==e.reexported);if(s){if(r+=`export${a}*${a}from${a}'${e}';`,1===t.length)return r;r+=o;}if(h){if(n&&n.some(e=>"*"===e.imported&&e.local===i)||(r+=`import${a}*${a}as ${i} from${a}'${e}';${o}`),r+=`export${a}{${a}${i===h.reexported?i:`${i} as ${h.reexported}`} };`,t.length===(s?2:1))return r;r+=o;}r+=`export${a}{${a}${t.filter(e=>e!==s&&e!==h).map(e=>e.imported===e.reexported?e.imported:`${e.imported} as ${e.reexported}`).join(`,${a}`)}${a}}${a}from${a}'${e}';`;}return r}).join(o);h&&(t+=h+o+o),t&&e.prepend(t);const u=[],c=[];return r.forEach(e=>{"default"===e.exported?u.push(`export default ${e.local};`):c.push(e.exported===e.local?e.local:`${e.local} as ${e.exported}`);}),c.length&&u.push(`export${a}{${a}${c.join(`,${a}`)}${a}};`),u.length&&e.append(o+o+u.join(o).trim()),n&&e.append(n),e.trim()},iife:function(e,{dependencies:t,exports:n,hasExports:i,indentString:r,intro:s,namedExportsMode:a,outro:o,varOrConst:h,warn:u},c){const l=c.compact?"":" ",p=c.compact?"":"\n",{extend:d,name:f}=c,m=f&&-1!==f.indexOf("."),g=!d&&!m;var y;f&&g&&(st(y=f)||it[y]||rt.test(y))&&Ia({code:"ILLEGAL_IDENTIFIER_AS_NAME",message:`Given name (${f}) is not legal JS identifier. If you need this you can try --extend option`}),xa(u,t);const v=Ta(t),x=v.map(e=>e.globalName||"null"),_=v.map(e=>e.name);i&&!f&&Ia({code:"INVALID_OPTION",message:'You must supply "output.name" for IIFE bundles.'}),a&&i&&(d?(x.unshift(`${La(f)}${l}=${l}${La(f)}${l}||${l}{}`),_.unshift("exports")):(x.unshift("{}"),_.unshift("exports")));const E=!1!==c.strict?`${r}'use strict';${p}${p}`:"";let b=`(function${l}(${_.join(`,${l}`)})${l}{${p}${E}`;!i||d&&a||(b=(g?`${h} ${f}`:La(f))+`${l}=${l}${b}`),m&&i&&(b=function(e,t,n,i){const r=e.split(".");n&&(r[0]=("function"==typeof n?n(r[0]):n[r[0]])||r[0]);const s=i?"":" ";r.pop();let a=t;return r.map(e=>(a+=Oa(e),`${a}${s}=${s}${a}${s}||${s}{}${i?"":";"}`)).join(i?",":"\n")+(i&&r.length?";":"\n")}(f,"this",c.globals,c.compact)+b);let A=`${p}${p}}(${x.join(`,${l}`)}));`;!d&&a&&i&&(A=`${p}${p}${r}return exports;${A}`);const S=ga(t,c,h);S&&e.prepend(S+p+p),s&&e.prepend(s);const w=ma(n,t,a,c.interop,c.compact,r);return w&&e.append(p+p+w),o&&e.append(o),e.indent(r).prepend(b).append(A)},umd:function(e,{dependencies:t,exports:n,hasExports:i,indentString:r,intro:s,namedExportsMode:a,outro:o,varOrConst:h,warn:u},c){const l=c.compact?"":" ",p=c.compact?"":"\n",d=c.compact?"f":"factory",f=c.compact?"g":"global";i&&!c.name&&Ia({code:"INVALID_OPTION",message:'You must supply "output.name" for UMD bundles.'}),xa(u,t);const m=t.map(e=>`'${e.id}'`),g=t.map(e=>`require('${e.id}')`),y=Ta(t),v=y.map(e=>Ua(e.globalName,f)),x=y.map(e=>e.name);a&&(i||!0===c.noConflict)&&(m.unshift("'exports'"),g.unshift("exports"),v.unshift(Da(c.name,f,c.globals,c.compact,`${c.extend?`${Ua(c.name,f)}${l}||${l}`:""}{}`)),x.unshift("exports"));const _=c.amd||{},E=(_.id?`'${_.id}',${l}`:"")+(m.length?`[${m.join(`,${l}`)}],${l}`:""),b=_.define||"define",A=!a&&i?`module.exports${l}=${l}`:"",S=!1!==c.strict?`${l}'use strict';${p}`:"";let w;if(!0===c.noConflict){const e=c.compact?"e":"exports";let t;if(!a&&i)t=`var ${e}${l}=${l}${Da(c.name,f,c.globals,c.compact,`${d}(${v.join(`,${l}`)})`)};`;else if(a){t=`var ${e}${l}=${l}${v.shift()};${p}`+`${r}${r}${d}(${[e].concat(v).join(`,${l}`)});`;}w=`(function${l}()${l}{${p}`+`${r}${r}var current${l}=${l}${function(e,t,n){const i=e.split(".");let r=t;return i.map(e=>(r+=Oa(e),r)).join(`${n}&&${n}`)}(c.name,f,l)};${p}`+`${r}${r}${t}${p}`+`${r}${r}${e}.noConflict${l}=${l}function${l}()${l}{${l}`+`${Ua(c.name,f)}${l}=${l}current;${l}return ${e}${c.compact?"":"; "}};${p}`+`${r}}())`;}else w=`${d}(${v.join(`,${l}`)})`,!a&&i&&(w=Da(c.name,f,c.globals,c.compact,w));const I=i||!0===c.noConflict&&a||v.length>0,C=I?`this,${l}`:"",P=I?`(${f}${l}=${l}${f}${l}||${l}self,${l}`:"",k=I?")":"",N=`(function${l}(${I?`${f},${l}`:""}${d})${l}{${p}`+(I?`${r}typeof exports${l}===${l}'object'${l}&&${l}typeof module${l}!==${l}'undefined'${l}?`+`${l}${A}${d}(${g.join(`,${l}`)})${l}:${p}`:"")+`${r}typeof ${b}${l}===${l}'function'${l}&&${l}${b}.amd${l}?${l}${b}(${E}${d})${l}:${p}`+`${r}${P}${w}${k};${p}`+`}(${C}function${l}(${x.join(", ")})${l}{${S}${p}`,$=p+p+"}));",R=ga(t,c,h);R&&e.prepend(R+p+p),s&&e.prepend(s);const O=ma(n,t,a,c.interop,c.compact,r);return O&&e.append(p+p+O),a&&i&&c.esModule&&e.append(p+p+(c.compact?fa:da)),o&&e.append(o),e.trim().indent(r).append($).prepend(N)}};const qa={ArrayPattern(e,t){for(const n of t.elements)n&&qa[n.type](e,n);},AssignmentPattern(e,t){qa[t.left.type](e,t.left);},Identifier(e,t){e.push(t.name);},MemberExpression(){},ObjectPattern(e,t){for(const n of t.properties)"RestElement"===n.type?qa.RestElement(e,n):qa[n.value.type](e,n.value);},RestElement(e,t){qa[t.argument.type](e,t.argument);}},Ha=function(e){const t=[];return qa[e.type](t,e),t};class Ga extends bt{addDeclaration(e,t,n=null,i=!1){return i?this.parent.addDeclaration(e,t,Ce,!0):super.addDeclaration(e,t,n,!1)}}class Ka extends js{addImplicitReturnExpressionToScope(){const e=this.body[this.body.length-1];e&&e.type===ae||this.scope.addReturnExpression(Ce);}createScope(e){this.scope=this.parent.preventChildBlockScope?e:new Ga(e);}hasEffects(e){for(const t of this.body)if(t.hasEffects(e))return !0;return !1}include(e){this.included=!0;for(const t of this.body)(e||t.shouldBeIncluded())&&t.include(e);}render(e,t){this.body.length?de(this.body,e,this.start+1,this.end-1,t):super.render(e,t);}}class Ya extends js{createScope(e){this.scope=new Gs(e,this.context);}deoptimizePath(e){1===e.length&&e[0]===be&&this.scope.getReturnExpression().deoptimizePath(Se);}getReturnExpressionWhenCalledAtPath(e){return 0===e.length?this.scope.getReturnExpression():Ce}hasEffects(e){return !1}hasEffectsWhenAccessedAtPath(e,t){return e.length>1}hasEffectsWhenAssignedAtPath(e,t){return e.length>1}hasEffectsWhenCalledAtPath(e,t,n){if(e.length>0)return !0;for(const e of this.params)if(e.hasEffects(n))return !0;return this.body.hasEffects(n)}include(e){this.included=!0,this.body.include(e);for(const t of this.params)t instanceof Ys||t.include(e);}includeCallArguments(e){this.scope.includeCallArguments(e);}initialise(){this.scope.addParameterVariables(this.params.map(e=>e.declare("parameter",Ce)),this.params[this.params.length-1]instanceof Xs),this.body instanceof Ka?this.body.addImplicitReturnExpressionToScope():this.scope.addReturnExpression(this.body);}parseNode(e){e.body.type===X&&(this.body=new this.context.nodeConstructors.BlockStatement(e.body,this,this.scope.hoistedBodyVarScope)),super.parseNode(e);}}function Xa(e){return 1===e.length?`exports('${e[0].safeExportName||e[0].exportName}', ${e[0].getName()});`:`exports({${e.map(e=>`${e.safeExportName||e.exportName}: ${e.getName()}`).join(", ")}});`}Ya.prototype.preventChildBlockScope=!0;const Qa={};class Ja{constructor(e=Ds.Map()){this.entityPaths=e;}isTracked(e,t){return this.entityPaths.getIn([e,...t,Qa])}track(e,t){return new Ja(this.entityPaths.setIn([e,...t,Qa],!0))}}const Za=new Ja;class eo extends js{initialise(){this.directive&&"use strict"!==this.directive&&this.parent.type===re&&this.context.warn({code:"MODULE_LEVEL_DIRECTIVE",message:`Module level directives cause errors when bundled, '${this.directive}' was ignored.`},this.start);}render(e,t){super.render(e,t),this.included&&this.insertSemicolon(e);}shouldBeIncluded(){return this.directive&&"use strict"!==this.directive?this.parent.type!==re:super.shouldBeIncluded()}}const to={"!=":(e,t)=>e!=t,"!==":(e,t)=>e!==t,"%":(e,t)=>e%t,"&":(e,t)=>e&t,"*":(e,t)=>e*t,"**":(e,t)=>Math.pow(e,t),"+":(e,t)=>e+t,"-":(e,t)=>e-t,"/":(e,t)=>e/t,"<":(e,t)=>e<t,"<<":(e,t)=>e<<t,"<=":(e,t)=>e<=t,"==":(e,t)=>e==t,"===":(e,t)=>e===t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,">>":(e,t)=>e>>t,">>>":(e,t)=>e>>>t,"^":(e,t)=>e^t,in:()=>Ie,instanceof:()=>Ie,"|":(e,t)=>e|t};class no extends Hs{addDeclaration(e,t,n=null,i=!1){return i?this.parent.addDeclaration(e,t,n,!0):super.addDeclaration(e,t,n,!1)}}class io extends js{createScope(e){this.scope=new no(e,this.context);}initialise(){this.param&&this.param.declare("parameter",Ce);}parseNode(e){this.body=new this.context.nodeConstructors.BlockStatement(e.body,this,this.scope),super.parseNode(e);}}io.prototype.preventChildBlockScope=!0;class ro{constructor(e){this.included=!1,this.expressions=e;}deoptimizePath(e){for(const t of this.expressions)t.deoptimizePath(e);}getLiteralValueAtPath(){return Ie}getReturnExpressionWhenCalledAtPath(e,t,n){return new ro(this.expressions.map(i=>i.getReturnExpressionWhenCalledAtPath(e,t,n)))}hasEffectsWhenAccessedAtPath(e,t){for(const n of this.expressions)if(n.hasEffectsWhenAccessedAtPath(e,t))return !0;return !1}hasEffectsWhenAssignedAtPath(e,t){for(const n of this.expressions)if(n.hasEffectsWhenAssignedAtPath(e,t))return !0;return !1}hasEffectsWhenCalledAtPath(e,t,n){for(const i of this.expressions)if(i.hasEffectsWhenCalledAtPath(e,t,n))return !0;return !1}include(){}includeCallArguments(e){for(const t of this.expressions)t.includeCallArguments(e);}}class so extends js{hasEffects(){return !1}initialise(){this.context.addExport(this);}render(e,t,{start:n,end:i}=Y){e.remove(n,i);}}so.prototype.needsBoundaries=!0;class ao extends js{bind(){null!==this.declaration&&this.declaration.bind();}hasEffects(e){return null!==this.declaration&&this.declaration.hasEffects(e)}initialise(){this.context.addExport(this);}render(e,t,{start:n,end:i}=Y){null===this.declaration?e.remove(n,i):(e.remove(this.start,this.declaration.start),this.declaration.render(e,t,{start:n,end:i}));}}ao.prototype.needsBoundaries=!0;class oo extends js{bind(){}hasEffects(){return !1}initialise(){this.context.addImport(this);}render(e,t,{start:n,end:i}=Y){e.remove(n,i);}}oo.prototype.needsBoundaries=!0;class ho extends js{getLiteralValueAtPath(e){return e.length>0||null===this.value&&110!==this.context.code.charCodeAt(this.start)||"bigint"==typeof this.value||47===this.context.code.charCodeAt(this.start)?Ie:this.value}getReturnExpressionWhenCalledAtPath(e){return 1!==e.length?Ce:Je(this.members,e[0])}hasEffectsWhenAccessedAtPath(e){return null===this.value?e.length>0:e.length>1}hasEffectsWhenAssignedAtPath(e){return e.length>0}hasEffectsWhenCalledAtPath(e,t,n){return 1!==e.length||Qe(this.members,e[0],this.included,t,n)}initialise(){this.members=function(e){switch(typeof e){case"boolean":return Ke;case"number":return Ye;case"string":return Xe;default:return Object.create(null)}}(this.value);}render(e,t){"string"==typeof this.value&&e.indentExclusionRanges.push([this.start+1,this.end-1]);}}function uo(e){return e.computed?function(e){if(e instanceof ho)return String(e.value);return null}(e.property):e.property.name}class co extends js{constructor(){super(...arguments),this.variable=null,this.bound=!1,this.expressionsToBeDeoptimized=[],this.replacement=null;}addExportedVariables(){}bind(){if(this.bound)return;this.bound=!0;const e=function e(t){const n=t.propertyKey,i=t.object;if("string"==typeof n){if(i instanceof Ys)return [{key:i.name,pos:i.start},{key:n,pos:t.property.start}];if(i instanceof co){const r=e(i);return r&&[...r,{key:n,pos:t.property.start}]}}return null}(this),t=e&&this.scope.findVariable(e[0].key);if(t&&t.isNamespace){const n=this.resolveNamespaceVariables(t,e.slice(1));n?"string"==typeof n?this.replacement=n:(n instanceof et&&n.module&&n.module.suggestName(e[0].key),this.variable=n,this.scope.addNamespaceMemberAccess(function(e){let t=e[0].key;for(let n=1;n<e.length;n++)t+="."+e[n].key;return t}(e),n)):super.bind();}else super.bind(),null===this.propertyKey&&this.analysePropertyKey();}deoptimizeCache(){for(const e of this.expressionsToBeDeoptimized)e.deoptimizeCache();}deoptimizePath(e){this.bound||this.bind(),0===e.length&&this.disallowNamespaceReassignment(),this.variable?this.variable.deoptimizePath(e):(null===this.propertyKey&&this.analysePropertyKey(),this.object.deoptimizePath([this.propertyKey,...e]));}getLiteralValueAtPath(e,t,n){return this.bound||this.bind(),null!==this.variable?this.variable.getLiteralValueAtPath(e,t,n):(null===this.propertyKey&&this.analysePropertyKey(),this.expressionsToBeDeoptimized.push(n),this.object.getLiteralValueAtPath([this.propertyKey,...e],t,n))}getReturnExpressionWhenCalledAtPath(e,t,n){return this.bound||this.bind(),null!==this.variable?this.variable.getReturnExpressionWhenCalledAtPath(e,t,n):(null===this.propertyKey&&this.analysePropertyKey(),this.expressionsToBeDeoptimized.push(n),this.object.getReturnExpressionWhenCalledAtPath([this.propertyKey,...e],t,n))}hasEffects(e){return this.property.hasEffects(e)||this.object.hasEffects(e)||this.context.propertyReadSideEffects&&this.object.hasEffectsWhenAccessedAtPath([this.propertyKey],e)}hasEffectsWhenAccessedAtPath(e,t){return 0!==e.length&&(null!==this.variable?this.variable.hasEffectsWhenAccessedAtPath(e,t):this.object.hasEffectsWhenAccessedAtPath([this.propertyKey,...e],t))}hasEffectsWhenAssignedAtPath(e,t){return null!==this.variable?this.variable.hasEffectsWhenAssignedAtPath(e,t):this.object.hasEffectsWhenAssignedAtPath([this.propertyKey,...e],t)}hasEffectsWhenCalledAtPath(e,t,n){return null!==this.variable?this.variable.hasEffectsWhenCalledAtPath(e,t,n):this.object.hasEffectsWhenCalledAtPath([this.propertyKey,...e],t,n)}include(e){this.included||(this.included=!0,null!==this.variable&&this.context.includeVariable(this.variable)),this.object.include(e),this.property.include(e);}includeCallArguments(e){this.variable?this.variable.includeCallArguments(e):super.includeCallArguments(e);}initialise(){this.propertyKey=uo(this);}render(e,t,{renderedParentType:n,isCalleeOfRenderedParent:i}=Y){const r=n===Q&&i;if(this.variable||this.replacement){let t=this.variable?this.variable.getName():this.replacement;r&&(t="0, "+t),e.overwrite(this.start,this.end,t,{contentOnly:!0,storeName:!0});}else r&&e.appendRight(this.start,"0, "),super.render(e,t);}analysePropertyKey(){this.propertyKey=be;const e=this.property.getLiteralValueAtPath(Ae,Za,this);this.propertyKey=e===Ie?be:String(e);}disallowNamespaceReassignment(){this.object instanceof Ys&&this.scope.findVariable(this.object.name).isNamespace&&this.context.error({code:"ILLEGAL_NAMESPACE_REASSIGNMENT",message:`Illegal reassignment to import '${this.object.name}'`},this.start);}resolveNamespaceVariables(e,t){if(0===t.length)return e;if(!e.isNamespace)return null;const n=t[0].key,i=e instanceof et?e.module.getVariableForExportName(n):e.context.traceExport(n);if(!i){const i=e instanceof et?e.module.id:e.context.fileName;return this.context.warn({code:"MISSING_EXPORT",exporter:Sa(i),importer:Sa(this.context.fileName),message:`'${n}' is not exported by '${Sa(i)}'`,missing:n,url:"https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module"},t[0].pos),"undefined"}return this.resolveNamespaceVariables(i,t.slice(1))}}const lo=e=>(...t)=>{throw new Error(`Cannot use fs.${e} inside browser`)},po=lo("lstatSync"),fo=lo("readdirSync"),mo=lo("readFile"),go=lo("realpathSync"),yo=lo("writeFile");function vo(e,t){try{const n=po(e);if(!t&&n.isSymbolicLink())return vo(go(e),t);if(t&&n.isSymbolicLink()||n.isFile()){const t=pt(e);if(-1!==fo(dt(e)).indexOf(t))return e}}catch(e){}}function xo(e){return function(t,n){return "undefined"==typeof process&&Ia({code:"MISSING_PROCESS",message:"It looks like you're using Rollup in a non-Node.js environment. This means you must supply a plugin with custom resolveId and load functions",url:"https://rollupjs.org/guide/en/#a-simple-example"}),void 0===n||ut(t)||"."===t[0]?function(e,t){let n=vo(e,t);return n||((n=vo(e+".mjs",t))?n:n=vo(e+".js",t))}(gt(n?dt(n):gt(),t),e):null}}const _o=(e,t="URL")=>`new ${t}(${e}).href`,Eo=e=>`(document.currentScript && document.currentScript.src || new URL('${e}', document.baseURI).href)`,bo=e=>(t,n)=>{const i=e(n);return null===t?`({ url: ${i} })`:"url"===t?i:"undefined"},Ao={amd:bo(()=>_o("module.uri, document.baseURI")),cjs:bo(e=>`(typeof document === 'undefined' ? ${_o("'file:' + __filename","(require('u' + 'rl').URL)")} : ${Eo(e)})`),iife:bo(e=>Eo(e)),system:e=>null===e?"module.meta":`module.meta.${e}`,umd:bo(e=>`(typeof document === 'undefined' ? ${_o("'file:' + __filename","(require('u' + 'rl').URL)")} : ${Eo(e)})`)},So=e=>_o(`'${e}', document.currentScript && document.currentScript.src || document.baseURI`),wo={amd:e=>("."!==e[0]&&(e="./"+e),_o(`require.toUrl('${e}'), document.baseURI`)),cjs:e=>`(typeof document === 'undefined' ? ${_o(`'file:' + __dirname + '/${e}'`,"(require('u' + 'rl').URL)")} : ${So(e)})`,es:e=>_o(`'${e}', import.meta.url`),iife:e=>So(e),system:e=>_o(`'${e}', module.meta.url`),umd:e=>`(typeof document === 'undefined' ? ${_o(`'file:' + __dirname + '/${e}'`,"(require('u' + 'rl').URL)")} : ${So(e)})`},Io={amd:["document","module","URL"],cjs:["document","require","URL"],iife:["document","URL"],system:["module"],umd:["document","require","URL"]},Co={amd:["document","require","URL"],cjs:["document","require","URL"],iife:["document","URL"],system:["module","URL"],umd:["document","require","URL"]},Po="ROLLUP_ASSET_URL_",ko="ROLLUP_CHUNK_URL_",No="ROLLUP_FILE_URL_";class $o extends js{bind(){super.bind(),this.argument.deoptimizePath([be,be]);}}class Ro extends js{hasEffects(e){for(const t of this.body)if(t.hasEffects(e))return !0;return !1}include(e){this.included=!0;for(const t of this.body)(e||t.shouldBeIncluded())&&t.include(e);}render(e,t){this.body.length?de(this.body,e,this.start,this.end,t):super.render(e,t);}}class Oo extends js{getLiteralValueAtPath(e){return e.length>0||1!==this.quasis.length?Ie:this.quasis[0].value.cooked}render(e,t){e.indentExclusionRanges.push([this.start,this.end]),super.render(e,t);}}class Mo extends bt{constructor(e,t){super(e),this.context=t,this.variables.set("this",new _t("this",null,Pe,t));}addExportDefaultDeclaration(e,t,n){const i=new ta(e,t,n);return this.variables.set("default",i),i}addNamespaceMemberAccess(e,t){t instanceof la&&this.accessedOutsideVariables.set(t.name,t);}deconflict(e){for(const t of this.children)t.deconflict(e);}findLexicalBoundary(){return this}findVariable(e){const t=this.variables.get(e)||this.accessedOutsideVariables.get(e);if(t)return t;const n=this.context.traceVariable(e)||this.parent.findVariable(e);return n instanceof la&&this.accessedOutsideVariables.set(e,n),n}}const Do={"!":e=>!e,"+":e=>+e,"-":e=>-e,delete:()=>Ie,typeof:e=>typeof e,void:()=>void 0,"~":e=>~e};function To(e){return null!==e.renderBaseName&&null!==e.exportName&&e.isReassigned}const Lo={ArrayExpression:class extends js{bind(){super.bind();for(const e of this.elements)null!==e&&e.deoptimizePath(Se);}getReturnExpressionWhenCalledAtPath(e){return 1!==e.length?Ce:Je(Ge,e[0])}hasEffectsWhenAccessedAtPath(e){return e.length>1}hasEffectsWhenCalledAtPath(e,t,n){return 1!==e.length||Qe(Ge,e[0],this.included,t,n)}},ArrayPattern:class extends js{addExportedVariables(e){for(const t of this.elements)null!==t&&t.addExportedVariables(e);}declare(e,t){const n=[];for(const t of this.elements)null!==t&&n.push(...t.declare(e,Ce));return n}deoptimizePath(e){if(0===e.length)for(const t of this.elements)null!==t&&t.deoptimizePath(e);}hasEffectsWhenAssignedAtPath(e,t){if(e.length>0)return !0;for(const e of this.elements)if(null!==e&&e.hasEffectsWhenAssignedAtPath(Ae,t))return !0;return !1}},ArrowFunctionExpression:Ya,AssignmentExpression:class extends js{bind(){super.bind(),this.left.deoptimizePath(Ae),this.right.deoptimizePath(Se);}hasEffects(e){return this.right.hasEffects(e)||this.left.hasEffects(e)||this.left.hasEffectsWhenAssignedAtPath(Ae,e)}hasEffectsWhenAccessedAtPath(e,t){return e.length>0&&this.right.hasEffectsWhenAccessedAtPath(e,t)}render(e,t){if(this.left.render(e,t),this.right.render(e,t),"system"===t.format)if(this.left.variable&&this.left.variable.exportName)e.prependLeft(e.original.indexOf("=",this.left.end)+1,` exports('${this.left.variable.exportName}',`),e.appendLeft(this.right.end,")");else if("addExportedVariables"in this.left){const t=[];this.left.addExportedVariables(t),t.length>0&&(e.prependRight(this.start,`function (v) {${Xa(t)} return v;} (`),e.appendLeft(this.end,")"));}}},AssignmentPattern:class extends js{addExportedVariables(e){this.left.addExportedVariables(e);}bind(){super.bind(),this.left.deoptimizePath(Ae),this.right.deoptimizePath(Se);}declare(e,t){return this.left.declare(e,t)}deoptimizePath(e){0===e.length&&this.left.deoptimizePath(e);}hasEffectsWhenAssignedAtPath(e,t){return e.length>0||this.left.hasEffectsWhenAssignedAtPath(Ae,t)}render(e,t,{isShorthandProperty:n}=Y){this.left.render(e,t,{isShorthandProperty:n}),this.right.render(e,t);}},AwaitExpression:class extends js{hasEffects(e){return super.hasEffects(e)||!e.ignoreReturnAwaitYield()}include(e){e:if(!this.included&&!this.context.usesTopLevelAwait){let e=this.parent;do{if(e instanceof Qs||e instanceof Ya)break e}while(e=e.parent);this.context.usesTopLevelAwait=!0;}super.include(e);}render(e,t){super.render(e,t);}},BinaryExpression:class extends js{deoptimizeCache(){}getLiteralValueAtPath(e,t,n){if(e.length>0)return Ie;const i=this.left.getLiteralValueAtPath(Ae,t,n);if(i===Ie)return Ie;const r=this.right.getLiteralValueAtPath(Ae,t,n);if(r===Ie)return Ie;const s=to[this.operator];return s?s(i,r):Ie}hasEffects(e){return "+"===this.operator&&this.parent instanceof eo&&""===this.left.getLiteralValueAtPath(Ae,Za,this)||super.hasEffects(e)}hasEffectsWhenAccessedAtPath(e,t){return e.length>1}},BlockStatement:Ka,BreakStatement:class extends js{hasEffects(e){return super.hasEffects(e)||!e.ignoreBreakStatements()||null!==this.label&&!e.ignoreLabel(this.label.name)}},CallExpression:class extends js{constructor(){super(...arguments),this.expressionsToBeDeoptimized=[],this.returnExpression=null;}bind(){if(super.bind(),this.callee instanceof Ys){this.scope.findVariable(this.callee.name).isNamespace&&this.context.error({code:"CANNOT_CALL_NAMESPACE",message:`Cannot call a namespace ('${this.callee.name}')`},this.start),"eval"===this.callee.name&&this.context.warn({code:"EVAL",message:"Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification",url:"https://rollupjs.org/guide/en/#avoiding-eval"},this.start);}null===this.returnExpression&&(this.returnExpression=this.callee.getReturnExpressionWhenCalledAtPath(Ae,Za,this));for(const e of this.arguments)e.deoptimizePath(Se);}deoptimizeCache(){if(this.returnExpression!==Ce){this.returnExpression=Ce;for(const e of this.expressionsToBeDeoptimized)e.deoptimizeCache();}}deoptimizePath(e){e.length>0&&!this.context.deoptimizationTracker.track(this,e)&&(null===this.returnExpression&&(this.returnExpression=this.callee.getReturnExpressionWhenCalledAtPath(Ae,Za,this)),this.returnExpression.deoptimizePath(e));}getLiteralValueAtPath(e,t,n){return null===this.returnExpression&&(this.returnExpression=this.callee.getReturnExpressionWhenCalledAtPath(Ae,t,this)),this.returnExpression===Ce||t.isTracked(this.returnExpression,e)?Ie:(this.expressionsToBeDeoptimized.push(n),this.returnExpression.getLiteralValueAtPath(e,t.track(this.returnExpression,e),n))}getReturnExpressionWhenCalledAtPath(e,t,n){return null===this.returnExpression&&(this.returnExpression=this.callee.getReturnExpressionWhenCalledAtPath(Ae,t,this)),this.returnExpression===Ce||t.isTracked(this.returnExpression,e)?Ce:(this.expressionsToBeDeoptimized.push(n),this.returnExpression.getReturnExpressionWhenCalledAtPath(e,t.track(this.returnExpression,e),n))}hasEffects(e){for(const t of this.arguments)if(t.hasEffects(e))return !0;return (!this.context.annotations||!this.annotatedPure)&&(this.callee.hasEffects(e)||this.callee.hasEffectsWhenCalledAtPath(Ae,this.callOptions,e.getHasEffectsWhenCalledOptions()))}hasEffectsWhenAccessedAtPath(e,t){return e.length>0&&!t.hasReturnExpressionBeenAccessedAtPath(e,this)&&this.returnExpression.hasEffectsWhenAccessedAtPath(e,t.addAccessedReturnExpressionAtPath(e,this))}hasEffectsWhenAssignedAtPath(e,t){return 0===e.length||!t.hasReturnExpressionBeenAssignedAtPath(e,this)&&this.returnExpression.hasEffectsWhenAssignedAtPath(e,t.addAssignedReturnExpressionAtPath(e,this))}hasEffectsWhenCalledAtPath(e,t,n){return !n.hasReturnExpressionBeenCalledAtPath(e,this)&&this.returnExpression.hasEffectsWhenCalledAtPath(e,t,n.addCalledReturnExpressionAtPath(e,this))}include(e){e?(super.include(e),e===Bs&&this.callee instanceof Ys&&this.callee.variable&&this.callee.variable.markCalledFromTryStatement()):(this.included=!0,this.callee.include(!1)),this.callee.includeCallArguments(this.arguments),this.returnExpression.included||this.returnExpression.include(!1);}initialise(){this.callOptions=Ee.create({args:this.arguments,callIdentifier:this,withNew:!1});}render(e,t,{renderedParentType:n}=Y){if(this.callee.render(e,t),this.arguments.length>0)if(this.arguments[this.arguments.length-1].included)for(const n of this.arguments)n.render(e,t);else{let n=this.arguments.length-2;for(;n>=0&&!this.arguments[n].included;)n--;if(n>=0){for(let i=0;i<=n;i++)this.arguments[i].render(e,t);e.remove(le(e.original,",",this.arguments[n].end),this.end-1);}else e.remove(le(e.original,"(",this.callee.end)+1,this.end-1);}n===Z&&this.callee.type===ee&&(e.appendRight(this.start,"("),e.prependLeft(this.end,")"));}},CatchClause:io,ClassBody:class extends js{hasEffectsWhenCalledAtPath(e,t,n){return e.length>0||null!==this.classConstructor&&this.classConstructor.hasEffectsWhenCalledAtPath(Ae,t,n)}initialise(){for(const e of this.body)if("constructor"===e.kind)return void(this.classConstructor=e);this.classConstructor=null;}},ClassDeclaration:Us,ClassExpression:class extends Ws{},ConditionalExpression:class extends js{constructor(){super(...arguments),this.expressionsToBeDeoptimized=[],this.isBranchResolutionAnalysed=!1,this.unusedBranch=null,this.usedBranch=null;}bind(){super.bind(),this.isBranchResolutionAnalysed||this.analyseBranchResolution();}deoptimizeCache(){if(null!==this.usedBranch){this.usedBranch=null,this.unusedBranch.deoptimizePath(Se);for(const e of this.expressionsToBeDeoptimized)e.deoptimizeCache();}}deoptimizePath(e){e.length>0&&(this.isBranchResolutionAnalysed||this.analyseBranchResolution(),null===this.usedBranch?(this.consequent.deoptimizePath(e),this.alternate.deoptimizePath(e)):this.usedBranch.deoptimizePath(e));}getLiteralValueAtPath(e,t,n){return this.isBranchResolutionAnalysed||this.analyseBranchResolution(),null===this.usedBranch?Ie:(this.expressionsToBeDeoptimized.push(n),this.usedBranch.getLiteralValueAtPath(e,t,n))}getReturnExpressionWhenCalledAtPath(e,t,n){return this.isBranchResolutionAnalysed||this.analyseBranchResolution(),null===this.usedBranch?new ro([this.consequent.getReturnExpressionWhenCalledAtPath(e,t,n),this.alternate.getReturnExpressionWhenCalledAtPath(e,t,n)]):(this.expressionsToBeDeoptimized.push(n),this.usedBranch.getReturnExpressionWhenCalledAtPath(e,t,n))}hasEffects(e){return !!this.test.hasEffects(e)||(null===this.usedBranch?this.consequent.hasEffects(e)||this.alternate.hasEffects(e):this.usedBranch.hasEffects(e))}hasEffectsWhenAccessedAtPath(e,t){return 0!==e.length&&(null===this.usedBranch?this.consequent.hasEffectsWhenAccessedAtPath(e,t)||this.alternate.hasEffectsWhenAccessedAtPath(e,t):this.usedBranch.hasEffectsWhenAccessedAtPath(e,t))}hasEffectsWhenAssignedAtPath(e,t){return 0===e.length||(null===this.usedBranch?this.consequent.hasEffectsWhenAssignedAtPath(e,t)||this.alternate.hasEffectsWhenAssignedAtPath(e,t):this.usedBranch.hasEffectsWhenAssignedAtPath(e,t))}hasEffectsWhenCalledAtPath(e,t,n){return null===this.usedBranch?this.consequent.hasEffectsWhenCalledAtPath(e,t,n)||this.alternate.hasEffectsWhenCalledAtPath(e,t,n):this.usedBranch.hasEffectsWhenCalledAtPath(e,t,n)}include(e){this.included=!0,e||null===this.usedBranch||this.test.shouldBeIncluded()?(this.test.include(e),this.consequent.include(e),this.alternate.include(e)):this.usedBranch.include(e);}render(e,t,{renderedParentType:n,isCalleeOfRenderedParent:i,preventASI:r}=Y){if(this.test.included)super.render(e,t);else{const s=le(e.original,":",this.consequent.end),a=(this.consequent.included?le(e.original,"?",this.test.end):s)+1;r&&me(e,a,this.usedBranch.start),e.remove(this.start,a),this.consequent.included&&e.remove(s,this.end),ue(this,e),this.usedBranch.render(e,t,{isCalleeOfRenderedParent:n?i:this.parent.callee===this,renderedParentType:n||this.parent.type});}}analyseBranchResolution(){this.isBranchResolutionAnalysed=!0;const e=this.test.getLiteralValueAtPath(Ae,Za,this);e!==Ie&&(e?(this.usedBranch=this.consequent,this.unusedBranch=this.alternate):(this.usedBranch=this.alternate,this.unusedBranch=this.consequent));}},DoWhileStatement:class extends js{hasEffects(e){return this.test.hasEffects(e)||this.body.hasEffects(e.setIgnoreBreakStatements())}},EmptyStatement:class extends js{hasEffects(){return !1}},ExportAllDeclaration:so,ExportDefaultDeclaration:ea,ExportNamedDeclaration:ao,ExpressionStatement:eo,ForInStatement:class extends js{bind(){this.left.bind(),this.left.deoptimizePath(Ae),this.right.bind(),this.body.bind();}createScope(e){this.scope=new Ga(e);}hasEffects(e){return this.left&&(this.left.hasEffects(e)||this.left.hasEffectsWhenAssignedAtPath(Ae,e))||this.right&&this.right.hasEffects(e)||this.body.hasEffects(e.setIgnoreBreakStatements())}include(e){this.included=!0,this.left.includeWithAllDeclaredVariables(e),this.left.deoptimizePath(Ae),this.right.include(e),this.body.include(e);}render(e,t){this.left.render(e,t,ce),this.right.render(e,t,ce),this.body.render(e,t);}},ForOfStatement:class extends js{bind(){this.left.bind(),this.left.deoptimizePath(Ae),this.right.bind(),this.body.bind();}createScope(e){this.scope=new Ga(e);}hasEffects(e){return this.left&&(this.left.hasEffects(e)||this.left.hasEffectsWhenAssignedAtPath(Ae,e))||this.right&&this.right.hasEffects(e)||this.body.hasEffects(e.setIgnoreBreakStatements())}include(e){this.included=!0,this.left.includeWithAllDeclaredVariables(e),this.left.deoptimizePath(Ae),this.right.include(e),this.body.include(e);}render(e,t){this.left.render(e,t,ce),this.right.render(e,t,ce),this.body.render(e,t);}},ForStatement:class extends js{createScope(e){this.scope=new Ga(e);}hasEffects(e){return this.init&&this.init.hasEffects(e)||this.test&&this.test.hasEffects(e)||this.update&&this.update.hasEffects(e)||this.body.hasEffects(e.setIgnoreBreakStatements())}render(e,t){this.init&&this.init.render(e,t,ce),this.test&&this.test.render(e,t,ce),this.update&&this.update.render(e,t,ce),this.body.render(e,t);}},FunctionDeclaration:Js,FunctionExpression:class extends Qs{},Identifier:Ys,IfStatement:class extends js{constructor(){super(...arguments),this.isTestValueAnalysed=!1;}bind(){super.bind(),this.isTestValueAnalysed||(this.testValue=Ie,this.isTestValueAnalysed=!0,this.testValue=this.test.getLiteralValueAtPath(Ae,Za,this));}deoptimizeCache(){this.testValue=Ie;}hasEffects(e){return !!this.test.hasEffects(e)||(this.testValue===Ie?this.consequent.hasEffects(e)||null!==this.alternate&&this.alternate.hasEffects(e):this.testValue?this.consequent.hasEffects(e):null!==this.alternate&&this.alternate.hasEffects(e))}include(e){if(this.included=!0,e)return this.test.include(e),this.consequent.include(e),void(null!==this.alternate&&this.alternate.include(e));const t=this.testValue===Ie;(t||this.test.shouldBeIncluded())&&this.test.include(!1),(t||this.testValue)&&this.consequent.shouldBeIncluded()&&this.consequent.include(!1),null===this.alternate||!t&&this.testValue||!this.alternate.shouldBeIncluded()||this.alternate.include(!1);}render(e,t){if(this.test.included||(this.testValue?null!==this.alternate&&this.alternate.included:this.consequent.included))this.test.included?this.test.render(e,t):e.overwrite(this.test.start,this.test.end,this.testValue?"true":"false"),this.consequent.included?this.consequent.render(e,t):e.overwrite(this.consequent.start,this.consequent.end,";"),null!==this.alternate&&(this.alternate.included?this.alternate.render(e,t):e.remove(this.consequent.end,this.alternate.end));else{const n=this.testValue?this.consequent:this.alternate;e.remove(this.start,n.start),e.remove(n.end,this.end),ue(this,e),n.render(e,t);}}},ImportDeclaration:oo,ImportExpression:class extends js{constructor(){super(...arguments),this.exportMode="auto";}hasEffects(){return !0}include(e){this.included||(this.included=!0,this.context.includeDynamicImport(this)),this.source.include(e);}initialise(){this.context.addDynamicImport(this);}render(e,t){if(this.inlineNamespace){const n=t.compact?"":" ",i=t.compact?"":";";return void e.overwrite(this.start,this.end,`Promise.resolve().then(function${n}()${n}{${n}return ${this.inlineNamespace.getName()}${i}${n}})`)}const n=this.getDynamicImportMechanism(t);n&&(e.overwrite(this.start,le(e.original,"(",this.start+6)+1,n.left),e.overwrite(this.end-1,this.end,n.right)),this.source.render(e,t);}renderFinalResolution(e,t,n){this.included&&("amd"===n&&t.startsWith("'.")&&t.endsWith(".js'")&&(t=t.slice(0,-4)+"'"),e.overwrite(this.source.start,this.source.end,t));}setResolution(e,t){this.exportMode=e,t?this.inlineNamespace=t:(this.scope.addAccessedGlobalsByFormat({amd:["require"],cjs:["require"],system:["module"]}),"auto"===e&&this.scope.addAccessedGlobalsByFormat({amd:[ra],cjs:[ra]}));}getDynamicImportMechanism(e){switch(e.format){case"cjs":{const t=e.compact?"":" ",n=e.compact?"c":"resolve";switch(this.exportMode){case"default":return {left:`new Promise(function${t}(${n})${t}{${t}${n}({${t}'default':${t}require(`,right:`)${t}});${t}})`};case"auto":return {left:`new Promise(function${t}(${n})${t}{${t}${n}(${ra}(require(`,right:`)));${t}})`};default:return {left:`new Promise(function${t}(${n})${t}{${t}${n}(require(`,right:`));${t}})`}}}case"amd":{const t=e.compact?"":" ",n=e.compact?"c":"resolve",i=e.compact?"e":"reject";return {left:`new Promise(function${t}(${n},${t}${i})${t}{${t}require([`,right:`],${t}${"default"===this.exportMode?`function${t}(m)${t}{${t}${n}({${t}'default':${t}m${t}});${t}}`:"auto"===this.exportMode?`function${t}(m)${t}{${t}${n}(${ra}(m));${t}}`:n},${t}${i})${t}})`}}case"system":return {left:"module.import(",right:")"};case"es":if(e.dynamicImportFunction)return {left:`${e.dynamicImportFunction}(`,right:")"}}return null}},LabeledStatement:class extends js{hasEffects(e){return this.body.hasEffects(e.setIgnoreLabel(this.label.name).setIgnoreBreakStatements())}},Literal:ho,LogicalExpression:class extends js{constructor(){super(...arguments),this.expressionsToBeDeoptimized=[],this.isBranchResolutionAnalysed=!1,this.unusedBranch=null,this.usedBranch=null;}bind(){super.bind(),this.isBranchResolutionAnalysed||this.analyseBranchResolution();}deoptimizeCache(){if(null!==this.usedBranch){this.usedBranch=null,this.unusedBranch.deoptimizePath(Se);for(const e of this.expressionsToBeDeoptimized)e.deoptimizeCache();}}deoptimizePath(e){e.length>0&&(this.isBranchResolutionAnalysed||this.analyseBranchResolution(),null===this.usedBranch?(this.left.deoptimizePath(e),this.right.deoptimizePath(e)):this.usedBranch.deoptimizePath(e));}getLiteralValueAtPath(e,t,n){return this.isBranchResolutionAnalysed||this.analyseBranchResolution(),null===this.usedBranch?Ie:(this.expressionsToBeDeoptimized.push(n),this.usedBranch.getLiteralValueAtPath(e,t,n))}getReturnExpressionWhenCalledAtPath(e,t,n){return this.isBranchResolutionAnalysed||this.analyseBranchResolution(),null===this.usedBranch?new ro([this.left.getReturnExpressionWhenCalledAtPath(e,t,n),this.right.getReturnExpressionWhenCalledAtPath(e,t,n)]):(this.expressionsToBeDeoptimized.push(n),this.usedBranch.getReturnExpressionWhenCalledAtPath(e,t,n))}hasEffects(e){return null===this.usedBranch?this.left.hasEffects(e)||this.right.hasEffects(e):this.usedBranch.hasEffects(e)}hasEffectsWhenAccessedAtPath(e,t){return 0!==e.length&&(null===this.usedBranch?this.left.hasEffectsWhenAccessedAtPath(e,t)||this.right.hasEffectsWhenAccessedAtPath(e,t):this.usedBranch.hasEffectsWhenAccessedAtPath(e,t))}hasEffectsWhenAssignedAtPath(e,t){return 0===e.length||(null===this.usedBranch?this.left.hasEffectsWhenAssignedAtPath(e,t)||this.right.hasEffectsWhenAssignedAtPath(e,t):this.usedBranch.hasEffectsWhenAssignedAtPath(e,t))}hasEffectsWhenCalledAtPath(e,t,n){return null===this.usedBranch?this.left.hasEffectsWhenCalledAtPath(e,t,n)||this.right.hasEffectsWhenCalledAtPath(e,t,n):this.usedBranch.hasEffectsWhenCalledAtPath(e,t,n)}include(e){this.included=!0,e||null===this.usedBranch||this.unusedBranch.shouldBeIncluded()?(this.left.include(e),this.right.include(e)):this.usedBranch.include(e);}render(e,t,{renderedParentType:n,isCalleeOfRenderedParent:i,preventASI:r}=Y){if(this.left.included&&this.right.included)super.render(e,t);else{const s=le(e.original,this.operator,this.left.end);this.right.included?(e.remove(this.start,s+2),r&&me(e,s+2,this.right.start)):e.remove(s,this.end),ue(this,e),this.usedBranch.render(e,t,{isCalleeOfRenderedParent:n?i:this.parent.callee===this,renderedParentType:n||this.parent.type});}}analyseBranchResolution(){this.isBranchResolutionAnalysed=!0;const e=this.left.getLiteralValueAtPath(Ae,Za,this);e!==Ie&&(("||"===this.operator?e:!e)?(this.usedBranch=this.left,this.unusedBranch=this.right):(this.usedBranch=this.right,this.unusedBranch=this.left));}},MemberExpression:co,MetaProperty:class extends js{hasEffects(){return !1}hasEffectsWhenAccessedAtPath(e){return e.length>1}include(){if(!this.included){this.included=!0;const e=this.parent,t=this.metaProperty=e instanceof co&&"string"==typeof e.propertyKey?e.propertyKey:null;t&&("url"===t?this.scope.addAccessedGlobalsByFormat(Io):(t.startsWith(No)||t.startsWith(Po)||t.startsWith(ko))&&this.scope.addAccessedGlobalsByFormat(Co));}}initialise(){"import"===this.meta.name&&this.context.addImportMeta(this);}renderFinalMechanism(e,t,n,i){if(!this.included)return;const r=this.parent,s=this.metaProperty;if(s&&(s.startsWith(No)||s.startsWith(Po)||s.startsWith(ko))){let a,o=null,h=null,u=null;s.startsWith(No)?(o=s.substr(No.length),a=this.context.getFileName(o)):s.startsWith(Po)?(this.context.warnDeprecation(`Using the "${Po}" prefix to reference files is deprecated. Use the "${No}" prefix instead.`,!1),h=s.substr(Po.length),a=this.context.getFileName(h)):(this.context.warnDeprecation(`Using the "${ko}" prefix to reference files is deprecated. Use the "${No}" prefix instead.`,!1),u=s.substr(ko.length),a=this.context.getFileName(u));const c=lt(mt(dt(t),a));let l;return null!==h&&(l=i.hookFirstSync("resolveAssetUrl",[{assetFileName:a,chunkId:t,format:n,moduleId:this.context.module.id,relativeAssetPath:c}])),l||(l=i.hookFirstSync("resolveFileUrl",[{assetReferenceId:h,chunkId:t,chunkReferenceId:u,fileName:a,format:n,moduleId:this.context.module.id,referenceId:o||h||u,relativePath:c}])),void e.overwrite(r.start,r.end,l,{contentOnly:!0})}const a=i.hookFirstSync("resolveImportMeta",[s,{chunkId:t,format:n,moduleId:this.context.module.id}]);"string"==typeof a&&(r instanceof co?e.overwrite(r.start,r.end,a,{contentOnly:!0}):e.overwrite(this.start,this.end,a,{contentOnly:!0}));}},MethodDefinition:class extends js{hasEffects(e){return this.key.hasEffects(e)}hasEffectsWhenCalledAtPath(e,t,n){return e.length>0||this.value.hasEffectsWhenCalledAtPath(Ae,t,n)}},NewExpression:class extends js{bind(){super.bind();for(const e of this.arguments)e.deoptimizePath(Se);}hasEffects(e){for(const t of this.arguments)if(t.hasEffects(e))return !0;return !this.annotatedPure&&this.callee.hasEffectsWhenCalledAtPath(Ae,this.callOptions,e.getHasEffectsWhenCalledOptions())}hasEffectsWhenAccessedAtPath(e,t){return e.length>1}initialise(){this.callOptions=Ee.create({args:this.arguments,callIdentifier:this,withNew:!0});}},ObjectExpression:class extends js{constructor(){super(...arguments),this.deoptimizedPaths=new Set,this.expressionsToBeDeoptimized=new Map,this.hasUnknownDeoptimizedProperty=!1,this.propertyMap=null,this.unmatchablePropertiesRead=[],this.unmatchablePropertiesWrite=[];}bind(){super.bind(),null===this.propertyMap&&this.buildPropertyMap();}deoptimizeCache(){this.hasUnknownDeoptimizedProperty||this.deoptimizeAllProperties();}deoptimizePath(e){if(this.hasUnknownDeoptimizedProperty)return;if(null===this.propertyMap&&this.buildPropertyMap(),0===e.length)return void this.deoptimizeAllProperties();const t=e[0];if(1===e.length){if("string"!=typeof t)return void this.deoptimizeAllProperties();if(!this.deoptimizedPaths.has(t)){this.deoptimizedPaths.add(t);const e=this.expressionsToBeDeoptimized.get(t);if(e)for(const t of e)t.deoptimizeCache();}}const n=1===e.length?Se:e.slice(1);for(const e of"string"==typeof t?this.propertyMap[t]?this.propertyMap[t].propertiesRead:[]:this.properties)e.deoptimizePath(n);}getLiteralValueAtPath(e,t,n){null===this.propertyMap&&this.buildPropertyMap();const i=e[0];if(0===e.length||this.hasUnknownDeoptimizedProperty||"string"!=typeof i||this.deoptimizedPaths.has(i))return Ie;if(1===e.length&&!this.propertyMap[i]&&!He[i]&&0===this.unmatchablePropertiesRead.length){const e=this.expressionsToBeDeoptimized.get(i);return void(e?e.push(n):this.expressionsToBeDeoptimized.set(i,[n]))}if(!this.propertyMap[i]||null===this.propertyMap[i].exactMatchRead||this.propertyMap[i].propertiesRead.length>1)return Ie;const r=this.expressionsToBeDeoptimized.get(i);return r?r.push(n):this.expressionsToBeDeoptimized.set(i,[n]),this.propertyMap[i].exactMatchRead.getLiteralValueAtPath(e.slice(1),t,n)}getReturnExpressionWhenCalledAtPath(e,t,n){null===this.propertyMap&&this.buildPropertyMap();const i=e[0];if(0===e.length||this.hasUnknownDeoptimizedProperty||"string"!=typeof i||this.deoptimizedPaths.has(i))return Ce;if(1===e.length&&He[i]&&0===this.unmatchablePropertiesRead.length&&(!this.propertyMap[i]||null===this.propertyMap[i].exactMatchRead))return Je(He,i);if(!this.propertyMap[i]||null===this.propertyMap[i].exactMatchRead||this.propertyMap[i].propertiesRead.length>1)return Ce;const r=this.expressionsToBeDeoptimized.get(i);return r?r.push(n):this.expressionsToBeDeoptimized.set(i,[n]),this.propertyMap[i].exactMatchRead.getReturnExpressionWhenCalledAtPath(e.slice(1),t,n)}hasEffectsWhenAccessedAtPath(e,t){if(0===e.length)return !1;const n=e[0];if(e.length>1&&(this.hasUnknownDeoptimizedProperty||"string"!=typeof n||this.deoptimizedPaths.has(n)||!this.propertyMap[n]||null===this.propertyMap[n].exactMatchRead))return !0;const i=e.slice(1);for(const e of"string"!=typeof n?this.properties:this.propertyMap[n]?this.propertyMap[n].propertiesRead:[])if(e.hasEffectsWhenAccessedAtPath(i,t))return !0;return !1}hasEffectsWhenAssignedAtPath(e,t){if(0===e.length)return !1;const n=e[0];if(e.length>1&&(this.hasUnknownDeoptimizedProperty||"string"!=typeof n||this.deoptimizedPaths.has(n)||!this.propertyMap[n]||null===this.propertyMap[n].exactMatchRead))return !0;const i=e.slice(1);for(const r of"string"!=typeof n?this.properties:e.length>1?this.propertyMap[n].propertiesRead:this.propertyMap[n]?this.propertyMap[n].propertiesSet:[])if(r.hasEffectsWhenAssignedAtPath(i,t))return !0;return !1}hasEffectsWhenCalledAtPath(e,t,n){const i=e[0];if(0===e.length||this.hasUnknownDeoptimizedProperty||"string"!=typeof i||this.deoptimizedPaths.has(i)||(this.propertyMap[i]?!this.propertyMap[i].exactMatchRead:e.length>1||!He[i]))return !0;const r=e.slice(1);for(const e of this.propertyMap[i]?this.propertyMap[i].propertiesRead:[])if(e.hasEffectsWhenCalledAtPath(r,t,n))return !0;return !(1!==e.length||!He[i])&&Qe(He,i,this.included,t,n)}render(e,t,{renderedParentType:n}=Y){super.render(e,t),n===Z&&(e.appendRight(this.start,"("),e.prependLeft(this.end,")"));}buildPropertyMap(){this.propertyMap=Object.create(null);for(let e=this.properties.length-1;e>=0;e--){const t=this.properties[e];if(t instanceof $o){this.unmatchablePropertiesRead.push(t);continue}const n="get"!==t.kind,i="set"!==t.kind;let r;if(t.computed){const e=t.key.getLiteralValueAtPath(Ae,Za,this);if(e===Ie){i?this.unmatchablePropertiesRead.push(t):this.unmatchablePropertiesWrite.push(t);continue}r=String(e);}else r=t.key instanceof Ys?t.key.name:String(t.key.value);const s=this.propertyMap[r];s?(i&&null===s.exactMatchRead&&(s.exactMatchRead=t,s.propertiesRead.push(t,...this.unmatchablePropertiesRead)),n&&!i&&null===s.exactMatchWrite&&(s.exactMatchWrite=t,s.propertiesSet.push(t,...this.unmatchablePropertiesWrite))):this.propertyMap[r]={exactMatchRead:i?t:null,exactMatchWrite:n?t:null,propertiesRead:i?[t,...this.unmatchablePropertiesRead]:[],propertiesSet:n&&!i?[t,...this.unmatchablePropertiesWrite]:[]};}}deoptimizeAllProperties(){this.hasUnknownDeoptimizedProperty=!0;for(const e of this.properties)e.deoptimizePath(Se);for(const e of this.expressionsToBeDeoptimized.values())for(const t of e)t.deoptimizeCache();}},ObjectPattern:class extends js{addExportedVariables(e){for(const t of this.properties)t.type===se?t.value.addExportedVariables(e):t.argument.addExportedVariables(e);}declare(e,t){const n=[];for(const i of this.properties)n.push(...i.declare(e,t));return n}deoptimizePath(e){if(0===e.length)for(const t of this.properties)t.deoptimizePath(e);}hasEffectsWhenAssignedAtPath(e,t){if(e.length>0)return !0;for(const e of this.properties)if(e.hasEffectsWhenAssignedAtPath(Ae,t))return !0;return !1}},Program:Ro,Property:class extends js{constructor(){super(...arguments),this.declarationInit=null,this.returnExpression=null;}bind(){super.bind(),"get"===this.kind&&null===this.returnExpression&&this.updateReturnExpression(),null!==this.declarationInit&&this.declarationInit.deoptimizePath([be,be]);}declare(e,t){return this.declarationInit=t,this.value.declare(e,Ce)}deoptimizeCache(){throw new Error("Unexpected deoptimization")}deoptimizePath(e){"get"===this.kind?e.length>0&&(null===this.returnExpression&&this.updateReturnExpression(),this.returnExpression.deoptimizePath(e)):"set"!==this.kind&&this.value.deoptimizePath(e);}getLiteralValueAtPath(e,t,n){return "set"===this.kind?Ie:"get"===this.kind?(null===this.returnExpression&&this.updateReturnExpression(),this.returnExpression.getLiteralValueAtPath(e,t,n)):this.value.getLiteralValueAtPath(e,t,n)}getReturnExpressionWhenCalledAtPath(e,t,n){return "set"===this.kind?Ce:"get"===this.kind?(null===this.returnExpression&&this.updateReturnExpression(),this.returnExpression.getReturnExpressionWhenCalledAtPath(e,t,n)):this.value.getReturnExpressionWhenCalledAtPath(e,t,n)}hasEffects(e){return this.key.hasEffects(e)||this.value.hasEffects(e)}hasEffectsWhenAccessedAtPath(e,t){return "get"===this.kind?this.value.hasEffectsWhenCalledAtPath(Ae,this.accessorCallOptions,t.getHasEffectsWhenCalledOptions())||e.length>0&&this.returnExpression.hasEffectsWhenAccessedAtPath(e,t):this.value.hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){return "get"===this.kind?0===e.length||this.returnExpression.hasEffectsWhenAssignedAtPath(e,t):"set"===this.kind?e.length>0||this.value.hasEffectsWhenCalledAtPath(Ae,this.accessorCallOptions,t.getHasEffectsWhenCalledOptions()):this.value.hasEffectsWhenAssignedAtPath(e,t)}hasEffectsWhenCalledAtPath(e,t,n){return "get"===this.kind?this.returnExpression.hasEffectsWhenCalledAtPath(e,t,n):this.value.hasEffectsWhenCalledAtPath(e,t,n)}initialise(){this.accessorCallOptions=Ee.create({callIdentifier:this,withNew:!1});}render(e,t){this.shorthand||this.key.render(e,t),this.value.render(e,t,{isShorthandProperty:this.shorthand});}updateReturnExpression(){this.returnExpression=Ce,this.returnExpression=this.value.getReturnExpressionWhenCalledAtPath(Ae,Za,this);}},RestElement:Xs,ReturnStatement:class extends js{hasEffects(e){return !e.ignoreReturnAwaitYield()||null!==this.argument&&this.argument.hasEffects(e)}initialise(){this.scope.addReturnExpression(this.argument||Ce);}render(e,t){this.argument&&(this.argument.render(e,t,{preventASI:!0}),this.argument.start===this.start+6&&e.prependLeft(this.start+6," "));}},SequenceExpression:class extends js{deoptimizePath(e){e.length>0&&this.expressions[this.expressions.length-1].deoptimizePath(e);}getLiteralValueAtPath(e,t,n){return this.expressions[this.expressions.length-1].getLiteralValueAtPath(e,t,n)}hasEffects(e){for(const t of this.expressions)if(t.hasEffects(e))return !0;return !1}hasEffectsWhenAccessedAtPath(e,t){return e.length>0&&this.expressions[this.expressions.length-1].hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){return 0===e.length||this.expressions[this.expressions.length-1].hasEffectsWhenAssignedAtPath(e,t)}hasEffectsWhenCalledAtPath(e,t,n){return this.expressions[this.expressions.length-1].hasEffectsWhenCalledAtPath(e,t,n)}include(e){this.included=!0;for(let t=0;t<this.expressions.length-1;t++){const n=this.expressions[t];(e||n.shouldBeIncluded())&&n.include(e);}this.expressions[this.expressions.length-1].include(e);}render(e,t,{renderedParentType:n,isCalleeOfRenderedParent:i,preventASI:r}=Y){let s=0;for(const{node:a,start:o,end:h}of fe(this.expressions,e,this.start,this.end))a.included?(1===++s&&r&&me(e,o,a.start),a===this.expressions[this.expressions.length-1]&&1===s?a.render(e,t,{isCalleeOfRenderedParent:n?i:this.parent.callee===this,renderedParentType:n||this.parent.type}):a.render(e,t)):he(a,e,o,h);}},SpreadElement:$o,SwitchCase:class extends js{include(e){this.included=!0,this.test&&this.test.include(e);for(const t of this.consequent)(e||t.shouldBeIncluded())&&t.include(e);}render(e,t){if(this.consequent.length){this.test&&this.test.render(e,t);const n=this.test?this.test.end:le(e.original,"default",this.start)+7,i=le(e.original,":",n)+1;de(this.consequent,e,i,this.end,t);}else super.render(e,t);}},SwitchStatement:class extends js{createScope(e){this.scope=new Ga(e);}hasEffects(e){return super.hasEffects(e.setIgnoreBreakStatements())}},TaggedTemplateExpression:class extends js{bind(){if(super.bind(),this.tag.type===te){this.scope.findVariable(this.tag.name).isNamespace&&this.context.error({code:"CANNOT_CALL_NAMESPACE",message:`Cannot call a namespace ('${this.tag.name}')`},this.start),"eval"===this.tag.name&&this.context.warn({code:"EVAL",message:"Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification",url:"https://rollupjs.org/guide/en/#avoiding-eval"},this.start);}}hasEffects(e){return super.hasEffects(e)||this.tag.hasEffectsWhenCalledAtPath(Ae,this.callOptions,e.getHasEffectsWhenCalledOptions())}initialise(){this.callOptions=Ee.create({callIdentifier:this,withNew:!1});}},TemplateElement:class extends js{hasEffects(e){return !1}},TemplateLiteral:Oo,ThisExpression:class extends js{bind(){super.bind(),this.variable=this.scope.findVariable("this");}hasEffectsWhenAccessedAtPath(e,t){return e.length>0&&this.variable.hasEffectsWhenAccessedAtPath(e,t)}hasEffectsWhenAssignedAtPath(e,t){return this.variable.hasEffectsWhenAssignedAtPath(e,t)}initialise(){this.alias=this.scope.findLexicalBoundary()instanceof Mo?this.context.moduleContext:null,"undefined"===this.alias&&this.context.warn({code:"THIS_IS_UNDEFINED",message:"The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten",url:"https://rollupjs.org/guide/en/#error-this-is-undefined"},this.start);}render(e,t){null!==this.alias&&e.overwrite(this.start,this.end,this.alias,{contentOnly:!1,storeName:!0});}},ThrowStatement:class extends js{hasEffects(e){return !0}render(e,t){this.argument.render(e,t,{preventASI:!0});}},TryStatement:class extends js{constructor(){super(...arguments),this.directlyIncluded=!1;}hasEffects(e){return this.block.body.length>0||null!==this.handler&&this.handler.hasEffects(e)||null!==this.finalizer&&this.finalizer.hasEffects(e)}include(e){this.directlyIncluded&&this.context.tryCatchDeoptimization||(this.included=!0,this.directlyIncluded=!0,this.block.include(this.context.tryCatchDeoptimization?Bs:e)),null!==this.handler&&this.handler.include(e),null!==this.finalizer&&this.finalizer.include(e);}},UnaryExpression:class extends js{bind(){super.bind(),"delete"===this.operator&&this.argument.deoptimizePath(Ae);}getLiteralValueAtPath(e,t,n){if(e.length>0)return Ie;const i=this.argument.getLiteralValueAtPath(Ae,t,n);return i===Ie?Ie:Do[this.operator](i)}hasEffects(e){return this.argument.hasEffects(e)||"delete"===this.operator&&this.argument.hasEffectsWhenAssignedAtPath(Ae,e)}hasEffectsWhenAccessedAtPath(e,t){return "void"===this.operator?e.length>0:e.length>1}},UnknownNode:class extends js{hasEffects(e){return !0}include(){super.include(!0);}},UpdateExpression:class extends js{bind(){if(super.bind(),this.argument.deoptimizePath(Ae),this.argument instanceof Ys){this.scope.findVariable(this.argument.name).isReassigned=!0;}}hasEffects(e){return this.argument.hasEffects(e)||this.argument.hasEffectsWhenAssignedAtPath(Ae,e)}hasEffectsWhenAccessedAtPath(e,t){return e.length>1}render(e,t){this.argument.render(e,t);const n=this.argument.variable;if("system"===t.format&&n&&n.exportName){const t=n.getName();if(this.prefix)e.overwrite(this.start,this.end,`exports('${n.exportName}', ${this.operator}${t})`);else{let i;switch(this.operator){case"++":i=`${t} + 1`;break;case"--":i=`${t} - 1`;}e.overwrite(this.start,this.end,`(exports('${n.exportName}', ${i}), ${t}${this.operator})`);}}}},VariableDeclaration:class extends js{deoptimizePath(e){for(const e of this.declarations)e.deoptimizePath(Ae);}hasEffectsWhenAssignedAtPath(e,t){return !1}include(e){this.included=!0;for(const t of this.declarations)(e||t.shouldBeIncluded())&&t.include(e);}includeWithAllDeclaredVariables(e){this.included=!0;for(const t of this.declarations)t.include(e);}initialise(){for(const e of this.declarations)e.declareDeclarator(this.kind);}render(e,t,n=Y){if(function(e){for(const t of e){if(!t.included)return !1;if(t.id.type===te){if(t.id.variable.exportName)return !1}else{const e=[];if(t.id.addExportedVariables(e),e.length>0)return !1}}return !0}(this.declarations)){for(const n of this.declarations)n.render(e,t);n.isNoStatement||59===e.original.charCodeAt(this.end-1)||e.appendLeft(this.end,";");}else this.renderReplacedDeclarations(e,t,n);}renderDeclarationEnd(e,t,n,i,r,s,a){59===e.original.charCodeAt(this.end-1)&&e.remove(this.end-1,this.end),s&&(t+=";"),null!==n?(10!==e.original.charCodeAt(i-1)||10!==e.original.charCodeAt(this.end)&&13!==e.original.charCodeAt(this.end)||(i--,13===e.original.charCodeAt(i)&&i--),i===n+1?e.overwrite(n,r,t):(e.overwrite(n,n+1,t),e.remove(i,r))):e.appendLeft(r,t),a.length>0&&e.appendLeft(r," "+Xa(a));}renderReplacedDeclarations(e,t,{start:n=this.start,end:i=this.end,isNoStatement:r}){const s=fe(this.declarations,e,this.start+this.kind.length,this.end-(59===e.original.charCodeAt(this.end-1)?1:0));let a,o,h=(o=/\n\s*$/.test(e.slice(this.start,s[0].start))?this.start+this.kind.length:s[0].start)-1;e.remove(this.start,h);let u,c,l=!1,p=!1,d="";const f=[];for(const{node:n,start:i,separator:r,contentEnd:m,end:g}of s)!n.included||n.id instanceof Ys&&To(n.id.variable)&&null===n.init?e.remove(i,g):(u="",c="",n.id instanceof Ys&&To(n.id.variable)?(p&&(d+=";"),l=!1):("system"===t.format&&null!==n.init&&(n.id.type!==te?n.id.addExportedVariables(f):n.id.variable.exportName&&(e.prependLeft(e.original.indexOf("=",n.id.end)+1,` exports('${n.id.variable.safeExportName||n.id.variable.exportName}',`),c+=")")),l?d+=",":(p&&(d+=";"),u+=`${this.kind} `,l=!0)),o===h+1?e.overwrite(h,o,d+u):(e.overwrite(h,h+1,d),e.appendLeft(o,u)),n.render(e,t),a=m,o=g,p=!0,h=r,d=c);p?this.renderDeclarationEnd(e,d,h,a,o,!r,f):e.remove(n,i);}},VariableDeclarator:class extends js{declareDeclarator(e){this.id.declare(e,this.init||Pe);}deoptimizePath(e){this.id.deoptimizePath(e);}render(e,t){null===this.init||this.init.included?super.render(e,t):(e.remove(this.id.end,this.end),this.id.render(e,t));}},WhileStatement:class extends js{hasEffects(e){return this.test.hasEffects(e)||this.body.hasEffects(e.setIgnoreBreakStatements())}},YieldExpression:class extends js{bind(){super.bind(),null!==this.argument&&this.argument.deoptimizePath(Se);}hasEffects(e){return !e.ignoreReturnAwaitYield()||null!==this.argument&&this.argument.hasEffects(e)}render(e,t){this.argument&&(this.argument.render(e,t),this.argument.start===this.start+5&&e.prependLeft(this.start+5," "));}}};function Vo(e,t,n){n(e,t);}function Bo(e,t,n){}var zo={};function jo(e,t,n=e.type){let i=t.commentNodes[t.commentIndex];for(;i&&e.start>=i.end;)Wo(e,i),i=t.commentNodes[++t.commentIndex];i&&i.end<=e.end&&zo[n](e,t,jo);}function Wo(e,t){e.annotations?e.annotations.push(t):e.annotations=[t],"ExpressionStatement"===e.type&&(e=e.expression),"CallExpression"!==e.type&&"NewExpression"!==e.type||(e.annotatedPure=!0);}zo.Program=zo.BlockStatement=function(e,t,n){for(var i=0,r=e.body;i<r.length;i+=1){n(r[i],t,"Statement");}},zo.Statement=Vo,zo.EmptyStatement=Bo,zo.ExpressionStatement=zo.ParenthesizedExpression=function(e,t,n){return n(e.expression,t,"Expression")},zo.IfStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Statement"),e.alternate&&n(e.alternate,t,"Statement");},zo.LabeledStatement=function(e,t,n){return n(e.body,t,"Statement")},zo.BreakStatement=zo.ContinueStatement=Bo,zo.WithStatement=function(e,t,n){n(e.object,t,"Expression"),n(e.body,t,"Statement");},zo.SwitchStatement=function(e,t,n){n(e.discriminant,t,"Expression");for(var i=0,r=e.cases;i<r.length;i+=1){var s=r[i];s.test&&n(s.test,t,"Expression");for(var a=0,o=s.consequent;a<o.length;a+=1){n(o[a],t,"Statement");}}},zo.SwitchCase=function(e,t,n){e.test&&n(e.test,t,"Expression");for(var i=0,r=e.consequent;i<r.length;i+=1){n(r[i],t,"Statement");}},zo.ReturnStatement=zo.YieldExpression=zo.AwaitExpression=function(e,t,n){e.argument&&n(e.argument,t,"Expression");},zo.ThrowStatement=zo.SpreadElement=function(e,t,n){return n(e.argument,t,"Expression")},zo.TryStatement=function(e,t,n){n(e.block,t,"Statement"),e.handler&&n(e.handler,t),e.finalizer&&n(e.finalizer,t,"Statement");},zo.CatchClause=function(e,t,n){e.param&&n(e.param,t,"Pattern"),n(e.body,t,"Statement");},zo.WhileStatement=zo.DoWhileStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.body,t,"Statement");},zo.ForStatement=function(e,t,n){e.init&&n(e.init,t,"ForInit"),e.test&&n(e.test,t,"Expression"),e.update&&n(e.update,t,"Expression"),n(e.body,t,"Statement");},zo.ForInStatement=zo.ForOfStatement=function(e,t,n){n(e.left,t,"ForInit"),n(e.right,t,"Expression"),n(e.body,t,"Statement");},zo.ForInit=function(e,t,n){"VariableDeclaration"===e.type?n(e,t):n(e,t,"Expression");},zo.DebuggerStatement=Bo,zo.FunctionDeclaration=function(e,t,n){return n(e,t,"Function")},zo.VariableDeclaration=function(e,t,n){for(var i=0,r=e.declarations;i<r.length;i+=1){n(r[i],t);}},zo.VariableDeclarator=function(e,t,n){n(e.id,t,"Pattern"),e.init&&n(e.init,t,"Expression");},zo.Function=function(e,t,n){e.id&&n(e.id,t,"Pattern");for(var i=0,r=e.params;i<r.length;i+=1){n(r[i],t,"Pattern");}n(e.body,t,e.expression?"Expression":"Statement");},zo.Pattern=function(e,t,n){"Identifier"===e.type?n(e,t,"VariablePattern"):"MemberExpression"===e.type?n(e,t,"MemberPattern"):n(e,t);},zo.VariablePattern=Bo,zo.MemberPattern=Vo,zo.RestElement=function(e,t,n){return n(e.argument,t,"Pattern")},zo.ArrayPattern=function(e,t,n){for(var i=0,r=e.elements;i<r.length;i+=1){var s=r[i];s&&n(s,t,"Pattern");}},zo.ObjectPattern=function(e,t,n){for(var i=0,r=e.properties;i<r.length;i+=1){var s=r[i];"Property"===s.type?(s.computed&&n(s.key,t,"Expression"),n(s.value,t,"Pattern")):"RestElement"===s.type&&n(s.argument,t,"Pattern");}},zo.Expression=Vo,zo.ThisExpression=zo.Super=zo.MetaProperty=Bo,zo.ArrayExpression=function(e,t,n){for(var i=0,r=e.elements;i<r.length;i+=1){var s=r[i];s&&n(s,t,"Expression");}},zo.ObjectExpression=function(e,t,n){for(var i=0,r=e.properties;i<r.length;i+=1){n(r[i],t);}},zo.FunctionExpression=zo.ArrowFunctionExpression=zo.FunctionDeclaration,zo.SequenceExpression=function(e,t,n){for(var i=0,r=e.expressions;i<r.length;i+=1){n(r[i],t,"Expression");}},zo.TemplateLiteral=function(e,t,n){for(var i=0,r=e.quasis;i<r.length;i+=1){n(r[i],t);}for(var s=0,a=e.expressions;s<a.length;s+=1){n(a[s],t,"Expression");}},zo.TemplateElement=Bo,zo.UnaryExpression=zo.UpdateExpression=function(e,t,n){n(e.argument,t,"Expression");},zo.BinaryExpression=zo.LogicalExpression=function(e,t,n){n(e.left,t,"Expression"),n(e.right,t,"Expression");},zo.AssignmentExpression=zo.AssignmentPattern=function(e,t,n){n(e.left,t,"Pattern"),n(e.right,t,"Expression");},zo.ConditionalExpression=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Expression"),n(e.alternate,t,"Expression");},zo.NewExpression=zo.CallExpression=function(e,t,n){if(n(e.callee,t,"Expression"),e.arguments)for(var i=0,r=e.arguments;i<r.length;i+=1){n(r[i],t,"Expression");}},zo.MemberExpression=function(e,t,n){n(e.object,t,"Expression"),e.computed&&n(e.property,t,"Expression");},zo.ExportNamedDeclaration=zo.ExportDefaultDeclaration=function(e,t,n){e.declaration&&n(e.declaration,t,"ExportNamedDeclaration"===e.type||e.declaration.id?"Statement":"Expression"),e.source&&n(e.source,t,"Expression");},zo.ExportAllDeclaration=function(e,t,n){n(e.source,t,"Expression");},zo.ImportDeclaration=function(e,t,n){for(var i=0,r=e.specifiers;i<r.length;i+=1){n(r[i],t);}n(e.source,t,"Expression");},zo.ImportExpression=function(e,t,n){n(e.source,t,"Expression");},zo.ImportSpecifier=zo.ImportDefaultSpecifier=zo.ImportNamespaceSpecifier=zo.Identifier=zo.Literal=Bo,zo.TaggedTemplateExpression=function(e,t,n){n(e.tag,t,"Expression"),n(e.quasi,t,"Expression");},zo.ClassDeclaration=zo.ClassExpression=function(e,t,n){return n(e,t,"Class")},zo.Class=function(e,t,n){e.id&&n(e.id,t,"Pattern"),e.superClass&&n(e.superClass,t,"Expression"),n(e.body,t);},zo.ClassBody=function(e,t,n){for(var i=0,r=e.body;i<r.length;i+=1){n(r[i],t);}},zo.MethodDefinition=zo.Property=function(e,t,n){e.computed&&n(e.key,t,"Expression"),n(e.value,t,"Expression");};const Uo=/[@#]__PURE__/,Fo=e=>Uo.test(e.text);let qo="sourceMa";qo+="ppingURL";const Ho=new RegExp(`^#\\s+${qo}=.+\\n?`),Go=()=>{};let Ko=()=>[0,0],Yo=()=>0,Xo=()=>0,Qo={};const Jo=e=>1e3*e[0]+e[1]/1e6;function Zo(e,t){switch(t){case 1:return `# ${e}`;case 2:return `## ${e}`;case 3:return e;default:return `${"  ".repeat(t-4)}- ${e}`}}function eh(e,t=3){e=Zo(e,t),Qo.hasOwnProperty(e)||(Qo[e]={memory:0,startMemory:void 0,startTime:void 0,time:0,totalMemory:0});const n=Xo();Qo[e].startTime=Ko(),Qo[e].startMemory=n;}function th(e,t=3){if(e=Zo(e,t),Qo.hasOwnProperty(e)){const t=Xo();Qo[e].time+=Yo(Qo[e].startTime),Qo[e].totalMemory=Math.max(Qo[e].totalMemory,t),Qo[e].memory+=t-Qo[e].startMemory;}}function nh(){const e={};return Object.keys(Qo).forEach(t=>{e[t]=[Qo[t].time,Qo[t].memory,Qo[t].totalMemory];}),e}let ih=Go,rh=Go;const sh={load:!0,ongenerate:!0,onwrite:!0,resolveDynamicImport:!0,resolveId:!0,transform:!0,transformBundle:!0};function ah(e,t){const n={};for(const i of Object.keys(e))if(!0===sh[i]){let r=`plugin ${t}`;e.name&&(r+=` (${e.name})`),r+=` - ${i}`,n[i]=function(){ih(r,4);const t=e[i].apply(this===n?e:this,arguments);return rh(r,4),t&&"function"==typeof t.then&&(ih(`${r} (async)`,4),t.then(()=>rh(`${r} (async)`,4))),t};}else n[i]=e[i];return n}function oh(e){e.perf?(Qo={},"undefined"!=typeof process&&"function"==typeof process.hrtime?(Ko=process.hrtime.bind(process),Yo=e=>Jo(process.hrtime(e))):"undefined"!=typeof performance&&"function"==typeof performance.now&&(Ko=()=>[performance.now(),0],Yo=e=>performance.now()-e[0]),"undefined"!=typeof process&&"function"==typeof process.memoryUsage&&(Xo=()=>process.memoryUsage().heapUsed),ih=eh,rh=th,e.plugins=e.plugins.map(ah)):(ih=Go,rh=Go);}const hh={ecmaVersion:2020,preserveParens:!1,sourceType:"module"};function uh(e,t,n,i){t.error({code:"MISSING_EXPORT",message:`'${e}' is not exported by ${Sa(n)}`,url:"https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module"},i);}const ch={identifier:null,localName:na};class lh{constructor(e,t,n,i){this.chunkFileNames=new Set,this.chunkName=null,this.comments=[],this.dependencies=[],this.dynamicallyImportedBy=[],this.dynamicDependencies=[],this.dynamicImports=[],this.entryPointsHash=new Uint8Array(10),this.execIndex=1/0,this.exportAllModules=null,this.exportAllSources=[],this.exports=Object.create(null),this.exportsAll=Object.create(null),this.exportShimVariable=new sa(this),this.facadeChunk=null,this.importDescriptions=Object.create(null),this.importMetas=[],this.imports=new Set,this.isExecuted=!1,this.isUserDefinedEntryPoint=!1,this.manualChunkAlias=null,this.reexports=Object.create(null),this.sources=[],this.userChunkNames=new Set,this.usesTopLevelAwait=!1,this.namespaceVariable=void 0,this.transformDependencies=null,this.id=t,this.graph=e,this.excludeFromSourcemap=/\0/.test(t),this.context=e.getModuleContext(t),this.moduleSideEffects=n,this.isEntryPoint=i;}basename(){const e=pt(this.id),t=ft(this.id);return at(t?e.slice(0,-t.length):e)}bindReferences(){this.ast.bind();}error(e,t){if(void 0!==t){e.pos=t;let n=At(this.code,t,{offsetLine:1});try{n=function(e,t){const n=e.filter(e=>e.mappings);for(;n.length>0;){const e=n.pop(),i=e.mappings[t.line-1];let r=!1;if(void 0!==i)for(const n of i)if(n[0]>=t.column){if(1===n.length)break;t={column:n[3],line:n[2]+1,name:5===n.length?e.names[n[4]]:void 0,source:e.sources[n[1]]},r=!0;break}if(!r)throw new Error("Can't resolve original location of error.")}return t}(this.sourcemapChain,n);}catch(e){this.warn({code:"SOURCEMAP_ERROR",loc:{column:n.column,file:this.id,line:n.line},message:`Error when using sourcemap for reporting an error: ${e.message}`,pos:t},void 0);}e.loc={column:n.column,file:this.id,line:n.line},e.frame=Ea(this.originalCode,n.line,n.column);}Ia(e);}getAllExportNames(){if(this.allExportNames)return this.allExportNames;const e=this.allExportNames=new Set;for(const t of Object.keys(this.exports))e.add(t);for(const t of Object.keys(this.reexports))e.add(t);for(const t of this.exportAllModules)if(t instanceof yt)e.add(`*${t.id}`);else for(const n of t.getAllExportNames())"default"!==n&&e.add(n);return e}getDynamicImportExpressions(){return this.dynamicImports.map(({node:e})=>{const t=e.source;return t instanceof Oo&&1===t.quasis.length&&t.quasis[0].value.cooked?t.quasis[0].value.cooked:t instanceof ho&&"string"==typeof t.value?t.value:t})}getExportNamesByVariable(){const e=new Map;for(const t of this.getAllExportNames()){const n=this.getVariableForExportName(t);if(!n||!(n.included||n instanceof et))continue;const i=e.get(n);i?i.push(t):e.set(n,[t]);}return e}getExports(){return Object.keys(this.exports)}getOrCreateNamespace(){return this.namespaceVariable||(this.namespaceVariable=new pa(this.astContext),this.namespaceVariable.initialise()),this.namespaceVariable}getReexports(){if(this.transitiveReexports)return this.transitiveReexports;this.transitiveReexports=[];const e=new Set;for(const t in this.reexports)e.add(t);for(const t of this.exportAllModules)if(t instanceof yt)e.add(`*${t.id}`);else for(const n of t.getExports().concat(t.getReexports()))"default"!==n&&e.add(n);return this.transitiveReexports=Array.from(e)}getRenderedExports(){const e=[],t=[];for(const n in this.exports){const i=this.getVariableForExportName(n);(i&&i.included?e:t).push(n);}return {renderedExports:e,removedExports:t}}getTransitiveDependencies(){return this.dependencies.concat(this.getReexports().map(e=>this.getVariableForExportName(e).module))}getVariableForExportName(e,t){if("*"===e[0]){if(1===e.length)return this.getOrCreateNamespace();return this.graph.moduleById.get(e.slice(1)).getVariableForExportName("*")}const n=this.reexports[e];if(n){const e=n.module.getVariableForExportName(n.localName);return e||uh(n.localName,this,n.module.id,n.start),e}const i=this.exports[e];if(i){if(i===ch)return this.exportShimVariable;const e=i.localName;return this.traceVariable(e)||this.graph.scope.findVariable(e)}if("default"!==e)for(const t of this.exportAllModules){const n=t.getVariableForExportName(e,!0);if(n)return n}if(this.graph.shimMissingExports&&!t)return this.shimMissingExport(e),this.exportShimVariable}include(){this.ast.shouldBeIncluded()&&this.ast.include(!1);}includeAllExports(){this.isExecuted||(this.graph.needsTreeshakingPass=!0,vt(this));for(const e of this.getExports()){const t=this.getVariableForExportName(e);t.deoptimizePath(Se),t.included||(t.include(),this.graph.needsTreeshakingPass=!0);}for(const e of this.getReexports()){const t=this.getVariableForExportName(e);t.deoptimizePath(Se),t.included||(t.include(),this.graph.needsTreeshakingPass=!0),t instanceof et&&(t.module.reexported=!0);}}includeAllInBundle(){this.ast.include(!0);}isIncluded(){return this.ast.included||this.namespaceVariable&&this.namespaceVariable.included}linkDependencies(){for(const e of this.sources){const t=this.resolvedIds[e].id;if(t){const e=this.graph.moduleById.get(t);this.dependencies.push(e);}}for(const{resolution:e}of this.dynamicImports)(e instanceof lh||e instanceof yt)&&this.dynamicDependencies.push(e);this.addModulesToSpecifiers(this.importDescriptions),this.addModulesToSpecifiers(this.reexports),this.exportAllModules=this.exportAllSources.map(e=>{const t=this.resolvedIds[e].id;return this.graph.moduleById.get(t)}).sort((e,t)=>{const n=e instanceof yt;return n===t instanceof yt?0:n?1:-1});}render(e){const t=this.magicString.clone();return this.ast.render(t,e),this.usesTopLevelAwait=this.astContext.usesTopLevelAwait,t}setSource({ast:e,code:t,customTransformCache:n,moduleSideEffects:i,originalCode:r,originalSourcemap:s,resolvedIds:a,sourcemapChain:o,transformDependencies:h,transformFiles:u}){var c;this.code=t,this.originalCode=r,this.originalSourcemap=s,this.sourcemapChain=o,u&&(this.transformFiles=u),this.transformDependencies=h,this.customTransformCache=n,"boolean"==typeof i&&(this.moduleSideEffects=i),ih("generate ast",3),this.esTreeAst=e||function(e,t,n){try{return t.parse(e.code,Object.assign({},hh,n,{onComment:(t,n,i,r)=>e.comments.push({block:t,text:n,start:i,end:r})}))}catch(t){let n=t.message.replace(/ \(\d+:\d+\)$/,"");e.id.endsWith(".json")?n+=" (Note that you need rollup-plugin-json to import JSON files)":e.id.endsWith(".js")||(n+=" (Note that you need plugins to import files that are not JavaScript)"),e.error({code:"PARSE_ERROR",message:n},t.pos);}}(this,this.graph.acornParser,this.graph.acornOptions),c=this.comments,jo(this.esTreeAst,{commentIndex:0,commentNodes:c.filter(Fo)}),rh("generate ast",3),this.resolvedIds=a||Object.create(null);const l=this.id;this.magicString=new q(t,{filename:this.excludeFromSourcemap?null:l,indentExclusionRanges:[]}),this.removeExistingSourceMap(),ih("analyse ast",3),this.astContext={addDynamicImport:this.addDynamicImport.bind(this),addExport:this.addExport.bind(this),addImport:this.addImport.bind(this),addImportMeta:this.addImportMeta.bind(this),annotations:this.graph.treeshakingOptions&&this.graph.treeshakingOptions.annotations,code:t,deoptimizationTracker:this.graph.deoptimizationTracker,error:this.error.bind(this),fileName:l,getExports:this.getExports.bind(this),getFileName:this.graph.pluginDriver.getFileName,getModuleExecIndex:()=>this.execIndex,getModuleName:this.basename.bind(this),getReexports:this.getReexports.bind(this),importDescriptions:this.importDescriptions,includeDynamicImport:this.includeDynamicImport.bind(this),includeVariable:this.includeVariable.bind(this),isCrossChunkImport:e=>e.module.chunk!==this.chunk,magicString:this.magicString,module:this,moduleContext:this.context,nodeConstructors:Lo,preserveModules:this.graph.preserveModules,propertyReadSideEffects:!this.graph.treeshakingOptions||this.graph.treeshakingOptions.propertyReadSideEffects,traceExport:this.getVariableForExportName.bind(this),traceVariable:this.traceVariable.bind(this),treeshake:!!this.graph.treeshakingOptions,tryCatchDeoptimization:!this.graph.treeshakingOptions||this.graph.treeshakingOptions.tryCatchDeoptimization,usesTopLevelAwait:!1,warn:this.warn.bind(this),warnDeprecation:this.graph.warnDeprecation.bind(this.graph)},this.scope=new Mo(this.graph.scope,this.astContext),this.ast=new Ro(this.esTreeAst,{type:"Module",context:this.astContext},this.scope),rh("analyse ast",3);}toJSON(){return {ast:this.esTreeAst,code:this.code,customTransformCache:this.customTransformCache,dependencies:this.dependencies.map(e=>e.id),id:this.id,moduleSideEffects:this.moduleSideEffects,originalCode:this.originalCode,originalSourcemap:this.originalSourcemap,resolvedIds:this.resolvedIds,sourcemapChain:this.sourcemapChain,transformDependencies:this.transformDependencies,transformFiles:this.transformFiles}}traceVariable(e){const t=this.scope.variables.get(e);if(t)return t;if(e in this.importDescriptions){const t=this.importDescriptions[e],n=t.module;if(n instanceof lh&&"*"===t.name)return n.getOrCreateNamespace();const i=n.getVariableForExportName(t.name);return i||uh(t.name,this,n.id,t.start),i}return null}warn(e,t){if(void 0!==t){e.pos=t;const{line:n,column:i}=At(this.code,t,{offsetLine:1});e.loc={file:this.id,line:n,column:i},e.frame=Ea(this.code,n,i);}e.id=this.id,this.graph.warn(e);}addDynamicImport(e){this.dynamicImports.push({node:e,resolution:null});}addExport(e){const t=e.source&&e.source.value;if(t)if(-1===this.sources.indexOf(t)&&this.sources.push(t),e.type===J)this.exportAllSources.push(t);else for(const n of e.specifiers){const e=n.exported.name;(this.exports[e]||this.reexports[e])&&this.error({code:"DUPLICATE_EXPORT",message:`A module cannot have multiple exports with the same name ('${e}')`},n.start),this.reexports[e]={localName:n.local.name,module:null,source:t,start:n.start};}else if(e instanceof ea)this.exports.default&&this.error({code:"DUPLICATE_EXPORT",message:"A module can only have one default export"},e.start),this.exports.default={identifier:e.variable.getAssignedVariableName(),localName:"default"};else if(e.declaration){const t=e.declaration;if(t.type===oe)for(const e of t.declarations)for(const t of Ha(e.id))this.exports[t]={identifier:null,localName:t};else{const e=t.id.name;this.exports[e]={identifier:null,localName:e};}}else for(const t of e.specifiers){const e=t.local.name,n=t.exported.name;(this.exports[n]||this.reexports[n])&&this.error({code:"DUPLICATE_EXPORT",message:`A module cannot have multiple exports with the same name ('${n}')`},t.start),this.exports[n]={identifier:null,localName:e};}}addImport(e){const t=e.source.value;-1===this.sources.indexOf(t)&&this.sources.push(t);for(const n of e.specifiers){const e=n.local.name;this.importDescriptions[e]&&this.error({code:"DUPLICATE_IMPORT",message:`Duplicated import '${e}'`},n.start);const i=n.type===ne,r=n.type===ie,s=i?"default":r?"*":n.imported.name;this.importDescriptions[e]={source:t,start:n.start,name:s,module:null};}}addImportMeta(e){this.importMetas.push(e);}addModulesToSpecifiers(e){for(const t of Object.keys(e)){const n=e[t],i=this.resolvedIds[n.source].id;n.module=this.graph.moduleById.get(i);}}includeDynamicImport(e){const t=this.dynamicImports.find(t=>t.node===e).resolution;t instanceof lh&&(t.dynamicallyImportedBy.push(this),t.includeAllExports());}includeVariable(e){const t=e.module;e.included||(e.include(),this.graph.needsTreeshakingPass=!0),t&&t!==this&&this.imports.add(e);}removeExistingSourceMap(){for(const e of this.comments)!e.block&&Ho.test(e.text)&&this.magicString.remove(e.start,e.end);}shimMissingExport(e){this.exports[e]||(this.graph.warn({code:"SHIMMED_EXPORT",exporter:Sa(this.id),exportName:e,message:`Missing export "${e}" has been shimmed in module ${Sa(this.id)}.`}),this.exports[e]=ch);}}class ph{constructor(e,t){this.isOriginal=!0,this.filename=e,this.content=t;}traceSegment(e,t,n){return {line:e,column:t,name:n,source:this}}}class dh{constructor(e,t){this.sources=t,this.names=e.names,this.mappings=e.mappings;}traceMappings(){const e=[],t=[],n=[],i=[];for(const r of this.mappings){const s=[];for(const i of r){if(1==i.length)continue;const r=this.sources[i[1]];if(!r)continue;const a=r.traceSegment(i[2],i[3],5===i.length?this.names[i[4]]:"");if(a){let r=e.lastIndexOf(a.source.filename);-1===r?(r=e.length,e.push(a.source.filename),t[r]=a.source.content):null==t[r]?t[r]=a.source.content:null!=a.source.content&&t[r]!==a.source.content&&Ia({message:`Multiple conflicting contents for sourcemap source ${a.source.filename}`});const o=[i[0],r,a.line,a.column];if(a.name){let e=n.indexOf(a.name);-1===e&&(e=n.length,n.push(a.name)),o[4]=e;}s.push(o);}}i.push(s);}return {sources:e,sourcesContent:t,names:n,mappings:i}}traceSegment(e,t,n){const i=this.mappings[e];if(!i)return null;let r=0,s=i.length-1;for(;r<=s;){const e=r+s>>1,a=i[e];if(a[0]===t){if(1==a.length)return null;const e=this.sources[a[1]];return e?e.traceSegment(a[2],a[3],5===a.length?this.names[a[4]]:n):null}a[0]>t?s=e-1:r=e+1;}return null}}function fh(e){return function(t,n){return n.mappings?new dh(n,[t]):(e.warn({code:"SOURCEMAP_BROKEN",message:`Sourcemap is likely to be incorrect: a plugin${n.plugin?` ('${n.plugin}')`:""} was used to transform files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help`,plugin:n.plugin,url:"https://rollupjs.org/guide/en/#warning-sourcemap-is-likely-to-be-incorrect"}),new dh({mappings:[],names:[]},[t]))}}function mh(e,t,n,i,r){let s;if(n){const t=n.sources,i=n.sourcesContent||[],r=dt(e)||".",a=n.sourceRoot||".",o=t.map((e,t)=>new ph(gt(r,a,e),i[t]));s=new dh(n,o);}else s=new ph(e,t);return i.reduce(r,s)}const gh={amd:xh,cjs:xh,es:vh,iife:xh,system:vh,umd:xh};function yh(e,t,n,i,r,s,a){!function(e,t,n){for(const i of t){const t=i.scope;for(const[n,i]of t.accessedOutsideVariables)i.included&&e.add(n);const r=t.accessedGlobalVariablesByFormat&&t.accessedGlobalVariablesByFormat.get(n);if(r)for(const t of r)e.add(t);}}(i,e,r),function(e,t){for(const n of t){for(const t of n.scope.variables.values())t.included&&!(t.renderBaseName||t instanceof ta&&t.getOriginalVariable()!==t)&&t.setRenderNames(null,_e(t.name,e));const t=n.getOrCreateNamespace();t.included&&t.setRenderNames(null,_e(t.name,e));}}(i,e),gh[r](i,n,t,s,a);for(const t of e)t.scope.deconflict(r);}function vh(e,t,n,i){for(const n of t){const t=n.module,r=n.name;let s;s=t instanceof yt&&("*"===r||"default"===r)?"default"===r&&i&&t.exportsNamespace?t.variableName+"__default":t.variableName:r,n.setRenderNames(null,_e(s,e));}}function xh(e,t,n,i,r){for(const t of n)t.variableName=_e(t.variableName,e);for(const e of t){const t=e.module;if(t instanceof yt){const n=e.name;"default"===n&&i&&(t.exportsNamespace||t.exportsNames)?e.setRenderNames(null,t.variableName+"__default"):"*"===n||"default"===n?e.setRenderNames(null,t.variableName):e.setRenderNames(t.variableName,null);}else{const n=t.chunk;"default"===n.exportMode||r&&e.isNamespace?e.setRenderNames(null,n.variableName):e.setRenderNames(n.variableName,n.getVariableExportName(e));}}}const _h=(e,t)=>e.execIndex>t.execIndex?1:-1;function Eh(e){e.sort(_h);}function bh(e,t,n){const i=[Sa(e)];let r=t;for(;r!==e&&(i.push(Sa(r)),r=n[r]););return i.push(i[0]),i.reverse(),i}function Ah(e){const t=e.split("\n"),n=t.filter(e=>/^\t+/.test(e)),i=t.filter(e=>/^ {2,}/.test(e));if(0===n.length&&0===i.length)return null;if(n.length>=i.length)return "\t";const r=i.reduce((e,t)=>{const n=/^ +/.exec(t)[0].length;return Math.min(n,e)},1/0);return new Array(r+1).join(" ")}function Sh(e){if(!e)return null;if("string"==typeof e&&(e=JSON.parse(e)),""===e.mappings)return {mappings:[],names:[],sources:[],version:3};let t;return t="string"==typeof e.mappings?function(e){for(var t=0,n=0,i=0,r=0,s=0,a=[],o=[],h=[],u=0,c=0,l=0,p=0,d=e.length;u<d;u++){var f=e.charCodeAt(u);if(44===f)h.length&&o.push(h),h=[],c=0;else if(59===f)h.length&&o.push(h),h=[],c=0,a.push(o),o=[],t=0;else{var m=N[f];if(void 0===m)throw new Error("Invalid character ("+String.fromCharCode(f)+")");var g=32&m;if(p+=(m&=31)<<l,g)l+=5;else{var y=1&p;p>>>=1,y&&0===(p=-p)&&(p=-2147483648),0==c?(t+=p,h.push(t)):1===c?(n+=p,h.push(n)):2===c?(i+=p,h.push(i)):3===c?(r+=p,h.push(r)):4===c&&(s+=p,h.push(s)),c++,p=l=0;}}}return h.length&&o.push(h),a.push(o),a}(e.mappings):e.mappings,Object.assign({},e,{mappings:t})}function wh(e,t,n){return wa(e)?e.replace(/\[(\w+)\]/g,(e,i)=>{if(!n.hasOwnProperty(i))return Ia($a(`"[${i}]" is not a valid placeholder in "${t}" pattern.`));const r=n[i]();return wa(r)?r:Ia($a(`Invalid substitution "${r}" for placeholder "[${i}]" in "${t}" pattern, can be neither absolute nor relative path.`))}):Ia($a(`Invalid pattern "${e}" for "${t}", patterns can be neither absolute nor relative paths and must not contain invalid characters.`))}function Ih(e,t){if(e in t==!1)return e;const n=ft(e);e=e.substr(0,e.length-n.length);let i,r=1;for(;t[i=e+ ++r+n];);return i}function Ch(e,t,n,i){let r;return "function"==typeof t?r=t(e.id):t&&(r=t[e.id]),r||(i?(n.warn({code:"MISSING_GLOBAL_NAME",guess:e.variableName,message:`No name was provided for external module '${e.id}' in output.globals – guessing '${e.variableName}'`,source:e.id}),e.variableName):void 0)}function Ph(e){return !e.isEmpty||e.entryModules.length>0||null!==e.manualChunkAlias}class kh{constructor(e,t){this.entryModules=[],this.exportMode="named",this.facadeModule=null,this.id=null,this.indentString=void 0,this.manualChunkAlias=null,this.usedModules=void 0,this.variableName="chunk",this.dependencies=void 0,this.dynamicDependencies=void 0,this.exportNames=Object.create(null),this.exports=new Set,this.fileName=null,this.imports=new Set,this.name=null,this.needsExportsShim=!1,this.renderedDeclarations=void 0,this.renderedHash=void 0,this.renderedModuleSources=new Map,this.renderedSource=null,this.renderedSourceLength=void 0,this.sortedExportNames=null,this.graph=e,this.orderedModules=t,this.execIndex=t.length>0?t[0].execIndex:1/0,this.isEmpty=!0;for(const e of t)this.isEmpty&&e.isIncluded()&&(this.isEmpty=!1),e.manualChunkAlias&&(this.manualChunkAlias=e.manualChunkAlias),e.chunk=this,(e.isEntryPoint||e.dynamicallyImportedBy.some(e=>-1===t.indexOf(e)))&&this.entryModules.push(e);const n=this.entryModules[0]||this.orderedModules[this.orderedModules.length-1];n&&(this.variableName=at(pt(n.chunkName||n.manualChunkAlias||Aa(n.id))));}static generateFacade(e,t,n){const i=new kh(e,[]);i.assignFacadeName(n,t),t.facadeChunk||(t.facadeChunk=i),i.dependencies=[t.chunk],i.dynamicDependencies=[],i.facadeModule=t;for(const e of t.getAllExportNames()){const n=t.getVariableForExportName(e);i.exports.add(n),i.exportNames[e]=n;}return i}canModuleBeFacade(e){for(const t of this.exports)if(!e.has(t))return !1;return !0}generateFacades(){const e=[];for(const t of this.entryModules){const n=Array.from(t.userChunkNames).map(e=>({name:e}));if(0===n.length&&t.isUserDefinedEntryPoint&&n.push({}),n.push(...Array.from(t.chunkFileNames).map(e=>({fileName:e}))),0===n.length&&n.push({}),!this.facadeModule){const e=t.getExportNamesByVariable();if(this.graph.preserveModules||this.canModuleBeFacade(e)){this.facadeModule=t,t.facadeChunk=this;for(const[t,n]of e)for(const e of n)this.exportNames[e]=t;this.assignFacadeName(n.shift(),t);}}for(const i of n)e.push(kh.generateFacade(this.graph,t,i));}return e}generateId(e,t,n,i){if(null!==this.fileName)return this.fileName;const[r,s]=this.facadeModule&&this.facadeModule.isUserDefinedEntryPoint?[t.entryFileNames||"[name].js","output.entryFileNames"]:[t.chunkFileNames||"[name]-[hash].js","output.chunkFileNames"];return Ih(wh(r,s,{format:()=>"es"===t.format?"esm":t.format,hash:()=>i?this.computeContentHashWithDependencies(e,t,n):"[hash]",name:()=>this.getChunkName()}),n)}generateIdPreserveModules(e,t){const n=ba(this.orderedModules[0].id);return Ih(lt(ut(this.orderedModules[0].id)?K(e,n):"_virtual/"+pt(n)),t)}generateInternalExports(e){if(null!==this.facadeModule)return;const t="system"===e.format||"es"===e.format||e.compact;let n,i=0;if(this.exportNames=Object.create(null),this.sortedExportNames=null,t)for(const e of this.exports){const t=e.name[0];if(this.exportNames[t]){do{49===(n=ve(++i)).charCodeAt(0)&&(n=ve(i+=9*Math.pow(64,n.length-1)));}while(xe[n]||this.exportNames[n]);this.exportNames[n]=e;}else this.exportNames[t]=e;}else for(const e of this.exports){for(i=0,n=e.name;this.exportNames[n];)n=e.name+"$"+ ++i;this.exportNames[n]=e;}}getChunkName(){return this.name||(this.name=ba(this.getFallbackChunkName()))}getDynamicImportIds(){return this.dynamicDependencies.map(e=>e.id).filter(Boolean)}getExportNames(){return this.sortedExportNames||(this.sortedExportNames=Object.keys(this.exportNames).sort())}getImportIds(){return this.dependencies.map(e=>e.id).filter(Boolean)}getRenderedHash(){if(this.renderedHash)return this.renderedHash;if(!this.renderedSource)return "";const e=k(),t=this.calculateHashAugmentation();return e.update(t),e.update(this.renderedSource.toString()),e.update(this.getExportNames().map(e=>{const t=this.exportNames[e];return `${Sa(t.module.id).replace(/\\/g,"/")}:${t.name}:${e}`}).join(",")),this.renderedHash=e.digest("hex")}getRenderedSourceLength(){return void 0!==this.renderedSourceLength?this.renderedSourceLength:this.renderedSourceLength=this.renderedSource.length()}getVariableExportName(e){if(this.graph.preserveModules&&e instanceof pa)return "*";for(const t of Object.keys(this.exportNames))if(this.exportNames[t]===e)return t;throw new Error(`Internal Error: Could not find export name for variable ${e.name}.`)}link(){const e=new Set,t=new Set;for(const n of this.orderedModules)this.addDependenciesToChunk(n.getTransitiveDependencies(),e),this.addDependenciesToChunk(n.dynamicDependencies,t),this.setUpChunkImportsAndExportsForModule(n);this.dependencies=Array.from(e),this.dynamicDependencies=Array.from(t);}merge(e,t,n,i){if(null!==this.facadeModule||null!==e.facadeModule)throw new Error("Internal error: Code splitting chunk merges not supported for facades");for(const t of e.orderedModules)t.chunk=this,this.orderedModules.push(t);for(const t of e.imports)this.imports.has(t)||t.module.chunk===this||this.imports.add(t);for(const t of e.exports)this.exports.has(t)||this.exports.add(t);const r=this.exportNames;this.generateInternalExports(n);const s=(e,t)=>{if(e.imports)for(const n of e.imports)n.imported=this.getVariableExportName(t[n.imported]);if(e.reexports)for(const n of e.reexports)n.imported=this.getVariableExportName(t[n.imported]);},a=(e,t)=>{t.imports&&(e.imports?e.imports=e.imports.concat(t.imports):e.imports=t.imports),t.reexports&&(e.reexports?e.reexports=e.reexports.concat(t.reexports):e.reexports=t.reexports),!e.exportsNames&&t.exportsNames&&(e.exportsNames=!0),!e.exportsDefault&&t.exportsDefault&&(e.exportsDefault=!0),e.name=this.variableName;};for(const n of t){let t=void 0;for(let i=0;i<n.dependencies.length;i++){const o=n.dependencies[i];if(o!==e&&o!==this||!t)o===e?(n.dependencies[i]=this,s(t=n.renderedDeclarations.dependencies[i],e.exportNames)):o===this&&s(t=n.renderedDeclarations.dependencies[i],r);else{const h=n.renderedDeclarations.dependencies[i];s(h,o===e?e.exportNames:r),a(t,h),n.renderedDeclarations.dependencies.splice(i,1),n.dependencies.splice(i--,1);}}}this.preRender(n,i);}preRender(e,t){ih("render modules",3);const n=new G({separator:e.compact?"":"\n\n"});this.usedModules=[],this.indentString=e.compact?"":function(e,t){if(!0!==t.indent)return t.indent||"";for(let t=0;t<e.length;t++){const n=Ah(e[t].originalCode);if(null!==n)return n}return "\t"}(this.orderedModules,e);const i=e.compact?"":"\n",r=e.compact?"":" ",s={compact:e.compact,dynamicImportFunction:e.dynamicImportFunction,format:e.format,freeze:!1!==e.freeze,indent:this.indentString,namespaceToStringTag:!0===e.namespaceToStringTag,varOrConst:e.preferConst?"const":"var"};for(const{module:e}of this.imports){const t=e instanceof lh?e.chunk:e;-1===this.dependencies.indexOf(t)&&this.dependencies.push(t);}if(!this.graph.preserveModules&&null!==this.facadeModule)for(const e of this.dependencies)e instanceof kh&&this.inlineChunkDependencies(e,!0);for(let e=0;e<this.dependencies.length;e++){const t=this.dependencies[e];t instanceof kh&&t.isEmpty&&(this.dependencies.splice(e--,1),this.inlineChunkDependencies(t,!1));}Eh(this.dependencies),this.prepareDynamicImports(),this.setIdentifierRenderResolutions(e);let a="";const o=this.renderedModules=Object.create(null);for(const t of this.orderedModules){let r=0;if(t.isIncluded()){const o=t.render(s).trim();e.compact&&-1!==o.lastLine().indexOf("//")&&o.append("\n");const h=t.getOrCreateNamespace();if((h.included||o.length()>0)&&(r=o.length(),this.renderedModuleSources.set(t,o),n.addSource(o),this.usedModules.push(t),h.included&&!this.graph.preserveModules)){const e=h.renderBlock(s);h.renderFirst()?a+=i+e:n.addSource(new q(e));}}const{renderedExports:h,removedExports:u}=t.getRenderedExports();o[t.id]={originalLength:t.originalCode.length,removedExports:u,renderedExports:h,renderedLength:r};}a&&n.prepend(a+i+i),this.needsExportsShim&&n.prepend(`${i}${s.varOrConst} ${na}${r}=${r}void 0;${i}${i}`),e.compact?this.renderedSource=n:this.renderedSource=n.trim(),this.renderedSourceLength=void 0,this.renderedHash=void 0,0===this.getExportNames().length&&0===this.getImportIds().length&&this.isEmpty&&this.graph.warn({code:"EMPTY_BUNDLE",message:"Generated an empty bundle"}),this.setExternalRenderPaths(e,t),this.renderedDeclarations={dependencies:this.getChunkDependencyDeclarations(e),exports:"none"===this.exportMode?[]:this.getChunkExportDeclarations()},rh("render modules",3);}render(e,t,n){if(ih("render format",3),!this.renderedSource)throw new Error("Internal error: Chunk render called before preRender");const i=e.format,r=Fa[i];r||Ia({code:"INVALID_OPTION",message:`Invalid format: ${i} - valid options are ${Object.keys(Fa).join(", ")}.`}),e.dynamicImportFunction&&"es"!==i&&this.graph.warn({code:"INVALID_OPTION",message:'"output.dynamicImportFunction" is ignored for formats other than "esm".'});for(let e=0;e<this.dependencies.length;e++){const t=this.dependencies[e];if(t instanceof yt&&!t.renormalizeRenderPath)continue;const n=this.renderedDeclarations.dependencies[e],i=t instanceof yt?n.id:t.id;t instanceof kh&&(n.namedExportsMode="default"!==t.exportMode),n.id=this.getRelativePath(i);}this.finaliseDynamicImports(i),this.finaliseImportMetas(i);const s=0!==this.renderedDeclarations.exports.length||this.renderedDeclarations.dependencies.some(e=>e.reexports&&0!==e.reexports.length);let a=!1;const o=new Set;for(const e of this.orderedModules){e.usesTopLevelAwait&&(a=!0);const t=e.scope.accessedGlobalVariablesByFormat,n=t&&t.get(i);if(n)for(const e of n)o.add(e);}a&&"es"!==i&&"system"!==i&&Ia({code:"INVALID_TLA_FORMAT",message:`Module format ${i} does not support top-level await. Use the "es" or "system" output formats rather.`});const h=r(this.renderedSource,{accessedGlobals:o,dependencies:this.renderedDeclarations.dependencies,exports:this.renderedDeclarations.exports,hasExports:s,indentString:this.indentString,intro:t.intro,isEntryModuleFacade:null!==this.facadeModule&&this.facadeModule.isEntryPoint,namedExportsMode:"default"!==this.exportMode,outro:t.outro,usesTopLevelAwait:a,varOrConst:e.preferConst?"const":"var",warn:this.graph.warn.bind(this.graph)},e);t.banner&&h.prepend(t.banner),t.footer&&h.append(t.footer);const u=h.toString();rh("render format",3);let c=null;const l=[];return function({graph:e,chunk:t,renderChunk:n,code:i,sourcemapChain:r,options:s}){const a=(e,t,n)=>{if(null==t)return e;if("string"==typeof t&&(t={code:t,map:void 0}),null!==t.map){const e=Sh(t.map);r.push(e||{missing:!0,plugin:n.name});}return t.code};let o=!1,h=!0;return e.pluginDriver.hookReduceArg0("renderChunk",[i,n,s],a).then(n=>(h=!1,e.pluginDriver.hookReduceArg0("transformChunk",[n,s,t],a))).then(n=>(o=!0,e.pluginDriver.hookReduceArg0("transformBundle",[n,s,t],a))).catch(e=>{if(h)throw e;return Ia(e,{code:o?"BAD_BUNDLE_TRANSFORMER":"BAD_CHUNK_TRANSFORMER",message:`Error transforming ${(o?"bundle":"chunk")+(e.plugin?` with '${e.plugin}' plugin`:"")}: ${e.message}`,plugin:e.plugin})})}({chunk:this,code:u,graph:this.graph,options:e,renderChunk:n,sourcemapChain:l}).then(t=>{if(e.sourcemap){let t;ih("sourcemap",3),t=e.file?gt(e.sourcemapFile||e.file):e.dir?gt(e.dir,this.id):gt(this.id);const n=h.generateDecodedMap({});(c=function(e,t,n,i,r,s){const a=fh(e.graph),o=i.filter(e=>!e.excludeFromSourcemap).map(e=>mh(e.id,e.originalCode,e.originalSourcemap,e.sourcemapChain,a));let h=new dh(n,o);h=r.reduce(a,h);let{sources:u,sourcesContent:c,names:l,mappings:p}=h.traceMappings();if(t){const e=dt(t);u=u.map(t=>mt(e,t)),t=pt(t);}return new T({file:t,sources:u,sourcesContent:c=s?null:c,names:l,mappings:p})}(this,t,n,this.usedModules,l,e.sourcemapExcludeSources)).sources=c.sources.map(t=>lt(e.sourcemapPathTransform?e.sourcemapPathTransform(t):t)),rh("sourcemap",3);}return !0!==e.compact&&"\n"!==t[t.length-1]&&(t+="\n"),{code:t,map:c}})}visitDependencies(e){const t=[this],n=new Set;for(const i of t)if(e(i),!(i instanceof yt))for(const e of i.dependencies.concat(i.dynamicDependencies))n.has(e)||(n.add(e),t.push(e));}visitStaticDependenciesUntilCondition(e){const t=new Set;return function n(i){if(!t.has(i)){if(t.add(i),i instanceof kh)for(const e of i.dependencies)if(n(e))return !0;return !0===e(i)}}(this)}addDependenciesToChunk(e,t){for(const n of e){if(n.chunk===this)continue;let e;if(n instanceof lh)e=n.chunk;else{if(!n.used&&!n.moduleSideEffects)continue;e=n;}t.add(e);}}assignFacadeName({fileName:e,name:t},n){e?this.fileName=e:this.name=ba(t||n.chunkName||Aa(n.id));}calculateHashAugmentation(){const e=this.facadeModule,t=this.getChunkName.bind(this),n={dynamicImports:this.getDynamicImportIds(),exports:this.getExportNames(),facadeModuleId:e&&e.id,imports:this.getImportIds(),isDynamicEntry:null!==e&&e.dynamicallyImportedBy.length>0,isEntry:null!==e&&e.isEntryPoint,modules:this.renderedModules,get name(){return t()}};return this.graph.pluginDriver.hookReduceValueSync("augmentChunkHash","",[n],(e,t)=>(t&&(e+=t),e))}computeContentHashWithDependencies(e,t,n){const i=k();return i.update([e.intro,e.outro,e.banner,e.footer].map(e=>e||"").join(":")),i.update(t.format),this.visitDependencies(r=>{r instanceof yt?i.update(":"+r.renderPath):(i.update(r.getRenderedHash()),i.update(r.generateId(e,t,n,!1)));}),i.digest("hex").substr(0,8)}finaliseDynamicImports(e){for(const[t,n]of this.renderedModuleSources)for(const{node:i,resolution:r}of t.dynamicImports)if(r)if(r instanceof lh){if(r.chunk!==this&&Ph(r.chunk)){const t=r.facadeChunk||r.chunk;i.renderFinalResolution(n,`'${this.getRelativePath(t.id)}'`,e);}}else i.renderFinalResolution(n,r instanceof yt?`'${r.renormalizeRenderPath?this.getRelativePath(r.renderPath):r.id}'`:r,e);}finaliseImportMetas(e){for(const[t,n]of this.renderedModuleSources)for(const i of t.importMetas)i.renderFinalMechanism(n,this.id,e,this.graph.pluginDriver);}getChunkDependencyDeclarations(e){const t=new Map;for(let n of this.getExportNames()){let i,r,s=!1;if("*"===n[0])s=!1!==e.externalLiveBindings,i=this.graph.moduleById.get(n.substr(1)),r=n="*";else{const t=this.exportNames[n],a=t.module;if(!a||a.chunk===this)continue;a instanceof lh?(r=(i=a.chunk).getVariableExportName(t),s=t.isReassigned):(i=a,r=t.name,s=!1!==e.externalLiveBindings);}let a=t.get(i);a||t.set(i,a=[]),a.push({imported:r,reexported:n,needsLiveBinding:s});}const n=new Set,i=[];for(const r of this.dependencies){const s=[];for(const e of this.imports){const t=e instanceof ta?e.getOriginalVariable():e;(e.module instanceof lh?e.module.chunk!==r:e.module!==r)||n.has(t)||(n.add(t),s.push({imported:e.module instanceof yt?e.name:e.module.chunk.getVariableExportName(e),local:e.getName()}));}const a=t.get(r);let o,h,u=!0;r instanceof yt?(o=r.exportsNames||r.exportsNamespace,h="default"in r.declarations):(o=!0,h=!1,u="default"!==r.exportMode);let c=void 0,l=void 0;r instanceof yt&&(c=r.renderPath,"umd"!==e.format&&"iife"!==e.format||(l=Ch(r,e.globals,this.graph,o||h))),i.push({exportsDefault:h,exportsNames:o,globalName:l,id:c,imports:s.length>0?s:null,isChunk:r instanceof kh,name:r.variableName,namedExportsMode:u,reexports:a});}return i}getChunkExportDeclarations(){const e=[];for(const t of this.getExportNames()){if("*"===t[0])continue;const n=this.exportNames[t],i=n.module;if(i&&i.chunk!==this)continue;let r=!1,s=!1;if(n instanceof _t){n.init===Pe&&(s=!0);for(const e of n.declarations)if(e.parent instanceof Js||e instanceof ea&&e.declaration instanceof Js){r=!0;break}}else n instanceof la&&(r=!0);const a=n.getName();e.push({exported:"*"===t?a:t,hoisted:r,local:a,uninitialized:s});}return e}getFallbackChunkName(){return this.manualChunkAlias?this.manualChunkAlias:this.fileName?Aa(this.fileName):Aa(this.orderedModules[this.orderedModules.length-1].id)}getRelativePath(e){const t=lt(K(dt(this.id),e));return t.startsWith("../")?t:"./"+t}inlineChunkDependencies(e,t){for(const n of e.dependencies)if(n instanceof yt)-1===this.dependencies.indexOf(n)&&this.dependencies.push(n);else{if(n===this||-1!==this.dependencies.indexOf(n))continue;n.isEmpty||this.dependencies.push(n),t&&this.inlineChunkDependencies(n,!0);}}prepareDynamicImports(){for(const e of this.orderedModules)for(const{node:t,resolution:n}of e.dynamicImports)if(t.included)if(n instanceof lh)if(n.chunk===this){const e=n.getOrCreateNamespace();t.setResolution("named",e);}else t.setResolution(n.chunk.exportMode);else t.setResolution("auto");}setExternalRenderPaths(e,t){for(const n of this.dependencies.concat(this.dynamicDependencies))n instanceof yt&&n.setRenderPath(e,t);}setIdentifierRenderResolutions(e){for(const t of this.getExportNames()){const n=this.exportNames[t];n&&(n instanceof sa&&(this.needsExportsShim=!0),n.exportName=t,"es"===e.format||"system"===e.format||!n.isReassigned||n.isId||n instanceof ta&&n.hasId?n.setRenderNames(null,null):n.setRenderNames("exports",t));}const t=new Set;this.needsExportsShim&&t.add(na),"es"!==e.format&&(t.add("exports"),"cjs"===e.format&&t.add(ia).add("require").add("module").add("__filename").add("__dirname")),yh(this.orderedModules,this.dependencies,this.imports,t,e.format,!1!==e.interop,this.graph.preserveModules);}setUpChunkImportsAndExportsForModule(e){for(const t of e.imports)t.module.chunk!==this&&(this.imports.add(t),t.module instanceof lh&&t.module.chunk.exports.add(t));if(e.isEntryPoint||e.dynamicallyImportedBy.some(e=>e.chunk!==this)){const t=e.getExportNamesByVariable();for(const e of t.keys()){this.exports.add(e);const t=e.module;t&&t.chunk&&t.chunk!==this&&t.chunk.exports.add(e);}}if(e.getOrCreateNamespace().included)for(const t of Object.keys(e.reexports)){const n=e.reexports[t],i=n.module.getVariableForExportName(n.localName);i.module.chunk!==this&&(this.imports.add(i),i.module instanceof lh&&i.module.chunk.exports.add(i));}for(const{node:t,resolution:n}of e.dynamicImports)t.included&&n instanceof lh&&n.chunk===this&&n.getOrCreateNamespace().include();}}var Nh={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},$h="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",Rh={5:$h,"5module":$h+" export import",6:$h+" const class extends export import super"},Oh=/^in(stanceof)?$/,Mh="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-Ᶎꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭧꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",Dh="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",Th=new RegExp("["+Mh+"]"),Lh=new RegExp("["+Mh+Dh+"]");Mh=Dh=null;var Vh=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,155,22,13,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,0,33,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,0,161,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,754,9486,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541],Bh=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,232,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,792487,239];function zh(e,t){for(var n=65536,i=0;i<t.length;i+=2){if((n+=t[i])>e)return !1;if((n+=t[i+1])>=e)return !0}}function jh(e,t){return e<65?36===e:e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&Th.test(String.fromCharCode(e)):!1!==t&&zh(e,Vh)))}function Wh(e,t){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&Lh.test(String.fromCharCode(e)):!1!==t&&(zh(e,Vh)||zh(e,Bh)))))}var Uh=function(e,t){void 0===t&&(t={}),this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop||null,this.updateContext=null;};function Fh(e,t){return new Uh(e,{beforeExpr:!0,binop:t})}var qh={beforeExpr:!0},Hh={startsExpr:!0},Gh={};function Kh(e,t){return void 0===t&&(t={}),t.keyword=e,Gh[e]=new Uh(e,t)}var Yh={num:new Uh("num",Hh),regexp:new Uh("regexp",Hh),string:new Uh("string",Hh),name:new Uh("name",Hh),eof:new Uh("eof"),bracketL:new Uh("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new Uh("]"),braceL:new Uh("{",{beforeExpr:!0,startsExpr:!0}),braceR:new Uh("}"),parenL:new Uh("(",{beforeExpr:!0,startsExpr:!0}),parenR:new Uh(")"),comma:new Uh(",",qh),semi:new Uh(";",qh),colon:new Uh(":",qh),dot:new Uh("."),question:new Uh("?",qh),arrow:new Uh("=>",qh),template:new Uh("template"),invalidTemplate:new Uh("invalidTemplate"),ellipsis:new Uh("...",qh),backQuote:new Uh("`",Hh),dollarBraceL:new Uh("${",{beforeExpr:!0,startsExpr:!0}),eq:new Uh("=",{beforeExpr:!0,isAssign:!0}),assign:new Uh("_=",{beforeExpr:!0,isAssign:!0}),incDec:new Uh("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new Uh("!/~",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:Fh("||",1),logicalAND:Fh("&&",2),bitwiseOR:Fh("|",3),bitwiseXOR:Fh("^",4),bitwiseAND:Fh("&",5),equality:Fh("==/!=/===/!==",6),relational:Fh("</>/<=/>=",7),bitShift:Fh("<</>>/>>>",8),plusMin:new Uh("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:Fh("%",10),star:Fh("*",10),slash:Fh("/",10),starstar:new Uh("**",{beforeExpr:!0}),_break:Kh("break"),_case:Kh("case",qh),_catch:Kh("catch"),_continue:Kh("continue"),_debugger:Kh("debugger"),_default:Kh("default",qh),_do:Kh("do",{isLoop:!0,beforeExpr:!0}),_else:Kh("else",qh),_finally:Kh("finally"),_for:Kh("for",{isLoop:!0}),_function:Kh("function",Hh),_if:Kh("if"),_return:Kh("return",qh),_switch:Kh("switch"),_throw:Kh("throw",qh),_try:Kh("try"),_var:Kh("var"),_const:Kh("const"),_while:Kh("while",{isLoop:!0}),_with:Kh("with"),_new:Kh("new",{beforeExpr:!0,startsExpr:!0}),_this:Kh("this",Hh),_super:Kh("super",Hh),_class:Kh("class",Hh),_extends:Kh("extends",qh),_export:Kh("export"),_import:Kh("import",Hh),_null:Kh("null",Hh),_true:Kh("true",Hh),_false:Kh("false",Hh),_in:Kh("in",{beforeExpr:!0,binop:7}),_instanceof:Kh("instanceof",{beforeExpr:!0,binop:7}),_typeof:Kh("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:Kh("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:Kh("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},Xh=/\r\n?|\n|\u2028|\u2029/,Qh=new RegExp(Xh.source,"g");function Jh(e,t){return 10===e||13===e||!t&&(8232===e||8233===e)}var Zh=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,eu=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,tu=Object.prototype,nu=tu.hasOwnProperty,iu=tu.toString;function ru(e,t){return nu.call(e,t)}var su=Array.isArray||function(e){return "[object Array]"===iu.call(e)};function au(e){return new RegExp("^(?:"+e.replace(/ /g,"|")+")$")}var ou=function(e,t){this.line=e,this.column=t;};ou.prototype.offset=function(e){return new ou(this.line,this.column+e)};var hu=function(e,t,n){this.start=t,this.end=n,null!==e.sourceFile&&(this.source=e.sourceFile);};function uu(e,t){for(var n=1,i=0;;){Qh.lastIndex=i;var r=Qh.exec(e);if(!(r&&r.index<t))return new ou(n,t-i);++n,i=r.index+r[0].length;}}var cu={ecmaVersion:10,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowAwaitOutsideFunction:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1};function lu(e){var t={};for(var n in cu)t[n]=e&&ru(e,n)?e[n]:cu[n];if(t.ecmaVersion>=2015&&(t.ecmaVersion-=2009),null==t.allowReserved&&(t.allowReserved=t.ecmaVersion<5),su(t.onToken)){var i=t.onToken;t.onToken=function(e){return i.push(e)};}return su(t.onComment)&&(t.onComment=function(e,t){return function(n,i,r,s,a,o){var h={type:n?"Block":"Line",value:i,start:r,end:s};e.locations&&(h.loc=new hu(this,a,o)),e.ranges&&(h.range=[r,s]),t.push(h);}}(t,t.onComment)),t}var pu=2,du=1|pu,fu=4,mu=8;function gu(e,t){return pu|(e?fu:0)|(t?mu:0)}var yu=function(e,t,n){this.options=e=lu(e),this.sourceFile=e.sourceFile,this.keywords=au(Rh[e.ecmaVersion>=6?6:"module"===e.sourceType?"5module":5]);var i="";if(!0!==e.allowReserved){for(var r=e.ecmaVersion;!(i=Nh[r]);r--);"module"===e.sourceType&&(i+=" await");}this.reservedWords=au(i);var s=(i?i+" ":"")+Nh.strict;this.reservedWordsStrict=au(s),this.reservedWordsStrictBind=au(s+" "+Nh.strictBind),this.input=String(t),this.containsEsc=!1,n?(this.pos=n,this.lineStart=this.input.lastIndexOf("\n",n-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(Xh).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=Yh.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule="module"===e.sourceType,this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.yieldPos=this.awaitPos=this.awaitIdentPos=0,this.labels=[],this.undefinedExports={},0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2),this.scopeStack=[],this.enterScope(1),this.regexpState=null;},vu={inFunction:{configurable:!0},inGenerator:{configurable:!0},inAsync:{configurable:!0},allowSuper:{configurable:!0},allowDirectSuper:{configurable:!0},treatFunctionsAsVar:{configurable:!0}};yu.prototype.parse=function(){var e=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(e)},vu.inFunction.get=function(){return (this.currentVarScope().flags&pu)>0},vu.inGenerator.get=function(){return (this.currentVarScope().flags&mu)>0},vu.inAsync.get=function(){return (this.currentVarScope().flags&fu)>0},vu.allowSuper.get=function(){return (64&this.currentThisScope().flags)>0},vu.allowDirectSuper.get=function(){return (128&this.currentThisScope().flags)>0},vu.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())},yu.prototype.inNonArrowFunction=function(){return (this.currentThisScope().flags&pu)>0},yu.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var n=this,i=0;i<e.length;i++)n=e[i](n);return n},yu.parse=function(e,t){return new this(t,e).parse()},yu.parseExpressionAt=function(e,t,n){var i=new this(n,e,t);return i.nextToken(),i.parseExpression()},yu.tokenizer=function(e,t){return new this(t,e)},Object.defineProperties(yu.prototype,vu);var xu=yu.prototype,_u=/^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;function Eu(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1;}xu.strictDirective=function(e){for(;;){eu.lastIndex=e,e+=eu.exec(this.input)[0].length;var t=_u.exec(this.input.slice(e));if(!t)return !1;if("use strict"===(t[1]||t[2]))return !0;e+=t[0].length,eu.lastIndex=e,e+=eu.exec(this.input)[0].length,";"===this.input[e]&&e++;}},xu.eat=function(e){return this.type===e&&(this.next(),!0)},xu.isContextual=function(e){return this.type===Yh.name&&this.value===e&&!this.containsEsc},xu.eatContextual=function(e){return !!this.isContextual(e)&&(this.next(),!0)},xu.expectContextual=function(e){this.eatContextual(e)||this.unexpected();},xu.canInsertSemicolon=function(){return this.type===Yh.eof||this.type===Yh.braceR||Xh.test(this.input.slice(this.lastTokEnd,this.start))},xu.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},xu.semicolon=function(){this.eat(Yh.semi)||this.insertSemicolon()||this.unexpected();},xu.afterTrailingComma=function(e,t){if(this.type===e)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),t||this.next(),!0},xu.expect=function(e){this.eat(e)||this.unexpected();},xu.unexpected=function(e){this.raise(null!=e?e:this.start,"Unexpected token");},xu.checkPatternErrors=function(e,t){if(e){e.trailingComma>-1&&this.raiseRecoverable(e.trailingComma,"Comma is not permitted after the rest element");var n=t?e.parenthesizedAssign:e.parenthesizedBind;n>-1&&this.raiseRecoverable(n,"Parenthesized pattern");}},xu.checkExpressionErrors=function(e,t){if(!e)return !1;var n=e.shorthandAssign,i=e.doubleProto;if(!t)return n>=0||i>=0;n>=0&&this.raise(n,"Shorthand property assignments are valid only in destructuring patterns"),i>=0&&this.raiseRecoverable(i,"Redefinition of __proto__ property");},xu.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value");},xu.isSimpleAssignTarget=function(e){return "ParenthesizedExpression"===e.type?this.isSimpleAssignTarget(e.expression):"Identifier"===e.type||"MemberExpression"===e.type};var bu=yu.prototype;bu.parseTopLevel=function(e){var t={};for(e.body||(e.body=[]);this.type!==Yh.eof;){var n=this.parseStatement(null,!0,t);e.body.push(n);}if(this.inModule)for(var i=0,r=Object.keys(this.undefinedExports);i<r.length;i+=1){var s=r[i];this.raiseRecoverable(this.undefinedExports[s].start,"Export '"+s+"' is not defined");}return this.adaptDirectivePrologue(e.body),this.next(),e.sourceType=this.options.sourceType,this.finishNode(e,"Program")};var Au={kind:"loop"},Su={kind:"switch"};bu.isLet=function(e){if(this.options.ecmaVersion<6||!this.isContextual("let"))return !1;eu.lastIndex=this.pos;var t=eu.exec(this.input),n=this.pos+t[0].length,i=this.input.charCodeAt(n);if(91===i)return !0;if(e)return !1;if(123===i)return !0;if(jh(i,!0)){for(var r=n+1;Wh(this.input.charCodeAt(r),!0);)++r;var s=this.input.slice(n,r);if(!Oh.test(s))return !0}return !1},bu.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async"))return !1;eu.lastIndex=this.pos;var e=eu.exec(this.input),t=this.pos+e[0].length;return !(Xh.test(this.input.slice(this.pos,t))||"function"!==this.input.slice(t,t+8)||t+8!==this.input.length&&Wh(this.input.charAt(t+8)))},bu.parseStatement=function(e,t,n){var i,r=this.type,s=this.startNode();switch(this.isLet(e)&&(r=Yh._var,i="let"),r){case Yh._break:case Yh._continue:return this.parseBreakContinueStatement(s,r.keyword);case Yh._debugger:return this.parseDebuggerStatement(s);case Yh._do:return this.parseDoStatement(s);case Yh._for:return this.parseForStatement(s);case Yh._function:return e&&(this.strict||"if"!==e&&"label"!==e)&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(s,!1,!e);case Yh._class:return e&&this.unexpected(),this.parseClass(s,!0);case Yh._if:return this.parseIfStatement(s);case Yh._return:return this.parseReturnStatement(s);case Yh._switch:return this.parseSwitchStatement(s);case Yh._throw:return this.parseThrowStatement(s);case Yh._try:return this.parseTryStatement(s);case Yh._const:case Yh._var:return i=i||this.value,e&&"var"!==i&&this.unexpected(),this.parseVarStatement(s,i);case Yh._while:return this.parseWhileStatement(s);case Yh._with:return this.parseWithStatement(s);case Yh.braceL:return this.parseBlock(!0,s);case Yh.semi:return this.parseEmptyStatement(s);case Yh._export:case Yh._import:if(this.options.ecmaVersion>10&&r===Yh._import){eu.lastIndex=this.pos;var a=eu.exec(this.input),o=this.pos+a[0].length;if(40===this.input.charCodeAt(o))return this.parseExpressionStatement(s,this.parseExpression())}return this.options.allowImportExportEverywhere||(t||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),r===Yh._import?this.parseImport(s):this.parseExport(s,n);default:if(this.isAsyncFunction())return e&&this.unexpected(),this.next(),this.parseFunctionStatement(s,!0,!e);var h=this.value,u=this.parseExpression();return r===Yh.name&&"Identifier"===u.type&&this.eat(Yh.colon)?this.parseLabeledStatement(s,h,u,e):this.parseExpressionStatement(s,u)}},bu.parseBreakContinueStatement=function(e,t){var n="break"===t;this.next(),this.eat(Yh.semi)||this.insertSemicolon()?e.label=null:this.type!==Yh.name?this.unexpected():(e.label=this.parseIdent(),this.semicolon());for(var i=0;i<this.labels.length;++i){var r=this.labels[i];if(null==e.label||r.name===e.label.name){if(null!=r.kind&&(n||"loop"===r.kind))break;if(e.label&&n)break}}return i===this.labels.length&&this.raise(e.start,"Unsyntactic "+t),this.finishNode(e,n?"BreakStatement":"ContinueStatement")},bu.parseDebuggerStatement=function(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")},bu.parseDoStatement=function(e){return this.next(),this.labels.push(Au),e.body=this.parseStatement("do"),this.labels.pop(),this.expect(Yh._while),e.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(Yh.semi):this.semicolon(),this.finishNode(e,"DoWhileStatement")},bu.parseForStatement=function(e){this.next();var t=this.options.ecmaVersion>=9&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)&&this.eatContextual("await")?this.lastTokStart:-1;if(this.labels.push(Au),this.enterScope(0),this.expect(Yh.parenL),this.type===Yh.semi)return t>-1&&this.unexpected(t),this.parseFor(e,null);var n=this.isLet();if(this.type===Yh._var||this.type===Yh._const||n){var i=this.startNode(),r=n?"let":this.value;return this.next(),this.parseVar(i,!0,r),this.finishNode(i,"VariableDeclaration"),(this.type===Yh._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&1===i.declarations.length?(this.options.ecmaVersion>=9&&(this.type===Yh._in?t>-1&&this.unexpected(t):e.await=t>-1),this.parseForIn(e,i)):(t>-1&&this.unexpected(t),this.parseFor(e,i))}var s=new Eu,a=this.parseExpression(!0,s);return this.type===Yh._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.options.ecmaVersion>=9&&(this.type===Yh._in?t>-1&&this.unexpected(t):e.await=t>-1),this.toAssignable(a,!1,s),this.checkLVal(a),this.parseForIn(e,a)):(this.checkExpressionErrors(s,!0),t>-1&&this.unexpected(t),this.parseFor(e,a))},bu.parseFunctionStatement=function(e,t,n){return this.next(),this.parseFunction(e,Iu|(n?0:Cu),!1,t)},bu.parseIfStatement=function(e){return this.next(),e.test=this.parseParenExpression(),e.consequent=this.parseStatement("if"),e.alternate=this.eat(Yh._else)?this.parseStatement("if"):null,this.finishNode(e,"IfStatement")},bu.parseReturnStatement=function(e){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(Yh.semi)||this.insertSemicolon()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")},bu.parseSwitchStatement=function(e){var t;this.next(),e.discriminant=this.parseParenExpression(),e.cases=[],this.expect(Yh.braceL),this.labels.push(Su),this.enterScope(0);for(var n=!1;this.type!==Yh.braceR;)if(this.type===Yh._case||this.type===Yh._default){var i=this.type===Yh._case;t&&this.finishNode(t,"SwitchCase"),e.cases.push(t=this.startNode()),t.consequent=[],this.next(),i?t.test=this.parseExpression():(n&&this.raiseRecoverable(this.lastTokStart,"Multiple default clauses"),n=!0,t.test=null),this.expect(Yh.colon);}else t||this.unexpected(),t.consequent.push(this.parseStatement(null));return this.exitScope(),t&&this.finishNode(t,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(e,"SwitchStatement")},bu.parseThrowStatement=function(e){return this.next(),Xh.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")};var wu=[];bu.parseTryStatement=function(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.type===Yh._catch){var t=this.startNode();if(this.next(),this.eat(Yh.parenL)){t.param=this.parseBindingAtom();var n="Identifier"===t.param.type;this.enterScope(n?32:0),this.checkLVal(t.param,n?4:2),this.expect(Yh.parenR);}else this.options.ecmaVersion<10&&this.unexpected(),t.param=null,this.enterScope(0);t.body=this.parseBlock(!1),this.exitScope(),e.handler=this.finishNode(t,"CatchClause");}return e.finalizer=this.eat(Yh._finally)?this.parseBlock():null,e.handler||e.finalizer||this.raise(e.start,"Missing catch or finally clause"),this.finishNode(e,"TryStatement")},bu.parseVarStatement=function(e,t){return this.next(),this.parseVar(e,!1,t),this.semicolon(),this.finishNode(e,"VariableDeclaration")},bu.parseWhileStatement=function(e){return this.next(),e.test=this.parseParenExpression(),this.labels.push(Au),e.body=this.parseStatement("while"),this.labels.pop(),this.finishNode(e,"WhileStatement")},bu.parseWithStatement=function(e){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),e.object=this.parseParenExpression(),e.body=this.parseStatement("with"),this.finishNode(e,"WithStatement")},bu.parseEmptyStatement=function(e){return this.next(),this.finishNode(e,"EmptyStatement")},bu.parseLabeledStatement=function(e,t,n,i){for(var r=0,s=this.labels;r<s.length;r+=1){s[r].name===t&&this.raise(n.start,"Label '"+t+"' is already declared");}for(var a=this.type.isLoop?"loop":this.type===Yh._switch?"switch":null,o=this.labels.length-1;o>=0;o--){var h=this.labels[o];if(h.statementStart!==e.start)break;h.statementStart=this.start,h.kind=a;}return this.labels.push({name:t,kind:a,statementStart:this.start}),e.body=this.parseStatement(i?-1===i.indexOf("label")?i+"label":i:"label"),this.labels.pop(),e.label=n,this.finishNode(e,"LabeledStatement")},bu.parseExpressionStatement=function(e,t){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")},bu.parseBlock=function(e,t){for(void 0===e&&(e=!0),void 0===t&&(t=this.startNode()),t.body=[],this.expect(Yh.braceL),e&&this.enterScope(0);!this.eat(Yh.braceR);){var n=this.parseStatement(null);t.body.push(n);}return e&&this.exitScope(),this.finishNode(t,"BlockStatement")},bu.parseFor=function(e,t){return e.init=t,this.expect(Yh.semi),e.test=this.type===Yh.semi?null:this.parseExpression(),this.expect(Yh.semi),e.update=this.type===Yh.parenR?null:this.parseExpression(),this.expect(Yh.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,"ForStatement")},bu.parseForIn=function(e,t){var n=this.type===Yh._in;return this.next(),"VariableDeclaration"===t.type&&null!=t.declarations[0].init&&(!n||this.options.ecmaVersion<8||this.strict||"var"!==t.kind||"Identifier"!==t.declarations[0].id.type)?this.raise(t.start,(n?"for-in":"for-of")+" loop variable declaration may not have an initializer"):"AssignmentPattern"===t.type&&this.raise(t.start,"Invalid left-hand side in for-loop"),e.left=t,e.right=n?this.parseExpression():this.parseMaybeAssign(),this.expect(Yh.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,n?"ForInStatement":"ForOfStatement")},bu.parseVar=function(e,t,n){for(e.declarations=[],e.kind=n;;){var i=this.startNode();if(this.parseVarId(i,n),this.eat(Yh.eq)?i.init=this.parseMaybeAssign(t):"const"!==n||this.type===Yh._in||this.options.ecmaVersion>=6&&this.isContextual("of")?"Identifier"===i.id.type||t&&(this.type===Yh._in||this.isContextual("of"))?i.init=null:this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),e.declarations.push(this.finishNode(i,"VariableDeclarator")),!this.eat(Yh.comma))break}return e},bu.parseVarId=function(e,t){e.id=this.parseBindingAtom(),this.checkLVal(e.id,"var"===t?1:2,!1);};var Iu=1,Cu=2;bu.parseFunction=function(e,t,n,i){this.initFunction(e),(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!i)&&(this.type===Yh.star&&t&Cu&&this.unexpected(),e.generator=this.eat(Yh.star)),this.options.ecmaVersion>=8&&(e.async=!!i),t&Iu&&(e.id=4&t&&this.type!==Yh.name?null:this.parseIdent(),!e.id||t&Cu||this.checkLVal(e.id,this.strict||e.generator||e.async?this.treatFunctionsAsVar?1:2:3));var r=this.yieldPos,s=this.awaitPos,a=this.awaitIdentPos;return this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(gu(e.async,e.generator)),t&Iu||(e.id=this.type===Yh.name?this.parseIdent():null),this.parseFunctionParams(e),this.parseFunctionBody(e,n,!1),this.yieldPos=r,this.awaitPos=s,this.awaitIdentPos=a,this.finishNode(e,t&Iu?"FunctionDeclaration":"FunctionExpression")},bu.parseFunctionParams=function(e){this.expect(Yh.parenL),e.params=this.parseBindingList(Yh.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams();},bu.parseClass=function(e,t){this.next();var n=this.strict;this.strict=!0,this.parseClassId(e,t),this.parseClassSuper(e);var i=this.startNode(),r=!1;for(i.body=[],this.expect(Yh.braceL);!this.eat(Yh.braceR);){var s=this.parseClassElement(null!==e.superClass);s&&(i.body.push(s),"MethodDefinition"===s.type&&"constructor"===s.kind&&(r&&this.raise(s.start,"Duplicate constructor in the same class"),r=!0));}return e.body=this.finishNode(i,"ClassBody"),this.strict=n,this.finishNode(e,t?"ClassDeclaration":"ClassExpression")},bu.parseClassElement=function(e){var t=this;if(this.eat(Yh.semi))return null;var n=this.startNode(),i=function(e,i){void 0===i&&(i=!1);var r=t.start,s=t.startLoc;return !!t.eatContextual(e)&&(!(t.type===Yh.parenL||i&&t.canInsertSemicolon())||(n.key&&t.unexpected(),n.computed=!1,n.key=t.startNodeAt(r,s),n.key.name=e,t.finishNode(n.key,"Identifier"),!1))};n.kind="method",n.static=i("static");var r=this.eat(Yh.star),s=!1;r||(this.options.ecmaVersion>=8&&i("async",!0)?(s=!0,r=this.options.ecmaVersion>=9&&this.eat(Yh.star)):i("get")?n.kind="get":i("set")&&(n.kind="set")),n.key||this.parsePropertyName(n);var a=n.key,o=!1;return n.computed||n.static||!("Identifier"===a.type&&"constructor"===a.name||"Literal"===a.type&&"constructor"===a.value)?n.static&&"Identifier"===a.type&&"prototype"===a.name&&this.raise(a.start,"Classes may not have a static property named prototype"):("method"!==n.kind&&this.raise(a.start,"Constructor can't have get/set modifier"),r&&this.raise(a.start,"Constructor can't be a generator"),s&&this.raise(a.start,"Constructor can't be an async method"),n.kind="constructor",o=e),this.parseClassMethod(n,r,s,o),"get"===n.kind&&0!==n.value.params.length&&this.raiseRecoverable(n.value.start,"getter should have no params"),"set"===n.kind&&1!==n.value.params.length&&this.raiseRecoverable(n.value.start,"setter should have exactly one param"),"set"===n.kind&&"RestElement"===n.value.params[0].type&&this.raiseRecoverable(n.value.params[0].start,"Setter cannot use rest params"),n},bu.parseClassMethod=function(e,t,n,i){return e.value=this.parseMethod(t,n,i),this.finishNode(e,"MethodDefinition")},bu.parseClassId=function(e,t){this.type===Yh.name?(e.id=this.parseIdent(),t&&this.checkLVal(e.id,2,!1)):(!0===t&&this.unexpected(),e.id=null);},bu.parseClassSuper=function(e){e.superClass=this.eat(Yh._extends)?this.parseExprSubscripts():null;},bu.parseExport=function(e,t){if(this.next(),this.eat(Yh.star))return this.expectContextual("from"),this.type!==Yh.string&&this.unexpected(),e.source=this.parseExprAtom(),this.semicolon(),this.finishNode(e,"ExportAllDeclaration");if(this.eat(Yh._default)){var n;if(this.checkExport(t,"default",this.lastTokStart),this.type===Yh._function||(n=this.isAsyncFunction())){var i=this.startNode();this.next(),n&&this.next(),e.declaration=this.parseFunction(i,4|Iu,!1,n);}else if(this.type===Yh._class){var r=this.startNode();e.declaration=this.parseClass(r,"nullableID");}else e.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())e.declaration=this.parseStatement(null),"VariableDeclaration"===e.declaration.type?this.checkVariableExport(t,e.declaration.declarations):this.checkExport(t,e.declaration.id.name,e.declaration.id.start),e.specifiers=[],e.source=null;else{if(e.declaration=null,e.specifiers=this.parseExportSpecifiers(t),this.eatContextual("from"))this.type!==Yh.string&&this.unexpected(),e.source=this.parseExprAtom();else{for(var s=0,a=e.specifiers;s<a.length;s+=1){var o=a[s];this.checkUnreserved(o.local),this.checkLocalExport(o.local);}e.source=null;}this.semicolon();}return this.finishNode(e,"ExportNamedDeclaration")},bu.checkExport=function(e,t,n){e&&(ru(e,t)&&this.raiseRecoverable(n,"Duplicate export '"+t+"'"),e[t]=!0);},bu.checkPatternExport=function(e,t){var n=t.type;if("Identifier"===n)this.checkExport(e,t.name,t.start);else if("ObjectPattern"===n)for(var i=0,r=t.properties;i<r.length;i+=1){var s=r[i];this.checkPatternExport(e,s);}else if("ArrayPattern"===n)for(var a=0,o=t.elements;a<o.length;a+=1){var h=o[a];h&&this.checkPatternExport(e,h);}else"Property"===n?this.checkPatternExport(e,t.value):"AssignmentPattern"===n?this.checkPatternExport(e,t.left):"RestElement"===n?this.checkPatternExport(e,t.argument):"ParenthesizedExpression"===n&&this.checkPatternExport(e,t.expression);},bu.checkVariableExport=function(e,t){if(e)for(var n=0,i=t;n<i.length;n+=1){var r=i[n];this.checkPatternExport(e,r.id);}},bu.shouldParseExportStatement=function(){return "var"===this.type.keyword||"const"===this.type.keyword||"class"===this.type.keyword||"function"===this.type.keyword||this.isLet()||this.isAsyncFunction()},bu.parseExportSpecifiers=function(e){var t=[],n=!0;for(this.expect(Yh.braceL);!this.eat(Yh.braceR);){if(n)n=!1;else if(this.expect(Yh.comma),this.afterTrailingComma(Yh.braceR))break;var i=this.startNode();i.local=this.parseIdent(!0),i.exported=this.eatContextual("as")?this.parseIdent(!0):i.local,this.checkExport(e,i.exported.name,i.exported.start),t.push(this.finishNode(i,"ExportSpecifier"));}return t},bu.parseImport=function(e){return this.next(),this.type===Yh.string?(e.specifiers=wu,e.source=this.parseExprAtom()):(e.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),e.source=this.type===Yh.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(e,"ImportDeclaration")},bu.parseImportSpecifiers=function(){var e=[],t=!0;if(this.type===Yh.name){var n=this.startNode();if(n.local=this.parseIdent(),this.checkLVal(n.local,2),e.push(this.finishNode(n,"ImportDefaultSpecifier")),!this.eat(Yh.comma))return e}if(this.type===Yh.star){var i=this.startNode();return this.next(),this.expectContextual("as"),i.local=this.parseIdent(),this.checkLVal(i.local,2),e.push(this.finishNode(i,"ImportNamespaceSpecifier")),e}for(this.expect(Yh.braceL);!this.eat(Yh.braceR);){if(t)t=!1;else if(this.expect(Yh.comma),this.afterTrailingComma(Yh.braceR))break;var r=this.startNode();r.imported=this.parseIdent(!0),this.eatContextual("as")?r.local=this.parseIdent():(this.checkUnreserved(r.imported),r.local=r.imported),this.checkLVal(r.local,2),e.push(this.finishNode(r,"ImportSpecifier"));}return e},bu.adaptDirectivePrologue=function(e){for(var t=0;t<e.length&&this.isDirectiveCandidate(e[t]);++t)e[t].directive=e[t].expression.raw.slice(1,-1);},bu.isDirectiveCandidate=function(e){return "ExpressionStatement"===e.type&&"Literal"===e.expression.type&&"string"==typeof e.expression.value&&('"'===this.input[e.start]||"'"===this.input[e.start])};var Pu=yu.prototype;Pu.toAssignable=function(e,t,n){if(this.options.ecmaVersion>=6&&e)switch(e.type){case"Identifier":this.inAsync&&"await"===e.name&&this.raise(e.start,"Cannot use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":case"RestElement":break;case"ObjectExpression":e.type="ObjectPattern",n&&this.checkPatternErrors(n,!0);for(var i=0,r=e.properties;i<r.length;i+=1){var s=r[i];this.toAssignable(s,t),"RestElement"!==s.type||"ArrayPattern"!==s.argument.type&&"ObjectPattern"!==s.argument.type||this.raise(s.argument.start,"Unexpected token");}break;case"Property":"init"!==e.kind&&this.raise(e.key.start,"Object pattern can't contain getter or setter"),this.toAssignable(e.value,t);break;case"ArrayExpression":e.type="ArrayPattern",n&&this.checkPatternErrors(n,!0),this.toAssignableList(e.elements,t);break;case"SpreadElement":e.type="RestElement",this.toAssignable(e.argument,t),"AssignmentPattern"===e.argument.type&&this.raise(e.argument.start,"Rest elements cannot have a default value");break;case"AssignmentExpression":"="!==e.operator&&this.raise(e.left.end,"Only '=' operator can be used for specifying default value."),e.type="AssignmentPattern",delete e.operator,this.toAssignable(e.left,t);case"AssignmentPattern":break;case"ParenthesizedExpression":this.toAssignable(e.expression,t,n);break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue");}else n&&this.checkPatternErrors(n,!0);return e},Pu.toAssignableList=function(e,t){for(var n=e.length,i=0;i<n;i++){var r=e[i];r&&this.toAssignable(r,t);}if(n){var s=e[n-1];6===this.options.ecmaVersion&&t&&s&&"RestElement"===s.type&&"Identifier"!==s.argument.type&&this.unexpected(s.argument.start);}return e},Pu.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(!1,e),this.finishNode(t,"SpreadElement")},Pu.parseRestBinding=function(){var e=this.startNode();return this.next(),6===this.options.ecmaVersion&&this.type!==Yh.name&&this.unexpected(),e.argument=this.parseBindingAtom(),this.finishNode(e,"RestElement")},Pu.parseBindingAtom=function(){if(this.options.ecmaVersion>=6)switch(this.type){case Yh.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(Yh.bracketR,!0,!0),this.finishNode(e,"ArrayPattern");case Yh.braceL:return this.parseObj(!0)}return this.parseIdent()},Pu.parseBindingList=function(e,t,n){for(var i=[],r=!0;!this.eat(e);)if(r?r=!1:this.expect(Yh.comma),t&&this.type===Yh.comma)i.push(null);else{if(n&&this.afterTrailingComma(e))break;if(this.type===Yh.ellipsis){var s=this.parseRestBinding();this.parseBindingListItem(s),i.push(s),this.type===Yh.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.expect(e);break}var a=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(a),i.push(a);}return i},Pu.parseBindingListItem=function(e){return e},Pu.parseMaybeDefault=function(e,t,n){if(n=n||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(Yh.eq))return n;var i=this.startNodeAt(e,t);return i.left=n,i.right=this.parseMaybeAssign(),this.finishNode(i,"AssignmentPattern")},Pu.checkLVal=function(e,t,n){switch(void 0===t&&(t=0),e.type){case"Identifier":2===t&&"let"===e.name&&this.raiseRecoverable(e.start,"let is disallowed as a lexically bound name"),this.strict&&this.reservedWordsStrictBind.test(e.name)&&this.raiseRecoverable(e.start,(t?"Binding ":"Assigning to ")+e.name+" in strict mode"),n&&(ru(n,e.name)&&this.raiseRecoverable(e.start,"Argument name clash"),n[e.name]=!0),0!==t&&5!==t&&this.declareName(e.name,t,e.start);break;case"MemberExpression":t&&this.raiseRecoverable(e.start,"Binding member expression");break;case"ObjectPattern":for(var i=0,r=e.properties;i<r.length;i+=1){var s=r[i];this.checkLVal(s,t,n);}break;case"Property":this.checkLVal(e.value,t,n);break;case"ArrayPattern":for(var a=0,o=e.elements;a<o.length;a+=1){var h=o[a];h&&this.checkLVal(h,t,n);}break;case"AssignmentPattern":this.checkLVal(e.left,t,n);break;case"RestElement":this.checkLVal(e.argument,t,n);break;case"ParenthesizedExpression":this.checkLVal(e.expression,t,n);break;default:this.raise(e.start,(t?"Binding":"Assigning to")+" rvalue");}};var ku=yu.prototype;ku.checkPropClash=function(e,t,n){if(!(this.options.ecmaVersion>=9&&"SpreadElement"===e.type||this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand))){var i,r=e.key;switch(r.type){case"Identifier":i=r.name;break;case"Literal":i=String(r.value);break;default:return}var s=e.kind;if(this.options.ecmaVersion>=6)"__proto__"===i&&"init"===s&&(t.proto&&(n&&n.doubleProto<0?n.doubleProto=r.start:this.raiseRecoverable(r.start,"Redefinition of __proto__ property")),t.proto=!0);else{var a=t[i="$"+i];if(a)("init"===s?this.strict&&a.init||a.get||a.set:a.init||a[s])&&this.raiseRecoverable(r.start,"Redefinition of property");else a=t[i]={init:!1,get:!1,set:!1};a[s]=!0;}}},ku.parseExpression=function(e,t){var n=this.start,i=this.startLoc,r=this.parseMaybeAssign(e,t);if(this.type===Yh.comma){var s=this.startNodeAt(n,i);for(s.expressions=[r];this.eat(Yh.comma);)s.expressions.push(this.parseMaybeAssign(e,t));return this.finishNode(s,"SequenceExpression")}return r},ku.parseMaybeAssign=function(e,t,n){if(this.isContextual("yield")){if(this.inGenerator)return this.parseYield(e);this.exprAllowed=!1;}var i=!1,r=-1,s=-1,a=-1;t?(r=t.parenthesizedAssign,s=t.trailingComma,a=t.shorthandAssign,t.parenthesizedAssign=t.trailingComma=t.shorthandAssign=-1):(t=new Eu,i=!0);var o=this.start,h=this.startLoc;this.type!==Yh.parenL&&this.type!==Yh.name||(this.potentialArrowAt=this.start);var u=this.parseMaybeConditional(e,t);if(n&&(u=n.call(this,u,o,h)),this.type.isAssign){var c=this.startNodeAt(o,h);return c.operator=this.value,c.left=this.type===Yh.eq?this.toAssignable(u,!1,t):u,i||Eu.call(t),t.shorthandAssign=-1,this.checkLVal(u),this.next(),c.right=this.parseMaybeAssign(e),this.finishNode(c,"AssignmentExpression")}return i&&this.checkExpressionErrors(t,!0),r>-1&&(t.parenthesizedAssign=r),s>-1&&(t.trailingComma=s),a>-1&&(t.shorthandAssign=a),u},ku.parseMaybeConditional=function(e,t){var n=this.start,i=this.startLoc,r=this.parseExprOps(e,t);if(this.checkExpressionErrors(t))return r;if(this.eat(Yh.question)){var s=this.startNodeAt(n,i);return s.test=r,s.consequent=this.parseMaybeAssign(),this.expect(Yh.colon),s.alternate=this.parseMaybeAssign(e),this.finishNode(s,"ConditionalExpression")}return r},ku.parseExprOps=function(e,t){var n=this.start,i=this.startLoc,r=this.parseMaybeUnary(t,!1);return this.checkExpressionErrors(t)?r:r.start===n&&"ArrowFunctionExpression"===r.type?r:this.parseExprOp(r,n,i,-1,e)},ku.parseExprOp=function(e,t,n,i,r){var s=this.type.binop;if(null!=s&&(!r||this.type!==Yh._in)&&s>i){var a=this.type===Yh.logicalOR||this.type===Yh.logicalAND,o=this.value;this.next();var h=this.start,u=this.startLoc,c=this.parseExprOp(this.parseMaybeUnary(null,!1),h,u,s,r),l=this.buildBinary(t,n,e,c,o,a);return this.parseExprOp(l,t,n,i,r)}return e},ku.buildBinary=function(e,t,n,i,r,s){var a=this.startNodeAt(e,t);return a.left=n,a.operator=r,a.right=i,this.finishNode(a,s?"LogicalExpression":"BinaryExpression")},ku.parseMaybeUnary=function(e,t){var n,i=this.start,r=this.startLoc;if(this.isContextual("await")&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction))n=this.parseAwait(),t=!0;else if(this.type.prefix){var s=this.startNode(),a=this.type===Yh.incDec;s.operator=this.value,s.prefix=!0,this.next(),s.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),a?this.checkLVal(s.argument):this.strict&&"delete"===s.operator&&"Identifier"===s.argument.type?this.raiseRecoverable(s.start,"Deleting local variable in strict mode"):t=!0,n=this.finishNode(s,a?"UpdateExpression":"UnaryExpression");}else{if(n=this.parseExprSubscripts(e),this.checkExpressionErrors(e))return n;for(;this.type.postfix&&!this.canInsertSemicolon();){var o=this.startNodeAt(i,r);o.operator=this.value,o.prefix=!1,o.argument=n,this.checkLVal(n),this.next(),n=this.finishNode(o,"UpdateExpression");}}return !t&&this.eat(Yh.starstar)?this.buildBinary(i,r,n,this.parseMaybeUnary(null,!1),"**",!1):n},ku.parseExprSubscripts=function(e){var t=this.start,n=this.startLoc,i=this.parseExprAtom(e),r="ArrowFunctionExpression"===i.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd);if(this.checkExpressionErrors(e)||r)return i;var s=this.parseSubscripts(i,t,n);return e&&"MemberExpression"===s.type&&(e.parenthesizedAssign>=s.start&&(e.parenthesizedAssign=-1),e.parenthesizedBind>=s.start&&(e.parenthesizedBind=-1)),s},ku.parseSubscripts=function(e,t,n,i){for(var r=this.options.ecmaVersion>=8&&"Identifier"===e.type&&"async"===e.name&&this.lastTokEnd===e.end&&!this.canInsertSemicolon()&&"async"===this.input.slice(e.start,e.end);;){var s=this.parseSubscript(e,t,n,i,r);if(s===e||"ArrowFunctionExpression"===s.type)return s;e=s;}},ku.parseSubscript=function(e,t,n,i,r){var s=this.eat(Yh.bracketL);if(s||this.eat(Yh.dot)){var a=this.startNodeAt(t,n);a.object=e,a.property=s?this.parseExpression():this.parseIdent("never"!==this.options.allowReserved),a.computed=!!s,s&&this.expect(Yh.bracketR),e=this.finishNode(a,"MemberExpression");}else if(!i&&this.eat(Yh.parenL)){var o=new Eu,h=this.yieldPos,u=this.awaitPos,c=this.awaitIdentPos;this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0;var l=this.parseExprList(Yh.parenR,this.options.ecmaVersion>=8,!1,o);if(r&&!this.canInsertSemicolon()&&this.eat(Yh.arrow))return this.checkPatternErrors(o,!1),this.checkYieldAwaitInDefaultParams(),this.awaitIdentPos>0&&this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function"),this.yieldPos=h,this.awaitPos=u,this.awaitIdentPos=c,this.parseArrowExpression(this.startNodeAt(t,n),l,!0);this.checkExpressionErrors(o,!0),this.yieldPos=h||this.yieldPos,this.awaitPos=u||this.awaitPos,this.awaitIdentPos=c||this.awaitIdentPos;var p=this.startNodeAt(t,n);p.callee=e,p.arguments=l,e=this.finishNode(p,"CallExpression");}else if(this.type===Yh.backQuote){var d=this.startNodeAt(t,n);d.tag=e,d.quasi=this.parseTemplate({isTagged:!0}),e=this.finishNode(d,"TaggedTemplateExpression");}return e},ku.parseExprAtom=function(e){this.type===Yh.slash&&this.readRegexp();var t,n=this.potentialArrowAt===this.start;switch(this.type){case Yh._super:return this.allowSuper||this.raise(this.start,"'super' keyword outside a method"),t=this.startNode(),this.next(),this.type!==Yh.parenL||this.allowDirectSuper||this.raise(t.start,"super() call outside constructor of a subclass"),this.type!==Yh.dot&&this.type!==Yh.bracketL&&this.type!==Yh.parenL&&this.unexpected(),this.finishNode(t,"Super");case Yh._this:return t=this.startNode(),this.next(),this.finishNode(t,"ThisExpression");case Yh.name:var i=this.start,r=this.startLoc,s=this.containsEsc,a=this.parseIdent(!1);if(this.options.ecmaVersion>=8&&!s&&"async"===a.name&&!this.canInsertSemicolon()&&this.eat(Yh._function))return this.parseFunction(this.startNodeAt(i,r),0,!1,!0);if(n&&!this.canInsertSemicolon()){if(this.eat(Yh.arrow))return this.parseArrowExpression(this.startNodeAt(i,r),[a],!1);if(this.options.ecmaVersion>=8&&"async"===a.name&&this.type===Yh.name&&!s)return a=this.parseIdent(!1),!this.canInsertSemicolon()&&this.eat(Yh.arrow)||this.unexpected(),this.parseArrowExpression(this.startNodeAt(i,r),[a],!0)}return a;case Yh.regexp:var o=this.value;return (t=this.parseLiteral(o.value)).regex={pattern:o.pattern,flags:o.flags},t;case Yh.num:case Yh.string:return this.parseLiteral(this.value);case Yh._null:case Yh._true:case Yh._false:return (t=this.startNode()).value=this.type===Yh._null?null:this.type===Yh._true,t.raw=this.type.keyword,this.next(),this.finishNode(t,"Literal");case Yh.parenL:var h=this.start,u=this.parseParenAndDistinguishExpression(n);return e&&(e.parenthesizedAssign<0&&!this.isSimpleAssignTarget(u)&&(e.parenthesizedAssign=h),e.parenthesizedBind<0&&(e.parenthesizedBind=h)),u;case Yh.bracketL:return t=this.startNode(),this.next(),t.elements=this.parseExprList(Yh.bracketR,!0,!0,e),this.finishNode(t,"ArrayExpression");case Yh.braceL:return this.parseObj(!1,e);case Yh._function:return t=this.startNode(),this.next(),this.parseFunction(t,0);case Yh._class:return this.parseClass(this.startNode(),!1);case Yh._new:return this.parseNew();case Yh.backQuote:return this.parseTemplate();case Yh._import:return this.options.ecmaVersion>=11?this.parseExprImport():this.unexpected();default:this.unexpected();}},ku.parseExprImport=function(){var e=this.startNode();switch(this.next(),this.type){case Yh.parenL:return this.parseDynamicImport(e);default:this.unexpected();}},ku.parseDynamicImport=function(e){if(this.next(),e.source=this.parseMaybeAssign(),!this.eat(Yh.parenR)){var t=this.start;this.eat(Yh.comma)&&this.eat(Yh.parenR)?this.raiseRecoverable(t,"Trailing comma is not allowed in import()"):this.unexpected(t);}return this.finishNode(e,"ImportExpression")},ku.parseLiteral=function(e){var t=this.startNode();return t.value=e,t.raw=this.input.slice(this.start,this.end),110===t.raw.charCodeAt(t.raw.length-1)&&(t.bigint=t.raw.slice(0,-1)),this.next(),this.finishNode(t,"Literal")},ku.parseParenExpression=function(){this.expect(Yh.parenL);var e=this.parseExpression();return this.expect(Yh.parenR),e},ku.parseParenAndDistinguishExpression=function(e){var t,n=this.start,i=this.startLoc,r=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var s,a=this.start,o=this.startLoc,h=[],u=!0,c=!1,l=new Eu,p=this.yieldPos,d=this.awaitPos;for(this.yieldPos=0,this.awaitPos=0;this.type!==Yh.parenR;){if(u?u=!1:this.expect(Yh.comma),r&&this.afterTrailingComma(Yh.parenR,!0)){c=!0;break}if(this.type===Yh.ellipsis){s=this.start,h.push(this.parseParenItem(this.parseRestBinding())),this.type===Yh.comma&&this.raise(this.start,"Comma is not permitted after the rest element");break}h.push(this.parseMaybeAssign(!1,l,this.parseParenItem));}var f=this.start,m=this.startLoc;if(this.expect(Yh.parenR),e&&!this.canInsertSemicolon()&&this.eat(Yh.arrow))return this.checkPatternErrors(l,!1),this.checkYieldAwaitInDefaultParams(),this.yieldPos=p,this.awaitPos=d,this.parseParenArrowList(n,i,h);h.length&&!c||this.unexpected(this.lastTokStart),s&&this.unexpected(s),this.checkExpressionErrors(l,!0),this.yieldPos=p||this.yieldPos,this.awaitPos=d||this.awaitPos,h.length>1?((t=this.startNodeAt(a,o)).expressions=h,this.finishNodeAt(t,"SequenceExpression",f,m)):t=h[0];}else t=this.parseParenExpression();if(this.options.preserveParens){var g=this.startNodeAt(n,i);return g.expression=t,this.finishNode(g,"ParenthesizedExpression")}return t},ku.parseParenItem=function(e){return e},ku.parseParenArrowList=function(e,t,n){return this.parseArrowExpression(this.startNodeAt(e,t),n)};var Nu=[];ku.parseNew=function(){var e=this.startNode(),t=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(Yh.dot)){e.meta=t;var n=this.containsEsc;return e.property=this.parseIdent(!0),("target"!==e.property.name||n)&&this.raiseRecoverable(e.property.start,"The only valid meta property for new is new.target"),this.inNonArrowFunction()||this.raiseRecoverable(e.start,"new.target can only be used in functions"),this.finishNode(e,"MetaProperty")}var i=this.start,r=this.startLoc,s=this.type===Yh._import;return e.callee=this.parseSubscripts(this.parseExprAtom(),i,r,!0),s&&"ImportExpression"===e.callee.type&&this.raise(i,"Cannot use new with import()"),this.eat(Yh.parenL)?e.arguments=this.parseExprList(Yh.parenR,this.options.ecmaVersion>=8,!1):e.arguments=Nu,this.finishNode(e,"NewExpression")},ku.parseTemplateElement=function(e){var t=e.isTagged,n=this.startNode();return this.type===Yh.invalidTemplate?(t||this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal"),n.value={raw:this.value,cooked:null}):n.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),n.tail=this.type===Yh.backQuote,this.finishNode(n,"TemplateElement")},ku.parseTemplate=function(e){void 0===e&&(e={});var t=e.isTagged;void 0===t&&(t=!1);var n=this.startNode();this.next(),n.expressions=[];var i=this.parseTemplateElement({isTagged:t});for(n.quasis=[i];!i.tail;)this.type===Yh.eof&&this.raise(this.pos,"Unterminated template literal"),this.expect(Yh.dollarBraceL),n.expressions.push(this.parseExpression()),this.expect(Yh.braceR),n.quasis.push(i=this.parseTemplateElement({isTagged:t}));return this.next(),this.finishNode(n,"TemplateLiteral")},ku.isAsyncProp=function(e){return !e.computed&&"Identifier"===e.key.type&&"async"===e.key.name&&(this.type===Yh.name||this.type===Yh.num||this.type===Yh.string||this.type===Yh.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===Yh.star)&&!Xh.test(this.input.slice(this.lastTokEnd,this.start))},ku.parseObj=function(e,t){var n=this.startNode(),i=!0,r={};for(n.properties=[],this.next();!this.eat(Yh.braceR);){if(i)i=!1;else if(this.expect(Yh.comma),this.afterTrailingComma(Yh.braceR))break;var s=this.parseProperty(e,t);e||this.checkPropClash(s,r,t),n.properties.push(s);}return this.finishNode(n,e?"ObjectPattern":"ObjectExpression")},ku.parseProperty=function(e,t){var n,i,r,s,a=this.startNode();if(this.options.ecmaVersion>=9&&this.eat(Yh.ellipsis))return e?(a.argument=this.parseIdent(!1),this.type===Yh.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.finishNode(a,"RestElement")):(this.type===Yh.parenL&&t&&(t.parenthesizedAssign<0&&(t.parenthesizedAssign=this.start),t.parenthesizedBind<0&&(t.parenthesizedBind=this.start)),a.argument=this.parseMaybeAssign(!1,t),this.type===Yh.comma&&t&&t.trailingComma<0&&(t.trailingComma=this.start),this.finishNode(a,"SpreadElement"));this.options.ecmaVersion>=6&&(a.method=!1,a.shorthand=!1,(e||t)&&(r=this.start,s=this.startLoc),e||(n=this.eat(Yh.star)));var o=this.containsEsc;return this.parsePropertyName(a),!e&&!o&&this.options.ecmaVersion>=8&&!n&&this.isAsyncProp(a)?(i=!0,n=this.options.ecmaVersion>=9&&this.eat(Yh.star),this.parsePropertyName(a,t)):i=!1,this.parsePropertyValue(a,e,n,i,r,s,t,o),this.finishNode(a,"Property")},ku.parsePropertyValue=function(e,t,n,i,r,s,a,o){if((n||i)&&this.type===Yh.colon&&this.unexpected(),this.eat(Yh.colon))e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,a),e.kind="init";else if(this.options.ecmaVersion>=6&&this.type===Yh.parenL)t&&this.unexpected(),e.kind="init",e.method=!0,e.value=this.parseMethod(n,i);else if(t||o||!(this.options.ecmaVersion>=5)||e.computed||"Identifier"!==e.key.type||"get"!==e.key.name&&"set"!==e.key.name||this.type===Yh.comma||this.type===Yh.braceR)this.options.ecmaVersion>=6&&!e.computed&&"Identifier"===e.key.type?((n||i)&&this.unexpected(),this.checkUnreserved(e.key),"await"!==e.key.name||this.awaitIdentPos||(this.awaitIdentPos=r),e.kind="init",t?e.value=this.parseMaybeDefault(r,s,e.key):this.type===Yh.eq&&a?(a.shorthandAssign<0&&(a.shorthandAssign=this.start),e.value=this.parseMaybeDefault(r,s,e.key)):e.value=e.key,e.shorthand=!0):this.unexpected();else{(n||i)&&this.unexpected(),e.kind=e.key.name,this.parsePropertyName(e),e.value=this.parseMethod(!1);var h="get"===e.kind?0:1;if(e.value.params.length!==h){var u=e.value.start;"get"===e.kind?this.raiseRecoverable(u,"getter should have no params"):this.raiseRecoverable(u,"setter should have exactly one param");}else"set"===e.kind&&"RestElement"===e.value.params[0].type&&this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params");}},ku.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(Yh.bracketL))return e.computed=!0,e.key=this.parseMaybeAssign(),this.expect(Yh.bracketR),e.key;e.computed=!1;}return e.key=this.type===Yh.num||this.type===Yh.string?this.parseExprAtom():this.parseIdent("never"!==this.options.allowReserved)},ku.initFunction=function(e){e.id=null,this.options.ecmaVersion>=6&&(e.generator=e.expression=!1),this.options.ecmaVersion>=8&&(e.async=!1);},ku.parseMethod=function(e,t,n){var i=this.startNode(),r=this.yieldPos,s=this.awaitPos,a=this.awaitIdentPos;return this.initFunction(i),this.options.ecmaVersion>=6&&(i.generator=e),this.options.ecmaVersion>=8&&(i.async=!!t),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(64|gu(t,i.generator)|(n?128:0)),this.expect(Yh.parenL),i.params=this.parseBindingList(Yh.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(i,!1,!0),this.yieldPos=r,this.awaitPos=s,this.awaitIdentPos=a,this.finishNode(i,"FunctionExpression")},ku.parseArrowExpression=function(e,t,n){var i=this.yieldPos,r=this.awaitPos,s=this.awaitIdentPos;return this.enterScope(16|gu(n,!1)),this.initFunction(e),this.options.ecmaVersion>=8&&(e.async=!!n),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,e.params=this.toAssignableList(t,!0),this.parseFunctionBody(e,!0,!1),this.yieldPos=i,this.awaitPos=r,this.awaitIdentPos=s,this.finishNode(e,"ArrowFunctionExpression")},ku.parseFunctionBody=function(e,t,n){var i=t&&this.type!==Yh.braceL,r=this.strict,s=!1;if(i)e.body=this.parseMaybeAssign(),e.expression=!0,this.checkParams(e,!1);else{var a=this.options.ecmaVersion>=7&&!this.isSimpleParamList(e.params);r&&!a||(s=this.strictDirective(this.end))&&a&&this.raiseRecoverable(e.start,"Illegal 'use strict' directive in function with non-simple parameter list");var o=this.labels;this.labels=[],s&&(this.strict=!0),this.checkParams(e,!r&&!s&&!t&&!n&&this.isSimpleParamList(e.params)),e.body=this.parseBlock(!1),e.expression=!1,this.adaptDirectivePrologue(e.body.body),this.labels=o;}this.exitScope(),this.strict&&e.id&&this.checkLVal(e.id,5),this.strict=r;},ku.isSimpleParamList=function(e){for(var t=0,n=e;t<n.length;t+=1){if("Identifier"!==n[t].type)return !1}return !0},ku.checkParams=function(e,t){for(var n={},i=0,r=e.params;i<r.length;i+=1){var s=r[i];this.checkLVal(s,1,t?null:n);}},ku.parseExprList=function(e,t,n,i){for(var r=[],s=!0;!this.eat(e);){if(s)s=!1;else if(this.expect(Yh.comma),t&&this.afterTrailingComma(e))break;var a=void 0;n&&this.type===Yh.comma?a=null:this.type===Yh.ellipsis?(a=this.parseSpread(i),i&&this.type===Yh.comma&&i.trailingComma<0&&(i.trailingComma=this.start)):a=this.parseMaybeAssign(!1,i),r.push(a);}return r},ku.checkUnreserved=function(e){var t=e.start,n=e.end,i=e.name;(this.inGenerator&&"yield"===i&&this.raiseRecoverable(t,"Cannot use 'yield' as identifier inside a generator"),this.inAsync&&"await"===i&&this.raiseRecoverable(t,"Cannot use 'await' as identifier inside an async function"),this.keywords.test(i)&&this.raise(t,"Unexpected keyword '"+i+"'"),this.options.ecmaVersion<6&&-1!==this.input.slice(t,n).indexOf("\\"))||(this.strict?this.reservedWordsStrict:this.reservedWords).test(i)&&(this.inAsync||"await"!==i||this.raiseRecoverable(t,"Cannot use keyword 'await' outside an async function"),this.raiseRecoverable(t,"The keyword '"+i+"' is reserved"));},ku.parseIdent=function(e,t){var n=this.startNode();return this.type===Yh.name?n.name=this.value:this.type.keyword?(n.name=this.type.keyword,"class"!==n.name&&"function"!==n.name||this.lastTokEnd===this.lastTokStart+1&&46===this.input.charCodeAt(this.lastTokStart)||this.context.pop()):this.unexpected(),this.next(),this.finishNode(n,"Identifier"),e||(this.checkUnreserved(n),"await"!==n.name||this.awaitIdentPos||(this.awaitIdentPos=n.start)),n},ku.parseYield=function(e){this.yieldPos||(this.yieldPos=this.start);var t=this.startNode();return this.next(),this.type===Yh.semi||this.canInsertSemicolon()||this.type!==Yh.star&&!this.type.startsExpr?(t.delegate=!1,t.argument=null):(t.delegate=this.eat(Yh.star),t.argument=this.parseMaybeAssign(e)),this.finishNode(t,"YieldExpression")},ku.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var e=this.startNode();return this.next(),e.argument=this.parseMaybeUnary(null,!0),this.finishNode(e,"AwaitExpression")};var $u=yu.prototype;$u.raise=function(e,t){var n=uu(this.input,e);t+=" ("+n.line+":"+n.column+")";var i=new SyntaxError(t);throw i.pos=e,i.loc=n,i.raisedAt=this.pos,i},$u.raiseRecoverable=$u.raise,$u.curPosition=function(){if(this.options.locations)return new ou(this.curLine,this.pos-this.lineStart)};var Ru=yu.prototype,Ou=function(e){this.flags=e,this.var=[],this.lexical=[],this.functions=[];};Ru.enterScope=function(e){this.scopeStack.push(new Ou(e));},Ru.exitScope=function(){this.scopeStack.pop();},Ru.treatFunctionsAsVarInScope=function(e){return e.flags&pu||!this.inModule&&1&e.flags},Ru.declareName=function(e,t,n){var i=!1;if(2===t){var r=this.currentScope();i=r.lexical.indexOf(e)>-1||r.functions.indexOf(e)>-1||r.var.indexOf(e)>-1,r.lexical.push(e),this.inModule&&1&r.flags&&delete this.undefinedExports[e];}else if(4===t){this.currentScope().lexical.push(e);}else if(3===t){var s=this.currentScope();i=this.treatFunctionsAsVar?s.lexical.indexOf(e)>-1:s.lexical.indexOf(e)>-1||s.var.indexOf(e)>-1,s.functions.push(e);}else for(var a=this.scopeStack.length-1;a>=0;--a){var o=this.scopeStack[a];if(o.lexical.indexOf(e)>-1&&!(32&o.flags&&o.lexical[0]===e)||!this.treatFunctionsAsVarInScope(o)&&o.functions.indexOf(e)>-1){i=!0;break}if(o.var.push(e),this.inModule&&1&o.flags&&delete this.undefinedExports[e],o.flags&du)break}i&&this.raiseRecoverable(n,"Identifier '"+e+"' has already been declared");},Ru.checkLocalExport=function(e){-1===this.scopeStack[0].lexical.indexOf(e.name)&&-1===this.scopeStack[0].var.indexOf(e.name)&&(this.undefinedExports[e.name]=e);},Ru.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]},Ru.currentVarScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(t.flags&du)return t}},Ru.currentThisScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(t.flags&du&&!(16&t.flags))return t}};var Mu=function(e,t,n){this.type="",this.start=t,this.end=0,e.options.locations&&(this.loc=new hu(e,n)),e.options.directSourceFile&&(this.sourceFile=e.options.directSourceFile),e.options.ranges&&(this.range=[t,0]);},Du=yu.prototype;function Tu(e,t,n,i){return e.type=t,e.end=n,this.options.locations&&(e.loc.end=i),this.options.ranges&&(e.range[1]=n),e}Du.startNode=function(){return new Mu(this,this.start,this.startLoc)},Du.startNodeAt=function(e,t){return new Mu(this,e,t)},Du.finishNode=function(e,t){return Tu.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)},Du.finishNodeAt=function(e,t,n,i){return Tu.call(this,e,t,n,i)};var Lu=function(e,t,n,i,r){this.token=e,this.isExpr=!!t,this.preserveSpace=!!n,this.override=i,this.generator=!!r;},Vu={b_stat:new Lu("{",!1),b_expr:new Lu("{",!0),b_tmpl:new Lu("${",!1),p_stat:new Lu("(",!1),p_expr:new Lu("(",!0),q_tmpl:new Lu("`",!0,!0,function(e){return e.tryReadTemplateToken()}),f_stat:new Lu("function",!1),f_expr:new Lu("function",!0),f_expr_gen:new Lu("function",!0,!1,null,!0),f_gen:new Lu("function",!1,!1,null,!0)},Bu=yu.prototype;Bu.initialContext=function(){return [Vu.b_stat]},Bu.braceIsBlock=function(e){var t=this.curContext();return t===Vu.f_expr||t===Vu.f_stat||(e!==Yh.colon||t!==Vu.b_stat&&t!==Vu.b_expr?e===Yh._return||e===Yh.name&&this.exprAllowed?Xh.test(this.input.slice(this.lastTokEnd,this.start)):e===Yh._else||e===Yh.semi||e===Yh.eof||e===Yh.parenR||e===Yh.arrow||(e===Yh.braceL?t===Vu.b_stat:e!==Yh._var&&e!==Yh._const&&e!==Yh.name&&!this.exprAllowed):!t.isExpr)},Bu.inGeneratorContext=function(){for(var e=this.context.length-1;e>=1;e--){var t=this.context[e];if("function"===t.token)return t.generator}return !1},Bu.updateContext=function(e){var t,n=this.type;n.keyword&&e===Yh.dot?this.exprAllowed=!1:(t=n.updateContext)?t.call(this,e):this.exprAllowed=n.beforeExpr;},Yh.parenR.updateContext=Yh.braceR.updateContext=function(){if(1!==this.context.length){var e=this.context.pop();e===Vu.b_stat&&"function"===this.curContext().token&&(e=this.context.pop()),this.exprAllowed=!e.isExpr;}else this.exprAllowed=!0;},Yh.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?Vu.b_stat:Vu.b_expr),this.exprAllowed=!0;},Yh.dollarBraceL.updateContext=function(){this.context.push(Vu.b_tmpl),this.exprAllowed=!0;},Yh.parenL.updateContext=function(e){var t=e===Yh._if||e===Yh._for||e===Yh._with||e===Yh._while;this.context.push(t?Vu.p_stat:Vu.p_expr),this.exprAllowed=!0;},Yh.incDec.updateContext=function(){},Yh._function.updateContext=Yh._class.updateContext=function(e){!e.beforeExpr||e===Yh.semi||e===Yh._else||e===Yh._return&&Xh.test(this.input.slice(this.lastTokEnd,this.start))||(e===Yh.colon||e===Yh.braceL)&&this.curContext()===Vu.b_stat?this.context.push(Vu.f_stat):this.context.push(Vu.f_expr),this.exprAllowed=!1;},Yh.backQuote.updateContext=function(){this.curContext()===Vu.q_tmpl?this.context.pop():this.context.push(Vu.q_tmpl),this.exprAllowed=!1;},Yh.star.updateContext=function(e){if(e===Yh._function){var t=this.context.length-1;this.context[t]===Vu.f_expr?this.context[t]=Vu.f_expr_gen:this.context[t]=Vu.f_gen;}this.exprAllowed=!0;},Yh.name.updateContext=function(e){var t=!1;this.options.ecmaVersion>=6&&e!==Yh.dot&&("of"===this.value&&!this.exprAllowed||"yield"===this.value&&this.inGeneratorContext())&&(t=!0),this.exprAllowed=t;};var zu="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",ju=zu+" Extended_Pictographic",Wu={9:zu,10:ju,11:"ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic"},Uu="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",Fu="Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",qu=Fu+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",Hu={9:Fu,10:qu,11:"Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"},Gu={};function Ku(e){var t=Gu[e]={binary:au(Wu[e]+" "+Uu),nonBinary:{General_Category:au(Uu),Script:au(Hu[e])}};t.nonBinary.Script_Extensions=t.nonBinary.Script,t.nonBinary.gc=t.nonBinary.General_Category,t.nonBinary.sc=t.nonBinary.Script,t.nonBinary.scx=t.nonBinary.Script_Extensions;}Ku(9),Ku(10),Ku(11);var Yu=yu.prototype,Xu=function(e){this.parser=e,this.validFlags="gim"+(e.options.ecmaVersion>=6?"uy":"")+(e.options.ecmaVersion>=9?"s":""),this.unicodeProperties=Gu[e.options.ecmaVersion>=11?11:e.options.ecmaVersion],this.source="",this.flags="",this.start=0,this.switchU=!1,this.switchN=!1,this.pos=0,this.lastIntValue=0,this.lastStringValue="",this.lastAssertionIsQuantifiable=!1,this.numCapturingParens=0,this.maxBackReference=0,this.groupNames=[],this.backReferenceNames=[];};function Qu(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}function Ju(e){return 36===e||e>=40&&e<=43||46===e||63===e||e>=91&&e<=94||e>=123&&e<=125}function Zu(e){return e>=65&&e<=90||e>=97&&e<=122}function ec(e){return Zu(e)||95===e}function tc(e){return ec(e)||nc(e)}function nc(e){return e>=48&&e<=57}function ic(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function rc(e){return e>=65&&e<=70?e-65+10:e>=97&&e<=102?e-97+10:e-48}function sc(e){return e>=48&&e<=55}Xu.prototype.reset=function(e,t,n){var i=-1!==n.indexOf("u");this.start=0|e,this.source=t+"",this.flags=n,this.switchU=i&&this.parser.options.ecmaVersion>=6,this.switchN=i&&this.parser.options.ecmaVersion>=9;},Xu.prototype.raise=function(e){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+e);},Xu.prototype.at=function(e){var t=this.source,n=t.length;if(e>=n)return -1;var i=t.charCodeAt(e);return !this.switchU||i<=55295||i>=57344||e+1>=n?i:(i<<10)+t.charCodeAt(e+1)-56613888},Xu.prototype.nextIndex=function(e){var t=this.source,n=t.length;if(e>=n)return n;var i=t.charCodeAt(e);return !this.switchU||i<=55295||i>=57344||e+1>=n?e+1:e+2},Xu.prototype.current=function(){return this.at(this.pos)},Xu.prototype.lookahead=function(){return this.at(this.nextIndex(this.pos))},Xu.prototype.advance=function(){this.pos=this.nextIndex(this.pos);},Xu.prototype.eat=function(e){return this.current()===e&&(this.advance(),!0)},Yu.validateRegExpFlags=function(e){for(var t=e.validFlags,n=e.flags,i=0;i<n.length;i++){var r=n.charAt(i);-1===t.indexOf(r)&&this.raise(e.start,"Invalid regular expression flag"),n.indexOf(r,i+1)>-1&&this.raise(e.start,"Duplicate regular expression flag");}},Yu.validateRegExpPattern=function(e){this.regexp_pattern(e),!e.switchN&&this.options.ecmaVersion>=9&&e.groupNames.length>0&&(e.switchN=!0,this.regexp_pattern(e));},Yu.regexp_pattern=function(e){e.pos=0,e.lastIntValue=0,e.lastStringValue="",e.lastAssertionIsQuantifiable=!1,e.numCapturingParens=0,e.maxBackReference=0,e.groupNames.length=0,e.backReferenceNames.length=0,this.regexp_disjunction(e),e.pos!==e.source.length&&(e.eat(41)&&e.raise("Unmatched ')'"),(e.eat(93)||e.eat(125))&&e.raise("Lone quantifier brackets")),e.maxBackReference>e.numCapturingParens&&e.raise("Invalid escape");for(var t=0,n=e.backReferenceNames;t<n.length;t+=1){var i=n[t];-1===e.groupNames.indexOf(i)&&e.raise("Invalid named capture referenced");}},Yu.regexp_disjunction=function(e){for(this.regexp_alternative(e);e.eat(124);)this.regexp_alternative(e);this.regexp_eatQuantifier(e,!0)&&e.raise("Nothing to repeat"),e.eat(123)&&e.raise("Lone quantifier brackets");},Yu.regexp_alternative=function(e){for(;e.pos<e.source.length&&this.regexp_eatTerm(e););},Yu.regexp_eatTerm=function(e){return this.regexp_eatAssertion(e)?(e.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(e)&&e.switchU&&e.raise("Invalid quantifier"),!0):!(e.switchU?!this.regexp_eatAtom(e):!this.regexp_eatExtendedAtom(e))&&(this.regexp_eatQuantifier(e),!0)},Yu.regexp_eatAssertion=function(e){var t=e.pos;if(e.lastAssertionIsQuantifiable=!1,e.eat(94)||e.eat(36))return !0;if(e.eat(92)){if(e.eat(66)||e.eat(98))return !0;e.pos=t;}if(e.eat(40)&&e.eat(63)){var n=!1;if(this.options.ecmaVersion>=9&&(n=e.eat(60)),e.eat(61)||e.eat(33))return this.regexp_disjunction(e),e.eat(41)||e.raise("Unterminated group"),e.lastAssertionIsQuantifiable=!n,!0}return e.pos=t,!1},Yu.regexp_eatQuantifier=function(e,t){return void 0===t&&(t=!1),!!this.regexp_eatQuantifierPrefix(e,t)&&(e.eat(63),!0)},Yu.regexp_eatQuantifierPrefix=function(e,t){return e.eat(42)||e.eat(43)||e.eat(63)||this.regexp_eatBracedQuantifier(e,t)},Yu.regexp_eatBracedQuantifier=function(e,t){var n=e.pos;if(e.eat(123)){var i=0,r=-1;if(this.regexp_eatDecimalDigits(e)&&(i=e.lastIntValue,e.eat(44)&&this.regexp_eatDecimalDigits(e)&&(r=e.lastIntValue),e.eat(125)))return -1!==r&&r<i&&!t&&e.raise("numbers out of order in {} quantifier"),!0;e.switchU&&!t&&e.raise("Incomplete quantifier"),e.pos=n;}return !1},Yu.regexp_eatAtom=function(e){return this.regexp_eatPatternCharacters(e)||e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)},Yu.regexp_eatReverseSolidusAtomEscape=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatAtomEscape(e))return !0;e.pos=t;}return !1},Yu.regexp_eatUncapturingGroup=function(e){var t=e.pos;if(e.eat(40)){if(e.eat(63)&&e.eat(58)){if(this.regexp_disjunction(e),e.eat(41))return !0;e.raise("Unterminated group");}e.pos=t;}return !1},Yu.regexp_eatCapturingGroup=function(e){if(e.eat(40)){if(this.options.ecmaVersion>=9?this.regexp_groupSpecifier(e):63===e.current()&&e.raise("Invalid group"),this.regexp_disjunction(e),e.eat(41))return e.numCapturingParens+=1,!0;e.raise("Unterminated group");}return !1},Yu.regexp_eatExtendedAtom=function(e){return e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)||this.regexp_eatInvalidBracedQuantifier(e)||this.regexp_eatExtendedPatternCharacter(e)},Yu.regexp_eatInvalidBracedQuantifier=function(e){return this.regexp_eatBracedQuantifier(e,!0)&&e.raise("Nothing to repeat"),!1},Yu.regexp_eatSyntaxCharacter=function(e){var t=e.current();return !!Ju(t)&&(e.lastIntValue=t,e.advance(),!0)},Yu.regexp_eatPatternCharacters=function(e){for(var t=e.pos,n=0;-1!==(n=e.current())&&!Ju(n);)e.advance();return e.pos!==t},Yu.regexp_eatExtendedPatternCharacter=function(e){var t=e.current();return !(-1===t||36===t||t>=40&&t<=43||46===t||63===t||91===t||94===t||124===t)&&(e.advance(),!0)},Yu.regexp_groupSpecifier=function(e){if(e.eat(63)){if(this.regexp_eatGroupName(e))return -1!==e.groupNames.indexOf(e.lastStringValue)&&e.raise("Duplicate capture group name"),void e.groupNames.push(e.lastStringValue);e.raise("Invalid group");}},Yu.regexp_eatGroupName=function(e){if(e.lastStringValue="",e.eat(60)){if(this.regexp_eatRegExpIdentifierName(e)&&e.eat(62))return !0;e.raise("Invalid capture group name");}return !1},Yu.regexp_eatRegExpIdentifierName=function(e){if(e.lastStringValue="",this.regexp_eatRegExpIdentifierStart(e)){for(e.lastStringValue+=Qu(e.lastIntValue);this.regexp_eatRegExpIdentifierPart(e);)e.lastStringValue+=Qu(e.lastIntValue);return !0}return !1},Yu.regexp_eatRegExpIdentifierStart=function(e){var t=e.pos,n=e.current();return e.advance(),92===n&&this.regexp_eatRegExpUnicodeEscapeSequence(e)&&(n=e.lastIntValue),function(e){return jh(e,!0)||36===e||95===e}(n)?(e.lastIntValue=n,!0):(e.pos=t,!1)},Yu.regexp_eatRegExpIdentifierPart=function(e){var t=e.pos,n=e.current();return e.advance(),92===n&&this.regexp_eatRegExpUnicodeEscapeSequence(e)&&(n=e.lastIntValue),function(e){return Wh(e,!0)||36===e||95===e||8204===e||8205===e}(n)?(e.lastIntValue=n,!0):(e.pos=t,!1)},Yu.regexp_eatAtomEscape=function(e){return !!(this.regexp_eatBackReference(e)||this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)||e.switchN&&this.regexp_eatKGroupName(e))||(e.switchU&&(99===e.current()&&e.raise("Invalid unicode escape"),e.raise("Invalid escape")),!1)},Yu.regexp_eatBackReference=function(e){var t=e.pos;if(this.regexp_eatDecimalEscape(e)){var n=e.lastIntValue;if(e.switchU)return n>e.maxBackReference&&(e.maxBackReference=n),!0;if(n<=e.numCapturingParens)return !0;e.pos=t;}return !1},Yu.regexp_eatKGroupName=function(e){if(e.eat(107)){if(this.regexp_eatGroupName(e))return e.backReferenceNames.push(e.lastStringValue),!0;e.raise("Invalid named reference");}return !1},Yu.regexp_eatCharacterEscape=function(e){return this.regexp_eatControlEscape(e)||this.regexp_eatCControlLetter(e)||this.regexp_eatZero(e)||this.regexp_eatHexEscapeSequence(e)||this.regexp_eatRegExpUnicodeEscapeSequence(e)||!e.switchU&&this.regexp_eatLegacyOctalEscapeSequence(e)||this.regexp_eatIdentityEscape(e)},Yu.regexp_eatCControlLetter=function(e){var t=e.pos;if(e.eat(99)){if(this.regexp_eatControlLetter(e))return !0;e.pos=t;}return !1},Yu.regexp_eatZero=function(e){return 48===e.current()&&!nc(e.lookahead())&&(e.lastIntValue=0,e.advance(),!0)},Yu.regexp_eatControlEscape=function(e){var t=e.current();return 116===t?(e.lastIntValue=9,e.advance(),!0):110===t?(e.lastIntValue=10,e.advance(),!0):118===t?(e.lastIntValue=11,e.advance(),!0):102===t?(e.lastIntValue=12,e.advance(),!0):114===t&&(e.lastIntValue=13,e.advance(),!0)},Yu.regexp_eatControlLetter=function(e){var t=e.current();return !!Zu(t)&&(e.lastIntValue=t%32,e.advance(),!0)},Yu.regexp_eatRegExpUnicodeEscapeSequence=function(e){var t,n=e.pos;if(e.eat(117)){if(this.regexp_eatFixedHexDigits(e,4)){var i=e.lastIntValue;if(e.switchU&&i>=55296&&i<=56319){var r=e.pos;if(e.eat(92)&&e.eat(117)&&this.regexp_eatFixedHexDigits(e,4)){var s=e.lastIntValue;if(s>=56320&&s<=57343)return e.lastIntValue=1024*(i-55296)+(s-56320)+65536,!0}e.pos=r,e.lastIntValue=i;}return !0}if(e.switchU&&e.eat(123)&&this.regexp_eatHexDigits(e)&&e.eat(125)&&((t=e.lastIntValue)>=0&&t<=1114111))return !0;e.switchU&&e.raise("Invalid unicode escape"),e.pos=n;}return !1},Yu.regexp_eatIdentityEscape=function(e){if(e.switchU)return !!this.regexp_eatSyntaxCharacter(e)||!!e.eat(47)&&(e.lastIntValue=47,!0);var t=e.current();return !(99===t||e.switchN&&107===t)&&(e.lastIntValue=t,e.advance(),!0)},Yu.regexp_eatDecimalEscape=function(e){e.lastIntValue=0;var t=e.current();if(t>=49&&t<=57){do{e.lastIntValue=10*e.lastIntValue+(t-48),e.advance();}while((t=e.current())>=48&&t<=57);return !0}return !1},Yu.regexp_eatCharacterClassEscape=function(e){var t=e.current();if(function(e){return 100===e||68===e||115===e||83===e||119===e||87===e}(t))return e.lastIntValue=-1,e.advance(),!0;if(e.switchU&&this.options.ecmaVersion>=9&&(80===t||112===t)){if(e.lastIntValue=-1,e.advance(),e.eat(123)&&this.regexp_eatUnicodePropertyValueExpression(e)&&e.eat(125))return !0;e.raise("Invalid property name");}return !1},Yu.regexp_eatUnicodePropertyValueExpression=function(e){var t=e.pos;if(this.regexp_eatUnicodePropertyName(e)&&e.eat(61)){var n=e.lastStringValue;if(this.regexp_eatUnicodePropertyValue(e)){var i=e.lastStringValue;return this.regexp_validateUnicodePropertyNameAndValue(e,n,i),!0}}if(e.pos=t,this.regexp_eatLoneUnicodePropertyNameOrValue(e)){var r=e.lastStringValue;return this.regexp_validateUnicodePropertyNameOrValue(e,r),!0}return !1},Yu.regexp_validateUnicodePropertyNameAndValue=function(e,t,n){ru(e.unicodeProperties.nonBinary,t)||e.raise("Invalid property name"),e.unicodeProperties.nonBinary[t].test(n)||e.raise("Invalid property value");},Yu.regexp_validateUnicodePropertyNameOrValue=function(e,t){e.unicodeProperties.binary.test(t)||e.raise("Invalid property name");},Yu.regexp_eatUnicodePropertyName=function(e){var t=0;for(e.lastStringValue="";ec(t=e.current());)e.lastStringValue+=Qu(t),e.advance();return ""!==e.lastStringValue},Yu.regexp_eatUnicodePropertyValue=function(e){var t=0;for(e.lastStringValue="";tc(t=e.current());)e.lastStringValue+=Qu(t),e.advance();return ""!==e.lastStringValue},Yu.regexp_eatLoneUnicodePropertyNameOrValue=function(e){return this.regexp_eatUnicodePropertyValue(e)},Yu.regexp_eatCharacterClass=function(e){if(e.eat(91)){if(e.eat(94),this.regexp_classRanges(e),e.eat(93))return !0;e.raise("Unterminated character class");}return !1},Yu.regexp_classRanges=function(e){for(;this.regexp_eatClassAtom(e);){var t=e.lastIntValue;if(e.eat(45)&&this.regexp_eatClassAtom(e)){var n=e.lastIntValue;!e.switchU||-1!==t&&-1!==n||e.raise("Invalid character class"),-1!==t&&-1!==n&&t>n&&e.raise("Range out of order in character class");}}},Yu.regexp_eatClassAtom=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatClassEscape(e))return !0;if(e.switchU){var n=e.current();(99===n||sc(n))&&e.raise("Invalid class escape"),e.raise("Invalid escape");}e.pos=t;}var i=e.current();return 93!==i&&(e.lastIntValue=i,e.advance(),!0)},Yu.regexp_eatClassEscape=function(e){var t=e.pos;if(e.eat(98))return e.lastIntValue=8,!0;if(e.switchU&&e.eat(45))return e.lastIntValue=45,!0;if(!e.switchU&&e.eat(99)){if(this.regexp_eatClassControlLetter(e))return !0;e.pos=t;}return this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)},Yu.regexp_eatClassControlLetter=function(e){var t=e.current();return !(!nc(t)&&95!==t)&&(e.lastIntValue=t%32,e.advance(),!0)},Yu.regexp_eatHexEscapeSequence=function(e){var t=e.pos;if(e.eat(120)){if(this.regexp_eatFixedHexDigits(e,2))return !0;e.switchU&&e.raise("Invalid escape"),e.pos=t;}return !1},Yu.regexp_eatDecimalDigits=function(e){var t=e.pos,n=0;for(e.lastIntValue=0;nc(n=e.current());)e.lastIntValue=10*e.lastIntValue+(n-48),e.advance();return e.pos!==t},Yu.regexp_eatHexDigits=function(e){var t=e.pos,n=0;for(e.lastIntValue=0;ic(n=e.current());)e.lastIntValue=16*e.lastIntValue+rc(n),e.advance();return e.pos!==t},Yu.regexp_eatLegacyOctalEscapeSequence=function(e){if(this.regexp_eatOctalDigit(e)){var t=e.lastIntValue;if(this.regexp_eatOctalDigit(e)){var n=e.lastIntValue;t<=3&&this.regexp_eatOctalDigit(e)?e.lastIntValue=64*t+8*n+e.lastIntValue:e.lastIntValue=8*t+n;}else e.lastIntValue=t;return !0}return !1},Yu.regexp_eatOctalDigit=function(e){var t=e.current();return sc(t)?(e.lastIntValue=t-48,e.advance(),!0):(e.lastIntValue=0,!1)},Yu.regexp_eatFixedHexDigits=function(e,t){var n=e.pos;e.lastIntValue=0;for(var i=0;i<t;++i){var r=e.current();if(!ic(r))return e.pos=n,!1;e.lastIntValue=16*e.lastIntValue+rc(r),e.advance();}return !0};var ac=function(e){this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,e.options.locations&&(this.loc=new hu(e,e.startLoc,e.endLoc)),e.options.ranges&&(this.range=[e.start,e.end]);},oc=yu.prototype;function hc(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}oc.next=function(){this.options.onToken&&this.options.onToken(new ac(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken();},oc.getToken=function(){return this.next(),new ac(this)},"undefined"!=typeof Symbol&&(oc[Symbol.iterator]=function(){var e=this;return {next:function(){var t=e.getToken();return {done:t.type===Yh.eof,value:t}}}}),oc.curContext=function(){return this.context[this.context.length-1]},oc.nextToken=function(){var e=this.curContext();return e&&e.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(Yh.eof):e.override?e.override(this):void this.readToken(this.fullCharCodeAtPos())},oc.readToken=function(e){return jh(e,this.options.ecmaVersion>=6)||92===e?this.readWord():this.getTokenFromCode(e)},oc.fullCharCodeAtPos=function(){var e=this.input.charCodeAt(this.pos);return e<=55295||e>=57344?e:(e<<10)+this.input.charCodeAt(this.pos+1)-56613888},oc.skipBlockComment=function(){var e,t=this.options.onComment&&this.curPosition(),n=this.pos,i=this.input.indexOf("*/",this.pos+=2);if(-1===i&&this.raise(this.pos-2,"Unterminated comment"),this.pos=i+2,this.options.locations)for(Qh.lastIndex=n;(e=Qh.exec(this.input))&&e.index<this.pos;)++this.curLine,this.lineStart=e.index+e[0].length;this.options.onComment&&this.options.onComment(!0,this.input.slice(n+2,i),n,this.pos,t,this.curPosition());},oc.skipLineComment=function(e){for(var t=this.pos,n=this.options.onComment&&this.curPosition(),i=this.input.charCodeAt(this.pos+=e);this.pos<this.input.length&&!Jh(i);)i=this.input.charCodeAt(++this.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(t+e,this.pos),t,this.pos,n,this.curPosition());},oc.skipSpace=function(){e:for(;this.pos<this.input.length;){var e=this.input.charCodeAt(this.pos);switch(e){case 32:case 160:++this.pos;break;case 13:10===this.input.charCodeAt(this.pos+1)&&++this.pos;case 10:case 8232:case 8233:++this.pos,this.options.locations&&(++this.curLine,this.lineStart=this.pos);break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break e}break;default:if(!(e>8&&e<14||e>=5760&&Zh.test(String.fromCharCode(e))))break e;++this.pos;}}},oc.finishToken=function(e,t){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var n=this.type;this.type=e,this.value=t,this.updateContext(n);},oc.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57)return this.readNumber(!0);var t=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===e&&46===t?(this.pos+=3,this.finishToken(Yh.ellipsis)):(++this.pos,this.finishToken(Yh.dot))},oc.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===e?this.finishOp(Yh.assign,2):this.finishOp(Yh.slash,1)},oc.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1),n=1,i=42===e?Yh.star:Yh.modulo;return this.options.ecmaVersion>=7&&42===e&&42===t&&(++n,i=Yh.starstar,t=this.input.charCodeAt(this.pos+2)),61===t?this.finishOp(Yh.assign,n+1):this.finishOp(i,n)},oc.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?this.finishOp(124===e?Yh.logicalOR:Yh.logicalAND,2):61===t?this.finishOp(Yh.assign,2):this.finishOp(124===e?Yh.bitwiseOR:Yh.bitwiseAND,1)},oc.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(Yh.assign,2):this.finishOp(Yh.bitwiseXOR,1)},oc.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?45!==t||this.inModule||62!==this.input.charCodeAt(this.pos+2)||0!==this.lastTokEnd&&!Xh.test(this.input.slice(this.lastTokEnd,this.pos))?this.finishOp(Yh.incDec,2):(this.skipLineComment(3),this.skipSpace(),this.nextToken()):61===t?this.finishOp(Yh.assign,2):this.finishOp(Yh.plusMin,1)},oc.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1),n=1;return t===e?(n=62===e&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+n)?this.finishOp(Yh.assign,n+1):this.finishOp(Yh.bitShift,n)):33!==t||60!==e||this.inModule||45!==this.input.charCodeAt(this.pos+2)||45!==this.input.charCodeAt(this.pos+3)?(61===t&&(n=2),this.finishOp(Yh.relational,n)):(this.skipLineComment(4),this.skipSpace(),this.nextToken())},oc.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);return 61===t?this.finishOp(Yh.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===e&&62===t&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(Yh.arrow)):this.finishOp(61===e?Yh.eq:Yh.prefix,1)},oc.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:return ++this.pos,this.finishToken(Yh.parenL);case 41:return ++this.pos,this.finishToken(Yh.parenR);case 59:return ++this.pos,this.finishToken(Yh.semi);case 44:return ++this.pos,this.finishToken(Yh.comma);case 91:return ++this.pos,this.finishToken(Yh.bracketL);case 93:return ++this.pos,this.finishToken(Yh.bracketR);case 123:return ++this.pos,this.finishToken(Yh.braceL);case 125:return ++this.pos,this.finishToken(Yh.braceR);case 58:return ++this.pos,this.finishToken(Yh.colon);case 63:return ++this.pos,this.finishToken(Yh.question);case 96:if(this.options.ecmaVersion<6)break;return ++this.pos,this.finishToken(Yh.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(120===t||88===t)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===t||79===t)return this.readRadixNumber(8);if(98===t||66===t)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 126:return this.finishOp(Yh.prefix,1)}this.raise(this.pos,"Unexpected character '"+hc(e)+"'");},oc.finishOp=function(e,t){var n=this.input.slice(this.pos,this.pos+t);return this.pos+=t,this.finishToken(e,n)},oc.readRegexp=function(){for(var e,t,n=this.pos;;){this.pos>=this.input.length&&this.raise(n,"Unterminated regular expression");var i=this.input.charAt(this.pos);if(Xh.test(i)&&this.raise(n,"Unterminated regular expression"),e)e=!1;else{if("["===i)t=!0;else if("]"===i&&t)t=!1;else if("/"===i&&!t)break;e="\\"===i;}++this.pos;}var r=this.input.slice(n,this.pos);++this.pos;var s=this.pos,a=this.readWord1();this.containsEsc&&this.unexpected(s);var o=this.regexpState||(this.regexpState=new Xu(this));o.reset(n,r,a),this.validateRegExpFlags(o),this.validateRegExpPattern(o);var h=null;try{h=new RegExp(r,a);}catch(e){}return this.finishToken(Yh.regexp,{pattern:r,flags:a,value:h})},oc.readInt=function(e,t){for(var n=this.pos,i=0,r=0,s=null==t?1/0:t;r<s;++r){var a=this.input.charCodeAt(this.pos),o=void 0;if((o=a>=97?a-97+10:a>=65?a-65+10:a>=48&&a<=57?a-48:1/0)>=e)break;++this.pos,i=i*e+o;}return this.pos===n||null!=t&&this.pos-n!==t?null:i},oc.readRadixNumber=function(e){var t=this.pos;this.pos+=2;var n=this.readInt(e);return null==n&&this.raise(this.start+2,"Expected number in radix "+e),this.options.ecmaVersion>=11&&110===this.input.charCodeAt(this.pos)?(n="undefined"!=typeof BigInt?BigInt(this.input.slice(t,this.pos)):null,++this.pos):jh(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(Yh.num,n)},oc.readNumber=function(e){var t=this.pos;e||null!==this.readInt(10)||this.raise(t,"Invalid number");var n=this.pos-t>=2&&48===this.input.charCodeAt(t);n&&this.strict&&this.raise(t,"Invalid number"),n&&/[89]/.test(this.input.slice(t,this.pos))&&(n=!1);var i=this.input.charCodeAt(this.pos);if(!n&&!e&&this.options.ecmaVersion>=11&&110===i){var r=this.input.slice(t,this.pos),s="undefined"!=typeof BigInt?BigInt(r):null;return ++this.pos,jh(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(Yh.num,s)}46!==i||n||(++this.pos,this.readInt(10),i=this.input.charCodeAt(this.pos)),69!==i&&101!==i||n||(43!==(i=this.input.charCodeAt(++this.pos))&&45!==i||++this.pos,null===this.readInt(10)&&this.raise(t,"Invalid number")),jh(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var a=this.input.slice(t,this.pos),o=n?parseInt(a,8):parseFloat(a);return this.finishToken(Yh.num,o)},oc.readCodePoint=function(){var e;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var t=++this.pos;e=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,e>1114111&&this.invalidStringToken(t,"Code point out of bounds");}else e=this.readHexChar(4);return e},oc.readString=function(e){for(var t="",n=++this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");var i=this.input.charCodeAt(this.pos);if(i===e)break;92===i?(t+=this.input.slice(n,this.pos),t+=this.readEscapedChar(!1),n=this.pos):(Jh(i,this.options.ecmaVersion>=10)&&this.raise(this.start,"Unterminated string constant"),++this.pos);}return t+=this.input.slice(n,this.pos++),this.finishToken(Yh.string,t)};var uc={};oc.tryReadTemplateToken=function(){this.inTemplateElement=!0;try{this.readTmplToken();}catch(e){if(e!==uc)throw e;this.readInvalidTemplateToken();}this.inTemplateElement=!1;},oc.invalidStringToken=function(e,t){if(this.inTemplateElement&&this.options.ecmaVersion>=9)throw uc;this.raise(e,t);},oc.readTmplToken=function(){for(var e="",t=this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated template");var n=this.input.charCodeAt(this.pos);if(96===n||36===n&&123===this.input.charCodeAt(this.pos+1))return this.pos!==this.start||this.type!==Yh.template&&this.type!==Yh.invalidTemplate?(e+=this.input.slice(t,this.pos),this.finishToken(Yh.template,e)):36===n?(this.pos+=2,this.finishToken(Yh.dollarBraceL)):(++this.pos,this.finishToken(Yh.backQuote));if(92===n)e+=this.input.slice(t,this.pos),e+=this.readEscapedChar(!0),t=this.pos;else if(Jh(n)){switch(e+=this.input.slice(t,this.pos),++this.pos,n){case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:e+="\n";break;default:e+=String.fromCharCode(n);}this.options.locations&&(++this.curLine,this.lineStart=this.pos),t=this.pos;}else++this.pos;}},oc.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++)switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if("{"!==this.input[this.pos+1])break;case"`":return this.finishToken(Yh.invalidTemplate,this.input.slice(this.start,this.pos))}this.raise(this.start,"Unterminated template");},oc.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);switch(++this.pos,t){case 110:return "\n";case 114:return "\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return hc(this.readCodePoint());case 116:return "\t";case 98:return "\b";case 118:return "\v";case 102:return "\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";default:if(t>=48&&t<=55){var n=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],i=parseInt(n,8);return i>255&&(n=n.slice(0,-1),i=parseInt(n,8)),this.pos+=n.length-1,t=this.input.charCodeAt(this.pos),"0"===n&&56!==t&&57!==t||!this.strict&&!e||this.invalidStringToken(this.pos-1-n.length,e?"Octal literal in template string":"Octal literal in strict mode"),String.fromCharCode(i)}return Jh(t)?"":String.fromCharCode(t)}},oc.readHexChar=function(e){var t=this.pos,n=this.readInt(16,e);return null===n&&this.invalidStringToken(t,"Bad character escape sequence"),n},oc.readWord1=function(){this.containsEsc=!1;for(var e="",t=!0,n=this.pos,i=this.options.ecmaVersion>=6;this.pos<this.input.length;){var r=this.fullCharCodeAtPos();if(Wh(r,i))this.pos+=r<=65535?1:2;else{if(92!==r)break;this.containsEsc=!0,e+=this.input.slice(n,this.pos);var s=this.pos;117!==this.input.charCodeAt(++this.pos)&&this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.pos;var a=this.readCodePoint();(t?jh:Wh)(a,i)||this.invalidStringToken(s,"Invalid Unicode escape"),e+=hc(a),n=this.pos;}t=!1;}return e+this.input.slice(n,this.pos)},oc.readWord=function(){var e=this.readWord1(),t=Yh.name;return this.keywords.test(e)&&(this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+e),t=Gh[e]),this.finishToken(t,e)};const cc=function(e){return e&&e.default||e}(Object.freeze({Node:Mu,Parser:yu,Position:ou,SourceLocation:hu,TokContext:Lu,Token:ac,TokenType:Uh,defaultOptions:cu,getLineInfo:uu,isIdentifierChar:Wh,isIdentifierStart:jh,isNewLine:Jh,keywordTypes:Gh,lineBreak:Xh,lineBreakG:Qh,nonASCIIwhitespace:Zh,parse:function(e,t){return yu.parse(e,t)},parseExpressionAt:function(e,t,n){return yu.parseExpressionAt(e,t,n)},tokContexts:Vu,tokTypes:Yh,tokenizer:function(e,t){return yu.tokenizer(e,t)},version:"7.0.0"})).tokTypes,lc=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,pc=e=>{lc.lastIndex=e.pos;let t=lc.exec(e.input),n=e.pos+t[0].length;return "."===e.input.slice(n,n+1)};var dc=function(e){return class extends e{parseExprAtom(e){if(this.type!==cc._import||!pc(this))return super.parseExprAtom(e);this.options.allowImportExportEverywhere||this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'");let t=this.startNode();return t.meta=this.parseIdent(!0),this.expect(cc.dot),t.property=this.parseIdent(!0),"meta"!==t.property.name&&this.raiseRecoverable(t.property.start,"The only valid meta property for import is import.meta"),this.containsEsc&&this.raiseRecoverable(t.property.start,'"meta" in import.meta must not contain escape sequences'),this.finishNode(t,"MetaProperty")}parseStatement(e,t,n){if(this.type!==cc._import||!pc(this))return super.parseStatement(e,t,n);let i=this.startNode(),r=this.parseExpression();return this.parseExpressionStatement(i,r)}}};class fc extends Ze{constructor(){super("undefined");}getLiteralValueAtPath(){}}class mc extends Et{constructor(){super(),this.variables.set("undefined",new fc);}findVariable(e){let t=this.variables.get(e);return t||(t=new la(e),this.variables.set(e,t)),t}}const gc=()=>({paths:Object.create(null),tracked:!1,unknownPath:null});class yc{constructor(){this.entityPaths=new Map;}track(e,t){let n=this.entityPaths.get(e);n||(n=gc(),this.entityPaths.set(e,n));let i,r=0;for(;r<t.length;){const e=t[r];"string"==typeof e?(i=n.paths[e])||(i=gc(),n.paths[e]=i):(i=n.unknownPath)||(i=gc(),n.unknownPath=i),n=i,r++;}const s=n.tracked;return n.tracked=!0,s}}var vc;function xc(e,t){if(e in t)return Ia(function(e){return {code:Pa.FILE_NAME_CONFLICT,message:`Could not emit file "${e}" as it conflicts with an already emitted file.`}}(e));t[e]=_c;}!function(e){e[e.LOAD_AND_PARSE=0]="LOAD_AND_PARSE",e[e.ANALYSE=1]="ANALYSE",e[e.GENERATE=2]="GENERATE";}(vc||(vc={}));const _c={isPlaceholder:!0};function Ec(e,t,n){if("string"!=typeof e&&!Buffer.isBuffer(e)){const e=t.fileName||t.name||n;return Ia($a(`Could not set source for ${"string"==typeof e?`asset "${e}"`:"unnamed asset"}, asset source needs to be a string of Buffer.`))}return e}function bc(e,t){return "string"!=typeof e.fileName?Ia((n=e.name||t,{code:Pa.ASSET_NOT_FINALISED,message:`Plugin error - Unable to get file name for asset "${n}". Ensure that the source is set and that generate is called first.`})):e.fileName;var n;}function Ac(e){const t=e.fileName||e.module&&e.module.facadeChunk.id;return t||Ia((n=e.fileName||e.name,{code:Pa.CHUNK_NOT_GENERATED,message:`Plugin error - Unable to get file name for chunk "${n}". Ensure that generate is called first.`}));var n;}class Sc{constructor(e){this.filesByReferenceId=new Map,this.buildFilesByReferenceId=this.filesByReferenceId,this.output=null,this.emitFile=e=>(function(e){return e&&("asset"===e.type||"chunk"===e.type)})(e)?function(e){const t=e.fileName||e.name;return !t||"string"==typeof t&&wa(t)}(e)?"chunk"===e.type?this.emitChunk(e):this.emitAsset(e):Ia($a(`The "fileName" or "name" properties of emitted files must be strings that are neither absolute nor relative paths and do not contain invalid characters, received "${e.fileName||e.name}".`)):Ia($a(`Emitted files must be of type "asset" or "chunk", received "${e&&e.type}".`)),this.getFileName=e=>{const t=this.filesByReferenceId.get(e);return t?"chunk"===t.type?Ac(t):bc(t,e):Ia(function(e){return {code:Pa.FILE_NOT_FOUND,message:`Plugin error - Unable to get file name for unknown file "${e}".`}}(e))},this.setAssetSource=(e,t)=>{const n=this.filesByReferenceId.get(e);if(!n)return Ia(function(e){return {code:Pa.ASSET_NOT_FOUND,message:`Plugin error - Unable to set the source for unknown asset "${e}".`}}(e));if("asset"!==n.type)return Ia($a(`Asset sources can only be set for emitted assets but "${e}" is an emitted chunk.`));if(void 0!==n.source)return Ia(function(e){return {code:Pa.ASSET_SOURCE_ALREADY_SET,message:`Unable to set the source for asset "${e}", source already set.`}}(n.name||e));const i=Ec(t,n,e);this.output?this.finalizeAsset(n,i,e,this.output):n.source=i;},this.graph=e;}startOutput(e,t){this.filesByReferenceId=new Map(this.buildFilesByReferenceId),this.output={assetFileNames:t,bundle:e};for(const e of this.filesByReferenceId.values())e.fileName&&xc(e.fileName,this.output.bundle);for(const[e,t]of this.filesByReferenceId.entries())"asset"===t.type&&void 0!==t.source&&this.finalizeAsset(t,t.source,e,this.output);}assertAssetsFinalized(){for(const[t,n]of this.filesByReferenceId.entries())"asset"===n.type&&"string"!=typeof n.fileName&&Ia((e=n.name||t,{code:Pa.ASSET_SOURCE_MISSING,message:`Plugin error creating asset "${e}" - no asset source set.`}));var e;}emitAsset(e){const t=void 0!==e.source?Ec(e.source,e,null):void 0,n={fileName:e.fileName,name:e.name,source:t,type:"asset"},i=this.assignReferenceId(n,e.fileName||e.name||e.type);return this.output&&(e.fileName&&xc(e.fileName,this.output.bundle),void 0!==t&&this.finalizeAsset(n,t,i,this.output)),i}emitChunk(e){if(this.graph.phase>vc.LOAD_AND_PARSE&&Ia({code:Pa.INVALID_ROLLUP_PHASE,message:"Cannot emit chunks after module loading has finished."}),"string"!=typeof e.id)return Ia($a(`Emitted chunks need to have a valid string id, received "${e.id}"`));const t={fileName:e.fileName,module:null,name:e.name||e.id,type:"chunk"};return this.graph.moduleLoader.addEntryModules([{fileName:e.fileName||null,id:e.id,name:e.name||null}],!1).then(({newEntryModules:[e]})=>{t.module=e;}).catch(()=>{}),this.assignReferenceId(t,e.id)}assignReferenceId(e,t){let n;do{const e=k();n?e.update(n):e.update(t),n=e.digest("hex").substr(0,8);}while(this.filesByReferenceId.has(n));return this.filesByReferenceId.set(n,e),n}finalizeAsset(e,t,n,i){const r=e.fileName||this.findExistingAssetFileNameWithSource(i.bundle,t)||function(e,t,n){const i=e||"asset";return Ih(wh(n.assetFileNames,"output.assetFileNames",{hash(){const e=k();return e.update(i),e.update(":"),e.update(t),e.digest("hex").substr(0,8)},ext:()=>ft(i).substr(1),extname:()=>ft(i),name:()=>i.substr(0,i.length-ft(i).length)}),n.bundle)}(e.name,t,i),s=Object.assign({},e,{source:t,fileName:r});this.filesByReferenceId.set(n,s),i.bundle[r]={fileName:r,isAsset:!0,source:t};}findExistingAssetFileNameWithSource(e,t){for(const n of Object.keys(e)){const i=e[n];if(i.isAsset&&(Buffer.isBuffer(t)&&Buffer.isBuffer(i.source)?t.equals(i.source):t===i.source))return n}return null}}const wc="at position ",Ic=[{active:!0,deprecated:"ongenerate",replacement:"generateBundle"},{active:!0,deprecated:"onwrite",replacement:"generateBundle/writeBundle"},{active:!0,deprecated:"transformBundle",replacement:"renderChunk"},{active:!0,deprecated:"transformChunk",replacement:"renderChunk"},{active:!1,deprecated:"resolveAssetUrl",replacement:"resolveFileUrl"}];function Cc(e,t,{hook:n,id:i}={}){return "string"==typeof e&&(e={message:e}),e.code&&e.code!==Pa.PLUGIN_ERROR&&(e.pluginCode=e.code),e.code=Pa.PLUGIN_ERROR,e.plugin=t,n&&(e.hook=n),i&&(e.id=i),Ia(e)}function Pc(e,n,i,r){function s(t,n,i,r,s){let a=!1;return (...o)=>(a||(a=!0,e.warnDeprecation({message:`The "this.${n}" plugin context function used by plugin ${r} is deprecated. The "this.${i}" plugin context function should be used instead.`,plugin:r},s)),t(...o))}!function(e,t){for(const{active:n,deprecated:i,replacement:r}of Ic)for(const s of e)i in s&&t.warnDeprecation({message:`The "${i}" hook used by plugin ${s.name} is deprecated. The "${r}" hook should be used instead.`,plugin:s.name},n);}(n.plugins,e);const a=[...n.plugins,(o=n.preserveSymlinks,{name:"Rollup Core",resolveId:xo(o),load:e=>mo(e),resolveFileUrl:({relativePath:e,format:t})=>wo[t](e),resolveImportMeta(e,{chunkId:t,format:n}){const i=Ao[n]&&Ao[n](e,t);if(i)return i}})];var o;const h=new Sc(e),u=new Set,c=a.map((n,a)=>{let o,c=!0;if("string"!=typeof n.cacheKey&&(n.name.startsWith(wc)||u.has(n.name)?c=!1:u.add(n.name)),i)if(c){const e=n.cacheKey||n.name;o=function(e){return {has(t){const n=e[t];return !!n&&(n[0]=0,!0)},get(t){const n=e[t];if(n)return n[0]=0,n[1]},set(t,n){e[t]=[0,n];},delete:t=>delete e[t]}}(i[e]||(i[e]=Object.create(null)));}else o=$c(n.name);else o=kc;const l={addWatchFile(t){e.phase>=vc.GENERATE&&this.error({code:Pa.INVALID_ROLLUP_PHASE,message:"Cannot call addWatchFile after the build has finished."}),e.watchFiles[t]=!0;},cache:o,emitAsset:s((e,t)=>h.emitFile({type:"asset",name:e,source:t}),"emitAsset","emitFile",n.name,!1),emitChunk:s((e,t)=>h.emitFile({type:"chunk",id:e,name:t&&t.name}),"emitChunk","emitFile",n.name,!1),emitFile:h.emitFile,error:e=>Cc(e,n.name),getAssetFileName:s(h.getFileName,"getAssetFileName","getFileName",n.name,!1),getChunkFileName:s(h.getFileName,"getChunkFileName","getFileName",n.name,!1),getFileName:h.getFileName,getModuleInfo(t){const n=e.moduleById.get(t);if(null==n)throw new Error(`Unable to find module ${t}`);return {hasModuleSideEffects:n.moduleSideEffects,id:n.id,importedIds:n instanceof yt?[]:n.sources.map(e=>n.resolvedIds[e].id),isEntry:n instanceof lh&&n.isEntryPoint,isExternal:n instanceof yt}},isExternal:s((t,n,i=!1)=>e.moduleLoader.isExternal(t,n,i),"isExternal","resolve",n.name,!1),meta:{rollupVersion:t},get moduleIds(){return e.moduleById.keys()},parse:e.contextParse,resolve:(t,n,i)=>e.moduleLoader.resolveId(t,n,i&&i.skipSelf?a:null),resolveId:s((t,n)=>e.moduleLoader.resolveId(t,n).then(e=>e&&e.id),"resolveId","resolve",n.name,!1),setAssetSource:h.setAssetSource,warn(t){"string"==typeof t&&(t={message:t}),t.code&&(t.pluginCode=t.code),t.code="PLUGIN_WARNING",t.plugin=n.name,e.warn(t);},watcher:r?(()=>{let e=!1;function t(t,n){return e||(l.warn({code:"PLUGIN_WATCHER_DEPRECATED",message:"this.watcher usage is deprecated in plugins. Use the watchChange plugin hook and this.addWatchFile() instead."}),e=!0),r.on(t,n)}return Object.assign({},r,{addListener:t,on:t})})():void 0};return l});function l(e,t,n,i=!1,r){const s=a[n];let o=c[n];const h=s[e];if(h){if(r&&(!(o=r(o,s))||o===c[n]))throw new Error("Internal Rollup error: hookContext must return a new context object.");try{if("function"!=typeof h){if(i)return h;Ia({code:"INVALID_PLUGIN_HOOK",message:`Error running plugin hook ${e} for ${s.name}, expected a function hook.`});}return h.apply(o,t)}catch(t){return Cc(t,s.name,{hook:e})}}}function p(e,t,n,i=!1,r){const s=a[n];let o=c[n];const h=s[e];if(h){if(r&&(!(o=r(o,s))||o===c[n]))throw new Error("Internal Rollup error: hookContext must return a new context object.");return Promise.resolve().then(()=>{if("function"!=typeof h){if(i)return h;Ia({code:"INVALID_PLUGIN_HOOK",message:`Error running plugin hook ${e} for ${s.name}, expected a function hook.`});}return h.apply(o,t)}).catch(t=>Cc(t,s.name,{hook:e}))}}return {emitFile:h.emitFile,finaliseAssets(){h.assertAssetsFinalized();},getFileName:h.getFileName,hookSeq(e,t,n){let i=Promise.resolve();for(let r=0;r<a.length;r++)i=i.then(()=>p(e,t,r,!1,n));return i},hookSeqSync(e,t,n){for(let i=0;i<a.length;i++)l(e,t,i,!1,n);},hookFirst(e,t,n,i){let r=Promise.resolve();for(let s=0;s<a.length;s++)i!==s&&(r=r.then(i=>null!=i?i:p(e,t,s,!1,n)));return r},hookFirstSync(e,t,n){for(let i=0;i<a.length;i++){const r=l(e,t,i,!1,n);if(null!=r)return r}return null},hookParallel(e,t,n){const i=[];for(let r=0;r<a.length;r++){const s=p(e,t,r,!1,n);s&&i.push(s);}return Promise.all(i).then(()=>{})},hookReduceArg0(e,[t,...n],i,r){let s=Promise.resolve(t);for(let t=0;t<a.length;t++)s=s.then(s=>{const o=p(e,[s,...n],t,!1,r);return o?o.then(e=>i.call(c[t],s,e,a[t])):s});return s},hookReduceArg0Sync(e,[t,...n],i,r){for(let s=0;s<a.length;s++){const o=l(e,[t,...n],s,!1,r);t=i.call(c[s],t,o,a[s]);}return t},hookReduceValue(e,t,n,i,r){let s=Promise.resolve(t);for(let t=0;t<a.length;t++)s=s.then(s=>{const o=p(e,n,t,!0,r);return o?o.then(e=>i.call(c[t],s,e,a[t])):s});return s},hookReduceValueSync(e,t,n,i,r){let s=t;for(let t=0;t<a.length;t++){const o=l(e,n,t,!0,r);s=i.call(c[t],s,o,a[t]);}return s},startOutput(e,t){h.startOutput(e,t);}}}const kc={has:()=>!1,get(){},set(){},delete:()=>!1};function Nc(e){e.startsWith(wc)?Ia({code:"ANONYMOUS_PLUGIN_CACHE",message:"A plugin is trying to use the Rollup cache but is not declaring a plugin name or cacheKey."}):Ia({code:"DUPLICATE_PLUGIN_NAME",message:`The plugin name ${e} is being used twice in the same build. Plugin names must be distinct or provide a cacheKey (please post an issue to the plugin if you are a plugin user).`});}const $c=e=>({has:()=>(Nc(e),!1),get(){Nc(e);},set(){Nc(e);},delete:()=>(Nc(e),!1)});function Rc(e,t,n){const i=n.id,r=[];let s=null===t.map?null:Sh(t.map);const a=t.code;let o=t.ast;const h=[],u=[];let c,l,p=!1,d=null;const f=t.code;let m;return e.pluginDriver.hookReduceArg0("transform",[f,i],function(t,s,a){if(!p&&c.used&&(p=!0),p){if(s&&"object"==typeof s&&Array.isArray(s.dependencies))for(const t of s.dependencies)e.watchFiles[gt(dt(i),t)]=!0;}else if(u.length&&(n.transformFiles=u),s&&"object"==typeof s&&Array.isArray(s.dependencies)){l.warnedTransformDependencies||e.warnDeprecation(`Returning "dependencies" from the "transform" hook as done by plugin ${a.name} is deprecated. The "this.addWatchFile" plugin context function should be used instead.`,!0),l.warnedTransformDependencies=!0;for(const e of s.dependencies)h.push(gt(dt(i),e));}if("string"==typeof s)s={ast:void 0,code:s,map:void 0};else{if(!s||"object"!=typeof s)return t;"string"==typeof s.map&&(s.map=JSON.parse(s.map)),"boolean"==typeof s.moduleSideEffects&&(d=s.moduleSideEffects);}if(null!==s.map){const e=Sh(s.map);r.push(e||{missing:!0,plugin:a.name});}return o=s.ast,s.code},(t,n)=>((l=n).cacheKey?p=!0:c=function(e){const t={used:!1,cache:void 0};return t.cache={has:n=>(t.used=!0,e.has(n)),get:n=>(t.used=!0,e.get(n)),set:(n,i)=>(t.used=!0,e.set(n,i)),delete:n=>(t.used=!0,e.delete(n))},t}(t.cache),Object.assign({},t,{cache:c?c.cache:t.cache,warn(e,n){"string"==typeof e&&(e={message:e}),n&&Ca(e,n,f,i),e.id=i,e.hook="transform",t.warn(e);},error:(e,n)=>("string"==typeof e&&(e={message:e}),n&&Ca(e,n,f,i),e.id=i,e.hook="transform",t.error(e)),emitAsset(t,n){const i={type:"asset",name:t,source:n};return u.push(Object.assign({},i)),e.pluginDriver.emitFile(i)},emitChunk(t,n){const i={type:"chunk",id:t,name:n&&n.name};return u.push(Object.assign({},i)),e.pluginDriver.emitFile(i)},emitFile:t=>(u.push(t),e.pluginDriver.emitFile(t)),addWatchFile(e){h.push(e),t.addWatchFile(e);},setAssetSource(e,n){if(t.setAssetSource(e,n),!p&&!m)try{this.error({code:"INVALID_SETASSETSOURCE",message:"setAssetSource cannot be called in transform for caching reasons. Use emitFile with a source, or call setAssetSource in another hook."});}catch(e){m=e;}},getCombinedSourcemap(){const t=function(e,t,n,i,r){if(!r.length)return i;const s=mh(t,n,i,r,fh(e)).traceMappings();return Object.assign({version:3},s)}(e,i,a,s,r);if(!t){return new q(a).generateMap({includeContent:!0,hires:!0,source:i})}return s!==t&&(s=t,r.length=0),new T(Object.assign({},t,{file:null,sourcesContent:t.sourcesContent}))}}))).catch(e=>Cc(e,l.name,{hook:"transform",id:i})).then(e=>{if(!p&&m)throw m;return {ast:o,code:e,customTransformCache:p,moduleSideEffects:d,originalCode:a,originalSourcemap:s,sourcemapChain:r,transformDependencies:h}})}function Oc(e,t){return ct(t)?gt(e,"..",t):t}function Mc(e){if(!0===e)return ()=>!0;if("function"==typeof e)return (t,...n)=>!t.startsWith("\0")&&e(t,...n)||!1;if(e){const t=new Set(Array.isArray(e)?e:e?[e]:[]);return e=>t.has(e)}return ()=>!1}function Dc(e,t,n){if("boolean"==typeof e)return ()=>e;if("no-external"===e)return (e,t)=>!t;if("function"==typeof e)return (t,n)=>!!t.startsWith("\0")||!1!==e(t,n);if(Array.isArray(e)){const t=new Set(e);return e=>t.has(e)}var i,r;e&&n.warn((i="treeshake.moduleSideEffects",r='please use one of false, "no-external", a function or an array',{code:Pa.INVALID_OPTION,message:`Invalid value for option "${i}" - ${r}.`}));const s=Mc(t);return (e,t)=>!(t&&s(e))}class Tc{constructor(e,t,n,i,r,s,a){this.indexedEntryModules=[],this.latestLoadModulesPromise=Promise.resolve(),this.manualChunkModules={},this.nextEntryModuleIndex=0,this.loadEntryModule=(e,t)=>this.pluginDriver.hookFirst("resolveId",[e,void 0]).then(n=>{if(!1===n||n&&"object"==typeof n&&n.external)return Ia(function(e){return {code:Pa.UNRESOLVED_ENTRY,message:`Entry module cannot be external (${Sa(e)}).`}}(e));const i=n&&"object"==typeof n?n.id:n;return "string"==typeof i?this.fetchModule(i,void 0,!0,t):Ia(function(e){return {code:Pa.UNRESOLVED_ENTRY,message:`Could not resolve entry module (${Sa(e)}).`}}(e))}),this.graph=e,this.modulesById=t,this.pluginDriver=n,this.isExternal=Mc(i),this.hasModuleSideEffects=Dc(s,a,e),this.getManualChunk="function"==typeof r?r:()=>null;}addEntryModules(e,t){const n=this.nextEntryModuleIndex;this.nextEntryModuleIndex+=e.length;const i=Promise.all(e.map(({fileName:e,id:n,name:i})=>this.loadEntryModule(n,!0).then(n=>(null!==e?n.chunkFileNames.add(e):null!==i&&(null===n.chunkName&&(n.chunkName=i),t&&n.userChunkNames.add(i)),n)))).then(e=>{let i=n;for(const n of e){n.isUserDefinedEntryPoint=n.isUserDefinedEntryPoint||t;const e=this.indexedEntryModules.find(e=>e.module.id===n.id);e?e.index=Math.min(e.index,i):this.indexedEntryModules.push({module:n,index:i}),i++;}return this.indexedEntryModules.sort(({index:e},{index:t})=>e>t?1:-1),e});return this.awaitLoadModulesPromise(i).then(e=>({entryModules:this.indexedEntryModules.map(({module:e})=>e),manualChunkModulesByAlias:this.manualChunkModules,newEntryModules:e}))}addManualChunks(e){const t=[];for(const n of Object.keys(e)){const i=e[n];for(const e of i)t.push({id:e,alias:n});}const n=Promise.all(t.map(({id:e})=>this.loadEntryModule(e,!1))).then(e=>{for(let n=0;n<e.length;n++)this.addModuleToManualChunk(t[n].alias,e[n]);});return this.awaitLoadModulesPromise(n)}resolveId(t,n,i){return e(this,void 0,void 0,function*(){return this.normalizeResolveIdResult(!this.isExternal(t,n,!1)&&(yield this.pluginDriver.hookFirst("resolveId",[t,n],null,i)),n,t)})}addModuleToManualChunk(e,t){var n,i,r;null!==t.manualChunkAlias&&t.manualChunkAlias!==e&&Ia((n=t.id,i=e,r=t.manualChunkAlias,{code:Pa.INVALID_CHUNK,message:`Cannot assign ${Sa(n)} to the "${i}" chunk as it is already in the "${r}" chunk.`})),t.manualChunkAlias=e,this.manualChunkModules[e]||(this.manualChunkModules[e]=[]),this.manualChunkModules[e].push(t);}awaitLoadModulesPromise(e){this.latestLoadModulesPromise=Promise.all([e,this.latestLoadModulesPromise]);const t=()=>{const e=this.latestLoadModulesPromise;return e.then(()=>{if(this.latestLoadModulesPromise!==e)return t()})};return t().then(()=>e)}fetchAllDependencies(e){const t=Promise.all(e.getDynamicImportExpressions().map((t,n)=>this.resolveDynamicImport(e,t,e.id).then(t=>{if(null===t)return;const i=e.dynamicImports[n];if("string"!=typeof t)return this.fetchResolvedDependency(Sa(t.id),e.id,t).then(e=>{i.resolution=e;});i.resolution=t;})));return t.catch(()=>{}),Promise.all(e.sources.map(t=>this.resolveAndFetchDependency(e,t))).then(()=>t)}fetchModule(e,t,n,i){const r=this.modulesById.get(e);if(r){if(r instanceof yt)throw new Error(`Cannot fetch external module ${e}`);return r.isEntryPoint=r.isEntryPoint||i,Promise.resolve(r)}const s=new lh(this.graph,e,n,i);this.modulesById.set(e,s);const a=this.getManualChunk(e);return "string"==typeof a&&this.addModuleToManualChunk(a,s),ih("load modules",3),Promise.resolve(this.pluginDriver.hookFirst("load",[e])).catch(n=>{rh("load modules",3);let i=`Could not load ${e}`;throw t&&(i+=` (imported by ${t})`),i+=`: ${n.message}`,n.message=i,n}).then(t=>(rh("load modules",3),"string"==typeof t?{code:t}:t&&"object"==typeof t&&"string"==typeof t.code?t:Ia(function(e){return {code:Pa.BAD_LOADER,message:`Error loading ${Sa(e)}: plugin load hook should return a string, a { code, map } object, or nothing/null`}}(e)))).then(t=>{const n=this.graph.cachedModules.get(e);if(n&&!n.customTransformCache&&n.originalCode===t.code){if(n.transformFiles)for(const e of n.transformFiles)this.pluginDriver.emitFile(e);return n}return "boolean"==typeof t.moduleSideEffects&&(s.moduleSideEffects=t.moduleSideEffects),Rc(this.graph,t,s)}).then(t=>(s.setSource(t),this.modulesById.set(e,s),this.fetchAllDependencies(s).then(()=>{for(const e in s.exports)"default"!==e&&(s.exportsAll[e]=s.id);return s.exportAllSources.forEach(e=>{const t=s.resolvedIds[e].id,n=this.modulesById.get(t);if(!(n instanceof yt))for(const e in n.exportsAll)e in s.exportsAll?this.graph.warn(Na(e,s,n)):s.exportsAll[e]=n.exportsAll[e];}),s})))}fetchResolvedDependency(e,t,n){if(n.external){this.modulesById.has(n.id)||this.modulesById.set(n.id,new yt(this.graph,n.id,n.moduleSideEffects));const i=this.modulesById.get(n.id);return i instanceof yt?Promise.resolve(i):Ia(function(e,t){return {code:Pa.INVALID_EXTERNAL_ID,message:`'${e}' is imported as an external by ${Sa(t)}, but is already an existing non-external module id.`}}(e,t))}return this.fetchModule(n.id,t,n.moduleSideEffects,!1)}handleMissingImports(e,t,n){return null===e?(ct(t)&&Ia(function(e,t){return {code:Pa.UNRESOLVED_IMPORT,message:`Could not resolve '${e}' from ${Sa(t)}`}}(t,n)),this.graph.warn(function(e,t){return {code:Pa.UNRESOLVED_IMPORT,importer:Sa(t),message:`'${e}' is imported by ${Sa(t)}, but could not be resolved – treating it as an external dependency`,source:e,url:"https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency"}}(t,n)),{external:!0,id:t,moduleSideEffects:this.hasModuleSideEffects(t,!0)}):e}normalizeResolveIdResult(e,t,n){let i="",r=!1,s=null;if(e)"object"==typeof e?(i=e.id,e.external&&(r=!0),"boolean"==typeof e.moduleSideEffects&&(s=e.moduleSideEffects)):(this.isExternal(e,t,!0)&&(r=!0),i=r?Oc(t,e):e);else{if(i=Oc(t,n),!1!==e&&!this.isExternal(i,t,!0))return null;r=!0;}return {external:r,id:i,moduleSideEffects:"boolean"==typeof s?s:this.hasModuleSideEffects(i,r)}}resolveAndFetchDependency(t,n){return e(this,void 0,void 0,function*(){return this.fetchResolvedDependency(n,t.id,t.resolvedIds[n]=t.resolvedIds[n]||this.handleMissingImports(yield this.resolveId(n,t.id),n,t.id))})}resolveDynamicImport(t,n,i){return e(this,void 0,void 0,function*(){const e=yield this.pluginDriver.hookFirst("resolveDynamicImport",[n,i]);return "string"!=typeof n?"string"==typeof e?e:e?Object.assign({external:!1,moduleSideEffects:!0},e):null:null==e?t.resolvedIds[n]=t.resolvedIds[n]||this.handleMissingImports(yield this.resolveId(n,t.id),n,t.id):this.handleMissingImports(this.normalizeResolveIdResult(e,i,n),n,i)})}}const Lc=97,Vc=48;function Bc(e){return e<10?String.fromCharCode(Vc+e):String.fromCharCode(Lc+(e-10))}function zc(e){let t="";for(let n=0;n<e.length;n++){const i=e[n];t+=Bc(i>>4),t+=Bc(15&i);}return t}function jc(e){const t=new Uint8Array(e);for(let e=0;e<t.length;e++)t[e]=512*Math.random();return t}function Wc(e){return "string"==typeof e?[{fileName:null,name:null,id:e}]:Array.isArray(e)?e.map(e=>({fileName:null,name:null,id:e})):Object.keys(e).map(t=>({fileName:null,id:e[t],name:t}))}class Uc{constructor(e,t){if(this.moduleById=new Map,this.needsTreeshakingPass=!1,this.phase=vc.LOAD_AND_PARSE,this.watchFiles=Object.create(null),this.externalModules=[],this.modules=[],this.onwarn=e.onwarn||function(){const e=Object.create(null);return t=>{const n=t.toString();n in e||(console.error(n),e[n]=!0);}}(),this.deoptimizationTracker=new yc,this.cachedModules=new Map,e.cache&&e.cache.modules)for(const t of e.cache.modules)this.cachedModules.set(t.id,t);if(!1!==e.cache){this.pluginCache=e.cache&&e.cache.plugins||Object.create(null);for(const e in this.pluginCache){const t=this.pluginCache[e];for(const e of Object.keys(t))t[e][0]++;}}if(this.preserveModules=e.preserveModules,this.strictDeprecations=e.strictDeprecations,this.cacheExpiry=e.experimentalCacheExpiry,!1!==e.treeshake&&(this.treeshakingOptions=e.treeshake?{annotations:!1!==e.treeshake.annotations,moduleSideEffects:e.treeshake.moduleSideEffects,propertyReadSideEffects:!1!==e.treeshake.propertyReadSideEffects,pureExternalModules:e.treeshake.pureExternalModules,tryCatchDeoptimization:!1!==e.treeshake.tryCatchDeoptimization}:{annotations:!0,moduleSideEffects:!0,propertyReadSideEffects:!0,tryCatchDeoptimization:!0},void 0!==this.treeshakingOptions.pureExternalModules&&this.warnDeprecation('The "treeshake.pureExternalModules" option is deprecated. The "treeshake.moduleSideEffects" option should be used instead. "treeshake.pureExternalModules: true" is equivalent to "treeshake.moduleSideEffects: \'no-external\'"',!1)),this.contextParse=(e,t={})=>this.acornParser.parse(e,Object.assign({},hh,t,this.acornOptions)),this.pluginDriver=Pc(this,e,this.pluginCache,t),t){const e=e=>this.pluginDriver.hookSeqSync("watchChange",[e]);t.on("change",e),t.once("restart",()=>{t.removeListener("change",e);});}this.shimMissingExports=e.shimMissingExports,this.scope=new mc,this.context=String(e.context);const n=e.moduleContext;if("function"==typeof n)this.getModuleContext=e=>n(e)||this.context;else if("object"==typeof n){const e=new Map;for(const t in n)e.set(gt(t),n[t]);this.getModuleContext=t=>e.get(t)||this.context;}else this.getModuleContext=()=>this.context;this.acornOptions=e.acorn?Object.assign({},e.acorn):{};const i=[];i.push(dc),e.experimentalTopLevelAwait&&(this.acornOptions.allowAwaitOutsideFunction=!0);const r=e.acornInjectPlugins;i.push(...Array.isArray(r)?r:r?[r]:[]),this.acornParser=yu.extend(...i),this.moduleLoader=new Tc(this,this.moduleById,this.pluginDriver,e.external,"function"==typeof e.manualChunks&&e.manualChunks,this.treeshakingOptions?this.treeshakingOptions.moduleSideEffects:null,!!this.treeshakingOptions&&this.treeshakingOptions.pureExternalModules);}build(e,t,n){return ih("parse modules",2),Promise.all([this.moduleLoader.addEntryModules(Wc(e),!0),t&&"object"==typeof t&&this.moduleLoader.addManualChunks(t)]).then(([{entryModules:e,manualChunkModulesByAlias:t}])=>{if(0===e.length)throw new Error("You must supply options.input to rollup");for(const e of this.moduleById.values())e instanceof lh?(this.modules.push(e),this.watchFiles[e.id]=!0):this.externalModules.push(e);if(rh("parse modules",2),this.phase=vc.ANALYSE,ih("analyse dependency graph",2),this.link(e),rh("analyse dependency graph",2),ih("mark included statements",2),n&&e.length>1)throw new Error("Internal Error: can only inline dynamic imports for single-file builds.");for(const t of e)t.includeAllExports();this.includeMarked(this.modules);for(const e of this.externalModules)e.warnUnusedImports();rh("mark included statements",2),ih("generate chunks",2),this.preserveModules||n||function(e,t){let n,i,r;const s=new Set,a=[],o=e=>{n.manualChunkAlias?(e.manualChunkAlias=n.manualChunkAlias,e.entryPointsHash=i):function(e,t){for(let n=0;n<e.length;n++)e[n]=e[n]^t[n];}(e.entryPointsHash,i);for(const t of e.dependencies)t instanceof yt||r.has(t.id)||(r.add(t.id),s.has(t.id)||t.manualChunkAlias||o(t));for(const{resolution:t}of e.dynamicImports)t instanceof lh&&t.dynamicallyImportedBy.length>0&&!t.manualChunkAlias&&a.push(t);};if(t)for(const e of Object.keys(t))for(n of(i=jc(10),t[e]))r=new Set(n.id),o(n);for(n of e)s.add(n.id),i=jc(10),r=new Set(n.id),n.manualChunkAlias||o(n);for(n of a)s.has(n.id)||(s.add(n.id),i=jc(10),r=new Set(n.id),o(n));}(e,t);let i=[];if(this.preserveModules)for(const e of this.modules){const t=new kh(this,[e]);!e.isEntryPoint&&t.isEmpty||(t.entryModules=[e]),i.push(t);}else{const e={};for(const t of this.modules){const n=zc(t.entryPointsHash),i=e[n];i?i.push(t):e[n]=[t];}for(const t in e){const n=e[t];Eh(n);const r=new kh(this,n);i.push(r);}}for(const e of i)e.link();i=i.filter(Ph);const r=[];for(const e of i)r.push(...e.generateFacades());return rh("generate chunks",2),this.phase=vc.GENERATE,i.concat(r)})}getCache(){for(const e in this.pluginCache){const t=this.pluginCache[e];let n=!0;for(const e of Object.keys(t))t[e][0]>=this.cacheExpiry?delete t[e]:n=!1;n&&delete this.pluginCache[e];}return {modules:this.modules.map(e=>e.toJSON()),plugins:this.pluginCache}}includeMarked(e){if(this.treeshakingOptions){let t=1;do{ih(`treeshaking pass ${t}`,3),this.needsTreeshakingPass=!1;for(const t of e)t.isExecuted&&t.include();rh(`treeshaking pass ${t++}`,3);}while(this.needsTreeshakingPass)}else for(const t of e)t.includeAllInBundle();}warn(e){e.toString=()=>{let t="";return e.plugin&&(t+=`(${e.plugin} plugin) `),e.loc&&(t+=`${Sa(e.loc.file)} (${e.loc.line}:${e.loc.column}) `),t+=e.message},this.onwarn(e);}warnDeprecation(e,t){if(t||this.strictDeprecations){const t=ka(e);if(this.strictDeprecations)return Ia(t);this.warn(t);}}link(e){for(const e of this.modules)e.linkDependencies();const{orderedModules:t,cyclePaths:n}=function(e){let t=0;const n=[],i={},r=[],s=[],a={},o=e=>{if(!i[e.id]){if(e instanceof yt)return e.execIndex=t++,void(i[e.id]=!0);for(const t of e.dependencies)t.id in a?i[t.id]||n.push(bh(t.id,e.id,a)):(a[t.id]=e.id,o(t));for(const{resolution:t}of e.dynamicImports)t instanceof lh&&-1===s.indexOf(t)&&s.push(t);e.execIndex=t++,i[e.id]=!0,r.push(e);}};for(const t of e)a[t.id]||(a[t.id]=null,o(t));for(const e of s)a[e.id]||(a[e.id]=null,o(e));return {orderedModules:r,cyclePaths:n}}(e);for(const e of n)this.warn({code:"CIRCULAR_DEPENDENCY",importer:e[0],message:`Circular dependency: ${e.join(" -> ")}`});this.modules=t;for(const e of this.modules)e.bindReferences();this.warnForMissingExports();}warnForMissingExports(){for(const e of this.modules)for(const t of Object.keys(e.importDescriptions)){const n=e.importDescriptions[t];"*"===n.name||n.module.getVariableForExportName(n.name)||e.warn({code:"NON_EXISTENT_EXPORT",message:`Non-existent export '${n.name}' is imported from ${Sa(n.module.id)}`,name:n.name,source:n.module.id},n.start);}}}function Fc(e){switch(typeof e){case"function":return e();case"string":return e;default:return ""}}const qc=(e,t)=>t?`${e}\n${t}`:e,Hc=(e,t)=>t?`${e}\n\n${t}`:e;function Gc(e,t){Ia({code:"INVALID_EXPORT_OPTION",message:`'${e}' was specified for output.exports, but entry module has following exports: ${t.join(", ")}`});}function Kc(e,{exports:t,name:n,format:i}){const r=e.getExportNames();return "default"===t?1===r.length&&"default"===r[0]||Gc("default",r):"none"===t&&r.length&&Gc("none",r),t&&"auto"!==t||(0===r.length?t="none":1===r.length&&"default"===r[0]?t="default":(null!==e.facadeModule&&e.facadeModule.isEntryPoint&&"es"!==i&&-1!==r.indexOf("default")&&e.graph.warn({code:"MIXED_EXPORTS",message:`Using named and default exports together. Consumers of your bundle will have to use ${n||"bundle"}['default'] to access the default export, which may not be what you want. Use \`output.exports: 'named'\` to disable this warning`,url:"https://rollupjs.org/guide/en/#output-exports"}),t="named")),/(?:default|named|none)/.test(t)||Ia({code:"INVALID_EXPORT_OPTION",message:"output.exports must be 'default', 'named', 'none', 'auto', or left unspecified (defaults to 'auto')",url:"https://rollupjs.org/guide/en/#output-exports"}),t}const Yc=(e,t)=>(n,i)=>void 0!==t[n]?t[n]:void 0!==e[n]?e[n]:i,Xc=e=>e&&"object"!=typeof e?{}:e,Qc=(e,t,n)=>{const i=Xc(t[n]),r=Xc(e[n]);return void 0!==i?i&&r?Object.assign({},r,i):i:r},Jc=(e,t=(e=>{"string"==typeof e?console.warn(e):console.warn(e.message);}))=>e.onwarn?n=>e.onwarn(n,t):t,Zc=(e,t)=>{const n=e.external;return "function"==typeof n?(e,...i)=>n(e,...i)||-1!==t.external.indexOf(e):("string"==typeof e.external?[n]:Array.isArray(n)?n:[]).concat(t.external)},el={c:"config",d:"dir",e:"external",f:"format",g:"globals",h:"help",i:"input",m:"sourcemap",n:"name",o:"file",v:"version",w:"watch"};function tl({config:e={},command:t={},defaultOnWarnHandler:n}){const i=function(e){const t=e.external&&"string"==typeof e.external?e.external.split(","):[];return Object.assign({},e,{external:t,globals:"string"==typeof e.globals?e.globals.split(",").reduce((e,n)=>{const[i,r]=n.split(":");return e[i]=r,-1===t.indexOf(i)&&t.push(i),e},Object.create(null)):void 0})}(t),r=function(e,t={external:[],globals:void 0},n){const i=Yc(e,t),r={acorn:e.acorn,acornInjectPlugins:e.acornInjectPlugins,cache:i("cache"),chunkGroupingSize:i("chunkGroupingSize",5e3),context:e.context,experimentalCacheExpiry:i("experimentalCacheExpiry",10),experimentalOptimizeChunks:i("experimentalOptimizeChunks"),experimentalTopLevelAwait:i("experimentalTopLevelAwait"),external:Zc(e,t),inlineDynamicImports:i("inlineDynamicImports",!1),input:i("input",[]),manualChunks:i("manualChunks"),moduleContext:e.moduleContext,onwarn:Jc(e,n),perf:i("perf",!1),plugins:e.plugins,preserveModules:i("preserveModules"),preserveSymlinks:i("preserveSymlinks"),shimMissingExports:i("shimMissingExports"),strictDeprecations:i("strictDeprecations",!1),treeshake:Qc(e,t,"treeshake"),watch:e.watch};r.cache&&r.cache.cache&&(r.cache=r.cache.cache);return r}(e,i,n);i.output&&Object.assign(i,i.output);const s=e.output,a=Array.isArray(s)?s:s?[s]:[];0===a.length&&a.push({});const o=a.map(e=>(function(e,t={}){const n=Yc(e,t);let i=n("format");switch(i){case"esm":case"module":i="es";break;case"commonjs":i="cjs";}return {amd:Object.assign({},e.amd,t.amd),assetFileNames:n("assetFileNames"),banner:n("banner"),chunkFileNames:n("chunkFileNames"),compact:n("compact",!1),dir:n("dir"),dynamicImportFunction:n("dynamicImportFunction"),entryFileNames:n("entryFileNames"),esModule:n("esModule",!0),exports:n("exports"),extend:n("extend"),externalLiveBindings:n("externalLiveBindings",!0),file:n("file"),footer:n("footer"),format:"esm"===i?"es":i,freeze:n("freeze",!0),globals:n("globals"),indent:n("indent",!0),interop:n("interop",!0),intro:n("intro"),name:n("name"),namespaceToStringTag:n("namespaceToStringTag",!1),noConflict:n("noConflict"),outro:n("outro"),paths:n("paths"),preferConst:n("preferConst"),sourcemap:n("sourcemap"),sourcemapExcludeSources:n("sourcemapExcludeSources"),sourcemapFile:n("sourcemapFile"),sourcemapPathTransform:n("sourcemapPathTransform"),strict:n("strict",!0)}})(e,i)),h=[],u=Object.keys(r);nl(h,Object.keys(e),u,"input option",/^output$/);const c=Object.keys(o[0]);nl(h,o.reduce((e,t)=>e.concat(Object.keys(t)),[]),c,"output option");const l=c.filter(e=>"sourcemapPathTransform"!==e);return nl(h,Object.keys(i),u.concat(l,Object.keys(el),"config","environment","silent"),"CLI flag",/^_|output|(config.*)$/),{inputOptions:r,optionError:h.length>0?h.join("\n"):null,outputOptions:o}}function nl(e,t,n,i,r=/$./){const s=t.filter(e=>-1===n.indexOf(e)&&!r.test(e));s.length>0&&e.push(`Unknown ${i}: ${s.join(", ")}. Allowed options: ${n.sort().join(", ")}`);}const il={get(){throw new Error("bundle.generate(...) now returns a Promise instead of a { code, map } object")}};function rl(e,n){return n.options&&n.options.call({meta:{rollupVersion:t}},e)||e}function sl(e){return Array.isArray(e)?e.filter(Boolean):e?[e]:[]}let al;function ol(t){return e(this,void 0,void 0,function*(){const n=function(e){if(!e)throw new Error("You must supply an options object to rollup");let{inputOptions:t,optionError:n}=tl({config:e});n&&t.onwarn({message:n,code:"UNKNOWN_OPTION"}),(t=sl(t.plugins).reduce(rl,t)).plugins=sl(t.plugins);for(let e=0;e<t.plugins.length;e++){const n=t.plugins[e];n.name||(n.name=`${wc}${e+1}`);}return t.inlineDynamicImports?(t.preserveModules&&Ia({code:"INVALID_OPTION",message:'"preserveModules" does not support the "inlineDynamicImports" option.'}),t.manualChunks&&Ia({code:"INVALID_OPTION",message:'"manualChunks" option is not supported for "inlineDynamicImports".'}),t.experimentalOptimizeChunks&&Ia({code:"INVALID_OPTION",message:'"experimentalOptimizeChunks" option is not supported for "inlineDynamicImports".'}),(t.input instanceof Array&&t.input.length>1||"object"==typeof t.input&&Object.keys(t.input).length>1)&&Ia({code:"INVALID_OPTION",message:'Multiple inputs are not supported for "inlineDynamicImports".'})):t.preserveModules&&(t.manualChunks&&Ia({code:"INVALID_OPTION",message:'"preserveModules" does not support the "manualChunks" option.'}),t.experimentalOptimizeChunks&&Ia({code:"INVALID_OPTION",message:'"preserveModules" does not support the "experimentalOptimizeChunks" option.'})),t}(t);oh(n);const i=new Uc(n,al);al=void 0;const r=!1!==t.cache;let s;delete n.cache,delete t.cache,ih("BUILD",1);try{yield i.pluginDriver.hookParallel("buildStart",[n]),s=yield i.build(n.input,n.manualChunks,n.inlineDynamicImports);}catch(e){throw yield i.pluginDriver.hookParallel("buildEnd",[e]),e}yield i.pluginDriver.hookParallel("buildEnd",[]),rh("BUILD",1);let a=!1;function o(e){return function(e,t,n,i){if(!t)throw new Error("You must supply an options object");const r=tl({config:{output:Object.assign({},t,t.output,e.output)}});if(r.optionError)throw new Error(r.optionError);const s=r.outputOptions[0],a=i.hookReduceArg0Sync("outputOptions",[s],(e,t)=>t||e,e=>{const t=()=>e.error({code:Pa.CANNOT_EMIT_FROM_OPTIONS_HOOK,message:'Cannot emit files or set asset sources in the "outputOptions" hook, use the "renderStart" hook instead.'});return Object.assign({},e,{emitFile:t,setAssetSource:t})});o=a,"es6"===o.format&&Ia(ka({message:'The "es6" output format is deprecated – use "esm" instead',url:"https://rollupjs.org/guide/en/#output-format"})),void(["amd","cjs","system","es","iife","umd"].indexOf(o.format)<0&&Ia({message:'You must specify "output.format", which can be one of "amd", "cjs", "system", "esm", "iife" or "umd".',url:"https://rollupjs.org/guide/en/#output-format"})),"string"==typeof a.file&&("string"==typeof a.dir&&Ia({code:"INVALID_OPTION",message:'You must set either "output.file" for a single-file build or "output.dir" when generating multiple chunks.'}),e.preserveModules&&Ia({code:"INVALID_OPTION",message:'You must set "output.dir" instead of "output.file" when using the "preserveModules" option.'}),"object"!=typeof e.input||Array.isArray(e.input)||Ia({code:"INVALID_OPTION",message:'You must set "output.dir" instead of "output.file" when providing named inputs.'}));var o;n&&("umd"!==a.format&&"iife"!==a.format||Ia({code:"INVALID_OPTION",message:"UMD and IIFE output formats are not supported for code-splitting builds."}),"string"==typeof a.file&&Ia({code:"INVALID_OPTION",message:'You must set "output.dir" instead of "output.file" when generating multiple chunks.'}));return a}(n,e,s.length>1,i.pluginDriver)}function h(t,r){return e(this,void 0,void 0,function*(){ih("GENERATE",1);const e=t.assetFileNames||"assets/[name]-[hash][extname]",o=Object.create(null);let h;const u=function(e){if(0===e.length)return "/";if(1===e.length)return dt(e[0]);const t=e.slice(1).reduce((e,t)=>{const n=t.split(/\/+|\\+/);let i;for(i=0;e[i]===n[i]&&i<Math.min(e.length,n.length);i++);return e.slice(0,i)},e[0].split(/\/+|\\+/));return t.length>1?t.join("/"):"/"}(function(e){const t=[];for(const n of e)for(const e of n.entryModules)ut(e.id)&&t.push(e.id);return t}(s));i.pluginDriver.startOutput(o,e);try{yield i.pluginDriver.hookParallel("renderStart",[]);const e=yield function(e,t){const n=e.pluginDriver;return Promise.all([n.hookReduceValue("banner",Fc(t.banner),[],qc),n.hookReduceValue("footer",Fc(t.footer),[],qc),n.hookReduceValue("intro",Fc(t.intro),[],Hc),n.hookReduceValue("outro",Fc(t.outro),[],Hc)]).then(([e,t,n,i])=>(n&&(n+="\n\n"),i&&(i=`\n\n${i}`),e.length&&(e+="\n"),t.length&&(t="\n"+t),{intro:n,outro:i,banner:e,footer:t})).catch(e=>{Ia({code:"ADDON_ERROR",message:`Could not retrieve ${e.hook}. Check configuration of plugin ${e.plugin}.\n\tError Message: ${e.message}`});})}(i,t);for(const e of s)n.preserveModules||e.generateInternalExports(t),e.facadeModule&&e.facadeModule.isEntryPoint&&(e.exportMode=Kc(e,t));for(const e of s)e.preRender(t,u);!a&&n.experimentalOptimizeChunks&&(!function(e,t,n,i){for(let r=0;r<e.length;r++){const s=e[r],a=[];if(s.visitStaticDependenciesUntilCondition(e=>{e instanceof kh&&a.push(e);}),a.length<2)continue;let o=1,h=!0,u=void 0,c=a[0],l=a[1];const p=e=>null===e.facadeModule&&null===e.manualChunkAlias&&(!(!l||null!==l.facadeModule)&&!(e.getRenderedSourceLength()>n));do{if(h){p(c)&&(h=!1);continue}let s=n-u.getRenderedSourceLength()-c.getRenderedSourceLength();if(s<=0){p(c)||(h=!0);continue}const d=new Set;c.visitStaticDependenciesUntilCondition(e=>d.add(e));const f=new Set([c,u]);if(u.visitStaticDependenciesUntilCondition(e=>e!==c&&e!==u&&(!d.has(e)&&(e instanceof yt||((s-=e.getRenderedSourceLength())<=0||void f.add(e)))))){p(c)||(h=!0);continue}if(c.visitStaticDependenciesUntilCondition(e=>!f.has(e)&&(e instanceof yt||((s-=e.getRenderedSourceLength())<=0||void 0)))){p(c)||(h=!0);continue}const m=e.indexOf(c);m<=r&&r--,e.splice(m,1),u.merge(c,e,t,i),a.splice(--o,1),c=u,l&&!p(l)&&(h=!0);}while(u=c,c=l,l=a[++o],c)}}(s,t,n.chunkGroupingSize,u),a=!0),function(e,t,n,i,r,s){const a=[],o=[];for(const t of e)(t.facadeModule&&t.facadeModule.isUserDefinedEntryPoint?a:o).push(t);const h=a.concat(o);for(const e of h)n.file?e.id=pt(n.file):t.preserveModules?e.id=e.generateIdPreserveModules(i,s):e.id=e.generateId(r,n,s,!0),s[e.id]=_c;}(s,n,t,u,e,o),h=function(e,t){for(let n=0;n<e.length;n++){const i=e[n],r=i.facadeModule;t[i.id]={code:void 0,dynamicImports:i.getDynamicImportIds(),exports:i.getExportNames(),facadeModuleId:r&&r.id,fileName:i.id,imports:i.getImportIds(),isDynamicEntry:null!==r&&r.dynamicallyImportedBy.length>0,isEntry:null!==r&&r.isEntryPoint,map:void 0,modules:i.renderedModules,get name(){return i.getChunkName()}};}return t}(s,o),yield Promise.all(s.map(n=>{const r=o[n.id];return n.render(t,e,r).then(e=>(r.code=e.code,r.map=e.map,i.pluginDriver.hookParallel("ongenerate",[Object.assign({bundle:r},t),r])))}));}catch(e){throw yield i.pluginDriver.hookParallel("renderError",[e]),e}return yield i.pluginDriver.hookSeq("generateBundle",[t,h,r]),i.pluginDriver.finaliseAssets(),rh("GENERATE",1),h})}const u={cache:r?i.getCache():void 0,generate:e=>{const t=h(o(e),!1).then(e=>cl(e));return Object.defineProperty(t,"code",il),Object.defineProperty(t,"map",il),t},watchFiles:Object.keys(i.watchFiles),write:t=>{const r=o(t);return r.dir||r.file||Ia({code:"MISSING_OPTION",message:'You must specify "output.file" or "output.dir" for the build.'}),h(r,!0).then(t=>e(this,void 0,void 0,function*(){let e=0;for(const n of Object.keys(t)){if(!t[n].isAsset&&++e>1)break}return e>1&&(r.sourcemapFile&&Ia({code:"INVALID_OPTION",message:'"output.sourcemapFile" is only supported for single-file builds.'}),"string"==typeof r.file&&Ia({code:"INVALID_OPTION",message:'When building multiple chunks, the "output.dir" option must be used, not "output.file".'+("string"!=typeof n.input||!0===n.inlineDynamicImports?"":' To inline dynamic imports, set the "inlineDynamicImports" option.')})),yield Promise.all(Object.keys(t).map(e=>(function(e,t,n,i){const r=gt(i.dir||dt(i.file),n.fileName);let s,a;if(ll(n))a=n.source;else if(a=n.code,i.sourcemap&&n.map){let e;"inline"===i.sourcemap?e=n.map.toUrl():(e=`${pt(n.fileName)}.map`,s=yo(`${r}.map`,n.map.toString())),a+=`//# ${qo}=${e}\n`;}return yo(r,a).then(()=>s).then(()=>!ll(n)&&e.pluginDriver.hookSeq("onwrite",[Object.assign({bundle:t},i),n])).then(()=>{})})(i,u,t[e],r))),yield i.pluginDriver.hookParallel("writeBundle",[t]),cl(t)}))}};return !0===n.perf&&(u.getTimings=nh),u})}var hl;function ul(e){return e.isAsset?hl.ASSET:e.isEntry?hl.ENTRY_CHUNK:hl.SECONDARY_CHUNK}function cl(e){return {output:Object.keys(e).map(t=>e[t]).filter(e=>Object.keys(e).length>0).sort((e,t)=>{const n=ul(e),i=ul(t);return n===i?0:n<i?-1:1})}}function ll(e){return !0===e.isAsset}!function(e){e[e.ENTRY_CHUNK=0]="ENTRY_CHUNK",e[e.SECONDARY_CHUNK=1]="SECONDARY_CHUNK",e[e.ASSET=2]="ASSET";}(hl||(hl={}));

	// Reserved word lists for various dialects of the language

	var reservedWords = {
	  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
	  5: "class enum extends super const export import",
	  6: "enum",
	  strict: "implements interface let package private protected public static yield",
	  strictBind: "eval arguments"
	};

	// And the keywords

	var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

	var keywords = {
	  5: ecma5AndLessKeywords,
	  "5module": ecma5AndLessKeywords + " export import",
	  6: ecma5AndLessKeywords + " const class extends export import super"
	};

	var keywordRelationalOperator = /^in(stanceof)?$/;

	// ## Character categories

	// Big ugly regular expressions that match characters in the
	// whitespace, identifier, and identifier-start categories. These
	// are only applied when a character is found to actually have a
	// code point above 128.
	// Generated by `bin/generate-identifier-regex.js`.
	var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
	var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

	var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
	var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

	nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

	// These are a run-length and offset encoded representation of the
	// >0xffff code points that are a valid part of identifiers. The
	// offset starts at 0x10000, and each pair of numbers represents an
	// offset to the next range, and then a size of the range. They were
	// generated by bin/generate-identifier-regex.js

	// eslint-disable-next-line comma-spacing
	var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,155,22,13,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,0,33,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,0,161,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,754,9486,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541];

	// eslint-disable-next-line comma-spacing
	var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,232,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,792487,239];

	// This has a complexity linear to the value of the code. The
	// assumption is that looking up astral identifier characters is
	// rare.
	function isInAstralSet(code, set) {
	  var pos = 0x10000;
	  for (var i = 0; i < set.length; i += 2) {
	    pos += set[i];
	    if (pos > code) { return false }
	    pos += set[i + 1];
	    if (pos >= code) { return true }
	  }
	}

	// Test whether a given character code starts an identifier.

	function isIdentifierStart(code, astral) {
	  if (code < 65) { return code === 36 }
	  if (code < 91) { return true }
	  if (code < 97) { return code === 95 }
	  if (code < 123) { return true }
	  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
	  if (astral === false) { return false }
	  return isInAstralSet(code, astralIdentifierStartCodes)
	}

	// Test whether a given character is part of an identifier.

	function isIdentifierChar(code, astral) {
	  if (code < 48) { return code === 36 }
	  if (code < 58) { return true }
	  if (code < 65) { return false }
	  if (code < 91) { return true }
	  if (code < 97) { return code === 95 }
	  if (code < 123) { return true }
	  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
	  if (astral === false) { return false }
	  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
	}

	// ## Token types

	// The assignment of fine-grained, information-carrying type objects
	// allows the tokenizer to store the information it has about a
	// token in a way that is very cheap for the parser to look up.

	// All token type variables start with an underscore, to make them
	// easy to recognize.

	// The `beforeExpr` property is used to disambiguate between regular
	// expressions and divisions. It is set on all token types that can
	// be followed by an expression (thus, a slash after them would be a
	// regular expression).
	//
	// The `startsExpr` property is used to check if the token ends a
	// `yield` expression. It is set on all token types that either can
	// directly start an expression (like a quotation mark) or can
	// continue an expression (like the body of a string).
	//
	// `isLoop` marks a keyword as starting a loop, which is important
	// to know when parsing a label, in order to allow or disallow
	// continue jumps to that label.

	var TokenType = function TokenType(label, conf) {
	  if ( conf === void 0 ) conf = {};

	  this.label = label;
	  this.keyword = conf.keyword;
	  this.beforeExpr = !!conf.beforeExpr;
	  this.startsExpr = !!conf.startsExpr;
	  this.isLoop = !!conf.isLoop;
	  this.isAssign = !!conf.isAssign;
	  this.prefix = !!conf.prefix;
	  this.postfix = !!conf.postfix;
	  this.binop = conf.binop || null;
	  this.updateContext = null;
	};

	function binop(name, prec) {
	  return new TokenType(name, {beforeExpr: true, binop: prec})
	}
	var beforeExpr = {beforeExpr: true}, startsExpr = {startsExpr: true};

	// Map keyword names to token types.

	var keywords$1 = {};

	// Succinct definitions of keyword token types
	function kw(name, options) {
	  if ( options === void 0 ) options = {};

	  options.keyword = name;
	  return keywords$1[name] = new TokenType(name, options)
	}

	var types = {
	  num: new TokenType("num", startsExpr),
	  regexp: new TokenType("regexp", startsExpr),
	  string: new TokenType("string", startsExpr),
	  name: new TokenType("name", startsExpr),
	  eof: new TokenType("eof"),

	  // Punctuation token types.
	  bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
	  bracketR: new TokenType("]"),
	  braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
	  braceR: new TokenType("}"),
	  parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
	  parenR: new TokenType(")"),
	  comma: new TokenType(",", beforeExpr),
	  semi: new TokenType(";", beforeExpr),
	  colon: new TokenType(":", beforeExpr),
	  dot: new TokenType("."),
	  question: new TokenType("?", beforeExpr),
	  arrow: new TokenType("=>", beforeExpr),
	  template: new TokenType("template"),
	  invalidTemplate: new TokenType("invalidTemplate"),
	  ellipsis: new TokenType("...", beforeExpr),
	  backQuote: new TokenType("`", startsExpr),
	  dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

	  // Operators. These carry several kinds of properties to help the
	  // parser use them properly (the presence of these properties is
	  // what categorizes them as operators).
	  //
	  // `binop`, when present, specifies that this operator is a binary
	  // operator, and will refer to its precedence.
	  //
	  // `prefix` and `postfix` mark the operator as a prefix or postfix
	  // unary operator.
	  //
	  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
	  // binary operators with a very low precedence, that should result
	  // in AssignmentExpression nodes.

	  eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
	  assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
	  incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
	  prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
	  logicalOR: binop("||", 1),
	  logicalAND: binop("&&", 2),
	  bitwiseOR: binop("|", 3),
	  bitwiseXOR: binop("^", 4),
	  bitwiseAND: binop("&", 5),
	  equality: binop("==/!=/===/!==", 6),
	  relational: binop("</>/<=/>=", 7),
	  bitShift: binop("<</>>/>>>", 8),
	  plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
	  modulo: binop("%", 10),
	  star: binop("*", 10),
	  slash: binop("/", 10),
	  starstar: new TokenType("**", {beforeExpr: true}),

	  // Keyword token types.
	  _break: kw("break"),
	  _case: kw("case", beforeExpr),
	  _catch: kw("catch"),
	  _continue: kw("continue"),
	  _debugger: kw("debugger"),
	  _default: kw("default", beforeExpr),
	  _do: kw("do", {isLoop: true, beforeExpr: true}),
	  _else: kw("else", beforeExpr),
	  _finally: kw("finally"),
	  _for: kw("for", {isLoop: true}),
	  _function: kw("function", startsExpr),
	  _if: kw("if"),
	  _return: kw("return", beforeExpr),
	  _switch: kw("switch"),
	  _throw: kw("throw", beforeExpr),
	  _try: kw("try"),
	  _var: kw("var"),
	  _const: kw("const"),
	  _while: kw("while", {isLoop: true}),
	  _with: kw("with"),
	  _new: kw("new", {beforeExpr: true, startsExpr: true}),
	  _this: kw("this", startsExpr),
	  _super: kw("super", startsExpr),
	  _class: kw("class", startsExpr),
	  _extends: kw("extends", beforeExpr),
	  _export: kw("export"),
	  _import: kw("import", startsExpr),
	  _null: kw("null", startsExpr),
	  _true: kw("true", startsExpr),
	  _false: kw("false", startsExpr),
	  _in: kw("in", {beforeExpr: true, binop: 7}),
	  _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
	  _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
	  _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
	  _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
	};

	// Matches a whole line break (where CRLF is considered a single
	// line break). Used to count lines.

	var lineBreak = /\r\n?|\n|\u2028|\u2029/;
	var lineBreakG = new RegExp(lineBreak.source, "g");

	function isNewLine(code, ecma2019String) {
	  return code === 10 || code === 13 || (!ecma2019String && (code === 0x2028 || code === 0x2029))
	}

	var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

	var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

	var ref = Object.prototype;
	var hasOwnProperty = ref.hasOwnProperty;
	var toString = ref.toString;

	// Checks if an object has a property.

	function has(obj, propName) {
	  return hasOwnProperty.call(obj, propName)
	}

	var isArray = Array.isArray || (function (obj) { return (
	  toString.call(obj) === "[object Array]"
	); });

	function wordsRegexp(words) {
	  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
	}

	// These are used when `options.locations` is on, for the
	// `startLoc` and `endLoc` properties.

	var Position = function Position(line, col) {
	  this.line = line;
	  this.column = col;
	};

	Position.prototype.offset = function offset (n) {
	  return new Position(this.line, this.column + n)
	};

	var SourceLocation = function SourceLocation(p, start, end) {
	  this.start = start;
	  this.end = end;
	  if (p.sourceFile !== null) { this.source = p.sourceFile; }
	};

	// The `getLineInfo` function is mostly useful when the
	// `locations` option is off (for performance reasons) and you
	// want to find the line/column position for a given character
	// offset. `input` should be the code string that the offset refers
	// into.

	function getLineInfo(input, offset) {
	  for (var line = 1, cur = 0;;) {
	    lineBreakG.lastIndex = cur;
	    var match = lineBreakG.exec(input);
	    if (match && match.index < offset) {
	      ++line;
	      cur = match.index + match[0].length;
	    } else {
	      return new Position(line, offset - cur)
	    }
	  }
	}

	// A second optional argument can be given to further configure
	// the parser process. These options are recognized:

	var defaultOptions = {
	  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
	  // either 3, 5, 6 (2015), 7 (2016), 8 (2017), 9 (2018), or 10
	  // (2019). This influences support for strict mode, the set of
	  // reserved words, and support for new syntax features. The default
	  // is 10.
	  ecmaVersion: 10,
	  // `sourceType` indicates the mode the code should be parsed in.
	  // Can be either `"script"` or `"module"`. This influences global
	  // strict mode and parsing of `import` and `export` declarations.
	  sourceType: "script",
	  // `onInsertedSemicolon` can be a callback that will be called
	  // when a semicolon is automatically inserted. It will be passed
	  // the position of the comma as an offset, and if `locations` is
	  // enabled, it is given the location as a `{line, column}` object
	  // as second argument.
	  onInsertedSemicolon: null,
	  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
	  // trailing commas.
	  onTrailingComma: null,
	  // By default, reserved words are only enforced if ecmaVersion >= 5.
	  // Set `allowReserved` to a boolean value to explicitly turn this on
	  // an off. When this option has the value "never", reserved words
	  // and keywords can also not be used as property names.
	  allowReserved: null,
	  // When enabled, a return at the top level is not considered an
	  // error.
	  allowReturnOutsideFunction: false,
	  // When enabled, import/export statements are not constrained to
	  // appearing at the top of the program.
	  allowImportExportEverywhere: false,
	  // When enabled, await identifiers are allowed to appear at the top-level scope,
	  // but they are still not allowed in non-async functions.
	  allowAwaitOutsideFunction: false,
	  // When enabled, hashbang directive in the beginning of file
	  // is allowed and treated as a line comment.
	  allowHashBang: false,
	  // When `locations` is on, `loc` properties holding objects with
	  // `start` and `end` properties in `{line, column}` form (with
	  // line being 1-based and column 0-based) will be attached to the
	  // nodes.
	  locations: false,
	  // A function can be passed as `onToken` option, which will
	  // cause Acorn to call that function with object in the same
	  // format as tokens returned from `tokenizer().getToken()`. Note
	  // that you are not allowed to call the parser from the
	  // callback—that will corrupt its internal state.
	  onToken: null,
	  // A function can be passed as `onComment` option, which will
	  // cause Acorn to call that function with `(block, text, start,
	  // end)` parameters whenever a comment is skipped. `block` is a
	  // boolean indicating whether this is a block (`/* */`) comment,
	  // `text` is the content of the comment, and `start` and `end` are
	  // character offsets that denote the start and end of the comment.
	  // When the `locations` option is on, two more parameters are
	  // passed, the full `{line, column}` locations of the start and
	  // end of the comments. Note that you are not allowed to call the
	  // parser from the callback—that will corrupt its internal state.
	  onComment: null,
	  // Nodes have their start and end characters offsets recorded in
	  // `start` and `end` properties (directly on the node, rather than
	  // the `loc` object, which holds line/column data. To also add a
	  // [semi-standardized][range] `range` property holding a `[start,
	  // end]` array with the same numbers, set the `ranges` option to
	  // `true`.
	  //
	  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
	  ranges: false,
	  // It is possible to parse multiple files into a single AST by
	  // passing the tree produced by parsing the first file as
	  // `program` option in subsequent parses. This will add the
	  // toplevel forms of the parsed file to the `Program` (top) node
	  // of an existing parse tree.
	  program: null,
	  // When `locations` is on, you can pass this to record the source
	  // file in every node's `loc` object.
	  sourceFile: null,
	  // This value, if given, is stored in every node, whether
	  // `locations` is on or off.
	  directSourceFile: null,
	  // When enabled, parenthesized expressions are represented by
	  // (non-standard) ParenthesizedExpression nodes
	  preserveParens: false
	};

	// Interpret and default an options object

	function getOptions(opts) {
	  var options = {};

	  for (var opt in defaultOptions)
	    { options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt]; }

	  if (options.ecmaVersion >= 2015)
	    { options.ecmaVersion -= 2009; }

	  if (options.allowReserved == null)
	    { options.allowReserved = options.ecmaVersion < 5; }

	  if (isArray(options.onToken)) {
	    var tokens = options.onToken;
	    options.onToken = function (token) { return tokens.push(token); };
	  }
	  if (isArray(options.onComment))
	    { options.onComment = pushComment(options, options.onComment); }

	  return options
	}

	function pushComment(options, array) {
	  return function(block, text, start, end, startLoc, endLoc) {
	    var comment = {
	      type: block ? "Block" : "Line",
	      value: text,
	      start: start,
	      end: end
	    };
	    if (options.locations)
	      { comment.loc = new SourceLocation(this, startLoc, endLoc); }
	    if (options.ranges)
	      { comment.range = [start, end]; }
	    array.push(comment);
	  }
	}

	// Each scope gets a bitset that may contain these flags
	var
	    SCOPE_TOP = 1,
	    SCOPE_FUNCTION = 2,
	    SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION,
	    SCOPE_ASYNC = 4,
	    SCOPE_GENERATOR = 8,
	    SCOPE_ARROW = 16,
	    SCOPE_SIMPLE_CATCH = 32,
	    SCOPE_SUPER = 64,
	    SCOPE_DIRECT_SUPER = 128;

	function functionFlags(async, generator) {
	  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0)
	}

	// Used in checkLVal and declareName to determine the type of a binding
	var
	    BIND_NONE = 0, // Not a binding
	    BIND_VAR = 1, // Var-style binding
	    BIND_LEXICAL = 2, // Let- or const-style binding
	    BIND_FUNCTION = 3, // Function declaration
	    BIND_SIMPLE_CATCH = 4, // Simple (identifier pattern) catch binding
	    BIND_OUTSIDE = 5; // Special case for function names as bound inside the function

	var Parser = function Parser(options, input, startPos) {
	  this.options = options = getOptions(options);
	  this.sourceFile = options.sourceFile;
	  this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
	  var reserved = "";
	  if (options.allowReserved !== true) {
	    for (var v = options.ecmaVersion;; v--)
	      { if (reserved = reservedWords[v]) { break } }
	    if (options.sourceType === "module") { reserved += " await"; }
	  }
	  this.reservedWords = wordsRegexp(reserved);
	  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
	  this.reservedWordsStrict = wordsRegexp(reservedStrict);
	  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
	  this.input = String(input);

	  // Used to signal to callers of `readWord1` whether the word
	  // contained any escape sequences. This is needed because words with
	  // escape sequences must not be interpreted as keywords.
	  this.containsEsc = false;

	  // Set up token state

	  // The current position of the tokenizer in the input.
	  if (startPos) {
	    this.pos = startPos;
	    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
	    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
	  } else {
	    this.pos = this.lineStart = 0;
	    this.curLine = 1;
	  }

	  // Properties of the current token:
	  // Its type
	  this.type = types.eof;
	  // For tokens that include more information than their type, the value
	  this.value = null;
	  // Its start and end offset
	  this.start = this.end = this.pos;
	  // And, if locations are used, the {line, column} object
	  // corresponding to those offsets
	  this.startLoc = this.endLoc = this.curPosition();

	  // Position information for the previous token
	  this.lastTokEndLoc = this.lastTokStartLoc = null;
	  this.lastTokStart = this.lastTokEnd = this.pos;

	  // The context stack is used to superficially track syntactic
	  // context to predict whether a regular expression is allowed in a
	  // given position.
	  this.context = this.initialContext();
	  this.exprAllowed = true;

	  // Figure out if it's a module code.
	  this.inModule = options.sourceType === "module";
	  this.strict = this.inModule || this.strictDirective(this.pos);

	  // Used to signify the start of a potential arrow function
	  this.potentialArrowAt = -1;

	  // Positions to delayed-check that yield/await does not exist in default parameters.
	  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
	  // Labels in scope.
	  this.labels = [];
	  // Thus-far undefined exports.
	  this.undefinedExports = {};

	  // If enabled, skip leading hashbang line.
	  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
	    { this.skipLineComment(2); }

	  // Scope tracking for duplicate variable names (see scope.js)
	  this.scopeStack = [];
	  this.enterScope(SCOPE_TOP);

	  // For RegExp validation
	  this.regexpState = null;
	};

	var prototypeAccessors = { inFunction: { configurable: true },inGenerator: { configurable: true },inAsync: { configurable: true },allowSuper: { configurable: true },allowDirectSuper: { configurable: true },treatFunctionsAsVar: { configurable: true } };

	Parser.prototype.parse = function parse () {
	  var node = this.options.program || this.startNode();
	  this.nextToken();
	  return this.parseTopLevel(node)
	};

	prototypeAccessors.inFunction.get = function () { return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0 };
	prototypeAccessors.inGenerator.get = function () { return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 };
	prototypeAccessors.inAsync.get = function () { return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 };
	prototypeAccessors.allowSuper.get = function () { return (this.currentThisScope().flags & SCOPE_SUPER) > 0 };
	prototypeAccessors.allowDirectSuper.get = function () { return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0 };
	prototypeAccessors.treatFunctionsAsVar.get = function () { return this.treatFunctionsAsVarInScope(this.currentScope()) };

	// Switch to a getter for 7.0.0.
	Parser.prototype.inNonArrowFunction = function inNonArrowFunction () { return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0 };

	Parser.extend = function extend () {
	    var plugins = [], len = arguments.length;
	    while ( len-- ) plugins[ len ] = arguments[ len ];

	  var cls = this;
	  for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
	  return cls
	};

	Parser.parse = function parse (input, options) {
	  return new this(options, input).parse()
	};

	Parser.parseExpressionAt = function parseExpressionAt (input, pos, options) {
	  var parser = new this(options, input, pos);
	  parser.nextToken();
	  return parser.parseExpression()
	};

	Parser.tokenizer = function tokenizer (input, options) {
	  return new this(options, input)
	};

	Object.defineProperties( Parser.prototype, prototypeAccessors );

	var pp = Parser.prototype;

	// ## Parser utilities

	var literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;
	pp.strictDirective = function(start) {
	  for (;;) {
	    // Try to find string literal.
	    skipWhiteSpace.lastIndex = start;
	    start += skipWhiteSpace.exec(this.input)[0].length;
	    var match = literal.exec(this.input.slice(start));
	    if (!match) { return false }
	    if ((match[1] || match[2]) === "use strict") { return true }
	    start += match[0].length;

	    // Skip semicolon, if any.
	    skipWhiteSpace.lastIndex = start;
	    start += skipWhiteSpace.exec(this.input)[0].length;
	    if (this.input[start] === ";")
	      { start++; }
	  }
	};

	// Predicate that tests whether the next token is of the given
	// type, and if yes, consumes it as a side effect.

	pp.eat = function(type) {
	  if (this.type === type) {
	    this.next();
	    return true
	  } else {
	    return false
	  }
	};

	// Tests whether parsed token is a contextual keyword.

	pp.isContextual = function(name) {
	  return this.type === types.name && this.value === name && !this.containsEsc
	};

	// Consumes contextual keyword if possible.

	pp.eatContextual = function(name) {
	  if (!this.isContextual(name)) { return false }
	  this.next();
	  return true
	};

	// Asserts that following token is given contextual keyword.

	pp.expectContextual = function(name) {
	  if (!this.eatContextual(name)) { this.unexpected(); }
	};

	// Test whether a semicolon can be inserted at the current position.

	pp.canInsertSemicolon = function() {
	  return this.type === types.eof ||
	    this.type === types.braceR ||
	    lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
	};

	pp.insertSemicolon = function() {
	  if (this.canInsertSemicolon()) {
	    if (this.options.onInsertedSemicolon)
	      { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
	    return true
	  }
	};

	// Consume a semicolon, or, failing that, see if we are allowed to
	// pretend that there is a semicolon at this position.

	pp.semicolon = function() {
	  if (!this.eat(types.semi) && !this.insertSemicolon()) { this.unexpected(); }
	};

	pp.afterTrailingComma = function(tokType, notNext) {
	  if (this.type === tokType) {
	    if (this.options.onTrailingComma)
	      { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
	    if (!notNext)
	      { this.next(); }
	    return true
	  }
	};

	// Expect a token of a given type. If found, consume it, otherwise,
	// raise an unexpected token error.

	pp.expect = function(type) {
	  this.eat(type) || this.unexpected();
	};

	// Raise an unexpected token error.

	pp.unexpected = function(pos) {
	  this.raise(pos != null ? pos : this.start, "Unexpected token");
	};

	function DestructuringErrors() {
	  this.shorthandAssign =
	  this.trailingComma =
	  this.parenthesizedAssign =
	  this.parenthesizedBind =
	  this.doubleProto =
	    -1;
	}

	pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
	  if (!refDestructuringErrors) { return }
	  if (refDestructuringErrors.trailingComma > -1)
	    { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
	  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
	  if (parens > -1) { this.raiseRecoverable(parens, "Parenthesized pattern"); }
	};

	pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
	  if (!refDestructuringErrors) { return false }
	  var shorthandAssign = refDestructuringErrors.shorthandAssign;
	  var doubleProto = refDestructuringErrors.doubleProto;
	  if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
	  if (shorthandAssign >= 0)
	    { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
	  if (doubleProto >= 0)
	    { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
	};

	pp.checkYieldAwaitInDefaultParams = function() {
	  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
	    { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
	  if (this.awaitPos)
	    { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
	};

	pp.isSimpleAssignTarget = function(expr) {
	  if (expr.type === "ParenthesizedExpression")
	    { return this.isSimpleAssignTarget(expr.expression) }
	  return expr.type === "Identifier" || expr.type === "MemberExpression"
	};

	var pp$1 = Parser.prototype;

	// ### Statement parsing

	// Parse a program. Initializes the parser, reads any number of
	// statements, and wraps them in a Program node.  Optionally takes a
	// `program` argument.  If present, the statements will be appended
	// to its body instead of creating a new node.

	pp$1.parseTopLevel = function(node) {
	  var exports = {};
	  if (!node.body) { node.body = []; }
	  while (this.type !== types.eof) {
	    var stmt = this.parseStatement(null, true, exports);
	    node.body.push(stmt);
	  }
	  if (this.inModule)
	    { for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1)
	      {
	        var name = list[i];

	        this.raiseRecoverable(this.undefinedExports[name].start, ("Export '" + name + "' is not defined"));
	      } }
	  this.adaptDirectivePrologue(node.body);
	  this.next();
	  node.sourceType = this.options.sourceType;
	  return this.finishNode(node, "Program")
	};

	var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

	pp$1.isLet = function(context) {
	  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
	  skipWhiteSpace.lastIndex = this.pos;
	  var skip = skipWhiteSpace.exec(this.input);
	  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
	  // For ambiguous cases, determine if a LexicalDeclaration (or only a
	  // Statement) is allowed here. If context is not empty then only a Statement
	  // is allowed. However, `let [` is an explicit negative lookahead for
	  // ExpressionStatement, so special-case it first.
	  if (nextCh === 91) { return true } // '['
	  if (context) { return false }

	  if (nextCh === 123) { return true } // '{'
	  if (isIdentifierStart(nextCh, true)) {
	    var pos = next + 1;
	    while (isIdentifierChar(this.input.charCodeAt(pos), true)) { ++pos; }
	    var ident = this.input.slice(next, pos);
	    if (!keywordRelationalOperator.test(ident)) { return true }
	  }
	  return false
	};

	// check 'async [no LineTerminator here] function'
	// - 'async /*foo*/ function' is OK.
	// - 'async /*\n*/ function' is invalid.
	pp$1.isAsyncFunction = function() {
	  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
	    { return false }

	  skipWhiteSpace.lastIndex = this.pos;
	  var skip = skipWhiteSpace.exec(this.input);
	  var next = this.pos + skip[0].length;
	  return !lineBreak.test(this.input.slice(this.pos, next)) &&
	    this.input.slice(next, next + 8) === "function" &&
	    (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
	};

	// Parse a single statement.
	//
	// If expecting a statement and finding a slash operator, parse a
	// regular expression literal. This is to handle cases like
	// `if (foo) /blah/.exec(foo)`, where looking at the previous token
	// does not help.

	pp$1.parseStatement = function(context, topLevel, exports) {
	  var starttype = this.type, node = this.startNode(), kind;

	  if (this.isLet(context)) {
	    starttype = types._var;
	    kind = "let";
	  }

	  // Most types of statements are recognized by the keyword they
	  // start with. Many are trivial to parse, some require a bit of
	  // complexity.

	  switch (starttype) {
	  case types._break: case types._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
	  case types._debugger: return this.parseDebuggerStatement(node)
	  case types._do: return this.parseDoStatement(node)
	  case types._for: return this.parseForStatement(node)
	  case types._function:
	    // Function as sole body of either an if statement or a labeled statement
	    // works, but not when it is part of a labeled statement that is the sole
	    // body of an if statement.
	    if ((context && (this.strict || context !== "if" && context !== "label")) && this.options.ecmaVersion >= 6) { this.unexpected(); }
	    return this.parseFunctionStatement(node, false, !context)
	  case types._class:
	    if (context) { this.unexpected(); }
	    return this.parseClass(node, true)
	  case types._if: return this.parseIfStatement(node)
	  case types._return: return this.parseReturnStatement(node)
	  case types._switch: return this.parseSwitchStatement(node)
	  case types._throw: return this.parseThrowStatement(node)
	  case types._try: return this.parseTryStatement(node)
	  case types._const: case types._var:
	    kind = kind || this.value;
	    if (context && kind !== "var") { this.unexpected(); }
	    return this.parseVarStatement(node, kind)
	  case types._while: return this.parseWhileStatement(node)
	  case types._with: return this.parseWithStatement(node)
	  case types.braceL: return this.parseBlock(true, node)
	  case types.semi: return this.parseEmptyStatement(node)
	  case types._export:
	  case types._import:
	    if (this.options.ecmaVersion > 10 && starttype === types._import) {
	      skipWhiteSpace.lastIndex = this.pos;
	      var skip = skipWhiteSpace.exec(this.input);
	      var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
	      if (nextCh === 40) // '('
	        { return this.parseExpressionStatement(node, this.parseExpression()) }
	    }

	    if (!this.options.allowImportExportEverywhere) {
	      if (!topLevel)
	        { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
	      if (!this.inModule)
	        { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
	    }
	    return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports)

	    // If the statement does not start with a statement keyword or a
	    // brace, it's an ExpressionStatement or LabeledStatement. We
	    // simply start parsing an expression, and afterwards, if the
	    // next token is a colon and the expression was a simple
	    // Identifier node, we switch to interpreting it as a label.
	  default:
	    if (this.isAsyncFunction()) {
	      if (context) { this.unexpected(); }
	      this.next();
	      return this.parseFunctionStatement(node, true, !context)
	    }

	    var maybeName = this.value, expr = this.parseExpression();
	    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon))
	      { return this.parseLabeledStatement(node, maybeName, expr, context) }
	    else { return this.parseExpressionStatement(node, expr) }
	  }
	};

	pp$1.parseBreakContinueStatement = function(node, keyword) {
	  var isBreak = keyword === "break";
	  this.next();
	  if (this.eat(types.semi) || this.insertSemicolon()) { node.label = null; }
	  else if (this.type !== types.name) { this.unexpected(); }
	  else {
	    node.label = this.parseIdent();
	    this.semicolon();
	  }

	  // Verify that there is an actual destination to break or
	  // continue to.
	  var i = 0;
	  for (; i < this.labels.length; ++i) {
	    var lab = this.labels[i];
	    if (node.label == null || lab.name === node.label.name) {
	      if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
	      if (node.label && isBreak) { break }
	    }
	  }
	  if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
	  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
	};

	pp$1.parseDebuggerStatement = function(node) {
	  this.next();
	  this.semicolon();
	  return this.finishNode(node, "DebuggerStatement")
	};

	pp$1.parseDoStatement = function(node) {
	  this.next();
	  this.labels.push(loopLabel);
	  node.body = this.parseStatement("do");
	  this.labels.pop();
	  this.expect(types._while);
	  node.test = this.parseParenExpression();
	  if (this.options.ecmaVersion >= 6)
	    { this.eat(types.semi); }
	  else
	    { this.semicolon(); }
	  return this.finishNode(node, "DoWhileStatement")
	};

	// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
	// loop is non-trivial. Basically, we have to parse the init `var`
	// statement or expression, disallowing the `in` operator (see
	// the second parameter to `parseExpression`), and then check
	// whether the next token is `in` or `of`. When there is no init
	// part (semicolon immediately after the opening parenthesis), it
	// is a regular `for` loop.

	pp$1.parseForStatement = function(node) {
	  this.next();
	  var awaitAt = (this.options.ecmaVersion >= 9 && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) && this.eatContextual("await")) ? this.lastTokStart : -1;
	  this.labels.push(loopLabel);
	  this.enterScope(0);
	  this.expect(types.parenL);
	  if (this.type === types.semi) {
	    if (awaitAt > -1) { this.unexpected(awaitAt); }
	    return this.parseFor(node, null)
	  }
	  var isLet = this.isLet();
	  if (this.type === types._var || this.type === types._const || isLet) {
	    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
	    this.next();
	    this.parseVar(init$1, true, kind);
	    this.finishNode(init$1, "VariableDeclaration");
	    if ((this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1) {
	      if (this.options.ecmaVersion >= 9) {
	        if (this.type === types._in) {
	          if (awaitAt > -1) { this.unexpected(awaitAt); }
	        } else { node.await = awaitAt > -1; }
	      }
	      return this.parseForIn(node, init$1)
	    }
	    if (awaitAt > -1) { this.unexpected(awaitAt); }
	    return this.parseFor(node, init$1)
	  }
	  var refDestructuringErrors = new DestructuringErrors;
	  var init = this.parseExpression(true, refDestructuringErrors);
	  if (this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
	    if (this.options.ecmaVersion >= 9) {
	      if (this.type === types._in) {
	        if (awaitAt > -1) { this.unexpected(awaitAt); }
	      } else { node.await = awaitAt > -1; }
	    }
	    this.toAssignable(init, false, refDestructuringErrors);
	    this.checkLVal(init);
	    return this.parseForIn(node, init)
	  } else {
	    this.checkExpressionErrors(refDestructuringErrors, true);
	  }
	  if (awaitAt > -1) { this.unexpected(awaitAt); }
	  return this.parseFor(node, init)
	};

	pp$1.parseFunctionStatement = function(node, isAsync, declarationPosition) {
	  this.next();
	  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync)
	};

	pp$1.parseIfStatement = function(node) {
	  this.next();
	  node.test = this.parseParenExpression();
	  // allow function declarations in branches, but only in non-strict mode
	  node.consequent = this.parseStatement("if");
	  node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
	  return this.finishNode(node, "IfStatement")
	};

	pp$1.parseReturnStatement = function(node) {
	  if (!this.inFunction && !this.options.allowReturnOutsideFunction)
	    { this.raise(this.start, "'return' outside of function"); }
	  this.next();

	  // In `return` (and `break`/`continue`), the keywords with
	  // optional arguments, we eagerly look for a semicolon or the
	  // possibility to insert one.

	  if (this.eat(types.semi) || this.insertSemicolon()) { node.argument = null; }
	  else { node.argument = this.parseExpression(); this.semicolon(); }
	  return this.finishNode(node, "ReturnStatement")
	};

	pp$1.parseSwitchStatement = function(node) {
	  this.next();
	  node.discriminant = this.parseParenExpression();
	  node.cases = [];
	  this.expect(types.braceL);
	  this.labels.push(switchLabel);
	  this.enterScope(0);

	  // Statements under must be grouped (by label) in SwitchCase
	  // nodes. `cur` is used to keep the node that we are currently
	  // adding statements to.

	  var cur;
	  for (var sawDefault = false; this.type !== types.braceR;) {
	    if (this.type === types._case || this.type === types._default) {
	      var isCase = this.type === types._case;
	      if (cur) { this.finishNode(cur, "SwitchCase"); }
	      node.cases.push(cur = this.startNode());
	      cur.consequent = [];
	      this.next();
	      if (isCase) {
	        cur.test = this.parseExpression();
	      } else {
	        if (sawDefault) { this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"); }
	        sawDefault = true;
	        cur.test = null;
	      }
	      this.expect(types.colon);
	    } else {
	      if (!cur) { this.unexpected(); }
	      cur.consequent.push(this.parseStatement(null));
	    }
	  }
	  this.exitScope();
	  if (cur) { this.finishNode(cur, "SwitchCase"); }
	  this.next(); // Closing brace
	  this.labels.pop();
	  return this.finishNode(node, "SwitchStatement")
	};

	pp$1.parseThrowStatement = function(node) {
	  this.next();
	  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
	    { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
	  node.argument = this.parseExpression();
	  this.semicolon();
	  return this.finishNode(node, "ThrowStatement")
	};

	// Reused empty array added for node fields that are always empty.

	var empty = [];

	pp$1.parseTryStatement = function(node) {
	  this.next();
	  node.block = this.parseBlock();
	  node.handler = null;
	  if (this.type === types._catch) {
	    var clause = this.startNode();
	    this.next();
	    if (this.eat(types.parenL)) {
	      clause.param = this.parseBindingAtom();
	      var simple = clause.param.type === "Identifier";
	      this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
	      this.checkLVal(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
	      this.expect(types.parenR);
	    } else {
	      if (this.options.ecmaVersion < 10) { this.unexpected(); }
	      clause.param = null;
	      this.enterScope(0);
	    }
	    clause.body = this.parseBlock(false);
	    this.exitScope();
	    node.handler = this.finishNode(clause, "CatchClause");
	  }
	  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
	  if (!node.handler && !node.finalizer)
	    { this.raise(node.start, "Missing catch or finally clause"); }
	  return this.finishNode(node, "TryStatement")
	};

	pp$1.parseVarStatement = function(node, kind) {
	  this.next();
	  this.parseVar(node, false, kind);
	  this.semicolon();
	  return this.finishNode(node, "VariableDeclaration")
	};

	pp$1.parseWhileStatement = function(node) {
	  this.next();
	  node.test = this.parseParenExpression();
	  this.labels.push(loopLabel);
	  node.body = this.parseStatement("while");
	  this.labels.pop();
	  return this.finishNode(node, "WhileStatement")
	};

	pp$1.parseWithStatement = function(node) {
	  if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
	  this.next();
	  node.object = this.parseParenExpression();
	  node.body = this.parseStatement("with");
	  return this.finishNode(node, "WithStatement")
	};

	pp$1.parseEmptyStatement = function(node) {
	  this.next();
	  return this.finishNode(node, "EmptyStatement")
	};

	pp$1.parseLabeledStatement = function(node, maybeName, expr, context) {
	  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1)
	    {
	    var label = list[i$1];

	    if (label.name === maybeName)
	      { this.raise(expr.start, "Label '" + maybeName + "' is already declared");
	  } }
	  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
	  for (var i = this.labels.length - 1; i >= 0; i--) {
	    var label$1 = this.labels[i];
	    if (label$1.statementStart === node.start) {
	      // Update information about previous labels on this node
	      label$1.statementStart = this.start;
	      label$1.kind = kind;
	    } else { break }
	  }
	  this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
	  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
	  this.labels.pop();
	  node.label = expr;
	  return this.finishNode(node, "LabeledStatement")
	};

	pp$1.parseExpressionStatement = function(node, expr) {
	  node.expression = expr;
	  this.semicolon();
	  return this.finishNode(node, "ExpressionStatement")
	};

	// Parse a semicolon-enclosed block of statements, handling `"use
	// strict"` declarations when `allowStrict` is true (used for
	// function bodies).

	pp$1.parseBlock = function(createNewLexicalScope, node) {
	  if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;
	  if ( node === void 0 ) node = this.startNode();

	  node.body = [];
	  this.expect(types.braceL);
	  if (createNewLexicalScope) { this.enterScope(0); }
	  while (!this.eat(types.braceR)) {
	    var stmt = this.parseStatement(null);
	    node.body.push(stmt);
	  }
	  if (createNewLexicalScope) { this.exitScope(); }
	  return this.finishNode(node, "BlockStatement")
	};

	// Parse a regular `for` loop. The disambiguation code in
	// `parseStatement` will already have parsed the init statement or
	// expression.

	pp$1.parseFor = function(node, init) {
	  node.init = init;
	  this.expect(types.semi);
	  node.test = this.type === types.semi ? null : this.parseExpression();
	  this.expect(types.semi);
	  node.update = this.type === types.parenR ? null : this.parseExpression();
	  this.expect(types.parenR);
	  node.body = this.parseStatement("for");
	  this.exitScope();
	  this.labels.pop();
	  return this.finishNode(node, "ForStatement")
	};

	// Parse a `for`/`in` and `for`/`of` loop, which are almost
	// same from parser's perspective.

	pp$1.parseForIn = function(node, init) {
	  var isForIn = this.type === types._in;
	  this.next();

	  if (
	    init.type === "VariableDeclaration" &&
	    init.declarations[0].init != null &&
	    (
	      !isForIn ||
	      this.options.ecmaVersion < 8 ||
	      this.strict ||
	      init.kind !== "var" ||
	      init.declarations[0].id.type !== "Identifier"
	    )
	  ) {
	    this.raise(
	      init.start,
	      ((isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
	    );
	  } else if (init.type === "AssignmentPattern") {
	    this.raise(init.start, "Invalid left-hand side in for-loop");
	  }
	  node.left = init;
	  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
	  this.expect(types.parenR);
	  node.body = this.parseStatement("for");
	  this.exitScope();
	  this.labels.pop();
	  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement")
	};

	// Parse a list of variable declarations.

	pp$1.parseVar = function(node, isFor, kind) {
	  node.declarations = [];
	  node.kind = kind;
	  for (;;) {
	    var decl = this.startNode();
	    this.parseVarId(decl, kind);
	    if (this.eat(types.eq)) {
	      decl.init = this.parseMaybeAssign(isFor);
	    } else if (kind === "const" && !(this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))) {
	      this.unexpected();
	    } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
	      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
	    } else {
	      decl.init = null;
	    }
	    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
	    if (!this.eat(types.comma)) { break }
	  }
	  return node
	};

	pp$1.parseVarId = function(decl, kind) {
	  decl.id = this.parseBindingAtom();
	  this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
	};

	var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;

	// Parse a function declaration or literal (depending on the
	// `statement & FUNC_STATEMENT`).

	// Remove `allowExpressionBody` for 7.0.0, as it is only called with false
	pp$1.parseFunction = function(node, statement, allowExpressionBody, isAsync) {
	  this.initFunction(node);
	  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
	    if (this.type === types.star && (statement & FUNC_HANGING_STATEMENT))
	      { this.unexpected(); }
	    node.generator = this.eat(types.star);
	  }
	  if (this.options.ecmaVersion >= 8)
	    { node.async = !!isAsync; }

	  if (statement & FUNC_STATEMENT) {
	    node.id = (statement & FUNC_NULLABLE_ID) && this.type !== types.name ? null : this.parseIdent();
	    if (node.id && !(statement & FUNC_HANGING_STATEMENT))
	      // If it is a regular function declaration in sloppy mode, then it is
	      // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
	      // mode depends on properties of the current scope (see
	      // treatFunctionsAsVar).
	      { this.checkLVal(node.id, (this.strict || node.generator || node.async) ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION); }
	  }

	  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
	  this.yieldPos = 0;
	  this.awaitPos = 0;
	  this.awaitIdentPos = 0;
	  this.enterScope(functionFlags(node.async, node.generator));

	  if (!(statement & FUNC_STATEMENT))
	    { node.id = this.type === types.name ? this.parseIdent() : null; }

	  this.parseFunctionParams(node);
	  this.parseFunctionBody(node, allowExpressionBody, false);

	  this.yieldPos = oldYieldPos;
	  this.awaitPos = oldAwaitPos;
	  this.awaitIdentPos = oldAwaitIdentPos;
	  return this.finishNode(node, (statement & FUNC_STATEMENT) ? "FunctionDeclaration" : "FunctionExpression")
	};

	pp$1.parseFunctionParams = function(node) {
	  this.expect(types.parenL);
	  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
	  this.checkYieldAwaitInDefaultParams();
	};

	// Parse a class declaration or literal (depending on the
	// `isStatement` parameter).

	pp$1.parseClass = function(node, isStatement) {
	  this.next();

	  // ecma-262 14.6 Class Definitions
	  // A class definition is always strict mode code.
	  var oldStrict = this.strict;
	  this.strict = true;

	  this.parseClassId(node, isStatement);
	  this.parseClassSuper(node);
	  var classBody = this.startNode();
	  var hadConstructor = false;
	  classBody.body = [];
	  this.expect(types.braceL);
	  while (!this.eat(types.braceR)) {
	    var element = this.parseClassElement(node.superClass !== null);
	    if (element) {
	      classBody.body.push(element);
	      if (element.type === "MethodDefinition" && element.kind === "constructor") {
	        if (hadConstructor) { this.raise(element.start, "Duplicate constructor in the same class"); }
	        hadConstructor = true;
	      }
	    }
	  }
	  node.body = this.finishNode(classBody, "ClassBody");
	  this.strict = oldStrict;
	  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
	};

	pp$1.parseClassElement = function(constructorAllowsSuper) {
	  var this$1 = this;

	  if (this.eat(types.semi)) { return null }

	  var method = this.startNode();
	  var tryContextual = function (k, noLineBreak) {
	    if ( noLineBreak === void 0 ) noLineBreak = false;

	    var start = this$1.start, startLoc = this$1.startLoc;
	    if (!this$1.eatContextual(k)) { return false }
	    if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) { return true }
	    if (method.key) { this$1.unexpected(); }
	    method.computed = false;
	    method.key = this$1.startNodeAt(start, startLoc);
	    method.key.name = k;
	    this$1.finishNode(method.key, "Identifier");
	    return false
	  };

	  method.kind = "method";
	  method.static = tryContextual("static");
	  var isGenerator = this.eat(types.star);
	  var isAsync = false;
	  if (!isGenerator) {
	    if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
	      isAsync = true;
	      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
	    } else if (tryContextual("get")) {
	      method.kind = "get";
	    } else if (tryContextual("set")) {
	      method.kind = "set";
	    }
	  }
	  if (!method.key) { this.parsePropertyName(method); }
	  var key = method.key;
	  var allowsDirectSuper = false;
	  if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" ||
	      key.type === "Literal" && key.value === "constructor")) {
	    if (method.kind !== "method") { this.raise(key.start, "Constructor can't have get/set modifier"); }
	    if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
	    if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
	    method.kind = "constructor";
	    allowsDirectSuper = constructorAllowsSuper;
	  } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
	    this.raise(key.start, "Classes may not have a static property named prototype");
	  }
	  this.parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper);
	  if (method.kind === "get" && method.value.params.length !== 0)
	    { this.raiseRecoverable(method.value.start, "getter should have no params"); }
	  if (method.kind === "set" && method.value.params.length !== 1)
	    { this.raiseRecoverable(method.value.start, "setter should have exactly one param"); }
	  if (method.kind === "set" && method.value.params[0].type === "RestElement")
	    { this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params"); }
	  return method
	};

	pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
	  method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
	  return this.finishNode(method, "MethodDefinition")
	};

	pp$1.parseClassId = function(node, isStatement) {
	  if (this.type === types.name) {
	    node.id = this.parseIdent();
	    if (isStatement)
	      { this.checkLVal(node.id, BIND_LEXICAL, false); }
	  } else {
	    if (isStatement === true)
	      { this.unexpected(); }
	    node.id = null;
	  }
	};

	pp$1.parseClassSuper = function(node) {
	  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
	};

	// Parses module export declaration.

	pp$1.parseExport = function(node, exports) {
	  this.next();
	  // export * from '...'
	  if (this.eat(types.star)) {
	    this.expectContextual("from");
	    if (this.type !== types.string) { this.unexpected(); }
	    node.source = this.parseExprAtom();
	    this.semicolon();
	    return this.finishNode(node, "ExportAllDeclaration")
	  }
	  if (this.eat(types._default)) { // export default ...
	    this.checkExport(exports, "default", this.lastTokStart);
	    var isAsync;
	    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
	      var fNode = this.startNode();
	      this.next();
	      if (isAsync) { this.next(); }
	      node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
	    } else if (this.type === types._class) {
	      var cNode = this.startNode();
	      node.declaration = this.parseClass(cNode, "nullableID");
	    } else {
	      node.declaration = this.parseMaybeAssign();
	      this.semicolon();
	    }
	    return this.finishNode(node, "ExportDefaultDeclaration")
	  }
	  // export var|const|let|function|class ...
	  if (this.shouldParseExportStatement()) {
	    node.declaration = this.parseStatement(null);
	    if (node.declaration.type === "VariableDeclaration")
	      { this.checkVariableExport(exports, node.declaration.declarations); }
	    else
	      { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
	    node.specifiers = [];
	    node.source = null;
	  } else { // export { x, y as z } [from '...']
	    node.declaration = null;
	    node.specifiers = this.parseExportSpecifiers(exports);
	    if (this.eatContextual("from")) {
	      if (this.type !== types.string) { this.unexpected(); }
	      node.source = this.parseExprAtom();
	    } else {
	      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
	        // check for keywords used as local names
	        var spec = list[i];

	        this.checkUnreserved(spec.local);
	        // check if export is defined
	        this.checkLocalExport(spec.local);
	      }

	      node.source = null;
	    }
	    this.semicolon();
	  }
	  return this.finishNode(node, "ExportNamedDeclaration")
	};

	pp$1.checkExport = function(exports, name, pos) {
	  if (!exports) { return }
	  if (has(exports, name))
	    { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
	  exports[name] = true;
	};

	pp$1.checkPatternExport = function(exports, pat) {
	  var type = pat.type;
	  if (type === "Identifier")
	    { this.checkExport(exports, pat.name, pat.start); }
	  else if (type === "ObjectPattern")
	    { for (var i = 0, list = pat.properties; i < list.length; i += 1)
	      {
	        var prop = list[i];

	        this.checkPatternExport(exports, prop);
	      } }
	  else if (type === "ArrayPattern")
	    { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
	      var elt = list$1[i$1];

	        if (elt) { this.checkPatternExport(exports, elt); }
	    } }
	  else if (type === "Property")
	    { this.checkPatternExport(exports, pat.value); }
	  else if (type === "AssignmentPattern")
	    { this.checkPatternExport(exports, pat.left); }
	  else if (type === "RestElement")
	    { this.checkPatternExport(exports, pat.argument); }
	  else if (type === "ParenthesizedExpression")
	    { this.checkPatternExport(exports, pat.expression); }
	};

	pp$1.checkVariableExport = function(exports, decls) {
	  if (!exports) { return }
	  for (var i = 0, list = decls; i < list.length; i += 1)
	    {
	    var decl = list[i];

	    this.checkPatternExport(exports, decl.id);
	  }
	};

	pp$1.shouldParseExportStatement = function() {
	  return this.type.keyword === "var" ||
	    this.type.keyword === "const" ||
	    this.type.keyword === "class" ||
	    this.type.keyword === "function" ||
	    this.isLet() ||
	    this.isAsyncFunction()
	};

	// Parses a comma-separated list of module exports.

	pp$1.parseExportSpecifiers = function(exports) {
	  var nodes = [], first = true;
	  // export { x, y as z } [from '...']
	  this.expect(types.braceL);
	  while (!this.eat(types.braceR)) {
	    if (!first) {
	      this.expect(types.comma);
	      if (this.afterTrailingComma(types.braceR)) { break }
	    } else { first = false; }

	    var node = this.startNode();
	    node.local = this.parseIdent(true);
	    node.exported = this.eatContextual("as") ? this.parseIdent(true) : node.local;
	    this.checkExport(exports, node.exported.name, node.exported.start);
	    nodes.push(this.finishNode(node, "ExportSpecifier"));
	  }
	  return nodes
	};

	// Parses import declaration.

	pp$1.parseImport = function(node) {
	  this.next();
	  // import '...'
	  if (this.type === types.string) {
	    node.specifiers = empty;
	    node.source = this.parseExprAtom();
	  } else {
	    node.specifiers = this.parseImportSpecifiers();
	    this.expectContextual("from");
	    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
	  }
	  this.semicolon();
	  return this.finishNode(node, "ImportDeclaration")
	};

	// Parses a comma-separated list of module imports.

	pp$1.parseImportSpecifiers = function() {
	  var nodes = [], first = true;
	  if (this.type === types.name) {
	    // import defaultObj, { x, y as z } from '...'
	    var node = this.startNode();
	    node.local = this.parseIdent();
	    this.checkLVal(node.local, BIND_LEXICAL);
	    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
	    if (!this.eat(types.comma)) { return nodes }
	  }
	  if (this.type === types.star) {
	    var node$1 = this.startNode();
	    this.next();
	    this.expectContextual("as");
	    node$1.local = this.parseIdent();
	    this.checkLVal(node$1.local, BIND_LEXICAL);
	    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
	    return nodes
	  }
	  this.expect(types.braceL);
	  while (!this.eat(types.braceR)) {
	    if (!first) {
	      this.expect(types.comma);
	      if (this.afterTrailingComma(types.braceR)) { break }
	    } else { first = false; }

	    var node$2 = this.startNode();
	    node$2.imported = this.parseIdent(true);
	    if (this.eatContextual("as")) {
	      node$2.local = this.parseIdent();
	    } else {
	      this.checkUnreserved(node$2.imported);
	      node$2.local = node$2.imported;
	    }
	    this.checkLVal(node$2.local, BIND_LEXICAL);
	    nodes.push(this.finishNode(node$2, "ImportSpecifier"));
	  }
	  return nodes
	};

	// Set `ExpressionStatement#directive` property for directive prologues.
	pp$1.adaptDirectivePrologue = function(statements) {
	  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
	    statements[i].directive = statements[i].expression.raw.slice(1, -1);
	  }
	};
	pp$1.isDirectiveCandidate = function(statement) {
	  return (
	    statement.type === "ExpressionStatement" &&
	    statement.expression.type === "Literal" &&
	    typeof statement.expression.value === "string" &&
	    // Reject parenthesized strings.
	    (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
	  )
	};

	var pp$2 = Parser.prototype;

	// Convert existing expression atom to assignable pattern
	// if possible.

	pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
	  if (this.options.ecmaVersion >= 6 && node) {
	    switch (node.type) {
	    case "Identifier":
	      if (this.inAsync && node.name === "await")
	        { this.raise(node.start, "Cannot use 'await' as identifier inside an async function"); }
	      break

	    case "ObjectPattern":
	    case "ArrayPattern":
	    case "RestElement":
	      break

	    case "ObjectExpression":
	      node.type = "ObjectPattern";
	      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
	      for (var i = 0, list = node.properties; i < list.length; i += 1) {
	        var prop = list[i];

	      this.toAssignable(prop, isBinding);
	        // Early error:
	        //   AssignmentRestProperty[Yield, Await] :
	        //     `...` DestructuringAssignmentTarget[Yield, Await]
	        //
	        //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
	        if (
	          prop.type === "RestElement" &&
	          (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
	        ) {
	          this.raise(prop.argument.start, "Unexpected token");
	        }
	      }
	      break

	    case "Property":
	      // AssignmentProperty has type === "Property"
	      if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
	      this.toAssignable(node.value, isBinding);
	      break

	    case "ArrayExpression":
	      node.type = "ArrayPattern";
	      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
	      this.toAssignableList(node.elements, isBinding);
	      break

	    case "SpreadElement":
	      node.type = "RestElement";
	      this.toAssignable(node.argument, isBinding);
	      if (node.argument.type === "AssignmentPattern")
	        { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
	      break

	    case "AssignmentExpression":
	      if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
	      node.type = "AssignmentPattern";
	      delete node.operator;
	      this.toAssignable(node.left, isBinding);
	      // falls through to AssignmentPattern

	    case "AssignmentPattern":
	      break

	    case "ParenthesizedExpression":
	      this.toAssignable(node.expression, isBinding, refDestructuringErrors);
	      break

	    case "MemberExpression":
	      if (!isBinding) { break }

	    default:
	      this.raise(node.start, "Assigning to rvalue");
	    }
	  } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
	  return node
	};

	// Convert list of expression atoms to binding list.

	pp$2.toAssignableList = function(exprList, isBinding) {
	  var end = exprList.length;
	  for (var i = 0; i < end; i++) {
	    var elt = exprList[i];
	    if (elt) { this.toAssignable(elt, isBinding); }
	  }
	  if (end) {
	    var last = exprList[end - 1];
	    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
	      { this.unexpected(last.argument.start); }
	  }
	  return exprList
	};

	// Parses spread element.

	pp$2.parseSpread = function(refDestructuringErrors) {
	  var node = this.startNode();
	  this.next();
	  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
	  return this.finishNode(node, "SpreadElement")
	};

	pp$2.parseRestBinding = function() {
	  var node = this.startNode();
	  this.next();

	  // RestElement inside of a function parameter must be an identifier
	  if (this.options.ecmaVersion === 6 && this.type !== types.name)
	    { this.unexpected(); }

	  node.argument = this.parseBindingAtom();

	  return this.finishNode(node, "RestElement")
	};

	// Parses lvalue (assignable) atom.

	pp$2.parseBindingAtom = function() {
	  if (this.options.ecmaVersion >= 6) {
	    switch (this.type) {
	    case types.bracketL:
	      var node = this.startNode();
	      this.next();
	      node.elements = this.parseBindingList(types.bracketR, true, true);
	      return this.finishNode(node, "ArrayPattern")

	    case types.braceL:
	      return this.parseObj(true)
	    }
	  }
	  return this.parseIdent()
	};

	pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
	  var elts = [], first = true;
	  while (!this.eat(close)) {
	    if (first) { first = false; }
	    else { this.expect(types.comma); }
	    if (allowEmpty && this.type === types.comma) {
	      elts.push(null);
	    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
	      break
	    } else if (this.type === types.ellipsis) {
	      var rest = this.parseRestBinding();
	      this.parseBindingListItem(rest);
	      elts.push(rest);
	      if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
	      this.expect(close);
	      break
	    } else {
	      var elem = this.parseMaybeDefault(this.start, this.startLoc);
	      this.parseBindingListItem(elem);
	      elts.push(elem);
	    }
	  }
	  return elts
	};

	pp$2.parseBindingListItem = function(param) {
	  return param
	};

	// Parses assignment pattern around given atom if possible.

	pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
	  left = left || this.parseBindingAtom();
	  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) { return left }
	  var node = this.startNodeAt(startPos, startLoc);
	  node.left = left;
	  node.right = this.parseMaybeAssign();
	  return this.finishNode(node, "AssignmentPattern")
	};

	// Verify that a node is an lval — something that can be assigned
	// to.
	// bindingType can be either:
	// 'var' indicating that the lval creates a 'var' binding
	// 'let' indicating that the lval creates a lexical ('let' or 'const') binding
	// 'none' indicating that the binding should be checked for illegal identifiers, but not for duplicate references

	pp$2.checkLVal = function(expr, bindingType, checkClashes) {
	  if ( bindingType === void 0 ) bindingType = BIND_NONE;

	  switch (expr.type) {
	  case "Identifier":
	    if (bindingType === BIND_LEXICAL && expr.name === "let")
	      { this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"); }
	    if (this.strict && this.reservedWordsStrictBind.test(expr.name))
	      { this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
	    if (checkClashes) {
	      if (has(checkClashes, expr.name))
	        { this.raiseRecoverable(expr.start, "Argument name clash"); }
	      checkClashes[expr.name] = true;
	    }
	    if (bindingType !== BIND_NONE && bindingType !== BIND_OUTSIDE) { this.declareName(expr.name, bindingType, expr.start); }
	    break

	  case "MemberExpression":
	    if (bindingType) { this.raiseRecoverable(expr.start, "Binding member expression"); }
	    break

	  case "ObjectPattern":
	    for (var i = 0, list = expr.properties; i < list.length; i += 1)
	      {
	    var prop = list[i];

	    this.checkLVal(prop, bindingType, checkClashes);
	  }
	    break

	  case "Property":
	    // AssignmentProperty has type === "Property"
	    this.checkLVal(expr.value, bindingType, checkClashes);
	    break

	  case "ArrayPattern":
	    for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
	      var elem = list$1[i$1];

	    if (elem) { this.checkLVal(elem, bindingType, checkClashes); }
	    }
	    break

	  case "AssignmentPattern":
	    this.checkLVal(expr.left, bindingType, checkClashes);
	    break

	  case "RestElement":
	    this.checkLVal(expr.argument, bindingType, checkClashes);
	    break

	  case "ParenthesizedExpression":
	    this.checkLVal(expr.expression, bindingType, checkClashes);
	    break

	  default:
	    this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
	  }
	};

	// A recursive descent parser operates by defining functions for all

	var pp$3 = Parser.prototype;

	// Check if property name clashes with already added.
	// Object/class getters and setters are not allowed to clash —
	// either with each other or with an init property — and in
	// strict mode, init properties are also not allowed to be repeated.

	pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
	  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
	    { return }
	  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
	    { return }
	  var key = prop.key;
	  var name;
	  switch (key.type) {
	  case "Identifier": name = key.name; break
	  case "Literal": name = String(key.value); break
	  default: return
	  }
	  var kind = prop.kind;
	  if (this.options.ecmaVersion >= 6) {
	    if (name === "__proto__" && kind === "init") {
	      if (propHash.proto) {
	        if (refDestructuringErrors && refDestructuringErrors.doubleProto < 0) { refDestructuringErrors.doubleProto = key.start; }
	        // Backwards-compat kludge. Can be removed in version 6.0
	        else { this.raiseRecoverable(key.start, "Redefinition of __proto__ property"); }
	      }
	      propHash.proto = true;
	    }
	    return
	  }
	  name = "$" + name;
	  var other = propHash[name];
	  if (other) {
	    var redefinition;
	    if (kind === "init") {
	      redefinition = this.strict && other.init || other.get || other.set;
	    } else {
	      redefinition = other.init || other[kind];
	    }
	    if (redefinition)
	      { this.raiseRecoverable(key.start, "Redefinition of property"); }
	  } else {
	    other = propHash[name] = {
	      init: false,
	      get: false,
	      set: false
	    };
	  }
	  other[kind] = true;
	};

	// ### Expression parsing

	// These nest, from the most general expression type at the top to
	// 'atomic', nondivisible expression types at the bottom. Most of
	// the functions will simply let the function(s) below them parse,
	// and, *if* the syntactic construct they handle is present, wrap
	// the AST node that the inner parser gave them in another node.

	// Parse a full expression. The optional arguments are used to
	// forbid the `in` operator (in for loops initalization expressions)
	// and provide reference for storing '=' operator inside shorthand
	// property assignment in contexts where both object expression
	// and object pattern might appear (so it's possible to raise
	// delayed syntax error at correct position).

	pp$3.parseExpression = function(noIn, refDestructuringErrors) {
	  var startPos = this.start, startLoc = this.startLoc;
	  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
	  if (this.type === types.comma) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.expressions = [expr];
	    while (this.eat(types.comma)) { node.expressions.push(this.parseMaybeAssign(noIn, refDestructuringErrors)); }
	    return this.finishNode(node, "SequenceExpression")
	  }
	  return expr
	};

	// Parse an assignment expression. This includes applications of
	// operators like `+=`.

	pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
	  if (this.isContextual("yield")) {
	    if (this.inGenerator) { return this.parseYield(noIn) }
	    // The tokenizer will assume an expression is allowed after
	    // `yield`, but this isn't that kind of yield
	    else { this.exprAllowed = false; }
	  }

	  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldShorthandAssign = -1;
	  if (refDestructuringErrors) {
	    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
	    oldTrailingComma = refDestructuringErrors.trailingComma;
	    oldShorthandAssign = refDestructuringErrors.shorthandAssign;
	    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.shorthandAssign = -1;
	  } else {
	    refDestructuringErrors = new DestructuringErrors;
	    ownDestructuringErrors = true;
	  }

	  var startPos = this.start, startLoc = this.startLoc;
	  if (this.type === types.parenL || this.type === types.name)
	    { this.potentialArrowAt = this.start; }
	  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
	  if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
	  if (this.type.isAssign) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.operator = this.value;
	    node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
	    if (!ownDestructuringErrors) { DestructuringErrors.call(refDestructuringErrors); }
	    refDestructuringErrors.shorthandAssign = -1; // reset because shorthand default was used correctly
	    this.checkLVal(left);
	    this.next();
	    node.right = this.parseMaybeAssign(noIn);
	    return this.finishNode(node, "AssignmentExpression")
	  } else {
	    if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
	  }
	  if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
	  if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
	  if (oldShorthandAssign > -1) { refDestructuringErrors.shorthandAssign = oldShorthandAssign; }
	  return left
	};

	// Parse a ternary conditional (`?:`) operator.

	pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
	  var startPos = this.start, startLoc = this.startLoc;
	  var expr = this.parseExprOps(noIn, refDestructuringErrors);
	  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
	  if (this.eat(types.question)) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.test = expr;
	    node.consequent = this.parseMaybeAssign();
	    this.expect(types.colon);
	    node.alternate = this.parseMaybeAssign(noIn);
	    return this.finishNode(node, "ConditionalExpression")
	  }
	  return expr
	};

	// Start the precedence parser.

	pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
	  var startPos = this.start, startLoc = this.startLoc;
	  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
	  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
	  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn)
	};

	// Parse binary operators with the operator precedence parsing
	// algorithm. `left` is the left-hand side of the operator.
	// `minPrec` provides context that allows the function to stop and
	// defer further parser to one of its callers when it encounters an
	// operator that has a lower precedence than the set it is parsing.

	pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
	  var prec = this.type.binop;
	  if (prec != null && (!noIn || this.type !== types._in)) {
	    if (prec > minPrec) {
	      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
	      var op = this.value;
	      this.next();
	      var startPos = this.start, startLoc = this.startLoc;
	      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
	      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical);
	      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
	    }
	  }
	  return left
	};

	pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.left = left;
	  node.operator = op;
	  node.right = right;
	  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
	};

	// Parse unary operators, both prefix and postfix.

	pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
	  var startPos = this.start, startLoc = this.startLoc, expr;
	  if (this.isContextual("await") && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))) {
	    expr = this.parseAwait();
	    sawUnary = true;
	  } else if (this.type.prefix) {
	    var node = this.startNode(), update = this.type === types.incDec;
	    node.operator = this.value;
	    node.prefix = true;
	    this.next();
	    node.argument = this.parseMaybeUnary(null, true);
	    this.checkExpressionErrors(refDestructuringErrors, true);
	    if (update) { this.checkLVal(node.argument); }
	    else if (this.strict && node.operator === "delete" &&
	             node.argument.type === "Identifier")
	      { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
	    else { sawUnary = true; }
	    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
	  } else {
	    expr = this.parseExprSubscripts(refDestructuringErrors);
	    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
	    while (this.type.postfix && !this.canInsertSemicolon()) {
	      var node$1 = this.startNodeAt(startPos, startLoc);
	      node$1.operator = this.value;
	      node$1.prefix = false;
	      node$1.argument = expr;
	      this.checkLVal(expr);
	      this.next();
	      expr = this.finishNode(node$1, "UpdateExpression");
	    }
	  }

	  if (!sawUnary && this.eat(types.starstar))
	    { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false) }
	  else
	    { return expr }
	};

	// Parse call, dot, and `[]`-subscript expressions.

	pp$3.parseExprSubscripts = function(refDestructuringErrors) {
	  var startPos = this.start, startLoc = this.startLoc;
	  var expr = this.parseExprAtom(refDestructuringErrors);
	  var skipArrowSubscripts = expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")";
	  if (this.checkExpressionErrors(refDestructuringErrors) || skipArrowSubscripts) { return expr }
	  var result = this.parseSubscripts(expr, startPos, startLoc);
	  if (refDestructuringErrors && result.type === "MemberExpression") {
	    if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
	    if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
	  }
	  return result
	};

	pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
	  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
	      this.lastTokEnd === base.end && !this.canInsertSemicolon() && this.input.slice(base.start, base.end) === "async";
	  while (true) {
	    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow);
	    if (element === base || element.type === "ArrowFunctionExpression") { return element }
	    base = element;
	  }
	};

	pp$3.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow) {
	  var computed = this.eat(types.bracketL);
	  if (computed || this.eat(types.dot)) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.object = base;
	    node.property = computed ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never");
	    node.computed = !!computed;
	    if (computed) { this.expect(types.bracketR); }
	    base = this.finishNode(node, "MemberExpression");
	  } else if (!noCalls && this.eat(types.parenL)) {
	    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
	    this.yieldPos = 0;
	    this.awaitPos = 0;
	    this.awaitIdentPos = 0;
	    var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
	    if (maybeAsyncArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
	      this.checkPatternErrors(refDestructuringErrors, false);
	      this.checkYieldAwaitInDefaultParams();
	      if (this.awaitIdentPos > 0)
	        { this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"); }
	      this.yieldPos = oldYieldPos;
	      this.awaitPos = oldAwaitPos;
	      this.awaitIdentPos = oldAwaitIdentPos;
	      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true)
	    }
	    this.checkExpressionErrors(refDestructuringErrors, true);
	    this.yieldPos = oldYieldPos || this.yieldPos;
	    this.awaitPos = oldAwaitPos || this.awaitPos;
	    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
	    var node$1 = this.startNodeAt(startPos, startLoc);
	    node$1.callee = base;
	    node$1.arguments = exprList;
	    base = this.finishNode(node$1, "CallExpression");
	  } else if (this.type === types.backQuote) {
	    var node$2 = this.startNodeAt(startPos, startLoc);
	    node$2.tag = base;
	    node$2.quasi = this.parseTemplate({isTagged: true});
	    base = this.finishNode(node$2, "TaggedTemplateExpression");
	  }
	  return base
	};

	// Parse an atomic expression — either a single token that is an
	// expression, an expression started by a keyword like `function` or
	// `new`, or an expression wrapped in punctuation like `()`, `[]`,
	// or `{}`.

	pp$3.parseExprAtom = function(refDestructuringErrors) {
	  // If a division operator appears in an expression position, the
	  // tokenizer got confused, and we force it to read a regexp instead.
	  if (this.type === types.slash) { this.readRegexp(); }

	  var node, canBeArrow = this.potentialArrowAt === this.start;
	  switch (this.type) {
	  case types._super:
	    if (!this.allowSuper)
	      { this.raise(this.start, "'super' keyword outside a method"); }
	    node = this.startNode();
	    this.next();
	    if (this.type === types.parenL && !this.allowDirectSuper)
	      { this.raise(node.start, "super() call outside constructor of a subclass"); }
	    // The `super` keyword can appear at below:
	    // SuperProperty:
	    //     super [ Expression ]
	    //     super . IdentifierName
	    // SuperCall:
	    //     super Arguments
	    if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL)
	      { this.unexpected(); }
	    return this.finishNode(node, "Super")

	  case types._this:
	    node = this.startNode();
	    this.next();
	    return this.finishNode(node, "ThisExpression")

	  case types.name:
	    var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
	    var id = this.parseIdent(false);
	    if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function))
	      { return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true) }
	    if (canBeArrow && !this.canInsertSemicolon()) {
	      if (this.eat(types.arrow))
	        { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false) }
	      if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
	        id = this.parseIdent(false);
	        if (this.canInsertSemicolon() || !this.eat(types.arrow))
	          { this.unexpected(); }
	        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
	      }
	    }
	    return id

	  case types.regexp:
	    var value = this.value;
	    node = this.parseLiteral(value.value);
	    node.regex = {pattern: value.pattern, flags: value.flags};
	    return node

	  case types.num: case types.string:
	    return this.parseLiteral(this.value)

	  case types._null: case types._true: case types._false:
	    node = this.startNode();
	    node.value = this.type === types._null ? null : this.type === types._true;
	    node.raw = this.type.keyword;
	    this.next();
	    return this.finishNode(node, "Literal")

	  case types.parenL:
	    var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
	    if (refDestructuringErrors) {
	      if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
	        { refDestructuringErrors.parenthesizedAssign = start; }
	      if (refDestructuringErrors.parenthesizedBind < 0)
	        { refDestructuringErrors.parenthesizedBind = start; }
	    }
	    return expr

	  case types.bracketL:
	    node = this.startNode();
	    this.next();
	    node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
	    return this.finishNode(node, "ArrayExpression")

	  case types.braceL:
	    return this.parseObj(false, refDestructuringErrors)

	  case types._function:
	    node = this.startNode();
	    this.next();
	    return this.parseFunction(node, 0)

	  case types._class:
	    return this.parseClass(this.startNode(), false)

	  case types._new:
	    return this.parseNew()

	  case types.backQuote:
	    return this.parseTemplate()

	  case types._import:
	    if (this.options.ecmaVersion >= 11) {
	      return this.parseExprImport()
	    } else {
	      return this.unexpected()
	    }

	  default:
	    this.unexpected();
	  }
	};

	pp$3.parseExprImport = function() {
	  var node = this.startNode();
	  this.next(); // skip `import`
	  switch (this.type) {
	  case types.parenL:
	    return this.parseDynamicImport(node)
	  default:
	    this.unexpected();
	  }
	};

	pp$3.parseDynamicImport = function(node) {
	  this.next(); // skip `(`

	  // Parse node.source.
	  node.source = this.parseMaybeAssign();

	  // Verify ending.
	  if (!this.eat(types.parenR)) {
	    var errorPos = this.start;
	    if (this.eat(types.comma) && this.eat(types.parenR)) {
	      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
	    } else {
	      this.unexpected(errorPos);
	    }
	  }

	  return this.finishNode(node, "ImportExpression")
	};

	pp$3.parseLiteral = function(value) {
	  var node = this.startNode();
	  node.value = value;
	  node.raw = this.input.slice(this.start, this.end);
	  if (node.raw.charCodeAt(node.raw.length - 1) === 110) { node.bigint = node.raw.slice(0, -1); }
	  this.next();
	  return this.finishNode(node, "Literal")
	};

	pp$3.parseParenExpression = function() {
	  this.expect(types.parenL);
	  var val = this.parseExpression();
	  this.expect(types.parenR);
	  return val
	};

	pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
	  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
	  if (this.options.ecmaVersion >= 6) {
	    this.next();

	    var innerStartPos = this.start, innerStartLoc = this.startLoc;
	    var exprList = [], first = true, lastIsComma = false;
	    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
	    this.yieldPos = 0;
	    this.awaitPos = 0;
	    // Do not save awaitIdentPos to allow checking awaits nested in parameters
	    while (this.type !== types.parenR) {
	      first ? first = false : this.expect(types.comma);
	      if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
	        lastIsComma = true;
	        break
	      } else if (this.type === types.ellipsis) {
	        spreadStart = this.start;
	        exprList.push(this.parseParenItem(this.parseRestBinding()));
	        if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
	        break
	      } else {
	        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
	      }
	    }
	    var innerEndPos = this.start, innerEndLoc = this.startLoc;
	    this.expect(types.parenR);

	    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
	      this.checkPatternErrors(refDestructuringErrors, false);
	      this.checkYieldAwaitInDefaultParams();
	      this.yieldPos = oldYieldPos;
	      this.awaitPos = oldAwaitPos;
	      return this.parseParenArrowList(startPos, startLoc, exprList)
	    }

	    if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
	    if (spreadStart) { this.unexpected(spreadStart); }
	    this.checkExpressionErrors(refDestructuringErrors, true);
	    this.yieldPos = oldYieldPos || this.yieldPos;
	    this.awaitPos = oldAwaitPos || this.awaitPos;

	    if (exprList.length > 1) {
	      val = this.startNodeAt(innerStartPos, innerStartLoc);
	      val.expressions = exprList;
	      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
	    } else {
	      val = exprList[0];
	    }
	  } else {
	    val = this.parseParenExpression();
	  }

	  if (this.options.preserveParens) {
	    var par = this.startNodeAt(startPos, startLoc);
	    par.expression = val;
	    return this.finishNode(par, "ParenthesizedExpression")
	  } else {
	    return val
	  }
	};

	pp$3.parseParenItem = function(item) {
	  return item
	};

	pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
	  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
	};

	// New's precedence is slightly tricky. It must allow its argument to
	// be a `[]` or dot subscript expression, but not a call — at least,
	// not without wrapping it in parentheses. Thus, it uses the noCalls
	// argument to parseSubscripts to prevent it from consuming the
	// argument list.

	var empty$1 = [];

	pp$3.parseNew = function() {
	  var node = this.startNode();
	  var meta = this.parseIdent(true);
	  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
	    node.meta = meta;
	    var containsEsc = this.containsEsc;
	    node.property = this.parseIdent(true);
	    if (node.property.name !== "target" || containsEsc)
	      { this.raiseRecoverable(node.property.start, "The only valid meta property for new is new.target"); }
	    if (!this.inNonArrowFunction())
	      { this.raiseRecoverable(node.start, "new.target can only be used in functions"); }
	    return this.finishNode(node, "MetaProperty")
	  }
	  var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
	  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
	  if (isImport && node.callee.type === "ImportExpression") {
	    this.raise(startPos, "Cannot use new with import()");
	  }
	  if (this.eat(types.parenL)) { node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false); }
	  else { node.arguments = empty$1; }
	  return this.finishNode(node, "NewExpression")
	};

	// Parse template expression.

	pp$3.parseTemplateElement = function(ref) {
	  var isTagged = ref.isTagged;

	  var elem = this.startNode();
	  if (this.type === types.invalidTemplate) {
	    if (!isTagged) {
	      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
	    }
	    elem.value = {
	      raw: this.value,
	      cooked: null
	    };
	  } else {
	    elem.value = {
	      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
	      cooked: this.value
	    };
	  }
	  this.next();
	  elem.tail = this.type === types.backQuote;
	  return this.finishNode(elem, "TemplateElement")
	};

	pp$3.parseTemplate = function(ref) {
	  if ( ref === void 0 ) ref = {};
	  var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

	  var node = this.startNode();
	  this.next();
	  node.expressions = [];
	  var curElt = this.parseTemplateElement({isTagged: isTagged});
	  node.quasis = [curElt];
	  while (!curElt.tail) {
	    if (this.type === types.eof) { this.raise(this.pos, "Unterminated template literal"); }
	    this.expect(types.dollarBraceL);
	    node.expressions.push(this.parseExpression());
	    this.expect(types.braceR);
	    node.quasis.push(curElt = this.parseTemplateElement({isTagged: isTagged}));
	  }
	  this.next();
	  return this.finishNode(node, "TemplateLiteral")
	};

	pp$3.isAsyncProp = function(prop) {
	  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
	    (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types.star)) &&
	    !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
	};

	// Parse an object literal or binding pattern.

	pp$3.parseObj = function(isPattern, refDestructuringErrors) {
	  var node = this.startNode(), first = true, propHash = {};
	  node.properties = [];
	  this.next();
	  while (!this.eat(types.braceR)) {
	    if (!first) {
	      this.expect(types.comma);
	      if (this.afterTrailingComma(types.braceR)) { break }
	    } else { first = false; }

	    var prop = this.parseProperty(isPattern, refDestructuringErrors);
	    if (!isPattern) { this.checkPropClash(prop, propHash, refDestructuringErrors); }
	    node.properties.push(prop);
	  }
	  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
	};

	pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
	  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
	  if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
	    if (isPattern) {
	      prop.argument = this.parseIdent(false);
	      if (this.type === types.comma) {
	        this.raise(this.start, "Comma is not permitted after the rest element");
	      }
	      return this.finishNode(prop, "RestElement")
	    }
	    // To disallow parenthesized identifier via `this.toAssignable()`.
	    if (this.type === types.parenL && refDestructuringErrors) {
	      if (refDestructuringErrors.parenthesizedAssign < 0) {
	        refDestructuringErrors.parenthesizedAssign = this.start;
	      }
	      if (refDestructuringErrors.parenthesizedBind < 0) {
	        refDestructuringErrors.parenthesizedBind = this.start;
	      }
	    }
	    // Parse argument.
	    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
	    // To disallow trailing comma via `this.toAssignable()`.
	    if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
	      refDestructuringErrors.trailingComma = this.start;
	    }
	    // Finish
	    return this.finishNode(prop, "SpreadElement")
	  }
	  if (this.options.ecmaVersion >= 6) {
	    prop.method = false;
	    prop.shorthand = false;
	    if (isPattern || refDestructuringErrors) {
	      startPos = this.start;
	      startLoc = this.startLoc;
	    }
	    if (!isPattern)
	      { isGenerator = this.eat(types.star); }
	  }
	  var containsEsc = this.containsEsc;
	  this.parsePropertyName(prop);
	  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
	    isAsync = true;
	    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
	    this.parsePropertyName(prop, refDestructuringErrors);
	  } else {
	    isAsync = false;
	  }
	  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
	  return this.finishNode(prop, "Property")
	};

	pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
	  if ((isGenerator || isAsync) && this.type === types.colon)
	    { this.unexpected(); }

	  if (this.eat(types.colon)) {
	    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
	    prop.kind = "init";
	  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
	    if (isPattern) { this.unexpected(); }
	    prop.kind = "init";
	    prop.method = true;
	    prop.value = this.parseMethod(isGenerator, isAsync);
	  } else if (!isPattern && !containsEsc &&
	             this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
	             (prop.key.name === "get" || prop.key.name === "set") &&
	             (this.type !== types.comma && this.type !== types.braceR)) {
	    if (isGenerator || isAsync) { this.unexpected(); }
	    prop.kind = prop.key.name;
	    this.parsePropertyName(prop);
	    prop.value = this.parseMethod(false);
	    var paramCount = prop.kind === "get" ? 0 : 1;
	    if (prop.value.params.length !== paramCount) {
	      var start = prop.value.start;
	      if (prop.kind === "get")
	        { this.raiseRecoverable(start, "getter should have no params"); }
	      else
	        { this.raiseRecoverable(start, "setter should have exactly one param"); }
	    } else {
	      if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
	        { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
	    }
	  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
	    if (isGenerator || isAsync) { this.unexpected(); }
	    this.checkUnreserved(prop.key);
	    if (prop.key.name === "await" && !this.awaitIdentPos)
	      { this.awaitIdentPos = startPos; }
	    prop.kind = "init";
	    if (isPattern) {
	      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
	    } else if (this.type === types.eq && refDestructuringErrors) {
	      if (refDestructuringErrors.shorthandAssign < 0)
	        { refDestructuringErrors.shorthandAssign = this.start; }
	      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
	    } else {
	      prop.value = prop.key;
	    }
	    prop.shorthand = true;
	  } else { this.unexpected(); }
	};

	pp$3.parsePropertyName = function(prop) {
	  if (this.options.ecmaVersion >= 6) {
	    if (this.eat(types.bracketL)) {
	      prop.computed = true;
	      prop.key = this.parseMaybeAssign();
	      this.expect(types.bracketR);
	      return prop.key
	    } else {
	      prop.computed = false;
	    }
	  }
	  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never")
	};

	// Initialize empty function node.

	pp$3.initFunction = function(node) {
	  node.id = null;
	  if (this.options.ecmaVersion >= 6) { node.generator = node.expression = false; }
	  if (this.options.ecmaVersion >= 8) { node.async = false; }
	};

	// Parse object or class method.

	pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
	  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

	  this.initFunction(node);
	  if (this.options.ecmaVersion >= 6)
	    { node.generator = isGenerator; }
	  if (this.options.ecmaVersion >= 8)
	    { node.async = !!isAsync; }

	  this.yieldPos = 0;
	  this.awaitPos = 0;
	  this.awaitIdentPos = 0;
	  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));

	  this.expect(types.parenL);
	  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
	  this.checkYieldAwaitInDefaultParams();
	  this.parseFunctionBody(node, false, true);

	  this.yieldPos = oldYieldPos;
	  this.awaitPos = oldAwaitPos;
	  this.awaitIdentPos = oldAwaitIdentPos;
	  return this.finishNode(node, "FunctionExpression")
	};

	// Parse arrow function expression with given parameters.

	pp$3.parseArrowExpression = function(node, params, isAsync) {
	  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

	  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
	  this.initFunction(node);
	  if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

	  this.yieldPos = 0;
	  this.awaitPos = 0;
	  this.awaitIdentPos = 0;

	  node.params = this.toAssignableList(params, true);
	  this.parseFunctionBody(node, true, false);

	  this.yieldPos = oldYieldPos;
	  this.awaitPos = oldAwaitPos;
	  this.awaitIdentPos = oldAwaitIdentPos;
	  return this.finishNode(node, "ArrowFunctionExpression")
	};

	// Parse function body and check parameters.

	pp$3.parseFunctionBody = function(node, isArrowFunction, isMethod) {
	  var isExpression = isArrowFunction && this.type !== types.braceL;
	  var oldStrict = this.strict, useStrict = false;

	  if (isExpression) {
	    node.body = this.parseMaybeAssign();
	    node.expression = true;
	    this.checkParams(node, false);
	  } else {
	    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
	    if (!oldStrict || nonSimple) {
	      useStrict = this.strictDirective(this.end);
	      // If this is a strict mode function, verify that argument names
	      // are not repeated, and it does not try to bind the words `eval`
	      // or `arguments`.
	      if (useStrict && nonSimple)
	        { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
	    }
	    // Start a new scope with regard to labels and the `inFunction`
	    // flag (restore them to their old value afterwards).
	    var oldLabels = this.labels;
	    this.labels = [];
	    if (useStrict) { this.strict = true; }

	    // Add the params to varDeclaredNames to ensure that an error is thrown
	    // if a let/const declaration in the function clashes with one of the params.
	    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
	    node.body = this.parseBlock(false);
	    node.expression = false;
	    this.adaptDirectivePrologue(node.body.body);
	    this.labels = oldLabels;
	  }
	  this.exitScope();

	  // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
	  if (this.strict && node.id) { this.checkLVal(node.id, BIND_OUTSIDE); }
	  this.strict = oldStrict;
	};

	pp$3.isSimpleParamList = function(params) {
	  for (var i = 0, list = params; i < list.length; i += 1)
	    {
	    var param = list[i];

	    if (param.type !== "Identifier") { return false
	  } }
	  return true
	};

	// Checks function params for various disallowed patterns such as using "eval"
	// or "arguments" and duplicate parameters.

	pp$3.checkParams = function(node, allowDuplicates) {
	  var nameHash = {};
	  for (var i = 0, list = node.params; i < list.length; i += 1)
	    {
	    var param = list[i];

	    this.checkLVal(param, BIND_VAR, allowDuplicates ? null : nameHash);
	  }
	};

	// Parses a comma-separated list of expressions, and returns them as
	// an array. `close` is the token type that ends the list, and
	// `allowEmpty` can be turned on to allow subsequent commas with
	// nothing in between them to be parsed as `null` (which is needed
	// for array literals).

	pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
	  var elts = [], first = true;
	  while (!this.eat(close)) {
	    if (!first) {
	      this.expect(types.comma);
	      if (allowTrailingComma && this.afterTrailingComma(close)) { break }
	    } else { first = false; }

	    var elt = (void 0);
	    if (allowEmpty && this.type === types.comma)
	      { elt = null; }
	    else if (this.type === types.ellipsis) {
	      elt = this.parseSpread(refDestructuringErrors);
	      if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0)
	        { refDestructuringErrors.trailingComma = this.start; }
	    } else {
	      elt = this.parseMaybeAssign(false, refDestructuringErrors);
	    }
	    elts.push(elt);
	  }
	  return elts
	};

	pp$3.checkUnreserved = function(ref) {
	  var start = ref.start;
	  var end = ref.end;
	  var name = ref.name;

	  if (this.inGenerator && name === "yield")
	    { this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"); }
	  if (this.inAsync && name === "await")
	    { this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"); }
	  if (this.keywords.test(name))
	    { this.raise(start, ("Unexpected keyword '" + name + "'")); }
	  if (this.options.ecmaVersion < 6 &&
	    this.input.slice(start, end).indexOf("\\") !== -1) { return }
	  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
	  if (re.test(name)) {
	    if (!this.inAsync && name === "await")
	      { this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"); }
	    this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
	  }
	};

	// Parse the next token as an identifier. If `liberal` is true (used
	// when parsing properties), it will also convert keywords into
	// identifiers.

	pp$3.parseIdent = function(liberal, isBinding) {
	  var node = this.startNode();
	  if (this.type === types.name) {
	    node.name = this.value;
	  } else if (this.type.keyword) {
	    node.name = this.type.keyword;

	    // To fix https://github.com/acornjs/acorn/issues/575
	    // `class` and `function` keywords push new context into this.context.
	    // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
	    // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
	    if ((node.name === "class" || node.name === "function") &&
	        (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
	      this.context.pop();
	    }
	  } else {
	    this.unexpected();
	  }
	  this.next();
	  this.finishNode(node, "Identifier");
	  if (!liberal) {
	    this.checkUnreserved(node);
	    if (node.name === "await" && !this.awaitIdentPos)
	      { this.awaitIdentPos = node.start; }
	  }
	  return node
	};

	// Parses yield expression inside generator.

	pp$3.parseYield = function(noIn) {
	  if (!this.yieldPos) { this.yieldPos = this.start; }

	  var node = this.startNode();
	  this.next();
	  if (this.type === types.semi || this.canInsertSemicolon() || (this.type !== types.star && !this.type.startsExpr)) {
	    node.delegate = false;
	    node.argument = null;
	  } else {
	    node.delegate = this.eat(types.star);
	    node.argument = this.parseMaybeAssign(noIn);
	  }
	  return this.finishNode(node, "YieldExpression")
	};

	pp$3.parseAwait = function() {
	  if (!this.awaitPos) { this.awaitPos = this.start; }

	  var node = this.startNode();
	  this.next();
	  node.argument = this.parseMaybeUnary(null, true);
	  return this.finishNode(node, "AwaitExpression")
	};

	var pp$4 = Parser.prototype;

	// This function is used to raise exceptions on parse errors. It
	// takes an offset integer (into the current `input`) to indicate
	// the location of the error, attaches the position to the end
	// of the error message, and then raises a `SyntaxError` with that
	// message.

	pp$4.raise = function(pos, message) {
	  var loc = getLineInfo(this.input, pos);
	  message += " (" + loc.line + ":" + loc.column + ")";
	  var err = new SyntaxError(message);
	  err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
	  throw err
	};

	pp$4.raiseRecoverable = pp$4.raise;

	pp$4.curPosition = function() {
	  if (this.options.locations) {
	    return new Position(this.curLine, this.pos - this.lineStart)
	  }
	};

	var pp$5 = Parser.prototype;

	var Scope = function Scope(flags) {
	  this.flags = flags;
	  // A list of var-declared names in the current lexical scope
	  this.var = [];
	  // A list of lexically-declared names in the current lexical scope
	  this.lexical = [];
	  // A list of lexically-declared FunctionDeclaration names in the current lexical scope
	  this.functions = [];
	};

	// The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

	pp$5.enterScope = function(flags) {
	  this.scopeStack.push(new Scope(flags));
	};

	pp$5.exitScope = function() {
	  this.scopeStack.pop();
	};

	// The spec says:
	// > At the top level of a function, or script, function declarations are
	// > treated like var declarations rather than like lexical declarations.
	pp$5.treatFunctionsAsVarInScope = function(scope) {
	  return (scope.flags & SCOPE_FUNCTION) || !this.inModule && (scope.flags & SCOPE_TOP)
	};

	pp$5.declareName = function(name, bindingType, pos) {
	  var redeclared = false;
	  if (bindingType === BIND_LEXICAL) {
	    var scope = this.currentScope();
	    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
	    scope.lexical.push(name);
	    if (this.inModule && (scope.flags & SCOPE_TOP))
	      { delete this.undefinedExports[name]; }
	  } else if (bindingType === BIND_SIMPLE_CATCH) {
	    var scope$1 = this.currentScope();
	    scope$1.lexical.push(name);
	  } else if (bindingType === BIND_FUNCTION) {
	    var scope$2 = this.currentScope();
	    if (this.treatFunctionsAsVar)
	      { redeclared = scope$2.lexical.indexOf(name) > -1; }
	    else
	      { redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1; }
	    scope$2.functions.push(name);
	  } else {
	    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
	      var scope$3 = this.scopeStack[i];
	      if (scope$3.lexical.indexOf(name) > -1 && !((scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) ||
	          !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
	        redeclared = true;
	        break
	      }
	      scope$3.var.push(name);
	      if (this.inModule && (scope$3.flags & SCOPE_TOP))
	        { delete this.undefinedExports[name]; }
	      if (scope$3.flags & SCOPE_VAR) { break }
	    }
	  }
	  if (redeclared) { this.raiseRecoverable(pos, ("Identifier '" + name + "' has already been declared")); }
	};

	pp$5.checkLocalExport = function(id) {
	  // scope.functions must be empty as Module code is always strict.
	  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 &&
	      this.scopeStack[0].var.indexOf(id.name) === -1) {
	    this.undefinedExports[id.name] = id;
	  }
	};

	pp$5.currentScope = function() {
	  return this.scopeStack[this.scopeStack.length - 1]
	};

	pp$5.currentVarScope = function() {
	  for (var i = this.scopeStack.length - 1;; i--) {
	    var scope = this.scopeStack[i];
	    if (scope.flags & SCOPE_VAR) { return scope }
	  }
	};

	// Could be useful for `this`, `new.target`, `super()`, `super.property`, and `super[property]`.
	pp$5.currentThisScope = function() {
	  for (var i = this.scopeStack.length - 1;; i--) {
	    var scope = this.scopeStack[i];
	    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) { return scope }
	  }
	};

	var Node = function Node(parser, pos, loc) {
	  this.type = "";
	  this.start = pos;
	  this.end = 0;
	  if (parser.options.locations)
	    { this.loc = new SourceLocation(parser, loc); }
	  if (parser.options.directSourceFile)
	    { this.sourceFile = parser.options.directSourceFile; }
	  if (parser.options.ranges)
	    { this.range = [pos, 0]; }
	};

	// Start an AST node, attaching a start offset.

	var pp$6 = Parser.prototype;

	pp$6.startNode = function() {
	  return new Node(this, this.start, this.startLoc)
	};

	pp$6.startNodeAt = function(pos, loc) {
	  return new Node(this, pos, loc)
	};

	// Finish an AST node, adding `type` and `end` properties.

	function finishNodeAt(node, type, pos, loc) {
	  node.type = type;
	  node.end = pos;
	  if (this.options.locations)
	    { node.loc.end = loc; }
	  if (this.options.ranges)
	    { node.range[1] = pos; }
	  return node
	}

	pp$6.finishNode = function(node, type) {
	  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
	};

	// Finish node at given position

	pp$6.finishNodeAt = function(node, type, pos, loc) {
	  return finishNodeAt.call(this, node, type, pos, loc)
	};

	// The algorithm used to determine whether a regexp can appear at a

	var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
	  this.token = token;
	  this.isExpr = !!isExpr;
	  this.preserveSpace = !!preserveSpace;
	  this.override = override;
	  this.generator = !!generator;
	};

	var types$1 = {
	  b_stat: new TokContext("{", false),
	  b_expr: new TokContext("{", true),
	  b_tmpl: new TokContext("${", false),
	  p_stat: new TokContext("(", false),
	  p_expr: new TokContext("(", true),
	  q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
	  f_stat: new TokContext("function", false),
	  f_expr: new TokContext("function", true),
	  f_expr_gen: new TokContext("function", true, false, null, true),
	  f_gen: new TokContext("function", false, false, null, true)
	};

	var pp$7 = Parser.prototype;

	pp$7.initialContext = function() {
	  return [types$1.b_stat]
	};

	pp$7.braceIsBlock = function(prevType) {
	  var parent = this.curContext();
	  if (parent === types$1.f_expr || parent === types$1.f_stat)
	    { return true }
	  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr))
	    { return !parent.isExpr }

	  // The check for `tt.name && exprAllowed` detects whether we are
	  // after a `yield` or `of` construct. See the `updateContext` for
	  // `tt.name`.
	  if (prevType === types._return || prevType === types.name && this.exprAllowed)
	    { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
	  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow)
	    { return true }
	  if (prevType === types.braceL)
	    { return parent === types$1.b_stat }
	  if (prevType === types._var || prevType === types._const || prevType === types.name)
	    { return false }
	  return !this.exprAllowed
	};

	pp$7.inGeneratorContext = function() {
	  for (var i = this.context.length - 1; i >= 1; i--) {
	    var context = this.context[i];
	    if (context.token === "function")
	      { return context.generator }
	  }
	  return false
	};

	pp$7.updateContext = function(prevType) {
	  var update, type = this.type;
	  if (type.keyword && prevType === types.dot)
	    { this.exprAllowed = false; }
	  else if (update = type.updateContext)
	    { update.call(this, prevType); }
	  else
	    { this.exprAllowed = type.beforeExpr; }
	};

	// Token-specific context update code

	types.parenR.updateContext = types.braceR.updateContext = function() {
	  if (this.context.length === 1) {
	    this.exprAllowed = true;
	    return
	  }
	  var out = this.context.pop();
	  if (out === types$1.b_stat && this.curContext().token === "function") {
	    out = this.context.pop();
	  }
	  this.exprAllowed = !out.isExpr;
	};

	types.braceL.updateContext = function(prevType) {
	  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
	  this.exprAllowed = true;
	};

	types.dollarBraceL.updateContext = function() {
	  this.context.push(types$1.b_tmpl);
	  this.exprAllowed = true;
	};

	types.parenL.updateContext = function(prevType) {
	  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
	  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
	  this.exprAllowed = true;
	};

	types.incDec.updateContext = function() {
	  // tokExprAllowed stays unchanged
	};

	types._function.updateContext = types._class.updateContext = function(prevType) {
	  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else &&
	      !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) &&
	      !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat))
	    { this.context.push(types$1.f_expr); }
	  else
	    { this.context.push(types$1.f_stat); }
	  this.exprAllowed = false;
	};

	types.backQuote.updateContext = function() {
	  if (this.curContext() === types$1.q_tmpl)
	    { this.context.pop(); }
	  else
	    { this.context.push(types$1.q_tmpl); }
	  this.exprAllowed = false;
	};

	types.star.updateContext = function(prevType) {
	  if (prevType === types._function) {
	    var index = this.context.length - 1;
	    if (this.context[index] === types$1.f_expr)
	      { this.context[index] = types$1.f_expr_gen; }
	    else
	      { this.context[index] = types$1.f_gen; }
	  }
	  this.exprAllowed = true;
	};

	types.name.updateContext = function(prevType) {
	  var allowed = false;
	  if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
	    if (this.value === "of" && !this.exprAllowed ||
	        this.value === "yield" && this.inGeneratorContext())
	      { allowed = true; }
	  }
	  this.exprAllowed = allowed;
	};

	// This file contains Unicode properties extracted from the ECMAScript
	// specification. The lists are extracted like so:
	// $$('#table-binary-unicode-properties > figure > table > tbody > tr > td:nth-child(1) code').map(el => el.innerText)

	// #table-binary-unicode-properties
	var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
	var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
	var ecma11BinaryProperties = ecma10BinaryProperties;
	var unicodeBinaryProperties = {
	  9: ecma9BinaryProperties,
	  10: ecma10BinaryProperties,
	  11: ecma11BinaryProperties
	};

	// #table-unicode-general-category-values
	var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";

	// #table-unicode-script-values
	var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
	var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
	var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
	var unicodeScriptValues = {
	  9: ecma9ScriptValues,
	  10: ecma10ScriptValues,
	  11: ecma11ScriptValues
	};

	var data = {};
	function buildUnicodeData(ecmaVersion) {
	  var d = data[ecmaVersion] = {
	    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
	    nonBinary: {
	      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
	      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
	    }
	  };
	  d.nonBinary.Script_Extensions = d.nonBinary.Script;

	  d.nonBinary.gc = d.nonBinary.General_Category;
	  d.nonBinary.sc = d.nonBinary.Script;
	  d.nonBinary.scx = d.nonBinary.Script_Extensions;
	}
	buildUnicodeData(9);
	buildUnicodeData(10);
	buildUnicodeData(11);

	var pp$8 = Parser.prototype;

	var RegExpValidationState = function RegExpValidationState(parser) {
	  this.parser = parser;
	  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
	  this.unicodeProperties = data[parser.options.ecmaVersion >= 11 ? 11 : parser.options.ecmaVersion];
	  this.source = "";
	  this.flags = "";
	  this.start = 0;
	  this.switchU = false;
	  this.switchN = false;
	  this.pos = 0;
	  this.lastIntValue = 0;
	  this.lastStringValue = "";
	  this.lastAssertionIsQuantifiable = false;
	  this.numCapturingParens = 0;
	  this.maxBackReference = 0;
	  this.groupNames = [];
	  this.backReferenceNames = [];
	};

	RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
	  var unicode = flags.indexOf("u") !== -1;
	  this.start = start | 0;
	  this.source = pattern + "";
	  this.flags = flags;
	  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
	  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
	};

	RegExpValidationState.prototype.raise = function raise (message) {
	  this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
	};

	// If u flag is given, this returns the code point at the index (it combines a surrogate pair).
	// Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
	RegExpValidationState.prototype.at = function at (i) {
	  var s = this.source;
	  var l = s.length;
	  if (i >= l) {
	    return -1
	  }
	  var c = s.charCodeAt(i);
	  if (!this.switchU || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
	    return c
	  }
	  return (c << 10) + s.charCodeAt(i + 1) - 0x35FDC00
	};

	RegExpValidationState.prototype.nextIndex = function nextIndex (i) {
	  var s = this.source;
	  var l = s.length;
	  if (i >= l) {
	    return l
	  }
	  var c = s.charCodeAt(i);
	  if (!this.switchU || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
	    return i + 1
	  }
	  return i + 2
	};

	RegExpValidationState.prototype.current = function current () {
	  return this.at(this.pos)
	};

	RegExpValidationState.prototype.lookahead = function lookahead () {
	  return this.at(this.nextIndex(this.pos))
	};

	RegExpValidationState.prototype.advance = function advance () {
	  this.pos = this.nextIndex(this.pos);
	};

	RegExpValidationState.prototype.eat = function eat (ch) {
	  if (this.current() === ch) {
	    this.advance();
	    return true
	  }
	  return false
	};

	function codePointToString(ch) {
	  if (ch <= 0xFFFF) { return String.fromCharCode(ch) }
	  ch -= 0x10000;
	  return String.fromCharCode((ch >> 10) + 0xD800, (ch & 0x03FF) + 0xDC00)
	}

	/**
	 * Validate the flags part of a given RegExpLiteral.
	 *
	 * @param {RegExpValidationState} state The state to validate RegExp.
	 * @returns {void}
	 */
	pp$8.validateRegExpFlags = function(state) {
	  var validFlags = state.validFlags;
	  var flags = state.flags;

	  for (var i = 0; i < flags.length; i++) {
	    var flag = flags.charAt(i);
	    if (validFlags.indexOf(flag) === -1) {
	      this.raise(state.start, "Invalid regular expression flag");
	    }
	    if (flags.indexOf(flag, i + 1) > -1) {
	      this.raise(state.start, "Duplicate regular expression flag");
	    }
	  }
	};

	/**
	 * Validate the pattern part of a given RegExpLiteral.
	 *
	 * @param {RegExpValidationState} state The state to validate RegExp.
	 * @returns {void}
	 */
	pp$8.validateRegExpPattern = function(state) {
	  this.regexp_pattern(state);

	  // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
	  // parsing contains a |GroupName|, reparse with the goal symbol
	  // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
	  // exception if _P_ did not conform to the grammar, if any elements of _P_
	  // were not matched by the parse, or if any Early Error conditions exist.
	  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
	    state.switchN = true;
	    this.regexp_pattern(state);
	  }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
	pp$8.regexp_pattern = function(state) {
	  state.pos = 0;
	  state.lastIntValue = 0;
	  state.lastStringValue = "";
	  state.lastAssertionIsQuantifiable = false;
	  state.numCapturingParens = 0;
	  state.maxBackReference = 0;
	  state.groupNames.length = 0;
	  state.backReferenceNames.length = 0;

	  this.regexp_disjunction(state);

	  if (state.pos !== state.source.length) {
	    // Make the same messages as V8.
	    if (state.eat(0x29 /* ) */)) {
	      state.raise("Unmatched ')'");
	    }
	    if (state.eat(0x5D /* [ */) || state.eat(0x7D /* } */)) {
	      state.raise("Lone quantifier brackets");
	    }
	  }
	  if (state.maxBackReference > state.numCapturingParens) {
	    state.raise("Invalid escape");
	  }
	  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
	    var name = list[i];

	    if (state.groupNames.indexOf(name) === -1) {
	      state.raise("Invalid named capture referenced");
	    }
	  }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
	pp$8.regexp_disjunction = function(state) {
	  this.regexp_alternative(state);
	  while (state.eat(0x7C /* | */)) {
	    this.regexp_alternative(state);
	  }

	  // Make the same message as V8.
	  if (this.regexp_eatQuantifier(state, true)) {
	    state.raise("Nothing to repeat");
	  }
	  if (state.eat(0x7B /* { */)) {
	    state.raise("Lone quantifier brackets");
	  }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
	pp$8.regexp_alternative = function(state) {
	  while (state.pos < state.source.length && this.regexp_eatTerm(state))
	    { }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
	pp$8.regexp_eatTerm = function(state) {
	  if (this.regexp_eatAssertion(state)) {
	    // Handle `QuantifiableAssertion Quantifier` alternative.
	    // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
	    // is a QuantifiableAssertion.
	    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
	      // Make the same message as V8.
	      if (state.switchU) {
	        state.raise("Invalid quantifier");
	      }
	    }
	    return true
	  }

	  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
	    this.regexp_eatQuantifier(state);
	    return true
	  }

	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
	pp$8.regexp_eatAssertion = function(state) {
	  var start = state.pos;
	  state.lastAssertionIsQuantifiable = false;

	  // ^, $
	  if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
	    return true
	  }

	  // \b \B
	  if (state.eat(0x5C /* \ */)) {
	    if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
	      return true
	    }
	    state.pos = start;
	  }

	  // Lookahead / Lookbehind
	  if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
	    var lookbehind = false;
	    if (this.options.ecmaVersion >= 9) {
	      lookbehind = state.eat(0x3C /* < */);
	    }
	    if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
	      this.regexp_disjunction(state);
	      if (!state.eat(0x29 /* ) */)) {
	        state.raise("Unterminated group");
	      }
	      state.lastAssertionIsQuantifiable = !lookbehind;
	      return true
	    }
	  }

	  state.pos = start;
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
	pp$8.regexp_eatQuantifier = function(state, noError) {
	  if ( noError === void 0 ) noError = false;

	  if (this.regexp_eatQuantifierPrefix(state, noError)) {
	    state.eat(0x3F /* ? */);
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
	pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
	  return (
	    state.eat(0x2A /* * */) ||
	    state.eat(0x2B /* + */) ||
	    state.eat(0x3F /* ? */) ||
	    this.regexp_eatBracedQuantifier(state, noError)
	  )
	};
	pp$8.regexp_eatBracedQuantifier = function(state, noError) {
	  var start = state.pos;
	  if (state.eat(0x7B /* { */)) {
	    var min = 0, max = -1;
	    if (this.regexp_eatDecimalDigits(state)) {
	      min = state.lastIntValue;
	      if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
	        max = state.lastIntValue;
	      }
	      if (state.eat(0x7D /* } */)) {
	        // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
	        if (max !== -1 && max < min && !noError) {
	          state.raise("numbers out of order in {} quantifier");
	        }
	        return true
	      }
	    }
	    if (state.switchU && !noError) {
	      state.raise("Incomplete quantifier");
	    }
	    state.pos = start;
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
	pp$8.regexp_eatAtom = function(state) {
	  return (
	    this.regexp_eatPatternCharacters(state) ||
	    state.eat(0x2E /* . */) ||
	    this.regexp_eatReverseSolidusAtomEscape(state) ||
	    this.regexp_eatCharacterClass(state) ||
	    this.regexp_eatUncapturingGroup(state) ||
	    this.regexp_eatCapturingGroup(state)
	  )
	};
	pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
	  var start = state.pos;
	  if (state.eat(0x5C /* \ */)) {
	    if (this.regexp_eatAtomEscape(state)) {
	      return true
	    }
	    state.pos = start;
	  }
	  return false
	};
	pp$8.regexp_eatUncapturingGroup = function(state) {
	  var start = state.pos;
	  if (state.eat(0x28 /* ( */)) {
	    if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
	      this.regexp_disjunction(state);
	      if (state.eat(0x29 /* ) */)) {
	        return true
	      }
	      state.raise("Unterminated group");
	    }
	    state.pos = start;
	  }
	  return false
	};
	pp$8.regexp_eatCapturingGroup = function(state) {
	  if (state.eat(0x28 /* ( */)) {
	    if (this.options.ecmaVersion >= 9) {
	      this.regexp_groupSpecifier(state);
	    } else if (state.current() === 0x3F /* ? */) {
	      state.raise("Invalid group");
	    }
	    this.regexp_disjunction(state);
	    if (state.eat(0x29 /* ) */)) {
	      state.numCapturingParens += 1;
	      return true
	    }
	    state.raise("Unterminated group");
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
	pp$8.regexp_eatExtendedAtom = function(state) {
	  return (
	    state.eat(0x2E /* . */) ||
	    this.regexp_eatReverseSolidusAtomEscape(state) ||
	    this.regexp_eatCharacterClass(state) ||
	    this.regexp_eatUncapturingGroup(state) ||
	    this.regexp_eatCapturingGroup(state) ||
	    this.regexp_eatInvalidBracedQuantifier(state) ||
	    this.regexp_eatExtendedPatternCharacter(state)
	  )
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
	pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
	  if (this.regexp_eatBracedQuantifier(state, true)) {
	    state.raise("Nothing to repeat");
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
	pp$8.regexp_eatSyntaxCharacter = function(state) {
	  var ch = state.current();
	  if (isSyntaxCharacter(ch)) {
	    state.lastIntValue = ch;
	    state.advance();
	    return true
	  }
	  return false
	};
	function isSyntaxCharacter(ch) {
	  return (
	    ch === 0x24 /* $ */ ||
	    ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
	    ch === 0x2E /* . */ ||
	    ch === 0x3F /* ? */ ||
	    ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
	    ch >= 0x7B /* { */ && ch <= 0x7D /* } */
	  )
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
	// But eat eager.
	pp$8.regexp_eatPatternCharacters = function(state) {
	  var start = state.pos;
	  var ch = 0;
	  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
	    state.advance();
	  }
	  return state.pos !== start
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
	pp$8.regexp_eatExtendedPatternCharacter = function(state) {
	  var ch = state.current();
	  if (
	    ch !== -1 &&
	    ch !== 0x24 /* $ */ &&
	    !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
	    ch !== 0x2E /* . */ &&
	    ch !== 0x3F /* ? */ &&
	    ch !== 0x5B /* [ */ &&
	    ch !== 0x5E /* ^ */ &&
	    ch !== 0x7C /* | */
	  ) {
	    state.advance();
	    return true
	  }
	  return false
	};

	// GroupSpecifier[U] ::
	//   [empty]
	//   `?` GroupName[?U]
	pp$8.regexp_groupSpecifier = function(state) {
	  if (state.eat(0x3F /* ? */)) {
	    if (this.regexp_eatGroupName(state)) {
	      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
	        state.raise("Duplicate capture group name");
	      }
	      state.groupNames.push(state.lastStringValue);
	      return
	    }
	    state.raise("Invalid group");
	  }
	};

	// GroupName[U] ::
	//   `<` RegExpIdentifierName[?U] `>`
	// Note: this updates `state.lastStringValue` property with the eaten name.
	pp$8.regexp_eatGroupName = function(state) {
	  state.lastStringValue = "";
	  if (state.eat(0x3C /* < */)) {
	    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
	      return true
	    }
	    state.raise("Invalid capture group name");
	  }
	  return false
	};

	// RegExpIdentifierName[U] ::
	//   RegExpIdentifierStart[?U]
	//   RegExpIdentifierName[?U] RegExpIdentifierPart[?U]
	// Note: this updates `state.lastStringValue` property with the eaten name.
	pp$8.regexp_eatRegExpIdentifierName = function(state) {
	  state.lastStringValue = "";
	  if (this.regexp_eatRegExpIdentifierStart(state)) {
	    state.lastStringValue += codePointToString(state.lastIntValue);
	    while (this.regexp_eatRegExpIdentifierPart(state)) {
	      state.lastStringValue += codePointToString(state.lastIntValue);
	    }
	    return true
	  }
	  return false
	};

	// RegExpIdentifierStart[U] ::
	//   UnicodeIDStart
	//   `$`
	//   `_`
	//   `\` RegExpUnicodeEscapeSequence[?U]
	pp$8.regexp_eatRegExpIdentifierStart = function(state) {
	  var start = state.pos;
	  var ch = state.current();
	  state.advance();

	  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
	    ch = state.lastIntValue;
	  }
	  if (isRegExpIdentifierStart(ch)) {
	    state.lastIntValue = ch;
	    return true
	  }

	  state.pos = start;
	  return false
	};
	function isRegExpIdentifierStart(ch) {
	  return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
	}

	// RegExpIdentifierPart[U] ::
	//   UnicodeIDContinue
	//   `$`
	//   `_`
	//   `\` RegExpUnicodeEscapeSequence[?U]
	//   <ZWNJ>
	//   <ZWJ>
	pp$8.regexp_eatRegExpIdentifierPart = function(state) {
	  var start = state.pos;
	  var ch = state.current();
	  state.advance();

	  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
	    ch = state.lastIntValue;
	  }
	  if (isRegExpIdentifierPart(ch)) {
	    state.lastIntValue = ch;
	    return true
	  }

	  state.pos = start;
	  return false
	};
	function isRegExpIdentifierPart(ch) {
	  return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
	pp$8.regexp_eatAtomEscape = function(state) {
	  if (
	    this.regexp_eatBackReference(state) ||
	    this.regexp_eatCharacterClassEscape(state) ||
	    this.regexp_eatCharacterEscape(state) ||
	    (state.switchN && this.regexp_eatKGroupName(state))
	  ) {
	    return true
	  }
	  if (state.switchU) {
	    // Make the same message as V8.
	    if (state.current() === 0x63 /* c */) {
	      state.raise("Invalid unicode escape");
	    }
	    state.raise("Invalid escape");
	  }
	  return false
	};
	pp$8.regexp_eatBackReference = function(state) {
	  var start = state.pos;
	  if (this.regexp_eatDecimalEscape(state)) {
	    var n = state.lastIntValue;
	    if (state.switchU) {
	      // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
	      if (n > state.maxBackReference) {
	        state.maxBackReference = n;
	      }
	      return true
	    }
	    if (n <= state.numCapturingParens) {
	      return true
	    }
	    state.pos = start;
	  }
	  return false
	};
	pp$8.regexp_eatKGroupName = function(state) {
	  if (state.eat(0x6B /* k */)) {
	    if (this.regexp_eatGroupName(state)) {
	      state.backReferenceNames.push(state.lastStringValue);
	      return true
	    }
	    state.raise("Invalid named reference");
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
	pp$8.regexp_eatCharacterEscape = function(state) {
	  return (
	    this.regexp_eatControlEscape(state) ||
	    this.regexp_eatCControlLetter(state) ||
	    this.regexp_eatZero(state) ||
	    this.regexp_eatHexEscapeSequence(state) ||
	    this.regexp_eatRegExpUnicodeEscapeSequence(state) ||
	    (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
	    this.regexp_eatIdentityEscape(state)
	  )
	};
	pp$8.regexp_eatCControlLetter = function(state) {
	  var start = state.pos;
	  if (state.eat(0x63 /* c */)) {
	    if (this.regexp_eatControlLetter(state)) {
	      return true
	    }
	    state.pos = start;
	  }
	  return false
	};
	pp$8.regexp_eatZero = function(state) {
	  if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
	    state.lastIntValue = 0;
	    state.advance();
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
	pp$8.regexp_eatControlEscape = function(state) {
	  var ch = state.current();
	  if (ch === 0x74 /* t */) {
	    state.lastIntValue = 0x09; /* \t */
	    state.advance();
	    return true
	  }
	  if (ch === 0x6E /* n */) {
	    state.lastIntValue = 0x0A; /* \n */
	    state.advance();
	    return true
	  }
	  if (ch === 0x76 /* v */) {
	    state.lastIntValue = 0x0B; /* \v */
	    state.advance();
	    return true
	  }
	  if (ch === 0x66 /* f */) {
	    state.lastIntValue = 0x0C; /* \f */
	    state.advance();
	    return true
	  }
	  if (ch === 0x72 /* r */) {
	    state.lastIntValue = 0x0D; /* \r */
	    state.advance();
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
	pp$8.regexp_eatControlLetter = function(state) {
	  var ch = state.current();
	  if (isControlLetter(ch)) {
	    state.lastIntValue = ch % 0x20;
	    state.advance();
	    return true
	  }
	  return false
	};
	function isControlLetter(ch) {
	  return (
	    (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
	    (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
	  )
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
	pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state) {
	  var start = state.pos;

	  if (state.eat(0x75 /* u */)) {
	    if (this.regexp_eatFixedHexDigits(state, 4)) {
	      var lead = state.lastIntValue;
	      if (state.switchU && lead >= 0xD800 && lead <= 0xDBFF) {
	        var leadSurrogateEnd = state.pos;
	        if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
	          var trail = state.lastIntValue;
	          if (trail >= 0xDC00 && trail <= 0xDFFF) {
	            state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	            return true
	          }
	        }
	        state.pos = leadSurrogateEnd;
	        state.lastIntValue = lead;
	      }
	      return true
	    }
	    if (
	      state.switchU &&
	      state.eat(0x7B /* { */) &&
	      this.regexp_eatHexDigits(state) &&
	      state.eat(0x7D /* } */) &&
	      isValidUnicode(state.lastIntValue)
	    ) {
	      return true
	    }
	    if (state.switchU) {
	      state.raise("Invalid unicode escape");
	    }
	    state.pos = start;
	  }

	  return false
	};
	function isValidUnicode(ch) {
	  return ch >= 0 && ch <= 0x10FFFF
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
	pp$8.regexp_eatIdentityEscape = function(state) {
	  if (state.switchU) {
	    if (this.regexp_eatSyntaxCharacter(state)) {
	      return true
	    }
	    if (state.eat(0x2F /* / */)) {
	      state.lastIntValue = 0x2F; /* / */
	      return true
	    }
	    return false
	  }

	  var ch = state.current();
	  if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
	    state.lastIntValue = ch;
	    state.advance();
	    return true
	  }

	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
	pp$8.regexp_eatDecimalEscape = function(state) {
	  state.lastIntValue = 0;
	  var ch = state.current();
	  if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
	    do {
	      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
	      state.advance();
	    } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
	pp$8.regexp_eatCharacterClassEscape = function(state) {
	  var ch = state.current();

	  if (isCharacterClassEscape(ch)) {
	    state.lastIntValue = -1;
	    state.advance();
	    return true
	  }

	  if (
	    state.switchU &&
	    this.options.ecmaVersion >= 9 &&
	    (ch === 0x50 /* P */ || ch === 0x70 /* p */)
	  ) {
	    state.lastIntValue = -1;
	    state.advance();
	    if (
	      state.eat(0x7B /* { */) &&
	      this.regexp_eatUnicodePropertyValueExpression(state) &&
	      state.eat(0x7D /* } */)
	    ) {
	      return true
	    }
	    state.raise("Invalid property name");
	  }

	  return false
	};
	function isCharacterClassEscape(ch) {
	  return (
	    ch === 0x64 /* d */ ||
	    ch === 0x44 /* D */ ||
	    ch === 0x73 /* s */ ||
	    ch === 0x53 /* S */ ||
	    ch === 0x77 /* w */ ||
	    ch === 0x57 /* W */
	  )
	}

	// UnicodePropertyValueExpression ::
	//   UnicodePropertyName `=` UnicodePropertyValue
	//   LoneUnicodePropertyNameOrValue
	pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
	  var start = state.pos;

	  // UnicodePropertyName `=` UnicodePropertyValue
	  if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
	    var name = state.lastStringValue;
	    if (this.regexp_eatUnicodePropertyValue(state)) {
	      var value = state.lastStringValue;
	      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
	      return true
	    }
	  }
	  state.pos = start;

	  // LoneUnicodePropertyNameOrValue
	  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
	    var nameOrValue = state.lastStringValue;
	    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
	    return true
	  }
	  return false
	};
	pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
	  if (!has(state.unicodeProperties.nonBinary, name))
	    { state.raise("Invalid property name"); }
	  if (!state.unicodeProperties.nonBinary[name].test(value))
	    { state.raise("Invalid property value"); }
	};
	pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
	  if (!state.unicodeProperties.binary.test(nameOrValue))
	    { state.raise("Invalid property name"); }
	};

	// UnicodePropertyName ::
	//   UnicodePropertyNameCharacters
	pp$8.regexp_eatUnicodePropertyName = function(state) {
	  var ch = 0;
	  state.lastStringValue = "";
	  while (isUnicodePropertyNameCharacter(ch = state.current())) {
	    state.lastStringValue += codePointToString(ch);
	    state.advance();
	  }
	  return state.lastStringValue !== ""
	};
	function isUnicodePropertyNameCharacter(ch) {
	  return isControlLetter(ch) || ch === 0x5F /* _ */
	}

	// UnicodePropertyValue ::
	//   UnicodePropertyValueCharacters
	pp$8.regexp_eatUnicodePropertyValue = function(state) {
	  var ch = 0;
	  state.lastStringValue = "";
	  while (isUnicodePropertyValueCharacter(ch = state.current())) {
	    state.lastStringValue += codePointToString(ch);
	    state.advance();
	  }
	  return state.lastStringValue !== ""
	};
	function isUnicodePropertyValueCharacter(ch) {
	  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
	}

	// LoneUnicodePropertyNameOrValue ::
	//   UnicodePropertyValueCharacters
	pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
	  return this.regexp_eatUnicodePropertyValue(state)
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
	pp$8.regexp_eatCharacterClass = function(state) {
	  if (state.eat(0x5B /* [ */)) {
	    state.eat(0x5E /* ^ */);
	    this.regexp_classRanges(state);
	    if (state.eat(0x5D /* [ */)) {
	      return true
	    }
	    // Unreachable since it threw "unterminated regular expression" error before.
	    state.raise("Unterminated character class");
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
	// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
	// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
	pp$8.regexp_classRanges = function(state) {
	  while (this.regexp_eatClassAtom(state)) {
	    var left = state.lastIntValue;
	    if (state.eat(0x2D /* - */) && this.regexp_eatClassAtom(state)) {
	      var right = state.lastIntValue;
	      if (state.switchU && (left === -1 || right === -1)) {
	        state.raise("Invalid character class");
	      }
	      if (left !== -1 && right !== -1 && left > right) {
	        state.raise("Range out of order in character class");
	      }
	    }
	  }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
	// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
	pp$8.regexp_eatClassAtom = function(state) {
	  var start = state.pos;

	  if (state.eat(0x5C /* \ */)) {
	    if (this.regexp_eatClassEscape(state)) {
	      return true
	    }
	    if (state.switchU) {
	      // Make the same message as V8.
	      var ch$1 = state.current();
	      if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
	        state.raise("Invalid class escape");
	      }
	      state.raise("Invalid escape");
	    }
	    state.pos = start;
	  }

	  var ch = state.current();
	  if (ch !== 0x5D /* [ */) {
	    state.lastIntValue = ch;
	    state.advance();
	    return true
	  }

	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
	pp$8.regexp_eatClassEscape = function(state) {
	  var start = state.pos;

	  if (state.eat(0x62 /* b */)) {
	    state.lastIntValue = 0x08; /* <BS> */
	    return true
	  }

	  if (state.switchU && state.eat(0x2D /* - */)) {
	    state.lastIntValue = 0x2D; /* - */
	    return true
	  }

	  if (!state.switchU && state.eat(0x63 /* c */)) {
	    if (this.regexp_eatClassControlLetter(state)) {
	      return true
	    }
	    state.pos = start;
	  }

	  return (
	    this.regexp_eatCharacterClassEscape(state) ||
	    this.regexp_eatCharacterEscape(state)
	  )
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
	pp$8.regexp_eatClassControlLetter = function(state) {
	  var ch = state.current();
	  if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
	    state.lastIntValue = ch % 0x20;
	    state.advance();
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
	pp$8.regexp_eatHexEscapeSequence = function(state) {
	  var start = state.pos;
	  if (state.eat(0x78 /* x */)) {
	    if (this.regexp_eatFixedHexDigits(state, 2)) {
	      return true
	    }
	    if (state.switchU) {
	      state.raise("Invalid escape");
	    }
	    state.pos = start;
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
	pp$8.regexp_eatDecimalDigits = function(state) {
	  var start = state.pos;
	  var ch = 0;
	  state.lastIntValue = 0;
	  while (isDecimalDigit(ch = state.current())) {
	    state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
	    state.advance();
	  }
	  return state.pos !== start
	};
	function isDecimalDigit(ch) {
	  return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
	pp$8.regexp_eatHexDigits = function(state) {
	  var start = state.pos;
	  var ch = 0;
	  state.lastIntValue = 0;
	  while (isHexDigit(ch = state.current())) {
	    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
	    state.advance();
	  }
	  return state.pos !== start
	};
	function isHexDigit(ch) {
	  return (
	    (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
	    (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
	    (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
	  )
	}
	function hexToInt(ch) {
	  if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
	    return 10 + (ch - 0x41 /* A */)
	  }
	  if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
	    return 10 + (ch - 0x61 /* a */)
	  }
	  return ch - 0x30 /* 0 */
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
	// Allows only 0-377(octal) i.e. 0-255(decimal).
	pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
	  if (this.regexp_eatOctalDigit(state)) {
	    var n1 = state.lastIntValue;
	    if (this.regexp_eatOctalDigit(state)) {
	      var n2 = state.lastIntValue;
	      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
	        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
	      } else {
	        state.lastIntValue = n1 * 8 + n2;
	      }
	    } else {
	      state.lastIntValue = n1;
	    }
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
	pp$8.regexp_eatOctalDigit = function(state) {
	  var ch = state.current();
	  if (isOctalDigit(ch)) {
	    state.lastIntValue = ch - 0x30; /* 0 */
	    state.advance();
	    return true
	  }
	  state.lastIntValue = 0;
	  return false
	};
	function isOctalDigit(ch) {
	  return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
	// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
	// And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
	pp$8.regexp_eatFixedHexDigits = function(state, length) {
	  var start = state.pos;
	  state.lastIntValue = 0;
	  for (var i = 0; i < length; ++i) {
	    var ch = state.current();
	    if (!isHexDigit(ch)) {
	      state.pos = start;
	      return false
	    }
	    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
	    state.advance();
	  }
	  return true
	};

	// Object type used to represent tokens. Note that normally, tokens
	// simply exist as properties on the parser object. This is only
	// used for the onToken callback and the external tokenizer.

	var Token = function Token(p) {
	  this.type = p.type;
	  this.value = p.value;
	  this.start = p.start;
	  this.end = p.end;
	  if (p.options.locations)
	    { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
	  if (p.options.ranges)
	    { this.range = [p.start, p.end]; }
	};

	// ## Tokenizer

	var pp$9 = Parser.prototype;

	// Move to the next token

	pp$9.next = function() {
	  if (this.options.onToken)
	    { this.options.onToken(new Token(this)); }

	  this.lastTokEnd = this.end;
	  this.lastTokStart = this.start;
	  this.lastTokEndLoc = this.endLoc;
	  this.lastTokStartLoc = this.startLoc;
	  this.nextToken();
	};

	pp$9.getToken = function() {
	  this.next();
	  return new Token(this)
	};

	// If we're in an ES6 environment, make parsers iterable
	if (typeof Symbol !== "undefined")
	  { pp$9[Symbol.iterator] = function() {
	    var this$1 = this;

	    return {
	      next: function () {
	        var token = this$1.getToken();
	        return {
	          done: token.type === types.eof,
	          value: token
	        }
	      }
	    }
	  }; }

	// Toggle strict mode. Re-reads the next number or string to please
	// pedantic tests (`"use strict"; 010;` should fail).

	pp$9.curContext = function() {
	  return this.context[this.context.length - 1]
	};

	// Read a single token, updating the parser object's token-related
	// properties.

	pp$9.nextToken = function() {
	  var curContext = this.curContext();
	  if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

	  this.start = this.pos;
	  if (this.options.locations) { this.startLoc = this.curPosition(); }
	  if (this.pos >= this.input.length) { return this.finishToken(types.eof) }

	  if (curContext.override) { return curContext.override(this) }
	  else { this.readToken(this.fullCharCodeAtPos()); }
	};

	pp$9.readToken = function(code) {
	  // Identifier or keyword. '\uXXXX' sequences are allowed in
	  // identifiers, so '\' also dispatches to that.
	  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
	    { return this.readWord() }

	  return this.getTokenFromCode(code)
	};

	pp$9.fullCharCodeAtPos = function() {
	  var code = this.input.charCodeAt(this.pos);
	  if (code <= 0xd7ff || code >= 0xe000) { return code }
	  var next = this.input.charCodeAt(this.pos + 1);
	  return (code << 10) + next - 0x35fdc00
	};

	pp$9.skipBlockComment = function() {
	  var startLoc = this.options.onComment && this.curPosition();
	  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
	  if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
	  this.pos = end + 2;
	  if (this.options.locations) {
	    lineBreakG.lastIndex = start;
	    var match;
	    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
	      ++this.curLine;
	      this.lineStart = match.index + match[0].length;
	    }
	  }
	  if (this.options.onComment)
	    { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
	                           startLoc, this.curPosition()); }
	};

	pp$9.skipLineComment = function(startSkip) {
	  var start = this.pos;
	  var startLoc = this.options.onComment && this.curPosition();
	  var ch = this.input.charCodeAt(this.pos += startSkip);
	  while (this.pos < this.input.length && !isNewLine(ch)) {
	    ch = this.input.charCodeAt(++this.pos);
	  }
	  if (this.options.onComment)
	    { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
	                           startLoc, this.curPosition()); }
	};

	// Called at the start of the parse and after every token. Skips
	// whitespace and comments, and.

	pp$9.skipSpace = function() {
	  loop: while (this.pos < this.input.length) {
	    var ch = this.input.charCodeAt(this.pos);
	    switch (ch) {
	    case 32: case 160: // ' '
	      ++this.pos;
	      break
	    case 13:
	      if (this.input.charCodeAt(this.pos + 1) === 10) {
	        ++this.pos;
	      }
	    case 10: case 8232: case 8233:
	      ++this.pos;
	      if (this.options.locations) {
	        ++this.curLine;
	        this.lineStart = this.pos;
	      }
	      break
	    case 47: // '/'
	      switch (this.input.charCodeAt(this.pos + 1)) {
	      case 42: // '*'
	        this.skipBlockComment();
	        break
	      case 47:
	        this.skipLineComment(2);
	        break
	      default:
	        break loop
	      }
	      break
	    default:
	      if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
	        ++this.pos;
	      } else {
	        break loop
	      }
	    }
	  }
	};

	// Called at the end of every token. Sets `end`, `val`, and
	// maintains `context` and `exprAllowed`, and skips the space after
	// the token, so that the next one's `start` will point at the
	// right position.

	pp$9.finishToken = function(type, val) {
	  this.end = this.pos;
	  if (this.options.locations) { this.endLoc = this.curPosition(); }
	  var prevType = this.type;
	  this.type = type;
	  this.value = val;

	  this.updateContext(prevType);
	};

	// ### Token reading

	// This is the function that is called to fetch the next token. It
	// is somewhat obscure, because it works in character codes rather
	// than characters, and because operator parsing has been inlined
	// into it.
	//
	// All in the name of speed.
	//
	pp$9.readToken_dot = function() {
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next >= 48 && next <= 57) { return this.readNumber(true) }
	  var next2 = this.input.charCodeAt(this.pos + 2);
	  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
	    this.pos += 3;
	    return this.finishToken(types.ellipsis)
	  } else {
	    ++this.pos;
	    return this.finishToken(types.dot)
	  }
	};

	pp$9.readToken_slash = function() { // '/'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
	  if (next === 61) { return this.finishOp(types.assign, 2) }
	  return this.finishOp(types.slash, 1)
	};

	pp$9.readToken_mult_modulo_exp = function(code) { // '%*'
	  var next = this.input.charCodeAt(this.pos + 1);
	  var size = 1;
	  var tokentype = code === 42 ? types.star : types.modulo;

	  // exponentiation operator ** and **=
	  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
	    ++size;
	    tokentype = types.starstar;
	    next = this.input.charCodeAt(this.pos + 2);
	  }

	  if (next === 61) { return this.finishOp(types.assign, size + 1) }
	  return this.finishOp(tokentype, size)
	};

	pp$9.readToken_pipe_amp = function(code) { // '|&'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next === code) { return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2) }
	  if (next === 61) { return this.finishOp(types.assign, 2) }
	  return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1)
	};

	pp$9.readToken_caret = function() { // '^'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next === 61) { return this.finishOp(types.assign, 2) }
	  return this.finishOp(types.bitwiseXOR, 1)
	};

	pp$9.readToken_plus_min = function(code) { // '+-'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next === code) {
	    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
	        (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
	      // A `-->` line comment
	      this.skipLineComment(3);
	      this.skipSpace();
	      return this.nextToken()
	    }
	    return this.finishOp(types.incDec, 2)
	  }
	  if (next === 61) { return this.finishOp(types.assign, 2) }
	  return this.finishOp(types.plusMin, 1)
	};

	pp$9.readToken_lt_gt = function(code) { // '<>'
	  var next = this.input.charCodeAt(this.pos + 1);
	  var size = 1;
	  if (next === code) {
	    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
	    if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types.assign, size + 1) }
	    return this.finishOp(types.bitShift, size)
	  }
	  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
	      this.input.charCodeAt(this.pos + 3) === 45) {
	    // `<!--`, an XML-style comment that should be interpreted as a line comment
	    this.skipLineComment(4);
	    this.skipSpace();
	    return this.nextToken()
	  }
	  if (next === 61) { size = 2; }
	  return this.finishOp(types.relational, size)
	};

	pp$9.readToken_eq_excl = function(code) { // '=!'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next === 61) { return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
	  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
	    this.pos += 2;
	    return this.finishToken(types.arrow)
	  }
	  return this.finishOp(code === 61 ? types.eq : types.prefix, 1)
	};

	pp$9.getTokenFromCode = function(code) {
	  switch (code) {
	  // The interpretation of a dot depends on whether it is followed
	  // by a digit or another two dots.
	  case 46: // '.'
	    return this.readToken_dot()

	  // Punctuation tokens.
	  case 40: ++this.pos; return this.finishToken(types.parenL)
	  case 41: ++this.pos; return this.finishToken(types.parenR)
	  case 59: ++this.pos; return this.finishToken(types.semi)
	  case 44: ++this.pos; return this.finishToken(types.comma)
	  case 91: ++this.pos; return this.finishToken(types.bracketL)
	  case 93: ++this.pos; return this.finishToken(types.bracketR)
	  case 123: ++this.pos; return this.finishToken(types.braceL)
	  case 125: ++this.pos; return this.finishToken(types.braceR)
	  case 58: ++this.pos; return this.finishToken(types.colon)
	  case 63: ++this.pos; return this.finishToken(types.question)

	  case 96: // '`'
	    if (this.options.ecmaVersion < 6) { break }
	    ++this.pos;
	    return this.finishToken(types.backQuote)

	  case 48: // '0'
	    var next = this.input.charCodeAt(this.pos + 1);
	    if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
	    if (this.options.ecmaVersion >= 6) {
	      if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
	      if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
	    }

	  // Anything else beginning with a digit is an integer, octal
	  // number, or float.
	  case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
	    return this.readNumber(false)

	  // Quotes produce strings.
	  case 34: case 39: // '"', "'"
	    return this.readString(code)

	  // Operators are parsed inline in tiny state machines. '=' (61) is
	  // often referred to. `finishOp` simply skips the amount of
	  // characters it is given as second argument, and returns a token
	  // of the type given by its first argument.

	  case 47: // '/'
	    return this.readToken_slash()

	  case 37: case 42: // '%*'
	    return this.readToken_mult_modulo_exp(code)

	  case 124: case 38: // '|&'
	    return this.readToken_pipe_amp(code)

	  case 94: // '^'
	    return this.readToken_caret()

	  case 43: case 45: // '+-'
	    return this.readToken_plus_min(code)

	  case 60: case 62: // '<>'
	    return this.readToken_lt_gt(code)

	  case 61: case 33: // '=!'
	    return this.readToken_eq_excl(code)

	  case 126: // '~'
	    return this.finishOp(types.prefix, 1)
	  }

	  this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
	};

	pp$9.finishOp = function(type, size) {
	  var str = this.input.slice(this.pos, this.pos + size);
	  this.pos += size;
	  return this.finishToken(type, str)
	};

	pp$9.readRegexp = function() {
	  var escaped, inClass, start = this.pos;
	  for (;;) {
	    if (this.pos >= this.input.length) { this.raise(start, "Unterminated regular expression"); }
	    var ch = this.input.charAt(this.pos);
	    if (lineBreak.test(ch)) { this.raise(start, "Unterminated regular expression"); }
	    if (!escaped) {
	      if (ch === "[") { inClass = true; }
	      else if (ch === "]" && inClass) { inClass = false; }
	      else if (ch === "/" && !inClass) { break }
	      escaped = ch === "\\";
	    } else { escaped = false; }
	    ++this.pos;
	  }
	  var pattern = this.input.slice(start, this.pos);
	  ++this.pos;
	  var flagsStart = this.pos;
	  var flags = this.readWord1();
	  if (this.containsEsc) { this.unexpected(flagsStart); }

	  // Validate pattern
	  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
	  state.reset(start, pattern, flags);
	  this.validateRegExpFlags(state);
	  this.validateRegExpPattern(state);

	  // Create Literal#value property value.
	  var value = null;
	  try {
	    value = new RegExp(pattern, flags);
	  } catch (e) {
	    // ESTree requires null if it failed to instantiate RegExp object.
	    // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
	  }

	  return this.finishToken(types.regexp, {pattern: pattern, flags: flags, value: value})
	};

	// Read an integer in the given radix. Return null if zero digits
	// were read, the integer value otherwise. When `len` is given, this
	// will return `null` unless the integer has exactly `len` digits.

	pp$9.readInt = function(radix, len) {
	  var start = this.pos, total = 0;
	  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
	    var code = this.input.charCodeAt(this.pos), val = (void 0);
	    if (code >= 97) { val = code - 97 + 10; } // a
	    else if (code >= 65) { val = code - 65 + 10; } // A
	    else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
	    else { val = Infinity; }
	    if (val >= radix) { break }
	    ++this.pos;
	    total = total * radix + val;
	  }
	  if (this.pos === start || len != null && this.pos - start !== len) { return null }

	  return total
	};

	pp$9.readRadixNumber = function(radix) {
	  var start = this.pos;
	  this.pos += 2; // 0x
	  var val = this.readInt(radix);
	  if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
	  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
	    val = typeof BigInt !== "undefined" ? BigInt(this.input.slice(start, this.pos)) : null;
	    ++this.pos;
	  } else if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
	  return this.finishToken(types.num, val)
	};

	// Read an integer, octal integer, or floating-point number.

	pp$9.readNumber = function(startsWithDot) {
	  var start = this.pos;
	  if (!startsWithDot && this.readInt(10) === null) { this.raise(start, "Invalid number"); }
	  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
	  if (octal && this.strict) { this.raise(start, "Invalid number"); }
	  if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
	  var next = this.input.charCodeAt(this.pos);
	  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
	    var str$1 = this.input.slice(start, this.pos);
	    var val$1 = typeof BigInt !== "undefined" ? BigInt(str$1) : null;
	    ++this.pos;
	    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
	    return this.finishToken(types.num, val$1)
	  }
	  if (next === 46 && !octal) { // '.'
	    ++this.pos;
	    this.readInt(10);
	    next = this.input.charCodeAt(this.pos);
	  }
	  if ((next === 69 || next === 101) && !octal) { // 'eE'
	    next = this.input.charCodeAt(++this.pos);
	    if (next === 43 || next === 45) { ++this.pos; } // '+-'
	    if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
	  }
	  if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

	  var str = this.input.slice(start, this.pos);
	  var val = octal ? parseInt(str, 8) : parseFloat(str);
	  return this.finishToken(types.num, val)
	};

	// Read a string value, interpreting backslash-escapes.

	pp$9.readCodePoint = function() {
	  var ch = this.input.charCodeAt(this.pos), code;

	  if (ch === 123) { // '{'
	    if (this.options.ecmaVersion < 6) { this.unexpected(); }
	    var codePos = ++this.pos;
	    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
	    ++this.pos;
	    if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
	  } else {
	    code = this.readHexChar(4);
	  }
	  return code
	};

	function codePointToString$1(code) {
	  // UTF-16 Decoding
	  if (code <= 0xFFFF) { return String.fromCharCode(code) }
	  code -= 0x10000;
	  return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
	}

	pp$9.readString = function(quote) {
	  var out = "", chunkStart = ++this.pos;
	  for (;;) {
	    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated string constant"); }
	    var ch = this.input.charCodeAt(this.pos);
	    if (ch === quote) { break }
	    if (ch === 92) { // '\'
	      out += this.input.slice(chunkStart, this.pos);
	      out += this.readEscapedChar(false);
	      chunkStart = this.pos;
	    } else {
	      if (isNewLine(ch, this.options.ecmaVersion >= 10)) { this.raise(this.start, "Unterminated string constant"); }
	      ++this.pos;
	    }
	  }
	  out += this.input.slice(chunkStart, this.pos++);
	  return this.finishToken(types.string, out)
	};

	// Reads template string tokens.

	var INVALID_TEMPLATE_ESCAPE_ERROR = {};

	pp$9.tryReadTemplateToken = function() {
	  this.inTemplateElement = true;
	  try {
	    this.readTmplToken();
	  } catch (err) {
	    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
	      this.readInvalidTemplateToken();
	    } else {
	      throw err
	    }
	  }

	  this.inTemplateElement = false;
	};

	pp$9.invalidStringToken = function(position, message) {
	  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
	    throw INVALID_TEMPLATE_ESCAPE_ERROR
	  } else {
	    this.raise(position, message);
	  }
	};

	pp$9.readTmplToken = function() {
	  var out = "", chunkStart = this.pos;
	  for (;;) {
	    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated template"); }
	    var ch = this.input.charCodeAt(this.pos);
	    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '`', '${'
	      if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
	        if (ch === 36) {
	          this.pos += 2;
	          return this.finishToken(types.dollarBraceL)
	        } else {
	          ++this.pos;
	          return this.finishToken(types.backQuote)
	        }
	      }
	      out += this.input.slice(chunkStart, this.pos);
	      return this.finishToken(types.template, out)
	    }
	    if (ch === 92) { // '\'
	      out += this.input.slice(chunkStart, this.pos);
	      out += this.readEscapedChar(true);
	      chunkStart = this.pos;
	    } else if (isNewLine(ch)) {
	      out += this.input.slice(chunkStart, this.pos);
	      ++this.pos;
	      switch (ch) {
	      case 13:
	        if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; }
	      case 10:
	        out += "\n";
	        break
	      default:
	        out += String.fromCharCode(ch);
	        break
	      }
	      if (this.options.locations) {
	        ++this.curLine;
	        this.lineStart = this.pos;
	      }
	      chunkStart = this.pos;
	    } else {
	      ++this.pos;
	    }
	  }
	};

	// Reads a template token to search for the end, without validating any escape sequences
	pp$9.readInvalidTemplateToken = function() {
	  for (; this.pos < this.input.length; this.pos++) {
	    switch (this.input[this.pos]) {
	    case "\\":
	      ++this.pos;
	      break

	    case "$":
	      if (this.input[this.pos + 1] !== "{") {
	        break
	      }
	    // falls through

	    case "`":
	      return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos))

	    // no default
	    }
	  }
	  this.raise(this.start, "Unterminated template");
	};

	// Used to read escaped characters

	pp$9.readEscapedChar = function(inTemplate) {
	  var ch = this.input.charCodeAt(++this.pos);
	  ++this.pos;
	  switch (ch) {
	  case 110: return "\n" // 'n' -> '\n'
	  case 114: return "\r" // 'r' -> '\r'
	  case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
	  case 117: return codePointToString$1(this.readCodePoint()) // 'u'
	  case 116: return "\t" // 't' -> '\t'
	  case 98: return "\b" // 'b' -> '\b'
	  case 118: return "\u000b" // 'v' -> '\u000b'
	  case 102: return "\f" // 'f' -> '\f'
	  case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
	  case 10: // ' \n'
	    if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
	    return ""
	  default:
	    if (ch >= 48 && ch <= 55) {
	      var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
	      var octal = parseInt(octalStr, 8);
	      if (octal > 255) {
	        octalStr = octalStr.slice(0, -1);
	        octal = parseInt(octalStr, 8);
	      }
	      this.pos += octalStr.length - 1;
	      ch = this.input.charCodeAt(this.pos);
	      if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
	        this.invalidStringToken(
	          this.pos - 1 - octalStr.length,
	          inTemplate
	            ? "Octal literal in template string"
	            : "Octal literal in strict mode"
	        );
	      }
	      return String.fromCharCode(octal)
	    }
	    if (isNewLine(ch)) {
	      // Unicode new line characters after \ get removed from output in both
	      // template literals and strings
	      return ""
	    }
	    return String.fromCharCode(ch)
	  }
	};

	// Used to read character escape sequences ('\x', '\u', '\U').

	pp$9.readHexChar = function(len) {
	  var codePos = this.pos;
	  var n = this.readInt(16, len);
	  if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
	  return n
	};

	// Read an identifier, and return it as a string. Sets `this.containsEsc`
	// to whether the word contained a '\u' escape.
	//
	// Incrementally adds only escaped chars, adding other chunks as-is
	// as a micro-optimization.

	pp$9.readWord1 = function() {
	  this.containsEsc = false;
	  var word = "", first = true, chunkStart = this.pos;
	  var astral = this.options.ecmaVersion >= 6;
	  while (this.pos < this.input.length) {
	    var ch = this.fullCharCodeAtPos();
	    if (isIdentifierChar(ch, astral)) {
	      this.pos += ch <= 0xffff ? 1 : 2;
	    } else if (ch === 92) { // "\"
	      this.containsEsc = true;
	      word += this.input.slice(chunkStart, this.pos);
	      var escStart = this.pos;
	      if (this.input.charCodeAt(++this.pos) !== 117) // "u"
	        { this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"); }
	      ++this.pos;
	      var esc = this.readCodePoint();
	      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
	        { this.invalidStringToken(escStart, "Invalid Unicode escape"); }
	      word += codePointToString$1(esc);
	      chunkStart = this.pos;
	    } else {
	      break
	    }
	    first = false;
	  }
	  return word + this.input.slice(chunkStart, this.pos)
	};

	// Read an identifier or keyword token. Will check for reserved
	// words when necessary.

	pp$9.readWord = function() {
	  var word = this.readWord1();
	  var type = types.name;
	  if (this.keywords.test(word)) {
	    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword " + word); }
	    type = keywords$1[word];
	  }
	  return this.finishToken(type, word)
	};

	// The main exported interface (under `self.acorn` when in the
	// browser) is a `parse` function that takes a code string and
	// returns an abstract syntax tree as specified by [Mozilla parser
	// API][api].
	//
	// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

	function parse(input, options) {
	  return Parser.parse(input, options)
	}

	function walk(ast, { enter, leave }) {
		visit(ast, null, enter, leave);
	}

	let shouldSkip = false;
	const context = { skip: () => shouldSkip = true };

	const childKeys = {};

	const toString$1 = Object.prototype.toString;

	function isArray$1(thing) {
		return toString$1.call(thing) === '[object Array]';
	}

	function visit(node, parent, enter, leave, prop, index) {
		if (!node) return;

		if (enter) {
			const _shouldSkip = shouldSkip;
			shouldSkip = false;
			enter.call(context, node, parent, prop, index);
			const skipped = shouldSkip;
			shouldSkip = _shouldSkip;

			if (skipped) return;
		}

		const keys = node.type && childKeys[node.type] || (
			childKeys[node.type] = Object.keys(node).filter(key => typeof node[key] === 'object')
		);

		for (let i = 0; i < keys.length; i += 1) {
			const key = keys[i];
			const value = node[key];

			if (isArray$1(value)) {
				for (let j = 0; j < value.length; j += 1) {
					value[j] && value[j].type && visit(value[j], node, enter, leave, key, j);
				}
			}

			else if (value && value.type) {
				visit(value, node, enter, leave, key, null);
			}
		}

		if (leave) {
			leave(node, parent, prop, index);
		}
	}

	const require = `function require(id) {
	if (id in __repl_lookup) return __repl_lookup[id];
	throw new Error(\`Cannot require modules dynamically (\${id})\`);
}`;

	var commonjs = {
		name: 'commonjs',

		transform: (code, id) => {
			if (!/\b(require|module|exports)\b/.test(code)) return;

			try {
				const ast = parse(code, {
					ecmaVersion: 9
				});

				const requires = [];

				walk(ast, {
					enter: node => {
						if (node.type === 'CallExpression' && node.callee.name === 'require') {
							if (node.arguments.length !== 1) return;
							const arg = node.arguments[0];
							if (arg.type !== 'Literal' || typeof arg.value !== 'string') return;

							requires.push(arg.value);
						}
					}
				});

				const imports = requires.map((id, i) => `import __repl_${i} from '${id}';`).join('\n');
				const lookup = `const __repl_lookup = { ${requires.map((id, i) => `'${id}': __repl_${i}`).join(', ')} };`;

				const transformed = [
					imports,
					lookup,
					require,
					`const exports = {}; const module = { exports };`,
					code,
					`export default module.exports;`
				].join('\n\n');

				return {
					code: transformed,
					map: null
				};
			} catch (err) {
				return null;
			}
		}
	};

	var glsl = {
		name: 'glsl',
		transform: (code, id) => {
			if (!id.endsWith('.glsl')) return;

			return {
				code: `export default ${JSON.stringify(code)};`,
				map: null
			};
		}
	};

	var json = {
		name: 'json',
		transform: (code, id) => {
			if (!id.endsWith('.json')) return;

			return {
				code: `export default ${code};`,
				map: null
			};
		}
	};

	self.window = self; // egregious hack to get magic-string to work in a worker

	let packagesUrl;
	let svelteUrl;
	let current_id;

	self.addEventListener("message", event => {
		switch (event.data.type) {
			case "init":
				packagesUrl = event.data.packagesUrl;
				svelteUrl = event.data.svelteUrl;
				importScripts(`${svelteUrl}/compiler.js`);
				importScripts("/workers/mdsvex.js");
				break;

			case "bundle":
				const { uid, components } = event.data;

				if (components.length === 0) return;

				current_id = uid;

				setTimeout(async () => {
					if (current_id !== uid) return;

					const result = await bundle({ uid, components });

					if (result.error === ABORT) return;
					if (result && uid === current_id) postMessage(result);
				});

				break;
		}
	});

	let cached = {
		dom: {},
		ssr: {}
	};

	const ABORT = { aborted: true };

	const fetch_cache = new Map();
	function fetch_if_uncached(url) {
		if (fetch_cache.has(url)) {
			return fetch_cache.get(url);
		}

		const promise = fetch(url)
			.then(async r => {
				if (r.ok) {
					return {
						url: r.url,
						body: await r.text()
					};
				}

				throw new Error(await r.text());
			})
			.catch(err => {
				fetch_cache.delete(url);
				throw err;
			});

		fetch_cache.set(url, promise);
		return promise;
	}

	async function follow_redirects(url) {
		const res = await fetch_if_uncached(url);
		return res.url;
	}

	function compare_to_version(major, minor, patch) {
		const v = svelte.VERSION.match(/^(\d+)\.(\d+)\.(\d+)/);
		return v[1] - major || v[2] - minor || v[3] - patch;
	}

	function is_legacy_package_structure() {
		return compare_to_version(3, 4, 4) <= 0;
	}

	function has_loopGuardTimeout_feature() {
		return compare_to_version(3, 14, 0) >= 0;
	}

	async function get_bundle(uid, mode, cache, lookup) {
		let bundle;

		const imports = new Set();
		const warnings = [];
		const all_warnings = [];

		const new_cache = {};

		const repl_plugin = {
			async resolveId(importee, importer) {
				if (uid !== current_id) throw ABORT;

				// importing from Svelte
				if (importee === `svelte`) return `${svelteUrl}/index.mjs`;
				if (importee.startsWith(`svelte/`)) {
					return is_legacy_package_structure()
						? `${svelteUrl}/${importee.slice(7)}.mjs`
						: `${svelteUrl}/${importee.slice(7)}/index.mjs`;
				}

				// importing one Svelte runtime module from another
				if (importer && importer.startsWith(svelteUrl)) {
					const resolved = new URL(importee, importer).href;
					if (resolved.endsWith(".mjs")) return resolved;
					return is_legacy_package_structure()
						? `${resolved}.mjs`
						: `${resolved}/index.mjs`;
				}

				// importing from another file in REPL
				if (importee in lookup) return importee;

				// importing from a URL
				if (importee.startsWith("http:") || importee.startsWith("https:"))
					return importee;

				// importing from (probably) unpkg
				if (importee.startsWith(".")) {
					const url = new URL(importee, importer).href;
					self.postMessage({ type: "status", uid, message: `resolving ${url}` });

					return await follow_redirects(url);
				} else {
					// fetch from unpkg
					self.postMessage({
						type: "status",
						uid,
						message: `resolving ${importee}`
					});

					if (importer in lookup) {
						const match = /^(@[^/]+\/)?[^/]+/.exec(importee);
						if (match) imports.add(match[0]);
					}

					try {
						const pkg_url = await follow_redirects(
							`${packagesUrl}/${importee}/package.json`
						);
						const pkg_json = (await fetch_if_uncached(pkg_url)).body;
						const pkg = JSON.parse(pkg_json);

						if (pkg.svelte || pkg.module || pkg.main) {
							const url = pkg_url.replace(/\/package\.json$/, "");
							return new URL(pkg.svelte || pkg.module || pkg.main, `${url}/`)
								.href;
						}
					} catch (err) {
						// ignore
					}

					return await follow_redirects(`${packagesUrl}/${importee}`);
				}
			},
			async load(resolved) {
				if (uid !== current_id) throw ABORT;

				if (resolved in lookup) return lookup[resolved].source;

				if (!fetch_cache.has(resolved)) {
					self.postMessage({
						type: "status",
						uid,
						message: `fetching ${resolved}`
					});
				}

				const res = await fetch_if_uncached(resolved);
				return res.body;
			},
			transform(code, id) {
				if (uid !== current_id) throw ABORT;

				self.postMessage({ type: "status", uid, message: `bundling ${id}` });

				if (!/\.svelte$|\.svexy$/.test(id)) return null;

				const name = id
					.split("/")
					.pop()
					.split(".")[0];

				let preprocessPromise;
				if (cache[id] && cache[id].code === code) {
					return cache[id].result;
				} else if (/\.svexy$/.test(id)) {
					preprocessPromise = self.mdsvex
						.mdsvex()
						.markup({ content: code, filename: id });
				} else {
					preprocessPromise = Promise.resolve({ code });
				}

				// const result = cache[id] && cache[id].code === code
				// 	? cache[id].result
				// 	:
				return preprocessPromise.then(({ code: v }) => {
					console.log("IN PROMISE:", v);
					const result = svelte.compile(
						v,
						Object.assign(
							{
								generate: mode,
								format: "esm",
								dev: true,
								name,
								filename: name + ".svelte"
							},
							has_loopGuardTimeout_feature() && {
								loopGuardTimeout: 100
							}
						)
					);

					new_cache[id] = { v, result };

					(result.warnings || result.stats.warnings).forEach(warning => {
						// TODO remove stats post-launch
						warnings.push({
							message: warning.message,
							filename: warning.filename,
							start: warning.start,
							end: warning.end
						});
					});

					return result.js;
				});
			}
		};

		try {
			bundle = await ol({
				input: "./App.svexy",
				plugins: [repl_plugin, commonjs, json, glsl],
				inlineDynamicImports: true,
				onwarn(warning) {
					all_warnings.push({
						message: warning.message
					});
				}
			});

			return {
				bundle,
				imports: Array.from(imports),
				cache: new_cache,
				error: null,
				warnings,
				all_warnings
			};
		} catch (error) {
			return {
				error,
				imports: null,
				bundle: null,
				cache: new_cache,
				warnings,
				all_warnings
			};
		}
	}

	async function bundle({ uid, components }) {
		// console.clear();
		console.log(
			`running Svelte compiler version %c${svelte.VERSION}`,
			"font-weight: bold"
		);

		const lookup = {};
		components.forEach(component => {
			const path = `./${component.name}.${component.type}`;
			lookup[path] = component;
		});

		let dom;

		try {
			dom = await get_bundle(uid, "dom", cached.dom, lookup);
			if (dom.error) {
				throw dom.error;
			}

			cached.dom = dom.cache;

			const dom_result = (
				await dom.bundle.generate({
					format: "iife",
					name: "SvelteComponent",
					exports: "named",
					sourcemap: true
				})
			).output[0];

			const ssr = false // TODO how can we do SSR?
				? await get_bundle(uid, "ssr", cached.ssr, lookup)
				: null;

			if (ssr) {
				cached.ssr = ssr.cache;
				if (ssr.error) {
					throw ssr.error;
				}
			}

			const ssr_result = ssr
				? (
						await ssr.bundle.generate({
							format: "iife",
							name: "SvelteComponent",
							exports: "named",
							sourcemap: true
						})
				  ).output[0]
				: null;

			return {
				uid,
				dom: dom_result,
				ssr: ssr_result,
				imports: dom.imports,
				warnings: dom.warnings,
				error: null
			};
		} catch (err) {
			console.error(err);

			const e =  err;
			delete e.toString;

			return {
				uid,
				dom: null,
				ssr: null,
				imports: null,
				warnings: dom.warnings,
				error: Object.assign({}, e, {
					message: e.message,
					stack: e.stack
				})
			};
		}
	}

}());