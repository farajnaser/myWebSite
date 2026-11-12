(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const uo="187",Vd=0,tl=1,Wd=2,Zs=1,Tc=2,Ki=3,ni=0,Gt=1,un=2,wi=0,ji=1,nl=2,il=3,sl=4,Xd=5,bi=100,qd=101,Yd=102,$d=103,Kd=104,Zd=200,Jd=201,Qd=202,jd=203,Ac=204,wc=205,eu=206,tu=207,nu=208,iu=209,su=210,ru=211,au=212,ou=213,lu=214,xa=0,va=1,Sa=2,ns=3,Ma=4,Ea=5,ya=6,ba=7,Rc=0,cu=1,du=2,Rn=0,Cc=1,Pc=2,Lc=3,Ic=4,Dc=5,Nc=6,Uc=7,Fc=300,Pi=301,is=302,Lr=303,Ir=304,Ta=1e3,wn=1001,Aa=1002,Ct=1003,uu=1004,xs=1005,zt=1006,Dr=1007,Vn=1008,qt=1009,Oc=1010,Bc=1011,ss=1012,fo=1013,gn=1014,fn=1015,_n=1016,ho=1017,po=1018,Li=1020,kc=35902,zc=35899,Gc=1021,Hc=1022,hn=1023,qn=1026,Wn=1027,Vc=1028,mo=1029,ii=1030,go=1031,_o=1033,Js=33776,Qs=33777,js=33778,er=33779,wa=35840,Ra=35841,Ca=35842,Pa=35843,La=36196,Ia=37492,Da=37496,Na=37488,Ua=37489,sr=37490,Fa=37491,Oa=37808,Ba=37809,ka=37810,za=37811,Ga=37812,Ha=37813,Va=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,$a=37819,Ka=37820,Za=37821,Ja=36492,Qa=36494,ja=36495,eo=36283,to=36284,rr=36285,no=36286,fu=3200,io=0,hu=1,Hn="",Jt="srgb",ar="srgb-linear",or="linear",tt="srgb",Nr=7680,pu=519,mu=512,gu=513,_u=514,Wc=515,xu=516,vu=517,Xc=518,qc=519,Su=35044,rl="300 es",rn=2e3,rs=2001;function Mu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eu(){const i=as("canvas");return i.style.display="block",i}const al={};function ol(...i){const e="THREE."+i.shift();console.log(e,...i)}function Yc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Yc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Yc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function tr(...i){const e=i.join(" ");e in al||(al[e]=!0,Ie(...i))}function yu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const bu={[xa]:xa,[Sa]:ya,[Ma]:Ma,[ns]:Ea,[va]:va,[ya]:Sa,[ba]:ba,[Ea]:ns};class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,lr=180/Math.PI;function us(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Tu(i,e){return(i%e+e)%e}function Fr(i,e,t){return(1-t)*i+t*e}function Au(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wu(i,e){if(e.constructor===Float32Array)return i;const t=xo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ru(i,e){if(e.constructor===Float32Array)return i;const t=xo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const zo=class zo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zo.prototype.isVector2=!0;let Ge=zo;class Fi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],f=n[s+2],m=n[s+3],u=r[a+0],g=r[a+1],v=r[a+2],y=r[a+3];if(m!==y||c!==u||l!==g||f!==v){let p=c*u+l*g+f*v+m*y;p<0&&(u=-u,g=-g,v=-v,y=-y,p=-p);let d=1-o;if(p<.9995){const S=Math.acos(p),A=Math.sin(S);d=Math.sin(d*S)/A,o=Math.sin(o*S)/A,c=c*d+u*o,l=l*d+g*o,f=f*d+v*o,m=m*d+y*o}else{c=c*d+u*o,l=l*d+g*o,f=f*d+v*o,m=m*d+y*o;const S=1/Math.sqrt(c*c+l*l+f*f+m*m);c*=S,l*=S,f*=S,m*=S}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],f=n[s+3],m=r[a],u=r[a+1],g=r[a+2],v=r[a+3];return e[t]=o*v+f*m+c*g-l*u,e[t+1]=c*v+f*u+l*m-o*g,e[t+2]=l*v+f*g+o*u-c*m,e[t+3]=f*v-o*m-c*u-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(s/2),m=o(r/2),u=c(n/2),g=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=u*f*m+l*g*v,this._y=l*g*m-u*f*v,this._z=l*f*v+u*g*m,this._w=l*f*m-u*g*v;break;case"YXZ":this._x=u*f*m+l*g*v,this._y=l*g*m-u*f*v,this._z=l*f*v-u*g*m,this._w=l*f*m+u*g*v;break;case"ZXY":this._x=u*f*m-l*g*v,this._y=l*g*m+u*f*v,this._z=l*f*v+u*g*m,this._w=l*f*m-u*g*v;break;case"ZYX":this._x=u*f*m-l*g*v,this._y=l*g*m+u*f*v,this._z=l*f*v-u*g*m,this._w=l*f*m+u*g*v;break;case"YZX":this._x=u*f*m+l*g*v,this._y=l*g*m+u*f*v,this._z=l*f*v-u*g*m,this._w=l*f*m-u*g*v;break;case"XZY":this._x=u*f*m-l*g*v,this._y=l*g*m-u*f*v,this._z=l*f*v+u*g*m,this._w=l*f*m+u*g*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],m=t[10],u=n+o+m;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(f-c)*g,this._y=(r-l)*g,this._z=(a-s)*g}else if(n>o&&n>m){const g=2*Math.sqrt(1+n-o-m);this._w=(f-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+l)/g}else if(o>m){const g=2*Math.sqrt(1+o-n-m);this._w=(r-l)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+l)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-s*o,this._w=a*f-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Go=class Go{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),f=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+c*l+a*m-o*f,this.y=n+c*f+o*l-r*m,this.z=s+c*m+r*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Or.copy(this).projectOnVector(e),this.sub(Or)}reflect(e){return this.sub(Or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Go.prototype.isVector3=!0;let U=Go;const Or=new U,ll=new Fi,Ho=class Ho{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],m=n[7],u=n[2],g=n[5],v=n[8],y=s[0],p=s[3],d=s[6],S=s[1],A=s[4],E=s[7],w=s[2],T=s[5],h=s[8];return r[0]=a*y+o*S+c*w,r[3]=a*p+o*A+c*T,r[6]=a*d+o*E+c*h,r[1]=l*y+f*S+m*w,r[4]=l*p+f*A+m*T,r[7]=l*d+f*E+m*h,r[2]=u*y+g*S+v*w,r[5]=u*p+g*A+v*T,r[8]=u*d+g*E+v*h,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*r*f+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],m=f*a-o*l,u=o*c-f*r,g=l*r-a*c,v=t*m+n*u+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=m*y,e[1]=(s*l-f*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(f*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=g*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Br.makeScale(e,t)),this}rotate(e){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Br.makeRotation(-e)),this}translate(e,t){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ho.prototype.isMatrix3=!0;let Ne=Ho;const Br=new Ne,cl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cu(){const i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:e,whitePoint:n,transfer:or,toXYZ:cl,fromXYZ:dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:cl,fromXYZ:dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}const We=Cu();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Pu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{di===void 0&&(di=as("canvas")),di.width=e.width,di.height=e.height;const s=di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lu=0;class vo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kr(s[a].image)):r.push(kr(s[a]))}else r=kr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Iu=0;const zr=new U;class Pt extends li{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=wn,s=wn,r=zt,a=Vn,o=hn,c=qt,l=Pt.DEFAULT_ANISOTROPY,f=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=us(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zr).x}get height(){return this.source.getSize(zr).y}get depth(){return this.source.getSize(zr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Fc;Pt.DEFAULT_ANISOTROPY=1;const Vo=class Vo{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],f=c[4],m=c[8],u=c[1],g=c[5],v=c[9],y=c[2],p=c[6],d=c[10];if(Math.abs(f-u)<.01&&Math.abs(m-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(m+y)<.1&&Math.abs(v+p)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,E=(g+1)/2,w=(d+1)/2,T=(f+u)/4,h=(m+y)/4,M=(v+p)/4;return A>E&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=h/n):E>w?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=h/r,s=M/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-v)*(p-v)+(m-y)*(m-y)+(u-f)*(u-f));return Math.abs(S)<.001&&(S=1),this.x=(p-v)/S,this.y=(m-y)/S,this.z=(u-f)/S,this.w=Math.acos((l+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vo.prototype.isVector4=!0;let ut=Vo;class Du extends li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Pt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Du{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $c extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nu extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const _r=class _r{constructor(e,t,n,s,r,a,o,c,l,f,m,u,g,v,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,f,m,u,g,v,y,p)}set(e,t,n,s,r,a,o,c,l,f,m,u,g,v,y,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=f,d[10]=m,d[14]=u,d[3]=g,d[7]=v,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _r().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const u=a*f,g=a*m,v=o*f,y=o*m;t[0]=c*f,t[4]=-c*m,t[8]=l,t[1]=g+v*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=v+g*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*f,g=c*m,v=l*f,y=l*m;t[0]=u+y*o,t[4]=v*o-g,t[8]=a*l,t[1]=a*m,t[5]=a*f,t[9]=-o,t[2]=g*o-v,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*f,g=c*m,v=l*f,y=l*m;t[0]=u-y*o,t[4]=-a*m,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*f,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*f,g=a*m,v=o*f,y=o*m;t[0]=c*f,t[4]=v*l-g,t[8]=u*l+y,t[1]=c*m,t[5]=y*l+u,t[9]=g*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,g=a*l,v=o*c,y=o*l;t[0]=c*f,t[4]=y-u*m,t[8]=v*m+g,t[1]=m,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=g*m+v,t[10]=u-y*m}else if(e.order==="XZY"){const u=a*c,g=a*l,v=o*c,y=o*l;t[0]=c*f,t[4]=-m,t[8]=l*f,t[1]=u*m+y,t[5]=a*f,t[9]=g*m-v,t[2]=v*m-g,t[6]=o*f,t[10]=y*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Fu)}lookAt(e,t,n){const s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),In.crossVectors(n,Ht),In.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),In.crossVectors(n,Ht)),In.normalize(),vs.crossVectors(Ht,In),s[0]=In.x,s[4]=vs.x,s[8]=Ht.x,s[1]=In.y,s[5]=vs.y,s[9]=Ht.y,s[2]=In.z,s[6]=vs.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],m=n[5],u=n[9],g=n[13],v=n[2],y=n[6],p=n[10],d=n[14],S=n[3],A=n[7],E=n[11],w=n[15],T=s[0],h=s[4],M=s[8],I=s[12],C=s[1],D=s[5],F=s[9],V=s[13],L=s[2],G=s[6],q=s[10],z=s[14],ee=s[3],W=s[7],Q=s[11],j=s[15];return r[0]=a*T+o*C+c*L+l*ee,r[4]=a*h+o*D+c*G+l*W,r[8]=a*M+o*F+c*q+l*Q,r[12]=a*I+o*V+c*z+l*j,r[1]=f*T+m*C+u*L+g*ee,r[5]=f*h+m*D+u*G+g*W,r[9]=f*M+m*F+u*q+g*Q,r[13]=f*I+m*V+u*z+g*j,r[2]=v*T+y*C+p*L+d*ee,r[6]=v*h+y*D+p*G+d*W,r[10]=v*M+y*F+p*q+d*Q,r[14]=v*I+y*V+p*z+d*j,r[3]=S*T+A*C+E*L+w*ee,r[7]=S*h+A*D+E*G+w*W,r[11]=S*M+A*F+E*q+w*Q,r[15]=S*I+A*V+E*z+w*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],m=e[6],u=e[10],g=e[14],v=e[3],y=e[7],p=e[11],d=e[15],S=c*g-l*u,A=o*g-l*m,E=o*u-c*m,w=a*g-l*f,T=a*u-c*f,h=a*m-o*f;return t*(y*S-p*A+d*E)-n*(v*S-p*w+d*T)+s*(v*A-y*w+d*h)-r*(v*E-y*T+p*h)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-n*(r*f-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],m=e[9],u=e[10],g=e[11],v=e[12],y=e[13],p=e[14],d=e[15],S=t*o-n*a,A=t*c-s*a,E=t*l-r*a,w=n*c-s*o,T=n*l-r*o,h=s*l-r*c,M=f*y-m*v,I=f*p-u*v,C=f*d-g*v,D=m*p-u*y,F=m*d-g*y,V=u*d-g*p,L=S*V-A*F+E*D+w*C-T*I+h*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*V-c*F+l*D)*G,e[1]=(s*F-n*V-r*D)*G,e[2]=(y*h-p*T+d*w)*G,e[3]=(u*T-m*h-g*w)*G,e[4]=(c*C-a*V-l*I)*G,e[5]=(t*V-s*C+r*I)*G,e[6]=(p*E-v*h-d*A)*G,e[7]=(f*h-u*E+g*A)*G,e[8]=(a*F-o*C+l*M)*G,e[9]=(n*C-t*F-r*M)*G,e[10]=(v*T-y*E+d*S)*G,e[11]=(m*E-f*T-g*S)*G,e[12]=(o*I-a*D-c*M)*G,e[13]=(t*D-n*I+s*M)*G,e[14]=(y*A-v*w-p*S)*G,e[15]=(f*w-m*A+u*S)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+n,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,m=o+o,u=r*l,g=r*f,v=r*m,y=a*f,p=a*m,d=o*m,S=c*l,A=c*f,E=c*m,w=n.x,T=n.y,h=n.z;return s[0]=(1-(y+d))*w,s[1]=(g+E)*w,s[2]=(v-A)*w,s[3]=0,s[4]=(g-E)*T,s[5]=(1-(u+d))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(v+A)*h,s[9]=(p-S)*h,s[10]=(1-(u+y))*h,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ui.set(s[0],s[1],s[2]).length();const o=ui.set(s[4],s[5],s[6]).length(),c=ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),en.copy(this);const l=1/a,f=1/o,m=1/c;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=f,en.elements[5]*=f,en.elements[6]*=f,en.elements[8]*=m,en.elements[9]*=m,en.elements[10]*=m,t.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=rn,c=!1){const l=this.elements,f=2*r/(t-e),m=2*r/(n-s),u=(t+e)/(t-e),g=(n+s)/(n-s);let v,y;if(c)v=r/(a-r),y=a*r/(a-r);else if(o===rn)v=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===rs)v=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=m,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=rn,c=!1){const l=this.elements,f=2/(t-e),m=2/(n-s),u=-(t+e)/(t-e),g=-(n+s)/(n-s);let v,y;if(c)v=1/(a-r),y=a/(a-r);else if(o===rn)v=-2/(a-r),y=-(a+r)/(a-r);else if(o===rs)v=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=m,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};_r.prototype.isMatrix4=!0;let ct=_r;const ui=new U,en=new ct,Uu=new U(0,0,0),Fu=new U(1,1,1),In=new U,vs=new U,Ht=new U,ul=new ct,fl=new Fi;class Yn{constructor(e=0,t=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],m=s[2],u=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ou=0;const hl=new U,fi=new Fi,vn=new ct,Ss=new U,Gi=new U,Bu=new U,ku=new Fi,pl=new U(1,0,0),ml=new U(0,1,0),gl=new U(0,0,1),_l={type:"added"},zu={type:"removed"},hi={type:"childadded",child:null},Gr={type:"childremoved",child:null};class wt extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new U,t=new Yn,n=new Fi,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ne}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Gi,Ss,this.up):vn.lookAt(Ss,Gi,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(vn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),hi.child=e,this.dispatchEvent(hi),hi.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const m=c[l];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),m=a(e.shapes),u=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wt.DEFAULT_UP=new U(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class kt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gu={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),d=this._getHandJoint(l,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],u=f.position.distanceTo(m.position),g=.02,v=.005;l.inputState.pinching&&u>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Tu(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vr(a,r,e+1/3),this.g=Vr(a,r,e),this.b=Vr(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=Kc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return We.workingToColorSpace(Nt.copy(this),e),Math.round(Xe(Nt.r*255,0,255))*65536+Math.round(Xe(Nt.g*255,0,255))*256+Math.round(Xe(Nt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=f<=.5?m/(a+o):m/(2-a-o),a){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Jt){We.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,s=Nt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ms);const n=Fr(Dn.h,Ms.h,t),s=Fr(Dn.s,Ms.s,t),r=Fr(Dn.l,Ms.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new $e;$e.NAMES=Kc;class Hu extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const tn=new U,Sn=new U,Wr=new U,Mn=new U,pi=new U,mi=new U,xl=new U,Xr=new U,qr=new U,Yr=new U,$r=new ut,Kr=new ut,Zr=new ut;class sn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),Sn.subVectors(n,t),Wr.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(Sn),c=tn.dot(Wr),l=Sn.dot(Sn),f=Sn.dot(Wr),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;const u=1/m,g=(l*c-o*f)*u,v=(a*f-o*c)*u;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return $r.setScalar(0),Kr.setScalar(0),Zr.setScalar(0),$r.fromBufferAttribute(e,t),Kr.fromBufferAttribute(e,n),Zr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($r,r.x),a.addScaledVector(Kr,r.y),a.addScaledVector(Zr,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),Sn.subVectors(e,t),tn.cross(Sn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),tn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;pi.subVectors(s,n),mi.subVectors(r,n),Xr.subVectors(e,n);const c=pi.dot(Xr),l=mi.dot(Xr);if(c<=0&&l<=0)return t.copy(n);qr.subVectors(e,s);const f=pi.dot(qr),m=mi.dot(qr);if(f>=0&&m<=f)return t.copy(s);const u=c*m-f*l;if(u<=0&&c>=0&&f<=0&&c-f>0)return a=c/(c-f),t.copy(n).addScaledVector(pi,a);Yr.subVectors(e,r);const g=pi.dot(Yr),v=mi.dot(Yr);if(v>=0&&g<=v)return t.copy(r);const y=g*l-c*v;if(y<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(mi,o);const p=f*v-g*m;if(p<=0&&m-f>=0&&g-v>=0)return xl.subVectors(r,s),o=(m-f)/(m-f+(g-v)),t.copy(s).addScaledVector(xl,o);const d=1/(p+y+u);return a=y*d,o=u*d,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),ys.subVectors(this.max,Hi),gi.subVectors(e.a,Hi),_i.subVectors(e.b,Hi),xi.subVectors(e.c,Hi),Nn.subVectors(_i,gi),Un.subVectors(xi,_i),Jn.subVectors(gi,xi);let t=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-Jn.z,Jn.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,Jn.z,0,-Jn.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-Jn.y,Jn.x,0];return!Jr(t,gi,_i,xi,ys)||(t=[1,0,0,0,1,0,0,0,1],!Jr(t,gi,_i,xi,ys))?!1:(bs.crossVectors(Nn,Un),t=[bs.x,bs.y,bs.z],Jr(t,gi,_i,xi,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const En=[new U,new U,new U,new U,new U,new U,new U,new U],nn=new U,Es=new Oi,gi=new U,_i=new U,xi=new U,Nn=new U,Un=new U,Jn=new U,Hi=new U,ys=new U,bs=new U,Qn=new U;function Jr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);const o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),c=e.dot(Qn),l=t.dot(Qn),f=n.dot(Qn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const _t=new U,Ts=new Ge;let Vu=0;class ti extends li{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Su,this.updateRanges=[],this.gpuType=fn,this.version=0,this._normalizationScale=e!==void 0?xo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wu(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ru(e,this.array)}}class Zc extends ti{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends ti{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends ti{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Wu=new Oi,Vi=new U,Qr=new U;class Mo{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(Qr)),this.expandByPoint(Vi.copy(e.center).sub(Qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Xu=0;const $t=new ct,jr=new wt,vi=new U,Vt=new Oi,Wi=new Oi,At=new U;class an extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?Jc:Zc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Vt.min,Wi.min),Vt.expandByPoint(At),At.addVectors(Vt.max,Wi.max),Vt.expandByPoint(At)):(Vt.expandByPoint(Wi.min),Vt.expandByPoint(Wi.max))}Vt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)At.fromBufferAttribute(o,l),c&&(vi.fromBufferAttribute(e,l),At.add(vi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ti(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new U,c[I]=new U;const f=new U,m=new U,u=new U,g=new Ge,v=new Ge,y=new Ge,p=new U,d=new U;function S(I,C,D){l[I]=l[C]=l[D]=1,f.fromBufferAttribute(n,I),m.fromBufferAttribute(n,C),u.fromBufferAttribute(n,D),g.fromBufferAttribute(r,I),v.fromBufferAttribute(r,C),y.fromBufferAttribute(r,D),m.sub(f),u.sub(f),v.sub(g),y.sub(g);const F=1/(v.x*y.y-y.x*v.y);isFinite(F)&&(p.copy(m).multiplyScalar(y.y).addScaledVector(u,-v.y).multiplyScalar(F),d.copy(u).multiplyScalar(v.x).addScaledVector(m,-y.x).multiplyScalar(F),o[I].add(p),o[C].add(p),o[D].add(p),c[I].add(d),c[C].add(d),c[D].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,C=A.length;I<C;++I){const D=A[I],F=D.start,V=D.count;for(let L=F,G=F+V;L<G;L+=3)S(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const E=new U,w=new U,T=new U,h=new U;function M(I){T.fromBufferAttribute(s,I),h.copy(T);const C=o[I];E.copy(C),E.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(h,C);const F=w.dot(c[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,F)}for(let I=0,C=n.count;I<C;++I)l[I]&&M(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,f=new U,m=new U;if(e)for(let u=0,g=e.count;u<g;u+=3){const v=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),o.add(f),c.add(f),l.add(f),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,g=t.count;u<g;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,m=o.normalized,u=new l.constructor(c.length*f);let g=0,v=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?g=c[y]*o.data.stride+o.offset:g=c[y]*f;for(let d=0;d<f;d++)u[v++]=l[g++]}return new ti(u,f,m)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let f=0,m=l.length;f<m;f++){const u=l[f],g=e(u,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let m=0,u=l.length;m<u;m++){const g=l[m];f.push(g.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],m=r[l];for(let u=0,g=m.length;u<g;u++)f.push(m[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ea=new U,qu=new U,Yu=new Ne;class kn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ea.subVectors(n,t).cross(qu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ea),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yu.getNormalMatrix(e),s=this.coplanarPoint(ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let $u=0;class fs extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=us(),this.name="",this.type="Material",this.blending=ji,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=wc,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yn=new U,ta=new U,As=new U,ws=new U;class Qc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ta.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),ws.copy(this.origin).sub(ta);const r=e.distanceTo(t)*.5,a=-this.direction.dot(As),o=ws.dot(this.direction),c=-ws.dot(As),l=ws.lengthSq(),f=Math.abs(1-a*a);let m,u,g,v;if(f>0)if(m=a*c-o,u=a*o-c,v=r*f,m>=0)if(u>=-v)if(u<=v){const y=1/f;m*=y,u*=y,g=m*(m+a*u+2*o)+u*(a*m+u+2*c)+l}else u=r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*c)+l;else u=-r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*c)+l;else u<=-v?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-c),r),g=-m*m+u*(u+2*c)+l):u<=v?(m=0,u=Math.min(Math.max(-r,-c),r),g=u*(u+2*c)+l):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-c),r),g=-m*m+u*(u+2*c)+l);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),g=-m*m+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(ta).addScaledVector(As,u),g}intersectSphere(e,t){if(e.radius<0)return null;yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),f>=0?(r=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-u.z)*m,c=(e.max.z-u.z)*m):(o=(e.max.z-u.z)*m,c=(e.min.z-u.z)*m),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,m=e.x-a.x,u=e.y-a.y,g=e.z-a.z,v=t.x-a.x,y=t.y-a.y,p=t.z-a.z,d=n.x-a.x,S=n.y-a.y,A=n.z-a.z,E=Math.abs(c),w=Math.abs(l),T=Math.abs(f);let h,M,I,C,D,F,V,L,G,q,z,ee;if(E>=w&&E>=T?(I=c,F=m,G=v,ee=d,c>=0?(h=l,M=f,C=u,D=g,V=y,L=p,q=S,z=A):(h=f,M=l,C=g,D=u,V=p,L=y,q=A,z=S)):w>=T?(I=l,F=u,G=y,ee=S,l>=0?(h=f,M=c,C=g,D=m,V=p,L=v,q=A,z=d):(h=c,M=f,C=m,D=g,V=v,L=p,q=d,z=A)):(I=f,F=g,G=p,ee=A,f>=0?(h=c,M=l,C=m,D=u,V=v,L=y,q=d,z=S):(h=l,M=c,C=u,D=m,V=y,L=v,q=S,z=d)),I===0)return null;const W=h/I,Q=M/I,j=1/I,_e=C-W*F,Le=D-Q*F,$=V-W*G,fe=L-Q*G,xe=q-W*ee,be=z-Q*ee,ue=xe*fe-be*$,Pe=_e*be-Le*xe,rt=$*Le-fe*_e;if(s){if(ue<0||Pe<0||rt<0)return null}else if((ue<0||Pe<0||rt<0)&&(ue>0||Pe>0||rt>0))return null;const Ae=ue+Pe+rt;if(Ae===0)return null;const qe=j*(ue*F+Pe*G+rt*ee);return(Ae>0?qe<0:qe>0)?null:this.at(qe/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vl=new ct,jn=new Qc,Rs=new Mo,Sl=new U,Cs=new U,Ps=new U,Ls=new U,na=new U,Is=new U,Ml=new U,Ds=new U;class ze extends wt{constructor(e=new an,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Is.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=o[c],m=r[c];f!==0&&(na.fromBufferAttribute(m,e),a?Is.addScaledVector(na,f):Is.addScaledVector(na.sub(t),f))}t.add(Is)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),jn.copy(e.ray).recast(e.near),!(Rs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Rs,Sl)===null||jn.origin.distanceToSquared(Sl)>(e.far-e.near)**2))&&(vl.copy(r).invert(),jn.copy(e.ray).applyMatrix4(vl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,u=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const p=u[v],d=a[p.materialIndex],S=Math.max(p.start,g.start),A=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=S,w=A;E<w;E+=3){const T=o.getX(E),h=o.getX(E+1),M=o.getX(E+2);s=Ns(this,d,e,n,l,f,m,T,h,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let p=v,d=y;p<d;p+=3){const S=o.getX(p),A=o.getX(p+1),E=o.getX(p+2);s=Ns(this,a,e,n,l,f,m,S,A,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=u.length;v<y;v++){const p=u[v],d=a[p.materialIndex],S=Math.max(p.start,g.start),A=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let E=S,w=A;E<w;E+=3){const T=E,h=E+1,M=E+2;s=Ns(this,d,e,n,l,f,m,T,h,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let p=v,d=y;p<d;p+=3){const S=p,A=p+1,E=p+2;s=Ns(this,a,e,n,l,f,m,S,A,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Ku(i,e,t,n,s,r,a,o){let c;if(e.side===Gt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ni,o),c===null)return null;Ds.copy(o),Ds.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ds);return l<t.near||l>t.far?null:{distance:l,point:Ds.clone(),object:i}}function Ns(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Cs),i.getVertexPosition(c,Ps),i.getVertexPosition(l,Ls);const f=Ku(i,e,t,n,Cs,Ps,Ls,Ml);if(f){const m=new U;sn.getBarycoord(Ml,Cs,Ps,Ls,m),s&&(f.uv=sn.getInterpolatedAttribute(s,o,c,l,m,new Ge)),r&&(f.uv1=sn.getInterpolatedAttribute(r,o,c,l,m,new Ge)),a&&(f.normal=sn.getInterpolatedAttribute(a,o,c,l,m,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new U,materialIndex:0};sn.getNormal(Cs,Ps,Ls,u.normal),f.face=u,f.barycoord=m}return f}class Zu extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ct,f=Ct,m,u){super(null,a,o,c,l,f,s,r,m,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ei=new Mo,Ju=new Ge(.5,.5),Us=new U;class os{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],f=r[4],m=r[5],u=r[6],g=r[7],v=r[8],y=r[9],p=r[10],d=r[11],S=r[12],A=r[13],E=r[14],w=r[15];if(s[0].setComponents(l-a,g-f,d-v,w-S).normalize(),s[1].setComponents(l+a,g+f,d+v,w+S).normalize(),s[2].setComponents(l+o,g+m,d+y,w+A).normalize(),s[3].setComponents(l-o,g-m,d-y,w-A).normalize(),n)s[4].setComponents(c,u,p,E).normalize(),s[5].setComponents(l-c,g-u,d-p,w-E).normalize();else if(s[4].setComponents(l-c,g-u,d-p,w-E).normalize(),t===rn)s[5].setComponents(l+c,g+u,d+p,w+E).normalize();else if(t===rs)s[5].setComponents(c,u,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=Ju.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Us.x=s.normal.x>0?e.max.x:e.min.x,Us.y=s.normal.y>0?e.max.y:e.min.y,Us.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const El=new ct;class Eo{constructor(){this.coordinateSystem=rn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];El.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new os),n[s].setFromProjectionMatrix(El,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new os),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Eo().copy(this)}}class jc extends Pt{constructor(e=[],t=Pi,n,s,r,a,o,c,l,f){super(e,t,n,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qu extends Pt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ii extends Pt{constructor(e,t,n=gn,s,r,a,o=Ct,c=Ct,l,f=qn,m=1){if(f!==qn&&f!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:m};super(u,s,r,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ed extends Ii{constructor(e,t=gn,n=Pi,s,r,a=Ct,o=Ct,c,l=qn){const f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class td extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ht extends an{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],f=[],m=[];let u=0,g=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(m,2));function v(y,p,d,S,A,E,w,T,h,M,I){const C=E/h,D=w/M,F=E/2,V=w/2,L=T/2,G=h+1,q=M+1;let z=0,ee=0;const W=new U;for(let Q=0;Q<q;Q++){const j=Q*D-V;for(let _e=0;_e<G;_e++){const Le=_e*C-F;W[y]=Le*S,W[p]=j*A,W[d]=L,l.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[d]=T>0?1:-1,f.push(W.x,W.y,W.z),m.push(_e/h),m.push(1-Q/M),z+=1}}for(let Q=0;Q<M;Q++)for(let j=0;j<h;j++){const _e=u+j+G*Q,Le=u+j+G*(Q+1),$=u+(j+1)+G*(Q+1),fe=u+(j+1)+G*Q;c.push(_e,Le,fe),c.push(Le,$,fe),ee+=6}o.addGroup(g,ee,I),g+=ee,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class An extends an{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const f=[],m=[],u=[],g=[];let v=0;const y=[],p=n/2;let d=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(g,2));function S(){const E=new U,w=new U;let T=0;const h=(t-e)/n;for(let M=0;M<=r;M++){const I=[],C=M/r,D=C*(t-e)+e;for(let F=0;F<=s;F++){const V=F/s,L=V*c+o,G=Math.sin(L),q=Math.cos(L);w.x=D*G,w.y=-C*n+p,w.z=D*q,m.push(w.x,w.y,w.z),E.set(G,h,q).normalize(),u.push(E.x,E.y,E.z),g.push(V,1-C),I.push(v++)}y.push(I)}for(let M=0;M<s;M++)for(let I=0;I<r;I++){const C=y[I][M],D=y[I+1][M],F=y[I+1][M+1],V=y[I][M+1];(e>0||I!==0)&&(f.push(C,D,V),T+=3),(t>0||I!==r-1)&&(f.push(D,F,V),T+=3)}l.addGroup(d,T,0),d+=T}function A(E){const w=v,T=new Ge,h=new U;let M=0;const I=E===!0?e:t,C=E===!0?1:-1;for(let F=1;F<=s;F++)m.push(0,p*C,0),u.push(0,C,0),g.push(.5,.5),v++;const D=v;for(let F=0;F<=s;F++){const L=F/s*c+o,G=Math.cos(L),q=Math.sin(L);h.x=I*q,h.y=p*C,h.z=I*G,m.push(h.x,h.y,h.z),u.push(0,C,0),T.x=G*.5+.5,T.y=q*.5*C+.5,g.push(T.x,T.y),v++}for(let F=0;F<s;F++){const V=w+F,L=D+F;E===!0?f.push(L,L+1,V):f.push(L+1,L,V),M+=3}l.addGroup(d,M,E===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends An{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new yo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bo extends an{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),f(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const A=new U,E=new U,w=new U;for(let T=0;T<t.length;T+=3)g(t[T+0],A),g(t[T+1],E),g(t[T+2],w),c(A,E,w,S)}function c(S,A,E,w){const T=w+1,h=[];for(let M=0;M<=T;M++){h[M]=[];const I=S.clone().lerp(E,M/T),C=A.clone().lerp(E,M/T),D=T-M;for(let F=0;F<=D;F++)F===0&&M===T?h[M][F]=I:h[M][F]=I.clone().lerp(C,F/D)}for(let M=0;M<T;M++)for(let I=0;I<2*(T-M)-1;I++){const C=Math.floor(I/2);I%2===0?(u(h[M][C+1]),u(h[M+1][C]),u(h[M][C])):(u(h[M][C+1]),u(h[M+1][C+1]),u(h[M+1][C]))}}function l(S){const A=new U;for(let E=0;E<r.length;E+=3)A.x=r[E+0],A.y=r[E+1],A.z=r[E+2],A.normalize().multiplyScalar(S),r[E+0]=A.x,r[E+1]=A.y,r[E+2]=A.z}function f(){const S=new U;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];const E=p(S)/2/Math.PI+.5,w=d(S)/Math.PI+.5;a.push(E,1-w)}v(),m()}function m(){for(let S=0;S<a.length;S+=6){const A=a[S+0],E=a[S+2],w=a[S+4],T=Math.max(A,E,w),h=Math.min(A,E,w);T>.9&&h<.1&&(A<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function g(S,A){const E=S*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function v(){const S=new U,A=new U,E=new U,w=new U,T=new Ge,h=new Ge,M=new Ge;for(let I=0,C=0;I<r.length;I+=9,C+=6){S.set(r[I+0],r[I+1],r[I+2]),A.set(r[I+3],r[I+4],r[I+5]),E.set(r[I+6],r[I+7],r[I+8]),T.set(a[C+0],a[C+1]),h.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),w.copy(S).add(A).add(E).divideScalar(3);const D=p(w);y(T,C+0,S,D),y(h,C+2,A,D),y(M,C+4,E,D)}}function y(S,A,E,w){w<0&&S.x===1&&(a[A]=S.x-1),E.x===0&&E.z===0&&(a[A]=w/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.vertices,e.indices,e.radius,e.detail)}}class To extends bo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new To(e.radius,e.detail)}}class cn extends an{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,f=c+1,m=e/o,u=t/c,g=[],v=[],y=[],p=[];for(let d=0;d<f;d++){const S=d*u-a;for(let A=0;A<l;A++){const E=A*m-r;v.push(E,-S,0),y.push(0,0,1),p.push(A/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){const A=S+l*d,E=S+l*(d+1),w=S+1+l*(d+1),T=S+1+l*d;g.push(A,E,T),g.push(E,w,T)}this.setIndex(g),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ao extends an{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],f=[];let m=e;const u=(t-e)/s,g=new U,v=new Ge;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){const d=r+p/n*a;g.x=m*Math.cos(d),g.y=m*Math.sin(d),c.push(g.x,g.y,g.z),l.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,f.push(v.x,v.y)}m+=u}for(let y=0;y<s;y++){const p=y*(n+1);for(let d=0;d<n;d++){const S=d+p,A=S,E=S+n+1,w=S+n+2,T=S+1;o.push(A,E,T),o.push(E,w,T)}}this.setIndex(o),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cr extends an{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const f=[],m=new U,u=new U,g=[],v=[],y=[],p=[];for(let d=0;d<=n;d++){const S=[],A=d/n,E=a+A*o,w=e*Math.cos(E),T=Math.sqrt(e*e-w*w);let h=0;d===0&&a===0?h=.5/t:d===n&&c===Math.PI&&(h=-.5/t);for(let M=0;M<=t;M++){const I=M/t,C=s+I*r;m.x=-T*Math.cos(C),m.y=w,m.z=T*Math.sin(C),v.push(m.x,m.y,m.z),u.copy(m).normalize(),y.push(u.x,u.y,u.z),p.push(I+h,1-A),S.push(l++)}f.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){const A=f[d][S+1],E=f[d][S],w=f[d+1][S],T=f[d+1][S+1];(d!==0||a>0)&&g.push(A,E,T),(d!==n-1||c<Math.PI)&&g.push(E,w,T)}this.setIndex(g),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(yl(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(yl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Di(i[t]);for(const s in n)e[s]=n[s]}return e}function yl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ju(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const ef={clone:Di,merge:Ft};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sf extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kt extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rf extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class af extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ia={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(bl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!bl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function bl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class of{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,m){return l.push(f,m),this},this.removeHandler=function(f){const m=l.indexOf(f);return m!==-1&&l.splice(m,2),this},this.getHandler=function(f){for(let m=0,u=l.length;m<u;m+=2){const g=l[m],v=l[m+1];if(g.global&&(g.lastIndex=0),g.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lf=new of;class wo{constructor(e){this.manager=e!==void 0?e:lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si=new WeakMap;class cf extends wo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ia.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let m=Si.get(a);m===void 0&&(m=[],Si.set(a,m)),m.push({onLoad:t,onError:s})}return a}const o=as("img");function c(){f(),t&&t(this);const m=Si.get(this)||[];for(let u=0;u<m.length;u++){const g=m[u];g.onLoad&&g.onLoad(this)}Si.delete(this),r.manager.itemEnd(e)}function l(m){f(),s&&s(m),ia.remove(`image:${e}`);const u=Si.get(this)||[];for(let g=0;g<u.length;g++){const v=u[g];v.onError&&v.onError(m)}Si.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ia.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class df extends wo{constructor(e){super(e)}load(e,t,n,s){const r=new Pt,a=new cf(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class xr extends wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const sa=new ct,Tl=new U,Al=new U;class Ro{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Tl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tl),Al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Al),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(sa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===rs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fs=new U,Os=new Fi,on=new U;class id extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fs,Os,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,on.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fs,Os,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new U,wl=new Ge,Rl=new Ge;class Xt extends id{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,wl,Rl),t.subVectors(Rl,wl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class uf extends Ro{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=lr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class ff extends xr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class hf extends Ro{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}}class Cl extends xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class sd extends id{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pf extends Ro{constructor(){super(new sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mf extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new pf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class gf extends xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Mi=-90,Ei=1;class so extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Mi,Ei,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Mi,Ei,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Mi,Ei,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Mi,Ei,e,t);o.layers=this.layers,this.add(o);const c=new Xt(Mi,Ei,e,t);c.layers=this.layers,this.add(c);const l=new Xt(Mi,Ei,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,f]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,u,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class _f extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Pl=new ct;class xf{constructor(e,t,n=0,s=1/0){this.ray=new Qc(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pl),this}intersectObject(e,t=!0,n=[]){return ro(e,this,n,t),n.sort(Ll),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ro(e[s],this,n,t);return n.sort(Ll),n}}function Ll(i,e){return i.distance-e.distance}function ro(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ro(r[a],e,t,!0)}}class vf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Il(i,e,t,n){const s=Sf(n);switch(t){case Gc:return i*e;case Vc:return i*e/s.components*s.byteLength;case mo:return i*e/s.components*s.byteLength;case ii:return i*e*2/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case Hc:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case _o:return i*e*4/s.components*s.byteLength;case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(e,8)/4;case wa:case Ca:return Math.max(i,8)*Math.max(e,8)/2;case La:case Ia:case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case sr:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ja:case Qa:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eo:case to:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rr:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sf(i){switch(i){case qt:case Oc:return{byteLength:1,components:1};case ss:case Bc:case _n:return{byteLength:2,components:1};case ho:case po:return{byteLength:2,components:4};case gn:case fo:case fn:return{byteLength:4,components:1};case kc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);function rd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mf(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,m=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,f),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){const f=c.array,m=c.updateRanges;if(i.bindBuffer(l,o),m.length===0)i.bufferSubData(l,0,f);else{m.sort((g,v)=>g.start-v.start);let u=0;for(let g=1;g<m.length;g++){const v=m[u],y=m[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,m[u]=y)}m.length=u+1;for(let g=0,v=m.length;g<v;g++){const y=m[g];i.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
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
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,qf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,th=`#ifdef USE_ENVMAP
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
#endif`,nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lh=`#ifdef USE_GRADIENTMAP
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
}`,ch=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fh=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,hh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,vh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,Sh=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yh=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Th=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ah=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lh=`#if defined( USE_POINTS_UV )
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
#endif`,Ih=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uh=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oh=`#ifdef USE_MORPHTARGETS
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
#endif`,Bh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wh=`#ifdef USE_NORMALMAP
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
#endif`,Xh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,ap=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ep=`uniform sampler2D t2D;
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Rp=`#if DEPTH_PACKING == 3200
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`#define DISTANCE
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
void main() {
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#define LAMBERT
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
}`,Bp=`#define LAMBERT
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
#include <envmap_physical_pars_fragment>
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
}`,kp=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,Gp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Vp=`#define PHONG
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
}`,Wp=`#define PHONG
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
#include <envmap_physical_pars_fragment>
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
}`,Xp=`#define STANDARD
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
}`,qp=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,Yp=`#define TOON
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
}`,$p=`#define TOON
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
}`,Kp=`uniform float size;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Qp=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,jp=`uniform float rotation;
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
}`,em=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Ef,alphahash_pars_fragment:yf,alphamap_fragment:bf,alphamap_pars_fragment:Tf,alphatest_fragment:Af,alphatest_pars_fragment:wf,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Pf,batching_vertex:Lf,begin_vertex:If,beginnormal_vertex:Df,bsdfs:Nf,iridescence_fragment:Uf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:zf,color_fragment:Gf,color_pars_fragment:Hf,color_pars_vertex:Vf,color_vertex:Wf,common:Xf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Yf,displacementmap_vertex:$f,emissivemap_fragment:Kf,emissivemap_pars_fragment:Zf,colorspace_fragment:Jf,colorspace_pars_fragment:Qf,envmap_fragment:jf,envmap_common_pars_fragment:eh,envmap_pars_fragment:th,envmap_pars_vertex:nh,envmap_physical_pars_fragment:hh,envmap_vertex:ih,fog_vertex:sh,fog_pars_vertex:rh,fog_fragment:ah,fog_pars_fragment:oh,gradientmap_pars_fragment:lh,lightmap_pars_fragment:ch,lights_lambert_fragment:dh,lights_lambert_pars_fragment:uh,lights_pars_begin:fh,lights_toon_fragment:ph,lights_toon_pars_fragment:mh,lights_phong_fragment:gh,lights_phong_pars_fragment:_h,lights_physical_fragment:xh,lights_physical_pars_fragment:vh,lights_fragment_begin:Sh,lights_fragment_maps:Mh,lights_fragment_end:Eh,lightprobes_pars_fragment:yh,logdepthbuf_fragment:bh,logdepthbuf_pars_fragment:Th,logdepthbuf_pars_vertex:Ah,logdepthbuf_vertex:wh,map_fragment:Rh,map_pars_fragment:Ch,map_particle_fragment:Ph,map_particle_pars_fragment:Lh,metalnessmap_fragment:Ih,metalnessmap_pars_fragment:Dh,morphinstance_vertex:Nh,morphcolor_vertex:Uh,morphnormal_vertex:Fh,morphtarget_pars_vertex:Oh,morphtarget_vertex:Bh,normal_fragment_begin:kh,normal_fragment_maps:zh,normal_pars_fragment:Gh,normal_pars_vertex:Hh,normal_vertex:Vh,normalmap_pars_fragment:Wh,clearcoat_normal_fragment_begin:Xh,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:Yh,iridescence_pars_fragment:$h,opaque_fragment:Kh,packing:Zh,premultiplied_alpha_fragment:Jh,project_vertex:Qh,dithering_fragment:jh,dithering_pars_fragment:ep,roughnessmap_fragment:tp,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:sp,shadowmap_vertex:rp,shadowmask_pars_fragment:ap,skinbase_vertex:op,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:dp,specularmap_fragment:up,specularmap_pars_fragment:fp,tonemapping_fragment:hp,tonemapping_pars_fragment:pp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:_p,uv_pars_vertex:xp,uv_vertex:vp,worldpos_vertex:Sp,background_vert:Mp,background_frag:Ep,backgroundCube_vert:yp,backgroundCube_frag:bp,cube_vert:Tp,cube_frag:Ap,depth_vert:wp,depth_frag:Rp,distance_vert:Cp,distance_frag:Pp,equirect_vert:Lp,equirect_frag:Ip,linedashed_vert:Dp,linedashed_frag:Np,meshbasic_vert:Up,meshbasic_frag:Fp,meshlambert_vert:Op,meshlambert_frag:Bp,meshmatcap_vert:kp,meshmatcap_frag:zp,meshnormal_vert:Gp,meshnormal_frag:Hp,meshphong_vert:Vp,meshphong_frag:Wp,meshphysical_vert:Xp,meshphysical_frag:qp,meshtoon_vert:Yp,meshtoon_frag:$p,points_vert:Kp,points_frag:Zp,shadow_vert:Jp,shadow_frag:Qp,sprite_vert:jp,sprite_frag:em},me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},dn={basic:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ft([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ft([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ft([me.points,me.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ft([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ft([me.common,me.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ft([me.sprite,me.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Ft([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Ft([me.lights,me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};dn.physical={uniforms:Ft([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Bs={r:0,b:0,g:0},tm=new ct,ad=new Ne;ad.set(-1,0,0,0,1,0,0,0,1);function nm(i,e,t,n,s,r){const a=new $e(0);let o=s===!0?0:1,c,l,f=null,m=0,u=null;function g(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const E=S.backgroundBlurriness>0;A=e.get(A,E)}return A}function v(S){let A=!1;const E=g(S);E===null?p(a,o):E&&E.isColor&&(p(E,1),A=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,A){const E=g(A);E&&E.isCubeTexture?(l===void 0&&(l=new ze(new ht(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Di(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,h){this.matrixWorld.copyPosition(h.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ad),l.material.toneMapped=We.getTransfer(E.colorSpace)!==tt,(f!==E||m!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=E,m=E.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ze(new cn(2,2),new si({name:"BackgroundMaterial",uniforms:Di(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=We.getTransfer(E.colorSpace)!==tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||m!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,m=E.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,A){S.getRGB(Bs,nd(i)),t.buffers.color.setClear(Bs.r,Bs.g,Bs.b,A,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:v,addToRenderList:y,dispose:d}}function im(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(D,F,V,L,G){let q=!1;const z=m(D,L,V,F);r!==z&&(r=z,l(r.object)),q=g(D,L,V,G),q&&v(D,L,V,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(D,F,V,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function f(D){return i.deleteVertexArray(D)}function m(D,F,V,L){const G=L.wireframe===!0;let q=n[F.id];q===void 0&&(q={},n[F.id]=q);const z=D.isInstancedMesh===!0?D.id:0;let ee=q[z];ee===void 0&&(ee={},q[z]=ee);let W=ee[V.id];W===void 0&&(W={},ee[V.id]=W);let Q=W[G];return Q===void 0&&(Q=u(c()),W[G]=Q),Q}function u(D){const F=[],V=[],L=[];for(let G=0;G<t;G++)F[G]=0,V[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:L,object:D,attributes:{},index:null}}function g(D,F,V,L){const G=r.attributes,q=F.attributes;let z=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){const j=G[W];let _e=q[W];if(_e===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),j===void 0||j.attribute!==_e||_e&&j.data!==_e.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function v(D,F,V,L){const G={},q=F.attributes;let z=0;const ee=V.getAttributes();for(const W in ee)if(ee[W].location>=0){let j=q[W];j===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const _e={};_e.attribute=j,j&&j.data&&(_e.data=j.data),G[W]=_e,z++}r.attributes=G,r.attributesNum=z,r.index=L}function y(){const D=r.newAttributes;for(let F=0,V=D.length;F<V;F++)D[F]=0}function p(D){d(D,0)}function d(D,F){const V=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;V[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),G[D]!==F&&(i.vertexAttribDivisor(D,F),G[D]=F)}function S(){const D=r.newAttributes,F=r.enabledAttributes;for(let V=0,L=F.length;V<L;V++)F[V]!==D[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(D,F,V,L,G,q,z){z===!0?i.vertexAttribIPointer(D,F,V,G,q):i.vertexAttribPointer(D,F,V,L,G,q)}function E(D,F,V,L){y();const G=L.attributes,q=V.getAttributes(),z=F.defaultAttributeValues;for(const ee in q){const W=q[ee];if(W.location>=0){let Q=G[ee];if(Q===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const j=Q.normalized,_e=Q.itemSize,Le=e.get(Q);if(Le===void 0)continue;const $=Le.buffer,fe=Le.type,xe=Le.bytesPerElement,be=fe===i.INT||fe===i.UNSIGNED_INT||Q.gpuType===fo;if(Q.isInterleavedBufferAttribute){const ue=Q.data,Pe=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,rt=Q.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)d(W.location+Ae,ue.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)p(W.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Ae=0;Ae<W.locationSize;Ae++)A(W.location+Ae,_e/W.locationSize,fe,j,Pe*xe,(rt+_e/W.locationSize*Ae)*xe,be)}else{if(Q.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)d(W.location+ue,Q.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<W.locationSize;ue++)p(W.location+ue);i.bindBuffer(i.ARRAY_BUFFER,$);for(let ue=0;ue<W.locationSize;ue++)A(W.location+ue,_e/W.locationSize,fe,j,_e*xe,_e/W.locationSize*ue*xe,be)}}else if(z!==void 0){const j=z[ee];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(W.location,j);break;case 3:i.vertexAttrib3fv(W.location,j);break;case 4:i.vertexAttrib4fv(W.location,j);break;default:i.vertexAttrib1fv(W.location,j)}}}}S()}function w(){I();for(const D in n){const F=n[D];for(const V in F){const L=F[V];for(const G in L){const q=L[G];for(const z in q)f(q[z].object),delete q[z];delete L[G]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const V in F){const L=F[V];for(const G in L){const q=L[G];for(const z in q)f(q[z].object),delete q[z];delete L[G]}}delete n[D.id]}function h(D){for(const F in n){const V=n[F];for(const L in V){const G=V[L];if(G[D.id]===void 0)continue;const q=G[D.id];for(const z in q)f(q[z].object),delete q[z];delete G[D.id]}}}function M(D){for(const F in n){const V=n[F],L=D.isInstancedMesh===!0?D.id:0,G=V[L];if(G!==void 0){for(const q in G){const z=G[q];for(const ee in z)f(z[ee].object),delete z[ee];delete G[q]}delete V[L],Object.keys(V).length===0&&delete n[F]}}}function I(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:h,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function sm(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let u=0;for(let g=0;g<f;g++)u+=l[g];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const h=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(h){return!(h!==hn&&n.convert(h)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(h){const M=h===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==qt&&h!==fn&&!M&&n.convert(h)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(h){if(h==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Ie("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:E,maxSamples:w,samples:T}}function am(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new kn,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){const g=m.length!==0||u||n!==0||s;return s=u,n=m.length,g},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){t=f(m,u,0)},this.setState=function(m,u,g){const v=m.clippingPlanes,y=m.clipIntersection,p=m.clipShadows,d=i.get(m);if(!s||v===null||v.length===0||r&&!p)r?f(null):l();else{const S=r?0:n,A=S*4;let E=d.clippingState||null;c.value=E,E=f(v,u,A,g);for(let w=0;w!==A;++w)E[w]=t[w];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,u,g,v){const y=m!==null?m.length:0;let p=null;if(y!==0){if(p=c.value,v!==!0||p===null){const d=g+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,E=g;A!==y;++A,E+=4)a.copy(m[A]).applyMatrix4(S,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}class Co extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ht(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:wi});r.uniforms.tEquirect.value=t;const a=new ze(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=zt),new so(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Dl=256,om=3,lm=20,od=256,ld=16,cm=3,dm=new U,um=new $e;class dr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new so(1,10,null),this._boxMesh=new ze(new ht(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=dm}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);const m=c.autoClear,u=c.autoClearColor,g=c.autoClearDepth,v=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(um));const p=new so(n,s,f);return p.position.copy(o),p.update(c,e),c.autoClear=m,c.autoClearColor=u,c.autoClearDepth=g,c.autoClearStencil=v,e.background=y,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Dl,Au(e))}_fromTexture(e,t){e.mapping===Pi||e.mapping===is?this._setSize(e.image.length===0?Dl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Nl(e,!1,!1),n=Math.log2(e)-om;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Nl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Pi||e.mapping===is?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ul()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=fm(),this._integrationMaterial=hm());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ld);for(let a=0;a<=n;a++){const o=dr.lodToRoughness(a,n);if(a>n-cm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(od*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Nl(i,e,t){return new Co(i,{minFilter:Vn,generateMipmaps:e,type:_n,colorSpace:ar,depthBuffer:t})}function hs(i,e,t){return new si({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Gt,blending:wi,depthTest:!1,depthWrite:!1})}function fm(){return hs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${od}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hm(){return hs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ld}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pm(){return hs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ul(){return hs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Fl(){return hs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,g=!1){return u==null?null:g?a(u):r(u)}function r(u){if(u&&u.isTexture){const g=u.mapping;if(g===Lr||g===Ir)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const y=new Co(v.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const g=u.mapping,v=g===Lr||g===Ir,y=g===Pi||g===is;if(v||y){let p=t.get(u);const d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new dr(i)),p=v?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const S=u.image;return v&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new dr(i)),p=v?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",f),p.texture):null}}}return u}function o(u,g){return g===Lr?u.mapping=Pi:g===Ir&&(u.mapping=is),u}function c(u){let g=0;const v=6;for(let y=0;y<v;y++)u[y]!==void 0&&g++;return g===v}function l(u){const g=u.target;g.removeEventListener("dispose",l);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function f(u){const g=u.target;g.removeEventListener("dispose",f);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function gm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&tr("WebGLRenderer: "+n+" extension not supported."),s}}}function _m(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){c(v.target)}function c(v){v.index!==null&&e.remove(v.index);for(const p in v.attributes)e.remove(v.attributes[p]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);const y=r.get(v);y&&(e.remove(y),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(v,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function f(v){const y=v.attributes;for(const p in y)e.update(y[p],i.ARRAY_BUFFER)}function m(v){const y=v.index,p=v.attributes.position;let d=0;if(p===void 0)return;const S=y!==null?y.array.length:p.array.length/3-1,A=p.count>=65535?Jc:Zc,E=new A(Math.ceil(S/3)*6,1),w=E.array;if(y!==null){const h=y.array;d=y.version;for(let M=0,I=0;M<S;M+=3){const C=h[M+0],D=h[M+1],F=h[M+2];w[I++]=C,w[I++]=D,w[I++]=D,w[I++]=F,w[I++]=F,w[I++]=C}}else{d=p.version;for(let h=0,M=0;h<S;h+=3){const I=h+0,C=h+1,D=h+2;w[M++]=I,w[M++]=C,w[M++]=C,w[M++]=D,w[M++]=D,w[M++]=I}}E.version=d;const T=r.get(v);T&&e.remove(T),r.set(v,E)}function u(v){const y=r.get(v);if(y){const p=v.index;p!==null&&y.version<p.version&&m(v)}else m(v);return r.get(v)}function g(){for(const v in s){const y=s[v].deref();y!==void 0&&c(y)}}return{get:l,update:f,getWireframeAttribute:u,dispose:g}}function xm(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function c(m,u){i.drawElements(n,u,r,m*a),t.update(u,n,1)}function l(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*a,g),t.update(u,n,g))}function f(m,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let y=0;for(let p=0;p<g;p++)y+=u[p];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function vm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,e,t){const n=new WeakMap,s=new ut;function r(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==m){let C=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var g=C;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),p===!0&&(E=3);let w=o.attributes.position.count*E,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const h=new Float32Array(w*T*4*m),M=new $c(h,w,T,m);M.type=fn,M.needsUpdate=!0;const I=E*4;for(let D=0;D<m;D++){const F=d[D],V=S[D],L=A[D],G=w*T*4*D;for(let q=0;q<F.count;q++){const z=q*I;v===!0&&(s.fromBufferAttribute(F,q),h[G+z+0]=s.x,h[G+z+1]=s.y,h[G+z+2]=s.z,h[G+z+3]=0),y===!0&&(s.fromBufferAttribute(V,q),h[G+z+4]=s.x,h[G+z+5]=s.y,h[G+z+6]=s.z,h[G+z+7]=0),p===!0&&(s.fromBufferAttribute(L,q),h[G+z+8]=s.x,h[G+z+9]=s.y,h[G+z+10]=s.z,h[G+z+11]=L.itemSize===4?s.w:1)}}u={count:m,texture:M,size:new Ge(w,T)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const y=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Mm(i,e,t,n,s){let r=new WeakMap;function a(l){const f=s.render.frame,m=l.geometry,u=e.get(l,m);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const g=l.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return u}function o(){r=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Em={[Cc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Lc]:"CINEON_TONE_MAPPING",[Ic]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Uc]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};function ym(i,e,t,n,s,r){const a=new mn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const f=new an;f.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new pt([0,2,0,0,2,0],2));const m=new sf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ze(f,m),g=new sd(-1,1,1,-1,0,1);let v=null,y=null,p=!1,d,S=null,A=[],E=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),c!==null&&c.setSize(w,T);for(let h=0;h<A.length;h++){const M=A[h];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){A=w,E=A.length>0&&A[0].isRenderPass===!0;const T=a.width,h=a.height;A.length>0&&o===null&&(o=new mn(T,h,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new mn(T,h,{type:_n,depthBuffer:!1,stencilBuffer:!1}));const M=s===!0&&A.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new Ii(T,h),r===!0&&(l.format=Wn,l.type=Li)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<A.length;I++){const C=A[I];C.setSize&&C.setSize(T,h),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(w,T){if(p||w.toneMapping===Rn&&A.length===0)return!1;if(S=T,T!==null){const h=T.width,M=T.height;(a.width!==h||a.height!==M)&&this.setSize(h,M)}return E===!1&&w.setRenderTarget(a),d=w.toneMapping,w.toneMapping=Rn,!0},this.hasRenderPass=function(){return E},this.end=function(w,T){w.toneMapping=d,p=!0;let h=a,M=o;for(let I=0;I<A.length;I++){const C=A[I];C.enabled!==!1&&(C.render(w,M,h,T),C.needsSwap!==!1&&(h=M,M=M===o?c:o))}if(v!==w.outputColorSpace||y!==w.toneMapping){v=w.outputColorSpace,y=w.toneMapping,m.defines={},We.getTransfer(v)===tt&&(m.defines.SRGB_TRANSFER="");const I=Em[y];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=h.texture,w.setRenderTarget(S),w.render(u,g),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),f.dispose(),m.dispose()}}const cd=new Pt,dd=new Ii(1,1),ud=new ed(1),fd=new $c,hd=new Nu,pd=new jc,Ol=[],Bl=[],kl=new Float32Array(16),zl=new Float32Array(9),Gl=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vr(i,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Gl.set(n),i.uniformMatrix2fv(this.addr,!1,Gl),Et(t,n)}}function Cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;zl.set(n),i.uniformMatrix3fv(this.addr,!1,zl),Et(t,n)}}function Pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;kl.set(n),i.uniformMatrix4fv(this.addr,!1,kl),Et(t,n)}}function Lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Sr(i){return i.version===0&&(i.compareFunction=qc,i.needsUpdate=!0),i}function km(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sr(dd):r=cd,t.setTexture2D(e||r,s)}function zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hd,s)}function Gm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sr(ud):r=pd,t.setTextureCube(e||r,s)}function Hm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fd,s)}function Vm(i){switch(i){case 5126:return bm;case 35664:return Tm;case 35665:return Am;case 35666:return wm;case 35674:return Rm;case 35675:return Cm;case 35676:return Pm;case 5124:case 35670:return Lm;case 35667:case 35671:return Im;case 35668:case 35672:return Dm;case 35669:case 35673:return Nm;case 5125:return Um;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}function Wm(i,e){i.uniform1fv(this.addr,e)}function Xm(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function qm(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function Ym(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function $m(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Km(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zm(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jm(i,e){i.uniform1iv(this.addr,e)}function Qm(i,e){i.uniform2iv(this.addr,e)}function jm(i,e){i.uniform3iv(this.addr,e)}function eg(i,e){i.uniform4iv(this.addr,e)}function tg(i,e){i.uniform1uiv(this.addr,e)}function ng(i,e){i.uniform2uiv(this.addr,e)}function ig(i,e){i.uniform3uiv(this.addr,e)}function sg(i,e){i.uniform4uiv(this.addr,e)}function rg(i,e,t){const n=this.cache,s=e.length,r=vr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sr(dd):a=cd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ag(i,e,t){const n=this.cache,s=e.length,r=vr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hd,r[a])}function og(i,e,t){const n=this.cache,s=e.length,r=vr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Sr(ud):a=pd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function lg(i,e,t){const n=this.cache,s=e.length,r=vr(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fd,r[a])}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return $m;case 35675:return Km;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return Qm;case 35668:case 35672:return jm;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}class dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vm(t.type)}}class ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cg(t.type)}}class fg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Hl(i,e){i.seq.push(e),i.map[e.id]=e}function hg(i,e,t){const n=i.name,s=n.length;for(ra.lastIndex=0;;){const r=ra.exec(n),a=ra.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Hl(t,l===void 0?new dg(o,i,e):new ug(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new fg(o),Hl(t,m)),t=m}}}class nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);hg(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Vl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pg=37297;let mg=0;function gg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Wl=new Ne;function _g(i){We._getMatrix(Wl,We.workingColorSpace,i);const e=`mat3( ${Wl.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case or:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gg(i.getShaderSource(e),o)}else return r}function xg(i,e){const t=_g(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const vg={[Cc]:"Linear",[Pc]:"Reinhard",[Lc]:"Cineon",[Ic]:"ACESFilmic",[Nc]:"AgX",[Uc]:"Neutral",[Dc]:"Custom"};function Sg(i,e){const t=vg[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new U;function Mg(){We.getLuminanceCoefficients(ks);const i=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function yg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zi(i){return i!==""}function ql(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(i){return i.replace(Tg,Ag)}function Ag(i,e){const t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ao(t)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(wg,Rg)}function Rg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Cg={[Zs]:"SHADOWMAP_TYPE_PCF",[Ki]:"SHADOWMAP_TYPE_VSM"};function Pg(i){return Cg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lg={[is]:"ENVMAP_MODE_REFRACTION"};function Ig(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Dg={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[cu]:"ENVMAP_BLENDING_MIX",[du]:"ENVMAP_BLENDING_ADD"};function Ng(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Dg[i.combine]||"ENVMAP_BLENDING_NONE"}function Ug(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Pg(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Ig(t),m=Ng(t),u=Eg(t),g=yg(r),v=s.createProgram();let y,p,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),p.length>0&&(p+=`
`)):(y=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),p=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,xg("linearToOutputTexel",t.outputColorSpace),Mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=ao(a),a=ql(a,t),a=Yl(a,t),o=ao(o),o=ql(o,t),o=Yl(o,t),a=$l(a),o=$l(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=d+y+a,A=d+p+o,E=Vl(s,s.VERTEX_SHADER,S),w=Vl(s,s.FRAGMENT_SHADER,A);s.attachShader(v,E),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(w)||"",L=D.trim(),G=F.trim(),q=V.trim();let z=!0,ee=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,w);else{const W=Xl(s,E,"vertex"),Q=Xl(s,w,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+W+`
`+Q)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(G===""||q==="")&&(ee=!1);ee&&(C.diagnostics={runnable:z,programLog:L,vertexShader:{log:G,prefix:y},fragmentShader:{log:q,prefix:p}})}s.deleteShader(E),s.deleteShader(w),h=new nr(s,v),M=bg(s,v)}let h;this.getUniforms=function(){return h===void 0&&T(this),h};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,pg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}let Fg=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bg(e),t.set(e,n)),n}}class Bg{constructor(e){this.id=Fg++,this.code=e,this.usedTimes=0}}function kg(i){return i===ii||i===sr||i===rr}function zg(i,e,t,n,s,r){const a=new So,o=new Og,c=new Set,l=[],f=new Map,m=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(h){return c.add(h),h===0?"uv":`uv${h}`}function v(h,M,I,C,D,F){const V=C.fog,L=D.geometry,G=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?C.environment:null,q=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap,z=e.get(h.envMap||G,q),ee=u[h.type];let W=n.precision;h.precision!==null&&(W=n.getMaxPrecision(h.precision),W!==h.precision&&Ie("WebGLProgram.getParameters:",h.precision,"not supported, using",W,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,j=Q!==void 0?Q.length:0;let _e=0;L.morphAttributes.position!==void 0&&(_e=1),L.morphAttributes.normal!==void 0&&(_e=2),L.morphAttributes.color!==void 0&&(_e=3);let Le,$,fe,xe;if(ee){const pe=dn[ee];Le=pe.vertexShader,$=pe.fragmentShader}else{Le=h.vertexShader,$=h.fragmentShader;const pe=o.getVertexShaderStage(h),et=o.getFragmentShaderStage(h);o.update(h,pe,et),fe=pe.id,xe=et.id}const be=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Pe=D.isInstancedMesh===!0,rt=D.isBatchedMesh===!0,Ae=!!h.map,qe=!!h.matcap,Ke=!!z,Fe=Ke&&z.isPMREMTexture===!0,vt=!!h.aoMap,ft=!!h.lightMap,we=!!h.bumpMap&&h.wireframe===!1,Re=!!h.normalMap,je=!!h.displacementMap,Qe=!!h.emissiveMap,yt=!!h.metalnessMap,mt=!!h.roughnessMap,Bt=h.anisotropy>0,N=h.clearcoat>0,Yt=h.diffuseRoughness>0,at=h.dispersion>0,ot=h.retroreflectivity>0,he=h.iridescence>0,St=h.sheen>0,Ce=h.transmission>0,De=Bt&&!!h.anisotropyMap,b=N&&!!h.clearcoatMap,_=N&&!!h.clearcoatNormalMap,B=N&&!!h.clearcoatRoughnessMap,te=Yt&&!!h.diffuseRoughnessMap,J=he&&!!h.iridescenceMap,se=he&&!!h.iridescenceThicknessMap,ce=St&&!!h.sheenColorMap,Y=St&&!!h.sheenRoughnessMap,K=!!h.specularMap,ae=!!h.specularColorMap,R=!!h.specularIntensityMap,Z=Ce&&!!h.transmissionMap,X=Ce&&!!h.thicknessMap,oe=!!h.gradientMap,ie=!!h.alphaMap,re=h.alphaTest>0,ye=!!h.alphaHash,Be=!!h.extensions;let ne=Rn;h.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Te=Fe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Oe={shaderID:ee,shaderType:h.type,shaderName:h.name,vertexShader:Le,fragmentShader:$,defines:h.defines,customVertexShaderID:fe,customFragmentShaderID:xe,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:W,batching:rt,batchingColor:rt&&D._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!h.alphaToCoverage,map:Ae,matcap:qe,envMap:Ke,envMapMode:Ke&&z.mapping,envMapPMREM:Fe,envMapMaxLod:Fe?Te.length-1:null,envMapSize:Fe?Te[0].width:null,aoMap:vt,lightMap:ft,bumpMap:we,normalMap:Re,displacementMap:je,emissiveMap:Qe,normalMapObjectSpace:Re&&h.normalMapType===hu,normalMapTangentSpace:Re&&h.normalMapType===io,packedNormalMap:Re&&h.normalMapType===io&&kg(h.normalMap.format),metalnessMap:yt,roughnessMap:mt,anisotropy:Bt,anisotropyMap:De,clearcoat:N,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:B,diffuseRoughness:Yt,diffuseRoughnessMap:te,dispersion:at,retroreflection:ot,iridescence:he,iridescenceMap:J,iridescenceThicknessMap:se,sheen:St,sheenColorMap:ce,sheenRoughnessMap:Y,specularMap:K,specularColorMap:ae,specularIntensityMap:R,transmission:Ce,transmissionMap:Z,thicknessMap:X,gradientMap:oe,opaque:h.transparent===!1&&h.blending===ji&&h.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:ye,combine:h.combine,mapUv:Ae&&g(h.map.channel),aoMapUv:vt&&g(h.aoMap.channel),lightMapUv:ft&&g(h.lightMap.channel),bumpMapUv:we&&g(h.bumpMap.channel),normalMapUv:Re&&g(h.normalMap.channel),displacementMapUv:je&&g(h.displacementMap.channel),emissiveMapUv:Qe&&g(h.emissiveMap.channel),metalnessMapUv:yt&&g(h.metalnessMap.channel),roughnessMapUv:mt&&g(h.roughnessMap.channel),anisotropyMapUv:De&&g(h.anisotropyMap.channel),clearcoatMapUv:b&&g(h.clearcoatMap.channel),clearcoatNormalMapUv:_&&g(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&g(h.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&g(h.diffuseRoughnessMap.channel),iridescenceMapUv:J&&g(h.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(h.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(h.sheenColorMap.channel),sheenRoughnessMapUv:Y&&g(h.sheenRoughnessMap.channel),specularMapUv:K&&g(h.specularMap.channel),specularColorMapUv:ae&&g(h.specularColorMap.channel),specularIntensityMapUv:R&&g(h.specularIntensityMap.channel),transmissionMapUv:Z&&g(h.transmissionMap.channel),thicknessMapUv:X&&g(h.thicknessMap.channel),alphaMapUv:ie&&g(h.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Re||Bt),vertexNormals:!!L.attributes.normal,vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Ae||ie),fog:!!V,useFog:h.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:h.wireframe===!1&&(h.flatShading===!0||L.attributes.normal===void 0&&Re===!1&&(h.isMeshLambertMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isMeshPhysicalMaterial)),sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ue,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:_e,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:h.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ae&&h.map.isVideoTexture===!0&&We.getTransfer(h.map.colorSpace)===tt,decodeVideoTextureEmissive:Qe&&h.emissiveMap.isVideoTexture===!0&&We.getTransfer(h.emissiveMap.colorSpace)===tt,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===un,flipSided:h.side===Gt,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:Be&&h.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&h.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function y(h){const M=[];if(h.shaderID?M.push(h.shaderID):(M.push(h.customVertexShaderID),M.push(h.customFragmentShaderID)),h.defines!==void 0)for(const I in h.defines)M.push(I),M.push(h.defines[I]);return h.isRawShaderMaterial===!1&&(p(M,h),d(M,h),M.push(i.outputColorSpace)),M.push(h.customProgramCacheKey),M.join()}function p(h,M){h.push(M.precision),h.push(M.outputColorSpace),h.push(M.envMapMode),h.push(M.envMapPMREM),h.push(M.envMapMaxLod),h.push(M.envMapSize),h.push(M.mapUv),h.push(M.alphaMapUv),h.push(M.lightMapUv),h.push(M.aoMapUv),h.push(M.bumpMapUv),h.push(M.normalMapUv),h.push(M.displacementMapUv),h.push(M.emissiveMapUv),h.push(M.metalnessMapUv),h.push(M.roughnessMapUv),h.push(M.anisotropyMapUv),h.push(M.clearcoatMapUv),h.push(M.clearcoatNormalMapUv),h.push(M.clearcoatRoughnessMapUv),h.push(M.diffuseRoughnessMapUv),h.push(M.iridescenceMapUv),h.push(M.iridescenceThicknessMapUv),h.push(M.sheenColorMapUv),h.push(M.sheenRoughnessMapUv),h.push(M.specularMapUv),h.push(M.specularColorMapUv),h.push(M.specularIntensityMapUv),h.push(M.transmissionMapUv),h.push(M.thicknessMapUv),h.push(M.combine),h.push(M.fogExp2),h.push(M.sizeAttenuation),h.push(M.morphTargetsCount),h.push(M.numSunLights),h.push(M.numDirLights),h.push(M.numPointLights),h.push(M.numSpotLights),h.push(M.numSpotLightMaps),h.push(M.numHemiLights),h.push(M.numRectAreaLights),h.push(M.numSunLightShadows),h.push(M.numDirLightShadows),h.push(M.numPointLightShadows),h.push(M.numSpotLightShadows),h.push(M.numSpotLightShadowsWithMaps),h.push(M.numLightProbes),h.push(M.numLightProbeGrids),h.push(M.shadowMapType),h.push(M.toneMapping),h.push(M.numClippingPlanes),h.push(M.numClipIntersection),h.push(M.depthPacking)}function d(h,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),h.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),h.push(a.mask)}function S(h){const M=u[h.type];let I;if(M){const C=dn[M];I=ef.clone(C.uniforms)}else I=h.uniforms;return I}function A(h,M){let I=f.get(M);return I!==void 0?++I.usedTimes:(I=new Ug(i,M,h,s),l.push(I),f.set(M,I)),I}function E(h){if(--h.usedTimes===0){const M=l.indexOf(h);l[M]=l[l.length-1],l.pop(),f.delete(h.cacheKey),h.destroy()}}function w(h){o.remove(h)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:y,getUniforms:S,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:T}}function Gg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Hg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,v,y,p,d){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:g,material:v,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:d},i[e]=S):(S.id=u.id,S.object=u,S.geometry=g,S.material=v,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=p,S.group=d),e++,S}function c(u,g,v,y,p,d,S){S.reversedDepth===!0&&(p=-p);const A=o(u,g,v,y,p,d);v.transmission>0?n.push(A):v.transparent===!0?s.push(A):t.push(A)}function l(u,g,v,y,p,d){const S=o(u,g,v,y,p,d);v.transmission>0?n.unshift(S):v.transparent===!0?s.unshift(S):t.unshift(S)}function f(u,g){t.length>1&&t.sort(u||Hg),n.length>1&&n.sort(g||Zl),s.length>1&&s.sort(g||Zl)}function m(){for(let u=e,g=i.length;u<g;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:m,sort:f}}function Vg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Jl,i.set(n,[a])):s>=r.length?(a=new Jl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new $e};break;case"SpotLight":t={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Xg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qg=0;function Yg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $g(i){const e=new Wg,t=Xg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new ct,a=new ct;function o(l){let f=0,m=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let g=0,v=0,y=0,p=0,d=0,S=0,A=0,E=0,w=0,T=0,h=0,M=0,I=0,C=0;l.sort(Yg);for(let F=0,V=l.length;F<V;F++){const L=l[F],G=L.color,q=L.intensity,z=L.distance;let ee=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ii?ee=L.shadow.map.texture:ee=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=G.r*q,m+=G.g*q,u+=G.b*q;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],q);C++}else if(L.isSunLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[v]=j,n.sunShadowMap[v]=ee;const _e=Q.getViewportCount();for(let Le=0;Le<_e;Le++)n.sunShadowMatrix[y+Le]=Q.getMatrix(Le),n.sunShadowCascade[y+Le]=Q._cascadeData[Le];y+=_e,v++}n.sun[g]=W,g++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=L.shadow.matrix,w++}n.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(G).multiplyScalar(q),W.distance=z,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[S]=W;const Q=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,Q.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[S]=Q.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=ee,h++}S++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(G).multiplyScalar(q),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=W,A++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=ee,n.pointShadowMatrix[d]=L.shadow.matrix,T++}n.point[d]=W,d++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(q),W.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[E]=W,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=u;const D=n.hash;(D.sunLength!==g||D.directionalLength!==p||D.pointLength!==d||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==E||D.numSunShadows!==v||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==h||D.numSpotMaps!==M||D.numLightProbes!==C)&&(n.sun.length=g,n.directional.length=p,n.spot.length=S,n.rectArea.length=A,n.point.length=d,n.hemi.length=E,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=h,n.spotShadowMap.length=h,n.spotLightMatrix.length=h+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,D.sunLength=g,D.directionalLength=p,D.pointLength=d,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=E,D.numSunShadows=v,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=h,D.numSpotMaps=M,D.numLightProbes=C,n.version=qg++)}function c(l,f){let m=0,u=0,g=0,v=0,y=0,p=0;const d=f.matrixWorldInverse;for(let S=0,A=l.length;S<A;S++){const E=l[S];if(E.isSunLight){const w=n.sun[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),m++}else if(E.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),u++}else if(E.isSpotLight){const w=n.spot[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),v++}else if(E.isRectAreaLight){const w=n.rectArea[y];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(E.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const w=n.point[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),g++}else if(E.isHemisphereLight){const w=n.hemi[p];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:n}}function Ql(i){const e=new $g(i),t=[],n=[],s=[];function r(m){f.camera=m,t.length=0,n.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):t.push(m)}function o(m){n.push(m)}function c(){e.setup(t),s.sort((m,u)=>m.priority-u.priority||m.id-u.id)}function l(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Kg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ql(i),e.set(s,[o])):r>=a.length?(o=new Ql(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`,Qg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],jg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],jl=new ct,Xi=new U,aa=new U;function e0(i,e,t){let n=new os;const s=new Ge,r=new Ge,a=new ut,o=new rf,c=new af,l={},f=t.maxTextureSize,m={[ni]:Gt,[Gt]:ni,[un]:un},u=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ze(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let d=this.type;this.render=function(T,h,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Tc&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);const I=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(wi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=d!==this.type;V&&h.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=T.length;L<G;L++){const q=T[L],z=q.shadow;if(z===void 0){Ie("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ee=z.getFrameExtents();s.multiply(ee),r.copy(z.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ee.x),s.x=r.x*ee.x,z.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ee.y),s.y=r.y*ee.y,z.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ki){if(q.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new mn(s.x,s.y,{format:ii,type:_n,minFilter:zt,magFilter:zt,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Ii(s.x,s.y,fn),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=qn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct}else q.isPointLight?(z.map=new Co(s.x),z.map.depthTexture=new ed(s.x,gn)):(z.map=new mn(s.x,s.y),z.map.depthTexture=new Ii(s.x,s.y,gn)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=qn,this.type===Zs?(z.map.depthTexture.compareFunction=W?Xc:Wc,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,M);const j=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let _e=0;_e<Q;_e++){const Le=z.getCamera(_e);if(q.isPointLight){const $=z.camera,fe=z.matrix,xe=q.distance||$.far;xe!==$.far&&($.far=xe,$.updateProjectionMatrix()),Xi.setFromMatrixPosition(q.matrixWorld),$.position.copy(Xi),aa.copy($.position),aa.add(Qg[_e]),$.up.copy(jg[_e]),$.lookAt(aa),$.updateMatrixWorld(),fe.makeTranslation(-Xi.x,-Xi.y,-Xi.z),jl.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(jl,$.coordinateSystem,$.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(z.map),i.clear());const $=z.getViewport(_e);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),F.viewport(a)}n=z.getFrustum(_e),E(h,M,Le,q,j,this.type)}z.isPointLightShadow!==!0&&this.type===Ki&&S(z,M),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(I,C,D)};function S(T,h){const M=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null?T.mapPass=new mn(s.x,s.y,{format:ii,type:_n}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(h,null,M,u,y,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(h,null,M,g,y,null)}function A(T,h,M,I){let C=null;const D=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=M.isPointLight===!0?c:o,i.localClippingEnabled&&h.clipShadows===!0&&Array.isArray(h.clippingPlanes)&&h.clippingPlanes.length!==0||h.displacementMap&&h.displacementScale!==0||h.alphaMap&&h.alphaTest>0||h.map&&h.alphaTest>0||h.alphaToCoverage===!0){const F=C.uuid,V=h.uuid;let L=l[F];L===void 0&&(L={},l[F]=L);let G=L[V];G===void 0&&(G=C.clone(),L[V]=G,h.addEventListener("dispose",w)),C=G}if(C.visible=h.visible,C.wireframe=h.wireframe,I===Ki?C.side=h.shadowSide!==null?h.shadowSide:h.side:C.side=h.shadowSide!==null?h.shadowSide:m[h.side],C.alphaMap=h.alphaMap,C.alphaTest=h.alphaToCoverage===!0?.5:h.alphaTest,C.map=h.map,C.clipShadows=h.clipShadows,C.clippingPlanes=h.clippingPlanes,C.clipIntersection=h.clipIntersection,C.displacementMap=h.displacementMap,C.displacementScale=h.displacementScale,C.displacementBias=h.displacementBias,C.wireframeLinewidth=h.wireframeLinewidth,C.linewidth=h.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=i.properties.get(C);F.light=M}return C}function E(T,h,M,I,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Ki)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const L=e.update(T),G=T.material;if(Array.isArray(G)){const q=L.groups;for(let z=0,ee=q.length;z<ee;z++){const W=q[z],Q=G[W.materialIndex];if(Q&&Q.visible){const j=A(T,Q,I,D);T.onBeforeShadow(i,T,h,M,L,j,W),i.renderBufferDirect(M,null,L,j,T,W),T.onAfterShadow(i,T,h,M,L,j,W)}}}else if(G.visible){const q=A(T,G,I,D);T.onBeforeShadow(i,T,h,M,L,q,null),i.renderBufferDirect(M,null,L,q,T,null),T.onAfterShadow(i,T,h,M,L,q,null)}}const V=T.children;for(let L=0,G=V.length;L<G;L++)E(V[L],h,M,I,C,D)}function w(T){T.target.removeEventListener("dispose",w);for(const M in l){const I=l[M],C=T.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function t0(i,e){function t(){let R=!1;const Z=new ut;let X=null;const oe=new ut(0,0,0,0);return{setMask:function(ie){X!==ie&&!R&&(i.colorMask(ie,ie,ie,ie),X=ie)},setLocked:function(ie){R=ie},setClear:function(ie,re,ye,Be,ne){ne===!0&&(ie*=Be,re*=Be,ye*=Be),Z.set(ie,re,ye,Be),oe.equals(Z)===!1&&(i.clearColor(ie,re,ye,Be),oe.copy(Z))},reset:function(){R=!1,X=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,Z=!1,X=null,oe=null,ie=null;return{setReversed:function(re){if(Z!==re){const ye=e.get("EXT_clip_control");re?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Z=re;const Be=ie;ie=null,this.setClear(Be)}},getReversed:function(){return Z},setTest:function(re){re?ue(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(re){X!==re&&!R&&(i.depthMask(re),X=re)},setFunc:function(re){if(Z&&(re=bu[re]),oe!==re){switch(re){case xa:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){R=re},setClear:function(re){ie!==re&&(ie=re,Z&&(re=1-re),i.clearDepth(re))},reset:function(){R=!1,X=null,oe=null,ie=null,Z=!1}}}function s(){let R=!1,Z=null,X=null,oe=null,ie=null,re=null,ye=null,Be=null,ne=null;return{setTest:function(Te){R||(Te?ue(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(Te){Z!==Te&&!R&&(i.stencilMask(Te),Z=Te)},setFunc:function(Te,Oe,pe){(X!==Te||oe!==Oe||ie!==pe)&&(i.stencilFunc(Te,Oe,pe),X=Te,oe=Oe,ie=pe)},setOp:function(Te,Oe,pe){(re!==Te||ye!==Oe||Be!==pe)&&(i.stencilOp(Te,Oe,pe),re=Te,ye=Oe,Be=pe)},setLocked:function(Te){R=Te},setClear:function(Te){ne!==Te&&(i.clearStencil(Te),ne=Te)},reset:function(){R=!1,Z=null,X=null,oe=null,ie=null,re=null,ye=null,Be=null,ne=null}}}const r=new t,a=new n,o=new s;let c={};const l=new WeakMap;let f={},m={},u={},g=new WeakMap,v=[],y=null,p=!1,d=null,S=null,A=null,E=null,w=null,T=null,h=null,M=new $e(0,0,0),I=0,C=!1,D=null,F=null,V=null,L=null,G=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ee=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=ee>=2);let Q=null,j={};const _e=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),$=new ut().fromArray(_e),fe=new ut().fromArray(Le);function xe(R,Z,X,oe){const ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(R,re),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<X;ye++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(Z+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}const be={};be[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(ns),we(!1),Re(tl),ue(i.CULL_FACE),vt(wi);function ue(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function Pe(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function rt(R,Z){return u[R]!==Z?(i.bindFramebuffer(R,Z),u[R]=Z,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ae(R,Z){let X=v,oe=!1;if(R){X=g.get(Z),X===void 0&&(X=[],g.set(Z,X));const ie=R.textures;if(X.length!==ie.length||X[0]!==i.COLOR_ATTACHMENT0){for(let re=0,ye=ie.length;re<ye;re++)X[re]=i.COLOR_ATTACHMENT0+re;X.length=ie.length,oe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,oe=!0);oe&&i.drawBuffers(X)}function qe(R){return y!==R?(i.useProgram(R),y=R,!0):!1}const Ke={[bi]:i.FUNC_ADD,[qd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};Ke[$d]=i.MIN,Ke[Kd]=i.MAX;const Fe={[Zd]:i.ZERO,[Jd]:i.ONE,[Qd]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[su]:i.SRC_ALPHA_SATURATE,[nu]:i.DST_COLOR,[eu]:i.DST_ALPHA,[jd]:i.ONE_MINUS_SRC_COLOR,[wc]:i.ONE_MINUS_SRC_ALPHA,[iu]:i.ONE_MINUS_DST_COLOR,[tu]:i.ONE_MINUS_DST_ALPHA,[ru]:i.CONSTANT_COLOR,[au]:i.ONE_MINUS_CONSTANT_COLOR,[ou]:i.CONSTANT_ALPHA,[lu]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(R,Z,X,oe,ie,re,ye,Be,ne,Te){if(R===wi){p===!0&&(Pe(i.BLEND),p=!1);return}if(p===!1&&(ue(i.BLEND),p=!0),R!==Xd){if(R!==d||Te!==C){if((S!==bi||w!==bi)&&(i.blendEquation(i.FUNC_ADD),S=bi,w=bi),Te)switch(R){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",R);break}else switch(R){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",R);break}A=null,E=null,T=null,h=null,M.set(0,0,0),I=0,d=R,C=Te}return}ie=ie||Z,re=re||X,ye=ye||oe,(Z!==S||ie!==w)&&(i.blendEquationSeparate(Ke[Z],Ke[ie]),S=Z,w=ie),(X!==A||oe!==E||re!==T||ye!==h)&&(i.blendFuncSeparate(Fe[X],Fe[oe],Fe[re],Fe[ye]),A=X,E=oe,T=re,h=ye),(Be.equals(M)===!1||ne!==I)&&(i.blendColor(Be.r,Be.g,Be.b,ne),M.copy(Be),I=ne),d=R,C=!1}function ft(R,Z){R.side===un?Pe(i.CULL_FACE):ue(i.CULL_FACE);let X=R.side===Gt;Z&&(X=!X),we(X),R.blending===ji&&R.transparent===!1?vt(wi):vt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Qe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function Re(R){R!==Vd?(ue(i.CULL_FACE),R!==F&&(R===tl?i.cullFace(i.BACK):R===Wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),F=R}function je(R){R!==V&&(z&&i.lineWidth(R),V=R)}function Qe(R,Z,X){R?(ue(i.POLYGON_OFFSET_FILL),(L!==Z||G!==X)&&(L=Z,G=X,a.getReversed()&&(Z=-Z,X=-X),i.polygonOffset(Z,X))):Pe(i.POLYGON_OFFSET_FILL)}function yt(R){R?ue(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function mt(R){R===void 0&&(R=i.TEXTURE0+q-1),Q!==R&&(i.activeTexture(R),Q=R)}function Bt(R,Z,X){X===void 0&&(Q===null?X=i.TEXTURE0+q-1:X=Q);let oe=j[X];oe===void 0&&(oe={type:void 0,texture:void 0},j[X]=oe),(oe.type!==R||oe.texture!==Z)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(R,Z||be[R]),oe.type=R,oe.texture=Z)}function N(){const R=j[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function at(){try{i.compressedTexImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function ot(){try{i.texSubImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function he(){try{i.texSubImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function St(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function De(){try{i.texStorage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function b(){try{i.texStorage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function _(){try{i.texImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function te(R){return m[R]!==void 0?m[R]:i.getParameter(R)}function J(R,Z){m[R]!==Z&&(i.pixelStorei(R,Z),m[R]=Z)}function se(R){$.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),$.copy(R))}function ce(R){fe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),fe.copy(R))}function Y(R,Z){let X=l.get(Z);X===void 0&&(X=new WeakMap,l.set(Z,X));let oe=X.get(R);oe===void 0&&(oe=i.getUniformBlockIndex(Z,R.name),i.uniformBlockBinding(Z,oe,oe),X.set(R,oe))}function K(R,Z,X){const ie=l.get(Z).get(R);c[ie]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,X),c[ie]=X)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},m={},Q=null,j={},u={},c={},g=new WeakMap,v=[],y=null,p=!1,d=null,S=null,A=null,E=null,w=null,T=null,h=null,M=new $e(0,0,0),I=0,C=!1,D=null,F=null,V=null,L=null,G=null,$.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Pe,bindFramebuffer:rt,drawBuffers:Ae,useProgram:qe,setBlending:vt,setMaterial:ft,setFlipSided:we,setCullFace:Re,setLineWidth:je,setPolygonOffset:Qe,setScissorTest:yt,activeTexture:mt,bindTexture:Bt,unbindTexture:N,compressedTexImage2D:Yt,compressedTexImage3D:at,texImage2D:_,texImage3D:B,pixelStorei:J,getParameter:te,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:De,texStorage3D:b,texSubImage2D:ot,texSubImage3D:he,compressedTexSubImage2D:St,compressedTexSubImage3D:Ce,scissor:se,viewport:ce,reset:ae}}function n0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,f=new WeakMap,m=new Set;let u;const g=new WeakMap,v=new Set,y=new FinalizationRegistry(b=>v.delete(b));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(b,_){return p?new OffscreenCanvas(b,_):as("canvas")}function S(b,_,B){let te=1;const J=De(b);if((J.width>B||J.height>B)&&(te=B/Math.max(J.width,J.height)),te<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const se=Math.floor(te*J.width),ce=Math.floor(te*J.height);u===void 0&&(u=d(se,ce));const Y=_?d(se,ce):u;return Y.width=se,Y.height=ce,Y.getContext("2d").drawImage(b,0,0,se,ce),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+se+"x"+ce+")."),Y}else return"data"in b&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function A(b){return b.generateMipmaps}function E(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,_,B,te,J,se=!1){if(b!==null){if(i[b]!==void 0)return i[b];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8),B===i.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),B===i.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8),B===i.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),B===i.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),B===i.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const K=se?or:We.getTransfer(J);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=K===tt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),B===i.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function h(b,_){let B;return b?_===null||_===gn||_===Li?B=i.DEPTH24_STENCIL8:_===fn?B=i.DEPTH32F_STENCIL8:_===ss&&(B=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gn||_===Li?B=i.DEPTH_COMPONENT24:_===fn?B=i.DEPTH_COMPONENT32F:_===ss&&(B=i.DEPTH_COMPONENT16),B}function M(b,_){return A(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ct&&b.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function I(b){const _=new WeakRef(b);n.get(b).__ref=_,v.add(_),y.register(b,_,_)}function C(b){const _=n.get(b).__ref;_!==void 0&&(v.delete(_),y.unregister(_))}function D(b){V(b.target)}function F(b){L(b.target)}function V(b){b.removeEventListener("dispose",D),C(b),q(b),b.isVideoTexture&&f.delete(b),b.isHTMLTexture&&m.delete(b)}function L(b){b.removeEventListener("dispose",F),C(b),ee(b)}function G(){for(const b of v){const _=b.deref();_!==void 0&&(_.isRenderTarget===!0?L(_):V(_))}v.clear(),m.clear()}function q(b){const _=n.get(b);if(_.__webglInit===void 0)return;const B=b.source,te=g.get(B);if(te){const J=te[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(b),Object.keys(te).length===0&&g.delete(B)}n.remove(b)}function z(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const B=b.source,te=g.get(B);delete te[_.__cacheKey],a.memory.textures--}function ee(b){const _=n.get(b);_.__depthDisposeCallback&&_.__depthDisposeCallback();const B=b.depthTexture;if(B&&B.renderTarget===b&&V(B),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let se=0;se<_.__webglFramebuffer[J].length;se++)i.deleteFramebuffer(_.__webglFramebuffer[J][se]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const te=b.textures;for(let J=0,se=te.length;J<se;J++){const ce=n.get(te[J]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(te[J])}n.remove(b)}let W=0;function Q(){W=0}function j(){return W}function _e(b){W=b}function Le(){const b=W;return b>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,b}function $(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function fe(b,_){const B=n.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const te=b.image;if(te===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(B,b,_);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function xe(b,_){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ft(B,b,_);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function be(b,_){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){ft(B,b,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function ue(b,_){const B=n.get(b);if(b.version>0&&B.__version!==b.version){we(B,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const Pe={[Ta]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},rt={[Ct]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Ae={[mu]:i.NEVER,[qc]:i.ALWAYS,[gu]:i.LESS,[Wc]:i.LEQUAL,[_u]:i.EQUAL,[Xc]:i.GEQUAL,[xu]:i.GREATER,[vu]:i.NOTEQUAL};function qe(b,_){if(_.type===fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===Dr||_.magFilter===xs||_.magFilter===Vn||_.minFilter===zt||_.minFilter===Dr||_.minFilter===xs||_.minFilter===Vn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Pe[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Pe[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Pe[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,rt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,rt[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ct||_.minFilter!==xs&&_.minFilter!==Vn||_.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ke(b,_){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",D),I(_));const te=_.source;let J=g.get(te);J===void 0&&(J={},g.set(te,J));const se=$(_);if(se!==b.__cacheKey){J[se]===void 0&&(J[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[se].usedTimes++;const ce=J[b.__cacheKey];ce!==void 0&&(J[b.__cacheKey].usedTimes--,ce.usedTimes===0&&z(_)),b.__cacheKey=se,b.__webglTexture=J[se].texture}return B}function Fe(b,_,B){return Math.floor(Math.floor(b/B)/_)}function vt(b,_,B,te){const se=b.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,te,_.data);else{se.sort((R,Z)=>R.start-Z.start);let ce=0;for(let R=1;R<se.length;R++){const Z=se[ce],X=se[R],oe=Z.start+Z.count,ie=Fe(X.start,_.width,4),re=Fe(Z.start,_.width,4);X.start<=oe+1&&ie===re&&Fe(X.start+X.count-1,_.width,4)===ie?Z.count=Math.max(Z.count,X.start+X.count-Z.start):(++ce,se[ce]=X)}se.length=ce+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let R=0,Z=se.length;R<Z;R++){const X=se[R],oe=Math.floor(X.start/4),ie=Math.ceil(X.count/4),re=oe%_.width,ye=Math.floor(oe/_.width),Be=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye),t.texSubImage2D(i.TEXTURE_2D,0,re,ye,Be,ne,B,te,_.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ft(b,_,B){let te=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(te=i.TEXTURE_3D);const J=Ke(b,_),se=_.source;t.bindTexture(te,b.__webglTexture,i.TEXTURE0+B);const ce=n.get(se);if(se.version!==ce.__version||J===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ne=We.getPrimaries(We.workingColorSpace),Te=_.colorSpace===Hn?null:We.getPrimaries(_.colorSpace),Oe=_.colorSpace===Hn||ne===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let K=S(_.image,!1,s.maxTextureSize);K=Ce(_,K);const ae=r.convert(_.format,_.colorSpace),R=r.convert(_.type);let Z=T(_.internalFormat,ae,R,_.normalized,_.colorSpace,_.isVideoTexture);qe(te,_);let X;const oe=_.mipmaps,ie=_.isVideoTexture!==!0,re=ce.__version===void 0||J===!0,ye=se.dataReady,Be=M(_,K);if(_.isDepthTexture)Z=h(_.format===Wn,_.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Z,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,ae,R,null));else if(_.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Z,oe[0].width,oe[0].height);for(let ne=0,Te=oe.length;ne<Te;ne++)X=oe[ne],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,R,X.data):t.texImage2D(i.TEXTURE_2D,ne,Z,X.width,X.height,0,ae,R,X.data);_.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Be,Z,K.width,K.height),ye&&vt(_,K,ae,R)):t.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,ae,R,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Z,oe[0].width,oe[0].height,K.depth);for(let ne=0,Te=oe.length;ne<Te;ne++)if(X=oe[ne],_.format!==hn)if(ae!==null)if(ie){if(ye)if(_.layerUpdates.size>0){const Oe=Il(X.width,X.height,_.format,_.type);for(const pe of _.layerUpdates){const et=X.data.subarray(pe*Oe/X.data.BYTES_PER_ELEMENT,(pe+1)*Oe/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,pe,X.width,X.height,1,ae,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,ae,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Z,X.width,X.height,K.depth,0,X.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,ae,R,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Z,X.width,X.height,K.depth,0,ae,R,X.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Z,oe[0].width,oe[0].height);for(let ne=0,Te=oe.length;ne<Te;ne++)X=oe[ne],_.format!==hn?ae!==null?ie?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Z,X.width,X.height,0,X.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,R,X.data):t.texImage2D(i.TEXTURE_2D,ne,Z,X.width,X.height,0,ae,R,X.data)}else if(_.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Z,K.width,K.height,K.depth),ye)if(_.layerUpdates.size>0){const ne=Il(K.width,K.height,_.format,_.type);for(const Te of _.layerUpdates){const Oe=K.data.subarray(Te*ne/K.data.BYTES_PER_ELEMENT,(Te+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,K.width,K.height,1,ae,R,Oe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,R,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,ae,R,K.data);else if(_.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Be,Z,K.width,K.height,K.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,R,K.data)):t.texImage3D(i.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,ae,R,K.data);else if(_.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Be,Z,K.width,K.height);else{let ne=K.width,Te=K.height;for(let Oe=0;Oe<Be;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Z,ne,Te,0,ae,R,null),ne>>=1,Te>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),m.add(_),ne.onpaint=Te=>{const Oe=Te.changedElements;for(const pe of m)Oe.includes(pe.image)&&(pe.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Oe=i.RGBA,pe=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,pe,et,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){const ne=De(oe[0]);t.texStorage2D(i.TEXTURE_2D,Be,Z,ne.width,ne.height)}for(let ne=0,Te=oe.length;ne<Te;ne++)X=oe[ne],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,R,X):t.texImage2D(i.TEXTURE_2D,ne,Z,ae,R,X);_.generateMipmaps=!1}else if(ie){if(re){const ne=De(K);t.texStorage2D(i.TEXTURE_2D,Be,Z,ne.width,ne.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,R,K)}else t.texImage2D(i.TEXTURE_2D,0,Z,ae,R,K);A(_)&&_.mipmapsAutoUpdate===!0&&E(te),ce.__version=se.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function we(b,_,B){if(_.image.length!==6)return;const te=Ke(b,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const se=n.get(J);if(J.version!==se.__version||te===!0){t.activeTexture(i.TEXTURE0+B);const ce=We.getPrimaries(We.workingColorSpace),Y=_.colorSpace===Hn?null:We.getPrimaries(_.colorSpace),K=_.colorSpace===Hn||ce===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ae=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,Z=[];for(let pe=0;pe<6;pe++)!ae&&!R?Z[pe]=S(_.image[pe],!0,s.maxCubemapSize):Z[pe]=R?_.image[pe].image:_.image[pe],Z[pe]=Ce(_,Z[pe]);const X=Z[0],oe=r.convert(_.format,_.colorSpace),ie=r.convert(_.type);let re=T(_.internalFormat,oe,ie,_.normalized,_.colorSpace);const ye=_.isVideoTexture!==!0,Be=se.__version===void 0||te===!0,ne=J.dataReady;let Te=M(_,X);qe(i.TEXTURE_CUBE_MAP,_);let Oe;if(_.isDepthTexture){if(re=h(_.format===Wn,_.type),Be)if(ye)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,X.width,X.height);else for(let pe=0;pe<6;pe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,re,X.width,X.height,0,oe,ie,null)}else if(ae){ye&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,re,X.width,X.height);for(let pe=0;pe<6;pe++){Oe=Z[pe].mipmaps;for(let et=0;et<Oe.length;et++){const bt=Oe[et];_.format!==hn?oe!==null?ye?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,et,0,0,bt.width,bt.height,oe,bt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,et,re,bt.width,bt.height,0,bt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,et,0,0,bt.width,bt.height,oe,ie,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,et,re,bt.width,bt.height,0,oe,ie,bt.data)}}}else{if(Oe=_.mipmaps,ye&&Be){Oe.length>0&&Te++;const pe=De(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,re,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(R){ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Z[pe].width,Z[pe].height,oe,ie,Z[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,re,Z[pe].width,Z[pe].height,0,oe,ie,Z[pe].data);for(let et=0;et<Oe.length;et++){const Pn=Oe[et].image[pe].image;ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,et+1,0,0,Pn.width,Pn.height,oe,ie,Pn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,et+1,re,Pn.width,Pn.height,0,oe,ie,Pn.data)}}else{ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,oe,ie,Z[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,re,oe,ie,Z[pe]);for(let et=0;et<Oe.length;et++){const bt=Oe[et];ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,et+1,0,0,oe,ie,bt.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,et+1,re,oe,ie,bt.image[pe])}}}A(_)&&_.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),se.__version=J.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Re(b,_,B,te,J,se){const ce=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),K=T(B.internalFormat,ce,Y,B.normalized,B.colorSpace),ae=n.get(_),R=n.get(B);if(R.__renderTarget=_,!ae.__hasExternalTextures){const Z=Math.max(1,_.width>>se),X=Math.max(1,_.height>>se);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,se,K,Z,X,_.depth,0,ce,Y,null):t.texImage2D(J,se,K,Z,X,0,ce,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),he(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,R.__webglTexture,0,ot(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,J,R.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(b,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const te=_.depthTexture,J=te&&te.isDepthTexture?te.type:null,se=h(_.stencilBuffer,J),ce=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(_),se,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(_),se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,b)}else{const te=_.textures;for(let J=0;J<te.length;J++){const se=te[J],ce=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),K=T(se.internalFormat,ce,Y,se.normalized,se.colorSpace);he(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot(_),K,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot(_),K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(b,_,B){const te=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(_.depthTexture);J.__renderTarget=_;const se=te?_.depthTexture.image[0]:_.depthTexture.image;(!J.__webglTexture||se.width!==_.width||se.height!==_.height)&&(se.width=_.width,se.height=_.height,_.depthTexture.needsUpdate=!0),te?ue(_.depthTexture,0):fe(_.depthTexture,0);const ce=J.__webglTexture,Y=ot(_),K=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ae=_.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===qn)he(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else if(_.depthTexture.format===Wn)he(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yt(b){const _=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const te=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),te){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,te.removeEventListener("dispose",J)};te.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=te}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let te=0;te<6;te++)Qe(_.__webglFramebuffer[te],b,te);else b.texture.mipmaps.length>0?Qe(_.__webglFramebuffer[0],b,0):Qe(_.__webglFramebuffer,b,0);else if(B){_.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[te]),_.__webglDepthbuffer[te]===void 0)_.__webglDepthbuffer[te]=i.createRenderbuffer(),je(_.__webglDepthbuffer[te],b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),je(_.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(b,_,B){const te=n.get(b);_!==void 0&&Re(te.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&yt(b)}function Bt(b){const _=b.texture,B=n.get(b),te=n.get(_);b.addEventListener("dispose",F),I(b);const J=b.textures,se=b.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=_.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let K=0;K<_.mipmaps.length;K++)B.__webglFramebuffer[Y][K]=i.createFramebuffer()}else B.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)B.__webglFramebuffer[Y]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Y=0,K=J.length;Y<K;Y++){const ae=n.get(J[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&he(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){const K=J[Y];B.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const ae=r.convert(K.format,K.colorSpace),R=r.convert(K.type),Z=T(K.internalFormat,ae,R,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),X=ot(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),je(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),qe(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Re(B.__webglFramebuffer[Y][K],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else Re(B.__webglFramebuffer[Y],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);A(_)?E(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let Y=0,K=J.length;Y<K;Y++){const ae=J[Y],R=n.get(ae);let Z=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Z=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,R.__webglTexture),qe(Z,ae),Re(B.__webglFramebuffer,b,ae,i.COLOR_ATTACHMENT0+Y,Z,0),A(ae)&&E(Z)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,te.__webglTexture),qe(Y,_),_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Re(B.__webglFramebuffer[K],b,_,i.COLOR_ATTACHMENT0,Y,K);else Re(B.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,Y,0);A(_)?E(Y):_.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&yt(b)}function N(b){const _=b.textures;for(let B=0,te=_.length;B<te;B++){const J=_[B];if(A(J)&&J.mipmapsAutoUpdate===!0){const se=w(b),ce=n.get(J).__webglTexture;t.bindTexture(se,ce),E(se),t.unbindTexture()}}}const Yt=[];function at(b){if(b.samples>0){if(he(b)===!1){const _=b.textures,B=b.width,te=b.height;let J=i.COLOR_BUFFER_BIT;const se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(b),Y=_.length>1;if(Y)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const R=n.get(_[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,te,0,0,B,te,J,i.NEAREST),c===!0&&(Yt.length=0,Yt.push(i.COLOR_ATTACHMENT0+ae),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&Yt.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const R=n.get(_[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ot(b){return Math.min(s.maxSamples,b.samples)}function he(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function St(b){const _=a.render.frame;f.get(b)!==_&&(f.set(b,_),b.update())}function Ce(b,_){const B=b.colorSpace,te=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==ar&&B!==Hn&&(We.getTransfer(B)===tt?(te!==hn||J!==qt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",B)),_}function De(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=Le,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=_e,this.setTexture2D=fe,this.setTexture2DArray=xe,this.setTexture3D=be,this.setTextureCube=ue,this.rebindTextures=mt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=he,this.dispose=G}function i0(i,e){function t(n,s=Hn){let r;const a=We.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oc)return i.BYTE;if(n===Bc)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===hn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===Vc)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===go)return i.RG_INTEGER;if(n===_o)return i.RGBA_INTEGER;if(n===Js||n===Qs||n===js||n===er)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ra||n===Ca||n===Pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Ia||n===Da||n===Na||n===Ua||n===sr||n===Fa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Ia)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Na)return r.COMPRESSED_R11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sr)return r.COMPRESSED_RG11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oa||n===Ba||n===ka||n===za||n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Ka||n===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===Qa||n===ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ja)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eo||n===to||n===rr||n===no)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const s0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r0=`
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

}`;class a0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new td(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new si({vertexShader:s0,fragmentShader:r0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o0 extends li{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,m=null,u=null,g=null,v=null;const y=typeof XRWebGLBinding<"u",p=new a0,d={},S=t.getContextAttributes();let A=null,E=null;const w=[],T=[],h=new Ge;let M=null,I=null;const C=new Xt;C.viewport=new ut;const D=new Xt;D.viewport=new ut;const F=[C,D],V=new _f;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=w[$];return fe===void 0&&(fe=new Hr,w[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=w[$];return fe===void 0&&(fe=new Hr,w[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=w[$];return fe===void 0&&(fe=new Hr,w[$]=fe),fe.getHandSpace()};function q($){const fe=T.indexOf($.inputSource);if(fe===-1)return;const xe=w[fe];xe!==void 0&&(xe.update($.inputSource,$.frame,l||a),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ee);for(let $=0;$<w.length;$++){const fe=T[$];fe!==null&&(T[$]=null,w[$].disconnect(fe))}L=null,G=null,p.reset();for(const $ in d)delete d[$];if(e.setRenderTarget(A),g=null,u=null,m=null,s=null,E=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(h.width,h.height,!1),I!==null){const $=I.camera;$.fov=I.fov,$.zoom=I.zoom,$.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(h),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,be=null,ue=null;S.depth&&(ue=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?Wn:qn,be=S.stencil?Li:gn);const Pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(Pe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new mn(u.textureWidth,u.textureHeight,{format:hn,type:qt,depthTexture:new Ii(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new mn(g.framebufferWidth,g.framebufferHeight,{format:hn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee($){for(let fe=0;fe<$.removed.length;fe++){const xe=$.removed[fe],be=T.indexOf(xe);be>=0&&(T[be]=null,w[be].disconnect(xe))}for(let fe=0;fe<$.added.length;fe++){const xe=$.added[fe];let be=T.indexOf(xe);if(be===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=T.length){T.push(xe),be=Pe;break}else if(T[Pe]===null){T[Pe]=xe,be=Pe;break}if(be===-1)break}const ue=w[be];ue&&ue.connect(xe)}}function W($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let fe=$.near,xe=$.far;p.texture!==null&&(p.depthNear>0&&(fe=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),V.near=D.near=C.near=fe,V.far=D.far=C.far=xe,(L!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,G=V.far),V.layers.mask=$.layers.mask|6,C.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;const be=$.parent,ue=V.cameras;W(V,be);for(let Pe=0;Pe<ue.length;Pe++)W(ue[Pe],be);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&$.isPerspectiveCamera&&(I={camera:$,fov:$.fov,zoom:$.zoom}),Q($,V,be)};function Q($,fe,xe){xe===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=lr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&g===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function($){return d[$]};let j=null;function _e($,fe){if(f=fe.getViewerPose(l||a),v=fe,f!==null){const xe=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let be=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,be=!0);for(let Ae=0;Ae<xe.length;Ae++){const qe=xe[Ae];let Ke=null;if(g!==null)Ke=g.getViewport(qe);else{const vt=m.getViewSubImage(u,qe);Ke=vt.viewport,Ae===0&&(e.setRenderTargetTextures(E,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(E))}let Fe=F[Ae];Fe===void 0&&(Fe=new Xt,Fe.layers.enable(Ae),Fe.viewport=new ut,F[Ae]=Fe),Fe.matrix.fromArray(qe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(qe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ae===0&&(V.matrix.copy(Fe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),be===!0&&V.cameras.push(Fe)}const ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){m=n.getBinding();const Ae=m.getDepthInformation(xe[0]);Ae&&Ae.isValid&&Ae.texture&&p.init(Ae,s.renderState)}if(ue&&ue.includes("camera-access")&&y){e.state.unbindTexture(),m=n.getBinding();for(let Ae=0;Ae<xe.length;Ae++){const qe=xe[Ae].camera;if(qe){let Ke=d[qe];Ke||(Ke=new td,d[qe]=Ke);const Fe=m.getCameraImage(qe);Ke.sourceTexture=Fe}}}}for(let xe=0;xe<w.length;xe++){const be=T[xe],ue=w[xe];be!==null&&ue!==void 0&&ue.update(be,fe,l||a)}j&&j($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Le=new rd;Le.setAnimationLoop(_e),this.setAnimationLoop=function($){j=$},this.dispose=function(){}}}const l0=new ct,md=new Ne;md.set(-1,0,0,0,1,0,0,0,1);function c0(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,nd(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,S,A,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),m(p,d)):d.isMeshPhongMaterial?(r(p,d),f(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&g(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),v(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),y(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,S,A):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Gt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Gt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const S=e.get(d),A=S.envMap,E=S.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(l0.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(md),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,S,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function m(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,S){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const S=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d0(i,e,t,n){let s={},r={};function a(S,A){const E=A.program;n.uniformBlockBinding(S,E,s[S.id])}function o(S,A){let E=s[S.id];E===void 0&&(v(S),E=c(S),s[S.id]=E,S.addEventListener("dispose",p));const w=A.program;n.updateUBOMapping(S,w);const T=e.render.frame;r[S.id]!==T&&(l(S),r[S.id]=T)}function c(S){const A=i.createBuffer(),E=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(S){const A=s[S.id],E=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,h=E.length;T<h;T++){const M=E[T];if(Array.isArray(M))for(let I=0,C=M.length;I<C;I++)f(M[I],T,I,w);else f(M,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,A,E,w){if(u(S,A,E,w)===!0){const T=S.__offset,h=S.value;if(Array.isArray(h)){let M=0;for(let I=0;I<h.length;I++){const C=h[I],D=y(C,!0);m(C,S.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else m(h,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function m(S,A,E){typeof S=="number"||typeof S=="boolean"?A[E]=S:S.isMatrix3?(A[E]=S.elements[0],A[E+1]=S.elements[1],A[E+2]=S.elements[2],A[E+3]=0,A[E+4]=S.elements[3],A[E+5]=S.elements[4],A[E+6]=S.elements[5],A[E+7]=0,A[E+8]=S.elements[6],A[E+9]=S.elements[7],A[E+10]=S.elements[8],A[E+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-E),E):S.toArray(A,E)}function u(S,A,E,w){const T=S.value,h=A+"_"+E;if(Array.isArray(T)){w[h]===void 0&&(w[h]=[]);const M=w[h];let I=!1;for(let C=0;C<T.length;C++)g(T[C],M,C)===!0&&(I=!0);return I}return g(T,w,h)}function g(S,A,E){if(A[E]===void 0)return typeof S=="number"||typeof S=="boolean"?A[E]=S:ArrayBuffer.isView(S)?A[E]=S.slice():A[E]=S.clone(),!0;{const w=A[E];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return A[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function v(S){const A=S.uniforms;let E=0;const w=16;for(let h=0,M=A.length;h<M;h++){const I=Array.isArray(A[h])?A[h]:[A[h]];for(let C=0,D=I.length;C<D;C++){const F=I[C],V=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(A[h])||Array.isArray(F.value);let G=E;for(let z=0,ee=V.length;z<ee;z++){const W=V[z],Q=y(W,L),j=E%w,_e=j%Q.boundary,Le=j+_e;E+=_e,Le!==0&&w-Le<Q.storage&&(E+=w-Le),z===0&&(G=E),E+=Q.storage}const q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((E-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}const T=E%w;return T>0&&(E+=w-T),S.__size=E,S.__cache={},this}function y(S,A){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function p(S){const A=S.target;A.removeEventListener("dispose",p),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:d}}const u0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ln=null;function f0(){return ln===null&&(ln=new Zu(u0,16,16,ii,_n),ln.name="DFG_LUT",ln.minFilter=zt,ln.magFilter=zt,ln.wrapS=wn,ln.wrapT=wn,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class h0{constructor(e={}){const{canvas:t=Eu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:g=qt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const y=g,p=new Set([_o,go,mo]),d=new Set([qt,gn,ss,Li,ho,po]),S=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const h=[],M=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,F=null,V=null,L=null,G=null;this._outputColorSpace=Jt;let q=0,z=0,ee=null,W=-1,Q=null;const j=new ut,_e=new ut;let Le=null;const $=new $e(0);let fe=0,xe=t.width,be=t.height,ue=1,Pe=null,rt=null;const Ae=new ut(0,0,xe,be),qe=new ut(0,0,xe,be);let Ke=!1;const Fe=new os,vt=new Eo;let ft=!1,we=!1;const Re=new ct,je=new U,Qe=new ut,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Bt(){return ee===null?ue:1}let N=n;function Yt(x,P){return t.getContext(x,P)}let at,ot,he,St,Ce,De,b,_,B,te,J,se,ce,Y,K,ae,R,Z,X,oe,ie,re,ye;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uo}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){const P="webgl2";if(N=Yt(P,x),N===null)throw Yt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(x){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ze("WebGLRenderer: "+x.message),x}function Be(){at=new gm(N),at.init(),ie=new i0(N,at),ot=new rm(N,at,e,ie),he=new t0(N,at),ot.reversedDepthBuffer&&u&&he.buffers.depth.setReversed(!0),V=N.createFramebuffer(),L=N.createFramebuffer(),G=N.createFramebuffer(),St=new vm(N),Ce=new Gg,De=new n0(N,at,he,Ce,ot,ie,St),b=new mm(C),_=new Mf(N),re=new im(N,_),B=new _m(N,_,St,re),te=new Mm(N,B,_,re,St),Z=new Sm(N,ot,De),K=new am(Ce),J=new zg(C,b,at,ot,re,K),se=new c0(C,Ce),ce=new Vg,Y=new Kg(at),R=new nm(C,b,he,te,v,c),ae=new e0(C,te,ot),ye=new d0(N,St,ot,he),X=new sm(N,at,St),oe=new xm(N,at,St),St.programs=J.programs,C.capabilities=ot,C.extensions=at,C.properties=Ce,C.renderLists=ce,C.shadowMap=ae,C.state=he,C.info=St}y!==qt&&(I=new ym(y,t.width,t.height,o,s,r));const ne=new o0(C,N);this.xr=ne,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=at.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=at.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(x){x!==void 0&&(ue=x,this.setSize(xe,be,!1))},this.getSize=function(x){return x.set(xe,be)},this.setSize=function(x,P,H=!0){if(ne.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=x,be=P,t.width=Math.floor(x*ue),t.height=Math.floor(P*ue),H===!0&&(t.style.width=x+"px",t.style.height=P+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(xe*ue,be*ue).floor()},this.setDrawingBufferSize=function(x,P,H){xe=x,be=P,ue=H,t.width=Math.floor(x*H),t.height=Math.floor(P*H),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(y===qt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(j)},this.getViewport=function(x){return x.copy(Ae)},this.setViewport=function(x,P,H,O){x.isVector4?Ae.set(x.x,x.y,x.z,x.w):Ae.set(x,P,H,O),he.viewport(j.copy(Ae).multiplyScalar(Bt()).round())},this.getScissor=function(x){return x.copy(qe)},this.setScissor=function(x,P,H,O){x.isVector4?qe.set(x.x,x.y,x.z,x.w):qe.set(x,P,H,O),he.scissor(_e.copy(qe).multiplyScalar(Bt()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(x){he.setScissorTest(Ke=x)},this.setOpaqueSort=function(x){Pe=x},this.setTransparentSort=function(x){rt=x},this.getClearColor=function(x){return x.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,H=!0){let O=0;if(x){let k=!1;if(ee!==null){const de=ee.texture.format;k=p.has(de)}if(k){const de=ee.texture.type,ve=d.has(de),le=R.getClearColor(),ge=R.getClearAlpha(),Ee=le.r,Ue=le.g,He=le.b;ve?(S[0]=Ee,S[1]=Ue,S[2]=He,S[3]=ge,N.clearBufferuiv(N.COLOR,0,S)):(A[0]=Ee,A[1]=Ue,A[2]=He,A[3]=ge,N.clearBufferiv(N.COLOR,0,A))}else O|=N.COLOR_BUFFER_BIT}P&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),R.dispose(),ce.dispose(),Y.dispose(),De.dispose(),Ce.dispose(),b.dispose(),te.dispose(),B.dispose(),re.dispose(),ye.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Xo),ne.removeEventListener("sessionend",qo),$n.stop()};function Te(x){x.preventDefault(),ol("WebGLRenderer: Context Lost."),D=!0}function Oe(){ol("WebGLRenderer: Context Restored."),D=!1;const x=St.autoReset,P=ae.enabled,H=ae.autoUpdate,O=ae.needsUpdate,k=ae.type;Be(),St.autoReset=x,ae.enabled=P,ae.autoUpdate=H,ae.needsUpdate=O,ae.type=k}function pe(x){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function et(x){const P=x.target;P.removeEventListener("dispose",et),bt(P)}function bt(x){Pn(x),Ce.remove(x)}function Pn(x){const P=Ce.get(x).programs;P!==void 0&&(P.forEach(function(H){J.releaseProgram(H)}),x.isShaderMaterial&&J.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,H,O,k,de){P===null&&(P=yt);const ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,le=zd(x,P,H,O,k);he.setMaterial(O,ve);let ge=H.index,Ee=1;if(O.wireframe===!0){if(ge=B.getWireframeAttribute(H),ge===void 0)return;Ee=2}const Ue=H.drawRange,He=H.attributes.position;let Se=Ue.start*Ee,Ve=(Ue.start+Ue.count)*Ee;de!==null&&(Se=Math.max(Se,de.start*Ee),Ve=Math.min(Ve,(de.start+de.count)*Ee)),ge!==null?(Se=Math.max(Se,0),Ve=Math.min(Ve,ge.count)):He!=null&&(Se=Math.max(Se,0),Ve=Math.min(Ve,He.count));const gt=Ve-Se;if(gt<0||gt===1/0)return;re.setup(k,O,le,H,ge);let st,it=X;if(ge!==null&&(st=_.get(ge),it=oe,it.setIndex(st)),k.isMesh)O.wireframe===!0?(he.setLineWidth(O.wireframeLinewidth*Bt()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(k.isLine){let Lt=O.linewidth;Lt===void 0&&(Lt=1),he.setLineWidth(Lt*Bt()),k.isLineSegments?it.setMode(N.LINES):k.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else k.isPoints?it.setMode(N.POINTS):k.isSprite&&it.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(at.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Lt=k._multiDrawStarts,Me=k._multiDrawCounts,Ut=k._multiDrawCount,Je=ge?_.get(ge).bytesPerElement:1,Kn=Ce.get(O).currentProgram.getUniforms();for(let It=0;It<Ut;It++)Kn.setValue(N,"_gl_DrawID",It),it.render(Lt[It]/Je,Me[It])}else if(k.isInstancedMesh)it.renderInstances(Se,gt,k.count);else if(H.isInstancedBufferGeometry){const Lt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Me=Math.min(H.instanceCount,Lt);it.renderInstances(Se,gt,Me)}else it.render(Se,gt)};function Wo(x,P,H,O){F!==null&&x.isNodeMaterial&&F.setObject(O,x),ft===!0&&K.setState(x,H,!1),x.transparent===!0&&x.side===un&&x.forceSinglePass===!1?(x.side=Gt,x.needsUpdate=!0,zi(x,P,O),x.side=ni,x.needsUpdate=!0,zi(x,P,O),x.side=un):zi(x,P,O)}this.compile=function(x,P,H=null){H===null&&(H=x),F!==null&&F.renderStart(x,P,H),T=Y.get(H),T.init(P),M.push(T),H.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),x!==H&&x.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),we=this.localClippingEnabled,ft=K.init(this.clippingPlanes,we),ft===!0&&K.setGlobalState(this.clippingPlanes,P),F!==null&&ae.render(T.state.shadowsArray,H,P);const O=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const de=k.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const le=de[ve];Wo(le,H,P,k),O.add(le)}else Wo(de,H,P,k),O.add(de)}),T=M.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(x,P,H=null){const O=this.compile(x,P,H);return new Promise(k=>{function de(){if(O.forEach(function(ve){const ge=Ce.get(ve).currentProgram;(ge===void 0||ge.isReady())&&O.delete(ve)}),O.size===0){k(x);return}setTimeout(de,10)}at.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Cr=null;function Bd(x){Cr&&Cr(x)}function Xo(){$n.stop()}function qo(){$n.start()}const $n=new rd;$n.setAnimationLoop(Bd),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(x){Cr=x,ne.setAnimationLoop(x),x===null?$n.stop():$n.start()},ne.addEventListener("sessionstart",Xo),ne.addEventListener("sessionend",qo),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(x,P);const H=ne.enabled===!0&&ne.isPresenting===!0,O=I!==null&&(ee===null||H)&&I.begin(C,ee);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(P),P=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,P,ee),T=Y.get(x,M.length),T.init(P),T.state.textureUnits=De.getTextureUnits(),M.push(T),Re.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?vt.setFromArrayCamera(P):Fe.setFromProjectionMatrix(Re,rn,P.reversedDepth),we=this.localClippingEnabled,ft=K.init(this.clippingPlanes,we),w=ce.get(x,h.length),w.init(),h.push(w),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&Pr(ve,P,-1/0,C.sortObjects)}Pr(x,P,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Pe,rt),mt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,mt&&R.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),ft===!0&&K.beginShadows();const k=T.state.shadowsArray;if(ae.render(k,x,P),ft===!0&&K.endShadows(),(O&&I.hasRenderPass())===!1){const ve=w.opaque,le=w.transmissive;if(T.setupLights(),P.isArrayCamera){const ge=P.cameras;if(le.length>0)for(let Ee=0,Ue=ge.length;Ee<Ue;Ee++){const He=ge[Ee];$o(ve,le,x,He)}mt&&R.render(x);for(let Ee=0,Ue=ge.length;Ee<Ue;Ee++){const He=ge[Ee];Yo(w,x,He,He.viewport)}}else le.length>0&&$o(ve,le,x,P),mt&&R.render(x),Yo(w,x,P)}ee!==null&&z===0&&(De.updateMultisampleRenderTarget(ee),De.updateRenderTargetMipmap(ee)),O&&I.end(C),x.isScene===!0&&x.onAfterRender(C,x,P),re.resetDefaultState(),W=-1,Q=null,M.pop(),M.length>0?(T=M[M.length-1],De.setTextureUnits(T.state.textureUnits),ft===!0&&K.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,h.pop(),h.length>0?w=h[h.length-1]:w=null,F!==null&&F.renderEnd()};function Pr(x,P,H,O){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){const ve=P.isArrayCamera?vt:Fe;if(!x.frustumCulled||x.intersectsFrustum(ve)){O&&Qe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Re);const le=te.update(x),ge=x.material;ge.visible&&w.push(x,le,ge,H,Qe.z,null,P)}}else if(x.isMesh||x.isLine||x.isPoints){const ve=P.isArrayCamera?vt:Fe;if(!x.frustumCulled||x.intersectsFrustum(ve)){const le=te.update(x),ge=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Qe.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Qe.copy(le.boundingSphere.center)),Qe.applyMatrix4(x.matrixWorld).applyMatrix4(Re)),Array.isArray(ge)){const Ee=le.groups;for(let Ue=0,He=Ee.length;Ue<He;Ue++){const Se=Ee[Ue],Ve=ge[Se.materialIndex];Ve&&Ve.visible&&w.push(x,le,Ve,H,Qe.z,Se,P)}}else ge.visible&&w.push(x,le,ge,H,Qe.z,null,P)}}}const de=x.children;for(let ve=0,le=de.length;ve<le;ve++)Pr(de[ve],P,H,O)}function Yo(x,P,H,O){const{opaque:k,transmissive:de,transparent:ve}=x;T.setupLightsView(H),ft===!0&&K.setGlobalState(C.clippingPlanes,H),O&&he.viewport(j.copy(O)),k.length>0&&gs(k,P,H),de.length>0&&gs(de,P,H),ve.length>0&&gs(ve,P,H),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function $o(x,P,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const Se=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new mn(1,1,{generateMipmaps:!0,type:Se?_n:qt,minFilter:Vn,samples:Math.max(4,ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const de=T.state.transmissionRenderTarget[O.id],ve=O.viewport||j;de.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const le=C.getRenderTarget(),ge=C.getActiveCubeFace(),Ee=C.getActiveMipmapLevel();C.setRenderTarget(de),C.getClearColor($),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),mt&&R.render(H);const Ue=C.toneMapping;C.toneMapping=Rn;const He=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),ft===!0&&K.setGlobalState(C.clippingPlanes,O),gs(x,H,O),De.updateMultisampleRenderTarget(de),De.updateRenderTargetMipmap(de),at.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Ve=0,gt=P.length;Ve<gt;Ve++){const st=P[Ve],{object:it,geometry:Lt,material:Me,group:Ut}=st;if(Me.side===un&&it.layers.test(O.layers)){const Je=Me.side;Me.side=Gt,Me.needsUpdate=!0,Ko(it,H,O,Lt,Me,Ut),Me.side=Je,Me.needsUpdate=!0,Se=!0}}Se===!0&&(De.updateMultisampleRenderTarget(de),De.updateRenderTargetMipmap(de))}C.setRenderTarget(le,ge,Ee),C.setClearColor($,fe),He!==void 0&&(O.viewport=He),C.toneMapping=Ue}function gs(x,P,H){const O=P.isScene===!0?P.overrideMaterial:null;for(let k=0,de=x.length;k<de;k++){const ve=x[k],{object:le,geometry:ge,group:Ee}=ve;let Ue=ve.material;Ue.allowOverride===!0&&O!==null&&(Ue=O),le.layers.test(H.layers)&&Ko(le,P,H,ge,Ue,Ee)}}function Ko(x,P,H,O,k,de){F!==null&&k.isNodeMaterial&&F.setObject(x,k),x.onBeforeRender(C,P,H,O,k,de),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(C,P,H,O,x,de),k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=Gt,k.needsUpdate=!0,C.renderBufferDirect(H,P,O,k,x,de),k.side=ni,k.needsUpdate=!0,C.renderBufferDirect(H,P,O,k,x,de),k.side=un):C.renderBufferDirect(H,P,O,k,x,de),x.onAfterRender(C,P,H,O,k,de)}function Zo(x){let P=0;for(const H of x)H.texture!==null&&P++;return P}function zi(x,P,H){P.isScene!==!0&&(P=yt);const O=Ce.get(x),k=T.state.lights,de=T.state.shadowsArray,ve=k.state.version,le=J.getParameters(x,k.state,de,P,H,T.state.lightProbeGridArray),ge=J.getProgramCacheKey(le);let Ee=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;const Ue=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=b.get(x.envMap||O.environment,Ue),O.envMapRotation=O.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",et),Ee=new Map,O.programs=Ee,O.programVariants=new Map);let He=Ee.get(ge);if(He!==void 0){if(O.currentProgram===He&&O.lightsStateVersion===ve)return Qo(x,le),He}else le.uniforms=J.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,H,le),x.onBeforeCompile(le,C),He=J.acquireProgram(le,ge),Ee.set(ge,He),O.uniforms=le.uniforms;const Se=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=K.uniform),Qo(x,le),O.needsLights=Hd(x),O.lightsStateVersion=ve,O.needsLights&&(Se.ambientLightColor.value=k.state.ambient,Se.lightProbe.value=k.state.probe,Se.sunLights.value=k.state.sun,Se.sunLightShadows.value=k.state.sunShadow,Se.directionalLights.value=k.state.directional,Se.directionalLightShadows.value=k.state.directionalShadow,Se.spotLights.value=k.state.spot,Se.spotLightShadows.value=k.state.spotShadow,Se.rectAreaLights.value=k.state.rectArea,Se.ltc_1.value=k.state.rectAreaLTC1,Se.ltc_2.value=k.state.rectAreaLTC2,Se.pointLights.value=k.state.point,Se.pointLightShadows.value=k.state.pointShadow,Se.hemisphereLights.value=k.state.hemi,Se.sunShadowMatrix.value=k.state.sunShadowMatrix,Se.sunShadowCascade.value=k.state.sunShadowCascade,Se.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Se.spotLightMatrix.value=k.state.spotLightMatrix,Se.spotLightMap.value=k.state.spotLightMap,Se.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=Zo(T.state.lightProbeGridArray),O.currentProgram=He,O.uniformsList=null,He}function kd(x,P,H,O,k){const de=Ce.get(x),ve=de.currentProgram.id+","+O+","+k;let le=de.programVariants.get(ve);return le===void 0?(le=zi(x,P,H),de.programVariants.set(ve,le)):(de.currentProgram=le,de.uniformsList=null,de.outputColorSpace=O,de.toneMapping=k),le}function Jo(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=nr.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Qo(x,P){const H=Ce.get(x);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function zd(x,P,H,O,k){P.isScene!==!0&&(P=yt),De.resetTextureUnits();const de=P.fog,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,le=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:We.workingColorSpace,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ee=b.get(O.envMap||ve,ge),Ue=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!H.morphAttributes.position,Ve=!!H.morphAttributes.normal,gt=!!H.morphAttributes.color;let st=Rn;O.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(st=C.toneMapping);const it=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Lt=it!==void 0?it.length:0,Me=Ce.get(O),Ut=T.state.lights;if(ft===!0&&(we===!0||x!==Q)){const dt=x===Q&&O.id===W;K.setState(O,x,dt)}let Je=!1,Kn=!1;O.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==Ut.state.version||k.isBatchedMesh&&Me.batching===!1||!k.isBatchedMesh&&Me.batching===!0||k.isBatchedMesh&&Me.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Me.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Me.instancing===!1||!k.isInstancedMesh&&Me.instancing===!0||k.isSkinnedMesh&&Me.skinning===!1||!k.isSkinnedMesh&&Me.skinning===!0||k.isInstancedMesh&&Me.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Me.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Me.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Me.instancingMorph===!1&&k.morphTexture!==null||Me.envMap!==Ee||O.fog===!0&&Me.fog!==de||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==K.numPlanes||Me.numIntersection!==K.numIntersection)||Me.vertexAlphas!==Ue||Me.vertexTangents!==He||Me.morphTargets!==Se||Me.morphNormals!==Ve||Me.morphColors!==gt||Me.morphTargetsCount!==Lt||Me.numLightProbeGrids!==Zo(T.state.lightProbeGridArray)?Je=!0:(Me.outputColorSpace!==le||Me.toneMapping!==st)&&(Kn=!0):(Je=!0,Me.__version=O.version);let It=Me.currentProgram;(Je===!0||Kn===!0)&&(It=Kn===!0?kd(O,P,k,le,st):zi(O,P,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,It,Me));let _s=!1,Ln=!1,Zn=!1;const Ye=It.getUniforms(),Rt=Me.uniforms;if(he.useProgram(It.program)&&(_s=!0,Ln=!0,Zn=!0),O.id!==W&&(W=O.id,Ln=!0),_s||Q!==x){he.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Ye.setValue(N,"projectionMatrix",x.projectionMatrix),Ye.setValue(N,"viewMatrix",x.matrixWorldInverse);const Tt=Ye.map.cameraPosition;Tt!==void 0&&Tt.setValue(N,je.setFromMatrixPosition(x.matrixWorld)),ot.logarithmicDepthBuffer&&Ye.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ye.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,Ln=!0,Zn=!0)}if(Me.needsLights&&(Ut.state.sunShadowMap.length>0&&Ye.setValue(N,"sunShadowMap",Ut.state.sunShadowMap,De),Ut.state.directionalShadowMap.length>0&&Ye.setValue(N,"directionalShadowMap",Ut.state.directionalShadowMap,De),Ut.state.spotShadowMap.length>0&&Ye.setValue(N,"spotShadowMap",Ut.state.spotShadowMap,De),Ut.state.pointShadowMap.length>0&&Ye.setValue(N,"pointShadowMap",Ut.state.pointShadowMap,De)),k.isSkinnedMesh){Ye.setOptional(N,k,"bindMatrix"),Ye.setOptional(N,k,"bindMatrixInverse");const dt=k.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),Ye.setValue(N,"boneTexture",dt.boneTexture,De))}k.isBatchedMesh&&(Ye.setOptional(N,k,"batchingTexture"),Ye.setValue(N,"batchingTexture",k._matricesTexture,De),Ye.setOptional(N,k,"batchingIdTexture"),Ye.setValue(N,"batchingIdTexture",k._indirectTexture,De),Ye.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&Ye.setValue(N,"batchingColorTexture",k._colorsTexture,De));const jt=H.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Z.update(k,H,It),(Ln||Me.receiveShadow!==k.receiveShadow)&&(Me.receiveShadow=k.receiveShadow,Ye.setValue(N,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(Rt.envMapIntensity.value=P.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=f0()),Ln){if(Ye.setValue(N,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&Gd(Rt,Zn),de&&O.fog===!0&&se.refreshFogUniforms(Rt,de),se.refreshMaterialUniforms(Rt,O,ue,be,T.state.transmissionRenderTarget[x.id]),Me.needsLights&&Me.numLightProbeGrids>0){const dt=E;let Tt=0;for(const xn of T.state.lightProbeGridArray)xn.texture!==null&&(dt.textures[Tt]=xn.texture,dt.min[Tt]=xn.boundingBox.min,dt.max[Tt]=xn.boundingBox.max,dt.resolution[Tt]=xn.resolution,Tt++);for(const xn in dt)dt[xn].length=Tt;Rt.probesSH.value=dt.textures,Rt.probesMin.value=dt.min,Rt.probesMax.value=dt.max,Rt.probesResolution.value=dt.resolution}nr.upload(N,Jo(Me),Rt,De)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(nr.upload(N,Jo(Me),Rt,De),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ye.setValue(N,"center",k.center),Ye.setValue(N,"modelViewMatrix",k.modelViewMatrix),Ye.setValue(N,"normalMatrix",k.normalMatrix),Ye.setValue(N,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){const dt=O.uniformsGroups;for(let Tt=0,xn=dt.length;Tt<xn;Tt++){const el=dt[Tt];ye.update(el,It),ye.bind(el,It)}}return It}function Gd(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Hd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(x,P,H){const O=Ce.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ce.get(x.texture).__webglTexture=P,Ce.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){const H=Ce.get(x);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,H=0){ee=x,q=P,z=H;let O=null,k=!1,de=!1;if(x){const le=Ce.get(x);if(le.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(N.FRAMEBUFFER,le.__webglFramebuffer),j.copy(x.viewport),_e.copy(x.scissor),Le=x.scissorTest,he.viewport(j),he.scissor(_e),he.setScissorTest(Le),W=-1;return}else if(le.__webglFramebuffer===void 0)De.setupRenderTarget(x);else if(le.__hasExternalTextures)De.rebindTextures(x,Ce.get(x.texture).__webglTexture,Ce.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ue=x.depthTexture;if(le.__boundDepthTexture!==Ue){if(Ue!==null&&Ce.has(Ue)&&(x.width!==Ue.image.width||x.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(x)}}const ge=x.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(de=!0);const Ee=Ce.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[P])?O=Ee[P][H]:O=Ee[P],k=!0):x.samples>0&&De.useMultisampledRTT(x)===!1?O=Ce.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?O=Ee[H]:O=Ee,j.copy(x.viewport),_e.copy(x.scissor),Le=x.scissorTest}else j.copy(Ae).multiplyScalar(ue).floor(),_e.copy(qe).multiplyScalar(ue).floor(),Le=Ke;if(H!==0&&(O=V),he.bindFramebuffer(N.FRAMEBUFFER,O)&&he.drawBuffers(x,O),he.viewport(j),he.scissor(_e),he.setScissorTest(Le),k){const le=Ce.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,le.__webglTexture,H)}else if(de){const le=P;for(let ge=0;ge<x.textures.length;ge++){const Ee=Ce.get(x.textures[ge]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ge,Ee.__webglTexture,H,le)}}else if(x!==null&&H!==0){const le=Ce.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,le.__webglTexture,H)}W=-1};function jo(x){const P=Ce.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=ot.textureFormatReadable(x.format),P.__typeReadable=ot.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,H,O,k,de,ve,le=0){if(!(x&&x.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ge=ge[ve],Array.isArray(ge)&&(ge=ge[0])),ge){he.bindFramebuffer(N.FRAMEBUFFER,ge);try{const Ee=x.textures[le],Ue=Ee.format,He=Ee.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+le);const Se=jo(Ee);if(Se.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-O&&H>=0&&H<=x.height-k&&N.readPixels(P,H,O,k,ie.convert(Ue),ie.convert(He),de)}finally{const Ee=ee!==null?Ce.get(ee).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,P,H,O,k,de,ve,le=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ge=ge[ve],Array.isArray(ge)&&(ge=ge[0])),ge)if(P>=0&&P<=x.width-O&&H>=0&&H<=x.height-k){he.bindFramebuffer(N.FRAMEBUFFER,ge);const Ee=x.textures[le],Ue=Ee.format,He=Ee.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+le);const Se=jo(Ee);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ve),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(P,H,O,k,ie.convert(Ue),ie.convert(He),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const gt=ee!==null?Ce.get(ee).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,gt);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await yu(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ve),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ve),N.deleteSync(st),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,H=0){const O=Math.pow(2,-H),k=Math.floor(x.image.width*O),de=Math.floor(x.image.height*O),ve=P!==null?P.x:0,le=P!==null?P.y:0;De.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,ve,le,k,de),he.unbindTexture()},this.copyTextureToTexture=function(x,P,H=null,O=null,k=0,de=0){let ve,le,ge,Ee,Ue,He,Se,Ve,gt;const st=x.isCompressedTexture?x.mipmaps[de]:x.image;if(H!==null)ve=H.max.x-H.min.x,le=H.max.y-H.min.y,ge=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,Ue=H.min.y,He=H.isBox3?H.min.z:0;else{const Ye=Math.pow(2,-k);ve=Math.floor(st.width*Ye),le=Math.floor(st.height*Ye),x.isDataArrayTexture?ge=st.depth:x.isData3DTexture?ge=Math.floor(st.depth*Ye):ge=1,Ee=0,Ue=0,He=0}O!==null?(Se=O.x,Ve=O.y,gt=O.z):(Se=0,Ve=0,gt=0);const it=ie.convert(P.format),Lt=ie.convert(P.type);let Me;P.isData3DTexture?(De.setTexture3D(P,0),Me=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(De.setTexture2DArray(P,0),Me=N.TEXTURE_2D_ARRAY):(De.setTexture2D(P,0),Me=N.TEXTURE_2D),he.activeTexture(N.TEXTURE0),he.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),he.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),he.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);const Ut=he.getParameter(N.UNPACK_ROW_LENGTH),Je=he.getParameter(N.UNPACK_IMAGE_HEIGHT),Kn=he.getParameter(N.UNPACK_SKIP_PIXELS),It=he.getParameter(N.UNPACK_SKIP_ROWS),_s=he.getParameter(N.UNPACK_SKIP_IMAGES);he.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),he.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),he.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),he.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),he.pixelStorei(N.UNPACK_SKIP_IMAGES,He);const Ln=x.isDataArrayTexture||x.isData3DTexture,Zn=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){const Ye=Ce.get(x),Rt=Ce.get(P),jt=Ce.get(Ye.__renderTarget),dt=Ce.get(Rt.__renderTarget);he.bindFramebuffer(N.READ_FRAMEBUFFER,jt.__webglFramebuffer),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Tt=0;Tt<ge;Tt++)Ln&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(x).__webglTexture,k,He+Tt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(P).__webglTexture,de,gt+Tt)),N.blitFramebuffer(Ee,Ue,Ee+ve,Ue+le,Se,Ve,Se+ve,Ve+le,N.DEPTH_BUFFER_BIT,N.NEAREST);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||Ce.has(x)){const Ye=Ce.get(x),Rt=Ce.get(P);he.bindFramebuffer(N.READ_FRAMEBUFFER,L),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let jt=0;jt<ge;jt++)Ln?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ye.__webglTexture,k,He+jt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ye.__webglTexture,k),Zn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.__webglTexture,de,gt+jt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Rt.__webglTexture,de),k!==0?N.blitFramebuffer(Ee,Ue,Ee+ve,Ue+le,Se,Ve,Se+ve,Ve+le,N.COLOR_BUFFER_BIT,N.NEAREST):Zn?N.copyTexSubImage3D(Me,de,Se,Ve,gt+jt,Ee,Ue,ve,le):N.copyTexSubImage2D(Me,de,Se,Ve,Ee,Ue,ve,le);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Zn?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(Me,de,Se,Ve,gt,ve,le,ge,it,Lt,st.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,de,Se,Ve,gt,ve,le,ge,it,st.data):N.texSubImage3D(Me,de,Se,Ve,gt,ve,le,ge,it,Lt,st):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,Se,Ve,ve,le,it,Lt,st.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,Se,Ve,st.width,st.height,it,st.data):N.texSubImage2D(N.TEXTURE_2D,de,Se,Ve,ve,le,it,Lt,st);he.pixelStorei(N.UNPACK_ROW_LENGTH,Ut),he.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),he.pixelStorei(N.UNPACK_SKIP_PIXELS,Kn),he.pixelStorei(N.UNPACK_SKIP_ROWS,It),he.pixelStorei(N.UNPACK_SKIP_IMAGES,_s),de===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&N.generateMipmap(Me),he.unbindTexture()},this.initRenderTarget=function(x){Ce.get(x).__webglFramebuffer===void 0&&De.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?De.setTextureCube(x,0):x.isData3DTexture?De.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?De.setTexture2DArray(x,0):De.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){q=0,z=0,ee=null,he.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}let yi=null;function p0(){if(!yi){const i=window.AudioContext||window.webkitAudioContext;i&&(yi=new i)}return yi&&yi.state==="suspended"&&yi.resume(),yi}function nt(i="click"){try{const e=p0();if(!e)return;const t=e.currentTime;if(i==="click"){const n=e.createOscillator(),s=e.createGain();n.type="triangle",n.frequency.setValueAtTime(880,t),n.frequency.exponentialRampToValueAtTime(260,t+.04),s.gain.setValueAtTime(.09,t),s.gain.exponentialRampToValueAtTime(.001,t+.04),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.045)}else if(i==="zoom"){const n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(320,t),n.frequency.exponentialRampToValueAtTime(620,t+.11),s.gain.setValueAtTime(.09,t),s.gain.exponentialRampToValueAtTime(.001,t+.11),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.12)}else i==="success"&&[440,554.37,659.25].forEach((n,s)=>{const r=e.createOscillator(),a=e.createGain();r.type="sine",r.frequency.setValueAtTime(n,t+s*.05),a.gain.setValueAtTime(.07,t+s*.05),a.gain.exponentialRampToValueAtTime(.001,t+s*.05+.09),r.connect(a),a.connect(e.destination),r.start(t+s*.05),r.stop(t+s*.05+.1)})}catch{}}let Ji=3;const ec=document.getElementById("energy-status-badge"),oa=document.getElementById("desk-toast"),tc=document.getElementById("desk-toast-icon"),nc=document.getElementById("desk-toast-text");let la=null;const ic=["Fresh espresso poured! Coding velocity boosted by 200% ☕⚡","Double coffee = Zero bugs in production today! ☕🚀","Creative UI/UX engines running at maximum power! ☕💙","Developer mood: Ready to build your next big project! ☕✨"];function gd(i,e){!oa||!tc||!nc||(tc.textContent=i,nc.textContent=e,oa.classList.remove("hidden"),la&&clearTimeout(la),la=setTimeout(()=>{oa.classList.add("hidden")},3e3))}function _d(){Ji+=1,nt("success"),ec&&(ec.textContent=`☕ Coffee Today: ${Ji} Cups (Focus ${Math.min(100+(Ji-3)*25,300)}%)`),es&&(es.color.setHex(3718648),setTimeout(()=>es.color.setHex(2450411),1500)),gd("☕",ic[Ji%ic.length])}const bn=document.getElementById("desk-canvas"),Qt=document.getElementById("desk-canvas-wrap"),On=document.getElementById("desk-hover-tooltip");let Tn,Wt,zn,xt,Gn,ur,es,qi=!0,ri="overview";const sc={overview:{pos:new U(0,4.4,7.8),look:new U(0,.9,0)},monitors:{pos:new U(0,2.2,3.1),look:new U(0,1.72,-.75)},portrait:{pos:new U(-2.35,2,2.8),look:new U(-2.35,1.35,-.4)},notebook:{pos:new U(-1.6,2,2.4),look:new U(-1.55,.92,.6)},keyboard:{pos:new U(.15,2.3,2.35),look:new U(.15,.9,.62)},arcade:{pos:new U(2.35,2.2,2.75),look:new U(2.3,1.45,-.45)},phone:{pos:new U(2.3,1.85,2.55),look:new U(2.25,1,.68)},coffee:{pos:new U(1.5,1.8,2.35),look:new U(1.45,1.05,.62)}};function ki(i="overview"){const e=sc[i]||sc.overview,t=Qt?Qt.clientWidth:window.innerWidth,n=Qt?Math.max(1,Qt.clientHeight):window.innerHeight,s=t/n,r=e.pos.clone(),a=e.look.clone();if(s<1.15){const o=Math.min(2.05,Math.max(1,1.15/Math.max(s,.48)));i==="overview"?(r.z=e.pos.z*(.92+o*.42),r.y=e.pos.y*(.95+o*.22),a.y=.78):(r.z=e.pos.z+(o-1)*1.45,r.y=e.pos.y+(o-1)*.35)}return{pos:r,look:a}}const Mr=ki("overview"),zs=new U().copy(Mr.pos),Gs=new U().copy(Mr.look),Ni=new U().copy(Mr.pos),Ui=new U().copy(Mr.look),oo={monitors:{screenId:"projects",label:"🖥️ Monitors — Click to open Projects & Case Studies"},portrait:{screenId:"about",label:"🖼️ Portrait & Trophy — Click to open About & Career"},notebook:{screenId:"services",label:"💼 Client Pad — Click to open Services & Project Estimator"},keyboard:{screenId:"skills",label:"⌨️ Keyboard — Click to open Skills & Tech Stack"},arcade:{screenId:"arcade",label:"🕹️ Arcade — Click to open Break Room & Mini-Game"},phone:{screenId:"contact",label:"📱 Phone Dock — Click to open Direct Contact"},coffee:{screenId:null,label:"☕ Espresso Mug — Click for a Coffee Energy Boost!"},lamp:{screenId:null,label:"💡 Desk Lamp — Click to Toggle Desk Lighting"}},fr=[],rc=[];function ac(i,e="#38bdf8"){const t=document.createElement("canvas");t.width=512,t.height=320;const n=t.getContext("2d");n.fillStyle="#040b1a",n.fillRect(0,0,512,320),n.fillStyle="#0b1936",n.fillRect(0,0,512,32),n.fillStyle="#ef4444",n.beginPath(),n.arc(16,16,4.5,0,Math.PI*2),n.fill(),n.fillStyle="#f59e0b",n.beginPath(),n.arc(30,16,4.5,0,Math.PI*2),n.fill(),n.fillStyle="#38bdf8",n.beginPath(),n.arc(44,16,4.5,0,Math.PI*2),n.fill(),n.fillStyle="#93c5fd",n.font="600 12px monospace",n.fillText(i,66,20),n.fillStyle=e,n.font="bold 20px sans-serif",n.fillText("Faraj Alrmah // Web Developer",26,72);const s=["#38bdf8","#60a5fa","#2563eb","#93c5fd","#7dd3fc"];for(let a=0;a<8;a++)n.fillStyle=s[a%s.length],n.fillRect(26+a%2*16,98+a*22,100+a*47%180,8);n.fillStyle="#0f2552",n.fillRect(332,55,155,220),n.strokeStyle=e,n.lineWidth=2,n.strokeRect(332,55,155,220),n.fillStyle="#ffffff",n.font="bold 14px sans-serif",n.fillText("MY PROJECTS",360,150),n.fillStyle=e,n.fillText("CLICK TO OPEN ↗",350,176);const r=new Qu(t);return r.needsUpdate=!0,r}function Bn(i,e){i.traverse(n=>{n.isMesh&&(n.userData.station=e,fr.push(n))});const t=new Oi().setFromObject(i);if(!t.isEmpty()){const n=new U,s=new U;t.getSize(n),t.getCenter(s),i.worldToLocal(s);const r=new ht(Math.max(.78,n.x+.28),Math.max(.68,n.y+.28),Math.max(.78,n.z+.28)),a=new Zt({transparent:!0,opacity:0,depthWrite:!1}),o=new ze(r,a);o.position.copy(s),o.userData.station=e,i.add(o),fr.push(o)}}function m0(){if(!bn||!Qt)return;Tn=new Hu;const i=Qt.clientWidth/Math.max(1,Qt.clientHeight);Wt=new Xt(i<.85?48:39,i,.1,100);const e=ki("overview");zs.copy(e.pos),Gs.copy(e.look),Ni.copy(e.pos),Ui.copy(e.look),Wt.position.copy(zs),Wt.lookAt(Gs),zn=new h0({canvas:bn,antialias:!0,alpha:!0,powerPreference:"high-performance"}),zn.setSize(Qt.clientWidth,Qt.clientHeight),zn.setPixelRatio(Math.min(window.devicePixelRatio,2)),zn.shadowMap.enabled=!0,zn.shadowMap.type=Tc,Tn.add(new gf(14412542,.95));const t=new mf(16777215,1.8);t.position.set(5,8,6),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,Tn.add(t);const n=new Cl(2450411,3.8,14);n.position.set(0,2.3,-2.1),Tn.add(n);const s=new Cl(959977,2.6,13);s.position.set(3.5,2.5,1.5),Tn.add(s),Gn=new ff(16707722,4.2,11,Math.PI/3.1,.5,1),Gn.position.set(-2.6,2.7,-.65),Gn.target.position.set(-.5,.8,.2),Gn.castShadow=!0,Tn.add(Gn),Tn.add(Gn.target),xt=new kt,Tn.add(xt);const r=new ze(new An(5.5,5.8,.22,48),new Kt({color:397865,roughness:.65,metalness:.25}));r.position.y=-.9,r.receiveShadow=!0,xt.add(r);const a=new ze(new Ao(5.35,5.48,48),new Zt({color:3718648,side:un}));a.rotation.x=-Math.PI/2,a.position.y=-.78,xt.add(a);const o=new ze(new ht(6.8,.2,3.1),new Kt({color:991554,roughness:.35,metalness:.28}));o.position.set(0,.75,0),o.castShadow=!0,o.receiveShadow=!0,xt.add(o),es=new Zt({color:3718648});const c=new ze(new ht(6.72,.055,.055),es);c.position.set(0,.81,-1.52),xt.add(c);const l=new Kt({color:1981066,metalness:.75,roughness:.28});[[-3.1,-.05,-1.25],[3.1,-.05,-1.25],[-3.1,-.05,1.25],[3.1,-.05,1.25]].forEach(([we,Re,je])=>{const Qe=new ze(new ht(.16,1.55,.16),l);Qe.position.set(we,Re,je),xt.add(Qe)});const f=new ze(new ht(3.4,.02,1.28),new Kt({color:463915,roughness:.85}));f.position.set(0,.86,.58),xt.add(f);const m=new kt,u=new ze(new ht(3.3,.12,.66),l);u.position.set(0,.92,-.78),m.add(u);const g=new Kt({color:330778,roughness:.3,metalness:.6}),v=new ze(new ht(2.05,1.2,.08),g);v.position.set(.35,1.78,-.75),v.castShadow=!0,m.add(v);const y=new ze(new cn(1.94,1.08),new Zt({map:ac("projects_showcase.tsx","#38bdf8")}));y.position.set(.35,1.78,-.705),m.add(y);const p=new ze(new ht(.15,.6,.09),l);p.position.set(.35,1.26,-.8),m.add(p);const d=new kt;d.position.set(-1.28,1.72,-.58),d.rotation.y=.28,d.add(new ze(new ht(1.25,.98,.07),g));const S=new ze(new cn(1.15,.88),new Zt({map:ac("clean_ui_system.ts","#60a5fa")}));S.position.z=.04,d.add(S),m.add(d),xt.add(m),Bn(m,"monitors");const A=new kt,E=new ze(new ht(1.3,.08,.48),new Kt({color:1981066,metalness:.6,roughness:.3}));E.position.set(.15,.9,.62),E.rotation.x=.07,A.add(E);for(let we=0;we<4;we++)for(let Re=0;Re<11;Re++){const je=we===0&&Re===0||we===3&&Re===5||we===1&&Re===2,Qe=new ze(new ht(.085,.045,.082),new Kt({color:je?3718648:14742270,roughness:.3}));Qe.position.set(-.38+Re*.106,.955-we*.006,.46+we*.102),A.add(Qe)}const w=new ze(new ht(.21,.08,.34),new Kt({color:2450411,metalness:.5,roughness:.3}));w.position.set(.98,.9,.62),A.add(w),xt.add(A),Bn(A,"keyboard");const T=new kt;T.position.set(-1.85,.9,.62),T.rotation.y=.18;const h=new ze(new ht(.82,.06,.58),new Kt({color:1920728,roughness:.3,metalness:.5}));T.add(h);const M=new ze(new cn(.72,.48),new Zt({color:3718648}));M.rotation.x=-Math.PI/2,M.position.y=.032,T.add(M),xt.add(T),Bn(T,"notebook");const I=new kt;I.position.set(-2.45,.86,-.45),I.rotation.y=.35;const C=new ze(new ht(.78,.92,.06),g);C.position.y=.48,I.add(C),new df().load("./images/farajimage.png",we=>{const Re=new ze(new cn(.66,.8),new Zt({map:we}));Re.position.set(0,.48,.035),I.add(Re)});const D=new ze(new To(.19,0),new Kt({color:3718648,metalness:.85,roughness:.15}));D.position.set(.58,.42,.12),I.add(D);const F=new ze(new An(.12,.16,.2,16),l);F.position.set(.58,.1,.12),I.add(F),xt.add(I),Bn(I,"portrait");const V=new kt;V.position.set(2.38,.86,-.48),V.rotation.y=-.35;const L=new ze(new ht(.76,1.15,.66),new Kt({color:1920728,roughness:.3,metalness:.35}));L.position.y=.58,V.add(L);const G=new ze(new cn(.58,.46),new Zt({color:3718648}));G.position.set(0,.7,.34),V.add(G),xt.add(V),Bn(V,"arcade");const q=new kt;q.position.set(1.55,.86,.62);const z=new ze(new An(.17,.14,.34,24),new Kt({color:3718648,roughness:.2}));z.position.y=.17,q.add(z);for(let we=0;we<3;we++){const Re=new ze(new cr(.04,10,10),new Zt({color:14742270,transparent:!0,opacity:.45}));Re.position.set((we-1)*.04,.44+we*.12,0),Re.userData.offset=we*1.7,q.add(Re),rc.push(Re)}xt.add(q),Bn(q,"coffee");const ee=new kt;ee.position.set(2.38,.86,.68),ee.rotation.y=-.28;const W=new ze(new An(.24,.28,.07,24),l);W.position.y=.035,ee.add(W);const Q=new ze(new ht(.32,.6,.045),g);Q.position.set(0,.32,0),Q.rotation.x=-.25,ee.add(Q);const j=new ze(new cn(.28,.54),new Zt({color:959977}));j.position.set(0,.32,.025),j.rotation.x=-.25,ee.add(j),xt.add(ee),Bn(ee,"phone");const _e=new kt;_e.position.set(-2.85,.86,-.82);const Le=new ze(new An(.24,.27,.07,24),l);Le.position.y=.035,_e.add(Le);const $=new ze(new An(.035,.035,1.35,12),l);$.position.y=.68,_e.add($);const fe=new ze(new yo(.28,.38,24),l);fe.position.set(.22,1.38,.12),fe.rotation.z=-.5,_e.add(fe),ur=new Zt({color:16707722});const xe=new ze(new cr(.1,14,14),ur);xe.position.set(.26,1.26,.12),_e.add(xe),xt.add(_e),Bn(_e,"lamp");const be=new xf,ue=new Ge;let Pe=!1,rt=0,Ae=0,qe=0,Ke=0,Fe=0;bn.addEventListener("pointerdown",we=>{Pe=!0,rt=0,Ae=we.clientX,qe=we.clientY}),bn.addEventListener("pointermove",we=>{const Re=bn.getBoundingClientRect(),je=we.clientX-Re.left,Qe=we.clientY-Re.top;if(ue.x=je/Re.width*2-1,ue.y=-(Qe/Re.height)*2+1,Pe&&ri==="overview"){const mt=we.clientX-Ae,Bt=we.clientY-qe;rt+=Math.hypot(mt,Bt),Ke=Math.max(-.55,Math.min(.55,Ke+mt*.005)),Re.width<768&&(Fe=Math.max(-1.25,Math.min(1.25,Fe-mt*.006))),Ae=we.clientX,qe=we.clientY,On?.classList.remove("visible");return}if(we.pointerType==="touch")return;be.setFromCamera(ue,Wt);const yt=be.intersectObjects(fr,!1);if(yt.length>0){const mt=yt[0].object.userData.station;bn.classList.add("hovering-object"),On&&mt&&oo[mt]&&(On.textContent=oo[mt].label,On.style.left=`${Math.min(Re.width-140,Math.max(140,je))}px`,On.style.top=`${Math.max(48,Qe)}px`,On.classList.add("visible"))}else bn.classList.remove("hovering-object"),On?.classList.remove("visible")}),bn.addEventListener("pointerleave",()=>{Pe=!1,On?.classList.remove("visible")}),window.addEventListener("pointerup",we=>{if(!Pe)return;Pe=!1;const Re=we.pointerType==="touch"?16:7;if(rt>Re)return;const je=bn.getBoundingClientRect();if(we.clientX<je.left||we.clientX>je.right||we.clientY<je.top||we.clientY>je.bottom)return;ue.x=(we.clientX-je.left)/je.width*2-1,ue.y=-((we.clientY-je.top)/je.height)*2+1,be.setFromCamera(ue,Wt);const Qe=be.intersectObjects(fr,!1);if(Qe.length>0){const yt=Qe[0].object.userData.station;yt&&xd(yt)}}),window.addEventListener("resize",ls),window.addEventListener("orientationchange",()=>setTimeout(ls,120));const vt=new vf;function ft(){requestAnimationFrame(ft);const we=vt.getElapsedTime();ri!=="overview"&&(Ke=0,Fe=0),xt.rotation.y+=(Ke-xt.rotation.y)*.08,xt.position.x+=(-Fe-xt.position.x)*.08,zs.lerp(Ni,.085),Gs.lerp(Ui,.095),Wt.position.copy(zs),Wt.lookAt(Gs),rc.forEach(Re=>{const je=(we*.4+Re.userData.offset)%1;Re.position.y=.4+je*.4,Re.material.opacity=(1-je)*.45}),zn.render(Tn,Wt)}ft()}function ls(){if(!Qt||!zn||!Wt)return;const i=Math.max(1,Qt.clientWidth),e=Math.max(1,Qt.clientHeight);Wt.aspect=i/e,Wt.fov=Wt.aspect<.85?48:39,Wt.updateProjectionMatrix(),zn.setSize(i,e);const t=ki(ri);Ni.copy(t.pos),Ui.copy(t.look)}const ts=document.getElementById("screens-container"),Er=document.getElementById("top-back-desk-btn"),g0=document.getElementById("screen-back-desk-btn"),_0=document.getElementById("footer-back-desk-btn"),x0=document.getElementById("toggle-full-site-btn"),v0=document.getElementById("screen-show-all-btn"),hr=document.getElementById("active-screen-icon"),pr=document.getElementById("active-screen-title"),S0={projects:{icon:"🖥️",title:"Featured Projects & Case Studies",station:"monitors"},about:{icon:"👤",title:"About Faraj & Career Journey",station:"portrait"},services:{icon:"💼",title:"Company Services & Project Estimator",station:"notebook"},skills:{icon:"⌨️",title:"Technical Skills & Proficiency",station:"keyboard"},arcade:{icon:"🕹️",title:"Developer Break Room & Bug Smasher",station:"arcade"},contact:{icon:"📱",title:"Direct Contact & Project Inquiry",station:"phone"}};function M0(){qi=!qi,Gn&&(Gn.intensity=qi?4.2:0),ur&&ur.color.setHex(qi?16707722:1981066),nt("click"),gd("💡",qi?"Warm desk spotlight turned ON!":"Desk lamp turned OFF (Night Focus Mode)!")}function xd(i){if(i==="lamp"){M0();return}if(i==="coffee"){_d();return}const e=oo[i];e&&e.screenId&&yr(e.screenId,!0)}function yr(i,e=!1){if(i==="desk"){ci();return}const t=S0[i];if(!t)return;nt("zoom"),ri=t.station;const n=ki(ri);Ni.copy(n.pos),Ui.copy(n.look),document.querySelectorAll("[data-screen-nav]").forEach(r=>{r.classList.toggle("active",r.getAttribute("data-screen-nav")===i)}),hr&&(hr.textContent=t.icon),pr&&(pr.textContent=t.title);const s=()=>{document.body.classList.remove("full-website-mode"),document.body.classList.add("desk-controller-mode"),ls(),document.querySelectorAll(".screen-section").forEach(r=>{r.classList.toggle("active-screen",r.id===i)}),ts?.classList.remove("hidden-overlay"),ts&&(ts.scrollTop=0),Er?.classList.remove("hidden"),document.getElementById("mobile-menu")?.classList.add("hidden")};e?setTimeout(s,360):s()}function ci(){nt("click"),ri="overview";const i=ki("overview");Ni.copy(i.pos),Ui.copy(i.look),document.body.classList.remove("full-website-mode"),document.body.classList.add("desk-controller-mode"),ts?.classList.add("hidden-overlay"),Er?.classList.add("hidden"),document.getElementById("mobile-menu")?.classList.add("hidden"),document.querySelectorAll("[data-screen-nav]").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-screen-nav")==="desk")});const e=document.getElementById("full-site-btn-label");e&&(e.textContent="Full Website"),ls(),window.scrollTo({top:0,behavior:"smooth"})}function vd(){nt("zoom"),ri="overview";const i=ki("overview");Ni.copy(i.pos),Ui.copy(i.look),document.body.classList.remove("desk-controller-mode"),document.body.classList.add("full-website-mode"),ts?.classList.remove("hidden-overlay"),Er?.classList.remove("hidden"),document.getElementById("mobile-menu")?.classList.add("hidden"),hr&&(hr.textContent="🌐"),pr&&(pr.textContent="Full Website View (All Sections)");const e=document.getElementById("full-site-btn-label");e&&(e.textContent="Desk Mode"),ls(),setTimeout(()=>{document.getElementById("screens-container")?.scrollIntoView({behavior:"smooth"})},80)}document.querySelectorAll("[data-screen-nav]").forEach(i=>{i.addEventListener("click",()=>{const e=i.getAttribute("data-screen-nav")||"desk";yr(e,!1)})});document.querySelectorAll("[data-desk-station]").forEach(i=>{i.addEventListener("click",()=>{const e=i.getAttribute("data-desk-station");e&&xd(e)})});document.getElementById("brand-desk-btn")?.addEventListener("click",ci);Er?.addEventListener("click",ci);g0?.addEventListener("click",ci);_0?.addEventListener("click",ci);x0?.addEventListener("click",()=>{document.body.classList.contains("full-website-mode")?ci():vd()});v0?.addEventListener("click",vd);const oc=['"I believe a great website should load in under a second—or before the first sip of espresso cools down! ☕⚡"','"When I say I am tweaking one small UI detail, it means making sure every pixel and shade of blue feels 100% right! 🎨💙"','"Best moment of any coding day: when a complex feature compiles and runs on the very first try! 🚀✨"','"I built this interactive desk so exploring my work feels fun, memorable, and refreshing! 🖥️🎮"'];let ca=0;const E0=document.getElementById("next-fun-fact-btn"),lc=document.getElementById("fun-fact-display");E0?.addEventListener("click",()=>{nt("click"),ca=(ca+1)%oc.length,lc&&(lc.textContent=oc[ca])});const y0=document.getElementById("theme-toggle"),Hs=document.getElementById("theme-icon");function Sd(i){i?(document.documentElement.classList.add("dark"),Hs&&(Hs.textContent="☀️")):(document.documentElement.classList.remove("dark"),Hs&&(Hs.textContent="🌙"))}const cc=localStorage.getItem("color-theme");Sd(cc?cc==="dark":!0);y0?.addEventListener("click",()=>{const i=!document.documentElement.classList.contains("dark");localStorage.setItem("color-theme",i?"dark":"light"),Sd(i),nt("click")});document.getElementById("mobile-menu-btn")?.addEventListener("click",()=>{document.getElementById("mobile-menu")?.classList.toggle("hidden")});const Md=[{key:"1",short:"JS",title:"JavaScript (ES6+)",category:"CORE LANGUAGE",pct:96,desc:"Building interactive application logic, asynchronous API integrations, and clean modular architecture."},{key:"2",short:"REACT",title:"React.js",category:"UI ENGINEERING",pct:94,desc:"Component-driven interfaces, custom hooks, state management, and fast single-page applications."},{key:"3",short:"NEXT",title:"Next.js",category:"PRODUCTION FRAMEWORKS",pct:90,desc:"Server-rendered and static web platforms optimized for speed, SEO, and enterprise scalability."},{key:"4",short:"TS",title:"TypeScript",category:"TYPE SAFETY",pct:89,desc:"Strict type contracts and predictable data structures for maintainable, bug-free codebases."},{key:"5",short:"TW",title:"Tailwind CSS",category:"DESIGN SYSTEMS",pct:98,desc:"Pixel-accurate responsive layouts, custom blue color systems, and dark/light theming."},{key:"6",short:"UI/UX",title:"Interactive UI & Motion",category:"USER EXPERIENCE",pct:93,desc:"Smooth micro-interactions, intuitive navigation flows, and engaging visual polish."},{key:"7",short:"HTML/CSS",title:"HTML5 & Modern CSS3",category:"WEB STANDARDS",pct:98,desc:"Semantic markup, Flexbox/Grid layouts, and cross-browser compatibility."},{key:"8",short:"GIT",title:"Git, APIs & Speed Optimization",category:"WORKFLOW & SPEED",pct:95,desc:"Version control with Git/GitHub, RESTful API integration, and Lighthouse performance tuning."}];let Ed=0;const da=document.getElementById("tech-cubes-grid"),dc=document.getElementById("hud-skill-badge"),uc=document.getElementById("hud-skill-category"),fc=document.getElementById("hud-skill-metric"),hc=document.getElementById("hud-skill-title"),pc=document.getElementById("hud-skill-desc"),mc=document.getElementById("hud-skill-pct"),gc=document.getElementById("hud-skill-bar");function Po(i,e=!0){const t=Md[i];t&&(Ed=i,e&&nt("click"),dc&&(dc.textContent=t.short),uc&&(uc.textContent=`0${t.key} // ${t.category}`),fc&&(fc.textContent=`${t.pct}% Proficiency`),hc&&(hc.textContent=t.title),pc&&(pc.textContent=t.desc),mc&&(mc.textContent=`${t.pct}%`),gc&&(gc.style.width=`${t.pct}%`),document.querySelectorAll(".skill-module-btn").forEach((n,s)=>{n.classList.toggle("active",s===i)}))}function b0(){da&&(da.innerHTML=Md.map((i,e)=>`
    <button type="button" data-idx="${e}" class="skill-module-btn ${e===Ed?"active":""}">
      <div class="flex items-center justify-between mb-2">
        <span class="px-2.5 py-0.5 rounded-lg bg-blue-600/20 text-sky-400 font-mono-code font-bold text-xs border border-sky-400/30">
          ${i.short}
        </span>
        <span class="font-mono-code text-xs text-sky-300 font-bold">${i.pct}%</span>
      </div>
      <div class="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-0.5">
        ${i.title}
      </div>
      <div class="font-mono-code text-[10px] text-slate-500 dark:text-blue-200/70">
        ${i.category}
      </div>
    </button>
  `).join(""),da.querySelectorAll(".skill-module-btn").forEach(i=>{i.addEventListener("click",()=>Po(parseInt(i.getAttribute("data-idx")||"0",10)))}))}window.addEventListener("keydown",i=>{const e=document.activeElement?.tagName?.toLowerCase();e==="input"||e==="textarea"||e==="select"||(i.key>="1"&&i.key<="8"&&Po(parseInt(i.key,10)-1),i.key==="Escape"&&ci(),i.ctrlKey&&i.shiftKey&&i.key.toLowerCase()==="a"&&(i.preventDefault(),ms()))});const cs="faraj_portfolio_projects_en_v1",ds="faraj_portfolio_messages_v1",Lo="faraj_studio_pin_v1",Io="faraj_studio_unlocked";let Ci=localStorage.getItem(Lo)||"2026";async function T0(){try{const i=await fetch("/api/settings");if(i.ok){const e=await i.json();e&&e.pin&&(Ci=String(e.pin),localStorage.setItem(Lo,Ci))}}catch{}}T0();const A0=[{id:"proj-portfolio",title:"Interactive Developer Portfolio & CMS",category:"web development",categoryLabel:"Frontend & Interactive UI",description:"A modern interactive developer portfolio featuring a virtual workspace desk, project scope estimator, and a built-in content management system to add and edit projects directly.",tags:["JavaScript","Tailwind CSS","Interactive UI","Vite"],image:"./images/portfolio-cover.svg",github:"https://github.com/farajnaser/myWebSite",link:"https://farajnaser.github.io/myWebSite",accent:"#2563eb",claps:48},{id:"proj-taallam",title:"Ta'allam Educational Platform",category:"web development",categoryLabel:"EdTech Platform",description:"Developed a responsive, high-performance educational platform using HTML5, CSS3, and JavaScript, focusing on user-centered UI/UX and seamless course navigation.",tags:["HTML5","CSS3","JavaScript","UI/UX Design"],image:"./images/learning-cover.svg",github:"https://github.com/farajnaser/EduWebProject",link:"https://farajnaser.github.io/EduWebProject/",accent:"#0ea5e9",claps:39},{id:"proj-library",title:"College Digital Library System",category:"web development",categoryLabel:"Full-Stack Web System",description:"Designed and engineered a full-featured web platform for the College of Electronic Technology using HTML, CSS, JavaScript, and PHP for dynamic book cataloging and student search.",tags:["HTML5","CSS3","JavaScript","PHP"],image:"./images/library-cover.svg",github:"https://github.com/farajnaser/phpProject0",link:"https://github.com/farajnaser/phpProject0",accent:"#3b82f6",claps:34}];let lt=[...A0],ps=sessionStorage.getItem(Io)==="true",ai="all",br=1;const lo=6,ua=document.getElementById("projects-grid"),fa=document.getElementById("project-pagination"),_c=document.querySelectorAll(".filter-btn"),xc=document.getElementById("studio-active-banner"),Vs=document.getElementById("studio-status-dot"),Ws=document.getElementById("studio-sync-status");async function w0(){const i=localStorage.getItem(cs);try{const e=await fetch("./projects.json",{cache:"no-store"});if(e.ok){const t=await e.json();if(Array.isArray(t)&&t.length>0){lt=t,localStorage.setItem(cs,JSON.stringify(lt)),oi(ai);return}}}catch{}if(i)try{const e=JSON.parse(i);Array.isArray(e)&&e.length>0&&(lt=e)}catch{}oi(ai)}async function Tr(){localStorage.setItem(cs,JSON.stringify(lt));try{const i=await fetch("/api/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projects:lt})});if(i.ok){const e=await i.json();e.ok&&Array.isArray(e.projects)&&(lt=e.projects,localStorage.setItem(cs,JSON.stringify(lt)),Ws&&(Ws.textContent="✅ Saved automatically to public/projects.json & browser storage."))}}catch{Ws&&(Ws.textContent="💾 Saved to browser storage. Use Export JSON for backup.")}oi(ai)}function Do(){ps?(xc?.classList.remove("hidden"),Vs&&(Vs.className="w-2 h-2 rounded-full bg-sky-400 animate-pulse")):(xc?.classList.add("hidden"),Vs&&(Vs.className="w-2 h-2 rounded-full bg-blue-400")),oi(ai)}window.clapProject=i=>{const e=lt.find(t=>t.id===i);e&&(e.claps=(e.claps||25)+1,nt("success"),localStorage.setItem(cs,JSON.stringify(lt)),oi(ai))};function R0(i,e){const t=i.claps||30;return`
    <article class="pro-card pro-card-interactive flex flex-col justify-between overflow-hidden">
      <div>
        ${ps?`
    <div class="bg-blue-600/15 border-b border-sky-400/30 px-4 py-2 flex items-center justify-between text-xs font-mono-code">
      <span class="text-sky-400 font-bold">#${e+1}</span>
      <div class="flex items-center gap-1.5">
        <button onclick="window.moveProject(${e}, -1)" class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 hover:text-sky-400">←</button>
        <button onclick="window.moveProject(${e}, 1)" class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 hover:text-sky-400">→</button>
        <button onclick="window.editProject('${i.id}')" class="px-2.5 py-0.5 rounded bg-blue-600 text-white font-bold">Edit</button>
        <button onclick="window.deleteProject('${i.id}')" class="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white">Delete</button>
      </div>
    </div>
  `:""}
        <div class="relative h-56 bg-slate-950 border-b border-blue-500/20 flex items-center justify-center p-6">
          <span class="absolute top-3.5 left-4 font-mono-code text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-blue-950/90 text-sky-300 border border-sky-400/35">
            ${i.categoryLabel||i.category}
          </span>

          <button onclick="window.clapProject('${i.id}')" class="absolute top-3.5 right-4 px-2.5 py-1 rounded-lg bg-blue-950/90 hover:bg-blue-600 text-sky-300 hover:text-white border border-sky-400/35 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer" title="Clap for this project!">
            <span>👏</span>
            <span>${t}</span>
          </button>

          <div class="project-3d-stage mt-3">
            <div class="project-3d-laptop">
              <div class="project-laptop-screen">
                <img src="${i.image||"./images/portfolio-cover.svg"}" alt="${i.title}" onerror="this.src='./images/portfolio-cover.svg'" />
              </div>
              <div class="project-laptop-base"></div>
            </div>
          </div>
        </div>

        <div class="p-6">
          <h3 class="font-display text-lg sm:text-xl font-bold mb-2">
            ${i.title}
          </h3>
          <p class="text-slate-600 dark:text-blue-100/80 text-sm leading-relaxed mb-4">
            ${i.description}
          </p>
          <div class="flex flex-wrap gap-1.5">
            ${(i.tags||[]).map(s=>`
              <span class="font-mono-code text-[11px] px-2.5 py-0.5 rounded-lg bg-blue-950/40 text-sky-600 dark:text-sky-300 border border-blue-500/25">
                ${s}
              </span>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="px-6 pb-6 pt-2 flex items-center gap-3">
        ${i.link?`
          <a href="${i.link}" target="_blank" class="flex-1 btn-primary !py-2.5 text-xs sm:text-sm">
            <span>Live Demo</span>
            <span>↗</span>
          </a>
        `:""}
        ${i.github?`
          <a href="${i.github}" target="_blank" class="btn-secondary !py-2.5 !px-4 text-xs sm:text-sm font-mono-code">
            GitHub
          </a>
        `:""}
      </div>
    </article>
  `}function C0(i){if(!fa)return;const e=Math.ceil(i/lo);if(e<=1){fa.innerHTML="";return}let t="";for(let n=1;n<=e;n++)t+=`
      <button onclick="window.changePage(${n})" class="${br===n?"btn-primary":"btn-secondary"} !w-9 !h-9 !p-0 font-mono-code text-xs">
        ${n}
      </button>
    `;fa.innerHTML=t}window.changePage=i=>{br=i,oi(ai)};function oi(i="all"){if(!ua)return;ai=i;const e=i==="all"?lt.map((s,r)=>({project:s,idx:r})):lt.map((s,r)=>({project:s,idx:r})).filter(s=>s.project.category===i),t=(br-1)*lo,n=e.slice(t,t+lo);n.length===0?ua.innerHTML=`
      <div class="col-span-full pro-card p-10 text-center">
        <h4 class="font-display font-bold text-lg mb-1">No projects in this category yet</h4>
        <p class="text-xs text-sky-400">Click "+ Add / Edit Work" to add a new project.</p>
      </div>
    `:ua.innerHTML=n.map(s=>R0(s.project,s.idx)).join(""),C0(e.length)}_c.forEach(i=>{i.addEventListener("click",()=>{nt("click"),_c.forEach(e=>{e.className="filter-btn btn-secondary !py-2 !px-4 text-xs"}),i.className="filter-btn btn-primary !py-2 !px-4 text-xs",br=1,oi(i.getAttribute("data-filter")||"all")})});const yd=document.querySelectorAll(".est-check"),vc=document.getElementById("est-result-text"),P0=document.getElementById("est-apply-btn");function No(){let i=1;const e=[];return yd.forEach(t=>{t.checked&&(i+=parseInt(t.value||"1",10),e.push(t.getAttribute("data-label")))}),vc&&(vc.textContent=e.length===0?"Select at least 1 feature above":`React / Next.js • Est. ${i}–${i+2} Weeks Delivery`),e}yd.forEach(i=>i.addEventListener("change",()=>{nt("click"),No()}));P0?.addEventListener("click",()=>{const i=No(),e=document.getElementById("subject"),t=document.getElementById("message_text");e&&(e.value="New Project Scope Inquiry"),t&&(t.value=`Hello Faraj,
We would like to discuss a project with the following scope:
- ${i.join(`
- `)}

Please let us know your availability.`),yr("contact",!1)});const L0=document.getElementById("terminal-form"),ha=document.getElementById("terminal-input"),Yi=document.getElementById("terminal-output");function bd(i){const e=i.trim().toLowerCase();if(!e||!Yi)return;if(nt("click"),e==="clear"){Yi.innerHTML='<p class="text-slate-400">Console cleared.</p>';return}let t="";e==="whoami"?t="Faraj Alrmah — Frontend Web Developer based in Tripoli, Libya.":e==="stack"?t="Core Stack: JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, HTML5/CSS3.":e==="coffee"?(_d(),t=`Coffee refilled! Total cups today: ${Ji} ☕`):e==="joke"?t="Why do programmers prefer dark mode? Because light attracts bugs! 🐛💙":e==="contact"?t="Email: farajelrmahmoo@gmail.com | Phone: +218 922613675":t=`Command "${i}" not found. Try: whoami, stack, coffee, joke, contact, clear`;const n=document.createElement("div");n.className="pt-1.5 border-t border-blue-900/40",n.innerHTML=`<p class="text-sky-400">faraj@desk:~$ <span class="text-white">${i}</span></p><p class="text-blue-200 pl-3">${t}</p>`,Yi.appendChild(n),Yi.scrollTop=Yi.scrollHeight}L0?.addEventListener("submit",i=>{i.preventDefault(),ha&&(bd(ha.value),ha.value="")});document.querySelectorAll(".term-chip").forEach(i=>{i.addEventListener("click",()=>{const e=i.getAttribute("data-cmd");e&&bd(e)})});const Ti=document.getElementById("bug-arena"),Xs=document.getElementById("bug-start-overlay"),Sc=document.getElementById("start-bug-game-btn"),mr=document.getElementById("bug-score"),gr=document.getElementById("bug-high-score"),qs=document.getElementById("bug-timer");let Ai=0,Qi=parseInt(localStorage.getItem("faraj-bug-high")||"0",10);gr&&(gr.textContent=String(Qi));let Mc=null,Ec=null,Ys=20;function I0(){if(!Ti)return;const i=["🐛","🕷️","🐞"],e=document.createElement("div");e.className="bug-target",e.textContent=i[Math.floor(Math.random()*i.length)];const t=Math.max(40,Ti.clientWidth-50),n=Math.max(40,Ti.clientHeight-50);e.style.left=`${Math.floor(Math.random()*t)}px`,e.style.top=`${Math.floor(Math.random()*n)}px`,e.addEventListener("pointerdown",s=>{s.stopPropagation(),Ai+=10,mr&&(mr.textContent=String(Ai)),Ai>Qi&&(Qi=Ai,localStorage.setItem("faraj-bug-high",String(Qi)),gr&&(gr.textContent=String(Qi))),nt("click"),e.remove()}),Ti.appendChild(e),setTimeout(()=>{e.parentElement&&e.remove()},1350)}Sc?.addEventListener("click",()=>{nt("success"),Ai=0,Ys=20,mr&&(mr.textContent="0"),qs&&(qs.textContent="20s"),Xs?.classList.add("hidden"),Ti?.querySelectorAll(".bug-target").forEach(i=>i.remove()),Ec=setInterval(I0,480),Mc=setInterval(()=>{Ys-=1,qs&&(qs.textContent=`${Ys}s`),Ys<=0&&(clearInterval(Ec),clearInterval(Mc),Ti?.querySelectorAll(".bug-target").forEach(i=>i.remove()),Xs&&(Xs.classList.remove("hidden"),Xs.querySelector("h4").textContent=`Time's Up! Score: ${Ai} pts 🎉`,Sc.textContent="Play Again ↻"),nt("success"))},1e3)});const Td=document.getElementById("studio-modal"),Ad=document.getElementById("studio-pin-view"),wd=document.getElementById("studio-editor-view"),D0=document.getElementById("studio-pin-form"),ir=document.getElementById("studio-pin-input"),Rd=document.getElementById("studio-pin-error"),Cd=document.getElementById("studio-project-form"),$s=document.getElementById("studio-form-title"),Pd=document.getElementById("cms-tab-projects"),Ld=document.getElementById("cms-tab-inbox"),Id=document.getElementById("cms-tab-security"),N0=document.getElementById("cms-panel-projects"),U0=document.getElementById("cms-panel-inbox"),F0=document.getElementById("cms-panel-security"),yc=document.getElementById("inbox-count-badge"),pa=document.getElementById("inbox-messages-list"),co=document.getElementById("proj-id"),Uo=document.getElementById("proj-title"),Dd=document.getElementById("proj-category"),Fo=document.getElementById("proj-category-label"),Oo=document.getElementById("proj-accent"),Nd=document.getElementById("proj-desc"),Ud=document.getElementById("proj-tags"),Xn=document.getElementById("proj-image-url"),O0=document.getElementById("proj-image-file"),pn=document.getElementById("proj-image-preview"),Fd=document.getElementById("proj-link"),Od=document.getElementById("proj-github"),B0=document.getElementById("generate-cover-btn");let Ot=[];async function Bo(){const i=localStorage.getItem(ds);if(i)try{Ot=JSON.parse(i)||[]}catch{}try{const e=await fetch("/api/messages");if(e.ok){const t=await e.json();Array.isArray(t)&&t.length>0&&(Ot=t,localStorage.setItem(ds,JSON.stringify(Ot)))}}catch{}Ar()}async function k0(i){Ot.unshift(i),localStorage.setItem(ds,JSON.stringify(Ot));try{await fetch("/api/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:Ot})})}catch{}Ar()}function Ar(){if(yc&&(yc.textContent=String(Ot.length)),!!pa){if(Ot.length===0){pa.innerHTML=`
      <div class="p-8 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center">
        <p class="font-display font-bold text-base mb-1">Your Inbox is Empty</p>
        <p class="text-xs text-slate-400">New messages sent from the Contact Form will appear right here automatically.</p>
      </div>
    `;return}pa.innerHTML=Ot.map(i=>{const e=String(i.user_phone||"").replace(/[^0-9]/g,"");return`
      <div class="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-blue-500/20 pb-2">
          <div>
            <span class="font-display font-bold text-sm text-white">${i.first_name||""} ${i.last_name||""}</span>
            <span class="font-mono-code text-xs text-sky-400 ml-2">${i.subject||"Project Inquiry"}</span>
          </div>
          <span class="font-mono-code text-[11px] text-slate-400">${i.date||""}</span>
        </div>
        <p class="text-xs sm:text-sm text-blue-100/90 whitespace-pre-line leading-relaxed">${i.message_text||""}</p>
        <div class="flex flex-wrap items-center justify-between gap-2 pt-2">
          <div class="font-mono-code text-xs text-sky-300 space-x-3">
            <span>✉️ ${i.user_email||""}</span>
            <span>📞 ${i.user_phone||""}</span>
          </div>
          <div class="flex items-center gap-2">
            <a href="mailto:${i.user_email||""}?subject=Re: ${encodeURIComponent(i.subject||"Your Inquiry")}" class="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold">
              Reply Email ✉️
            </a>
            ${e?`
              <a href="https://wa.me/${e}" target="_blank" class="px-2.5 py-1 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold">
                WhatsApp 💬
              </a>
            `:""}
            <button onclick="window.deleteInboxMessage('${i.id}')" class="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-400 text-xs font-bold">
              Delete
            </button>
          </div>
        </div>
      </div>
    `}).join("")}}window.deleteInboxMessage=async i=>{Ot=Ot.filter(e=>e.id!==i),localStorage.setItem(ds,JSON.stringify(Ot));try{await fetch("/api/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:Ot})})}catch{}Ar()};document.getElementById("clear-inbox-btn")?.addEventListener("click",async()=>{if(confirm("Clear all messages from the inbox?")){Ot=[],localStorage.setItem(ds,JSON.stringify(Ot));try{await fetch("/api/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[]})})}catch{}Ar()}});function wr(i){nt("click"),Pd?.classList.toggle("active",i==="projects"),Ld?.classList.toggle("active",i==="inbox"),Id?.classList.toggle("active",i==="security"),N0?.classList.toggle("hidden",i!=="projects"),U0?.classList.toggle("hidden",i!=="inbox"),F0?.classList.toggle("hidden",i!=="security")}Pd?.addEventListener("click",()=>wr("projects"));Ld?.addEventListener("click",()=>{Bo(),wr("inbox")});Id?.addEventListener("click",()=>wr("security"));function ms(i=null){nt("click"),Td?.classList.remove("hidden"),ps?ko(i):(Ad?.classList.remove("hidden"),wd?.classList.add("hidden"),Rd?.classList.add("hidden"),ir&&(ir.value="",setTimeout(()=>ir.focus(),50)))}function Rr(){Td?.classList.add("hidden")}function ko(i=null){Ad?.classList.add("hidden"),wd?.classList.remove("hidden"),wr("projects"),i?($s&&($s.textContent="Edit Project"),co.value=i.id,Uo.value=i.title||"",Dd.value=i.category||"web development",Fo.value=i.categoryLabel||"Web Platform",Oo.value=i.accent||"#2563eb",Nd.value=i.description||"",Ud.value=(i.tags||[]).join(", "),Xn.value=i.image||"./images/portfolio-cover.svg",pn&&(pn.src=i.image||"./images/portfolio-cover.svg"),Fd.value=i.link||"",Od.value=i.github||""):($s&&($s.textContent="Add New Project"),co.value="",Cd?.reset(),Xn.value="./images/portfolio-cover.svg",pn&&(pn.src="./images/portfolio-cover.svg"))}D0?.addEventListener("submit",i=>{i.preventDefault(),ir?.value.trim()===Ci?(ps=!0,sessionStorage.setItem(Io,"true"),Do(),nt("success"),Bo(),ko(null)):Rd?.classList.remove("hidden")});const bc=document.getElementById("change-pin-form"),z0=document.getElementById("new-pin-input"),G0=document.getElementById("confirm-pin-input"),$i=document.getElementById("pin-change-status");bc?.addEventListener("submit",async i=>{i.preventDefault();const e=z0?.value.trim()||"",t=G0?.value.trim()||"";if($i){if(e.length<4||e!==t){$i.textContent="❌ PINs do not match or are shorter than 4 characters.",$i.className="text-xs font-bold p-3 rounded-xl bg-rose-500/20 text-rose-400 block";return}Ci=e,localStorage.setItem(Lo,Ci);try{await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:Ci})})}catch{}nt("success"),$i.textContent="✅ Owner PIN updated successfully! Your new PIN is now active.",$i.className="text-xs font-bold p-3 rounded-xl bg-blue-600/25 text-sky-300 border border-sky-400/40 block",bc.reset()}});O0?.addEventListener("change",i=>{const e=i.target.files?.[0];if(!e)return;const t=new FileReader;t.onload=()=>{typeof t.result=="string"&&(Xn.value=t.result,pn&&(pn.src=t.result))},t.readAsDataURL(e)});Xn?.addEventListener("input",()=>{pn&&Xn.value.trim()&&(pn.src=Xn.value.trim())});B0?.addEventListener("click",()=>{nt("success");const i=(Uo?.value.trim()||"New Web Project").slice(0,32),e=(Fo?.value.trim()||"WEB APPLICATION").slice(0,24),t=Oo?.value||"#2563eb",n=document.createElement("canvas");n.width=800,n.height=500;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,800,500);r.addColorStop(0,"#040a18"),r.addColorStop(1,"#0c214a"),s.fillStyle=r,s.fillRect(0,0,800,500),s.strokeStyle=t,s.lineWidth=3,s.strokeRect(70,60,660,380),s.fillStyle=t,s.font="bold 16px monospace",s.fillText(e.toUpperCase(),110,140),s.fillStyle="#ffffff",s.font="bold 36px sans-serif",s.fillText(i,110,215),s.fillStyle="#93c5fd",s.font="19px monospace",s.fillText("Faraj Alrmah // Frontend Web Portfolio",110,270);const a=n.toDataURL("image/png");Xn.value=a,pn&&(pn.src=a)});Cd?.addEventListener("submit",async i=>{i.preventDefault();const e=co.value.trim(),t={id:e||`proj-${Date.now()}`,title:Uo.value.trim(),category:Dd.value,categoryLabel:Fo.value.trim(),accent:Oo.value,description:Nd.value.trim(),tags:Ud.value.split(",").map(n=>n.trim()).filter(Boolean),image:Xn.value.trim()||"./images/portfolio-cover.svg",link:Fd.value.trim(),github:Od.value.trim(),claps:42};if(e){const n=lt.findIndex(s=>s.id===e);n!==-1&&(lt[n]=t)}else lt.unshift(t);await Tr(),nt("success"),Rr(),yr("projects",!1)});window.editProject=i=>{const e=lt.find(t=>t.id===i);e&&ms(e)};window.deleteProject=async i=>{confirm("Are you sure you want to delete this project?")&&(lt=lt.filter(e=>e.id!==i),await Tr(),nt("click"))};window.moveProject=async(i,e)=>{const t=i+e;if(t<0||t>=lt.length)return;const n=lt[i];lt[i]=lt[t],lt[t]=n,await Tr(),nt("click")};document.getElementById("open-studio-btn")?.addEventListener("click",()=>ms());document.getElementById("mobile-open-studio-btn")?.addEventListener("click",()=>{document.getElementById("mobile-menu")?.classList.add("hidden"),ms()});document.getElementById("projects-add-btn")?.addEventListener("click",()=>ms());document.getElementById("banner-new-project-btn")?.addEventListener("click",()=>ko(null));document.getElementById("close-pin-modal")?.addEventListener("click",Rr);document.getElementById("close-editor-modal")?.addEventListener("click",Rr);document.getElementById("cancel-editor-btn")?.addEventListener("click",Rr);document.getElementById("lock-studio-btn")?.addEventListener("click",()=>{ps=!1,sessionStorage.removeItem(Io),Do(),nt("click")});document.getElementById("export-projects-btn")?.addEventListener("click",()=>{const i=new Blob([JSON.stringify(lt,null,2)],{type:"application/json"}),e=URL.createObjectURL(i),t=document.createElement("a");t.href=e,t.download="faraj-projects.json",t.click(),URL.revokeObjectURL(e)});document.getElementById("import-projects-input")?.addEventListener("change",i=>{const e=i.target.files?.[0];if(!e)return;const t=new FileReader;t.onload=async()=>{try{const n=JSON.parse(String(t.result));Array.isArray(n)&&(lt=n,await Tr(),nt("success"))}catch{alert("Invalid JSON file.")}},t.readAsText(e)});document.querySelectorAll(".topic-chip").forEach(i=>{i.addEventListener("click",()=>{nt("click");const e=i.getAttribute("data-topic")||"",t=document.getElementById("subject");t&&(t.value=e)})});const ma=document.getElementById("contact-form"),Ks=document.getElementById("form-status"),ga=document.getElementById("submit-btn"),_a=document.getElementById("btn-text"),H0=document.getElementById("whatsapp-send-btn");H0?.addEventListener("click",()=>{nt("click");const i=document.getElementById("first_name")?.value.trim()||"",e=document.getElementById("last_name")?.value.trim()||"",t=document.getElementById("user_email")?.value.trim()||"",n=document.getElementById("subject")?.value.trim()||"Project Inquiry",s=document.getElementById("message_text")?.value.trim()||"Hello Faraj, I would like to discuss a project.",r=`Hello Faraj 👋
*Name:* ${i} ${e}
*Email:* ${t}
*Subject:* ${n}

*Message:*
${s}`;window.open(`https://wa.me/218922613675?text=${encodeURIComponent(r)}`,"_blank")});ma?.addEventListener("submit",async i=>{if(i.preventDefault(),!ga||!_a||!Ks)return;ga.disabled=!0,_a.textContent="Sending...",Ks.classList.add("hidden");const e=new FormData(ma),t=Object.fromEntries(e.entries());await k0({id:`msg-${Date.now()}`,...t,date:new Date().toLocaleString()});let n=!1;try{(await fetch("https://formsubmit.co/ajax/farajelrmahmoo@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:`${t.first_name||""} ${t.last_name||""}`.trim(),email:t.user_email,phone:t.user_phone,_subject:`Portfolio Inquiry: ${t.subject||"New Message"}`,message:t.message_text})})).ok&&(n=!0)}catch{}try{(await fetch("https://formspree.io/f/mrelndrz",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Accept:"application/json"}})).ok&&(n=!0)}catch{}nt("success"),Ks.textContent=n?"✅ Message sent to Faraj's Email & saved in the Studio Inbox! I will reply soon.":`✅ Message saved directly to Faraj's Studio Inbox! You can also click "Send via WhatsApp" below for instant chat.`,Ks.className="text-sm font-medium p-4 rounded-xl bg-blue-600/20 text-sky-300 border border-sky-400/40 block",ma.reset(),ga.disabled=!1,_a.textContent="Send Message Now 🚀"});m0();b0();Po(0,!1);Do();w0();Bo();No();
