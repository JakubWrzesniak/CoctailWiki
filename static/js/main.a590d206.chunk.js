(this.webpackJsonpcoctail_wiki=this.webpackJsonpcoctail_wiki||[]).push([[0],{114:function(e,t,s){},117:function(e,t,s){},183:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(2),i=s.n(c),r=s(33),a=s.n(r),o=(s(114),s(115),s(116),s(117),s(26)),l=s(15),j=s(16),d=s(21),h=s(18),u=s(17);var b=function(e){return Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h1",{children:Object(n.jsx)("strong",{children:e.title})}),Object(n.jsx)("hr",{})]})},O=s(20),p=s(184),g=s(185),f=s(186),x=s(187),m=s(46),v=s(34),k=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-3 offset-5",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)(m.a,{pulse:!0,icon:v.e,color:"black",size:"7x"}),Object(n.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw test-primary"}),Object(n.jsx)("p",{children:"Loading . . ."})]})})})})};function C(e){var t=e.array,s=function(e){var s=t["strIngredient"+e.toString()],c=t["strMeasure"+e.toString()];if(s)return Object(n.jsxs)(O.b,{to:"/CoctailWiki/ingredients/".concat(s),children:[c||""," ",s]})};return Object(n.jsx)("ul",{children:function(){for(var e=1,t=[];e<=15;){var n=s(e);n&&t.push(n),e++}return t}().map((function(e){return Object(n.jsx)("li",{children:e})}))})}function y(e){var t;return null!=e.tags&&(t=(t=e.tags.split(",")).map((function(e){return Object(n.jsxs)("span",{className:"tagElem",children:[e," "]})}))),Object(n.jsx)("div",{className:"tagList",children:t})}function w(e){var t=e.coctail;return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("div",{className:"drink-name",children:Object(n.jsx)(b,{title:t.strDrink})})}),Object(n.jsxs)("div",{className:"col-12 col-lg-6 drink-leftInfo",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{width:"100%",className:"drink-img",src:t.strDrinkThumb,alt:t.strDrink})}),Object(n.jsx)(y,{tags:t.strTags})]}),Object(n.jsx)("div",{className:"col-12 col-lg-6 drink-rightInfo",children:Object(n.jsx)(p.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(f.a,{children:"Ingrediance"}),Object(n.jsx)(x.a,{children:Object(n.jsx)(C,{array:t})})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(f.a,{children:"Instruction"}),Object(n.jsx)(x.a,{children:t.strInstructions})]})})]})})})})]})}var L=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={coctail:n.props.coctail,isLoading:n.props.isLoading,errMess:n.props.errMess},n}return Object(j.a)(s,[{key:"render",value:function(){return this.state.isLoading?Object(n.jsx)(k,{}):Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(w,{coctail:this.state.coctail.drinks[0]})})})}}]),s}(c.Component);var N=function(e){var t="0123456789ABCDEFGHIJKLMNOPRSTUWXYZ".split("").map((function(e){return Object(n.jsxs)("span",{children:[Object(n.jsx)(O.b,{to:"/coctails/".concat(e),children:e})," / "]})}));return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("div",{className:"alphabet",children:[Object(n.jsx)("h2",{children:"CHECK COCTAIL BY FIRST LETTER"}),t]})})})})},M=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={random:n.props.random},n}return Object(j.a)(s,[{key:"render",value:function(){return 0!==this.props.random.length?Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:" col-12",children:Object(n.jsx)(b,{title:"Coctail Wiki"})})}),Object(n.jsx)("div",{id:"random-drink",children:Object(n.jsxs)("div",{className:"row justify-content-md-center",children:[Object(n.jsx)("div",{className:"col-12 home-subTitle",children:Object(n.jsx)("h2",{children:"A PROPOSAL ESCPECIALLY FOR YOU"})}),Object(n.jsx)("div",{className:"col-12 col-md-10",children:Object(n.jsx)(L,{coctail:this.state.random,isLoading:this.state.random.isLoading,errMess:this.state.random.errMess})})]})}),Object(n.jsx)("div",{children:Object(n.jsx)(N,{})})]}):Object(n.jsx)("div",{})}}]),s}(c.Component),I=s(188),E=s(189),S=s(200),T=s(201),D=s(190),A=s(191),F=s(192),W=s(193),G=s(194),R=s(195),_=s(196);function H(e){var t=e.list,s=e.name,c=e.value;return null!=t&&t.length>0?t.map((function(e){return Object(n.jsx)(O.b,{to:"/CoctailWiki/".concat(c,"/").concat(e[s]),children:Object(n.jsx)(I.a,{children:e[s]})})})):Object(n.jsx)(I.a,{})}var B=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).toggle=n.toggle.bind(Object(d.a)(n)),n.onMouseEnter=n.onMouseEnter.bind(Object(d.a)(n)),n.onMouseLeave=n.onMouseLeave.bind(Object(d.a)(n)),n.state={dropdownOpen:!1},n}return Object(j.a)(s,[{key:"toggle",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"onMouseEnter",value:function(){this.setState({dropdownOpen:!0})}},{key:"onMouseLeave",value:function(){this.setState({dropdownOpen:!1})}},{key:"render",value:function(){return Object(n.jsxs)(E.a,{onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.dropdownOpen,toggle:this.toggle,nav:!0,inNavbar:!0,children:[Object(n.jsx)(S.a,{nav:!0,caret:!0,children:Object(n.jsxs)(O.b,{className:"nav-link",to:this.props.linkTo,children:[Object(n.jsx)(m.a,{icon:this.props.icon,color:"white"})," ",this.props.title]})}),Object(n.jsx)(T.a,{left:!0,children:Object(n.jsx)(H,{list:this.props.list,name:this.props.name,value:this.props.value})})]})}}]),s}(c.Component),P=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(j.a)(s,[{key:"render",value:function(){return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsx)(D.a,{fixed:"top",dark:!0,expand:"md",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(A.a,{}),Object(n.jsx)(F.a,{className:"mr-auto",href:"/",children:Object(n.jsx)("img",{src:"assets/images/logo.png",height:"60",alt:"Coctail"})}),Object(n.jsx)(W.a,{isOpen:!0,navbar:!0,children:Object(n.jsxs)(G.a,{navbar:!0,children:[Object(n.jsx)(R.a,{children:Object(n.jsxs)(_.a,{className:"nav-link",href:"/CoctailWiki/",children:[Object(n.jsx)(m.a,{icon:v.c,color:"white"})," Home"]})}),Object(n.jsx)(R.a,{children:Object(n.jsx)(B,{icon:v.a,list:this.props.categories.drinks,name:"strCategory",value:"category",title:"Category"})}),Object(n.jsx)(R.a,{children:Object(n.jsx)(B,{icon:v.b,list:this.props.ingredients.drinks,name:"strIngredient1",value:"ingredients",title:"Ingrediences",linkTo:"/ingredients/list"})}),Object(n.jsx)(R.a,{children:Object(n.jsx)(B,{icon:v.d,list:this.props.glasses.drinks,name:"strGlass",value:"glass",title:"Glass"})})]})})]})})})}}]),s}(c.Component),z=s(197);function J(e){return Object(n.jsx)(O.b,{to:e.link,children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(z.a,{src:e.img,alt:e.name}),Object(n.jsx)(g.a,{children:Object(n.jsx)(f.a,{children:e.name})})]})})}var Y=function(e){var t=e.elems.sort((function(e,t){return e.name<t.name?-1:1})).map((function(e){return Object(n.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3",children:Object(n.jsx)(J,{img:e.img,name:e.name,link:e.link})})}));return Object(n.jsx)("div",{className:"row",children:t})},K=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={title:n.props.title,coctails:n.props.coctails,isLoading:n.props.isLoading,errMess:n.props.errMess},n}return Object(j.a)(s,[{key:"render",value:function(){if(this.state.isLoading)return Object(n.jsx)("div",{children:Object(n.jsx)(k,{})});var e=this.state.coctails.drinks.map((function(e){return{name:e.strDrink,img:e.strDrinkThumb+"/preview",link:"/CoctailWiki/coctail/".concat(e.idDrink)}}));return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:" col-12",children:Object(n.jsx)(b,{title:this.state.title})})}),Object(n.jsx)("div",{className:"drink-list",children:Object(n.jsx)(Y,{elems:e})})]})}}]),s}(c.Component),U="https://www.thecocktaildb.com/",X=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={ingredients:n.props.ingredients,isLoading:n.props.isLoading,errMess:n.props.errMess},n}return Object(j.a)(s,[{key:"render",value:function(){if(this.state.isLoading)return Object(n.jsx)("div",{children:Object(n.jsx)(k,{})});var e=this.state.ingredients.drinks.map((function(e){return{name:e.strIngredient1,img:U+"images/ingredients/"+e.strIngredient1+"-Medium.png",link:"/CoctailWiki/ingredients/".concat(e.strIngredient1)}}));return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:" col-12",children:Object(n.jsx)(b,{title:"Ingredients"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"ingredient-list",children:Object(n.jsx)(Y,{elems:e})})})]})}}]),s}(c.Component),Z=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-6 col-sm-4",children:[Object(n.jsx)("h5",{children:"Kontakt"}),Object(n.jsxs)("address",{children:[Object(n.jsxs)("p",{children:["Email: ",Object(n.jsx)("a",{href:"malito: jakub.wrzesniak@outlook.com",children:"jakub.wrzesniak@outlook.com"})]}),Object(n.jsxs)("p",{children:["Facebook: ",Object(n.jsx)("a",{href:"https://www.facebook.com/jakub.wrzesniak.5",children:"Jakub Wrzesniak"})]})]})]})})})})}}]),s}(c.Component),q=s(11),Q=s(198),V=s(199),$="ADD_COCTAILS",ee="COCTAILS_LOADING",te="COCTAILS_ERROR",se="ADD_CATEGORIES",ne="ADD_COCTAIL",ce="COCTAIL_LOADING",ie="ADD_GLASSES",re="GLASSES_LOADING",ae="ADD_INGREDINETS",oe="INGREDIENTS_LOADING",le=function(e){return{type:te,payload:e}},je=function(e){return{type:$,payload:e}},de=function(){return{type:ee}},he=function(e){return{}},ue=function(e){return{type:ne,payload:e}},be=function(){return{type:ce}},Oe=function(e){return{type:se,payload:e}},pe=function(e){return{type:ie,payload:e}},ge=function(){return{type:re}},fe=function(e){return{type:ae,payload:e}},xe=function(e){return{}},me=function(){return{type:oe}},ve=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={coctailId:-1,coctailFilter:""},n.handleCoctail=n.handleCoctail.bind(Object(d.a)(n)),n.handleCoctailsCategory=n.handleCoctailsCategory.bind(Object(d.a)(n)),n.handleCoctailsGlass=n.handleCoctailsGlass.bind(Object(d.a)(n)),n.handleCoctailsIngredients=n.handleCoctailsIngredients.bind(Object(d.a)(n)),n.handleCoctailsLetter=n.handleCoctailsLetter.bind(Object(d.a)(n)),n}return Object(j.a)(s,[{key:"handleCoctail",value:function(e){e!==this.state.coctailId&&(this.setState({coctailId:e}),this.props.fetchCoctailById(e))}},{key:"handleCoctailsLetter",value:function(e){e!==this.state.coctailFilter&&(this.setState({coctailFilter:e}),this.props.fetchCoctailsBy("f",e))}},{key:"handleCoctailsCategory",value:function(e){e!==this.state.coctailFilter&&(this.setState({coctailFilter:e}),this.props.fetchFilterCoctails(e,"c"))}},{key:"handleCoctailsGlass",value:function(e){e!==this.state.coctailFilter&&(this.setState({coctailFilter:e}),this.props.fetchFilterCoctails(e,"g"))}},{key:"handleCoctailsIngredients",value:function(e){e!==this.state.coctailFilter&&(this.setState({coctailFilter:e}),this.props.fetchFilterCoctails(e,"i"))}},{key:"componentDidMount",value:function(){this.props.fetchRandomCoctail(),this.props.fetchCategories(),this.props.fetchGlasses(),this.props.fetchIngredients()}},{key:"render",value:function(){var e=this,t=function(t){var s=t.match,c=s.params.category;return s.params.category2&&(c+="/"+s.params.category2),s.params.category3&&(c+="/"+s.params.category3),e.handleCoctailsCategory(c),Object(n.jsxs)("div",{className:"main-body",children:[Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(V.a,{children:Object(n.jsx)("a",{href:"/",children:"Home"})}),Object(n.jsx)(V.a,{children:Object(n.jsx)("a",{href:"/CoctailWiki/category/",children:"Coctails"})}),Object(n.jsx)(V.a,{active:!0,children:c})]}),Object(n.jsx)(K,{title:c,coctails:e.props.coctails.coctails,isLoading:e.props.coctails.isLoading,errMess:e.props.coctails.errMess})]})},s=function(t){var s=t.match,c=s.params.glass;return s.params.glass2&&(c+="/"+s.params.glass2),e.handleCoctailsGlass(c),Object(n.jsx)("div",{className:"main-body",children:Object(n.jsx)(K,{title:c,coctails:e.props.coctails.coctails,isLoading:e.props.coctails.isLoading,errMess:e.props.coctails.errMess})})};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(P,{categories:this.props.categories.categories,glasses:this.props.glasses.glasses,ingredients:this.props.ingredients.ingredients}),Object(n.jsxs)(q.c,{children:[Object(n.jsx)(q.a,{path:"/CoctailWiki/coctails/:firstLetter",component:function(t){var s=t.match.params.firstLetter;return e.handleCoctailsLetter(s),Object(n.jsxs)("div",{className:"main-body",children:[Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(V.a,{children:Object(n.jsx)("a",{href:"/",children:"Home"})}),Object(n.jsx)(V.a,{children:Object(n.jsx)("a",{href:"/CoctailWiki/coctails/",children:"Coctails"})}),Object(n.jsx)(V.a,{active:!0,children:s})]}),Object(n.jsx)(N,{}),Object(n.jsx)(K,{title:s,coctails:e.props.coctails.coctails,isLoading:e.props.coctails.isLoading,errMess:e.props.coctails.errMess})]})}}),Object(n.jsx)(q.a,{path:"/CoctailWiki/coctail/:coctailId",component:function(t){var s=t.match;e.handleCoctail(s.params.coctailId);var c=null==e.props.coctail.coctail.drinks?s.params.coctailId:e.props.coctail.coctail.drinks[0].strDrink;return Object(n.jsxs)("div",{className:"main-body",children:[Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(V.a,{children:Object(n.jsx)("a",{href:"/",children:"Home"})}),Object(n.jsx)(V.a,{children:Object(n.jsx)("a",{href:"/CoctailWiki/coctails/",children:"Coctails"})}),Object(n.jsx)(V.a,{active:!0,children:c})]}),Object(n.jsx)(L,{coctail:e.props.coctail.coctail,isLoading:e.props.coctail.isLoading,errMess:e.props.coctail.errMess})]})}}),Object(n.jsx)(q.a,{path:"/CoctailWiki/category/:category/:category2/:category3",component:t}),Object(n.jsx)(q.a,{path:"/CoctailWiki/category/:category/:category2",component:t}),Object(n.jsx)(q.a,{path:"/CoctailWiki/category/:category/",component:t}),Object(n.jsx)(q.a,{path:"/CoctailWiki/glass/:glass/:glass2",component:s}),Object(n.jsx)(q.a,{path:"/CoctailWiki/glass/:glass",component:s}),Object(n.jsx)(q.a,{path:"/CoctailWiki/ingredients/list",component:function(){return Object(n.jsxs)("div",{className:"main-body",children:[Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(V.a,{children:Object(n.jsx)("a",{href:"/CoctailWiki/",children:"Home"})}),Object(n.jsx)(V.a,{active:!0,children:"Ingredients"})]}),Object(n.jsx)(X,{ingredients:e.props.ingredients.ingredients,isLoading:e.props.ingredients.isLoading,errMess:e.props.ingredients.errMess})]})}}),Object(n.jsx)(q.a,{path:"/CoctailWiki/ingredients/:ingredient",component:function(t){var s=t.match.params.ingredient;return e.handleCoctailsIngredients(s),Object(n.jsxs)("div",{className:"main-body",children:[Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(V.a,{children:Object(n.jsx)("a",{href:"/",children:"Home"})}),Object(n.jsx)(V.a,{children:Object(n.jsx)("a",{href:"/CoctailWiki/ingredients/list",children:"Ingredients"})}),Object(n.jsx)(V.a,{active:!0,children:s})]}),Object(n.jsx)(K,{title:s,coctails:e.props.coctails.coctails,isLoading:e.props.coctails.isLoading,errMess:e.props.coctails.errMess})]})}}),Object(n.jsx)(q.a,{path:"",component:function(){return Object(n.jsxs)("div",{className:"main-body",children:[Object(n.jsx)(Q.a,{children:Object(n.jsx)(V.a,{active:!0,children:"Home"})}),Object(n.jsx)(M,{random:e.props.coctail.coctail})]})}})]}),Object(n.jsx)(Z,{categories:this.props.categories.categories})]})}}]),s}(c.Component),ke=Object(q.f)(Object(o.connect)((function(e){return{search:e.search,categories:e.categories,coctail:e.coctail,coctails:e.coctails,glasses:e.glasses,ingredients:e.ingredients}}),(function(e){return{fetchCoctailsBy:function(t,s){e(function(e,t){return function(s){return s(de()),console.log(t),console.log(U+"api/json/v1/1/search.php?"+e+"="+t),fetch(U+"api/json/v1/1/search.php?"+e+"="+t).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return s(je(e))})).catch((function(e){return s(le(e.message))}))}}(t,s))},fetchCategories:function(){e((function(e){return fetch(U+"api/json/v1/1/list.php?c=list").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Oe(t))})).catch((function(t){return e(le(t.message))}))}))},fetchCoctailById:function(t){var s;e((s=t,function(e){return e(be()),fetch(U+"api/json/v1/1/lookup.php?i="+s).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ue(t))})).catch((function(t){return e(he(t.message))}))}))},fetchFilterCoctails:function(t,s){e(function(e,t){return function(s){return s(de()),fetch(U+"api/json/v1/1/filter.php?"+t+"="+e).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return s(je(e))})).catch((function(e){return s(le(e.message))}))}}(t,s))},fetchGlasses:function(){e((function(e){return e(ge()),fetch(U+"api/json/v1/1/list.php?g=list").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(pe(t))})).catch((function(t){return e(le(t.message))}))}))},fetchIngredients:function(){e((function(e){return e(me()),fetch(U+"api/json/v1/1/list.php?i=list").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(fe(t))})).catch((function(t){return e(xe(t.message))}))}))},fetchRandomCoctail:function(){e((function(e){return e(be()),fetch(U+"api/json/v1/1/random.php").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ue(t))})).catch((function(t){return e(he(t.message))}))}))}}}))(ve)),Ce=s(8),ye=s(27),we=s(106),Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,isLoading:!0,coctail:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(Ce.a)(Object(Ce.a)({},e),{},{errMess:null,isLoading:!1,coctail:t.payload});case ce:return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!0,errMess:null,coctail:[]});default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,isLoading:!0,coctails:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMess:null,coctails:t.payload});case ee:return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!0,errMess:null,coctails:[]});case te:return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMess:t.payload,coctails:[]});default:return e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,categories:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(Ce.a)(Object(Ce.a)({},e),{},{errMess:null,categories:t.payload});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,glasses:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(Ce.a)(Object(Ce.a)({},e),{},{errMess:null,glasses:t.payload,isLoading:!1});case re:return Object(Ce.a)(Object(Ce.a)({},e),{},{errMess:null,glasses:[],isLoading:!0});default:return e}},Ee=s(107),Se=s(108),Te=s.n(Se),De={search:""},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,ingredients:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(Ce.a)(Object(Ce.a)({},e),{},{errMess:null,ingredients:t.payload,isLoading:!1});case oe:return Object(Ce.a)(Object(Ce.a)({},e),{},{errMess:null,ingredients:[],isLoading:!0});default:return e}},Fe=function(){return Object(ye.createStore)(Object(ye.combineReducers)(Object(Ce.a)({coctail:Le,coctails:Ne,categories:Me,glasses:Ie,ingredients:Ae},Object(we.createForms)({search:De}))),Object(ye.applyMiddleware)(Ee.a,Te.a))},We=Fe();var Ge=function(){return Object(n.jsx)(o.Provider,{store:We,children:Object(n.jsx)(O.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(ke,{})})})})},Re=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,202)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),i(e),r(e)}))};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(Ge,{})}),document.getElementById("root")),Re()}},[[183,1,2]]]);
//# sourceMappingURL=main.a590d206.chunk.js.map