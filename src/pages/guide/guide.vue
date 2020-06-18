<template>
  <div class="guide">
       <van-nav-bar
        title="使用指南"
        left-arrow
        @click-left="onClickLeft"
    />
      <div class="content">
          <van-swipe class="my-swipe" indicator-color="#009be1" show-indicators>
    <van-swipe-item>
        <img src="../../assets/img/组 921@2x.png" />
    </van-swipe-item>
    <van-swipe-item>
        <img src="../../assets/img/组 922@2x.png" />
    </van-swipe-item>
    <van-swipe-item>
        <img src="../../assets/img/组 923@2x.png" />
    </van-swipe-item>
    <van-swipe-item>
        <img src="../../assets/img/更多功能 – 1@2x.png" />
    </van-swipe-item>
</van-swipe>
      </div>
    
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
      onClickLeft(){
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
    background-color:#f8f8f8;
}
.guide{ 
  padding-bottom:rem(50);
  background-color:#f8f8f8;
  .van-nav-bar{
        height:rem(90);
        line-height: rem(90);
    }
  .van-nav-bar__title{
    font-size:rem(24);
    
  }
  .van-nav-bar{
      background-color:#f8f8f8;
  }
  img{
      display:block;
      width:rem(600);
      height:rem(1060);
      margin:0 auto;
  }
  .van-swipe__indicator{
      opacity:1;
      background-color: #fff;
      width:rem(12);
      height:rem(12);
  }
  .van-swipe__indicators{
      bottom:rem(0);
  }
}
</style>

