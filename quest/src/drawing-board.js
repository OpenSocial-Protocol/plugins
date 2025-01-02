const Template = `
  <style>.iconfont{font-family:drawing-board-iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-unie6462:before{content:"\\e75a"}.icon-wenzi:before{content:"\\e606"}.icon-undo1:before{content:"\\e739"}.icon-clear1:before{content:"\\e701"}.icon-line1:before{content:"\\e69c"}.icon-clear2:before{content:"\\e615"}.icon-eraser:before{content:"\\e748"}.icon-check:before{content:"\\e7fc"}.icon-redo2:before{content:"\\e600"}.icon-xuanzhuan1:before{content:"\\e604"}.icon-down-load:before{content:"\\e653"}.icon-shubiao:before{content:"\\e60a"}.icon-pen:before{content:"\\e60f"}#canvas{display:block;position:absolute;cursor:url(../image/16.ico),default}#canvas2{display:none}.tools{position:absolute;left:0;bottom:30px;width:100%;height:50px;display:flex;justify-content:center}.container{padding:8px 20px;border-radius:40px;box-shadow:0 1px 2px 0 rgba(32,33,36,.28);background:#fff;display:flex;align-items:center;cursor:pointer}.container i{padding:2px;font-size:20px;margin:6px;transition:.4s;border:2px solid transparent}.container i.action{border-radius:4px;border:2px solid #2b6af0}.toolItem{position:relative}.hide{display:none}.menuBox{position:absolute;bottom:50px;left:-50px;width:250px;border:1px solid #646464;background-color:#fff;border-radius:8px;cursor:default;padding:18px}input[type=range]{-webkit-appearance:none;width:200px;border-radius:10px}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:2px;background-color:#dfdfdf}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:14px;width:14px;margin-top:-5px;background:#06c0c7;cursor:pointer;border-radius:50%}.size-box{display:flex;height:24px;align-items:center;justify-content:space-between}.dot-box{width:40px;display:flex;justify-content:center;align-items:center}.circle-dot{display:inline-block;background:#000;border-radius:50%;width:2px;height:2px}.opacity-dot{display:inline-block;background:#000;border-radius:50%;width:12px;height:12px;opacity:1}.menuBox i.icon-clear1{position:absolute;right:0;top:0;font-size:28px;cursor:pointer;color:#646464}.menuBox p{padding:7px 0;font-size:14px;font-weight:550;color:#646464}.color-box{display:flex;justify-content:space-around;align-items:center}.color-item{width:30px;height:30px;border-radius:50%;position:relative;cursor:pointer}.color-box .action::before{content:"";position:absolute;width:16px;height:16px;top:4px;left:4px;border-radius:50%;border:3px solid #fff}.color-box div:nth-child(1){background-color:#000}.color-box div:nth-child(2){background-color:#f33}.color-box div:nth-child(3){background-color:#9c0}.color-box div:nth-child(4){background-color:#06f}.color-box div:nth-child(5){background-color:#ff3}.color-box div:nth-child(6){background-color:#3c6}.mask{position:fixed;background-color:rgba(0,0,0,.1);width:100vw;height:100vh;display:none;z-index:9}.r-drawer-box{position:absolute;height:30vh;background-color:#fff;top:50%;left:50%;margin-top:-15vh;margin-left:-15vw;display:none;border-radius:8px;box-shadow:2px 2px 4px #999;z-index:10;min-width:20vw}.img-box{height:25vh;text-align:center;margin:10px}.img-box img{height:22vh;border:1px dashed #888;border-radius:6px}.bottom-box{position:absolute;bottom:0;width:100%;height:5vh;display:flex;align-items:center;justify-content:center}.btn,.rotate-btn{outline:0;border:1px solid #999;background-color:#fff;padding:4px 10px;display:flex;justify-content:space-around;align-items:baseline;border-radius:8px;color:#999;margin:0 4px;cursor:pointer;width:77px}.btn i,.rotate-btn i{margin-right:8px}.select-cut-box{display:none;position:absolute;border:1px dashed #999;z-index:21;cursor:move;box-shadow:0 0 0 9999px rgba(0,0,0,.5)}.select-cut-box .cut-tools-box{position:absolute;bottom:-34px;right:0;height:30px;width:140px;background-color:#ddd;display:flex;align-items:center;justify-content:space-around;color:#666;border-radius:2px}.select-cut-box .text-px{position:absolute;top:-30px;left:0;height:30px;text-align:left;padding:0 8px;line-height:30px;letter-spacing:1px;color:#fff;background-color:rgba(39,39,39,.705);border-radius:2px}.cut-tools-box i{padding:2px 4px;margin:0 4px;border-radius:4px;cursor:pointer;border:1px solid transparent;transition:.5s}.cut-tools-box i:hover{border:1px solid #999}.op-mask{position:fixed;width:100vw;height:100vh;z-index:20;display:none}.danmu-box{z-index:90;position:fixed;width:100vw;height:100px;bottom:0;text-align:center;display:none}.danmu-container{width:80%;margin:0 auto;height:80px;background-color:#fff;border-radius:12px;box-shadow:0 0 2px #999}.danmu-container h1{padding:8px 0}.danmu-container input{outline:0;padding:4px 8px;border-radius:4px;border:1px dashed #888;background-color:transparent}.danmu-container input:focus{outline:0}.danmu-container button{cursor:pointer;background-color:transparent;padding:4px 8px;margin-left:6px;color:#3a3131;border:1px solid #888;border-radius:8px;transition:.5s}.danmu-container button:focus{outline:0}.danmu-container button:hover{background-color:#a1e0d3}@media screen and (max-width:768px){.tools{left:12px;display:flex;justify-content:flex-start;top:0;height:auto;width:16px}.container{flex-direction:column;width:3px;margin:auto 0}.menuBox{position:absolute;top:0;left:45px;width:250px;border:1px solid #646464;background-color:#fff;border-radius:8px;cursor:default;padding:18px;height:fit-content}.container i{padding:2px;font-size:16px;margin:4px;transition:.4s;border:2px solid transparent}.danmu-box{z-index:90;position:fixed;width:100vw;height:80px;bottom:0;text-align:center;display:none}.danmu-container{width:100%;border-radius:0}.danmu-container h1{font-size:16px}.r-drawer-box{min-width:70vw;margin-left:-35vw}}</style><canvas id="canvas" width="100%" height="100%"><p>-------对不起-你的浏览器不支持canvas</p></canvas><div class="tools"><div class="container"><i class="iconfont icon-shubiao" data-fun="shubiao" title="鼠标"></i><div class="toolItem"><i class="iconfont icon-pen action" data-fun="pen" title="画笔"></i><div class="menuBox hide"><i class="iconfont icon-clear1" data-fun="closeMenu"></i><p>画笔大小</p><div class="size-box"><span class="dot-box"><span class="circle-dot"></span></span> <input id="size-range" type="range" value="1" max="10" min="1"></div><p>画笔颜色</p><div class="color-box"><div class="color-item action" data-color="0"></div><div class="color-item" data-color="1"></div><div class="color-item" data-color="2"></div><div class="color-item" data-color="3"></div><div class="color-item" data-color="4"></div><div class="color-item" data-color="5"></div></div><p>画笔透明度</p><div class="size-box"><span class="dot-box"><i class="opacity-dot"></i> </span><input id="op-range" type="range" value="1" max="10" min="1"></div></div></div><i class="iconfont icon-line1" data-fun="line" title="直线"></i> <i class="iconfont icon-eraser" data-fun="eraser" title="橡皮檫"></i> <i class="iconfont icon-clear2" data-fun="del" title="删除"></i> <i class="iconfont icon-undo1" data-fun="undo" title="撤销"></i> <i class="iconfont icon-redo2" data-fun="redo" title="前进"></i></div></div><div class="right-drawer"><div class="mask"></div><div class="r-drawer-box"><div class="img-box"><img class="displayImg" src="" alt="y"></div><div class="bottom-box"><button class="rotate-btn"><i class="iconfont icon-xuanzhuan1"></i> <span>旋转</span></button> <button class="btn"><i class="iconfont icon-down-load"></i> <span>保存</span></button></div></div></div><div class="cut-box"><div class="op-mask"></div><div class="select-cut-box"><div class="text-px">0x0</div><div class="cut-tools-box"><i class="iconfont icon-down-load" data-cutfun="save"></i> | <i class="iconfont icon-unie6462" data-cutfun="close"></i> <i class="iconfont icon-check" data-cutfun="ok">完成</i></div></div></div><canvas id="canvas2"></canvas>
`;

const font = `
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')
`;

class DrawingBoard extends HTMLElement {
  #penAttibutes;
  #canvas;
  #container;
  #menuBox;
  #sizeRange;
  #opRange;
  #mask;
  #btn;
  #rotateBtn;
  #isDown;
  #lookModal;
  #ctx;
  #ctx2;
  #points;
  #beginPoint;
  #currentMenu;
  #currentColor;
  #paintingModal;
  #cuted;
  #animationTimer;
  #barrageArray;
  #globalPoint;
  #colorLsit;
  #step;
  #canvasHistory;
  constructor() {
    super();
    const temlpate = document.createElement("template");
    temlpate.innerHTML = Template;
    this.$content = temlpate.content;
    this.#loadfont();
    this.#initialVariable();
    this.#init();
    this.#addEventListener();
    this.attachShadow({ mode: "open" }).appendChild(this.$content);
  }

  #initialVariable() {
    this.#penAttibutes = {
      // 画笔数据，
      width: 2,
      lineCap: "round",
      lineJoin: "round",
      strokeStyle: "#000",
      fillStyle: "#000",
      globalCompositeOperation: "source-over",
      globalAlpha: 1,
    };
    this.#container = this.$content.querySelector(".container");
    this.#canvas = this.$content.querySelector("#canvas");
    this.#canvas.width = this.width;
    this.#canvas.height = this.height;
    this.#menuBox = this.$content.querySelector(".menuBox");

    this.#sizeRange = this.$content.getElementById("size-range");
    this.#opRange = this.$content.getElementById("op-range");
    this.#mask = this.$content.querySelector(".mask");
    this.#btn = this.$content.querySelector("button.btn");
    this.#rotateBtn = this.$content.querySelector(".rotate-btn");

    this.#isDown = false; // 标志鼠标是否按下      绘图三步和剪切三步走时，后面两个事件触发的标志
    this.#lookModal = false; // 鼠标模式             按钮第一个功能，此模式不能绘画，只能看
    this.#ctx = null; // 画笔
    this.#ctx2 = null; // 2号画笔
    this.#points = []; // 滑动时收集的点       绘画三步走时，为了时画的线光滑，记录点，减短画线的距离
    this.#beginPoint = null; // 开始的点            绘画三步走时使用
    this.#currentMenu = "icon-pen"; // 初始按钮            底部按钮选中的按钮
    this.#currentColor = 0; // 初始颜色的index     颜色选择，默认第一个
    this.#paintingModal = "pen"; // 画笔模式   line||pen||cut
    this.#cuted = false; // 标记裁剪时，是否已经裁剪       裁剪后，防止后续的操作再次触发裁剪操作
    this.#animationTimer = null; // 弹幕动画的timer               动画的timer
    this.#barrageArray = []; // 保存弹幕的数组
    this.#globalPoint = { x: 0, y: 0 }; // canvas上鼠标的点        ---弹幕时使用

    // 实现撤销和重做的功能
    this.#canvasHistory = []; // canvas数据，在每次画线和橡皮檫使用后保存数据
    this.#step = 0; // 画笔抬起的步数，清空时，步数也清空

    this.#colorLsit = [
      "#000",
      "#FF3333",
      "#99CC00",
      "#0066FF",
      "#FFFF33",
      "#33CC66",
    ];
  }
  getResult() {
    return this.#canvas.toDataURL("image/png");
  }
  #lookModalToggle(islook) {
    if (islook) {
      this.#canvas.style.cursor = "default";
      this.#lookModal = true;
    } else {
      this.#lookModal = false;
      this.#canvas.style.cursor = "";
    }
  }
  #classToggle(nowClass) {
    if (nowClass === this.#currentMenu) return;
    const action = this.#container.querySelector("i." + this.#currentMenu);
    // console.log('line 65', this.#container, this.#currentMenu);
    action.classList.toggle("action");
    const currentEle = this.#container.querySelector("i." + nowClass);
    currentEle.classList.toggle("action");
    this.#currentMenu = nowClass;
  }
  #funShubiao() {
    this.#paintingModal = "pen";
    this.#closePenMenu();
    this.#classToggle("icon-shubiao");
    this.#lookModalToggle(true);
  }
  // 点击笔
  #funPen() {
    this.#paintingModal = "pen";
    this.#lookModalToggle(false);
    this.#menuBox.classList.toggle("hide");
    if (this.#currentMenu === "icon-pen") {
      // 关闭功能窗
    } else {
      // 换上action，显示功能窗
      this.#classToggle("icon-pen");
    }
    this.#penAttibutes.globalCompositeOperation = "source-over";
  }
  // 画线函数
  #funLine() {
    this.#paintingModal = "line";
    this.#lookModalToggle(false);
    this.#closePenMenu();
    this.#classToggle("icon-line1");
    this.#penAttibutes.globalCompositeOperation = "source-over";
  }
  // 橡皮檫
  #funEraser() {
    this.#paintingModal = "pen";
    this.#lookModalToggle(false);
    this.#closePenMenu();
    this.#classToggle("icon-eraser");
    this.#penAttibutes.globalCompositeOperation = "destination-out";
  }
  #closePenMenu() {
    if (Array.from(this.#menuBox.classList).includes("hide")) return;
    this.#menuBox.classList.toggle("hide");
  }
  #funDel() {
    this.#ctx.putImageData(this.#canvasHistory[0], 0, 0);
    this.#step = 1;
    this.#canvasHistory.length = this.#step;
  }
  #funUndo() {
    if (!(this.#step > 1)) return;
    this.#ctx.putImageData(this.#canvasHistory[--this.#step - 1], 0, 0);
  }
  #funRedo() {
    if (!(this.#step < this.#canvasHistory.length)) return;
    this.#ctx.putImageData(this.#canvasHistory[this.#step++], 0, 0);
  }
  #selectColor(current) {
    const colorIndex = parseInt(current.dataset.color);
    if (colorIndex === this.#currentColor) {
    } else {
      this.#container
        .getElementsByClassName("color-item")
        [this.#currentColor].classList.toggle("action");
      this.#container
        .getElementsByClassName("color-item")
        [colorIndex].classList.toggle("action");
      this.#currentColor = colorIndex;
      this.#penAttibutes.fillStyle = this.#colorLsit[this.#currentColor];
      this.#penAttibutes.strokeStyle = this.#colorLsit[this.#currentColor];
    }
  }
  #addEventListener() {
    const that = this;
    const listener = (e) => {
      switch (e.target.dataset.fun) {
        case "shubiao":
          this.#funShubiao();
          break;
        case "pen":
          this.#funPen();
          break;
        case "line":
          this.#funLine.call(this);
          break;
        case "eraser":
          this.#funEraser();
          break;
        case "closeMenu":
          this.#closePenMenu();
          break;
        case "del":
          this.#funDel();
          break;
        case "undo":
          this.#funUndo();
          break;
        case "redo":
          this.#funRedo();
          break;
      }
      if (e.target.dataset.color) {
        this.#selectColor(e.target);
      }
    };
    this.#container.addEventListener("click", listener, false);
  }

  #getPos(ev) {
    return {
      x: ev.clientX,
      y: ev.clientY,
    };
  }

  #down(ev) {
    if (this.#lookModal) return;
    if (this.#paintingModal === "cut") return;
    ev = ev.touches ? ev.touches[0] : ev;
    this.#isDown = true;
    const { x, y } = this.#getPos(ev);
    this.#points.push({ x, y });
    this.#beginPoint = { x, y };
    this.#ctx.save();
  }

  #move(ev) {
    ev = ev.touches ? ev.touches[0] : ev;
    const { x, y } = this.#getPos(ev);
    this.#globalPoint.x = x;
    this.#globalPoint.y = y;
    if (!this.#isDown) return;
    if (this.#paintingModal === "cut") return;
    this.#points.push({ x, y });
    if (this.#paintingModal === "line") {
      this.#drawLine1(this.#beginPoint, { x, y });
    } else {
      if (this.#points.length > 3) {
        const lastTwoPoints = this.#points.slice(-2);
        const controlPoint = lastTwoPoints[0];
        const endPoint = {
          x: (lastTwoPoints[0].x + lastTwoPoints[1].x) / 2,
          y: (lastTwoPoints[0].y + lastTwoPoints[1].y) / 2,
        };
        this.#drawLine(this.#beginPoint, controlPoint, endPoint);
        this.#beginPoint = endPoint;
      }
    }
  }

  #up(ev) {
    if (!this.#isDown) return;
    if (this.#paintingModal === "cut") return;
    // 移动端抬起没有坐标
    // console.log( ev )
    // ev = ev.touches ? ev.touches[0] : ev
    const { x, y } = this.#points[this.#points.length - 1];
    this.#points.push({ x, y });
    if (this.#paintingModal === "line") {
      this.#drawLine1(this.#beginPoint, { x, y });
    } else {
      if (this.#points.length > 3) {
        const lastTwoPoints = this.#points.slice(-2);
        const controlPoint = lastTwoPoints[0];
        const endPoint = lastTwoPoints[1];
        this.#drawLine(this.#beginPoint, controlPoint, endPoint);
      }
    }
    this.#ctx.restore();
    this.#saveToHistory();
    this.#beginPoint = null;
    this.#isDown = false;
    this.#points = [];
  }
  #saveToHistory() {
    if (this.#step === this.#canvasHistory.length) {
      const nowImage = this.#ctx.getImageData(
        0,
        0,
        this.#canvas.width,
        this.#canvas.height
      );
      this.#canvasHistory.push(nowImage);
      this.#step++;
    } else {
      this.#canvasHistory.length = this.#step; // 截断数组
    }
  }

  // 直线
  #drawLine1(beginPoint, endPoint) {
    this.#ctx.putImageData(this.#canvasHistory[this.#step - 1], 0, 0);
    this.#ctx.lineWidth = this.#penAttibutes.width;
    this.#ctx.lineCap = this.#penAttibutes.lineCap;
    this.#ctx.strokeStyle = this.#penAttibutes.strokeStyle;
    this.#ctx.fillStyle = this.#penAttibutes.fillStyle;
    this.#ctx.globalCompositeOperation =
      this.#penAttibutes.globalCompositeOperation;
    this.#ctx.globalAlpha = this.#penAttibutes.globalAlpha;
    this.#ctx.beginPath();
    this.#ctx.moveTo(beginPoint.x, beginPoint.y);
    this.#ctx.lineTo(endPoint.x, endPoint.y);
    this.#ctx.stroke();
  }

  // 绘画
  #drawLine(beginPoint, controlPoint, endPoint) {
    this.#ctx.lineWidth = this.#penAttibutes.width;
    this.#ctx.lineCap = this.#penAttibutes.lineCap;
    this.#ctx.lineJoin = this.#penAttibutes.lineJoin;
    this.#ctx.strokeStyle = this.#penAttibutes.strokeStyle;
    this.#ctx.fillStyle = this.#penAttibutes.fillStyle;
    this.#ctx.globalCompositeOperation =
      this.#penAttibutes.globalCompositeOperation;
    this.#ctx.globalAlpha = this.#penAttibutes.globalAlpha;
    this.#ctx.beginPath();
    this.#ctx.moveTo(beginPoint.x, beginPoint.y);
    this.#ctx.quadraticCurveTo(
      controlPoint.x,
      controlPoint.y,
      endPoint.x,
      endPoint.y
    );
    this.#ctx.stroke();
  }
  /** load font */
  async #loadfont() {
    const iconfont = new FontFace("drawing-board-iconfont", font);
    const res = await iconfont.load();
    document.fonts.add(iconfont);
  }
  #init() {
    this.#ctx = this.#canvas.getContext("2d");
    this.#canvas.width = window.innerWidth;
    this.#canvas.height = window.innerHeight;
    if (this.#canvas.ontouchstart !== undefined) {
      this.#canvas.ontouchstart = this.#down.bind(this);
      this.#canvas.ontouchmove = this.#move.bind(this);
      this.#canvas.ontouchend = this.#up.bind(this);
    } else {
      this.#canvas.onmousedown = this.#down.bind(this);
      this.#canvas.onmousemove = this.#move.bind(this);
      this.#canvas.onmouseup = this.#up.bind(this);
      this.#canvas.onmouseout = this.#up.bind(this);
    }
  }

  // #setCanvasSize(name, value) {
  //   this.#canvas.setAttribute(name, value);
  // }
  // attributeChangedCallback(name, oldVal, newVal) {
  //   if (oldVal !== newVal) {
  //     switch (name) {
  //       case "width":
  //         this.#setCanvasSize(name, newVal);
  //         break;
  //       case "height":
  //         this.#setCanvasSize(name, newVal);
  //         break;
  //     }
  //   }
  // }
  // static get observedAttributes() {
  //   return ["width", "height"];
  // }
}
window.customElements.define("drawing-board", DrawingBoard);
