<template>
  <div class="myBox">
    <div class="heard">
        <van-nav-bar
        title="我的电箱"
        left-arrow
        @click-left="onClickLeft"
    />
    <div class="search">
        <span></span>
        <input type="text" placeholder="请输入设备号和名称搜索">
    </div>
    <div class="content">
        <div class="top">
            <p>研发中心</p>
            <span>80146544655  广州</span>
            <i></i>
        </div>
        <div class="down">
            <p class="password">修改密码</p>
            <p class="internet">修改网络</p>
        </div>
        <div class="btn">
            <button @click="add">添加新电箱</button>
        </div>
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
      add(){
          this.$router.push({path:"/add"})
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
.myBox{
    .heard{
        height:rem(331);
        width:100%;
        background-image:url("../../assets/img/react.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .search{
            background-color:#fff;
            margin:rem(38) rem(30) 0;
            width:rem(688);
            height:rem(79);
            border-radius: rem(16);
            display:flex;
            flex-wrap:nowrap;
            span{
                display:block;
                width:rem(32);
                height:rem(32);
                background-image:url("../../assets/img/search.png");
                background-repeat: no-repeat;
                background-size:rem(32) rem(32);
                margin:auto rem(28);
            }
            input{
                display:block;
                height:rem(79);
                width:rem(530);
                padding:0;
                margin:0;
                border:0;
            }
        }
        .content{
            background-color:#fff;
            margin:rem(38) rem(30) 0;
            width:rem(688);
            height:rem(228);
            border-radius:rem(64);
            padding:0 rem(31);
            .top{
                position:relative;
                p{
                    font-size:rem(27);
                    color:#333;
                    padding-top:rem(38);
                    margin-bottom:0;
                }
                span{
                    display:block;
                    color:#999;
                    font-size:rem(18);
                    margin-bottom:rem(27);
                    border-bottom:1px solid #e2e2e2;
                }
                i{
                    display:block;
                    width:rem(36);
                    height:rem(36);
                    background-image:url("../../assets/img/change.png");
                    background-repeat: no-repeat;
                    background-size:rem(36) rem(36);
                    position:absolute;
                    right:0;
                    top:rem(53);
                }
            }
            .down{
                display:flex;
                .password{
                    width:50%;
                    color:#333;
                    font-size:rem(19);
                    text-align: center;
                    border-right:1px solid #e2e2e2;
                }
                .internet{
                    width:50%;
                    color:#333;
                    font-size:rem(19);
                    text-align: center;
                    border-left:1px solid #e2e2e2;
                }
            }
            .btn{
                margin:rem(636) rem(79) 0;
                button{
                    display:block;
                    height:rem(78);
                    width:100%;
                    color:#fff;
                    background-color:#1cb1ff;
                    font-size:rem(27);
                    line-height:rem(78);
                    padding:0;
                    border-radius:rem(128);
                }
            }
        }
    }
    .van-nav-bar{
        height:rem(90);
        line-height: rem(90);
        background-color:transparent;
        
    }
    .van-hairline--bottom::after{
        border:0;
    }
  .van-nav-bar__title{
    font-size:rem(24);
    color:#fff;
  }
  .van-nav-bar .van-icon{
      color:#fff !important;
  }
}
</style>

