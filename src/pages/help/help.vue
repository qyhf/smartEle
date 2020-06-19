<template>
  <div class="help">
    <!-- 顶部栏 -->
    <van-nav-bar
        title="帮助"
        left-arrow
        @click-left="onClickLeft"
    />
    <!-- 内容 -->
    <div class="content">
        <img src="../../assets/img/help.png" />
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
.help{
  background-color:#fff; 
  .van-nav-bar{
        height:rem(90);
        line-height: rem(90);
    }
  .van-nav-bar__title{
    font-size:rem(24);
  }
  .van-nav-bar .van-icon{
    color:#333 !important;
    line-height: rem(90);
  }
   .van-nav-bar__arrow{
      font-size:rem(24);
      
  }
.content{
    width:100%;
    img{
        display:block;
        width:100%;
    }
}
}
</style>

