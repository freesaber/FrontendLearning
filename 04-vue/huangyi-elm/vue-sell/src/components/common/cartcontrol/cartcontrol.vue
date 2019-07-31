<template>
  <div class="cartcontrol">
    <transition name="slide-fade">
      <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart">
        <i class="inner icon-remove_circle_outline"></i>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script>
export default {
  name: 'cartcontrol',
  props: {
    food: {
      type: Object
    }
  },
  components: {

  },
  data() {
    return {

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
    addCart() {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
    },
    decreaseCart() {
      if (this.food.count > 0) {
        this.food.count--;
      }
    }
  }
}
</script>

<style lang="scss">
  .cartcontrol{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      vertical-align: top;
      padding: 6px;
      &.slide-fade-enter-active {
        transition: all .4s linear;
      }
      &.slide-fade-leave-active {
        transition: all .4s linear;
      }
      &.slide-fade-enter, .slide-fade-leave-to{
        transform: translateX(10px);
        opacity: 0;
      }
      .inner{
        font-size: 24px;
        line-height: 24px;
        color: rgb(0, 160, 220);
      }
    }
    .cart-count{
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147, 153, 159)
    }
    .cart-add{
      display: inline-block;
      vertical-align: top;
      padding: 6px;
      font-size: 24px;
      line-height: 24px;
      color: rgb(0, 160, 220);
    }
  }
</style>
