"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[790],{790:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),u=n(757),s=n.n(u),c=n(791),i=n(87),o=n(689),f=n(390),p={movie:"Movies_movie__HIhge",form:"Movies_form__4ow+Z",button:"Movies_button__GcIka",element:"Movies_element__zliWj",link:"Movies_link__MzAfU"},l=n(184),v=function(){var e,t=(0,i.lr)(""),n=(0,a.Z)(t,2),u=n[0],v=n[1],m=(0,c.useState)(),d=(0,a.Z)(m,2),h=d[0],_=d[1],x=(0,c.useState)(""),k=(0,a.Z)(x,2),w=k[0],b=k[1],y=null!==(e=u.get("query"))&&void 0!==e?e:"",g=(0,o.TH)();return(0,c.useEffect)((function(){if(y){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.LI)(y);case 2:t=e.sent,_(t.results),console.log(t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[y]),(0,l.jsxs)("div",{className:p.movie,children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v({query:w})},className:p.form,children:[(0,l.jsx)("input",{type:"text",name:y,value:w,onChange:function(e){b(e.target.value),console.log(w)},className:p.input}),(0,l.jsx)("button",{type:"submit",className:p.button,children:"Search"})]}),(0,l.jsx)("ul",{className:p.list,children:h?h.map((function(e){return(0,l.jsx)("li",{className:p.element,children:(0,l.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:g},className:p.link,children:e.title||e.name})},e.id)})):(0,l.jsx)(l.Fragment,{})})]})}},390:function(e,t,n){n.d(t,{Hx:function(){return l},LI:function(){return o},Y5:function(){return f},wr:function(){return i},xc:function(){return p}});var r=n(861),a=n(757),u=n.n(a),s=n(912);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="befeaf2f7d22fb84137c789361663b87",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?api_key="+c);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key="+c+"&query="+t+"&page=1");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?api_key=")+c);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/"+t+"/credits?api_key="+c);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/"+t+"/reviews?api_key="+c+"&page=1");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=790.612a806e.chunk.js.map