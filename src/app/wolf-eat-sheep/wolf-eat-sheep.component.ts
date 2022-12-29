import {
  AfterViewInit, Component,
  Inject,
  OnInit
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// @ts-ignore
import { Bitmap, Graphics, Shadow, Shape, Stage, Ticker } from "@createjs/easeljs";
import { Node } from './node';
import { APP_BASE_HREF } from '@angular/common';

declare let document: any;
@Component({
  selector: 'app-wolf-eat-sheep',
  templateUrl: './wolf-eat-sheep.component.html',
  styleUrls: ['./wolf-eat-sheep.component.css']
})
export class WolfEatSheepComponent implements OnInit, AfterViewInit {
  dialogRef = null;
  canvasWidth = 0;
  canvasHeight = 0;
  allNode: Node[] = [];
  initSheepNode: Node[] = []; // 预先放置点
  initWolfNode: Node[] = [];
  wolfNode: Bitmap[] = [];
  sheepNode: Bitmap[] = [];
  eatSheep = 0;
  whoRun = true; // true wolf false sheep
  selectNode: Bitmap;
  remainSheep = 14;
  stage: Stage = null;
  r: number = 2; // 棋子大小参数
  lineDistance: number = 0;// 间距,线的距离
  isPlaying = false;
  audioSheepDied = new Audio(`${this.baseHref}assets/sound/sheep_died.ogg`);
  audioSheepMove = new Audio(`${this.baseHref}assets/sound/sheep_move.mp3`);
  audioWolfMove = new Audio(`${this.baseHref}assets/sound/wolf_move.ogg`);
  // audio.play();
  constructor(public dialog: MatDialog, @Inject(APP_BASE_HREF) public baseHref: string) {
  }

  ngOnInit() {

  }

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
    const c: any = document.getElementById('myCanvas');
    this.canvasWidth = document.body.clientWidth;
    this.canvasHeight = document.body.clientHeight - 20;

    // M: 10
    let x = Math.floor(this.canvasWidth / (10));
    // M: 6
    let y = Math.floor(this.canvasHeight / (6));

    // 取最小值使用
    let m = Math.min(x, y);
    c.width = m * 10;
    c.height = m * 6;
    this.lineDistance = m;
    if (this.stage == null) { this.stage = new Stage("myCanvas"); } else {
      this.stage.removeAllChildren();
    }
    this.drawLine(m);
    this.initNode();
    this.drwaNode(m);
    this.stage.update();
    Ticker.on("tick", this.stage);
  }

  drwaNode(m: number) {
    let w = m / this.r;
    this.allNode.forEach((item) => {
      var bitmap = new Bitmap(`${this.baseHref}assets/wolf_eat_sheep/back_point.png`);
      bitmap.addEventListener("click", (event: MouseEvent) => {
        this.canvasClick(event);
      });
      let scale = m / (bitmap.image.width * this.r);
      bitmap.scaleX = scale;
      bitmap.scaleY = scale;
      bitmap.set({ type: 2, posi: 0 })
      bitmap.x = m * item.x - (w / 2);
      bitmap.y = m * item.y - (w / 2);
      bitmap.set({ type: 0, mId: item.mId, alpha: 0.1, goto1: item.gotoOne, goto2: item.gotoTwo });
      this.stage.addChild(bitmap);
    })

    this.initSheepNode.forEach((item) => {
      var bitmap = new Bitmap(`${this.baseHref}assets/wolf_eat_sheep/sheep.png`);
      bitmap.addEventListener("click", (event: MouseEvent) => {
        this.canvasClick(event);
      });
      let scale = m / (bitmap.image.width * this.r);
      bitmap.scaleX = scale;
      bitmap.scaleY = scale;
      bitmap.set({ type: 2, mId: item.mId, goto1: item.gotoOne, goto2: item.gotoTwo })
      bitmap.x = m * item.x - (w / 2);
      bitmap.y = m * item.y - (w / 2);
      this.sheepNode.push(bitmap);
      this.stage.addChild(bitmap);
    });
    this.initWolfNode.forEach((item) => {
      var bitmap = new Bitmap(`${this.baseHref}assets/wolf_eat_sheep/wolf.png`);
      bitmap.addEventListener("click", (event: MouseEvent) => {
        this.canvasClick(event);
      });
      this.wolfNode.push(bitmap);
      let scale = m / (bitmap.image.width * this.r);
      bitmap.scaleX = scale;
      bitmap.scaleY = scale;
      bitmap.x = m * item.x - (w / 2);
      bitmap.y = m * item.y - (w / 2);
      bitmap.set({ type: 1, mId: item.mId, goto1: item.gotoOne, goto2: item.gotoTwo })
      this.stage.addChild(bitmap);
    });
  }

  drawLine(m: number) {
    var g = new Graphics();
    g.setStrokeStyle(m / 20);
    g.beginStroke("#fec450");
    // if hava mirror 
    // outline
    g.drawRect(m * 3, m, m * 4, m * 4);
    // horizontal line 1
    g.moveTo(m * 3, m * 2)
    g.lineTo(m * 7, m * 2)
    // horizontal line 2
    g.moveTo(m * 1, m * 3)
    g.lineTo(m * 9, m * 3)
    // horizontal line 3
    g.moveTo(m * 3, m * 4)
    g.lineTo(m * 7, m * 4)
    // vertical line 1
    g.moveTo(m * 4, m)
    g.lineTo(m * 4, m * 5)
    // vertical line 2
    g.moveTo(m * 5, m)
    g.lineTo(m * 5, m * 5)
    // vertical line 3
    g.moveTo(m * 6, m)
    g.lineTo(m * 6, m * 5)
    //  
    g.moveTo(m * 3, m)
    g.lineTo(m * 7, m * 5)
    //  
    g.moveTo(m * 7, m)
    g.lineTo(m * 3, m * 5)
    //  
    g.moveTo(m * 5, m)
    g.lineTo(m * 2, m * 4)
    //  
    g.moveTo(m * 5, m)
    g.lineTo(m * 8, m * 4)
    //  
    g.moveTo(m * 5, m * 5)
    g.lineTo(m * 2, m * 2)
    //  
    g.moveTo(m * 5, m * 5)
    g.lineTo(m * 8, m * 2)
    // 狼窝竖线
    g.moveTo(m * 2, m * 4)
    g.lineTo(m * 2, m * 2)
    // 狼窝竖线
    g.moveTo(m * 8, m * 4)
    g.lineTo(m * 8, m * 2)
    // 狼窝顶端斜线(左)
    g.moveTo(m * 2, m * 4)
    g.lineTo(m, m * 3)
    // 狼窝顶端斜线(左)
    g.moveTo(m * 2, m * 2)
    g.lineTo(m, m * 3)
    // 狼窝顶端斜线(右)
    g.moveTo(m * 8, m * 4)
    g.lineTo(m * 9, m * 3)
    // 狼窝顶端斜线(右)
    g.moveTo(m * 8, m * 2)
    g.lineTo(m * 9, m * 3)
    var s = new Shape(g);
    s.x = 0;
    s.y = 0;
    this.stage.addChild(s);
  }

  canvasClick(event: MouseEvent) {
    let b = event.target as Bitmap;
    if (this.whoRun) {// wolf
      if (b['type'] === 2) {
        return;
      } else if (b['type'] === 1) {
        if (this.selectNode != null) {
          this.selectNode.shadow = null;
          this.selectNode.set({ alpha: 1 });
        }
        b.shadow = new Shadow("#002200", 5, 5, 10);
        b.set({ alpha: 0.8 });
        this.selectNode = b;
        this.stage.update();
      } else {
        if (this.selectNode != null) {
          let cId = b['mId']
          let goto1 = this.selectNode['goto1']
          let goto2 = this.selectNode['goto2']
          for (const iterator of goto1) {
            if (cId == iterator) {
              this.selectNode.x = b.x;
              this.selectNode.y = b.y;
              this.selectNode.shadow = null;
              this.selectNode.set({ alpha: 1, goto1: b['goto1'], goto2: b['goto2'], mId: cId, });
              this.selectNode = null;
              this.whoRun = false;
              this.audioWolfMove.play()
              this.stage.update();
              return
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
                  this.selectNode.set({ alpha: 1, goto1: b['goto1'], goto2: b['goto2'], mId: cId, });
                  this.selectNode = null;
                  this.stage.removeChild(iteratorSheep);
                  this.sheepNode.splice(index, 1);
                  ++this.eatSheep;
                  this.audioSheepDied.play()
                  this.whoRun = false;
                  this.stage.update();
                  return
                }
              }
            }
          }
        }
      }
      this.stage.update();
    } else {
      if (b['type'] === 1) {
        return;
      } else if (b['type'] === 2) {
        if (this.remainSheep !== 0) {
          return
        }
        if (this.selectNode != null) {
          this.selectNode.shadow = null;
          this.selectNode.set({ alpha: 1 });
        }
        b.shadow = new Shadow("#002200", 5, 5, 10);
        b.set({ alpha: 0.8 });
        this.selectNode = b;
        this.stage.update();
      } else {
        let cId = b['mId']
        if (this.selectNode != null) {
          let goto1 = this.selectNode['goto1']
          for (const iterator of goto1) {
            if (cId == iterator) {
              this.selectNode.x = b.x;
              this.selectNode.y = b.y;
              this.selectNode.shadow = null;
              this.selectNode.set({ alpha: 1, goto1: b['goto1'], mId: cId, });
              this.selectNode = null;
              this.whoRun = true;
              this.audioSheepMove.play();
              this.stage.update();
              return
            }
          }
        } else if (this.remainSheep > 0) {
          var bitmap = new Bitmap(`${this.baseHref}assets/wolf_eat_sheep/sheep.png`);
          bitmap.addEventListener("click", (event: MouseEvent) => {
            this.canvasClick(event);
          });
          bitmap.scaleX = b['scale'];
          bitmap.scaleY = b['scale'];
          bitmap.set({ type: 2, mId: cId, goto1: b['goto1'], })
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
    this.allNode.push(new Node(3, 1, [2, 7, 8], [[3, 2], [17, 8], [15, 7]], 1));
    this.allNode.push(new Node(4, 1, [1, 3, 8], [[4, 3], [16, 8]], 2));
    this.allNode.push(new Node(5, 1, [2, 4, 8, 9, 10], [[1, 2], [5, 4], [15, 8], [17, 9], [19, 10]], 3));
    this.allNode.push(new Node(6, 1, [3, 5, 10], [[2, 3], [18, 10]], 4));
    this.allNode.push(new Node(7, 1, [4, 10, 11], [[3, 4], [17, 10], [19, 11]], 5));
    this.allNode.push(new Node(2, 2, [13, 14, 15], [[22, 14], [24, 15]], 6));
    this.allNode.push(new Node(3, 2, [15, 1, 8], [[23, 15], [9, 8]], 7));
    this.allNode.push(new Node(4, 2, [7, 1, 2, 3, 9, 17, 16, 15], [[26, 17], [24, 16], [22, 15], [10, 9]], 8));
    this.allNode.push(new Node(5, 2, [3, 8, 17, 10], [[7, 8], [11, 10], [25, 17]], 9));
    this.allNode.push(new Node(6, 2, [9, 17, 18, 19, 11, 5, 4, 3], [[8, 9], [24, 17], [26, 18], [28, 19]], 10));
    this.allNode.push(new Node(7, 2, [5, 10, 19], [[27, 19], [9, 10]], 11));
    this.allNode.push(new Node(8, 2, [19, 20, 21], [[28, 20], [26, 19]], 12));
    this.allNode.push(new Node(1, 3, [6, 14, 22], [[15, 14]], 13));
    this.allNode.push(new Node(2, 3, [6, 13, 22, 15], [[16, 15]], 14));
    this.allNode.push(new Node(3, 3, [6, 22, 14, 16, 24, 23, 8, 7], [[3, 8], [17, 16], [31, 24], [29, 23], [1, 7], [13, 14]], 15));
    this.allNode.push(new Node(4, 3, [15, 8, 17, 24], [[14, 14], [30, 24], [18, 17], [2, 8]], 16));
    this.allNode.push(new Node(5, 3, [8, 16, 24, 25, 26, 18, 10, 9], [[29, 24], [31, 25], [33, 26], [19, 18], [5, 10], [3, 9], [1, 8], [15, 16]], 17));
    this.allNode.push(new Node(6, 3, [10, 17, 19, 26], [[16, 17], [4, 10], [32, 26], [20, 19]], 18));
    this.allNode.push(new Node(7, 3, [11, 10, 18, 26, 27, 28, 20, 12], [[3, 10], [5, 11], [33, 27], [31, 26], [17, 18], [21, 21]], 19));
    this.allNode.push(new Node(8, 3, [12, 19, 28, 21], [[18, 19]], 20));
    this.allNode.push(new Node(9, 3, [12, 20, 28], [[19, 20]], 21));
    this.allNode.push(new Node(2, 4, [13, 14, 15], [[8, 15], [6, 14]], 22));
    this.allNode.push(new Node(3, 4, [15, 24, 29], [[25, 24], [7, 15]], 23));
    this.allNode.push(new Node(4, 4, [15, 23, 29, 30, 31, 25, 17, 16], [[6, 15], [10, 17], [8, 16], [26, 25]], 24));
    this.allNode.push(new Node(5, 4, [24, 31, 26, 17], [[23, 24], [9, 17], [27, 26]], 25));
    this.allNode.push(new Node(6, 4, [17, 18, 19, 27, 33, 32, 31, 25], [[12, 19], [8, 17], [10, 18], [24, 25]], 26));
    this.allNode.push(new Node(7, 4, [33, 26, 19], [[11, 19], [25, 26]], 27));
    this.allNode.push(new Node(8, 4, [19, 20, 21], [[10, 19], [12, 20]], 28));
    this.allNode.push(new Node(3, 5, [23, 24, 30], [[15, 23], [31, 30], [17, 24]], 29));
    this.allNode.push(new Node(4, 5, [29, 24, 31], [[16, 24], [32, 31]], 30));
    this.allNode.push(new Node(5, 5, [30, 24, 25, 26, 32], [[17, 25], [15, 24], [19, 26], [33, 32], [29, 30]], 31));
    this.allNode.push(new Node(6, 5, [31, 26, 33], [[18, 26], [30, 31]], 32));
    this.allNode.push(new Node(7, 5, [27, 26, 32], [[17, 26], [19, 27], [31, 32]], 33));
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
    this.init();// 需要执行两次 ？
    setTimeout(() => {
      this.init();
    }, 500)
  }

  async requestFullScreen() {
    const element: any = document.documentElement;
    if (element.requestFullscreen) {
      await element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      await element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      await element.mozRequestFullScreen();
    }
    if (screen.orientation.lock)
      screen.orientation.lock('landscape-primary').then(function (value) {
      }, function (e) {
      });
  }


}
