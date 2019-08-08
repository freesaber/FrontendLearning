<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{highlight: totalCount > 0}">
            <i class="icon-shopping_cart" :class="{highlight: totalCount > 0}"></i>
          </div>
          <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{highlight: totalPrice > 0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{payDesc}}</div>
      </div>
      <div class="ball-container">
        <transition-group
          name="drop"
          tag="div"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:after-enter="afterEnter"
        >
          <div v-for="ball in dropBalls" :key="ball.index" :data-index="ball.index" class="ball">
            <div class="inner"></div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'shopcart',
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  components: {

  },
  data() {
    return {
      balls: []
    }
  },
  created() {

  },
  computed: {
    // 计算商品总价格
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    // 商品总个数
    totalCount() {
      let count = 0;
      this.selectFoods.forEach(food => {
        count += food.count;
      });
      return count;
    },
    // 起送描述
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice < this.minPrice) {
        return `还差￥${this.minPrice - this.totalPrice}元起送`;
      } else {
        return '去结算';
      }
    },
    payClass() {
      if (this.totalPrice >= this.minPrice) {
        return 'enough';
      } else {
        return 'not-enough';
      }
    },
    dropBalls() {
      return this.balls.filter(ball => {
        return ball.show == true;
      });
    }
  },
  watch: {

  },
  mounted() {

  },
  methods: {
    drop(el) {
      var ball = {
        index: this.balls.length,
        el: el, // 点击的“加号”的元素
        show: true
      }
      this.balls.push(ball);
    },
    beforeEnter: function (el) {
      // 设置球的起始位置
      let ball = this.balls[el.dataset.index];
      let rect = ball.el.getBoundingClientRect();
      el.style.left = (rect.left + 10) + 'px';
      el.style.top = (rect.top + 10) + 'px';
    },
    enter: function (el, done) {
      // 计算和终点位置的差
      let ball = this.balls[el.dataset.index];
      let rect = ball.el.getBoundingClientRect();
      let translateX = -(rect.left - 25) + 'px';
      let translateY = (window.innerHeight - rect.top - 52) + 'px';
      Velocity(el,
        { translateY: translateY },
        { easing: [0.49, -0.29, 0.75, 0.41], queue: false }
      );
      Velocity(el,
        { translateX: translateX },
        { duration: 400, easing: 'easeInSine', complete: done }
      );
    },
    afterEnter: function (el) {
      let ball = this.balls[el.dataset.index];
      ball.show = false;
    }
  }
}
</script>

<style lang="scss">
  .shopcart{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    .content{
      display: flex;
      background: #141d27;
      font-size: 0;
      color: rgba(255, 255, 255, 0.4);
    }
  }
  .content-left{
    flex: 1;
    .logo-wrapper{
      display: inline-block;
      vertical-align: top;
      position: relative;
      top: -10px;
      margin: 0 12px;
      padding: 6px;
      width: 56px;
      height: 56px;
      box-sizing: border-box;
      border-radius: 50%;
      background: #141d27;
      .logo{
        width: 100%;
        height: 100%;
        font-size: 16px;
        border-radius: 50%;
        text-align: center;
        background: #2b343c;
        &.highlight{
          background: rgb(0, 160, 220);
          cursor: pointer;
        }
        .icon-shopping_cart{
          line-height: 44px;
          font-size: 24px;
          color: #80858a;
          &.highlight{
            color: #fff;
          }
        }
      }
      .num{
        position: absolute;
        top: 0;
        right: 0;
        width: 24px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 16px;
        font-size: 9px;
        font-weight: 700;
        color: #fff;
        background: rgb(240, 20, 20);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
      }
    }
    .price{
      display: inline-block;
      vertical-align: top;
      margin-top: 12px;
      line-height: 24px;
      padding-right: 12px;
      box-sizing: border-box;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 16px;
      font-weight: 700;
      &.highlight{
        color: #fff;
      }
    }
    .desc{
      display: inline-block;
      vertical-align: top;
      margin:12px 0 0 12px;
      line-height: 24px;
      font-size: 10px;
    }
  }
  .content-right{
    flex: 0 0 105px;
    width: 105px;
    .pay{
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      background: #2b333b;
      &.not-enough{
        background: #2b333b;
      }
      &.enough{
        background: #00b43c;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .ball-container{
    .ball{
      position: fixed;
      z-index: 200;
      .inner{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgb(0, 160, 220);
      }
    }
  }
</style>
