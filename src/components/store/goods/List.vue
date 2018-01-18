
<template>
    <!--导航-->
    <div class="section">
        <div class="location">
            <span>当前位置：</span>
            <router-link to="/goods/list">首页</router-link>       
        </div>
    <!--头部-->
    <list-top></list-top>

    <!--主体-->
    <list-main></list-main>
    </div>


</template>




<script>

import ListTop from './common/ListTop.vue';
import ListMain from './common/ListMain.vue';



export default {
    ListTop,
    ListMain,
}
</script>


<style>

</style>

