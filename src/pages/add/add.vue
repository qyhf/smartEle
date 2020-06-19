<template>
  <div class="add">
    <!-- 顶部栏 -->
    <van-nav-bar
        title="添加电箱"
        left-arrow
        @click-left="onClickLeft"
    />
    <!-- 需要添加的信息 -->
   <div class="content">
       <div class="data">
           <p>电箱设备号</p>
           <input type="text" v-model="num" placeholder="请输入设备号">
       </div>
       <div class="data">
           <p>电箱密码</p>
           <input type="password" v-model="password" placeholder="请输入密码">
       </div>
       <div class="data">
           <p>电箱取名</p>
           <input type="text" v-model="name" placeholder="请输入电箱名">
       </div>
       <div class="data">
           <p>安装城市</p>
           <input type="text" v-model="city" placeholder="请输入城市名">
       </div>
       <div class="btn">
           <button @click="myBox">添加电箱</button>
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
        num:"",
        password:"",
        city:"",
        name:""
      }
    },
    methods:{
      onClickLeft(){//返回上一页面
          
          this.$router.go(-1);
      },
      myBox(){//添加电箱功能
          let obj={
            num:this.num,
            password:this.password,
            city:this.city,
            name:this.name
          }
          this.$store.commit("add",obj)
          this.$router.push({path:"/myBox"})
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
.add{
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
      padding:0 rem(54);
      .data{
          border-bottom:1px solid #5cc9fa;
          margin-top:rem(56);
      }
      p{
          font-size:rem(24);
          color:#333;
          font-weight:bold;
          margin:0;
          height:rem(36);

      }
      input{
          display:block;
          border:0;
          margin:0 0 0;
          padding:0;
          height:rem(75);
      }
      input::-webkit-input-placeholder{
          font-size:rem(24);
      }
      .btn{
          margin-top:rem(185);
          button{
              display: block;
              height:rem(79);
              width:100%;
              background-color:#1cb1ff;
              color:#fff;
              border-radius:rem(128);
              font-size:rem(26);
          }
      }
  }
}
</style>

