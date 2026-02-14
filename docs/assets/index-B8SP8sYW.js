(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ba="182",il=0,Za=1,sl=2,bs=1,uc=2,Vi=3,Nn=0,It=1,pt=2,vn=0,vi=1,Ya=2,Ka=3,$a=4,rl=5,Zn=100,al=101,ol=102,cl=103,ll=104,hl=200,ul=201,dl=202,fl=203,Rr=204,Cr=205,pl=206,ml=207,gl=208,_l=209,xl=210,vl=211,Ml=212,Sl=213,yl=214,Pr=0,Dr=1,Lr=2,Si=3,Ir=4,Ur=5,Nr=6,Fr=7,dc=0,El=1,bl=2,cn=0,fc=1,pc=2,mc=3,Ta=4,gc=5,_c=6,xc=7,vc=300,Jn=301,yi=302,Or=303,Br=304,Us=306,Gr=1e3,xn=1001,zr=1002,wt=1003,Tl=1004,Qi=1005,Pt=1006,Xs=1007,Kn=1008,Xt=1009,Mc=1010,Sc=1011,Hi=1012,wa=1013,hn=1014,an=1015,yn=1016,Aa=1017,Ra=1018,Wi=1020,yc=35902,Ec=35899,bc=1021,Tc=1022,tn=1023,En=1026,$n=1027,wc=1028,Ca=1029,Ei=1030,Pa=1031,Da=1033,Ts=33776,ws=33777,As=33778,Rs=33779,Vr=35840,kr=35841,Hr=35842,Wr=35843,Xr=36196,qr=37492,Zr=37496,Yr=37488,Kr=37489,$r=37490,jr=37491,Jr=37808,Qr=37809,ea=37810,ta=37811,na=37812,ia=37813,sa=37814,ra=37815,aa=37816,oa=37817,ca=37818,la=37819,ha=37820,ua=37821,da=36492,fa=36494,pa=36495,ma=36283,ga=36284,_a=36285,xa=36286,wl=3200,Ac=0,Al=1,Dn="",Yt="srgb",bi="srgb-linear",Ps="linear",et="srgb",ti=7680,ja=519,Rl=512,Cl=513,Pl=514,La=515,Dl=516,Ll=517,Ia=518,Il=519,Ja=35044,Qa="300 es",on=2e3,Ds=2001;function Rc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ul(){const i=Ls("canvas");return i.style.display="block",i}const eo={};function to(...i){const e="THREE."+i.shift();console.log(e,...i)}function De(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ke(...i){const e="THREE."+i.shift();console.error(e,...i)}function Xi(...i){const e=i.join(" ");e in eo||(eo[e]=!0,De(...i))}function Nl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,va=180/Math.PI;function Yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Fl(i,e){return(i%e+e)%e}function Zs(i,e,t){return(1-t)*i+t*e}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ki{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(u!==v||c!==f||l!==m||h!==_){let p=c*f+l*m+h*_+u*v;p<0&&(f=-f,m=-m,_=-_,v=-v,p=-p);let d=1-o;if(p<.9995){const y=Math.acos(p),b=Math.sin(y);d=Math.sin(d*y)/b,o=Math.sin(o*y)/b,c=c*d+f*o,l=l*d+m*o,h=h*d+_*o,u=u*d+v*o}else{c=c*d+f*o,l=l*d+m*o,h=h*d+_*o,u=u*d+v*o;const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*u+c*m-l*f,e[t+1]=c*_+h*f+l*u-o*m,e[t+2]=l*_+h*m+o*f-c*u,e[t+3]=h*_-o*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*m*_,this._y=l*m*u-f*h*_,this._z=l*h*_+f*m*u,this._w=l*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+l*m*_,this._y=l*m*u-f*h*_,this._z=l*h*_-f*m*u,this._w=l*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-l*m*_,this._y=l*m*u+f*h*_,this._z=l*h*_+f*m*u,this._w=l*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-l*m*_,this._y=l*m*u+f*h*_,this._z=l*h*_-f*m*u,this._w=l*h*u+f*m*_;break;case"YZX":this._x=f*h*u+l*m*_,this._y=l*m*u+f*h*_,this._z=l*h*_-f*m*u,this._w=l*h*u-f*m*_;break;case"XZY":this._x=f*h*u-l*m*_,this._y=l*m*u-f*h*_,this._z=l*h*_+f*m*u,this._w=l*h*u+f*m*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new N,no=new Ki;class Ue{constructor(e,t,n,s,r,a,o,c,l){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],_=n[8],v=s[0],p=s[3],d=s[6],y=s[1],b=s[4],E=s[7],w=s[2],A=s[5],R=s[8];return r[0]=a*v+o*y+c*w,r[3]=a*p+o*b+c*A,r[6]=a*d+o*E+c*R,r[1]=l*v+h*y+u*w,r[4]=l*p+h*b+u*A,r[7]=l*d+h*E+u*R,r[2]=f*v+m*y+_*w,r[5]=f*p+m*b+_*A,r[8]=f*d+m*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,m=l*r-a*c,_=t*u+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ks.makeScale(e,t)),this}rotate(e){return this.premultiply(Ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new Ue,io=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),so=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ol(){const i={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?Ps:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bi]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}const qe=Ol();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class Bl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=Ls("canvas")),ni.width=e.width,ni.height=e.height;const s=ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gl=0;class Ua{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($s(s[a].image)):r.push($s(s[a]))}else r=$s(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function $s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let zl=0;const js=new N;class Ut extends wi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=xn,s=xn,r=Pt,a=Kn,o=tn,c=Xt,l=Ut.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Yi(),this.name="",this.source=new Ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(js).x}get height(){return this.source.getSize(js).y}get depth(){return this.source.getSize(js).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=vc;Ut.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],_=c[9],v=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,E=(m+1)/2,w=(d+1)/2,A=(h+f)/4,R=(u+v)/4,L=(_+p)/4;return b>E&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=R/n):E>w?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=L/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=L/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vl extends wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ua(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends Vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cc extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kl extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(r,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),ts.subVectors(this.max,Li),ii.subVectors(e.a,Li),si.subVectors(e.b,Li),ri.subVectors(e.c,Li),bn.subVectors(si,ii),Tn.subVectors(ri,si),Gn.subVectors(ii,ri);let t=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Gn.z,Gn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Gn.z,0,-Gn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Gn.y,Gn.x,0];return!Js(t,ii,si,ri,ts)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,ii,si,ri,ts))?!1:(ns.crossVectors(bn,Tn),t=[ns.x,ns.y,ns.z],Js(t,ii,si,ri,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fn=[new N,new N,new N,new N,new N,new N,new N,new N],jt=new N,es=new Qn,ii=new N,si=new N,ri=new N,bn=new N,Tn=new N,Gn=new N,Li=new N,ts=new N,ns=new N,zn=new N;function Js(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zn.fromArray(i,r);const o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),c=e.dot(zn),l=t.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Hl=new Qn,Ii=new N,Qs=new N;class Ns{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ii,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(Qs)),this.expandByPoint(Ii.copy(e.center).sub(Qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pn=new N,er=new N,is=new N,wn=new N,tr=new N,ss=new N,nr=new N;class Pc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){er.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(er);const r=e.distanceTo(t)*.5,a=-this.direction.dot(is),o=wn.dot(this.direction),c=-wn.dot(is),l=wn.lengthSq(),h=Math.abs(1-a*a);let u,f,m,_;if(h>0)if(u=a*c-o,f=a*o-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const v=1/h;u*=v,f*=v,m=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(er).addScaledVector(is,f),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,s,r){tr.subVectors(t,e),ss.subVectors(n,e),nr.crossVectors(tr,ss);let a=this.direction.dot(nr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const c=o*this.direction.dot(ss.crossVectors(wn,ss));if(c<0)return null;const l=o*this.direction.dot(tr.cross(wn));if(l<0||c+l>a)return null;const h=-o*wn.dot(nr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,r,a,o,c,l,h,u,f,m,_,v,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,m,_,v,p)}set(e,t,n,s,r,a,o,c,l,h,u,f,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,m=a*u,_=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+_*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*u,_=l*h,v=l*u;t[0]=f+v*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*u,_=l*h,v=l*u;t[0]=f-v*o,t[4]=-a*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*u,_=o*h,v=o*u;t[0]=c*h,t[4]=_*l-m,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,_=o*c,v=o*l;t[0]=c*h,t[4]=v-f*u,t[8]=_*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+_,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*c,m=a*l,_=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=a*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wl,e,Xl)}lookAt(e,t,n){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),An.crossVectors(n,kt),An.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),An.crossVectors(n,kt)),An.normalize(),rs.crossVectors(kt,An),s[0]=An.x,s[4]=rs.x,s[8]=kt.x,s[1]=An.y,s[5]=rs.y,s[9]=kt.y,s[2]=An.z,s[6]=rs.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],_=n[2],v=n[6],p=n[10],d=n[14],y=n[3],b=n[7],E=n[11],w=n[15],A=s[0],R=s[4],L=s[8],x=s[12],S=s[1],P=s[5],O=s[9],B=s[13],q=s[2],X=s[6],H=s[10],V=s[14],J=s[3],de=s[7],ce=s[11],fe=s[15];return r[0]=a*A+o*S+c*q+l*J,r[4]=a*R+o*P+c*X+l*de,r[8]=a*L+o*O+c*H+l*ce,r[12]=a*x+o*B+c*V+l*fe,r[1]=h*A+u*S+f*q+m*J,r[5]=h*R+u*P+f*X+m*de,r[9]=h*L+u*O+f*H+m*ce,r[13]=h*x+u*B+f*V+m*fe,r[2]=_*A+v*S+p*q+d*J,r[6]=_*R+v*P+p*X+d*de,r[10]=_*L+v*O+p*H+d*ce,r[14]=_*x+v*B+p*V+d*fe,r[3]=y*A+b*S+E*q+w*J,r[7]=y*R+b*P+E*X+w*de,r[11]=y*L+b*O+E*H+w*ce,r[15]=y*x+b*B+E*V+w*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15],y=c*m-l*f,b=o*m-l*u,E=o*f-c*u,w=a*m-l*h,A=a*f-c*h,R=a*u-o*h;return t*(v*y-p*b+d*E)-n*(_*y-p*w+d*A)+s*(_*b-v*w+d*R)-r*(_*E-v*A+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],y=u*p*l-v*f*l+v*c*m-o*p*m-u*c*d+o*f*d,b=_*f*l-h*p*l-_*c*m+a*p*m+h*c*d-a*f*d,E=h*v*l-_*u*l+_*o*m-a*v*m-h*o*d+a*u*d,w=_*u*c-h*v*c-_*o*f+a*v*f+h*o*p-a*u*p,A=t*y+n*b+s*E+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(v*f*r-u*p*r-v*s*m+n*p*m+u*s*d-n*f*d)*R,e[2]=(o*p*r-v*c*r+v*s*l-n*p*l-o*s*d+n*c*d)*R,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*m-n*c*m)*R,e[4]=b*R,e[5]=(h*p*r-_*f*r+_*s*m-t*p*m-h*s*d+t*f*d)*R,e[6]=(_*c*r-a*p*r-_*s*l+t*p*l+a*s*d-t*c*d)*R,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*m+t*c*m)*R,e[8]=E*R,e[9]=(_*u*r-h*v*r-_*n*m+t*v*m+h*n*d-t*u*d)*R,e[10]=(a*v*r-_*o*r+_*n*l-t*v*l-a*n*d+t*o*d)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*m-t*o*m)*R,e[12]=w*R,e[13]=(h*v*s-_*u*s+_*n*f-t*v*f-h*n*p+t*u*p)*R,e[14]=(_*o*s-a*v*s-_*n*c+t*v*c+a*n*p-t*o*p)*R,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,m=r*h,_=r*u,v=a*h,p=a*u,d=o*u,y=c*l,b=c*h,E=c*u,w=n.x,A=n.y,R=n.z;return s[0]=(1-(v+d))*w,s[1]=(m+E)*w,s[2]=(_-b)*w,s[3]=0,s[4]=(m-E)*A,s[5]=(1-(f+d))*A,s[6]=(p+y)*A,s[7]=0,s[8]=(_+b)*R,s[9]=(p-y)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=ai.set(s[0],s[1],s[2]).length();const a=ai.set(s[4],s[5],s[6]).length(),o=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Jt.copy(this);const l=1/r,h=1/a,u=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=on,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s);let _,v;if(c)_=r/(a-r),v=a*r/(a-r);else if(o===on)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ds)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=on,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,v;if(c)_=1/(a-r),v=a/(a-r);else if(o===on)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ds)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new N,Jt=new ut,Wl=new N(0,0,0),Xl=new N(1,1,1),An=new N,rs=new N,kt=new N,ro=new ut,ao=new Ki;class un{constructor(e=0,t=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ao.setFromEuler(this),this.setFromQuaternion(ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ql=0;const oo=new N,oi=new Ki,mn=new ut,as=new N,Ui=new N,Zl=new N,Yl=new Ki,co=new N(1,0,0),lo=new N(0,1,0),ho=new N(0,0,1),uo={type:"added"},Kl={type:"removed"},ci={type:"childadded",child:null},ir={type:"childremoved",child:null};class bt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new N,t=new un,n=new Ki,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ue}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(co,e)}rotateY(e){return this.rotateOnAxis(lo,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return oo.copy(e).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(co,e)}translateY(e){return this.translateOnAxis(lo,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ui,as,this.up):mn.lookAt(as,Ui,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(mn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uo),ci.child=e,this.dispatchEvent(ci),ci.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kl),ir.child=e,this.dispatchEvent(ir),ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uo),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,e,Zl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Yl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new N(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new N,gn=new N,sr=new N,_n=new N,li=new N,hi=new N,fo=new N,rr=new N,ar=new N,or=new N,cr=new mt,lr=new mt,hr=new mt;class en{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qt.subVectors(e,t),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qt.subVectors(s,t),gn.subVectors(n,t),sr.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(gn),c=Qt.dot(sr),l=gn.dot(gn),h=gn.dot(sr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(l*c-o*h)*f,_=(a*h-o*c)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(o,_n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return cr.setScalar(0),lr.setScalar(0),hr.setScalar(0),cr.fromBufferAttribute(e,t),lr.fromBufferAttribute(e,n),hr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cr,r.x),a.addScaledVector(lr,r.y),a.addScaledVector(hr,r.z),a}static isFrontFacing(e,t,n,s){return Qt.subVectors(n,t),gn.subVectors(e,t),Qt.cross(gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Qt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;li.subVectors(s,n),hi.subVectors(r,n),rr.subVectors(e,n);const c=li.dot(rr),l=hi.dot(rr);if(c<=0&&l<=0)return t.copy(n);ar.subVectors(e,s);const h=li.dot(ar),u=hi.dot(ar);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(li,a);or.subVectors(e,r);const m=li.dot(or),_=hi.dot(or);if(_>=0&&m<=_)return t.copy(r);const v=m*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(hi,o);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return fo.subVectors(r,s),o=(u-h)/(u-h+(m-_)),t.copy(s).addScaledVector(fo,o);const d=1/(p+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(li,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},os={h:0,s:0,l:0};function ur(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=Fl(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ur(a,r,e+1/3),this.g=ur(a,r,e),this.b=ur(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return qe.workingToColorSpace(Rt.copy(this),e),Math.round(We(Rt.r*255,0,255))*65536+Math.round(We(Rt.g*255,0,255))*256+Math.round(We(Rt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Rt.copy(this),t);const n=Rt.r,s=Rt.g,r=Rt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Yt){qe.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,s=Rt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(os);const n=Zs(Rn.h,os.h,t),s=Zs(Rn.s,os.s,t),r=Zs(Rn.l,os.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ne;Ne.NAMES=Lc;let $l=0;class Ai extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=vi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Cr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rr&&(n.blendSrc=this.blendSrc),this.blendDst!==Cr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ic extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new N,cs=new He;let jl=0;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jl++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class Uc extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nc extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jl=0;const Zt=new ut,dr=new bt,ui=new N,Ht=new Qn,Ni=new Qn,Et=new N;class Tt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?Nc:Uc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,Ni.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,Ni.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(Ni.min),Ht.expandByPoint(Ni.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(ui.fromBufferAttribute(e,l),Et.add(ui)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new N,c[L]=new N;const l=new N,h=new N,u=new N,f=new He,m=new He,_=new He,v=new N,p=new N;function d(L,x,S){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,x),_.fromBufferAttribute(r,S),h.sub(l),u.sub(l),m.sub(f),_.sub(f);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(P),o[L].add(v),o[x].add(v),o[S].add(v),c[L].add(p),c[x].add(p),c[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,x=y.length;L<x;++L){const S=y[L],P=S.start,O=S.count;for(let B=P,q=P+O;B<q;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new N,E=new N,w=new N,A=new N;function R(L){w.fromBufferAttribute(s,L),A.copy(w);const x=o[L];b.copy(x),b.sub(w.multiplyScalar(w.dot(x))).normalize(),E.crossVectors(A,x);const P=E.dot(c[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,x=y.length;L<x;++L){const S=y[L],P=S.start,O=S.count;for(let B=P,q=P+O;B<q;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let m=0,_=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let d=0;d<h;d++)f[_++]=l[m++]}return new Gt(f,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const po=new ut,Vn=new Pc,ls=new Ns,mo=new N,hs=new N,us=new N,ds=new N,fr=new N,fs=new N,go=new N,ps=new N;class k extends bt{constructor(e=new Tt,t=new Ic){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(fr.fromBufferAttribute(u,e),a?fs.addScaledVector(fr,h):fs.addScaledVector(fr.sub(t),h))}t.add(fs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(ls.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ls,mo)===null||Vn.origin.distanceToSquared(mo)>(e.far-e.near)**2))&&(po.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(po),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,w=b;E<w;E+=3){const A=o.getX(E),R=o.getX(E+1),L=o.getX(E+2);s=ms(this,d,e,n,l,h,u,A,R,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=o.getX(p),b=o.getX(p+1),E=o.getX(p+2);s=ms(this,a,e,n,l,h,u,y,b,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,w=b;E<w;E+=3){const A=E,R=E+1,L=E+2;s=ms(this,d,e,n,l,h,u,A,R,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=p,b=p+1,E=p+2;s=ms(this,a,e,n,l,h,u,y,b,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Ql(i,e,t,n,s,r,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Nn,o),c===null)return null;ps.copy(o),ps.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ps);return l<t.near||l>t.far?null:{distance:l,point:ps.clone(),object:i}}function ms(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,hs),i.getVertexPosition(c,us),i.getVertexPosition(l,ds);const h=Ql(i,e,t,n,hs,us,ds,go);if(h){const u=new N;en.getBarycoord(go,hs,us,ds,u),s&&(h.uv=en.getInterpolatedAttribute(s,o,c,l,u,new He)),r&&(h.uv1=en.getInterpolatedAttribute(r,o,c,l,u,new He)),a&&(h.normal=en.getInterpolatedAttribute(a,o,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new N,materialIndex:0};en.getNormal(hs,us,ds,f.normal),h.face=f,h.barycoord=u}return h}class Oe extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function _(v,p,d,y,b,E,w,A,R,L,x){const S=E/R,P=w/L,O=E/2,B=w/2,q=A/2,X=R+1,H=L+1;let V=0,J=0;const de=new N;for(let ce=0;ce<H;ce++){const fe=ce*P-B;for(let Ve=0;Ve<X;Ve++){const Be=Ve*S-O;de[v]=Be*y,de[p]=fe*b,de[d]=q,l.push(de.x,de.y,de.z),de[v]=0,de[p]=0,de[d]=A>0?1:-1,h.push(de.x,de.y,de.z),u.push(Ve/R),u.push(1-ce/L),V+=1}}for(let ce=0;ce<L;ce++)for(let fe=0;fe<R;fe++){const Ve=f+fe+X*ce,Be=f+fe+X*(ce+1),ht=f+(fe+1)+X*(ce+1),ot=f+(fe+1)+X*ce;c.push(Ve,Be,ot),c.push(Be,ht,ot),J+=6}o.addGroup(m,J,x),m+=J,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const s in n)e[s]=n[s]}return e}function eh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const th={clone:Ti,merge:Lt};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=eh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Oc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new N,_o=new He,xo=new He;class Kt extends Oc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,_o,xo),t.subVectors(xo,_o)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,fi=1;class sh extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(di,fi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(di,fi,e,t);r.layers=this.layers,this.add(r);const a=new Kt(di,fi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(di,fi,e,t);o.layers=this.layers,this.add(o);const c=new Kt(di,fi,e,t);c.layers=this.layers,this.add(c);const l=new Kt(di,fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Bc extends Ut{constructor(e=[],t=Jn,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gc extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oe(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:vn});r.uniforms.tEquirect.value=t;const a=new k(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Pt),new sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Re extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rh={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fs{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new Fs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ah extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class oh extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,c,l=wt,h=wt,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mr=new N,ch=new N,lh=new Ue;class qn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=mr.subVectors(n,t).cross(ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lh.getNormalMatrix(e),s=this.coplanarPoint(mr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Ns,hh=new He(.5,.5),gs=new N;class Na{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],m=r[7],_=r[8],v=r[9],p=r[10],d=r[11],y=r[12],b=r[13],E=r[14],w=r[15];if(s[0].setComponents(l-a,m-h,d-_,w-y).normalize(),s[1].setComponents(l+a,m+h,d+_,w+y).normalize(),s[2].setComponents(l+o,m+u,d+v,w+b).normalize(),s[3].setComponents(l-o,m-u,d-v,w-b).normalize(),n)s[4].setComponents(c,f,p,E).normalize(),s[5].setComponents(l-c,m-f,d-p,w-E).normalize();else if(s[4].setComponents(l-c,m-f,d-p,w-E).normalize(),t===on)s[5].setComponents(l+c,m+f,d+p,w+E).normalize();else if(t===Ds)s[5].setComponents(c,f,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){kn.center.set(0,0,0);const t=hh.distanceTo(e.center);return kn.radius=.7071067811865476+t,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(gs.x=s.normal.x>0?e.max.x:e.min.x,gs.y=s.normal.y>0?e.max.y:e.min.y,gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fa extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vo=new ut,Ma=new Pc,_s=new Ns,xs=new N;class zc extends bt{constructor(e=new Tt,t=new Fa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),_s.radius+=r,e.ray.intersectsSphere(_s)===!1)return;vo.copy(s).invert(),Ma.copy(e.ray).applyMatrix4(vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=f,v=m;_<v;_++){const p=l.getX(_);xs.fromBufferAttribute(u,p),Mo(xs,p,c,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,v=m;_<v;_++)xs.fromBufferAttribute(u,_),Mo(xs,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Mo(i,e,t,n,s,r,a){const o=Ma.distanceSqToPoint(i);if(o<t){const c=new N;Ma.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qi extends Ut{constructor(e,t,n=hn,s,r,a,o=wt,c=wt,l,h=En,u=1){if(h!==En&&h!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uh extends qi{constructor(e,t=hn,n=Jn,s,r,a=wt,o=wt,c,l=En){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vc extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $i extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new N,h=new He;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=n+u/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ie extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let _=0;const v=[],p=n/2;let d=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(m,2));function y(){const E=new N,w=new N;let A=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const x=[],S=L/r,P=S*(t-e)+e;for(let O=0;O<=s;O++){const B=O/s,q=B*c+o,X=Math.sin(q),H=Math.cos(q);w.x=P*X,w.y=-S*n+p,w.z=P*H,u.push(w.x,w.y,w.z),E.set(X,R,H).normalize(),f.push(E.x,E.y,E.z),m.push(B,1-S),x.push(_++)}v.push(x)}for(let L=0;L<s;L++)for(let x=0;x<r;x++){const S=v[x][L],P=v[x+1][L],O=v[x+1][L+1],B=v[x][L+1];(e>0||x!==0)&&(h.push(S,P,B),A+=3),(t>0||x!==r-1)&&(h.push(P,O,B),A+=3)}l.addGroup(d,A,0),d+=A}function b(E){const w=_,A=new He,R=new N;let L=0;const x=E===!0?e:t,S=E===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*S,0),f.push(0,S,0),m.push(.5,.5),_++;const P=_;for(let O=0;O<=s;O++){const q=O/s*c+o,X=Math.cos(q),H=Math.sin(q);R.x=x*H,R.y=p*S,R.z=x*X,u.push(R.x,R.y,R.z),f.push(0,S,0),A.x=X*.5+.5,A.y=H*.5*S+.5,m.push(A.x,A.y),_++}for(let O=0;O<s;O++){const B=w+O,q=P+O;E===!0?h.push(q,q+1,B):h.push(q+1,q,B),L+=3}l.addGroup(d,L,E===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ie(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class In extends Ie{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new In(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Os extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const b=new N,E=new N,w=new N;for(let A=0;A<t.length;A+=3)m(t[A+0],b),m(t[A+1],E),m(t[A+2],w),c(b,E,w,y)}function c(y,b,E,w){const A=w+1,R=[];for(let L=0;L<=A;L++){R[L]=[];const x=y.clone().lerp(E,L/A),S=b.clone().lerp(E,L/A),P=A-L;for(let O=0;O<=P;O++)O===0&&L===A?R[L][O]=x:R[L][O]=x.clone().lerp(S,O/P)}for(let L=0;L<A;L++)for(let x=0;x<2*(A-L)-1;x++){const S=Math.floor(x/2);x%2===0?(f(R[L][S+1]),f(R[L+1][S]),f(R[L][S])):(f(R[L][S+1]),f(R[L+1][S+1]),f(R[L+1][S]))}}function l(y){const b=new N;for(let E=0;E<r.length;E+=3)b.x=r[E+0],b.y=r[E+1],b.z=r[E+2],b.normalize().multiplyScalar(y),r[E+0]=b.x,r[E+1]=b.y,r[E+2]=b.z}function h(){const y=new N;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const E=p(y)/2/Math.PI+.5,w=d(y)/Math.PI+.5;a.push(E,1-w)}_(),u()}function u(){for(let y=0;y<a.length;y+=6){const b=a[y+0],E=a[y+2],w=a[y+4],A=Math.max(b,E,w),R=Math.min(b,E,w);A>.9&&R<.1&&(b<.2&&(a[y+0]+=1),E<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,b){const E=y*3;b.x=e[E+0],b.y=e[E+1],b.z=e[E+2]}function _(){const y=new N,b=new N,E=new N,w=new N,A=new He,R=new He,L=new He;for(let x=0,S=0;x<r.length;x+=9,S+=6){y.set(r[x+0],r[x+1],r[x+2]),b.set(r[x+3],r[x+4],r[x+5]),E.set(r[x+6],r[x+7],r[x+8]),A.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),L.set(a[S+4],a[S+5]),w.copy(y).add(b).add(E).divideScalar(3);const P=p(w);v(A,S+0,y,P),v(R,S+2,b,P),v(L,S+4,E,P)}}function v(y,b,E,w){w<0&&y.x===1&&(a[b]=y.x-1),E.x===0&&E.z===0&&(a[b]=w/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.vertices,e.indices,e.radius,e.detail)}}class Bs extends Os{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bs(e.radius,e.detail)}}class Is extends Os{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Is(e.radius,e.detail)}}class Bt extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,m=[],_=[],v=[],p=[];for(let d=0;d<h;d++){const y=d*f-a;for(let b=0;b<l;b++){const E=b*u-r;_.push(E,-y,0),v.push(0,0,1),p.push(b/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const b=y+l*d,E=y+l*(d+1),w=y+1+l*(d+1),A=y+1+l*d;m.push(b,E,A),m.push(E,w,A)}this.setIndex(m),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.widthSegments,e.heightSegments)}}class vt extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new N,f=new N,m=[],_=[],v=[],p=[];for(let d=0;d<=n;d++){const y=[],b=d/n;let E=0;d===0&&a===0?E=.5/t:d===n&&c===Math.PI&&(E=-.5/t);for(let w=0;w<=t;w++){const A=w/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+b*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(A+E,1-b),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){const b=h[d][y+1],E=h[d][y],w=h[d+1][y],A=h[d+1][y+1];(d!==0||a>0)&&m.push(b,E,A),(d!==n-1||c<Math.PI)&&m.push(E,w,A)}this.setIndex(m),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fn extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new N,u=new N,f=new N;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){const v=_/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){const v=(s+1)*m+_-1,p=(s+1)*(m-1)+_-1,d=(s+1)*(m-1)+_,y=(s+1)*m+_;a.push(v,p,y),a.push(p,d,y)}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dh extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class j extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fh extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ph extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Oa extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mh extends Oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const gr=new ut,So=new N,yo=new N;class gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;So.setFromMatrixPosition(e.matrixWorld),t.position.copy(So),yo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yo),t.updateMatrixWorld(),gr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ba extends Oc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _h extends gh{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xh extends Oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new _h}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vh extends Oa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mh extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eo(i,e,t,n){const s=yh(n);switch(t){case bc:return i*e;case wc:return i*e/s.components*s.byteLength;case Ca:return i*e/s.components*s.byteLength;case Ei:return i*e*2/s.components*s.byteLength;case Pa:return i*e*2/s.components*s.byteLength;case Tc:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case Da:return i*e*4/s.components*s.byteLength;case Ts:case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case As:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kr:case Wr:return Math.max(i,16)*Math.max(e,8)/4;case Vr:case Hr:return Math.max(i,8)*Math.max(e,8)/2;case Xr:case qr:case Yr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case $r:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case da:case fa:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ma:case ga:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _a:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yh(i){switch(i){case Xt:case Mc:return{byteLength:1,components:1};case Hi:case Sc:case yn:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case hn:case wa:case an:return{byteLength:4,components:1};case yc:case Ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);function kc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Eh(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],v=u[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const v=u[m];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Th=`#ifdef USE_ALPHAHASH
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
#endif`,wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
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
#endif`,Dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
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
#endif`,Ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
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
#endif`,Bh=`#ifdef USE_BUMPMAP
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
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zh=`#define PI 3.141592653589793
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
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kh=`vec3 transformedNormal = objectNormal;
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
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uu=`#ifdef USE_GRADIENTMAP
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
}`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
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
#endif`,gu=`#ifdef USE_ENVMAP
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
#endif`,_u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Su=`PhysicalMaterial material;
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
#endif`,yu=`uniform sampler2D dfgLUT;
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
}`,Eu=`
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
#endif`,bu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iu=`#if defined( USE_POINTS_UV )
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
#endif`,Uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gu=`#ifdef USE_MORPHTARGETS
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
#endif`,zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qu=`#ifdef USE_NORMALMAP
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
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ju=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cd=`float getShadowMask() {
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
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
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
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
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
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,xd=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bd=`uniform sampler2D t2D;
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`#include <common>
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
}`,Pd=`#if DEPTH_PACKING == 3200
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
}`,Dd=`#define DISTANCE
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
}`,Ld=`#define DISTANCE
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`uniform float scale;
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Od=`#include <common>
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
}`,Bd=`uniform vec3 diffuse;
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
}`,Gd=`#define LAMBERT
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
}`,zd=`#define LAMBERT
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
}`,Vd=`#define MATCAP
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
}`,kd=`#define MATCAP
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
}`,Hd=`#define NORMAL
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
}`,Wd=`#define NORMAL
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
}`,Xd=`#define PHONG
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
}`,qd=`#define PHONG
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
}`,Zd=`#define STANDARD
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
}`,Yd=`#define STANDARD
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
}`,Kd=`#define TOON
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
}`,$d=`#define TOON
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
}`,jd=`uniform float size;
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
}`,Jd=`uniform vec3 diffuse;
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
}`,Qd=`#include <common>
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
}`,ef=`uniform vec3 color;
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
}`,tf=`uniform float rotation;
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
}`,nf=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:bh,alphahash_pars_fragment:Th,alphamap_fragment:wh,alphamap_pars_fragment:Ah,alphatest_fragment:Rh,alphatest_pars_fragment:Ch,aomap_fragment:Ph,aomap_pars_fragment:Dh,batching_pars_vertex:Lh,batching_vertex:Ih,begin_vertex:Uh,beginnormal_vertex:Nh,bsdfs:Fh,iridescence_fragment:Oh,bumpmap_pars_fragment:Bh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:Vh,clipping_planes_vertex:kh,color_fragment:Hh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:qh,common:Zh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:Kh,displacementmap_pars_vertex:$h,displacementmap_vertex:jh,emissivemap_fragment:Jh,emissivemap_pars_fragment:Qh,colorspace_fragment:eu,colorspace_pars_fragment:tu,envmap_fragment:nu,envmap_common_pars_fragment:iu,envmap_pars_fragment:su,envmap_pars_vertex:ru,envmap_physical_pars_fragment:gu,envmap_vertex:au,fog_vertex:ou,fog_pars_vertex:cu,fog_fragment:lu,fog_pars_fragment:hu,gradientmap_pars_fragment:uu,lightmap_pars_fragment:du,lights_lambert_fragment:fu,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:_u,lights_toon_pars_fragment:xu,lights_phong_fragment:vu,lights_phong_pars_fragment:Mu,lights_physical_fragment:Su,lights_physical_pars_fragment:yu,lights_fragment_begin:Eu,lights_fragment_maps:bu,lights_fragment_end:Tu,logdepthbuf_fragment:wu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:Ru,logdepthbuf_vertex:Cu,map_fragment:Pu,map_pars_fragment:Du,map_particle_fragment:Lu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Uu,metalnessmap_pars_fragment:Nu,morphinstance_vertex:Fu,morphcolor_vertex:Ou,morphnormal_vertex:Bu,morphtarget_pars_vertex:Gu,morphtarget_vertex:zu,normal_fragment_begin:Vu,normal_fragment_maps:ku,normal_pars_fragment:Hu,normal_pars_vertex:Wu,normal_vertex:Xu,normalmap_pars_fragment:qu,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:Yu,clearcoat_pars_fragment:Ku,iridescence_pars_fragment:$u,opaque_fragment:ju,packing:Ju,premultiplied_alpha_fragment:Qu,project_vertex:ed,dithering_fragment:td,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:ad,shadowmap_vertex:od,shadowmask_pars_fragment:cd,skinbase_vertex:ld,skinning_pars_vertex:hd,skinning_vertex:ud,skinnormal_vertex:dd,specularmap_fragment:fd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:_d,transmission_pars_fragment:xd,uv_pars_fragment:vd,uv_pars_vertex:Md,uv_vertex:Sd,worldpos_vertex:yd,background_vert:Ed,background_frag:bd,backgroundCube_vert:Td,backgroundCube_frag:wd,cube_vert:Ad,cube_frag:Rd,depth_vert:Cd,depth_frag:Pd,distance_vert:Dd,distance_frag:Ld,equirect_vert:Id,equirect_frag:Ud,linedashed_vert:Nd,linedashed_frag:Fd,meshbasic_vert:Od,meshbasic_frag:Bd,meshlambert_vert:Gd,meshlambert_frag:zd,meshmatcap_vert:Vd,meshmatcap_frag:kd,meshnormal_vert:Hd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:qd,meshphysical_vert:Zd,meshphysical_frag:Yd,meshtoon_vert:Kd,meshtoon_frag:$d,points_vert:jd,points_frag:Jd,shadow_vert:Qd,shadow_frag:ef,sprite_vert:tf,sprite_frag:nf},le={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},rn={basic:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Lt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Lt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Lt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Lt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Lt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Lt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Lt([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Lt([le.lights,le.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};rn.physical={uniforms:Lt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const vs={r:0,b:0,g:0},Hn=new un,sf=new ut;function rf(i,e,t,n,s,r,a){const o=new Ne(0);let c=r===!0?0:1,l,h,u=null,f=0,m=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function v(b){let E=!1;const w=_(b);w===null?d(o,c):w&&w.isColor&&(d(w,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,E){const w=_(E);w&&(w.isCubeTexture||w.mapping===Us)?(h===void 0&&(h=new k(new Oe(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Ti(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hn.copy(E.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sf.makeRotationFromEuler(Hn)),h.material.toneMapped=qe.getTransfer(w.colorSpace)!==et,(u!==w||f!==w.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new k(new Bt(2,2),new $t({name:"BackgroundMaterial",uniforms:Ti(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=qe.getTransfer(w.colorSpace)!==et,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,m=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function d(b,E){b.getRGB(vs,Fc(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,E,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),c=E,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(o,c)},render:v,addToRenderList:p,dispose:y}}function af(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,P,O,B,q){let X=!1;const H=u(B,O,P);r!==H&&(r=H,l(r.object)),X=m(S,B,O,q),X&&_(S,B,O,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(S,P,O,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,O){const B=O.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let X=q[P.id];X===void 0&&(X={},q[P.id]=X);let H=X[B];return H===void 0&&(H=f(c()),X[B]=H),H}function f(S){const P=[],O=[],B=[];for(let q=0;q<t;q++)P[q]=0,O[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:S,attributes:{},index:null}}function m(S,P,O,B){const q=r.attributes,X=P.attributes;let H=0;const V=O.getAttributes();for(const J in V)if(V[J].location>=0){const ce=q[J];let fe=X[J];if(fe===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),ce===void 0||ce.attribute!==fe||fe&&ce.data!==fe.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function _(S,P,O,B){const q={},X=P.attributes;let H=0;const V=O.getAttributes();for(const J in V)if(V[J].location>=0){let ce=X[J];ce===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const fe={};fe.attribute=ce,ce&&ce.data&&(fe.data=ce.data),q[J]=fe,H++}r.attributes=q,r.attributesNum=H,r.index=B}function v(){const S=r.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function p(S){d(S,0)}function d(S,P){const O=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;O[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),q[S]!==P&&(i.vertexAttribDivisor(S,P),q[S]=P)}function y(){const S=r.newAttributes,P=r.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==S[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function b(S,P,O,B,q,X,H){H===!0?i.vertexAttribIPointer(S,P,O,q,X):i.vertexAttribPointer(S,P,O,B,q,X)}function E(S,P,O,B){v();const q=B.attributes,X=O.getAttributes(),H=P.defaultAttributeValues;for(const V in X){const J=X[V];if(J.location>=0){let de=q[V];if(de===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){const ce=de.normalized,fe=de.itemSize,Ve=e.get(de);if(Ve===void 0)continue;const Be=Ve.buffer,ht=Ve.type,ot=Ve.bytesPerElement,Y=ht===i.INT||ht===i.UNSIGNED_INT||de.gpuType===wa;if(de.isInterleavedBufferAttribute){const Q=de.data,ge=Q.stride,Le=de.offset;if(Q.isInstancedInterleavedBuffer){for(let ve=0;ve<J.locationSize;ve++)d(J.location+ve,Q.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<J.locationSize;ve++)p(J.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let ve=0;ve<J.locationSize;ve++)b(J.location+ve,fe/J.locationSize,ht,ce,ge*ot,(Le+fe/J.locationSize*ve)*ot,Y)}else{if(de.isInstancedBufferAttribute){for(let Q=0;Q<J.locationSize;Q++)d(J.location+Q,de.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Q=0;Q<J.locationSize;Q++)p(J.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Q=0;Q<J.locationSize;Q++)b(J.location+Q,fe/J.locationSize,ht,ce,fe*ot,fe/J.locationSize*Q*ot,Y)}}else if(H!==void 0){const ce=H[V];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(J.location,ce);break;case 3:i.vertexAttrib3fv(J.location,ce);break;case 4:i.vertexAttrib4fv(J.location,ce);break;default:i.vertexAttrib1fv(J.location,ce)}}}}y()}function w(){L();for(const S in n){const P=n[S];for(const O in P){const B=P[O];for(const q in B)h(B[q].object),delete B[q];delete P[O]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const O in P){const B=P[O];for(const q in B)h(B[q].object),delete B[q];delete P[O]}delete n[S.id]}function R(S){for(const P in n){const O=n[P];if(O[S.id]===void 0)continue;const B=O[S.id];for(const q in B)h(B[q].object),delete B[q];delete O[S.id]}}function L(){x(),a=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function of(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];t.update(m,n,1)}function c(l,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*f[v];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function cf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Xt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==an&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:E,maxSamples:w,samples:A}}function lf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new qn,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,b=y*4;let E=d.clippingState||null;c.value=E,E=h(_,f,b,m);for(let w=0;w!==b;++w)E[w]=t[w];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,_!==!0||p===null){const d=m+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,E=m;b!==v;++b,E+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function hf(i){let e=new WeakMap;function t(a,o){return o===Or?a.mapping=Jn:o===Br&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Or||o===Br)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Gc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ln=4,bo=[.125,.215,.35,.446,.526,.582],Yn=20,uf=256,Fi=new Ba,To=new Ne;let _r=null,xr=0,vr=0,Mr=!1;const df=new N;class wo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=df}=r;_r=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_r,xr,vr),this._renderer.xr.enabled=Mr,e.scissorTest=!1,pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_r=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:yn,format:tn,colorSpace:bi,depthBuffer:!1},s=Ao(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ao(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ff(r)),this._blurMaterial=mf(r,e,t),this._ggxMaterial=pf(r,e,t)}return s}_compileMaterial(e){const t=new k(new Tt,e);this._renderer.compile(t,Fi)}_sceneToCubeUV(e,t,n,s,r){const c=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(To),u.toneMapping=cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new k(new Oe,new Ic({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let d=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,d=!0):(p.color.copy(To),d=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):E===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const w=this._cubeSize;pi(s,E*w,b>2?w:0,w,w),u.setRenderTarget(s),d&&u.render(v,c),u.render(e,c)}u.toneMapping=m,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Jn||e.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Co()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ro());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;pi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,m=u*f,{_lodMax:_}=this,v=this._sizeLods[n],p=3*v*(n>_-Ln?n-_+Ln:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-t,pi(r,p,d,3*v,2*v),s.setRenderTarget(r),s.render(o,Fi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,pi(e,p,d,3*v,2*v),s.setRenderTarget(e),s.render(o,Fi)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=l;const f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):Yn;p>Yn&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yn}`);const d=[];let y=0;for(let R=0;R<Yn;++R){const L=R/v,x=Math.exp(-L*L/2);d.push(x),R===0?y+=x:R<p&&(y+=2*x)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const E=this._sizeLods[s],w=3*E*(s>b-Ln?s-b+Ln:0),A=4*(this._cubeSize-E);pi(t,w,A,3*E,2*E),c.setRenderTarget(t),c.render(u,Fi)}}function ff(i){const e=[],t=[],n=[];let s=i;const r=i-Ln+1+bo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ln?c=bo[a-i+Ln-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,p=2,d=1,y=new Float32Array(v*_*m),b=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,L=A>2?0:-1,x=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];y.set(x,v*_*A),b.set(f,p*_*A);const S=[A,A,A,A,A,A];E.set(S,d*_*A)}const w=new Tt;w.setAttribute("position",new Gt(y,v)),w.setAttribute("uv",new Gt(b,p)),w.setAttribute("faceIndex",new Gt(E,d)),n.push(new k(w,null)),s>Ln&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ao(i,e,t){const n=new ln(i,e,t);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pf(i,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function mf(i,e,t){const n=new Float32Array(Yn),s=new N(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ro(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Co(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Gs(){return`

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
	`}function gf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Or||c===Br,h=c===Jn||c===yi;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new wo(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new wo(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _f(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function xf(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(u){const f=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let b=0,E=y.length;b<E;b+=3){const w=y[b+0],A=y[b+1],R=y[b+2];f.push(w,A,A,R,R,w)}}else if(_!==void 0){const y=_.array;v=_.version;for(let b=0,E=y.length/3-1;b<E;b+=3){const w=b+0,A=b+1,R=b+2;f.push(w,A,A,R,R,w)}}else return;const p=new(Rc(f)?Nc:Uc)(f,1);p.version=v;const d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function vf(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*a),t.update(m,n,1)}function l(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*a,_),t.update(m,n,_))}function h(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,n,1)}function u(f,m,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/a,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,_);let d=0;for(let y=0;y<_;y++)d+=m[y]*v[y];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sf(i,e,t){const n=new WeakMap,s=new mt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),v===!0&&(E=2),p===!0&&(E=3);let w=o.attributes.position.count*E,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*A*4*u),L=new Cc(R,w,A,u);L.type=an,L.needsUpdate=!0;const x=E*4;for(let P=0;P<u;P++){const O=d[P],B=y[P],q=b[P],X=w*A*4*P;for(let H=0;H<O.count;H++){const V=H*x;_===!0&&(s.fromBufferAttribute(O,H),R[X+V+0]=s.x,R[X+V+1]=s.y,R[X+V+2]=s.z,R[X+V+3]=0),v===!0&&(s.fromBufferAttribute(B,H),R[X+V+4]=s.x,R[X+V+5]=s.y,R[X+V+6]=s.z,R[X+V+7]=0),p===!0&&(s.fromBufferAttribute(q,H),R[X+V+8]=s.x,R[X+V+9]=s.y,R[X+V+10]=s.z,R[X+V+11]=q.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new He(w,A)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const v=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function yf(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Ef={[fc]:"LINEAR_TONE_MAPPING",[pc]:"REINHARD_TONE_MAPPING",[mc]:"CINEON_TONE_MAPPING",[Ta]:"ACES_FILMIC_TONE_MAPPING",[_c]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[gc]:"CUSTOM_TONE_MAPPING"};function bf(i,e,t,n,s){const r=new ln(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new ln(e,t,{type:yn,depthBuffer:!1,stencilBuffer:!1}),o=new Tt;o.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new lt([0,2,0,0,2,0],2));const c=new dh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new k(o,c),h=new Ba(-1,1,1,-1,0,1);let u=null,f=null,m=!1,_,v=null,p=[],d=!1;this.setSize=function(y,b){r.setSize(y,b),a.setSize(y,b);for(let E=0;E<p.length;E++){const w=p[E];w.setSize&&w.setSize(y,b)}},this.setEffects=function(y){p=y,d=p.length>0&&p[0].isRenderPass===!0;const b=r.width,E=r.height;for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(b,E)}},this.begin=function(y,b){if(m||y.toneMapping===cn&&p.length===0)return!1;if(v=b,b!==null){const E=b.width,w=b.height;(r.width!==E||r.height!==w)&&this.setSize(E,w)}return d===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=cn,!0},this.hasRenderPass=function(){return d},this.end=function(y,b){y.toneMapping=_,m=!0;let E=r,w=a;for(let A=0;A<p.length;A++){const R=p[A];if(R.enabled!==!1&&(R.render(y,w,E,b),R.needsSwap!==!1)){const L=E;E=w,w=L}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,c.defines={},qe.getTransfer(u)===et&&(c.defines.SRGB_TRANSFER="");const A=Ef[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(v),y.render(l,h),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Hc=new Ut,Sa=new qi(1,1),Wc=new Cc,Xc=new kl,qc=new Bc,Po=[],Do=[],Lo=new Float32Array(16),Io=new Float32Array(9),Uo=new Float32Array(4);function Ri(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Po[s];if(r===void 0&&(r=new Float32Array(s),Po[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zs(i,e){let t=Do[e];t===void 0&&(t=new Int32Array(e),Do[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Uo.set(n),i.uniformMatrix2fv(this.addr,!1,Uo),St(t,n)}}function Pf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Io.set(n),i.uniformMatrix3fv(this.addr,!1,Io),St(t,n)}}function Df(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Lo.set(n),i.uniformMatrix4fv(this.addr,!1,Lo),St(t,n)}}function Lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function Nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Ff(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function zf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sa.compareFunction=t.isReversedDepthBuffer()?Ia:La,r=Sa):r=Hc,t.setTexture2D(e||r,s)}function Vf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xc,s)}function kf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qc,s)}function Hf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wc,s)}function Wf(i){switch(i){case 5126:return Tf;case 35664:return wf;case 35665:return Af;case 35666:return Rf;case 35674:return Cf;case 35675:return Pf;case 35676:return Df;case 5124:case 35670:return Lf;case 35667:case 35671:return If;case 35668:case 35672:return Uf;case 35669:case 35673:return Nf;case 5125:return Ff;case 36294:return Of;case 36295:return Bf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return Hf}}function Xf(i,e){i.uniform1fv(this.addr,e)}function qf(i,e){const t=Ri(e,this.size,2);i.uniform2fv(this.addr,t)}function Zf(i,e){const t=Ri(e,this.size,3);i.uniform3fv(this.addr,t)}function Yf(i,e){const t=Ri(e,this.size,4);i.uniform4fv(this.addr,t)}function Kf(i,e){const t=Ri(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $f(i,e){const t=Ri(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jf(i,e){const t=Ri(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jf(i,e){i.uniform1iv(this.addr,e)}function Qf(i,e){i.uniform2iv(this.addr,e)}function ep(i,e){i.uniform3iv(this.addr,e)}function tp(i,e){i.uniform4iv(this.addr,e)}function np(i,e){i.uniform1uiv(this.addr,e)}function ip(i,e){i.uniform2uiv(this.addr,e)}function sp(i,e){i.uniform3uiv(this.addr,e)}function rp(i,e){i.uniform4uiv(this.addr,e)}function ap(i,e,t){const n=this.cache,s=e.length,r=zs(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sa:a=Hc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function op(i,e,t){const n=this.cache,s=e.length,r=zs(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xc,r[a])}function cp(i,e,t){const n=this.cache,s=e.length,r=zs(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qc,r[a])}function lp(i,e,t){const n=this.cache,s=e.length,r=zs(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wc,r[a])}function hp(i){switch(i){case 5126:return Xf;case 35664:return qf;case 35665:return Zf;case 35666:return Yf;case 35674:return Kf;case 35675:return $f;case 35676:return jf;case 5124:case 35670:return Jf;case 35667:case 35671:return Qf;case 35668:case 35672:return ep;case 35669:case 35673:return tp;case 5125:return np;case 36294:return ip;case 36295:return sp;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return lp}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wf(t.type)}}class dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hp(t.type)}}class fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function No(i,e){i.seq.push(e),i.map[e.id]=e}function pp(i,e,t){const n=i.name,s=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),a=Sr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){No(t,l===void 0?new up(o,i,e):new dp(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new fp(o),No(t,u)),t=u}}}class Cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);pp(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Fo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const mp=37297;let gp=0;function _p(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Oo=new Ue;function xp(i){qe._getMatrix(Oo,qe.workingColorSpace,i);const e=`mat3( ${Oo.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_p(i.getShaderSource(e),o)}else return r}function vp(i,e){const t=xp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Mp={[fc]:"Linear",[pc]:"Reinhard",[mc]:"Cineon",[Ta]:"ACESFilmic",[_c]:"AgX",[xc]:"Neutral",[gc]:"Custom"};function Sp(i,e){const t=Mp[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new N;function yp(){qe.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ep(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function bp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ki(i){return i!==""}function Go(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(wp,Rp)}const Ap=new Map;function Rp(i,e){let t=Fe[e];if(t===void 0){const n=Ap.get(e);if(n!==void 0)t=Fe[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ya(t)}const Cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vo(i){return i.replace(Cp,Pp)}function Pp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ko(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Dp={[bs]:"SHADOWMAP_TYPE_PCF",[Vi]:"SHADOWMAP_TYPE_VSM"};function Lp(i){return Dp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ip={[Jn]:"ENVMAP_TYPE_CUBE",[yi]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE_UV"};function Up(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ip[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Np={[yi]:"ENVMAP_MODE_REFRACTION"};function Fp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Np[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Op={[dc]:"ENVMAP_BLENDING_MULTIPLY",[El]:"ENVMAP_BLENDING_MIX",[bl]:"ENVMAP_BLENDING_ADD"};function Bp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Op[i.combine]||"ENVMAP_BLENDING_NONE"}function Gp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Lp(t),l=Up(t),h=Fp(t),u=Bp(t),f=Gp(t),m=Ep(t),_=bp(r),v=s.createProgram();let p,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ki).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ki).join(`
`),d.length>0&&(d+=`
`)):(p=[ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),d=[ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==cn?Sp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,vp("linearToOutputTexel",t.outputColorSpace),yp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),a=ya(a),a=Go(a,t),a=zo(a,t),o=ya(o),o=Go(o,t),o=zo(o,t),a=Vo(a),o=Vo(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=y+p+a,E=y+d+o,w=Fo(s,s.VERTEX_SHADER,b),A=Fo(s,s.FRAGMENT_SHADER,E);s.attachShader(v,w),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(A)||"",X=O.trim(),H=B.trim(),V=q.trim();let J=!0,de=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,A);else{const ce=Bo(s,w,"vertex"),fe=Bo(s,A,"fragment");Ke("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+ce+`
`+fe)}else X!==""?De("WebGLProgram: Program Info Log:",X):(H===""||V==="")&&(de=!1);de&&(P.diagnostics={runnable:J,programLog:X,vertexShader:{log:H,prefix:p},fragmentShader:{log:V,prefix:d}})}s.deleteShader(w),s.deleteShader(A),L=new Cs(s,v),x=Tp(s,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,mp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let Vp=0;class kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hp(e),t.set(e,n)),n}}class Hp{constructor(e){this.id=Vp++,this.code=e,this.usedTimes=0}}function Wp(i,e,t,n,s,r,a){const o=new Dc,c=new kp,l=new Set,h=[],u=new Map,f=s.logarithmicDepthBuffer;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,P,O,B){const q=O.fog,X=B.geometry,H=x.isMeshStandardMaterial?O.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),J=V&&V.mapping===Us?V.image.height:null,de=_[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=ce!==void 0?ce.length:0;let Ve=0;X.morphAttributes.position!==void 0&&(Ve=1),X.morphAttributes.normal!==void 0&&(Ve=2),X.morphAttributes.color!==void 0&&(Ve=3);let Be,ht,ot,Y;if(de){const Je=rn[de];Be=Je.vertexShader,ht=Je.fragmentShader}else Be=x.vertexShader,ht=x.fragmentShader,c.update(x),ot=c.getVertexShaderID(x),Y=c.getFragmentShaderID(x);const Q=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Le=B.isInstancedMesh===!0,ve=B.isBatchedMesh===!0,Ze=!!x.map,yt=!!x.matcap,Xe=!!V,je=!!x.aoMap,nt=!!x.lightMap,Ge=!!x.bumpMap,gt=!!x.normalMap,C=!!x.displacementMap,_t=!!x.emissiveMap,$e=!!x.metalnessMap,st=!!x.roughnessMap,Se=x.anisotropy>0,T=x.clearcoat>0,g=x.dispersion>0,I=x.iridescence>0,Z=x.sheen>0,$=x.transmission>0,W=Se&&!!x.anisotropyMap,Ee=T&&!!x.clearcoatMap,se=T&&!!x.clearcoatNormalMap,Me=T&&!!x.clearcoatRoughnessMap,Ce=I&&!!x.iridescenceMap,te=I&&!!x.iridescenceThicknessMap,ae=Z&&!!x.sheenColorMap,xe=Z&&!!x.sheenRoughnessMap,ye=!!x.specularMap,re=!!x.specularColorMap,ze=!!x.specularIntensityMap,D=$&&!!x.transmissionMap,ue=$&&!!x.thicknessMap,ne=!!x.gradientMap,pe=!!x.alphaMap,ee=x.alphaTest>0,K=!!x.alphaHash,ie=!!x.extensions;let Pe=cn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const rt={shaderID:de,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:ht,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:ve,batchingColor:ve&&B._colorsTexture!==null,instancing:Le,instancingColor:Le&&B.instanceColor!==null,instancingMorph:Le&&B.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:bi,alphaToCoverage:!!x.alphaToCoverage,map:Ze,matcap:yt,envMap:Xe,envMapMode:Xe&&V.mapping,envMapCubeUVHeight:J,aoMap:je,lightMap:nt,bumpMap:Ge,normalMap:gt,displacementMap:C,emissiveMap:_t,normalMapObjectSpace:gt&&x.normalMapType===Al,normalMapTangentSpace:gt&&x.normalMapType===Ac,metalnessMap:$e,roughnessMap:st,anisotropy:Se,anisotropyMap:W,clearcoat:T,clearcoatMap:Ee,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:g,iridescence:I,iridescenceMap:Ce,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:ae,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:re,specularIntensityMap:ze,transmission:$,transmissionMap:D,thicknessMap:ue,gradientMap:ne,opaque:x.transparent===!1&&x.blending===vi&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:K,combine:x.combine,mapUv:Ze&&v(x.map.channel),aoMapUv:je&&v(x.aoMap.channel),lightMapUv:nt&&v(x.lightMap.channel),bumpMapUv:Ge&&v(x.bumpMap.channel),normalMapUv:gt&&v(x.normalMap.channel),displacementMapUv:C&&v(x.displacementMap.channel),emissiveMapUv:_t&&v(x.emissiveMap.channel),metalnessMapUv:$e&&v(x.metalnessMap.channel),roughnessMapUv:st&&v(x.roughnessMap.channel),anisotropyMapUv:W&&v(x.anisotropyMap.channel),clearcoatMapUv:Ee&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(x.sheenRoughnessMap.channel),specularMapUv:ye&&v(x.specularMap.channel),specularColorMapUv:re&&v(x.specularColorMap.channel),specularIntensityMapUv:ze&&v(x.specularIntensityMap.channel),transmissionMapUv:D&&v(x.transmissionMap.channel),thicknessMapUv:ue&&v(x.thicknessMap.channel),alphaMapUv:pe&&v(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(gt||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Ze||pe),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ze&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:_t&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pt,flipSided:x.side===It,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function d(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(S,x),b(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const S=_[x.type];let P;if(S){const O=rn[S];P=th.clone(O.uniforms)}else P=x.uniforms;return P}function w(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new zp(i,S,x,r),h.push(P),u.set(S,P)),P}function A(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){c.remove(x)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:L}}function Xp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,m,_,v,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=v,d.group=p),e++,d}function o(u,f,m,_,v,p){const d=a(u,f,m,_,v,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function c(u,f,m,_,v,p){const d=a(u,f,m,_,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||qp),n.length>1&&n.sort(f||Ho),s.length>1&&s.sort(f||Ho)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Zp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Wo,i.set(n,[a])):s>=r.length?(a=new Wo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ne};break;case"SpotLight":t={position:new N,direction:new N,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Kp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $p=0;function jp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jp(i){const e=new Yp,t=Kp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new ut,a=new ut;function o(l){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,_=0,v=0,p=0,d=0,y=0,b=0,E=0,w=0,A=0,R=0;l.sort(jp);for(let x=0,S=l.length;x<S;x++){const P=l[x],O=P.color,B=P.intensity,q=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ei?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],B);R++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,J=t.get(P);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=P.shadow.matrix,y++}n.directional[m]=H,m++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(B),H.distance=q,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[v]=H;const V=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,V.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=V.matrix,P.castShadow){const J=t.get(P);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=X,E++}v++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=H,p++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const V=P.shadow,J=t.get(P);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=P.shadow.matrix,b++}n.point[_]=H,_++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[d]=H,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==w||L.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=m,L.pointLength=_,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=w,L.numLightProbes=R,n.version=$p++)}function c(l,h){let u=0,f=0,m=0,_=0,v=0;const p=h.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){const b=l[d];if(b.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(b.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:o,setupView:c,state:n}}function Xo(i){const e=new Jp(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Qp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Xo(i),e.set(s,[o])):r>=a.length?(o=new Xo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
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
}`,nm=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],im=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],qo=new ut,Oi=new N,yr=new N;function sm(i,e,t){let n=new Na;const s=new He,r=new He,a=new mt,o=new fh,c=new ph,l={},h=t.maxTextureSize,u={[Nn]:It,[It]:Nn,[pt]:pt},f=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:em,fragmentShader:tm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Tt;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new k(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let d=this.type;this.render=function(A,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;A.type===uc&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=bs);const x=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(vn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=d!==this.type;B&&R.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(X=>X.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,X=A.length;q<X;q++){const H=A[q],V=H.shadow;if(V===void 0){De("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const J=V.getFrameExtents();if(s.multiply(J),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,V.mapSize.y=r.y)),V.map===null||B===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Vi){if(H.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ln(s.x,s.y,{format:Ei,type:yn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new qi(s.x,s.y,an),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=En,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wt,V.map.depthTexture.magFilter=wt}else{H.isPointLight?(V.map=new Gc(s.x),V.map.depthTexture=new uh(s.x,hn)):(V.map=new ln(s.x,s.y),V.map.depthTexture=new qi(s.x,s.y,hn)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=En;const ce=i.state.buffers.depth.getReversed();this.type===bs?(V.map.depthTexture.compareFunction=ce?Ia:La,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wt,V.map.depthTexture.magFilter=wt)}V.camera.updateProjectionMatrix()}const de=V.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<de;ce++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(V.map),i.clear());const fe=V.getViewport(ce);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),O.viewport(a)}if(H.isPointLight){const fe=V.camera,Ve=V.matrix,Be=H.distance||fe.far;Be!==fe.far&&(fe.far=Be,fe.updateProjectionMatrix()),Oi.setFromMatrixPosition(H.matrixWorld),fe.position.copy(Oi),yr.copy(fe.position),yr.add(nm[ce]),fe.up.copy(im[ce]),fe.lookAt(yr),fe.updateMatrixWorld(),Ve.makeTranslation(-Oi.x,-Oi.y,-Oi.z),qo.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(qo,fe.coordinateSystem,fe.reversedDepth)}else V.updateMatrices(H);n=V.getFrustum(),E(R,L,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===Vi&&y(V,L),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(x,S,P)};function y(A,R){const L=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ln(s.x,s.y,{format:Ei,type:yn})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,L,m,v,null)}function b(A,R,L,x){let S=null;const P=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=S.uuid,B=R.uuid;let q=l[O];q===void 0&&(q={},l[O]=q);let X=q[B];X===void 0&&(X=S.clone(),q[B]=X,R.addEventListener("dispose",w)),S=X}if(S.visible=R.visible,S.wireframe=R.wireframe,x===Vi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=i.properties.get(S);O.light=L}return S}function E(A,R,L,x,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Vi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=e.update(A),q=A.material;if(Array.isArray(q)){const X=B.groups;for(let H=0,V=X.length;H<V;H++){const J=X[H],de=q[J.materialIndex];if(de&&de.visible){const ce=b(A,de,x,S);A.onBeforeShadow(i,A,R,L,B,ce,J),i.renderBufferDirect(L,null,B,ce,A,J),A.onAfterShadow(i,A,R,L,B,ce,J)}}}else if(q.visible){const X=b(A,q,x,S);A.onBeforeShadow(i,A,R,L,B,X,null),i.renderBufferDirect(L,null,B,X,A,null),A.onAfterShadow(i,A,R,L,B,X,null)}}const O=A.children;for(let B=0,q=O.length;B<q;B++)E(O[B],R,L,x,S)}function w(A){A.target.removeEventListener("dispose",w);for(const L in l){const x=l[L],S=A.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const rm={[Pr]:Dr,[Lr]:Nr,[Ir]:Fr,[Si]:Ur,[Dr]:Pr,[Nr]:Lr,[Fr]:Ir,[Ur]:Si};function am(i,e){function t(){let D=!1;const ue=new mt;let ne=null;const pe=new mt(0,0,0,0);return{setMask:function(ee){ne!==ee&&!D&&(i.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){D=ee},setClear:function(ee,K,ie,Pe,rt){rt===!0&&(ee*=Pe,K*=Pe,ie*=Pe),ue.set(ee,K,ie,Pe),pe.equals(ue)===!1&&(i.clearColor(ee,K,ie,Pe),pe.copy(ue))},reset:function(){D=!1,ne=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,ne=null,pe=null,ee=null;return{setReversed:function(K){if(ue!==K){const ie=e.get("EXT_clip_control");K?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),ue=K;const Pe=ee;ee=null,this.setClear(Pe)}},getReversed:function(){return ue},setTest:function(K){K?Q(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(K){ne!==K&&!D&&(i.depthMask(K),ne=K)},setFunc:function(K){if(ue&&(K=rm[K]),pe!==K){switch(K){case Pr:i.depthFunc(i.NEVER);break;case Dr:i.depthFunc(i.ALWAYS);break;case Lr:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case Ir:i.depthFunc(i.EQUAL);break;case Ur:i.depthFunc(i.GEQUAL);break;case Nr:i.depthFunc(i.GREATER);break;case Fr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=K}},setLocked:function(K){D=K},setClear:function(K){ee!==K&&(ue&&(K=1-K),i.clearDepth(K),ee=K)},reset:function(){D=!1,ne=null,pe=null,ee=null,ue=!1}}}function s(){let D=!1,ue=null,ne=null,pe=null,ee=null,K=null,ie=null,Pe=null,rt=null;return{setTest:function(Je){D||(Je?Q(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!D&&(i.stencilMask(Je),ue=Je)},setFunc:function(Je,nn,dn){(ne!==Je||pe!==nn||ee!==dn)&&(i.stencilFunc(Je,nn,dn),ne=Je,pe=nn,ee=dn)},setOp:function(Je,nn,dn){(K!==Je||ie!==nn||Pe!==dn)&&(i.stencilOp(Je,nn,dn),K=Je,ie=nn,Pe=dn)},setLocked:function(Je){D=Je},setClear:function(Je){rt!==Je&&(i.clearStencil(Je),rt=Je)},reset:function(){D=!1,ue=null,ne=null,pe=null,ee=null,K=null,ie=null,Pe=null,rt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,m=[],_=null,v=!1,p=null,d=null,y=null,b=null,E=null,w=null,A=null,R=new Ne(0,0,0),L=0,x=!1,S=null,P=null,O=null,B=null,q=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=V>=1):J.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=V>=2);let de=null,ce={};const fe=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),Be=new mt().fromArray(fe),ht=new mt().fromArray(Ve);function ot(D,ue,ne,pe){const ee=new Uint8Array(4),K=i.createTexture();i.bindTexture(D,K),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<ne;ie++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(ue+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return K}const Y={};Y[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Si),Ge(!1),gt(Za),Q(i.CULL_FACE),je(vn);function Q(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function ge(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Le(D,ue){return u[D]!==ue?(i.bindFramebuffer(D,ue),u[D]=ue,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function ve(D,ue){let ne=m,pe=!1;if(D){ne=f.get(ue),ne===void 0&&(ne=[],f.set(ue,ne));const ee=D.textures;if(ne.length!==ee.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let K=0,ie=ee.length;K<ie;K++)ne[K]=i.COLOR_ATTACHMENT0+K;ne.length=ee.length,pe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ne)}function Ze(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const yt={[Zn]:i.FUNC_ADD,[al]:i.FUNC_SUBTRACT,[ol]:i.FUNC_REVERSE_SUBTRACT};yt[cl]=i.MIN,yt[ll]=i.MAX;const Xe={[hl]:i.ZERO,[ul]:i.ONE,[dl]:i.SRC_COLOR,[Rr]:i.SRC_ALPHA,[xl]:i.SRC_ALPHA_SATURATE,[gl]:i.DST_COLOR,[pl]:i.DST_ALPHA,[fl]:i.ONE_MINUS_SRC_COLOR,[Cr]:i.ONE_MINUS_SRC_ALPHA,[_l]:i.ONE_MINUS_DST_COLOR,[ml]:i.ONE_MINUS_DST_ALPHA,[vl]:i.CONSTANT_COLOR,[Ml]:i.ONE_MINUS_CONSTANT_COLOR,[Sl]:i.CONSTANT_ALPHA,[yl]:i.ONE_MINUS_CONSTANT_ALPHA};function je(D,ue,ne,pe,ee,K,ie,Pe,rt,Je){if(D===vn){v===!0&&(ge(i.BLEND),v=!1);return}if(v===!1&&(Q(i.BLEND),v=!0),D!==rl){if(D!==p||Je!==x){if((d!==Zn||E!==Zn)&&(i.blendEquation(i.FUNC_ADD),d=Zn,E=Zn),Je)switch(D){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",D);break}else switch(D){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ka:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $a:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",D);break}y=null,b=null,w=null,A=null,R.set(0,0,0),L=0,p=D,x=Je}return}ee=ee||ue,K=K||ne,ie=ie||pe,(ue!==d||ee!==E)&&(i.blendEquationSeparate(yt[ue],yt[ee]),d=ue,E=ee),(ne!==y||pe!==b||K!==w||ie!==A)&&(i.blendFuncSeparate(Xe[ne],Xe[pe],Xe[K],Xe[ie]),y=ne,b=pe,w=K,A=ie),(Pe.equals(R)===!1||rt!==L)&&(i.blendColor(Pe.r,Pe.g,Pe.b,rt),R.copy(Pe),L=rt),p=D,x=!1}function nt(D,ue){D.side===pt?ge(i.CULL_FACE):Q(i.CULL_FACE);let ne=D.side===It;ue&&(ne=!ne),Ge(ne),D.blending===vi&&D.transparent===!1?je(vn):je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_t(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function gt(D){D!==il?(Q(i.CULL_FACE),D!==P&&(D===Za?i.cullFace(i.BACK):D===sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),P=D}function C(D){D!==O&&(H&&i.lineWidth(D),O=D)}function _t(D,ue,ne){D?(Q(i.POLYGON_OFFSET_FILL),(B!==ue||q!==ne)&&(i.polygonOffset(ue,ne),B=ue,q=ne)):ge(i.POLYGON_OFFSET_FILL)}function $e(D){D?Q(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function st(D){D===void 0&&(D=i.TEXTURE0+X-1),de!==D&&(i.activeTexture(D),de=D)}function Se(D,ue,ne){ne===void 0&&(de===null?ne=i.TEXTURE0+X-1:ne=de);let pe=ce[ne];pe===void 0&&(pe={type:void 0,texture:void 0},ce[ne]=pe),(pe.type!==D||pe.texture!==ue)&&(de!==ne&&(i.activeTexture(ne),de=ne),i.bindTexture(D,ue||Y[D]),pe.type=D,pe.texture=ue)}function T(){const D=ce[de];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Z(){try{i.texSubImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function $(){try{i.texSubImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function se(){try{i.texStorage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Me(){try{i.texStorage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Ce(){try{i.texImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function te(){try{i.texImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function ae(D){Be.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function xe(D){ht.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ht.copy(D))}function ye(D,ue){let ne=l.get(ue);ne===void 0&&(ne=new WeakMap,l.set(ue,ne));let pe=ne.get(D);pe===void 0&&(pe=i.getUniformBlockIndex(ue,D.name),ne.set(D,pe))}function re(D,ue){const pe=l.get(ue).get(D);c.get(ue)!==pe&&(i.uniformBlockBinding(ue,pe,D.__bindingPointIndex),c.set(ue,pe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},de=null,ce={},u={},f=new WeakMap,m=[],_=null,v=!1,p=null,d=null,y=null,b=null,E=null,w=null,A=null,R=new Ne(0,0,0),L=0,x=!1,S=null,P=null,O=null,B=null,q=null,Be.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ge,bindFramebuffer:Le,drawBuffers:ve,useProgram:Ze,setBlending:je,setMaterial:nt,setFlipSided:Ge,setCullFace:gt,setLineWidth:C,setPolygonOffset:_t,setScissorTest:$e,activeTexture:st,bindTexture:Se,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Ce,texImage3D:te,updateUBOMapping:ye,uniformBlockBinding:re,texStorage2D:se,texStorage3D:Me,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:Ee,scissor:ae,viewport:xe,reset:ze}}function om(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):Ls("canvas")}function v(T,g,I){let Z=1;const $=Se(T);if(($.width>I||$.height>I)&&(Z=I/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(Z*$.width),Ee=Math.floor(Z*$.height);u===void 0&&(u=_(W,Ee));const se=g?_(W,Ee):u;return se.width=W,se.height=Ee,se.getContext("2d").drawImage(T,0,0,W,Ee),De("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+Ee+")."),se}else return"data"in T&&De("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,g,I,Z,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=g;if(g===i.RED&&(I===i.FLOAT&&(W=i.R32F),I===i.HALF_FLOAT&&(W=i.R16F),I===i.UNSIGNED_BYTE&&(W=i.R8)),g===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.R8UI),I===i.UNSIGNED_SHORT&&(W=i.R16UI),I===i.UNSIGNED_INT&&(W=i.R32UI),I===i.BYTE&&(W=i.R8I),I===i.SHORT&&(W=i.R16I),I===i.INT&&(W=i.R32I)),g===i.RG&&(I===i.FLOAT&&(W=i.RG32F),I===i.HALF_FLOAT&&(W=i.RG16F),I===i.UNSIGNED_BYTE&&(W=i.RG8)),g===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.RG8UI),I===i.UNSIGNED_SHORT&&(W=i.RG16UI),I===i.UNSIGNED_INT&&(W=i.RG32UI),I===i.BYTE&&(W=i.RG8I),I===i.SHORT&&(W=i.RG16I),I===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.RGB8UI),I===i.UNSIGNED_SHORT&&(W=i.RGB16UI),I===i.UNSIGNED_INT&&(W=i.RGB32UI),I===i.BYTE&&(W=i.RGB8I),I===i.SHORT&&(W=i.RGB16I),I===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),I===i.UNSIGNED_INT&&(W=i.RGBA32UI),I===i.BYTE&&(W=i.RGBA8I),I===i.SHORT&&(W=i.RGBA16I),I===i.INT&&(W=i.RGBA32I)),g===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),g===i.RGBA){const Ee=$?Ps:qe.getTransfer(Z);I===i.FLOAT&&(W=i.RGBA32F),I===i.HALF_FLOAT&&(W=i.RGBA16F),I===i.UNSIGNED_BYTE&&(W=Ee===et?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(T,g){let I;return T?g===null||g===hn||g===Wi?I=i.DEPTH24_STENCIL8:g===an?I=i.DEPTH32F_STENCIL8:g===Hi&&(I=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===hn||g===Wi?I=i.DEPTH_COMPONENT24:g===an?I=i.DEPTH_COMPONENT32F:g===Hi&&(I=i.DEPTH_COMPONENT16),I}function w(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==wt&&T.minFilter!==Pt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){const g=T.target;g.removeEventListener("dispose",A),L(g),g.isVideoTexture&&h.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),S(g)}function L(T){const g=n.get(T);if(g.__webglInit===void 0)return;const I=T.source,Z=f.get(I);if(Z){const $=Z[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(T),Object.keys(Z).length===0&&f.delete(I)}n.remove(T)}function x(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const I=T.source,Z=f.get(I);delete Z[g.__cacheKey],a.memory.textures--}function S(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let $=0;$<g.__webglFramebuffer[Z].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[Z][$]);else i.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[Z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=T.textures;for(let Z=0,$=I.length;Z<$;Z++){const W=n.get(I[Z]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(I[Z])}n.remove(T)}let P=0;function O(){P=0}function B(){const T=P;return T>=s.maxTextures&&De("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function q(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function X(T,g){const I=n.get(T);if(T.isVideoTexture&&$e(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const Z=T.image;if(Z===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(I,T,g);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+g)}function H(T,g){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Y(I,T,g);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+g)}function V(T,g){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Y(I,T,g);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+g)}function J(T,g){const I=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){Q(I,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+g)}const de={[Gr]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[zr]:i.MIRRORED_REPEAT},ce={[wt]:i.NEAREST,[Tl]:i.NEAREST_MIPMAP_NEAREST,[Qi]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[Xs]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},fe={[Rl]:i.NEVER,[Il]:i.ALWAYS,[Cl]:i.LESS,[La]:i.LEQUAL,[Pl]:i.EQUAL,[Ia]:i.GEQUAL,[Dl]:i.GREATER,[Ll]:i.NOTEQUAL};function Ve(T,g){if(g.type===an&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Pt||g.magFilter===Xs||g.magFilter===Qi||g.magFilter===Kn||g.minFilter===Pt||g.minFilter===Xs||g.minFilter===Qi||g.minFilter===Kn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,de[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,de[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,de[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===wt||g.minFilter!==Qi&&g.minFilter!==Kn||g.type===an&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Be(T,g){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));const Z=g.source;let $=f.get(Z);$===void 0&&($={},f.set(Z,$));const W=q(g);if(W!==T.__cacheKey){$[W]===void 0&&($[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),$[W].usedTimes++;const Ee=$[T.__cacheKey];Ee!==void 0&&($[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&x(g)),T.__cacheKey=W,T.__webglTexture=$[W].texture}return I}function ht(T,g,I){return Math.floor(Math.floor(T/I)/g)}function ot(T,g,I,Z){const W=T.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,I,Z,g.data);else{W.sort((te,ae)=>te.start-ae.start);let Ee=0;for(let te=1;te<W.length;te++){const ae=W[Ee],xe=W[te],ye=ae.start+ae.count,re=ht(xe.start,g.width,4),ze=ht(ae.start,g.width,4);xe.start<=ye+1&&re===ze&&ht(xe.start+xe.count-1,g.width,4)===re?ae.count=Math.max(ae.count,xe.start+xe.count-ae.start):(++Ee,W[Ee]=xe)}W.length=Ee+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let te=0,ae=W.length;te<ae;te++){const xe=W[te],ye=Math.floor(xe.start/4),re=Math.ceil(xe.count/4),ze=ye%g.width,D=Math.floor(ye/g.width),ue=re,ne=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,ze,D,ue,ne,I,Z,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function Y(T,g,I){let Z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=i.TEXTURE_3D);const $=Be(T,g),W=g.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+I);const Ee=n.get(W);if(W.version!==Ee.__version||$===!0){t.activeTexture(i.TEXTURE0+I);const se=qe.getPrimaries(qe.workingColorSpace),Me=g.colorSpace===Dn?null:qe.getPrimaries(g.colorSpace),Ce=g.colorSpace===Dn||se===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let te=v(g.image,!1,s.maxTextureSize);te=st(g,te);const ae=r.convert(g.format,g.colorSpace),xe=r.convert(g.type);let ye=b(g.internalFormat,ae,xe,g.colorSpace,g.isVideoTexture);Ve(Z,g);let re;const ze=g.mipmaps,D=g.isVideoTexture!==!0,ue=Ee.__version===void 0||$===!0,ne=W.dataReady,pe=w(g,te);if(g.isDepthTexture)ye=E(g.format===$n,g.type),ue&&(D?t.texStorage2D(i.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ye,te.width,te.height,0,ae,xe,null));else if(g.isDataTexture)if(ze.length>0){D&&ue&&t.texStorage2D(i.TEXTURE_2D,pe,ye,ze[0].width,ze[0].height);for(let ee=0,K=ze.length;ee<K;ee++)re=ze[ee],D?ne&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,re.width,re.height,ae,xe,re.data):t.texImage2D(i.TEXTURE_2D,ee,ye,re.width,re.height,0,ae,xe,re.data);g.generateMipmaps=!1}else D?(ue&&t.texStorage2D(i.TEXTURE_2D,pe,ye,te.width,te.height),ne&&ot(g,te,ae,xe)):t.texImage2D(i.TEXTURE_2D,0,ye,te.width,te.height,0,ae,xe,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ye,ze[0].width,ze[0].height,te.depth);for(let ee=0,K=ze.length;ee<K;ee++)if(re=ze[ee],g.format!==tn)if(ae!==null)if(D){if(ne)if(g.layerUpdates.size>0){const ie=Eo(re.width,re.height,g.format,g.type);for(const Pe of g.layerUpdates){const rt=re.data.subarray(Pe*ie/re.data.BYTES_PER_ELEMENT,(Pe+1)*ie/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Pe,re.width,re.height,1,ae,rt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,te.depth,ae,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,ye,re.width,re.height,te.depth,0,re.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,te.depth,ae,xe,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,ye,re.width,re.height,te.depth,0,ae,xe,re.data)}else{D&&ue&&t.texStorage2D(i.TEXTURE_2D,pe,ye,ze[0].width,ze[0].height);for(let ee=0,K=ze.length;ee<K;ee++)re=ze[ee],g.format!==tn?ae!==null?D?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,re.width,re.height,ae,re.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,ye,re.width,re.height,0,re.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ne&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,re.width,re.height,ae,xe,re.data):t.texImage2D(i.TEXTURE_2D,ee,ye,re.width,re.height,0,ae,xe,re.data)}else if(g.isDataArrayTexture)if(D){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ye,te.width,te.height,te.depth),ne)if(g.layerUpdates.size>0){const ee=Eo(te.width,te.height,g.format,g.type);for(const K of g.layerUpdates){const ie=te.data.subarray(K*ee/te.data.BYTES_PER_ELEMENT,(K+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ae,xe,ie)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ae,xe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,ae,xe,te.data);else if(g.isData3DTexture)D?(ue&&t.texStorage3D(i.TEXTURE_3D,pe,ye,te.width,te.height,te.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ae,xe,te.data)):t.texImage3D(i.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,ae,xe,te.data);else if(g.isFramebufferTexture){if(ue)if(D)t.texStorage2D(i.TEXTURE_2D,pe,ye,te.width,te.height);else{let ee=te.width,K=te.height;for(let ie=0;ie<pe;ie++)t.texImage2D(i.TEXTURE_2D,ie,ye,ee,K,0,ae,xe,null),ee>>=1,K>>=1}}else if(ze.length>0){if(D&&ue){const ee=Se(ze[0]);t.texStorage2D(i.TEXTURE_2D,pe,ye,ee.width,ee.height)}for(let ee=0,K=ze.length;ee<K;ee++)re=ze[ee],D?ne&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ae,xe,re):t.texImage2D(i.TEXTURE_2D,ee,ye,ae,xe,re);g.generateMipmaps=!1}else if(D){if(ue){const ee=Se(te);t.texStorage2D(i.TEXTURE_2D,pe,ye,ee.width,ee.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,xe,te)}else t.texImage2D(i.TEXTURE_2D,0,ye,ae,xe,te);p(g)&&d(Z),Ee.__version=W.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Q(T,g,I){if(g.image.length!==6)return;const Z=Be(T,g),$=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+I);const W=n.get($);if($.version!==W.__version||Z===!0){t.activeTexture(i.TEXTURE0+I);const Ee=qe.getPrimaries(qe.workingColorSpace),se=g.colorSpace===Dn?null:qe.getPrimaries(g.colorSpace),Me=g.colorSpace===Dn||Ee===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,te=g.image[0]&&g.image[0].isDataTexture,ae=[];for(let K=0;K<6;K++)!Ce&&!te?ae[K]=v(g.image[K],!0,s.maxCubemapSize):ae[K]=te?g.image[K].image:g.image[K],ae[K]=st(g,ae[K]);const xe=ae[0],ye=r.convert(g.format,g.colorSpace),re=r.convert(g.type),ze=b(g.internalFormat,ye,re,g.colorSpace),D=g.isVideoTexture!==!0,ue=W.__version===void 0||Z===!0,ne=$.dataReady;let pe=w(g,xe);Ve(i.TEXTURE_CUBE_MAP,g);let ee;if(Ce){D&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ze,xe.width,xe.height);for(let K=0;K<6;K++){ee=ae[K].mipmaps;for(let ie=0;ie<ee.length;ie++){const Pe=ee[ie];g.format!==tn?ye!==null?D?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Pe.width,Pe.height,ye,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,ze,Pe.width,Pe.height,0,Pe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Pe.width,Pe.height,ye,re,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,ze,Pe.width,Pe.height,0,ye,re,Pe.data)}}}else{if(ee=g.mipmaps,D&&ue){ee.length>0&&pe++;const K=Se(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ze,K.width,K.height)}for(let K=0;K<6;K++)if(te){D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ae[K].width,ae[K].height,ye,re,ae[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,ae[K].width,ae[K].height,0,ye,re,ae[K].data);for(let ie=0;ie<ee.length;ie++){const rt=ee[ie].image[K].image;D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,rt.width,rt.height,ye,re,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,ze,rt.width,rt.height,0,ye,re,rt.data)}}else{D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,re,ae[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,ye,re,ae[K]);for(let ie=0;ie<ee.length;ie++){const Pe=ee[ie];D?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ye,re,Pe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,ze,ye,re,Pe.image[K])}}}p(g)&&d(i.TEXTURE_CUBE_MAP),W.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ge(T,g,I,Z,$,W){const Ee=r.convert(I.format,I.colorSpace),se=r.convert(I.type),Me=b(I.internalFormat,Ee,se,I.colorSpace),Ce=n.get(g),te=n.get(I);if(te.__renderTarget=g,!Ce.__hasExternalTextures){const ae=Math.max(1,g.width>>W),xe=Math.max(1,g.height>>W);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,W,Me,ae,xe,g.depth,0,Ee,se,null):t.texImage2D($,W,Me,ae,xe,0,Ee,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,$,te.__webglTexture,0,C(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,$,te.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,g,I){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const Z=g.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,W=E(g.stencilBuffer,$),Ee=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),W,g.width,g.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),W,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,W,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,T)}else{const Z=g.textures;for(let $=0;$<Z.length;$++){const W=Z[$],Ee=r.convert(W.format,W.colorSpace),se=r.convert(W.type),Me=b(W.internalFormat,Ee,se,W.colorSpace);_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),Me,g.width,g.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),Me,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Me,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(T,g,I){const Z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(g.depthTexture);if($.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if($.__webglInit===void 0&&($.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g.depthTexture);const Ce=r.convert(g.depthTexture.format),te=r.convert(g.depthTexture.type);let ae;g.depthTexture.format===En?ae=i.DEPTH_COMPONENT24:g.depthTexture.format===$n&&(ae=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ae,g.width,g.height,0,Ce,te,null)}}else X(g.depthTexture,0);const W=$.__webglTexture,Ee=C(g),se=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,Me=g.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===En)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,se,W,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,Me,se,W,0);else if(g.depthTexture.format===$n)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,se,W,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,Me,se,W,0);else throw new Error("Unknown depthTexture format")}function Ze(T){const g=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=Z}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let Z=0;Z<6;Z++)ve(g.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?ve(g.__webglFramebuffer[0],T,0):ve(g.__webglFramebuffer,T,0)}else if(I){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=i.createRenderbuffer(),Le(g.__webglDepthbuffer[Z],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,W)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Le(g.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(T,g,I){const Z=n.get(T);g!==void 0&&ge(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ze(T)}function Xe(T){const g=T.texture,I=n.get(T),Z=n.get(g);T.addEventListener("dispose",R);const $=T.textures,W=T.isWebGLCubeRenderTarget===!0,Ee=$.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=g.version,a.memory.textures++),W){I.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[se]=[];for(let Me=0;Me<g.mipmaps.length;Me++)I.__webglFramebuffer[se][Me]=i.createFramebuffer()}else I.__webglFramebuffer[se]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)I.__webglFramebuffer[se]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let se=0,Me=$.length;se<Me;se++){const Ce=n.get($[se]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&_t(T)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const Me=$[se];I.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[se]);const Ce=r.convert(Me.format,Me.colorSpace),te=r.convert(Me.type),ae=b(Me.internalFormat,Ce,te,Me.colorSpace,T.isXRRenderTarget===!0),xe=C(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ae,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,I.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)ge(I.__webglFramebuffer[se][Me],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me);else ge(I.__webglFramebuffer[se],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let se=0,Me=$.length;se<Me;se++){const Ce=$[se],te=n.get(Ce);let ae=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,te.__webglTexture),Ve(ae,Ce),ge(I.__webglFramebuffer,T,Ce,i.COLOR_ATTACHMENT0+se,ae,0),p(Ce)&&d(ae)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),Ve(se,g),g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)ge(I.__webglFramebuffer[Me],T,g,i.COLOR_ATTACHMENT0,se,Me);else ge(I.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,se,0);p(g)&&d(se),t.unbindTexture()}T.depthBuffer&&Ze(T)}function je(T){const g=T.textures;for(let I=0,Z=g.length;I<Z;I++){const $=g[I];if(p($)){const W=y(T),Ee=n.get($).__webglTexture;t.bindTexture(W,Ee),d(W),t.unbindTexture()}}}const nt=[],Ge=[];function gt(T){if(T.samples>0){if(_t(T)===!1){const g=T.textures,I=T.width,Z=T.height;let $=i.COLOR_BUFFER_BIT;const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(T),se=g.length>1;if(se)for(let Ce=0;Ce<g.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Me=T.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const te=n.get(g[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,I,Z,0,0,I,Z,$,i.NEAREST),c===!0&&(nt.length=0,Ge.length=0,nt.push(i.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(nt.push(W),Ge.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ce=0;Ce<g.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const te=n.get(g[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function C(T){return Math.min(s.maxSamples,T.samples)}function _t(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function $e(T){const g=a.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function st(T,g){const I=T.colorSpace,Z=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==bi&&I!==Dn&&(qe.getTransfer(I)===et?(Z!==tn||$!==Xt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",I)),g}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=J,this.rebindTextures=yt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cm(i,e){function t(n,s=Dn){let r;const a=qe.getTransfer(s);if(n===Xt)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mc)return i.BYTE;if(n===Sc)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===wa)return i.INT;if(n===hn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===bc)return i.ALPHA;if(n===Tc)return i.RGB;if(n===tn)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Ei)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===Ts||n===ws||n===As||n===Rs)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vr||n===kr||n===Hr||n===Wr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===qr||n===Zr||n===Yr||n===Kr||n===$r||n===jr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xr||n===qr)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yr)return r.COMPRESSED_R11_EAC;if(n===Kr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===jr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===ca||n===la||n===ha||n===ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qr)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ca)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===fa||n===pa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ma||n===ga||n===_a||n===xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hm=`
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

}`;class um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $t({vertexShader:lm,fragmentShader:hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new k(new Bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dm extends wi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,_=null;const v=typeof XRWebGLBinding<"u",p=new um,d={},y=t.getContextAttributes();let b=null,E=null;const w=[],A=[],R=new He;let L=null;const x=new Kt;x.viewport=new mt;const S=new Kt;S.viewport=new mt;const P=[x,S],O=new Mh;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=w[Y];return Q===void 0&&(Q=new pr,w[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=w[Y];return Q===void 0&&(Q=new pr,w[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=w[Y];return Q===void 0&&(Q=new pr,w[Y]=Q),Q.getHandSpace()};function X(Y){const Q=A.indexOf(Y.inputSource);if(Q===-1)return;const ge=w[Q];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,l||a),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",V);for(let Y=0;Y<w.length;Y++){const Q=A[Y];Q!==null&&(A[Y]=null,w[Y].disconnect(Q))}B=null,q=null,p.reset();for(const Y in d)delete d[Y];e.setRenderTarget(b),m=null,f=null,u=null,s=null,E=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",H),s.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Le=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=y.stencil?$n:En,Le=y.stencil?Wi:hn);const Ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ln(f.textureWidth,f.textureHeight,{format:tn,type:Xt,depthTexture:new qi(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new ln(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(Y){for(let Q=0;Q<Y.removed.length;Q++){const ge=Y.removed[Q],Le=A.indexOf(ge);Le>=0&&(A[Le]=null,w[Le].disconnect(ge))}for(let Q=0;Q<Y.added.length;Q++){const ge=Y.added[Q];let Le=A.indexOf(ge);if(Le===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=A.length){A.push(ge),Le=Ze;break}else if(A[Ze]===null){A[Ze]=ge,Le=Ze;break}if(Le===-1)break}const ve=w[Le];ve&&ve.connect(ge)}}const J=new N,de=new N;function ce(Y,Q,ge){J.setFromMatrixPosition(Q.matrixWorld),de.setFromMatrixPosition(ge.matrixWorld);const Le=J.distanceTo(de),ve=Q.projectionMatrix.elements,Ze=ge.projectionMatrix.elements,yt=ve[14]/(ve[10]-1),Xe=ve[14]/(ve[10]+1),je=(ve[9]+1)/ve[5],nt=(ve[9]-1)/ve[5],Ge=(ve[8]-1)/ve[0],gt=(Ze[8]+1)/Ze[0],C=yt*Ge,_t=yt*gt,$e=Le/(-Ge+gt),st=$e*-Ge;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(st),Y.translateZ($e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Se=yt+$e,T=Xe+$e,g=C-st,I=_t+(Le-st),Z=je*Xe/T*Se,$=nt*Xe/T*Se;Y.projectionMatrix.makePerspective(g,I,Z,$,Se,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function fe(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,ge=Y.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),O.near=S.near=x.near=Q,O.far=S.far=x.far=ge,(B!==O.near||q!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,q=O.far),O.layers.mask=Y.layers.mask|6,x.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Le=Y.parent,ve=O.cameras;fe(O,Le);for(let Ze=0;Ze<ve.length;Ze++)fe(ve[Ze],Le);ve.length===2?ce(O,x,S):O.projectionMatrix.copy(x.projectionMatrix),Ve(Y,O,Le)};function Ve(Y,Q,ge){ge===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=va*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return d[Y]};let Be=null;function ht(Y,Q){if(h=Q.getViewerPose(l||a),_=Q,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Le=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let Xe=0;Xe<ge.length;Xe++){const je=ge[Xe];let nt=null;if(m!==null)nt=m.getViewport(je);else{const gt=u.getViewSubImage(f,je);nt=gt.viewport,Xe===0&&(e.setRenderTargetTextures(E,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(E))}let Ge=P[Xe];Ge===void 0&&(Ge=new Kt,Ge.layers.enable(Xe),Ge.viewport=new mt,P[Xe]=Ge),Ge.matrix.fromArray(je.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(je.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(nt.x,nt.y,nt.width,nt.height),Xe===0&&(O.matrix.copy(Ge.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(Ge)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Xe=u.getDepthInformation(ge[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<ge.length;Xe++){const je=ge[Xe].camera;if(je){let nt=d[je];nt||(nt=new Vc,d[je]=nt);const Ge=u.getCameraImage(je);nt.sourceTexture=Ge}}}}for(let ge=0;ge<w.length;ge++){const Le=A[ge],ve=w[ge];Le!==null&&ve!==void 0&&ve.update(Le,Q,l||a)}Be&&Be(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const ot=new kc;ot.setAnimationLoop(ht),this.setAnimationLoop=function(Y){Be=Y},this.dispose=function(){}}}const Wn=new un,fm=new ut;function pm(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Fc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,y,b):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===It&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===It&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d),b=y.envMap,E=y.envMapRotation;b&&(p.envMap.value=b,Wn.copy(E),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),p.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Wn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,y,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===It&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const E=b.program;n.uniformBlockBinding(y,E)}function l(y,b){let E=s[y.id];E===void 0&&(_(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",p));const w=b.program;n.updateUBOMapping(y,w);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){const b=u();y.__bindingPointIndex=b;const E=i.createBuffer(),w=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=s[y.id],E=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,R=E.length;A<R;A++){const L=Array.isArray(E[A])?E[A]:[E[A]];for(let x=0,S=L.length;x<S;x++){const P=L[x];if(m(P,A,x,w)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let X=0;X<B.length;X++){const H=B[X],V=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+q,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,b,E,w){const A=y.value,R=b+"_"+E;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const L=w[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return w[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(y){const b=y.uniforms;let E=0;const w=16;for(let R=0,L=b.length;R<L;R++){const x=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,P=x.length;S<P;S++){const O=x[S],B=Array.isArray(O.value)?O.value:[O.value];for(let q=0,X=B.length;q<X;q++){const H=B[q],V=v(H),J=E%w,de=J%V.boundary,ce=J+de;E+=de,ce!==0&&w-ce<V.storage&&(E+=w-ce),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=V.storage}}}const A=E%w;return A>0&&(E+=w-A),y.__size=E,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){const b=y.target;b.removeEventListener("dispose",p);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}const gm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sn=null;function _m(){return sn===null&&(sn=new oh(gm,16,16,Ei,yn),sn.name="DFG_LUT",sn.minFilter=Pt,sn.magFilter=Pt,sn.wrapS=xn,sn.wrapT=xn,sn.generateMipmaps=!1,sn.needsUpdate=!0),sn}class xm{constructor(e={}){const{canvas:t=Ul(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Xt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const v=m,p=new Set([Da,Pa,Ca]),d=new Set([Xt,hn,Hi,Wi,Aa,Ra]),y=new Uint32Array(4),b=new Int32Array(4);let E=null,w=null;const A=[],R=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=Yt;let P=0,O=0,B=null,q=-1,X=null;const H=new mt,V=new mt;let J=null;const de=new Ne(0);let ce=0,fe=t.width,Ve=t.height,Be=1,ht=null,ot=null;const Y=new mt(0,0,fe,Ve),Q=new mt(0,0,fe,Ve);let ge=!1;const Le=new Na;let ve=!1,Ze=!1;const yt=new ut,Xe=new N,je=new mt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function gt(){return B===null?Be:1}let C=n;function _t(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Je,!1),C===null){const U="webgl2";if(C=_t(U,M),C===null)throw _t(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ke("WebGLRenderer: "+M.message),M}let $e,st,Se,T,g,I,Z,$,W,Ee,se,Me,Ce,te,ae,xe,ye,re,ze,D,ue,ne,pe,ee;function K(){$e=new _f(C),$e.init(),ne=new cm(C,$e),st=new cf(C,$e,e,ne),Se=new am(C,$e),st.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),T=new Mf(C),g=new Xp,I=new om(C,$e,Se,g,st,ne,T),Z=new hf(x),$=new gf(x),W=new Eh(C),pe=new af(C,W),Ee=new xf(C,W,T,pe),se=new yf(C,Ee,W,T),ze=new Sf(C,st,I),xe=new lf(g),Me=new Wp(x,Z,$,$e,st,pe,xe),Ce=new pm(x,g),te=new Zp,ae=new Qp($e),re=new rf(x,Z,$,Se,se,_,c),ye=new sm(x,se,st),ee=new mm(C,T,st,Se),D=new of(C,$e,T),ue=new vf(C,$e,T),T.programs=Me.programs,x.capabilities=st,x.extensions=$e,x.properties=g,x.renderLists=te,x.shadowMap=ye,x.state=Se,x.info=T}K(),v!==Xt&&(L=new bf(v,t.width,t.height,s,r));const ie=new dm(x,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(M){M!==void 0&&(Be=M,this.setSize(fe,Ve,!1))},this.getSize=function(M){return M.set(fe,Ve)},this.setSize=function(M,U,z=!0){if(ie.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=M,Ve=U,t.width=Math.floor(M*Be),t.height=Math.floor(U*Be),z===!0&&(t.style.width=M+"px",t.style.height=U+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(fe*Be,Ve*Be).floor()},this.setDrawingBufferSize=function(M,U,z){fe=M,Ve=U,Be=z,t.width=Math.floor(M*z),t.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(v===Xt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(H)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,U,z,G){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,U,z,G),Se.viewport(H.copy(Y).multiplyScalar(Be).round())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,U,z,G){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,U,z,G),Se.scissor(V.copy(Q).multiplyScalar(Be).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(M){Se.setScissorTest(ge=M)},this.setOpaqueSort=function(M){ht=M},this.setTransparentSort=function(M){ot=M},this.getClearColor=function(M){return M.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,z=!0){let G=0;if(M){let F=!1;if(B!==null){const oe=B.texture.format;F=p.has(oe)}if(F){const oe=B.texture.type,me=d.has(oe),he=re.getClearColor(),_e=re.getClearAlpha(),be=he.r,Ae=he.g,Te=he.b;me?(y[0]=be,y[1]=Ae,y[2]=Te,y[3]=_e,C.clearBufferuiv(C.COLOR,0,y)):(b[0]=be,b[1]=Ae,b[2]=Te,b[3]=_e,C.clearBufferiv(C.COLOR,0,b))}else G|=C.COLOR_BUFFER_BIT}U&&(G|=C.DEPTH_BUFFER_BIT),z&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),re.dispose(),te.dispose(),ae.dispose(),g.dispose(),Z.dispose(),$.dispose(),se.dispose(),pe.dispose(),ee.dispose(),Me.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",za),ie.removeEventListener("sessionend",Va),On.stop()};function Pe(M){M.preventDefault(),to("WebGLRenderer: Context Lost."),S=!0}function rt(){to("WebGLRenderer: Context Restored."),S=!1;const M=T.autoReset,U=ye.enabled,z=ye.autoUpdate,G=ye.needsUpdate,F=ye.type;K(),T.autoReset=M,ye.enabled=U,ye.autoUpdate=z,ye.needsUpdate=G,ye.type=F}function Je(M){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nn(M){const U=M.target;U.removeEventListener("dispose",nn),dn(U)}function dn(M){Kc(M),g.remove(M)}function Kc(M){const U=g.get(M).programs;U!==void 0&&(U.forEach(function(z){Me.releaseProgram(z)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,G,F,oe){U===null&&(U=nt);const me=F.isMesh&&F.matrixWorld.determinant()<0,he=jc(M,U,z,G,F);Se.setMaterial(G,me);let _e=z.index,be=1;if(G.wireframe===!0){if(_e=Ee.getWireframeAttribute(z),_e===void 0)return;be=2}const Ae=z.drawRange,Te=z.attributes.position;let ke=Ae.start*be,tt=(Ae.start+Ae.count)*be;oe!==null&&(ke=Math.max(ke,oe.start*be),tt=Math.min(tt,(oe.start+oe.count)*be)),_e!==null?(ke=Math.max(ke,0),tt=Math.min(tt,_e.count)):Te!=null&&(ke=Math.max(ke,0),tt=Math.min(tt,Te.count));const dt=tt-ke;if(dt<0||dt===1/0)return;pe.setup(F,G,he,z,_e);let ft,it=D;if(_e!==null&&(ft=W.get(_e),it=ue,it.setIndex(ft)),F.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*gt()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(F.isLine){let we=G.linewidth;we===void 0&&(we=1),Se.setLineWidth(we*gt()),F.isLineSegments?it.setMode(C.LINES):F.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else F.isPoints?it.setMode(C.POINTS):F.isSprite&&it.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Xi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,Qe=F._multiDrawCounts,Ye=F._multiDrawCount,zt=_e?W.get(_e).bytesPerElement:1,ei=g.get(G).currentProgram.getUniforms();for(let Vt=0;Vt<Ye;Vt++)ei.setValue(C,"_gl_DrawID",Vt),it.render(we[Vt]/zt,Qe[Vt])}else if(F.isInstancedMesh)it.renderInstances(ke,dt,F.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Qe=Math.min(z.instanceCount,we);it.renderInstances(ke,dt,Qe)}else it.render(ke,dt)};function Ga(M,U,z){M.transparent===!0&&M.side===pt&&M.forceSinglePass===!1?(M.side=It,M.needsUpdate=!0,Ji(M,U,z),M.side=Nn,M.needsUpdate=!0,Ji(M,U,z),M.side=pt):Ji(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),w=ae.get(z),w.init(U),R.push(w),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),M!==z&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights();const G=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const he=oe[me];Ga(he,z,F),G.add(he)}else Ga(oe,z,F),G.add(oe)}),w=R.pop(),G},this.compileAsync=function(M,U,z=null){const G=this.compile(M,U,z);return new Promise(F=>{function oe(){if(G.forEach(function(me){g.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){F(M);return}setTimeout(oe,10)}$e.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ks=null;function $c(M){ks&&ks(M)}function za(){On.stop()}function Va(){On.start()}const On=new kc;On.setAnimationLoop($c),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(M){ks=M,ie.setAnimationLoop(M),M===null?On.stop():On.start()},ie.addEventListener("sessionstart",za),ie.addEventListener("sessionend",Va),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const z=ie.enabled===!0&&ie.isPresenting===!0,G=L!==null&&(B===null||z)&&L.begin(x,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,B),w=ae.get(M,R.length),w.init(U),R.push(w),yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Le.setFromProjectionMatrix(yt,on,U.reversedDepth),Ze=this.localClippingEnabled,ve=xe.init(this.clippingPlanes,Ze),E=te.get(M,A.length),E.init(),A.push(E),ie.enabled===!0&&ie.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&Hs(me,U,-1/0,x.sortObjects)}Hs(M,U,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(ht,ot),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&re.addToRenderList(E,M),this.info.render.frame++,ve===!0&&xe.beginShadows();const F=w.state.shadowsArray;if(ye.render(F,M,U),ve===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&L.hasRenderPass())===!1){const me=E.opaque,he=E.transmissive;if(w.setupLights(),U.isArrayCamera){const _e=U.cameras;if(he.length>0)for(let be=0,Ae=_e.length;be<Ae;be++){const Te=_e[be];Ha(me,he,M,Te)}Ge&&re.render(M);for(let be=0,Ae=_e.length;be<Ae;be++){const Te=_e[be];ka(E,M,Te,Te.viewport)}}else he.length>0&&Ha(me,he,M,U),Ge&&re.render(M),ka(E,M,U)}B!==null&&O===0&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),G&&L.end(x),M.isScene===!0&&M.onAfterRender(x,M,U),pe.resetDefaultState(),q=-1,X=null,R.pop(),R.length>0?(w=R[R.length-1],ve===!0&&xe.setGlobalState(x.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function Hs(M,U,z,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Le.intersectsSprite(M)){G&&je.setFromMatrixPosition(M.matrixWorld).applyMatrix4(yt);const me=se.update(M),he=M.material;he.visible&&E.push(M,me,he,z,je.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Le.intersectsObject(M))){const me=se.update(M),he=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),je.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),je.copy(me.boundingSphere.center)),je.applyMatrix4(M.matrixWorld).applyMatrix4(yt)),Array.isArray(he)){const _e=me.groups;for(let be=0,Ae=_e.length;be<Ae;be++){const Te=_e[be],ke=he[Te.materialIndex];ke&&ke.visible&&E.push(M,me,ke,z,je.z,Te)}}else he.visible&&E.push(M,me,he,z,je.z,null)}}const oe=M.children;for(let me=0,he=oe.length;me<he;me++)Hs(oe[me],U,z,G)}function ka(M,U,z,G){const{opaque:F,transmissive:oe,transparent:me}=M;w.setupLightsView(z),ve===!0&&xe.setGlobalState(x.clippingPlanes,z),G&&Se.viewport(H.copy(G)),F.length>0&&ji(F,U,z),oe.length>0&&ji(oe,U,z),me.length>0&&ji(me,U,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ha(M,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const ke=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new ln(1,1,{generateMipmaps:!0,type:ke?yn:Xt,minFilter:Kn,samples:st.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const oe=w.state.transmissionRenderTarget[G.id],me=G.viewport||H;oe.setSize(me.z*x.transmissionResolutionScale,me.w*x.transmissionResolutionScale);const he=x.getRenderTarget(),_e=x.getActiveCubeFace(),be=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(de),ce=x.getClearAlpha(),ce<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&re.render(z);const Ae=x.toneMapping;x.toneMapping=cn;const Te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),ve===!0&&xe.setGlobalState(x.clippingPlanes,G),ji(M,z,G),I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let tt=0,dt=U.length;tt<dt;tt++){const ft=U[tt],{object:it,geometry:we,material:Qe,group:Ye}=ft;if(Qe.side===pt&&it.layers.test(G.layers)){const zt=Qe.side;Qe.side=It,Qe.needsUpdate=!0,Wa(it,z,G,we,Qe,Ye),Qe.side=zt,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe))}x.setRenderTarget(he,_e,be),x.setClearColor(de,ce),Te!==void 0&&(G.viewport=Te),x.toneMapping=Ae}function ji(M,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,oe=M.length;F<oe;F++){const me=M[F],{object:he,geometry:_e,group:be}=me;let Ae=me.material;Ae.allowOverride===!0&&G!==null&&(Ae=G),he.layers.test(z.layers)&&Wa(he,U,z,_e,Ae,be)}}function Wa(M,U,z,G,F,oe){M.onBeforeRender(x,U,z,G,F,oe),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,U,z,G,M,oe),F.transparent===!0&&F.side===pt&&F.forceSinglePass===!1?(F.side=It,F.needsUpdate=!0,x.renderBufferDirect(z,U,G,F,M,oe),F.side=Nn,F.needsUpdate=!0,x.renderBufferDirect(z,U,G,F,M,oe),F.side=pt):x.renderBufferDirect(z,U,G,F,M,oe),M.onAfterRender(x,U,z,G,F,oe)}function Ji(M,U,z){U.isScene!==!0&&(U=nt);const G=g.get(M),F=w.state.lights,oe=w.state.shadowsArray,me=F.state.version,he=Me.getParameters(M,F.state,oe,U,z),_e=Me.getProgramCacheKey(he);let be=G.programs;G.environment=M.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(M.isMeshStandardMaterial?$:Z).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,be===void 0&&(M.addEventListener("dispose",nn),be=new Map,G.programs=be);let Ae=be.get(_e);if(Ae!==void 0){if(G.currentProgram===Ae&&G.lightsStateVersion===me)return qa(M,he),Ae}else he.uniforms=Me.getUniforms(M),M.onBeforeCompile(he,x),Ae=Me.acquireProgram(he,_e),be.set(_e,Ae),G.uniforms=he.uniforms;const Te=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=xe.uniform),qa(M,he),G.needsLights=Qc(M),G.lightsStateVersion=me,G.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ae,G.uniformsList=null,Ae}function Xa(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Cs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function qa(M,U){const z=g.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function jc(M,U,z,G,F){U.isScene!==!0&&(U=nt),I.resetTextureUnits();const oe=U.fog,me=G.isMeshStandardMaterial?U.environment:null,he=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:bi,_e=(G.isMeshStandardMaterial?$:Z).get(G.envMap||me),be=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ae=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!z.morphAttributes.position,ke=!!z.morphAttributes.normal,tt=!!z.morphAttributes.color;let dt=cn;G.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(dt=x.toneMapping);const ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=ft!==void 0?ft.length:0,we=g.get(G),Qe=w.state.lights;if(ve===!0&&(Ze===!0||M!==X)){const Dt=M===X&&G.id===q;xe.setState(G,M,Dt)}let Ye=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Qe.state.version||we.outputColorSpace!==he||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==_e||G.fog===!0&&we.fog!==oe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==xe.numPlanes||we.numIntersection!==xe.numIntersection)||we.vertexAlphas!==be||we.vertexTangents!==Ae||we.morphTargets!==Te||we.morphNormals!==ke||we.morphColors!==tt||we.toneMapping!==dt||we.morphTargetsCount!==it)&&(Ye=!0):(Ye=!0,we.__version=G.version);let zt=we.currentProgram;Ye===!0&&(zt=Ji(G,U,F));let ei=!1,Vt=!1,Pi=!1;const at=zt.getUniforms(),Nt=we.uniforms;if(Se.useProgram(zt.program)&&(ei=!0,Vt=!0,Pi=!0),G.id!==q&&(q=G.id,Vt=!0),ei||X!==M){Se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),at.setValue(C,"projectionMatrix",M.projectionMatrix),at.setValue(C,"viewMatrix",M.matrixWorldInverse);const Ft=at.map.cameraPosition;Ft!==void 0&&Ft.setValue(C,Xe.setFromMatrixPosition(M.matrixWorld)),st.logarithmicDepthBuffer&&at.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,Vt=!0,Pi=!0)}if(we.needsLights&&(Qe.state.directionalShadowMap.length>0&&at.setValue(C,"directionalShadowMap",Qe.state.directionalShadowMap,I),Qe.state.spotShadowMap.length>0&&at.setValue(C,"spotShadowMap",Qe.state.spotShadowMap,I),Qe.state.pointShadowMap.length>0&&at.setValue(C,"pointShadowMap",Qe.state.pointShadowMap,I)),F.isSkinnedMesh){at.setOptional(C,F,"bindMatrix"),at.setOptional(C,F,"bindMatrixInverse");const Dt=F.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),at.setValue(C,"boneTexture",Dt.boneTexture,I))}F.isBatchedMesh&&(at.setOptional(C,F,"batchingTexture"),at.setValue(C,"batchingTexture",F._matricesTexture,I),at.setOptional(C,F,"batchingIdTexture"),at.setValue(C,"batchingIdTexture",F._indirectTexture,I),at.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&at.setValue(C,"batchingColorTexture",F._colorsTexture,I));const qt=z.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ze.update(F,z,zt),(Vt||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,at.setValue(C,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Nt.envMap.value=_e,Nt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Nt.envMapIntensity.value=U.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=_m()),Vt&&(at.setValue(C,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&Jc(Nt,Pi),oe&&G.fog===!0&&Ce.refreshFogUniforms(Nt,oe),Ce.refreshMaterialUniforms(Nt,G,Be,Ve,w.state.transmissionRenderTarget[M.id]),Cs.upload(C,Xa(we),Nt,I)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Cs.upload(C,Xa(we),Nt,I),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(C,"center",F.center),at.setValue(C,"modelViewMatrix",F.modelViewMatrix),at.setValue(C,"normalMatrix",F.normalMatrix),at.setValue(C,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Dt=G.uniformsGroups;for(let Ft=0,Ws=Dt.length;Ft<Ws;Ft++){const Bn=Dt[Ft];ee.update(Bn,zt),ee.bind(Bn,zt)}}return zt}function Jc(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Qc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,U,z){const G=g.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),g.get(M.texture).__webglTexture=U,g.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const z=g.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const el=C.createFramebuffer();this.setRenderTarget=function(M,U=0,z=0){B=M,P=U,O=z;let G=null,F=!1,oe=!1;if(M){const he=g.get(M);if(he.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(C.FRAMEBUFFER,he.__webglFramebuffer),H.copy(M.viewport),V.copy(M.scissor),J=M.scissorTest,Se.viewport(H),Se.scissor(V),Se.setScissorTest(J),q=-1;return}else if(he.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(he.__hasExternalTextures)I.rebindTextures(M,g.get(M.texture).__webglTexture,g.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ae=M.depthTexture;if(he.__boundDepthTexture!==Ae){if(Ae!==null&&g.has(Ae)&&(M.width!==Ae.image.width||M.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const _e=M.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);const be=g.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(be[U])?G=be[U][z]:G=be[U],F=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?G=g.get(M).__webglMultisampledFramebuffer:Array.isArray(be)?G=be[z]:G=be,H.copy(M.viewport),V.copy(M.scissor),J=M.scissorTest}else H.copy(Y).multiplyScalar(Be).floor(),V.copy(Q).multiplyScalar(Be).floor(),J=ge;if(z!==0&&(G=el),Se.bindFramebuffer(C.FRAMEBUFFER,G)&&Se.drawBuffers(M,G),Se.viewport(H),Se.scissor(V),Se.setScissorTest(J),F){const he=g.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,z)}else if(oe){const he=U;for(let _e=0;_e<M.textures.length;_e++){const be=g.get(M.textures[_e]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+_e,be.__webglTexture,z,he)}}else if(M!==null&&z!==0){const he=g.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,he.__webglTexture,z)}q=-1},this.readRenderTargetPixels=function(M,U,z,G,F,oe,me,he=0){if(!(M&&M.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){Se.bindFramebuffer(C.FRAMEBUFFER,_e);try{const be=M.textures[he],Ae=be.format,Te=be.type;if(!st.textureFormatReadable(Ae)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Te)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&z>=0&&z<=M.height-F&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+he),C.readPixels(U,z,G,F,ne.convert(Ae),ne.convert(Te),oe))}finally{const be=B!==null?g.get(B).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(M,U,z,G,F,oe,me,he=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(U>=0&&U<=M.width-G&&z>=0&&z<=M.height-F){Se.bindFramebuffer(C.FRAMEBUFFER,_e);const be=M.textures[he],Ae=be.format,Te=be.type;if(!st.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+he),C.readPixels(U,z,G,F,ne.convert(Ae),ne.convert(Te),0);const tt=B!==null?g.get(B).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,tt);const dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Nl(C,dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(ke),C.deleteSync(dt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,z=0){const G=Math.pow(2,-z),F=Math.floor(M.image.width*G),oe=Math.floor(M.image.height*G),me=U!==null?U.x:0,he=U!==null?U.y:0;I.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,me,he,F,oe),Se.unbindTexture()};const tl=C.createFramebuffer(),nl=C.createFramebuffer();this.copyTextureToTexture=function(M,U,z=null,G=null,F=0,oe=null){oe===null&&(F!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=F,F=0):oe=0);let me,he,_e,be,Ae,Te,ke,tt,dt;const ft=M.isCompressedTexture?M.mipmaps[oe]:M.image;if(z!==null)me=z.max.x-z.min.x,he=z.max.y-z.min.y,_e=z.isBox3?z.max.z-z.min.z:1,be=z.min.x,Ae=z.min.y,Te=z.isBox3?z.min.z:0;else{const qt=Math.pow(2,-F);me=Math.floor(ft.width*qt),he=Math.floor(ft.height*qt),M.isDataArrayTexture?_e=ft.depth:M.isData3DTexture?_e=Math.floor(ft.depth*qt):_e=1,be=0,Ae=0,Te=0}G!==null?(ke=G.x,tt=G.y,dt=G.z):(ke=0,tt=0,dt=0);const it=ne.convert(U.format),we=ne.convert(U.type);let Qe;U.isData3DTexture?(I.setTexture3D(U,0),Qe=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),Qe=C.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),Qe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ye=C.getParameter(C.UNPACK_ROW_LENGTH),zt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ei=C.getParameter(C.UNPACK_SKIP_PIXELS),Vt=C.getParameter(C.UNPACK_SKIP_ROWS),Pi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ft.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ft.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,be),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ae),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Te);const at=M.isDataArrayTexture||M.isData3DTexture,Nt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const qt=g.get(M),Dt=g.get(U),Ft=g.get(qt.__renderTarget),Ws=g.get(Dt.__renderTarget);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Bn=0;Bn<_e;Bn++)at&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(M).__webglTexture,F,Te+Bn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(U).__webglTexture,oe,dt+Bn)),C.blitFramebuffer(be,Ae,me,he,ke,tt,me,he,C.DEPTH_BUFFER_BIT,C.NEAREST);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||g.has(M)){const qt=g.get(M),Dt=g.get(U);Se.bindFramebuffer(C.READ_FRAMEBUFFER,tl),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,nl);for(let Ft=0;Ft<_e;Ft++)at?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qt.__webglTexture,F,Te+Ft):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qt.__webglTexture,F),Nt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,oe,dt+Ft):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Dt.__webglTexture,oe),F!==0?C.blitFramebuffer(be,Ae,me,he,ke,tt,me,he,C.COLOR_BUFFER_BIT,C.NEAREST):Nt?C.copyTexSubImage3D(Qe,oe,ke,tt,dt+Ft,be,Ae,me,he):C.copyTexSubImage2D(Qe,oe,ke,tt,be,Ae,me,he);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Nt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Qe,oe,ke,tt,dt,me,he,_e,it,we,ft.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Qe,oe,ke,tt,dt,me,he,_e,it,ft.data):C.texSubImage3D(Qe,oe,ke,tt,dt,me,he,_e,it,we,ft):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,ke,tt,me,he,it,we,ft.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,ke,tt,ft.width,ft.height,it,ft.data):C.texSubImage2D(C.TEXTURE_2D,oe,ke,tt,me,he,it,we,ft);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ye),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,zt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ei),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pi),oe===0&&U.generateMipmaps&&C.generateMipmap(Qe),Se.unbindTexture()},this.initRenderTarget=function(M){g.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){P=0,O=0,B=null,Se.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class vm{scene;camera;renderer;clock=new Sh;constructor(){this.scene=new ah,this.scene.background=new Ne(8900331),this.scene.fog=new Fs(8900331,40,120),this.camera=new Kt(60,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,6,-10),this.camera.lookAt(0,1.5,10),this.renderer=new xm({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=uc,this.renderer.toneMapping=Ta,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.setupLighting(),window.addEventListener("resize",this.onResize)}setupLighting(){const e=new mh(8900331,16115402,.6);this.scene.add(e);const t=new vh(16777215,.3);this.scene.add(t);const n=new xh(16774368,1.2);n.position.set(15,25,-10),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-20,n.shadow.camera.right=20,n.shadow.camera.top=20,n.shadow.camera.bottom=-20,n.shadow.camera.near=1,n.shadow.camera.far=60,n.shadow.bias=-.001,this.scene.add(n)}onResize=()=>{const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)};getDelta(){return this.clock.getDelta()}render(){this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}class Mm{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t)}off(e,t){this.listeners.get(e)?.delete(t)}emit(e,...t){this.listeners.get(e)?.forEach(n=>n(...t))}}const Ct=new Mm,Zo=30,Sm=300;class ym{touchStartX=0;touchStartY=0;touchStartTime=0;constructor(){window.addEventListener("touchstart",this.onTouchStart,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd,{passive:!1}),window.addEventListener("keydown",this.onKeyDown)}onTouchStart=e=>{const t=e.target;if(t.closest(".btn")||t.closest("#start-screen")||t.closest("#game-over")||t.closest("#btn-sound"))return;e.preventDefault();const n=e.touches[0];this.touchStartX=n.clientX,this.touchStartY=n.clientY,this.touchStartTime=Date.now()};onTouchEnd=e=>{const t=e.target;if(t.closest(".btn")||t.closest("#start-screen")||t.closest("#game-over")||t.closest("#btn-sound"))return;e.preventDefault();const n=e.changedTouches[0],s=n.clientX-this.touchStartX,r=n.clientY-this.touchStartY;if(Date.now()-this.touchStartTime>Sm){Ct.emit("input:jump");return}const o=Math.abs(s),c=Math.abs(r);if(o<Zo&&c<Zo){Ct.emit("input:jump");return}if(o>c){const l=s>0?"left":"right";Ct.emit("input:swipe",l)}else r<0?Ct.emit("input:jump"):Ct.emit("input:slide")};onKeyDown=e=>{switch(e.code){case"ArrowLeft":case"KeyA":e.preventDefault(),Ct.emit("input:swipe","left");break;case"ArrowRight":case"KeyD":e.preventDefault(),Ct.emit("input:swipe","right");break;case"ArrowUp":case"KeyW":case"Space":e.preventDefault(),Ct.emit("input:jump");break;case"ArrowDown":case"KeyS":e.preventDefault(),Ct.emit("input:slide");break}};dispose(){window.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("touchend",this.onTouchEnd),window.removeEventListener("keydown",this.onKeyDown)}}function jn(i,e,t){return i+(e-i)*t}function Zc(i,e,t){return Math.max(e,Math.min(t,i))}function Zi(i,e){return Math.random()*(e-i)+i}function Un(i,e){return Math.floor(Math.random()*(e-i+1))+i}const Ea=2.5,Sn=[-Ea,0,Ea],Em=0,Er=1,bm=2;function br(i){return Sn[i]??0}function Tm(){const i=new Re,e=new j({color:16040586,roughness:.7}),t=new j({color:7711451,roughness:.6}),n=new j({color:1710638,roughness:.6}),s=new j({color:3810578,roughness:.8}),r=new j({color:7711451,roughness:.35,metalness:.05}),a=new j({color:16777215,roughness:.5}),o=new j({color:16167950,roughness:.4,metalness:.1}),c=new Oe(.55,.7,.35),l=new k(c,t);l.position.y=1.15,l.castShadow=!0,i.add(l);const h=new Oe(.56,.2,.36),u=new k(h,a);u.position.y=1.15,i.add(u);const f=new Oe(.55,.35,.35),m=new k(f,n);m.position.y=.65,m.castShadow=!0,i.add(m);const _=new vt(.22,10,8),v=new k(_,e);v.position.y=1.72,v.castShadow=!0,i.add(v);const p=new vt(.25,8,6),d=new k(p,s);d.position.y=1.82,d.scale.set(1,.7,1.1),d.castShadow=!0,i.add(d);const y=new Oe(.14,.55,.14),b=new k(y,e);b.position.set(-.38,1.1,0),b.castShadow=!0,i.add(b);const E=new k(y,e);E.position.set(.38,1.1,0),E.castShadow=!0,i.add(E);const w=new Oe(.16,.5,.16),A=new k(w,e);A.position.set(-.14,.25,0),A.castShadow=!0,i.add(A);const R=new k(w,e);R.position.set(.14,.25,0),R.castShadow=!0,i.add(R);const L=new Oe(.5,.06,1.6),x=new k(L,r);x.position.y=.03,x.castShadow=!0,i.add(x);const S=new Oe(.51,.065,.45),P=new k(S,a);P.position.y=.035,i.add(P);const O=new $i(.08,12),B=new k(O,o);B.position.set(0,.065,.2),B.rotation.x=-Math.PI/2,i.add(B);const q=new Oe(.04,.12,.15),X=new k(q,o);return X.position.set(0,-.03,-.7),X.castShadow=!0,i.add(X),{group:i,leftArm:b,rightArm:E,leftLeg:A,rightLeg:R,board:x,hair:d}}class wm{time=0;leftArm;rightArm;leftLeg;rightLeg;hair;board;constructor(e){this.leftArm=e.leftArm,this.rightArm=e.rightArm,this.leftLeg=e.leftLeg,this.rightLeg=e.rightLeg,this.board=e.board,this.hair=e.hair}update(e,t,n){switch(this.time+=e*n*.5,t){case"running":{const s=Math.sin(this.time*2)*.35;this.leftArm.rotation.x=s,this.rightArm.rotation.x=-s,this.leftLeg.rotation.x=-s*.8,this.rightLeg.rotation.x=s*.8,this.board.rotation.z=Math.sin(this.time)*.03,this.hair.position.z=Math.sin(this.time*3)*.02;break}case"jumping":{this.leftArm.rotation.x=-.6,this.rightArm.rotation.x=-.6,this.leftArm.rotation.z=-.4,this.rightArm.rotation.z=.4,this.leftLeg.rotation.x=.2,this.rightLeg.rotation.x=.2,this.board.rotation.z=0;break}case"sliding":{this.leftArm.rotation.x=.8,this.rightArm.rotation.x=.8,this.leftLeg.rotation.x=-.6,this.rightLeg.rotation.x=-.6,this.board.rotation.z=0;break}case"dead":{const s=Math.min(this.time*.5,1);this.leftArm.rotation.x=s*1.2,this.rightArm.rotation.x=s*-.8,this.leftArm.rotation.z=-s*.5,this.rightArm.rotation.z=s*.7,this.leftLeg.rotation.x=s*.5,this.rightLeg.rotation.x=s*-.3;break}}}reset(){this.time=0,this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.board.rotation.set(0,0,0)}}const Am=25,Rm=11,Cm=16,Pm=12,Dm=.8;class Lm{mesh;laneIndex=Er;targetX;velocityY=0;grounded=!0;state="running";slideTimer=0;originalScaleY=1;shieldMesh=null;posZ=0;scene;animator;constructor(e){this.scene=e;const t=Tm();this.mesh=t.group,this.animator=new wm(t),this.targetX=br(this.laneIndex),this.mesh.position.set(this.targetX,0,0),this.scene.add(this.mesh),Ct.on("input:swipe",this.onSwipe),Ct.on("input:jump",this.onJump),Ct.on("input:slide",this.onSlide)}onSwipe=(...e)=>{const t=e[0];this.state!=="dead"&&(t==="left"&&this.laneIndex>Em?this.laneIndex--:t==="right"&&this.laneIndex<bm&&this.laneIndex++,this.targetX=br(this.laneIndex))};onJump=()=>{this.state!=="dead"&&this.grounded&&(this.state==="sliding"&&this.endSlide(),this.velocityY=Rm,this.grounded=!1,this.state="jumping")};onSlide=()=>{this.state!=="dead"&&this.grounded&&this.state!=="sliding"&&(this.state="sliding",this.slideTimer=Dm,this.originalScaleY=this.mesh.scale.y,this.mesh.scale.y=.45,this.mesh.position.y=0)};endSlide(){this.mesh.scale.y=this.originalScaleY,this.state="running",this.slideTimer=0}update(e,t){if(this.state==="dead")return;this.posZ+=t*e,this.mesh.position.z=this.posZ;const n=Zc(Pm*e,0,1);this.mesh.position.x=jn(this.mesh.position.x,this.targetX,n),this.grounded||(this.velocityY-=Am*e,this.mesh.position.y+=this.velocityY*e,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.velocityY=0,this.grounded=!0,this.state==="jumping"&&(this.state="running"))),this.state==="sliding"&&(this.slideTimer-=e,this.slideTimer<=0&&this.endSlide()),this.animator.update(e,this.state,t)}die(){this.state="dead"}rampJump(){this.state!=="dead"&&(this.state==="sliding"&&this.endSlide(),this.velocityY=Cm,this.grounded=!1,this.state="jumping")}setShieldVisible(e){if(e&&!this.shieldMesh){const t=new vt(.9,16,12),n=new j({color:4500223,emissive:2263295,emissiveIntensity:.4,transparent:!0,opacity:.25,side:pt});this.shieldMesh=new k(t,n),this.shieldMesh.position.y=.8,this.mesh.add(this.shieldMesh)}this.shieldMesh&&(this.shieldMesh.visible=e)}reset(){this.laneIndex=Er,this.targetX=br(Er),this.mesh.position.set(this.targetX,0,0),this.mesh.scale.y=1,this.velocityY=0,this.grounded=!0,this.state="running",this.posZ=0,this.slideTimer=0,this.setShieldVisible(!1),this.animator.reset()}getHitbox(){const t=this.state==="sliding"?.7:1.6,n=.2,s=this.mesh.position.x,r=this.mesh.position.y,a=this.mesh.position.z;return new Qn(new N(s-.3,r,a-n),new N(s+.3,r+t,a+n))}dispose(){Ct.off("input:swipe",this.onSwipe),Ct.off("input:jump",this.onJump),Ct.off("input:slide",this.onSlide),this.scene.remove(this.mesh)}}const Wt=30,Tr=6,Yo=Ea*2+4;class Im{chunks=[];furthestZ=0;sandMaterial;baseMaterial;dividerMaterial;edgeMaterial;trackGroup;scene;baseGround;constructor(e){this.scene=e,this.trackGroup=new Re,this.scene.add(this.trackGroup),this.sandMaterial=new j({color:15259056,roughness:.85,metalness:.02}),this.dividerMaterial=new j({color:13482384,roughness:.9}),this.edgeMaterial=new j({color:12626048,roughness:.8}),this.baseMaterial=new j({color:15785920,roughness:.95});const t=new Bt(80,400);t.rotateX(-Math.PI/2),this.baseGround=new k(t,this.baseMaterial),this.baseGround.position.y=-.02,this.baseGround.receiveShadow=!0,this.scene.add(this.baseGround);for(let n=0;n<Tr;n++)this.createChunk(n*Wt);this.furthestZ=Tr*Wt}createChunk(e){const t=new Re;t.position.set(0,0,e+Wt/2);const n=new Bt(Yo,Wt);n.rotateX(-Math.PI/2);const s=new k(n,this.sandMaterial);s.receiveShadow=!0,t.add(s);for(let r=0;r<Sn.length-1;r++){const a=(Sn[r]+Sn[r+1])/2,o=new Oe(.05,.02,Wt),c=new k(o,this.dividerMaterial);c.position.set(a,.02,0),c.receiveShadow=!0,t.add(c)}for(const r of[-4.35,Yo/2-.15]){const a=new Oe(.3,.02,Wt),o=new k(a,this.edgeMaterial);o.position.set(r,.02,0),o.receiveShadow=!0,t.add(o)}this.trackGroup.add(t),this.chunks.push(t)}setColors(e,t,n,s){this.sandMaterial.color.setHex(e),this.baseMaterial.color.setHex(t),this.dividerMaterial.color.setHex(n),this.edgeMaterial.color.setHex(s)}reset(){for(let e=0;e<this.chunks.length;e++)this.chunks[e].position.z=e*Wt+Wt/2;this.furthestZ=Tr*Wt,this.baseGround.position.z=80}update(e){this.baseGround.position.z=e+80;for(const t of this.chunks)t.position.z-Wt/2<e-Wt&&(t.position.z=this.furthestZ+Wt/2,this.furthestZ+=Wt)}dispose(){this.chunks.forEach(e=>{this.trackGroup.remove(e)}),this.sandMaterial.dispose(),this.scene.remove(this.trackGroup),this.scene.remove(this.baseGround)}}function Ko(i="chapadmalal"){switch(i){case"rambla":return Bm();case"carilo":return Wm();case"rutaCostera":return $m();default:switch(Math.floor(Math.random()*4)){case 0:return Yc();case 1:return Um();case 2:return Om();default:return Nm()}}}function $o(i="chapadmalal"){switch(i){case"rambla":return Gm();case"carilo":return Xm();case"rutaCostera":return jm();default:return Math.floor(Math.random()*2)===0?Fm():Vs()}}function Yc(){const i=[8022877,9141611,7234137],e=i[Math.floor(Math.random()*i.length)],t=new Bs(.55,1);t.scale(1.6,.85,.9);const n=new j({color:e,roughness:.9}),s=new k(t,n);return s.castShadow=!0,s.receiveShadow=!0,s.userData.boxW=1.8,s.userData.boxH=.9,s.userData.boxD=.8,s}function Um(){const i=new Ie(.15,.2,2,6);i.rotateZ(Math.PI/2);const e=new j({color:10518624,roughness:.85}),t=new k(i,e);return t.castShadow=!0,t.receiveShadow=!0,t.userData.boxW=2,t.userData.boxH=.4,t.userData.boxD=.4,t}function Nm(){const i=new Oe(1.8,.7,.6),e=new j({color:14731413,roughness:.95}),t=new k(i,e);return t.castShadow=!0,t.receiveShadow=!0,t.userData.boxW=1.8,t.userData.boxH=.7,t.userData.boxD=.6,t}function Fm(){const i=new Re,e=new j({color:13421772,metalness:.4,roughness:.5}),t=new Ie(.04,.04,2.2,6);t.rotateZ(Math.PI/2);const n=new k(t,e);n.castShadow=!0,i.add(n);const s=[16729190,4500223,16763904],r=s[Math.floor(Math.random()*s.length)],a=new In(.7,.4,8,1,!0),o=new j({color:r,roughness:.7,side:pt}),c=new k(a,o);c.rotation.x=Math.PI,c.position.y=.1,c.castShadow=!0,i.add(c);const l=new Oe(2,1.2,.3),h=new j({visible:!1}),u=new k(l,h);return u.add(i),u.castShadow=!0,u.userData.boxW=2,u.userData.boxH=1.2,u.userData.boxD=.3,u}function Om(){const i=new Re,e=new j({color:7029795,roughness:.8}),t=new vt(.45,10,8);t.scale(1,.85,1);const n=new k(t,e);n.position.y=0,n.castShadow=!0,i.add(n);const s=new j({color:12632256,metalness:.7,roughness:.3}),r=new Fn(.32,.04,8,16);r.rotateX(Math.PI/2);const a=new k(r,s);a.position.y=.32,i.add(a);const o=new j({color:4025134,roughness:.9}),c=new $i(.3,10);c.rotateX(-Math.PI/2);const l=new k(c,o);l.position.y=.33,i.add(l);const h=new Ie(.025,.03,1,6),u=new k(h,s);u.position.set(.1,.6,0),u.rotation.z=-.25,u.castShadow=!0,i.add(u);const f=new vt(.05,6,4);f.scale(1.2,.5,1.2);const m=new k(f,s);m.position.set(0,.15,0),i.add(m);const _=new Oe(1,1.2,1),v=new j({visible:!1}),p=new k(_,v);return p.add(i),p.castShadow=!0,p.userData.boxW=1,p.userData.boxH=1.2,p.userData.boxD=1,p}function Vs(){const i=new Re,e=new j({color:10514496,roughness:.8}),t=new Oe(2.2,.15,.1),n=new k(t,e);n.position.y=.1,n.castShadow=!0,i.add(n);const s=new k(t,e);s.position.y=-.15,s.castShadow=!0,i.add(s);const r=new Ie(.04,.05,1.6,5);for(const l of[-.9,.9]){const h=new k(r,e);h.position.set(l,-.5,0),h.castShadow=!0,i.add(h)}const a=new Oe(2.2,1.2,.2),o=new j({visible:!1}),c=new k(a,o);return c.add(i),c.castShadow=!0,c.userData.boxW=2.2,c.userData.boxH=1.2,c.userData.boxD=.2,c}function Bm(){switch(Math.floor(Math.random()*3)){case 0:return zm();case 1:return Vm();default:return km()}}function Gm(){return Math.floor(Math.random()*2)===0?Hm():Vs()}function zm(){const i=new Re,e=new j({color:9136404,roughness:.8}),t=new j({color:5592405,metalness:.5,roughness:.4}),n=new Oe(1.6,.08,.5),s=new k(n,e);s.position.y=.45,s.castShadow=!0,i.add(s);const r=new Oe(1.6,.5,.06),a=new k(r,e);a.position.set(0,.72,-.2),a.rotation.x=-.1,a.castShadow=!0,i.add(a);const o=new Ie(.03,.03,.45,5);for(const l of[-.6,.6])for(const h of[-.15,.15]){const u=new k(o,t);u.position.set(l,.22,h),i.add(u)}return Ci(i,1.6,1,.6)}function Vm(){const i=new Re,e=new j({color:14496563,metalness:.3,roughness:.5}),t=new j({color:3355443,roughness:.7}),n=new Ie(.03,.03,1,5),s=new k(n,e);s.rotation.z=Math.PI/6,s.position.set(0,.5,0),s.castShadow=!0,i.add(s);const r=new Fn(.3,.04,8,16);for(const l of[-.4,.4]){const h=new k(r,t);h.position.set(l,.3,0),h.rotation.y=Math.PI/2,i.add(h)}const a=new Ie(.02,.02,.4,5);a.rotateZ(Math.PI/2);const o=new k(a,e);return o.position.set(.3,.8,0),i.add(o),Ci(i,1.2,1,.6)}function km(){const i=new Re,e=new j({color:13404211,roughness:.7}),t=new j({color:8947848,metalness:.4,roughness:.5}),n=new Oe(1.2,.6,.8),s=new k(n,e);s.position.y=.5,s.castShadow=!0,i.add(s);const r=new Ie(.15,.15,.08,8);r.rotateX(Math.PI/2);for(const h of[-.5,.5]){const u=new k(r,t);u.position.set(h,.15,.35),i.add(u)}const a=new Oe(1.4,.05,1),o=new j({color:16737792,roughness:.7}),c=new k(a,o);return c.position.set(0,1.1,0),c.castShadow=!0,i.add(c),Ci(i,1.4,1,1)}function Hm(){const i=new Re,e=new j({color:8947848,metalness:.5,roughness:.4}),t=[16737792,3377407,13382451],n=new j({color:t[Math.floor(Math.random()*t.length)],roughness:.7,side:pt}),s=new Ie(.04,.04,1.8,6);for(const h of[-1,1]){const u=new k(s,e);u.position.set(h,-.4,0),u.castShadow=!0,i.add(u)}const r=new Bt(2,.6),a=new k(r,n);a.position.y=0,a.castShadow=!0,i.add(a);const o=new Oe(2.2,1.2,.3),c=new j({visible:!1}),l=new k(o,c);return l.add(i),l.castShadow=!0,l.userData.boxW=2.2,l.userData.boxH=1.2,l.userData.boxD=.3,l}function Wm(){switch(Math.floor(Math.random()*3)){case 0:return qm();case 1:return Zm();default:return Ym()}}function Xm(){return Math.floor(Math.random()*2)===0?Km():Vs()}function qm(){const i=new Ie(.25,.3,2,7);i.rotateZ(Math.PI/2);const e=new j({color:5913114,roughness:.9}),t=new k(i,e);return t.castShadow=!0,t.receiveShadow=!0,t.userData.boxW=2,t.userData.boxH=.5,t.userData.boxD=.5,t}function Zm(){const i=new Re,e=new j({color:4860426,roughness:.9});for(let n=0;n<4;n++){const s=new Ie(.06,.1,1.2,5);s.rotateZ(Math.PI/2+(Math.random()-.5)*.4);const r=new k(s,e);r.position.set((Math.random()-.5)*.8,.08,(Math.random()-.5)*.3),r.castShadow=!0,i.add(r)}return Ci(i,1.6,.5,.6)}function Ym(){const i=new Re,e=new j({color:14538944,roughness:.8}),t=new j({color:13382434,roughness:.6}),n=new Ie(.15,.2,.5,6),s=new k(n,e);s.position.y=.25,s.castShadow=!0,i.add(s);const r=new vt(.45,8,6,0,Math.PI*2,0,Math.PI/2),a=new k(r,t);a.position.y=.5,a.castShadow=!0,i.add(a);const o=new j({color:16777215,roughness:.7});for(let l=0;l<5;l++){const h=new vt(.05,5,4),u=new k(h,o),f=l/5*Math.PI*2;u.position.set(Math.cos(f)*.3,.6+Math.random()*.1,Math.sin(f)*.3),i.add(u)}return Ci(i,1,.9,1)}function Km(){const i=new Re,e=new j({color:4863264,roughness:.85}),t=new j({color:2976544,roughness:.7}),n=new Ie(.06,.1,2.4,5);n.rotateZ(Math.PI/2);const s=new k(n,e);s.castShadow=!0,i.add(s);for(let c=0;c<6;c++){const l=new vt(.25,6,5),h=new k(l,t);h.position.set((Math.random()-.5)*1.8,(Math.random()-.5)*.3,(Math.random()-.5)*.3),h.scale.y=.5,i.add(h)}const r=new Oe(2.2,1.2,.5),a=new j({visible:!1}),o=new k(r,a);return o.add(i),o.castShadow=!0,o.userData.boxW=2.2,o.userData.boxH=1.2,o.userData.boxD=.5,o}function $m(){switch(Math.floor(Math.random()*3)){case 0:return Jm();case 1:return Qm();default:return Yc()}}function jm(){return Math.floor(Math.random()*2)===0?e0():Vs()}function Jm(){const i=new Re,e=new j({color:16737792,roughness:.6}),t=new j({color:16777215,roughness:.7}),n=new In(.25,.8,6),s=new k(n,e);s.position.y=.4,s.castShadow=!0,i.add(s);const r=new Ie(.18,.2,.1,6),a=new k(r,t);a.position.y=.35,i.add(a);const o=new Oe(.5,.06,.5),c=new k(o,e);return c.position.y=.03,i.add(c),Ci(i,.8,.9,.8)}function Qm(){const i=new j({color:2763306,roughness:.9}),e=new Fn(.35,.15,8,16);e.rotateX(Math.PI/2);const t=new k(e,i);return t.position.y=.15,t.castShadow=!0,t.receiveShadow=!0,t.userData.boxW=1,t.userData.boxH=.5,t.userData.boxD=1,t}function e0(){const i=new Re,e=new j({color:8947848,metalness:.5,roughness:.4}),t=new j({color:16763904,roughness:.5}),n=new Ie(.04,.04,1.8,6),s=new k(n,e);s.position.set(0,-.4,0),s.castShadow=!0,i.add(s);const r=new Oe(.8,.8,.05),a=new k(r,t);a.rotation.z=Math.PI/4,a.position.y=.2,a.castShadow=!0,i.add(a);const o=new Ie(.03,.03,2,5);o.rotateZ(Math.PI/2);const c=new k(o,e);c.position.y=-.2,i.add(c);const l=new Oe(2,1.2,.3),h=new j({visible:!1}),u=new k(l,h);return u.add(i),u.castShadow=!0,u.userData.boxW=2,u.userData.boxH=1.2,u.userData.boxD=.3,u}function Ci(i,e,t,n){const s=new Oe(e,t,n),r=new j({visible:!1}),a=new k(s,r);return a.add(i),a.castShadow=!0,a.userData.boxW=e,a.userData.boxH=t,a.userData.boxD=n,a}const t0=15,n0=30;class i0{obstacles=[];nextSpawnZ=30;group;scene;currentZone="chapadmalal";constructor(e){this.scene=e,this.group=new Re,this.scene.add(this.group)}update(e,t){for(;this.nextSpawnZ<e+100;)this.spawn(this.nextSpawnZ),this.nextSpawnZ+=Zi(t0,n0);for(const n of this.obstacles)n.active&&n.worldZ<e-10&&(n.active=!1,n.mesh.visible=!1,this.group.remove(n.mesh));this.obstacles.length>50&&(this.obstacles=this.obstacles.filter(n=>n.active))}spawn(e){const t=Un(0,2),n=Math.random()<.7?"low":"high",s=n==="low"?Ko(this.currentZone):$o(this.currentZone),r=Sn[t];n==="low"?s.position.set(r,.45,e):s.position.set(r,1.4,e),this.group.add(s),this.obstacles.push({mesh:s,lane:t,worldZ:e,type:n,active:!0})}spawnFromPattern(e,t){const n=t+(e.length>0?Math.max(...e.map(s=>s.offsetZ))+5:40);for(const s of this.obstacles)s.active&&s.worldZ>=t-5&&s.worldZ<=n&&(s.active=!1,s.mesh.visible=!1,this.group.remove(s.mesh));for(const s of e){const r=s.type==="low"?Ko(this.currentZone):$o(this.currentZone),a=Sn[s.lane],o=t+s.offsetZ;s.type==="low"?r.position.set(a,.45,o):r.position.set(a,1.4,o),this.group.add(r),this.obstacles.push({mesh:r,lane:s.lane,worldZ:o,type:s.type,active:!0})}}suppressUntil(e){this.nextSpawnZ<e&&(this.nextSpawnZ=e)}getActiveNear(e,t=2){return this.obstacles.filter(n=>n.active&&Math.abs(n.worldZ-e)<t)}reset(){for(const e of this.obstacles)e.mesh.visible=!1,this.group.remove(e.mesh);this.obstacles=[],this.nextSpawnZ=30}dispose(){this.reset(),this.scene.remove(this.group)}}class s0{pool=[];factory;resetFn;constructor(e,t,n=0){this.factory=e,this.resetFn=t;for(let s=0;s<n;s++)this.pool.push(this.factory())}get(){if(this.pool.length>0){const e=this.pool.pop();return this.resetFn(e),e}return this.factory()}release(e){this.pool.push(e)}get size(){return this.pool.length}}const jo=8,Jo=18,r0=6,Qo=15;class a0{items=[];pool;nextSpawnZ=15;group;scene;lastCollectedCount=0;constructor(e){this.scene=e,this.group=new Re,this.scene.add(this.group),this.pool=new s0(()=>{const t=new Fn(.22,.1,8,12,Math.PI),n=new j({color:13931066,roughness:.55,metalness:.05,emissive:12877610,emissiveIntensity:.12}),s=new k(t,n);return s.castShadow=!0,s.rotation.x=-Math.PI/2,s},t=>{t.visible=!0},12)}update(e,t,n=!1,s=0){for(;this.nextSpawnZ<e+100;)this.spawn(this.nextSpawnZ),this.nextSpawnZ+=Zi(jo,Jo);for(const r of this.items){if(!r.active)continue;r.mesh.rotation.y+=2.5*t;const a=1+Math.sin(Date.now()*.004+r.worldZ)*.2;if(n){const o=s-r.mesh.position.x,c=e-r.worldZ;Math.sqrt(o*o+c*c)<r0?(r.mesh.position.x=jn(r.mesh.position.x,s,Qo*t),r.mesh.position.y=jn(r.mesh.position.y,1,Qo*t)):r.mesh.position.y=a}else r.mesh.position.y=a;r.worldZ<e-10&&this.deactivate(r)}this.items.length>60&&(this.items=this.items.filter(r=>r.active))}spawn(e){const t=Un(0,2),n=Un(3,5),s=Sn[t];for(let r=0;r<n;r++){const a=this.pool.get(),o=e+r*2.5;a.position.set(s,1,o),this.group.add(a),this.items.push({mesh:a,lane:t,worldZ:o,active:!0,points:10})}this.nextSpawnZ=e+n*2.5+Zi(jo,Jo)}spawnFromPattern(e,t){for(const n of e){const s=this.pool.get(),r=Sn[n.lane],a=t+n.offsetZ;s.position.set(r,1,a),this.group.add(s),this.items.push({mesh:s,lane:n.lane,worldZ:a,active:!0,points:10})}}suppressUntil(e){this.nextSpawnZ<e&&(this.nextSpawnZ=e)}deactivate(e){e.active=!1,e.mesh.visible=!1,this.group.remove(e.mesh),this.pool.release(e.mesh)}checkCollection(e,t,n,s=!1){let r=0,a=0;const o=s?3:1,c=s?3:1.2;for(const l of this.items){if(!l.active)continue;const h=Math.abs(l.mesh.position.x-e),u=Math.abs(l.mesh.position.y-(t+1)),f=Math.abs(l.worldZ-n);h<o&&u<c&&f<c&&(r+=l.points,a++,this.deactivate(l))}return this.lastCollectedCount=a,r}reset(){for(const e of this.items)e.mesh.visible=!1,this.group.remove(e.mesh),this.pool.release(e.mesh);this.items=[],this.nextSpawnZ=15,this.lastCollectedCount=0}dispose(){this.reset(),this.scene.remove(this.group)}}const ec="surftrip3d_hiscore";class o0{score=0;hiScore=0;coins=0;displayMultiplier=1;constructor(){this.hiScore=parseInt(localStorage.getItem(ec)??"0",10)}addDistance(e,t=1){this.score+=Math.round(e*t)}addPoints(e,t=1){const n=Math.round(e*t);this.score+=n,this.coins+=n}finalise(){const e=this.score>this.hiScore;return e&&(this.hiScore=this.score,localStorage.setItem(ec,String(this.hiScore))),e}reset(){this.score=0,this.coins=0,this.displayMultiplier=1}}const Ss=12,c0=30,l0=.15;class h0{speed=Ss;elapsed=0;update(e){this.elapsed+=e,this.speed=Zc(Ss+this.elapsed*l0,Ss,c0)}reset(){this.speed=Ss,this.elapsed=0}}const Bi={magnet:{duration:10,weight:30,color:16729156,emissive:16720418},shield:{duration:0,weight:25,color:4500223,emissive:2263295},multiplier:{duration:15,weight:25,color:16768256,emissive:16755200},megawave:{duration:8,weight:10,color:65450,emissive:56712},slowmo:{duration:5,weight:10,color:13395711,emissive:11158749}},u0=80,d0=160;class f0{items=[];activeEffects=new Map;nextSpawnZ=60;group;scene;constructor(e){this.scene=e,this.group=new Re,this.scene.add(this.group)}update(e,t){for(;this.nextSpawnZ<e+120;)this.spawn(this.nextSpawnZ),this.nextSpawnZ+=Zi(u0,d0);const n=Date.now()*.003;for(const s of this.items)s.active&&(s.mesh.rotation.y+=3*t,s.mesh.position.y=1.2+Math.sin(n+s.worldZ)*.3,s.worldZ<e-10&&this.deactivateItem(s));this.items.length>20&&(this.items=this.items.filter(s=>s.active));for(const[s,r]of this.activeEffects)r.remaining-=t,r.remaining<=0&&this.activeEffects.delete(s)}spawn(e){const t=this.weightedRandomType(),n=Un(0,2),s=Sn[n],r=Bi[t],a=this.createPowerUpMesh(t,r.color,r.emissive);a.position.set(s,1.2,e),this.group.add(a),this.items.push({mesh:a,worldZ:e,lane:n,type:t,active:!0})}weightedRandomType(){const e=Object.keys(Bi),t=e.reduce((s,r)=>s+Bi[r].weight,0);let n=Math.random()*t;for(const s of e)if(n-=Bi[s].weight,n<=0)return s;return e[0]}createPowerUpMesh(e,t,n){const s=new Re,r=new Fn(.4,.06,8,16),a=new j({color:n,emissive:n,emissiveIntensity:.8,transparent:!0,opacity:.7}),o=new k(r,a);o.rotation.x=Math.PI/2,s.add(o);let c;switch(e){case"magnet":{const l=new Fn(.2,.08,8,12,Math.PI),h=new j({color:t,emissive:n,emissiveIntensity:.5});c=new k(l,h);break}case"shield":{const l=new Is(.22,0),h=new j({color:t,emissive:n,emissiveIntensity:.5});c=new k(l,h);break}case"multiplier":{const l=new Is(.2,0),h=new j({color:t,emissive:n,emissiveIntensity:.6});c=new k(l,h),c.scale.set(1,1.4,1);break}case"megawave":{const l=new vt(.2,12,8),h=new j({color:t,emissive:n,emissiveIntensity:.6});c=new k(l,h);break}case"slowmo":{const l=new Ie(.18,.18,.08,16),h=new j({color:t,emissive:n,emissiveIntensity:.5});c=new k(l,h);break}}return s.add(c),s}checkCollection(e,t,n){for(const s of this.items){if(!s.active)continue;const r=Math.abs(s.mesh.position.x-e),a=Math.abs(s.mesh.position.y-(t+1)),o=Math.abs(s.worldZ-n);if(r<1.2&&a<1.5&&o<1.5)return this.deactivateItem(s),this.activate(s.type),s.type}return null}activate(e){const t=Bi[e];e==="shield"?this.activeEffects.set(e,{type:e,remaining:9999,duration:9999}):this.activeEffects.set(e,{type:e,remaining:t.duration,duration:t.duration})}deactivateItem(e){e.active=!1,e.mesh.visible=!1,this.group.remove(e.mesh)}useShield(){return this.activeEffects.has("shield")?(this.activeEffects.delete("shield"),!0):!1}isActive(e){return this.activeEffects.has(e)}getEffect(e){return this.activeEffects.get(e)}getScoreMultiplier(){return this.activeEffects.has("multiplier")?2:1}getSpeedMultiplier(){return this.activeEffects.has("slowmo")?.5:1}isInvincible(){return this.activeEffects.has("megawave")}isMagnetActive(){return this.activeEffects.has("magnet")}getActiveEffects(){return Array.from(this.activeEffects.values())}reset(){for(const e of this.items)e.mesh.visible=!1,this.group.remove(e.mesh);this.items=[],this.activeEffects.clear(),this.nextSpawnZ=60}dispose(){this.reset(),this.scene.remove(this.group)}}const p0=3,m0=5,g0=15;class _0{combo=0;multiplier=1;timeSinceLastCollect=0;levelUpThisFrame=!1;brokeThisFrame=!1;update(e){this.levelUpThisFrame=!1,this.brokeThisFrame=!1,this.combo>0&&(this.timeSinceLastCollect+=e,this.timeSinceLastCollect>=p0&&(this.combo=0,this.multiplier=1,this.brokeThisFrame=!0))}addCollect(e){const t=this.multiplier;this.combo+=e,this.timeSinceLastCollect=0,this.combo>=g0?this.multiplier=3:this.combo>=m0?this.multiplier=2:this.multiplier=1,this.multiplier>t&&(this.levelUpThisFrame=!0)}reset(){this.combo=0,this.multiplier=1,this.timeSinceLastCollect=0,this.levelUpThisFrame=!1,this.brokeThisFrame=!1}}function x0(){const i=[],e=[];for(let n=0;n<40;n+=8){const s=Un(0,2);if(i.push({lane:s,offsetZ:n,type:"low"}),Math.random()<.3){const r=(s+Un(1,2))%3;i.push({lane:r,offsetZ:n+3,type:"low"})}}for(let n=3;n<40;n+=8){const s=Un(0,2);e.push({lane:s,offsetZ:n})}return{type:"rockField",length:40,obstacles:i,collectibles:e,hasRamp:!1}}function v0(){const i=[],t=Un(0,2);for(let n=0;n<30;n+=2.5)i.push({lane:t,offsetZ:n});return{type:"coinCorridor",length:30,obstacles:[],collectibles:i,hasRamp:!1}}function M0(){const i=[],e=[];let n=0;for(let s=0;s<45;s+=7){i.push({lane:n,offsetZ:s,type:"low"});const r=n===0?2:0;e.push({lane:r,offsetZ:s+3}),n=n===0?2:0}for(let s=3;s<45;s+=14)i.push({lane:1,offsetZ:s,type:"high"});return{type:"slalom",length:45,obstacles:i,collectibles:e,hasRamp:!1}}function S0(){const i=[];for(let n=5;n<20;n+=2.5)i.push({lane:1,offsetZ:n});return i.push({lane:0,offsetZ:10}),i.push({lane:2,offsetZ:10}),{type:"rampJump",length:25,obstacles:[],collectibles:i,hasRamp:!0}}function y0(){const i=[];for(let t=0;t<35;t+=2.5)i.push({lane:0,offsetZ:t}),i.push({lane:1,offsetZ:t}),i.push({lane:2,offsetZ:t});return{type:"bonus",length:35,obstacles:[],collectibles:i,hasRamp:!1}}const wr=[{factory:x0,weight:25},{factory:v0,weight:25},{factory:M0,weight:20},{factory:S0,weight:15},{factory:y0,weight:15}];class E0{nextPatternZ=100;currentPattern=null;patternStartZ=0;minGap=30;maxGap=60;getPatternAt(e){return this.currentPattern?(e>this.patternStartZ+this.currentPattern.length+20&&(this.nextPatternZ=this.patternStartZ+this.currentPattern.length+Zi(this.minGap,this.maxGap),this.currentPattern=null),null):e+80>=this.nextPatternZ?(this.currentPattern=this.selectPattern(),this.patternStartZ=this.nextPatternZ,this.currentPattern):null}getPatternStartZ(){return this.patternStartZ}isInPatternZone(e){return this.currentPattern?e>=this.patternStartZ&&e<=this.patternStartZ+this.currentPattern.length:!1}selectPattern(){const e=wr.reduce((n,s)=>n+s.weight,0);let t=Math.random()*e;for(const n of wr)if(t-=n.weight,t<=0)return n.factory();return wr[0].factory()}reset(){this.nextPatternZ=100,this.currentPattern=null,this.patternStartZ=0}}const b0={id:"chapadmalal",name:"chapadmalal",displayName:"Playa de Chapadmalal",colors:{skyZenith:[.35,.6,.92],skyHorizon:[.75,.88,.97],skyGround:[.92,.87,.78],fog:8900331,background:8900331,oceanDeep:[.08,.3,.55],oceanSurf:[.25,.65,.85],oceanFoam:[.9,.95,1],trackSand:15259056,trackBase:15785920,trackDivider:13482384,trackEdge:12626048},chords:[[220,261.63,329.63],[174.61,220,261.63],[261.63,329.63,392],[196,246.94,293.66]],musicTempo:214,bassType:"triangle"},T0={id:"rambla",name:"rambla",displayName:"Rambla de Mar del Plata",colors:{skyZenith:[.45,.5,.65],skyHorizon:[.7,.72,.78],skyGround:[.65,.62,.6],fog:9083562,background:9083562,oceanDeep:[.1,.25,.45],oceanSurf:[.3,.55,.7],oceanFoam:[.85,.88,.92],trackSand:11577504,trackBase:12630192,trackDivider:10064008,trackEdge:8943728},chords:[[293.66,349.23,440],[233.08,293.66,349.23],[174.61,220,261.63],[261.63,329.63,392]],musicTempo:240,bassType:"sine"},w0={id:"carilo",name:"carilo",displayName:"Bosque de Carilo",colors:{skyZenith:[.2,.38,.28],skyHorizon:[.4,.55,.42],skyGround:[.3,.35,.25],fog:4876874,background:4876874,oceanDeep:[.06,.2,.15],oceanSurf:[.15,.4,.3],oceanFoam:[.7,.8,.7],trackSand:8022864,trackBase:6970176,trackDivider:6311992,trackEdge:5259312},chords:[[164.81,207.65,246.94],[220,261.63,329.63],[246.94,293.66,369.99],[164.81,207.65,246.94]],musicTempo:280,bassType:"triangle"},A0={id:"rutaCostera",name:"rutaCostera",displayName:"Ruta Costera",colors:{skyZenith:[.55,.3,.55],skyHorizon:[.9,.55,.3],skyGround:[.85,.7,.45],fog:13404245,background:13404245,oceanDeep:[.15,.1,.3],oceanSurf:[.45,.3,.55],oceanFoam:[.95,.85,.75],trackSand:8421504,trackBase:7368800,trackDivider:6316112,trackEdge:13672496},chords:[[293.66,369.99,440],[220,277.18,329.63],[329.63,415.3,493.88],[220,277.18,329.63]],musicTempo:200,bassType:"sawtooth"},Pn=[b0,T0,w0,A0],ys=500,tc=4;class R0{currentIndex=0;nextIndex=-1;transitionProgress=0;zoneChangedThisFrame=!1;newZoneName="";get currentZone(){return Pn[this.currentIndex%Pn.length]}get nextZone(){return this.nextIndex<0?null:Pn[this.nextIndex%Pn.length]}get isTransitioning(){return this.nextIndex>=0}get progress(){return this.transitionProgress}getBlendedColors(){const e=this.currentZone.colors;if(!this.isTransitioning)return e;const t=this.nextZone.colors,n=this.transitionProgress;return C0(e,t,n)}getBlendedMusicConfig(){const e=this.currentZone;if(!this.isTransitioning||this.transitionProgress<.5)return{chords:e.chords,tempo:e.musicTempo,bassType:e.bassType};const t=this.nextZone;return{chords:t.chords,tempo:t.musicTempo,bassType:t.bassType}}update(e,t){this.zoneChangedThisFrame=!1;const n=Math.floor(e/ys),s=e-n*ys,r=ys-tc*15;s>=r&&this.nextIndex<0&&(this.nextIndex=n+1,this.transitionProgress=0,this.zoneChangedThisFrame=!0,this.newZoneName=Pn[(n+1)%Pn.length].displayName),this.nextIndex>=0&&(this.transitionProgress+=t/tc,this.transitionProgress>=1&&(this.currentIndex=this.nextIndex%Pn.length,this.nextIndex=-1,this.transitionProgress=0));const a=n%Pn.length;!this.isTransitioning&&this.currentIndex!==a&&e>ys&&(this.currentIndex=a)}reset(){this.currentIndex=0,this.nextIndex=-1,this.transitionProgress=0,this.zoneChangedThisFrame=!1,this.newZoneName=""}}function C0(i,e,t){return{skyZenith:mi(i.skyZenith,e.skyZenith,t),skyHorizon:mi(i.skyHorizon,e.skyHorizon,t),skyGround:mi(i.skyGround,e.skyGround,t),fog:gi(i.fog,e.fog,t),background:gi(i.background,e.background,t),oceanDeep:mi(i.oceanDeep,e.oceanDeep,t),oceanSurf:mi(i.oceanSurf,e.oceanSurf,t),oceanFoam:mi(i.oceanFoam,e.oceanFoam,t),trackSand:gi(i.trackSand,e.trackSand,t),trackBase:gi(i.trackBase,e.trackBase,t),trackDivider:gi(i.trackDivider,e.trackDivider,t),trackEdge:gi(i.trackEdge,e.trackEdge,t)}}function mi(i,e,t){return[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t]}function gi(i,e,t){const n=i>>16&255,s=i>>8&255,r=i&255,a=e>>16&255,o=e>>8&255,c=e&255,l=Math.round(n+(a-n)*t),h=Math.round(s+(o-s)*t),u=Math.round(r+(c-r)*t);return l<<16|h<<8|u}const P0=`
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vUv = uv;
    vec3 pos = position;
    // Two layered sine waves
    float wave1 = sin(pos.x * 0.3 + uTime * 0.8) * 0.4;
    float wave2 = sin(pos.z * 0.5 + uTime * 1.2) * 0.25;
    float wave3 = sin((pos.x + pos.z) * 0.2 + uTime * 0.5) * 0.3;
    pos.y += wave1 + wave2 + wave3;
    vWave = (wave1 + wave2 + wave3) * 0.5 + 0.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,D0=`
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSurf;
  uniform vec3 uFoam;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vec3 color = mix(uDeep, uSurf, vWave);

    // Foam on wave crests
    float foamLine = smoothstep(0.72, 0.82, vWave);
    color = mix(color, uFoam, foamLine * 0.7);

    // Shimmer
    float shimmer = sin(vUv.x * 40.0 + uTime * 2.0) * sin(vUv.y * 40.0 + uTime * 1.5);
    color += vec3(shimmer * 0.03);

    gl_FragColor = vec4(color, 0.88);
  }
`;class L0{mesh;uniforms;scene;constructor(e){this.scene=e,this.uniforms={uTime:{value:0},uDeep:{value:new N(.08,.3,.55)},uSurf:{value:new N(.25,.65,.85)},uFoam:{value:new N(.9,.95,1)}};const t=new Bt(100,300,64,64);t.rotateX(-Math.PI/2);const n=new $t({vertexShader:P0,fragmentShader:D0,uniforms:this.uniforms,transparent:!0,side:pt});this.mesh=new k(t,n),this.mesh.position.set(55,-.3,80),this.scene.add(this.mesh)}setColors(e,t,n){this.uniforms.uDeep.value.set(e[0],e[1],e[2]),this.uniforms.uSurf.value.set(t[0],t[1],t[2]),this.uniforms.uFoam.value.set(n[0],n[1],n[2])}update(e,t){this.uniforms.uTime.value+=e,this.mesh.position.z=t+80}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.scene.remove(this.mesh)}}class I0{clouds;seagulls;scene;skyMesh;skyUniforms;constructor(e){this.scene=e;const t=new vt(150,16,16);this.skyUniforms={uZenith:{value:new N(.35,.6,.92)},uHorizon:{value:new N(.75,.88,.97)},uGround:{value:new N(.92,.87,.78)}};const n=new $t({side:It,uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vLocalPos;
        void main() {
          vLocalPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uZenith;
        uniform vec3 uHorizon;
        uniform vec3 uGround;
        varying vec3 vLocalPos;
        void main() {
          float h = normalize(vLocalPos).y;
          vec3 color = h > 0.0
            ? mix(uHorizon, uZenith, pow(h, 0.6))
            : mix(uHorizon, uGround, pow(-h, 0.4));
          gl_FragColor = vec4(color, 1.0);
        }
      `});this.skyMesh=new k(t,n),this.scene.add(this.skyMesh),this.scene.background=new Ne(8900331),this.clouds=new Re,this.scene.add(this.clouds),this.createClouds(),this.seagulls=new Re,this.scene.add(this.seagulls),this.createSeagulls()}setColors(e,t,n){this.skyUniforms.uZenith.value.set(e[0],e[1],e[2]),this.skyUniforms.uHorizon.value.set(t[0],t[1],t[2]),this.skyUniforms.uGround.value.set(n[0],n[1],n[2])}createClouds(){const e=new j({color:16777215,roughness:1,metalness:0,transparent:!0,opacity:.85});for(let t=0;t<20;t++){const n=new Re,s=3+Math.floor(Math.random()*3);for(let r=0;r<s;r++){const a=1.5+Math.random()*2,o=new vt(a,8,6),c=new k(o,e);c.position.set((r-s/2)*a*.8,(Math.random()-.5)*a*.3,(Math.random()-.5)*a*.5),c.scale.y=.4+Math.random()*.2,n.add(c)}n.position.set((Math.random()-.5)*120,25+Math.random()*20,Math.random()*200),n.userData.speedX=.3+Math.random()*.5,this.clouds.add(n)}}createSeagulls(){const e=new j({color:15658734,roughness:.8}),t=new j({color:14540253,roughness:.7});for(let n=0;n<6;n++){const s=new Re,r=new In(.08,.5,4);r.rotateX(Math.PI/2);const a=new k(r,t);s.add(a);const o=new Tt,c=new Float32Array([0,0,0,.6,.1,0,.3,0,-.15]);o.setAttribute("position",new Gt(c,3)),o.computeVertexNormals();const l=new k(o,e);l.position.set(-.05,0,0),s.add(l);const h=new k(o.clone(),e);h.scale.x=-1,h.position.set(.05,0,0),s.add(h),s.position.set((Math.random()-.5)*40,12+Math.random()*15,Math.random()*150),s.userData.phase=Math.random()*Math.PI*2,s.userData.speedZ=.5+Math.random()*1,s.scale.setScalar(.8+Math.random()*.5),this.seagulls.add(s)}}update(e,t){this.skyMesh.position.z=t;for(const n of this.clouds.children)n.position.x+=n.userData.speedX*e,n.position.x>80&&(n.position.x=-80),n.position.z<t-30&&(n.position.z+=230);for(const n of this.seagulls.children){const s=n.userData.phase,r=n.userData.speedZ;n.position.z+=r*e,n.position.y+=Math.sin(Date.now()*.005+s)*.01,n.rotation.z=Math.sin(Date.now()*.008+s)*.15,n.position.z<t-20&&(n.position.z+=170,n.position.x=(Math.random()-.5)*40)}}dispose(){this.scene.remove(this.clouds),this.scene.remove(this.seagulls)}}class U0{group;scene;totalSpan=200;currentZone="chapadmalal";constructor(e){this.scene=e,this.group=new Re,this.scene.add(this.group),this.populate()}repopulate(){for(;this.group.children.length>0;)this.group.remove(this.group.children[0]);this.populate()}populate(){for(let e=0;e<this.totalSpan;e+=8+Math.random()*10){const n=(Math.random()<.5?-1:1)*(4+Math.random()*4);this.group.add(this.createDecorForZone(n,e))}}createDecorForZone(e,t){switch(this.currentZone){case"rambla":return this.createRamblaDecor(e,t);case"carilo":return this.createCariloDecor(e,t);case"rutaCostera":return this.createRutaDecor(e,t);default:return this.createChapadDecor(e,t)}}createChapadDecor(e,t){const n=Math.random();return n<.22?this.createUmbrella(e,t):n<.36?this.createSandcastle(e,t):n<.5?this.createBeachChair(e,t):n<.62?this.createRock(e,t):n<.74?this.createParrilla(e,t):n<.86?this.createBanderaArgentina(e,t):this.createTermoMate(e,t)}createRamblaDecor(e,t){const n=Math.random();return n<.25?this.createLampPost(e,t):n<.45?this.createParkBench(e,t):n<.6?this.createTrashCan(e,t):n<.75?this.createFlowerPot(e,t):n<.88?this.createBanderaArgentina(e,t):this.createTermoMate(e,t)}createCariloDecor(e,t){const n=Math.random();return n<.3?this.createPineTree(e,t):n<.5?this.createBush(e,t):n<.65?this.createRock(e,t):n<.78?this.createWoodLog(e,t):n<.9?this.createFern(e,t):this.createTermoMate(e,t)}createRutaDecor(e,t){const n=Math.random();return n<.25?this.createMilestone(e,t):n<.45?this.createFence(e,t):n<.6?this.createWildGrass(e,t):n<.75?this.createRock(e,t):n<.88?this.createBanderaArgentina(e,t):this.createTermoMate(e,t)}createUmbrella(e,t){const n=new Re,s=new Ie(.04,.04,2.2,6),r=new j({color:13421772,metalness:.4}),a=new k(s,r);a.position.y=1.1,a.castShadow=!0,n.add(a);const o=[16729190,4500223,16763904,4513126],c=o[Math.floor(Math.random()*o.length)],l=new In(1.2,.6,8,1,!0),h=new j({color:c,roughness:.7,side:pt}),u=new k(l,h);return u.position.y=2.1,u.rotation.x=Math.PI,u.castShadow=!0,n.add(u),n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createSandcastle(e,t){const n=new Re,s=new j({color:15259043,roughness:.9}),r=new Ie(.5,.7,.4,8),a=new k(r,s);a.position.y=.2,a.castShadow=!0,n.add(a);for(let d=0;d<4;d++){const y=d/4*Math.PI*2,b=new Ie(.12,.15,.5,6),E=new k(b,s);E.position.set(Math.cos(y)*.35,.65,Math.sin(y)*.35),E.castShadow=!0,n.add(E);const w=new In(.14,.15,6),A=new k(w,s);A.position.set(Math.cos(y)*.35,.97,Math.sin(y)*.35),n.add(A)}const o=new Ie(.01,.01,.3,4),c=new j({color:9136404}),l=new k(o,c);l.position.set(.35,1.1,0),n.add(l);const h=new Bt(.2,.04),u=new j({color:7711451,side:pt}),f=new k(h,u);f.position.set(.45,1.22,0),n.add(f);const m=new Bt(.2,.04),_=new j({color:16777215,side:pt}),v=new k(m,_);v.position.set(.45,1.18,0),n.add(v);const p=new k(h,u);return p.position.set(.45,1.14,0),n.add(p),n.position.set(e,0,t),n}createBeachChair(e,t){const n=new Re,s=new j({color:12886893,roughness:.8}),r=[3377407,16733508,4508808],a=new j({color:r[Math.floor(Math.random()*r.length)],roughness:.7}),o=new Oe(.6,.04,1),c=new k(o,s);c.position.y=.3,c.rotation.x=-.2,c.castShadow=!0,n.add(c);const l=new Oe(.6,.5,.04),h=new k(l,a);h.position.set(0,.55,-.42),h.rotation.x=-.3,h.castShadow=!0,n.add(h);const u=new Ie(.02,.02,.35,4);for(const f of[-.25,.25])for(const m of[-.4,.4]){const _=new k(u,s);_.position.set(f,.15,m),n.add(_)}return n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createRock(e,t){const n=new Re,s=new j({color:8947848,roughness:.9}),r=1+Math.floor(Math.random()*3);for(let a=0;a<r;a++){const o=.2+Math.random()*.4,c=new Bs(o,0),l=new k(c,s);l.position.set((Math.random()-.5)*.5,o*.5,(Math.random()-.5)*.5),l.rotation.set(Math.random(),Math.random(),Math.random()),l.scale.y=.6+Math.random()*.4,l.castShadow=!0,n.add(l)}return n.position.set(e,0,t),n}createParrilla(e,t){const n=new Re,s=new j({color:4473924,metalness:.6,roughness:.4}),r=new j({color:9127187,roughness:.9}),a=new j({color:2759178,roughness:.95}),o=new j({color:16729344,emissive:16720384,emissiveIntensity:.4,roughness:.8}),c=new Oe(1.2,.6,.8),l=new k(c,r);l.position.y=.3,l.castShadow=!0,n.add(l);const h=new Oe(1,.03,.6),u=new k(h,s);u.position.y=.62,u.castShadow=!0,n.add(u);const f=new Oe(.9,.08,.5),m=new k(f,a);m.position.y=.55,n.add(m);for(let p=0;p<3;p++){const d=new vt(.05,4,4),y=new k(d,o);y.position.set((Math.random()-.5)*.6,.58,(Math.random()-.5)*.3),n.add(y)}const _=new Ie(.08,.12,.8,6),v=new k(_,r);return v.position.set(-.5,.9,0),v.castShadow=!0,n.add(v),n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createBanderaArgentina(e,t){const n=new Re,s=new j({color:9136404,roughness:.7}),r=new Ie(.03,.04,2.5,6),a=new k(r,s);a.position.y=1.25,a.castShadow=!0,n.add(a);const o=new j({color:7711451,side:pt}),c=new j({color:16777215,side:pt}),l=new j({color:16167950,side:pt}),h=new Bt(.8,.15),u=new k(h,o);u.position.set(.4,2.35,0),n.add(u);const f=new k(h,c);f.position.set(.4,2.2,0),n.add(f);const m=new k(h,o);m.position.set(.4,2.05,0),n.add(m);const _=new $i(.06,10),v=new k(_,l);return v.position.set(.4,2.2,.01),n.add(v),n.position.set(e,0,t),n}createTermoMate(e,t){const n=new Re,s=[7711451,16737095,3329330],r=new j({color:s[Math.floor(Math.random()*s.length)],roughness:.9}),a=new Oe(.8,.02,1.2),o=new k(a,r);o.position.y=.01,n.add(o);const c=new j({color:2263842,metalness:.3,roughness:.5}),l=new Ie(.08,.08,.5,8),h=new k(l,c);h.position.set(-.15,.27,.1),h.castShadow=!0,n.add(h);const u=new j({color:3355443,roughness:.6}),f=new Ie(.06,.085,.08,8),m=new k(f,u);m.position.set(-.15,.54,.1),n.add(m);const _=new j({color:7029795,roughness:.8}),v=new vt(.1,8,6);v.scale(1,.8,1);const p=new k(v,_);p.position.set(.15,.1,-.1),p.castShadow=!0,n.add(p);const d=new j({color:12632256,metalness:.7,roughness:.3}),y=new Ie(.012,.015,.22,5),b=new k(y,d);return b.position.set(.15,.2,-.1),b.rotation.z=-.2,n.add(b),n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createLampPost(e,t){const n=new Re,s=new j({color:5592405,metalness:.5,roughness:.4}),r=new j({color:16777164,emissive:16777096,emissiveIntensity:.3,roughness:.5}),a=new Ie(.05,.07,3.5,6),o=new k(a,s);o.position.y=1.75,o.castShadow=!0,n.add(o);const c=new Ie(.03,.03,.6,5);c.rotateZ(Math.PI/2);const l=new k(c,s);l.position.set(.3,3.4,0),n.add(l);const h=new vt(.15,8,6),u=new k(h,r);return u.position.set(.55,3.35,0),n.add(u),n.position.set(e,0,t),n}createParkBench(e,t){const n=new Re,s=new j({color:9136404,roughness:.8}),r=new j({color:5592405,metalness:.5,roughness:.4}),a=new Oe(1.2,.06,.4),o=new k(a,s);o.position.y=.45,o.castShadow=!0,n.add(o);const c=new Oe(1.2,.4,.04),l=new k(c,s);l.position.set(0,.7,-.18),l.castShadow=!0,n.add(l);const h=new Oe(.06,.45,.3);for(const u of[-.5,.5]){const f=new k(h,r);f.position.set(u,.22,0),n.add(f)}return n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createTrashCan(e,t){const n=new Re,s=new j({color:3368499,roughness:.6}),r=new Ie(.2,.25,.7,8),a=new k(r,s);a.position.y=.35,a.castShadow=!0,n.add(a);const o=new Ie(.22,.22,.05,8),c=new k(o,s);return c.position.y=.72,n.add(c),n.position.set(e,0,t),n}createFlowerPot(e,t){const n=new Re,s=new j({color:12080435,roughness:.8}),r=[16729224,16755234,16720452,13387007],a=new j({color:r[Math.floor(Math.random()*r.length)],roughness:.6}),o=new Ie(.25,.18,.35,8),c=new k(o,s);c.position.y=.18,c.castShadow=!0,n.add(c);for(let f=0;f<5;f++){const m=new vt(.08,5,4),_=new k(m,a),v=f/5*Math.PI*2;_.position.set(Math.cos(v)*.12,.42,Math.sin(v)*.12),n.add(_)}const l=new j({color:3385907,roughness:.7}),h=new vt(.18,6,5),u=new k(h,l);return u.position.y=.4,u.scale.y=.6,n.add(u),n.position.set(e,0,t),n}createPineTree(e,t){const n=new Re,s=new j({color:5913114,roughness:.85}),r=new j({color:1722906,roughness:.7}),a=new Ie(.12,.18,2.5,6),o=new k(a,s);o.position.y=1.25,o.castShadow=!0,n.add(o);for(let c=0;c<3;c++){const l=1-c*.25,h=new In(l,1.2,7),u=new k(h,r);u.position.y=2+c*.8,u.castShadow=!0,n.add(u)}return n.position.set(e,0,t),n}createBush(e,t){const n=new Re,s=new j({color:2972186,roughness:.8}),r=2+Math.floor(Math.random()*3);for(let a=0;a<r;a++){const o=.3+Math.random()*.3,c=new vt(o,7,5),l=new k(c,s);l.position.set((Math.random()-.5)*.5,o*.7,(Math.random()-.5)*.5),l.scale.y=.7,l.castShadow=!0,n.add(l)}return n.position.set(e,0,t),n}createWoodLog(e,t){const n=new Re,s=new j({color:5913114,roughness:.9}),r=new Ie(.15,.18,1.5,6);r.rotateZ(Math.PI/2+(Math.random()-.5)*.3);const a=new k(r,s);return a.position.y=.15,a.castShadow=!0,n.add(a),n.position.set(e,0,t),n}createFern(e,t){const n=new Re,s=new j({color:3832362,roughness:.7,side:pt});for(let r=0;r<6;r++){const a=r/6*Math.PI*2,o=new Bt(.2,.8),c=new k(o,s);c.position.set(Math.cos(a)*.15,.4,Math.sin(a)*.15),c.rotation.set(-.6,a,0),n.add(c)}return n.position.set(e,0,t),n}createMilestone(e,t){const n=new Re,s=new j({color:14540253,roughness:.6}),r=new j({color:3368618,roughness:.5}),a=new Ie(.04,.04,1.5,5),o=new k(a,s);o.position.y=.75,o.castShadow=!0,n.add(o);const c=new Oe(.6,.3,.04),l=new k(c,r);return l.position.y=1.4,l.castShadow=!0,n.add(l),n.position.set(e,0,t),n}createFence(e,t){const n=new Re,s=new j({color:9072720,roughness:.85});for(let o=0;o<3;o++){const c=new Ie(.04,.05,.8,5),l=new k(c,s);l.position.set(o*.8-.8,.4,0),l.castShadow=!0,n.add(l)}const r=new Ie(.02,.02,2,5);r.rotateZ(Math.PI/2);const a=new k(r,s);return a.position.y=.6,n.add(a),n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI,n}createWildGrass(e,t){const n=new Re,s=new j({color:9083456,roughness:.8,side:pt});for(let r=0;r<8;r++){const a=new Bt(.05,.5+Math.random()*.3),o=new k(a,s);o.position.set((Math.random()-.5)*.6,.25,(Math.random()-.5)*.6),o.rotation.set(0,Math.random()*Math.PI,(Math.random()-.5)*.3),n.add(o)}return n.position.set(e,0,t),n}update(e){for(const t of this.group.children)t.position.z<e-20&&(t.position.z+=this.totalSpan)}dispose(){this.scene.remove(this.group)}}const N0=new j({color:9136404,roughness:.85}),F0=new j({color:2984774,roughness:.7,side:pt});function O0(){const i=new Re,e=5,t=.7;let n=0;for(let c=0;c<e;c++){const l=.18-c*.02,h=new Ie(l-.02,l,t,6),u=new k(h,N0);n+=c>1?.08:.02,u.position.set(n,c*t+t/2,0),u.rotation.z=-c*.06,u.castShadow=!0,i.add(u)}const s=e*t,r=n,a=new j({color:7029795,roughness:.8});for(let c=0;c<3;c++){const l=new vt(.08,6,6),h=new k(l,a),u=c/3*Math.PI*2;h.position.set(r+Math.cos(u)*.12,s-.1,Math.sin(u)*.12),i.add(h)}const o=6;for(let c=0;c<o;c++){const l=c/o*Math.PI*2,h=new Bt(.5,1.8),u=new k(h,F0);u.position.set(r+Math.cos(l)*.3,s+.3,Math.sin(l)*.3),u.rotation.set(-.5+Math.random()*.3,l,.2*Math.sin(l)),u.castShadow=!0,i.add(u)}return i}class B0{ocean;sky;beachDecor;palmTrees;scene;palmSpan=200;lastAppliedZone="chapadmalal";constructor(e){this.scene=e,this.ocean=new L0(this.scene),this.sky=new I0(this.scene),this.beachDecor=new U0(this.scene),this.palmTrees=new Re,this.scene.add(this.palmTrees),this.createPalms()}createPalms(){for(let e=0;e<this.palmSpan;e+=10+Math.random()*6)for(const t of[-1,1]){const n=5.5+Math.random()*3,s=O0();s.position.set(t*n,0,e),s.rotation.y=Math.random()*Math.PI*2;const r=.7+Math.random()*.5;s.scale.setScalar(r),this.palmTrees.add(s)}}applyZoneColors(e){this.sky.setColors(e.skyZenith,e.skyHorizon,e.skyGround),this.ocean.setColors(e.oceanDeep,e.oceanSurf,e.oceanFoam);const t=this.scene.fog;t?t.color.setHex(e.fog):this.scene.fog=new Fs(e.fog,40,120),this.scene.background instanceof Ne&&this.scene.background.setHex(e.background)}switchDecorZone(e){e!==this.lastAppliedZone&&(this.lastAppliedZone=e,this.beachDecor.currentZone=e,this.beachDecor.repopulate())}reset(){for(;this.palmTrees.children.length>0;)this.palmTrees.remove(this.palmTrees.children[0]);this.createPalms(),this.lastAppliedZone="chapadmalal",this.beachDecor.currentZone="chapadmalal",this.beachDecor.repopulate()}update(e,t){this.ocean.update(t,e),this.sky.update(t,e),this.beachDecor.update(e);for(const n of this.palmTrees.children)n.position.z<e-20&&(n.position.z+=this.palmSpan)}dispose(){this.ocean.dispose(),this.sky.dispose(),this.beachDecor.dispose(),this.scene.remove(this.palmTrees)}}const _i=60;class Ar{particles;velocities;lifetimes;active=!1;elapsed=0;duration=.6;scene;constructor(e){this.scene=e;const t=new Tt,n=new Float32Array(_i*3),s=new Float32Array(_i*3);this.velocities=new Float32Array(_i*3),this.lifetimes=new Float32Array(_i),t.setAttribute("position",new Gt(n,3)),t.setAttribute("color",new Gt(s,3));const r=new Fa({size:.15,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1});this.particles=new zc(t,r),this.particles.visible=!1,this.scene.add(this.particles)}emit(e,t,n,s){const r=this.particles.geometry.attributes.position.array,a=this.particles.geometry.attributes.color.array;for(let o=0;o<_i;o++){const c=o*3;r[c]=e,r[c+1]=t,r[c+2]=n;const l=Math.random()*Math.PI*2,h=Math.random()*Math.PI,u=2+Math.random()*4;this.velocities[c]=Math.sin(h)*Math.cos(l)*u,this.velocities[c+1]=Math.abs(Math.cos(h))*u*1.2,this.velocities[c+2]=Math.sin(h)*Math.sin(l)*u,this.lifetimes[o]=.3+Math.random()*.4,a[c]=s.r*(.8+Math.random()*.4),a[c+1]=s.g*(.8+Math.random()*.4),a[c+2]=s.b*(.8+Math.random()*.4)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.particles.visible=!0,this.active=!0,this.elapsed=0}update(e){if(!this.active)return;if(this.elapsed+=e,this.elapsed>this.duration){this.active=!1,this.particles.visible=!1;return}const t=this.particles.geometry.attributes.position.array,n=this.elapsed/this.duration;for(let s=0;s<_i;s++){const r=s*3;this.elapsed<this.lifetimes[s]&&(t[r]+=this.velocities[r]*e,t[r+1]+=this.velocities[r+1]*e,this.velocities[r+1]-=9.8*e,t[r+2]+=this.velocities[r+2]*e)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.material.opacity=1-n}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.scene.remove(this.particles)}}const Gi=40;class G0{points;ages;maxAge=.8;spawnTimer=0;spawnRate=.03;nextSlot=0;scene;constructor(e){this.scene=e;const t=new Tt,n=new Float32Array(Gi*3);this.ages=new Float32Array(Gi).fill(this.maxAge+1),t.setAttribute("position",new Gt(n,3));const s=new Fa({size:.2,color:16115402,transparent:!0,opacity:.5,depthWrite:!1});this.points=new zc(t,s),this.scene.add(this.points)}update(e,t,n,s,r){const a=this.points.geometry.attributes.position.array;for(let c=0;c<Gi;c++)this.ages[c]+=e;if(this.spawnTimer+=e,r&&this.spawnTimer>=this.spawnRate){this.spawnTimer=0;const c=this.nextSlot*3;a[c]=t+(Math.random()-.5)*.6,a[c+1]=n+.05,a[c+2]=s-.5+(Math.random()-.5)*.3,this.ages[this.nextSlot]=0,this.nextSlot=(this.nextSlot+1)%Gi}for(let c=0;c<Gi;c++)if(this.ages[c]<this.maxAge){const l=c*3;a[l+1]+=.3*e}this.points.geometry.attributes.position.needsUpdate=!0;const o=this.points.material;o.opacity=.4}dispose(){this.points.geometry.dispose(),this.points.material.dispose(),this.scene.remove(this.points)}}class z0{intensity=0;decay=8;offsetX=0;offsetY=0;trigger(e=.5){this.intensity=e}update(e){if(this.intensity<=.01){this.offsetX=0,this.offsetY=0,this.intensity=0;return}this.offsetX=(Math.random()-.5)*2*this.intensity,this.offsetY=(Math.random()-.5)*2*this.intensity,this.intensity*=Math.max(0,1-this.decay*e)}reset(){this.intensity=0,this.offsetX=0,this.offsetY=0}}class V0{ctx=null;masterGain=null;musicGain=null;sfxGain=null;_muted=!1;musicOscs=[];musicPlaying=!1;musicInterval=null;get muted(){return this._muted}init(){this.ctx||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.6,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.7,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.18,this.musicGain.connect(this.masterGain))}ensureCtx(){return this.ctx||this.init(),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}play(e){if(this._muted)return;const t=this.ensureCtx(),n=t.currentTime;switch(e){case"jump":this.playJump(t,n);break;case"land":this.playLand(t,n);break;case"slide":this.playSlide(t,n);break;case"collect":this.playCollect(t,n);break;case"crash":this.playCrash(t,n);break;case"laneSwitch":this.playLaneSwitch(t,n);break;case"highScore":this.playHighScore(t,n);break;case"uiClick":this.playUIClick(t,n);break;case"powerUp":this.playPowerUp(t,n);break;case"shieldBreak":this.playShieldBreak(t,n);break;case"comboUp":this.playComboUp(t,n);break;case"comboBreak":this.playComboBreak(t,n);break}}playJump(e,t){const n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(300,t),n.frequency.exponentialRampToValueAtTime(600,t+.15),s.gain.setValueAtTime(.3,t),s.gain.exponentialRampToValueAtTime(.01,t+.2),n.connect(s).connect(this.sfxGain),n.start(t),n.stop(t+.2)}playLand(e,t){const n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(60,t+.12),s.gain.setValueAtTime(.25,t),s.gain.exponentialRampToValueAtTime(.01,t+.12),n.connect(s).connect(this.sfxGain),n.start(t),n.stop(t+.15)}playSlide(e,t){const n=e.sampleRate*.3,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*(1-l/n);const a=e.createBufferSource();a.buffer=s;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(2e3,t),o.frequency.exponentialRampToValueAtTime(800,t+.25),o.Q.value=2;const c=e.createGain();c.gain.setValueAtTime(.2,t),c.gain.exponentialRampToValueAtTime(.01,t+.3),a.connect(o).connect(c).connect(this.sfxGain),a.start(t),a.stop(t+.3)}playCollect(e,t){const n=e.createOscillator(),s=e.createOscillator(),r=e.createGain();n.type="sine",n.frequency.value=880,s.type="sine",s.frequency.value=1320,r.gain.setValueAtTime(.2,t),r.gain.exponentialRampToValueAtTime(.01,t+.15),n.connect(r),s.connect(r),r.connect(this.sfxGain),n.start(t),s.start(t),n.stop(t+.15),s.stop(t+.15)}playCrash(e,t){const n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(100,t),n.frequency.exponentialRampToValueAtTime(40,t+.4),s.gain.setValueAtTime(.5,t),s.gain.exponentialRampToValueAtTime(.01,t+.4),n.connect(s).connect(this.sfxGain),n.start(t),n.stop(t+.45);const r=e.sampleRate*.3,a=e.createBuffer(1,r,e.sampleRate),o=a.getChannelData(0);for(let h=0;h<r;h++)o[h]=(Math.random()*2-1)*(1-h/r)**2;const c=e.createBufferSource();c.buffer=a;const l=e.createGain();l.gain.setValueAtTime(.35,t),l.gain.exponentialRampToValueAtTime(.01,t+.3),c.connect(l).connect(this.sfxGain),c.start(t),c.stop(t+.3)}playLaneSwitch(e,t){const n=e.createOscillator(),s=e.createGain();n.type="triangle",n.frequency.setValueAtTime(400,t),n.frequency.exponentialRampToValueAtTime(600,t+.06),s.gain.setValueAtTime(.12,t),s.gain.exponentialRampToValueAtTime(.01,t+.08),n.connect(s).connect(this.sfxGain),n.start(t),n.stop(t+.08)}playHighScore(e,t){[523,659,784,1047].forEach((s,r)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=s;const c=t+r*.12;o.gain.setValueAtTime(0,c),o.gain.linearRampToValueAtTime(.2,c+.03),o.gain.exponentialRampToValueAtTime(.01,c+.3),a.connect(o).connect(this.sfxGain),a.start(c),a.stop(c+.35)})}playUIClick(e,t){const n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.value=700,s.gain.setValueAtTime(.15,t),s.gain.exponentialRampToValueAtTime(.01,t+.06),n.connect(s).connect(this.sfxGain),n.start(t),n.stop(t+.06)}playPowerUp(e,t){[440,554,659,880].forEach((s,r)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=s;const c=t+r*.08;o.gain.setValueAtTime(0,c),o.gain.linearRampToValueAtTime(.2,c+.02),o.gain.exponentialRampToValueAtTime(.01,c+.25),a.connect(o).connect(this.sfxGain),a.start(c),a.stop(c+.3)})}playShieldBreak(e,t){const n=e.createOscillator(),s=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(800,t),n.frequency.exponentialRampToValueAtTime(200,t+.3),s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.01,t+.35),n.connect(s).connect(this.sfxGain),n.start(t),n.stop(t+.35)}playComboUp(e,t){const n=e.createOscillator(),s=e.createOscillator(),r=e.createGain();n.type="sine",n.frequency.setValueAtTime(600,t),n.frequency.exponentialRampToValueAtTime(1200,t+.15),s.type="sine",s.frequency.setValueAtTime(900,t),s.frequency.exponentialRampToValueAtTime(1800,t+.15),r.gain.setValueAtTime(.15,t),r.gain.exponentialRampToValueAtTime(.01,t+.2),n.connect(r),s.connect(r),r.connect(this.sfxGain),n.start(t),s.start(t),n.stop(t+.2),s.stop(t+.2)}playComboBreak(e,t){const n=e.createOscillator(),s=e.createGain();n.type="triangle",n.frequency.setValueAtTime(400,t),n.frequency.exponentialRampToValueAtTime(150,t+.2),s.gain.setValueAtTime(.1,t),s.gain.exponentialRampToValueAtTime(.01,t+.25),n.connect(s).connect(this.sfxGain),n.start(t),n.stop(t+.25)}currentChords=[[220,261.63,329.63],[174.61,220,261.63],[261.63,329.63,392],[196,246.94,293.66]];currentTempo=214;currentBassType="triangle";setMusicConfig(e,t,n){this.currentChords=e,this.currentTempo=t,this.currentBassType=n,this.musicPlaying&&(this.stopMusic(),this.startMusic())}startMusic(){if(this._muted||this.musicPlaying)return;const e=this.ensureCtx();this.musicPlaying=!0;let t=0,n=0;const s=()=>{if(!this.musicPlaying||this._muted)return;const r=e.currentTime,a=this.currentChords[t%this.currentChords.length],o=e.createOscillator(),c=e.createGain();o.type=this.currentBassType,o.frequency.value=a[0]/2,c.gain.setValueAtTime(.15,r),c.gain.exponentialRampToValueAtTime(.01,r+.35),o.connect(c).connect(this.musicGain),o.start(r),o.stop(r+.4),this.musicOscs.push(o);const l=a[n%a.length],h=e.createOscillator(),u=e.createGain();h.type="sine",h.frequency.value=l,u.gain.setValueAtTime(.1,r),u.gain.exponentialRampToValueAtTime(.01,r+.2),h.connect(u).connect(this.musicGain),h.start(r),h.stop(r+.25),this.musicOscs.push(h),n++,n%4===0&&(t=(t+1)%this.currentChords.length),this.musicOscs=this.musicOscs.filter(f=>{try{return f.context.currentTime<e.currentTime+1}catch{return!1}})};s(),this.musicInterval=setInterval(s,this.currentTempo)}stopMusic(){this.musicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null);for(const e of this.musicOscs)try{e.stop()}catch{}this.musicOscs=[]}vibrate(e){this._muted||"vibrate"in navigator&&navigator.vibrate(e)}vibrateCollect(){this.vibrate(30)}vibrateCrash(){this.vibrate([50,30,80])}vibrateLaneSwitch(){this.vibrate(15)}toggleMute(){return this._muted=!this._muted,this.masterGain&&(this.masterGain.gain.value=this._muted?0:.6),this._muted&&this.stopMusic(),this._muted}}const ct=new V0,k0=document.getElementById("start-screen"),nc=document.getElementById("game-over"),ic=document.getElementById("hud"),sc=document.getElementById("score-label"),rc=document.getElementById("hi-label"),H0=document.getElementById("final-score"),W0=document.getElementById("high-score"),X0=document.getElementById("btn-play"),q0=document.getElementById("btn-restart"),ac=document.getElementById("btn-sound"),Xn=document.getElementById("combo-display"),Z0=document.getElementById("combo-count"),oc=document.getElementById("combo-multiplier"),Es=document.getElementById("powerup-bar"),zi=document.getElementById("section-announce"),xi=document.getElementById("zone-announce"),Y0=document.getElementById("zone-name"),cc=new Ne(16766720),K0=new Ne(16729156),lc=new Ne(4500223),$0=new Ne(65450),j0={magnet:"M",shield:"S",multiplier:"x2",megawave:"W",slowmo:"SL"},hc={magnet:"#ff4444",shield:"#44aaff",multiplier:"#ffdd00",megawave:"#00ffaa",slowmo:"#cc66ff"},J0={magnet:"Iman",shield:"Escudo",multiplier:"x2",megawave:"Mega Ola",slowmo:"Slow Mo"},Q0={rockField:"Campo de Rocas",coinCorridor:"Pasillo de Medialunas",slalom:"Slalom",rampJump:"Rampa!",bonus:"Bonus!!"};class eg{sceneManager;input=null;player;track;obstacles;collectibles;score;difficulty;environment;powerUps;combo;patterns;zones;collectParticles;crashParticles;powerUpParticles;sandTrail;screenShake;state="menu";animId=0;cameraTargetZ=0;baseFov=60;prevPlayerState="running";sectionAnnounceTimer=0;zoneAnnounceTimer=0;constructor(){this.sceneManager=new vm,this.input=new ym,this.player=new Lm(this.sceneManager.scene),this.track=new Im(this.sceneManager.scene),this.obstacles=new i0(this.sceneManager.scene),this.collectibles=new a0(this.sceneManager.scene),this.score=new o0,this.difficulty=new h0,this.environment=new B0(this.sceneManager.scene),this.powerUps=new f0(this.sceneManager.scene),this.combo=new _0,this.patterns=new E0,this.zones=new R0,this.collectParticles=new Ar(this.sceneManager.scene),this.crashParticles=new Ar(this.sceneManager.scene),this.powerUpParticles=new Ar(this.sceneManager.scene),this.sandTrail=new G0(this.sceneManager.scene),this.screenShake=new z0,rc.textContent=`HI: ${this.score.hiScore}`,X0.addEventListener("click",()=>{ct.init(),ct.play("uiClick"),this.start()}),q0.addEventListener("click",()=>{ct.play("uiClick"),this.start()}),window.addEventListener("keydown",e=>{e.code==="Space"&&this.state!=="playing"&&(e.preventDefault(),ct.init(),ct.play("uiClick"),this.start())}),ac.addEventListener("click",()=>{ct.init();const e=ct.toggleMute();ac.textContent=e?"🔇":"🔊"}),Ct.on("input:swipe",()=>{this.state==="playing"&&(ct.play("laneSwitch"),ct.vibrateLaneSwitch())}),this.sceneManager.render()}start(){this.player.reset(),this.track.reset(),this.obstacles.reset(),this.collectibles.reset(),this.score.reset(),this.difficulty.reset(),this.screenShake.reset(),this.environment.reset(),this.powerUps.reset(),this.combo.reset(),this.patterns.reset(),this.zones.reset(),this.obstacles.currentZone="chapadmalal";const e=this.zones.getBlendedColors();this.environment.applyZoneColors(e),this.track.setColors(e.trackSand,e.trackBase,e.trackDivider,e.trackEdge),k0.classList.add("hidden"),nc.classList.remove("active"),ic.classList.add("active"),Xn.classList.remove("active"),Es.innerHTML="",zi.classList.remove("active"),xi.classList.remove("active"),this.state="playing",this.cameraTargetZ=0,this.prevPlayerState="running",this.sectionAnnounceTimer=0,this.zoneAnnounceTimer=0,ct.startMusic(),this.animId&&cancelAnimationFrame(this.animId),this.loop()}loop=()=>{if(this.state!=="playing")return;this.animId=requestAnimationFrame(this.loop);const e=Math.min(this.sceneManager.getDelta(),.05);this.difficulty.update(e);const t=this.powerUps.getSpeedMultiplier(),n=this.difficulty.speed*t;this.player.update(e,n);const s=this.player.state;s!==this.prevPlayerState&&(s==="jumping"&&ct.play("jump"),s==="sliding"&&ct.play("slide"),s==="running"&&this.prevPlayerState==="jumping"&&ct.play("land"),this.prevPlayerState=s),this.track.update(this.player.posZ),this.obstacles.update(this.player.posZ,n),this.collectibles.update(this.player.posZ,e,this.powerUps.isMagnetActive(),this.player.mesh.position.x),this.environment.update(this.player.posZ,e),this.powerUps.update(this.player.posZ,e),this.updateZones(e),this.updatePatterns(),this.collectParticles.update(e),this.crashParticles.update(e),this.powerUpParticles.update(e),this.sandTrail.update(e,this.player.mesh.position.x,this.player.mesh.position.y,this.player.posZ,this.player.state==="running"||this.player.state==="sliding"),this.screenShake.update(e),this.combo.update(e),this.combo.brokeThisFrame&&this.combo.combo===0&&ct.play("comboBreak");const r=this.combo.multiplier,a=this.powerUps.getScoreMultiplier(),o=r*a;this.score.displayMultiplier=o,this.score.addDistance(n*e*.5,o);const c=this.powerUps.checkCollection(this.player.mesh.position.x,this.player.mesh.position.y,this.player.posZ);c&&this.onPowerUpCollected(c);const l=this.collectibles.checkCollection(this.player.mesh.position.x,this.player.mesh.position.y,this.player.posZ,this.powerUps.isActive("megawave"));if(l>0&&(this.score.addPoints(l,o),this.combo.addCollect(this.collectibles.lastCollectedCount),ct.play("collect"),ct.vibrateCollect(),this.collectParticles.emit(this.player.mesh.position.x,this.player.mesh.position.y+1,this.player.posZ,cc),this.combo.levelUpThisFrame&&ct.play("comboUp")),this.checkCollisions()){if(this.powerUps.useShield())ct.play("shieldBreak"),this.player.setShieldVisible(!1),this.screenShake.trigger(.3),this.crashParticles.emit(this.player.mesh.position.x,this.player.mesh.position.y+.8,this.player.posZ,lc);else if(!this.powerUps.isInvincible()){this.gameOver();return}}this.player.setShieldVisible(this.powerUps.isActive("shield")),this.updateCamera(e),this.updateHUD(e),this.sceneManager.render()};onPowerUpCollected(e){ct.play("powerUp"),ct.vibrateCollect();const t=e==="megawave"?$0:e==="shield"?lc:cc;this.powerUpParticles.emit(this.player.mesh.position.x,this.player.mesh.position.y+1,this.player.posZ,t),this.screenShake.trigger(.2),e==="shield"&&this.player.setShieldVisible(!0)}updatePatterns(){const e=this.patterns.getPatternAt(this.player.posZ);e&&this.spawnPattern(e),this.sectionAnnounceTimer>0&&(this.sectionAnnounceTimer-=.016,this.sectionAnnounceTimer<=0&&zi.classList.remove("active"))}spawnPattern(e){const t=this.patterns.getPatternStartZ();this.obstacles.suppressUntil(t+e.length+15),this.collectibles.suppressUntil(t+e.length+10),e.obstacles.length>0&&this.obstacles.spawnFromPattern(e.obstacles,t),e.collectibles.length>0&&this.collectibles.spawnFromPattern(e.collectibles,t),e.hasRamp&&this.player.rampJump();const n=Q0[e.type]||e.type;zi.textContent=n,zi.classList.add("active"),this.sectionAnnounceTimer=2}updateZones(e){const t=this.zones.isTransitioning;if(this.zones.update(this.player.posZ,e),this.zones.isTransitioning||this.zones.zoneChangedThisFrame||t&&!this.zones.isTransitioning){const n=this.zones.getBlendedColors();this.environment.applyZoneColors(n),this.track.setColors(n.trackSand,n.trackBase,n.trackDivider,n.trackEdge)}if(this.zones.zoneChangedThisFrame){Y0.textContent=this.zones.newZoneName,xi.classList.remove("active"),xi.offsetWidth,xi.classList.add("active"),this.zoneAnnounceTimer=3;const n=this.zones.nextZone;if(n){this.obstacles.currentZone=n.id,this.environment.switchDecorZone(n.id);const s=this.zones.getBlendedMusicConfig();ct.setMusicConfig(s.chords,s.tempo,s.bassType)}}this.zoneAnnounceTimer>0&&(this.zoneAnnounceTimer-=e,this.zoneAnnounceTimer<=0&&xi.classList.remove("active"))}updateHUD(e){const t=this.score.displayMultiplier;t>1?sc.textContent=`${this.score.score} pts (x${t})`:sc.textContent=`${this.score.score} pts`,this.combo.combo>=3?(Xn.classList.add("active"),Z0.textContent=`${this.combo.combo} combo`,this.combo.multiplier>1?oc.textContent=`x${this.combo.multiplier}`:oc.textContent="",this.collectibles.lastCollectedCount>0&&(Xn.classList.remove("pulse"),Xn.offsetWidth,Xn.classList.add("pulse"))):Xn.classList.remove("active"),this.updatePowerUpBar()}updatePowerUpBar(){const e=this.powerUps.getActiveEffects();Es.innerHTML="";for(const t of e){const n=document.createElement("div");n.className="powerup-indicator";const s=document.createElement("span");s.className="icon",s.textContent=j0[t.type],s.style.color=hc[t.type],n.appendChild(s);const r=document.createElement("span");if(r.textContent=J0[t.type],n.appendChild(r),t.type!=="shield"){const a=document.createElement("div");a.className="timer-bar";const o=document.createElement("div");o.className="timer-fill";const c=Math.max(0,t.remaining/t.duration*100);o.style.width=`${c}%`,o.style.background=hc[t.type],a.appendChild(o),n.appendChild(a)}Es.appendChild(n)}}checkCollisions(){const e=this.obstacles.getActiveNear(this.player.posZ);if(e.length===0)return!1;const t=this.player.getHitbox();for(const n of e){const s=n.mesh;let r,a,o;if(s.userData.boxW)r=s.userData.boxW/2,a=s.userData.boxH/2,o=s.userData.boxD/2;else{const m=s.geometry.parameters;r=m.width/2,a=m.height/2,o=m.depth/2}const c=s.position.x,l=s.position.y,h=s.position.z,u=new Qn(new N(c-r,l-a,h-o),new N(c+r,l+a,h+o));if(t.intersectsBox(u)){if(n.type==="high"&&this.player.state==="sliding"||n.type==="low"&&this.player.mesh.position.y>.8)continue;return!0}}return!1}updateCamera(e){const t=this.sceneManager.camera,n=(this.difficulty.speed-12)/18,s=this.baseFov+n*12;t.fov=jn(t.fov,s,2*e),t.updateProjectionMatrix(),this.cameraTargetZ=this.player.posZ;const r=jn(t.position.z,this.cameraTargetZ-10,5*e);t.position.set(jn(t.position.x,this.player.mesh.position.x*.3,3*e)+this.screenShake.offsetX,jn(t.position.y,6+this.player.mesh.position.y*.3,3*e)+this.screenShake.offsetY,r),t.lookAt(this.player.mesh.position.x*.5,1.5+this.player.mesh.position.y*.3,this.cameraTargetZ+10)}gameOver(){this.state="gameover",cancelAnimationFrame(this.animId),this.player.die(),ct.play("crash"),ct.vibrateCrash(),ct.stopMusic(),Xn.classList.remove("active"),Es.innerHTML="",zi.classList.remove("active"),xi.classList.remove("active"),this.crashParticles.emit(this.player.mesh.position.x,this.player.mesh.position.y+.8,this.player.posZ,K0),this.screenShake.trigger(.6);let e=0;const t=()=>{e++;const n=.016;this.crashParticles.update(n),this.screenShake.update(n),this.updateCamera(n),this.sceneManager.render(),e<30?requestAnimationFrame(t):this.showGameOverUI()};t()}showGameOverUI(){const e=this.score.finalise();e&&ct.play("highScore"),H0.textContent=`Puntos: ${this.score.score}`,W0.textContent=e?`Nuevo Record! ${this.score.hiScore}`:`Record: ${this.score.hiScore}`,rc.textContent=`HI: ${this.score.hiScore}`,ic.classList.remove("active"),nc.classList.add("active")}dispose(){this.input?.dispose(),this.sceneManager.dispose(),this.player.dispose(),this.track.dispose(),this.obstacles.dispose(),this.collectibles.dispose(),this.environment.dispose(),this.powerUps.dispose(),this.collectParticles.dispose(),this.crashParticles.dispose(),this.powerUpParticles.dispose(),this.sandTrail.dispose()}}new eg;
