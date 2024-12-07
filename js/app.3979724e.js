(function(){"use strict";var e={1497:function(e,t,n){var i=n(9242),r=n(3766),a={name:"intersection",mounted(e,t){const n={rootMargin:"0px",threshold:1},i=e=>{e[0].isIntersecting&&t.value.getMoreFilms()},r=new IntersectionObserver(i,n);r.observe(e)}};const o=function(e){document.title=e};var s={mounted:(e,t)=>o(t.value||e.innerText),beforeUpdate:(e,t)=>o(t.value||e.innerText),updated:(e,t)=>o(t.value||e.innerText)},l=n(3396),u=n(7139);const c=e=>((0,l.dD)("data-v-960dad08"),e=e(),(0,l.Cn)(),e),m={class:"input-wrap"},p=c((()=>(0,l._)("button",{type:"submit"},"Найти",-1)));function d(e,t,n,r,a,o){const s=(0,l.up)("RegistrationWrap");return(0,l.wg)(),(0,l.iD)("header",null,[(0,l._)("a",{class:"home",onClick:t[0]||(t[0]=(...e)=>r.goHome&&r.goHome(...e)),href:"#"},"Home"),(0,l._)("a",{href:"#",class:(0,u.C_)(["favorites",{disabled:!1===r.isUser}]),onClick:t[1]||(t[1]=t=>e.$router.push({name:"favorite"}))},(0,u.zw)(r.filmStore.favorites.length),3),(0,l._)("form",{action:"#",class:(0,u.C_)({show:r.isSearchVisible}),onSubmit:t[5]||(t[5]=(0,i.iM)(((...e)=>r.searchSubmit&&r.searchSubmit(...e)),["prevent"]))},[(0,l._)("div",m,[(0,l.wy)((0,l._)("input",{ref:"searchInput",autocomplete:"off",type:"text",onKeyup:t[2]||(t[2]=(0,i.D2)(((...e)=>r.searchSubmit&&r.searchSubmit(...e)),["enter"])),placeholder:"Название фильма / ID КиноПоиск","onUpdate:modelValue":t[3]||(t[3]=e=>r.filmStore.searchQueryStore=e),name:"keyword"},null,544),[[i.nr,r.filmStore.searchQueryStore,void 0,{trim:!0}]]),r.filmStore.searchQueryStore?((0,l.wg)(),(0,l.iD)("span",{key:0,onClick:t[4]||(t[4]=(...e)=>r.clearInput&&r.clearInput(...e)),class:"clear-input"},"×")):(0,l.kq)("",!0)]),p],34),(0,l.Wm)(s),(0,l._)("button",{class:"reload-page",onClick:t[6]||(t[6]=(...e)=>r.reloadPage&&r.reloadPage(...e))}),(0,l._)("button",{type:"button",onClick:t[7]||(t[7]=(...e)=>r.toggleSearch&&r.toggleSearch(...e)),class:(0,u.C_)({"search-popup-btn":!0,opened:r.isSearchVisible})},null,2)])}var g=n(6265),v=n.n(g),f=n(4275),h=n(6035),w={apiKey:"AIzaSyDapqMH_oM7h6CDKM0laMGrLIlDVDyb_gY",authDomain:"hometv-c10f8.firebaseapp.com",projectId:"hometv-c10f8",storageBucket:"hometv-c10f8.appspot.com",messagingSenderId:"452296723769",appId:"1:452296723769:web:982a4288b9cf4e189bace8"};const _=(0,f.ZF)(w),y=(0,h.ad)(_);var k=n(8176);const F=async function(e){const t=(0,h.JU)(y,"users",e),n=await(0,h.QT)(t);return n.exists()?n.data():null},I=async function(e,t){await(0,h.pl)((0,h.JU)(y,"users",t),{name:e.user_name||"",email:e.email||"",favorites:[],api_key:e.api_key||""})},b=function(e){switch(e){case"auth/wrong-password":return"Неверный пароль";case"auth/internal-error":return"Неизвестная ошибка";case"auth/invalid-email":return"Недопустимый email";case"auth/user-not-found":return"Пользователь не найден";case"auth/weak-password":return"Пароль не менее 6 символов";default:return"Ошибка авторизации"}},S=["","для взрослых","мюзикл","спорт","церемония","фильм-нуар","биография","вестерн","короткометражка","документальный","документальный","реальное ТВ","ток-шоу","концерт","игра","новости"],C=(0,r.Q_)("filmStore",{state:()=>({user:null,apiKey:"404dc583-7efc-4c93-8f21-a782f977b9e7",auth:(0,k.v0)(),errorMessage:"",pageNum:1,limit:20,genreIdStore:null,genreListStore:[],searchQueryStore:"",filters:null,filmPageId:0,favorites:[],currentFocusIndex:-1,films:[]}),getters:{filterGenres(){if(!this.genreListStore.length)return[];this.genreListStore=this.genreListStore.filter((e=>{if(-1===S.indexOf(e.genre))return e}))}},actions:{setGenreId(e){this.genreIdStore=e},setFilmPageId(e){this.filmPageId=e},async getGenreList(){return localStorage.getItem("genres")?(this.genreListStore=JSON.parse(localStorage.getItem("genres")),this.genreListStore):(await v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/filters",{headers:{"X-API-KEY":this.apiKey,"Content-Type":"application/json"}}).then((e=>{this.filters=e.data,this.genreListStore=e.data.genres,this.filterGenres,localStorage.setItem("genres",JSON.stringify(this.genreListStore))})),this.genreListStore)},checkFavoriteStore(e){let t=this.isCheckFilm(!0,e);return!!t.length},async addFavorite(e){try{const t=(0,h.JU)(y,"users",this.user.uid);await(0,h.r7)(t,{favorites:[...this.favorites,e]})}catch(t){this.user?console.log("Ошибка добавления в избранное: "+t):console.log("Необходимо авторизоваться")}this.favorites=[...this.favorites,e]},async removeFavorite(e){let t=this.isCheckFilm(!1,e);try{const e=(0,h.JU)(y,"users",this.user.uid);await(0,h.r7)(e,{favorites:[...t]})}catch(n){this.user?console.log("Ошибка удаления из избранного: "+n):console.log("Необходимо авторизоваться")}this.favorites=[...t]},async authWithEmailAndPassword(e){await(0,k.e5)(this.auth,e.email,e.password).then((()=>{this.getUserData()})).catch((e=>{this.errorMessage=b(e.code)}))},async createAuthWithEmailAndPassword(e){await(0,k.Xb)(this.auth,e.email,e.password).then((async t=>{this.user=await t.user,await I(e,this.user.uid),await this.getUserData()})).catch((e=>{this.errorMessage=b(e.code)}))},async authLogout(){(0,k.w7)(this.auth).then((async()=>{this.removeUserData()})).catch((e=>{alert("Ошибка logout: "+e)}))},async authChange(e){(0,k.Aj)(this.auth,(async t=>{t?(this.user=t,this.getUserData(e)):this.removeUserData(e)}))},async getUserData(e){let t=await F(this.user.uid);this.user.name=t?.name||"",this.user.email=t?.email??"",this.favorites=t?.favorites.reverse()??[],t?.api_key&&(this.apiKey=t.api_key),"function"===typeof e&&e()},removeUserData(e){this.user=null,this.favorites=[],"function"===typeof e&&e()},isCheckFilm(e,t){return this.favorites.filter((n=>{let i=n?.kinopoiskId??n?.filmId,r=t?.kinopoiskId??t?.filmId;return i===r&&e?n:i===r||e?void 0:n}))},searchQueryWithGenre(){let e={};return this.searchQueryStore&&(e.q=this.searchQueryStore),this.genreIdStore&&(e.genres=this.genreIdStore),e},incrementFocus(){this.currentFocusIndex+=1},decrementFocus(){this.setCurrentFocus(0),this.currentFocusIndex-=1},setCurrentFocus(e){this.currentFocusIndex=e}}}),P={class:"registration-wrap"},D={key:0,class:"registration-wrap--pop"};function x(e,t,n,i,r,a){const o=(0,l.up)("IconUser"),s=(0,l.up)("LogoutComponent"),u=(0,l.up)("SignInComponent"),c=(0,l.up)("RegistrationComponent");return(0,l.wg)(),(0,l.iD)("div",P,[(0,l.Wm)(o,{onClick:i.togglePop},null,8,["onClick"]),i.isVisible?((0,l.wg)(),(0,l.iD)("div",D,[i.filmStore.user?((0,l.wg)(),(0,l.j4)(s,{key:0,onSetForm:i.setForm},null,8,["onSetForm"])):"sign"===i.formView?((0,l.wg)(),(0,l.j4)(u,{key:1,onSetForm:i.setForm},null,8,["onSetForm"])):"reg"===i.formView?((0,l.wg)(),(0,l.j4)(c,{key:2,onSetForm:i.setForm},null,8,["onSetForm"])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])}const L={class:"icon icon-user"},H=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},[(0,l._)("path",{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"})],-1),U=[H];function M(e,t){return(0,l.wg)(),(0,l.iD)("span",L,U)}var N=n(89);const A={},W=(0,N.Z)(A,[["render",M]]);var j=W,T=n(4870);const q=e=>((0,l.dD)("data-v-4909460b"),e=e(),(0,l.Cn)(),e),K={class:"registration--form"},E=q((()=>(0,l._)("h3",null,"Регистрация",-1))),Z=q((()=>(0,l._)("small",null,[(0,l._)("a",{href:"https://kinopoiskapiunofficial.tech/signup"},"зарегистрироваться")],-1))),Q={key:0,class:"err-string"},z={class:"btns"};function V(e,t,n,r,a,o){const s=(0,l.up)("IconGoogle");return(0,l.wg)(),(0,l.iD)("div",K,[E,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[i.nr,r.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[1]||(t[1]=e=>r.user_name=e)},null,512),[[i.nr,r.user_name]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Api key","onUpdate:modelValue":t[2]||(t[2]=e=>r.api_key=e)},null,512),[[i.nr,r.api_key]]),Z]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=e=>r.password=e)},null,512),[[i.nr,r.password]])]),r.filmStore.errorMessage?((0,l.wg)(),(0,l.iD)("p",Q,(0,u.zw)(r.filmStore.errorMessage),1)):(0,l.kq)("",!0),(0,l._)("div",z,[(0,l._)("button",{class:"reg",onClick:t[4]||(t[4]=(0,i.iM)(((...e)=>r.register&&r.register(...e)),["prevent"]))},"Регистрация"),(0,l._)("button",{class:"sign",onClick:t[5]||(t[5]=(0,i.iM)(((...e)=>r.setFormView&&r.setFormView(...e)),["prevent"]))},"Войти"),(0,l.Wm)(s,{onClick:r.signWithGoogle},null,8,["onClick"])])])}const O={class:"icon-google"};function Y(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("span",O)}var G={name:"IconGoogle"};const R=(0,N.Z)(G,[["render",Y],["__scopeId","data-v-103616a1"]]);var B=R,$={name:"RegistrationComponent",components:{IconGoogle:B},setup(e,{emit:t}){const n=C(),i=(0,T.iH)(""),r=(0,T.iH)(""),a=(0,T.iH)(""),o=(0,T.iH)("");async function s(){await n.createAuthWithEmailAndPassword({email:i.value,password:r.value,user_name:a.value,api_key:o.value})}function l(){t("setForm","sign")}function u(){console.log("ok")}return{email:i,user_name:a,password:r,api_key:o,filmStore:n,register:s,signWithGoogle:u,setFormView:l}}};const J=(0,N.Z)($,[["render",V],["__scopeId","data-v-4909460b"]]);var X=J;const ee=e=>((0,l.dD)("data-v-105d9081"),e=e(),(0,l.Cn)(),e),te={class:"registration--form"},ne=ee((()=>(0,l._)("h3",{class:"name"},"Авторизация",-1))),ie={key:0,class:"err-string"},re={class:"btns"};function ae(e,t,n,r,a,o){return(0,l.wg)(),(0,l.iD)("div",te,[ne,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[i.nr,r.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e)},null,512),[[i.nr,r.password]])]),r.filmStore.errorMessage?((0,l.wg)(),(0,l.iD)("p",ie,(0,u.zw)(r.filmStore.errorMessage),1)):(0,l.kq)("",!0),(0,l._)("div",re,[(0,l._)("button",{class:"sign",onClick:t[2]||(t[2]=(0,i.iM)(((...e)=>r.signIn&&r.signIn(...e)),["prevent"]))},"Войти"),(0,l._)("button",{class:"reg",onClick:t[3]||(t[3]=(0,i.iM)(((...e)=>r.setFormView&&r.setFormView(...e)),["prevent"]))},"Регистрация")])])}var oe={name:"SignInComponent",setup(e,{emit:t}){const n=(0,T.iH)(""),i=(0,T.iH)(""),r=(0,T.iH)(""),a=C();async function o(){await a.authWithEmailAndPassword({email:n.value,password:i.value})}function s(){t("setForm","reg")}return{email:n,password:i,errMsg:r,signIn:o,setFormView:s,filmStore:a}}};const se=(0,N.Z)(oe,[["render",ae],["__scopeId","data-v-105d9081"]]);var le=se;const ue={class:"registration--form"},ce=(0,l.Uk)("Вы вошли как: "),me={class:"btns"};function pe(e,t,n,r,a,o){return(0,l.wg)(),(0,l.iD)("div",ue,[(0,l._)("h3",null,[ce,(0,l._)("strong",null,(0,u.zw)(r.filmStore.user.name),1)]),(0,l._)("div",me,[(0,l._)("button",{class:"reg",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>r.logout&&r.logout(...e)),["prevent"]))},"Выйти")])])}var de={name:"LogoutComponent",setup(){const e=C();async function t(){await e.authLogout()}return{logout:t,filmStore:e}}};const ge=(0,N.Z)(de,[["render",pe]]);var ve=ge,fe={name:"RegistrationWrap",components:{IconUser:j,RegistrationComponent:X,SignInComponent:le,LogoutComponent:ve},setup(){const e=C(),t=(0,T.iH)(!1),n=(0,T.iH)("sign"),i=(0,l.f3)("emitter");function r(){t.value=!t.value}function a(t){e.errorMessage="",n.value=t}function o(){i.emit("setUserData")}return(0,l.bv)((async()=>{await e.authChange(o),await i.emit("setUserData")})),{isVisible:t,setForm:a,togglePop:r,formView:n,filmStore:e}}};const he=(0,N.Z)(fe,[["render",x],["__scopeId","data-v-a4303992"]]);var we=he,_e=n(678),ye={components:{RegistrationWrap:we},setup(){const e=(0,_e.yj)(),t=(0,_e.tv)(),n=C(),i=(0,l.Fl)((()=>null!==n.user)),r=(0,l.Fl)((()=>e.query.q)),a=(0,T.iH)(!!(r.value|"searchPage"===e.name)),o=(0,T.iH)(null);function s(){n.pageNum=1,t.push({name:"searchPage",query:n.searchQueryWithGenre()})}function u(){n.searchQueryStore="",o.value.focus()}function c(){n.pageNum=1,n.genreIdStore=null,t.push({name:"home"})}(0,l.bv)((()=>{n.searchQueryStore=r.value}));const m=()=>{document.location.reload()};function p(){a.value=!a.value}return{searchSubmit:s,goHome:c,filmStore:n,isUser:i,clearInput:u,toggleSearch:p,isSearchVisible:a,searchInput:o,reloadPage:m}}};const ke=(0,N.Z)(ye,[["render",d],["__scopeId","data-v-960dad08"]]);var Fe=ke;const Ie={class:"genres-wrap"},be={class:"genres"},Se=["onClick"];function Ce(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",Ie,[(0,l._)("ul",be,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filmStore.genreListStore,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,u.C_)({active:+e.id===+i.filmStore.genreIdStore}),key:e.id},[(0,l._)("span",{onClick:t=>i.setGenre(e.id)},(0,u.zw)(e.genre),9,Se)],2)))),128))])])}var Pe={name:"GenreList",setup(){const e=(0,_e.yj)(),t=(0,_e.tv)(),n=C(),i=(0,l.Fl)((()=>e.query.genres)),r=e=>{+n.genreIdStore===+e?n.genreIdStore=null:n.genreIdStore=e,n.pageNum=1,t.push({name:"searchPage",query:n.searchQueryWithGenre()})};async function a(){await n.getGenreList()}return(0,l.bv)((async()=>{n.genreIdStore=i.value,await a()})),{filmStore:n,setGenre:r,routeGenre:i}}};const De=(0,N.Z)(Pe,[["render",Ce],["__scopeId","data-v-71d9fdca"]]);var xe=De;function Le(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",{class:"event__top",onClick:t[0]||(t[0]=(...e)=>i.onTop&&i.onTop(...e))})}var He={setup(){function e(){window.scrollTo({top:0,behavior:"smooth"})}return{onTop:e}}};const Ue=(0,N.Z)(He,[["render",Le],["__scopeId","data-v-b067bd64"]]);var Me=Ue;const Ne={ArrowDown:"ArrowDown",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowLeft:"ArrowLeft",Enter:"Enter",NumpadEnter:"Enter"},Ae={desktop:1024,tablet:768,mobile:480};var We={setup(e){const t=(0,_e.tv)(),n=C(),i=(0,T.iH)(0),r=(0,T.iH)(n.films.length),a=()=>{-1===n.currentFocusIndex?n.currentFocusIndex=0:n.currentFocusIndex=Math.min(r.value-1,n.currentFocusIndex+i.value)},o=()=>{n.currentFocusIndex=Math.max(0,n.currentFocusIndex-i.value)},s=()=>{n.currentFocusIndex=Math.min(r.value-1,n.currentFocusIndex+1)},u=()=>{n.currentFocusIndex=Math.max(0,n.currentFocusIndex-1)},c=()=>{const e=n.currentFocusIndex;if(-1===e)return;const i=n.films[e].filmId||n.films[e].kinopoiskId;t.push(`/film/${i}`)},m=e=>{switch(e.key){case Ne.ArrowDown:a();break;case Ne.ArrowUp:o();break;case Ne.ArrowRight:s();break;case Ne.ArrowLeft:u();break;case Ne.Enter:case Ne.NumpadEnter:c();break}},p=()=>{window.innerWidth>Ae.desktop?i.value=5:window.innerWidth>Ae.tablet?i.value=4:window.innerWidth>Ae.mobile?i.value=3:i.value=2};return(0,l.YP)((()=>n.films),(e=>{r.value=e.length})),(0,l.bv)((()=>{window.removeEventListener("keydown",m),"filmPage"!==t.currentRoute.value.name&&(window.addEventListener("keydown",m),n.currentFocusIndex=-1,p())})),(0,l.Ah)((()=>{window.removeEventListener("keydown",m),n.currentFocusIndex=-1})),(e,t)=>((0,l.wg)(),(0,l.iD)("div"))}};const je=We;var Te=je;const qe={class:"wrapper"};var Ke={setup(e){return(e,t)=>{const n=(0,l.up)("RouterView");return(0,l.wg)(),(0,l.iD)("div",qe,[((0,l.wg)(),(0,l.j4)(Fe,{key:e.$route.fullPath})),(0,l.Wm)(xe),(0,l.Wm)(n,null,{default:(0,l.w5)((({Component:t})=>[((0,l.wg)(),(0,l.j4)(l.Ob,{include:"MainList"},[((0,l.wg)(),(0,l.j4)((0,l.LL)(t),{key:e.$route.fullPath}))],1024))])),_:1}),(0,l.Wm)(Me),((0,l.wg)(),(0,l.j4)(Te,{key:e.$route.fullPath}))])}}};const Ee=Ke;var Ze=Ee;const Qe=(0,l.Uk)("Список последних новинок"),ze=[Qe],Ve={key:0,ref:"observer",class:"observer"};function Oe(e,t,n,i,r,a){const o=(0,l.up)("PaginationList"),s=(0,l.up)("FIlmItem"),u=(0,l.Q2)("title"),c=(0,l.Q2)("intersection");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,ze)),[[u]]),(0,l.Wm)(o,{total:i.totalPages},null,8,["total"]),(0,l.Wm)(s,{items:i.films,showPreload:i.showPreload},null,8,["items","showPreload"]),(0,l.Wm)(o,{total:i.totalPages},null,8,["total"]),i.filmStore.pageNum<i.totalPages?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",Ve,null,512)),[[c,{getMoreFilms:i.getMoreFilms}]]):(0,l.kq)("",!0)],64)}const Ye={class:"favorite-icon"},Ge={key:0,class:"loading-round"};function Re(e,t,n,r,a,o){const s=(0,l.up)("IconFavorite");return(0,l.wg)(),(0,l.iD)("span",Ye,[r.isShow?((0,l.wg)(),(0,l.iD)("span",Ge)):(0,l.kq)("",!0),(0,l.Wm)(s,{class:(0,u.C_)({active:r.isFavorite}),onClick:(0,i.iM)(r.toggleFavorite,["prevent"])},null,8,["class","onClick"])])}const Be={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},$e=(0,l._)("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},null,-1),Je=[$e];function Xe(e,t){return(0,l.wg)(),(0,l.iD)("svg",Be,Je)}const et={},tt=(0,N.Z)(et,[["render",Xe]]);var nt=tt,it={name:"FavoriteBtn",components:{IconFavorite:nt},props:["itemFilm"],setup(e){const t=(0,T.iH)(!1),n=(0,T.iH)(!1),i=(0,l.f3)("emitter"),r=C();function a(){t.value=r.checkFavoriteStore(e.itemFilm)}async function o(){r.user?(n.value=!0,t.value?(await r.removeFavorite(e.itemFilm),t.value=!1):(await r.addFavorite(e.itemFilm),t.value=!0),n.value=!1):alert("Необходима авторизация")}return(0,l.bv)((()=>{a()})),i.on("setUserData",a),{isFavorite:t,isShow:n,toggleFavorite:o}}};const rt=(0,N.Z)(it,[["render",Re],["__scopeId","data-v-aef485f0"]]);var at=rt;const ot=e=>((0,l.dD)("data-v-692478c5"),e=e(),(0,l.Cn)(),e),st=["href","onClick"],lt={class:"item__image"},ut=ot((()=>(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"360",height:"540"},null,-1))),ct=["src","alt"],mt={key:0,class:"item__rating"},pt={class:"item__options"},dt={class:"name"},gt={key:0,class:"year"};var vt={props:["itemFilm","currentIndex"],setup(e){const t=e,n=(0,_e.tv)(),r=C(),a=(0,T.iH)(null),o=(0,l.Fl)((()=>t.currentIndex===r.currentFocusIndex)),s=(0,T.iH)(!1),c=(0,l.Fl)((()=>t.itemFilm?.rating||t.itemFilm?.ratingKinopoisk||t.itemFilm?.ratingImdb||null)),m=(0,l.Fl)((()=>t.itemFilm?.nameRu||t.itemFilm?.nameEn||t.itemFilm?.nameOriginal||"Без названия")),p=()=>{n.push(`/film/${t.itemFilm.filmId||t.itemFilm.kinopoiskId}`)},d=()=>{s.value=!0},g=()=>{s.value=!1};return(0,l.YP)(o,(()=>{if(o.value&&a.value){const e=a.value.getBoundingClientRect(),t=document.documentElement.scrollTop,n=t+window.innerHeight,i=e.bottom+t;(e.top<0||i>n)&&window.scrollTo(0,t+e.top-50)}})),(n,r)=>((0,l.wg)(),(0,l.iD)("li",{class:(0,u.C_)({films__item:!0,focused:(0,T.SU)(o)|s.value}),onMouseover:d,onMouseleave:g,tabindex:"0",ref_key:"itemRef",ref:a},[(0,l._)("a",{href:`/film/${e.itemFilm.filmId||e.itemFilm.kinopoiskId}`,class:"item__link",onClick:(0,i.iM)(p,["prevent"])},null,8,st),(0,l.Wm)(at,{class:"favorite",itemFilm:e.itemFilm},null,8,["itemFilm"]),(0,l._)("div",lt,[ut,(0,l._)("img",{src:e.itemFilm.posterUrlPreview,alt:t.itemFilm.nameRu},null,8,ct)]),(0,T.SU)(c)?((0,l.wg)(),(0,l.iD)("span",mt,(0,u.zw)((0,T.SU)(c)),1)):(0,l.kq)("",!0),(0,l._)("div",pt,[(0,l._)("ul",null,[(0,l._)("li",dt,(0,u.zw)((0,T.SU)(m)),1),e.itemFilm.year?((0,l.wg)(),(0,l.iD)("li",gt,(0,u.zw)(e.itemFilm.year)+" г.",1)):(0,l.kq)("",!0)])])],34))}};const ft=(0,N.Z)(vt,[["__scopeId","data-v-692478c5"]]);var ht=ft;const wt=e=>((0,l.dD)("data-v-01956349"),e=e(),(0,l.Cn)(),e),_t=wt((()=>(0,l._)("div",{class:"item__image"},[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"360",height:"540"})],-1))),yt=[_t];function kt(e,t){return(0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(20,(e=>(0,l._)("li",{class:"films__item preload-card",key:e},yt))),64)}const Ft={},It=(0,N.Z)(Ft,[["render",kt],["__scopeId","data-v-01956349"]]);var bt=It;const St={class:"films__list"};var Ct={props:["showPreload","items"],setup(e){const t=C(),n=(0,l.f3)("emitter"),i=(0,T.iH)(!1);return n.on("isLoading",(e=>{i.value=e})),(0,l.bv)((()=>{t.hasFilmList=!0})),(0,l.Jd)((()=>{t.hasFilmList=!1})),(t,n)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,u.C_)(["films__wrap",{loading:i.value}])},[(0,l._)("ul",St,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.items,((e,t)=>((0,l.wg)(),(0,l.j4)(ht,{itemFilm:e,key:e.filmId||e.kinopoiskId,currentIndex:t},null,8,["itemFilm","currentIndex"])))),128)),e.showPreload?((0,l.wg)(),(0,l.j4)(bt,{key:0})):(0,l.kq)("",!0)])],2))}};const Pt=(0,N.Z)(Ct,[["__scopeId","data-v-001aba9c"]]);var Dt=Pt;const xt=e=>((0,l.dD)("data-v-4b5bec86"),e=e(),(0,l.Cn)(),e),Lt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},Ht=xt((()=>(0,l._)("path",{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"},null,-1))),Ut=[Ht];function Mt(e,t){return(0,l.wg)(),(0,l.iD)("svg",Lt,Ut)}const Nt={},At=(0,N.Z)(Nt,[["render",Mt],["__scopeId","data-v-4b5bec86"]]);var Wt=At;const jt=e=>((0,l.dD)("data-v-d0a52dfc"),e=e(),(0,l.Cn)(),e),Tt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},qt=jt((()=>(0,l._)("path",{d:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"},null,-1))),Kt=[qt];function Et(e,t){return(0,l.wg)(),(0,l.iD)("svg",Tt,Kt)}const Zt={},Qt=(0,N.Z)(Zt,[["render",Et],["__scopeId","data-v-d0a52dfc"]]);var zt=Qt;const Vt={class:"pagination"},Ot=["onClick"];var Yt={props:["total"],setup(e){const t=e,n=C(),r=(0,l.f3)("emitter"),a=(0,l.Fl)((()=>n.pageNum)),o=e=>{let n=[];if(t.total>6){if(1===a.value)return[1,2,3,"...",e];if(a.value>1&&a.value<3)return[1,2,3,"...",e];if(3===a.value)return[1,2,3,4,"...",e];if(a.value>3&&a.value<e-2)return[1,"...",a.value-1,a.value,a.value+1,"...",e];if(a.value===e-2)return[1,"...",a.value-1,a.value,a.value+1,e];if(a.value===e-1)return[1,"...",a.value-1,a.value,e];if(a.value===e)return[1,"...",a.value-2,a.value-1,e]}else for(let t=1;t<=e;t++)n.push(t);return n},s=(e,i="")=>{if("..."===e)return;let a;a="prev"===i?n.pageNum-1:"next"===i?n.pageNum+1:"prevAll"===i?1:"nextAll"===i?t.total:e,n.pageNum=a,r.emit("clickPage",a)};return(r,a)=>((0,l.wg)(),(0,l.iD)("div",Vt,[(0,l._)("ul",null,[(0,l.wy)((0,l._)("li",{class:"pg first",onClick:a[0]||(a[0]=e=>s(null,"prevAll"))},[(0,l._)("span",null,[(0,l.Wm)(zt)])],512),[[i.F8,(0,T.SU)(n).pageNum>1]]),(0,l.wy)((0,l._)("li",{class:"pg prev",onClick:a[1]||(a[1]=e=>s(null,"prev"))},[(0,l._)("span",null,[(0,l.Wm)(Wt)])],512),[[i.F8,(0,T.SU)(n).pageNum>1]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o(e.total),(e=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("span",{class:(0,u.C_)({active:(0,T.SU)(n).pageNum===e}),onClick:t=>s(e)},(0,u.zw)(e),11,Ot)])))),128)),(0,l.wy)((0,l._)("li",{class:"pg next",onClick:a[2]||(a[2]=e=>s(null,"next"))},[(0,l._)("span",null,[(0,l.Wm)(Wt)])],512),[[i.F8,(0,T.SU)(n).pageNum<t.total]]),(0,l.wy)((0,l._)("li",{class:"pg last",onClick:a[3]||(a[3]=e=>s(null,"nextAll"))},[(0,l._)("span",null,[(0,l.Wm)(zt)])],512),[[i.F8,(0,T.SU)(n).pageNum<t.total]])])]))}};const Gt=(0,N.Z)(Yt,[["__scopeId","data-v-fe180af4"]]);var Rt=Gt,Bt={name:"MainList",components:{PaginationList:Rt,FIlmItem:Dt},setup(){const e=C(),t=(0,l.f3)("emitter"),n=(0,T.iH)([]),i=(0,T.iH)("TOP_100_POPULAR_FILMS"),r=(0,T.iH)(0),a=(0,T.iH)(!1);async function o(){return await v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/top",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"},params:{type:i.value,page:e.pageNum}})}async function s(i,s=""){"loading"===s&&t.emit("isLoading",!0),a.value="preload"===s,e.pageNum=i||e.pageNum;const l=await o();r.value=l.data?.pagesCount,"preload"===s?n.value=[...n.value,...l.data?.films]:(n.value=[],n.value=l.data?.films),a.value=!1,"loading"===s&&await(l.data?.films)&&t.emit("isLoading",!1)}function u(){s(e.pageNum+1,"preload")}function c(){s(e.pageNum,"loading")}return t.on("clickPage",c),(0,l.YP)((()=>n.value),(t=>{e.films=t})),(0,l.bv)((()=>{s(),e.currentFocusIndex=-1})),{films:n,showPreload:a,totalPages:r,filmStore:e,getListFilms:s,getMoreFilms:u}}};const $t=(0,N.Z)(Bt,[["render",Oe],["__scopeId","data-v-dabfe0b0"]]);var Jt=$t;const Xt=e=>((0,l.dD)("data-v-141a3b2c"),e=e(),(0,l.Cn)(),e),en=(0,l.Uk)("Назад"),tn={class:"film__wrap"},nn={class:"film__image"},rn=["src"],an={key:1,class:"film__rating"},on={class:"film__note"},sn={class:"film__btns"},ln={class:"film__description"},un=Xt((()=>(0,l._)("h3",null,"Описание:",-1))),cn={class:"film__genres"},mn=Xt((()=>(0,l._)("h3",null,"Жанры",-1))),pn=["onClick"],dn={key:0,class:"film__similar"},gn=Xt((()=>(0,l._)("h3",null,"Похожие фильмы",-1)));function vn(e,t,n,r,a,o){const s=(0,l.up)("IconLeftArrow"),c=(0,l.up)("FavoriteBtn"),m=(0,l.up)("FilmPageDialog"),p=(0,l.up)("FIlmItem"),d=(0,l.Q2)("title");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("button",{class:"back-to-list",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>r.goToList&&r.goToList(...e)),["prevent"]))},[(0,l.Wm)(s),en]),(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,[(0,l.Uk)((0,u.zw)(r.filmTitle),1)])),[[d]]),(0,l._)("div",tn,[(0,l._)("div",nn,[(0,l.Wm)(c,{class:"favorite",itemFilm:r.filmInfo},null,8,["itemFilm"]),r.filmInfo?.posterUrl?((0,l.wg)(),(0,l.iD)("img",{key:0,src:r.filmInfo?.posterUrl,alt:"filmTitle"},null,8,rn)):(0,l.kq)("",!0),r.filmRating?((0,l.wg)(),(0,l.iD)("span",an,(0,u.zw)(r.filmRating),1)):(0,l.kq)("",!0)]),(0,l._)("div",on,[(0,l._)("div",sn,[(0,l.Wm)(m,{itemFilm:r.filmInfo},null,8,["itemFilm"])]),(0,l._)("div",ln,[un,(0,l.Uk)(" "+(0,u.zw)(r.filmInfo.description),1)]),(0,l._)("div",cn,[mn,(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.filmInfo.genres,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("span",{onClick:t=>r.setGenre(e.genre)},(0,u.zw)(e.genre),9,pn)])))),128))])]),r.similars.length>0?((0,l.wg)(),(0,l.iD)("div",dn,[gn,(0,l.Wm)(p,{items:r.similars},null,8,["items"])])):(0,l.kq)("",!0)])])],64)}const fn={class:"left-arrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},hn=(0,l._)("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"},null,-1),wn=[hn];function _n(e,t){return(0,l.wg)(),(0,l.iD)("svg",fn,wn)}const yn={},kn=(0,N.Z)(yn,[["render",_n]]);var Fn=kn;const In={class:"tab-titles"};function bn(e,t,n,i,r,a){const o=(0,l.up)("FilmKinoBoxTab"),s=(0,l.up)("FilmPlayerClub"),c=(0,l.up)("FilmKinoTop");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("ul",In,[(0,l._)("li",{class:(0,u.C_)({selected:1===i.playerNum}),onClick:t[0]||(t[0]=e=>i.playerNum=1)},"Плеер 1",2),(0,l._)("li",{class:(0,u.C_)({selected:2===i.playerNum}),onClick:t[1]||(t[1]=e=>i.playerNum=2)},"Плеер 2",2),(0,l._)("li",{class:(0,u.C_)({selected:3===i.playerNum}),onClick:t[2]||(t[2]=e=>i.playerNum=3)},"Плеер 3 с vpn",2)]),1===i.playerNum?((0,l.wg)(),(0,l.j4)(o,{key:0})):(0,l.kq)("",!0),2===i.playerNum?((0,l.wg)(),(0,l.j4)(s,{key:1})):(0,l.kq)("",!0),3===i.playerNum?((0,l.wg)(),(0,l.j4)(c,{key:2})):(0,l.kq)("",!0)],64)}const Sn={class:"kinobox_player film__init",ref:"player_init_item"};function Cn(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",Sn,null,512)])}var Pn={name:"FilmKinoBoxTab",setup(){const e=C(),t=(0,_e.yj)(),n=(0,T.iH)(null);function i(n){e.setFilmPageId(t.params.id);let i=document.createElement("script");i.type="text/javascript",i.src="//kinobox.tv/kinobox.min.js",n.value.appendChild(i),setTimeout((()=>{new Kinobox(".kinobox_player",{search:{kinopoisk:t.params.id}}).init()}),1e3)}return(0,l.bv)((()=>{i(n)})),{player_init_item:n}}};const Dn=(0,N.Z)(Pn,[["render",Cn]]);var xn=Dn;const Ln=["src"];function Hn(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("iframe",{src:`//496622434375553.svetacdn.in/fcvcbl7auqJG?kp_id=${i.filmId}`,width:"100%",height:"495",allowfullscreen:""},null,8,Ln)])}var Un={name:"FilmPlayerClub",setup(){const e=(0,_e.yj)(),t=e.params.id;return{filmId:t}}};const Mn=(0,N.Z)(Un,[["render",Hn],["__scopeId","data-v-bed7f8a0"]]);var Nn=Mn;const An={class:"film__init",ref:"player_init_item"};function Wn(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",An,null,512)])}var jn={name:"FilmKinoTopTab",setup(){const e=(0,_e.yj)(),t=(0,T.iH)(null);function n(t){t.value.innerHTML="";let n=document.createElement("div");n.setAttribute("data-kinopoisk",e.params.id),n.setAttribute("id","kinoplayertop");let i=document.createElement("script");i.type="text/javascript",i.src="//kinoplayer.top/top.js",t.value.appendChild(n),t.value.appendChild(i),setTimeout((()=>{runKinoplayertop()}),500)}return(0,l.bv)((()=>{n(t)})),{player_init_item:t}}};const Tn=(0,N.Z)(jn,[["render",Wn]]);var qn=Tn,Kn={name:"FilmPageDialog",props:["itemFilm"],components:{FilmKinoTop:qn,FilmKinoBoxTab:xn,FilmPlayerClub:Nn},setup(){const e=C(),t=(0,T.iH)(1);return{filmStore:e,playerNum:t}}};const En=(0,N.Z)(Kn,[["render",bn],["__scopeId","data-v-0b0a1f24"]]);var Zn=En,Qn={name:"FilmPage",components:{FIlmItem:Dt,FilmPageDialog:Zn,FavoriteBtn:at,IconLeftArrow:Fn},setup(){const e=C(),t=(0,_e.yj)(),n=(0,_e.tv)(),i=(0,T.iH)([]),r=(0,T.iH)(""),a=(0,T.iH)([]),o=(0,T.iH)(r.value),s=(0,l.Fl)((()=>{const e=i.value?.rating||i.value?.ratingKinopoisk||i.value?.ratingImdb||null;return e?e.toFixed(1):e}));function u(){v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/"+t.params.id,{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{i.value=e.data,p()})).catch((()=>({data:[]})))}function c(){v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/"+t.params.id+"/similars",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{a.value=e.data?.items})).catch((()=>({data:[]})))}function m(){v().get("https://kinopoiskapiunofficial.tech/api/v2.1/films/"+t.params.id+"/sequels_and_prequels",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{a.value=[...e?.data,...a.value]})).catch((()=>({data:[]})))}function p(){r.value=i.value?.nameRu||i.value?.nameEn||i.value?.nameOriginal||"Без названия",r.value+=` (${i.value.year})`}function d(e){let t=JSON.parse(localStorage.getItem("genres")),i=t.filter((t=>t.genre===e))[0].id;window.scrollTo(0,0),n.push({name:"searchPage",query:{genres:i}})}const g=()=>{n.go(-1)};return(0,l.bv)((()=>{u(),c(),m()})),{filmTitle:r,filmInfo:i,similars:a,setGenre:d,title:o,goToList:g,IconLeftArrow:Fn,filmRating:s}}};const zn=(0,N.Z)(Qn,[["render",vn],["__scopeId","data-v-141a3b2c"]]);var Vn=zn;const On={key:0,ref:"observer",class:"observer"};function Yn(e,t,n,i,r,a){const o=(0,l.up)("PaginationList"),s=(0,l.up)("FIlmItem"),c=(0,l.Q2)("title"),m=(0,l.Q2)("intersection");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,[(0,l.Uk)((0,u.zw)(i.titlePage),1)])),[[c]]),(0,l.Wm)(o,{total:i.totalPages,onClickPage:i.getListFilms},null,8,["total","onClickPage"]),(0,l.Wm)(s,{items:i.films,showPreload:i.showPreload},null,8,["items","showPreload"]),(0,l.Wm)(o,{total:i.totalPages,onClickPage:i.getListFilms},null,8,["total","onClickPage"]),i.filmStore.pageNum<i.totalPages?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",On,null,512)),[[m,{getMoreFilms:i.getMoreFilms}]]):(0,l.kq)("",!0)],64)}var Gn={components:{FIlmItem:Dt,PaginationList:Rt},setup(){const e=(0,_e.yj)(),t=(0,T.iH)([]),n=(0,l.f3)("emitter"),i=C(),r=(0,T.iH)(0),a=(0,T.iH)(""),o=(0,T.iH)(!1),s=(0,l.Fl)((()=>e.query.q)),u=(0,l.Fl)((()=>e.query.genres));async function c(){return await v().get("https://kinopoiskapiunofficial.tech/api/v2.2/films",{headers:{"X-API-KEY":i.apiKey,"Content-Type":"application/json"},params:{keyword:i.searchQueryStore,genres:i.genreIdStore,page:i.pageNum}})}async function m(e=!1,n){if(await g(),i.pageNum=n||i.pageNum,i.genreIdStore||i.searchQueryStore||e){o.value=!0;const n=await c();r.value=n.data?.totalPages,e?t.value=[...t.value,...n.data?.items]:(t.value=[],t.value=n.data?.items),o.value=!1}}function p(){m(!0,i.pageNum+1)}function d(){m(!1,i.pageNum)}async function g(){let e=i.genreIdStore?await i.genreListStore.filter((e=>+e.id===+i.genreIdStore))[0].genre:null;i.searchQueryStore&&i.genreIdStore?a.value=`Поиск по слову "${i.searchQueryStore}", жанр "${e}"`:i.searchQueryStore&&!i.genreIdStore?a.value=`Поиск по слову "${i.searchQueryStore}"`:i.genreIdStore&&!i.searchQueryStore?a.value=`Поиск по жанру "${e}"`:a.value="Ничего не указано для поиска"}return n.on("clickPage",d),(0,l.bv)((async()=>{i.searchQueryStore=s.value,i.genreIdStore=u.value,await m(!1,1),n.on("searchSubmit",(()=>{m(!1,1)})),i.currentFocusIndex=-1})),{films:t,titlePage:a,filmStore:i,totalPages:r,showPreload:o,getListFilms:m,getMoreFilms:p}}};const Rn=(0,N.Z)(Gn,[["render",Yn]]);var Bn=Rn;const $n=e=>((0,l.dD)("data-v-4d7e4948"),e=e(),(0,l.Cn)(),e),Jn=$n((()=>(0,l._)("h1",null,"Страница не найдена",-1))),Xn=(0,l.Uk)("Перейти на "),ei=(0,l.Uk)("главную"),ti=$n((()=>(0,l._)("br",null,null,-1)));function ni(e,t){const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[Jn,(0,l._)("p",null,[Xn,(0,l.Wm)(n,{to:"/"},{default:(0,l.w5)((()=>[ei])),_:1})]),ti],64)}const ii={},ri=(0,N.Z)(ii,[["render",ni],["__scopeId","data-v-4d7e4948"]]);var ai=ri;const oi=e=>((0,l.dD)("data-v-0fdbbfa9"),e=e(),(0,l.Cn)(),e),si=oi((()=>(0,l._)("h1",null,"Избранные фильмы/мультики и тд",-1))),li={key:0};function ui(e,t,n,i,r,a){const o=(0,l.up)("FIlmItem");return(0,l.wg)(),(0,l.iD)(l.HY,null,[si,(0,l.Wm)(o,{items:i.filmStore.favorites,showPreload:i.showPreload},null,8,["items","showPreload"]),0===i.filmStore.favorites.length?((0,l.wg)(),(0,l.iD)("h3",li,"Список пуст")):(0,l.kq)("",!0)],64)}var ci={name:"FavoritePage",components:{FIlmItem:Dt},setup(){const e=C(),t=(0,T.iH)(!1);return(0,l.bv)((()=>{e.currentFocusIndex=-1,e.isKeyboardNavigator=!0})),(0,l.YP)((()=>e.favorites),(()=>{e.films=e.favorites})),{filmStore:e,showPreload:t}}};const mi=(0,N.Z)(ci,[["render",ui],["__scopeId","data-v-0fdbbfa9"]]);var pi=mi;const di=(0,_e.p7)({history:(0,_e.PO)("/hometv"),routes:[{path:"/",name:"home",component:Jt},{path:"/film/:id",name:"filmPage",component:Vn},{path:"/search",name:"searchPage",component:Bn},{path:"/favorites",name:"favorite",component:pi},{path:"/:pathMatch(.*)*",component:ai}]});var gi=di,vi=n(1373),fi=n(9907);(0,fi.z)("/hometv/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const hi=(0,vi.Z)(),wi=(0,i.ri)(Ze);wi.directive("intersection",a),wi.directive("title",s),wi.use((0,r.WB)()),wi.use(gi),wi.provide("emitter",hi),wi.mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,o=i[0],s=i[1],l=i[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(t&&t(i);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},i=self["webpackChunkhomefilmtv"]=self["webpackChunkhomefilmtv"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1497)}));i=n.O(i)})();
//# sourceMappingURL=app.3979724e.js.map