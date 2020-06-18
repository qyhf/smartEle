import Vue from "vue";
import Router from "vue-router";
import base from "../utils/api.js";
import { aGet, aPost } from "../utils/request.js";
import { Toast } from "mint-ui";

import index from "@/pages/index";
import home from "@/pages/home/home";
import store from "../store/store";
import register from "@/pages/register/register";
import login from "@/pages/login/login";
import _index from "@/pages/index/index";
import about from "@/pages/about/about";
import help from "@/pages/help/help";
import personData from "@/pages/user/personData";
import my from "@/pages/my/my";
import add from "@/pages/add/add";
import guide from "@/pages/guide/guide";
import myBox from "@/pages/myBox/myBox";

Vue.use(Router);

const routes = [
    {
      path:"/",
      redirect:"/login",
    },
    {
      path: "/register",
      name: "注册",
      component:register,
    },
    {
      path: "/login",
      name: "登录",
      component:login,
    },
    {
      path: "/index",
      name: "首页",
      component:_index,
    },
    {
      path: "/about",
      name: "关于",
      component:about,
    },
    {
      path: "/help",
      name: "帮助",
      component:help,
    },
    {
      path: "/personData",
      name: "个人资料",
      component:personData,
    },
    {
      path: "/my",
      name: "个人中心",
      component:my,
    },
    {
      path: "/add",
      name: "添加电箱",
      component:add,
    },
    {
      path: "/guide",
      name: "使用指南",
      component:guide,
    },
    {
      path: "/myBox",
      name: "我的电箱",
      component:myBox,
    },

];

const router = new Router({
  mode: "hash",
  routes
});

router.beforeEach((to, from, next) => {
  /*if(to.path=='/login'){
    next()
  } else {
    if(localStorage.getItem("userInfo")) {
      next();
    } else {
      Toast({message:'请先登录', position:'bottom', duration:1000 })
      setTimeout(function(){
        next({ path: '/login', query: { redirect: to.fullPath }})
      }, 1000)
    }
  } */
  next();
});

export default router;
