"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[290],{290:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(439),a=r(791),u=r(87),c=r(689),i=r(390),s={home:"Home_home__CMw1J",title:"Home_title__L087v",element:"Home_element__KRbDr",link:"Home_link__2zIq5"},o=r(184);var f=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],f=t[1],p=(0,c.TH)();if((0,a.useEffect)((function(){(0,i.wr)().then((function(e){f(e.results)})).catch(console.error)}),[]),r)return(0,o.jsxs)("div",{className:s.home,children:[(0,o.jsx)("h1",{className:s.title,children:"Trending today"}),(0,o.jsx)("ul",{className:s.list,children:r.map((function(e){var t=e.title,r=e.id,n=e.name;return(0,o.jsx)("li",{className:s.element,children:(0,o.jsx)(u.rU,{to:"/movies/".concat(r),state:{from:p},className:s.link,children:t||n})},r)}))})]})}},390:function(e,t,r){r.d(t,{Hx:function(){return l},LI:function(){return o},Y5:function(){return f},wr:function(){return s},xc:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="befeaf2f7d22fb84137c789361663b87",s=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key="+i);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key="+i+"&query="+t+"&page=1");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=")+i);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/"+t+"/credits?api_key="+i);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/"+t+"/reviews?api_key="+i+"&page=1");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=290.8e23305e.chunk.js.map