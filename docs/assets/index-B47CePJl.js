(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const ka="182",Al=0,vo=1,Cl=2,Fs=1,zc=2,$i=3,Bn=0,Bt=1,ft=2,fn=0,Ei=1,Hs=2,xo=3,Mo=4,Rl=5,$n=100,Pl=101,Dl=102,Ll=103,Il=104,Ul=200,Nl=201,Fl=202,Ol=203,Xr=204,qr=205,Bl=206,Gl=207,zl=208,kl=209,Vl=210,Hl=211,Wl=212,Xl=213,ql=214,Zr=0,Yr=1,Kr=2,Ci=3,$r=4,jr=5,Jr=6,Qr=7,kc=0,Zl=1,Yl=2,pn=0,Va=1,Ha=2,Wa=3,Ys=4,Xa=5,qa=6,Za=7,Vc=300,ni=301,Ri=302,ea=303,ta=304,Ks=306,na=1e3,bn=1001,ia=1002,Pt=1003,Kl=1004,hs=1005,Ut=1006,or=1007,Qn=1008,Kt=1009,Hc=1010,Wc=1011,Ji=1012,Ya=1013,mn=1014,un=1015,$t=1016,Ka=1017,$a=1018,Qi=1020,Xc=35902,qc=35899,Zc=1021,Yc=1022,on=1023,Tn=1026,ei=1027,Kc=1028,ja=1029,Pi=1030,Ja=1031,Qa=1033,Os=33776,Bs=33777,Gs=33778,zs=33779,sa=35840,ra=35841,aa=35842,oa=35843,ca=36196,la=37492,ha=37496,ua=37488,da=37489,fa=37490,pa=37491,ma=37808,ga=37809,_a=37810,va=37811,xa=37812,Ma=37813,Sa=37814,ya=37815,ba=37816,wa=37817,Ea=37818,Ta=37819,Aa=37820,Ca=37821,Ra=36492,Pa=36494,Da=36495,La=36283,Ia=36284,Ua=36285,Na=36286,$l=3200,$c=0,jl=1,Un="",Qt="srgb",Di="srgb-linear",Ws="linear",Qe="srgb",ai=7680,So=519,Jl=512,Ql=513,eh=514,eo=515,th=516,nh=517,to=518,ih=519,yo=35044,bo="300 es",dn=2e3,Xs=2001;function jc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sh(){const s=qs("canvas");return s.style.display="block",s}const wo={};function Eo(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ue(...s){const e="THREE."+s.shift();console.warn(e,...s)}function je(...s){const e="THREE."+s.shift();console.error(e,...s)}function es(...s){const e=s.join(" ");e in wo||(wo[e]=!0,Ue(...s))}function rh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cr=Math.PI/180,Fa=180/Math.PI;function rs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function ah(s,e){return(s%e+e)%e}function lr(s,e,t){return(1-t)*s+t*e}function Gi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class as{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(u!==x||c!==d||l!==p||h!==_){let m=c*d+l*p+h*_+u*x;m<0&&(d=-d,p=-p,_=-_,x=-x,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);f=Math.sin(f*S)/w,o=Math.sin(o*S)/w,c=c*f+d*o,l=l*f+p*o,h=h*f+_*o,u=u*f+x*o}else{c=c*f+d*o,l=l*f+p*o,h=h*f+_*o,u=u*f+x*o;const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*u+c*p-l*d,e[t+1]=c*_+h*d+l*u-o*p,e[t+2]=l*_+h*p+o*d-c*u,e[t+3]=h*_-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),p=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hr.copy(this).projectOnVector(e),this.sub(hr)}reflect(e){return this.sub(hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new D,To=new as;class Be{constructor(e,t,n,i,r,a,o,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],x=i[0],m=i[3],f=i[6],S=i[1],w=i[4],b=i[7],T=i[2],A=i[5],C=i[8];return r[0]=a*x+o*S+c*T,r[3]=a*m+o*w+c*A,r[6]=a*f+o*b+c*C,r[1]=l*x+h*S+u*T,r[4]=l*m+h*w+u*A,r[7]=l*f+h*b+u*C,r[2]=d*x+p*S+_*T,r[5]=d*m+p*w+_*A,r[8]=d*f+p*b+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,_=t*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ur.makeScale(e,t)),this}rotate(e){return this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Be,Ao=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Co=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oh(){const s={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?Ws:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Di]:{primaries:e,whitePoint:n,transfer:Ws,toXYZ:Ao,fromXYZ:Co,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Ao,fromXYZ:Co,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),s}const Ze=oh();function wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ti(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let oi;class ch{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oi===void 0&&(oi=qs("canvas")),oi.width=e.width,oi.height=e.height;const i=oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lh=0;class no{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(dr(i[a].image)):r.push(dr(i[a]))}else r=dr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function dr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ch.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let hh=0;const fr=new D;class Nt extends Ui{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=bn,i=bn,r=Ut,a=Qn,o=on,c=Kt,l=Nt.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=rs(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fr).x}get height(){return this.source.getSize(fr).y}get depth(){return this.source.getSize(fr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Vc;Nt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,b=(p+1)/2,T=(f+1)/2,A=(h+d)/4,C=(u+x)/4,I=(_+m)/4;return w>b&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=A/n,r=C/n):b>T?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=I/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=I/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uh extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Nt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new no(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ht extends uh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jc extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dh extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),ds.subVectors(this.max,zi),ci.subVectors(e.a,zi),li.subVectors(e.b,zi),hi.subVectors(e.c,zi),An.subVectors(li,ci),Cn.subVectors(hi,li),Vn.subVectors(ci,hi);let t=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-Vn.z,Vn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,Vn.z,0,-Vn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-Vn.y,Vn.x,0];return!pr(t,ci,li,hi,ds)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,ci,li,hi,ds))?!1:(fs.crossVectors(An,Cn),t=[fs.x,fs.y,fs.z],pr(t,ci,li,hi,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vn=[new D,new D,new D,new D,new D,new D,new D,new D],nn=new D,us=new ii,ci=new D,li=new D,hi=new D,An=new D,Cn=new D,Vn=new D,zi=new D,ds=new D,fs=new D,Hn=new D;function pr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hn.fromArray(s,r);const o=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),c=e.dot(Hn),l=t.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const fh=new ii,ki=new D,mr=new D;class $s{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(mr)),this.expandByPoint(ki.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const xn=new D,gr=new D,ps=new D,Rn=new D,_r=new D,ms=new D,vr=new D;class Qc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gr.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(gr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ps),o=Rn.dot(this.direction),c=-Rn.dot(ps),l=Rn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*c-o,d=a*o-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(gr).addScaledVector(ps,d),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,i,r){_r.subVectors(t,e),ms.subVectors(n,e),vr.crossVectors(_r,ms);let a=this.direction.dot(vr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const c=o*this.direction.dot(ms.crossVectors(Rn,ms));if(c<0)return null;const l=o*this.direction.dot(_r.cross(Rn));if(l<0||c+l>a)return null;const h=-o*Rn.dot(vr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,i,r,a,o,c,l,h,u,d,p,_,x,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,p,_,x,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,_=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,_=l*h,x=l*u;t[0]=d+x*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,_=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,p=a*u,_=o*h,x=o*u;t[0]=c*h,t[4]=_*l-p,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=_*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+_,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*c,p=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ph,e,mh)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Pn.crossVectors(n,qt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Pn.crossVectors(n,qt)),Pn.normalize(),gs.crossVectors(qt,Pn),i[0]=Pn.x,i[4]=gs.x,i[8]=qt.x,i[1]=Pn.y,i[5]=gs.y,i[9]=qt.y,i[2]=Pn.z,i[6]=gs.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],f=n[14],S=n[3],w=n[7],b=n[11],T=n[15],A=i[0],C=i[4],I=i[8],v=i[12],y=i[1],P=i[5],O=i[9],B=i[13],X=i[2],q=i[6],H=i[10],z=i[14],Q=i[3],le=i[7],ae=i[11],fe=i[15];return r[0]=a*A+o*y+c*X+l*Q,r[4]=a*C+o*P+c*q+l*le,r[8]=a*I+o*O+c*H+l*ae,r[12]=a*v+o*B+c*z+l*fe,r[1]=h*A+u*y+d*X+p*Q,r[5]=h*C+u*P+d*q+p*le,r[9]=h*I+u*O+d*H+p*ae,r[13]=h*v+u*B+d*z+p*fe,r[2]=_*A+x*y+m*X+f*Q,r[6]=_*C+x*P+m*q+f*le,r[10]=_*I+x*O+m*H+f*ae,r[14]=_*v+x*B+m*z+f*fe,r[3]=S*A+w*y+b*X+T*Q,r[7]=S*C+w*P+b*q+T*le,r[11]=S*I+w*O+b*H+T*ae,r[15]=S*v+w*B+b*z+T*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15],S=c*p-l*d,w=o*p-l*u,b=o*d-c*u,T=a*p-l*h,A=a*d-c*h,C=a*u-o*h;return t*(x*S-m*w+f*b)-n*(_*S-m*T+f*A)+i*(_*w-x*T+f*C)-r*(_*b-x*A+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],S=u*m*l-x*d*l+x*c*p-o*m*p-u*c*f+o*d*f,w=_*d*l-h*m*l-_*c*p+a*m*p+h*c*f-a*d*f,b=h*x*l-_*u*l+_*o*p-a*x*p-h*o*f+a*u*f,T=_*u*c-h*x*c-_*o*d+a*x*d+h*o*m-a*u*m,A=t*S+n*w+i*b+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(x*d*r-u*m*r-x*i*p+n*m*p+u*i*f-n*d*f)*C,e[2]=(o*m*r-x*c*r+x*i*l-n*m*l-o*i*f+n*c*f)*C,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*p-n*c*p)*C,e[4]=w*C,e[5]=(h*m*r-_*d*r+_*i*p-t*m*p-h*i*f+t*d*f)*C,e[6]=(_*c*r-a*m*r-_*i*l+t*m*l+a*i*f-t*c*f)*C,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*p+t*c*p)*C,e[8]=b*C,e[9]=(_*u*r-h*x*r-_*n*p+t*x*p+h*n*f-t*u*f)*C,e[10]=(a*x*r-_*o*r+_*n*l-t*x*l-a*n*f+t*o*f)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*C,e[12]=T*C,e[13]=(h*x*i-_*u*i+_*n*d-t*x*d-h*n*m+t*u*m)*C,e[14]=(_*o*i-a*x*i-_*n*c+t*x*c+a*n*m-t*o*m)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,_=r*u,x=a*h,m=a*u,f=o*u,S=c*l,w=c*h,b=c*u,T=n.x,A=n.y,C=n.z;return i[0]=(1-(x+f))*T,i[1]=(p+b)*T,i[2]=(_-w)*T,i[3]=0,i[4]=(p-b)*A,i[5]=(1-(d+f))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(_+w)*C,i[9]=(m-S)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=ui.set(i[0],i[1],i[2]).length();const a=ui.set(i[4],i[5],i[6]).length(),o=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),sn.copy(this);const l=1/r,h=1/a,u=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=dn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let _,x;if(c)_=r/(a-r),x=a*r/(a-r);else if(o===dn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Xs)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=dn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let _,x;if(c)_=1/(a-r),x=a/(a-r);else if(o===dn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===Xs)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ui=new D,sn=new mt,ph=new D(0,0,0),mh=new D(1,1,1),Pn=new D,gs=new D,qt=new D,Ro=new mt,Po=new as;class gn{constructor(e=0,t=0,n=0,i=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Po.setFromEuler(this),this.setFromQuaternion(Po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gh=0;const Do=new D,di=new as,Mn=new mt,_s=new D,Vi=new D,_h=new D,vh=new as,Lo=new D(1,0,0),Io=new D(0,1,0),Uo=new D(0,0,1),No={type:"added"},xh={type:"removed"},fi={type:"childadded",child:null},xr={type:"childremoved",child:null};class Rt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new D,t=new gn,n=new as,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Be}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Lo,e)}rotateY(e){return this.rotateOnAxis(Io,e)}rotateZ(e){return this.rotateOnAxis(Uo,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lo,e)}translateY(e){return this.translateOnAxis(Io,e)}translateZ(e){return this.translateOnAxis(Uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Vi,_s,this.up):Mn.lookAt(_s,Vi,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(Mn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(No),fi.child=e,this.dispatchEvent(fi),fi.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xh),xr.child=e,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(No),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,_h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new D(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new D,Sn=new D,Mr=new D,yn=new D,pi=new D,mi=new D,Fo=new D,Sr=new D,yr=new D,br=new D,wr=new vt,Er=new vt,Tr=new vt;class an{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rn.subVectors(i,t),Sn.subVectors(n,t),Mr.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Sn),c=rn.dot(Mr),l=Sn.dot(Sn),h=Sn.dot(Mr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return wr.setScalar(0),Er.setScalar(0),Tr.setScalar(0),wr.fromBufferAttribute(e,t),Er.fromBufferAttribute(e,n),Tr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(wr,r.x),a.addScaledVector(Er,r.y),a.addScaledVector(Tr,r.z),a}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Sn.subVectors(e,t),rn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;pi.subVectors(i,n),mi.subVectors(r,n),Sr.subVectors(e,n);const c=pi.dot(Sr),l=mi.dot(Sr);if(c<=0&&l<=0)return t.copy(n);yr.subVectors(e,i);const h=pi.dot(yr),u=mi.dot(yr);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(pi,a);br.subVectors(e,r);const p=pi.dot(br),_=mi.dot(br);if(_>=0&&p<=_)return t.copy(r);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(mi,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Fo.subVectors(r,i),o=(u-h)/(u-h+(p-_)),t.copy(i).addScaledVector(Fo,o);const f=1/(m+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Ar(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=ah(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ar(a,r,e+1/3),this.g=Ar(a,r,e),this.b=Ar(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=tl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ze.workingToColorSpace(Lt.copy(this),e),Math.round(Xe(Lt.r*255,0,255))*65536+Math.round(Xe(Lt.g*255,0,255))*256+Math.round(Xe(Lt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Qt){Ze.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(vs);const n=lr(Dn.h,vs.h,t),i=lr(Dn.s,vs.s,t),r=lr(Dn.l,vs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Le;Le.NAMES=tl;let Mh=0;class Ni extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Ei,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xr,this.blendDst=qr,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xr&&(n.blendSrc=this.blendSrc),this.blendDst!==qr&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ai extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new D,xs=new Ee;let Sh=0;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yo,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),e}}class nl extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class il extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yh=0;const Jt=new mt,Cr=new Rt,gi=new D,Zt=new ii,Hi=new ii,Ct=new D;class xt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jc(e)?il:nl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Zt.min,Hi.min),Zt.expandByPoint(Ct),Ct.addVectors(Zt.max,Hi.max),Zt.expandByPoint(Ct)):(Zt.expandByPoint(Hi.min),Zt.expandByPoint(Hi.max))}Zt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(e,l),Ct.add(gi)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new D,c[I]=new D;const l=new D,h=new D,u=new D,d=new Ee,p=new Ee,_=new Ee,x=new D,m=new D;function f(I,v,y){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,v),_.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),o[I].add(x),o[v].add(x),o[y].add(x),c[I].add(m),c[v].add(m),c[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,v=S.length;I<v;++I){const y=S[I],P=y.start,O=y.count;for(let B=P,X=P+O;B<X;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new D,b=new D,T=new D,A=new D;function C(I){T.fromBufferAttribute(i,I),A.copy(T);const v=o[I];w.copy(v),w.sub(T.multiplyScalar(T.dot(v))).normalize(),b.crossVectors(A,v);const P=b.dot(c[I])<0?-1:1;a.setXYZW(I,w.x,w.y,w.z,P)}for(let I=0,v=S.length;I<v;++I){const y=S[I],P=y.start,O=y.count;for(let B=P,X=P+O;B<X;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let f=0;f<h;f++)d[_++]=l[p++]}return new Gt(d,h,u)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new mt,Wn=new Qc,Ms=new $s,Bo=new D,Ss=new D,ys=new D,bs=new D,Rr=new D,ws=new D,Go=new D,Es=new D;class G extends Rt{constructor(e=new xt,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Rr.fromBufferAttribute(u,e),a?ws.addScaledVector(Rr,h):ws.addScaledVector(Rr.sub(t),h))}t.add(ws)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(Ms.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ms,Bo)===null||Wn.origin.distanceToSquared(Bo)>(e.far-e.near)**2))&&(Oo.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(Oo),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,T=w;b<T;b+=3){const A=o.getX(b),C=o.getX(b+1),I=o.getX(b+2);i=Ts(this,f,e,n,l,h,u,A,C,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const S=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);i=Ts(this,a,e,n,l,h,u,S,w,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,T=w;b<T;b+=3){const A=b,C=b+1,I=b+2;i=Ts(this,f,e,n,l,h,u,A,C,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const S=m,w=m+1,b=m+2;i=Ts(this,a,e,n,l,h,u,S,w,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function bh(s,e,t,n,i,r,a,o){let c;if(e.side===Bt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Bn,o),c===null)return null;Es.copy(o),Es.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Es);return l<t.near||l>t.far?null:{distance:l,point:Es.clone(),object:s}}function Ts(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Ss),s.getVertexPosition(c,ys),s.getVertexPosition(l,bs);const h=bh(s,e,t,n,Ss,ys,bs,Go);if(h){const u=new D;an.getBarycoord(Go,Ss,ys,bs,u),i&&(h.uv=an.getInterpolatedAttribute(i,o,c,l,u,new Ee)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,c,l,u,new Ee)),a&&(h.normal=an.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};an.getNormal(Ss,ys,bs,d.normal),h.face=d,h.barycoord=u}return h}class ke extends xt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function _(x,m,f,S,w,b,T,A,C,I,v){const y=b/C,P=T/I,O=b/2,B=T/2,X=A/2,q=C+1,H=I+1;let z=0,Q=0;const le=new D;for(let ae=0;ae<H;ae++){const fe=ae*P-B;for(let Ge=0;Ge<q;Ge++){const Ne=Ge*y-O;le[x]=Ne*S,le[m]=fe*w,le[f]=X,l.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[f]=A>0?1:-1,h.push(le.x,le.y,le.z),u.push(Ge/C),u.push(1-ae/I),z+=1}}for(let ae=0;ae<I;ae++)for(let fe=0;fe<C;fe++){const Ge=d+fe+q*ae,Ne=d+fe+q*(ae+1),at=d+(fe+1)+q*(ae+1),et=d+(fe+1)+q*ae;c.push(Ge,Ne,et),c.push(Ne,at,et),Q+=6}o.addGroup(p,Q,v),p+=Q,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(s){const e={};for(let t=0;t<s.length;t++){const n=Li(s[t]);for(const i in n)e[i]=n[i]}return e}function wh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const ts={clone:Li,merge:Ot};var Eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eh,this.fragmentShader=Th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rl extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new D,zo=new Ee,ko=new Ee;class en extends rl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,zo,ko),t.subVectors(ko,zo)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class Ah extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(_i,vi,e,t);i.layers=this.layers,this.add(i);const r=new en(_i,vi,e,t);r.layers=this.layers,this.add(r);const a=new en(_i,vi,e,t);a.layers=this.layers,this.add(a);const o=new en(_i,vi,e,t);o.layers=this.layers,this.add(o);const c=new en(_i,vi,e,t);c.layers=this.layers,this.add(c);const l=new en(_i,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class al extends Nt{constructor(e=[],t=ni,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ol extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new al(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ke(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:fn});r.uniforms.tEquirect.value=t;const a=new G(i,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Ut),new Ah(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class De extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ch={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ch)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ns{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new ns(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rh extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ph extends Nt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Pt,h=Pt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dr=new D,Dh=new D,Lh=new Be;class Kn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Dr.subVectors(n,t).cross(Dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Dr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lh.getNormalMatrix(e),i=this.coplanarPoint(Dr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new $s,Ih=new Ee(.5,.5),As=new D;class io{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],_=r[8],x=r[9],m=r[10],f=r[11],S=r[12],w=r[13],b=r[14],T=r[15];if(i[0].setComponents(l-a,p-h,f-_,T-S).normalize(),i[1].setComponents(l+a,p+h,f+_,T+S).normalize(),i[2].setComponents(l+o,p+u,f+x,T+w).normalize(),i[3].setComponents(l-o,p-u,f-x,T-w).normalize(),n)i[4].setComponents(c,d,m,b).normalize(),i[5].setComponents(l-c,p-d,f-m,T-b).normalize();else if(i[4].setComponents(l-c,p-d,f-m,T-b).normalize(),t===dn)i[5].setComponents(l+c,p+d,f+m,T+b).normalize();else if(t===Xs)i[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);const t=Ih.distanceTo(e.center);return Xn.radius=.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(As.x=i.normal.x>0?e.max.x:e.min.x,As.y=i.normal.y>0?e.max.y:e.min.y,As.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class js extends Ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vo=new mt,Oa=new Qc,Cs=new $s,Rs=new D;class so extends Rt{constructor(e=new xt,t=new js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;Vo.copy(i).invert(),Oa.copy(e.ray).applyMatrix4(Vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=d,x=p;_<x;_++){const m=l.getX(_);Rs.fromBufferAttribute(u,m),Ho(Rs,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,x=p;_<x;_++)Rs.fromBufferAttribute(u,_),Ho(Rs,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ho(s,e,t,n,i,r,a){const o=Oa.distanceSqToPoint(s);if(o<t){const c=new D;Oa.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wo extends Nt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class is extends Nt{constructor(e,t,n=mn,i,r,a,o=Pt,c=Pt,l,h=Tn,u=1){if(h!==Tn&&h!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new no(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uh extends is{constructor(e,t=mn,n=ni,i,r,a=Pt,o=Pt,c,l=Tn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cl extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class os extends xt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new D,h=new Ee;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Oe extends xt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const x=[],m=n/2;let f=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(p,2));function S(){const b=new D,T=new D;let A=0;const C=(t-e)/n;for(let I=0;I<=r;I++){const v=[],y=I/r,P=y*(t-e)+e;for(let O=0;O<=i;O++){const B=O/i,X=B*c+o,q=Math.sin(X),H=Math.cos(X);T.x=P*q,T.y=-y*n+m,T.z=P*H,u.push(T.x,T.y,T.z),b.set(q,C,H).normalize(),d.push(b.x,b.y,b.z),p.push(B,1-y),v.push(_++)}x.push(v)}for(let I=0;I<i;I++)for(let v=0;v<r;v++){const y=x[v][I],P=x[v+1][I],O=x[v+1][I+1],B=x[v][I+1];(e>0||v!==0)&&(h.push(y,P,B),A+=3),(t>0||v!==r-1)&&(h.push(P,O,B),A+=3)}l.addGroup(f,A,0),f+=A}function w(b){const T=_,A=new Ee,C=new D;let I=0;const v=b===!0?e:t,y=b===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),_++;const P=_;for(let O=0;O<=i;O++){const X=O/i*c+o,q=Math.cos(X),H=Math.sin(X);C.x=v*H,C.y=m*y,C.z=v*q,u.push(C.x,C.y,C.z),d.push(0,y,0),A.x=q*.5+.5,A.y=H*.5*y+.5,p.push(A.x,A.y),_++}for(let O=0;O<i;O++){const B=T+O,X=P+O;b===!0?h.push(X,X+1,B):h.push(X+1,X,B),I+=3}l.addGroup(f,I,b===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fn extends Oe{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Fn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Js extends xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new D,b=new D,T=new D;for(let A=0;A<t.length;A+=3)p(t[A+0],w),p(t[A+1],b),p(t[A+2],T),c(w,b,T,S)}function c(S,w,b,T){const A=T+1,C=[];for(let I=0;I<=A;I++){C[I]=[];const v=S.clone().lerp(b,I/A),y=w.clone().lerp(b,I/A),P=A-I;for(let O=0;O<=P;O++)O===0&&I===A?C[I][O]=v:C[I][O]=v.clone().lerp(y,O/P)}for(let I=0;I<A;I++)for(let v=0;v<2*(A-I)-1;v++){const y=Math.floor(v/2);v%2===0?(d(C[I][y+1]),d(C[I+1][y]),d(C[I][y])):(d(C[I][y+1]),d(C[I+1][y+1]),d(C[I+1][y]))}}function l(S){const w=new D;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(S),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){const S=new D;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const b=m(S)/2/Math.PI+.5,T=f(S)/Math.PI+.5;a.push(b,1-T)}_(),u()}function u(){for(let S=0;S<a.length;S+=6){const w=a[S+0],b=a[S+2],T=a[S+4],A=Math.max(w,b,T),C=Math.min(w,b,T);A>.9&&C<.1&&(w<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,w){const b=S*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function _(){const S=new D,w=new D,b=new D,T=new D,A=new Ee,C=new Ee,I=new Ee;for(let v=0,y=0;v<r.length;v+=9,y+=6){S.set(r[v+0],r[v+1],r[v+2]),w.set(r[v+3],r[v+4],r[v+5]),b.set(r[v+6],r[v+7],r[v+8]),A.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),T.copy(S).add(w).add(b).divideScalar(3);const P=m(T);x(A,y+0,S,P),x(C,y+2,w,P),x(I,y+4,b,P)}}function x(S,w,b,T){T<0&&S.x===1&&(a[w]=S.x-1),b.x===0&&b.z===0&&(a[w]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.vertices,e.indices,e.radius,e.detail)}}class Qs extends Js{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qs(e.radius,e.detail)}}class ro extends xt{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Xe(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new D,d=new Ee,p=new D,_=new D,x=new D;let m=0,f=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,f=e[S+1].y-e[S].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[S+1].x-e[S].x,f=e[S+1].y-e[S].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(_)}for(let S=0;S<=t;S++){const w=n+S*h*i,b=Math.sin(w),T=Math.cos(w);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*b,u.y=e[A].y,u.z=e[A].x*T,a.push(u.x,u.y,u.z),d.x=S/t,d.y=A/(e.length-1),o.push(d.x,d.y);const C=c[3*A+0]*b,I=c[3*A+1],v=c[3*A+0]*T;l.push(C,I,v)}}for(let S=0;S<t;S++)for(let w=0;w<e.length-1;w++){const b=w+S*e.length,T=b,A=b+e.length,C=b+e.length+1,I=b+1;r.push(T,A,I),r.push(C,I,A)}this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.points,e.segments,e.phiStart,e.phiLength)}}class Zs extends Js{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zs(e.radius,e.detail)}}class It extends xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],_=[],x=[],m=[];for(let f=0;f<h;f++){const S=f*d-a;for(let w=0;w<l;w++){const b=w*u-r;_.push(b,-S,0),x.push(0,0,1),m.push(w/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const w=S+l*f,b=S+l*(f+1),T=S+1+l*(f+1),A=S+1+l*f;p.push(w,b,A),p.push(b,T,A)}this.setIndex(p),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.widthSegments,e.heightSegments)}}class pt extends xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new D,d=new D,p=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const S=[],w=f/n;let b=0;f===0&&a===0?b=.5/t:f===n&&c===Math.PI&&(b=-.5/t);for(let T=0;T<=t;T++){const A=T/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+w*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+b,1-w),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){const w=h[f][S+1],b=h[f][S],T=h[f+1][S],A=h[f+1][S+1];(f!==0||a>0)&&p.push(w,b,A),(f!==n-1||c<Math.PI)&&p.push(b,T,A)}this.setIndex(p),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gn extends xt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new D,u=new D,d=new D;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const x=_/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const x=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,f=(i+1)*(p-1)+_,S=(i+1)*p+_;a.push(x,m,S),a.push(m,f,S)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ll extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class J extends Ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nh extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fh extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ao extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Oh extends ao{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Lr=new mt,Xo=new D,qo=new D;class Bh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xo),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),Lr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class er extends rl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gh extends Bh{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zh extends ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Gh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class kh extends ao{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vh extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zo(s,e,t,n){const i=Hh(n);switch(t){case Zc:return s*e;case Kc:return s*e/i.components*i.byteLength;case ja:return s*e/i.components*i.byteLength;case Pi:return s*e*2/i.components*i.byteLength;case Ja:return s*e*2/i.components*i.byteLength;case Yc:return s*e*3/i.components*i.byteLength;case on:return s*e*4/i.components*i.byteLength;case Qa:return s*e*4/i.components*i.byteLength;case Os:case Bs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gs:case zs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ra:case oa:return Math.max(s,16)*Math.max(e,8)/4;case sa:case aa:return Math.max(s,8)*Math.max(e,8)/2;case ca:case la:case ua:case da:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ha:case fa:case pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case va:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ba:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ra:case Pa:case Da:return Math.ceil(s/4)*Math.ceil(e/4)*16;case La:case Ia:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ua:case Na:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hh(s){switch(s){case Kt:case Hc:return{byteLength:1,components:1};case Ji:case Wc:case $t:return{byteLength:2,components:1};case Ka:case $a:return{byteLength:2,components:4};case mn:case Ya:case un:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);function ul(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wh(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,su=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Od=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ff=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Zh,alphamap_pars_fragment:Yh,alphatest_fragment:Kh,alphatest_pars_fragment:$h,aomap_fragment:jh,aomap_pars_fragment:Jh,batching_pars_vertex:Qh,batching_vertex:eu,begin_vertex:tu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:su,bumpmap_pars_fragment:ru,clipping_planes_fragment:au,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:cu,clipping_planes_vertex:lu,color_fragment:hu,color_pars_fragment:uu,color_pars_vertex:du,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:_u,displacementmap_vertex:vu,emissivemap_fragment:xu,emissivemap_pars_fragment:Mu,colorspace_fragment:Su,colorspace_pars_fragment:yu,envmap_fragment:bu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Eu,envmap_pars_vertex:Tu,envmap_physical_pars_fragment:Ou,envmap_vertex:Au,fog_vertex:Cu,fog_pars_vertex:Ru,fog_fragment:Pu,fog_pars_fragment:Du,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Iu,lights_lambert_fragment:Uu,lights_lambert_pars_fragment:Nu,lights_pars_begin:Fu,lights_toon_fragment:Bu,lights_toon_pars_fragment:Gu,lights_phong_fragment:zu,lights_phong_pars_fragment:ku,lights_physical_fragment:Vu,lights_physical_pars_fragment:Hu,lights_fragment_begin:Wu,lights_fragment_maps:Xu,lights_fragment_end:qu,logdepthbuf_fragment:Zu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:$u,map_fragment:ju,map_pars_fragment:Ju,map_particle_fragment:Qu,map_particle_pars_fragment:ed,metalnessmap_fragment:td,metalnessmap_pars_fragment:nd,morphinstance_vertex:id,morphcolor_vertex:sd,morphnormal_vertex:rd,morphtarget_pars_vertex:ad,morphtarget_vertex:od,normal_fragment_begin:cd,normal_fragment_maps:ld,normal_pars_fragment:hd,normal_pars_vertex:ud,normal_vertex:dd,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:md,clearcoat_pars_fragment:gd,iridescence_pars_fragment:_d,opaque_fragment:vd,packing:xd,premultiplied_alpha_fragment:Md,project_vertex:Sd,dithering_fragment:yd,dithering_pars_fragment:bd,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:Ad,shadowmap_vertex:Cd,shadowmask_pars_fragment:Rd,skinbase_vertex:Pd,skinning_pars_vertex:Dd,skinning_vertex:Ld,skinnormal_vertex:Id,specularmap_fragment:Ud,specularmap_pars_fragment:Nd,tonemapping_fragment:Fd,tonemapping_pars_fragment:Od,transmission_fragment:Bd,transmission_pars_fragment:Gd,uv_pars_fragment:zd,uv_pars_vertex:kd,uv_vertex:Vd,worldpos_vertex:Hd,background_vert:Wd,background_frag:Xd,backgroundCube_vert:qd,backgroundCube_frag:Zd,cube_vert:Yd,cube_frag:Kd,depth_vert:$d,depth_frag:jd,distance_vert:Jd,distance_frag:Qd,equirect_vert:ef,equirect_frag:tf,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:rf,meshbasic_frag:af,meshlambert_vert:of,meshlambert_frag:cf,meshmatcap_vert:lf,meshmatcap_frag:hf,meshnormal_vert:uf,meshnormal_frag:df,meshphong_vert:ff,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:_f,meshtoon_frag:vf,points_vert:xf,points_frag:Mf,shadow_vert:Sf,shadow_frag:yf,sprite_vert:bf,sprite_frag:wf},he={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},hn={basic:{uniforms:Ot([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ot([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ot([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ot([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ot([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ot([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ot([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ot([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ot([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ot([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ot([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Ot([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Ot([he.lights,he.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};hn.physical={uniforms:Ot([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ps={r:0,b:0,g:0},qn=new gn,Ef=new mt;function Tf(s,e,t,n,i,r,a){const o=new Le(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function _(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function x(w){let b=!1;const T=_(w);T===null?f(o,c):T&&T.isColor&&(f(T,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,b){const T=_(b);T&&(T.isCubeTexture||T.mapping===Ks)?(h===void 0&&(h=new G(new ke(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Li(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qn.copy(b.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ef.makeRotationFromEuler(qn)),h.material.toneMapped=Ze.getTransfer(T.colorSpace)!==Qe,(u!==T||d!==T.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new G(new It(2,2),new wt({name:"BackgroundMaterial",uniforms:Li(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(T.colorSpace)!==Qe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,p=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,b){w.getRGB(Ps,sl(s)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,b,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),c=b,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(o,c)},render:x,addToRenderList:m,dispose:S}}function Af(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(y,P,O,B,X){let q=!1;const H=u(B,O,P);r!==H&&(r=H,l(r.object)),q=p(y,B,O,X),q&&_(y,B,O,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(y,P,O,B),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,O){const B=O.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let q=X[P.id];q===void 0&&(q={},X[P.id]=q);let H=q[B];return H===void 0&&(H=d(c()),q[B]=H),H}function d(y){const P=[],O=[],B=[];for(let X=0;X<t;X++)P[X]=0,O[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,P,O,B){const X=r.attributes,q=P.attributes;let H=0;const z=O.getAttributes();for(const Q in z)if(z[Q].location>=0){const ae=X[Q];let fe=q[Q];if(fe===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function _(y,P,O,B){const X={},q=P.attributes;let H=0;const z=O.getAttributes();for(const Q in z)if(z[Q].location>=0){let ae=q[Q];ae===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),X[Q]=fe,H++}r.attributes=X,r.attributesNum=H,r.index=B}function x(){const y=r.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function m(y){f(y,0)}function f(y,P){const O=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;O[y]=1,B[y]===0&&(s.enableVertexAttribArray(y),B[y]=1),X[y]!==P&&(s.vertexAttribDivisor(y,P),X[y]=P)}function S(){const y=r.newAttributes,P=r.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==y[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function w(y,P,O,B,X,q,H){H===!0?s.vertexAttribIPointer(y,P,O,X,q):s.vertexAttribPointer(y,P,O,B,X,q)}function b(y,P,O,B){x();const X=B.attributes,q=O.getAttributes(),H=P.defaultAttributeValues;for(const z in q){const Q=q[z];if(Q.location>=0){let le=X[z];if(le===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const ae=le.normalized,fe=le.itemSize,Ge=e.get(le);if(Ge===void 0)continue;const Ne=Ge.buffer,at=Ge.type,et=Ge.bytesPerElement,Y=at===s.INT||at===s.UNSIGNED_INT||le.gpuType===Ya;if(le.isInterleavedBufferAttribute){const j=le.data,pe=j.stride,Ce=le.offset;if(j.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)f(Q.location+_e,j.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<Q.locationSize;_e++)m(Q.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let _e=0;_e<Q.locationSize;_e++)w(Q.location+_e,fe/Q.locationSize,at,ae,pe*et,(Ce+fe/Q.locationSize*_e)*et,Y)}else{if(le.isInstancedBufferAttribute){for(let j=0;j<Q.locationSize;j++)f(Q.location+j,le.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let j=0;j<Q.locationSize;j++)m(Q.location+j);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let j=0;j<Q.locationSize;j++)w(Q.location+j,fe/Q.locationSize,at,ae,fe*et,fe/Q.locationSize*j*et,Y)}}else if(H!==void 0){const ae=H[z];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(Q.location,ae);break;case 3:s.vertexAttrib3fv(Q.location,ae);break;case 4:s.vertexAttrib4fv(Q.location,ae);break;default:s.vertexAttrib1fv(Q.location,ae)}}}}S()}function T(){I();for(const y in n){const P=n[y];for(const O in P){const B=P[O];for(const X in B)h(B[X].object),delete B[X];delete P[O]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const O in P){const B=P[O];for(const X in B)h(B[X].object),delete B[X];delete P[O]}delete n[y.id]}function C(y){for(const P in n){const O=n[P];if(O[y.id]===void 0)continue;const B=O[y.id];for(const X in B)h(B[X].object),delete B[X];delete O[y.id]}}function I(){v(),a=!0,r!==i&&(r=i,l(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Cf(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*d[x];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==on&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Kt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==un&&!I)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ue("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:b,maxSamples:T,samples:A}}function Pf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Kn,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,w=S*4;let b=f.clippingState||null;c.value=b,b=h(_,d,w,p);for(let T=0;T!==w;++T)b[T]=t[T];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=p+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,b=p;w!==x;++w,b+=4)a.copy(u[w]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Df(s){let e=new WeakMap;function t(a,o){return o===ea?a.mapping=ni:o===ta&&(a.mapping=Ri),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ea||o===ta)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ol(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Nn=4,Yo=[.125,.215,.35,.446,.526,.582],jn=20,Lf=256,Wi=new er,Ko=new Le;let Ir=null,Ur=0,Nr=0,Fr=!1;const If=new D;class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=If}=r;Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ir,Ur,Nr),this._renderer.xr.enabled=Fr,e.scissorTest=!1,xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:$t,format:on,colorSpace:Di,depthBuffer:!1},i=jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Uf(r)),this._blurMaterial=Ff(r,e,t),this._ggxMaterial=Nf(r,e,t)}return i}_compileMaterial(e){const t=new G(new xt,e);this._renderer.compile(t,Wi)}_sceneToCubeUV(e,t,n,i,r){const c=new en(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ko),u.toneMapping=pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new G(new ke,new Ai({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(Ko),f=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):b===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));const T=this._cubeSize;xi(i,b*T,w>2?T:0,T,T),u.setRenderTarget(i),f&&u.render(x,c),u.render(e,c)}u.toneMapping=p,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ni||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;xi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Wi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,p=u*d,{_lodMax:_}=this,x=this._sizeLods[n],m=3*x*(n>_-Nn?n-_+Nn:0),f=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,xi(r,m,f,3*x,2*x),i.setRenderTarget(r),i.render(o,Wi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,xi(e,m,f,3*x,2*x),i.setRenderTarget(e),i.render(o,Wi)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):jn;m>jn&&Ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const f=[];let S=0;for(let C=0;C<jn;++C){const I=C/x,v=Math.exp(-I*I/2);f.push(v),C===0?S+=v:C<m&&(S+=2*v)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-n;const b=this._sizeLods[i],T=3*b*(i>w-Nn?i-w+Nn:0),A=4*(this._cubeSize-b);xi(t,T,A,3*b,2*b),c.setRenderTarget(t),c.render(u,Wi)}}function Uf(s){const e=[],t=[],n=[];let i=s;const r=s-Nn+1+Yo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Nn?c=Yo[a-s+Nn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,x=3,m=2,f=1,S=new Float32Array(x*_*p),w=new Float32Array(m*_*p),b=new Float32Array(f*_*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,I=A>2?0:-1,v=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];S.set(v,x*_*A),w.set(d,m*_*A);const y=[A,A,A,A,A,A];b.set(y,f*_*A)}const T=new xt;T.setAttribute("position",new Gt(S,x)),T.setAttribute("uv",new Gt(w,m)),T.setAttribute("faceIndex",new Gt(b,f)),n.push(new G(T,null)),i>Nn&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function jo(s,e,t){const n=new Ht(s,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Nf(s,e,t){return new wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ff(s,e,t){const n=new Float32Array(jn),i=new D(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Jo(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Qo(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function tr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Of(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ea||c===ta,h=c===ni||c===Ri;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new $o(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new $o(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Bf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&es("WebGLRenderer: "+n+" extension not supported."),i}}}function Gf(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let w=0,b=S.length;w<b;w+=3){const T=S[w+0],A=S[w+1],C=S[w+2];d.push(T,A,A,C,C,T)}}else if(_!==void 0){const S=_.array;x=_.version;for(let w=0,b=S.length/3-1;w<b;w+=3){const T=w+0,A=w+1,C=w+2;d.push(T,A,A,C,C,T)}}else return;const m=new(jc(d)?il:nl)(d,1);m.version=x;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function zf(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,d*a,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,_);let f=0;for(let S=0;S<_;S++)f+=p[S]*x[S];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vf(s,e,t){const n=new WeakMap,i=new vt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let T=o.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*u),I=new Jc(C,T,A,u);I.type=un,I.needsUpdate=!0;const v=b*4;for(let P=0;P<u;P++){const O=f[P],B=S[P],X=w[P],q=T*A*4*P;for(let H=0;H<O.count;H++){const z=H*v;_===!0&&(i.fromBufferAttribute(O,H),C[q+z+0]=i.x,C[q+z+1]=i.y,C[q+z+2]=i.z,C[q+z+3]=0),x===!0&&(i.fromBufferAttribute(B,H),C[q+z+4]=i.x,C[q+z+5]=i.y,C[q+z+6]=i.z,C[q+z+7]=0),m===!0&&(i.fromBufferAttribute(X,H),C[q+z+8]=i.x,C[q+z+9]=i.y,C[q+z+10]=i.z,C[q+z+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Ee(T,A)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Hf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Wf={[Va]:"LINEAR_TONE_MAPPING",[Ha]:"REINHARD_TONE_MAPPING",[Wa]:"CINEON_TONE_MAPPING",[Ys]:"ACES_FILMIC_TONE_MAPPING",[qa]:"AGX_TONE_MAPPING",[Za]:"NEUTRAL_TONE_MAPPING",[Xa]:"CUSTOM_TONE_MAPPING"};function Xf(s,e,t,n,i){const r=new Ht(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Ht(e,t,{type:$t,depthBuffer:!1,stencilBuffer:!1}),o=new xt;o.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new st([0,2,0,0,2,0],2));const c=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new G(o,c),h=new er(-1,1,1,-1,0,1);let u=null,d=null,p=!1,_,x=null,m=[],f=!1;this.setSize=function(S,w){r.setSize(S,w),a.setSize(S,w);for(let b=0;b<m.length;b++){const T=m[b];T.setSize&&T.setSize(S,w)}},this.setEffects=function(S){m=S,f=m.length>0&&m[0].isRenderPass===!0;const w=r.width,b=r.height;for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(w,b)}},this.begin=function(S,w){if(p||S.toneMapping===pn&&m.length===0)return!1;if(x=w,w!==null){const b=w.width,T=w.height;(r.width!==b||r.height!==T)&&this.setSize(b,T)}return f===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=pn,!0},this.hasRenderPass=function(){return f},this.end=function(S,w){S.toneMapping=_,p=!0;let b=r,T=a;for(let A=0;A<m.length;A++){const C=m[A];if(C.enabled!==!1&&(C.render(S,T,b,w),C.needsSwap!==!1)){const I=b;b=T,T=I}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,c.defines={},Ze.getTransfer(u)===Qe&&(c.defines.SRGB_TRANSFER="");const A=Wf[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(x),S.render(l,h),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const dl=new Nt,Ba=new is(1,1),fl=new Jc,pl=new dh,ml=new al,ec=[],tc=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function Fi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ec[i];if(r===void 0&&(r=new Float32Array(i),ec[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function nr(s,e){let t=tc[e];t===void 0&&(t=new Int32Array(e),tc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function qf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function Yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function $f(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;sc.set(n),s.uniformMatrix2fv(this.addr,!1,sc),Tt(t,n)}}function jf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;ic.set(n),s.uniformMatrix3fv(this.addr,!1,ic),Tt(t,n)}}function Jf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;nc.set(n),s.uniformMatrix4fv(this.addr,!1,nc),Tt(t,n)}}function Qf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function ip(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function op(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ba.compareFunction=t.isReversedDepthBuffer()?to:eo,r=Ba):r=dl,t.setTexture2D(e||r,i)}function cp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pl,i)}function lp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ml,i)}function hp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fl,i)}function up(s){switch(s){case 5126:return qf;case 35664:return Zf;case 35665:return Yf;case 35666:return Kf;case 35674:return $f;case 35675:return jf;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return sp;case 36295:return rp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return hp}}function dp(s,e){s.uniform1fv(this.addr,e)}function fp(s,e){const t=Fi(e,this.size,2);s.uniform2fv(this.addr,t)}function pp(s,e){const t=Fi(e,this.size,3);s.uniform3fv(this.addr,t)}function mp(s,e){const t=Fi(e,this.size,4);s.uniform4fv(this.addr,t)}function gp(s,e){const t=Fi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _p(s,e){const t=Fi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vp(s,e){const t=Fi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xp(s,e){s.uniform1iv(this.addr,e)}function Mp(s,e){s.uniform2iv(this.addr,e)}function Sp(s,e){s.uniform3iv(this.addr,e)}function yp(s,e){s.uniform4iv(this.addr,e)}function bp(s,e){s.uniform1uiv(this.addr,e)}function wp(s,e){s.uniform2uiv(this.addr,e)}function Ep(s,e){s.uniform3uiv(this.addr,e)}function Tp(s,e){s.uniform4uiv(this.addr,e)}function Ap(s,e,t){const n=this.cache,i=e.length,r=nr(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ba:a=dl;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Cp(s,e,t){const n=this.cache,i=e.length,r=nr(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||pl,r[a])}function Rp(s,e,t){const n=this.cache,i=e.length,r=nr(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ml,r[a])}function Pp(s,e,t){const n=this.cache,i=e.length,r=nr(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||fl,r[a])}function Dp(s){switch(s){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return _p;case 35676:return vp;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return yp;case 5125:return bp;case 36294:return wp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}}class Lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=up(t.type)}}class Ip{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dp(t.type)}}class Up{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function rc(s,e){s.seq.push(e),s.map[e.id]=e}function Np(s,e,t){const n=s.name,i=n.length;for(Or.lastIndex=0;;){const r=Or.exec(n),a=Or.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){rc(t,l===void 0?new Lp(o,s,e):new Ip(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Up(o),rc(t,u)),t=u}}}class ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Np(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ac(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Fp=37297;let Op=0;function Bp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const oc=new Be;function Gp(s){Ze._getMatrix(oc,Ze.workingColorSpace,s);const e=`mat3( ${oc.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case Ws:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Bp(s.getShaderSource(e),o)}else return r}function zp(s,e){const t=Gp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const kp={[Va]:"Linear",[Ha]:"Reinhard",[Wa]:"Cineon",[Ys]:"ACESFilmic",[qa]:"AgX",[Za]:"Neutral",[Xa]:"Custom"};function Vp(s,e){const t=kp[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ds=new D;function Hp(){Ze.getLuminanceCoefficients(Ds);const s=Ds.x.toFixed(4),e=Ds.y.toFixed(4),t=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function Xp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ji(s){return s!==""}function lc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(s){return s.replace(Zp,Kp)}const Yp=new Map;function Kp(s,e){let t=ze[e];if(t===void 0){const n=Yp.get(e);if(n!==void 0)t=ze[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}const $p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(s){return s.replace($p,jp)}function jp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Jp={[Fs]:"SHADOWMAP_TYPE_PCF",[$i]:"SHADOWMAP_TYPE_VSM"};function Qp(s){return Jp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const em={[ni]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE_UV"};function tm(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":em[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const nm={[Ri]:"ENVMAP_MODE_REFRACTION"};function im(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":nm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sm={[kc]:"ENVMAP_BLENDING_MULTIPLY",[Zl]:"ENVMAP_BLENDING_MIX",[Yl]:"ENVMAP_BLENDING_ADD"};function rm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":sm[s.combine]||"ENVMAP_BLENDING_NONE"}function am(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function om(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Qp(t),l=tm(t),h=im(t),u=rm(t),d=am(t),p=Wp(t),_=Xp(r),x=i.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ji).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ji).join(`
`),f.length>0&&(f+=`
`)):(m=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),f=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?ze.tonemapping_pars_fragment:"",t.toneMapping!==pn?Vp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,zp("linearToOutputTexel",t.outputColorSpace),Hp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),a=Ga(a),a=lc(a,t),a=hc(a,t),o=Ga(o),o=lc(o,t),o=hc(o,t),a=uc(a),o=uc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=S+m+a,b=S+f+o,T=ac(i,i.VERTEX_SHADER,w),A=ac(i,i.FRAGMENT_SHADER,b);i.attachShader(x,T),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(T)||"",X=i.getShaderInfoLog(A)||"",q=O.trim(),H=B.trim(),z=X.trim();let Q=!0,le=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,A);else{const ae=cc(i,T,"vertex"),fe=cc(i,A,"fragment");je("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+ae+`
`+fe)}else q!==""?Ue("WebGLProgram: Program Info Log:",q):(H===""||z==="")&&(le=!1);le&&(P.diagnostics={runnable:Q,programLog:q,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:f}})}i.deleteShader(T),i.deleteShader(A),I=new ks(i,x),v=qp(i,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,Fp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Op++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}let cm=0;class lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hm(e),t.set(e,n)),n}}class hm{constructor(e){this.id=cm++,this.code=e,this.usedTimes=0}}function um(s,e,t,n,i,r,a){const o=new el,c=new lm,l=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,y,P,O,B){const X=O.fog,q=B.geometry,H=v.isMeshStandardMaterial?O.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),Q=z&&z.mapping===Ks?z.image.height:null,le=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&Ue("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=ae!==void 0?ae.length:0;let Ge=0;q.morphAttributes.position!==void 0&&(Ge=1),q.morphAttributes.normal!==void 0&&(Ge=2),q.morphAttributes.color!==void 0&&(Ge=3);let Ne,at,et,Y;if(le){const nt=hn[le];Ne=nt.vertexShader,at=nt.fragmentShader}else Ne=v.vertexShader,at=v.fragmentShader,c.update(v),et=c.getVertexShaderID(v),Y=c.getFragmentShaderID(v);const j=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,_e=B.isBatchedMesh===!0,Ke=!!v.map,At=!!v.matcap,Ye=!!z,tt=!!v.aoMap,ot=!!v.lightMap,Ve=!!v.bumpMap,Mt=!!v.normalMap,R=!!v.displacementMap,St=!!v.emissiveMap,Je=!!v.metalnessMap,lt=!!v.roughnessMap,Se=v.anisotropy>0,E=v.clearcoat>0,g=v.dispersion>0,U=v.iridescence>0,Z=v.sheen>0,$=v.transmission>0,W=Se&&!!v.anisotropyMap,be=E&&!!v.clearcoatMap,se=E&&!!v.clearcoatNormalMap,Me=E&&!!v.clearcoatRoughnessMap,Pe=U&&!!v.iridescenceMap,te=U&&!!v.iridescenceThicknessMap,oe=Z&&!!v.sheenColorMap,xe=Z&&!!v.sheenRoughnessMap,ye=!!v.specularMap,re=!!v.specularColorMap,He=!!v.specularIntensityMap,L=$&&!!v.transmissionMap,de=$&&!!v.thicknessMap,ne=!!v.gradientMap,me=!!v.alphaMap,ee=v.alphaTest>0,K=!!v.alphaHash,ie=!!v.extensions;let Ie=pn;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=s.toneMapping);const ht={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:at,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:_e,batchingColor:_e&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Di,alphaToCoverage:!!v.alphaToCoverage,map:Ke,matcap:At,envMap:Ye,envMapMode:Ye&&z.mapping,envMapCubeUVHeight:Q,aoMap:tt,lightMap:ot,bumpMap:Ve,normalMap:Mt,displacementMap:R,emissiveMap:St,normalMapObjectSpace:Mt&&v.normalMapType===jl,normalMapTangentSpace:Mt&&v.normalMapType===$c,metalnessMap:Je,roughnessMap:lt,anisotropy:Se,anisotropyMap:W,clearcoat:E,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:g,iridescence:U,iridescenceMap:Pe,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:oe,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:re,specularIntensityMap:He,transmission:$,transmissionMap:L,thicknessMap:de,gradientMap:ne,opaque:v.transparent===!1&&v.blending===Ei&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:K,combine:v.combine,mapUv:Ke&&x(v.map.channel),aoMapUv:tt&&x(v.aoMap.channel),lightMapUv:ot&&x(v.lightMap.channel),bumpMapUv:Ve&&x(v.bumpMap.channel),normalMapUv:Mt&&x(v.normalMap.channel),displacementMapUv:R&&x(v.displacementMap.channel),emissiveMapUv:St&&x(v.emissiveMap.channel),metalnessMapUv:Je&&x(v.metalnessMap.channel),roughnessMapUv:lt&&x(v.roughnessMap.channel),anisotropyMapUv:W&&x(v.anisotropyMap.channel),clearcoatMapUv:be&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(v.sheenRoughnessMap.channel),specularMapUv:ye&&x(v.specularMap.channel),specularColorMapUv:re&&x(v.specularColorMap.channel),specularIntensityMapUv:He&&x(v.specularIntensityMap.channel),transmissionMapUv:L&&x(v.transmissionMap.channel),thicknessMapUv:de&&x(v.thicknessMap.channel),alphaMapUv:me&&x(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Mt||Se),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(Ke||me),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ke&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===Qe,decodeVideoTextureEmissive:St&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ft,flipSided:v.side===Bt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function f(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)y.push(P),y.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(S(y,v),w(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function S(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function w(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function b(v){const y=_[v.type];let P;if(y){const O=hn[y];P=ts.clone(O.uniforms)}else P=v.uniforms;return P}function T(v,y){let P=u.get(y);return P!==void 0?++P.usedTimes:(P=new om(s,y,v,r),h.push(P),u.set(y,P)),P}function A(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function C(v){c.remove(v)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:I}}function dm(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function fm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,_,x,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function o(u,d,p,_,x,m){const f=a(u,d,p,_,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,_,x,m){const f=a(u,d,p,_,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||fm),n.length>1&&n.sort(d||fc),i.length>1&&i.sort(d||fc)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function pm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new pc,s.set(n,[a])):i>=r.length?(a=new pc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function mm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Le};break;case"SpotLight":t={position:new D,direction:new D,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function gm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _m=0;function vm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xm(s){const e=new mm,t=gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,r=new mt,a=new mt;function o(l){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,S=0,w=0,b=0,T=0,A=0,C=0;l.sort(vm);for(let v=0,y=l.length;v<y;v++){const P=l[v],O=P.color,B=P.intensity,X=P.distance;let q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Pi?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],B);C++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,Q=t.get(P);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(B),H.distance=X,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[x]=H;const z=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[x]=z.matrix,P.castShadow){const Q=t.get(P);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=q,b++}x++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const z=P.shadow,Q=t.get(P);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,Q.shadowCameraNear=z.camera.near,Q.shadowCameraFar=z.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,w++}n.point[_]=H,_++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==b||I.numSpotMaps!==T||I.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.directionalLength=p,I.pointLength=_,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=b,I.numSpotMaps=T,I.numLightProbes=C,n.version=_m++)}function c(l,h){let u=0,d=0,p=0,_=0,x=0;const m=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const w=l[f];if(w.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(w.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function mc(s){const e=new xm(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Mm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new mc(s),e.set(i,[o])):r>=a.length?(o=new mc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bm=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],wm=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],gc=new mt,Xi=new D,Br=new D;function Em(s,e,t){let n=new io;const i=new Ee,r=new Ee,a=new vt,o=new Nh,c=new Fh,l={},h=t.maxTextureSize,u={[Bn]:Bt,[Bt]:Bn,[ft]:ft},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Sm,fragmentShader:ym}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new xt;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new G(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let f=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===zc&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=Fs);const v=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(fn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==this.type;B&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(q=>q.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,q=A.length;X<q;X++){const H=A[X],z=H.shadow;if(z===void 0){Ue("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Q=z.getFrameExtents();if(i.multiply(Q),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,z.mapSize.y=r.y)),z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===$i){if(H.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ht(i.x,i.y,{format:Pi,type:$t,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new is(i.x,i.y,un),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=Tn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pt,z.map.depthTexture.magFilter=Pt}else{H.isPointLight?(z.map=new ol(i.x),z.map.depthTexture=new Uh(i.x,mn)):(z.map=new Ht(i.x,i.y),z.map.depthTexture=new is(i.x,i.y,mn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=Tn;const ae=s.state.buffers.depth.getReversed();this.type===Fs?(z.map.depthTexture.compareFunction=ae?to:eo,z.map.depthTexture.minFilter=Ut,z.map.depthTexture.magFilter=Ut):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pt,z.map.depthTexture.magFilter=Pt)}z.camera.updateProjectionMatrix()}const le=z.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<le;ae++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,ae),s.clear();else{ae===0&&(s.setRenderTarget(z.map),s.clear());const fe=z.getViewport(ae);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),O.viewport(a)}if(H.isPointLight){const fe=z.camera,Ge=z.matrix,Ne=H.distance||fe.far;Ne!==fe.far&&(fe.far=Ne,fe.updateProjectionMatrix()),Xi.setFromMatrixPosition(H.matrixWorld),fe.position.copy(Xi),Br.copy(fe.position),Br.add(bm[ae]),fe.up.copy(wm[ae]),fe.lookAt(Br),fe.updateMatrixWorld(),Ge.makeTranslation(-Xi.x,-Xi.y,-Xi.z),gc.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(gc,fe.coordinateSystem,fe.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),b(C,I,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===$i&&S(z,I),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(v,y,P)};function S(A,C){const I=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ht(i.x,i.y,{format:Pi,type:$t})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,I,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,I,p,x,null)}function w(A,C,I,v){let y=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=I.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=y.uuid,B=C.uuid;let X=l[O];X===void 0&&(X={},l[O]=X);let q=X[B];q===void 0&&(q=y.clone(),X[B]=q,C.addEventListener("dispose",T)),y=q}if(y.visible=C.visible,y.wireframe=C.wireframe,v===$i?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=I}return y}function b(A,C,I,v,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===$i)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const B=e.update(A),X=A.material;if(Array.isArray(X)){const q=B.groups;for(let H=0,z=q.length;H<z;H++){const Q=q[H],le=X[Q.materialIndex];if(le&&le.visible){const ae=w(A,le,v,y);A.onBeforeShadow(s,A,C,I,B,ae,Q),s.renderBufferDirect(I,null,B,ae,A,Q),A.onAfterShadow(s,A,C,I,B,ae,Q)}}}else if(X.visible){const q=w(A,X,v,y);A.onBeforeShadow(s,A,C,I,B,q,null),s.renderBufferDirect(I,null,B,q,A,null),A.onAfterShadow(s,A,C,I,B,q,null)}}const O=A.children;for(let B=0,X=O.length;B<X;B++)b(O[B],C,I,v,y)}function T(A){A.target.removeEventListener("dispose",T);for(const I in l){const v=l[I],y=A.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const Tm={[Zr]:Yr,[Kr]:Jr,[$r]:Qr,[Ci]:jr,[Yr]:Zr,[Jr]:Kr,[Qr]:$r,[jr]:Ci};function Am(s,e){function t(){let L=!1;const de=new vt;let ne=null;const me=new vt(0,0,0,0);return{setMask:function(ee){ne!==ee&&!L&&(s.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){L=ee},setClear:function(ee,K,ie,Ie,ht){ht===!0&&(ee*=Ie,K*=Ie,ie*=Ie),de.set(ee,K,ie,Ie),me.equals(de)===!1&&(s.clearColor(ee,K,ie,Ie),me.copy(de))},reset:function(){L=!1,ne=null,me.set(-1,0,0,0)}}}function n(){let L=!1,de=!1,ne=null,me=null,ee=null;return{setReversed:function(K){if(de!==K){const ie=e.get("EXT_clip_control");K?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),de=K;const Ie=ee;ee=null,this.setClear(Ie)}},getReversed:function(){return de},setTest:function(K){K?j(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(K){ne!==K&&!L&&(s.depthMask(K),ne=K)},setFunc:function(K){if(de&&(K=Tm[K]),me!==K){switch(K){case Zr:s.depthFunc(s.NEVER);break;case Yr:s.depthFunc(s.ALWAYS);break;case Kr:s.depthFunc(s.LESS);break;case Ci:s.depthFunc(s.LEQUAL);break;case $r:s.depthFunc(s.EQUAL);break;case jr:s.depthFunc(s.GEQUAL);break;case Jr:s.depthFunc(s.GREATER);break;case Qr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=K}},setLocked:function(K){L=K},setClear:function(K){ee!==K&&(de&&(K=1-K),s.clearDepth(K),ee=K)},reset:function(){L=!1,ne=null,me=null,ee=null,de=!1}}}function i(){let L=!1,de=null,ne=null,me=null,ee=null,K=null,ie=null,Ie=null,ht=null;return{setTest:function(nt){L||(nt?j(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(nt){de!==nt&&!L&&(s.stencilMask(nt),de=nt)},setFunc:function(nt,cn,_n){(ne!==nt||me!==cn||ee!==_n)&&(s.stencilFunc(nt,cn,_n),ne=nt,me=cn,ee=_n)},setOp:function(nt,cn,_n){(K!==nt||ie!==cn||Ie!==_n)&&(s.stencilOp(nt,cn,_n),K=nt,ie=cn,Ie=_n)},setLocked:function(nt){L=nt},setClear:function(nt){ht!==nt&&(s.clearStencil(nt),ht=nt)},reset:function(){L=!1,de=null,ne=null,me=null,ee=null,K=null,ie=null,Ie=null,ht=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,S=null,w=null,b=null,T=null,A=null,C=new Le(0,0,0),I=0,v=!1,y=null,P=null,O=null,B=null,X=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=z>=1):Q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=z>=2);let le=null,ae={};const fe=s.getParameter(s.SCISSOR_BOX),Ge=s.getParameter(s.VIEWPORT),Ne=new vt().fromArray(fe),at=new vt().fromArray(Ge);function et(L,de,ne,me){const ee=new Uint8Array(4),K=s.createTexture();s.bindTexture(L,K),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<ne;ie++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(de+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return K}const Y={};Y[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(Ci),Ve(!1),Mt(vo),j(s.CULL_FACE),tt(fn);function j(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function pe(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ce(L,de){return u[L]!==de?(s.bindFramebuffer(L,de),u[L]=de,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=de),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=de),!0):!1}function _e(L,de){let ne=p,me=!1;if(L){ne=d.get(de),ne===void 0&&(ne=[],d.set(de,ne));const ee=L.textures;if(ne.length!==ee.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let K=0,ie=ee.length;K<ie;K++)ne[K]=s.COLOR_ATTACHMENT0+K;ne.length=ee.length,me=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,me=!0);me&&s.drawBuffers(ne)}function Ke(L){return _!==L?(s.useProgram(L),_=L,!0):!1}const At={[$n]:s.FUNC_ADD,[Pl]:s.FUNC_SUBTRACT,[Dl]:s.FUNC_REVERSE_SUBTRACT};At[Ll]=s.MIN,At[Il]=s.MAX;const Ye={[Ul]:s.ZERO,[Nl]:s.ONE,[Fl]:s.SRC_COLOR,[Xr]:s.SRC_ALPHA,[Vl]:s.SRC_ALPHA_SATURATE,[zl]:s.DST_COLOR,[Bl]:s.DST_ALPHA,[Ol]:s.ONE_MINUS_SRC_COLOR,[qr]:s.ONE_MINUS_SRC_ALPHA,[kl]:s.ONE_MINUS_DST_COLOR,[Gl]:s.ONE_MINUS_DST_ALPHA,[Hl]:s.CONSTANT_COLOR,[Wl]:s.ONE_MINUS_CONSTANT_COLOR,[Xl]:s.CONSTANT_ALPHA,[ql]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(L,de,ne,me,ee,K,ie,Ie,ht,nt){if(L===fn){x===!0&&(pe(s.BLEND),x=!1);return}if(x===!1&&(j(s.BLEND),x=!0),L!==Rl){if(L!==m||nt!==v){if((f!==$n||b!==$n)&&(s.blendEquation(s.FUNC_ADD),f=$n,b=$n),nt)switch(L){case Ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hs:s.blendFunc(s.ONE,s.ONE);break;case xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:je("WebGLState: Invalid blending: ",L);break}else switch(L){case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case xo:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mo:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",L);break}S=null,w=null,T=null,A=null,C.set(0,0,0),I=0,m=L,v=nt}return}ee=ee||de,K=K||ne,ie=ie||me,(de!==f||ee!==b)&&(s.blendEquationSeparate(At[de],At[ee]),f=de,b=ee),(ne!==S||me!==w||K!==T||ie!==A)&&(s.blendFuncSeparate(Ye[ne],Ye[me],Ye[K],Ye[ie]),S=ne,w=me,T=K,A=ie),(Ie.equals(C)===!1||ht!==I)&&(s.blendColor(Ie.r,Ie.g,Ie.b,ht),C.copy(Ie),I=ht),m=L,v=!1}function ot(L,de){L.side===ft?pe(s.CULL_FACE):j(s.CULL_FACE);let ne=L.side===Bt;de&&(ne=!ne),Ve(ne),L.blending===Ei&&L.transparent===!1?tt(fn):tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),St(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){y!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),y=L)}function Mt(L){L!==Al?(j(s.CULL_FACE),L!==P&&(L===vo?s.cullFace(s.BACK):L===Cl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),P=L}function R(L){L!==O&&(H&&s.lineWidth(L),O=L)}function St(L,de,ne){L?(j(s.POLYGON_OFFSET_FILL),(B!==de||X!==ne)&&(s.polygonOffset(de,ne),B=de,X=ne)):pe(s.POLYGON_OFFSET_FILL)}function Je(L){L?j(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function lt(L){L===void 0&&(L=s.TEXTURE0+q-1),le!==L&&(s.activeTexture(L),le=L)}function Se(L,de,ne){ne===void 0&&(le===null?ne=s.TEXTURE0+q-1:ne=le);let me=ae[ne];me===void 0&&(me={type:void 0,texture:void 0},ae[ne]=me),(me.type!==L||me.texture!==de)&&(le!==ne&&(s.activeTexture(ne),le=ne),s.bindTexture(L,de||Y[L]),me.type=L,me.texture=de)}function E(){const L=ae[le];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{s.compressedTexImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function Z(){try{s.texSubImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function $(){try{s.texSubImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function se(){try{s.texStorage2D(...arguments)}catch(L){je("WebGLState:",L)}}function Me(){try{s.texStorage3D(...arguments)}catch(L){je("WebGLState:",L)}}function Pe(){try{s.texImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function te(){try{s.texImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function oe(L){Ne.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ne.copy(L))}function xe(L){at.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),at.copy(L))}function ye(L,de){let ne=l.get(de);ne===void 0&&(ne=new WeakMap,l.set(de,ne));let me=ne.get(L);me===void 0&&(me=s.getUniformBlockIndex(de,L.name),ne.set(L,me))}function re(L,de){const me=l.get(de).get(L);c.get(de)!==me&&(s.uniformBlockBinding(de,me,L.__bindingPointIndex),c.set(de,me))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},le=null,ae={},u={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,S=null,w=null,b=null,T=null,A=null,C=new Le(0,0,0),I=0,v=!1,y=null,P=null,O=null,B=null,X=null,Ne.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:pe,bindFramebuffer:Ce,drawBuffers:_e,useProgram:Ke,setBlending:tt,setMaterial:ot,setFlipSided:Ve,setCullFace:Mt,setLineWidth:R,setPolygonOffset:St,setScissorTest:Je,activeTexture:lt,bindTexture:Se,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:Pe,texImage3D:te,updateUBOMapping:ye,uniformBlockBinding:re,texStorage2D:se,texStorage3D:Me,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:be,scissor:oe,viewport:xe,reset:He}}function Cm(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return p?new OffscreenCanvas(E,g):qs("canvas")}function x(E,g,U){let Z=1;const $=Se(E);if(($.width>U||$.height>U)&&(Z=U/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(Z*$.width),be=Math.floor(Z*$.height);u===void 0&&(u=_(W,be));const se=g?_(W,be):u;return se.width=W,se.height=be,se.getContext("2d").drawImage(E,0,0,W,be),Ue("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+be+")."),se}else return"data"in E&&Ue("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(E,g,U,Z,$=!1){if(E!==null){if(s[E]!==void 0)return s[E];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=g;if(g===s.RED&&(U===s.FLOAT&&(W=s.R32F),U===s.HALF_FLOAT&&(W=s.R16F),U===s.UNSIGNED_BYTE&&(W=s.R8)),g===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(W=s.R8UI),U===s.UNSIGNED_SHORT&&(W=s.R16UI),U===s.UNSIGNED_INT&&(W=s.R32UI),U===s.BYTE&&(W=s.R8I),U===s.SHORT&&(W=s.R16I),U===s.INT&&(W=s.R32I)),g===s.RG&&(U===s.FLOAT&&(W=s.RG32F),U===s.HALF_FLOAT&&(W=s.RG16F),U===s.UNSIGNED_BYTE&&(W=s.RG8)),g===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(W=s.RG8UI),U===s.UNSIGNED_SHORT&&(W=s.RG16UI),U===s.UNSIGNED_INT&&(W=s.RG32UI),U===s.BYTE&&(W=s.RG8I),U===s.SHORT&&(W=s.RG16I),U===s.INT&&(W=s.RG32I)),g===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(W=s.RGB8UI),U===s.UNSIGNED_SHORT&&(W=s.RGB16UI),U===s.UNSIGNED_INT&&(W=s.RGB32UI),U===s.BYTE&&(W=s.RGB8I),U===s.SHORT&&(W=s.RGB16I),U===s.INT&&(W=s.RGB32I)),g===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),U===s.UNSIGNED_INT&&(W=s.RGBA32UI),U===s.BYTE&&(W=s.RGBA8I),U===s.SHORT&&(W=s.RGBA16I),U===s.INT&&(W=s.RGBA32I)),g===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),g===s.RGBA){const be=$?Ws:Ze.getTransfer(Z);U===s.FLOAT&&(W=s.RGBA32F),U===s.HALF_FLOAT&&(W=s.RGBA16F),U===s.UNSIGNED_BYTE&&(W=be===Qe?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function b(E,g){let U;return E?g===null||g===mn||g===Qi?U=s.DEPTH24_STENCIL8:g===un?U=s.DEPTH32F_STENCIL8:g===Ji&&(U=s.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===mn||g===Qi?U=s.DEPTH_COMPONENT24:g===un?U=s.DEPTH_COMPONENT32F:g===Ji&&(U=s.DEPTH_COMPONENT16),U}function T(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==Ut?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function A(E){const g=E.target;g.removeEventListener("dispose",A),I(g),g.isVideoTexture&&h.delete(g)}function C(E){const g=E.target;g.removeEventListener("dispose",C),y(g)}function I(E){const g=n.get(E);if(g.__webglInit===void 0)return;const U=E.source,Z=d.get(U);if(Z){const $=Z[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(E),Object.keys(Z).length===0&&d.delete(U)}n.remove(E)}function v(E){const g=n.get(E);s.deleteTexture(g.__webglTexture);const U=E.source,Z=d.get(U);delete Z[g.__cacheKey],a.memory.textures--}function y(E){const g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let $=0;$<g.__webglFramebuffer[Z].length;$++)s.deleteFramebuffer(g.__webglFramebuffer[Z][$]);else s.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)s.deleteFramebuffer(g.__webglFramebuffer[Z]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=E.textures;for(let Z=0,$=U.length;Z<$;Z++){const W=n.get(U[Z]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(U[Z])}n.remove(E)}let P=0;function O(){P=0}function B(){const E=P;return E>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function X(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function q(E,g){const U=n.get(E);if(E.isVideoTexture&&Je(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const Z=E.image;if(Z===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,E,g);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+g)}function H(E,g){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Y(U,E,g);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+g)}function z(E,g){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Y(U,E,g);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+g)}function Q(E,g){const U=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){j(U,E,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+g)}const le={[na]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[ia]:s.MIRRORED_REPEAT},ae={[Pt]:s.NEAREST,[Kl]:s.NEAREST_MIPMAP_NEAREST,[hs]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[or]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},fe={[Jl]:s.NEVER,[ih]:s.ALWAYS,[Ql]:s.LESS,[eo]:s.LEQUAL,[eh]:s.EQUAL,[to]:s.GEQUAL,[th]:s.GREATER,[nh]:s.NOTEQUAL};function Ge(E,g){if(g.type===un&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ut||g.magFilter===or||g.magFilter===hs||g.magFilter===Qn||g.minFilter===Ut||g.minFilter===or||g.minFilter===hs||g.minFilter===Qn)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,le[g.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,le[g.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,le[g.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ae[g.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ae[g.minFilter]),g.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==hs&&g.minFilter!==Qn||g.type===un&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ne(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",A));const Z=g.source;let $=d.get(Z);$===void 0&&($={},d.set(Z,$));const W=X(g);if(W!==E.__cacheKey){$[W]===void 0&&($[W]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[W].usedTimes++;const be=$[E.__cacheKey];be!==void 0&&($[E.__cacheKey].usedTimes--,be.usedTimes===0&&v(g)),E.__cacheKey=W,E.__webglTexture=$[W].texture}return U}function at(E,g,U){return Math.floor(Math.floor(E/U)/g)}function et(E,g,U,Z){const W=E.updateRanges;if(W.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,U,Z,g.data);else{W.sort((te,oe)=>te.start-oe.start);let be=0;for(let te=1;te<W.length;te++){const oe=W[be],xe=W[te],ye=oe.start+oe.count,re=at(xe.start,g.width,4),He=at(oe.start,g.width,4);xe.start<=ye+1&&re===He&&at(xe.start+xe.count-1,g.width,4)===re?oe.count=Math.max(oe.count,xe.start+xe.count-oe.start):(++be,W[be]=xe)}W.length=be+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),Me=s.getParameter(s.UNPACK_SKIP_PIXELS),Pe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let te=0,oe=W.length;te<oe;te++){const xe=W[te],ye=Math.floor(xe.start/4),re=Math.ceil(xe.count/4),He=ye%g.width,L=Math.floor(ye/g.width),de=re,ne=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,He,L,de,ne,U,Z,g.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function Y(E,g,U){let Z=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=s.TEXTURE_3D);const $=Ne(E,g),W=g.source;t.bindTexture(Z,E.__webglTexture,s.TEXTURE0+U);const be=n.get(W);if(W.version!==be.__version||$===!0){t.activeTexture(s.TEXTURE0+U);const se=Ze.getPrimaries(Ze.workingColorSpace),Me=g.colorSpace===Un?null:Ze.getPrimaries(g.colorSpace),Pe=g.colorSpace===Un||se===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let te=x(g.image,!1,i.maxTextureSize);te=lt(g,te);const oe=r.convert(g.format,g.colorSpace),xe=r.convert(g.type);let ye=w(g.internalFormat,oe,xe,g.colorSpace,g.isVideoTexture);Ge(Z,g);let re;const He=g.mipmaps,L=g.isVideoTexture!==!0,de=be.__version===void 0||$===!0,ne=W.dataReady,me=T(g,te);if(g.isDepthTexture)ye=b(g.format===ei,g.type),de&&(L?t.texStorage2D(s.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,ye,te.width,te.height,0,oe,xe,null));else if(g.isDataTexture)if(He.length>0){L&&de&&t.texStorage2D(s.TEXTURE_2D,me,ye,He[0].width,He[0].height);for(let ee=0,K=He.length;ee<K;ee++)re=He[ee],L?ne&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,re.width,re.height,oe,xe,re.data):t.texImage2D(s.TEXTURE_2D,ee,ye,re.width,re.height,0,oe,xe,re.data);g.generateMipmaps=!1}else L?(de&&t.texStorage2D(s.TEXTURE_2D,me,ye,te.width,te.height),ne&&et(g,te,oe,xe)):t.texImage2D(s.TEXTURE_2D,0,ye,te.width,te.height,0,oe,xe,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,ye,He[0].width,He[0].height,te.depth);for(let ee=0,K=He.length;ee<K;ee++)if(re=He[ee],g.format!==on)if(oe!==null)if(L){if(ne)if(g.layerUpdates.size>0){const ie=Zo(re.width,re.height,g.format,g.type);for(const Ie of g.layerUpdates){const ht=re.data.subarray(Ie*ie/re.data.BYTES_PER_ELEMENT,(Ie+1)*ie/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Ie,re.width,re.height,1,oe,ht)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,te.depth,oe,re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,ye,re.width,re.height,te.depth,0,re.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,te.depth,oe,xe,re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,ye,re.width,re.height,te.depth,0,oe,xe,re.data)}else{L&&de&&t.texStorage2D(s.TEXTURE_2D,me,ye,He[0].width,He[0].height);for(let ee=0,K=He.length;ee<K;ee++)re=He[ee],g.format!==on?oe!==null?L?ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,ye,re.width,re.height,0,re.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,re.width,re.height,oe,xe,re.data):t.texImage2D(s.TEXTURE_2D,ee,ye,re.width,re.height,0,oe,xe,re.data)}else if(g.isDataArrayTexture)if(L){if(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,ye,te.width,te.height,te.depth),ne)if(g.layerUpdates.size>0){const ee=Zo(te.width,te.height,g.format,g.type);for(const K of g.layerUpdates){const ie=te.data.subarray(K*ee/te.data.BYTES_PER_ELEMENT,(K+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,oe,xe,ie)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,xe,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,oe,xe,te.data);else if(g.isData3DTexture)L?(de&&t.texStorage3D(s.TEXTURE_3D,me,ye,te.width,te.height,te.depth),ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,xe,te.data)):t.texImage3D(s.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,oe,xe,te.data);else if(g.isFramebufferTexture){if(de)if(L)t.texStorage2D(s.TEXTURE_2D,me,ye,te.width,te.height);else{let ee=te.width,K=te.height;for(let ie=0;ie<me;ie++)t.texImage2D(s.TEXTURE_2D,ie,ye,ee,K,0,oe,xe,null),ee>>=1,K>>=1}}else if(He.length>0){if(L&&de){const ee=Se(He[0]);t.texStorage2D(s.TEXTURE_2D,me,ye,ee.width,ee.height)}for(let ee=0,K=He.length;ee<K;ee++)re=He[ee],L?ne&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,oe,xe,re):t.texImage2D(s.TEXTURE_2D,ee,ye,oe,xe,re);g.generateMipmaps=!1}else if(L){if(de){const ee=Se(te);t.texStorage2D(s.TEXTURE_2D,me,ye,ee.width,ee.height)}ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,xe,te)}else t.texImage2D(s.TEXTURE_2D,0,ye,oe,xe,te);m(g)&&f(Z),be.__version=W.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function j(E,g,U){if(g.image.length!==6)return;const Z=Ne(E,g),$=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);const W=n.get($);if($.version!==W.__version||Z===!0){t.activeTexture(s.TEXTURE0+U);const be=Ze.getPrimaries(Ze.workingColorSpace),se=g.colorSpace===Un?null:Ze.getPrimaries(g.colorSpace),Me=g.colorSpace===Un||be===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Pe=g.isCompressedTexture||g.image[0].isCompressedTexture,te=g.image[0]&&g.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!Pe&&!te?oe[K]=x(g.image[K],!0,i.maxCubemapSize):oe[K]=te?g.image[K].image:g.image[K],oe[K]=lt(g,oe[K]);const xe=oe[0],ye=r.convert(g.format,g.colorSpace),re=r.convert(g.type),He=w(g.internalFormat,ye,re,g.colorSpace),L=g.isVideoTexture!==!0,de=W.__version===void 0||Z===!0,ne=$.dataReady;let me=T(g,xe);Ge(s.TEXTURE_CUBE_MAP,g);let ee;if(Pe){L&&de&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,He,xe.width,xe.height);for(let K=0;K<6;K++){ee=oe[K].mipmaps;for(let ie=0;ie<ee.length;ie++){const Ie=ee[ie];g.format!==on?ye!==null?L?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Ie.width,Ie.height,ye,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,He,Ie.width,Ie.height,0,Ie.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Ie.width,Ie.height,ye,re,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,He,Ie.width,Ie.height,0,ye,re,Ie.data)}}}else{if(ee=g.mipmaps,L&&de){ee.length>0&&me++;const K=Se(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,He,K.width,K.height)}for(let K=0;K<6;K++)if(te){L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,ye,re,oe[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,oe[K].width,oe[K].height,0,ye,re,oe[K].data);for(let ie=0;ie<ee.length;ie++){const ht=ee[ie].image[K].image;L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ht.width,ht.height,ye,re,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,He,ht.width,ht.height,0,ye,re,ht.data)}}else{L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,re,oe[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,ye,re,oe[K]);for(let ie=0;ie<ee.length;ie++){const Ie=ee[ie];L?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ye,re,Ie.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,He,ye,re,Ie.image[K])}}}m(g)&&f(s.TEXTURE_CUBE_MAP),W.__version=$.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function pe(E,g,U,Z,$,W){const be=r.convert(U.format,U.colorSpace),se=r.convert(U.type),Me=w(U.internalFormat,be,se,U.colorSpace),Pe=n.get(g),te=n.get(U);if(te.__renderTarget=g,!Pe.__hasExternalTextures){const oe=Math.max(1,g.width>>W),xe=Math.max(1,g.height>>W);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,W,Me,oe,xe,g.depth,0,be,se,null):t.texImage2D($,W,Me,oe,xe,0,be,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),St(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,te.__webglTexture,0,R(g)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,te.__webglTexture,W),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(E,g,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),g.depthBuffer){const Z=g.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,W=b(g.stencilBuffer,$),be=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;St(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(g),W,g.width,g.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(g),W,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,W,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,E)}else{const Z=g.textures;for(let $=0;$<Z.length;$++){const W=Z[$],be=r.convert(W.format,W.colorSpace),se=r.convert(W.type),Me=w(W.internalFormat,be,se,W.colorSpace);St(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(g),Me,g.width,g.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(g),Me,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,Me,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(E,g,U){const Z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(g.depthTexture);if($.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if($.__webglInit===void 0&&($.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,g.depthTexture);const Pe=r.convert(g.depthTexture.format),te=r.convert(g.depthTexture.type);let oe;g.depthTexture.format===Tn?oe=s.DEPTH_COMPONENT24:g.depthTexture.format===ei&&(oe=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,oe,g.width,g.height,0,Pe,te,null)}}else q(g.depthTexture,0);const W=$.__webglTexture,be=R(g),se=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,Me=g.depthTexture.format===ei?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(g.depthTexture.format===Tn)St(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,se,W,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,Me,se,W,0);else if(g.depthTexture.format===ei)St(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,se,W,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,Me,se,W,0);else throw new Error("Unknown depthTexture format")}function Ke(E){const g=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=Z}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let Z=0;Z<6;Z++)_e(g.__webglFramebuffer[Z],E,Z);else{const Z=E.texture.mipmaps;Z&&Z.length>0?_e(g.__webglFramebuffer[0],E,0):_e(g.__webglFramebuffer,E,0)}else if(U){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ce(g.__webglDepthbuffer[Z],E,!1);else{const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,W)}}else{const Z=E.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),Ce(g.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,W)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function At(E,g,U){const Z=n.get(E);g!==void 0&&pe(Z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Ke(E)}function Ye(E){const g=E.texture,U=n.get(E),Z=n.get(g);E.addEventListener("dispose",C);const $=E.textures,W=E.isWebGLCubeRenderTarget===!0,be=$.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=g.version,a.memory.textures++),W){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let Me=0;Me<g.mipmaps.length;Me++)U.__webglFramebuffer[se][Me]=s.createFramebuffer()}else U.__webglFramebuffer[se]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)U.__webglFramebuffer[se]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(be)for(let se=0,Me=$.length;se<Me;se++){const Pe=n.get($[se]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&St(E)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const Me=$[se];U.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[se]);const Pe=r.convert(Me.format,Me.colorSpace),te=r.convert(Me.type),oe=w(Me.internalFormat,Pe,te,Me.colorSpace,E.isXRRenderTarget===!0),xe=R(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,oe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,U.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)pe(U.__webglFramebuffer[se][Me],E,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me);else pe(U.__webglFramebuffer[se],E,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(g)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,Me=$.length;se<Me;se++){const Pe=$[se],te=n.get(Pe);let oe=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,te.__webglTexture),Ge(oe,Pe),pe(U.__webglFramebuffer,E,Pe,s.COLOR_ATTACHMENT0+se,oe,0),m(Pe)&&f(oe)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(se=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),Ge(se,g),g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)pe(U.__webglFramebuffer[Me],E,g,s.COLOR_ATTACHMENT0,se,Me);else pe(U.__webglFramebuffer,E,g,s.COLOR_ATTACHMENT0,se,0);m(g)&&f(se),t.unbindTexture()}E.depthBuffer&&Ke(E)}function tt(E){const g=E.textures;for(let U=0,Z=g.length;U<Z;U++){const $=g[U];if(m($)){const W=S(E),be=n.get($).__webglTexture;t.bindTexture(W,be),f(W),t.unbindTexture()}}}const ot=[],Ve=[];function Mt(E){if(E.samples>0){if(St(E)===!1){const g=E.textures,U=E.width,Z=E.height;let $=s.COLOR_BUFFER_BIT;const W=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(E),se=g.length>1;if(se)for(let Pe=0;Pe<g.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Me=E.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Pe=0;Pe<g.length;Pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const te=n.get(g[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,U,Z,0,0,U,Z,$,s.NEAREST),c===!0&&(ot.length=0,Ve.length=0,ot.push(s.COLOR_ATTACHMENT0+Pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ot.push(W),Ve.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Pe=0;Pe<g.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const te=n.get(g[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const g=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function R(E){return Math.min(i.maxSamples,E.samples)}function St(E){const g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Je(E){const g=a.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function lt(E,g){const U=E.colorSpace,Z=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Di&&U!==Un&&(Ze.getTransfer(U)===Qe?(Z!==on||$!==Kt)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",U)),g}function Se(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=At,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rm(s,e){function t(n,i=Un){let r;const a=Ze.getTransfer(i);if(n===Kt)return s.UNSIGNED_BYTE;if(n===Ka)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return s.BYTE;if(n===Wc)return s.SHORT;if(n===Ji)return s.UNSIGNED_SHORT;if(n===Ya)return s.INT;if(n===mn)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===$t)return s.HALF_FLOAT;if(n===Zc)return s.ALPHA;if(n===Yc)return s.RGB;if(n===on)return s.RGBA;if(n===Tn)return s.DEPTH_COMPONENT;if(n===ei)return s.DEPTH_STENCIL;if(n===Kc)return s.RED;if(n===ja)return s.RED_INTEGER;if(n===Pi)return s.RG;if(n===Ja)return s.RG_INTEGER;if(n===Qa)return s.RGBA_INTEGER;if(n===Os||n===Bs||n===Gs||n===zs)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===ra||n===aa||n===oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===la)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ua)return r.COMPRESSED_R11_EAC;if(n===da)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fa)return r.COMPRESSED_RG11_EAC;if(n===pa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===Sa||n===ya||n===ba||n===wa||n===Ea||n===Ta||n===Aa||n===Ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ma)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ea)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Pa||n===Da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===La||n===Ia||n===Ua||n===Na)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new cl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wt({vertexShader:Pm,fragmentShader:Dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new It(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends Ui{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new Lm,f={},S=t.getContextAttributes();let w=null,b=null;const T=[],A=[],C=new Ee;let I=null;const v=new en;v.viewport=new vt;const y=new en;y.viewport=new vt;const P=[v,y],O=new Vh;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=T[Y];return j===void 0&&(j=new Pr,T[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=T[Y];return j===void 0&&(j=new Pr,T[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=T[Y];return j===void 0&&(j=new Pr,T[Y]=j),j.getHandSpace()};function q(Y){const j=A.indexOf(Y.inputSource);if(j===-1)return;const pe=T[j];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,l||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",z);for(let Y=0;Y<T.length;Y++){const j=A[Y];j!==null&&(A[Y]=null,T[Y].disconnect(j))}B=null,X=null,m.reset();for(const Y in f)delete f[Y];e.setRenderTarget(w),p=null,d=null,u=null,i=null,b=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",H),i.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ce=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=S.stencil?ei:Tn,Ce=S.stencil?Qi:mn);const Ke={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ht(d.textureWidth,d.textureHeight,{format:on,type:Kt,depthTexture:new is(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ht(p.framebufferWidth,p.framebufferHeight,{format:on,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Y){for(let j=0;j<Y.removed.length;j++){const pe=Y.removed[j],Ce=A.indexOf(pe);Ce>=0&&(A[Ce]=null,T[Ce].disconnect(pe))}for(let j=0;j<Y.added.length;j++){const pe=Y.added[j];let Ce=A.indexOf(pe);if(Ce===-1){for(let Ke=0;Ke<T.length;Ke++)if(Ke>=A.length){A.push(pe),Ce=Ke;break}else if(A[Ke]===null){A[Ke]=pe,Ce=Ke;break}if(Ce===-1)break}const _e=T[Ce];_e&&_e.connect(pe)}}const Q=new D,le=new D;function ae(Y,j,pe){Q.setFromMatrixPosition(j.matrixWorld),le.setFromMatrixPosition(pe.matrixWorld);const Ce=Q.distanceTo(le),_e=j.projectionMatrix.elements,Ke=pe.projectionMatrix.elements,At=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),tt=(_e[9]+1)/_e[5],ot=(_e[9]-1)/_e[5],Ve=(_e[8]-1)/_e[0],Mt=(Ke[8]+1)/Ke[0],R=At*Ve,St=At*Mt,Je=Ce/(-Ve+Mt),lt=Je*-Ve;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(Je),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Se=At+Je,E=Ye+Je,g=R-lt,U=St+(Ce-lt),Z=tt*Ye/E*Se,$=ot*Ye/E*Se;Y.projectionMatrix.makePerspective(g,U,Z,$,Se,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function fe(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let j=Y.near,pe=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),O.near=y.near=v.near=j,O.far=y.far=v.far=pe,(B!==O.near||X!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,X=O.far),O.layers.mask=Y.layers.mask|6,v.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;const Ce=Y.parent,_e=O.cameras;fe(O,Ce);for(let Ke=0;Ke<_e.length;Ke++)fe(_e[Ke],Ce);_e.length===2?ae(O,v,y):O.projectionMatrix.copy(v.projectionMatrix),Ge(Y,O,Ce)};function Ge(Y,j,pe){pe===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return f[Y]};let Ne=null;function at(Y,j){if(h=j.getViewerPose(l||a),_=j,h!==null){const pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Ce=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let Ye=0;Ye<pe.length;Ye++){const tt=pe[Ye];let ot=null;if(p!==null)ot=p.getViewport(tt);else{const Mt=u.getViewSubImage(d,tt);ot=Mt.viewport,Ye===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(b))}let Ve=P[Ye];Ve===void 0&&(Ve=new en,Ve.layers.enable(Ye),Ve.viewport=new vt,P[Ye]=Ve),Ve.matrix.fromArray(tt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(tt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ot.x,ot.y,ot.width,ot.height),Ye===0&&(O.matrix.copy(Ve.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(Ve)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Ye=u.getDepthInformation(pe[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,i.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ye=0;Ye<pe.length;Ye++){const tt=pe[Ye].camera;if(tt){let ot=f[tt];ot||(ot=new cl,f[tt]=ot);const Ve=u.getCameraImage(tt);ot.sourceTexture=Ve}}}}for(let pe=0;pe<T.length;pe++){const Ce=A[pe],_e=T[pe];Ce!==null&&_e!==void 0&&_e.update(Ce,j,l||a)}Ne&&Ne(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const et=new ul;et.setAnimationLoop(at),this.setAnimationLoop=function(Y){Ne=Y},this.dispose=function(){}}}const Zn=new gn,Um=new mt;function Nm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,sl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,w,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),w=S.envMap,b=S.envMapRotation;w&&(m.envMap.value=w,Zn.copy(b),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Zn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fm(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const b=w.program;n.uniformBlockBinding(S,b)}function l(S,w){let b=i[S.id];b===void 0&&(_(S),b=h(S),i[S.id]=b,S.addEventListener("dispose",m));const T=w.program;n.updateUBOMapping(S,T);const A=e.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){const w=u();S.__bindingPointIndex=w;const b=s.createBuffer(),T=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,b),b}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=i[S.id],b=S.uniforms,T=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let A=0,C=b.length;A<C;A++){const I=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,y=I.length;v<y;v++){const P=I[v];if(p(P,A,v,T)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let q=0;q<B.length;q++){const H=B[q],z=x(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,O+X,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,X),X+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,w,b,T){const A=S.value,C=w+"_"+b;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const I=T[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return T[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(S){const w=S.uniforms;let b=0;const T=16;for(let C=0,I=w.length;C<I;C++){const v=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,P=v.length;y<P;y++){const O=v[y],B=Array.isArray(O.value)?O.value:[O.value];for(let X=0,q=B.length;X<q;X++){const H=B[X],z=x(H),Q=b%T,le=Q%z.boundary,ae=Q+le;b+=le,ae!==0&&T-ae<z.storage&&(b+=T-ae),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=z.storage}}}const A=b%T;return A>0&&(b+=T-A),S.__size=b,S.__cache={},this}function x(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function f(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}const Om=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ln=null;function Bm(){return ln===null&&(ln=new Ph(Om,16,16,Pi,$t),ln.name="DFG_LUT",ln.minFilter=Ut,ln.magFilter=Ut,ln.wrapS=bn,ln.wrapT=bn,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class Gm{constructor(e={}){const{canvas:t=sh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Kt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const x=p,m=new Set([Qa,Ja,ja]),f=new Set([Kt,mn,Ji,Qi,Ka,$a]),S=new Uint32Array(4),w=new Int32Array(4);let b=null,T=null;const A=[],C=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let y=!1;this._outputColorSpace=Qt;let P=0,O=0,B=null,X=-1,q=null;const H=new vt,z=new vt;let Q=null;const le=new Le(0);let ae=0,fe=t.width,Ge=t.height,Ne=1,at=null,et=null;const Y=new vt(0,0,fe,Ge),j=new vt(0,0,fe,Ge);let pe=!1;const Ce=new io;let _e=!1,Ke=!1;const At=new mt,Ye=new D,tt=new vt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Mt(){return B===null?Ne:1}let R=n;function St(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",nt,!1),R===null){const N="webgl2";if(R=St(N,M),R===null)throw St(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw je("WebGLRenderer: "+M.message),M}let Je,lt,Se,E,g,U,Z,$,W,be,se,Me,Pe,te,oe,xe,ye,re,He,L,de,ne,me,ee;function K(){Je=new Bf(R),Je.init(),ne=new Rm(R,Je),lt=new Rf(R,Je,e,ne),Se=new Am(R,Je),lt.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),E=new kf(R),g=new dm,U=new Cm(R,Je,Se,g,lt,ne,E),Z=new Df(v),$=new Of(v),W=new Wh(R),me=new Af(R,W),be=new Gf(R,W,E,me),se=new Hf(R,be,W,E),He=new Vf(R,lt,U),xe=new Pf(g),Me=new um(v,Z,$,Je,lt,me,xe),Pe=new Nm(v,g),te=new pm,oe=new Mm(Je),re=new Tf(v,Z,$,Se,se,_,c),ye=new Em(v,se,lt),ee=new Fm(R,E,lt,Se),L=new Cf(R,Je,E),de=new zf(R,Je,E),E.programs=Me.programs,v.capabilities=lt,v.extensions=Je,v.properties=g,v.renderLists=te,v.shadowMap=ye,v.state=Se,v.info=E}K(),x!==Kt&&(I=new Xf(x,t.width,t.height,i,r));const ie=new Im(v,R);this.xr=ie,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(M){M!==void 0&&(Ne=M,this.setSize(fe,Ge,!1))},this.getSize=function(M){return M.set(fe,Ge)},this.setSize=function(M,N,V=!0){if(ie.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=M,Ge=N,t.width=Math.floor(M*Ne),t.height=Math.floor(N*Ne),V===!0&&(t.style.width=M+"px",t.style.height=N+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(fe*Ne,Ge*Ne).floor()},this.setDrawingBufferSize=function(M,N,V){fe=M,Ge=N,Ne=V,t.width=Math.floor(M*V),t.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(x===Kt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(H)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,N,V,k){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,N,V,k),Se.viewport(H.copy(Y).multiplyScalar(Ne).round())},this.getScissor=function(M){return M.copy(j)},this.setScissor=function(M,N,V,k){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,N,V,k),Se.scissor(z.copy(j).multiplyScalar(Ne).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){Se.setScissorTest(pe=M)},this.setOpaqueSort=function(M){at=M},this.setTransparentSort=function(M){et=M},this.getClearColor=function(M){return M.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,V=!0){let k=0;if(M){let F=!1;if(B!==null){const ce=B.texture.format;F=m.has(ce)}if(F){const ce=B.texture.type,ge=f.has(ce),ue=re.getClearColor(),ve=re.getClearAlpha(),we=ue.r,Re=ue.g,Te=ue.b;ge?(S[0]=we,S[1]=Re,S[2]=Te,S[3]=ve,R.clearBufferuiv(R.COLOR,0,S)):(w[0]=we,w[1]=Re,w[2]=Te,w[3]=ve,R.clearBufferiv(R.COLOR,0,w))}else k|=R.COLOR_BUFFER_BIT}N&&(k|=R.DEPTH_BUFFER_BIT),V&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),re.dispose(),te.dispose(),oe.dispose(),g.dispose(),Z.dispose(),$.dispose(),se.dispose(),me.dispose(),ee.dispose(),Me.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ho),ie.removeEventListener("sessionend",uo),zn.stop()};function Ie(M){M.preventDefault(),Eo("WebGLRenderer: Context Lost."),y=!0}function ht(){Eo("WebGLRenderer: Context Restored."),y=!1;const M=E.autoReset,N=ye.enabled,V=ye.autoUpdate,k=ye.needsUpdate,F=ye.type;K(),E.autoReset=M,ye.enabled=N,ye.autoUpdate=V,ye.needsUpdate=k,ye.type=F}function nt(M){je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function cn(M){const N=M.target;N.removeEventListener("dispose",cn),_n(N)}function _n(M){xl(M),g.remove(M)}function xl(M){const N=g.get(M).programs;N!==void 0&&(N.forEach(function(V){Me.releaseProgram(V)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,k,F,ce){N===null&&(N=ot);const ge=F.isMesh&&F.matrixWorld.determinant()<0,ue=Sl(M,N,V,k,F);Se.setMaterial(k,ge);let ve=V.index,we=1;if(k.wireframe===!0){if(ve=be.getWireframeAttribute(V),ve===void 0)return;we=2}const Re=V.drawRange,Te=V.attributes.position;let We=Re.start*we,rt=(Re.start+Re.count)*we;ce!==null&&(We=Math.max(We,ce.start*we),rt=Math.min(rt,(ce.start+ce.count)*we)),ve!==null?(We=Math.max(We,0),rt=Math.min(rt,ve.count)):Te!=null&&(We=Math.max(We,0),rt=Math.min(rt,Te.count));const gt=rt-We;if(gt<0||gt===1/0)return;me.setup(F,k,ue,V,ve);let _t,ct=L;if(ve!==null&&(_t=W.get(ve),ct=de,ct.setIndex(_t)),F.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*Mt()),ct.setMode(R.LINES)):ct.setMode(R.TRIANGLES);else if(F.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),Se.setLineWidth(Ae*Mt()),F.isLineSegments?ct.setMode(R.LINES):F.isLineLoop?ct.setMode(R.LINE_LOOP):ct.setMode(R.LINE_STRIP)}else F.isPoints?ct.setMode(R.POINTS):F.isSprite&&ct.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)es("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,it=F._multiDrawCounts,$e=F._multiDrawCount,Wt=ve?W.get(ve).bytesPerElement:1,ri=g.get(k).currentProgram.getUniforms();for(let Xt=0;Xt<$e;Xt++)ri.setValue(R,"_gl_DrawID",Xt),ct.render(Ae[Xt]/Wt,it[Xt])}else if(F.isInstancedMesh)ct.renderInstances(We,gt,F.count);else if(V.isInstancedBufferGeometry){const Ae=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,it=Math.min(V.instanceCount,Ae);ct.renderInstances(We,gt,it)}else ct.render(We,gt)};function lo(M,N,V){M.transparent===!0&&M.side===ft&&M.forceSinglePass===!1?(M.side=Bt,M.needsUpdate=!0,ls(M,N,V),M.side=Bn,M.needsUpdate=!0,ls(M,N,V),M.side=ft):ls(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),T=oe.get(V),T.init(N),C.push(T),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),M!==V&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),T.setupLights();const k=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ce=F.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const ue=ce[ge];lo(ue,V,F),k.add(ue)}else lo(ce,V,F),k.add(ce)}),T=C.pop(),k},this.compileAsync=function(M,N,V=null){const k=this.compile(M,N,V);return new Promise(F=>{function ce(){if(k.forEach(function(ge){g.get(ge).currentProgram.isReady()&&k.delete(ge)}),k.size===0){F(M);return}setTimeout(ce,10)}Je.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let sr=null;function Ml(M){sr&&sr(M)}function ho(){zn.stop()}function uo(){zn.start()}const zn=new ul;zn.setAnimationLoop(Ml),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(M){sr=M,ie.setAnimationLoop(M),M===null?zn.stop():zn.start()},ie.addEventListener("sessionstart",ho),ie.addEventListener("sessionend",uo),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const V=ie.enabled===!0&&ie.isPresenting===!0,k=I!==null&&(B===null||V)&&I.begin(v,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,N,B),T=oe.get(M,C.length),T.init(N),C.push(T),At.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ce.setFromProjectionMatrix(At,dn,N.reversedDepth),Ke=this.localClippingEnabled,_e=xe.init(this.clippingPlanes,Ke),b=te.get(M,A.length),b.init(),A.push(b),ie.enabled===!0&&ie.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&rr(ge,N,-1/0,v.sortObjects)}rr(M,N,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(at,et),Ve=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ve&&re.addToRenderList(b,M),this.info.render.frame++,_e===!0&&xe.beginShadows();const F=T.state.shadowsArray;if(ye.render(F,M,N),_e===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&I.hasRenderPass())===!1){const ge=b.opaque,ue=b.transmissive;if(T.setupLights(),N.isArrayCamera){const ve=N.cameras;if(ue.length>0)for(let we=0,Re=ve.length;we<Re;we++){const Te=ve[we];po(ge,ue,M,Te)}Ve&&re.render(M);for(let we=0,Re=ve.length;we<Re;we++){const Te=ve[we];fo(b,M,Te,Te.viewport)}}else ue.length>0&&po(ge,ue,M,N),Ve&&re.render(M),fo(b,M,N)}B!==null&&O===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),k&&I.end(v),M.isScene===!0&&M.onAfterRender(v,M,N),me.resetDefaultState(),X=-1,q=null,C.pop(),C.length>0?(T=C[C.length-1],_e===!0&&xe.setGlobalState(v.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function rr(M,N,V,k){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ce.intersectsSprite(M)){k&&tt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(At);const ge=se.update(M),ue=M.material;ue.visible&&b.push(M,ge,ue,V,tt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ce.intersectsObject(M))){const ge=se.update(M),ue=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),tt.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),tt.copy(ge.boundingSphere.center)),tt.applyMatrix4(M.matrixWorld).applyMatrix4(At)),Array.isArray(ue)){const ve=ge.groups;for(let we=0,Re=ve.length;we<Re;we++){const Te=ve[we],We=ue[Te.materialIndex];We&&We.visible&&b.push(M,ge,We,V,tt.z,Te)}}else ue.visible&&b.push(M,ge,ue,V,tt.z,null)}}const ce=M.children;for(let ge=0,ue=ce.length;ge<ue;ge++)rr(ce[ge],N,V,k)}function fo(M,N,V,k){const{opaque:F,transmissive:ce,transparent:ge}=M;T.setupLightsView(V),_e===!0&&xe.setGlobalState(v.clippingPlanes,V),k&&Se.viewport(H.copy(k)),F.length>0&&cs(F,N,V),ce.length>0&&cs(ce,N,V),ge.length>0&&cs(ge,N,V),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function po(M,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const We=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Ht(1,1,{generateMipmaps:!0,type:We?$t:Kt,minFilter:Qn,samples:lt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ce=T.state.transmissionRenderTarget[k.id],ge=k.viewport||H;ce.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);const ue=v.getRenderTarget(),ve=v.getActiveCubeFace(),we=v.getActiveMipmapLevel();v.setRenderTarget(ce),v.getClearColor(le),ae=v.getClearAlpha(),ae<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&re.render(V);const Re=v.toneMapping;v.toneMapping=pn;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),_e===!0&&xe.setGlobalState(v.clippingPlanes,k),cs(M,V,k),U.updateMultisampleRenderTarget(ce),U.updateRenderTargetMipmap(ce),Je.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let rt=0,gt=N.length;rt<gt;rt++){const _t=N[rt],{object:ct,geometry:Ae,material:it,group:$e}=_t;if(it.side===ft&&ct.layers.test(k.layers)){const Wt=it.side;it.side=Bt,it.needsUpdate=!0,mo(ct,V,k,Ae,it,$e),it.side=Wt,it.needsUpdate=!0,We=!0}}We===!0&&(U.updateMultisampleRenderTarget(ce),U.updateRenderTargetMipmap(ce))}v.setRenderTarget(ue,ve,we),v.setClearColor(le,ae),Te!==void 0&&(k.viewport=Te),v.toneMapping=Re}function cs(M,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ce=M.length;F<ce;F++){const ge=M[F],{object:ue,geometry:ve,group:we}=ge;let Re=ge.material;Re.allowOverride===!0&&k!==null&&(Re=k),ue.layers.test(V.layers)&&mo(ue,N,V,ve,Re,we)}}function mo(M,N,V,k,F,ce){M.onBeforeRender(v,N,V,k,F,ce),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(v,N,V,k,M,ce),F.transparent===!0&&F.side===ft&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,v.renderBufferDirect(V,N,k,F,M,ce),F.side=Bn,F.needsUpdate=!0,v.renderBufferDirect(V,N,k,F,M,ce),F.side=ft):v.renderBufferDirect(V,N,k,F,M,ce),M.onAfterRender(v,N,V,k,F,ce)}function ls(M,N,V){N.isScene!==!0&&(N=ot);const k=g.get(M),F=T.state.lights,ce=T.state.shadowsArray,ge=F.state.version,ue=Me.getParameters(M,F.state,ce,N,V),ve=Me.getProgramCacheKey(ue);let we=k.programs;k.environment=M.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(M.isMeshStandardMaterial?$:Z).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",cn),we=new Map,k.programs=we);let Re=we.get(ve);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===ge)return _o(M,ue),Re}else ue.uniforms=Me.getUniforms(M),M.onBeforeCompile(ue,v),Re=Me.acquireProgram(ue,ve),we.set(ve,Re),k.uniforms=ue.uniforms;const Te=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=xe.uniform),_o(M,ue),k.needsLights=bl(M),k.lightsStateVersion=ge,k.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Re,k.uniformsList=null,Re}function go(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=ks.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function _o(M,N){const V=g.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Sl(M,N,V,k,F){N.isScene!==!0&&(N=ot),U.resetTextureUnits();const ce=N.fog,ge=k.isMeshStandardMaterial?N.environment:null,ue=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Di,ve=(k.isMeshStandardMaterial?$:Z).get(k.envMap||ge),we=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Re=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!V.morphAttributes.position,We=!!V.morphAttributes.normal,rt=!!V.morphAttributes.color;let gt=pn;k.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(gt=v.toneMapping);const _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=_t!==void 0?_t.length:0,Ae=g.get(k),it=T.state.lights;if(_e===!0&&(Ke===!0||M!==q)){const Ft=M===q&&k.id===X;xe.setState(k,M,Ft)}let $e=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==it.state.version||Ae.outputColorSpace!==ue||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==ve||k.fog===!0&&Ae.fog!==ce||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==xe.numPlanes||Ae.numIntersection!==xe.numIntersection)||Ae.vertexAlphas!==we||Ae.vertexTangents!==Re||Ae.morphTargets!==Te||Ae.morphNormals!==We||Ae.morphColors!==rt||Ae.toneMapping!==gt||Ae.morphTargetsCount!==ct)&&($e=!0):($e=!0,Ae.__version=k.version);let Wt=Ae.currentProgram;$e===!0&&(Wt=ls(k,N,F));let ri=!1,Xt=!1,Bi=!1;const ut=Wt.getUniforms(),zt=Ae.uniforms;if(Se.useProgram(Wt.program)&&(ri=!0,Xt=!0,Bi=!0),k.id!==X&&(X=k.id,Xt=!0),ri||q!==M){Se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(R,"projectionMatrix",M.projectionMatrix),ut.setValue(R,"viewMatrix",M.matrixWorldInverse);const kt=ut.map.cameraPosition;kt!==void 0&&kt.setValue(R,Ye.setFromMatrixPosition(M.matrixWorld)),lt.logarithmicDepthBuffer&&ut.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ut.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,Xt=!0,Bi=!0)}if(Ae.needsLights&&(it.state.directionalShadowMap.length>0&&ut.setValue(R,"directionalShadowMap",it.state.directionalShadowMap,U),it.state.spotShadowMap.length>0&&ut.setValue(R,"spotShadowMap",it.state.spotShadowMap,U),it.state.pointShadowMap.length>0&&ut.setValue(R,"pointShadowMap",it.state.pointShadowMap,U)),F.isSkinnedMesh){ut.setOptional(R,F,"bindMatrix"),ut.setOptional(R,F,"bindMatrixInverse");const Ft=F.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ut.setValue(R,"boneTexture",Ft.boneTexture,U))}F.isBatchedMesh&&(ut.setOptional(R,F,"batchingTexture"),ut.setValue(R,"batchingTexture",F._matricesTexture,U),ut.setOptional(R,F,"batchingIdTexture"),ut.setValue(R,"batchingIdTexture",F._indirectTexture,U),ut.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&ut.setValue(R,"batchingColorTexture",F._colorsTexture,U));const jt=V.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&He.update(F,V,Wt),(Xt||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,ut.setValue(R,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(zt.envMap.value=ve,zt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(zt.envMapIntensity.value=N.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=Bm()),Xt&&(ut.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&yl(zt,Bi),ce&&k.fog===!0&&Pe.refreshFogUniforms(zt,ce),Pe.refreshMaterialUniforms(zt,k,Ne,Ge,T.state.transmissionRenderTarget[M.id]),ks.upload(R,go(Ae),zt,U)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ks.upload(R,go(Ae),zt,U),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ut.setValue(R,"center",F.center),ut.setValue(R,"modelViewMatrix",F.modelViewMatrix),ut.setValue(R,"normalMatrix",F.normalMatrix),ut.setValue(R,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ft=k.uniformsGroups;for(let kt=0,ar=Ft.length;kt<ar;kt++){const kn=Ft[kt];ee.update(kn,Wt),ee.bind(kn,Wt)}}return Wt}function yl(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function bl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,N,V){const k=g.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),g.get(M.texture).__webglTexture=N,g.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const V=g.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const wl=R.createFramebuffer();this.setRenderTarget=function(M,N=0,V=0){B=M,P=N,O=V;let k=null,F=!1,ce=!1;if(M){const ue=g.get(M);if(ue.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(R.FRAMEBUFFER,ue.__webglFramebuffer),H.copy(M.viewport),z.copy(M.scissor),Q=M.scissorTest,Se.viewport(H),Se.scissor(z),Se.setScissorTest(Q),X=-1;return}else if(ue.__webglFramebuffer===void 0)U.setupRenderTarget(M);else if(ue.__hasExternalTextures)U.rebindTextures(M,g.get(M.texture).__webglTexture,g.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Re=M.depthTexture;if(ue.__boundDepthTexture!==Re){if(Re!==null&&g.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(M)}}const ve=M.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ce=!0);const we=g.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[N])?k=we[N][V]:k=we[N],F=!0):M.samples>0&&U.useMultisampledRTT(M)===!1?k=g.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?k=we[V]:k=we,H.copy(M.viewport),z.copy(M.scissor),Q=M.scissorTest}else H.copy(Y).multiplyScalar(Ne).floor(),z.copy(j).multiplyScalar(Ne).floor(),Q=pe;if(V!==0&&(k=wl),Se.bindFramebuffer(R.FRAMEBUFFER,k)&&Se.drawBuffers(M,k),Se.viewport(H),Se.scissor(z),Se.setScissorTest(Q),F){const ue=g.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,V)}else if(ce){const ue=N;for(let ve=0;ve<M.textures.length;ve++){const we=g.get(M.textures[ve]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+ve,we.__webglTexture,V,ue)}}else if(M!==null&&V!==0){const ue=g.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ue.__webglTexture,V)}X=-1},this.readRenderTargetPixels=function(M,N,V,k,F,ce,ge,ue=0){if(!(M&&M.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve){Se.bindFramebuffer(R.FRAMEBUFFER,ve);try{const we=M.textures[ue],Re=we.format,Te=we.type;if(!lt.textureFormatReadable(Re)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Te)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-k&&V>=0&&V<=M.height-F&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ue),R.readPixels(N,V,k,F,ne.convert(Re),ne.convert(Te),ce))}finally{const we=B!==null?g.get(B).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,k,F,ce,ge,ue=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve)if(N>=0&&N<=M.width-k&&V>=0&&V<=M.height-F){Se.bindFramebuffer(R.FRAMEBUFFER,ve);const we=M.textures[ue],Re=we.format,Te=we.type;if(!lt.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.bufferData(R.PIXEL_PACK_BUFFER,ce.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ue),R.readPixels(N,V,k,F,ne.convert(Re),ne.convert(Te),0);const rt=B!==null?g.get(B).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,rt);const gt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await rh(R,gt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ce),R.deleteBuffer(We),R.deleteSync(gt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,V=0){const k=Math.pow(2,-V),F=Math.floor(M.image.width*k),ce=Math.floor(M.image.height*k),ge=N!==null?N.x:0,ue=N!==null?N.y:0;U.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,ge,ue,F,ce),Se.unbindTexture()};const El=R.createFramebuffer(),Tl=R.createFramebuffer();this.copyTextureToTexture=function(M,N,V=null,k=null,F=0,ce=null){ce===null&&(F!==0?(es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=F,F=0):ce=0);let ge,ue,ve,we,Re,Te,We,rt,gt;const _t=M.isCompressedTexture?M.mipmaps[ce]:M.image;if(V!==null)ge=V.max.x-V.min.x,ue=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,Re=V.min.y,Te=V.isBox3?V.min.z:0;else{const jt=Math.pow(2,-F);ge=Math.floor(_t.width*jt),ue=Math.floor(_t.height*jt),M.isDataArrayTexture?ve=_t.depth:M.isData3DTexture?ve=Math.floor(_t.depth*jt):ve=1,we=0,Re=0,Te=0}k!==null?(We=k.x,rt=k.y,gt=k.z):(We=0,rt=0,gt=0);const ct=ne.convert(N.format),Ae=ne.convert(N.type);let it;N.isData3DTexture?(U.setTexture3D(N,0),it=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(U.setTexture2DArray(N,0),it=R.TEXTURE_2D_ARRAY):(U.setTexture2D(N,0),it=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const $e=R.getParameter(R.UNPACK_ROW_LENGTH),Wt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ri=R.getParameter(R.UNPACK_SKIP_PIXELS),Xt=R.getParameter(R.UNPACK_SKIP_ROWS),Bi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,_t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,we),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te);const ut=M.isDataArrayTexture||M.isData3DTexture,zt=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const jt=g.get(M),Ft=g.get(N),kt=g.get(jt.__renderTarget),ar=g.get(Ft.__renderTarget);Se.bindFramebuffer(R.READ_FRAMEBUFFER,kt.__webglFramebuffer),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let kn=0;kn<ve;kn++)ut&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(M).__webglTexture,F,Te+kn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(N).__webglTexture,ce,gt+kn)),R.blitFramebuffer(we,Re,ge,ue,We,rt,ge,ue,R.DEPTH_BUFFER_BIT,R.NEAREST);Se.bindFramebuffer(R.READ_FRAMEBUFFER,null),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||g.has(M)){const jt=g.get(M),Ft=g.get(N);Se.bindFramebuffer(R.READ_FRAMEBUFFER,El),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tl);for(let kt=0;kt<ve;kt++)ut?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,jt.__webglTexture,F,Te+kt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,jt.__webglTexture,F),zt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.__webglTexture,ce,gt+kt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ft.__webglTexture,ce),F!==0?R.blitFramebuffer(we,Re,ge,ue,We,rt,ge,ue,R.COLOR_BUFFER_BIT,R.NEAREST):zt?R.copyTexSubImage3D(it,ce,We,rt,gt+kt,we,Re,ge,ue):R.copyTexSubImage2D(it,ce,We,rt,we,Re,ge,ue);Se.bindFramebuffer(R.READ_FRAMEBUFFER,null),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else zt?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(it,ce,We,rt,gt,ge,ue,ve,ct,Ae,_t.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(it,ce,We,rt,gt,ge,ue,ve,ct,_t.data):R.texSubImage3D(it,ce,We,rt,gt,ge,ue,ve,ct,Ae,_t):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ce,We,rt,ge,ue,ct,Ae,_t.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ce,We,rt,_t.width,_t.height,ct,_t.data):R.texSubImage2D(R.TEXTURE_2D,ce,We,rt,ge,ue,ct,Ae,_t);R.pixelStorei(R.UNPACK_ROW_LENGTH,$e),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Wt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ri),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Bi),ce===0&&N.generateMipmaps&&R.generateMipmap(it),Se.unbindTexture()},this.initRenderTarget=function(M){g.get(M).__webglFramebuffer===void 0&&U.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?U.setTextureCube(M,0):M.isData3DTexture?U.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?U.setTexture2DArray(M,0):U.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){P=0,O=0,B=null,Se.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Vs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Oi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zm=new er(-1,1,1,-1,0,1);class km extends xt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const Vm=new km;class oo{constructor(e){this._mesh=new G(Vm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class gl extends Oi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ts.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new oo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _c extends Oi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Hm extends Oi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Wm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gl(Vs),this.copyPass.material.blending=fn,this.clock=new hl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_c!==void 0&&(a instanceof _c?n=!0:a instanceof Hm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xm extends Oi{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const qm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ii extends Oi{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,a,{type:$t}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Ht(r,a,{type:$t});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Ht(r,a,{type:$t});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=qm;this.highPassUniforms=ts.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ee(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ts.clone(Vs.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:Vs.vertexShader,fragmentShader:Vs.fragmentShader,premultipliedAlpha:!0,blending:Hs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new Ai,this._fsQuad=new oo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ee(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ii.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ii.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ii.BlurDirectionX=new Ee(1,0);Ii.BlurDirectionY=new Ee(0,1);const Ls={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Zm extends Oi{constructor(){super(),this.isOutputPass=!0,this.uniforms=ts.clone(Ls.uniforms),this.material=new ll({name:Ls.name,uniforms:this.uniforms,vertexShader:Ls.vertexShader,fragmentShader:Ls.fragmentShader}),this._fsQuad=new oo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===Qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Va?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ys?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ym={uniforms:{tDiffuse:{value:null},uSaturation:{value:1.1},uContrast:{value:1},uWarmth:{value:.08},uBrightness:{value:1},uVignetteRadius:{value:.45},uVignetteSoftness:{value:.6},uGrainIntensity:{value:.025},uTime:{value:0},uResolution:{value:new Ee(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uWarmth;
    uniform float uBrightness;
    uniform float uVignetteRadius;
    uniform float uVignetteSoftness;
    uniform float uGrainIntensity;
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    // Simple pseudo-random for grain
    float rand(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      vec3 color = tex.rgb;

      // Brightness
      color *= uBrightness;

      // Contrast (pivot at 0.5)
      color = (color - 0.5) * uContrast + 0.5;

      // Saturation
      float lum = dot(color, vec3(0.299, 0.587, 0.114));
      color = mix(vec3(lum), color, uSaturation);

      // Warmth (shift towards red/away from blue)
      color.r += uWarmth * 0.5;
      color.b -= uWarmth * 0.3;

      // Vignette
      vec2 center = vUv - 0.5;
      float dist = length(center);
      float vig = smoothstep(uVignetteRadius + uVignetteSoftness, uVignetteRadius, dist);
      color *= mix(0.4, 1.0, vig);

      // Film grain
      float grain = rand(vUv * uResolution + vec2(uTime * 100.0)) - 0.5;
      color += grain * uGrainIntensity;

      gl_FragColor = vec4(clamp(color, 0.0, 1.0), tex.a);
    }
  `},Jn={chapadmalal:{saturation:1.1,contrast:1,warmth:.08,brightness:1},rambla:{saturation:.95,contrast:1,warmth:0,brightness:1},carilo:{saturation:1.2,contrast:1.05,warmth:-.05,brightness:.92},rutaCostera:{saturation:1.25,contrast:1.15,warmth:.15,brightness:1.02}};class vc{composer;bloomPass;colorGradePass;time=0;constructor(e,t,n){this.composer=new Wm(e);const i=new Xm(t,n);this.composer.addPass(i);const r=new Ee(window.innerWidth,window.innerHeight);this.bloomPass=new Ii(r,.4,.3,.85),this.composer.addPass(this.bloomPass),this.colorGradePass=new gl(Ym),this.colorGradePass.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight),this.composer.addPass(this.colorGradePass);const a=new Zm;this.composer.addPass(a)}setGrading(e){this.colorGradePass.uniforms.uSaturation.value=e.saturation,this.colorGradePass.uniforms.uContrast.value=e.contrast,this.colorGradePass.uniforms.uWarmth.value=e.warmth,this.colorGradePass.uniforms.uBrightness.value=e.brightness}setBlendedGrading(e,t,n){this.colorGradePass.uniforms.uSaturation.value=e.saturation+(t.saturation-e.saturation)*n,this.colorGradePass.uniforms.uContrast.value=e.contrast+(t.contrast-e.contrast)*n,this.colorGradePass.uniforms.uWarmth.value=e.warmth+(t.warmth-e.warmth)*n,this.colorGradePass.uniforms.uBrightness.value=e.brightness+(t.brightness-e.brightness)*n}setBloomStrength(e){this.bloomPass.strength=e}update(e){this.time+=e,this.colorGradePass.uniforms.uTime.value=this.time}render(){this.composer.render()}resize(e,t){this.composer.setSize(e,t),this.bloomPass.resolution.set(e,t),this.colorGradePass.uniforms.uResolution.value.set(e,t)}dispose(){this.composer.dispose()}}class Km{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t)}off(e,t){this.listeners.get(e)?.delete(t)}emit(e,...t){this.listeners.get(e)?.forEach(n=>n(...t))}}const bt=new Km,Mi={low:{pixelRatio:1,shadowMapSize:512,shadowsEnabled:!0,postProcessing:!1,bloom:!1,ambientParticles:15,trailParticles:20,decorDensity:8,palmDensity:.5,oceanSegments:32,fog:!0,seagullCount:2,cloudCount:8,fogFar:80},medium:{pixelRatio:1.5,shadowMapSize:1024,shadowsEnabled:!0,postProcessing:!0,bloom:!1,ambientParticles:25,trailParticles:30,decorDensity:15,palmDensity:.75,oceanSegments:48,fog:!0,seagullCount:4,cloudCount:14,fogFar:100},high:{pixelRatio:2,shadowMapSize:2048,shadowsEnabled:!0,postProcessing:!0,bloom:!0,ambientParticles:40,trailParticles:40,decorDensity:20,palmDensity:1,oceanSegments:64,fog:!0,seagullCount:6,cloudCount:20,fogFar:120},ultra:{pixelRatio:2,shadowMapSize:2048,shadowsEnabled:!0,postProcessing:!0,bloom:!0,ambientParticles:50,trailParticles:50,decorDensity:25,palmDensity:1.2,oceanSegments:80,fog:!0,seagullCount:8,cloudCount:25,fogFar:140}},xc="surftrip3d_quality",$m=4,jm=30,Jm=45,Qm=55;class e0{_level="high";_settings={...Mi.high};_autoDetecting=!1;_sampleFrames=0;_sampleTime=0;_userOverride=!1;constructor(){const e=localStorage.getItem(xc);e&&e in Mi?(this._level=e,this._settings={...Mi[this._level]},this._userOverride=!0):(this._level=this.guessInitialQuality(),this._settings={...Mi[this._level]})}get level(){return this._level}get settings(){return this._settings}setLevel(e){this._level=e,this._settings={...Mi[e]},this._userOverride=!0,this._autoDetecting=!1,localStorage.setItem(xc,e),bt.emit("quality:changed",e)}startAutoDetect(){this._userOverride||(this._autoDetecting=!0,this._sampleFrames=0,this._sampleTime=0)}feedFrame(e){if(!this._autoDetecting)return!1;if(this._sampleFrames++,this._sampleTime+=e,this._sampleTime>=$m){this._autoDetecting=!1;const t=this._sampleFrames/this._sampleTime,n=this.fpsToLevel(t);return n!==this._level&&(this._level=n,this._settings={...Mi[n]},bt.emit("quality:changed",n)),!0}return!1}get isAutoDetecting(){return this._autoDetecting}cycleLevel(){const e=["low","medium","high","ultra"],t=e.indexOf(this._level),n=e[(t+1)%e.length];return this.setLevel(n),n}fpsToLevel(e){return e<jm?"low":e<Jm?"medium":e<Qm?"high":"ultra"}guessInitialQuality(){const e=window.devicePixelRatio||1,t=navigator.hardwareConcurrency||2,n=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);return n&&t<=4?"low":n||e<=1&&t<=4?"medium":t>=8&&e>=2?"ultra":"high"}}const tn=new e0;class t0{scene;camera;renderer;clock=new hl;sunLight;hemiLight;ambientLight;postProcessing=null;constructor(){const e=tn.settings;this.scene=new Rh,this.scene.background=new Le(8900331),this.scene.fog=new ns(8900331,40,e.fogFar),this.camera=new en(60,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,6,-10),this.camera.lookAt(0,1.5,10),this.renderer=new Gm({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(e.pixelRatio,window.devicePixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=e.shadowsEnabled,this.renderer.shadowMap.type=zc,this.renderer.toneMapping=Ys,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.hemiLight=new Oh(8900331,16115402,.6),this.scene.add(this.hemiLight),this.ambientLight=new kh(16777215,.3),this.scene.add(this.ambientLight),this.sunLight=new zh(16774368,1.2),this.sunLight.position.set(15,25,-10),this.sunLight.castShadow=e.shadowsEnabled,this.sunLight.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.sunLight.shadow.camera.left=-20,this.sunLight.shadow.camera.right=20,this.sunLight.shadow.camera.top=20,this.sunLight.shadow.camera.bottom=-20,this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=60,this.sunLight.shadow.bias=-.001,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),e.postProcessing&&(this.postProcessing=new vc(this.renderer,this.scene,this.camera),this.postProcessing.setGrading(Jn.chapadmalal),e.bloom||this.postProcessing.setBloomStrength(0)),bt.on("quality:changed",this.onQualityChanged),window.addEventListener("resize",this.onResize)}onQualityChanged=()=>{const e=tn.settings;this.renderer.setPixelRatio(Math.min(e.pixelRatio,window.devicePixelRatio)),this.renderer.shadowMap.enabled=e.shadowsEnabled,this.sunLight.castShadow=e.shadowsEnabled,e.shadowsEnabled&&(this.sunLight.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null),this.scene.fog instanceof ns&&(this.scene.fog.far=e.fogFar),e.postProcessing&&!this.postProcessing&&(this.postProcessing=new vc(this.renderer,this.scene,this.camera),this.postProcessing.setGrading(Jn.chapadmalal)),!e.postProcessing&&this.postProcessing&&(this.postProcessing.dispose(),this.postProcessing=null),this.postProcessing&&this.postProcessing.setBloomStrength(e.bloom?.4:0)};onResize=()=>{const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.postProcessing?.resize(e,t)};getDelta(){return this.clock.getDelta()}updatePostProcessing(e){this.postProcessing?.update(e)}setZoneGrading(e){this.postProcessing?.setGrading(e)}setBlendedZoneGrading(e,t,n){this.postProcessing?.setBlendedGrading(e,t,n)}setBloomStrength(e){tn.settings.bloom&&this.postProcessing?.setBloomStrength(e)}updateSunTarget(e){this.sunLight.target.position.set(0,0,e+10),this.sunLight.target.updateMatrixWorld()}render(){this.postProcessing?this.postProcessing.render():this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this.onResize),bt.off("quality:changed",this.onQualityChanged),this.postProcessing?.dispose(),this.renderer.dispose()}}const Mc=30,n0=300;class i0{touchStartX=0;touchStartY=0;touchStartTime=0;constructor(){window.addEventListener("touchstart",this.onTouchStart,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1}),window.addEventListener("keydown",this.onKeyDown)}onTouchStart=e=>{const t=e.target;if(t.closest(".btn")||t.closest("#start-screen")||t.closest("#game-over")||t.closest("#btn-sound"))return;e.preventDefault();const n=e.touches[0];this.touchStartX=n.clientX,this.touchStartY=n.clientY,this.touchStartTime=Date.now()};onTouchEnd=e=>{const t=e.target;if(t.closest(".btn")||t.closest("#start-screen")||t.closest("#game-over")||t.closest("#btn-sound"))return;e.preventDefault();const n=e.changedTouches[0],i=n.clientX-this.touchStartX,r=n.clientY-this.touchStartY;if(Date.now()-this.touchStartTime>n0){bt.emit("input:jump");return}const o=Math.abs(i),c=Math.abs(r);if(o<Mc&&c<Mc){bt.emit("input:jump");return}if(o>c){const l=i>0?"left":"right";bt.emit("input:swipe",l)}else r<0?bt.emit("input:jump"):bt.emit("input:slide")};onKeyDown=e=>{switch(e.code){case"ArrowLeft":case"KeyA":e.preventDefault(),bt.emit("input:swipe","left");break;case"ArrowRight":case"KeyD":e.preventDefault(),bt.emit("input:swipe","right");break;case"ArrowUp":case"KeyW":case"Space":e.preventDefault(),bt.emit("input:jump");break;case"ArrowDown":case"KeyS":e.preventDefault(),bt.emit("input:slide");break}};dispose(){window.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("touchend",this.onTouchEnd),window.removeEventListener("keydown",this.onKeyDown)}}function ti(s,e,t){return s+(e-s)*t}function _l(s,e,t){return Math.max(e,Math.min(t,s))}function ss(s,e){return Math.random()*(e-s)+s}function On(s,e){return Math.floor(Math.random()*(e-s+1))+s}const za=2.5,En=[-za,0,za],s0=0,Gr=1,r0=2;function zr(s){return En[s]??0}function a0(){const s=new De,e=new J({color:16040586,roughness:.7}),t=new J({color:7711451,roughness:.6}),n=new J({color:1710638,roughness:.6}),i=new J({color:3810578,roughness:.8}),r=new J({color:7711451,roughness:.35,metalness:.05}),a=new J({color:16777215,roughness:.5}),o=new J({color:16167950,roughness:.4,metalness:.1}),c=new ke(.55,.7,.35),l=new G(c,t);l.position.y=1.15,l.castShadow=!0,s.add(l);const h=new ke(.56,.2,.36),u=new G(h,a);u.position.y=1.15,s.add(u);const d=new ke(.55,.35,.35),p=new G(d,n);p.position.y=.65,p.castShadow=!0,s.add(p);const _=new pt(.22,10,8),x=new G(_,e);x.position.y=1.72,x.castShadow=!0,s.add(x);const m=new J({color:16777215,roughness:.3}),f=new J({color:1710618,roughness:.5}),S=new pt(.045,6,6),w=new pt(.025,6,6);for(const pe of[-1,1]){const Ce=new G(S,m);Ce.position.set(pe*.08,1.74,.18),s.add(Ce);const _e=new G(w,f);_e.position.set(pe*.08,1.74,.21),s.add(_e)}const b=new J({color:3810578,roughness:.8}),T=new ke(.1,.02,.03);for(const pe of[-1,1]){const Ce=new G(T,b);Ce.position.set(pe*.08,1.79,.18),Ce.rotation.z=pe*-.15,s.add(Ce)}const A=new pt(.25,8,6),C=new G(A,i);C.position.y=1.82,C.scale.set(1,.7,1.1),C.castShadow=!0,s.add(C);const I=new pt(.2,6,5),v=new G(I,i);v.position.set(0,1.86,-.08),v.scale.set(1.1,.6,1.2),s.add(v);const y=new pt(.15,6,5),P=new G(y,i);P.position.set(.05,1.85,.05),P.scale.set(.9,.5,.8),s.add(P);const O=new ke(.14,.55,.14),B=new G(O,e);B.position.set(-.38,1.1,0),B.castShadow=!0,s.add(B);const X=new G(O,e);X.position.set(.38,1.1,0),X.castShadow=!0,s.add(X);const q=new ke(.16,.5,.16),H=new G(q,e);H.position.set(-.14,.25,0),H.castShadow=!0,s.add(H);const z=new G(q,e);z.position.set(.14,.25,0),z.castShadow=!0,s.add(z);const Q=new ke(.5,.06,1.6),le=new G(Q,r);le.position.y=.03,le.castShadow=!0,s.add(le);const ae=new ke(.51,.065,.45),fe=new G(ae,a);fe.position.y=.035,s.add(fe);const Ge=new os(.08,12),Ne=new G(Ge,o);Ne.position.set(0,.065,.2),Ne.rotation.x=-Math.PI/2,s.add(Ne);const at=new ke(.04,.12,.15),et=new G(at,o);et.position.set(0,-.03,-.7),et.castShadow=!0,s.add(et);const Y=new G(at,o);Y.position.set(-.12,-.03,-.55),Y.rotation.y=.2,Y.scale.set(.8,.8,.8),s.add(Y);const j=new G(at,o);return j.position.set(.12,-.03,-.55),j.rotation.y=-.2,j.scale.set(.8,.8,.8),s.add(j),{group:s,leftArm:B,rightArm:X,leftLeg:H,rightLeg:z,board:le,hair:C}}class o0{time=0;leftArm;rightArm;leftLeg;rightLeg;hair;board;constructor(e){this.leftArm=e.leftArm,this.rightArm=e.rightArm,this.leftLeg=e.leftLeg,this.rightLeg=e.rightLeg,this.board=e.board,this.hair=e.hair}update(e,t,n){switch(this.time+=e*n*.5,t){case"running":{const i=Math.sin(this.time*2)*.35;this.leftArm.rotation.x=i,this.rightArm.rotation.x=-i,this.leftLeg.rotation.x=-i*.8,this.rightLeg.rotation.x=i*.8,this.board.rotation.z=Math.sin(this.time)*.03,this.hair.position.z=Math.sin(this.time*3)*.02;break}case"jumping":{this.leftArm.rotation.x=-.6,this.rightArm.rotation.x=-.6,this.leftArm.rotation.z=-.4,this.rightArm.rotation.z=.4,this.leftLeg.rotation.x=.2,this.rightLeg.rotation.x=.2,this.board.rotation.z=0;break}case"sliding":{this.leftArm.rotation.x=.8,this.rightArm.rotation.x=.8,this.leftLeg.rotation.x=-.6,this.rightLeg.rotation.x=-.6,this.board.rotation.z=0;break}case"dead":{const i=Math.min(this.time*.5,1);this.leftArm.rotation.x=i*1.2,this.rightArm.rotation.x=i*-.8,this.leftArm.rotation.z=-i*.5,this.rightArm.rotation.z=i*.7,this.leftLeg.rotation.x=i*.5,this.rightLeg.rotation.x=i*-.3;break}}}reset(){this.time=0,this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.board.rotation.set(0,0,0)}}const c0=25,l0=11,h0=16,u0=12,d0=.8;class f0{mesh;laneIndex=Gr;targetX;velocityY=0;grounded=!0;state="running";slideTimer=0;originalScaleY=1;shieldMesh=null;posZ=0;scene;animator;constructor(e){this.scene=e;const t=a0();this.mesh=t.group,this.animator=new o0(t),this.targetX=zr(this.laneIndex),this.mesh.position.set(this.targetX,0,0),this.scene.add(this.mesh),bt.on("input:swipe",this.onSwipe),bt.on("input:jump",this.onJump),bt.on("input:slide",this.onSlide)}onSwipe=(...e)=>{const t=e[0];this.state!=="dead"&&(t==="left"&&this.laneIndex>s0?this.laneIndex--:t==="right"&&this.laneIndex<r0&&this.laneIndex++,this.targetX=zr(this.laneIndex))};onJump=()=>{this.state!=="dead"&&this.grounded&&(this.state==="sliding"&&this.endSlide(),this.velocityY=l0,this.grounded=!1,this.state="jumping")};onSlide=()=>{this.state!=="dead"&&this.grounded&&this.state!=="sliding"&&(this.state="sliding",this.slideTimer=d0,this.originalScaleY=this.mesh.scale.y,this.mesh.scale.y=.45,this.mesh.position.y=0)};endSlide(){this.mesh.scale.y=this.originalScaleY,this.state="running",this.slideTimer=0}update(e,t){if(this.state==="dead")return;this.posZ+=t*e,this.mesh.position.z=this.posZ;const n=_l(u0*e,0,1);this.mesh.position.x=ti(this.mesh.position.x,this.targetX,n),this.grounded||(this.velocityY-=c0*e,this.mesh.position.y+=this.velocityY*e,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.velocityY=0,this.grounded=!0,this.state==="jumping"&&(this.state="running"))),this.state==="sliding"&&(this.slideTimer-=e,this.slideTimer<=0&&this.endSlide()),this.animator.update(e,this.state,t)}die(){this.state="dead"}rampJump(){this.state!=="dead"&&(this.state==="sliding"&&this.endSlide(),this.velocityY=h0,this.grounded=!1,this.state="jumping")}setShieldVisible(e){if(e&&!this.shieldMesh){const t=new pt(.9,16,12),n=new J({color:4500223,emissive:2263295,emissiveIntensity:.4,transparent:!0,opacity:.25,side:ft});this.shieldMesh=new G(t,n),this.shieldMesh.position.y=.8,this.mesh.add(this.shieldMesh)}this.shieldMesh&&(this.shieldMesh.visible=e)}reset(){this.laneIndex=Gr,this.targetX=zr(Gr),this.mesh.position.set(this.targetX,0,0),this.mesh.scale.y=1,this.velocityY=0,this.grounded=!0,this.state="running",this.posZ=0,this.slideTimer=0,this.setShieldVisible(!1),this.animator.reset()}_hitbox=new ii(new D,new D);getHitbox(){const t=this.state==="sliding"?.7:1.6,n=.2,i=this.mesh.position.x,r=this.mesh.position.y,a=this.mesh.position.z;return this._hitbox.min.set(i-.3,r,a-n),this._hitbox.max.set(i+.3,r+t,a+n),this._hitbox}dispose(){bt.off("input:swipe",this.onSwipe),bt.off("input:jump",this.onJump),bt.off("input:slide",this.onSlide),this.scene.remove(this.mesh)}}const Yt=30,kr=6,Sc=za*2+4,p0=`
  varying vec2 vUv;
  varying vec3 vWorldPos;
  void main() {
    vUv = uv;
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,m0=`
  uniform vec3 uSandColor;
  uniform vec3 uDarkSand;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vWorldPos;

  // Simple hash noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    // Multi-octave noise for sand grain detail
    vec2 wp = vWorldPos.xz;
    float n1 = noise(wp * 2.0);
    float n2 = noise(wp * 6.0) * 0.5;
    float n3 = noise(wp * 18.0) * 0.25;
    float sandNoise = (n1 + n2 + n3) / 1.75;

    // Blend between sand color and darker sand
    vec3 color = mix(uDarkSand, uSandColor, sandNoise);

    // Subtle wet patches near center of track
    float centerDist = abs(vWorldPos.x) / 4.0;
    float wet = smoothstep(0.6, 0.2, centerDist) * 0.15;
    color *= (1.0 - wet);

    // Subtle footprint-like darker streaks along Z
    float streaks = noise(vec2(vWorldPos.x * 3.0, vWorldPos.z * 0.4)) * 0.08;
    color -= vec3(streaks);

    // Very subtle specular highlight on wet sand
    float spec = smoothstep(0.7, 0.9, sandNoise) * wet * 2.0;
    color += vec3(1.0, 0.95, 0.85) * spec * 0.1;

    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
  }
`;class g0{chunks=[];furthestZ=0;sandMaterial;baseMaterial;dividerMaterial;edgeMaterial;trackGroup;scene;baseGround;constructor(e){this.scene=e,this.trackGroup=new De,this.scene.add(this.trackGroup),this.sandMaterial=new wt({vertexShader:p0,fragmentShader:m0,uniforms:{uSandColor:{value:new D(.91,.84,.69)},uDarkSand:{value:new D(.76,.68,.55)},uTime:{value:0}}}),this.dividerMaterial=new J({color:13482384,roughness:.9}),this.edgeMaterial=new J({color:12626048,roughness:.8}),this.baseMaterial=new J({color:15785920,roughness:.95});const t=new It(80,400);t.rotateX(-Math.PI/2),this.baseGround=new G(t,this.baseMaterial),this.baseGround.position.y=-.02,this.baseGround.receiveShadow=!0,this.scene.add(this.baseGround);for(let n=0;n<kr;n++)this.createChunk(n*Yt);this.furthestZ=kr*Yt}createChunk(e){const t=new De;t.position.set(0,0,e+Yt/2);const n=new It(Sc,Yt);n.rotateX(-Math.PI/2);const i=new G(n,this.sandMaterial);i.receiveShadow=!0,t.add(i);for(let r=0;r<En.length-1;r++){const a=(En[r]+En[r+1])/2,o=new ke(.05,.02,Yt),c=new G(o,this.dividerMaterial);c.position.set(a,.02,0),c.receiveShadow=!0,t.add(c)}for(const r of[-4.35,Sc/2-.15]){const a=new ke(.3,.02,Yt),o=new G(a,this.edgeMaterial);o.position.set(r,.02,0),o.receiveShadow=!0,t.add(o)}this.trackGroup.add(t),this.chunks.push(t)}setColors(e,t,n,i){const r=(e>>16&255)/255,a=(e>>8&255)/255,o=(e&255)/255;this.sandMaterial.uniforms.uSandColor.value.set(r,a,o),this.sandMaterial.uniforms.uDarkSand.value.set(r*.82,a*.82,o*.82),this.baseMaterial.color.setHex(t),this.dividerMaterial.color.setHex(n),this.edgeMaterial.color.setHex(i)}reset(){for(let e=0;e<this.chunks.length;e++)this.chunks[e].position.z=e*Yt+Yt/2;this.furthestZ=kr*Yt,this.baseGround.position.z=80}update(e){this.baseGround.position.z=e+80;for(const t of this.chunks)t.position.z-Yt/2<e-Yt&&(t.position.z=this.furthestZ+Yt/2,this.furthestZ+=Yt)}dispose(){this.chunks.forEach(e=>{this.trackGroup.remove(e)}),this.sandMaterial.dispose(),this.scene.remove(this.trackGroup),this.scene.remove(this.baseGround)}}class _0{geometries=new Map;materials=new Map;getGeometry(e,t){let n=this.geometries.get(e);return n||(n=t(),this.geometries.set(e,n)),n}getMaterial(e,t){let n=this.materials.get(e);return n||(n=t(),this.materials.set(e,n)),n}getStandardMaterial(e,t){return this.getMaterial(e,t)}getBasicMaterial(e,t){return this.getMaterial(e,t)}dispose(){for(const e of this.geometries.values())e.dispose();for(const e of this.materials.values())e.dispose();this.geometries.clear(),this.materials.clear()}}const co=new _0;function yc(s="chapadmalal"){switch(s){case"rambla":return y0();case"carilo":return C0();case"rutaCostera":return U0();default:switch(Math.floor(Math.random()*4)){case 0:return vl();case 1:return v0();case 2:return S0();default:return x0()}}}function bc(s="chapadmalal"){switch(s){case"rambla":return b0();case"carilo":return R0();case"rutaCostera":return N0();default:return Math.floor(Math.random()*2)===0?M0():ir()}}function Fe(s,e){return co.getGeometry(s,e)}function qe(s,e){return co.getStandardMaterial(s,e)}function vl(){const s=[8022877,9141611,7234137],e=s[Math.floor(Math.random()*s.length)],t=Fe("obs_rock",()=>{const r=new Qs(.55,1);return r.scale(1.6,.85,.9),r}),n=qe(`obs_rock_${e}`,()=>new J({color:e,roughness:.9})),i=new G(t,n);return i.castShadow=!0,i.receiveShadow=!0,i.userData.boxW=1.8,i.userData.boxH=.9,i.userData.boxD=.8,i}function v0(){const s=Fe("obs_driftwood",()=>{const n=new Oe(.15,.2,2,6);return n.rotateZ(Math.PI/2),n}),e=qe("obs_driftwood_mat",()=>new J({color:10518624,roughness:.85})),t=new G(s,e);return t.castShadow=!0,t.receiveShadow=!0,t.userData.boxW=2,t.userData.boxH=.4,t.userData.boxD=.4,t}function x0(){const s=Fe("obs_sandwall",()=>new ke(1.8,.7,.6)),e=qe("obs_sandwall_mat",()=>new J({color:14731413,roughness:.95})),t=new G(s,e);return t.castShadow=!0,t.receiveShadow=!0,t.userData.boxW=1.8,t.userData.boxH=.7,t.userData.boxD=.6,t}function M0(){const s=new De,e=qe("obs_umb_pole",()=>new J({color:13421772,metalness:.4,roughness:.5})),t=Fe("obs_umb_pole_geo",()=>{const d=new Oe(.04,.04,2.2,6);return d.rotateZ(Math.PI/2),d}),n=new G(t,e);n.castShadow=!0,s.add(n);const i=[16729190,4500223,16763904],r=i[Math.floor(Math.random()*i.length)],a=Fe("obs_umb_canopy",()=>new Fn(.7,.4,8,1,!0)),o=qe(`obs_umb_canopy_${r}`,()=>new J({color:r,roughness:.7,side:ft})),c=new G(a,o);c.rotation.x=Math.PI,c.position.y=.1,c.castShadow=!0,s.add(c);const l=Fe("obs_umb_hit",()=>new ke(2,1.2,.3)),h=qe("obs_invisible",()=>new J({visible:!1})),u=new G(l,h);return u.add(s),u.castShadow=!0,u.userData.boxW=2,u.userData.boxH=1.2,u.userData.boxD=.3,u}function S0(){const s=new De,e=qe("obs_mate_gourd",()=>new J({color:7029795,roughness:.8})),t=Fe("obs_mate_gourd_geo",()=>{const _=new pt(.45,10,8);return _.scale(1,.85,1),_}),n=new G(t,e);n.position.y=0,n.castShadow=!0,s.add(n);const i=qe("obs_mate_rim",()=>new J({color:12632256,metalness:.7,roughness:.3})),r=Fe("obs_mate_rim_geo",()=>{const _=new Gn(.32,.04,8,16);return _.rotateX(Math.PI/2),_}),a=new G(r,i);a.position.y=.32,s.add(a);const o=qe("obs_mate_yerba",()=>new J({color:4025134,roughness:.9})),c=Fe("obs_mate_yerba_geo",()=>{const _=new os(.3,10);return _.rotateX(-Math.PI/2),_}),l=new G(c,o);l.position.y=.33,s.add(l);const h=Fe("obs_mate_bomb",()=>new Oe(.025,.03,1,6)),u=new G(h,i);u.position.set(.1,.6,0),u.rotation.z=-.25,u.castShadow=!0,s.add(u);const d=Fe("obs_mate_filter",()=>{const _=new pt(.05,6,4);return _.scale(1.2,.5,1.2),_}),p=new G(d,i);return p.position.set(0,.15,0),s.add(p),si(s,1,1.2,1)}function ir(){const s=new De,e=qe("obs_wood_barrier",()=>new J({color:10514496,roughness:.8})),t=Fe("obs_wood_plank",()=>new ke(2.2,.15,.1)),n=new G(t,e);n.position.y=.1,n.castShadow=!0,s.add(n);const i=new G(t,e);i.position.y=-.15,i.castShadow=!0,s.add(i);const r=Fe("obs_wood_pole",()=>new Oe(.04,.05,1.6,5));for(const l of[-.9,.9]){const h=new G(r,e);h.position.set(l,-.5,0),h.castShadow=!0,s.add(h)}const a=Fe("obs_wood_hit",()=>new ke(2.2,1.2,.2)),o=qe("obs_invisible",()=>new J({visible:!1})),c=new G(a,o);return c.add(s),c.castShadow=!0,c.userData.boxW=2.2,c.userData.boxH=1.2,c.userData.boxD=.2,c}function y0(){switch(Math.floor(Math.random()*3)){case 0:return w0();case 1:return E0();default:return T0()}}function b0(){return Math.floor(Math.random()*2)===0?A0():ir()}function w0(){const s=new De,e=qe("obs_bench_wood",()=>new J({color:9136404,roughness:.8})),t=qe("obs_bench_metal",()=>new J({color:5592405,metalness:.5,roughness:.4})),n=Fe("obs_bench_seat",()=>new ke(1.6,.08,.5)),i=new G(n,e);i.position.y=.45,i.castShadow=!0,s.add(i);const r=Fe("obs_bench_back",()=>new ke(1.6,.5,.06)),a=new G(r,e);a.position.set(0,.72,-.2),a.rotation.x=-.1,a.castShadow=!0,s.add(a);const o=Fe("obs_bench_leg",()=>new Oe(.03,.03,.45,5));for(const c of[-.6,.6])for(const l of[-.15,.15]){const h=new G(o,t);h.position.set(c,.22,l),s.add(h)}return si(s,1.6,1,.6)}function E0(){const s=new De,e=qe("obs_bike_frame",()=>new J({color:14496563,metalness:.3,roughness:.5})),t=qe("obs_bike_wheel",()=>new J({color:3355443,roughness:.7})),n=Fe("obs_bike_frame",()=>new Oe(.03,.03,1,5)),i=new G(n,e);i.rotation.z=Math.PI/6,i.position.set(0,.5,0),i.castShadow=!0,s.add(i);const r=Fe("obs_bike_wheel",()=>new Gn(.3,.04,8,16));for(const c of[-.4,.4]){const l=new G(r,t);l.position.set(c,.3,0),l.rotation.y=Math.PI/2,s.add(l)}const a=Fe("obs_bike_bar",()=>{const c=new Oe(.02,.02,.4,5);return c.rotateZ(Math.PI/2),c}),o=new G(a,e);return o.position.set(.3,.8,0),s.add(o),si(s,1.2,1,.6)}function T0(){const s=new De,e=qe("obs_cart_body",()=>new J({color:13404211,roughness:.7})),t=qe("obs_cart_metal",()=>new J({color:8947848,metalness:.4,roughness:.5})),n=Fe("obs_cart_body",()=>new ke(1.2,.6,.8)),i=new G(n,e);i.position.y=.5,i.castShadow=!0,s.add(i);const r=Fe("obs_cart_wheel",()=>{const l=new Oe(.15,.15,.08,8);return l.rotateX(Math.PI/2),l});for(const l of[-.5,.5]){const h=new G(r,t);h.position.set(l,.15,.35),s.add(h)}const a=Fe("obs_cart_canopy",()=>new ke(1.4,.05,1)),o=qe("obs_cart_canopy",()=>new J({color:16737792,roughness:.7})),c=new G(a,o);return c.position.set(0,1.1,0),c.castShadow=!0,s.add(c),si(s,1.4,1,1)}function A0(){const s=new De,e=qe("obs_banner_pole",()=>new J({color:8947848,metalness:.5,roughness:.4})),t=[16737792,3377407,13382451],n=t[Math.floor(Math.random()*t.length)],i=qe(`obs_banner_${n}`,()=>new J({color:n,roughness:.7,side:ft})),r=Fe("obs_banner_pole",()=>new Oe(.04,.04,1.8,6));for(const u of[-1,1]){const d=new G(r,e);d.position.set(u,-.4,0),d.castShadow=!0,s.add(d)}const a=Fe("obs_banner_plane",()=>new It(2,.6)),o=new G(a,i);o.position.y=0,o.castShadow=!0,s.add(o);const c=Fe("obs_banner_hit",()=>new ke(2.2,1.2,.3)),l=qe("obs_invisible",()=>new J({visible:!1})),h=new G(c,l);return h.add(s),h.castShadow=!0,h.userData.boxW=2.2,h.userData.boxH=1.2,h.userData.boxD=.3,h}function C0(){switch(Math.floor(Math.random()*3)){case 0:return P0();case 1:return D0();default:return L0()}}function R0(){return Math.floor(Math.random()*2)===0?I0():ir()}function P0(){const s=Fe("obs_trunk",()=>{const n=new Oe(.25,.3,2,7);return n.rotateZ(Math.PI/2),n}),e=qe("obs_trunk_mat",()=>new J({color:5913114,roughness:.9})),t=new G(s,e);return t.castShadow=!0,t.receiveShadow=!0,t.userData.boxW=2,t.userData.boxH=.5,t.userData.boxD=.5,t}function D0(){const s=new De,e=qe("obs_root_mat",()=>new J({color:4860426,roughness:.9})),t=Fe("obs_root_geo",()=>new Oe(.06,.1,1.2,5));for(let n=0;n<4;n++){const i=new G(t,e);i.rotation.z=Math.PI/2+(Math.random()-.5)*.4,i.position.set((Math.random()-.5)*.8,.08,(Math.random()-.5)*.3),i.castShadow=!0,s.add(i)}return si(s,1.6,.5,.6)}function L0(){const s=new De,e=qe("obs_mush_stem",()=>new J({color:14538944,roughness:.8})),t=qe("obs_mush_cap",()=>new J({color:13382434,roughness:.6})),n=Fe("obs_mush_stem",()=>new Oe(.15,.2,.5,6)),i=new G(n,e);i.position.y=.25,i.castShadow=!0,s.add(i);const r=Fe("obs_mush_cap",()=>new pt(.45,8,6,0,Math.PI*2,0,Math.PI/2)),a=new G(r,t);a.position.y=.5,a.castShadow=!0,s.add(a);const o=qe("obs_mush_spot",()=>new J({color:16777215,roughness:.7})),c=Fe("obs_mush_spot",()=>new pt(.05,5,4));for(let l=0;l<5;l++){const h=new G(c,o),u=l/5*Math.PI*2;h.position.set(Math.cos(u)*.3,.6+Math.random()*.1,Math.sin(u)*.3),s.add(h)}return si(s,1,.9,1)}function I0(){const s=new De,e=qe("obs_branch_mat",()=>new J({color:4863264,roughness:.85})),t=qe("obs_branch_leaf",()=>new J({color:2976544,roughness:.7})),n=Fe("obs_branch_geo",()=>{const l=new Oe(.06,.1,2.4,5);return l.rotateZ(Math.PI/2),l}),i=new G(n,e);i.castShadow=!0,s.add(i);const r=Fe("obs_branch_leaf_geo",()=>new pt(.25,6,5));for(let l=0;l<6;l++){const h=new G(r,t);h.position.set((Math.random()-.5)*1.8,(Math.random()-.5)*.3,(Math.random()-.5)*.3),h.scale.y=.5,s.add(h)}const a=Fe("obs_branch_hit",()=>new ke(2.2,1.2,.5)),o=qe("obs_invisible",()=>new J({visible:!1})),c=new G(a,o);return c.add(s),c.castShadow=!0,c.userData.boxW=2.2,c.userData.boxH=1.2,c.userData.boxD=.5,c}function U0(){switch(Math.floor(Math.random()*3)){case 0:return F0();case 1:return O0();default:return vl()}}function N0(){return Math.floor(Math.random()*2)===0?B0():ir()}function F0(){const s=new De,e=qe("obs_tcone_mat",()=>new J({color:16737792,roughness:.6})),t=qe("obs_tcone_stripe",()=>new J({color:16777215,roughness:.7})),n=Fe("obs_tcone_geo",()=>new Fn(.25,.8,6)),i=new G(n,e);i.position.y=.4,i.castShadow=!0,s.add(i);const r=Fe("obs_tcone_stripe_geo",()=>new Oe(.18,.2,.1,6)),a=new G(r,t);a.position.y=.35,s.add(a);const o=Fe("obs_tcone_base",()=>new ke(.5,.06,.5)),c=new G(o,e);return c.position.y=.03,s.add(c),si(s,.8,.9,.8)}function O0(){const s=Fe("obs_tire",()=>{const n=new Gn(.35,.15,8,16);return n.rotateX(Math.PI/2),n}),e=qe("obs_tire_mat",()=>new J({color:2763306,roughness:.9})),t=new G(s,e);return t.position.y=.15,t.castShadow=!0,t.receiveShadow=!0,t.userData.boxW=1,t.userData.boxH=.5,t.userData.boxD=1,t}function B0(){const s=new De,e=qe("obs_rsign_pole",()=>new J({color:8947848,metalness:.5,roughness:.4})),t=qe("obs_rsign_sign",()=>new J({color:16763904,roughness:.5})),n=Fe("obs_rsign_pole",()=>new Oe(.04,.04,1.8,6)),i=new G(n,e);i.position.set(0,-.4,0),i.castShadow=!0,s.add(i);const r=Fe("obs_rsign_sign",()=>new ke(.8,.8,.05)),a=new G(r,t);a.rotation.z=Math.PI/4,a.position.y=.2,a.castShadow=!0,s.add(a);const o=Fe("obs_rsign_bar",()=>{const d=new Oe(.03,.03,2,5);return d.rotateZ(Math.PI/2),d}),c=new G(o,e);c.position.y=-.2,s.add(c);const l=Fe("obs_rsign_hit",()=>new ke(2,1.2,.3)),h=qe("obs_invisible",()=>new J({visible:!1})),u=new G(l,h);return u.add(s),u.castShadow=!0,u.userData.boxW=2,u.userData.boxH=1.2,u.userData.boxD=.3,u}function si(s,e,t,n){const i=Fe(`obs_hitbox_${e}_${t}_${n}`,()=>new ke(e,t,n)),r=qe("obs_invisible",()=>new J({visible:!1})),a=new G(i,r);return a.add(s),a.castShadow=!0,a.userData.boxW=e,a.userData.boxH=t,a.userData.boxD=n,a}const G0=15,z0=30;class k0{obstacles=[];nextSpawnZ=30;group;scene;currentZone="chapadmalal";constructor(e){this.scene=e,this.group=new De,this.scene.add(this.group)}update(e,t){for(;this.nextSpawnZ<e+100;)this.spawn(this.nextSpawnZ),this.nextSpawnZ+=ss(G0,z0);for(const n of this.obstacles)n.active&&n.worldZ<e-10&&(n.active=!1,n.mesh.visible=!1,this.group.remove(n.mesh));this.obstacles.length>50&&(this.obstacles=this.obstacles.filter(n=>n.active))}spawn(e){const t=On(0,2),n=Math.random()<.7?"low":"high",i=n==="low"?yc(this.currentZone):bc(this.currentZone),r=En[t];n==="low"?i.position.set(r,.45,e):i.position.set(r,1.4,e),this.group.add(i),this.obstacles.push({mesh:i,lane:t,worldZ:e,type:n,active:!0})}spawnFromPattern(e,t){const n=t+(e.length>0?Math.max(...e.map(i=>i.offsetZ))+5:40);for(const i of this.obstacles)i.active&&i.worldZ>=t-5&&i.worldZ<=n&&(i.active=!1,i.mesh.visible=!1,this.group.remove(i.mesh));for(const i of e){const r=i.type==="low"?yc(this.currentZone):bc(this.currentZone),a=En[i.lane],o=t+i.offsetZ;i.type==="low"?r.position.set(a,.45,o):r.position.set(a,1.4,o),this.group.add(r),this.obstacles.push({mesh:r,lane:i.lane,worldZ:o,type:i.type,active:!0})}}suppressUntil(e){this.nextSpawnZ<e&&(this.nextSpawnZ=e)}getActiveNear(e,t=2){return this.obstacles.filter(n=>n.active&&Math.abs(n.worldZ-e)<t)}reset(){for(const e of this.obstacles)e.mesh.visible=!1,this.group.remove(e.mesh);this.obstacles=[],this.nextSpawnZ=30}dispose(){this.reset(),this.scene.remove(this.group)}}class V0{pool=[];factory;resetFn;constructor(e,t,n=0){this.factory=e,this.resetFn=t;for(let i=0;i<n;i++)this.pool.push(this.factory())}get(){if(this.pool.length>0){const e=this.pool.pop();return this.resetFn(e),e}return this.factory()}release(e){this.pool.push(e)}get size(){return this.pool.length}}function H0(){const s=[];for(let r=0;r<=12;r++){const a=r/12,o=a*Math.PI,c=Math.sin(o)*.09+.03,l=(a-.5)*.35;s.push(new Ee(c,l))}const t=new ro(s,16,0,Math.PI),n=new J({color:13931066,roughness:.4,metalness:.05,emissive:12877610,emissiveIntensity:.2}),i=new G(t,n);return i.castShadow=!0,i.scale.set(1.35,1.35,1.35),i.rotation.x=-Math.PI/2,i}const wc=8,Ec=18,W0=6,Tc=15;class X0{items=[];pool;nextSpawnZ=15;group;scene;lastCollectedCount=0;constructor(e){this.scene=e,this.group=new De,this.scene.add(this.group),this.pool=new V0(()=>H0(),t=>{t.visible=!0},12)}update(e,t,n=!1,i=0){for(;this.nextSpawnZ<e+100;)this.spawn(this.nextSpawnZ),this.nextSpawnZ+=ss(wc,Ec);for(const r of this.items){if(!r.active)continue;r.mesh.rotation.y+=2.5*t,r.mesh.rotation.z=Math.sin(Date.now()*.003+r.worldZ*.5)*.1;const a=1+Math.sin(Date.now()*.004+r.worldZ)*.2;if(n){const o=i-r.mesh.position.x,c=e-r.worldZ;Math.sqrt(o*o+c*c)<W0?(r.mesh.position.x=ti(r.mesh.position.x,i,Tc*t),r.mesh.position.y=ti(r.mesh.position.y,1,Tc*t)):r.mesh.position.y=a}else r.mesh.position.y=a;r.worldZ<e-10&&this.deactivate(r)}this.items.length>60&&(this.items=this.items.filter(r=>r.active))}spawn(e){const t=On(0,2),n=On(3,5),i=En[t];for(let r=0;r<n;r++){const a=this.pool.get(),o=e+r*2.5;a.position.set(i,1,o),this.group.add(a),this.items.push({mesh:a,lane:t,worldZ:o,active:!0,points:10})}this.nextSpawnZ=e+n*2.5+ss(wc,Ec)}spawnFromPattern(e,t){for(const n of e){const i=this.pool.get(),r=En[n.lane],a=t+n.offsetZ;i.position.set(r,1,a),this.group.add(i),this.items.push({mesh:i,lane:n.lane,worldZ:a,active:!0,points:10})}}suppressUntil(e){this.nextSpawnZ<e&&(this.nextSpawnZ=e)}deactivate(e){e.active=!1,e.mesh.visible=!1,this.group.remove(e.mesh),this.pool.release(e.mesh)}checkCollection(e,t,n,i=!1){let r=0,a=0;const o=i?3:1,c=i?3:1.2;for(const l of this.items){if(!l.active)continue;const h=Math.abs(l.mesh.position.x-e),u=Math.abs(l.mesh.position.y-(t+1)),d=Math.abs(l.worldZ-n);h<o&&u<c&&d<c&&(r+=l.points,a++,this.deactivate(l))}return this.lastCollectedCount=a,r}reset(){for(const e of this.items)e.mesh.visible=!1,this.group.remove(e.mesh),this.pool.release(e.mesh);this.items=[],this.nextSpawnZ=15,this.lastCollectedCount=0}dispose(){this.reset(),this.scene.remove(this.group)}}const Ac="surftrip3d_hiscore";class q0{score=0;hiScore=0;coins=0;displayMultiplier=1;constructor(){this.hiScore=parseInt(localStorage.getItem(Ac)??"0",10)}addDistance(e,t=1){this.score+=Math.round(e*t)}addPoints(e,t=1){const n=Math.round(e*t);this.score+=n,this.coins+=n}finalise(){const e=this.score>this.hiScore;return e&&(this.hiScore=this.score,localStorage.setItem(Ac,String(this.hiScore))),e}reset(){this.score=0,this.coins=0,this.displayMultiplier=1}}const Is=12,Z0=30,Y0=.15;class K0{speed=Is;elapsed=0;update(e){this.elapsed+=e,this.speed=_l(Is+this.elapsed*Y0,Is,Z0)}reset(){this.speed=Is,this.elapsed=0}}const qi={magnet:{duration:10,weight:30,color:16729156,emissive:16720418},shield:{duration:0,weight:25,color:4500223,emissive:2263295},multiplier:{duration:15,weight:25,color:16768256,emissive:16755200},megawave:{duration:8,weight:10,color:65450,emissive:56712},slowmo:{duration:5,weight:10,color:13395711,emissive:11158749}},$0=80,j0=160;class J0{items=[];activeEffects=new Map;nextSpawnZ=60;group;scene;constructor(e){this.scene=e,this.group=new De,this.scene.add(this.group)}update(e,t){for(;this.nextSpawnZ<e+120;)this.spawn(this.nextSpawnZ),this.nextSpawnZ+=ss($0,j0);const n=Date.now()*.003;for(const i of this.items)i.active&&(i.mesh.rotation.y+=3*t,i.mesh.position.y=1.2+Math.sin(n+i.worldZ)*.3,i.worldZ<e-10&&this.deactivateItem(i));this.items.length>20&&(this.items=this.items.filter(i=>i.active));for(const[i,r]of this.activeEffects)r.remaining-=t,r.remaining<=0&&this.activeEffects.delete(i)}spawn(e){const t=this.weightedRandomType(),n=On(0,2),i=En[n],r=qi[t],a=this.createPowerUpMesh(t,r.color,r.emissive);a.position.set(i,1.2,e),this.group.add(a),this.items.push({mesh:a,worldZ:e,lane:n,type:t,active:!0})}weightedRandomType(){const e=Object.keys(qi),t=e.reduce((i,r)=>i+qi[r].weight,0);let n=Math.random()*t;for(const i of e)if(n-=qi[i].weight,n<=0)return i;return e[0]}createPowerUpMesh(e,t,n){const i=new De,r=new Gn(.4,.06,8,16),a=new J({color:n,emissive:n,emissiveIntensity:.8,transparent:!0,opacity:.7}),o=new G(r,a);o.rotation.x=Math.PI/2,i.add(o);let c;switch(e){case"magnet":{const l=new Gn(.2,.08,8,12,Math.PI),h=new J({color:t,emissive:n,emissiveIntensity:.5});c=new G(l,h);break}case"shield":{const l=new Zs(.22,0),h=new J({color:t,emissive:n,emissiveIntensity:.5});c=new G(l,h);break}case"multiplier":{const l=new Zs(.2,0),h=new J({color:t,emissive:n,emissiveIntensity:.6});c=new G(l,h),c.scale.set(1,1.4,1);break}case"megawave":{const l=new pt(.2,12,8),h=new J({color:t,emissive:n,emissiveIntensity:.6});c=new G(l,h);break}case"slowmo":{const l=new Oe(.18,.18,.08,16),h=new J({color:t,emissive:n,emissiveIntensity:.5});c=new G(l,h);break}}return i.add(c),i}checkCollection(e,t,n){for(const i of this.items){if(!i.active)continue;const r=Math.abs(i.mesh.position.x-e),a=Math.abs(i.mesh.position.y-(t+1)),o=Math.abs(i.worldZ-n);if(r<1.2&&a<1.5&&o<1.5)return this.deactivateItem(i),this.activate(i.type),i.type}return null}activate(e){const t=qi[e];e==="shield"?this.activeEffects.set(e,{type:e,remaining:9999,duration:9999}):this.activeEffects.set(e,{type:e,remaining:t.duration,duration:t.duration})}deactivateItem(e){e.active=!1,e.mesh.visible=!1,this.group.remove(e.mesh)}useShield(){return this.activeEffects.has("shield")?(this.activeEffects.delete("shield"),!0):!1}isActive(e){return this.activeEffects.has(e)}getEffect(e){return this.activeEffects.get(e)}getScoreMultiplier(){return this.activeEffects.has("multiplier")?2:1}getSpeedMultiplier(){return this.activeEffects.has("slowmo")?.5:1}isInvincible(){return this.activeEffects.has("megawave")}isMagnetActive(){return this.activeEffects.has("magnet")}getActiveEffects(){return Array.from(this.activeEffects.values())}reset(){for(const e of this.items)e.mesh.visible=!1,this.group.remove(e.mesh);this.items=[],this.activeEffects.clear(),this.nextSpawnZ=60}dispose(){this.reset(),this.scene.remove(this.group)}}const Q0=3,eg=5,tg=15;class ng{combo=0;multiplier=1;timeSinceLastCollect=0;levelUpThisFrame=!1;brokeThisFrame=!1;update(e){this.levelUpThisFrame=!1,this.brokeThisFrame=!1,this.combo>0&&(this.timeSinceLastCollect+=e,this.timeSinceLastCollect>=Q0&&(this.combo=0,this.multiplier=1,this.brokeThisFrame=!0))}addCollect(e){const t=this.multiplier;this.combo+=e,this.timeSinceLastCollect=0,this.combo>=tg?this.multiplier=3:this.combo>=eg?this.multiplier=2:this.multiplier=1,this.multiplier>t&&(this.levelUpThisFrame=!0)}reset(){this.combo=0,this.multiplier=1,this.timeSinceLastCollect=0,this.levelUpThisFrame=!1,this.brokeThisFrame=!1}}function ig(){const s=[],e=[];for(let n=0;n<40;n+=8){const i=On(0,2);if(s.push({lane:i,offsetZ:n,type:"low"}),Math.random()<.3){const r=(i+On(1,2))%3;s.push({lane:r,offsetZ:n+3,type:"low"})}}for(let n=3;n<40;n+=8){const i=On(0,2);e.push({lane:i,offsetZ:n})}return{type:"rockField",length:40,obstacles:s,collectibles:e,hasRamp:!1}}function sg(){const s=[],t=On(0,2);for(let n=0;n<30;n+=2.5)s.push({lane:t,offsetZ:n});return{type:"coinCorridor",length:30,obstacles:[],collectibles:s,hasRamp:!1}}function rg(){const s=[],e=[];let n=0;for(let i=0;i<45;i+=7){s.push({lane:n,offsetZ:i,type:"low"});const r=n===0?2:0;e.push({lane:r,offsetZ:i+3}),n=n===0?2:0}for(let i=3;i<45;i+=14)s.push({lane:1,offsetZ:i,type:"high"});return{type:"slalom",length:45,obstacles:s,collectibles:e,hasRamp:!1}}function ag(){const s=[];for(let n=5;n<20;n+=2.5)s.push({lane:1,offsetZ:n});return s.push({lane:0,offsetZ:10}),s.push({lane:2,offsetZ:10}),{type:"rampJump",length:25,obstacles:[],collectibles:s,hasRamp:!0}}function og(){const s=[];for(let t=0;t<35;t+=2.5)s.push({lane:0,offsetZ:t}),s.push({lane:1,offsetZ:t}),s.push({lane:2,offsetZ:t});return{type:"bonus",length:35,obstacles:[],collectibles:s,hasRamp:!1}}const Vr=[{factory:ig,weight:25},{factory:sg,weight:25},{factory:rg,weight:20},{factory:ag,weight:15},{factory:og,weight:15}];class cg{nextPatternZ=100;currentPattern=null;patternStartZ=0;minGap=30;maxGap=60;getPatternAt(e){return this.currentPattern?(e>this.patternStartZ+this.currentPattern.length+20&&(this.nextPatternZ=this.patternStartZ+this.currentPattern.length+ss(this.minGap,this.maxGap),this.currentPattern=null),null):e+80>=this.nextPatternZ?(this.currentPattern=this.selectPattern(),this.patternStartZ=this.nextPatternZ,this.currentPattern):null}getPatternStartZ(){return this.patternStartZ}isInPatternZone(e){return this.currentPattern?e>=this.patternStartZ&&e<=this.patternStartZ+this.currentPattern.length:!1}selectPattern(){const e=Vr.reduce((n,i)=>n+i.weight,0);let t=Math.random()*e;for(const n of Vr)if(t-=n.weight,t<=0)return n.factory();return Vr[0].factory()}reset(){this.nextPatternZ=100,this.currentPattern=null,this.patternStartZ=0}}const lg={id:"chapadmalal",name:"chapadmalal",displayName:"Playa de Chapadmalal",colors:{skyZenith:[.35,.6,.92],skyHorizon:[.75,.88,.97],skyGround:[.92,.87,.78],fog:8900331,background:8900331,oceanDeep:[.08,.3,.55],oceanSurf:[.25,.65,.85],oceanFoam:[.9,.95,1],trackSand:15259056,trackBase:15785920,trackDivider:13482384,trackEdge:12626048},lighting:{sunColor:16774368,sunIntensity:1.2,sunPosition:[15,40,100],ambientIntensity:.3,hemisphereGround:16115402,sunGlow:[1,.95,.8],bloomStrength:.4},chords:[[220,261.63,329.63],[174.61,220,261.63],[261.63,329.63,392],[196,246.94,293.66]],musicTempo:214,bassType:"triangle"},hg={id:"rambla",name:"rambla",displayName:"Rambla de Mar del Plata",colors:{skyZenith:[.45,.5,.65],skyHorizon:[.7,.72,.78],skyGround:[.65,.62,.6],fog:9083562,background:9083562,oceanDeep:[.1,.25,.45],oceanSurf:[.3,.55,.7],oceanFoam:[.85,.88,.92],trackSand:11577504,trackBase:12630192,trackDivider:10064008,trackEdge:8943728},lighting:{sunColor:16771280,sunIntensity:1,sunPosition:[20,30,80],ambientIntensity:.35,hemisphereGround:12628128,sunGlow:[.9,.85,.8],bloomStrength:.35},chords:[[293.66,349.23,440],[233.08,293.66,349.23],[174.61,220,261.63],[261.63,329.63,392]],musicTempo:240,bassType:"sine"},ug={id:"carilo",name:"carilo",displayName:"Bosque de Carilo",colors:{skyZenith:[.2,.38,.28],skyHorizon:[.4,.55,.42],skyGround:[.3,.35,.25],fog:4876874,background:4876874,oceanDeep:[.06,.2,.15],oceanSurf:[.15,.4,.3],oceanFoam:[.7,.8,.7],trackSand:8022864,trackBase:6970176,trackDivider:6311992,trackEdge:5259312},lighting:{sunColor:13953216,sunIntensity:.7,sunPosition:[8,20,60],ambientIntensity:.4,hemisphereGround:5925440,sunGlow:[.6,.75,.5],bloomStrength:.3},chords:[[164.81,207.65,246.94],[220,261.63,329.63],[246.94,293.66,369.99],[164.81,207.65,246.94]],musicTempo:280,bassType:"triangle"},dg={id:"rutaCostera",name:"rutaCostera",displayName:"Ruta Costera",colors:{skyZenith:[.55,.3,.55],skyHorizon:[.9,.55,.3],skyGround:[.85,.7,.45],fog:13404245,background:13404245,oceanDeep:[.15,.1,.3],oceanSurf:[.45,.3,.55],oceanFoam:[.95,.85,.75],trackSand:8421504,trackBase:7368800,trackDivider:6316112,trackEdge:13672496},lighting:{sunColor:16746564,sunIntensity:1.4,sunPosition:[40,10,50],ambientIntensity:.25,hemisphereGround:11173952,sunGlow:[1,.6,.3],bloomStrength:.6},chords:[[293.66,369.99,440],[220,277.18,329.63],[329.63,415.3,493.88],[220,277.18,329.63]],musicTempo:200,bassType:"sawtooth"},In=[lg,hg,ug,dg],Us=500,Cc=4;class fg{currentIndex=0;nextIndex=-1;transitionProgress=0;zoneChangedThisFrame=!1;newZoneName="";get currentZone(){return In[this.currentIndex%In.length]}get nextZone(){return this.nextIndex<0?null:In[this.nextIndex%In.length]}get isTransitioning(){return this.nextIndex>=0}get progress(){return this.transitionProgress}getBlendedColors(){const e=this.currentZone.colors;if(!this.isTransitioning)return e;const t=this.nextZone.colors,n=this.transitionProgress;return pg(e,t,n)}getBlendedMusicConfig(){const e=this.currentZone;if(!this.isTransitioning||this.transitionProgress<.5)return{chords:e.chords,tempo:e.musicTempo,bassType:e.bassType};const t=this.nextZone;return{chords:t.chords,tempo:t.musicTempo,bassType:t.bassType}}update(e,t){this.zoneChangedThisFrame=!1;const n=Math.floor(e/Us),i=e-n*Us,r=Us-Cc*15;i>=r&&this.nextIndex<0&&(this.nextIndex=n+1,this.transitionProgress=0,this.zoneChangedThisFrame=!0,this.newZoneName=In[(n+1)%In.length].displayName),this.nextIndex>=0&&(this.transitionProgress+=t/Cc,this.transitionProgress>=1&&(this.currentIndex=this.nextIndex%In.length,this.nextIndex=-1,this.transitionProgress=0));const a=n%In.length;!this.isTransitioning&&this.currentIndex!==a&&e>Us&&(this.currentIndex=a)}reset(){this.currentIndex=0,this.nextIndex=-1,this.transitionProgress=0,this.zoneChangedThisFrame=!1,this.newZoneName=""}}function pg(s,e,t){return{skyZenith:Si(s.skyZenith,e.skyZenith,t),skyHorizon:Si(s.skyHorizon,e.skyHorizon,t),skyGround:Si(s.skyGround,e.skyGround,t),fog:yi(s.fog,e.fog,t),background:yi(s.background,e.background,t),oceanDeep:Si(s.oceanDeep,e.oceanDeep,t),oceanSurf:Si(s.oceanSurf,e.oceanSurf,t),oceanFoam:Si(s.oceanFoam,e.oceanFoam,t),trackSand:yi(s.trackSand,e.trackSand,t),trackBase:yi(s.trackBase,e.trackBase,t),trackDivider:yi(s.trackDivider,e.trackDivider,t),trackEdge:yi(s.trackEdge,e.trackEdge,t)}}function Si(s,e,t){return[s[0]+(e[0]-s[0])*t,s[1]+(e[1]-s[1])*t,s[2]+(e[2]-s[2])*t]}function yi(s,e,t){const n=s>>16&255,i=s>>8&255,r=s&255,a=e>>16&255,o=e>>8&255,c=e&255,l=Math.round(n+(a-n)*t),h=Math.round(i+(o-i)*t),u=Math.round(r+(c-r)*t);return l<<16|h<<8|u}const mg=`
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  varying vec3 vWorldPos;
  varying vec3 vNormal;
  void main() {
    vUv = uv;
    vec3 pos = position;
    // Three layered sine waves
    float wave1 = sin(pos.x * 0.3 + uTime * 0.8) * 0.4;
    float wave2 = sin(pos.z * 0.5 + uTime * 1.2) * 0.25;
    float wave3 = sin((pos.x + pos.z) * 0.2 + uTime * 0.5) * 0.3;
    pos.y += wave1 + wave2 + wave3;
    vWave = (wave1 + wave2 + wave3) * 0.5 + 0.5;

    // Approximate normal from wave derivatives
    float dx = 0.3 * cos(pos.x * 0.3 + uTime * 0.8) * 0.4
             + 0.2 * cos((pos.x + pos.z) * 0.2 + uTime * 0.5) * 0.3;
    float dz = 0.5 * cos(pos.z * 0.5 + uTime * 1.2) * 0.25
             + 0.2 * cos((pos.x + pos.z) * 0.2 + uTime * 0.5) * 0.3;
    vNormal = normalize(vec3(-dx, 1.0, -dz));

    vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,gg=`
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSurf;
  uniform vec3 uFoam;
  uniform vec3 uSkyColor;
  uniform vec3 uSunDir;
  uniform vec3 uCameraPos;
  varying vec2 vUv;
  varying float vWave;
  varying vec3 vWorldPos;
  varying vec3 vNormal;

  // Pseudo-random for procedural foam pattern
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec3 color = mix(uDeep, uSurf, vWave);

    // Procedural foam on wave crests
    float foamBase = smoothstep(0.68, 0.82, vWave);
    float foamNoise = noise(vUv * 60.0 + vec2(uTime * 0.3, uTime * 0.2));
    float foam = foamBase * (0.5 + foamNoise * 0.5);
    color = mix(color, uFoam, foam * 0.8);

    // White caps on highest waves
    float whiteCap = smoothstep(0.85, 0.92, vWave) * foamNoise;
    color = mix(color, vec3(1.0), whiteCap * 0.6);

    // Shimmer (high-frequency detail)
    float shimmer = sin(vUv.x * 40.0 + uTime * 2.0) * sin(vUv.y * 40.0 + uTime * 1.5);
    color += vec3(shimmer * 0.03);

    // Fake Fresnel: sky reflection at grazing angles
    vec3 viewDir = normalize(uCameraPos - vWorldPos);
    float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
    color = mix(color, uSkyColor, fresnel * 0.35);

    // Specular highlight from sun (Blinn-Phong)
    vec3 halfDir = normalize(uSunDir + viewDir);
    float spec = pow(max(dot(vNormal, halfDir), 0.0), 64.0);
    color += vec3(1.0, 0.95, 0.85) * spec * 0.6;

    gl_FragColor = vec4(color, 0.88);
  }
`;class _g{mesh;uniforms;scene;constructor(e){this.scene=e,this.uniforms={uTime:{value:0},uDeep:{value:new D(.08,.3,.55)},uSurf:{value:new D(.25,.65,.85)},uFoam:{value:new D(.9,.95,1)},uSkyColor:{value:new D(.75,.88,.97)},uSunDir:{value:new D(.4,.7,-.3).normalize()},uCameraPos:{value:new D(0,6,-10)}};const t=new It(100,300,64,64);t.rotateX(-Math.PI/2);const n=new wt({vertexShader:mg,fragmentShader:gg,uniforms:this.uniforms,transparent:!0,side:ft});this.mesh=new G(t,n),this.mesh.position.set(55,-.3,80),this.scene.add(this.mesh)}setColors(e,t,n){this.uniforms.uDeep.value.set(e[0],e[1],e[2]),this.uniforms.uSurf.value.set(t[0],t[1],t[2]),this.uniforms.uFoam.value.set(n[0],n[1],n[2])}setSkyColor(e){this.uniforms.uSkyColor.value.set(e[0],e[1],e[2])}setSunDirection(e,t,n){this.uniforms.uSunDir.value.set(e,t,n).normalize()}update(e,t,n){this.uniforms.uTime.value+=e,this.mesh.position.z=t+80,n&&this.uniforms.uCameraPos.value.copy(n.position)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.scene.remove(this.mesh)}}class vg{clouds;seagulls;scene;skyMesh;sunMesh;sunHalo;skyUniforms;sunTarget=new D(15,40,100);constructor(e){this.scene=e;const t=new pt(150,16,16);this.skyUniforms={uZenith:{value:new D(.35,.6,.92)},uHorizon:{value:new D(.75,.88,.97)},uGround:{value:new D(.92,.87,.78)},uSunGlow:{value:new D(1,.9,.7)},uSunDir:{value:new D(.2,.7,.5).normalize()}};const n=new wt({side:Bt,uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vLocalPos;
        void main() {
          vLocalPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uZenith;
        uniform vec3 uHorizon;
        uniform vec3 uGround;
        uniform vec3 uSunGlow;
        uniform vec3 uSunDir;
        varying vec3 vLocalPos;
        void main() {
          vec3 dir = normalize(vLocalPos);
          float h = dir.y;

          // Base gradient
          vec3 color = h > 0.0
            ? mix(uHorizon, uZenith, pow(h, 0.6))
            : mix(uHorizon, uGround, pow(-h, 0.4));

          // Sun glow near horizon
          float sunDot = max(dot(dir, uSunDir), 0.0);
          float sunGlow = pow(sunDot, 8.0) * 0.4;
          float sunCore = pow(sunDot, 64.0) * 0.3;
          color = mix(color, uSunGlow, sunGlow + sunCore);

          gl_FragColor = vec4(color, 1.0);
        }
      `});this.skyMesh=new G(t,n),this.scene.add(this.skyMesh),this.scene.background=new Le(8900331);const i=new pt(3,12,12),r=new Ai({color:16775904});this.sunMesh=new G(i,r),this.sunMesh.position.copy(this.sunTarget),this.scene.add(this.sunMesh);const a=new It(20,20),o=this.createHaloTexture(),c=new Wo(o),l=new Ai({map:c,transparent:!0,depthWrite:!1,blending:Hs});this.sunHalo=new G(a,l),this.sunHalo.position.copy(this.sunTarget),this.scene.add(this.sunHalo),this.clouds=new De,this.scene.add(this.clouds),this.createClouds(),this.seagulls=new De,this.scene.add(this.seagulls),this.createSeagulls()}createHaloTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d"),i=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return i.addColorStop(0,"rgba(255, 250, 220, 0.6)"),i.addColorStop(.3,"rgba(255, 220, 150, 0.2)"),i.addColorStop(1,"rgba(255, 200, 100, 0)"),n.fillStyle=i,n.fillRect(0,0,128,128),t}setColors(e,t,n){this.skyUniforms.uZenith.value.set(e[0],e[1],e[2]),this.skyUniforms.uHorizon.value.set(t[0],t[1],t[2]),this.skyUniforms.uGround.value.set(n[0],n[1],n[2])}setSunPosition(e,t,n){this.sunTarget.set(e,t,n);const i=this.sunTarget.clone().normalize();this.skyUniforms.uSunDir.value.copy(i)}setSunGlow(e,t,n){this.skyUniforms.uSunGlow.value.set(e,t,n)}createClouds(){const e=this.createCloudTexture(),t=new Wo(e);for(let n=0;n<20;n++){const i=new Ai({map:t,transparent:!0,opacity:.65+Math.random()*.2,depthWrite:!1,side:ft}),r=6+Math.random()*10,a=new It(r,r*.5),o=new G(a,i);o.position.set((Math.random()-.5)*120,25+Math.random()*20,Math.random()*200),o.rotation.x=-.3,o.userData.speedX=.3+Math.random()*.5,this.clouds.add(o)}}createCloudTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n.globalCompositeOperation="source-over";const i=[{x:.5,y:.5,r:.35},{x:.3,y:.5,r:.28},{x:.7,y:.5,r:.28},{x:.4,y:.4,r:.22},{x:.6,y:.4,r:.25}];for(const r of i){const a=n.createRadialGradient(r.x*128,r.y*128,0,r.x*128,r.y*128,r.r*128);a.addColorStop(0,"rgba(255, 255, 255, 0.8)"),a.addColorStop(.7,"rgba(255, 255, 255, 0.3)"),a.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=a,n.fillRect(0,0,128,128)}return t}createSeagulls(){const e=new J({color:15658734,roughness:.8}),t=new J({color:14540253,roughness:.7});for(let n=0;n<6;n++){const i=new De,r=new Fn(.08,.5,4);r.rotateX(Math.PI/2);const a=new G(r,t);i.add(a);const o=new xt,c=new Float32Array([0,0,0,.6,.1,0,.3,0,-.15]);o.setAttribute("position",new Gt(c,3)),o.computeVertexNormals();const l=new G(o,e);l.position.set(-.05,0,0),i.add(l);const h=new G(o.clone(),e);h.scale.x=-1,h.position.set(.05,0,0),i.add(h),i.position.set((Math.random()-.5)*40,12+Math.random()*15,Math.random()*150),i.userData.phase=Math.random()*Math.PI*2,i.userData.speedZ=.5+Math.random()*1,i.scale.setScalar(.8+Math.random()*.5),this.seagulls.add(i)}}update(e,t){this.skyMesh.position.z=t,this.sunMesh.position.set(this.sunTarget.x,this.sunTarget.y,t+this.sunTarget.z),this.sunHalo.position.copy(this.sunMesh.position),this.sunHalo.lookAt(0,6,t-10);for(const n of this.clouds.children)n.position.x+=n.userData.speedX*e,n.position.x>80&&(n.position.x=-80),n.position.z<t-30&&(n.position.z+=230);for(const n of this.seagulls.children){const i=n.userData.phase,r=n.userData.speedZ;n.position.z+=r*e,n.position.y+=Math.sin(Date.now()*.005+i)*.01,n.rotation.z=Math.sin(Date.now()*.008+i)*.15,n.position.z<t-20&&(n.position.z+=170,n.position.x=(Math.random()-.5)*40)}}dispose(){this.scene.remove(this.clouds),this.scene.remove(this.seagulls),this.scene.remove(this.sunMesh),this.scene.remove(this.sunHalo)}}class xg{group;scene;totalSpan=200;currentZone="chapadmalal";constructor(e){this.scene=e,this.group=new De,this.scene.add(this.group),this.populate()}repopulate(){for(;this.group.children.length>0;)this.group.remove(this.group.children[0]);this.populate()}populate(){const t=200/tn.settings.decorDensity;for(let n=0;n<this.totalSpan;n+=t+Math.random()*10){const r=(Math.random()<.5?-1:1)*(4+Math.random()*4);this.group.add(this.createDecorForZone(r,n))}}createDecorForZone(e,t){switch(this.currentZone){case"rambla":return this.createRamblaDecor(e,t);case"carilo":return this.createCariloDecor(e,t);case"rutaCostera":return this.createRutaDecor(e,t);default:return this.createChapadDecor(e,t)}}createChapadDecor(e,t){const n=Math.random();return n<.22?this.createUmbrella(e,t):n<.36?this.createSandcastle(e,t):n<.5?this.createBeachChair(e,t):n<.62?this.createRock(e,t):n<.74?this.createParrilla(e,t):n<.86?this.createBanderaArgentina(e,t):this.createTermoMate(e,t)}createRamblaDecor(e,t){const n=Math.random();return n<.25?this.createLampPost(e,t):n<.45?this.createParkBench(e,t):n<.6?this.createTrashCan(e,t):n<.75?this.createFlowerPot(e,t):n<.88?this.createBanderaArgentina(e,t):this.createTermoMate(e,t)}createCariloDecor(e,t){const n=Math.random();return n<.3?this.createPineTree(e,t):n<.5?this.createBush(e,t):n<.65?this.createRock(e,t):n<.78?this.createWoodLog(e,t):n<.9?this.createFern(e,t):this.createTermoMate(e,t)}createRutaDecor(e,t){const n=Math.random();return n<.25?this.createMilestone(e,t):n<.45?this.createFence(e,t):n<.6?this.createWildGrass(e,t):n<.75?this.createRock(e,t):n<.88?this.createBanderaArgentina(e,t):this.createTermoMate(e,t)}createUmbrella(e,t){const n=new De,i=new Oe(.04,.04,2.2,6),r=new J({color:13421772,metalness:.4}),a=new G(i,r);a.position.y=1.1,a.castShadow=!0,n.add(a);const o=[16729190,4500223,16763904,4513126],c=o[Math.floor(Math.random()*o.length)],l=new Fn(1.2,.6,8,1,!0),h=new J({color:c,roughness:.7,side:ft}),u=new G(l,h);return u.position.y=2.1,u.rotation.x=Math.PI,u.castShadow=!0,n.add(u),n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createSandcastle(e,t){const n=new De,i=new J({color:15259043,roughness:.9}),r=new Oe(.5,.7,.4,8),a=new G(r,i);a.position.y=.2,a.castShadow=!0,n.add(a);for(let f=0;f<4;f++){const S=f/4*Math.PI*2,w=new Oe(.12,.15,.5,6),b=new G(w,i);b.position.set(Math.cos(S)*.35,.65,Math.sin(S)*.35),b.castShadow=!0,n.add(b);const T=new Fn(.14,.15,6),A=new G(T,i);A.position.set(Math.cos(S)*.35,.97,Math.sin(S)*.35),n.add(A)}const o=new Oe(.01,.01,.3,4),c=new J({color:9136404}),l=new G(o,c);l.position.set(.35,1.1,0),n.add(l);const h=new It(.2,.04),u=new J({color:7711451,side:ft}),d=new G(h,u);d.position.set(.45,1.22,0),n.add(d);const p=new It(.2,.04),_=new J({color:16777215,side:ft}),x=new G(p,_);x.position.set(.45,1.18,0),n.add(x);const m=new G(h,u);return m.position.set(.45,1.14,0),n.add(m),n.position.set(e,0,t),n}createBeachChair(e,t){const n=new De,i=new J({color:12886893,roughness:.8}),r=[3377407,16733508,4508808],a=new J({color:r[Math.floor(Math.random()*r.length)],roughness:.7}),o=new ke(.6,.04,1),c=new G(o,i);c.position.y=.3,c.rotation.x=-.2,c.castShadow=!0,n.add(c);const l=new ke(.6,.5,.04),h=new G(l,a);h.position.set(0,.55,-.42),h.rotation.x=-.3,h.castShadow=!0,n.add(h);const u=new Oe(.02,.02,.35,4);for(const d of[-.25,.25])for(const p of[-.4,.4]){const _=new G(u,i);_.position.set(d,.15,p),n.add(_)}return n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createRock(e,t){const n=new De,i=new J({color:8947848,roughness:.9}),r=1+Math.floor(Math.random()*3);for(let a=0;a<r;a++){const o=.2+Math.random()*.4,c=new Qs(o,0),l=new G(c,i);l.position.set((Math.random()-.5)*.5,o*.5,(Math.random()-.5)*.5),l.rotation.set(Math.random(),Math.random(),Math.random()),l.scale.y=.6+Math.random()*.4,l.castShadow=!0,n.add(l)}return n.position.set(e,0,t),n}createParrilla(e,t){const n=new De,i=new J({color:4473924,metalness:.6,roughness:.4}),r=new J({color:9127187,roughness:.9}),a=new J({color:2759178,roughness:.95}),o=new J({color:16729344,emissive:16720384,emissiveIntensity:.4,roughness:.8}),c=new ke(1.2,.6,.8),l=new G(c,r);l.position.y=.3,l.castShadow=!0,n.add(l);const h=new ke(1,.03,.6),u=new G(h,i);u.position.y=.62,u.castShadow=!0,n.add(u);const d=new ke(.9,.08,.5),p=new G(d,a);p.position.y=.55,n.add(p);for(let m=0;m<3;m++){const f=new pt(.05,4,4),S=new G(f,o);S.position.set((Math.random()-.5)*.6,.58,(Math.random()-.5)*.3),n.add(S)}const _=new Oe(.08,.12,.8,6),x=new G(_,r);return x.position.set(-.5,.9,0),x.castShadow=!0,n.add(x),n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createBanderaArgentina(e,t){const n=new De,i=new J({color:9136404,roughness:.7}),r=new Oe(.03,.04,2.5,6),a=new G(r,i);a.position.y=1.25,a.castShadow=!0,n.add(a);const o=new J({color:7711451,side:ft}),c=new J({color:16777215,side:ft}),l=new J({color:16167950,side:ft}),h=new It(.8,.15),u=new G(h,o);u.position.set(.4,2.35,0),n.add(u);const d=new G(h,c);d.position.set(.4,2.2,0),n.add(d);const p=new G(h,o);p.position.set(.4,2.05,0),n.add(p);const _=new os(.06,10),x=new G(_,l);return x.position.set(.4,2.2,.01),n.add(x),n.position.set(e,0,t),n}createTermoMate(e,t){const n=new De,i=[7711451,16737095,3329330],r=new J({color:i[Math.floor(Math.random()*i.length)],roughness:.9}),a=new ke(.8,.02,1.2),o=new G(a,r);o.position.y=.01,n.add(o);const c=new J({color:2263842,metalness:.3,roughness:.5}),l=new Oe(.08,.08,.5,8),h=new G(l,c);h.position.set(-.15,.27,.1),h.castShadow=!0,n.add(h);const u=new J({color:3355443,roughness:.6}),d=new Oe(.06,.085,.08,8),p=new G(d,u);p.position.set(-.15,.54,.1),n.add(p);const _=new J({color:7029795,roughness:.8}),x=new pt(.1,8,6);x.scale(1,.8,1);const m=new G(x,_);m.position.set(.15,.1,-.1),m.castShadow=!0,n.add(m);const f=new J({color:12632256,metalness:.7,roughness:.3}),S=new Oe(.012,.015,.22,5),w=new G(S,f);return w.position.set(.15,.2,-.1),w.rotation.z=-.2,n.add(w),n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createLampPost(e,t){const n=new De,i=new J({color:5592405,metalness:.5,roughness:.4}),r=new J({color:16777164,emissive:16777096,emissiveIntensity:.3,roughness:.5}),a=new Oe(.05,.07,3.5,6),o=new G(a,i);o.position.y=1.75,o.castShadow=!0,n.add(o);const c=new Oe(.03,.03,.6,5);c.rotateZ(Math.PI/2);const l=new G(c,i);l.position.set(.3,3.4,0),n.add(l);const h=new pt(.15,8,6),u=new G(h,r);return u.position.set(.55,3.35,0),n.add(u),n.position.set(e,0,t),n}createParkBench(e,t){const n=new De,i=new J({color:9136404,roughness:.8}),r=new J({color:5592405,metalness:.5,roughness:.4}),a=new ke(1.2,.06,.4),o=new G(a,i);o.position.y=.45,o.castShadow=!0,n.add(o);const c=new ke(1.2,.4,.04),l=new G(c,i);l.position.set(0,.7,-.18),l.castShadow=!0,n.add(l);const h=new ke(.06,.45,.3);for(const u of[-.5,.5]){const d=new G(h,r);d.position.set(u,.22,0),n.add(d)}return n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createTrashCan(e,t){const n=new De,i=new J({color:3368499,roughness:.6}),r=new Oe(.2,.25,.7,8),a=new G(r,i);a.position.y=.35,a.castShadow=!0,n.add(a);const o=new Oe(.22,.22,.05,8),c=new G(o,i);return c.position.y=.72,n.add(c),n.position.set(e,0,t),n}createFlowerPot(e,t){const n=new De,i=new J({color:12080435,roughness:.8}),r=[16729224,16755234,16720452,13387007],a=new J({color:r[Math.floor(Math.random()*r.length)],roughness:.6}),o=new Oe(.25,.18,.35,8),c=new G(o,i);c.position.y=.18,c.castShadow=!0,n.add(c);for(let d=0;d<5;d++){const p=new pt(.08,5,4),_=new G(p,a),x=d/5*Math.PI*2;_.position.set(Math.cos(x)*.12,.42,Math.sin(x)*.12),n.add(_)}const l=new J({color:3385907,roughness:.7}),h=new pt(.18,6,5),u=new G(h,l);return u.position.y=.4,u.scale.y=.6,n.add(u),n.position.set(e,0,t),n}createPineTree(e,t){const n=new De,i=new J({color:5913114,roughness:.85}),r=new J({color:1722906,roughness:.7}),a=new Oe(.12,.18,2.5,6),o=new G(a,i);o.position.y=1.25,o.castShadow=!0,n.add(o);for(let c=0;c<3;c++){const l=1-c*.25,h=new Fn(l,1.2,7),u=new G(h,r);u.position.y=2+c*.8,u.castShadow=!0,n.add(u)}return n.position.set(e,0,t),n}createBush(e,t){const n=new De,i=new J({color:2972186,roughness:.8}),r=2+Math.floor(Math.random()*3);for(let a=0;a<r;a++){const o=.3+Math.random()*.3,c=new pt(o,7,5),l=new G(c,i);l.position.set((Math.random()-.5)*.5,o*.7,(Math.random()-.5)*.5),l.scale.y=.7,l.castShadow=!0,n.add(l)}return n.position.set(e,0,t),n}createWoodLog(e,t){const n=new De,i=new J({color:5913114,roughness:.9}),r=new Oe(.15,.18,1.5,6);r.rotateZ(Math.PI/2+(Math.random()-.5)*.3);const a=new G(r,i);return a.position.y=.15,a.castShadow=!0,n.add(a),n.position.set(e,0,t),n}createFern(e,t){const n=new De,i=new J({color:3832362,roughness:.7,side:ft});for(let r=0;r<6;r++){const a=r/6*Math.PI*2,o=new It(.2,.8),c=new G(o,i);c.position.set(Math.cos(a)*.15,.4,Math.sin(a)*.15),c.rotation.set(-.6,a,0),n.add(c)}return n.position.set(e,0,t),n}createMilestone(e,t){const n=new De,i=new J({color:14540253,roughness:.6}),r=new J({color:3368618,roughness:.5}),a=new Oe(.04,.04,1.5,5),o=new G(a,i);o.position.y=.75,o.castShadow=!0,n.add(o);const c=new ke(.6,.3,.04),l=new G(c,r);return l.position.y=1.4,l.castShadow=!0,n.add(l),n.position.set(e,0,t),n}createFence(e,t){const n=new De,i=new J({color:9072720,roughness:.85});for(let o=0;o<3;o++){const c=new Oe(.04,.05,.8,5),l=new G(c,i);l.position.set(o*.8-.8,.4,0),l.castShadow=!0,n.add(l)}const r=new Oe(.02,.02,2,5);r.rotateZ(Math.PI/2);const a=new G(r,i);return a.position.y=.6,n.add(a),n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createWildGrass(e,t){const n=new De,i=new J({color:9083456,roughness:.8,side:ft});for(let r=0;r<8;r++){const a=new It(.05,.5+Math.random()*.3),o=new G(a,i);o.position.set((Math.random()-.5)*.6,.25,(Math.random()-.5)*.6),o.rotation.set(0,Math.random()*Math.PI,(Math.random()-.5)*.3),n.add(o)}return n.position.set(e,0,t),n}update(e){const t=tn.settings.fogFar;for(const n of this.group.children){n.position.z<e-20&&(n.position.z+=this.totalSpan);const i=n.position.z-e;n.visible=i>-20&&i<t+10}}dispose(){this.scene.remove(this.group)}}const Mg=new J({color:9136404,roughness:.85}),Sg=new J({color:8018448,roughness:.9}),yg=new J({color:2984774,roughness:.7,side:ft}),bg=new J({color:4894046,roughness:.7,side:ft});function wg(){const s=new De,e=5,t=.7;let n=0;for(let c=0;c<e;c++){const l=.18-c*.02,h=new Oe(l-.02,l,t,6),u=new G(h,Mg);if(n+=c>1?.08:.02,u.position.set(n,c*t+t/2,0),u.rotation.z=-c*.06,u.castShadow=!0,s.add(u),c>0&&c<e-1){const d=new Gn(l-.005,.015,4,8),p=new G(d,Sg);p.position.set(n,c*t,0),p.rotation.x=Math.PI/2,s.add(p)}}const i=e*t,r=n,a=new J({color:7029795,roughness:.8});for(let c=0;c<3;c++){const l=new pt(.08,6,6),h=new G(l,a),u=c/3*Math.PI*2;h.position.set(r+Math.cos(u)*.12,i-.1,Math.sin(u)*.12),s.add(h)}const o=6;for(let c=0;c<o;c++){const l=c/o*Math.PI*2,h=new It(.5,1.8,1,6),u=h.attributes.position;for(let _=0;_<u.count;_++){const m=(u.getY(_)+.9)/1.8;u.setZ(_,u.getZ(_)-m*m*.6)}u.needsUpdate=!0,h.computeVertexNormals();const d=Math.random()>.5,p=new G(h,d?bg:yg);p.position.set(r+Math.cos(l)*.3,i+.3,Math.sin(l)*.3),p.rotation.set(-.5+Math.random()*.3,l,.2*Math.sin(l)),p.castShadow=!0,s.add(p)}return s}class Eg{ocean;sky;beachDecor;palmTrees;scene;palmSpan=200;lastAppliedZone="chapadmalal";constructor(e){this.scene=e,this.ocean=new _g(this.scene),this.sky=new vg(this.scene),this.beachDecor=new xg(this.scene),this.palmTrees=new De,this.scene.add(this.palmTrees),this.createPalms()}createPalms(){const t=13/tn.settings.palmDensity;for(let n=0;n<this.palmSpan;n+=t+Math.random()*6)for(const i of[-1,1]){const r=5.5+Math.random()*3,a=wg();a.position.set(i*r,0,n),a.rotation.y=Math.random()*Math.PI*2;const o=.7+Math.random()*.5;a.scale.setScalar(o),this.palmTrees.add(a)}}applyZoneColors(e){this.sky.setColors(e.skyZenith,e.skyHorizon,e.skyGround),this.ocean.setColors(e.oceanDeep,e.oceanSurf,e.oceanFoam),this.ocean.setSkyColor(e.skyHorizon);const t=this.scene.fog;t?t.color.setHex(e.fog):this.scene.fog=new ns(e.fog,40,120),this.scene.background instanceof Le&&this.scene.background.setHex(e.background)}applyZoneLighting(e,t,n,i){t.color.setHex(e.sunColor),t.intensity=e.sunIntensity,n.intensity=e.ambientIntensity,i.groundColor.setHex(e.hemisphereGround),this.sky.setSunPosition(e.sunPosition[0],e.sunPosition[1],e.sunPosition[2]),this.sky.setSunGlow(e.sunGlow[0],e.sunGlow[1],e.sunGlow[2]),this.ocean.setSunDirection(e.sunPosition[0],e.sunPosition[1],e.sunPosition[2])}switchDecorZone(e){e!==this.lastAppliedZone&&(this.lastAppliedZone=e,this.beachDecor.currentZone=e,this.beachDecor.repopulate())}reset(){for(;this.palmTrees.children.length>0;)this.palmTrees.remove(this.palmTrees.children[0]);this.createPalms(),this.lastAppliedZone="chapadmalal",this.beachDecor.currentZone="chapadmalal",this.beachDecor.repopulate()}update(e,t,n){this.ocean.update(t,e,n),this.sky.update(t,e),this.beachDecor.update(e);const i=tn.settings.fogFar;for(const r of this.palmTrees.children){r.position.z<e-20&&(r.position.z+=this.palmSpan);const a=r.position.z-e;r.visible=a>-20&&a<i+10}}dispose(){this.ocean.dispose(),this.sky.dispose(),this.beachDecor.dispose(),this.scene.remove(this.palmTrees)}}const bi=60;class Hr{particles;velocities;lifetimes;active=!1;elapsed=0;duration=.6;scene;constructor(e){this.scene=e;const t=new xt,n=new Float32Array(bi*3),i=new Float32Array(bi*3);this.velocities=new Float32Array(bi*3),this.lifetimes=new Float32Array(bi),t.setAttribute("position",new Gt(n,3)),t.setAttribute("color",new Gt(i,3));const r=new js({size:.15,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1});this.particles=new so(t,r),this.particles.visible=!1,this.scene.add(this.particles)}emit(e,t,n,i){const r=this.particles.geometry.attributes.position.array,a=this.particles.geometry.attributes.color.array;for(let o=0;o<bi;o++){const c=o*3;r[c]=e,r[c+1]=t,r[c+2]=n;const l=Math.random()*Math.PI*2,h=Math.random()*Math.PI,u=2+Math.random()*4;this.velocities[c]=Math.sin(h)*Math.cos(l)*u,this.velocities[c+1]=Math.abs(Math.cos(h))*u*1.2,this.velocities[c+2]=Math.sin(h)*Math.sin(l)*u,this.lifetimes[o]=.3+Math.random()*.4,a[c]=i.r*(.8+Math.random()*.4),a[c+1]=i.g*(.8+Math.random()*.4),a[c+2]=i.b*(.8+Math.random()*.4)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.particles.visible=!0,this.active=!0,this.elapsed=0}update(e){if(!this.active)return;if(this.elapsed+=e,this.elapsed>this.duration){this.active=!1,this.particles.visible=!1;return}const t=this.particles.geometry.attributes.position.array,n=this.elapsed/this.duration;for(let i=0;i<bi;i++){const r=i*3;this.elapsed<this.lifetimes[i]&&(t[r]+=this.velocities[r]*e,t[r+1]+=this.velocities[r+1]*e,this.velocities[r+1]-=9.8*e,t[r+2]+=this.velocities[r+2]*e)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.material.opacity=1-n}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.scene.remove(this.particles)}}const Zi=40;class Tg{points;ages;maxAge=.8;spawnTimer=0;spawnRate=.03;nextSlot=0;scene;constructor(e){this.scene=e;const t=new xt,n=new Float32Array(Zi*3);this.ages=new Float32Array(Zi).fill(this.maxAge+1),t.setAttribute("position",new Gt(n,3));const i=new js({size:.2,color:16115402,transparent:!0,opacity:.5,depthWrite:!1});this.points=new so(t,i),this.scene.add(this.points)}update(e,t,n,i,r){const a=this.points.geometry.attributes.position.array;for(let c=0;c<Zi;c++)this.ages[c]+=e;if(this.spawnTimer+=e,r&&this.spawnTimer>=this.spawnRate){this.spawnTimer=0;const c=this.nextSlot*3;a[c]=t+(Math.random()-.5)*.6,a[c+1]=n+.05,a[c+2]=i-.5+(Math.random()-.5)*.3,this.ages[this.nextSlot]=0,this.nextSlot=(this.nextSlot+1)%Zi}for(let c=0;c<Zi;c++)if(this.ages[c]<this.maxAge){const l=c*3;a[l+1]+=.3*e}this.points.geometry.attributes.position.needsUpdate=!0;const o=this.points.material;o.opacity=.4}dispose(){this.points.geometry.dispose(),this.points.material.dispose(),this.scene.remove(this.points)}}class Ag{intensity=0;decay=8;offsetX=0;offsetY=0;trigger(e=.5){this.intensity=e}update(e){if(this.intensity<=.01){this.offsetX=0,this.offsetY=0,this.intensity=0;return}this.offsetX=(Math.random()-.5)*2*this.intensity,this.offsetY=(Math.random()-.5)*2*this.intensity,this.intensity*=Math.max(0,1-this.decay*e)}reset(){this.intensity=0,this.offsetX=0,this.offsetY=0}}const Yi=40,Rc={chapadmalal:{color:16115402,size:.08,lifetime:1.5,speed:new D(2,.3,0),spread:new D(15,5,30),emissive:!1},rambla:{color:11176021,size:.15,lifetime:3,speed:new D(.5,-.8,.2),spread:new D(12,8,25),emissive:!1},carilo:{color:8978312,size:.1,lifetime:4,speed:new D(.2,.1,.1),spread:new D(10,4,20),emissive:!0},rutaCostera:{color:16764006,size:.06,lifetime:2.5,speed:new D(.8,.2,.1),spread:new D(15,6,30),emissive:!1}};class Cg{points;ages;velocities;scene;config;nextSlot=0;spawnTimer=0;constructor(e){this.scene=e,this.config=Rc.chapadmalal;const t=new xt,n=new Float32Array(Yi*3);this.ages=new Float32Array(Yi).fill(999),this.velocities=new Float32Array(Yi*3),t.setAttribute("position",new Gt(n,3));const i=new js({size:this.config.size,color:this.config.color,transparent:!0,opacity:.5,depthWrite:!1});this.points=new so(t,i),this.scene.add(this.points)}setZone(e){this.config=Rc[e];const t=this.points.material;t.color.setHex(this.config.color),t.size=this.config.size}update(e,t,n,i){const r=this.points.geometry.attributes.position.array;if(this.spawnTimer+=e,this.spawnTimer>=.08){this.spawnTimer=0;const o=this.nextSlot*3,c=this.config.spread;r[o]=t+(Math.random()-.5)*c.x,r[o+1]=n+.5+Math.random()*c.y,r[o+2]=i+(Math.random()-.5)*c.z;const l=this.config.speed;this.velocities[o]=l.x*(.5+Math.random()),this.velocities[o+1]=l.y*(.5+Math.random()),this.velocities[o+2]=l.z*(.5+Math.random()),this.ages[this.nextSlot]=0,this.nextSlot=(this.nextSlot+1)%Yi}for(let o=0;o<Yi;o++){if(this.ages[o]>this.config.lifetime)continue;this.ages[o]+=e;const c=o*3;r[c]+=this.velocities[c]*e,r[c+1]+=this.velocities[c+1]*e,r[c+2]+=this.velocities[c+2]*e,this.config.emissive&&(r[c]+=Math.sin(this.ages[o]*3+o)*.02,r[c+1]+=Math.cos(this.ages[o]*2.5+o*.7)*.015)}this.points.geometry.attributes.position.needsUpdate=!0;const a=this.points.material;a.opacity=.5}dispose(){this.points.geometry.dispose(),this.points.material.dispose(),this.scene.remove(this.points)}}class Rg{ctx=null;masterGain=null;musicGain=null;sfxGain=null;_muted=!1;musicOscs=[];musicPlaying=!1;musicInterval=null;get muted(){return this._muted}init(){this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.6,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.7,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.18,this.musicGain.connect(this.masterGain))}ensureCtx(){return this.ctx||this.init(),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}play(e){if(this._muted)return;const t=this.ensureCtx(),n=t.currentTime;switch(e){case"jump":this.playJump(t,n);break;case"land":this.playLand(t,n);break;case"slide":this.playSlide(t,n);break;case"collect":this.playCollect(t,n);break;case"crash":this.playCrash(t,n);break;case"laneSwitch":this.playLaneSwitch(t,n);break;case"highScore":this.playHighScore(t,n);break;case"uiClick":this.playUIClick(t,n);break;case"powerUp":this.playPowerUp(t,n);break;case"shieldBreak":this.playShieldBreak(t,n);break;case"comboUp":this.playComboUp(t,n);break;case"comboBreak":this.playComboBreak(t,n);break}}playJump(e,t){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(300,t),n.frequency.exponentialRampToValueAtTime(600,t+.15),i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.01,t+.2),n.connect(i).connect(this.sfxGain),n.start(t),n.stop(t+.2)}playLand(e,t){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(60,t+.12),i.gain.setValueAtTime(.25,t),i.gain.exponentialRampToValueAtTime(.01,t+.12),n.connect(i).connect(this.sfxGain),n.start(t),n.stop(t+.15)}playSlide(e,t){const n=e.sampleRate*.3,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*(1-l/n);const a=e.createBufferSource();a.buffer=i;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(2e3,t),o.frequency.exponentialRampToValueAtTime(800,t+.25),o.Q.value=2;const c=e.createGain();c.gain.setValueAtTime(.2,t),c.gain.exponentialRampToValueAtTime(.01,t+.3),a.connect(o).connect(c).connect(this.sfxGain),a.start(t),a.stop(t+.3)}playCollect(e,t){const n=e.createOscillator(),i=e.createOscillator(),r=e.createGain();n.type="sine",n.frequency.value=880,i.type="sine",i.frequency.value=1320,r.gain.setValueAtTime(.2,t),r.gain.exponentialRampToValueAtTime(.01,t+.15),n.connect(r),i.connect(r),r.connect(this.sfxGain),n.start(t),i.start(t),n.stop(t+.15),i.stop(t+.15)}playCrash(e,t){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(100,t),n.frequency.exponentialRampToValueAtTime(40,t+.4),i.gain.setValueAtTime(.5,t),i.gain.exponentialRampToValueAtTime(.01,t+.4),n.connect(i).connect(this.sfxGain),n.start(t),n.stop(t+.45);const r=e.sampleRate*.3,a=e.createBuffer(1,r,e.sampleRate),o=a.getChannelData(0);for(let h=0;h<r;h++)o[h]=(Math.random()*2-1)*(1-h/r)**2;const c=e.createBufferSource();c.buffer=a;const l=e.createGain();l.gain.setValueAtTime(.35,t),l.gain.exponentialRampToValueAtTime(.01,t+.3),c.connect(l).connect(this.sfxGain),c.start(t),c.stop(t+.3)}playLaneSwitch(e,t){const n=e.createOscillator(),i=e.createGain();n.type="triangle",n.frequency.setValueAtTime(400,t),n.frequency.exponentialRampToValueAtTime(600,t+.06),i.gain.setValueAtTime(.12,t),i.gain.exponentialRampToValueAtTime(.01,t+.08),n.connect(i).connect(this.sfxGain),n.start(t),n.stop(t+.08)}playHighScore(e,t){[523,659,784,1047].forEach((i,r)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=i;const c=t+r*.12;o.gain.setValueAtTime(0,c),o.gain.linearRampToValueAtTime(.2,c+.03),o.gain.exponentialRampToValueAtTime(.01,c+.3),a.connect(o).connect(this.sfxGain),a.start(c),a.stop(c+.35)})}playUIClick(e,t){const n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=700,i.gain.setValueAtTime(.15,t),i.gain.exponentialRampToValueAtTime(.01,t+.06),n.connect(i).connect(this.sfxGain),n.start(t),n.stop(t+.06)}playPowerUp(e,t){[440,554,659,880].forEach((i,r)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=i;const c=t+r*.08;o.gain.setValueAtTime(0,c),o.gain.linearRampToValueAtTime(.2,c+.02),o.gain.exponentialRampToValueAtTime(.01,c+.25),a.connect(o).connect(this.sfxGain),a.start(c),a.stop(c+.3)})}playShieldBreak(e,t){const n=e.createOscillator(),i=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(800,t),n.frequency.exponentialRampToValueAtTime(200,t+.3),i.gain.setValueAtTime(.2,t),i.gain.exponentialRampToValueAtTime(.01,t+.35),n.connect(i).connect(this.sfxGain),n.start(t),n.stop(t+.35)}playComboUp(e,t){const n=e.createOscillator(),i=e.createOscillator(),r=e.createGain();n.type="sine",n.frequency.setValueAtTime(600,t),n.frequency.exponentialRampToValueAtTime(1200,t+.15),i.type="sine",i.frequency.setValueAtTime(900,t),i.frequency.exponentialRampToValueAtTime(1800,t+.15),r.gain.setValueAtTime(.15,t),r.gain.exponentialRampToValueAtTime(.01,t+.2),n.connect(r),i.connect(r),r.connect(this.sfxGain),n.start(t),i.start(t),n.stop(t+.2),i.stop(t+.2)}playComboBreak(e,t){const n=e.createOscillator(),i=e.createGain();n.type="triangle",n.frequency.setValueAtTime(400,t),n.frequency.exponentialRampToValueAtTime(150,t+.2),i.gain.setValueAtTime(.1,t),i.gain.exponentialRampToValueAtTime(.01,t+.25),n.connect(i).connect(this.sfxGain),n.start(t),n.stop(t+.25)}currentChords=[[220,261.63,329.63],[174.61,220,261.63],[261.63,329.63,392],[196,246.94,293.66]];currentTempo=214;currentBassType="triangle";setMusicConfig(e,t,n){this.currentChords=e,this.currentTempo=t,this.currentBassType=n,this.musicPlaying&&(this.stopMusic(),this.startMusic())}startMusic(){if(this._muted||this.musicPlaying)return;const e=this.ensureCtx();this.musicPlaying=!0;let t=0,n=0;const i=()=>{if(!this.musicPlaying||this._muted)return;const r=e.currentTime,a=this.currentChords[t%this.currentChords.length],o=e.createOscillator(),c=e.createGain();o.type=this.currentBassType,o.frequency.value=a[0]/2,c.gain.setValueAtTime(.15,r),c.gain.exponentialRampToValueAtTime(.01,r+.35),o.connect(c).connect(this.musicGain),o.start(r),o.stop(r+.4),this.musicOscs.push(o);const l=a[n%a.length],h=e.createOscillator(),u=e.createGain();h.type="sine",h.frequency.value=l,u.gain.setValueAtTime(.1,r),u.gain.exponentialRampToValueAtTime(.01,r+.2),h.connect(u).connect(this.musicGain),h.start(r),h.stop(r+.25),this.musicOscs.push(h),n++,n%4===0&&(t=(t+1)%this.currentChords.length),this.musicOscs=this.musicOscs.filter(d=>{try{return d.context.currentTime<e.currentTime+1}catch{return!1}})};i(),this.musicInterval=setInterval(i,this.currentTempo)}stopMusic(){this.musicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null);for(const e of this.musicOscs)try{e.stop()}catch{}this.musicOscs=[]}vibrate(e){this._muted||"vibrate"in navigator&&navigator.vibrate(e)}vibrateCollect(){this.vibrate(30)}vibrateCrash(){this.vibrate([50,30,80])}vibrateLaneSwitch(){this.vibrate(15)}toggleMute(){return this._muted=!this._muted,this.masterGain&&(this.masterGain.gain.value=this._muted?0:.6),this._muted&&this.stopMusic(),this._muted}}const dt=new Rg,Pg=document.getElementById("start-screen"),Pc=document.getElementById("game-over"),Dc=document.getElementById("hud"),Lc=document.getElementById("score-label"),Ic=document.getElementById("hi-label"),Dg=document.getElementById("final-score"),Lg=document.getElementById("high-score"),Ig=document.getElementById("btn-play"),Ug=document.getElementById("btn-restart"),Uc=document.getElementById("btn-sound"),Yn=document.getElementById("combo-display"),Ng=document.getElementById("combo-count"),Nc=document.getElementById("combo-multiplier"),Ns=document.getElementById("powerup-bar"),Ki=document.getElementById("section-announce"),wi=document.getElementById("zone-announce"),Fg=document.getElementById("zone-name"),Og=document.getElementById("btn-quality"),Wr=document.getElementById("quality-label"),Fc=new Le(16766720),Bg=new Le(16729156),Oc=new Le(4500223),Gg=new Le(65450),zg={magnet:"M",shield:"S",multiplier:"x2",megawave:"W",slowmo:"SL"},Bc={magnet:"#ff4444",shield:"#44aaff",multiplier:"#ffdd00",megawave:"#00ffaa",slowmo:"#cc66ff"},kg={magnet:"Iman",shield:"Escudo",multiplier:"x2",megawave:"Mega Ola",slowmo:"Slow Mo"},Vg={rockField:"Campo de Rocas",coinCorridor:"Pasillo de Medialunas",slalom:"Slalom",rampJump:"Rampa!",bonus:"Bonus!!"};class Hg{sceneManager;input=null;player;track;obstacles;collectibles;score;difficulty;environment;powerUps;combo;patterns;zones;collectParticles;crashParticles;powerUpParticles;sandTrail;screenShake;ambientParticles;state="menu";animId=0;cameraTargetZ=0;baseFov=60;prevPlayerState="running";sectionAnnounceTimer=0;zoneAnnounceTimer=0;constructor(){this.sceneManager=new t0,this.input=new i0,this.player=new f0(this.sceneManager.scene),this.track=new g0(this.sceneManager.scene),this.obstacles=new k0(this.sceneManager.scene),this.collectibles=new X0(this.sceneManager.scene),this.score=new q0,this.difficulty=new K0,this.environment=new Eg(this.sceneManager.scene),this.powerUps=new J0(this.sceneManager.scene),this.combo=new ng,this.patterns=new cg,this.zones=new fg,this.collectParticles=new Hr(this.sceneManager.scene),this.crashParticles=new Hr(this.sceneManager.scene),this.powerUpParticles=new Hr(this.sceneManager.scene),this.sandTrail=new Tg(this.sceneManager.scene),this.screenShake=new Ag,this.ambientParticles=new Cg(this.sceneManager.scene);const e=this.zones.currentZone;this.environment.applyZoneLighting(e.lighting,this.sceneManager.sunLight,this.sceneManager.ambientLight,this.sceneManager.hemiLight),this.sceneManager.setZoneGrading(Jn[e.id]),this.sceneManager.setBloomStrength(e.lighting.bloomStrength),Ic.textContent=`HI: ${this.score.hiScore}`,Ig.addEventListener("click",()=>{dt.init(),dt.play("uiClick"),this.start()}),Ug.addEventListener("click",()=>{dt.play("uiClick"),this.start()}),window.addEventListener("keydown",t=>{t.code==="Space"&&this.state!=="playing"&&(t.preventDefault(),dt.init(),dt.play("uiClick"),this.start())}),Uc.addEventListener("click",()=>{dt.init();const t=dt.toggleMute();Uc.textContent=t?"🔇":"🔊"}),Wr.textContent=tn.level.toUpperCase(),Og.addEventListener("click",()=>{const t=tn.cycleLevel();Wr.textContent=t.toUpperCase()}),bt.on("input:swipe",()=>{this.state==="playing"&&(dt.play("laneSwitch"),dt.vibrateLaneSwitch())}),this.sceneManager.render()}start(){this.player.reset(),this.track.reset(),this.obstacles.reset(),this.collectibles.reset(),this.score.reset(),this.difficulty.reset(),this.screenShake.reset(),this.environment.reset(),this.powerUps.reset(),this.combo.reset(),this.patterns.reset(),this.zones.reset(),this.obstacles.currentZone="chapadmalal";const e=this.zones.getBlendedColors();this.environment.applyZoneColors(e),this.track.setColors(e.trackSand,e.trackBase,e.trackDivider,e.trackEdge);const t=this.zones.currentZone;this.environment.applyZoneLighting(t.lighting,this.sceneManager.sunLight,this.sceneManager.ambientLight,this.sceneManager.hemiLight),this.sceneManager.setZoneGrading(Jn[t.id]),this.sceneManager.setBloomStrength(t.lighting.bloomStrength),this.ambientParticles.setZone("chapadmalal"),Pg.classList.add("hidden"),Pc.classList.remove("active"),Dc.classList.add("active"),Yn.classList.remove("active"),Ns.innerHTML="",Ki.classList.remove("active"),wi.classList.remove("active"),this.state="playing",this.cameraTargetZ=0,this.prevPlayerState="running",this.sectionAnnounceTimer=0,this.zoneAnnounceTimer=0,dt.startMusic(),tn.startAutoDetect(),this.animId&&cancelAnimationFrame(this.animId),this.loop()}loop=()=>{if(this.state!=="playing")return;this.animId=requestAnimationFrame(this.loop);const e=Math.min(this.sceneManager.getDelta(),.05);tn.feedFrame(e)&&(Wr.textContent=tn.level.toUpperCase()),this.difficulty.update(e);const t=this.powerUps.getSpeedMultiplier(),n=this.difficulty.speed*t;this.player.update(e,n);const i=this.player.state;i!==this.prevPlayerState&&(i==="jumping"&&dt.play("jump"),i==="sliding"&&dt.play("slide"),i==="running"&&this.prevPlayerState==="jumping"&&dt.play("land"),this.prevPlayerState=i),this.track.update(this.player.posZ),this.obstacles.update(this.player.posZ,n),this.collectibles.update(this.player.posZ,e,this.powerUps.isMagnetActive(),this.player.mesh.position.x),this.environment.update(this.player.posZ,e,this.sceneManager.camera),this.powerUps.update(this.player.posZ,e),this.sceneManager.updatePostProcessing(e),this.sceneManager.updateSunTarget(this.player.posZ),this.ambientParticles.update(e,this.player.mesh.position.x,this.player.mesh.position.y,this.player.posZ),this.updateZones(e),this.updatePatterns(),this.collectParticles.update(e),this.crashParticles.update(e),this.powerUpParticles.update(e),this.sandTrail.update(e,this.player.mesh.position.x,this.player.mesh.position.y,this.player.posZ,this.player.state==="running"||this.player.state==="sliding"),this.screenShake.update(e),this.combo.update(e),this.combo.brokeThisFrame&&this.combo.combo===0&&dt.play("comboBreak");const r=this.combo.multiplier,a=this.powerUps.getScoreMultiplier(),o=r*a;this.score.displayMultiplier=o,this.score.addDistance(n*e*.5,o);const c=this.powerUps.checkCollection(this.player.mesh.position.x,this.player.mesh.position.y,this.player.posZ);c&&this.onPowerUpCollected(c);const l=this.collectibles.checkCollection(this.player.mesh.position.x,this.player.mesh.position.y,this.player.posZ,this.powerUps.isActive("megawave"));if(l>0&&(this.score.addPoints(l,o),this.combo.addCollect(this.collectibles.lastCollectedCount),dt.play("collect"),dt.vibrateCollect(),this.collectParticles.emit(this.player.mesh.position.x,this.player.mesh.position.y+1,this.player.posZ,Fc),this.combo.levelUpThisFrame&&dt.play("comboUp")),this.checkCollisions()){if(this.powerUps.useShield())dt.play("shieldBreak"),this.player.setShieldVisible(!1),this.screenShake.trigger(.3),this.crashParticles.emit(this.player.mesh.position.x,this.player.mesh.position.y+.8,this.player.posZ,Oc);else if(!this.powerUps.isInvincible()){this.gameOver();return}}this.player.setShieldVisible(this.powerUps.isActive("shield")),this.updateCamera(e),this.updateHUD(e),this.sceneManager.render()};onPowerUpCollected(e){dt.play("powerUp"),dt.vibrateCollect();const t=e==="megawave"?Gg:e==="shield"?Oc:Fc;this.powerUpParticles.emit(this.player.mesh.position.x,this.player.mesh.position.y+1,this.player.posZ,t),this.screenShake.trigger(.2),e==="shield"&&this.player.setShieldVisible(!0)}updatePatterns(){const e=this.patterns.getPatternAt(this.player.posZ);e&&this.spawnPattern(e),this.sectionAnnounceTimer>0&&(this.sectionAnnounceTimer-=.016,this.sectionAnnounceTimer<=0&&Ki.classList.remove("active"))}spawnPattern(e){const t=this.patterns.getPatternStartZ();this.obstacles.suppressUntil(t+e.length+15),this.collectibles.suppressUntil(t+e.length+10),e.obstacles.length>0&&this.obstacles.spawnFromPattern(e.obstacles,t),e.collectibles.length>0&&this.collectibles.spawnFromPattern(e.collectibles,t),e.hasRamp&&this.player.rampJump();const n=Vg[e.type]||e.type;Ki.textContent=n,Ki.classList.add("active"),this.sectionAnnounceTimer=2}updateZones(e){const t=this.zones.isTransitioning;if(this.zones.update(this.player.posZ,e),this.zones.isTransitioning||this.zones.zoneChangedThisFrame||t&&!this.zones.isTransitioning){const n=this.zones.getBlendedColors();if(this.environment.applyZoneColors(n),this.track.setColors(n.trackSand,n.trackBase,n.trackDivider,n.trackEdge),this.zones.isTransitioning&&this.zones.nextZone){const i=this.zones.currentZone.lighting,r=this.zones.nextZone.lighting,a=this.zones.progress,o={sunColor:Gc(i.sunColor,r.sunColor,a),sunIntensity:i.sunIntensity+(r.sunIntensity-i.sunIntensity)*a,sunPosition:[i.sunPosition[0]+(r.sunPosition[0]-i.sunPosition[0])*a,i.sunPosition[1]+(r.sunPosition[1]-i.sunPosition[1])*a,i.sunPosition[2]+(r.sunPosition[2]-i.sunPosition[2])*a],ambientIntensity:i.ambientIntensity+(r.ambientIntensity-i.ambientIntensity)*a,hemisphereGround:Gc(i.hemisphereGround,r.hemisphereGround,a),sunGlow:[i.sunGlow[0]+(r.sunGlow[0]-i.sunGlow[0])*a,i.sunGlow[1]+(r.sunGlow[1]-i.sunGlow[1])*a,i.sunGlow[2]+(r.sunGlow[2]-i.sunGlow[2])*a],bloomStrength:i.bloomStrength+(r.bloomStrength-i.bloomStrength)*a};this.environment.applyZoneLighting(o,this.sceneManager.sunLight,this.sceneManager.ambientLight,this.sceneManager.hemiLight),this.sceneManager.setBloomStrength(o.bloomStrength);const c=Jn[this.zones.currentZone.id],l=Jn[this.zones.nextZone.id];c&&l&&this.sceneManager.setBlendedZoneGrading(c,l,a)}}if(this.zones.zoneChangedThisFrame){Fg.textContent=this.zones.newZoneName,wi.classList.remove("active"),wi.offsetWidth,wi.classList.add("active"),this.zoneAnnounceTimer=3;const n=this.zones.nextZone;if(n){this.obstacles.currentZone=n.id,this.environment.switchDecorZone(n.id),this.ambientParticles.setZone(n.id);const i=this.zones.getBlendedMusicConfig();dt.setMusicConfig(i.chords,i.tempo,i.bassType),this.environment.applyZoneLighting(n.lighting,this.sceneManager.sunLight,this.sceneManager.ambientLight,this.sceneManager.hemiLight),this.sceneManager.setZoneGrading(Jn[n.id]),this.sceneManager.setBloomStrength(n.lighting.bloomStrength)}}this.zoneAnnounceTimer>0&&(this.zoneAnnounceTimer-=e,this.zoneAnnounceTimer<=0&&wi.classList.remove("active"))}updateHUD(e){const t=this.score.displayMultiplier;t>1?Lc.textContent=`${this.score.score} pts (x${t})`:Lc.textContent=`${this.score.score} pts`,this.combo.combo>=3?(Yn.classList.add("active"),Ng.textContent=`${this.combo.combo} combo`,this.combo.multiplier>1?Nc.textContent=`x${this.combo.multiplier}`:Nc.textContent="",this.collectibles.lastCollectedCount>0&&(Yn.classList.remove("pulse"),Yn.offsetWidth,Yn.classList.add("pulse"))):Yn.classList.remove("active"),this.updatePowerUpBar()}updatePowerUpBar(){const e=this.powerUps.getActiveEffects();Ns.innerHTML="";for(const t of e){const n=document.createElement("div");n.className="powerup-indicator";const i=document.createElement("span");i.className="icon",i.textContent=zg[t.type],i.style.color=Bc[t.type],n.appendChild(i);const r=document.createElement("span");if(r.textContent=kg[t.type],n.appendChild(r),t.type!=="shield"){const a=document.createElement("div");a.className="timer-bar";const o=document.createElement("div");o.className="timer-fill";const c=Math.max(0,t.remaining/t.duration*100);o.style.width=`${c}%`,o.style.background=Bc[t.type],a.appendChild(o),n.appendChild(a)}Ns.appendChild(n)}}_obsBox=new ii(new D,new D);checkCollisions(){const e=this.obstacles.getActiveNear(this.player.posZ);if(e.length===0)return!1;const t=this.player.getHitbox();for(const n of e){const i=n.mesh;let r,a,o;if(i.userData.boxW)r=i.userData.boxW/2,a=i.userData.boxH/2,o=i.userData.boxD/2;else{const d=i.geometry.parameters;r=d.width/2,a=d.height/2,o=d.depth/2}const c=i.position.x,l=i.position.y,h=i.position.z;if(this._obsBox.min.set(c-r,l-a,h-o),this._obsBox.max.set(c+r,l+a,h+o),t.intersectsBox(this._obsBox)){if(n.type==="high"&&this.player.state==="sliding"||n.type==="low"&&this.player.mesh.position.y>.8)continue;return!0}}return!1}updateCamera(e){const t=this.sceneManager.camera,n=(this.difficulty.speed-12)/18,i=this.baseFov+n*12;t.fov=ti(t.fov,i,2*e),t.updateProjectionMatrix(),this.cameraTargetZ=this.player.posZ;const r=ti(t.position.z,this.cameraTargetZ-10,5*e);t.position.set(ti(t.position.x,this.player.mesh.position.x*.3,3*e)+this.screenShake.offsetX,ti(t.position.y,6+this.player.mesh.position.y*.3,3*e)+this.screenShake.offsetY,r),t.lookAt(this.player.mesh.position.x*.5,1.5+this.player.mesh.position.y*.3,this.cameraTargetZ+10)}gameOver(){this.state="gameover",cancelAnimationFrame(this.animId),this.player.die(),dt.play("crash"),dt.vibrateCrash(),dt.stopMusic(),Yn.classList.remove("active"),Ns.innerHTML="",Ki.classList.remove("active"),wi.classList.remove("active"),this.crashParticles.emit(this.player.mesh.position.x,this.player.mesh.position.y+.8,this.player.posZ,Bg),this.screenShake.trigger(.6);let e=0;const t=()=>{e++;const n=.016;this.crashParticles.update(n),this.screenShake.update(n),this.updateCamera(n),this.sceneManager.render(),e<30?requestAnimationFrame(t):this.showGameOverUI()};t()}showGameOverUI(){const e=this.score.finalise();e&&dt.play("highScore"),Dg.textContent=`Puntos: ${this.score.score}`,Lg.textContent=e?`Nuevo Record! ${this.score.hiScore}`:`Record: ${this.score.hiScore}`,Ic.textContent=`HI: ${this.score.hiScore}`,Dc.classList.remove("active"),Pc.classList.add("active")}dispose(){this.input?.dispose(),this.sceneManager.dispose(),this.player.dispose(),this.track.dispose(),this.obstacles.dispose(),this.collectibles.dispose(),this.environment.dispose(),this.powerUps.dispose(),this.collectParticles.dispose(),this.crashParticles.dispose(),this.powerUpParticles.dispose(),this.sandTrail.dispose(),this.ambientParticles.dispose(),co.dispose()}}function Gc(s,e,t){const n=s>>16&255,i=s>>8&255,r=s&255,a=e>>16&255,o=e>>8&255,c=e&255,l=Math.round(n+(a-n)*t),h=Math.round(i+(o-i)*t),u=Math.round(r+(c-r)*t);return l<<16|h<<8|u}new Hg;
