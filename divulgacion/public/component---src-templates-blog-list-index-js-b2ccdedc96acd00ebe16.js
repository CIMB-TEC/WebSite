(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);a(81),a(193);var n=a(8),r=a.n(n),l=a(0),i=a.n(l),c=a(147),o=(a(195),a(169)),s=a(196),m=a.n(s),u=a(220),d=a.n(u),g=a(221),E=a.n(g),p=function(e){var t=e.path,a=e.title,n=e.mainImage,r=e.n,l=e.date,o=e.author,s=e.description,u=e.categories;return s=s.children[0].text.substring(0,100),i.a.createElement("div",{className:"blog-preview "+(1===r?"first":2===r?"second":"third")},i.a.createElement(c.Link,{to:t},i.a.createElement("img",{src:n}),i.a.createElement("div",{className:"details"},i.a.createElement("p",{className:"title"},a),i.a.createElement("div",{className:"info"},i.a.createElement("span",{className:"date"},i.a.createElement(m.a,{color:"rgb(112, 148, 37)"}),new Date(l).toLocaleDateString("es-MX")),i.a.createElement("span",{className:"author"}," ",i.a.createElement(d.a,{color:"rgb(112, 148, 37)"}),o),i.a.createElement("ul",{className:"categories"},i.a.createElement(E.a,{color:"rgb(112, 148, 37)"}),u.map(function(e){return i.a.createElement("span",null,e.title)}))),i.a.createElement("p",{className:"description"},s,"..."))))},f=a(165);a.d(t,"default",function(){return h}),a.d(t,"blogListQuery",function(){return v});var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props.pageContext,a=t.currentPage,n=t.numPages,r=this.props.location,l=n-a;return e=l>3?Array.from({length:3}).map(function(e,t){return a+t}):Array.from({length:l}).map(function(e,t){return a+t+1}),i.a.createElement(o.a,null,i.a.createElement("div",{className:"blog-list"},i.a.createElement(f.Breadcrumb,{location:r,crumbLabel:"Blog",crumbStyle:{color:"#ccc"},crumbActiveStyle:{color:"#122c47"}}),i.a.createElement("h2",null,"Nuestro blog"),i.a.createElement("div",{className:"blog-container"},this.props.data.allSitePage.edges.map(function(e,t){return i.a.createElement(p,{author:e.node.context.author,description:e.node.context.description,categories:e.node.context.categories,date:e.node.context.date,path:e.node.path,title:e.node.context.title,mainImage:e.node.context.mainImage,n:t+1})}))),i.a.createElement("ul",{className:"blog-navigation-wrapper"},!(1===a)&&i.a.createElement("li",{className:"blog-navigation-item"}," ",i.a.createElement(c.Link,{to:"/blog/"+(a-1==1?"":a-1)},"Prev.")),i.a.createElement("li",{className:"blog-navigation-item current"},a),e.map(function(e){return i.a.createElement("li",{className:"blog-navigation-item"},i.a.createElement(c.Link,{to:"/blog/"+e},e))}),!(a===n)&&i.a.createElement("li",{className:"blog-navigation-item"}," ",i.a.createElement(c.Link,{to:"/blog/"+(a+1)},"Sig."))))},t}(i.a.Component),v="2164084513"},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return E}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return d}),a.d(t,"useStaticQuery",function(){return g});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(32),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"parsePath",function(){return c.parsePath}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(148),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=r.a.createContext({}),d=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},g=function(e){r.a.useContext;var t=r.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function E(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,a){"use strict";a(76);var n=a(8),r=a.n(n),l=a(0),i=a.n(l),c=(a(150),a(162),a(163),a(147)),o=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")})})},a.render=function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{class:"navbar-brand"},i.a.createElement(c.Link,{class:"navbar-item",to:"/index.html"},i.a.createElement("img",{id:"logo-cimb",src:"http://cimb.com.mx/img/logos/logo-cimb.png"})),i.a.createElement("div",{class:"navbar-burger burger","data-target":"mainNav"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{id:"mainNav",class:"navbar-menu"},i.a.createElement("div",{class:"navbar-start"}),i.a.createElement("div",{class:"navbar-end"},i.a.createElement(c.Link,{class:"navbar-item",to:"./index.html"},"Inicio"),i.a.createElement(c.Link,{class:"navbar-item",to:"./proyectos/index.html"},"Proyectos"),i.a.createElement(c.Link,{class:"navbar-item",to:"./videos/index.html"},"Videos"),i.a.createElement(c.Link,{class:"navbar-item",to:"./divulgacion/index.html"},"Divulgación"),i.a.createElement(c.Link,{class:"navbar-item",to:"./equipo/index.html"},"Equipo de Investigación"),i.a.createElement(c.Link,{class:"navbar-item",to:"./contacto/index.html"},"Contacto"),i.a.createElement(c.Link,{class:"navbar-item",to:"../blog/"},"Blog"),i.a.createElement(c.Link,{class:"navbar-item",to:"index-eng.html"},"Eng/Esp"))))},t}(i.a.Component);t.a=o},155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(147);a(150),a(164);t.a=function(){return r.a.createElement("div",null,r.a.createElement("footer",null,r.a.createElement("div",{class:"footer-left"},r.a.createElement("a",{href:"https://tec.mx/es",target:"_blank"},r.a.createElement("img",{src:"http://cimb.com.mx/img/logos/logo-tec-largo.png"})),r.a.createElement(l.Link,{to:"/index.html"},r.a.createElement("img",{src:"http://cimb.com.mx/img/logos/logo-cimb.png"}))),r.a.createElement("div",{class:"footer-center"},r.a.createElement("h3",null,"Mapa del sitio"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},"Inicio")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/proyectos/index.html"},"Proyectos")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/videos/index.html"},"Videos")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/divulgacion/index.html"},"Divulgación")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/equipo/"},"Equipo de investigación")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/contacto/index.html"},"Contacto")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/blog/"},"Blog")))),r.a.createElement("div",{class:"footer-right"},r.a.createElement("h3",null,"Contacto"),r.a.createElement("ul",null,r.a.createElement("li",null,"Calle del Puente #222 Col. Ejidos de Huipulco, Tlalpan C.P. 14380, México D.F."),r.a.createElement("li",null,r.a.createElement("a",null,"Dr. Martín Rogelio Bustamante Bello")),r.a.createElement("li",null,r.a.createElement("a",null,"Cel: 553075 1447")),r.a.createElement("li",null,r.a.createElement("a",null,"Correo: rbustama@itesm.mx")),r.a.createElement("li",{class:"contact-socials"},r.a.createElement("a",{href:"https://www.facebook.com",target:"_blank"},r.a.createElement("i",{class:"fab fa-facebook-square"})),r.a.createElement("a",{href:"https://www.researchgate.net/profile/Rogelio_Bustamante-Bello",target:"_blank"},r.a.createElement("i",{class:"fab fa-researchgate"})))))),r.a.createElement("p",{class:"trademark"},"Instituto Tecnológico y de Estudios Superiores de Monterrey. México 2018."))}},169:function(e,t,a){"use strict";var n=a(170),r=a(0),l=a.n(r),i=a(4),c=a.n(i),o=a(147),s=a(154),m=(a(178),a(155)),u=function(e){var t=e.children;return l.a.createElement(o.StaticQuery,{query:"1280114691",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null),l.a.createElement("main",null,t),l.a.createElement(m.a,null))},data:n})};u.propTypes={children:c.a.node.isRequired},t.a=u},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Centro de Investigación de Microsistemas y Biodiseño"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-list-index-js-b2ccdedc96acd00ebe16.js.map