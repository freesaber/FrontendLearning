<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'

export default {
  name: 'app',
  components: {
    'v-header': header
  },
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.axios.get('/api/seller').then((response) => {
      var res = response.data;
      if (res.code == 0) {
        this.seller = res.data;
        console.log(this.seller);
      }
    })
  },
  computed: {

  },
  watch: {

  },
  mounted() {
    this.$router.push('/goods');
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import "./common/scss/mixins";

  .tab{
    display: flex;
    height: 40px;
    line-height: 40px;
    @include border-1px(rgba(7,17,27,0.1));
    .tab-item{
      flex: 1;
      text-align: center;
      a{
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.router-link-active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
</style>
