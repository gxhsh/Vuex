
<template>
    <div>
        <router-link to="item in list" :key="item.id">
            {{item.title}}
            <!--如果item具有subcates,那么调用自己递归渲染，如果没有就不调-->
            <app-category v-if="item.subcates&&item.subcates.length!=0" :list="item.subcates"></app-category>
        </router-link>
    </div>

</template>




<script>



export default {
    // 为了在当前组件内使用，所以给自己定义一个名称
    name:'app-category',
    // 接收父传递的数据
    props:['list']
}
</script>


<style>

</style>

