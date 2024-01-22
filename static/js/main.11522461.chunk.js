(this["webpackJsonpkirill-portfolio"]=this["webpackJsonpkirill-portfolio"]||[]).push([[0],{2:function(e,s,t){"use strict";const c={name:"Tatar-Web",logo:null,anchors:[{id:"hero",text:"home"},{id:"about",text:"about"},{id:"projects",text:"projects"}],resumeLink:"https://studiobox.dev/resume.pdf",heroBg:t.p+"static/media/hero-bg.86fd908b.jpg",myPhoto:t.p+"static/media/myPic.e5a244bb.png",myAward:t.p+"static/media/award.f54db635.gif"};s.a=c},51:function(e,s,t){},84:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),r=t(35),i=t.n(r),o=(t(51),t(2)),l=t(0);class a extends n.a.Component{constructor(){super(...arguments),this.handleClick=e=>{e.preventDefault();const s=document.querySelector(e.target.getAttribute("href")).getBoundingClientRect().top-60;window.scrollBy({top:s,behavior:"smooth"})}}render(){return Object(l.jsx)("li",{className:"header-menu__item",children:Object(l.jsxs)("a",{href:"#"+this.props.id,onClick:e=>this.handleClick(e),children:[" ",this.props.text," "]})},this.props.id)}}var d=t(10);class h extends n.a.Component{render(){let e=o.a.logo,s=o.a.anchors;return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"header-row",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsxs)("a",{href:"/",children:[" ",e?Object(l.jsx)("img",{src:e,className:"responsive-img",alt:o.a.name}):o.a.name," "]})}),Object(l.jsxs)("ul",{className:"header-menu",children:[s.map((e=>Object(l.jsx)(a,{id:e.id,text:e.text},e.id))),Object(l.jsx)("li",{className:"header-menu__item",children:Object(l.jsx)("a",{href:"/",onClick:e=>{e.preventDefault(),Object(d.a)("en").then()},children:"EN "})}),Object(l.jsx)("li",{className:"header-menu__item",children:Object(l.jsx)("a",{href:"/",onClick:e=>{e.preventDefault(),Object(d.a)("ru").then()},children:"RU "})})]})]})})})}}const j=n.a.createContext(),m=j.Consumer;class b extends n.a.Component{constructor(){var e;super(...arguments),e=this,this.showModal=function(s){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};document.querySelector("body").style.overflowY="hidden",e.setState({content:s,props:t})},this.hideModal=()=>{document.querySelector("body").style.overflowY="auto",this.setState({content:null,props:{}})},this.state={content:null,props:{},showModal:this.showModal,hideModal:this.hideModal}}render(){const e=this.state.content;return Object(l.jsxs)(j.Provider,{value:this.state,children:[this.props.children,e?Object(l.jsx)(p,{content:e}):""]})}}const p=e=>{const s=e.content;return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)(m,{children:e=>{let{hideModal:t}=e;return Object(l.jsx)("div",{className:"modal",onClick:t,children:Object(l.jsx)("div",{className:"modal-content",onClick:e=>e.stopPropagation(),children:Object(l.jsx)(s,{})})})}})})};class x extends n.a.Component{constructor(e){super(e),this.classes=["hero-links__item"],this.onClickFunc=null,this.modalOpen=e=>{console.log(e)},this.props.modalId&&(this.classes.push("clickable"),this.onClickFunc=this.modalOpen)}render(){return Object(l.jsx)(m,{children:e=>{let{showModal:s}=e;const t=()=>Object(l.jsx)("div",{children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:this.props.modalContent}})});return Object(l.jsx)("div",{className:this.classes.join(" "),onClick:()=>s(t),children:this.props.text})}})}}class u extends n.a.Component{render(){return Object(l.jsx)("div",{className:"hero-links",children:this.props.elems.map(((e,s)=>Object(l.jsx)(x,{text:e.text,modalId:e.modalId,modalContent:e.modalContent},s)))})}}var O=t(85);class v extends n.a.Component{render(){return Object(l.jsxs)("a",{href:o.a.resumeLink,className:"resume-btn",children:[Object(l.jsx)("span",{children:this.props.t("Hero.resume")}),Object(l.jsxs)("svg",{width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M20 15.1504L12.5 19.4805L12.5 10.8203L20 15.1504Z",fill:"white"}),Object(l.jsx)("circle",{cx:"15.5",cy:"15.5",r:"15",stroke:"white"})]})]})}}var g=Object(O.a)()(v);class N extends n.a.Component{constructor(e){if(super(e),this.classes=["btn"],this.modalTrigger=!1,this.buttonContent=()=>Object(l.jsxs)("a",{href:this.props.url,className:this.classes.join(" "),children:[" ",this.props.text," "]}),this.props.type&&this.classes.push("-"+this.props.type.join(" -")),this.props.url.indexOf("modal(")>-1){this.modalTrigger=!0;let e=()=>Object(l.jsx)("div",{children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:this.props.url.substr(0,this.props.url.length-1).replace("modal(","")}})});this.buttonContent=()=>Object(l.jsx)(m,{children:s=>{let{showModal:t}=s;return Object(l.jsxs)("a",{href:"/",className:this.classes.join(" "),onClick:s=>{s.preventDefault(),t(e)},children:[" ",this.props.text," "]})}})}}render(){return this.buttonContent()}}class C extends n.a.Component{render(){return Object(l.jsx)("div",{className:"btn-container",children:this.props.buttons.map(((e,s)=>Object(l.jsx)(N,{text:e.text,url:e.url,type:e.type},s)))})}}class f extends n.a.Component{render(){return Object(l.jsx)("section",{className:"hero",id:"hero",style:o.a.heroBg&&{backgroundImage:"url("+o.a.heroBg+")",backgroundSize:"cover",backgroundPosition:"center bottom"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"hero-row",children:[Object(l.jsx)("h1",{className:"title",dangerouslySetInnerHTML:{__html:this.props.title}}),Object(l.jsx)(u,{elems:this.props.elems})]}),Object(l.jsxs)("div",{className:"hero-row",style:{paddingBottom:"70px"},children:[Object(l.jsx)(g,{}),this.props.buttons?Object(l.jsx)(C,{buttons:this.props.buttons,onClick:()=>{window.open("https://docs.google.com/spreadsheets/d/1GJdaFRZZwJPZ2dcZq6TgpTZm8JHnirCiHgmb_mRG1KM/edit?usp=sharing","_blank")}}):Object(l.jsx)(n.a.Fragment,{})]})]})})}}var k=t(40),w=t.n(k);class _ extends n.a.Component{constructor(){super();let e=window.scrollY/4.95-30;e>500&&(e=500),e*=-1,this.state={transform:"translateX("+e+"%)"}}handleScrollCallback(){let e=window.scrollY/4.95-30;e>500&&(e=500),e*=-1,e&&this.setState({transform:"translateX("+e+"%)"})}render(){return Object(l.jsxs)("section",{className:"sliding",children:[Object(l.jsx)(w.a,{handleScrollCallback:this.handleScrollCallback.bind(this)}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("h3",{children:[o.a.name," / implemented projects"]})}),Object(l.jsxs)("h2",{style:{transform:this.state.transform},children:[this.props.text,"\xa0\xa0\xa0",this.props.text,"\xa0\xa0\xa0",this.props.text]})]})}}class y extends n.a.Component{render(){return Object(l.jsx)("section",{className:"about",id:"about",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("h3",{children:[o.a.name," / about me"]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"about-photo",children:[Object(l.jsx)("div",{className:"about-photo__img-container",children:Object(l.jsx)("img",{src:o.a.myPhoto,alt:"Kirill Tatarinov",className:"responsive-img"})}),Object(l.jsx)("div",{className:"about-photo__award-container",children:Object(l.jsx)("img",{src:o.a.myAward,alt:"Kirill Tatarinov - certified specialist Velo",className:"responsive-img"})})]}),Object(l.jsx)("div",{className:"about-text",dangerouslySetInnerHTML:{__html:this.props.t("About")}})]})]})})}}var S=Object(O.a)()(y),M=t(16),T=t.n(M);class L extends n.a.Component{getStyles(){const{inViewport:e}=this.props;return e?{opacity:1,WebkitTransition:"opacity 1.5s"}:{opacity:0,WebkitTransition:"opacity 1.5s"}}render(){return Object(l.jsx)("section",{className:"call-to-action-block",children:Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("h2",{dangerouslySetInnerHTML:{__html:this.props.t("CallToAction.text")}}),Object(l.jsx)("div",{style:this.getStyles(),children:Object(l.jsx)(C,{buttons:this.props.buttons})})]})})}}const I=T()(L);var H=Object(O.a)()(I);class B extends n.a.Component{constructor(){super(...arguments),this.baseClasses=["services-row"]}getClasses(){const{inViewport:e}=this.props;return e?this.baseClasses.concat(["active"]):this.baseClasses}render(){let e=[];for(let s=0;s<this.props.elems.length;s+=2)e.push(Object(l.jsxs)("div",{className:this.getClasses().join(" "),children:[Object(l.jsx)(m,{children:e=>{let{showModal:t}=e;const c=()=>Object(l.jsx)("div",{children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:this.props.elems[s].modalContent}})});return Object(l.jsxs)("div",{className:"services-item",onClick:()=>t(c),children:[Object(l.jsx)("div",{className:"services-item__image",children:Object(l.jsx)("img",{src:this.props.elems[s].image,alt:this.props.elems[s].text,className:"responsive-img"})}),Object(l.jsx)("div",{className:"services-item__text",children:this.props.elems[s].text})]},s)}}),Object(l.jsx)(m,{children:e=>{let{showModal:t}=e;const c=()=>Object(l.jsx)("div",{children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:this.props.elems[s+1].modalContent}})});return Object(l.jsxs)("div",{className:"services-item",onClick:()=>t(c),children:[Object(l.jsx)("div",{className:"services-item__image",children:Object(l.jsx)("img",{src:this.props.elems[s+1].image,alt:this.props.elems[s+1].text,className:"responsive-img"})}),Object(l.jsx)("div",{className:"services-item__text",children:this.props.elems[s+1].text})]},s+1)}})]},s));return Object(l.jsx)("section",{className:"services",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("h3",{children:[o.a.name," / services"]}),Object(l.jsx)("p",{className:"services-text",dangerouslySetInnerHTML:{__html:this.props.t("Services.text")}}),e]})})}}const P=T()(B);var F=Object(O.a)()(P);class A extends n.a.Component{constructor(){super(...arguments),this.modalOpen=e=>{console.log(e)}}render(){let e=[];for(let s=0;s<this.props.elems.length;s++)e.push(Object(l.jsx)(m,{children:e=>{let{showModal:t}=e;const c=()=>Object(l.jsx)("div",{children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:this.props.elems[s].modalContent}})});return Object(l.jsx)("div",{className:"menu__item",onClick:()=>t(c),children:this.props.elems[s].text})}},s));return Object(l.jsxs)("footer",{children:[Object(l.jsx)("div",{className:"footer-info",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"footer-social",children:[Object(l.jsx)("div",{className:"footer-social__text",children:"Subscribe to my social networks to keep up to date with the latest news and open opportunities for cooperation."}),Object(l.jsxs)("div",{className:"footer-social__links",children:[Object(l.jsx)("a",{href:"https://vk.com/4elovek007",children:"vk"})," ",Object(l.jsx)("a",{href:"https://t.me/boxdeveloper",children:"tg"}),Object(l.jsx)("a",{href:"https://instagram.com/kirya.shkolnik",children:" inst"})]})]}),Object(l.jsxs)("div",{className:"footer-services",children:[Object(l.jsx)("div",{className:"heading",children:"services"}),Object(l.jsx)("div",{className:"menu",children:e})]})]})})}),Object(l.jsx)("div",{className:"footer-copy",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("p",{children:[(new Date).getFullYear()," Copyright \xa9 ",o.a.name]})})})})]})}}var Z=t(37);var D=function(){const{t:e}=Object(Z.a)(),s=n.a.lazy((()=>t.e(3).then(t.bind(null,86))));return Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)(b,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(f,{title:e("Hero.title"),buttons:e("Hero.buttons",{returnObjects:!0}),elems:e("Services.elems",{returnObjects:!0})}),Object(l.jsx)(_,{text:e("SlidingText")}),Object(l.jsx)(S,{}),Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(s,{})}),Object(l.jsx)(F,{elems:e("Services.elems",{returnObjects:!0})}),Object(l.jsx)(H,{buttons:e("CallToAction.buttons",{returnObjects:!0})})]}),Object(l.jsx)(A,{elems:e("Services.elems",{returnObjects:!0})})]})})})},J=t(41),R=t(43),Y=t(13);d.b.use(J.a).use(R.a).use(Y.e).init({fallbackLng:"en",debug:!1,whitelist:["en","ru"],detection:{order:["localStorage","cookie"],cache:["localStorage","cookie"]},interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"}});d.b;const q=i.a.createRoot(document.getElementById("root"));console.log(document.getElementById("root")),q.render(Object(l.jsx)(D,{}))}},[[84,1,2]]]);
//# sourceMappingURL=main.11522461.chunk.js.map