<template>
  <div class="personData">
    <van-nav-bar
        title="个人资料"
        left-arrow
        @click-left="onClickLeft"
    />
    <div class="wrapper">
        <div class="pic">
            <p>头像</p>
            <img src="../../assets/img/组 916@2x.png" alt="">
        </div>
        <div class="data">
            <div class="dataInp">
                <p>昵称</p>
                <input type="text" placeholder="请输入昵称">
            </div>  
        </div>
        <div class="data">
            <div class="dataInp">
                <p>姓名</p>
                <input type="text" placeholder="请输入姓名">
            </div>  
        </div>
        <div class="data">
            <div class="dataInp">
                <p>地址</p>
                <input type="text" placeholder="请输入地址">
            </div>  
        </div>
        <div class="data">
            <div class="dataInp">
                <p>电话</p>
                <input type="text" placeholder="请输入电话">
            </div>  
        </div>
        <div class="btn">
            <button @click="quit">退出登录</button>
        </div>
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
      },
      quit(){
          this.$router.push({path:"/login"})
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
.personData{
    .van-nav-bar{
        height:rem(90);
        line-height: rem(90);
    }
    .van-nav-bar__title{
    font-size:rem(24);
  }
  .wrapper{
      padding:0 rem(53);
      .pic{
          height:rem(140);
          border-bottom:1px solid #5cc9fa;
          position:relative;
          p{
              font-size:rem(32);
              line-height: rem(140);
              color:#333;

            }
           img{
                display:block;
                width:rem(104);
                height:rem(104);
                position:absolute;
                right:0;
                top:rem(18);
          }
      }
      .data{
          margin-top:rem(55);
          .dataInp{
              border-bottom:1px solid #5cc9fa;
          }
          p{
              font-size:rem(25);
              color:#333;
              margin:0;

          }
          input{
              display:block;
              height:rem(72);
              border:0;
              padding:0;
              margin:0;
          }
          input::-webkit-input-placeholder{
              font-size:rem(23);
              font-family:"SimSun";
              
          }
      }
      .btn{
          margin-top:rem(227);
          button{
              display:block;
              font-size:rem(25);
              color:333;
              background-color:#eee;
              height:rem(78);
              width:100%;
              line-height:rem(78);
              border-radius:rem(128);
              padding:0;
              font-weight: bold;
          }
      }
  }
}
</style>

