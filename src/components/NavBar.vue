<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 item">关于我们</div>
      <div class="col-2 item">泥ㆍ故事</div>
      <div class="col-4 item-logo"></div>
      <div class="col-2 item">泥ㆍ游戏</div>
      <div class="col-2 item">泥ㆍ周边</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
div.container-fluid {
  height: 10%;
  padding: 0;
}
.row {
  background-color: #9c161f;
  margin: 0;
}
.item {
  color: white;
  text-align: center;
  font-size: 1.5em;
  line-height: 80px;
}
/* .item-logo .logo {
  display: block;
  margin: auto;
  width: 200px;
  height: 150px;
  background: #9c161f;
  border-radius: 0 0 100px 100px;
} */
</style>
