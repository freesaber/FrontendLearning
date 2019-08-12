<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol @addCart="addCart" :food="food" v-show="food.count"></cartcontrol>
          </div>
          <div @click.stop.prevent="addFirst($event)" class="buy" v-show="!food.count || food.count === 0">加入购物车</div>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BScroll from '@better-scroll/core'
import cartcontrol from '../common/cartcontrol'
import split from '../common/split'

export default {
  name: 'food',
  props: {
    food: {
      type: Object
    }
  },
  components: {
    cartcontrol,
    split
  },
  data() {
    return {
      showFlag: false
    }
  },
  created() {

  },
  computed: {

  },
  watch: {

  },
  mounted() {

  },
  methods: {
    show() {
      this.showFlag = true;
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.food, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    hide() {
      this.showFlag = false;
    },
    addFirst(event) {
      this.$set(this.food, 'count', 1);
      this.$emit('addCart', event.target);
    },
    addCart(target) {
      this.$emit('addCart', target);
    }
  }
}
</script>

<style lang="scss" scoped>
  .food{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 48px;
    z-index: 30;
    width: 100%;
    background: #fff;
    &.move-enter-active, &.move-leave-active{
      transition: all .2s linear;
    }
    &.move-enter, &.move-leave-to{
      transform: translate3d(100%, 0, 0);
    }
    &.move-enter-to, &.move-leave{
      transform: translate3d(0, 0, 0);
    }

    .food-content{
      .image-header{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
        img{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .back{
          position: absolute;
          top: 10px;
          left: 0;
          .icon-arrow_lift{
            display: block;
            padding: 10px;
            font-size: 20px;
            color: #fff;
          }
        }
      }

      .content{
        position: relative;
        padding: 18px;
        .title{
          line-height: 14px;
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(7, 17, 27);
        }
        .detail{
          margin-bottom: 18px;
          line-height: 10px;
          font-size: 0;
          height: 10px;
          .sell-count, .rating{
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
          .sell-count{
            margin-right: 12px;
          }
        }
        .price{
          font-weight: 700;
          line-height: 24px;
          .now{
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old{
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .cartcontrol-wrapper{
          position: absolute;
          right: 12px;
          bottom: 12px;
        }
        .buy{
          position: absolute;
          right: 18px;
          bottom: 18px;
          z-index: 10;
          height: 24px;
          line-height: 24px;
          padding: 0 12px;
          box-sizing: border-box;
          border-radius: 12px;
          font-size: 10px;
          color: #fff;
          background: rgb(0, 160, 220);
        }
      }

      .info{
        padding: 18px;
        .title{
          line-height: 14px;
          margin-bottom: 6px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .text{
          line-height: 24px;
          padding: 0 8px;
          font-size: 12px;
          color: rgb(77, 85, 93);
        }
      }
    }

  }
</style>
