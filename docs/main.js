(self.webpackChunkztftrue_angular=self.webpackChunkztftrue_angular||[]).push([["main"],{2592:(l,g,n)=>{"use strict";var i=n(2560),c=n(2847),a=n(4929),f=n(4666),A=n(8987),S=n(2508),z=n(4522),L=n(9837),D=n(4792),E=n(4481),j=n(3012),k=n(5074),H=n(7822),W=n(1267),F=n(8022),_=n(9356),X=n(1294),U=n(1708),Y=n(7371),B=n(930),G=n(8711),V=n(5892),Z=n(4497),J=n(9906),P=n(4052);var T,Q=n(1717),$=n.n(Q);let v=((T=class{constructor(){this.title="ztftrue",this.currentRouterIndex=0,this.menuStatus=!0,this.menuData=[],this.disabledButton=!1}getMenu(){}ngOnInit(){}}).ctorParameters=()=>[],T);v=(0,a.gn)([(0,i.wA2)({selector:"app-main",template:'<div class="main">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n',styles:[$()]})],v);var q=n(1670);var R,te=n(7083),ne=n.n(te),p=n(2805);class r{constructor(e,t,o,s,h){this.x=0,this.y=0,this.gotoOne=[],this.gotoTwo=[],this.mId=0,this.x=e,this.y=t,this.gotoOne=o,this.gotoTwo=s,this.mId=h}}let w=((R=class{constructor(e,t){this.dialog=e,this.baseHref=t,this.dialogRef=null,this.canvasWidth=0,this.canvasHeight=0,this.allNode=[],this.initSheepNode=[],this.initWolfNode=[],this.wolfNode=[],this.sheepNode=[],this.eatSheep=0,this.whoRun=!0,this.remainSheep=14,this.stage=null,this.r=2,this.lineDistance=0,this.isPlaying=!1,this.audioSheepDied=new Audio(this.baseHref+"../../assets/sound/sheep_died.ogg"),this.audioSheepMove=new Audio(this.baseHref+"../../assets/sound/sheep_move.mp3"),this.audioWolfMove=new Audio(this.baseHref+"../../assets/sound/wolf_move.ogg"),console.log(this.baseHref)}ngOnInit(){}ngAfterViewInit(){}init(){this.wolfNode=[],this.sheepNode=[],this.eatSheep=0,this.whoRun=!0,this.selectNode=null,this.remainSheep=14;const e=document.getElementById("myCanvas");this.canvasWidth=document.body.clientWidth,this.canvasHeight=document.body.clientHeight-20;let t=Math.floor(this.canvasWidth/10),o=Math.floor(this.canvasHeight/6),s=Math.min(t,o);e.width=10*s,e.height=6*s,this.lineDistance=s,null==this.stage?this.stage=new p.Hf("myCanvas"):this.stage.removeAllChildren(),this.drawLine(s),this.initNode(),this.drwaNode(s),this.stage.update(),p.vB.on("tick",this.stage)}drwaNode(e){let t=e/this.r;this.allNode.forEach(o=>{var s=new p.eY(this.baseHref+"../../assets/wolf_eat_sheep/sheep.png");s.addEventListener("click",u=>{this.canvasClick(u)});let h=e/(s.image.width*this.r);s.scaleX=h,s.scaleY=h,s.set({type:2,posi:0}),s.x=e*o.x-t/2,s.y=e*o.y-t/2,s.set({type:0,mId:o.mId,alpha:.1,goto1:o.gotoOne,goto2:o.gotoTwo}),this.stage.addChild(s)}),this.initSheepNode.forEach(o=>{var s=new p.eY(this.baseHref+"../../assets/wolf_eat_sheep/sheep.png");s.addEventListener("click",u=>{this.canvasClick(u)});let h=e/(s.image.width*this.r);s.scaleX=h,s.scaleY=h,s.set({type:2,mId:o.mId,goto1:o.gotoOne,goto2:o.gotoTwo}),s.x=e*o.x-t/2,s.y=e*o.y-t/2,this.sheepNode.push(s),this.stage.addChild(s)}),this.initWolfNode.forEach(o=>{var s=new p.eY(this.baseHref+"../../../assets/wolf_eat_sheep/wolf.png");s.addEventListener("click",u=>{this.canvasClick(u)}),this.wolfNode.push(s);let h=e/(s.image.width*this.r);s.scaleX=h,s.scaleY=h,s.x=e*o.x-t/2,s.y=e*o.y-t/2,s.set({type:1,mId:o.mId,goto1:o.gotoOne,goto2:o.gotoTwo}),this.stage.addChild(s)})}drawLine(e){var t=new p.TC;t.setStrokeStyle(e/20),t.beginStroke("#fec450"),t.drawRect(3*e,e,4*e,4*e),t.moveTo(3*e,2*e),t.lineTo(7*e,2*e),t.moveTo(1*e,3*e),t.lineTo(9*e,3*e),t.moveTo(3*e,4*e),t.lineTo(7*e,4*e),t.moveTo(4*e,e),t.lineTo(4*e,5*e),t.moveTo(5*e,e),t.lineTo(5*e,5*e),t.moveTo(6*e,e),t.lineTo(6*e,5*e),t.moveTo(3*e,e),t.lineTo(7*e,5*e),t.moveTo(7*e,e),t.lineTo(3*e,5*e),t.moveTo(5*e,e),t.lineTo(2*e,4*e),t.moveTo(5*e,e),t.lineTo(8*e,4*e),t.moveTo(5*e,5*e),t.lineTo(2*e,2*e),t.moveTo(5*e,5*e),t.lineTo(8*e,2*e),t.moveTo(2*e,4*e),t.lineTo(2*e,2*e),t.moveTo(8*e,4*e),t.lineTo(8*e,2*e),t.moveTo(2*e,4*e),t.lineTo(e,3*e),t.moveTo(2*e,2*e),t.lineTo(e,3*e),t.moveTo(8*e,4*e),t.lineTo(9*e,3*e),t.moveTo(8*e,2*e),t.lineTo(9*e,3*e);var o=new p.bn(t);o.x=0,o.y=0,this.stage.addChild(o)}canvasClick(e){let t=e.target;if(this.whoRun){if(2===t.type)return;if(1===t.type)null!=this.selectNode&&(this.selectNode.shadow=null,this.selectNode.set({alpha:1})),t.shadow=new p.jX("#002200",5,5,10),t.set({alpha:.8}),this.selectNode=t,this.stage.update();else if(null!=this.selectNode){let s=t.mId,h=this.selectNode.goto1,u=this.selectNode.goto2;for(const N of h)if(s==N)return this.selectNode.x=t.x,this.selectNode.y=t.y,this.selectNode.shadow=null,this.selectNode.set({alpha:1,goto1:t.goto1,goto2:t.goto2,mId:s}),this.selectNode=null,this.whoRun=!1,this.audioWolfMove.play(),void this.stage.update();for(const N of u)if(s==N[0])for(let y=0;y<this.sheepNode.length;y++){const M=this.sheepNode[y];if(M.mId==N[1])return this.selectNode.x=t.x,this.selectNode.y=t.y,this.selectNode.shadow=null,this.selectNode.set({alpha:1,goto1:t.goto1,goto2:t.goto2,mId:s}),this.selectNode=null,this.stage.removeChild(M),this.sheepNode.splice(y,1),++this.eatSheep,this.audioSheepDied.play(),this.whoRun=!1,void this.stage.update()}}this.stage.update()}else{if(1===e.target.type)return;if(2===t.type){if(0!==this.remainSheep)return;null!=this.selectNode&&(this.selectNode.shadow=null,this.selectNode.set({alpha:1})),t.shadow=new p.jX("#002200",5,5,10),t.set({alpha:.8}),this.selectNode=t,this.stage.update()}else{let s=t.mId;if(null!=this.selectNode){let h=this.selectNode.goto1;for(const u of h)if(s==u)return this.selectNode.x=t.x,this.selectNode.y=t.y,this.selectNode.shadow=null,this.selectNode.set({alpha:1,goto1:t.goto1,mId:s}),this.selectNode=null,this.whoRun=!0,this.audioSheepMove.play(),void this.stage.update()}else if(this.remainSheep>0){var o=new p.eY(this.baseHref+"../../../assets/wolf_eat_sheep/sheep.png");o.addEventListener("click",h=>{this.canvasClick(h)}),o.scaleX=t.scale,o.scaleY=t.scale,o.set({type:2,mId:s,goto1:t.goto1}),o.x=t.x,o.y=t.y,this.sheepNode.push(o),this.stage.addChild(o),this.whoRun=!0,--this.remainSheep,this.audioSheepMove.play(),this.stage.update()}}}}initNode(){this.allNode.length>0||(this.allNode.push(new r(3,1,[2,7,8],[[3,2],[17,8],[15,7]],1)),this.allNode.push(new r(4,1,[1,3,8],[[4,3],[16,8]],2)),this.allNode.push(new r(5,1,[2,4,8,9,10],[[1,2],[5,4],[15,8],[17,9],[19,10]],3)),this.allNode.push(new r(6,1,[3,5,10],[[2,3],[18,10]],4)),this.allNode.push(new r(7,1,[4,10,11],[[3,4],[17,10],[19,11]],5)),this.allNode.push(new r(2,2,[13,14,15],[[22,14],[24,15]],6)),this.allNode.push(new r(3,2,[15,1,8],[[23,15],[9,8]],7)),this.allNode.push(new r(4,2,[7,1,2,3,9,17,16,15],[[26,17],[24,16],[22,15],[10,9]],8)),this.allNode.push(new r(5,2,[3,8,17,10],[[7,8],[11,10],[25,17]],9)),this.allNode.push(new r(6,2,[9,17,18,19,11,5,4,3],[[8,9],[24,17],[26,18],[28,19]],10)),this.allNode.push(new r(7,2,[5,10,19],[[27,19],[9,10]],11)),this.allNode.push(new r(8,2,[19,20,21],[[28,20],[26,19]],12)),this.allNode.push(new r(1,3,[6,14,22],[[15,14]],13)),this.allNode.push(new r(2,3,[6,13,22,15],[[16,15]],14)),this.allNode.push(new r(3,3,[6,22,14,16,24,23,8,7],[[3,8],[17,16],[31,24],[29,23],[1,7],[13,14]],15)),this.allNode.push(new r(4,3,[15,8,17,24],[[14,14],[30,24],[18,17],[2,8]],16)),this.allNode.push(new r(5,3,[8,16,24,25,26,18,10,9],[[29,24],[31,25],[33,26],[19,18],[5,10],[3,9],[1,8],[15,16]],17)),this.allNode.push(new r(6,3,[10,17,19,26],[[16,17],[4,10],[32,26],[20,19]],18)),this.allNode.push(new r(7,3,[11,10,18,26,27,28,20,12],[[3,10],[5,11],[33,27],[31,26],[17,18],[21,21]],19)),this.allNode.push(new r(8,3,[12,19,28,21],[[18,19]],20)),this.allNode.push(new r(9,3,[12,20,28],[[19,20]],21)),this.allNode.push(new r(2,4,[13,14,15],[[8,15],[6,14]],22)),this.allNode.push(new r(3,4,[15,24,29],[[25,24],[7,15]],23)),this.allNode.push(new r(4,4,[15,23,29,30,31,25,17,16],[[6,15],[10,17],[8,16],[26,25]],24)),this.allNode.push(new r(5,4,[24,31,26,17],[[23,24],[9,17],[27,26]],25)),this.allNode.push(new r(6,4,[17,18,19,27,33,32,31,25],[[12,19],[8,17],[10,18],[24,25]],26)),this.allNode.push(new r(7,4,[33,26,19],[[11,19],[25,26]],27)),this.allNode.push(new r(8,4,[19,20,21],[[10,19],[12,20]],28)),this.allNode.push(new r(3,5,[23,24,30],[[15,23],[31,30],[17,24]],29)),this.allNode.push(new r(4,5,[29,24,31],[[16,24],[32,31]],30)),this.allNode.push(new r(5,5,[30,24,25,26,32],[[17,25],[15,24],[19,26],[33,32],[29,30]],31)),this.allNode.push(new r(6,5,[31,26,33],[[18,26],[30,31]],32)),this.allNode.push(new r(7,5,[27,26,32],[[17,26],[19,27],[31,32]],33)),this.initSheepNode.push(this.allNode[7]),this.initSheepNode.push(this.allNode[8]),this.initSheepNode.push(this.allNode[9]),this.initSheepNode.push(this.allNode[15]),this.initSheepNode.push(this.allNode[17]),this.initSheepNode.push(this.allNode[23]),this.initSheepNode.push(this.allNode[24]),this.initSheepNode.push(this.allNode[25]),this.initWolfNode.push(this.allNode[14]),this.initWolfNode.push(this.allNode[18]))}startGame(){this.isPlaying=!0,this.requestFullScreen(),this.init(),setTimeout(()=>{this.init()},500)}requestFullScreen(){return(0,q.Z)(function*(){const e=document.documentElement;e.requestFullscreen?yield e.requestFullscreen():e.webkitRequestFullscreen?yield e.webkitRequestFullscreen():e.mozRequestFullScreen&&(yield e.mozRequestFullScreen()),screen.orientation.lock&&screen.orientation.lock("landscape-primary").then(function(t){},function(t){})})()}}).ctorParameters=()=>[{type:E.uw},{type:String,decorators:[{type:i.tBr,args:[f.mr]}]}],R);w=(0,a.gn)([(0,i.wA2)({selector:"app-wolf-eat-sheep",template:'<div class="screen-grass">\r\n  <div class="tip">\r\n    <span>{{\'remain-sheep\'|translate}}: {{this.remainSheep}}\r\n    </span>\r\n    <div class="run-tip">\r\n      <button mat-flat-button color="primary" style="outline: none"\r\n        (click)="startGame()">{{this.isPlaying?\'Repaly\':\'Play\'}}</button>\r\n    </div>\r\n    <a routerLink="/help" routerLinkActive="active" ariaCurrentWhenActive="page">{{\'help\'|translate}}</a>\r\n    <span>{{\'eat-sheep\'|translate}}: {{this.eatSheep}}</span>\r\n  </div>\r\n  <canvas id="myCanvas" height="0px" width="0px"></canvas>\r\n  <div [style.width.px]="m" [style.height.px]="m"\r\n    class="{{this.whoRun?\'animation-for-runner-wolf\':\'animation-for-runner-sheep\'}}">\r\n\r\n  </div>\r\n</div>',styles:[ne()]})],w);var oe=n(856),re=n.n(oe);let x=class{};x=(0,a.gn)([(0,i.wA2)({selector:"app-wolf-eat-sheep-help",template:'<div id="shadow">\r\n  <span class="title">{{ "wolf-eat-sheep" | translate }}</span>\r\n  <div>\r\n    <p style="font-size: 1.2rem;text-align: center">\r\n      {{ "full-screen-play-tip" | translate }}\r\n    </p>\r\n    {{ "how-do-play" | translate }}\r\n    <p>{{ "how-to-play-one" | translate }}</p>\r\n    {{ "how-to-play-map" | translate }} <br />\r\n    <img class="image-1" src="../../../../assets/teach_wolf/map.jpg" /> <br />\r\n    <span style="color: red">{{ "wolf-move" | translate }}</span>\r\n    <p>{{ "wolf-move-introduction" | translate }}</p>\r\n    <img class="image-1" src="../../../../assets/teach_wolf/wolf.jpg" />\r\n    <img class="image-1" src="../../../../assets/teach_wolf/wolf_cant.jpg" />\r\n    <p style="color: green;">{{ "sheep-move" | translate }}</p>\r\n    <p style="color:red;font-size: 1.2rem">{{ "warning" | translate }}</p>\r\n    <span style="color: blue;"> {{ "victory-or-defeat" | translate }} </span>\r\n    <p>{{ "victory-or-defeat-introduction" | translate }}</p>\r\n  </div>\r\n</div>\r\n',styles:[re()]})],x);const ie=[{path:"",redirectTo:"/wolf-eat-sheep",pathMatch:"full"},{path:"",component:v,children:[{path:"wolf-eat-sheep",component:w},{path:"help",component:x}]}];let C=class{};C=(0,a.gn)([(0,i.LVF)({imports:[f.ez,P.Bz.forRoot(ie,{enableTracing:!1,useHash:!0})],declarations:[],exports:[P.Bz]})],C);var b,le=n(6715),he=n.n(le),O=n(904);let m=((b=class{constructor(e){this.translate=e;let t=navigator.language;t=["zh","zh-CN"].includes(t)?"zh":"en",e.setDefaultLang(t),e.use(t)}ngOnInit(){console.log("%c\u5982\u679c\u4f60\u4e0d\u6e05\u695a\u4f60\u5728\u505a\u4ec0\u4e48,\u90a3\u5c31\u4e0d\u8981\u5728\u8fd9\u91cc\u8f93\u5165\u4efb\u4f55\u5185\u5bb9 ztf/true","color:red;font-size:1rem;")}}).ctorParameters=()=>[{type:O.sK}],b);m=(0,a.gn)([(0,i.wA2)({selector:"app-root",template:"<router-outlet></router-outlet>",styles:[he()]})],m);var de=n(1558);let I=class{};I=(0,a.gn)([(0,i.LVF)({declarations:[m,v,w,x],imports:[Z.b2,S.u5,C,A.JF,J.PW,E.Is,z.ot,V.Nh,D.p9,G.p0,B.ZX,L.vV,H.Ps,F.Tx,j.To,_.TU,k.lN,W.c,U.Cq,S.UX,f.ez,X.Cv,Y.LD,S.UX,O.aw.forRoot({loader:{provide:O.Zw,useFactory:function pe(d){return new de.w(d,"./assets/i18n/",".json")},deps:[A.eN]}})],entryComponents:[],schemas:[i.MUr],providers:[{provide:f.mr,useFactory:d=>d.getBaseHrefFromDOM(),deps:[f.lw]}],bootstrap:[m]})],I),(0,c.y)().bootstrapModule(I).catch(d=>console.error(d))},6715:(l,g,n)=>{var i=n(337),a=n(931)(i);a.push([l.id,"",""]),l.exports=a.toString()},1717:(l,g,n)=>{var i=n(337),a=n(931)(i);a.push([l.id,"a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.main {\r\n  overflow: hidden;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.page {\r\n  padding: 0;\r\n  height: 100%;\r\n  display: flex;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  flex-direction: column;\r\n}\r\n\r\n.content {\r\n  height: 100%;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom: 0.1rem solid rgb(240, 240, 240);\r\n  background-color: white;\r\n  height: 2.8rem;\r\n  align-content: center;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.menu {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  width: 200px;\r\n  float: left;\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  background: whitesmoke;\r\n  border-right: 1px solid ghostwhite;\r\n  float: left;\r\n}\r\n\r\n.page-menu {\r\n  width: calc(100vw - 200px)\r\n}\r\n\r\n.page-nomenu {\r\n  width: 100vw\r\n}\r\n\r\n\r\n.menu-button {\r\n  width: 200px;\r\n  text-align: start;\r\n  border-radius: 0;\r\n  border: none;\r\n  outline: none;\r\n  margin-top: 5px;\r\n}\r\n\r\n.menu-item {\r\n  margin: 0px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.menu-switch-button {\r\n  outline: none;\r\n  flex-shrink: 0;\r\n}\r\n\r\n\r\n\r\n.header-img {\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0px;\r\n  box-shadow: 1px 1px 5px 1px rgb(223, 223, 223);\r\n}\r\n\r\n.user-name {\r\n  padding: 5px 3px;\r\n}\r\n\r\n.header-img:hover {\r\n  box-shadow: 1px 1px 5px 1px rgb(196, 196, 196);\r\n}\r\n\r\n.user-menu {\r\n  width: 200px;\r\n  margin: 0px;\r\n  flex-shrink: 0;\r\n  background-color: beige;\r\n}\r\n\r\n.menu-user-header {\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n@keyframes animal {\r\n  0% {}\r\n\r\n  50% {}\r\n\r\n  100% {\r\n    background: #81bbffff\r\n  }\r\n}\r\n",""]),l.exports=a.toString()},856:(l,g,n)=>{var i=n(337),a=n(931)(i);a.push([l.id,"#shadow {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  line-height: 2rem;\r\n  font-size: 1.2rem;\r\n  overflow-y: auto;\r\n  height: 100vh;\r\n}\r\n\r\np {\r\n  text-indent: 1em;\r\n}\r\n\r\n.title {\r\n  font-size: 1.4rem;\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.button-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.video-wolf {\r\n  width: 100%;\r\n}\r\n\r\n.image-1 {\r\n  height: 30vw;\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n  .image-1 {\r\n    height:  70vw;\r\n  }\r\n}",""]),l.exports=a.toString()},7083:(l,g,n)=>{var i=n(337),a=n(931)(i);a.push([l.id,".tip {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n  justify-items: center;\r\n  width: 100vw;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  color: blue;\r\n  flex-wrap: nowrap;\r\n  position: relative;\r\n  background-color: rgba(250, 235, 215, 0.582);\r\n  z-index: 10;\r\n  font-weight: bold;\r\n  height: 20px;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n  top: 0;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.run-tip {\r\n  width: 100px;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n}\r\n\r\n#myCanvas {\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n}\r\n\r\n.screen-grass {\r\n  background-image: url('grass_back.jpg');\r\n  background-repeat: repeat;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-size: 10% 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-items: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n\r\n\r\n.animation-for-runner-sheep {\r\n  bottom: 10px;\r\n  position: fixed;\r\n  right: 10px;\r\n  /* animation-name: runner; */\r\n  z-index: 10;\r\n  width: 50px;\r\n  height: 50px;\r\n  animation-duration: 2s;\r\n  animation-direction: alternate-reverse;\r\n  animation-iteration-count: infinite;\r\n  background-image: url('sheep.png');\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.animation-for-runner-wolf {\r\n  bottom: 10px;\r\n  /* animation-name: runner; */\r\n  z-index: 10;\r\n  position: fixed;\r\n  left: 10px;\r\n  width: 50px;\r\n  height: 50px;\r\n  animation-duration: 1s;\r\n  animation-direction: alternate-reverse;\r\n  animation-iteration-count: infinite;\r\n  background-image: url('wolf.png');\r\n  background-size: 100% 100%;\r\n}\r\n\r\n@keyframes runner {\r\n  from {\r\n    transform: scale(1) skew(-10deg, -10deg) rotate(-0.1turn);\r\n  }\r\n\r\n  to {\r\n    transform: scale(0.8) skew(10deg, -10deg) rotate(0.1turn);\r\n  }\r\n}",""]),l.exports=a.toString()}},l=>{l.O(0,["vendor"],()=>{return i=2592,l(l.s=i);var i});l.O()}]);
//# sourceMappingURL=main.js.map