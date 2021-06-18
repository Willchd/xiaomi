class Fn {
    constructor() {
      //001获取节点
      this.bar = this.$("#bar");
      this.one = this.$("#one");
      this.two = this.$("#two");
      this.mask = this.$("#mask");
      this.img = this.$("#img");
      //002绑定事件
    
      this.one.addEventListener("mouseover", this.overFn.bind(this));
      console.log(this)
      this.one.addEventListener("mousemove", this.moveFn.bind(this));
      this.one.addEventListener("mouseout", this.outFn.bind(this));
      //003获取bar的位置宽高
      this.x0 = this.bar.offsetLeft;
      this.y0 = this.bar.offsetTop;
      this.w0 = this.bar.offsetWidth;
      this.h0 = this.bar.offsetHeight;
      // console.log(this.x0, this.y0, this.w0, this.h0);
      //004获取one的位置宽高
      this.x1 = this.one.offsetLeft;
      this.y1 = this.one.offsetTop;
      this.w1 = this.one.offsetWidth;
      this.h1 = this.one.offsetHeight;
      // console.log(this.x1, this.y1, this.w1, this.h1);
    }
    overFn() {
      //005移入显示
      this.mask.style.display = "block";
      this.two.style.display = "block";
      this.x2 = this.two.offsetLeft;
      this.y2 = this.two.offsetTop;
      this.w2 = this.two.offsetWidth;
      this.h2 = this.two.offsetHeight;
      // console.log(this.x2, this.y2, this.w2, this.h2);
      //006获取mask的半宽半高
      this.w3 = this.mask.offsetWidth / 2;
      this.h3 = this.mask.offsetHeight / 2;
      // console.log(this.w3, this.h3);
      //007获取img移动的最大活动范围
      this.w4 = this.img.offsetWidth;
      this.h4 = this.img.offsetHeight;
      // console.log(this.w4, this.h4);
      this.x4a = this.w4 - this.w2;
      this.y4a = this.h4 - this.h2;
      // console.log(this.x4a, this.y4a);
    }
    moveFn(e) {
      //鼠标事件
      // let e = e || window.event;
      //鼠标相对网页的坐标
      // console.log(123);
      let x5 = e.pageX;
      let y5 = e.pageY;
      // console.log(x5, y5);
      let x6 = x5 - this.x0 - this.w2 + this.w1;
      let y6 = y5 - this.y0 - this.h2 + this.h1;
      // console.log(x6, y6);
      //mask碰撞检测
      if (x6 <= 0) x6 = 0;
      if (y6 <= 0) y6 = 0;
      let x7 = this.w1 - this.w3 * 2;
      let y7 = this.h1 - this.h3 * 2;
      if (x6 >= x7) x6 = x7 + "px";
      if (y6 >= y7) y6 = y7 + "px";
      this.mask.style.left = x6 + "px";
      this.mask.style.top = y6 + "px";
      let x8 = this.mask.offsetLeft;
      let y8 = this.mask.offsetTop;
      // console.log(x8, y8);
      //背景位移坐标
      let x9 = (x8 * this.w2) / this.w1;
      let y9 = (y8 * this.h2) / this.h1;
      // console.log(x9, y9);
      this.img.style.left = -x9 + "px";
      this.img.style.top = -y9 + "px";
    }
    outFn() {
      this.mask.style.display = "none";
      this.two.style.display = "none";
    }
    $(tag, all = false) {
      let a = document.querySelectorAll(tag);
      return all ? a : a[0];
    }
  }
  new Fn();