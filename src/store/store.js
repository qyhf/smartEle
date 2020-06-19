import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {   //要设置的全局访问的state对象
    box:[//电箱数据
        {
            num:"80146544655",
            password:"000000",
            name:"研发中心",
            city:"广州"
        },
    ],
    search:[//搜索结果数据

    ],
    //要设置的初始属性值
};
const getters = {   //实时监听state值的变化(最新状态)
};
const mutations = {
    add(state,item){//添加电箱功能
        state.box.push(item);
    },
    search(state,item){//搜索功能
        var arr=[];
        state.box.forEach((items)=>{
            if(items.name==item||items.num==item){
                arr.push(items);
            }
        })
        state.box=arr;
    },
    

};
const actions = {
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
export default store;