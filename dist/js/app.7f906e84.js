(function(){"use strict";var e={960:function(e,t,n){var i=n(9242),a=n(3766),r={name:"intersection",mounted(e,t){const n={rootMargin:"0px",threshold:1},i=e=>{e[0].isIntersecting&&t.value.getMoreFilms()},a=new IntersectionObserver(i,n);a.observe(e)}};const o=function(e){document.title=e};var s={mounted:(e,t)=>o(t.value||e.innerText),beforeUpdate:(e,t)=>o(t.value||e.innerText),updated:(e,t)=>o(t.value||e.innerText)},l=n(3396),u=n(7139);const c=e=>((0,l.dD)("data-v-4f19c62c"),e=e(),(0,l.Cn)(),e),m={class:"input-wrap"},p=c((()=>(0,l._)("button",{type:"submit"},"Найти",-1)));function g(e,t,n,a,r,o){const s=(0,l.up)("RegistrationWrap");return(0,l.wg)(),(0,l.iD)("header",null,[(0,l._)("a",{class:"home",onClick:t[0]||(t[0]=(...e)=>a.goHome&&a.goHome(...e)),href:"#"},"Home"),(0,l._)("a",{href:"#",class:(0,u.C_)(["favorites",{disabled:!1===a.isUser}]),onClick:t[1]||(t[1]=t=>e.$router.push({name:"favorite"}))},(0,u.zw)(a.filmStore.favorites.length),3),(0,l._)("form",{action:"#",onSubmit:t[5]||(t[5]=(0,i.iM)(((...e)=>a.searchSubmit&&a.searchSubmit(...e)),["prevent"]))},[(0,l._)("div",m,[(0,l.wy)((0,l._)("input",{autocomplete:"off",type:"text",onKeyup:t[2]||(t[2]=(0,i.D2)(((...e)=>a.searchSubmit&&a.searchSubmit(...e)),["enter"])),placeholder:"Название фильма / ID КиноПоиск","onUpdate:modelValue":t[3]||(t[3]=e=>a.filmStore.searchQueryStore=e),name:"keyword"},null,544),[[i.nr,a.filmStore.searchQueryStore,void 0,{trim:!0}]]),a.filmStore.searchQueryStore?((0,l.wg)(),(0,l.iD)("span",{key:0,onClick:t[4]||(t[4]=(...e)=>a.clearInput&&a.clearInput(...e)),class:"clear-input"},"×")):(0,l.kq)("",!0)]),p],32),(0,l.Wm)(s)])}var d=n(6265),v=n.n(d),f=n(4275),h=n(6035),w={apiKey:"AIzaSyDapqMH_oM7h6CDKM0laMGrLIlDVDyb_gY",authDomain:"hometv-c10f8.firebaseapp.com",projectId:"hometv-c10f8",storageBucket:"hometv-c10f8.appspot.com",messagingSenderId:"452296723769",appId:"1:452296723769:web:982a4288b9cf4e189bace8"};const _=(0,f.ZF)(w),y=(0,h.ad)(_);var k=n(8176);const F=async function(e){const t=(0,h.JU)(y,"users",e),n=await(0,h.QT)(t);return n.exists()?n.data():null},I=async function(e,t){await(0,h.pl)((0,h.JU)(y,"users",t),{name:e.user_name||"",email:e.email||"",favorites:[],api_key:e.api_key||""})},S=function(e){switch(e){case"auth/wrong-password":return"Неверный пароль";case"auth/internal-error":return"Неизвестная ошибка";case"auth/invalid-email":return"Недопустимый email";case"auth/user-not-found":return"Пользователь не найден";case"auth/weak-password":return"Пароль не менее 6 символов";default:return"Ошибка авторизации"}},b=["","для взрослых","мюзикл","спорт","церемония","фильм-нуар","биография","вестерн","короткометражка","документальный","документальный","реальное ТВ","ток-шоу","концерт","игра","новости"],C=(0,a.Q_)("filmStore",{state:()=>({user:null,apiKey:"404dc583-7efc-4c93-8f21-a782f977b9e7",auth:(0,k.v0)(),errorMessage:"",pageNum:1,limit:20,genreIdStore:null,genreListStore:[],searchQueryStore:"",filters:null,favorites:[]}),getters:{filterGenres(){if(!this.genreListStore.length)return[];this.genreListStore=this.genreListStore.filter((e=>{if(-1===b.indexOf(e.genre))return e}))},reverseFavorites(){const e=[...this.favorites],t=e.reverse();return t}},actions:{setGenreId(e){this.genreIdStore=e},async getGenreList(){return localStorage.getItem("genres")?(this.genreListStore=JSON.parse(localStorage.getItem("genres")),this.genreListStore):(await v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/filters",{headers:{"X-API-KEY":this.apiKey,"Content-Type":"application/json"}}).then((e=>{this.filters=e.data,this.genreListStore=e.data.genres,this.filterGenres,localStorage.setItem("genres",JSON.stringify(this.genreListStore))})),this.genreListStore)},checkFavoriteStore(e){let t=this.isCheckFilm(!0,e);return!!t.length},async addFavorite(e){try{const t=(0,h.JU)(y,"users",this.user.uid);await(0,h.r7)(t,{favorites:[...this.favorites,e]})}catch(t){this.user?console.log("Ошибка добавления в избранное: "+t):console.log("Необходимо авторизоваться")}this.favorites=[...this.favorites,e]},async removeFavorite(e){let t=this.isCheckFilm(!1,e);try{const e=(0,h.JU)(y,"users",this.user.uid);await(0,h.r7)(e,{favorites:[...t]})}catch(n){this.user?console.log("Ошибка удаления из избранного: "+n):console.log("Необходимо авторизоваться")}this.favorites=[...t]},async authWithEmailAndPassword(e){await(0,k.e5)(this.auth,e.email,e.password).then((()=>{this.getUserData()})).catch((e=>{this.errorMessage=S(e.code)}))},async createAuthWithEmailAndPassword(e){await(0,k.Xb)(this.auth,e.email,e.password).then((async t=>{this.user=await t.user,await I(e,this.user.uid),await this.getUserData()})).catch((e=>{this.errorMessage=S(e.code)}))},async authLogout(){(0,k.w7)(this.auth).then((async()=>{this.removeUserData()})).catch((e=>{alert("Ошибка logout: "+e)}))},async authChange(e){(0,k.Aj)(this.auth,(async t=>{t?(this.user=t,this.getUserData(e)):this.removeUserData(e)}))},async getUserData(e){let t=await F(this.user.uid);this.user.name=t?.name||"",this.user.email=t?.email??"",this.favorites=t?.favorites.reverse()??[],t?.api_key&&(this.apiKey=t.api_key),"function"===typeof e&&e()},removeUserData(e){this.user=null,this.favorites=[],"function"===typeof e&&e()},isCheckFilm(e,t){return this.favorites.filter((n=>{let i=n?.kinopoiskId??n?.filmId,a=t?.kinopoiskId??t?.filmId;return i===a&&e?n:i===a||e?void 0:n}))},searchQueryWithGenre(){let e={};return this.searchQueryStore&&(e.q=this.searchQueryStore),this.genreIdStore&&(e.genres=this.genreIdStore),e}}}),D={class:"registration-wrap"},P={key:0,class:"registration-wrap--pop"};function L(e,t,n,i,a,r){const o=(0,l.up)("IconUser"),s=(0,l.up)("LogoutComponent"),u=(0,l.up)("SignInComponent"),c=(0,l.up)("RegistrationComponent");return(0,l.wg)(),(0,l.iD)("div",D,[(0,l.Wm)(o,{onClick:i.togglePop},null,8,["onClick"]),i.isVisible?((0,l.wg)(),(0,l.iD)("div",P,[i.filmStore.user?((0,l.wg)(),(0,l.j4)(s,{key:0,onSetForm:i.setForm},null,8,["onSetForm"])):"sign"===i.formView?((0,l.wg)(),(0,l.j4)(u,{key:1,onSetForm:i.setForm},null,8,["onSetForm"])):"reg"===i.formView?((0,l.wg)(),(0,l.j4)(c,{key:2,onSetForm:i.setForm},null,8,["onSetForm"])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])}const U={class:"icon icon-user"},H=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},[(0,l._)("path",{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"})],-1),N=[H];function x(e,t){return(0,l.wg)(),(0,l.iD)("span",U,N)}var M=n(89);const j={},W=(0,M.Z)(j,[["render",x]]);var T=W,q=n(4870);const K=e=>((0,l.dD)("data-v-4909460b"),e=e(),(0,l.Cn)(),e),Z={class:"registration--form"},A=K((()=>(0,l._)("h3",null,"Регистрация",-1))),Q=K((()=>(0,l._)("small",null,[(0,l._)("a",{href:"https://kinopoiskapiunofficial.tech/signup"},"зарегистрироваться")],-1))),z={key:0,class:"err-string"},O={class:"btns"};function G(e,t,n,a,r,o){const s=(0,l.up)("IconGoogle");return(0,l.wg)(),(0,l.iD)("div",Z,[A,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e)},null,512),[[i.nr,a.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[1]||(t[1]=e=>a.user_name=e)},null,512),[[i.nr,a.user_name]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Api key","onUpdate:modelValue":t[2]||(t[2]=e=>a.api_key=e)},null,512),[[i.nr,a.api_key]]),Q]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=e=>a.password=e)},null,512),[[i.nr,a.password]])]),a.filmStore.errorMessage?((0,l.wg)(),(0,l.iD)("p",z,(0,u.zw)(a.filmStore.errorMessage),1)):(0,l.kq)("",!0),(0,l._)("div",O,[(0,l._)("button",{class:"reg",onClick:t[4]||(t[4]=(0,i.iM)(((...e)=>a.register&&a.register(...e)),["prevent"]))},"Регистрация"),(0,l._)("button",{class:"sign",onClick:t[5]||(t[5]=(0,i.iM)(((...e)=>a.setFormView&&a.setFormView(...e)),["prevent"]))},"Войти"),(0,l.Wm)(s,{onClick:a.signWithGoogle},null,8,["onClick"])])])}const V={class:"icon-google"};function E(e,t,n,i,a,r){return(0,l.wg)(),(0,l.iD)("span",V)}var Y={name:"IconGoogle"};const B=(0,M.Z)(Y,[["render",E],["__scopeId","data-v-103616a1"]]);var R=B,$={name:"RegistrationComponent",components:{IconGoogle:R},setup(e,{emit:t}){const n=C(),i=(0,q.iH)(""),a=(0,q.iH)(""),r=(0,q.iH)(""),o=(0,q.iH)("");async function s(){await n.createAuthWithEmailAndPassword({email:i.value,password:a.value,user_name:r.value,api_key:o.value})}function l(){t("setForm","sign")}function u(){console.log("ok")}return{email:i,user_name:r,password:a,api_key:o,filmStore:n,register:s,signWithGoogle:u,setFormView:l}}};const J=(0,M.Z)($,[["render",G],["__scopeId","data-v-4909460b"]]);var X=J;const ee=e=>((0,l.dD)("data-v-105d9081"),e=e(),(0,l.Cn)(),e),te={class:"registration--form"},ne=ee((()=>(0,l._)("h3",{class:"name"},"Авторизация",-1))),ie={key:0,class:"err-string"},ae={class:"btns"};function re(e,t,n,a,r,o){return(0,l.wg)(),(0,l.iD)("div",te,[ne,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e)},null,512),[[i.nr,a.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e)},null,512),[[i.nr,a.password]])]),a.filmStore.errorMessage?((0,l.wg)(),(0,l.iD)("p",ie,(0,u.zw)(a.filmStore.errorMessage),1)):(0,l.kq)("",!0),(0,l._)("div",ae,[(0,l._)("button",{class:"sign",onClick:t[2]||(t[2]=(0,i.iM)(((...e)=>a.signIn&&a.signIn(...e)),["prevent"]))},"Войти"),(0,l._)("button",{class:"reg",onClick:t[3]||(t[3]=(0,i.iM)(((...e)=>a.setFormView&&a.setFormView(...e)),["prevent"]))},"Регистрация")])])}var oe={name:"SignInComponent",setup(e,{emit:t}){const n=(0,q.iH)(""),i=(0,q.iH)(""),a=(0,q.iH)(""),r=C();async function o(){await r.authWithEmailAndPassword({email:n.value,password:i.value})}function s(){t("setForm","reg")}return{email:n,password:i,errMsg:a,signIn:o,setFormView:s,filmStore:r}}};const se=(0,M.Z)(oe,[["render",re],["__scopeId","data-v-105d9081"]]);var le=se;const ue={class:"registration--form"},ce=(0,l.Uk)("Вы вошли как: "),me={class:"btns"};function pe(e,t,n,a,r,o){return(0,l.wg)(),(0,l.iD)("div",ue,[(0,l._)("h3",null,[ce,(0,l._)("strong",null,(0,u.zw)(a.filmStore.user.name),1)]),(0,l._)("div",me,[(0,l._)("button",{class:"reg",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>a.logout&&a.logout(...e)),["prevent"]))},"Выйти")])])}var ge={name:"LogoutComponent",setup(){const e=C();async function t(){await e.authLogout()}return{logout:t,filmStore:e}}};const de=(0,M.Z)(ge,[["render",pe]]);var ve=de,fe={name:"RegistrationWrap",components:{IconUser:T,RegistrationComponent:X,SignInComponent:le,LogoutComponent:ve},setup(){const e=C(),t=(0,q.iH)(!1),n=(0,q.iH)("sign"),i=(0,l.f3)("emitter");function a(){t.value=!t.value}function r(t){e.errorMessage="",n.value=t}function o(){i.emit("setUserData")}return(0,l.bv)((async()=>{await e.authChange(o),await i.emit("setUserData")})),{isVisible:t,setForm:r,togglePop:a,formView:n,filmStore:e}}};const he=(0,M.Z)(fe,[["render",L],["__scopeId","data-v-a4303992"]]);var we=he,_e=n(678),ye={components:{RegistrationWrap:we},setup(){const e=(0,_e.yj)(),t=(0,_e.tv)(),n=C(),i=(0,l.Fl)((()=>null!==n.user)),a=(0,l.Fl)((()=>e.query.q));function r(){n.pageNum=1,t.push({name:"searchPage",query:n.searchQueryWithGenre()})}function o(){n.searchQueryStore=""}function s(){n.pageNum=1,n.genreIdStore=null,t.push({name:"home"})}return(0,l.bv)((()=>{n.searchQueryStore=a.value})),{searchSubmit:r,goHome:s,filmStore:n,isUser:i,clearInput:o}}};const ke=(0,M.Z)(ye,[["render",g],["__scopeId","data-v-4f19c62c"]]);var Fe=ke;const Ie={class:"genres-wrap"},Se={class:"genres"},be=["onClick"];function Ce(e,t,n,i,a,r){return(0,l.wg)(),(0,l.iD)("div",Ie,[(0,l._)("ul",Se,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filmStore.genreListStore,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,u.C_)({active:+e.id===+i.filmStore.genreIdStore}),key:e.id},[(0,l._)("span",{onClick:t=>i.setGenre(e.id)},(0,u.zw)(e.genre),9,be)],2)))),128))])])}var De={name:"GenreList",setup(){const e=(0,_e.yj)(),t=(0,_e.tv)(),n=C(),i=(0,l.Fl)((()=>e.query.genres)),a=e=>{+n.genreIdStore===+e?n.genreIdStore=null:n.genreIdStore=e,n.pageNum=1,t.push({name:"searchPage",query:n.searchQueryWithGenre()})};async function r(){await n.getGenreList()}return(0,l.bv)((async()=>{n.genreIdStore=i.value,await r()})),{filmStore:n,setGenre:a,routeGenre:i}}};const Pe=(0,M.Z)(De,[["render",Ce],["__scopeId","data-v-71d9fdca"]]);var Le=Pe;function Ue(e,t,n,i,a,r){return(0,l.wg)(),(0,l.iD)("div",{class:"event__top",onClick:t[0]||(t[0]=(...e)=>i.eventTop&&i.eventTop(...e))})}var He={setup(){function e(){window.scrollTo({top:0,behavior:"smooth"})}return{eventTop:e}}};const Ne=(0,M.Z)(He,[["render",Ue],["__scopeId","data-v-93d00da6"]]);var xe=Ne;const Me={class:"wrapper"};var je={setup(e){return(e,t)=>{const n=(0,l.up)("RouterView");return(0,l.wg)(),(0,l.iD)("div",Me,[((0,l.wg)(),(0,l.j4)(Fe,{key:e.$route.fullPath})),(0,l.Wm)(Le),(0,l.Wm)(n,null,{default:(0,l.w5)((({Component:t})=>[((0,l.wg)(),(0,l.j4)(l.Ob,{include:"MainList"},[((0,l.wg)(),(0,l.j4)((0,l.LL)(t),{key:e.$route.fullPath}))],1024))])),_:1}),(0,l.Wm)(xe)])}}};const We=je;var Te=We;const qe=(0,l.Uk)("Список последних новинок"),Ke=[qe],Ze={key:0,ref:"observer",class:"observer"};function Ae(e,t,n,i,a,r){const o=(0,l.up)("PaginationList"),s=(0,l.up)("FIlmItem"),u=(0,l.Q2)("title"),c=(0,l.Q2)("intersection");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,Ke)),[[u]]),(0,l.Wm)(o,{total:i.totalPages},null,8,["total"]),(0,l.Wm)(s,{items:i.films,showPreload:i.showPreload},null,8,["items","showPreload"]),(0,l.Wm)(o,{total:i.totalPages},null,8,["total"]),i.filmStore.pageNum<i.totalPages?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",Ze,null,512)),[[c,{getMoreFilms:i.getMoreFilms}]]):(0,l.kq)("",!0)],64)}const Qe={class:"favorite-icon"},ze={key:0,class:"loading-round"};function Oe(e,t,n,a,r,o){const s=(0,l.up)("IconFavorite");return(0,l.wg)(),(0,l.iD)("span",Qe,[a.isShow?((0,l.wg)(),(0,l.iD)("span",ze)):(0,l.kq)("",!0),(0,l.Wm)(s,{class:(0,u.C_)({active:a.isFavorite}),onClick:(0,i.iM)(a.toggleFavorite,["prevent"])},null,8,["class","onClick"])])}const Ge={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Ve=(0,l._)("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},null,-1),Ee=[Ve];function Ye(e,t){return(0,l.wg)(),(0,l.iD)("svg",Ge,Ee)}const Be={},Re=(0,M.Z)(Be,[["render",Ye]]);var $e=Re,Je={name:"FavoriteBtn",components:{IconFavorite:$e},props:["itemFilm"],setup(e){const t=(0,q.iH)(!1),n=(0,q.iH)(!1),i=(0,l.f3)("emitter"),a=C();function r(){t.value=a.checkFavoriteStore(e.itemFilm)}async function o(){a.user?(n.value=!0,t.value?(await a.removeFavorite(e.itemFilm),t.value=!1):(await a.addFavorite(e.itemFilm),t.value=!0),n.value=!1):alert("Необходима авторизация")}return(0,l.bv)((()=>{r()})),i.on("setUserData",r),{isFavorite:t,isShow:n,toggleFavorite:o}}};const Xe=(0,M.Z)(Je,[["render",Oe],["__scopeId","data-v-d325ffc4"]]);var et=Xe;const tt=e=>((0,l.dD)("data-v-4a2f8336"),e=e(),(0,l.Cn)(),e),nt={class:"films__item"},it=["href","onClick"],at={class:"item__image"},rt=tt((()=>(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"360",height:"540"},null,-1))),ot=["src","alt"],st={key:0,class:"item__rating"},lt={class:"item__options"},ut={class:"name"},ct={key:0,class:"year"};var mt={props:["itemFilm"],setup(e){const t=e,n=(0,_e.tv)(),a=(0,l.Fl)((()=>t.itemFilm?.rating||t.itemFilm?.ratingImdb||null)),r=(0,l.Fl)((()=>t.itemFilm?.nameRu||t.itemFilm?.nameEn||t.itemFilm?.nameOriginal||"Без названия")),o=()=>{n.push(`/film/${t.itemFilm.filmId||t.itemFilm.kinopoiskId}`)};return(n,s)=>((0,l.wg)(),(0,l.iD)("li",nt,[(0,l._)("a",{href:`/film/${e.itemFilm.filmId||e.itemFilm.kinopoiskId}`,class:"item__link",onClick:(0,i.iM)(o,["prevent"])},null,8,it),(0,l.Wm)(et,{class:"favorite",itemFilm:e.itemFilm},null,8,["itemFilm"]),(0,l._)("div",at,[rt,(0,l._)("img",{src:e.itemFilm.posterUrlPreview,alt:t.itemFilm.nameRu},null,8,ot)]),(0,q.SU)(a)?((0,l.wg)(),(0,l.iD)("span",st,(0,u.zw)((0,q.SU)(a)),1)):(0,l.kq)("",!0),(0,l._)("div",lt,[(0,l._)("ul",null,[(0,l._)("li",ut,(0,u.zw)((0,q.SU)(r)),1),e.itemFilm.year?((0,l.wg)(),(0,l.iD)("li",ct,(0,u.zw)(e.itemFilm.year)+" г.",1)):(0,l.kq)("",!0)])])]))}};const pt=(0,M.Z)(mt,[["__scopeId","data-v-4a2f8336"]]);var gt=pt;const dt=e=>((0,l.dD)("data-v-08f2e64b"),e=e(),(0,l.Cn)(),e),vt=dt((()=>(0,l._)("div",{class:"item__image"},[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"360",height:"540"})],-1))),ft=[vt];function ht(e,t){return(0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(20,(e=>(0,l._)("li",{class:"films__item preload-card",key:e},ft))),64)}const wt={},_t=(0,M.Z)(wt,[["render",ht],["__scopeId","data-v-08f2e64b"]]);var yt=_t;const kt={class:"films__list"};var Ft={props:["showPreload","items"],setup(e){const t=(0,l.f3)("emitter"),n=(0,q.iH)(!1);return t.on("isLoading",(e=>{n.value=e})),(t,i)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,u.C_)(["films__wrap",{loading:n.value}])},[(0,l._)("ul",kt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.items,(e=>((0,l.wg)(),(0,l.j4)(gt,{itemFilm:e,key:e.filmId||e.kinopoiskId},null,8,["itemFilm"])))),128)),e.showPreload?((0,l.wg)(),(0,l.j4)(yt,{key:0})):(0,l.kq)("",!0)])],2))}};const It=(0,M.Z)(Ft,[["__scopeId","data-v-181c486c"]]);var St=It;const bt=e=>((0,l.dD)("data-v-4b5bec86"),e=e(),(0,l.Cn)(),e),Ct={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},Dt=bt((()=>(0,l._)("path",{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"},null,-1))),Pt=[Dt];function Lt(e,t){return(0,l.wg)(),(0,l.iD)("svg",Ct,Pt)}const Ut={},Ht=(0,M.Z)(Ut,[["render",Lt],["__scopeId","data-v-4b5bec86"]]);var Nt=Ht;const xt=e=>((0,l.dD)("data-v-d0a52dfc"),e=e(),(0,l.Cn)(),e),Mt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},jt=xt((()=>(0,l._)("path",{d:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"},null,-1))),Wt=[jt];function Tt(e,t){return(0,l.wg)(),(0,l.iD)("svg",Mt,Wt)}const qt={},Kt=(0,M.Z)(qt,[["render",Tt],["__scopeId","data-v-d0a52dfc"]]);var Zt=Kt;const At={class:"pagination"},Qt=["onClick"];var zt={props:["total"],setup(e){const t=e,n=C(),a=(0,l.f3)("emitter"),r=(0,l.Fl)((()=>n.pageNum)),o=e=>{let n=[];if(t.total>6){if(1===r.value)return[1,2,3,"...",e];if(r.value>1&&r.value<3)return[1,2,3,"...",e];if(3===r.value)return[1,2,3,4,"...",e];if(r.value>3&&r.value<e-2)return[1,"...",r.value-1,r.value,r.value+1,"...",e];if(r.value===e-2)return[1,"...",r.value-1,r.value,r.value+1,e];if(r.value===e-1)return[1,"...",r.value-1,r.value,e];if(r.value===e)return[1,"...",r.value-2,r.value-1,e]}else for(let t=1;t<=e;t++)n.push(t);return n},s=(e,i="")=>{if("..."===e)return;let r;r="prev"===i?n.pageNum-1:"next"===i?n.pageNum+1:"prevAll"===i?1:"nextAll"===i?t.total:e,n.pageNum=r,a.emit("clickPage",r)};return(a,r)=>((0,l.wg)(),(0,l.iD)("div",At,[(0,l._)("ul",null,[(0,l.wy)((0,l._)("li",{class:"pg first",onClick:r[0]||(r[0]=e=>s(null,"prevAll"))},[(0,l._)("span",null,[(0,l.Wm)(Zt)])],512),[[i.F8,(0,q.SU)(n).pageNum>1]]),(0,l.wy)((0,l._)("li",{class:"pg prev",onClick:r[1]||(r[1]=e=>s(null,"prev"))},[(0,l._)("span",null,[(0,l.Wm)(Nt)])],512),[[i.F8,(0,q.SU)(n).pageNum>1]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o(e.total),(e=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("span",{class:(0,u.C_)({active:(0,q.SU)(n).pageNum===e}),onClick:t=>s(e)},(0,u.zw)(e),11,Qt)])))),128)),(0,l.wy)((0,l._)("li",{class:"pg next",onClick:r[2]||(r[2]=e=>s(null,"next"))},[(0,l._)("span",null,[(0,l.Wm)(Nt)])],512),[[i.F8,(0,q.SU)(n).pageNum<t.total]]),(0,l.wy)((0,l._)("li",{class:"pg last",onClick:r[3]||(r[3]=e=>s(null,"nextAll"))},[(0,l._)("span",null,[(0,l.Wm)(Zt)])],512),[[i.F8,(0,q.SU)(n).pageNum<t.total]])])]))}};const Ot=(0,M.Z)(zt,[["__scopeId","data-v-fe180af4"]]);var Gt=Ot,Vt={name:"MainList",components:{PaginationList:Gt,FIlmItem:St},setup(){const e=C(),t=(0,l.f3)("emitter"),n=(0,q.iH)([]),i=(0,q.iH)("TOP_100_POPULAR_FILMS"),a=(0,q.iH)(0),r=(0,q.iH)(!1);async function o(){return await v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/top",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"},params:{type:i.value,page:e.pageNum}})}async function s(i,s=""){"loading"===s&&t.emit("isLoading",!0),r.value="preload"===s,e.pageNum=i||e.pageNum;const l=await o();a.value=l.data?.pagesCount,"preload"===s?n.value=[...n.value,...l.data?.films]:(n.value=[],n.value=l.data?.films),r.value=!1,"loading"===s&&await(l.data?.films)&&t.emit("isLoading",!1)}function u(){s(e.pageNum+1,"preload")}function c(){s(e.pageNum,"loading")}return t.on("clickPage",c),(0,l.bv)((()=>{s()})),{films:n,showPreload:r,totalPages:a,filmStore:e,getListFilms:s,getMoreFilms:u}}};const Et=(0,M.Z)(Vt,[["render",Ae],["__scopeId","data-v-1c47df41"]]);var Yt=Et;const Bt=e=>((0,l.dD)("data-v-096a6f58"),e=e(),(0,l.Cn)(),e),Rt=(0,l.Uk)("Назад"),$t={class:"film__wrap"},Jt={class:"film__image"},Xt=["src"],en={class:"film__note"},tn={class:"film__btns"},nn={class:"film__description"},an=Bt((()=>(0,l._)("h3",null,"Описание:",-1))),rn={class:"film__genres"},on=Bt((()=>(0,l._)("h3",null,"Жанры",-1))),sn=["onClick"],ln={key:0,class:"film__similar"},un=Bt((()=>(0,l._)("h3",null,"Похожие фильмы",-1)));function cn(e,t,n,a,r,o){const s=(0,l.up)("IconLeftArrow"),c=(0,l.up)("FavoriteBtn"),m=(0,l.up)("FilmPageDialog"),p=(0,l.up)("FIlmItem"),g=(0,l.Q2)("title");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("button",{class:"back-to-list",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>a.goToList&&a.goToList(...e)),["prevent"]))},[(0,l.Wm)(s),Rt]),(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,[(0,l.Uk)((0,u.zw)(a.filmTitle),1)])),[[g]]),(0,l._)("div",$t,[(0,l._)("div",Jt,[(0,l.Wm)(c,{class:"favorite",itemFilm:a.filmInfo},null,8,["itemFilm"]),a.filmInfo?.posterUrl?((0,l.wg)(),(0,l.iD)("img",{key:0,src:a.filmInfo?.posterUrl,alt:"filmTitle"},null,8,Xt)):(0,l.kq)("",!0)]),(0,l._)("div",en,[(0,l._)("div",tn,[(0,l.Wm)(m,{itemFilm:a.filmInfo},null,8,["itemFilm"])]),(0,l._)("div",nn,[an,(0,l.Uk)(" "+(0,u.zw)(a.filmInfo.description),1)]),(0,l._)("div",rn,[on,(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.filmInfo.genres,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("span",{onClick:t=>a.setGenre(e.genre)},(0,u.zw)(e.genre),9,sn)])))),128))])]),a.similars.length>0?((0,l.wg)(),(0,l.iD)("div",ln,[un,(0,l.Wm)(p,{items:a.similars},null,8,["items"])])):(0,l.kq)("",!0)])])],64)}const mn={class:"left-arrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},pn=(0,l._)("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"},null,-1),gn=[pn];function dn(e,t){return(0,l.wg)(),(0,l.iD)("svg",mn,gn)}const vn={},fn=(0,M.Z)(vn,[["render",dn]]);var hn=fn;const wn={class:"tab-titles"};function _n(e,t,n,i,a,r){const o=(0,l.up)("FilmKinoBoxTab"),s=(0,l.up)("FilmPlayerClub"),c=(0,l.up)("FilmKinoTop");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("ul",wn,[(0,l._)("li",{class:(0,u.C_)({selected:1===i.playerNum}),onClick:t[0]||(t[0]=e=>i.playerNum=1)},"Плеер 1",2),(0,l._)("li",{class:(0,u.C_)({selected:2===i.playerNum}),onClick:t[1]||(t[1]=e=>i.playerNum=2)},"Плеер 2",2),(0,l._)("li",{class:(0,u.C_)({selected:3===i.playerNum}),onClick:t[2]||(t[2]=e=>i.playerNum=3)},"Плеер 3 с vpn",2)]),1===i.playerNum?((0,l.wg)(),(0,l.j4)(o,{key:0})):(0,l.kq)("",!0),2===i.playerNum?((0,l.wg)(),(0,l.j4)(s,{key:1})):(0,l.kq)("",!0),3===i.playerNum?((0,l.wg)(),(0,l.j4)(c,{key:2})):(0,l.kq)("",!0)],64)}const yn={class:"kinobox_player film__init",ref:"player_init_item"};function kn(e,t,n,i,a,r){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",yn,null,512)])}var Fn={name:"FilmKinoBoxTab",setup(){const e=(0,_e.yj)(),t=(0,q.iH)(null);function n(t){let n=document.createElement("script");n.type="text/javascript",n.src="//kinobox.tv/kinobox.min.js",t.value.appendChild(n),setTimeout((()=>{new Kinobox(".kinobox_player",{search:{kinopoisk:e.params.id}}).init()}),1e3)}return(0,l.bv)((()=>{n(t)})),{player_init_item:t}}};const In=(0,M.Z)(Fn,[["render",kn]]);var Sn=In;const bn=["src"];function Cn(e,t,n,i,a,r){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("iframe",{src:`//496622434375553.svetacdn.in/fcvcbl7auqJG?kp_id=${i.filmId}`,width:"100%",height:"495",allowfullscreen:""},null,8,bn)])}var Dn={name:"FilmPlayerClub",setup(){const e=(0,_e.yj)(),t=e.params.id;return{filmId:t}}};const Pn=(0,M.Z)(Dn,[["render",Cn],["__scopeId","data-v-09a448a0"]]);var Ln=Pn;const Un={class:"film__init",ref:"player_init_item"};function Hn(e,t,n,i,a,r){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",Un,null,512)])}var Nn={name:"FilmKinoTopTab",setup(){const e=(0,_e.yj)(),t=(0,q.iH)(null);function n(t){t.value.innerHTML="";let n=document.createElement("div");n.setAttribute("data-kinopoisk",e.params.id),n.setAttribute("id","kinoplayertop");let i=document.createElement("script");i.type="text/javascript",i.src="//kinoplayer.top/top.js",t.value.appendChild(n),t.value.appendChild(i),setTimeout((()=>{runKinoplayertop()}),500)}return(0,l.bv)((()=>{n(t)})),{player_init_item:t}}};const xn=(0,M.Z)(Nn,[["render",Hn]]);var Mn=xn,jn={name:"FilmPageDialog",props:["itemFilm"],components:{FilmKinoTop:Mn,FilmKinoBoxTab:Sn,FilmPlayerClub:Ln},setup(){const e=C(),t=(0,q.iH)(1);return{filmStore:e,playerNum:t}}};const Wn=(0,M.Z)(jn,[["render",_n],["__scopeId","data-v-0b0a1f24"]]);var Tn=Wn,qn={name:"FilmPage",components:{FIlmItem:St,FilmPageDialog:Tn,FavoriteBtn:et,IconLeftArrow:hn},setup(){const e=C(),t=(0,_e.yj)(),n=(0,_e.tv)(),i=(0,q.iH)([]),a=(0,q.iH)(""),r=(0,q.iH)([]),o=(0,q.iH)(a.value);function s(){v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/"+t.params.id,{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{i.value=e.data,m()})).catch((()=>({data:[]})))}function u(){v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/"+t.params.id+"/similars",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{r.value=e.data?.items})).catch((()=>({data:[]})))}function c(){v().get("https://kinopoiskapiunofficial.tech/api/v2.1/films/"+t.params.id+"/sequels_and_prequels",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{r.value=[...e?.data,...r.value]})).catch((()=>({data:[]})))}function m(){a.value=i.value?.nameRu||i.value?.nameEn||i.value?.nameOriginal||"Без названия",a.value+=` (${i.value.year})`}function p(e){let t=JSON.parse(localStorage.getItem("genres")),i=t.filter((t=>t.genre===e))[0].id;window.scrollTo(0,0),n.push({name:"searchPage",query:{genres:i}})}const g=()=>{n.go(-1)};return(0,l.bv)((()=>{s(),u(),c()})),{filmTitle:a,filmInfo:i,similars:r,setGenre:p,title:o,goToList:g,IconLeftArrow:hn}}};const Kn=(0,M.Z)(qn,[["render",cn],["__scopeId","data-v-096a6f58"]]);var Zn=Kn;const An={key:0,ref:"observer",class:"observer"};function Qn(e,t,n,i,a,r){const o=(0,l.up)("PaginationList"),s=(0,l.up)("FIlmItem"),c=(0,l.Q2)("title"),m=(0,l.Q2)("intersection");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,[(0,l.Uk)((0,u.zw)(i.titlePage),1)])),[[c]]),(0,l.Wm)(o,{total:i.totalPages,onClickPage:i.getListFilms},null,8,["total","onClickPage"]),(0,l.Wm)(s,{items:i.films,showPreload:i.showPreload},null,8,["items","showPreload"]),(0,l.Wm)(o,{total:i.totalPages,onClickPage:i.getListFilms},null,8,["total","onClickPage"]),i.filmStore.pageNum<i.totalPages?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",An,null,512)),[[m,{getMoreFilms:i.getMoreFilms}]]):(0,l.kq)("",!0)],64)}var zn={components:{FIlmItem:St,PaginationList:Gt},setup(){const e=(0,_e.yj)(),t=(0,q.iH)([]),n=(0,l.f3)("emitter"),i=C(),a=(0,q.iH)(0),r=(0,q.iH)(""),o=(0,q.iH)(!1),s=(0,l.Fl)((()=>e.query.q)),u=(0,l.Fl)((()=>e.query.genres));async function c(){return await v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films",{headers:{"X-API-KEY":i.apiKey,"Content-Type":"application/json"},params:{keyword:i.searchQueryStore,genres:i.genreIdStore,page:i.pageNum}})}async function m(e=!1,n){if(await d(),i.pageNum=n||i.pageNum,i.genreIdStore||i.searchQueryStore||e){o.value=!0;const n=await c();a.value=n.data?.totalPages,e?t.value=[...t.value,...n.data?.items]:(t.value=[],t.value=n.data?.items),o.value=!1}}function p(){m(!0,i.pageNum+1)}function g(){m(!1,i.pageNum)}async function d(){let e=i.genreIdStore?await i.genreListStore.filter((e=>+e.id===+i.genreIdStore))[0].genre:null;i.searchQueryStore&&i.genreIdStore?r.value=`Поиск по слову "${i.searchQueryStore}", жанр "${e}"`:i.searchQueryStore&&!i.genreIdStore?r.value=`Поиск по слову "${i.searchQueryStore}"`:i.genreIdStore&&!i.searchQueryStore?r.value=`Поиск по жанру "${e}"`:r.value="Ничего не указано для поиска"}return n.on("clickPage",g),(0,l.bv)((async()=>{i.searchQueryStore=s.value,i.genreIdStore=u.value,await m(!1,1),n.on("searchSubmit",(()=>{m(!1,1)}))})),{films:t,titlePage:r,filmStore:i,totalPages:a,showPreload:o,getListFilms:m,getMoreFilms:p}}};const On=(0,M.Z)(zn,[["render",Qn]]);var Gn=On;const Vn=e=>((0,l.dD)("data-v-4d7e4948"),e=e(),(0,l.Cn)(),e),En=Vn((()=>(0,l._)("h1",null,"Страница не найдена",-1))),Yn=(0,l.Uk)("Перейти на "),Bn=(0,l.Uk)("главную"),Rn=Vn((()=>(0,l._)("br",null,null,-1)));function $n(e,t){const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[En,(0,l._)("p",null,[Yn,(0,l.Wm)(n,{to:"/"},{default:(0,l.w5)((()=>[Bn])),_:1})]),Rn],64)}const Jn={},Xn=(0,M.Z)(Jn,[["render",$n],["__scopeId","data-v-4d7e4948"]]);var ei=Xn;const ti=e=>((0,l.dD)("data-v-555573f0"),e=e(),(0,l.Cn)(),e),ni=ti((()=>(0,l._)("h1",null,"Избранные фильмы/мультики и тд",-1))),ii={key:0};function ai(e,t,n,i,a,r){const o=(0,l.up)("FIlmItem");return(0,l.wg)(),(0,l.iD)(l.HY,null,[ni,(0,l.Wm)(o,{items:i.filmStore.favorites,showPreload:i.showPreload},null,8,["items","showPreload"]),0===i.filmStore.favorites.length?((0,l.wg)(),(0,l.iD)("h3",ii,"Список пуст")):(0,l.kq)("",!0)],64)}var ri={name:"FavoritePage",components:{FIlmItem:St},setup(){const e=C(),t=(0,q.iH)(!1);return{filmStore:e,showPreload:t}}};const oi=(0,M.Z)(ri,[["render",ai],["__scopeId","data-v-555573f0"]]);var si=oi;const li=(0,_e.p7)({history:(0,_e.PO)("/hometv"),routes:[{path:"/",name:"home",component:Yt},{path:"/film/:id",name:"filmName",component:Zn},{path:"/search",name:"searchPage",component:Gn},{path:"/favorites",name:"favorite",component:si},{path:"/:pathMatch(.*)*",component:ei}]});var ui=li,ci=n(1373),mi=n(9907);(0,mi.z)("/hometv/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const pi=(0,ci.Z)(),gi=(0,i.ri)(Te);gi.directive("intersection",r),gi.directive("title",s),gi.use((0,a.WB)()),gi.use(ui),gi.provide("emitter",pi),gi.mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,r){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,r<o&&(o=r));if(s){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,o=i[0],s=i[1],l=i[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var c=l(n)}for(t&&t(i);u<o.length;u++)r=o[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},i=self["webpackChunkhomefilmtv"]=self["webpackChunkhomefilmtv"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(960)}));i=n.O(i)})();
//# sourceMappingURL=app.7f906e84.js.map