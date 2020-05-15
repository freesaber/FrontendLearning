<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import { urlParse } from './assets/js/util'

export default {
  name: 'app',
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
    // login
    // this.$router.push('/login');
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#app{
  height: 100%;
}
</style>
