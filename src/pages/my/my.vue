<template>
  <div class="my">
    <div class="heard">
        <div class="pic">
            <img @click="data" src="../../assets/img/组 916@2x.png" />
            <p>138999999999</p>
        </div>
    </div>
    <div class="content">
        <div class="cont">
            <div class="left">
                <img src="../../assets/img/组 912@2x.png" />
            </div>
            <div class="right">
                <van-cell title="主界面" is-link @click="myData" />
            </div>
        </div>
    
        <div class="contGui">
            <div class="left">
                <img src="../../assets/img/组 911@2x.png" />
            </div>
            <div class="right">
                <van-cell title="APP使用指南" is-link @click="guide" />
            </div>
        </div>
        <div class="contHelp">
            <div class="left">
                <img src="../../assets/img/组 910@2x.png" />
            </div>
            <div class="right">
                <van-cell title="帮助" is-link @click="help" />
            </div>
        </div>
        <div class="contAbout">
            <div class="left">
                <img src="../../assets/img/组 908@2x.png" />
            </div>
            <div class="right">
                <van-cell title="关于" is-link @click="about" />
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
      myData(){
          this.$router.push({path:"/index"})
      },
      guide(){
          this.$router.push({path:"/guide"})
      },
      help(){
          this.$router.push({path:"/help"})
      },
      about(){
          this.$router.push({path:"/about"})
      },
      data(){
          this.$router.push({path:"/personData"})
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
@mixin cont{
     display:flex;
            height:rem(44);
            position: relative;
            
            .left{
                img{
                    display:block;
                    width:rem(44);
                    height:rem(44);
                } 
            }
            .right{
                margin-left:rem(26);
                width:rem(1178);
                
                    .van-cell{
                        font-size:rem(29);
                        color:#333;
                        font-weight: bolder;
                        line-height: rem(44);
                        padding:0;
                    }
                    .van-icon, .van-icon::before{
                        
                        position: absolute;
                        top:0;
                        right:0;
                        
                    }
                    .van-cell__left-icon, .van-cell__right-icon{
                        font-size:rem(25);
                        line-height: rem(44);
                    }
                    .van-cell__title{
                        border-bottom:1px solid #e2e2e2;
                        padding-bottom:rem(21);
                    }
                }
}
body{
    background-color:#fff;
}
.my{
    .heard{
        width:100%;
        height:rem(409);
        background-image:url("../../assets/img/react.png");
        background-repeat: no-repeat;
        background-size:100% 100%;
        .pic{
            padding-top:rem(225);
            padding-left:rem(48);
            display:flex;
            img{
                display:block;
                width:rem(103);
                height:rem(103);
            }
            p{
                margin-left:rem(21);
                font-size:rem(25);
                color:#333;
                line-height: rem(103);
            }
        }
    }
    .content{
        padding:0 rem(48) rem(100);
        .cont{
            margin-top:rem(72);
           @include cont;
        }
        .contGui{
            margin-top:rem(72);
            @include cont;
        }
        .contHelp{
            margin-top:rem(72);
            @include cont;
        }
        .contAbout{
            margin-top:rem(72);
            @include cont;
        }
    }
  
}
</style>

