(this["webpackJsonpreact-homework-template"]=this["webpackJsonpreact-homework-template"]||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),o=a(14),i=a(4),l=a(5),u=a(10),p=a(9),h=a(11),d=a.n(h),g=a(3),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.onInputChange=function(t){e.setState({search:t.target.value})},e.onSubmit=function(t){t.preventDefault();var a=e.state.search;(0,e.props.onSearchLoad)(a)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.search;return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"button-label",children:"Search"})}),Object(g.jsx)("input",{onChange:this.onInputChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,name:"search",value:e,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),m=a(27);function b(){return Object(g.jsx)(m.a,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})}var f="idle",v="loading",O="success",x="error";function y(e){var t=e.largeImageURL;return Object(g.jsx)("div",{className:"Overlay",children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:t,alt:""})})})}var S=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isModalOpen:!1},e.handleIsModalOpen=function(){e.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.element,a=e.status,n=this.state.isModalOpen;return Object(g.jsxs)("li",{className:"ImageGalleryItem",onClick:this.handleIsModalOpen,children:[a===v?Object(g.jsx)(b,{}):Object(g.jsx)("img",{className:"ImageGalleryItem-image",src:t.webformatURL,alt:t.tags}),n&&Object(g.jsx)(y,{largeImageURL:t.largeImageURL})]})}}]),a}(n.Component),k=a(16),w=a.n(k);function _(e){var t=e.elements,a=e.status,n=e.handleToggle;return Object(g.jsx)("ul",{className:"ImageGallery",onClick:n,children:t.map((function(e){return Object(g.jsx)(S,{element:e,status:a},e.id)}))})}function L(e){var t=e.onButtonLoad;return Object(g.jsx)("button",{className:"Button",onClick:t,children:"Button"})}S.propTypes={elements:w.a.object,status:w.a.string,handleToggle:w.a.func};var I=a(50).a.create({baseURL:"https://pixabay.com/api"}),M=function(){var e=Object(o.a)(d.a.mark((function e(){var t,a,n,r,s,c=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},a=t.per_page,n=t.search,e.next=4,I.get("/",{params:{q:n,page:1,key:"12869198-d37a15061ea84e81a1308e6dd",image_type:"photo",orientation:"horizontal",per_page:a}});case 4:return r=e.sent,s=r.data,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[],status:f,search:"",page:1,per_page:15,isModalOpen:!1},e.fetchData=function(){var t=Object(o.a)(d.a.mark((function t(a){var n,r,s,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.per_page,r=void 0===n?1:n,s=a.search,c=void 0===s?"":s,e.setState({status:v}),t.prev=2,t.next=5,M({per_page:r,search:c});case 5:o=t.sent,e.setState({images:o.hits,status:O}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0),e.setState({status:x});case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e.onSearchLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState({per_page:15,search:t})},e.onButtonLoad=function(){var t=e.state.per_page+15,a=e.state.search;e.setState({per_page:t,search:a}),e.fetchData({per_page:t,search:a})},e.handleToggle=function(){e.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchData({per_page:15,search:""})}},{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&(this.setState({per_page:15}),this.fetchData({per_page:this.state.per_page,search:this.state.search}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.per_page,n=e.status;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(j,{onSearchLoad:this.onSearchLoad}),Object(g.jsx)(_,{elements:t,status:n,handleToggle:this.handleToggle}),n===v&&Object(g.jsx)(b,{}),Object(g.jsx)(L,{onButtonLoad:this.onButtonLoad,per_page:a})]})}}]),a}(n.Component);a(47);c.a.createRoot(document.getElementById("root")).render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(N,{})}))}},[[48,1,2]]]);
//# sourceMappingURL=main.5e7fc79c.chunk.js.map