(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3ii+":function(e,t,n){"use strict";if(n("C2rm")){var r=n("EWJ8"),a=n("Rjya"),i=n("YSb4"),o=n("NTkt"),l=n("t/PU"),c=n("blVu"),u=n("qskZ"),s=n("UFbn"),f=n("40Jg"),v=n("xoC9"),p=n("01qa"),d=n("FotN"),g=n("scjx"),h=n("tylZ"),m=n("nxaD"),b=n("CoNu"),y=n("VrNb"),k=n("SsdY"),j=n("koL8"),w=n("kmUA"),E=n("ngvV"),_=n("P7f4"),S=n("YtPQ"),N=n("RJB0").f,O=n("Icjw"),A=n("LES0"),x=n("R7Vx"),L=n("TCyI"),C=n("s5Vs"),T=n("YkbM"),V=n("gZHo"),F=n("Qdq8"),B=n("iacD"),I=n("o8xA"),R=n("T/4k"),U=n("FPDg"),D=n("Wylp"),P=n("6fUK"),W=D.f,M=P.f,Y=a.RangeError,q=a.TypeError,J=a.Uint8Array,H=Array.prototype,Z=c.ArrayBuffer,G=c.DataView,K=L(0),X=L(2),Q=L(3),z=L(4),$=L(5),ee=L(6),te=C(!0),ne=C(!1),re=V.values,ae=V.keys,ie=V.entries,oe=H.lastIndexOf,le=H.reduce,ce=H.reduceRight,ue=H.join,se=H.sort,fe=H.slice,ve=H.toString,pe=H.toLocaleString,de=x("iterator"),ge=x("toStringTag"),he=A("typed_constructor"),me=A("def_constructor"),be=l.CONSTR,ye=l.TYPED,ke=l.VIEW,je=L(1,(function(e,t){return Ne(T(e,e[me]),t)})),we=i((function(){return 1===new J(new Uint16Array([1]).buffer)[0]})),Ee=!!J&&!!J.prototype.set&&i((function(){new J(1).set({})})),_e=function(e,t){var n=d(e);if(n<0||n%t)throw Y("Wrong offset!");return n},Se=function(e){if(j(e)&&ye in e)return e;throw q(e+" is not a typed array!")},Ne=function(e,t){if(!(j(e)&&he in e))throw q("It is not a typed array constructor!");return new e(t)},Oe=function(e,t){return Ae(T(e,e[me]),t)},Ae=function(e,t){for(var n=0,r=t.length,a=Ne(e,r);r>n;)a[n]=t[n++];return a},xe=function(e,t,n){W(e,t,{get:function(){return this._d[n]}})},Le=function(e){var t,n,r,a,i,o,l=w(e),c=arguments.length,s=c>1?arguments[1]:void 0,f=void 0!==s,v=O(l);if(null!=v&&!E(v)){for(o=v.call(l),r=[],t=0;!(i=o.next()).done;t++)r.push(i.value);l=r}for(f&&c>2&&(s=u(s,arguments[2],2)),t=0,n=g(l.length),a=Ne(this,n);n>t;t++)a[t]=f?s(l[t],t):l[t];return a},Ce=function(){for(var e=0,t=arguments.length,n=Ne(this,t);t>e;)n[e]=arguments[e++];return n},Te=!!J&&i((function(){pe.call(new J(1))})),Ve=function(){return pe.apply(Te?fe.call(Se(this)):Se(this),arguments)},Fe={copyWithin:function(e,t){return U.call(Se(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return z(Se(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){return R.apply(Se(this),arguments)},filter:function(e){return Oe(this,X(Se(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return $(Se(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return ee(Se(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){K(Se(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return ne(Se(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return te(Se(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){return ue.apply(Se(this),arguments)},lastIndexOf:function(e){return oe.apply(Se(this),arguments)},map:function(e){return je(Se(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){return le.apply(Se(this),arguments)},reduceRight:function(e){return ce.apply(Se(this),arguments)},reverse:function(){for(var e,t=Se(this).length,n=Math.floor(t/2),r=0;r<n;)e=this[r],this[r++]=this[--t],this[t]=e;return this},some:function(e){return Q(Se(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return se.call(Se(this),e)},subarray:function(e,t){var n=Se(this),r=n.length,a=m(e,r);return new(T(n,n[me]))(n.buffer,n.byteOffset+a*n.BYTES_PER_ELEMENT,g((void 0===t?r:m(t,r))-a))}},Be=function(e,t){return Oe(this,fe.call(Se(this),e,t))},Ie=function(e){Se(this);var t=_e(arguments[1],1),n=this.length,r=w(e),a=g(r.length),i=0;if(a+t>n)throw Y("Wrong length!");for(;i<a;)this[t+i]=r[i++]},Re={entries:function(){return ie.call(Se(this))},keys:function(){return ae.call(Se(this))},values:function(){return re.call(Se(this))}},Ue=function(e,t){return j(e)&&e[ye]&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},De=function(e,t){return Ue(e,t=b(t,!0))?f(2,e[t]):M(e,t)},Pe=function(e,t,n){return!(Ue(e,t=b(t,!0))&&j(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?W(e,t,n):(e[t]=n.value,e)};be||(P.f=De,D.f=Pe),o(o.S+o.F*!be,"Object",{getOwnPropertyDescriptor:De,defineProperty:Pe}),i((function(){ve.call({})}))&&(ve=pe=function(){return ue.call(this)});var We=p({},Fe);p(We,Re),v(We,de,Re.values),p(We,{slice:Be,set:Ie,constructor:function(){},toString:ve,toLocaleString:Ve}),xe(We,"buffer","b"),xe(We,"byteOffset","o"),xe(We,"byteLength","l"),xe(We,"length","e"),W(We,ge,{get:function(){return this[ye]}}),e.exports=function(e,t,n,c){var u=e+((c=!!c)?"Clamped":"")+"Array",f="get"+e,p="set"+e,d=a[u],m=d||{},b=d&&S(d),y=!d||!l.ABV,w={},E=d&&d.prototype,O=function(e,n){W(e,n,{get:function(){return function(e,n){var r=e._d;return r.v[f](n*t+r.o,we)}(this,n)},set:function(e){return function(e,n,r){var a=e._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),a.v[p](n*t+a.o,r,we)}(this,n,e)},enumerable:!0})};y?(d=n((function(e,n,r,a){s(e,d,u,"_d");var i,o,l,c,f=0,p=0;if(j(n)){if(!(n instanceof Z||"ArrayBuffer"==(c=k(n))||"SharedArrayBuffer"==c))return ye in n?Ae(d,n):Le.call(d,n);i=n,p=_e(r,t);var m=n.byteLength;if(void 0===a){if(m%t)throw Y("Wrong length!");if((o=m-p)<0)throw Y("Wrong length!")}else if((o=g(a)*t)+p>m)throw Y("Wrong length!");l=o/t}else l=h(n),i=new Z(o=l*t);for(v(e,"_d",{b:i,o:p,l:o,e:l,v:new G(i)});f<l;)O(e,f++)})),E=d.prototype=_(We),v(E,"constructor",d)):i((function(){d(1)}))&&i((function(){new d(-1)}))&&B((function(e){new d,new d(null),new d(1.5),new d(e)}),!0)||(d=n((function(e,n,r,a){var i;return s(e,d,u),j(n)?n instanceof Z||"ArrayBuffer"==(i=k(n))||"SharedArrayBuffer"==i?void 0!==a?new m(n,_e(r,t),a):void 0!==r?new m(n,_e(r,t)):new m(n):ye in n?Ae(d,n):Le.call(d,n):new m(h(n))})),K(b!==Function.prototype?N(m).concat(N(b)):N(m),(function(e){e in d||v(d,e,m[e])})),d.prototype=E,r||(E.constructor=d));var A=E[de],x=!!A&&("values"==A.name||null==A.name),L=Re.values;v(d,he,!0),v(E,ye,u),v(E,ke,!0),v(E,me,d),(c?new d(1)[ge]==u:ge in E)||W(E,ge,{get:function(){return u}}),w[u]=d,o(o.G+o.W+o.F*(d!=m),w),o(o.S,u,{BYTES_PER_ELEMENT:t}),o(o.S+o.F*i((function(){m.of.call(d,1)})),u,{from:Le,of:Ce}),"BYTES_PER_ELEMENT"in E||v(E,"BYTES_PER_ELEMENT",t),o(o.P,u,Fe),I(u),o(o.P+o.F*Ee,u,{set:Ie}),o(o.P+o.F*!x,u,Re),r||E.toString==ve||(E.toString=ve),o(o.P+o.F*i((function(){new d(1).slice()})),u,{slice:Be}),o(o.P+o.F*(i((function(){return[1,2].toLocaleString()!=new d([1,2]).toLocaleString()}))||!i((function(){E.toLocaleString.call([1,2])}))),u,{toLocaleString:Ve}),F[u]=x?A:L,r||x||v(E,de,L)}}else e.exports=function(){}},FFQr:function(e,t,n){"use strict";n.r(t);n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("1c7q");var r=n("mXGw"),a=n.n(r),i=n("/FXl"),o=n("qE5B"),l=(n("VlJN"),n("YjJN"),n("IYjZ"),n("yvkl"),n("Eb4t"),n("Qvie"),n("GmB8")),c=n.n(l),u=n("bGYK"),s=n.n(u),f=n("+P0C"),v=n("F5Dj"),p=n("Abof");n("ExnH");function d(e,t){var n=t.event,r=t.list,a=t.currentFocus;n.preventDefault(),function(e,t,n){var r=n.parentElement;switch(e){case"prev":var a=r&&r.previousElementSibling;if(a){var i=a.querySelector('[role="option"]');i&&i.focus()}break;case"next":var o=r&&r.nextElementSibling;if(o){var l=o.querySelector('[role="option"]');l&&l.focus()}break;case"first":var c=t.querySelector('[role="option"]');c&&c.focus();break;case"last":var u=t.querySelectorAll('[role="option"]');u.length&&u[u.length-1].focus()}}(e,r,a)}function g(e,t){var n=e.list,r=e.event,a=e.search,i=e.searchResetTimer;void 0===t&&(t=d);var o=r.key,l={event:r,list:n,currentFocus:r.target};switch(o){case"ArrowUp":t("prev",l);break;case"ArrowDown":t("next",l);break;case"Home":t("first",l);break;case"End":t("last",l);break;case"Tab":r.preventDefault();break;case"Enter":break;default:if(void 0!==a){var c=function(e){var t=e.list,n=e.key,r=e.search,a=e.searchResetTimer,i=t.querySelectorAll('[role="option"]');if(!i.length)return null;if(r){r.keys=r.keys.concat(n),function(e,t){t&&(clearTimeout(t),t=void 0);t=setTimeout((function(){e?e.keys="":e={keys:""},t=void 0}),500,e,t)}(r,a);for(var o=0;o<i.length;o++){var l=i[o].innerText;if(l&&0===l.toLowerCase().indexOf(r.keys))return i[o]}}return null}({list:n,key:o,search:a,searchResetTimer:i});c&&c.focus()}}}function h(e){return void 0===e&&(e=""),e.toLowerCase().replace(/[\W_]+/g,"")}function m(e){var t=e.items,n=e.value,i=e.label,o=e.onChange,l=e.className,u=e.helpLabel,d=e.errorLabel,m=e.inline,b=void 0!==m&&m,y=e.defaultPrompt,k=void 0===y?"Velg":y,j=e.variant,w=e.forceCompact,E=(e.initialInputValue,Object(r.useState)(n)),_=E[0],S=E[1],N=void 0!==_&&""!==_;function O(e){var n=t.map(v.a).filter((function(t){return t.value===e}))[0];return n&&n.label}var A=Object(r.useState)(O(n)),x=A[0],L=A[1],C=Object(r.useState)(!1),T=C[0],V=C[1],F=Object(r.useState)("dropdown"+s()(16))[0],B=function(e){void 0===e&&(e=!0);var t,n=Object(r.useRef)(null);return e&&(t={keys:""}),Object(r.useEffect)((function(){var e=n.current;return e&&e.addEventListener("keydown",(function(n){return g({list:e,event:n,search:t,searchResetTimer:void 0})})),function(){e&&e.removeEventListener("keydown",(function(n){return g({list:e,event:n,search:t,searchResetTimer:void 0})}))}}),[]),n}(),I="jkl-select".concat(b?" jkl-select--inline":"",w?" jkl-select--compact":"",T?" jkl-select--open":"",N?"":" jkl-select--no-value",d?" jkl-select--invalid":"",l?" "+l:"");Object(r.useEffect)((function(){S(n),L(O(n))}),[n,t]);var R=Object(p.a)(T)[0];return a.a.createElement("div",{"data-testid":"jkl-select",className:I},a.a.createElement(f.g,{variant:j,forceCompact:w},i),a.a.createElement("div",{className:"jkl-select__outer-wrapper"},a.a.createElement("button",{type:"button",className:"jkl-select__value","data-testid":"jkl-select__value","aria-haspopup":"listbox"},N?x:k),a.a.createElement(c.a,{id:F,ref:R,role:"listbox",className:"jkl-select__toggler",popup:i,hidden:!T,onToggle:function(){var e=B.current;e&&!T&&function(e,t,n){var r;(r=void 0!==n?e.querySelector("#"+t+"__"+h(n)):e.querySelector('[role="option"]'))&&r.focus()}(e,F,_),V(!T)},onToggleSelect:function(e){e.target.hidden=!0,e.target.button.focus(),e.target.value=e.detail;var t=e.detail.value;L(e.detail.textContent),S(t),o&&o(t)},"aria-activedescendant":N&&F+"__"+h(_)},a.a.createElement("ul",{className:"jkl-select__option-wrapper","data-testid":"jkl-select__option-wrapper",tabIndex:-1,ref:B},t.map(v.a).map((function(e){return a.a.createElement("li",{key:e.value},a.a.createElement("button",{type:"button",id:F+"__"+h(e.value),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===_,role:"option",value:e.value},e.label))})))),a.a.createElement("span",{className:"jkl-select__chevron"})),a.a.createElement(f.j,{helpLabel:u,errorLabel:d,forceCompact:w}))}function b(e){var t=e.label,n=e.items,r=e.className,i=void 0===r?"":r,o=e.onChange,l=e.inline,c=void 0!==l&&l,u=e.helpLabel,s=e.errorLabel,p=e.variant,d=e.placeholder,g=e.value,h=e.forceCompact;g||!d&&n.length&&(g=Object(v.a)(n[0]).value);var m="jkl-select".concat(c?" jkl-select--inline":"",h?" jkl-select--compact":"",s?" jkl-select--invalid":"",i?" "+i:""),b=g?void 0:"";return a.a.createElement("label",{"data-testid":"jkl-select",className:m},a.a.createElement(f.g,{variant:p,forceCompact:h},t),a.a.createElement("select",{value:g,defaultValue:b,className:"jkl-select__value",onBlur:o,onChange:o},d&&!g&&a.a.createElement("option",{disabled:!0,value:""},d),n.map(v.a).map((function(e){return a.a.createElement("option",{"data-testid":"jkl-select__option",key:e.value,value:e.value},e.label)}))),a.a.createElement("span",{className:"jkl-select__chevron"}),a.a.createElement(f.j,{helpLabel:u,errorLabel:s,forceCompact:h}))}var y=n("nBO4");n("HrjT"),n("AXu8"),n("HNvF"),n("RlK5");function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var j=function(){var e=[{value:"firstvalue",label:"Value 1"},{value:"secondvalue",label:"Value 2"}],t=k(Array(120)).map((function(e,t){return(t+1900).toString()})),n=Object(r.useState)(),i=n[0],o=n[1],l=Object(r.useState)(!1),c=l[0],u=l[1],s=Object(r.useState)(!1),f=s[0],v=s[1],p=Object(r.useState)(!1),d=p[0],g=p[1],h=Object(r.useState)("medium"),j=h[0],w=h[1];return a.a.createElement("section",{className:"example-page "+(c?"example-page--dark-mode":"example-page--light-mode")},a.a.createElement("fieldset",{className:"example-page__controls"},a.a.createElement(y.a,{className:"toggle-switch",inverted:c,onClick:function(){return u(!c)}},"Dark Mode"),a.a.createElement(y.a,{className:"toggle-switch",inverted:c,onClick:function(){return v(!f)}},"Vis feilmelding"),a.a.createElement(y.a,{className:"toggle-switch",inverted:c,onClick:function(){return g(!d)}},"Kompakt variant"),a.a.createElement(m,{forceCompact:!0,variant:"small",label:"Etikettvariant",items:["large","medium","small"],onChange:function(e){w("large"===e||"medium"===e||"small"===e?e:void 0)},value:j})),a.a.createElement(m,{inline:!0,forceCompact:d,variant:j,label:"Select",items:t,value:"1986",helpLabel:"Med strengverdier",errorLabel:f?"Beskrivende feilmelding":void 0,className:"jkl-spacing--all-2"}),a.a.createElement(m,{inline:!0,forceCompact:d,variant:j,label:"Select",defaultPrompt:"Velg et alternativ",items:e,onChange:o,value:i,helpLabel:"Med verdipar",errorLabel:f?"Beskrivende feilmelding":void 0,className:"jkl-spacing--all-2"}),a.a.createElement(b,{inline:!0,forceCompact:d,variant:j,label:"NativeSelect",items:t,value:"1986",helpLabel:"Med strengverdier",errorLabel:f?"Beskrivende feilmelding":void 0,className:"jkl-spacing--all-2"}),a.a.createElement(b,{inline:!0,forceCompact:d,variant:j,label:"NativeSelect",items:e,onChange:function(e){return o(e.target.value)},value:i,helpLabel:"Med verdipar",errorLabel:f?"Beskrivende feilmelding":void 0,className:"jkl-spacing--all-2"}))};n.d(t,"_frontmatter",(function(){return w})),n.d(t,"default",(function(){return S}));var w={},E={_frontmatter:w},_=o.a;function S(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(_,Object.assign({},E,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(j,{mdxType:"Example"}),Object(i.b)("p",null,"Vi bruker nedtrekkslister til å gi brukeren en liste med alternativ. Nedtrekkslister passer i de tilfellene det er for mange valg til å bruke ",Object(i.b)("em",{parentName:"p"},"radioknapper"),". Nedtrekkslisten må ha en overskrift, som forteller hva det er brukerne kan velge mellom i listen."),Object(i.b)("p",null,"Hvis du trenger en nedtrekksliste med mange valg, kan du også legge inn en søke- eller filtreringsfunksjon."),Object(i.b)("h2",null,"Tekst og validering"),Object(i.b)("p",null,"Bruk prinsippene for skjemadesign til å velge størrelse på overskriften til listen. Lag en kort og tydelig tekst, som forteller hva det er brukeren skal gjøre i nedtrekkslisten. Eksempel: ",Object(i.b)("em",{parentName:"p"},"Velg land"),". Hvis det trengs, kan du legge en hjelpetekst under listen for å forklare mer."),Object(i.b)("p",null,"Hvis nedtrekkslisten ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta informasjonen fra hjelpeteksten."),Object(i.b)("p",null,"Eksempel:\n",Object(i.b)("strong",{parentName:"p"},"Hjelpetekst"),": ",Object(i.b)("em",{parentName:"p"},"Velg landet du var på ferie i da du ble syk"),". ",Object(i.b)("strong",{parentName:"p"},"Feilmelding"),": ",Object(i.b)("em",{parentName:"p"},"Du må velge hvor du var på ferie"),"."),Object(i.b)("h2",null,"Bruk"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Velg årsak eller skadetype (gjerne mange valg)"),Object(i.b)("li",{parentName:"ul"},"Velg diagnose (for dyre- eller helseforsikring, gjerne med søkemulighet)"),Object(i.b)("li",{parentName:"ul"},"Velg stilling (gjerne med søkemulighet)")))}S.isMDXComponent=!0},FPDg:function(e,t,n){"use strict";var r=n("kmUA"),a=n("nxaD"),i=n("scjx");e.exports=[].copyWithin||function(e,t){var n=r(this),o=i(n.length),l=a(e,o),c=a(t,o),u=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===u?o:a(u,o))-c,o-l),f=1;for(c<l&&l<c+s&&(f=-1,c+=s-1,l+=s-1);s-- >0;)c in n?n[l]=n[c]:delete n[l],l+=f,c+=f;return n}},"T/4k":function(e,t,n){"use strict";var r=n("kmUA"),a=n("nxaD"),i=n("scjx");e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,l=a(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,u=void 0===c?n:a(c,n);u>l;)t[l++]=e;return t}},ZJc7:function(e,t,n){n("3ii+")("Uint8",1,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},bGYK:function(e,t,n){n("ZJc7");var r=self.crypto||self.msCrypto;e.exports=function(e){e=e||21;for(var t="",n=r.getRandomValues(new Uint8Array(e));e--;)t+="QLUint8ARdomValuesObj0h6345-79BCrypgJzHKTNYDSMkXPZ_FfG1WcqvwxEI2"[63&n[e]];return t}},blVu:function(e,t,n){"use strict";var r=n("Rjya"),a=n("C2rm"),i=n("EWJ8"),o=n("t/PU"),l=n("xoC9"),c=n("01qa"),u=n("YSb4"),s=n("UFbn"),f=n("FotN"),v=n("scjx"),p=n("tylZ"),d=n("RJB0").f,g=n("Wylp").f,h=n("T/4k"),m=n("goCf"),b=r.ArrayBuffer,y=r.DataView,k=r.Math,j=r.RangeError,w=r.Infinity,E=b,_=k.abs,S=k.pow,N=k.floor,O=k.log,A=k.LN2,x=a?"_b":"buffer",L=a?"_l":"byteLength",C=a?"_o":"byteOffset";function T(e,t,n){var r,a,i,o=new Array(n),l=8*n-t-1,c=(1<<l)-1,u=c>>1,s=23===t?S(2,-24)-S(2,-77):0,f=0,v=e<0||0===e&&1/e<0?1:0;for((e=_(e))!=e||e===w?(a=e!=e?1:0,r=c):(r=N(O(e)/A),e*(i=S(2,-r))<1&&(r--,i*=2),(e+=r+u>=1?s/i:s*S(2,1-u))*i>=2&&(r++,i/=2),r+u>=c?(a=0,r=c):r+u>=1?(a=(e*i-1)*S(2,t),r+=u):(a=e*S(2,u-1)*S(2,t),r=0));t>=8;o[f++]=255&a,a/=256,t-=8);for(r=r<<t|a,l+=t;l>0;o[f++]=255&r,r/=256,l-=8);return o[--f]|=128*v,o}function V(e,t,n){var r,a=8*n-t-1,i=(1<<a)-1,o=i>>1,l=a-7,c=n-1,u=e[c--],s=127&u;for(u>>=7;l>0;s=256*s+e[c],c--,l-=8);for(r=s&(1<<-l)-1,s>>=-l,l+=t;l>0;r=256*r+e[c],c--,l-=8);if(0===s)s=1-o;else{if(s===i)return r?NaN:u?-w:w;r+=S(2,t),s-=o}return(u?-1:1)*r*S(2,s-t)}function F(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function B(e){return[255&e]}function I(e){return[255&e,e>>8&255]}function R(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function U(e){return T(e,52,8)}function D(e){return T(e,23,4)}function P(e,t,n){g(e.prototype,t,{get:function(){return this[n]}})}function W(e,t,n,r){var a=p(+n);if(a+t>e[L])throw j("Wrong index!");var i=e[x]._b,o=a+e[C],l=i.slice(o,o+t);return r?l:l.reverse()}function M(e,t,n,r,a,i){var o=p(+n);if(o+t>e[L])throw j("Wrong index!");for(var l=e[x]._b,c=o+e[C],u=r(+a),s=0;s<t;s++)l[c+s]=u[i?s:t-s-1]}if(o.ABV){if(!u((function(){b(1)}))||!u((function(){new b(-1)}))||u((function(){return new b,new b(1.5),new b(NaN),"ArrayBuffer"!=b.name}))){for(var Y,q=(b=function(e){return s(this,b),new E(p(e))}).prototype=E.prototype,J=d(E),H=0;J.length>H;)(Y=J[H++])in b||l(b,Y,E[Y]);i||(q.constructor=b)}var Z=new y(new b(2)),G=y.prototype.setInt8;Z.setInt8(0,2147483648),Z.setInt8(1,2147483649),!Z.getInt8(0)&&Z.getInt8(1)||c(y.prototype,{setInt8:function(e,t){G.call(this,e,t<<24>>24)},setUint8:function(e,t){G.call(this,e,t<<24>>24)}},!0)}else b=function(e){s(this,b,"ArrayBuffer");var t=p(e);this._b=h.call(new Array(t),0),this[L]=t},y=function(e,t,n){s(this,y,"DataView"),s(e,b,"DataView");var r=e[L],a=f(t);if(a<0||a>r)throw j("Wrong offset!");if(a+(n=void 0===n?r-a:v(n))>r)throw j("Wrong length!");this[x]=e,this[C]=a,this[L]=n},a&&(P(b,"byteLength","_l"),P(y,"buffer","_b"),P(y,"byteLength","_l"),P(y,"byteOffset","_o")),c(y.prototype,{getInt8:function(e){return W(this,1,e)[0]<<24>>24},getUint8:function(e){return W(this,1,e)[0]},getInt16:function(e){var t=W(this,2,e,arguments[1]);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=W(this,2,e,arguments[1]);return t[1]<<8|t[0]},getInt32:function(e){return F(W(this,4,e,arguments[1]))},getUint32:function(e){return F(W(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return V(W(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return V(W(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){M(this,1,e,B,t)},setUint8:function(e,t){M(this,1,e,B,t)},setInt16:function(e,t){M(this,2,e,I,t,arguments[2])},setUint16:function(e,t){M(this,2,e,I,t,arguments[2])},setInt32:function(e,t){M(this,4,e,R,t,arguments[2])},setUint32:function(e,t){M(this,4,e,R,t,arguments[2])},setFloat32:function(e,t){M(this,4,e,D,t,arguments[2])},setFloat64:function(e,t){M(this,8,e,U,t,arguments[2])}});m(b,"ArrayBuffer"),m(y,"DataView"),l(y.prototype,o.VIEW,!0),t.ArrayBuffer=b,t.DataView=y},"t/PU":function(e,t,n){for(var r,a=n("Rjya"),i=n("xoC9"),o=n("LES0"),l=o("typed_array"),c=o("view"),u=!(!a.ArrayBuffer||!a.DataView),s=u,f=0,v="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(r=a[v[f++]])?(i(r.prototype,l,!0),i(r.prototype,c,!0)):s=!1;e.exports={ABV:u,CONSTR:s,TYPED:l,VIEW:c}},tylZ:function(e,t,n){var r=n("FotN"),a=n("scjx");e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=a(t);if(t!==n)throw RangeError("Wrong length!");return n}}}]);
//# sourceMappingURL=component---packages-select-react-documentation-select-mdx-8f8993cdafe1719647c4.js.map