<template>
  <div class="row">
    <div class="col-6">
      <div class="news">
        <h2>公众号推文</h2>
        <ul>
          <li><a href="#">北京招聘网页设计</a></li>
          <li><a href="#">北京招聘网页设计</a></li>
          <li><a href="#">北京招聘网页设计</a></li>
          <li><a href="#">北京招聘网页设计</a></li>
          <li><a href="#">北京招聘网页设计</a></li>
        </ul>
      </div>
    </div>
    <div class="col-6">
      <div class="news">
        <h2>相关新闻</h2>
        <ul>
          <li>
            <a href="https://new.qq.com/rain/a/20230111A03CBW00" target="_blank"
              >宝鸡凤翔泥塑将再次亮相春晚舞台</a
            >
          </li>
          <li><a href="#">北京招聘网页设计</a></li>
          <li><a href="#">北京招聘网页设计</a></li>
          <li><a href="#">北京招聘网页设计</a></li>
          <li><a href="#">北京招聘网页设计</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.news {
  width: 500px;
  height: 400px;
  border: 1px solid #ccc;
  margin: 50px auto;
  padding: 42px 30px 0;
}
.news h2 {
  border-bottom: 1px solid #ccc;
  font-size: 30px;
  line-height: 1;
  /* 行高是一倍 字号的大小 */
  padding-bottom: 9px;
}
ul {
  list-style: none;
  /* 去掉列表的符号 */
}
li {
  height: 50px;
  border-bottom: 1px solid #000;
  padding-left: 28px;
  line-height: 50px;
}
.news a {
  text-decoration: none;
  font-size: 18px;
  color: #666;
}
a:hover {
  color: skyblue;
}
</style>