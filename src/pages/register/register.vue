<template>
  <div class="register">
    <div class="wrapper">
      <div class="top">
        <p>新用户注册
          <span></span>
        </p>
      </div>
      <div class="content">
        <div class="phone">
          <div class="left">
            <input type="text" placeholder="请输入手机号" value="138999999999">
          </div>
          <div class="right">
            <a>获取验证码</a>
          </div>
          
        </div>
        <div class="code">
          <input type="text" placeholder="请输入验证码" value="000000">
        </div>
        <div class="password">
          <input type="password" placeholder="请设置您的密码（最少8位。字母+数字）" value="ab0000">
        </div>
        <div class="agreement">
          <span v-bind:class="checked" @click="onChange"></span>
          <p class="agree">我已阅读并同意《隐私条款》及《用户服务协议》</p></p>
        </div>
        
      </div>
      <div class="btn">
        <button @click="login">注册</button>
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
        checked: 'active',
      }
    },
    methods:{
      onChange() {
        
        if(this.checked==""){
          this.checked="active";
        }else{
          this.checked='';
        }  
      },
      login(){
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
$font:rem(23);
@mixin input{
  margin:rem(46) rem(56) 0;
  border-bottom:1px solid #5cc9fa;
  input{
    display:inline-block;
    border:0;
    font-size:$font;
    font-family: "SimSun";
    padding:0;
    margin:0;
    height:rem(75);
  }
  input::-webkit-input-placeholder{
    font-size:$font;
    font-family: "SimSun";  
  }
  
}
body{
  background-color:#fff;
}
.register{
  .wrapper{
    width:100%;
    .top{
      width:100%;
      height:rem(335);
      background: linear-gradient(to bottom, #1cb1ff, #a9eefa,#fff);
      p{
        font-family: "SimSun";
        font-size:rem(35);
        color:#000;
        padding:rem(236) rem(56) 0;
        font-weight:bold;
        span{
          display:block;
          width:rem(180);
          height:rem(28);
          background: linear-gradient(to right, #cbf7fb, #a5f2f9,#92faf3);
          margin-top:rem(-10);
          margin-left:rem(18)
        }
        
      }

    }
    .content{
      .phone{
        display:flex;
        flex-wrap: nowrap;
        @include input;
        .left{
          width:70%;
        }
        .right{
          width:30%;
          a{
            display:block;
            height:rem(75);
            color:#999;
            font-size:$font;
            text-align: right;
            line-height: rem(75);
          }
        }
       
      }
      .code{
        @include input;
      }
      .password{
        @include input;
        
      }
      .agreement{
        margin:rem(25) auto 0;
        height:rem(50);
        width:rem(638);
        display:flex;
        flex-wrap: nowrap;
        span{
          display:inline-block;
          width:rem(19);
          height:rem(19);
          border:1px solid #ccc;
          border-radius: 50%;
          margin:auto 0;
        }
       span.active{
          background-image:url("../../assets/img/select.png");
          background-repeat: no-repeat;
          background-size:rem(19) rem(19);
          border:0;
        }
        p.agree{
          font-size:rem(19);
          font-family: "SimSun";
          color:#ccc;
          margin:0;
        }
    
      }
    }
    .btn{
      padding:0 rem(56) 0;
      margin-top:rem(46);
      button{
        display:block;
        width:100%;
        height:rem(80);
        color:#fff;
        background-color:#5cc9fa;
        font-size:rem(25);
        border-radius:rem(128);
      }
    }
     
  }
 
}


</style>

