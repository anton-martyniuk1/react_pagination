(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),s=a(4),i=a(5),r=a(7),l=a(6),o=a(1),d=a.n(o),g=(a(12),a(0)),m=function(e){var t=e.visibleItems,a=e.perPage,c=e.currentPage,n=e.onPageClick,s=e.onArrowClick,i=Array.from(Array(a),(function(e,t){return t+1})),r=c===i[0],l=c===i.at(-1);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("ul",{className:"pagination",children:[Object(g.jsx)("li",{className:"page-item ".concat(r&&"disabled"),children:Object(g.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":r,onClick:s,children:"\xab"})}),i.map((function(e){return Object(g.jsx)("li",{className:"page-item ".concat(c!==e||"active"),children:Object(g.jsx)("a",{id:String(e),"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){n(e)},children:e})},e)})),Object(g.jsx)("li",{className:"page-item ".concat(l&&"disabled"),children:Object(g.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":l,onClick:s,children:"\xbb"})})]}),Object(g.jsx)("ul",{children:t.map((function(e){return Object(g.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};var u=function(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}(1,42).map((function(e){return"Item ".concat(e)})),h=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={visibleItems:u.slice(0,5),selectedPageItems:5,itemsCount:[3,5,10,20],pageLinks:9,selectedPage:1},e.total=u.length,e.handleNewItems=function(){e.setState((function(e){var t=e.selectedPage,a=e.selectedPageItems,c=t*a;return{visibleItems:u.slice(c-a,c)}}))},e.setItemsPerPage=function(t){var a=t.target.value;e.setState({selectedPageItems:+a,pageLinks:Math.ceil(u.length/+a),selectedPage:1}),e.handleNewItems()},e.selectPage=function(t){e.setState({selectedPage:t}),e.handleNewItems()},e.selectPageWithArrow=function(t){"\xab"===t.currentTarget.textContent?e.setState((function(e){return{selectedPage:e.selectedPage-1}})):e.setState((function(e){return{selectedPage:e.selectedPage+1}})),e.handleNewItems()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.visibleItems,a=e.itemsCount,c=e.selectedPageItems,n=e.pageLinks,s=e.selectedPage;return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{children:"Items with Pagination"}),Object(g.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(t[0]," - ").concat(t.at(-1)," of ").concat(this.total,")")}),Object(g.jsxs)("div",{className:"form-group row",children:[Object(g.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(g.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:this.setItemsPerPage,children:a.map((function(e){return Object(g.jsx)("option",{value:e,children:e},e)}))})}),Object(g.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(g.jsx)(m,{visibleItems:t,perPage:n,currentPage:s,onPageClick:this.selectPage,onArrowClick:this.selectPageWithArrow})]})}}]),a}(d.a.Component);n.a.render(Object(g.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6c9b34de.chunk.js.map