<template>
  <div id="app">
    <MyHeader></Myheader>
    <MyTab></MyTab>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader/Myheader'
import MyTab from '@/components/MyTab/MyTab'
export default {
  name: 'app',
  components: {
    MyHeader,
    MyTab
  }
}
</script>

<style lang="scss">
  // @import '~common/styles/const.scss';
  // #app {
  //   color: $color-theme;
  // }
</style>
