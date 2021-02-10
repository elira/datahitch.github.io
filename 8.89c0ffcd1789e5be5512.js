(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qWfu:function(t,e,c){"use strict";c.r(e),c.d(e,"AccountsModule",(function(){return q}));var o=c("2kYt"),i=c("sEIs"),a=c("D57K"),n=c("iAde"),r=c("cePI"),s=c("FlRo"),u=c("nIj0"),l=c("EM62"),d=c("29Wa"),m=c("Cd2c");let h=(()=>{class t{constructor(t){this.formBuilder=t,this.form=t.group({name:["",[u.p.required]],email:["",[u.p.required,u.p.email]]})}initEmptyForm(){this.form.patchValue({name:"",email:""})}initFromAccount(t){setTimeout(()=>{this.form.patchValue({name:t.name,email:t.email})},1)}isValid(){return this.form.valid}getAccount(){return{email:this.form.value.email,name:this.form.value.name}}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(u.c))},t.\u0275cmp=l.Jb({type:t,selectors:[["dh-account-form"]],decls:9,vars:1,consts:[["ngxsForm","selectionActions.profileNameForm",3,"formGroup"],[1,"w-full"],["matInput","","placeholder","Name","formControlName","name","matInput","","placeholder","Account Name"],["matInput","","placeholder","Email","formControlName","email","matInput","","placeholder","Account Email"]],template:function(t,e){1&t&&(l.Vb(0,"form",0),l.Vb(1,"mat-form-field",1),l.Vb(2,"mat-label"),l.Gc(3,"Account Name"),l.Ub(),l.Qb(4,"input",2),l.Ub(),l.Vb(5,"mat-form-field",1),l.Vb(6,"mat-label"),l.Gc(7,"Email"),l.Ub(),l.Qb(8,"input",3),l.Ub(),l.Ub()),2&t&&l.mc("formGroup",e.form)},directives:[u.q,u.k,u.e,d.b,d.e,m.a,u.a,u.j,u.d],styles:[""]}),t})();var b=c("OZ4H"),f=c("EmTj"),p=c("yDe4"),v=c("8QEQ"),g=c("hRFf"),S=c("fJbr");let w=(()=>{class t{constructor(t,e){this.store=t,this.stateHelperService=e}getAccounts(){return this.store.selectSnapshot(g.a.getAccounts)}callGetAccountsAction(){return Object(a.a)(this,void 0,void 0,(function*(){return yield this.stateHelperService.runAction(new v.c,g.a.getAccountsError)}))}updateAccount(t){return Object(a.a)(this,void 0,void 0,(function*(){return yield this.stateHelperService.runAction(new v.d(t),g.a.getUpdateAccountError)}))}createAccount(t){return Object(a.a)(this,void 0,void 0,(function*(){return yield this.stateHelperService.runAction(new v.a(t),g.a.getCreateAccountError)}))}deleteAccount(t){return Object(a.a)(this,void 0,void 0,(function*(){return yield this.stateHelperService.runAction(new v.b(t),g.a.getDeleteAccountError)}))}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(p.j),l.Zb(S.a))},t.\u0275prov=l.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),Object(a.b)([Object(p.f)(g.a.getAccounts)],t.prototype,"accounts$",void 0),t})();var y=c("PBFl");let D=(()=>{class t{constructor(t,e,c){this.dialogRef=t,this.dhDialogService=e,this.accountStateService=c}save(){return Object(a.a)(this,void 0,void 0,(function*(){if(!this.accountFormComponent.isValid())return void this.dhDialogService.showMessage("Please fill form");this.dhDialogService.showLoading();const t=this.accountFormComponent.getAccount(),e=yield this.accountStateService.createAccount({createNewAccountDto:{accountName:t.name}});this.dhDialogService.hideLoading(),e?this.dhDialogService.showErrorMessage("Could not create account"):(this.dhDialogService.showMessage("Account created"),this.dialogRef.close(!0))}))}cancel(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(b.g),l.Pb(f.a),l.Pb(w))},t.\u0275cmp=l.Jb({type:t,selectors:[["dh-create-account-modal"]],viewQuery:function(t,e){if(1&t&&l.Jc(h,!0),2&t){let t;l.tc(t=l.dc())&&(e.accountFormComponent=t.first)}},decls:9,vars:0,consts:[[1,"flex","justify-end","mt-10","space-x-2"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(l.Vb(0,"div"),l.Vb(1,"h2"),l.Gc(2,"Create Account"),l.Ub(),l.Qb(3,"dh-account-form"),l.Vb(4,"div",0),l.Vb(5,"button",1),l.cc("click",(function(){return e.save()})),l.Gc(6,"Save"),l.Ub(),l.Vb(7,"button",2),l.cc("click",(function(){return e.cancel()})),l.Gc(8,"Cancel"),l.Ub(),l.Ub(),l.Ub())},directives:[h,y.b],styles:[""],changeDetection:0}),t})(),A=(()=>{class t{constructor(t,e,c,o){this.dialogRef=t,this.dhDialogService=e,this.accountStateService=c,this.data=o}ngAfterViewInit(){this.accountFormComponent.initFromAccount(this.data.account)}save(){return Object(a.a)(this,void 0,void 0,(function*(){if(!this.accountFormComponent.isValid())return void this.dhDialogService.showMessage("Please fill form");this.dhDialogService.showLoading();const t=this.accountFormComponent.getAccount(),e=yield this.accountStateService.updateAccount({accountId:this.data.account.id,editAccountDto:{accountName:t.name,email:t.email}});this.dhDialogService.hideLoading(),e?this.dhDialogService.showErrorMessage("Could not update account"):(this.dhDialogService.showMessage("Account updated"),this.dialogRef.close(!0))}))}cancel(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(b.g),l.Pb(f.a),l.Pb(w),l.Pb(b.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["dh-edit-account-modal"]],viewQuery:function(t,e){if(1&t&&l.Jc(h,!0),2&t){let t;l.tc(t=l.dc())&&(e.accountFormComponent=t.first)}},decls:9,vars:0,consts:[[1,"flex","justify-end","mt-10","space-x-2"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(l.Vb(0,"div"),l.Vb(1,"h2"),l.Gc(2,"Edit Account"),l.Ub(),l.Qb(3,"dh-account-form"),l.Vb(4,"div",0),l.Vb(5,"button",1),l.cc("click",(function(){return e.save()})),l.Gc(6,"Save"),l.Ub(),l.Vb(7,"button",2),l.cc("click",(function(){return e.cancel()})),l.Gc(8,"Cancel"),l.Ub(),l.Ub(),l.Ub())},directives:[h,y.b],styles:[""],changeDetection:0}),t})();var V=c("xJCX");function C(t,e){1&t&&(l.Vb(0,"th",18),l.Gc(1," ID "),l.Ub())}function U(t,e){if(1&t&&(l.Vb(0,"td",19),l.Gc(1),l.Ub()),2&t){const t=e.$implicit;l.Db(1),l.Ic(" ",t.id," ")}}function E(t,e){1&t&&(l.Vb(0,"th",18),l.Gc(1," Name "),l.Ub())}function k(t,e){if(1&t&&(l.Vb(0,"td",19),l.Gc(1),l.Ub()),2&t){const t=e.$implicit;l.Db(1),l.Ic(" ",t.name," ")}}function G(t,e){1&t&&(l.Vb(0,"th",18),l.Gc(1," Email "),l.Ub())}function j(t,e){if(1&t&&(l.Vb(0,"td",19),l.Gc(1),l.Ub()),2&t){const t=e.$implicit;l.Db(1),l.Ic(" ",t.email," ")}}function M(t,e){1&t&&l.Qb(0,"th",20)}const P=function(t,e){return["/",t,e]};function I(t,e){if(1&t){const t=l.Wb();l.Vb(0,"td",19),l.Vb(1,"button",21),l.cc("click",(function(){l.wc(t);const c=e.$implicit;return l.gc(2).showEditAccountModal(c)})),l.Gc(2,"Edit"),l.Ub(),l.Vb(3,"button",22),l.cc("click",(function(){l.wc(t);const c=e.$implicit;return l.gc(2).showDeleteAccountModal(c)})),l.Gc(4,"Delete"),l.Ub(),l.Vb(5,"a",23),l.Gc(6,"Profile"),l.Ub(),l.Vb(7,"a",23),l.Gc(8,"Api Keys"),l.Ub(),l.Vb(9,"a",23),l.Gc(10,"Users"),l.Ub(),l.Ub()}if(2&t){const t=e.$implicit,c=l.gc(2);l.Db(5),l.mc("routerLink",l.qc(3,P,c.profileRoute,t.id)),l.Db(2),l.mc("routerLink",l.qc(6,P,c.apiKeysRoute,t.id)),l.Db(2),l.mc("routerLink",l.qc(9,P,c.apiKeysRoute,t.id))}}function R(t,e){1&t&&l.Qb(0,"tr",24)}function F(t,e){1&t&&l.Qb(0,"tr",25)}const O=function(){return[5,10,25,100]};function N(t,e){if(1&t&&(l.Vb(0,"div",6),l.Vb(1,"table",7),l.Tb(2,8),l.Ec(3,C,2,0,"th",9),l.Ec(4,U,2,1,"td",10),l.Sb(),l.Tb(5,11),l.Ec(6,E,2,0,"th",9),l.Ec(7,k,2,1,"td",10),l.Sb(),l.Tb(8,12),l.Ec(9,G,2,0,"th",9),l.Ec(10,j,2,1,"td",10),l.Sb(),l.Tb(11,13),l.Ec(12,M,1,0,"th",14),l.Ec(13,I,11,12,"td",10),l.Sb(),l.Ec(14,R,1,0,"tr",15),l.Ec(15,F,1,0,"tr",16),l.Ub(),l.Qb(16,"mat-paginator",17),l.Ub()),2&t){const t=l.gc();l.Db(1),l.mc("dataSource",t.dataSource),l.Db(13),l.mc("matHeaderRowDef",t.displayedColumns),l.Db(1),l.mc("matRowDefColumns",t.displayedColumns),l.Db(1),l.mc("pageSizeOptions",l.oc(4,O))}}const L=[{path:"",component:(()=>{class t{constructor(t,e,c){this.accountStateService=t,this.dialog=e,this.dhDialogService=c,this.ready=!1,this.displayedColumns=["id","name","email","actions"],this.profileRoute=V.a.profile,this.apiKeysRoute=V.a.apiKeys,this.accountUsersRoute=V.a.accountUsers}ngOnInit(){return Object(a.a)(this,void 0,void 0,(function*(){if(this.dhDialogService.showLoading(),yield this.accountStateService.callGetAccountsAction())return void this.dhDialogService.showErrorMessage("Could not load accounts.");const t=this.accountStateService.getAccounts();this.dataSource=new s.k(t),this.dhDialogService.hideLoading(),this.ready=!0,setTimeout(()=>{this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort},10)}))}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}showEditAccountModal(t){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.dialog.open(A,{data:{account:t}}).afterClosed().toPromise())&&this.update()}))}showCreateAccountModal(){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.dialog.open(D).afterClosed().toPromise())&&this.update()}))}showDeleteAccountModal(t){return Object(a.a)(this,void 0,void 0,(function*(){if(!(yield this.dhDialogService.showConfirmation({message:"Are you sure you want to delete this account",title:"Delete Account"}).toPromise()))return;this.dhDialogService.showLoading();const e=yield this.accountStateService.deleteAccount({accountId:t.id});this.dhDialogService.hideLoading(),e?this.dhDialogService.showErrorMessage("Could not delete account"):(this.dhDialogService.showMessage("Account deleted"),this.update())}))}update(){const t=this.accountStateService.getAccounts();this.dataSource.data=t}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(w),l.Pb(b.b),l.Pb(f.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["dh-accounts"]],viewQuery:function(t,e){if(1&t&&(l.Jc(n.a,!0),l.Jc(r.a,!0)),2&t){let t;l.tc(t=l.dc())&&(e.paginator=t.first),l.tc(t=l.dc())&&(e.sort=t.first)}},decls:10,vars:1,consts:[[1,"p-4"],[1,"flex","justify-between"],["matInput","","placeholder","Account Name",3,"keyup"],["input",""],["mat-raised-button","","color","primary",1,"mb-2",3,"click"],["class","mat-elevation-z8",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","","matSort","",1,"w-full",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","email"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-raised-button","","color","primary",1,"",3,"click"],["mat-raised-button","","color","warn",1,"ml-2",3,"click"],["mat-raised-button","","color","primary",1,"ml-2",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(l.Vb(0,"div",0),l.Vb(1,"div",1),l.Vb(2,"mat-form-field"),l.Vb(3,"mat-label"),l.Gc(4,"Filter"),l.Ub(),l.Vb(5,"input",2,3),l.cc("keyup",(function(t){return e.applyFilter(t)})),l.Ub(),l.Ub(),l.Vb(7,"button",4),l.cc("click",(function(){return e.showCreateAccountModal()})),l.Gc(8,"Create new account"),l.Ub(),l.Ub(),l.Ec(9,N,17,5,"div",5),l.Ub()),2&t&&(l.Db(9),l.mc("ngIf",e.ready))},directives:[d.b,d.e,m.a,y.b,o.m,s.j,s.c,s.e,s.b,s.g,s.i,n.a,s.d,s.a,y.a,i.d,s.f,s.h],styles:[""]}),t})()}];let Q=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(L)],i.e]}),t})(),J=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[o.c,d.d,u.o,y.c,b.f,m.b]]}),t})(),H=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[o.c]]}),t})(),q=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},imports:[[o.c,Q,s.l,d.d,n.b,m.b,y.c,J,H]]}),t})()}}]);