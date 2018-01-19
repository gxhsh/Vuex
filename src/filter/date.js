//vue的过滤器其实就是一个函数,只不过使用方式比较特殊，需要在模板中通过管道符(|)调用 
// import Vue from 'vue'
// Vue.filter('date',function(data){
//     // let date=new Date(data);
    
//     return new Date(date).toLocaleString();
// })

// 直接导出滤器函数
export default function(date){
    return new Date(date).toLocaleDateString();
}