"use strict";(self.webpackChunkkirill_portfolio=self.webpackChunkkirill_portfolio||[]).push([[431],{4431:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var n=t(5671),r=t(3144),a=t(9340),i=t(4062),c=t(2791),o=t(6052),l=t(1762),d=t(184),h=function(e){(0,a.Z)(t,e);var s=(0,i.Z)(t);function t(){var e;(0,n.Z)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=s.call.apply(s,[this].concat(a))).baseClasses=["project-item","card"],e}return(0,r.Z)(t,[{key:"getClasses",value:function(){return this.props.inViewport?this.baseClasses.concat(["active"]):this.baseClasses}},{key:"render",value:function(){return(0,d.jsx)(c.Fragment,{children:(0,d.jsx)("li",{className:this.getClasses().join(" "),children:(0,d.jsxs)("a",{href:this.props.url,children:[(0,d.jsx)("div",{className:"card__overlay",children:(0,d.jsx)("div",{className:"card__text",children:(0,d.jsx)("h4",{children:this.props.name})})}),(0,d.jsx)("div",{className:"card__image",children:(0,d.jsx)("img",{src:this.props.image,alt:this.props.name,className:"responsive-img"})})]})})})}}]),t}(c.Component),u=(0,l.ZP)(h),p=function(e){(0,a.Z)(t,e);var s=(0,i.Z)(t);function t(e){var r;return(0,n.Z)(this,t),(r=s.call(this,e)).projects=[],r.state={loaded:!1},r.state={loaded:!1},r}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.loaded||fetch("projects.json").then((function(e){return e.json()})).then((function(s){e.projects=s,e.setState({loaded:!0})}))}},{key:"componentDidUpdate",value:function(){var e=this;this.state.loaded||fetch("projects.json").then((function(e){return e.json()})).then((function(s){e.projects=s,e.setState({loaded:!0})}))}},{key:"render",value:function(){return(0,d.jsx)("section",{className:"projects",id:"projects",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("h3",{children:[o.Z.name," / projects"]}),this.state.loaded?(0,d.jsx)("ul",{className:"projects-wrapper",children:this.projects.map((function(e,s){return(0,d.jsx)(u,{name:e.name,url:e.url,image:e.image},s)}))}):(0,d.jsx)("div",{children:" Loading... "})]})})}}]),t}(c.Component)}}]);
//# sourceMappingURL=431.857a9ec6.chunk.js.map