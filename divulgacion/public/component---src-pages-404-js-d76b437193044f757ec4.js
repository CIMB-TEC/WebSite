(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(169),l=a(160);t.default=function(e){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",null,r.a.createElement("p",null,"La página que buscaste no existe. Por favor corrobora el enlace. ")))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return d}),a.d(t,"useStaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(32),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"parsePath",function(){return c.parsePath}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(148),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,a){"use strict";a(76);var n=a(8),r=a.n(n),i=a(0),l=a.n(i),c=(a(150),a(162),a(163),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")})})},a.render=function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{class:"navbar-brand"},l.a.createElement("a",{class:"navbar-item",href:"./index.html"},l.a.createElement("img",{id:"logo-cimb",src:"https://cimb.com.mx/img/logos/logo-cimb.png"})),l.a.createElement("div",{class:"navbar-burger burger","data-target":"mainNav"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{id:"mainNav",class:"navbar-menu"},l.a.createElement("div",{class:"navbar-start"}),l.a.createElement("div",{class:"navbar-end"},l.a.createElement("a",{class:"navbar-item",href:"/"},"Inicio"),l.a.createElement("a",{class:"navbar-item",href:"/proyectos/"},"Proyectos"),l.a.createElement("a",{class:"navbar-item",href:"/videos/"},"Videos"),l.a.createElement("a",{class:"navbar-item",href:"/divulgacion/"},"Divulgación"),l.a.createElement("a",{class:"navbar-item",href:"/equipo/"},"Equipo de Investigación"),l.a.createElement("a",{class:"navbar-item",href:"/contacto/"},"Contacto"),l.a.createElement("a",{class:"navbar-item",href:"/blog/"},"Blog"),l.a.createElement("a",{class:"navbar-item",href:"/index-eng.html"},"Eng/Esp"))))},t}(l.a.Component));t.a=c},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(150),a(164);t.a=function(){return r.a.createElement("div",null,r.a.createElement("footer",null,r.a.createElement("div",{class:"footer-left"},r.a.createElement("a",{href:"https://tec.mx/es",target:"_blank"},r.a.createElement("img",{src:"https://cimb.com.mx/img/logos/logo-tec-largo.png"})),r.a.createElement("a",{href:"../index.html"},r.a.createElement("img",{src:"https://cimb.com.mx/img/logos/logo-cimb.png"}))),r.a.createElement("div",{class:"footer-center"},r.a.createElement("h3",null,"Mapa del sitio"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Inicio")),r.a.createElement("li",null,r.a.createElement("a",{href:"/proyectos/"},"Proyectos")),r.a.createElement("li",null,r.a.createElement("a",{href:"/videos/"},"Videos")),r.a.createElement("li",null,r.a.createElement("a",{href:"/divulgacion/"},"Divulgación")),r.a.createElement("li",null,r.a.createElement("a",{href:"/equipo/"},"Equipo de investigación")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contacto/"},"Contacto")),r.a.createElement("li",null,r.a.createElement("a",{href:"/blog/"},"Blog")))),r.a.createElement("div",{class:"footer-right"},r.a.createElement("h3",null,"Contacto"),r.a.createElement("ul",null,r.a.createElement("li",null,"Calle del Puente #222 Col. Ejidos de Huipulco, Tlalpan C.P. 14380, México D.F."),r.a.createElement("li",null,r.a.createElement("a",null,"Dr. Martín Rogelio Bustamante Bello")),r.a.createElement("li",null,r.a.createElement("a",null,"Cel: 553075 1447")),r.a.createElement("li",null,r.a.createElement("a",null,"Correo: rbustama@tec.mx")),r.a.createElement("li",{class:"contact-socials"},r.a.createElement("a",{href:"https://www.facebook.com",target:"_blank"},r.a.createElement("i",{class:"fab fa-facebook-square"})),r.a.createElement("a",{href:"https://www.researchgate.net/profile/Rogelio_Bustamante-Bello",target:"_blank"},r.a.createElement("i",{class:"fab fa-researchgate"})))))),r.a.createElement("p",{class:"trademark"},"Instituto Tecnológico y de Estudios Superiores de Monterrey. México 2018."))}},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(176),s=a.n(o),u=a(147);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Centro de Investigación de Microsistemas y Biodiseño",description:"Página Web CIMB",author:"Varios"}}}}},169:function(e,t,a){"use strict";var n=a(170),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(147),s=a(154),u=(a(178),a(155)),m=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"1280114691",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null),i.a.createElement("main",null,t),i.a.createElement(u.a,null))},data:n})};m.propTypes={children:c.a.node.isRequired},t.a=m},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Centro de Investigación de Microsistemas y Biodiseño"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d76b437193044f757ec4.js.map