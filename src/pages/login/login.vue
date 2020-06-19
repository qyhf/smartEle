<template>
  <div class="login">
    <div class="wrapper">
        <div class="top">
            <p>登录
                <span></span>
            </p>
        </div>
        <div class="content">
            <div class="phone">
                <span></span>
                <input type="text" placeholder="请输入手机号" value="138999999999">
            </div>
            <div class="password">
                <span></span>
                <input type="password" placeholder="请输入密码号" value="ab0000">
            </div>
            <div class="forget">
                <a href="#">忘记密码</a>
            </div>
        </div>
        <div class="btn">
            <button @click="login">登录</button>
        </div>
        <div class="register">
            <span class="line"></span>
            <a href="#" @click="register">新用户注册</a>
            <span class="line"></span>
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
      login(){
        this.$router.push({
          path:"/index"
        })
      },
      register(){
        this.$router.push({
          path:"/register"
        })
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
$font:rem(24);
@mixin input($img){
  display:flex;
  margin:rem(46) rem(82) 0;
  border-bottom:1px solid #fff;
  span{
      display:block;
      width:rem(41);
      height:rem(48);
      background-image:url($img);
      background-repeat: no-repeat;
      background-size:rem(41) rem(48);
      background-position: 0 0;
      margin:auto 0;
  }
  input{
    display:inline-block;
    border:0;
    font-size:$font;
    font-family: "SimSun";
    background-color:transparent;
    padding:0 0 0 rem(26);
    margin:0;
    height:rem(78);
    
  }
  input::-webkit-input-placeholder{
    font-size:$font;
    font-family: "SimSun";  
    color:#fff;
  }
}
html{
  height:100%;
}
body{
  height:100%;
}
#app{
  height:100%;
}
.login{
  width:100%;
  height:100%;
  background-image:url("../../assets/img/login_background.png");
  background-repeat: no-repeat;
  background-size:100% 100%;
  .wrapper{
   
      .top{
          p{
            font-family: "SimSun";
            font-size:rem(35);
            color:#000;
            padding:rem(302) rem(82) 0;
            font-weight:bold;
            color:#fff;
            margin:0;
            span{
                display:block;
                width:rem(80);
                height:rem(33);
                background: linear-gradient(to right, #1fb3ff,#47dcf4);
                background-color:#91fbf3;
                margin-left:rem(5);
                margin-top:rem(-32);
            }
        }
      } 
      .content{
          margin-top:rem(339);
          .phone{
              
              @include input("../../assets/img/phone.png");
          }
          .password{
              @include input("../../assets/img/password.png");
          }
          .forget{
              margin:rem(25) rem(82) 0;
              a{
                  display:block;
                  font-family: "SimSun";
                  font-size:rem(21);
                  color:#fff;
                  text-align:right;
              }
          }
      }
      .btn{
        padding:0 rem(82) ;
        margin-top:rem(65);
        button{
            display:block;
            width:100%;
            height:rem(81);
            color:#5cc9fa;
            background-color:#fff;
            font-size:rem(25);
            border-radius:rem(128);
            }
        }
        .register{
            display:flex;
            margin:rem(36) rem(82) 0;
            justify-content: center;
            a{
                width:rem(190);
                font-size:rem(25);
                padding:0 rem(22);
                color:#fff;
                font-family: "SimSun";
                text-align: center;

            }
            .line{
                display:block;
                height:1px;
                width:rem(205);
                background-color:#fff;
                margin:auto 0;
            }
        }
    } 
 
}
</style>

