<template>
  <div class="about">
    <!-- 顶部栏 -->
    <van-nav-bar
        title="关于"
        left-arrow
        @click-left="onClickLeft"
    />
    <!-- 内容 -->
    <van-cell title="隐私条例" is-link bind:click="showPopup" />
    <van-cell title="用户协议" is-link bind:click="showPopup" />
  </div>
</template>

<script>
  import api from '../../utils/api'  
  import { aGet, aPost } from '../../utils/request' 
  import $ from 'jquery'

  export default {
    data(){
      return {
        
      }
    },
    methods:{
       onClickLeft(){//返回上一页面
          this.$router.go(-1);
      }
    },

    created(){
      
    },

    mounted(){
      $(window).scrollTop(0)
    }
  }
</script>

<style lang="scss">
@function rem($len) {
  @return $len * 16/750 + rem;
}
body{
  background-color:#fff;
}
.about{
  .van-nav-bar{
        height:rem(90);
        line-height: rem(90);
    }
  .van-nav-bar__title{
    font-size:rem(24);
  }
  .van-cell{
    font-size:rem(26);
    padding:rem(28) rem(33);
  }
  .van-nav-bar .van-icon{
    color:#333 !important;
    line-height: rem(90);
  }
   .van-nav-bar__arrow{
      font-size:rem(24);
      
  }
}
</style>

