
<template>
    <div class="section">
        <div class="wrapper">
            <div class="wrap-box">
                <!--类别菜单-->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                            <!--此处声明下面可重复循环-->

                            <li v-for="item in all.catelist" :key="item.id">

                                <!--左侧表-->
                                <h3>
                                    <i class="iconfont icon-arrow-right"></i>

                                    <!--顶级分类-->
                                    <span>{{item.title}}}</span>
                                    <p>
                                        <span v-for="subitem in item.subcates" :key="subitem">{{subitem.title}}</span>
                                    </p>
                                </h3>

                                <!--左侧列表鼠标放上去显示的遮盖层-->
                                <div class="item-box">
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt>
                                            <a href="/goods/40.html">{{item.title}}</a>
                                        </dt>
                                        <dd>

                                            <!--这里遍历到的subitem可能还会有自己的subcates,并且可能无限
                                             封装成一个单独的组件，使用递归，起始的一层列表数据传递过去，让它渲染
                                             然后组件还会判断每一层数据是否有下一级，如果有那么调用自己继续渲染，直到没有下一级

                                            
                                            -->
                                            <app-category :list="item.subcates"></app-category>

                                            <!--<a href="/goods/43.html">手机通讯</a>
                                             
                                            <a href="/goods/44.html">摄影摄像</a>
                                             
                                            <a href="/goods/45.html">存储设备</a>-->

                                        </dd>
                                    </dl>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <!--/类别菜单-->

                <!--幻灯片-->
                <div class="left-705">
                    <div class="banner-img">

                        <!--element-ui走马灯-->
                        <el-carousel indicator-position="outside">
                            <el-carousel-item v-for="item in all.sliderlist" :key="item.id">
                            <img style="height:100%" :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>        

                    </div>
                </div>
                <!--/幻灯片-->

                <!--推荐商品-->
                <div class="left-220">
                   
                <slide-list :list="all.toplist"></slide-list>





                </div>
                <!--/推荐商品-->
            </div>
        </div>
    </div>
</template>




<script>

import appCategory from './Category'


export default {
    date() {
        all: {
            return {
            // catelist: [],    // 分类列表数据
            sliderlist: [],  // 轮播图列表数据
                toplist: [],     // 置顶商品列表数据
                    catelist: [
                        {
                            id: 151,
                            pid: 150,
                            class_layer: 2,
                            title: "男装",
                            subcates: [
                                {
                                    id: 155,
                                    pid: 154,
                                    class_layer: 4,
                                    title: "休闲西装",
                                    subcates: [
                                        {
                                            id: 155,
                                            pid: 154,
                                            class_layer: 4,
                                            title: "裤子",
                                            subcates: [
                                                {
                                                    id: 155,
                                                    pid: 154,
                                                    class_layer: 4,
                                                    title: "秋裤",
                                                    subcates: [
                                                        {
                                                            id: 155,
                                                            pid: 154,
                                                            class_layer: 4,
                                                            title: "内裤"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
            }
        }
    },

    methods: {
        //获取全部数据
        getData(){
            this.$http.get(this.$api.goodsTop).then(res=>{
                this.all=res.data.message;
            });
        }
    },

    created(){
        this.getData();
    },

    components:{
        appCategory,
    }

}

</script>


<style>

</style>

