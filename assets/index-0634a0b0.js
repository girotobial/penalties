(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function T(){}function ge(e){return e()}function de(){return Object.create(null)}function Q(e){e.forEach(ge)}function me(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ye(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function W(e,t,n){e.insertBefore(t,n||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function Le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function L(e){return document.createElement(e)}function J(e){return document.createTextNode(e)}function O(){return J(" ")}function K(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e===""?null:+e}function ke(e){return Array.from(e.childNodes)}function se(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ne(e,t){e.value=t??""}function we(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,i,t),s}let x;function Z(e){x=e}function Ce(){if(!x)throw new Error("Function called outside component initialization");return x}function he(){const e=Ce();return(t,n,{cancelable:i=!1}={})=>{const s=e.$$.callbacks[t];if(s){const l=we(t,n,{cancelable:i});return s.slice().forEach(u=>{u.call(e,l)}),!l.defaultPrevented}return!0}}const U=[],P=[];let G=[];const oe=[],je=Promise.resolve();let ue=!1;function Ee(){ue||(ue=!0,je.then(be))}function ae(e){G.push(e)}function A(e){oe.push(e)}const re=new Set;let H=0;function be(){if(H!==0)return;const e=x;do{try{for(;H<U.length;){const t=U[H];H++,Z(t),Pe(t.$$)}}catch(t){throw U.length=0,H=0,t}for(Z(null),U.length=0,H=0;P.length;)P.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];re.has(n)||(re.add(n),n())}G.length=0}while(U.length);for(;oe.length;)oe.pop()();ue=!1,re.clear(),Z(e)}function Pe(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}function Re(e){const t=[],n=[];G.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),G=t}const ie=new Set;let I;function Ne(){I={r:0,c:[],p:I}}function Oe(){I.r||Q(I.c),I=I.p}function E(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function S(e,t,n,i){if(e&&e.o){if(ie.has(e))return;ie.add(e),I.c.push(()=>{ie.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function B(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function q(e){e&&e.c()}function F(e,t,n,i){const{fragment:s,after_update:l}=e.$$;s&&s.m(t,n),i||ae(()=>{const u=e.$$.on_mount.map(ge).filter(me);e.$$.on_destroy?e.$$.on_destroy.push(...u):Q(u),e.$$.on_mount=[]}),l.forEach(ae)}function M(e,t){const n=e.$$;n.fragment!==null&&(Re(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Se(e,t){e.$$.dirty[0]===-1&&(U.push(e),Ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,i,s,l,u,c=[-1]){const r=x;Z(e);const a=e.$$={fragment:null,ctx:[],props:l,update:T,not_equal:s,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:de(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};u&&u(a.root);let h=!1;if(a.ctx=n?n(e,t.props||{},(o,_,...v)=>{const C=v.length?v[0]:_;return a.ctx&&s(a.ctx[o],a.ctx[o]=C)&&(!a.skip_bound&&a.bound[o]&&a.bound[o](C),h&&Se(e,o)),_}):[],a.update(),h=!0,Q(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){const o=ke(t.target);a.fragment&&a.fragment.l(o),o.forEach(z)}else a.fragment&&a.fragment.c();t.intro&&E(e.$$.fragment),F(e,t.target,t.anchor,t.customElement),be()}Z(r)}class Y{$destroy(){M(this,1),this.$destroy=T}$on(t,n){if(!me(n))return T;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ae(e){let t,n,i;return{c(){t=L("div"),n=L("p"),i=J(e[0]),f(n,"class","svelte-lbxcag"),f(t,"class","text-danger centered svelte-lbxcag")},m(s,l){W(s,t,l),g(t,n),g(n,i)},p(s,[l]){l&1&&se(i,s[0])},i:T,o:T,d(s){s&&z(t)}}}function Be(e,t,n){let{points:i=0}=t;return e.$$set=s=>{"points"in s&&n(0,i=s.points)},[i]}class Fe extends Y{constructor(t){super(),X(this,t,Be,Ae,V,{points:0})}}function Me(e){let t,n,i,s,l,u,c;return{c(){t=L("div"),n=L("label"),i=J(e[1]),s=O(),l=L("input"),f(n,"class","form-check-label"),f(n,"for","tickbox"),f(l,"class","form-check-input"),f(l,"type","checkbox"),f(l,"id","tickbox"),f(t,"class","form-check form-switch")},m(r,a){W(r,t,a),g(t,n),g(n,i),g(t,s),g(t,l),l.checked=e[0],u||(c=K(l,"change",e[2]),u=!0)},p(r,[a]){a&2&&se(i,r[1]),a&1&&(l.checked=r[0])},i:T,o:T,d(r){r&&z(t),u=!1,c()}}}function Te(e,t,n){let{value:i}=t,{label:s}=t;function l(){i=this.checked,n(0,i)}return e.$$set=u=>{"value"in u&&n(0,i=u.value),"label"in u&&n(1,s=u.label)},[i,s,l]}class ce extends Y{constructor(t){super(),X(this,t,Te,Me,V,{value:0,label:1})}}function $e(e){let t,n,i,s,l,u,c,r,a,h;return{c(){t=L("div"),n=L("div"),i=L("span"),s=J(e[3]),l=O(),u=L("input"),c=O(),r=L("input"),f(i,"class","input-group-text"),f(i,"id","name"),f(u,"type","number"),f(u,"class","form-control"),f(u,"aria-label",e[4]),f(n,"class","input-group"),f(r,"class","form-range"),f(r,"type","range"),f(r,"min",e[2]),f(r,"max",e[1]),f(r,"step","1"),f(r,"aria-label",e[5]),f(t,"class","mb-3")},m(o,_){W(o,t,_),g(t,n),g(n,i),g(i,s),g(n,l),g(n,u),ne(u,e[0]),g(t,c),g(t,r),ne(r,e[0]),a||(h=[K(u,"input",e[7]),K(u,"change",e[6]),K(r,"change",e[8]),K(r,"input",e[8]),K(r,"change",e[6])],a=!0)},p(o,[_]){_&8&&se(s,o[3]),_&16&&f(u,"aria-label",o[4]),_&1&&le(u.value)!==o[0]&&ne(u,o[0]),_&4&&f(r,"min",o[2]),_&2&&f(r,"max",o[1]),_&32&&f(r,"aria-label",o[5]),_&1&&ne(r,o[0])},i:T,o:T,d(o){o&&z(t),a=!1,Q(h)}}}function qe(e,t,n){let i,s,{value:l}=t,{max:u}=t,{min:c}=t,{name:r}=t;const a=he();function h(){a("change")}function o(){l=le(this.value),n(0,l)}function _(){l=le(this.value),n(0,l)}return e.$$set=v=>{"value"in v&&n(0,l=v.value),"max"in v&&n(1,u=v.max),"min"in v&&n(2,c=v.min),"name"in v&&n(3,r=v.name)},e.$$.update=()=>{e.$$.dirty&8&&n(5,i=r+"-slider"),e.$$.dirty&8&&n(4,s=r+"-input")},[l,u,c,r,s,i,h,o,_]}class ve extends Y{constructor(t){super(),X(this,t,qe,$e,V,{value:0,max:1,min:2,name:3})}}function De(e){let t,n,i,s,l,u,c,r,a,h,o,_,v;function C(m){e[4](m)}let R={label:"First Lap"};e[0]!==void 0&&(R.value=e[0]),s=new ce({props:R}),P.push(()=>B(s,"value",C));function N(m){e[5](m)}let $={label:"Unsafe Rejoin"};e[1]!==void 0&&($.value=e[1]),r=new ce({props:$}),P.push(()=>B(r,"value",N));function y(m){e[6](m)}let p={name:"Cars Effected",min:1,max:10};return e[2]!==void 0&&(p.value=e[2]),o=new ve({props:p}),P.push(()=>B(o,"value",y)),o.$on("change",e[3]),{c(){t=L("div"),n=L("div"),i=L("div"),q(s.$$.fragment),u=O(),c=L("div"),q(r.$$.fragment),h=O(),q(o.$$.fragment),f(i,"class","col-sm-4"),f(i,"title","doubles penalty points for the first lap"),f(c,"class","col-sm-4"),f(c,"title","5 points for unsafe rejoin"),f(n,"class","row mb-3"),f(t,"class","container-sm options svelte-o9fr90")},m(m,k){W(m,t,k),g(t,n),g(n,i),F(s,i,null),g(n,u),g(n,c),F(r,c,null),g(t,h),F(o,t,null),v=!0},p(m,[k]){const b={};!l&&k&1&&(l=!0,b.value=m[0],A(()=>l=!1)),s.$set(b);const ee={};!a&&k&2&&(a=!0,ee.value=m[1],A(()=>a=!1)),r.$set(ee);const d={};!_&&k&4&&(_=!0,d.value=m[2],A(()=>_=!1)),o.$set(d)},i(m){v||(E(s.$$.fragment,m),E(r.$$.fragment,m),E(o.$$.fragment,m),v=!0)},o(m){S(s.$$.fragment,m),S(r.$$.fragment,m),S(o.$$.fragment,m),v=!1},d(m){m&&z(t),M(s),M(r),M(o)}}}function Ie(e,t,n){let{firstLap:i}=t,{unsafeRejoin:s}=t,{numCars:l}=t;const u=he();function c(){u("change")}function r(o){i=o,n(0,i)}function a(o){s=o,n(1,s)}function h(o){l=o,n(2,l)}return e.$$set=o=>{"firstLap"in o&&n(0,i=o.firstLap),"unsafeRejoin"in o&&n(1,s=o.unsafeRejoin),"numCars"in o&&n(2,l=o.numCars)},[i,s,l,c,r,a,h]}class ze extends Y{constructor(t){super(),X(this,t,Ie,De,V,{firstLap:0,unsafeRejoin:1,numCars:2})}}function He(e){let t,n,i,s,l,u,c,r,a,h,o,_,v,C;function R(p){e[3](p)}let N={label:"Contact"};e[0]!==void 0&&(N.value=e[0]),r=new ce({props:N}),P.push(()=>B(r,"value",R));function $(p){e[4](p)}let y={name:"Places Lost",min:Ke,max:Ue};return e[1]!==void 0&&(y.value=e[1]),_=new ve({props:y}),P.push(()=>B(_,"value",$)),{c(){t=L("div"),n=L("label"),i=J("Car "),s=J(e[2]),l=O(),u=L("div"),c=L("div"),q(r.$$.fragment),h=O(),o=L("div"),q(_.$$.fragment),f(n,"class","text-secondary"),f(n,"for","carSettings"),f(c,"title","Deducts 1 point for contact"),f(o,"title","0.5 points per place lost"),f(u,"class","mb-3"),f(u,"id","carSettings"),f(t,"class","mb-3")},m(p,m){W(p,t,m),g(t,n),g(n,i),g(n,s),g(t,l),g(t,u),g(u,c),F(r,c,null),g(u,h),g(u,o),F(_,o,null),C=!0},p(p,[m]){(!C||m&4)&&se(s,p[2]);const k={};!a&&m&1&&(a=!0,k.value=p[0],A(()=>a=!1)),r.$set(k);const b={};!v&&m&2&&(v=!0,b.value=p[1],A(()=>v=!1)),_.$set(b)},i(p){C||(E(r.$$.fragment,p),E(_.$$.fragment,p),C=!0)},o(p){S(r.$$.fragment,p),S(_.$$.fragment,p),C=!1},d(p){p&&z(t),M(r),M(_)}}}const Ke=0,Ue=50;function Ge(e,t,n){let{id:i=1}=t,{contact:s}=t,{placesLost:l}=t;function u(r){s=r,n(0,s)}function c(r){l=r,n(1,l)}return e.$$set=r=>{"id"in r&&n(2,i=r.id),"contact"in r&&n(0,s=r.contact),"placesLost"in r&&n(1,l=r.placesLost)},[s,l,i,u,c]}class Je extends Y{constructor(t){super(),X(this,t,Ge,He,V,{id:2,contact:0,placesLost:1})}}function _e(e,t,n){const i=e.slice();return i[15]=t[n],i[16]=t,i[17]=n,i}function pe(e){let t,n,i,s;function l(r){e[13](r,e[15])}function u(r){e[14](r,e[15])}let c={id:e[17]+1};return e[15].contact!==void 0&&(c.contact=e[15].contact),e[15].placesLost!==void 0&&(c.placesLost=e[15].placesLost),t=new Je({props:c}),P.push(()=>B(t,"contact",l)),P.push(()=>B(t,"placesLost",u)),{c(){q(t.$$.fragment)},m(r,a){F(t,r,a),s=!0},p(r,a){e=r;const h={};!n&&a&4&&(n=!0,h.contact=e[15].contact,A(()=>n=!1)),!i&&a&4&&(i=!0,h.placesLost=e[15].placesLost,A(()=>i=!1)),t.$set(h)},i(r){s||(E(t.$$.fragment,r),s=!0)},o(r){S(t.$$.fragment,r),s=!1},d(r){M(t,r)}}}function Qe(e){let t,n,i,s,l,u,c,r,a,h,o,_,v,C,R,N;l=new Fe({props:{points:e[4]}});function $(d){e[10](d)}function y(d){e[11](d)}function p(d){e[12](d)}let m={};e[0]!==void 0&&(m.firstLap=e[0]),e[1]!==void 0&&(m.unsafeRejoin=e[1]),e[3]!==void 0&&(m.numCars=e[3]),c=new ze({props:m}),P.push(()=>B(c,"firstLap",$)),P.push(()=>B(c,"unsafeRejoin",y)),P.push(()=>B(c,"numCars",p)),c.$on("change",e[5]);let k=e[2],b=[];for(let d=0;d<k.length;d+=1)b[d]=pe(_e(e,k,d));const ee=d=>S(b[d],1,1,()=>{b[d]=null});return{c(){t=L("main"),n=L("div"),i=L("div"),i.innerHTML=`<h1 class="text-primary">Penalties Calculator</h1> 
      <p class="lead">For when you&#39;re just too fucking tired to do maths</p>`,s=O(),q(l.$$.fragment),u=O(),q(c.$$.fragment),o=O(),_=L("div"),v=L("h2"),v.textContent="Cars",C=O(),R=L("ul");for(let d=0;d<b.length;d+=1)b[d].c();f(i,"class","content svelte-1d0t82o"),f(v,"class","text-secondary"),f(_,"class","container-sm cars svelte-1d0t82o"),f(n,"class","container-sm")},m(d,w){W(d,t,w),g(t,n),g(n,i),g(n,s),F(l,n,null),g(n,u),F(c,n,null),g(n,o),g(n,_),g(_,v),g(_,C),g(_,R);for(let D=0;D<b.length;D+=1)b[D]&&b[D].m(R,null);N=!0},p(d,[w]){const D={};w&16&&(D.points=d[4]),l.$set(D);const te={};if(!r&&w&1&&(r=!0,te.firstLap=d[0],A(()=>r=!1)),!a&&w&2&&(a=!0,te.unsafeRejoin=d[1],A(()=>a=!1)),!h&&w&8&&(h=!0,te.numCars=d[3],A(()=>h=!1)),c.$set(te),w&4){k=d[2];let j;for(j=0;j<k.length;j+=1){const fe=_e(d,k,j);b[j]?(b[j].p(fe,w),E(b[j],1)):(b[j]=pe(fe),b[j].c(),E(b[j],1),b[j].m(R,null))}for(Ne(),j=k.length;j<b.length;j+=1)ee(j);Oe()}},i(d){if(!N){E(l.$$.fragment,d),E(c.$$.fragment,d);for(let w=0;w<k.length;w+=1)E(b[w]);N=!0}},o(d){S(l.$$.fragment,d),S(c.$$.fragment,d),b=b.filter(Boolean);for(let w=0;w<b.length;w+=1)S(b[w]);N=!1},d(d){d&&z(t),M(l),M(c),Le(b,d)}}}function Ve(e,t,n){let i,s,l,u,c=!1,r=1,a=!1,h=1,o=[{contact:!0,placesLost:0}];function _(){let y=[];for(let p=0;p<h;p++)y.push({contact:!0,placesLost:0});n(2,o=y)}function v(y){c=y,n(0,c)}function C(y){a=y,n(1,a)}function R(y){h=y,n(3,h)}function N(y,p){e.$$.not_equal(p.contact,y)&&(p.contact=y,n(2,o))}function $(y,p){e.$$.not_equal(p.placesLost,y)&&(p.placesLost=y,n(2,o))}return e.$$.update=()=>{e.$$.dirty&2&&n(7,i=Number(a)*5),e.$$.dirty&1&&(c?n(6,r=2):n(6,r=1)),e.$$.dirty&4&&n(9,s=o.reduce((y,p)=>y+p.placesLost,0)),e.$$.dirty&4&&n(8,l=o.reduce((y,p)=>y+Number(p.contact),0)),e.$$.dirty&960&&n(4,u=r*(.5*s+l+i))},[c,a,o,h,u,_,r,i,l,s,v,C,R,N,$]}class We extends Y{constructor(t){super(),X(this,t,Ve,Qe,V,{})}}new We({target:document.getElementById("app")});
