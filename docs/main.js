(self["webpackChunkztftrue_angular"] = self["webpackChunkztftrue_angular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _wolf_eat_sheep_wolf_eat_sheep_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wolf-eat-sheep/wolf-eat-sheep.component */ 184);
/* harmony import */ var _wolf_eat_sheep_help_wolf_eat_sheep_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wolf-eat-sheep-help/wolf-eat-sheep-help.component */ 8613);







const routes = [{
  path: '',
  redirectTo: '/wolf-eat-sheep',
  pathMatch: 'full'
}, {
  path: '',
  component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
  children: [{
    path: 'wolf-eat-sheep',
    component: _wolf_eat_sheep_wolf_eat_sheep_component__WEBPACK_IMPORTED_MODULE_1__.WolfEatSheepComponent
  }, {
    path: 'help',
    component: _wolf_eat_sheep_help_wolf_eat_sheep_help_component__WEBPACK_IMPORTED_MODULE_2__.WolfEatSheepHelpComponent
  }]
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true
  } // <-- debugging purposes only
  // <-- debugging purposes only
  // <-- debugging purposes only
  )],

  declarations: [],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
var _class;





let AppComponent = (_class = class AppComponent {
  // global = null;
  constructor(translate) {
    this.translate = translate;
    let language = navigator.language;
    const languages = ['zh', 'zh-CN'];
    if (languages.includes(language)) {
      language = 'zh';
    } else {
      language = 'en';
    }
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(language);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(language);
  }
  ngOnInit() {
    console.log('%c如果你不清楚你在做什么,那就不要在这里输入任何内容 ztf/true', 'color:red;font-size:1rem;');
  }
}, _class.ctorParameters = () => [{
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService
}], _class);
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3262);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _wolf_eat_sheep_wolf_eat_sheep_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wolf-eat-sheep/wolf-eat-sheep.component */ 184);
/* harmony import */ var _wolf_eat_sheep_help_wolf_eat_sheep_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wolf-eat-sheep-help/wolf-eat-sheep-help.component */ 8613);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 1558);






























// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent, _wolf_eat_sheep_wolf_eat_sheep_component__WEBPACK_IMPORTED_MODULE_3__.WolfEatSheepComponent, _wolf_eat_sheep_help_wolf_eat_sheep_help_component__WEBPACK_IMPORTED_MODULE_4__.WolfEatSheepHelpComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__.MatButtonToggleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
    }
  })],
  entryComponents: [],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 2284:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.html?ngResource */ 1670);
/* harmony import */ var _main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component.css?ngResource */ 1717);
/* harmony import */ var _main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




let MainComponent = (_class = class MainComponent {
  constructor() {
    this.title = 'ztftrue';
    this.currentRouterIndex = 0;
    this.menuStatus = true;
    this.menuData = [];
    this.disabledButton = false;
  }
  getMenu() {
    // 获取菜单时,验证头是否需要刷新
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
MainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-main',
  template: _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MainComponent);


/***/ }),

/***/ 8613:
/*!**********************************************************************!*\
  !*** ./src/app/wolf-eat-sheep-help/wolf-eat-sheep-help.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WolfEatSheepHelpComponent": () => (/* binding */ WolfEatSheepHelpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _wolf_eat_sheep_help_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wolf-eat-sheep-help.component.html?ngResource */ 1875);
/* harmony import */ var _wolf_eat_sheep_help_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wolf-eat-sheep-help.component.css?ngResource */ 856);
/* harmony import */ var _wolf_eat_sheep_help_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wolf_eat_sheep_help_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let WolfEatSheepHelpComponent = class WolfEatSheepHelpComponent {};
WolfEatSheepHelpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-wolf-eat-sheep-help',
  template: _wolf_eat_sheep_help_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_wolf_eat_sheep_help_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], WolfEatSheepHelpComponent);


/***/ }),

/***/ 8066:
/*!****************************************!*\
  !*** ./src/app/wolf-eat-sheep/node.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(x, y, gotoOne, gotoTwo, mId) {
    this.x = 0;
    this.y = 0;
    this.gotoOne = [];
    this.gotoTwo = [];
    this.mId = 0;
    this.x = x;
    this.y = y;
    this.gotoOne = gotoOne;
    this.gotoTwo = gotoTwo;
    this.mId = mId;
  }
}
// for (const value of this.allNode) {
// this.ctx.beginPath();
// this.ctx.strokeStyle = 'blue';
// this.ctx.fillStyle = 'blue';
// this.ctx.arc(value.x, value.y, 14, 0, 2 * Math.PI);
// this.ctx.fill();
// this.ctx.stroke();
// }
// 左狼窝尖 右狼窝尖 狼窝上尖 狼窝下尖 狼窝中、十字  左狼窝口 右狼窝口  小五花 大五花 横杠(左、右、上、下) 半五花(上、下)   地图角(左上、右上、左下、右下)
//    0      1       2      3         4         5       6       7     8        9  10 11 12        13  14         15   16   17   18

/***/ }),

/***/ 184:
/*!************************************************************!*\
  !*** ./src/app/wolf-eat-sheep/wolf-eat-sheep.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WolfEatSheepComponent": () => (/* binding */ WolfEatSheepComponent)
/* harmony export */ });
/* harmony import */ var _home_ztftrue_Documents_web_workspace_wolf_eat_sheap_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4672);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _wolf_eat_sheep_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wolf-eat-sheep.component.html?ngResource */ 5531);
/* harmony import */ var _wolf_eat_sheep_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wolf-eat-sheep.component.css?ngResource */ 7083);
/* harmony import */ var _wolf_eat_sheep_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wolf_eat_sheep_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @createjs/easeljs */ 8324);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node */ 8066);

var _class;







let WolfEatSheepComponent = (_class = class WolfEatSheepComponent {
  // audio.play();
  constructor(dialog) {
    this.dialog = dialog;
    this.dialogRef = null;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.allNode = [];
    this.initSheepNode = []; // 预先放置点
    this.initWolfNode = [];
    this.wolfNode = [];
    this.sheepNode = [];
    this.eatSheep = 0;
    this.whoRun = true; // true wolf false sheep
    this.remainSheep = 14;
    this.stage = null;
    this.r = 2; // 棋子大小参数
    this.lineDistance = 0; // 间距,线的距离
    this.isPlaying = false;
    this.audioSheepDied = new Audio('../../assets/sound/sheep_died.ogg');
    this.audioSheepMove = new Audio('../../assets/sound/sheep_move.mp3');
    this.audioWolfMove = new Audio('../../assets/sound/wolf_move.ogg');
  }
  ngOnInit() {}
  ngAfterViewInit() {
    // this.startGame()
  }
  init() {
    this.wolfNode = [];
    this.sheepNode = [];
    this.eatSheep = 0;
    this.whoRun = true; // true wolf false sheep
    this.selectNode = null;
    this.remainSheep = 14;
    // 开始之前先调屏幕全屏,横屏
    const c = document.getElementById('myCanvas');
    this.canvasWidth = document.body.clientWidth;
    this.canvasHeight = document.body.clientHeight - 20;
    // M: 10
    let x = Math.floor(this.canvasWidth / 10);
    // M: 6
    let y = Math.floor(this.canvasHeight / 6);
    // 取最小值使用
    let m = Math.min(x, y);
    c.width = m * 10;
    c.height = m * 6;
    this.lineDistance = m;
    if (this.stage == null) {
      this.stage = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Stage("myCanvas");
    } else {
      this.stage.removeAllChildren();
    }
    this.drawLine(m);
    this.initNode();
    this.drwaNode(m);
    this.stage.update();
    _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Ticker.on("tick", this.stage);
  }
  drwaNode(m) {
    let w = m / this.r;
    this.allNode.forEach(item => {
      var bitmap = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Bitmap("../../assets/wolf_eat_sheep/sheep.png");
      bitmap.addEventListener("click", event => {
        this.canvasClick(event);
      });
      let scale = m / (bitmap.image.width * this.r);
      bitmap.scaleX = scale;
      bitmap.scaleY = scale;
      bitmap.set({
        type: 2,
        posi: 0
      });
      bitmap.x = m * item.x - w / 2;
      bitmap.y = m * item.y - w / 2;
      bitmap.set({
        type: 0,
        mId: item.mId,
        alpha: 0.1,
        goto1: item.gotoOne,
        goto2: item.gotoTwo
      });
      this.stage.addChild(bitmap);
    });
    this.initSheepNode.forEach(item => {
      var bitmap = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Bitmap("../../assets/wolf_eat_sheep/sheep.png");
      bitmap.addEventListener("click", event => {
        this.canvasClick(event);
      });
      let scale = m / (bitmap.image.width * this.r);
      bitmap.scaleX = scale;
      bitmap.scaleY = scale;
      bitmap.set({
        type: 2,
        mId: item.mId,
        goto1: item.gotoOne,
        goto2: item.gotoTwo
      });
      bitmap.x = m * item.x - w / 2;
      bitmap.y = m * item.y - w / 2;
      this.sheepNode.push(bitmap);
      this.stage.addChild(bitmap);
    });
    this.initWolfNode.forEach(item => {
      var bitmap = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Bitmap("../../../assets/wolf_eat_sheep/wolf.png");
      bitmap.addEventListener("click", event => {
        this.canvasClick(event);
      });
      this.wolfNode.push(bitmap);
      let scale = m / (bitmap.image.width * this.r);
      bitmap.scaleX = scale;
      bitmap.scaleY = scale;
      bitmap.x = m * item.x - w / 2;
      bitmap.y = m * item.y - w / 2;
      bitmap.set({
        type: 1,
        mId: item.mId,
        goto1: item.gotoOne,
        goto2: item.gotoTwo
      });
      this.stage.addChild(bitmap);
    });
  }
  drawLine(m) {
    var g = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Graphics();
    g.setStrokeStyle(m / 20);
    g.beginStroke("#fec450");
    // if hava mirror 
    // outline
    g.drawRect(m * 3, m, m * 4, m * 4);
    // horizontal line 1
    g.moveTo(m * 3, m * 2);
    g.lineTo(m * 7, m * 2);
    // horizontal line 2
    g.moveTo(m * 1, m * 3);
    g.lineTo(m * 9, m * 3);
    // horizontal line 3
    g.moveTo(m * 3, m * 4);
    g.lineTo(m * 7, m * 4);
    // vertical line 1
    g.moveTo(m * 4, m);
    g.lineTo(m * 4, m * 5);
    // vertical line 2
    g.moveTo(m * 5, m);
    g.lineTo(m * 5, m * 5);
    // vertical line 3
    g.moveTo(m * 6, m);
    g.lineTo(m * 6, m * 5);
    //  
    g.moveTo(m * 3, m);
    g.lineTo(m * 7, m * 5);
    //  
    g.moveTo(m * 7, m);
    g.lineTo(m * 3, m * 5);
    //  
    g.moveTo(m * 5, m);
    g.lineTo(m * 2, m * 4);
    //  
    g.moveTo(m * 5, m);
    g.lineTo(m * 8, m * 4);
    //  
    g.moveTo(m * 5, m * 5);
    g.lineTo(m * 2, m * 2);
    //  
    g.moveTo(m * 5, m * 5);
    g.lineTo(m * 8, m * 2);
    // 狼窝竖线
    g.moveTo(m * 2, m * 4);
    g.lineTo(m * 2, m * 2);
    // 狼窝竖线
    g.moveTo(m * 8, m * 4);
    g.lineTo(m * 8, m * 2);
    // 狼窝顶端斜线(左)
    g.moveTo(m * 2, m * 4);
    g.lineTo(m, m * 3);
    // 狼窝顶端斜线(左)
    g.moveTo(m * 2, m * 2);
    g.lineTo(m, m * 3);
    // 狼窝顶端斜线(右)
    g.moveTo(m * 8, m * 4);
    g.lineTo(m * 9, m * 3);
    // 狼窝顶端斜线(右)
    g.moveTo(m * 8, m * 2);
    g.lineTo(m * 9, m * 3);
    var s = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Shape(g);
    s.x = 0;
    s.y = 0;
    this.stage.addChild(s);
  }
  canvasClick(event) {
    let b = event.target;
    if (this.whoRun) {
      // wolf
      if (b['type'] === 2) {
        return;
      } else if (b['type'] === 1) {
        if (this.selectNode != null) {
          this.selectNode.shadow = null;
          this.selectNode.set({
            alpha: 1
          });
        }
        b.shadow = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Shadow("#002200", 5, 5, 10);
        b.set({
          alpha: 0.8
        });
        this.selectNode = b;
        this.stage.update();
      } else {
        if (this.selectNode != null) {
          let cId = b['mId'];
          let goto1 = this.selectNode['goto1'];
          let goto2 = this.selectNode['goto2'];
          for (const iterator of goto1) {
            if (cId == iterator) {
              this.selectNode.x = b.x;
              this.selectNode.y = b.y;
              this.selectNode.shadow = null;
              this.selectNode.set({
                alpha: 1,
                goto1: b['goto1'],
                goto2: b['goto2'],
                mId: cId
              });
              this.selectNode = null;
              this.whoRun = false;
              this.audioWolfMove.play();
              this.stage.update();
              return;
            }
          }
          for (const iterator of goto2) {
            if (cId == iterator[0]) {
              for (let index = 0; index < this.sheepNode.length; index++) {
                const iteratorSheep = this.sheepNode[index];
                let sId = iteratorSheep['mId'];
                if (sId == iterator[1]) {
                  this.selectNode.x = b.x;
                  this.selectNode.y = b.y;
                  this.selectNode.shadow = null;
                  this.selectNode.set({
                    alpha: 1,
                    goto1: b['goto1'],
                    goto2: b['goto2'],
                    mId: cId
                  });
                  this.selectNode = null;
                  this.stage.removeChild(iteratorSheep);
                  this.sheepNode.splice(index, 1);
                  ++this.eatSheep;
                  this.audioSheepDied.play();
                  this.whoRun = false;
                  this.stage.update();
                  return;
                }
              }
            }
          }
        }
      }
      this.stage.update();
    } else {
      if (event.target['type'] === 1) {
        return;
      } else if (b['type'] === 2) {
        if (this.remainSheep !== 0) {
          return;
        }
        if (this.selectNode != null) {
          this.selectNode.shadow = null;
          this.selectNode.set({
            alpha: 1
          });
        }
        b.shadow = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Shadow("#002200", 5, 5, 10);
        b.set({
          alpha: 0.8
        });
        this.selectNode = b;
        this.stage.update();
      } else {
        let cId = b['mId'];
        if (this.selectNode != null) {
          let goto1 = this.selectNode['goto1'];
          for (const iterator of goto1) {
            if (cId == iterator) {
              this.selectNode.x = b.x;
              this.selectNode.y = b.y;
              this.selectNode.shadow = null;
              this.selectNode.set({
                alpha: 1,
                goto1: b['goto1'],
                mId: cId
              });
              this.selectNode = null;
              this.whoRun = true;
              this.audioSheepMove.play();
              this.stage.update();
              return;
            }
          }
        } else if (this.remainSheep > 0) {
          var bitmap = new _createjs_easeljs__WEBPACK_IMPORTED_MODULE_3__.Bitmap("../../../assets/wolf_eat_sheep/sheep.png");
          bitmap.addEventListener("click", event => {
            this.canvasClick(event);
          });
          bitmap.scaleX = b['scale'];
          bitmap.scaleY = b['scale'];
          bitmap.set({
            type: 2,
            mId: cId,
            goto1: b['goto1']
          });
          bitmap.x = b.x;
          bitmap.y = b.y;
          this.sheepNode.push(bitmap);
          this.stage.addChild(bitmap);
          this.whoRun = true;
          --this.remainSheep;
          this.audioSheepMove.play();
          this.stage.update();
        }
      }
    }
  }
  initNode() {
    if (this.allNode.length > 0) {
      return;
    }
    // 从左向右， 从上到下初始化点
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(3, 1, [2, 7, 8], [[3, 2], [17, 8], [15, 7]], 1));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(4, 1, [1, 3, 8], [[4, 3], [16, 8]], 2));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(5, 1, [2, 4, 8, 9, 10], [[1, 2], [5, 4], [15, 8], [17, 9], [19, 10]], 3));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(6, 1, [3, 5, 10], [[2, 3], [18, 10]], 4));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(7, 1, [4, 10, 11], [[3, 4], [17, 10], [19, 11]], 5));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(2, 2, [13, 14, 15], [[22, 14], [24, 15]], 6));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(3, 2, [15, 1, 8], [[23, 15], [9, 8]], 7));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(4, 2, [7, 1, 2, 3, 9, 17, 16, 15], [[26, 17], [24, 16], [22, 15], [10, 9]], 8));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(5, 2, [3, 8, 17, 10], [[7, 8], [11, 10], [25, 17]], 9));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(6, 2, [9, 17, 18, 19, 11, 5, 4, 3], [[8, 9], [24, 17], [26, 18], [28, 19]], 10));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(7, 2, [5, 10, 19], [[27, 19], [9, 10]], 11));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(8, 2, [19, 20, 21], [[28, 20], [26, 19]], 12));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(1, 3, [6, 14, 22], [[15, 14]], 13));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(2, 3, [6, 13, 22, 15], [[16, 15]], 14));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(3, 3, [6, 22, 14, 16, 24, 23, 8, 7], [[3, 8], [17, 16], [31, 24], [29, 23], [1, 7], [13, 14]], 15));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(4, 3, [15, 8, 17, 24], [[14, 14], [30, 24], [18, 17], [2, 8]], 16));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(5, 3, [8, 16, 24, 25, 26, 18, 10, 9], [[29, 24], [31, 25], [33, 26], [19, 18], [5, 10], [3, 9], [1, 8], [15, 16]], 17));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(6, 3, [10, 17, 19, 26], [[16, 17], [4, 10], [32, 26], [20, 19]], 18));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(7, 3, [11, 10, 18, 26, 27, 28, 20, 12], [[3, 10], [5, 11], [33, 27], [31, 26], [17, 18], [21, 21]], 19));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(8, 3, [12, 19, 28, 21], [[18, 19]], 20));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(9, 3, [12, 20, 28], [[19, 20]], 21));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(2, 4, [13, 14, 15], [[8, 15], [6, 14]], 22));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(3, 4, [15, 24, 29], [[25, 24], [7, 15]], 23));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(4, 4, [15, 23, 29, 30, 31, 25, 17, 16], [[6, 15], [10, 17], [8, 16], [26, 25]], 24));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(5, 4, [24, 31, 26, 17], [[23, 24], [9, 17], [27, 26]], 25));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(6, 4, [17, 18, 19, 27, 33, 32, 31, 25], [[12, 19], [8, 17], [10, 18], [24, 25]], 26));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(7, 4, [33, 26, 19], [[11, 19], [25, 26]], 27));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(8, 4, [19, 20, 21], [[10, 19], [12, 20]], 28));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(3, 5, [23, 24, 30], [[15, 23], [31, 30], [17, 24]], 29));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(4, 5, [29, 24, 31], [[16, 24], [32, 31]], 30));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(5, 5, [30, 24, 25, 26, 32], [[17, 25], [15, 24], [19, 26], [33, 32], [29, 30]], 31));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(6, 5, [31, 26, 33], [[18, 26], [30, 31]], 32));
    this.allNode.push(new _node__WEBPACK_IMPORTED_MODULE_4__.Node(7, 5, [27, 26, 32], [[17, 26], [19, 27], [31, 32]], 33));
    // [初始点]
    this.initSheepNode.push(this.allNode[8 - 1]);
    this.initSheepNode.push(this.allNode[9 - 1]);
    this.initSheepNode.push(this.allNode[10 - 1]);
    this.initSheepNode.push(this.allNode[16 - 1]);
    this.initSheepNode.push(this.allNode[18 - 1]);
    this.initSheepNode.push(this.allNode[24 - 1]);
    this.initSheepNode.push(this.allNode[25 - 1]);
    this.initSheepNode.push(this.allNode[26 - 1]);
    // 初始狼
    this.initWolfNode.push(this.allNode[15 - 1]);
    this.initWolfNode.push(this.allNode[19 - 1]);
  }
  startGame() {
    this.isPlaying = true;
    this.requestFullScreen();
    this.init(); // 需要执行两次 ？
    setTimeout(() => {
      this.init();
    }, 500);
  }
  requestFullScreen() {
    return (0,_home_ztftrue_Documents_web_workspace_wolf_eat_sheap_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        yield element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        yield element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        yield element.mozRequestFullScreen();
      }
      if (screen.orientation.lock) screen.orientation.lock('landscape-primary').then(function (value) {}, function (e) {});
    })();
  }
}, _class.ctorParameters = () => [{
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog
}], _class);
WolfEatSheepComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-wolf-eat-sheep',
  template: _wolf_eat_sheep_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_wolf_eat_sheep_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], WolfEatSheepComponent);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1717:
/*!****************************************************!*\
  !*** ./src/app/main/main.component.css?ngResource ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.main {\r\n  overflow: hidden;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.page {\r\n  padding: 0;\r\n  height: 100%;\r\n  display: flex;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  flex-direction: column;\r\n}\r\n\r\n.content {\r\n  height: 100%;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom: 0.1rem solid rgb(240, 240, 240);\r\n  background-color: white;\r\n  height: 2.8rem;\r\n  align-content: center;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.menu {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  width: 200px;\r\n  float: left;\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  background: whitesmoke;\r\n  border-right: 1px solid ghostwhite;\r\n  float: left;\r\n}\r\n\r\n.page-menu {\r\n  width: calc(100vw - 200px)\r\n}\r\n\r\n.page-nomenu {\r\n  width: 100vw\r\n}\r\n\r\n\r\n.menu-button {\r\n  width: 200px;\r\n  text-align: start;\r\n  border-radius: 0;\r\n  border: none;\r\n  outline: none;\r\n  margin-top: 5px;\r\n}\r\n\r\n.menu-item {\r\n  margin: 0px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.menu-switch-button {\r\n  outline: none;\r\n  flex-shrink: 0;\r\n}\r\n\r\n\r\n\r\n.header-img {\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0px;\r\n  box-shadow: 1px 1px 5px 1px rgb(223, 223, 223);\r\n}\r\n\r\n.user-name {\r\n  padding: 5px 3px;\r\n}\r\n\r\n.header-img:hover {\r\n  box-shadow: 1px 1px 5px 1px rgb(196, 196, 196);\r\n}\r\n\r\n.user-menu {\r\n  width: 200px;\r\n  margin: 0px;\r\n  flex-shrink: 0;\r\n  background-color: beige;\r\n}\r\n\r\n.menu-user-header {\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n@keyframes animal {\r\n  0% {}\r\n\r\n  50% {}\r\n\r\n  100% {\r\n    background: #81bbffff\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/app/main/main.component.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8CAA8C;EAC9C,uBAAuB;EACvB,cAAc;EACd,qBAAqB;EACrB,8BAA8B;EAC9B,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;;AAGA;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;;;AAIA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,8CAA8C;AAChD;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,IAAI;;EAEJ,KAAK;;EAEL;IACE;EACF;AACF","sourcesContent":["a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.main {\r\n  overflow: hidden;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.page {\r\n  padding: 0;\r\n  height: 100%;\r\n  display: flex;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  flex-direction: column;\r\n}\r\n\r\n.content {\r\n  height: 100%;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom: 0.1rem solid rgb(240, 240, 240);\r\n  background-color: white;\r\n  height: 2.8rem;\r\n  align-content: center;\r\n  justify-content: space-between;\r\n  justify-items: center;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.menu {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  width: 200px;\r\n  float: left;\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  background: whitesmoke;\r\n  border-right: 1px solid ghostwhite;\r\n  float: left;\r\n}\r\n\r\n.page-menu {\r\n  width: calc(100vw - 200px)\r\n}\r\n\r\n.page-nomenu {\r\n  width: 100vw\r\n}\r\n\r\n\r\n.menu-button {\r\n  width: 200px;\r\n  text-align: start;\r\n  border-radius: 0;\r\n  border: none;\r\n  outline: none;\r\n  margin-top: 5px;\r\n}\r\n\r\n.menu-item {\r\n  margin: 0px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.menu-switch-button {\r\n  outline: none;\r\n  flex-shrink: 0;\r\n}\r\n\r\n\r\n\r\n.header-img {\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0px;\r\n  box-shadow: 1px 1px 5px 1px rgb(223, 223, 223);\r\n}\r\n\r\n.user-name {\r\n  padding: 5px 3px;\r\n}\r\n\r\n.header-img:hover {\r\n  box-shadow: 1px 1px 5px 1px rgb(196, 196, 196);\r\n}\r\n\r\n.user-menu {\r\n  width: 200px;\r\n  margin: 0px;\r\n  flex-shrink: 0;\r\n  background-color: beige;\r\n}\r\n\r\n.menu-user-header {\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n@keyframes animal {\r\n  0% {}\r\n\r\n  50% {}\r\n\r\n  100% {\r\n    background: #81bbffff\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 856:
/*!**********************************************************************************!*\
  !*** ./src/app/wolf-eat-sheep-help/wolf-eat-sheep-help.component.css?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#shadow {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  line-height: 2rem;\r\n  font-size: 1.2rem;\r\n  overflow-y: auto;\r\n  height: 100vh;\r\n}\r\n\r\np {\r\n  text-indent: 1em;\r\n}\r\n\r\n.title {\r\n  font-size: 1.4rem;\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.button-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.video-wolf {\r\n  width: 100%;\r\n}\r\n\r\n.image-1 {\r\n  height: 30vw;\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n  .image-1 {\r\n    height:  70vw;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/app/wolf-eat-sheep-help/wolf-eat-sheep-help.component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE;IACE,aAAa;EACf;AACF","sourcesContent":["#shadow {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  line-height: 2rem;\r\n  font-size: 1.2rem;\r\n  overflow-y: auto;\r\n  height: 100vh;\r\n}\r\n\r\np {\r\n  text-indent: 1em;\r\n}\r\n\r\n.title {\r\n  font-size: 1.4rem;\r\n  margin-bottom: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.button-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.video-wolf {\r\n  width: 100%;\r\n}\r\n\r\n.image-1 {\r\n  height: 30vw;\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n  .image-1 {\r\n    height:  70vw;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7083:
/*!************************************************************************!*\
  !*** ./src/app/wolf-eat-sheep/wolf-eat-sheep.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tip {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n  justify-items: center;\r\n  width: 100vw;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  color: blue;\r\n  flex-wrap: nowrap;\r\n  position: relative;\r\n  background-color: rgba(250, 235, 215, 0.582);\r\n  z-index: 10;\r\n  font-weight: bold;\r\n  height: 20px;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n  top: 0;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.run-tip {\r\n  width: 100px;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n}\r\n\r\n#myCanvas {\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n}\r\n\r\n.screen-grass {\r\n  background-image: url('grass_back.jpg');\r\n  background-repeat: repeat;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-size: 10% 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-items: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n\r\n\r\n.animation-for-runner-sheep {\r\n  bottom: 10px;\r\n  position: fixed;\r\n  right: 10px;\r\n  /* animation-name: runner; */\r\n  z-index: 10;\r\n  width: 50px;\r\n  height: 50px;\r\n  animation-duration: 2s;\r\n  animation-direction: alternate-reverse;\r\n  animation-iteration-count: infinite;\r\n  background-image: url('sheep.png');\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.animation-for-runner-wolf {\r\n  bottom: 10px;\r\n  /* animation-name: runner; */\r\n  z-index: 10;\r\n  position: fixed;\r\n  left: 10px;\r\n  width: 50px;\r\n  height: 50px;\r\n  animation-duration: 1s;\r\n  animation-direction: alternate-reverse;\r\n  animation-iteration-count: infinite;\r\n  background-image: url('wolf.png');\r\n  background-size: 100% 100%;\r\n}\r\n\r\n@keyframes runner {\r\n  from {\r\n    transform: scale(1) skew(-10deg, -10deg) rotate(-0.1turn);\r\n  }\r\n\r\n  to {\r\n    transform: scale(0.8) skew(10deg, -10deg) rotate(0.1turn);\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/app/wolf-eat-sheep/wolf-eat-sheep.component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,qBAAqB;EACrB,YAAY;EACZ,yBAAiB;UAAjB,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,4CAA4C;EAC5C,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,MAAM;EACN,cAAc;EACd,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;AACd;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,uCAAmE;EACnE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;;;AAIA;EACE,YAAY;EACZ,eAAe;EACf,WAAW;EACX,4BAA4B;EAC5B,WAAW;EACX,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,sCAAsC;EACtC,mCAAmC;EACnC,kCAA8D;EAC9D,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,WAAW;EACX,eAAe;EACf,UAAU;EACV,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,sCAAsC;EACtC,mCAAmC;EACnC,iCAA6D;EAC7D,0BAA0B;AAC5B;;AAEA;EACE;IACE,yDAAyD;EAC3D;;EAEA;IACE,yDAAyD;EAC3D;AACF","sourcesContent":[".tip {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n  justify-items: center;\r\n  width: 100vw;\r\n  user-select: none;\r\n  color: blue;\r\n  flex-wrap: nowrap;\r\n  position: relative;\r\n  background-color: rgba(250, 235, 215, 0.582);\r\n  z-index: 10;\r\n  font-weight: bold;\r\n  height: 20px;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n  top: 0;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.run-tip {\r\n  width: 100px;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n}\r\n\r\n#myCanvas {\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n}\r\n\r\n.screen-grass {\r\n  background-image: url('../../assets/wolf_eat_sheep/grass_back.jpg');\r\n  background-repeat: repeat;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-size: 10% 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-items: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n\r\n\r\n.animation-for-runner-sheep {\r\n  bottom: 10px;\r\n  position: fixed;\r\n  right: 10px;\r\n  /* animation-name: runner; */\r\n  z-index: 10;\r\n  width: 50px;\r\n  height: 50px;\r\n  animation-duration: 2s;\r\n  animation-direction: alternate-reverse;\r\n  animation-iteration-count: infinite;\r\n  background-image: url('../../assets/wolf_eat_sheep/sheep.png');\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.animation-for-runner-wolf {\r\n  bottom: 10px;\r\n  /* animation-name: runner; */\r\n  z-index: 10;\r\n  position: fixed;\r\n  left: 10px;\r\n  width: 50px;\r\n  height: 50px;\r\n  animation-duration: 1s;\r\n  animation-direction: alternate-reverse;\r\n  animation-iteration-count: infinite;\r\n  background-image: url('../../assets/wolf_eat_sheep/wolf.png');\r\n  background-size: 100% 100%;\r\n}\r\n\r\n@keyframes runner {\r\n  from {\r\n    transform: scale(1) skew(-10deg, -10deg) rotate(-0.1turn);\r\n  }\r\n\r\n  to {\r\n    transform: scale(0.8) skew(10deg, -10deg) rotate(0.1turn);\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>";

/***/ }),

/***/ 1670:
/*!*****************************************************!*\
  !*** ./src/app/main/main.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"main\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n";

/***/ }),

/***/ 1875:
/*!***********************************************************************************!*\
  !*** ./src/app/wolf-eat-sheep-help/wolf-eat-sheep-help.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"shadow\">\r\n  <span class=\"title\">{{ \"wolf-eat-sheep\" | translate }}</span>\r\n  <div>\r\n    <p style=\"font-size: 1.2rem;text-align: center\">\r\n      {{ \"full-screen-play-tip\" | translate }}\r\n    </p>\r\n    {{ \"how-do-play\" | translate }}\r\n    <p>{{ \"how-to-play-one\" | translate }}</p>\r\n    {{ \"how-to-play-map\" | translate }} <br />\r\n    <img class=\"image-1\" src=\"../../../../assets/teach_wolf/map.jpg\" /> <br />\r\n    <span style=\"color: red\">{{ \"wolf-move\" | translate }}</span>\r\n    <p>{{ \"wolf-move-introduction\" | translate }}</p>\r\n    <img class=\"image-1\" src=\"../../../../assets/teach_wolf/wolf.jpg\" />\r\n    <img class=\"image-1\" src=\"../../../../assets/teach_wolf/wolf_cant.jpg\" />\r\n    <p style=\"color: green;\">{{ \"sheep-move\" | translate }}</p>\r\n    <p style=\"color:red;font-size: 1.2rem\">{{ \"warning\" | translate }}</p>\r\n    <span style=\"color: blue;\"> {{ \"victory-or-defeat\" | translate }} </span>\r\n    <p>{{ \"victory-or-defeat-introduction\" | translate }}</p>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 5531:
/*!*************************************************************************!*\
  !*** ./src/app/wolf-eat-sheep/wolf-eat-sheep.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"screen-grass\">\r\n  <div class=\"tip\">\r\n    <span>{{'remain-sheep'|translate}}: {{this.remainSheep}}\r\n    </span>\r\n    <div class=\"run-tip\">\r\n      <button mat-flat-button color=\"primary\" style=\"outline: none\"\r\n        (click)=\"startGame()\">{{this.isPlaying?'Repaly':'Play'}}</button>\r\n    </div>\r\n    <a routerLink=\"/help\" routerLinkActive=\"active\" ariaCurrentWhenActive=\"page\">{{'help'|translate}}</a>\r\n    <span>{{'eat-sheep'|translate}}: {{this.eatSheep}}</span>\r\n  </div>\r\n  <canvas id=\"myCanvas\" height=\"0px\" width=\"0px\"></canvas>\r\n  <div [style.width.px]=\"m\" [style.height.px]=\"m\"\r\n    class=\"{{this.whoRun?'animation-for-runner-wolf':'animation-for-runner-sheep'}}\">\r\n\r\n  </div>\r\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map