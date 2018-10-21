<template>
  <div id="app">
    <vue-scratch-card 
        element-id='scratchWrap'
        :ratio=0.5
        :move-radius=50
        :start-callback=startCallback
        :clear-callback=clearCallback
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods : {
    startCallback(){
      console.log('抽奖成功！')
    },
    clearCallback(){
      console.log('清除完毕！')
    }
  }
}
</script>

<style lang="scss">

</style>
