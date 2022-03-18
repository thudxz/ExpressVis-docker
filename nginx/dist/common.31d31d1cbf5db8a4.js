"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{3139:(_,f,r)=>{r.d(f,{S:()=>p});var t=r(4099),o=r(3668);let p=(()=>{class c{constructor(){this.textLines=[],this.textMatrix=[],this.firstLinesSubject=new t.X(null),this.fileHeadersSubject=new t.X(null),this.firstLines$=this.firstLinesSubject.asObservable(),this.fileHeaders$=this.fileHeadersSubject.asObservable()}initLoadedFile(s){const i=this._determineFileType(s.target.files[0]);"txt"===i||"TXT"===i?this._parseTextFile(s.target.files[0]):this._parseExcelFile(s)}_determineFileType(s){const a=s.name.split(".");return a[a.length-1]}_parseExcelFile(s){const i=s.target;if(1!==i.files.length)throw new Error("Cannot use multiple files");r.e(981).then(r.t.bind(r,3981,23)).then(a=>{const u=new FileReader;u.onload=m=>{const n=a.read(m.target.result),l=a.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{header:1});this.textMatrix=l,this.firstLinesSubject.next(this.obtainFirstLines(5)),this.fileHeadersSubject.next([...this.textMatrix][0])},u.readAsArrayBuffer(i.files[0])})}_parseTextFile(s){let i=new FileReader;i.readAsText(s),i.onload=a=>{this.textLines=i.result.trim().split("\n"),this.textMatrix=this.textLines.map(m=>m.trim().split("\t")),this.firstLinesSubject.next(this.obtainFirstLines(5)),this.fileHeadersSubject.next([...this.textLines][0].split("\t"))}}_parseCSVfile(s){let i=new FileReader;i.readAsText(s),i.onload=a=>{this.textLines=i.result.trim().split("\n"),this.textMatrix=this.textLines.map(m=>m.trim().split(",")),this.firstLinesSubject.next(this.obtainFirstLines(5)),this.fileHeadersSubject.next([...this.textMatrix[0]])}}obtainFirstLines(s){return[...this.textMatrix].slice(1,s+1)}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac}),c})()},438:(_,f,r)=>{r.d(f,{w:()=>O});var t=r(3668),o=r(9133),p=r(3405),c=r(8735),d=r(8805),s=r(5389),i=r(6019);function a(n,h){if(1&n&&(t.TgZ(0,"option",5),t._uU(1),t.qZA()),2&n){const e=h.$implicit,l=t.oxw();t.Q6J("value",e[l.idAttribute]),t.xp6(1),t.hij(" ",e[l.displayAttribute]," ")}}function u(n,h){if(1&n&&(t.TgZ(0,"label",6),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.emptyNote," ")}}const m=function(n){return{"form-inline":n}};let O=(()=>{class n{constructor(e){this.cdr=e,this.formInlineOrNot=!1,this.ifOutputFirstValue=!1,this.emptyNote="",this.formWidth="15rem",this.selectedItemObject$=new t.vpe,this.destroyNotifier$=new p.xQ,this.itemForm=new o.cw({itemValue:new o.NI("",o.kI.required)})}ngOnInit(){}ngAfterViewInit(){this.itemForm.get("itemValue").valueChanges.pipe((0,c.h)(e=>e),(0,d.R)(this.destroyNotifier$),(0,s.x)()).subscribe(e=>{if("VALID"===this.itemForm.get("itemValue").status){let l;for(let b of this.inputObjects)b[this.idAttribute]===e&&(l=b);this.selectedItemObject$.next(l)}else this.selectedItemObject$.next(null);this.cdr.detectChanges()}),this.ifOutputFirstValue&&this._outputSetFirstItemAsSelctedItem()}ngOnChanges(e){e.inputObjects&&e.inputObjects.isFirstChange()&&this.ifOutputFirstValue&&this._outputSetFirstItemAsSelctedItem()}ngOnDestroy(){this.destroyNotifier$.next(),this.destroyNotifier$.complete()}_outputSetFirstItemAsSelctedItem(){this.inputObjects&&this.inputObjects.length>=1&&this.itemForm.patchValue({itemValue:this.inputObjects[0][this.idAttribute]})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-select-item-object"]],inputs:{inputObjects:"inputObjects",idAttribute:"idAttribute",displayAttribute:"displayAttribute",itemLabel:"itemLabel",formInlineOrNot:"formInlineOrNot",ifOutputFirstValue:"ifOutputFirstValue",emptyNote:"emptyNote",formWidth:"formWidth"},outputs:{selectedItemObject$:"selectedItemObject$"},features:[t.TTD],decls:7,vars:9,consts:[[3,"ngClass","formGroup"],[1,"align-self-start"],["formControlName","itemValue","data-testid","selectItem",1,"form-control","form-control-sm"],[3,"value",4,"ngFor","ngForOf"],["class","text-danger font-weight-light",4,"ngIf"],[3,"value"],[1,"text-danger","font-weight-light"]],template:function(e,l){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"div",1),t.TgZ(2,"h5"),t._uU(3),t.qZA(),t.TgZ(4,"select",2),t.YNc(5,a,2,2,"option",3),t.qZA(),t.YNc(6,u,2,1,"label",4),t.qZA(),t.qZA()),2&e&&(t.Q6J("ngClass",t.VKq(7,m,l.formInlineOrNot))("formGroup",l.itemForm),t.xp6(3),t.hij("",l.itemLabel,":"),t.xp6(1),t.Udp("width",l.formWidth),t.xp6(1),t.Q6J("ngForOf",l.inputObjects),t.xp6(1),t.Q6J("ngIf",!((null==l.inputObjects?null:l.inputObjects.length)>=1)))},directives:[o._Y,o.JL,i.mk,o.sg,o.EJ,o.JJ,o.u,i.sg,i.O5,o.YN,o.Kr],styles:[""],changeDetection:0}),n})()}}]);