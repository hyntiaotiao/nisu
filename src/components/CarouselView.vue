<template>
  <div class="carousel">
    <!--主容器-->
    <div class="container-carousel">
      <!--控制转到第几张按钮-->
      <input id="btn1" name="dir" type="radio" />
      <input id="btn2" name="dir" type="radio" />
      <input id="btn3" name="dir" type="radio" />
      <input id="btn4" name="dir" type="radio" />
      <input id="btn5" name="dir" type="radio" />

      <!--控制往左边轮播-->
      <input id="left_btn1" class="dir_btn" name="dir" type="radio" />
      <input id="left_btn2" class="dir_btn" name="dir" type="radio" />
      <input id="left_btn3" class="dir_btn" name="dir" type="radio" />
      <input id="left_btn4" class="dir_btn" name="dir" type="radio" />
      <input id="left_btn5" class="dir_btn" name="dir" type="radio" />

      <!--控制往右边轮播-->
      <input id="right_btn1" class="dir_btn" name="dir" type="radio" />
      <input id="right_btn2" class="dir_btn" name="dir" type="radio" />
      <input id="right_btn3" class="dir_btn" name="dir" type="radio" />
      <input id="right_btn4" class="dir_btn" name="dir" type="radio" />
      <input id="right_btn5" class="dir_btn" name="dir" type="radio" />

      <!--存放图片-->
      <div class="pic">
        <!--给所有图片套一个盒子 通过左边距进行轮播-->
        <div class="box">
          <img src="@/assets/images/test1.png" />
          <img src="../assets/images/test2.png" />
          <img src="../assets/images/test1.png" />
          <img src="../assets/images/test1.png" />
          <img src="../assets/images/test1.png" />
        </div>

        <!--给图片前面加一层图片层 用于实现无缝轮播-->
        <div class="before_box">
          <img src="../assets/images/test1.png" />
          <img src="../assets/images/test1.png" />
        </div>

        <!--给图片后面加一层图片层 用于实现无缝轮播-->
        <div class="after_box">
          <img src="../assets/images/test1.png" />
          <img src="../assets/images/test1.png" />
        </div>
      </div>

      <!--左边的按钮 每次点击都会根据当前是第几张决定显示的按钮-->
      <!-- <div class="left_box dir_box">
        <label class="left_btn_1 btn_btn_1" for="left_btn1"></label>
        <label class="left_btn_2 btn_btn_2" for="left_btn2"></label>
        <label class="left_btn_3 btn_btn_3" for="left_btn3"></label>
        <label class="left_btn_4 btn_btn_4" for="left_btn4"></label>
        <label class="left_btn_5 btn_btn_5" for="left_btn5"></label>
      </div> -->

      <!--右边的按钮 每次点击都会根据当前是第几张决定显示的按钮-->
      <!-- <div class="right_box dir_box">
        <label class="right_btn_1 btn_btn_1" for="right_btn1"></label>
        <label class="right_btn_2 btn_btn_2" for="right_btn2"></label>
        <label class="right_btn_3 btn_btn_3" for="right_btn3"></label>
        <label class="right_btn_4 btn_btn_4" for="right_btn4"></label>
        <label class="right_btn_5 btn_btn_5" for="right_btn5"></label>
      </div> -->

      <!--下方按钮 点击各个按钮 决定跳转到第几张-->
      <div class="count">
        <ul>
          <li class="current">
            <label class="btn_1" for="btn1"></label>
          </li>
          <li>
            <label class="btn_2" for="btn2"></label>
          </li>
          <li>
            <label class="btn_3" for="btn3"></label>
          </li>
          <li>
            <label class="btn_4" for="btn4"></label>
          </li>
          <li>
            <label class="btn_5" for="btn5"></label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
div.carousel {
  height: 90%;
  width: 100%;
}

/* 每次点击按钮 重置当前焦点按钮的样式 */
input[type="radio"]:checked ~ .count label {
  background: #447fff;
}
/* 重置当前显示的左右按钮 */
input[type="radio"]:checked ~ .dir_box label {
  display: none;
}

/* 下方按钮1 */
#btn1:checked ~ .pic .box {
  margin-left: 0;
}
#btn1:checked ~ .count .btn_1 {
  background: white;
}
#btn1:checked ~ .dir_box .btn_btn_1 {
  display: flex;
}

/* 下方按钮2 */
#btn2:checked ~ .pic .box {
  margin-left: -100%;
}
#btn2:checked ~ .count .btn_2 {
  background: white;
}
#btn2:checked ~ .dir_box .btn_btn_2 {
  display: flex;
}

/* 下方按钮3 */
#btn3:checked ~ .pic .box {
  margin-left: -200%;
}
#btn3:checked ~ .count .btn_3 {
  background: white;
}
#btn3:checked ~ .dir_box .btn_btn_3 {
  display: flex;
}

/* 下方按钮4 */
#btn4:checked ~ .pic .box {
  margin-left: -300%;
}
#btn4:checked ~ .count .btn_4 {
  background: white;
}
#btn4:checked ~ .dir_box .btn_btn_4 {
  display: flex;
}

/* 下方按钮5 */
#btn5:checked ~ .pic .box {
  margin-left: -400%;
}
#btn5:checked ~ .count .btn_5 {
  background: white;
}
#btn5:checked ~ .dir_box .btn_btn_5 {
  display: flex;
}

/* 左边第一个按钮 */
#left_btn1:checked ~ .pic .box {
  margin-left: -400%;
}
#left_btn1:checked ~ .count .btn_5 {
  background: white;
}
#left_btn1:checked ~ .pic .before_box {
  transition: right 0.8s;
  opacity: 1;
  right: -100%;
}
#left_btn1:checked ~ .dir_box .btn_btn_5 {
  display: flex;
}

/* 右边第一个按钮 */
#right_btn1:checked ~ .pic .box {
  margin-left: -100%;
}
#right_btn1:checked ~ .count .btn_2 {
  background: white;
}
#right_btn1:checked ~ .dir_box .btn_btn_2 {
  display: flex;
}

/* 左边第二个按钮 */
#left_btn2:checked ~ .pic .box {
  margin-left: 0;
}
#left_btn2:checked ~ .count .btn_1 {
  background: white;
}
#left_btn2:checked ~ .dir_box .btn_btn_1 {
  display: flex;
}

/* 右边第二个按钮 */
#right_btn2:checked ~ .pic .box {
  margin-left: -200%;
}
#right_btn2:checked ~ .count .btn_3 {
  background: white;
}
#right_btn2:checked ~ .dir_box .btn_btn_3 {
  display: flex;
}

/* 左边第三个按钮 */
#left_btn3:checked ~ .pic .box {
  margin-left: -100%;
}
#left_btn3:checked ~ .count .btn_2 {
  background: white;
}
#left_btn3:checked ~ .dir_box .btn_btn_2 {
  display: flex;
}

/* 右边第三个按钮 */

#right_btn3:checked ~ .pic .box {
  margin-left: -300%;
}
#right_btn3:checked ~ .count .btn_4 {
  background: white;
}
#right_btn3:checked ~ .dir_box .btn_btn_4 {
  display: flex;
}

/* 左边第四个按钮 */

#left_btn4:checked ~ .pic .box {
  margin-left: -200%;
}
#left_btn4:checked ~ .count .btn_3 {
  background: white;
}
#left_btn4:checked ~ .dir_box .btn_btn_3 {
  display: flex;
}

/* 右边第四个按钮 */

#right_btn4:checked ~ .pic .box {
  margin-left: -400%;
}
#right_btn4:checked ~ .count .btn_5 {
  background: white;
}
#right_btn4:checked ~ .dir_box .btn_btn_5 {
  display: flex;
}

/* 左边第五个按钮 */

#left_btn5:checked ~ .pic .box {
  margin-left: -300%;
}
#left_btn5:checked ~ .count .btn_4 {
  background: white;
}
#left_btn5:checked ~ .dir_box .btn_btn_4 {
  display: flex;
}

/* 右边第五个按钮 */

#right_btn5:checked ~ .pic .box {
  margin-left: -500%;
  transition: margin 0.8s 0s;
}
#right_btn5:checked ~ .pic .after_box {
  transition: left 0.8s;
  opacity: 1;
  left: -100%;
}
#right_btn5:checked ~ .pic .box {
  margin-left: 0;
  transition: margin 0.8s 0s;
}
#right_btn5:checked ~ .count .btn_1 {
  background: white;
}
#right_btn5:checked ~ .dir_box .btn_btn_1 {
  display: flex;
}
/* 


*/
* {
  margin: 0;
  padding: 0;
}
html,
body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
input[type="radio"] {
  display: none;
}
li {
  list-style-type: none;
}
.container-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
  overflow: hidden;
}
.pic {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.pic .box {
  position: relative;
  width: 500%;
  height: 100%;
  transition: margin 0.8s;
}
.pic .box > img {
  float: left;
  width: calc(100% / 5);
  height: 100%;
  color: white;
}
.pic .before_box,
.pic .after_box {
  position: absolute;
  top: 0;
  width: 200%;
  height: 100%;
  opacity: 0;
}
.pic .after_box {
  left: 0;
}
.pic .before_box {
  right: 0;
}
.pic .after_box img,
.pic .before_box img {
  width: 50%;
  height: 100%;
  float: left;
}
.count {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background: rgba(255, 255, 255, 0.1);
}
.count > ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 100%;
}
.count li {
  float: left;
  width: 1.2vmax;
  height: 1.2vmax;
  border-radius: 50%;
}
.count li label {
  display: block;
  width: 14px;
  height: 14px;
  background: #447fff;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.8s;
}
.count li .btn_1 {
  background: white;
}

.dir_box {
  position: absolute;
  top: calc((100% - 100px) / 2);
  display: flex;
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.2);
}
.left_box {
  left: 0;
}
.right_box {
  right: 0;
}

.dir_box label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
}
.left_box label::after {
  content: "<";
}
.right_box label::after {
  content: ">";
}

.dir_box label {
  display: none;
}
.left_box .left_btn_1 {
  display: flex;
}
.right_box .right_btn_1 {
  display: flex;
}
</style>