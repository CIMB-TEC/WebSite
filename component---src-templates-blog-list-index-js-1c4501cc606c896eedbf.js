(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);a(81),a(193);var n=a(8),r=a.n(n),l=a(0),c=a.n(l),i=a(147),o=(a(195),a(169)),s=a(196),u=a.n(s),m=a(220),d=a.n(m),g=a(221),p=a.n(g),E=function(e){var t=e.path,a=e.title,n=e.mainImage,r=e.n,l=e.date,o=e.author,s=e.description,m=e.categories;return s=s.children[0].text.substring(0,100),c.a.createElement("div",{className:"blog-preview "+(1===r?"first":2===r?"second":"third")},c.a.createElement(i.Link,{to:t},c.a.createElement("img",{src:n}),c.a.createElement("div",{className:"details"},c.a.createElement("p",{className:"title"},a),c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"date"},c.a.createElement(u.a,{color:"rgb(112, 148, 37)"}),new Date(l).toLocaleDateString("es-MX")),c.a.createElement("span",{className:"author"}," ",c.a.createElement(d.a,{color:"rgb(112, 148, 37)"}),o),c.a.createElement("ul",{className:"categories"},c.a.createElement(p.a,{color:"rgb(112, 148, 37)"}),m.map(function(e){return c.a.createElement("span",null,e.title)}))),c.a.createElement("p",{className:"description"},s,"..."))))},f=a(165);a.d(t,"default",function(){return h}),a.d(t,"blogListQuery",function(){return v});var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props.pageContext,a=t.currentPage,n=t.numPages,r=this.props.location,l=n-a;return e=l>3?Array.from({length:3}).map(function(e,t){return a+t}):Array.from({length:l}).map(function(e,t){return a+t+1}),c.a.createElement(o.a,null,c.a.createElement("div",{className:"blog-list"},c.a.createElement(f.Breadcrumb,{location:r,crumbLabel:"Blog",crumbStyle:{color:"#ccc"},crumbActiveStyle:{color:"#122c47"}}),c.a.createElement("h2",null,"Nuestro blog"),c.a.createElement("div",{className:"blog-container"},this.props.data.allSitePage.edges.map(function(e,t){return c.a.createElement(E,{author:e.node.context.author,description:e.node.context.description,categories:e.node.context.categories,date:e.node.context.date,path:e.node.path,title:e.node.context.title,mainImage:e.node.context.mainImage,n:t+1})}))),c.a.createElement("ul",{className:"blog-navigation-wrapper"},!(1===a)&&c.a.createElement("li",{className:"blog-navigation-item"}," ",c.a.createElement(i.Link,{to:"/blog/"+(a-1==1?"":a-1)},"Prev.")),c.a.createElement("li",{className:"blog-navigation-item current"},a),e.map(function(e){return c.a.createElement("li",{className:"blog-navigation-item"},c.a.createElement(i.Link,{to:"/blog/"+e},e))}),!(a===n)&&c.a.createElement("li",{className:"blog-navigation-item"}," ",c.a.createElement(i.Link,{to:"/blog/"+(a+1)},"Sig."))))},t}(c.a.Component),v="2164084513"},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return d}),a.d(t,"useStaticQuery",function(){return g});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(32),o=a.n(i);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"parsePath",function(){return i.parsePath}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(148),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},g=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},148:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,a){"use strict";a(76);var n=a(8),r=a.n(n),l=a(0),c=a.n(l),i=(a(150),a(162),a(163),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){console.log("Hello from component did mount");var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")})})},a.render=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{class:"navbar-brand"},c.a.createElement("a",{class:"navbar-item",href:"./index.html"},c.a.createElement("img",{id:"logo-cimb",src:"http://cimb.com.mx/img/logos/logo-cimb.png"})),c.a.createElement("div",{class:"navbar-burger burger","data-target":"mainNav"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))),c.a.createElement("div",{id:"mainNav",class:"navbar-menu"},c.a.createElement("div",{class:"navbar-start"}),c.a.createElement("div",{class:"navbar-end"},c.a.createElement("a",{class:"navbar-item",href:"/"},"Inicio"),c.a.createElement("a",{class:"navbar-item",href:"/proyectos/"},"Proyectos"),c.a.createElement("a",{class:"navbar-item",href:"/videos/"},"Videos"),c.a.createElement("a",{class:"navbar-item",href:"/divulgacion/"},"Divulgación"),c.a.createElement("a",{class:"navbar-item",href:"/equipo/"},"Equipo de Investigación"),c.a.createElement("a",{class:"navbar-item",href:"/contacto/"},"Contacto"),c.a.createElement("a",{class:"navbar-item",href:"/blog/"},"Blog"),c.a.createElement("a",{class:"navbar-item",href:"/index-eng.html"},"Eng/Esp"))))},t}(c.a.Component));t.a=i},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(150),a(164);t.a=function(){return r.a.createElement("div",null,r.a.createElement("footer",null,r.a.createElement("div",{class:"footer-left"},r.a.createElement("a",{href:"https://tec.mx/es",target:"_blank"},r.a.createElement("img",{src:"http://cimb.com.mx/img/logos/logo-tec-largo.png"})),r.a.createElement("a",{href:"../index.html"},r.a.createElement("img",{src:"http://cimb.com.mx/img/logos/logo-cimb.png"}))),r.a.createElement("div",{class:"footer-center"},r.a.createElement("h3",null,"Mapa del sitio"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Inicio")),r.a.createElement("li",null,r.a.createElement("a",{href:"/proyectos/"},"Proyectos")),r.a.createElement("li",null,r.a.createElement("a",{href:"/videos/"},"Videos")),r.a.createElement("li",null,r.a.createElement("a",{href:"/divulgacion/"},"Divulgación")),r.a.createElement("li",null,r.a.createElement("a",{href:"/equipo/"},"Equipo de investigación")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contacto/"},"Contacto")),r.a.createElement("li",null,r.a.createElement("a",{href:"/blog/"},"Blog")))),r.a.createElement("div",{class:"footer-right"},r.a.createElement("h3",null,"Contacto"),r.a.createElement("ul",null,r.a.createElement("li",null,"Calle del Puente #222 Col. Ejidos de Huipulco, Tlalpan C.P. 14380, México D.F."),r.a.createElement("li",null,r.a.createElement("a",null,"Dr. Martín Rogelio Bustamante Bello")),r.a.createElement("li",null,r.a.createElement("a",null,"Cel: 553075 1447")),r.a.createElement("li",null,r.a.createElement("a",null,"Correo: rbustama@tec.mx")),r.a.createElement("li",{class:"contact-socials"},r.a.createElement("a",{href:"https://www.facebook.com",target:"_blank"},r.a.createElement("i",{class:"fab fa-facebook-square"})),r.a.createElement("a",{href:"https://www.researchgate.net/profile/Rogelio_Bustamante-Bello",target:"_blank"},r.a.createElement("i",{class:"fab fa-researchgate"})))))),r.a.createElement("p",{class:"trademark"},"Instituto Tecnológico y de Estudios Superiores de Monterrey. México 2018."))}},169:function(e,t,a){"use strict";var n=a(170),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(147),s=a(154),u=(a(178),a(155)),m=function(e){var t=e.children;return l.a.createElement(o.StaticQuery,{query:"1280114691",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null),l.a.createElement("main",null,t),l.a.createElement(u.a,null))},data:n})};m.propTypes={children:i.a.node.isRequired},t.a=m},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Centro de Investigación de Microsistemas y Biodiseño"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-list-index-js-1c4501cc606c896eedbf.js.map