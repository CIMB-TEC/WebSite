(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});a(184);var r=a(0),n=a.n(r),l=a(160),c=a(154),i=a(155),u=a(165),o=(a(192),"3601529016");t.default=function(e){var t=e.location,a=e.data.sanityPost,r=(a.id,a.slug,a.title),o=a.author,s=a.mainImage,m=a.body,d=a.publishedAt;return n.a.createElement("div",null,n.a.createElement(c.a,null),n.a.createElement("div",{className:"blog-post"},n.a.createElement(l.a,{title:r}),n.a.createElement(u.Breadcrumb,{location:t,crumbLabel:r,crumbStyle:{color:"#ccc"},crumbActiveStyle:{color:"#122c47"}}),n.a.createElement("img",{className:"mainImage",src:s.asset.url}),n.a.createElement("div",{className:"details"},n.a.createElement("span",{className:"date"},new Date(d).toLocaleDateString("es-MX",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),n.a.createElement("h3",{className:"author"},"por ",o.name)),n.a.createElement("h1",{className:"title"},r),n.a.createElement("div",{className:"content"},m.map(function(e){return e.children?e.children.map(function(e){return n.a.createElement("p",{key:e.key},e.text)}):e.asset?n.a.createElement("img",{src:e.asset.url}):void 0}))),n.a.createElement(i.a,null))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return d}),a.d(t,"useStaticQuery",function(){return b});var r=a(0),n=a.n(r),l=a(4),c=a.n(l),i=a(32),u=a.n(i);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"parsePath",function(){return i.parsePath}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var o=a(148),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var m=n.a.createContext({}),d=function(e){return n.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})},b=function(e){n.a.useContext;var t=n.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},148:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},153:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),l=a(4),c=a.n(l),i=a(56),u=a(2),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},154:function(e,t,a){"use strict";a(76);var r=a(8),n=a.n(r),l=a(0),c=a.n(l),i=(a(150),a(162),a(163),a(147)),u=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")})})},a.render=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{class:"navbar-brand"},c.a.createElement(i.Link,{class:"navbar-item",to:"/index.html"},c.a.createElement("img",{id:"logo-cimb",src:"http://cimb.com.mx/img/logos/logo-cimb.png"})),c.a.createElement("div",{class:"navbar-burger burger","data-target":"mainNav"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))),c.a.createElement("div",{id:"mainNav",class:"navbar-menu"},c.a.createElement("div",{class:"navbar-start"}),c.a.createElement("div",{class:"navbar-end"},c.a.createElement(i.Link,{class:"navbar-item",to:"./index.html"},"Inicio"),c.a.createElement(i.Link,{class:"navbar-item",to:"./proyectos/index.html"},"Proyectos"),c.a.createElement(i.Link,{class:"navbar-item",to:"./videos/index.html"},"Videos"),c.a.createElement(i.Link,{class:"navbar-item",to:"./divulgacion/index.html"},"Divulgación"),c.a.createElement(i.Link,{class:"navbar-item",to:"./equipo/index.html"},"Equipo de Investigación"),c.a.createElement(i.Link,{class:"navbar-item",to:"./contacto/index.html"},"Contacto"),c.a.createElement(i.Link,{class:"navbar-item",to:"../blog/"},"Blog"),c.a.createElement(i.Link,{class:"navbar-item",to:"/index-eng.html"},"Eng/Esp"))))},t}(c.a.Component);t.a=u},155:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(147);a(150),a(164);t.a=function(){return n.a.createElement("div",null,n.a.createElement("footer",null,n.a.createElement("div",{class:"footer-left"},n.a.createElement("a",{href:"https://tec.mx/es",target:"_blank"},n.a.createElement("img",{src:"http://cimb.com.mx/img/logos/logo-tec-largo.png"})),n.a.createElement(l.Link,{to:"/index.html"},n.a.createElement("img",{src:"http://cimb.com.mx/img/logos/logo-cimb.png"}))),n.a.createElement("div",{class:"footer-center"},n.a.createElement("h3",null,"Mapa del sitio"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(l.Link,{to:"./index.html"},"Inicio")),n.a.createElement("li",null,n.a.createElement(l.Link,{to:"/proyectos/index.html"},"Proyectos")),n.a.createElement("li",null,n.a.createElement(l.Link,{to:"/videos/index.html"},"Videos")),n.a.createElement("li",null,n.a.createElement(l.Link,{to:"/divulgacion/index.html"},"Divulgación")),n.a.createElement("li",null,n.a.createElement(l.Link,{to:"/equipo/"},"Equipo de investigación")),n.a.createElement("li",null,n.a.createElement(l.Link,{to:"/contacto/index.html"},"Contacto")),n.a.createElement("li",null,n.a.createElement(l.Link,{to:"/blog/"},"Blog")))),n.a.createElement("div",{class:"footer-right"},n.a.createElement("h3",null,"Contacto"),n.a.createElement("ul",null,n.a.createElement("li",null,"Calle del Puente #222 Col. Ejidos de Huipulco, Tlalpan C.P. 14380, México D.F."),n.a.createElement("li",null,n.a.createElement("a",null,"Dr. Martín Rogelio Bustamante Bello")),n.a.createElement("li",null,n.a.createElement("a",null,"Cel: 553075 1447")),n.a.createElement("li",null,n.a.createElement("a",null,"Correo: rbustama@itesm.mx")),n.a.createElement("li",{class:"contact-socials"},n.a.createElement("a",{href:"https://www.facebook.com",target:"_blank"},n.a.createElement("i",{class:"fab fa-facebook-square"})),n.a.createElement("a",{href:"https://www.researchgate.net/profile/Rogelio_Bustamante-Bello",target:"_blank"},n.a.createElement("i",{class:"fab fa-researchgate"})))))),n.a.createElement("p",{class:"trademark"},"Instituto Tecnológico y de Estudios Superiores de Monterrey. México 2018."))}},156:function(e,t,a){"use strict";var r=a(7);t.__esModule=!0,t.default=void 0;var n=r(a(74)),l=r(a(0)),c=a(75),i=function(e){var t=e.location,a=e.crumbLabel,r=e.crumbSeparator,i=e.crumbStyle,u=void 0===i?{}:i,o=e.crumbActiveStyle,s=void 0===o?{}:o,m=((0,n.default)(e,["location","crumbLabel","crumbSeparator","crumbStyle","crumbActiveStyle"]),l.default.useContext(c.BreadcrumbContext)),d=m.crumbs,b=m.updateCrumbs;return t&&a?(l.default.useEffect(function(){b({location:t,crumbLabel:a,crumbSeparator:r,crumbStyle:u,crumbActiveStyle:s})},[t]),{crumbs:d,updateCrumbs:b}):{crumbs:d,updateCrumbs:b}};t.default=i},160:function(e,t,a){"use strict";var r=a(161),n=a(0),l=a.n(n),c=a(4),i=a.n(c),u=a(176),o=a.n(u),s=a(147);function m(e){var t=e.description,a=e.lang,n=e.meta,c=e.keywords,i=e.title;return l.a.createElement(s.StaticQuery,{query:d,render:function(e){var r=t||e.site.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:i},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:r}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(n)})},data:r})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m;var d="1025518380"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Centro de Investigación de Microsistemas y Biodiseño",description:"Página Web CIMB",author:"Varios"}}}}},165:function(e,t,a){"use strict";t.__esModule=!0;var r=a(166);t.Breadcrumb=r.Breadcrumb,t.BreadcrumbContext=r.BreadcrumbContext,t.BreadcrumbConsumer=r.BreadcrumbConsumer,t.BreadcrumbProvider=r.BreadcrumbProvider,t.useBreadcrumb=r.useBreadcrumb,t.SitemapCrumbs=r.SitemapCrumbs},166:function(e,t,a){"use strict";var r=a(7);t.__esModule=!0;var n=r(a(167));t.Breadcrumb=n.default;var l=r(a(168));t.SitemapCrumbs=l.default;var c=a(75);t.BreadcrumbContext=c.BreadcrumbContext,t.BreadcrumbConsumer=c.BreadcrumbConsumer,t.BreadcrumbProvider=c.BreadcrumbProvider;var i=r(a(156));t.useBreadcrumb=i.default},167:function(e,t,a){"use strict";var r=a(7);t.__esModule=!0,t.default=void 0;var n=r(a(55)),l=r(a(74)),c=r(a(0)),i=r(a(4)),u=a(147),o=r(a(156)),s="/home/circleci/repo/src/components/Breadcrumb.js",m=function(e){var t=e.title,a=e.location,r=e.crumbLabel,i=e.crumbSeparator,m=e.crumbWrapperStyle,d=e.crumbActiveStyle,b=e.crumbStyle,f=(0,l.default)(e,["title","location","crumbLabel","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle"]),p=(0,o.default)({location:a,crumbLabel:r,crumbSeparator:i,crumbStyle:b,crumbActiveStyle:d}).crumbs,v=void 0===p?[]:p;return c.default.createElement("div",{__source:{fileName:s,lineNumber:28},__self:this},c.default.createElement("span",{__source:{fileName:s,lineNumber:29},__self:this},t),v.map(function(e,t){return c.default.createElement("div",(0,n.default)({style:{display:"inline"},key:t},m,{__source:{fileName:s,lineNumber:32},__self:this}),c.default.createElement(u.Link,(0,n.default)({to:e.pathname||"",style:(0,n.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},e.crumbStyle),activeStyle:(0,n.default)({color:"white"},d),state:{crumbClicked:!0}},f,{__source:{fileName:s,lineNumber:33},__self:this}),e.crumbLabel),c.default.createElement("span",{style:(0,n.default)({fontSize:"16pt"},e.crumbStyle),__source:{fileName:s,lineNumber:52},__self:this},e.crumbSeparator))}))};m.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{}},m.propTypes={location:i.default.shape().isRequired,crumbLabel:i.default.string.isRequired,title:i.default.string,crumbSeparator:i.default.string,crumbWrapperStyle:i.default.shape(),crumbStyle:i.default.shape()};var d=m;t.default=d},168:function(e,t,a){"use strict";var r=a(7);t.__esModule=!0,t.default=void 0;var n=r(a(55)),l=r(a(74)),c=r(a(0)),i=r(a(4)),u=a(147),o="/home/circleci/repo/src/components/SitemapCrumbs.js",s=function(e){var t=e.title,a=void 0===t?"":t,r=e.crumbSeparator,i=e.crumbWrapperStyle,s=e.crumbActiveStyle,m=e.crumbStyle,d=e.crumbs,b=(0,l.default)(e,["title","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle","crumbs"]);return c.default.createElement("div",{__source:{fileName:o,lineNumber:15},__self:this},c.default.createElement("span",{__source:{fileName:o,lineNumber:16},__self:this},a),d.map(function(e,t){return c.default.createElement("div",(0,n.default)({style:{display:"inline"},key:t},i,{__source:{fileName:o,lineNumber:19},__self:this}),c.default.createElement(u.Link,(0,n.default)({to:e.pathname,style:(0,n.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},m),activeStyle:(0,n.default)({color:"white"},s)},b,{__source:{fileName:o,lineNumber:20},__self:this}),e.crumbLabel),c.default.createElement("span",{style:(0,n.default)({fontSize:"16pt"},m),__source:{fileName:o,lineNumber:36},__self:this},r))}))};s.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{}},s.propTypes={title:i.default.string,crumbSeparator:i.default.string,crumbWrapperStyle:i.default.shape(),crumbStyle:i.default.shape(),crumbs:i.default.arrayOf(i.default.shape({location:i.default.shape(),pathname:i.default.string.isRequired})).isRequired};var m=s;t.default=m},184:function(e,t,a){var r=a(25).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||a(17)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-34f3bd967ff486ce6f7a.js.map