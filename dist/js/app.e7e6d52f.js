(function(){"use strict";var e={8871:function(e,t,n){var i=n(9242),r=n(3766),a={name:"intersection",mounted(e,t){const n={rootMargin:"0px",threshold:1},i=e=>{e[0].isIntersecting&&t.value.getMoreFilms()},r=new IntersectionObserver(i,n);r.observe(e)}};const o=function(e){document.title=e};var s={mounted:(e,t)=>o(t.value||e.innerText),beforeUpdate:(e,t)=>o(t.value||e.innerText),updated:(e,t)=>o(t.value||e.innerText)},l=n(3396);const u={class:"wrapper"};function c(e,t,n,i,r,a){const o=(0,l.up)("HeaderFilm"),s=(0,l.up)("GenreList"),c=(0,l.up)("RouterView"),m=(0,l.up)("ToTop");return(0,l.wg)(),(0,l.iD)("div",u,[((0,l.wg)(),(0,l.j4)(o,{key:e.$route.fullPath})),(0,l.Wm)(s),((0,l.wg)(),(0,l.j4)(c,{key:e.$route.fullPath})),(0,l.Wm)(m)])}var m=n(7139);const p=e=>((0,l.dD)("data-v-2712f0af"),e=e(),(0,l.Cn)(),e),d=p((()=>(0,l._)("button",{type:"submit"},"Найти",-1)));function g(e,t,n,r,a,o){const s=(0,l.up)("RegistrationWrap");return(0,l.wg)(),(0,l.iD)("header",null,[(0,l._)("a",{class:"home",onClick:t[0]||(t[0]=t=>e.$router.push({name:"home"})),href:"#"},"Home"),(0,l._)("a",{href:"#",class:(0,m.C_)(["favorites",{disabled:!1===r.isUser}]),onClick:t[1]||(t[1]=t=>e.$router.push({name:"favorite"}))},(0,m.zw)(r.filmStore.favorites.length),3),(0,l._)("form",{action:"#",onSubmit:t[4]||(t[4]=(0,i.iM)(((...e)=>r.searchSubmit&&r.searchSubmit(...e)),["prevent"]))},[(0,l.wy)((0,l._)("input",{autocomplete:"off",type:"text",onKeyup:t[2]||(t[2]=(0,i.D2)(((...e)=>r.searchSubmit&&r.searchSubmit(...e)),["enter"])),placeholder:"Название фильма / ID КиноПоиск","onUpdate:modelValue":t[3]||(t[3]=e=>r.filmStore.searchQueryStore=e),name:"keyword"},null,544),[[i.nr,r.filmStore.searchQueryStore,void 0,{trim:!0}]]),d],32),(0,l.Wm)(s)])}var v=n(6265),f=n.n(v),h=n(4275),w=n(6035),_={apiKey:"AIzaSyDapqMH_oM7h6CDKM0laMGrLIlDVDyb_gY",authDomain:"hometv-c10f8.firebaseapp.com",projectId:"hometv-c10f8",storageBucket:"hometv-c10f8.appspot.com",messagingSenderId:"452296723769",appId:"1:452296723769:web:982a4288b9cf4e189bace8"};const y=(0,h.ZF)(_),k=(0,w.ad)(y);var F=n(8176);const I=async function(e){const t=(0,w.JU)(k,"users",e),n=await(0,w.QT)(t);return n.exists()?n.data():null},S=async function(e,t){await(0,w.pl)((0,w.JU)(k,"users",t),{name:e.user_name||"",email:e.email||"",favorites:[],api_key:e.api_key||""})},b=function(e){switch(e){case"auth/wrong-password":return"Неверный пароль";case"auth/internal-error":return"Неизвестная ошибка";case"auth/invalid-email":return"Недопустимый email";case"auth/user-not-found":return"Пользователь не найден";case"auth/weak-password":return"Пароль не менее 6 символов";default:return"Ошибка авторизации"}},C=["","для взрослых","мюзикл","спорт","церемония","фильм-нуар","биография","вестерн","короткометражка","документальный","документальный","реальное ТВ","ток-шоу","концерт","игра","новости"],D=(0,r.Q_)("filmStore",{state:()=>({user:null,apiKey:"404dc583-7efc-4c93-8f21-a782f977b9e7",auth:(0,F.v0)(),errorMessage:"",pageNum:1,limit:20,genreIdStore:null,genreListStore:[],searchQueryStore:"",filters:null,favorites:[]}),getters:{filterGenres(){if(!this.genreListStore.length)return[];this.genreListStore=this.genreListStore.filter((e=>{if(-1===C.indexOf(e.genre))return e}))}},actions:{setGenreId(e){console.log(this.genreIdStore),this.genreIdStore=e},async getGenreList(){return localStorage.getItem("genres")?(this.genreListStore=JSON.parse(localStorage.getItem("genres")),this.genreListStore):(await f().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/filters",{headers:{"X-API-KEY":this.apiKey,"Content-Type":"application/json"}}).then((e=>{this.filters=e.data,this.genreListStore=e.data.genres,this.filterGenres,localStorage.setItem("genres",JSON.stringify(this.genreListStore))})),this.genreListStore)},checkFavoriteStore(e){let t=this.isCheckFilm(!0,e);return!!t.length},async addFavorite(e){try{const t=(0,w.JU)(k,"users",this.user.uid);await(0,w.r7)(t,{favorites:[...this.favorites,e]})}catch(t){this.user?console.log("Ошибка добавления в избранное: "+t):console.log("Необходимо авторизоваться")}this.favorites=[...this.favorites,e]},async removeFavorite(e){let t=this.isCheckFilm(!1,e);try{const e=(0,w.JU)(k,"users",this.user.uid);await(0,w.r7)(e,{favorites:[...t]})}catch(n){this.user?console.log("Ошибка удаления из избранного: "+n):console.log("Необходимо авторизоваться")}this.favorites=[...t]},async authWithEmailAndPassword(e){await(0,F.e5)(this.auth,e.email,e.password).then((()=>{this.getUserData()})).catch((e=>{this.errorMessage=b(e.code)}))},async createAuthWithEmailAndPassword(e){await(0,F.Xb)(this.auth,e.email,e.password).then((async t=>{this.user=await t.user,await S(e,this.user.uid),await this.getUserData()})).catch((e=>{this.errorMessage=b(e.code)}))},async authLogout(){(0,F.w7)(this.auth).then((async()=>{this.removeUserData()})).catch((e=>{alert("Ошибка logout: "+e)}))},async authChange(e){(0,F.Aj)(this.auth,(async t=>{t?(this.user=t,this.getUserData(e)):this.removeUserData(e)}))},async getUserData(e){let t=await I(this.user.uid);this.user.name=t?.name||"",this.user.email=t?.email??"",this.favorites=t?.favorites??[],t?.api_key&&(this.apiKey=t.api_key),"function"===typeof e&&e()},removeUserData(e){this.user=null,this.favorites=[],"function"===typeof e&&e()},isCheckFilm(e,t){return this.favorites.filter((n=>{let i=n?.kinopoiskId??n?.filmId,r=t?.kinopoiskId??t?.filmId;return i===r&&e?n:i===r||e?void 0:n}))},searchQueryWithGenre(){let e={};return this.searchQueryStore&&(e.q=this.searchQueryStore),this.genreIdStore&&(e.genres=this.genreIdStore),e}}}),P={class:"registration-wrap"},H={key:0,class:"registration-wrap--pop"};function U(e,t,n,i,r,a){const o=(0,l.up)("IconUser"),s=(0,l.up)("LogoutComponent"),u=(0,l.up)("SignInComponent"),c=(0,l.up)("RegistrationComponent");return(0,l.wg)(),(0,l.iD)("div",P,[(0,l.Wm)(o,{onClick:i.togglePop},null,8,["onClick"]),i.isVisible?((0,l.wg)(),(0,l.iD)("div",H,[i.filmStore.user?((0,l.wg)(),(0,l.j4)(s,{key:0,onSetForm:i.setForm},null,8,["onSetForm"])):"sign"===i.formView?((0,l.wg)(),(0,l.j4)(u,{key:1,onSetForm:i.setForm},null,8,["onSetForm"])):"reg"===i.formView?((0,l.wg)(),(0,l.j4)(c,{key:2,onSetForm:i.setForm},null,8,["onSetForm"])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])}const L={class:"icon icon-user"},M=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},[(0,l._)("path",{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"})],-1),j=[M];function T(e,t){return(0,l.wg)(),(0,l.iD)("span",L,j)}var N=n(89);const W={},q=(0,N.Z)(W,[["render",T]]);var Z=q,A=n(4870);const K=e=>((0,l.dD)("data-v-4909460b"),e=e(),(0,l.Cn)(),e),Q={class:"registration--form"},x=K((()=>(0,l._)("h3",null,"Регистрация",-1))),G=K((()=>(0,l._)("small",null,[(0,l._)("a",{href:"https://kinopoiskapiunofficial.tech/signup"},"зарегистрироваться")],-1))),Y={key:0,class:"err-string"},O={class:"btns"};function z(e,t,n,r,a,o){const s=(0,l.up)("IconGoogle");return(0,l.wg)(),(0,l.iD)("div",Q,[x,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[i.nr,r.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[1]||(t[1]=e=>r.user_name=e)},null,512),[[i.nr,r.user_name]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Api key","onUpdate:modelValue":t[2]||(t[2]=e=>r.api_key=e)},null,512),[[i.nr,r.api_key]]),G]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=e=>r.password=e)},null,512),[[i.nr,r.password]])]),r.filmStore.errorMessage?((0,l.wg)(),(0,l.iD)("p",Y,(0,m.zw)(r.filmStore.errorMessage),1)):(0,l.kq)("",!0),(0,l._)("div",O,[(0,l._)("button",{class:"reg",onClick:t[4]||(t[4]=(0,i.iM)(((...e)=>r.register&&r.register(...e)),["prevent"]))},"Регистрация"),(0,l._)("button",{class:"sign",onClick:t[5]||(t[5]=(0,i.iM)(((...e)=>r.setFormView&&r.setFormView(...e)),["prevent"]))},"Войти"),(0,l.Wm)(s,{onClick:r.signWithGoogle},null,8,["onClick"])])])}const E={class:"icon-google"};function V(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("span",E)}var R={name:"IconGoogle"};const $=(0,N.Z)(R,[["render",V],["__scopeId","data-v-103616a1"]]);var B=$,J={name:"RegistrationComponent",components:{IconGoogle:B},setup(e,{emit:t}){const n=D(),i=(0,A.iH)(""),r=(0,A.iH)(""),a=(0,A.iH)(""),o=(0,A.iH)("");async function s(){await n.createAuthWithEmailAndPassword({email:i.value,password:r.value,user_name:a.value,api_key:o.value})}function l(){t("setForm","sign")}function u(){console.log("ok")}return{email:i,user_name:a,password:r,api_key:o,filmStore:n,register:s,signWithGoogle:u,setFormView:l}}};const X=(0,N.Z)(J,[["render",z],["__scopeId","data-v-4909460b"]]);var ee=X;const te=e=>((0,l.dD)("data-v-105d9081"),e=e(),(0,l.Cn)(),e),ne={class:"registration--form"},ie=te((()=>(0,l._)("h3",{class:"name"},"Авторизация",-1))),re={key:0,class:"err-string"},ae={class:"btns"};function oe(e,t,n,r,a,o){return(0,l.wg)(),(0,l.iD)("div",ne,[ie,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[i.nr,r.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e)},null,512),[[i.nr,r.password]])]),r.filmStore.errorMessage?((0,l.wg)(),(0,l.iD)("p",re,(0,m.zw)(r.filmStore.errorMessage),1)):(0,l.kq)("",!0),(0,l._)("div",ae,[(0,l._)("button",{class:"sign",onClick:t[2]||(t[2]=(0,i.iM)(((...e)=>r.signIn&&r.signIn(...e)),["prevent"]))},"Войти"),(0,l._)("button",{class:"reg",onClick:t[3]||(t[3]=(0,i.iM)(((...e)=>r.setFormView&&r.setFormView(...e)),["prevent"]))},"Регистрация")])])}var se={name:"SignInComponent",setup(e,{emit:t}){const n=(0,A.iH)(""),i=(0,A.iH)(""),r=(0,A.iH)(""),a=D();async function o(){await a.authWithEmailAndPassword({email:n.value,password:i.value})}function s(){t("setForm","reg")}return{email:n,password:i,errMsg:r,signIn:o,setFormView:s,filmStore:a}}};const le=(0,N.Z)(se,[["render",oe],["__scopeId","data-v-105d9081"]]);var ue=le;const ce={class:"registration--form"},me=(0,l.Uk)("Вы вошли как: "),pe={class:"btns"};function de(e,t,n,r,a,o){return(0,l.wg)(),(0,l.iD)("div",ce,[(0,l._)("h3",null,[me,(0,l._)("strong",null,(0,m.zw)(r.filmStore.user.name),1)]),(0,l._)("div",pe,[(0,l._)("button",{class:"reg",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>r.logout&&r.logout(...e)),["prevent"]))},"Выйти")])])}var ge={name:"LogoutComponent",setup(){const e=D();async function t(){await e.authLogout()}return{logout:t,filmStore:e}}};const ve=(0,N.Z)(ge,[["render",de]]);var fe=ve,he={name:"RegistrationWrap",components:{IconUser:Z,RegistrationComponent:ee,SignInComponent:ue,LogoutComponent:fe},setup(){const e=D(),t=(0,A.iH)(!1),n=(0,A.iH)("sign"),i=(0,l.f3)("emitter");function r(){t.value=!t.value}function a(t){e.errorMessage="",n.value=t}function o(){i.emit("setUserData")}return(0,l.bv)((async()=>{await e.authChange(o),await i.emit("setUserData")})),{isVisible:t,setForm:a,togglePop:r,formView:n,filmStore:e}}};const we=(0,N.Z)(he,[["render",U],["__scopeId","data-v-a4303992"]]);var _e=we,ye=n(678),ke={components:{RegistrationWrap:_e},setup(){const e=(0,ye.yj)(),t=(0,ye.tv)(),n=D(),i=(0,l.Fl)((()=>null!==n.user)),r=(0,l.Fl)((()=>e.query.q));function a(){n.pageNum=1,t.push({name:"searchPage",query:n.searchQueryWithGenre()})}return(0,l.bv)((()=>{n.searchQueryStore=r.value})),{searchSubmit:a,filmStore:n,isUser:i}}};const Fe=(0,N.Z)(ke,[["render",g],["__scopeId","data-v-2712f0af"]]);var Ie=Fe;const Se={class:"genres-wrap"},be={class:"genres"},Ce=["onClick"];function De(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",Se,[(0,l._)("ul",be,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filmStore.genreListStore,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,m.C_)({active:+e.id===+i.filmStore.genreIdStore}),key:e.id},[(0,l._)("span",{onClick:t=>i.setGenre(e.id)},(0,m.zw)(e.genre),9,Ce)],2)))),128))])])}var Pe={name:"GenreList",setup(){const e=(0,ye.yj)(),t=(0,ye.tv)(),n=D(),i=(0,l.Fl)((()=>e.query.genres)),r=e=>{+n.genreIdStore===+e?n.genreIdStore=null:n.genreIdStore=e,n.pageNum=1,t.push({name:"searchPage",query:n.searchQueryWithGenre()})};async function a(){await n.getGenreList()}return(0,l.bv)((async()=>{n.genreIdStore=i.value,await a()})),{filmStore:n,setGenre:r,routeGenre:i}}};const He=(0,N.Z)(Pe,[["render",De],["__scopeId","data-v-71d9fdca"]]);var Ue=He;function Le(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",{class:"event__top",onClick:t[0]||(t[0]=(...e)=>i.eventTop&&i.eventTop(...e))})}var Me={setup(){function e(){window.scrollTo({top:0,behavior:"smooth"})}return{eventTop:e}}};const je=(0,N.Z)(Me,[["render",Le],["__scopeId","data-v-93d00da6"]]);var Te=je,Ne={components:{HeaderFilm:Ie,GenreList:Ue,ToTop:Te}};const We=(0,N.Z)(Ne,[["render",c]]);var qe=We;const Ze=(0,l.Uk)("Список последних новинок"),Ae=[Ze],Ke={key:0,ref:"observer",class:"observer"};function Qe(e,t,n,i,r,a){const o=(0,l.up)("PaginationList"),s=(0,l.up)("FIlmItem"),u=(0,l.Q2)("title"),c=(0,l.Q2)("intersection");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,Ae)),[[u]]),(0,l.Wm)(o,{total:i.totalPages},null,8,["total"]),(0,l.Wm)(s,{items:i.films,showPreload:i.showPreload},null,8,["items","showPreload"]),(0,l.Wm)(o,{total:i.totalPages},null,8,["total"]),i.filmStore.pageNum<i.totalPages?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",Ke,null,512)),[[c,{getMoreFilms:i.getMoreFilms}]]):(0,l.kq)("",!0)],64)}const xe={class:"films__wrap"},Ge={class:"films__list"};function Ye(e,t,n,i,r,a){const o=(0,l.up)("FilmItemItem"),s=(0,l.up)("PreloadCards");return(0,l.wg)(),(0,l.iD)("div",xe,[(0,l._)("ul",Ge,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.items,(e=>((0,l.wg)(),(0,l.j4)(o,{itemFilm:e,key:e},null,8,["itemFilm"])))),128)),n.showPreload?((0,l.wg)(),(0,l.j4)(s,{key:0})):(0,l.kq)("",!0)])])}const Oe=e=>((0,l.dD)("data-v-3e126046"),e=e(),(0,l.Cn)(),e),ze={class:"films__item"},Ee={class:"item__image"},Ve=Oe((()=>(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"360",height:"540"},null,-1))),Re=["src","alt"],$e={key:0,class:"item__rating"},Be={class:"item__options"},Je={class:"name"},Xe={key:0,class:"year"};function et(e,t,n,i,r,a){const o=(0,l.up)("FavoriteBtn");return(0,l.wg)(),(0,l.iD)("li",ze,[(0,l._)("a",{href:"#",class:"item__link",onClick:t[0]||(t[0]=t=>e.$router.push(`/film/${n.itemFilm.filmId||n.itemFilm.kinopoiskId}`))}),(0,l.Wm)(o,{class:"favorite",itemFilm:n.itemFilm},null,8,["itemFilm"]),(0,l._)("div",Ee,[Ve,(0,l._)("img",{src:n.itemFilm.posterUrlPreview,alt:n.itemFilm.nameRu},null,8,Re)]),"null"!==n.itemFilm.rating&&void 0!==n.itemFilm.rating?((0,l.wg)(),(0,l.iD)("span",$e,(0,m.zw)("null"===n.itemFilm.rating?"нет":n.itemFilm.rating),1)):(0,l.kq)("",!0),(0,l._)("div",Be,[(0,l._)("ul",null,[(0,l._)("li",Je,(0,m.zw)(n.itemFilm?.nameRu||n.itemFilm?.nameEn||n.itemFilm?.nameOriginal||"Без названия"),1),n.itemFilm.year?((0,l.wg)(),(0,l.iD)("li",Xe,(0,m.zw)(n.itemFilm.year)+" г.",1)):(0,l.kq)("",!0)])])])}const tt={class:"favorite-icon"},nt={key:0,class:"loading-round"};function it(e,t,n,r,a,o){const s=(0,l.up)("IconFavorite");return(0,l.wg)(),(0,l.iD)("span",tt,[r.isShow?((0,l.wg)(),(0,l.iD)("span",nt)):(0,l.kq)("",!0),(0,l.Wm)(s,{class:(0,m.C_)({active:r.isFavorite}),onClick:(0,i.iM)(r.toggleFavorite,["prevent"])},null,8,["class","onClick"])])}const rt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},at=(0,l._)("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},null,-1),ot=[at];function st(e,t){return(0,l.wg)(),(0,l.iD)("svg",rt,ot)}const lt={},ut=(0,N.Z)(lt,[["render",st]]);var ct=ut,mt={name:"FavoriteBtn",components:{IconFavorite:ct},props:["itemFilm"],setup(e){const t=(0,A.iH)(!1),n=(0,A.iH)(!1),i=(0,l.f3)("emitter"),r=D();function a(){t.value=r.checkFavoriteStore(e.itemFilm)}async function o(){r.user?(n.value=!0,t.value?(await r.removeFavorite(e.itemFilm),t.value=!1):(await r.addFavorite(e.itemFilm),t.value=!0),n.value=!1):alert("Необходима авторизация")}return(0,l.bv)((()=>{a()})),i.on("setUserData",a),{isFavorite:t,isShow:n,toggleFavorite:o}}};const pt=(0,N.Z)(mt,[["render",it],["__scopeId","data-v-d325ffc4"]]);var dt=pt,gt={name:"FilmItemItem",props:["itemFilm"],components:{FavoriteBtn:dt}};const vt=(0,N.Z)(gt,[["render",et],["__scopeId","data-v-3e126046"]]);var ft=vt;const ht=e=>((0,l.dD)("data-v-08f2e64b"),e=e(),(0,l.Cn)(),e),wt=ht((()=>(0,l._)("div",{class:"item__image"},[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"360",height:"540"})],-1))),_t=[wt];function yt(e,t){return(0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(20,(e=>(0,l._)("li",{class:"films__item preload-card",key:e},_t))),64)}const kt={},Ft=(0,N.Z)(kt,[["render",yt],["__scopeId","data-v-08f2e64b"]]);var It=Ft,St={components:{PreloadCards:It,FilmItemItem:ft},props:["items","showPreload"]};const bt=(0,N.Z)(St,[["render",Ye],["__scopeId","data-v-7e3a4b86"]]);var Ct=bt;const Dt={class:"pagination"},Pt=["onClick"];function Ht(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",Dt,[(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.total,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("span",{class:(0,m.C_)({active:i.filmStore.pageNum===e}),onClick:t=>i.emitPage(e)},(0,m.zw)(e),11,Pt)])))),128))])])}var Ut={props:["total"],setup(){const e=D(),t=(0,l.f3)("emitter");function n(n){e.pageNum=n,t.emit("clickPage",n)}return{emitPage:n,filmStore:e}}};const Lt=(0,N.Z)(Ut,[["render",Ht],["__scopeId","data-v-94d9e44a"]]);var Mt=Lt,jt={name:"MainList",components:{PaginationList:Mt,FIlmItem:Ct},setup(){const e=D(),t=(0,l.f3)("emitter"),n=(0,A.iH)([]),i=(0,A.iH)("TOP_100_POPULAR_FILMS"),r=(0,A.iH)(0),a=(0,A.iH)(!1);async function o(){return await f().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/top",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"},params:{type:i.value,page:e.pageNum}})}async function s(t=!1,i){a.value=!0,e.pageNum=i||e.pageNum;const s=await o();r.value=s.data?.pagesCount,t?n.value=[...n.value,...s.data?.films]:(n.value=[],n.value=s.data?.films),a.value=!1}function u(){s(!0,e.pageNum+1)}function c(){s(!1,e.pageNum)}return t.on("clickPage",c),(0,l.bv)((()=>{s()})),{films:n,showPreload:a,totalPages:r,filmStore:e,getListFilms:s,getMoreFilms:u}}};const Tt=(0,N.Z)(jt,[["render",Qe],["__scopeId","data-v-a28cd7d8"]]);var Nt=Tt;const Wt=e=>((0,l.dD)("data-v-d1c32872"),e=e(),(0,l.Cn)(),e),qt={class:"film__wrap"},Zt={class:"film__image"},At=["src"],Kt={class:"film__note"},Qt={class:"film__btns"},xt={class:"film__description"},Gt=Wt((()=>(0,l._)("h3",null,"Описание:",-1))),Yt={class:"film__genres"},Ot=Wt((()=>(0,l._)("h3",null,"Жанры",-1))),zt=["onClick"],Et={key:0,class:"film__similar"},Vt=Wt((()=>(0,l._)("h3",null,"Похожие фильмы",-1)));function Rt(e,t,n,i,r,a){const o=(0,l.up)("FavoriteBtn"),s=(0,l.up)("FilmPageDialog"),u=(0,l.up)("FIlmItem"),c=(0,l.Q2)("title");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,[(0,l.Uk)((0,m.zw)(i.filmTitle),1)])),[[c]]),(0,l._)("div",qt,[(0,l._)("div",Zt,[(0,l.Wm)(o,{class:"favorite",itemFilm:i.filmInfo},null,8,["itemFilm"]),i.filmInfo?.posterUrl?((0,l.wg)(),(0,l.iD)("img",{key:0,src:i.filmInfo?.posterUrl,alt:"filmTitle"},null,8,At)):(0,l.kq)("",!0)]),(0,l._)("div",Kt,[(0,l._)("div",Qt,[(0,l.Wm)(s,{itemFilm:i.filmInfo},null,8,["itemFilm"])]),(0,l._)("div",xt,[Gt,(0,l.Uk)(" "+(0,m.zw)(i.filmInfo.description),1)]),(0,l._)("div",Yt,[Ot,(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filmInfo.genres,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("span",{onClick:t=>i.setGenre(e.genre)},(0,m.zw)(e.genre),9,zt)])))),128))])]),i.similars.length>0?((0,l.wg)(),(0,l.iD)("div",Et,[Vt,(0,l.Wm)(u,{items:i.similars},null,8,["items"])])):(0,l.kq)("",!0)])])],64)}const $t={class:"tab-titles"};function Bt(e,t,n,i,r,a){const o=(0,l.up)("FilmYohohoTab"),s=(0,l.up)("FilmKinoTop");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("ul",$t,[(0,l._)("li",{class:(0,m.C_)({selected:1===i.playerNum}),onClick:t[0]||(t[0]=e=>i.playerNum=1)},"Плеер 1",2),(0,l._)("li",{class:(0,m.C_)({selected:2===i.playerNum}),onClick:t[1]||(t[1]=e=>i.playerNum=2)},"Плеер 2",2)]),1===i.playerNum?((0,l.wg)(),(0,l.j4)(o,{key:0})):(0,l.kq)("",!0),2===i.playerNum?((0,l.wg)(),(0,l.j4)(s,{key:1})):(0,l.kq)("",!0)],64)}const Jt={class:"film__init",ref:"player_init_item"};function Xt(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",Jt,null,512)])}var en={name:"FilmYohohoTab",setup(){const e=(0,ye.yj)(),t=(0,A.iH)(null);function n(t){let n=document.createElement("div");n.setAttribute("data-resize","1"),n.setAttribute("data-tv","1"),n.setAttribute("data-kinopoisk",e?.params?.id),n.setAttribute("id","yohoho");let i=document.createElement("script");i.type="text/javascript",i.src="//yohoho.cc/yo.js",t.value.appendChild(n),t.value.appendChild(i)}return(0,l.bv)((()=>{n(t)})),{player_init_item:t}}};const tn=(0,N.Z)(en,[["render",Xt]]);var nn=tn;const rn={class:"film__init",ref:"player_init_item"};function an(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",rn,null,512)])}var on={name:"FilmYohohoTab",setup(){const e=(0,ye.yj)(),t=(0,A.iH)(null);function n(t){t.value.innerHTML="";let n=document.createElement("div");n.setAttribute("data-kinopoisk",e.params.id),n.setAttribute("id","kinoplayertop");let i=document.createElement("script");i.type="text/javascript",i.src="//kinoplayer.top/top.js",t.value.appendChild(n),t.value.appendChild(i),setTimeout((()=>{runKinoplayertop()}),500)}return(0,l.bv)((()=>{n(t)})),{player_init_item:t}}};const sn=(0,N.Z)(on,[["render",an]]);var ln=sn,un={name:"FilmPageDialog",props:["itemFilm"],components:{FilmYohohoTab:nn,FilmKinoTop:ln},setup(){const e=D(),t=(0,A.iH)(1);return{filmStore:e,playerNum:t}}};const cn=(0,N.Z)(un,[["render",Bt],["__scopeId","data-v-94379896"]]);var mn=cn,pn={name:"FilmPage",components:{FIlmItem:Ct,FilmPageDialog:mn,FavoriteBtn:dt},setup(){const e=D(),t=(0,ye.yj)(),n=(0,ye.tv)(),i=(0,A.iH)([]),r=(0,A.iH)(""),a=(0,A.iH)([]),o=(0,A.iH)(r.value);function s(){f().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/"+t.params.id,{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{i.value=e.data,m()})).catch((()=>({data:[]})))}function u(){f().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/"+t.params.id+"/similars",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{a.value=e.data?.items})).catch((()=>({data:[]})))}function c(){f().get("https://kinopoiskapiunofficial.tech/api/v2.1/films/"+t.params.id+"/sequels_and_prequels",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{a.value=[...e?.data,...a.value]})).catch((()=>({data:[]})))}function m(){r.value=i.value?.nameRu||i.value?.nameEn||i.value?.nameOriginal||"Без названия",r.value+=` (${i.value.year})`}function p(e){let t=JSON.parse(localStorage.getItem("genres")),i=t.filter((t=>t.genre===e))[0].id;window.scrollTo(0,0),n.push({name:"searchPage",query:{genres:i}})}return(0,l.bv)((()=>{s(),u(),c()})),{filmTitle:r,filmInfo:i,similars:a,setGenre:p,title:o}}};const dn=(0,N.Z)(pn,[["render",Rt],["__scopeId","data-v-d1c32872"]]);var gn=dn;const vn={key:0,ref:"observer",class:"observer"};function fn(e,t,n,i,r,a){const o=(0,l.up)("PaginationList"),s=(0,l.up)("FIlmItem"),u=(0,l.Q2)("title"),c=(0,l.Q2)("intersection");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,[(0,l.Uk)((0,m.zw)(i.titlePage),1)])),[[u]]),(0,l.Wm)(o,{total:i.totalPages,onClickPage:i.getListFilms},null,8,["total","onClickPage"]),(0,l.Wm)(s,{items:i.films,showPreload:i.showPreload},null,8,["items","showPreload"]),(0,l.Wm)(o,{total:i.totalPages,onClickPage:i.getListFilms},null,8,["total","onClickPage"]),i.filmStore.pageNum<i.totalPages?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",vn,null,512)),[[c,{getMoreFilms:i.getMoreFilms}]]):(0,l.kq)("",!0)],64)}var hn={components:{FIlmItem:Ct,PaginationList:Mt},setup(){const e=(0,ye.yj)(),t=(0,A.iH)([]),n=(0,l.f3)("emitter"),i=D(),r=(0,A.iH)(0),a=(0,A.iH)(""),o=(0,A.iH)(!1),s=(0,l.Fl)((()=>e.query.q)),u=(0,l.Fl)((()=>e.query.genres));async function c(){return await f().get("https://kinopoiskapiunofficial.tech/api/v2.2/films",{headers:{"X-API-KEY":i.apiKey,"Content-Type":"application/json"},params:{keyword:i.searchQueryStore,genres:i.genreIdStore,page:i.pageNum}})}async function m(e=!1,n){if(await g(),i.pageNum=n||i.pageNum,i.genreIdStore||i.searchQueryStore||e){o.value=!0;const n=await c();r.value=n.data?.totalPages,e?t.value=[...t.value,...n.data?.items]:(t.value=[],t.value=n.data?.items),o.value=!1}}function p(){m(!0,i.pageNum+1)}function d(){m(!1,i.pageNum)}async function g(){let e=i.genreIdStore?await i.genreListStore.filter((e=>+e.id===+i.genreIdStore))[0].genre:null;i.searchQueryStore&&i.genreIdStore?a.value=`Поиск по слову "${i.searchQueryStore}", жанр "${e}"`:i.searchQueryStore&&!i.genreIdStore?a.value=`Поиск по слову "${i.searchQueryStore}"`:i.genreIdStore&&!i.searchQueryStore?a.value=`Поиск по жанру "${e}"`:a.value="Ничего не указано для поиска"}return n.on("clickPage",d),(0,l.bv)((async()=>{i.searchQueryStore=s.value,i.genreIdStore=u.value,await m(!1,1),n.on("searchSubmit",(()=>{m(!1,1)}))})),{films:t,titlePage:a,filmStore:i,totalPages:r,showPreload:o,getListFilms:m,getMoreFilms:p}}};const wn=(0,N.Z)(hn,[["render",fn]]);var _n=wn;const yn=e=>((0,l.dD)("data-v-4d7e4948"),e=e(),(0,l.Cn)(),e),kn=yn((()=>(0,l._)("h1",null,"Страница не найдена",-1))),Fn=(0,l.Uk)("Перейти на "),In=(0,l.Uk)("главную"),Sn=yn((()=>(0,l._)("br",null,null,-1)));function bn(e,t){const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[kn,(0,l._)("p",null,[Fn,(0,l.Wm)(n,{to:"/"},{default:(0,l.w5)((()=>[In])),_:1})]),Sn],64)}const Cn={},Dn=(0,N.Z)(Cn,[["render",bn],["__scopeId","data-v-4d7e4948"]]);var Pn=Dn;const Hn=e=>((0,l.dD)("data-v-555573f0"),e=e(),(0,l.Cn)(),e),Un=Hn((()=>(0,l._)("h1",null,"Избранные фильмы/мультики и тд",-1))),Ln={key:0};function Mn(e,t,n,i,r,a){const o=(0,l.up)("FIlmItem");return(0,l.wg)(),(0,l.iD)(l.HY,null,[Un,(0,l.Wm)(o,{items:i.filmStore.favorites,showPreload:i.showPreload},null,8,["items","showPreload"]),0===i.filmStore.favorites.length?((0,l.wg)(),(0,l.iD)("h3",Ln,"Список пуст")):(0,l.kq)("",!0)],64)}var jn={name:"FavoritePage",components:{FIlmItem:Ct},setup(){const e=D(),t=(0,A.iH)(!1);return{filmStore:e,showPreload:t}}};const Tn=(0,N.Z)(jn,[["render",Mn],["__scopeId","data-v-555573f0"]]);var Nn=Tn;const Wn=(0,ye.p7)({history:(0,ye.PO)("/hometv"),routes:[{path:"/",name:"home",component:Nt},{path:"/film/:id",name:"filmName",component:gn},{path:"/search",name:"searchPage",component:_n},{path:"/favorites",name:"favorite",component:Nn},{path:"/:pathMatch(.*)*",component:Pn}]});var qn=Wn,Zn=n(1373),An=n(9907);(0,An.z)("/hometv/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const Kn=(0,Zn.Z)(),Qn=(0,i.ri)(qe);Qn.directive("intersection",a),Qn.directive("title",s),Qn.use((0,r.WB)()),Qn.use(qn),Qn.provide("emitter",Kn),Qn.mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,o=i[0],s=i[1],l=i[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(t&&t(i);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},i=self["webpackChunkhomefilmtv"]=self["webpackChunkhomefilmtv"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8871)}));i=n.O(i)})();
//# sourceMappingURL=app.e7e6d52f.js.map