<template>
  <div class="index">
   
    <div class="wrapper">
        <div class="nav">
            <span class="app" @click="my"></span>
            <span class="more" @click="add"></span>
        </div>
        <div class="icon">
            <img src="../../assets/img/组 869@2x.png"/>
            <p>有新智能用电</p>
        </div>
        <div class="content">
            <ul>
                <li @click="myBox">
                    <img src="../../assets/img/组 891@2x.png" />
                    <p>智能终端</p>
                </li>
                <li @click="myBox">
                    <img src="../../assets/img/组 895@2x.png" />
                    <p>定时控制</p>
                </li>
                <li @click="myBox">
                    <img src="../../assets/img/组 906@2x.png" />
                    <p>电量</p>
                </li>
                <li @click="myBox">
                    <img src="../../assets/img/组 887@2x.png" />
                    <p>一键开关</p>
                </li>
                <li @click="myBox">
                    <img src="../../assets/img/组 881@2x.png" />
                    <p>漏报自查</p>
                </li>
                <li @click="myBox">
                    <img src="../../assets/img/组 876@2x.png" />
                    <p>安全信息</p>
                </li>
             
            </ul>
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
      add(){
          this.$router.push({path:"/add"})
      },
      my(){
          this.$router.push({path:"/my"})
      },
      myBox(){
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
html{
    background-color:#f8f8f8;
}
body{
    background-color:#f8f8f8;
}
.index{
    width:100%;
    height:rem(1100);
    font-size: rem(12);
    padding:rem(46) rem(38) 0;
    background:linear-gradient(to bottom, #1cb1ff, #a9eefa,#f8f8f8);
  .wrapper{
      position:relative;
      .nav{
          .app{
              display:inline-block;
              width:rem(66);
              height:rem(66);
              background-image:url("../../assets/img/app_big.png");
               background-size:rem(66) rem(66);
              background-repeat: no-repeat;
          }
          .more{
              display:inline-block;
              width:rem(66);
              height:rem(66);
              background-image:url("../../assets/img/more_mid.png");
              background-repeat: no-repeat;
              background-size:rem(66) rem(66);
              position:absolute;
              top:0;
              right:0;
          }
          
      }
     
      .icon{
          margin-top:rem(153);
          text-align: center;
          img{
              display:block;
              width:rem(231);
              height:rem(198);
              margin:0 auto;
            
          }
          p{
              font-size:rem(35);
              color:#fff;
              margin-top:rem(38);
          }
      }
      .content{
          margin-top:rem(196);
          ul{
              display:flex;
              flex-wrap: wrap;
              li{
                  height:rem(259);
                  width:rem(197);
                  background-color:#fff;
                  border-radius: rem(60);
                  text-align: center;
                  padding:rem(30) 0;
                  margin:0 rem(38)  rem(38) 0;
                  img{
                      display:block;
                      width:rem(120);
                      height:rem(120);
                      margin:0 auto rem(41);
                  }
                  p{
                      font-size:rem(25);
                  }
              }
              li:nth-child(3n){
                  margin-right:0;
              }
              li:nth-child(n+4){
                  margin-bottom:0;
              }
          }
      }
  }
}
</style>

