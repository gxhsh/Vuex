// 因为当前不是vue组件, 所以无法this.$http this.$api拿取东西, 只能单独导入使用
import axios from 'axios';
import api from '@/js/api-config.js';

//这些页面路径不用检测登陆权限
let noLoginCheckPage=[
    'index',
    'goodsList',
    'goodsDetail',
    'shopcart',
];

// 1. 先获取用户要去的页面
// 2. 如果用户要去登陆页
// 2.1 那么判断用户是不是登陆过了, 是的话直接给他跳转到后台首页
// 3. 如果用户要去后台管理相关页
// 3.1 那么判断用户是不是登陆过了, 不是的话给他跳转到登陆页
export default function(to, from, next) {
    var toPageName = to.name;
    //如果用户访问的页面，无需登陆校验，那么直接调用next方法进行路由跳转
    if(noLoginCheckPage.some(v=>v==toPageName)){
       return next();
    }

    // 请求接口判断用户有没有登陆
    axios.get(api.isLogin).then(res => {
        console.log(123);
        let isLogin = false;

        
        if(res.data.code == 'logined') {
            isLogin = true;
        }
        console.log(isLogin);
        // 用户访问首页面, 如果已登陆, 那么自动转到首页
        if(toPageName == 'login' && isLogin) {
            next('/');
        }
        // 用户访问后台管理页面, 但是他没有登陆, 那么自动转到登陆页
        else if(toPageName != 'login' && !isLogin){
            // 跳转到登陆时, 把当前页面通过url参数记录下来 
            next({ name: 'login', query: { nextPage: to.fullPath } });
        }
        else {
            next();
        }
    });
}
