// 获取元素
var wrap = document.querySelector(".wrap");
var next = document.querySelector(".arr_right");
var prev = document.querySelector(".arr_left");

// 给前后箭头绑定事件
next.onclick = function () {
  next_pic();
};
prev.onclick = function () {
  prev_pic();
};

function next_pic() {
  var newLeft;
  if (wrap.style.left === "-2500px") {
    newLeft = -1000;
  } else {
    newLeft = parseInt(wrap.style.left) - 500;
  }
  wrap.style.left = newLeft + "px";

  // 小圆点相关代码
  index++;
  if (index > 3) {
    index = 0;
  }
  showCurrentDot();
}

function prev_pic() {
  var newLeft;
  if (wrap.style.left === "0px") {
    newLeft = -1500;
  } else {
    newLeft = parseInt(wrap.style.left) + 500;
  }
  wrap.style.left = newLeft + "px";

  // 小圆点相关代码
  index--;
  if (index < 0) {
    index = 3;
  }
  showCurrentDot();
}

// 自动播放
var timer = null; // 声明定时器，以便后面可以清除它
function autoPlay() {
  timer = setInterval(function () {
    next_pic();
  }, 1000);
}
autoPlay();

// 鼠标移到图片时停止自动播放，移开鼠标继续自动播放
var container = document.querySelector(".container");
container.onmouseenter = function () {
  clearInterval(timer); // 清除定时器
};
container.onmouseleave = function () {
  autoPlay();
};

// 底部小圆圈随图片变化而变化
var index = 0; // 定义index，为每个小圆点和图片对应的索引号
var dots = document.querySelectorAll("span");
// 使当前图片对应的小圆点变色
function showCurrentDot() {
  // 其余小圆点清除类
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = "";
  }
  // 当前小圆点添加类（当前类on有变色效果）
  //   dots[index].className = "on";
}

// 点击底部小圆点，跳到对应图片
for (var i = 0; i < dots.length; i++) {
  (function (i) {
    dots[i].onclick = function () {
      var dis = index - i;
      if (index == 3 && parseInt(wrap.style.left) != -2000) {
        dis = dis - 4;
      }
      if (index == 0 && parseInt(wrap.style.left) != -500) {
        dis = 5 + dis;
      }
      wrap.style.left = parseInt(wrap.style.left) + dis * 500 + "px";
      index = i;
      showCurrentDot();
    };
  })(i);
}
