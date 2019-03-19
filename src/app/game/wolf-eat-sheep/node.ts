export class Node {
    x = 0;
    y = 0;
    attribute = 0;
    constructor(x: number, y: number, attribute: number) {
        this.x = x;
        this.y = y;
        this.attribute = attribute;
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

