//vue的过滤器其实就是一个函数,只不过使用方式比较特殊，需要在模板中通过管道符(|)调用 
// import Vue from 'vue'
// Vue.filter('date',function(obj){
    
// return JSON.stringify(obj);
// })

export default function(obj){
    return JSON.stringify(obj);
}