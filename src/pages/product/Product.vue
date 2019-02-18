<template>
    <div>
        <mar-header></mar-header>
        <!--产品详情页主体-start-->
        <div class="container">
            <hr class="d-lg-block d-none mt-2"/>
            <div class="navigation d-none d-lg-flex justify-content-around mt-2 mb-2"  >
                <a href="#" class="d-inline-block color_666">
                <div><img src="../../assets/img/h-m-icon1.png" alt=""/><span>集成灶</span></div>
                </a>
                <a href="#" class="d-inline-block color_666">
                <div><img src="../../assets/img/h-m-icon2.png" alt=""/><span>水槽 洗碗机</span></div>
                </a>
                <a href="#" class="d-inline-block color_666">
                <div><img src="../../assets/img/h-m-icon3.png" alt=""/><span>橱柜</span></div>
                </a>
            </div>
            <div class="position-relative mb-5">
                <img src="http://www.marssenger.com/upload/2018/01/26/151695247263458syqv.jpg" alt=""  class="img-fluid" />
                <div class="pic_textbox position-absolute text-white d-lg-block d-none" >
                <p class="text-center">Marssenger</p>
                <p class="text-center">炒100个辣椒都不怕  让你放心选择开放式厨房</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-12 text-center product_box d-inline-block p-0 mt-3 mb-3">
                <a href="#">
                    <img src="../../assets/img/15260386495585vxpiu.png" alt="">
                    <p class="font_20 color_333 pt-2 mb-1">Q5Z集成灶</p>
                    <p class="color_999">安装尺寸：905mm×600mm×805mm</p>
                </a>
                </div>
                <div class="col-lg-4 col-12 text-center product_box d-inline-block p-0 mt-3 mb-3">
                <a href="#">
                    <img src="../../assets/img/15260386495585vxpiu.png" alt="">
                    <p class="font_20 color_333 pt-2 mb-1">Q5Z集成灶</p>
                    <p class="color_999">安装尺寸：905mm×600mm×805mm</p>
                </a>
                </div>
                <div class="col-lg-4 col-12 text-center product_box d-inline-block p-0 mt-3 mb-3">
                <a href="#">
                    <img src="../../assets/img/15260386495585vxpiu.png" alt="">
                    <p class="font_20 color_333 pt-2 mb-1">Q5Z集成灶</p>
                    <p class="color_999">安装尺寸：905mm×600mm×805mm</p>
                </a>
                </div>
                <div class="col-lg-4 col-12 text-center product_box d-inline-block p-0 mt-3 mb-3">
                <a href="#">
                    <img src="../../assets/img/15260386495585vxpiu.png" alt="">
                    <p class="font_20 color_333 pt-2 mb-1">Q5Z集成灶</p>
                    <p class="color_999">安装尺寸：905mm×600mm×805mm</p>
                </a>
                </div>
                <div class="col-lg-4 col-12 text-center product_box d-inline-block p-0 mt-3 mb-3">
                <a href="#">
                    <img src="../../assets/img/15260386495585vxpiu.png" alt="">
                    <p class="font_20 color_333 pt-2 mb-1">Q5Z集成灶</p>
                    <p class="color_999">安装尺寸：905mm×600mm×805mm</p>
                </a>
                </div>
                <div class="col-lg-4 col-12 text-center product_box d-inline-block p-0 mt-3 mb-3">
                <a href="#">
                    <img src="../../assets/img/15260386495585vxpiu.png" alt="">
                    <p class="font_20 color_333 pt-2 mb-1">Q5Z集成灶</p>
                    <p class="color_999">安装尺寸：905mm×600mm×805mm</p>
                </a>
                </div>
            </div>
            <div class="position-relative d-none d-lg-block">
                <table></table>
                <hr class="mt-3"/>
                <div class="position-absolute bg-white text-center" style="top:0;left:50%;width:120px;margin-left:-60px">
                <a href="#">
                    <img src="../../assets/img/back-top2.png" alt=""/>
                    <p class="mt-2 color_666">点击加载更多(3)</p>
                </a>
                </div>
            </div>
            <div class="row d-none">
                <div class="col-lg-4 col-12 text-center product_box d-inline-block p-0 mt-3 mb-3">
                <a href="#">
                    <img src="../../assets/img/15260386495585vxpiu.png" alt="">
                    <p class="font_20 color_333 pt-2 mb-1">Q5Z集成灶</p>
                    <p class="color_999">安装尺寸：905mm×600mm×805mm</p>
                </a>
                </div>
                <div class="col-lg-4 col-12 text-center product_box d-inline-block p-0 mt-3 mb-3">
                <a href="#">
                    <img src="../../assets/img/15260386495585vxpiu.png" alt="">
                    <p class="font_20 color_333 pt-2 mb-1">Q5Z集成灶</p>
                    <p class="color_999">安装尺寸：905mm×600mm×805mm</p>
                </a>
                </div>
                <div class="col-lg-4 col-12 text-center product_box d-inline-block p-0 mt-3 mb-3">
                <a href="#">
                    <img src="../../assets/img/15260386495585vxpiu.png" alt="">
                    <p class="font_20 color_333 pt-2 mb-1">Q5Z集成灶</p>
                    <p class="color_999">安装尺寸：905mm×600mm×805mm</p>
                </a>
                </div>
            </div>
        </div>
        <!--产品详情页主体-end-->
        <mar-footer></mar-footer>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        menu(){
            window.scrollTo(0,0)
        }
    },
    created(){
        this.menu()
    }
}
</script>

<style scoped>
    @import '../../assets/css/basic.css';
    .container>.navigation>a:hover{
        color:#ba8f5a;
    }
    .container>div>.product_box>a>img{
        width: 170px;
        height: 250px;
    }
    /*图片中的文本框样式*/
    @media screen and (min-width:991px){
        .pic_textbox{
            width:500px;
            height:80px;
            margin-top:-40px;
            margin-left: -250px;
            top: 50%;left: 50%;
        }
    }
    /*响应式页面主图样式*/
    @media screen and (max-width:576px){
        .container>div.position-relative>img{
            height: 220px;
        }
    }
</style>
