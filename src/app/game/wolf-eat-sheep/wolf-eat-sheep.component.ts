import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Node } from './node';
import { WolfEatSheepDialogComponent } from './wolf-eat-sheep-dialog/wolf-eat-sheep-dialog.component';
import {
  Scene, Color, PerspectiveCamera, AmbientLight, DirectionalLight, TextureLoader, RepeatWrapping, sRGBEncoding, MeshLambertMaterial,
  Mesh, PlaneBufferGeometry, WebGLRenderer, BoxBufferGeometry, MeshBasicMaterial, MultiplyOperation, LinearMipmapLinearFilter, RGBFormat, WebGLCubeRenderTarget
} from 'three';
import { OrbitControls } from '../../threejs/controls/OrbitControls'
@Component({
  selector: 'app-wolf-eat-sheep',
  templateUrl: './wolf-eat-sheep.component.html',
  styleUrls: ['./wolf-eat-sheep.component.css'],
  providers: [Scene]
})
export class WolfEatSheepComponent implements OnInit, AfterViewInit {
  dialogRef = null;
  screenWidth = 0;
  screenHeight = 0;
  allNode: Node[] = [];
  initSheepNode: Node[] = []; // 预先放置点
  initWolfNode: Node[] = [];
  wolfNode: Node[] = [];
  sheepNode: Node[] = [];
  eatSheep = 0;
  who = true; // true wolf false sheep
  selectNode: Node = new Node(0, 0, 0);
  lastSelectNode: Node = new Node(0, 0, 0);
  loding = true;
  ctx: any;
  isNoPlaying = true; // 是否playing
  dontPlay = false; // 停止玩
  showViews = false;
  remainSheep = 14;

  reduceNumber = 50; // 上下
  pointRange = 20;
  // scene = new Scene();
  container;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  roadLineMaterial: MeshBasicMaterial;
  @ViewChild('three', { static: true }) threeElement: ElementRef;
  constructor(public dialog: MatDialog, private cdref: ChangeDetectorRef, private scene: Scene) { }


  init() {
    this.roadLineMaterial = new MeshBasicMaterial({
      color: 0xBE9F79,
      combine: MultiplyOperation,
      reflectivity: 1,
    });
    this.container = this.threeElement.nativeElement;
    this.scene.background = new Color(0xcce0ff);
    // camera
    this.camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set(0, 5000, 0);
    // this.camera.rotateX(-(Math.PI / 180) * 90);
    // lights
    this.scene.add(new AmbientLight(0x666666));

    const light = new DirectionalLight(0xdfebff, 1);
    light.position.set(50, 200, 100);
    light.position.multiplyScalar(1.3);

    light.castShadow = true;

    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    const d = 300;

    light.shadow.camera.left = - d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = - d;

    light.shadow.camera.far = 1000;

    this.scene.add(light);


    const loader = new TextureLoader();

    const groundTexture = loader.load('../assets/threejs/file/grasslight-big.jpg');
    groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(25, 25);
    groundTexture.anisotropy = 16;
    groundTexture.encoding = sRGBEncoding;

    const groundMaterial = new MeshLambertMaterial({ map: groundTexture });

    let mesh = new Mesh(new PlaneBufferGeometry(20000, 20000), groundMaterial);
    mesh.position.y = 0;
    mesh.rotation.x = - Math.PI / 2;
    mesh.receiveShadow = true;
    this.scene.add(mesh);

    this.addBoxLine();
    this.addApexRight();
    this.addApexLeft();
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    this.renderer.outputEncoding = sRGBEncoding;
    this.renderer.shadowMap.enabled = true;
    // controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 100;
    controls.maxDistance = 5000;

    window.addEventListener('resize', (event) => { this.onWindowResize() }, false);
    // const gui = new GUI();
    // this.render();
    this.animate();
  }

  addBoxLine() {
    let cubeV = new Mesh(new BoxBufferGeometry(50, 20, 2000), this.roadLineMaterial);
    const cube = new Mesh(new BoxBufferGeometry(50, 20, 3700), this.roadLineMaterial);
    cubeV.position.set(0, 0, 0);
    cube.position.set(0, 0, 0);
    cube.rotateY(Math.PI * 0.5);
    this.scene.add(cubeV);
    this.scene.add(cube);
    // set vertical line
    for (let i = -2; i < 3; i++) {
      const cube = new Mesh(new BoxBufferGeometry(50, 20, 2000), this.roadLineMaterial);
      cube.position.set(0, 0, 500 * i);
      cube.rotateY(Math.PI * 0.5);
      this.scene.add(cube);
    }
    // set horizontal line
    for (let i = -2; i < 3; i++) {
      const cube = new Mesh(new BoxBufferGeometry(50, 20, 2000), this.roadLineMaterial);
      cube.position.set(500 * i, 0, 0);
      this.scene.add(cube);
    }
    // diagonal , shoud use circle
    let inclinedLine1 = new Mesh(new BoxBufferGeometry(50, 20, 2855), this.roadLineMaterial);
    inclinedLine1.position.set(0, 0, 0);
    inclinedLine1.rotateY(Math.PI * 0.25);
    this.scene.add(inclinedLine1);
    let inclinedLine2 = new Mesh(new BoxBufferGeometry(50, 20, 2855), this.roadLineMaterial);
    inclinedLine2.position.set(0, 0, 0);
    inclinedLine2.rotateY(Math.PI * -0.25);
    this.scene.add(inclinedLine2);
    {
      let inclinedLeftTopRightDown = new Mesh(new BoxBufferGeometry(50, 20, 2065), this.roadLineMaterial);
      inclinedLeftTopRightDown.position.set(720, 0, -280);
      inclinedLeftTopRightDown.rotateY(Math.PI * 0.25);
      this.scene.add(inclinedLeftTopRightDown);
      let inclinedLeftDownRightTop = new Mesh(new BoxBufferGeometry(50, 20, 2065), this.roadLineMaterial);
      inclinedLeftDownRightTop.position.set(720, 0, 280);
      inclinedLeftDownRightTop.rotateY(Math.PI * -0.25);
      this.scene.add(inclinedLeftDownRightTop);
    }

    {
      let inclinedRightTopLeftDown = new Mesh(new BoxBufferGeometry(50, 20, 2065), this.roadLineMaterial);
      inclinedRightTopLeftDown.position.set(-720, 0, -280);
      inclinedRightTopLeftDown.rotateY(Math.PI * -0.25);
      this.scene.add(inclinedRightTopLeftDown);
      let inclinedRightBottomLeftTop = new Mesh(new BoxBufferGeometry(50, 20, 2065), this.roadLineMaterial);
      inclinedRightBottomLeftTop.position.set(-720, 0, 280);
      inclinedRightBottomLeftTop.rotateY(Math.PI * 0.25);
      this.scene.add(inclinedRightBottomLeftTop);
    }
  }

  addApexRight() {
    const cube1 = new Mesh(new BoxBufferGeometry(50, 20, 920), this.roadLineMaterial);
    cube1.position.set(1450, 0, 0);
    this.scene.add(cube1);
    let inclinedLeftTopRightDown = new Mesh(new BoxBufferGeometry(50, 20, 650), this.roadLineMaterial);
    inclinedLeftTopRightDown.position.set(1660, 0, -235);
    inclinedLeftTopRightDown.rotateY(Math.PI * 0.25);
    this.scene.add(inclinedLeftTopRightDown);
    let inclinedLeftDownRightTop = new Mesh(new BoxBufferGeometry(50, 20, 650), this.roadLineMaterial);
    inclinedLeftDownRightTop.position.set(1660, 0, 235);
    inclinedLeftDownRightTop.rotateY(Math.PI * -0.25);
    this.scene.add(inclinedLeftDownRightTop);
  }
  addApexLeft() {
    const cube1 = new Mesh(new BoxBufferGeometry(50, 20, 920), this.roadLineMaterial);
    cube1.position.set(-1450, 0, 0);
    this.scene.add(cube1);
    let inclinedLeftTopRightDown = new Mesh(new BoxBufferGeometry(50, 20, 650), this.roadLineMaterial);
    inclinedLeftTopRightDown.position.set(-1660, 0, -235);
    inclinedLeftTopRightDown.rotateY(Math.PI * -0.25);
    this.scene.add(inclinedLeftTopRightDown);
    let inclinedLeftDownRightTop = new Mesh(new BoxBufferGeometry(50, 20, 650), this.roadLineMaterial);
    inclinedLeftDownRightTop.position.set(-1660, 0, 235);
    inclinedLeftDownRightTop.rotateY(Math.PI * 0.25);
    this.scene.add(inclinedLeftDownRightTop);
  }
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }



  ngOnInit() {
    console.log(this.scene)

  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.openDialog();
    // }, 0);
    // this.cdref.detectChanges();
    this.init()
  }
  // init() {
  //   const c: any = document.getElementById('myCanvas');
  //   this.screenWidth = document.body.clientWidth;
  //   this.screenHeight = document.body.clientHeight - 30;
  //   if (this.screenWidth % 2 !== 0) {
  //     // 确保无浮点数
  //     this.screenWidth = this.screenWidth - 1;
  //   }
  //   if (this.screenHeight % 2 !== 0) {
  //     // 确保浮点数只有一位小数
  //     this.screenHeight = this.screenHeight - 1;
  //   }
  //   this.reduceNumber = Math.floor(this.screenHeight / 6);
  //   // this.pointRange = this.reduceNumber;
  //   c.height = this.screenHeight;
  //   c.width = this.screenWidth;
  //   this.ctx = c.getContext('2d');
  //   this.ctx.shadowBlur = 0;
  //   this.ctx.shadowOffsetX = 0;
  //   this.ctx.shadowOffsetY = 0;
  //   this.ctx.lineWidth = 1;
  //   this.ctx.fillStyle = 'rgb(248, 233, 206)';
  //   const _this = this;
  //   const base_image = new Image();
  //   base_image.src = '../../../assets/wolf_eat_sheep/sheep.png';
  //   base_image.onload = function() {
  //     _this.ctx.drawImage(
  //       base_image,
  //       _this.reduceNumber / 2,
  //       0,
  //       (_this.screenHeight - _this.reduceNumber * 2) / 4,
  //       (_this.screenHeight - _this.reduceNumber * 2) / 4
  //     );
  //   };
  //   const base_image1 = new Image();
  //   base_image1.src = '../../../assets/wolf_eat_sheep/wolf.png';
  //   base_image1.onload = function() {
  //     _this.ctx.drawImage(
  //       base_image1,
  //       _this.screenWidth -
  //         (_this.screenHeight - _this.reduceNumber * 2) / 4 -
  //         _this.reduceNumber / 2,
  //       0,
  //       (_this.screenHeight - _this.reduceNumber * 2) / 4,
  //       (_this.screenHeight - _this.reduceNumber * 2) / 4
  //     );
  //   };
  //   this.ctx.beginPath();
  //   this.ctx.fillRect(0, 0, c.width, c.height);
  //   this.ctx.closePath();
  //   this.ctx.rect(
  //     this.screenWidth / 2 - this.screenHeight / 2 + this.reduceNumber,
  //     this.reduceNumber,
  //     this.screenHeight - this.reduceNumber * 2,
  //     this.screenHeight - this.reduceNumber * 2
  //   );

  //   this.ctx.moveTo(
  //     this.screenWidth / 2 - this.screenHeight + 2 * this.reduceNumber,
  //     this.screenHeight / 2
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 + this.screenHeight - 2 * this.reduceNumber,
  //     this.screenHeight / 2
  //   );
  //   this.ctx.stroke(); // 横向中间线
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 - (this.screenHeight - 2 * this.reduceNumber) / 2,
  //     (this.screenHeight - this.reduceNumber * 2) / 4 + this.reduceNumber
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 + (this.screenHeight - 2 * this.reduceNumber) / 2,
  //     (this.screenHeight - this.reduceNumber * 2) / 4 + this.reduceNumber
  //   );
  //   this.ctx.stroke(); // 横向线 上
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 - (this.screenHeight - 2 * this.reduceNumber) / 2,
  //     ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4 + this.reduceNumber
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 + (this.screenHeight - 2 * this.reduceNumber) / 2,
  //     ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4 + this.reduceNumber
  //   );
  //   this.ctx.stroke(); // 横向线 下

  //   this.ctx.moveTo(this.screenWidth / 2, this.reduceNumber);
  //   this.ctx.lineTo(
  //     this.screenWidth / 2,
  //     this.screenHeight - this.reduceNumber
  //   );
  //   this.ctx.stroke(); // 纵向中间线
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 - (this.screenHeight - 2 * this.reduceNumber) / 4,
  //     this.reduceNumber
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 - (this.screenHeight - 2 * this.reduceNumber) / 4,
  //     this.screenHeight - this.reduceNumber
  //   );
  //   this.ctx.stroke(); // 纵向线 右
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 + (this.screenHeight - 2 * this.reduceNumber) / 4,
  //     this.reduceNumber
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 + (this.screenHeight - 2 * this.reduceNumber) / 4,
  //     this.screenHeight - this.reduceNumber
  //   );
  //   this.ctx.stroke(); // 纵向线 左

  //   this.ctx.moveTo(this.screenWidth / 2, this.reduceNumber);
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 -
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.screenHeight / 2 + (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke(); // 上 右下 斜线
  //   this.ctx.moveTo(this.screenWidth / 2, this.reduceNumber);
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 +
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.screenHeight / 2 + (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke(); // 上 左下 斜线
  //   this.ctx.moveTo(
  //     this.screenWidth / 2,
  //     this.screenHeight - this.reduceNumber
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 +
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.screenHeight / 2 - (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke(); // 下 左上 斜线
  //   this.ctx.moveTo(
  //     this.screenWidth / 2,
  //     this.screenHeight - this.reduceNumber
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 -
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.screenHeight / 2 - (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke(); // 下 右上 斜线

  //   this.ctx.moveTo(
  //     this.screenWidth / 2 - (this.screenHeight - 2 * this.reduceNumber) / 2,
  //     this.reduceNumber
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 + (this.screenHeight - 2 * this.reduceNumber) / 2,
  //     this.screenHeight - this.reduceNumber
  //   );
  //   this.ctx.stroke(); // 右上 左下 对角线
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 + (this.screenHeight - 2 * this.reduceNumber) / 2,
  //     this.reduceNumber
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 - (this.screenHeight - 2 * this.reduceNumber) / 2,
  //     this.screenHeight - this.reduceNumber
  //   );
  //   this.ctx.stroke(); // 右下 左上 对角线
  //   // 左狼窝
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 -
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.reduceNumber + (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 -
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.screenHeight -
  //       this.reduceNumber -
  //       (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke();
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 - this.screenHeight + 2 * this.reduceNumber,
  //     this.reduceNumber + (this.screenHeight - 2 * this.reduceNumber) / 2
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 -
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.screenHeight -
  //       this.reduceNumber -
  //       (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke();
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 - this.screenHeight + 2 * this.reduceNumber,
  //     this.reduceNumber + (this.screenHeight - 2 * this.reduceNumber) / 2
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 -
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.reduceNumber + (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke();
  //   // 2 * this.reduceNumber

  //   // 右狼窝
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 +
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.reduceNumber + (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 +
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.screenHeight -
  //       this.reduceNumber -
  //       (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke();
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 + this.screenHeight - 2 * this.reduceNumber,
  //     this.reduceNumber + (this.screenHeight - 2 * this.reduceNumber) / 2
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 +
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.screenHeight -
  //       this.reduceNumber -
  //       (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke();
  //   this.ctx.moveTo(
  //     this.screenWidth / 2 + this.screenHeight - 2 * this.reduceNumber,
  //     this.reduceNumber + (this.screenHeight - 2 * this.reduceNumber) / 2
  //   );
  //   this.ctx.lineTo(
  //     this.screenWidth / 2 +
  //       ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //     this.reduceNumber + (this.screenHeight - 2 * this.reduceNumber) / 4
  //   );
  //   this.ctx.stroke();
  //   this.ctx.save();
  //   this.initNode();
  //   this.ctx.strokeStyle = 'black';
  //   this.ctx.fillStyle = 'black';
  //   for (const value of this.initSheepNode) {
  //     this.ctx.beginPath();
  //     this.ctx.arc(value.x, value.y, this.pointRange, 0, 2 * Math.PI);
  //     this.ctx.fill();
  //     this.ctx.stroke();
  //   }
  //   this.ctx.strokeStyle = 'red';
  //   this.ctx.fillStyle = 'red';
  //   for (const value of this.initWolfNode) {
  //     this.ctx.beginPath();
  //     this.ctx.arc(value.x, value.y, this.pointRange, 0, 2 * Math.PI);
  //     this.ctx.fill();
  //     this.ctx.stroke();
  //   }
  //   this.ctx.strokeStyle = 'black';
  //   this.ctx.fillStyle = 'black';
  //   this.wolfNode.push(...this.initWolfNode);
  //   this.sheepNode.push(...this.initSheepNode);
  //   this.loding = false;
  // }

  // canvasClick(event: any) {
  //   if (this.dontPlay) {
  //     return;
  //   }
  //   for (const value of this.allNode) {
  //     if (
  //       Math.abs(value.x - event.layerX) <= this.pointRange &&
  //       Math.abs(value.y - event.layerY) <= this.pointRange
  //     ) {
  //       if (this.who) {
  //         for (const sheep of this.sheepNode) {
  //           // 如果点到了羊，停止执行
  //           if (sheep.x === value.x && sheep.y === value.y) {
  //             return;
  //           }
  //         }
  //         for (const wolf of this.wolfNode) {
  //           // 判断选择的狼
  //           if (wolf.x === value.x && wolf.y === value.y) {
  //             if (this.selectNode.x !== 0) {
  //               this.ctx.beginPath();
  //               this.ctx.strokeStyle = 'red';
  //               this.ctx.fillStyle = 'red';
  //               this.ctx.arc(
  //                 this.selectNode.x,
  //                 this.selectNode.y,
  //                 this.pointRange,
  //                 0,
  //                 2 * Math.PI
  //               );
  //               this.ctx.fill();
  //               this.ctx.stroke();
  //             }
  //             this.ctx.beginPath();
  //             this.ctx.strokeStyle = 'black';
  //             this.ctx.fillStyle = 'red';
  //             this.ctx.arc(value.x, value.y, this.pointRange, 0, 2 * Math.PI);
  //             this.ctx.fill();
  //             this.ctx.stroke();
  //             this.selectNode.x = wolf.x;
  //             this.selectNode.y = wolf.y;
  //             this.selectNode.attribute = wolf.attribute;
  //             break;
  //           }
  //         }
  //         const diagonal = [4, 9, 10, 11, 12];
  //         // 如果在上一步选择了狼，到此处由于和value相等，所以不会走。
  //         if (
  //           this.selectNode.x !== 0 &&
  //           (this.selectNode.x !== value.x || this.selectNode.y !== value.y)
  //         ) {
  //           if (
  //             Math.abs(this.selectNode.x - value.x) ===
  //             (this.screenHeight - this.reduceNumber * 2) / 4
  //           ) {
  //             if (
  //               Math.abs(this.selectNode.y - value.y) ===
  //                 (this.screenHeight - this.reduceNumber * 2) / 4 &&
  //               diagonal.indexOf(this.selectNode.attribute) === -1
  //             ) {
  //               this.drawPoint(value, null);
  //             } else if (Math.abs(this.selectNode.y - value.y) === 0) {
  //               this.drawPoint(value, null);
  //             }
  //           } else if (
  //             Math.abs(this.selectNode.x - value.x) ===
  //             (this.screenHeight - this.reduceNumber * 2) / 2
  //           ) {
  //             for (const sheep of this.sheepNode) {
  //               if (
  //                 Math.abs(this.selectNode.y - value.y) ===
  //                   (this.screenHeight - this.reduceNumber * 2) / 2 &&
  //                 diagonal.indexOf(this.selectNode.attribute) === -1
  //               ) {
  //                 if (this.selectNode.x > value.x) {
  //                   if (
  //                     Math.abs(
  //                       value.x +
  //                         (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                         sheep.x
  //                     ) <= 10
  //                   ) {
  //                     if (this.selectNode.y > value.y) {
  //                       if (
  //                         Math.abs(
  //                           value.y +
  //                             (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                             sheep.y
  //                         ) <= 10
  //                       ) {
  //                         this.drawPoint(value, sheep); // 有羊
  //                         return;
  //                       }
  //                     } else {
  //                       if (
  //                         Math.abs(
  //                           value.y -
  //                             (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                             sheep.y
  //                         ) <= 10
  //                       ) {
  //                         this.drawPoint(value, sheep); // 有羊
  //                         return;
  //                       }
  //                     }
  //                   }
  //                 } else {
  //                   if (
  //                     Math.abs(
  //                       value.x -
  //                         (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                         sheep.x
  //                     ) <= 10
  //                   ) {
  //                     if (this.selectNode.y > value.y) {
  //                       if (
  //                         Math.abs(
  //                           value.y +
  //                             (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                             sheep.y
  //                         ) <= 10
  //                       ) {
  //                         this.drawPoint(value, sheep); // 有羊
  //                         return;
  //                       }
  //                     } else {
  //                       if (
  //                         Math.abs(
  //                           value.y -
  //                             (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                             sheep.y
  //                         ) <= 10
  //                       ) {
  //                         this.drawPoint(value, sheep); // 有羊
  //                         return;
  //                       }
  //                     }
  //                   }
  //                 }
  //               } else if (
  //                 Math.abs(this.selectNode.y - value.y) === 0 &&
  //                 value.y === sheep.y
  //               ) {
  //                 if (this.selectNode.x > value.x) {
  //                   if (
  //                     Math.abs(
  //                       value.x +
  //                         (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                         sheep.x
  //                     ) <= 10
  //                   ) {
  //                     this.drawPoint(value, sheep); // 有羊
  //                     return;
  //                   }
  //                 } else {
  //                   if (
  //                     Math.abs(
  //                       value.x -
  //                         (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                         sheep.x
  //                     ) <= 10
  //                   ) {
  //                     this.drawPoint(value, sheep); // 有羊
  //                     return;
  //                   }
  //                 }
  //               }
  //             }
  //           } else if (Math.abs(this.selectNode.x - value.x) === 0) {
  //             if (
  //               Math.abs(this.selectNode.y - value.y) ===
  //               (this.screenHeight - this.reduceNumber * 2) / 4
  //             ) {
  //               this.drawPoint(value, null);
  //               return;
  //             } else if (
  //               Math.abs(this.selectNode.y - value.y) ===
  //               (this.screenHeight - this.reduceNumber * 2) / 2
  //             ) {
  //               for (const sheep of this.sheepNode) {
  //                 if (value.x === sheep.x && value.y !== sheep.y) {
  //                   // x绝对相等
  //                   if (this.selectNode.y > value.y) {
  //                     if (
  //                       Math.abs(
  //                         value.y +
  //                           (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                           sheep.y
  //                       ) <= 10
  //                     ) {
  //                       this.drawPoint(value, sheep); // 有羊
  //                       return;
  //                     }
  //                   } else {
  //                     if (
  //                       Math.abs(
  //                         value.y -
  //                           (this.screenHeight - this.reduceNumber * 2) / 4 -
  //                           sheep.y
  //                       ) <= 10
  //                     ) {
  //                       this.drawPoint(value, sheep); // 有羊
  //                       return;
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       } else {
  //         for (const wolf of this.wolfNode) {
  //           if (wolf.x === value.x && wolf.y === value.y) {
  //             return;
  //           }
  //         }
  //         if (this.remainSheep === 0) {
  //           for (const sheep of this.sheepNode) {
  //             if (sheep.x === value.x && sheep.y === value.y) {
  //               if (this.selectNode.x !== 0) {
  //                 this.ctx.beginPath();
  //                 this.ctx.strokeStyle = 'black';
  //                 this.ctx.fillStyle = 'black';
  //                 this.ctx.arc(
  //                   this.selectNode.x,
  //                   this.selectNode.y,
  //                   this.pointRange,
  //                   0,
  //                   2 * Math.PI
  //                 );
  //                 this.ctx.fill();
  //                 this.ctx.stroke();
  //               }
  //               this.ctx.beginPath();
  //               this.ctx.strokeStyle = 'black';
  //               this.ctx.fillStyle = 'gray';
  //               this.ctx.arc(value.x, value.y, this.pointRange, 0, 2 * Math.PI);
  //               this.ctx.fill();
  //               this.ctx.stroke();
  //               this.selectNode.x = sheep.x;
  //               this.selectNode.y = sheep.y;
  //               this.selectNode.attribute = sheep.attribute;
  //               return;
  //             }
  //           }
  //           const diagonal = [4, 9, 10, 11, 12];
  //           if (
  //             this.selectNode.x !== 0 &&
  //             (this.selectNode.x !== value.x || this.selectNode.y !== value.y)
  //           ) {
  //             if (
  //               Math.abs(this.selectNode.x - value.x) ===
  //               (this.screenHeight - this.reduceNumber * 2) / 4
  //             ) {
  //               if (
  //                 Math.abs(this.selectNode.y - value.y) ===
  //                   (this.screenHeight - this.reduceNumber * 2) / 4 &&
  //                 diagonal.indexOf(this.selectNode.attribute) === -1
  //               ) {
  //                 this.drawSheep(value);
  //                 return;
  //               } else if (Math.abs(this.selectNode.y - value.y) === 0) {
  //                 this.drawSheep(value);
  //                 return;
  //               }
  //             } else if (Math.abs(this.selectNode.x - value.x) === 0) {
  //               if (
  //                 Math.abs(this.selectNode.y - value.y) ===
  //                 (this.screenHeight - this.reduceNumber * 2) / 4
  //               ) {
  //                 this.drawSheep(value);
  //                 return;
  //               }
  //             }
  //           }
  //         } else {
  //           for (const sheep of this.sheepNode) {
  //             if (value.x === sheep.x && value.y === sheep.y) {
  //               return;
  //             }
  //           }
  //           this.drawSheep(value);
  //         }
  //       }
  //       break;
  //     }
  //   }
  // }

  // drawPoint(value: Node, sheep: Node) {
  //   this.who = false;
  //   for (let i = 0; i < this.wolfNode.length; i++) {
  //     const wolf = this.wolfNode[i];
  //     if (wolf.x === this.selectNode.x && wolf.y === this.selectNode.y) {
  //       this.wolfNode.splice(i, 1);
  //       break;
  //     }
  //   }
  //   this.wolfNode.push(new Node(value.x, value.y, value.attribute));
  //   // 移除点
  //   this.ctx.beginPath();
  //   this.ctx.strokeStyle = 'rgb(248, 233, 206)';
  //   this.ctx.fillStyle = 'rgb(248, 233, 206)';
  //   this.ctx.arc(
  //     this.selectNode.x,
  //     this.selectNode.y,
  //     this.pointRange + 2,
  //     0,
  //     2 * Math.PI
  //   );
  //   this.ctx.fill();
  //   this.ctx.stroke();
  //   // 移除羊
  //   if (sheep !== null) {
  //     this.eatSheep = this.eatSheep + 1;
  //     for (let i = 0; i < this.sheepNode.length; i++) {
  //       const sheepTmp = this.sheepNode[i];
  //       if (sheepTmp.x === sheep.x && sheepTmp.y === sheep.y) {
  //         this.sheepNode.splice(i, 1);
  //         break;
  //       }
  //     }
  //     this.ctx.beginPath();
  //     this.ctx.strokeStyle = 'rgb(248, 233, 206)';
  //     this.ctx.fillStyle = 'rgb(248, 233, 206)';
  //     this.ctx.arc(sheep.x, sheep.y, this.pointRange + 2, 0, 2 * Math.PI);
  //     this.ctx.fill();

  //     this.ctx.stroke();
  //     this.reDrawLine(sheep);
  //   }
  //   // 补存线
  //   this.reDrawLine(this.selectNode);
  //   // 画新点
  //   this.ctx.beginPath();
  //   this.ctx.strokeStyle = 'red';
  //   this.ctx.fillStyle = 'red';
  //   this.ctx.arc(value.x, value.y, this.pointRange, 0, 2 * Math.PI);
  //   this.ctx.fill();
  //   this.ctx.stroke();

  //   // 画指示线
  //   // this.ctx.strokeStyle = 'gold';
  //   // this.ctx.fillStyle = 'gold';
  //   // this.ctx.beginPath();
  //   // this.ctx.moveTo(value.x, value.y);
  //   // this.ctx.lineTo(this.selectNode.x, this.selectNode.y);
  //   // this.ctx.stroke();

  //   // 置零
  //   this.selectNode.x = 0;
  //   this.selectNode.y = 0;
  //   // const _this = this;
  //   // const base_image = new Image();
  //   // base_image.src = '../../../assets/wolf_eat_sheep/sheep.png';
  //   // base_image.onload = function () {
  //   //   _this.ctx.drawImage(base_image, _this.reduceNumber / 2, 0, (_this.screenHeight - _this.reduceNumber * 2) / 4, (_this.screenHeight - _this.reduceNumber * 2) / 4);
  //   // };
  // }

  // drawSheep(value: Node) {
  //   this.who = true;
  //   if (this.remainSheep !== 0) {
  //     this.sheepNode.push(value);
  //     this.remainSheep = this.remainSheep - 1;
  //     this.ctx.beginPath();
  //     this.ctx.strokeStyle = 'black';
  //     this.ctx.fillStyle = 'black';
  //     this.ctx.arc(value.x, value.y, this.pointRange, 0, 2 * Math.PI);
  //     this.ctx.fill();
  //     this.ctx.stroke();
  //   } else {
  //     for (let i = 0; i < this.sheepNode.length; i++) {
  //       const sheep = this.sheepNode[i];
  //       if (sheep.x === this.selectNode.x && sheep.y === this.selectNode.y) {
  //         this.sheepNode.splice(i, 1);
  //         break;
  //       }
  //     }
  //     this.sheepNode.push(new Node(value.x, value.y, value.attribute));
  //     // 移除点
  //     this.ctx.beginPath();
  //     this.ctx.strokeStyle = 'rgb(248, 233, 206)';
  //     this.ctx.fillStyle = 'rgb(248, 233, 206)';
  //     this.ctx.arc(
  //       this.selectNode.x,
  //       this.selectNode.y,
  //       this.pointRange + 2,
  //       0,
  //       2 * Math.PI
  //     );
  //     this.ctx.fill();
  //     this.ctx.stroke();
  //     // 补存线
  //     this.reDrawLine(this.selectNode);
  //     // 画新点
  //     this.ctx.beginPath();
  //     this.ctx.strokeStyle = 'black';
  //     this.ctx.fillStyle = 'black';
  //     this.ctx.arc(value.x, value.y, this.pointRange, 0, 2 * Math.PI);
  //     this.ctx.fill();
  //     this.ctx.stroke();
  //     // 置零
  //     this.selectNode.x = 0;
  //     this.selectNode.y = 0;
  //   }
  //   // const _this = this;
  //   // const base_image = new Image();
  //   // base_image.src = '../../../assets/wolf_eat_sheep/wolf_icon.png';
  //   // base_image.onload = function () {
  //   //   _this.ctx.drawImage(base_image, _this.selectNode.x, _this.selectNode.y, _this.pointRange , _this.pointRange);
  //   // };
  // }

  // reDrawLine(value: Node) {
  //   if (
  //     value.attribute === 0 ||
  //     value.attribute === 9 ||
  //     value.attribute === 15 ||
  //     value.attribute === 17
  //   ) {
  //     this.ctx.strokeStyle = 'black';
  //     this.ctx.fillStyle = 'black';
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(value.x, value.y);
  //     this.ctx.lineTo(value.x + this.pointRange + 4, value.y);
  //     this.ctx.stroke();
  //   } else if (
  //     value.attribute === 1 ||
  //     value.attribute === 10 ||
  //     value.attribute === 16 ||
  //     value.attribute === 18
  //   ) {
  //     this.ctx.strokeStyle = 'black';
  //     this.ctx.fillStyle = 'black';
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(value.x - this.pointRange - 4, value.y);
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 2 || value.attribute === 3) {
  //   } else {
  //     this.ctx.strokeStyle = 'black';
  //     this.ctx.fillStyle = 'black';
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(value.x - this.pointRange - 4, value.y);
  //     this.ctx.lineTo(value.x + this.pointRange + 4, value.y);
  //     this.ctx.stroke();
  //   }

  //   if (
  //     value.attribute === 2 ||
  //     value.attribute === 11 ||
  //     value.attribute === 13 ||
  //     value.attribute === 15 ||
  //     value.attribute === 16
  //   ) {
  //     this.ctx.strokeStyle = 'black';
  //     this.ctx.fillStyle = 'black';
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(value.x, value.y);
  //     this.ctx.lineTo(value.x, value.y + this.pointRange + 4);
  //     this.ctx.stroke();
  //   } else if (
  //     value.attribute === 3 ||
  //     value.attribute === 12 ||
  //     value.attribute === 14 ||
  //     value.attribute === 17 ||
  //     value.attribute === 18
  //   ) {
  //     this.ctx.strokeStyle = 'black';
  //     this.ctx.fillStyle = 'black';
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(value.x, value.y - this.pointRange - 4);
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 0 || value.attribute === 1) {
  //   } else {
  //     this.ctx.strokeStyle = 'black';
  //     this.ctx.fillStyle = 'black';
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(value.x, value.y - this.pointRange - 4);
  //     this.ctx.lineTo(value.x, value.y + this.pointRange + 4);
  //     this.ctx.stroke();
  //   }

  //   // 斜杠
  //   if (value.attribute === 0) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 1) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (
  //     value.attribute === 4 ||
  //     value.attribute === 9 ||
  //     value.attribute === 10 ||
  //     value.attribute === 11 ||
  //     value.attribute === 12
  //   ) {
  //   } else if (value.attribute === 15) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 18) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 16) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 17) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 13) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 14) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 2) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else if (value.attribute === 3) {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(value.x, value.y);
  //     this.ctx.stroke();
  //   } else {
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.stroke();
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(
  //       value.x + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y + Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.lineTo(
  //       value.x - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2),
  //       value.y - Math.sqrt(Math.pow(this.pointRange + 4, 2) / 2)
  //     );
  //     this.ctx.stroke();
  //   }
  // }

  // initNode() {
  //   // 中间点
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 - this.screenHeight + 2 * this.reduceNumber,
  //       this.screenHeight / 2,
  //       0
  //     )
  //   ); // 左狼窝尖
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //       this.screenHeight / 2,
  //       4
  //     )
  //   ); // 左狼窝中心 十字
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 - 0.5 * this.screenHeight + this.reduceNumber,
  //       this.screenHeight / 2,
  //       5
  //     )
  //   ); // 左狼窝口
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 - 0.25 * this.screenHeight + this.reduceNumber / 2,
  //       this.screenHeight / 2,
  //       4
  //     )
  //   ); // 左狼窝口 前 第一个 大五花左侧 十字
  //   this.allNode.push(new Node(this.screenWidth / 2, this.screenHeight / 2, 8)); // 大五花
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 + 0.25 * this.screenHeight - this.reduceNumber / 2,
  //       this.screenHeight / 2,
  //       4
  //     )
  //   ); // 右狼窝口 前 第一个 大五花右侧 十字
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       this.screenHeight / 2,
  //       6
  //     )
  //   ); // 右狼窝口
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 +
  //         ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //       this.screenHeight / 2,
  //       4
  //     )
  //   ); // 右狼窝中心 十字
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 + this.screenHeight - 2 * this.reduceNumber,
  //       this.screenHeight / 2,
  //       1
  //     )
  //   ); // 右狼窝尖

  //   // 第二行点
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         0.75 * this.screenHeight +
  //         1.5 * this.reduceNumber,
  //       this.screenHeight / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       2
  //     )
  //   ); // 左狼窝上尖 狼窝上尖
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 - 0.5 * this.screenHeight + this.reduceNumber,
  //       this.screenHeight / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       9
  //     )
  //   ); // 左狼窝口 上侧第一个点 横杠--左
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       7
  //     )
  //   ); // 左狼窝口 右上侧第一个点  小五花
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2,
  //       this.screenHeight / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       4
  //     )
  //   ); // 大五花上侧第一个点 十字
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       7
  //     )
  //   ); // 大五花右上侧点 小五花
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       this.screenHeight / 2 - this.screenHeight / 4 + 0.5 * this.reduceNumber,
  //       10
  //     )
  //   ); // 右狼窝口 上侧第一个点  横杠--右
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 +
  //         0.75 * this.screenHeight -
  //         1.5 * this.reduceNumber,
  //       this.screenHeight / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       2
  //     )
  //   ); // 右狼窝上尖 狼窝上尖

  //   // 第三行点
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         0.75 * this.screenHeight +
  //         1.5 * this.reduceNumber,
  //       this.screenHeight / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       3
  //     )
  //   ); // 左狼窝下尖 狼窝下尖
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 - 0.5 * this.screenHeight + this.reduceNumber,
  //       this.screenHeight / 2 + this.screenHeight / 4 - 0.5 * this.reduceNumber,
  //       9
  //     )
  //   ); // 左狼窝口 下侧第一个点 横杠--左
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       7
  //     )
  //   ); // 左狼窝口 右下侧第一个点  小五花
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2,
  //       this.screenHeight / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       4
  //     )
  //   ); // 大五花下侧第一个点 十字
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       7
  //     )
  //   ); // 大五花右下侧点 小五花
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       this.screenHeight / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       10
  //     )
  //   ); // 右狼窝口 下侧第一个点 横杠--右
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 +
  //         0.75 * this.screenHeight -
  //         1.5 * this.reduceNumber,
  //       this.screenHeight / 2 + (this.screenHeight - 2 * this.reduceNumber) / 4,
  //       3
  //     )
  //   ); // 右狼窝下尖  狼窝下尖

  //   // 第一行点
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 - 0.5 * this.screenHeight + this.reduceNumber,
  //       this.reduceNumber,
  //       15
  //     )
  //   ); // 地图 左上角 地图角--左上
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       this.reduceNumber,
  //       11
  //     )
  //   ); // 地图最上边从左开始第二个点 横杠--上
  //   this.allNode.push(new Node(this.screenWidth / 2, this.reduceNumber, 13)); // 地图最上边中间点 半五花--上
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       this.reduceNumber,
  //       11
  //     )
  //   ); // 地图最上边从 右 开始第二个点 横杠--上
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       this.reduceNumber,
  //       16
  //     )
  //   ); // 地图 右上角 地图角--右上

  //   // 最后行点
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 - 0.5 * this.screenHeight + this.reduceNumber,
  //       this.screenHeight / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       17
  //     )
  //   ); // 地图 左下角 地图角--左下
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       12
  //     )
  //   ); // 地图最下边从左开始第二个点 横杠--下
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2,
  //       this.screenHeight / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       14
  //     )
  //   ); // 地图最下边中间点 半五花--下)
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       12
  //     )
  //   ); // 地图最下边从 右 开始第二个点 横杠--下
  //   this.allNode.push(
  //     new Node(
  //       this.screenWidth / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       this.screenHeight / 2 + 0.5 * this.screenHeight - this.reduceNumber,
  //       18
  //     )
  //   ); // 地图 右下角 地图角--右下)

  //   // 初始点 第三行
  //   this.initSheepNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       7
  //     )
  //   ); // 左狼窝口 右下侧第一个点  小五花
  //   this.initSheepNode.push(
  //     new Node(
  //       this.screenWidth / 2,
  //       this.screenHeight / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       4
  //     )
  //   ); // 大五花下侧第一个点 十字
  //   this.initSheepNode.push(
  //     new Node(
  //       this.screenWidth / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       7
  //     )
  //   ); // 大五花右下侧点 小五花

  //   // 初始点 第一行
  //   this.initSheepNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       7
  //     )
  //   ); // 左狼窝口 右上侧第一个点  小五花
  //   this.initSheepNode.push(
  //     new Node(
  //       this.screenWidth / 2,
  //       this.screenHeight / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       4
  //     )
  //   ); // 大五花上侧第一个点 十字
  //   this.initSheepNode.push(
  //     new Node(
  //       this.screenWidth / 2 +
  //         0.25 * this.screenHeight -
  //         0.5 * this.reduceNumber,
  //       this.screenHeight / 2 -
  //         0.25 * this.screenHeight +
  //         0.5 * this.reduceNumber,
  //       7
  //     )
  //   ); // 大五花右上侧点 小五花

  //   //  初始点 第二行
  //   this.initSheepNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         this.screenHeight +
  //         2 * this.reduceNumber +
  //         ((this.screenHeight - 2 * this.reduceNumber) * 3) / 4,
  //       this.screenHeight / 2,
  //       4
  //     )
  //   );
  //   this.initSheepNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         this.screenHeight +
  //         2 * this.reduceNumber +
  //         ((this.screenHeight - 2 * this.reduceNumber) * 5) / 4,
  //       this.screenHeight / 2,
  //       4
  //     )
  //   );
  //   // 初始狼
  //   this.initWolfNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         this.screenHeight +
  //         2 * this.reduceNumber +
  //         ((this.screenHeight - 2 * this.reduceNumber) * 2) / 4,
  //       this.screenHeight / 2,
  //       5
  //     )
  //   );
  //   this.initWolfNode.push(
  //     new Node(
  //       this.screenWidth / 2 -
  //         this.screenHeight +
  //         2 * this.reduceNumber +
  //         ((this.screenHeight - 2 * this.reduceNumber) * 6) / 4,
  //       this.screenHeight / 2,
  //       6
  //     )
  //   );
  // }

  // initScreen() {
  //   const mql = window.matchMedia('(orientation: portrait)');
  //   const _this = this;

  //   if (_this.isNoPlaying) {
  //     // 检查是否开玩
  //     const portrait = setInterval(function() {
  //       if (mql.matches) {
  //         // 竖屏
  //       } else {
  //         // 横屏   无法监听到
  //         _this.hideView();
  //         _this.isNoPlaying = false;
  //         _this.init();
  //         clearInterval(portrait);
  //       }
  //     }, 1000); // 不断执行遍历
  //   } else {
  //     _this.hideView();
  //   }
  // }

  // hideView() {
  //   this.dialogRef = null;
  // }

  // showView(): void {
  //   this.openDialog();
  // }

  // exitFullScren() {
  //   const element: any = document.documentElement;
  //   const _this = this;
  //   element.exitFullscreen();
  //   // if (element.cancelFullscreen) {
  //   //   element.cancelFullscreen();
  //   // } else if (element.webkitExitFullscreen) {
  //   //   element.webkitExitFullscreen();
  //   // } else if (element.mozCancelFullscreen) {
  //   //   element.mozCancelFullscreen();
  //   // }
  // }

  // windowShowView() {
  //   let isFull;

  //   isFull =
  //     document.fullscreenEnabled ||
  //     window.fullScreen ||
  //     document.webkitIsFullScreen ||
  //     document.msFullscreenEnabled;
  //   if (isFull && this.dialogRef === null) {
  //     this.openDialog();
  //   }
  // }

  // openDialog(): void {
  //   const _this = this;
  //   this.dialogRef = this.dialog.open(WolfEatSheepDialogComponent, {
  //     width: document.body.clientWidth > 1000 ? '50vw' : '80vw',
  //     maxHeight: '80vh',
  //     disableClose: true,
  //     restoreFocus: false,
  //     autoFocus: false,
  //     data: {}
  //   });
  //   this.dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.initScreen();
  //       window.onresize = function() {
  //         _this.windowShowView();
  //       };
  //     } else {
  //       this.dontPlay = true;
  //     }
  //     // this.animal = result;
  //   });
  // }
}
