<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <carousel-view />
      </div>
    </div>
    <div class="row row-card">
      <div class="col-6">
        <router-link to="/nisu/1">
          <NisuCard>
            <template #title>挂虎</template>
            <template #title-2>--挂片类</template>
            <template #describe
              >&nbsp;&nbsp;泥挂虎是陕西凤翔的一种传统民俗装饰品。其形制从6厘米到100余厘米不等，是用泥土在纸浆模中翻制而成，胎体很薄，色彩鲜艳。</template
            >
            <template #img>
              <img src="@/assets/images/tiger.jpg" height="420" width="327"
            /></template>
          </NisuCard>
        </router-link>
      </div>
      <div class="col-6">
        <router-link to="/nisu/2">
          <NisuCard>
            <template #title>五毒</template>
            <template #title-2>--挂片类</template>
            <template #describe
              >&nbsp;&nbsp;“五毒”是指蝎子、蛇、壁虎、蜈蚣、蟾蜍,是端午节的标志性的符号。
              因为端午正值农历五月,百虫出没,五毒开始孽生，于是便有了避五毒的习俗。
              青蛙是吃害虫的能手，青蛙与“五毒”组合的图案，是剪除“五毒”的经典图案。
              民间百姓以青蛙来吃掉“五毒”，是保佑孩童安康之意。</template
            >
            <template #img>
              <img src="@/assets/images/du.jpg" height="420" width="327"
            /></template>
          </NisuCard>
        </router-link>
      </div>
    </div>
    <div class="row row-card">
      <div class="col-6">
        <router-link to="/nisu/3">
          <NisuCard>
            <template #title>坐虎</template>
            <template #title-2>--泥玩具类</template>
            <template #describe
              >&nbsp;&nbsp;坐虎前腿立后腿坐，形态极度概括，但不失虎的神韵。面部紧凑，耳朵夸大，显其威严。躯体饰以莲花、牡丹等纹饰，浓艳大方，很富有观赏性</template
            >
            <template #img>
              <img src="@/assets/images/zuohu1.png" height="420" width="327"
            /></template>
          </NisuCard>
        </router-link>
      </div>
      <div class="col-6">
        <router-link to="/nisu/4">
          <NisuCard>
            <template #title>十二生肖</template>
            <template #title-2>--泥玩具类</template>
            <template #describe
              >&nbsp;&nbsp;凤翔泥塑造型以十二生肖为主体，通过抽象和艺术处理，形成独具魅力的泥塑艺术品。十二生肖泥塑按尺寸可分为小号泥塑、中号泥塑、大号泥塑，按色彩可分彩绘泥塑、白描泥塑、单色泥塑。按造型可分狗、猴、虎、鸡、龙、马、牛、蛇、鼠、兔、羊、猪。</template
            >
            <template #img>
              <img src="@/assets/images/shier1.jpg" height="420" width="327"
            /></template>
          </NisuCard>
        </router-link>
      </div>
    </div>
    <div class="row row-card">
      <div class="col-6">
        <router-link to="/nisu/5">
          <NisuCard>
            <template #title>钟馗泥塑</template>
            <template #title-2>--立人类</template>
            <template #describe
              >&nbsp;&nbsp;钟馗泥塑是挂在室内墙上的装饰品，用浮雕手法制作。钟馗怒目圆睁，上手持笏板，下手舞宝剑，须髯倒竖，一副凶猛之像。艺人对钟馗的全身比例进行了调整，头部占了全身的三分之一，重点刻画了豹头、环眼、黑须倒竖的脸部表情，突出了人物的凶猛威严性格特征。造型夸张，结构流畅，动态十足，人物形象活灵活现、呼之欲出。</template
            >
            <template #img>
              <img src="@/assets/images/zhongkui.jpg" height="420" width="327"
            /></template>
          </NisuCard>
        </router-link>
      </div>
      <div class="col-6">
        <router-link to="/nisu/6">
          <NisuCard>
            <template #title>关公泥塑</template>
            <template #title-2>--立人类</template>
            <template #describe
              >&nbsp;&nbsp;关公本名关羽，字云长。关公在其近六十年的一生中，策马横刀，驰骋疆场，征战群雄，辅佐刘备完成鼎立三分大业，谱写出一曲令人感慨万千的人生壮歌，被后人推举为“忠”“信”“义”“勇”集于一身的道德楷模。</template
            >
            <template #img>
              <img src="@/assets/images/guanyu.jpg" height="420" width="327"
            /></template>
          </NisuCard>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselView from "@/components/CarouselView.vue";
import NisuCard from "@/components/NisuCard.vue";
export default {
  components: {
    CarouselView,
    NisuCard,
  },
  setup() {},
};
</script>

<style scoped>
div.container-fluid {
  height: 100%;
  padding: 0;
}
.col-12 {
  padding: 0;
}
.row {
  margin: 0;
}
.row-card {
  height: 500px;
}
</style>


