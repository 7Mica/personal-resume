(self.webpackChunkpersonal_resume=self.webpackChunkpersonal_resume||[]).push([["src_app_pages_pages_module_ts"],{580:(e,t,n)=>{"use strict";n.d(t,{_:()=>a});var r=n(8512),o=n(7368);let a=(()=>{class e{constructor(){this.isEditable=new r.X({editable:!1})}tellMeIfEditable(){return this.isEditable.asObservable()}announceIfEditable(e){this.isEditable.next(e)}removeEditable(){this.isEditable.next({editable:!1})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},3790:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PagesModule:()=>te});var r=n(6179),o=n(7570),a=n(7368),i=n(6019),s=n(4376);const c={name:"primary-theme",properties:{"--primary-color-c":"#e48257","--secondary-color-c":"#3a6351","--speedy-color-c":"#393232","--quiet-color-c":"#f2edd7","--btn-secondary-hover-c":"#3a6351a2","--primary-color-rgb":"228, 130, 87","--secondary-color-rgb":"58, 99, 81","--speedy-color-rgb":"57, 50, 50","--quiet-color-rgb":"242, 237, 215","--btn-secondary-hover-rgb":"58, 99, 79"}},l={name:"secondary-theme",properties:{"--primary-color-c":"#fed049","--secondary-color-c":"#007580","--speedy-color-c":"#282846","--quiet-color-c":"#d8ebe4","--btn-secondary-hover-c":"#0199a7","--primary-color-rgb":"254, 208, 73","--secondary-color-rgb":"0, 117, 128","--speedy-color-rgb":"40, 40, 70","--quiet-color-rgb":"216, 235, 228","--btn-secondary-hover-rgb":"1, 153, 167"}},d={name:"tertiary-theme",properties:{"--primary-color-c":"#008891","--secondary-color-c":"#00587a","--speedy-color-c":"#0f3057","--quiet-color-c":"#e7e7de","--btn-secondary-hover-c":"#00577a9a","--primary-color-rgb":"0, 136, 145","--secondary-color-rgb":"0, 88, 122","--speedy-color-rgb":"15, 48, 87","--quiet-color-rgb":"231, 231, 222","--btn-secondary-hover-rgb":"0, 87, 119"}};let m=(()=>{class e{constructor(e){this.localStorageService=e,this.active=c,this.availableThemes=[c,l,d],this.themeChanged$=new i.t}getAvailableThemes(){return this.availableThemes}themeValueChanged(){return this.themeChanged$.asObservable()}getActiveTheme(){return this.active}setPrimaryTheme(){this.setActiveTheme(c),this.localStorageService.setValue("themeConfig","primary-theme"),this.themeChanged$.next(c)}setSecondaryTheme(){this.setActiveTheme(l),this.localStorageService.setValue("themeConfig","secondary-theme"),this.themeChanged$.next(l)}setTertiaryTheme(){this.setActiveTheme(d),this.localStorageService.setValue("themeConfig","tertiary-theme"),this.themeChanged$.next(d)}setActiveTheme(e){this.active=e,Object.keys(this.active.properties).forEach(e=>{document.documentElement.style.setProperty(e,this.active.properties[e])})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(s.n))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(e,t,n,r){this.elementRef=e,this.renderer=t,this.themeService=n,this.localStorageService=r,this.themeChangedSubscription=new o.w}ngOnInit(){switch(this.themeChangedSubscription=this.themeService.themeValueChanged().subscribe(e=>this.switchTheme(e)),this.localStorageService.getValue("themeConfig")){case"primary-theme":this.themeService.setPrimaryTheme();break;case"secondary-theme":this.themeService.setSecondaryTheme();break;case"tertiary-theme":this.themeService.setTertiaryTheme();break;default:this.themeService.setPrimaryTheme()}}ngOnDestroy(){this.themeChangedSubscription.unsubscribe()}switchTheme(e){switch(e.name){case"primary-theme":this.renderer.removeClass(this.elementRef.nativeElement,"secondary-theme"),this.renderer.removeClass(this.elementRef.nativeElement,"tertiary-theme"),this.renderer.addClass(this.elementRef.nativeElement,"primary-theme");break;case"secondary-theme":this.renderer.removeClass(this.elementRef.nativeElement,"primary-theme"),this.renderer.removeClass(this.elementRef.nativeElement,"tertiary-theme"),this.renderer.addClass(this.elementRef.nativeElement,"secondary-theme");break;case"tertiary-theme":this.renderer.removeClass(this.elementRef.nativeElement,"secondary-theme"),this.renderer.removeClass(this.elementRef.nativeElement,"primary-theme"),this.renderer.addClass(this.elementRef.nativeElement,"tertiary-theme")}}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq),a.Y36(a.Qsj),a.Y36(m),a.Y36(s.n))},e.\u0275dir=a.lG2({type:e,selectors:[["","themeColor",""]]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({}),e})();var g=n(1116),p=n(3835),f=n(1462),_=n(7378);const b=e=>{const t=e.get("newPassword"),n=e.get("repeatPassword");return t&&n&&t.value!==n.value?{notMatch:!0}:null};var y=n(5222),v=n(4049),Z=n(1692),C=n(6414);let w=(()=>{class e{constructor(e,t,n){this.formBuilder=e,this.apolloProvider=t,this.matDialogRef=n,this.apolloBase=this.apolloProvider.use(_.x.MAIN),this.updatePasswordForm=e.group({oldPassword:["",[f.kI.required]],newPassword:["",[f.kI.required,f.kI.minLength(8)]],repeatPassword:["",[f.kI.required,f.kI.minLength(8)]]},{validators:b})}submitUpdatePasswordForm(){if(this.updatePasswordForm.invalid)return;const{oldPassword:e,newPassword:t,repeatPassword:n}=this.updatePasswordForm.value;this.apolloBase.mutate({mutation:y.D3,variables:{oldPassword:e,newPassword:t,repeatPassword:n}}).subscribe(e=>{this.matDialogRef.close()},e=>{console.log("There was an error sending the query",e)})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(f.qu),a.Y36(v._M),a.Y36(Z.so))},e.\u0275cmp=a.Xpm({type:e,selectors:[["update-user-password"]],decls:26,vars:7,consts:[[1,"update-user-password-modal"],[1,"modal-header-actions"],["type","button","tabindex","-1",1,"btn","btn-icon",3,"click"],[1,"update-user-password-modal__wrapper"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","old-password"],["focus","","type","password","id","old-password","formControlName","oldPassword",1,"form-control"],[3,"isTouched","controlErrors"],["for","new-password"],["type","password","id","new-password","formControlName","newPassword",1,"form-control"],["for","repeat-password"],["type","password","id","repeat-password","formControlName","repeatPassword",1,"form-control"],[1,"modal-action-buttons"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary"]],template:function(e,t){if(1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"button",2),a.NdJ("click",function(){return t.matDialogRef.close()}),a._uU(3," \xd7 "),a.qZA(),a.qZA(),a.TgZ(4,"div",3),a.TgZ(5,"form",4),a.NdJ("ngSubmit",function(){return t.submitUpdatePasswordForm()}),a.TgZ(6,"div",5),a.TgZ(7,"label",6),a._uU(8,"Old password"),a.qZA(),a._UZ(9,"input",7),a._UZ(10,"validator",8),a.qZA(),a.TgZ(11,"div",5),a.TgZ(12,"label",9),a._uU(13,"New password"),a.qZA(),a._UZ(14,"input",10),a._UZ(15,"validator",8),a.qZA(),a.TgZ(16,"div",5),a.TgZ(17,"label",11),a._uU(18,"Repeat new password"),a.qZA(),a._UZ(19,"input",12),a._UZ(20,"validator",8),a.qZA(),a.TgZ(21,"div",13),a.TgZ(22,"button",14),a.NdJ("click",function(){return t.matDialogRef.close()}),a._uU(23," Cancel "),a.qZA(),a.TgZ(24,"button",15),a._uU(25,"Confirm"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e){let e,n,r,o,i;a.xp6(5),a.Q6J("formGroup",t.updatePasswordForm),a.xp6(5),a.Q6J("isTouched",null==(e=t.updatePasswordForm.get("oldPassword"))?null:e.touched)("controlErrors",null==(n=t.updatePasswordForm.get("oldPassword"))?null:n.errors),a.xp6(5),a.Q6J("isTouched",null==(r=t.updatePasswordForm.get("newPassword"))?null:r.touched)("controlErrors",null==(o=t.updatePasswordForm.get("newPassword"))?null:o.errors),a.xp6(5),a.Q6J("isTouched",null==(i=t.updatePasswordForm.get("repeatPassword"))?null:i.touched)("controlErrors",null==t.updatePasswordForm?null:t.updatePasswordForm.errors)}},directives:[f._Y,f.JL,f.sg,f.Fj,f.JJ,f.u,C.n],styles:[".update-user-password-modal[_ngcontent-%COMP%]   .modal-header-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.update-user-password-modal[_ngcontent-%COMP%]   .modal-header-actions[_ngcontent-%COMP%] + .update-user-password-modal__wrapper[_ngcontent-%COMP%]{margin-top:10px}"]}),e})();var P=n(580),x=n(9777);function M(e,t){if(1&e&&(a.TgZ(0,"li",4),a.TgZ(1,"span",7),a._uU(2),a.qZA(),a.qZA()),2&e){const e=a.oxw().ngIf;a.xp6(2),a.hij(" ",e.email," ")}}function q(e,t){if(1&e&&(a.ynx(0),a.YNc(1,M,3,1,"li",6),a.BQk()),2&e){const e=t.ngIf;a.xp6(1),a.Q6J("ngIf",e)}}function T(e,t){if(1&e&&(a.TgZ(0,"li",4),a.TgZ(1,"a",8),a._uU(2," Edit Page "),a.qZA(),a.qZA()),2&e){const e=a.oxw().ngIf;a.xp6(1),a.Q6J("routerLink",e.editionPage)}}function k(e,t){if(1&e&&(a.ynx(0),a.YNc(1,T,3,1,"li",6),a.BQk()),2&e){const e=t.ngIf;a.xp6(1),a.Q6J("ngIf",e.editable)}}function O(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div",2),a.TgZ(1,"ul",3),a.YNc(2,q,2,1,"ng-container",0),a.ALo(3,"async"),a.YNc(4,k,2,1,"ng-container",0),a.ALo(5,"async"),a.TgZ(6,"li",4),a.TgZ(7,"a",5),a.NdJ("click",function(){return a.CHM(e),a.oxw(2).updatePassword()}),a._uU(8," Update Password "),a.qZA(),a.qZA(),a.TgZ(9,"li",4),a.TgZ(10,"a",5),a.NdJ("click",function(){return a.CHM(e),a.oxw(2).closeSession()}),a._uU(11," Close session "),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=a.oxw(2);a.xp6(2),a.Q6J("ngIf",a.lcZ(3,2,e.accountInformation$)),a.xp6(2),a.Q6J("ngIf",a.lcZ(5,4,e.editablePageStatus$))}}function A(e,t){if(1&e&&(a.ynx(0),a.YNc(1,O,12,6,"div",1),a.BQk()),2&e){const e=t.ngIf;a.xp6(1),a.Q6J("ngIf",e.isSignedIn)}}let S=(()=>{class e{constructor(e,t,n,o){this.editablePage=e,this.router=t,this.accountService=n,this.matDialog=o,this.routeChanged$=this.router.events.pipe((0,p.h)(e=>e instanceof r.m2)).subscribe(()=>{this.editablePage.removeEditable()}),this.signedStatus$=this.accountService.observeSignedInStatus(),this.accountInformation$=this.accountService.observeAccountInformation(),this.editablePageStatus$=this.editablePage.tellMeIfEditable()}ngOnDestroy(){this.routeChanged$.unsubscribe()}closeSession(){this.accountService.signOut()}updatePassword(){this.matDialog.open(w,{width:"100%",maxWidth:"480px"})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(P._),a.Y36(r.F0),a.Y36(x.B),a.Y36(Z.uw))},e.\u0275cmp=a.Xpm({type:e,selectors:[["tool-bar"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","tool-bar",4,"ngIf"],[1,"tool-bar"],[1,"tool-bar-items"],[1,"tool-bar-item"],[3,"click"],["class","tool-bar-item",4,"ngIf"],[1,"email-account"],[3,"routerLink"]],template:function(e,t){1&e&&(a.YNc(0,A,2,1,"ng-container",0),a.ALo(1,"async")),2&e&&a.Q6J("ngIf",a.lcZ(1,1,t.signedStatus$))},directives:[g.O5,r.yS],pipes:[g.Ov],styles:["[_ngcontent-%COMP%]:root{--primary-color-c:#e48257;--secondary-color-c:#3a6351;--speedy-color-c:#393232;--quiet-color-c:#f2edd7;--btn-secondary-hover-c:#3a6351a2;--primary-color-rgb:228,130,87;--secondary-color-rgb:58,99,81;--speedy-color-rgb:57,50,50;--quiet-color-rgb:242,237,215;--btn-secondary-hover-rgb:58,99,79}.tool-bar[_ngcontent-%COMP%]{position:fixed;top:60vh;right:0;z-index:20;background:var(--primary-color-c);border-top-left-radius:10px;border-bottom-left-radius:10px;box-shadow:0 1px 7px -1px #0006}.tool-bar-items[_ngcontent-%COMP%]{list-style:none;padding:5px 20px;margin:auto}.tool-bar-item[_ngcontent-%COMP%]{cursor:pointer}.tool-bar-item[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #c2bdbdb3}.tool-bar-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--secondary-color-c);font-weight:400}.tool-bar-item[_ngcontent-%COMP%]   .email-account[_ngcontent-%COMP%]{color:var(--speedy-color-c)}"]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[g.ez,r.Bz]]}),e})();var U=n(265),Y=n(7894),E=n(709),J=n(1082);let Q=(()=>{class e{constructor(e,t){this.elem=e,this.renderer=t}onScroll(){const e=this.elem.nativeElement.getBoundingClientRect();this.elem.nativeElement.querySelector(".header__menu.menu-opened")||(window.pageYOffset>e.height?this.renderer.addClass(this.elem.nativeElement,"opacity-0"):this.renderer.removeClass(this.elem.nativeElement,"opacity-0"),window.pageYOffset>window.innerHeight/2&&(this.renderer.removeClass(this.elem.nativeElement,"opacity-0"),this.renderer.addClass(this.elem.nativeElement,"fixed-nav-menu")),window.pageYOffset<window.innerHeight/6&&this.renderer.removeClass(this.elem.nativeElement,"fixed-nav-menu"),window.pageYOffset>window.innerHeight/3&&window.pageYOffset<window.innerHeight/2&&(this.renderer.removeClass(this.elem.nativeElement,"opacity-0"),this.renderer.addClass(this.elem.nativeElement,"opacity-0")))}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq),a.Y36(a.Qsj))},e.\u0275dir=a.lG2({type:e,selectors:[["","fixedHeader",""]],hostBindings:function(e,t){1&e&&a.NdJ("scroll",function(e){return t.onScroll(e)},!1,a.Jf7)}}),e})(),B=(()=>{class e{constructor(e,t){this.elemRef=e,this.renderer=t}clickHandler(){const e=this.parent.querySelector("ul.header__menu"),t=this.parent.querySelector("button.header__btn-burguer"),n=t.querySelector("i");this.renderer.removeClass(e,"menu-opened"),this.renderer.removeClass(t,"fixed-bottom-button"),this.renderer.removeClass(n,"bi-x-circle"),this.renderer.addClass(n,"bi-list")}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq),a.Y36(a.Qsj))},e.\u0275dir=a.lG2({type:e,selectors:[["","closeMenu",""]],hostBindings:function(e,t){1&e&&a.NdJ("click",function(){return t.clickHandler()})},inputs:{parent:"parent"}}),e})(),L=(()=>{class e{constructor(e,t){this.elemRef=e,this.renderer=t}clickHandler(){this.menu.classList.contains("menu-opened")?(this.renderer.removeClass(this.menu,"menu-opened"),this.renderer.removeClass(this.elemRef.nativeElement.querySelector("i"),"bi-x-circle"),this.renderer.addClass(this.elemRef.nativeElement.querySelector("i"),"bi-list"),this.renderer.removeClass(this.elemRef.nativeElement,"fixed-bottom-button")):(this.renderer.addClass(this.menu,"menu-opened"),this.renderer.removeClass(this.elemRef.nativeElement.querySelector("i"),"bi-list"),this.renderer.addClass(this.elemRef.nativeElement.querySelector("i"),"bi-x-circle"),this.renderer.addClass(this.elemRef.nativeElement,"fixed-bottom-button"))}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq),a.Y36(a.Qsj))},e.\u0275dir=a.lG2({type:e,selectors:[["","openMobileMenu",""]],hostBindings:function(e,t){1&e&&a.NdJ("click",function(){return t.clickHandler()})},inputs:{menu:"menu",parent:"parent"}}),e})();function N(e,t){if(1&e&&(a.ynx(0),a.TgZ(1,"h1"),a._uU(2),a.qZA(),a._UZ(3,"hr"),a.TgZ(4,"p"),a._uU(5),a.qZA(),a.BQk()),2&e){const e=t.ngIf;a.xp6(2),a.Oqu(e.title),a.xp6(3),a.Oqu(e.description)}}const R=function(){return{exact:!0}},$=function(e){return{"active-link":e}};let F=(()=>{class e{constructor(e,t){this.headerTitle=e,this.route=t,this.headerTitle$=this.headerTitle.getTitle()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(J.go),a.Y36(r.gz))},e.\u0275cmp=a.Xpm({type:e,selectors:[["primary-header"]],decls:34,vars:31,consts:[[1,"header"],["fixedHeader","","role","navigation",1,"header__main-navigation"],[1,"limiter"],[1,"container-fluid","d-flex","justify-content-between"],["parent",""],[1,"header__logo"],["routerLink","/","routerLinkActive","active-link",3,"routerLinkActiveOptions"],[1,"header__menu"],["menu",""],["closeMenu","","routerLink","/","fragment","about",1,"header__menu-link",3,"parent","ngClass"],["closeMenu","","routerLink","/","fragment","experience",1,"header__menu-link",3,"parent","ngClass"],["closeMenu","","routerLink","/","fragment","abilities",1,"header__menu-link",3,"parent","ngClass"],["closeMenu","","routerLink","/","fragment","contact",1,"header__menu-link",3,"parent","ngClass"],["routerLink","/about-this-page","routerLinkActive","active-link",1,"header__menu-link"],["openMobileMenu","","aria-label","menu","type","button",1,"header__btn-burguer",3,"menu","parent"],[1,"bi","bi-list"],[1,"header__text"],[4,"ngIf"]],template:function(e,t){if(1&e&&(a.TgZ(0,"header",0),a.TgZ(1,"nav",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3,4),a.TgZ(5,"div",5),a.TgZ(6,"a",6),a._uU(7," Home "),a.qZA(),a.qZA(),a.TgZ(8,"ul",7,8),a.TgZ(10,"li"),a.TgZ(11,"a",9),a.ALo(12,"async"),a._uU(13," Who am I? "),a.qZA(),a.qZA(),a.TgZ(14,"li"),a.TgZ(15,"a",10),a.ALo(16,"async"),a._uU(17," Experiencie "),a.qZA(),a.qZA(),a.TgZ(18,"li"),a.TgZ(19,"a",11),a.ALo(20,"async"),a._uU(21," Abilities "),a.qZA(),a.qZA(),a.TgZ(22,"li"),a.TgZ(23,"a",12),a.ALo(24,"async"),a._uU(25," Contact "),a.qZA(),a.qZA(),a.TgZ(26,"li"),a.TgZ(27,"a",13),a._uU(28," What about this Website? "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(29,"button",14),a._UZ(30,"i",15),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(31,"div",16),a.YNc(32,N,6,2,"ng-container",17),a.ALo(33,"async"),a.qZA(),a.qZA()),2&e){const e=a.MAs(4),n=a.MAs(9);a.xp6(6),a.Q6J("routerLinkActiveOptions",a.DdM(22,R)),a.xp6(5),a.Q6J("parent",e)("ngClass",a.VKq(23,$,"about"===a.lcZ(12,12,t.route.fragment))),a.xp6(4),a.Q6J("parent",e)("ngClass",a.VKq(25,$,"experience"===a.lcZ(16,14,t.route.fragment))),a.xp6(4),a.Q6J("parent",e)("ngClass",a.VKq(27,$,"abilities"===a.lcZ(20,16,t.route.fragment))),a.xp6(4),a.Q6J("parent",e)("ngClass",a.VKq(29,$,"contact"===a.lcZ(24,18,t.route.fragment))),a.xp6(6),a.Q6J("menu",n)("parent",e),a.xp6(3),a.Q6J("ngIf",a.lcZ(33,20,t.headerTitle$))}},directives:[Q,r.yS,r.Od,B,g.mk,L,g.O5],pipes:[g.Ov],styles:['[_ngcontent-%COMP%]:root{--primary-color-c:#e48257;--secondary-color-c:#3a6351;--speedy-color-c:#393232;--quiet-color-c:#f2edd7;--btn-secondary-hover-c:#3a6351a2;--primary-color-rgb:228,130,87;--secondary-color-rgb:58,99,81;--speedy-color-rgb:57,50,50;--quiet-color-rgb:242,237,215;--btn-secondary-hover-rgb:58,99,79}@keyframes moveInLeft{0%{opacity:0;transform:translateX(-10rem)}80%{transform:translateX(1rem)}to{opacity:1;transform:translateX(0)}}@keyframes opacityScale{0%{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}@keyframes moveInRight{0%{opacity:0;transform:translateX(10rem)}80%{transform:translateX(-1rem)}to{opacity:1;transform:translateX(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(80rem);left:50%;transform:translateX(-50%)}to{opacity:1}}@keyframes shaking{0%{transform-origin:center center;transform:scale(1)}50%{transform-origin:center center;transform:scale(.96)}to{transform-origin:center center;transform:scale(1)}}@keyframes bouncing{0%{transform:translateY(0)}50%{transform:translateY(-5px)}to{transform:translateY(0)}}@keyframes menu-translate{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes op-0-1{0%{opacity:0}95%{opacity:.8}to{opacity:1}}.header[_ngcontent-%COMP%]{min-height:50vh;background-color:#fed049;background-image:url(header-secondary-background.b112e7f76832dd137990.svg);background-attachment:fixed;background-size:cover;position:relative}.header__text[_ngcontent-%COMP%]{color:#fff;text-align:center;max-width:800px;margin:40px auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:20px 40px;animation-name:moveInBottom;animation-duration:.5s;animation-delay:.75s;animation-timing-function:ease-out;animation-fill-mode:backwards}.header__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:inherit}.header__main-navigation[_ngcontent-%COMP%]{margin:0 auto;padding:10px 20px;z-index:999;background-color:initial;transition:all 1s linear;box-shadow:0 1px 8px 1px #0000006e}.header__main-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header__main-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .header__main-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link{display:inline-block;text-decoration:none;color:#fff;font-weight:500}.header__main-navigation[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%]:after{content:"";display:block;background-color:var(--primary-color-c);width:0;height:2px;width:100%}.header__logo[_ngcontent-%COMP%]{display:flex;align-items:center;background-image:url(logo.f69e796026116eba6d50.svg)}@media (max-width:767.98px){.header__logo[_ngcontent-%COMP%]{font-size:1rem}}.header__logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";display:block;background-color:var(--primary-color-c);width:0;height:2px;transition:all .5s}.header__logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-color-c);transition:all .5s}.header__logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{width:100%}.header__menu[_ngcontent-%COMP%]{margin:0}@media (max-width:767.98px){.header__menu[_ngcontent-%COMP%]{display:none}}.header__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;display:inline-block}.header__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-left:40px}@media (max-width:767.98px){.header__menu.menu-opened[_ngcontent-%COMP%]{animation:menu-translate 1s;display:flex;position:fixed;background-color:var(--secondary-color-c);left:0;right:0;top:0;bottom:0;z-index:99;flex-direction:column;justify-content:center;align-items:center;font-size:1.5rem;padding-inline-start:0}.header__menu.menu-opened[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0!important}.header__menu.menu-opened[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:40px!important}}.header__menu-link[_ngcontent-%COMP%]:after{content:"";display:block;background-color:var(--primary-color-c);width:0;height:2px;transition:all .5s}.header__menu-link[_ngcontent-%COMP%]:hover{color:var(--primary-color-c);transition:all .5s}.header__menu-link[_ngcontent-%COMP%]:hover:after{width:100%}.header__btn-burguer[_ngcontent-%COMP%]{background-color:initial;border:none;z-index:100;color:#fff;font-size:1.5rem}@media (min-width:768px){.header__btn-burguer[_ngcontent-%COMP%]{display:none}}.fixed-nav-menu[_ngcontent-%COMP%]{width:100%;top:0;position:fixed;opacity:1;background-color:var(--secondary-color-c);transition:all 1s linear}.fixed-bottom-button[_ngcontent-%COMP%]{animation:op-0-1 2s;position:fixed;left:50%;transform:translateX(-50%);bottom:60px}']}),e})();const z=n(7252).Ps`
  query getCurrentBuildCommit {
    getCurrentBuildCommit {
      build_id
    }
  }
`;var H=n(653),j=n(9996),X=n(6599);function V(e,t){if(1&e){const e=a.EpF();a.ynx(0),a.TgZ(1,"select",20),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.oxw().theme=t})("change",function(){return a.CHM(e),a.oxw().handleChangedTheme()}),a.TgZ(2,"option",21),a._uU(3,"\ud83e\udd14\ufe0f"),a.qZA(),a.TgZ(4,"option",22),a._uU(5,"\ud83d\udc7d\ufe0f"),a.qZA(),a.TgZ(6,"option",23),a._uU(7,"\ud83d\ude48\ufe0f"),a.qZA(),a.qZA(),a.BQk()}if(2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngModel",e.theme)}}function D(e,t){1&e&&(a.ynx(0),a.TgZ(1,"a",24),a._uU(2,"Sign In "),a.qZA(),a.BQk())}function G(e,t){if(1&e&&(a.TgZ(0,"li"),a.YNc(1,D,3,0,"ng-container",5),a.qZA()),2&e){const e=t.ngIf;a.xp6(1),a.Q6J("ngIf",!e.isSignedIn)}}function W(e,t){if(1&e&&(a.TgZ(0,"a",25),a._uU(1),a.qZA()),2&e){const e=t.ngIf;a.Q6J("href","https://github.com/7Mica/personal-resume/tree/"+e,a.LSH),a.xp6(1),a.hij(" ",e," ")}}let K=(()=>{class e{constructor(e,t,n){this.themeService=e,this.accountService=t,this.apolloProvider=n,this.theme="primary-theme",this.selectedTheme$=H.E,this.signedStatus$=this.accountService.observeSignedInStatus(),this.apolloBase=this.apolloProvider.use(_.x.MAIN),this.buildCommit$=this.apolloBase.query({query:z}).pipe((0,j.U)(({data:e})=>{var t;return null===(t=null==e?void 0:e.getCurrentBuildCommit)||void 0===t?void 0:t.build_id}),(0,X.b)(e=>console.log(e)))}ngOnInit(){this.selectedTheme$=this.themeService.themeValueChanged().pipe((0,X.b)(e=>this.theme=e.name))}closeSession(){this.accountService.signOut()}handleChangedTheme(){switch(this.theme){case"primary-theme":this.themeService.setPrimaryTheme();break;case"secondary-theme":this.themeService.setSecondaryTheme();break;case"tertiary-theme":this.themeService.setTertiaryTheme()}}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(m),a.Y36(x.B),a.Y36(v._M))},e.\u0275cmp=a.Xpm({type:e,selectors:[["primary-footer"]],decls:42,vars:9,consts:[[1,"footer"],[1,"limiter"],[1,"footer__container","container-fluid"],[1,"row"],[1,"footer__first-list","col-12","col-md-4","text-sm-center","text-md-left"],[4,"ngIf"],[1,"bi","bi-geo-alt"],["routerLink","/thanks"],[1,"col-12","col-md-4"],[1,"footer__links","text-sm-center","text-md-left"],["target","_blank","href","https://github.com/7Mica","rel","noopener noreferrer"],[1,"bi","bi-github"],["target","_blank","href","https://github.com/7Mica/peronsal-resume","rel","noopener noreferrer"],["target","_blank","href","https://github.com/7Mica/crispy-cms","rel","noopener noreferrer"],[1,"footer__made-by","text-center"],["src","assets/icons/brand-icons/angular.svg","alt","Angular"],[1,"footer__copyright","row"],[1,"col-12"],[1,"text-center"],["class","special-link",3,"href",4,"ngIf"],["name","theme","id","theme-selector",3,"ngModel","ngModelChange","change"],["value","primary-theme"],["value","secondary-theme"],["value","tertiary-theme"],["routerLink","/auth/sign-in"],[1,"special-link",3,"href"]],template:function(e,t){1&e&&(a.TgZ(0,"footer",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a.TgZ(5,"ul"),a.TgZ(6,"li"),a.YNc(7,V,8,1,"ng-container",5),a.ALo(8,"async"),a.qZA(),a.TgZ(9,"li"),a._UZ(10,"i",6),a._uU(11," Tepic, Nayarit. M\xe9xico."),a.qZA(),a.TgZ(12,"li"),a.TgZ(13,"a",7),a._uU(14," Thanks for the free assets"),a.qZA(),a.qZA(),a.YNc(15,G,2,1,"li",5),a.ALo(16,"async"),a.qZA(),a.qZA(),a.TgZ(17,"div",8),a.TgZ(18,"ul",9),a.TgZ(19,"li"),a.TgZ(20,"a",10),a._UZ(21,"i",11),a._uU(22," Github profile"),a.qZA(),a.qZA(),a.TgZ(23,"li"),a.TgZ(24,"a",12),a._UZ(25,"i",11),a._uU(26," Web site's repository"),a.qZA(),a.qZA(),a.TgZ(27,"li"),a.TgZ(28,"a",13),a._UZ(29,"i",11),a._uU(30," Web site's backend repository"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(31,"div",8),a.TgZ(32,"div",14),a._UZ(33,"img",15),a.TgZ(34,"p"),a._uU(35,"Made with \u2764\ufe0f in Angular"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(36,"div",16),a.TgZ(37,"div",17),a.TgZ(38,"p",18),a._uU(39," Build "),a.YNc(40,W,2,2,"a",19),a.ALo(41,"async"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(7),a.Q6J("ngIf",a.lcZ(8,3,t.selectedTheme$)),a.xp6(8),a.Q6J("ngIf",a.lcZ(16,5,t.signedStatus$)),a.xp6(25),a.Q6J("ngIf",a.lcZ(41,7,t.buildCommit$)))},directives:[g.O5,r.yS,f.EJ,f.JJ,f.On,f.YN,f.Kr],pipes:[g.Ov],styles:["[_ngcontent-%COMP%]:root{--primary-color-c:#e48257;--secondary-color-c:#3a6351;--speedy-color-c:#393232;--quiet-color-c:#f2edd7;--btn-secondary-hover-c:#3a6351a2;--primary-color-rgb:228,130,87;--secondary-color-rgb:58,99,81;--speedy-color-rgb:57,50,50;--quiet-color-rgb:242,237,215;--btn-secondary-hover-rgb:58,99,79}.footer[_ngcontent-%COMP%]{background-color:var(--secondary-color-c);background-position:50%;background-repeat:no-repeat}.footer[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link{color:#dcd2d2}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#faf3f3}.footer__links[_ngcontent-%COMP%]{list-style:none;padding-inline-start:0}.footer__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:10px}.footer__container[_ngcontent-%COMP%]{padding:60px 60px 20px}.footer__made-by[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}.footer__made-by[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-top:10px}.footer__copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12px}.footer__copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400}.footer__first-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-inline-start:0}.footer__first-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:10px}"]}),e})();const ee=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["pages-root"]],decls:5,vars:0,consts:[["id","main-content","themeColor","",1,"secondary-theme"]],template:function(e,t){1&e&&(a.TgZ(0,"main",0),a._UZ(1,"primary-header"),a._UZ(2,"tool-bar"),a._UZ(3,"router-outlet"),a._UZ(4,"primary-footer"),a.qZA())},directives:[u,F,S,r.lC,K],encapsulation:2}),e})(),children:[{path:"",data:{editable:!0},loadChildren:()=>Promise.all([n.e("default-src_app_core_graphql_queries_resume-queries_ts-src_app_shared_shared_module_ts"),n.e("src_app_pages_public_main_main-page_module_ts")]).then(n.bind(n,19)).then(e=>e.MainPageModule)},{path:"thanks",loadChildren:()=>n.e("src_app_pages_public_thanks_thanks_module_ts").then(n.bind(n,393)).then(e=>e.ThanksModule)},{path:"playground",loadChildren:()=>n.e("src_app_pages_public_playground_playground_module_ts").then(n.bind(n,6612)).then(e=>e.PlaygroundModule)},{path:"about-this-page",loadChildren:()=>n.e("src_app_pages_public_about-this-page_about-this-page_module_ts").then(n.bind(n,3761)).then(e=>e.AboutThisPageModule)},{path:"edit-resume",canActivate:[E.I],loadChildren:()=>Promise.all([n.e("default-src_app_core_graphql_queries_resume-queries_ts-src_app_shared_shared_module_ts"),n.e("src_app_pages_admin_resume_resume_module_ts")]).then(n.bind(n,7111)).then(e=>e.ResumeModule)}]}];let te=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.Bz.forChild(ee),Y.z,U.w,I,h]]}),e})()}}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.b7127fc16febc3e0bca3.js.map