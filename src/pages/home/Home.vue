<template>
    <div>
        <mar-header></mar-header>
        <!--轮播-start-->
        <div class=" bg_text container">
            <img src="../../assets/img/index-banner-icon1.jpg" alt=""/>
            <p class="font_20">Product design award</p>
            <h1>让厨房生活更健康</h1>
            <p class="font_24">高端产品缔造者  健康生活引领者</p>
            <a href="#">探索更多</a><a href="#">立即购买</a>
        </div>
        <div id="index_carousel" class="carousel  bg_img" data-ride="carousel" data-interval='2000'>
            <div class="carousel-inner  bg_img">
                <div class="carousel-item active  bg_img" >
                <img src="http://www.marssenger.com/upload/2018/01/24/15167811491674vq2mj.jpg" alt="" />
                </div>
                <div class="carousel-item bg_img">
                <img src="../../assets/img/marssenger_img.jpg" alt=""/>
                </div>
                <div class="carousel-item bg_img">
                <video class="bg_video" controls preload="auto">
                    <source src="http://www.marssenger.com/upload/2018/10/19/15399278599621bkx2x.mp4"/>
                </video>
                </div>
            </div>
            <ul class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#index_carousel"></li>
                <li data-slide-to="1" data-target="#index_carousel"></li>
                <li data-slide-to="2" data-target="#index_carousel"></li>
            </ul>
            <a href="" class="carousel-control-prev" data-slide="prev" data-target="#index_carousel">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a href="" class="carousel-control-next" data-slide="next" data-target="#index_carousel">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
        <!--轮播-end-->
        <!--主体内容-start-->
        <section>
            <div>
                <div class="container">
                <div class="row">
                    <div class="d-flex d-lg-none col-12 justify-content-around">
                    <div class="img_box my_section_pic1"></div>
                    <div class="text_box">
                        <img src="../../assets/img/icon.png" alt="" class="d-lg-none"/>
                        <p class="m-0">关于火星人</p>
                        <p class="m-0 font-weight-light">高端产品缔造者 • 健康生活引领者</p>
                    </div>
                    </div>
                    <div v-for='item in list' :key='item.id' :class=item.class2 class="d-flex col-lg-4 col-12 justify-content-center align-items-lg-center  ">
                    <div class="img_box " :class=item.class></div>
                    <div class="text_box">
                        <img :src=item.url  alt="" class="d-lg-none"/>
                        <p class="m-0">{{item.name}}</p>
                        <p class="m-0 font-weight-light">{{item.content}}</p>
                    </div>
                    </div>
                    <!-- <div class="d-flex col-lg-4 col-12 justify-content-center align-items-lg-center only_border">
                    <div class="img_box my_section_pic3"></div>
                    <div class="text_box">
                        <img src="../../assets/img/h-m-icon2.png" alt="" class="d-lg-none"/>
                        <p class="m-0">集成水槽 洗碗机</p>
                        <p class="m-0 font-weight-light">超级大槽，复式阶梯结构设计</p>
                    </div>
                    </div>
                    <div class="d-flex col-lg-4 col-12 justify-content-center align-items-lg-center flex-row-reverse flex-lg-row">
                    <div class="img_box my_section_pic4"></div>
                    <div class="text_box">
                        <img src="../../assets/img/h-m-icon3.png" alt="" class="d-lg-none"/>
                        <p class="m-0">橱柜</p>
                        <p class="m-0 font-weight-light">专为开放式厨房而设计</p>
                    </div>
                    </div> -->
                </div>
                </div>
            </div>
            <div class="text-center pt-5 pb-5">
                <h4 class="color_333">您可能需要</h4>
                <p class="color_666">对产品有疑问？我们随时为你提供帮助。</p>
            </div>
            <div class="container pb-5">
                <div class="row">
                    <div class="col-lg-3 col-6 text-center" v-for='item in list2' :key='item.id'>
                        <a :href=item.url>
                        <div>
                            <img :src=item.url2  alt=""/>
                        </div>
                        <p class="color_333 mb-1">{{item.name}}</p>
                        <p class="font_12 color_666">{{item.content}}</p>
                        </a>
                    </div>
                    <!-- <div class="col-lg-3 col-6 text-center">
                        <a href="#">
                        <div><img src="../../assets/img/index-box1-icon2.png" alt=""/></div>
                        <p class="color_333 mb-1">服务中心</p>
                        <p class="font_12 color_666">拨打我们的服务热线400-888-8490</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-6 text-center">
                        <a href="#">
                        <div><img src="../../assets/img/index-box1-icon3.png" alt=""/></div>
                        <p class="color_333 mb-1">火粉俱乐部</p>
                        <p class="font_12 color_666">了解和获取火星人的活动资讯</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-6 text-center">
                        <a href="#">
                        <div><img src="../../assets/img/index-box1-icon4.png" alt=""/></div>
                        <p class="color_333 mb-1">3D厨房云设计</p>
                        <p class="font_12 color_666">你可以很轻松的自定义你的开放式厨房</p>
                        </a>
                    </div> -->
                </div>
            <hr class="d-none d-lg-block mt-5"/>
            </div>
        </section>
        <!--主体内容-end-->
        <mar-footer></mar-footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {id:1,class:'my_section_pic2',class2:'flex-row-reverse flex-lg-row',url:require('../../assets/img/h-m-icon1.png'),name:'集成灶',content:'超强吸油烟效果，终结油腻'},
                {id:2,class:'my_section_pic3',class2:'only_border',url:require('../../assets/img/h-m-icon2.png'),name:'集成水槽 洗碗机',content:'超级大槽，复式阶梯结构设计'},
                {id:3,class:'my_section_pic4',class2:'flex-row-reverse flex-lg-row',url:require('../../assets/img/h-m-icon3.png'),name:'橱柜',content:'专为开放式厨房而设计'},
            ],
            list2:[
                {id:1,url:'http://127.0.0.1:8080/#/1',url2:require('../../assets/img/index-box1-icon1.png'),name:'我要加盟',content:'总部0573-87519999'},
                {id:2,url:'http://127.0.0.1:8080/#/serve',url2:require('../../assets/img/index-box1-icon2.png'),name:'服务中心',content:'拨打我们的服务热线400-888-8490'},
                {id:3,url:'http://127.0.0.1:8080/#/1',url2:require('../../assets/img/index-box1-icon3.png'),name:'火粉俱乐部',content:'了解和获取火星人的活动资讯'},
                {id:4,url:'http://127.0.0.1:8080/#/1',url2:require('../../assets/img/index-box1-icon4.png'),name:'3D厨房云设计',content:'你可以很轻松的自定义你的开放式厨房'},
            ]
        }
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
    /*主页背景轮播样式*/
.bg_img{
    width:100%;
    height:220px;
}
.bg_img>img{
    width:100%;
    height:100%;
}
.bg_video{
    width:100%;
    height:100%;
    object-fit: fill;
}
.bg_text {
    margin-top:100px;
}
.bg_text>a{
    display:inline-block;
    width:135px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #9c9b9a;
    border-radius:20px;
    background: transparent;
    color:#666;
    font-size: 14px;
    text-align: center;
    margin-right: 30px;
    margin-top: 100px;
}
#index_carousel>ul>li{
    width:10px;
    height:10px;
    border-radius:50%;
    background: #999;
    margin-right:25px;
    cursor: pointer;
}
#index_carousel>ul>li.active{
    background: #fff;
}
#index_carousel>a{
    background:rgba(0,0,0,0.3);
    width:3%;
    height:20%;
    top:40%;
    border-radius:5px;
}
#index_carousel>a.carousel-control-prev{
    left:8px;
}
#index_carousel>a.carousel-control-next{
    right:8px;
}
@media screen and (min-width:300px){
    .bg_img{
        height:220px;
    }
}
/*主页主体内容样式*/
.img_box{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
section>.container>.row>.col-6>a>div{
    display:inline-block;
    width: 84px;
    height: 84px;
    border:1px solid #e6e6e6;
    border-radius:50%;
    margin-bottom:5px;
}
section>.container>.row>.col-6>a>div:after{
    content:"";
    display:inline-block;
    height:84px;
    vertical-align: middle;
}
section>.container>.row>.col-6>a>div>img{
    vertical-align:middle;
}
/* 媒体查询 */
@media screen and (min-width:300px){
    .bg_img{
        height:220px;
    }
}
@media screen and (min-width:768px) and (max-width:990px){
    .bg_img{
        height:450px;
    }
}
@media screen and (min-width:991px){
    section {
        width: 100%;
        position: absolute;
        top: 825px;
    }
    /*背景轮播样式*/
    .bg_img{
        position:absolute;
        top:0;
        left:0;
        height:600px;
        z-index:-1;
    }
    #index_carousel>a{
        display:none;
    }
    /*主页主体内容样式*/
    section>div:first-child{
        background:#fafafa;
        border-bottom:1px solid #e6e6e6;
    }
    section>div:first-child>.container>.row{
        height: 110px;
    }
    .img_box{
        width:20%;
        height:70px;
        background-image: url("../../assets/img/index-nav-icon1.jpg");
        background-size: contain;
    }
    .my_section_pic2{
        width:18%;
        background-image:url("../../assets/img/index-nav-icon1.jpg")
    }
    .my_section_pic3{
        background-image:url("../../assets/img/index-nav-icon2.jpg")
    }
    .my_section_pic4{
       height: 40px;
        background-image:url("../../assets/img/index-nav-icon3.jpg")
    }
    div.text_box{
        padding-left:15px;
    }
    div.text_box>p:last-child{
        font-size: 14px;
        color:#555;
    }
    .my_section_pic4+div.text_box{
        padding-left:0;
    }
    div.text_box>p:nth-child(2){
        color:#555;
        font-size: 18px;
    }
    .only_border{
        border-left:1px solid #eee;
        border-right:1px solid #eee;
    }
}
@media screen and (min-width:1025px){
    .bg_img {
        height: 825px;
    }
}
@media screen and (max-width:990px){
    /*轮播图样式*/
    .bg_text{
        display:none;
    }
    #index_carousel>ul{
        display:none;
    }
    #index_carousel>a{
        width:8%;
        height:35%;
        top:36%;
    }
    /*主页主体内容样式*/
     .img_box{
        width:40%;
        height:150px;
    }
    .my_section_pic1{
        background-image:url("../../assets/img/img1.jpg")
    }
    .my_section_pic2{
        background-image:url("../../assets/img/img2.jpg")
    }
    .my_section_pic3{
        background-image:url("../../assets/img/img3.jpg")
    }
    .my_section_pic4{
        background-image:url("../../assets/img/img4.jpg")
    }
    .text_box{
        width:60%;
        height:150px;
        text-align: center;
        padding-top:30px ;
        background-size: cover;
        border:1px solid white;
        box-shadow:2px 2px 20px -8px #999999;
        color:#3e280c;
    }
    .text_box>p:last-child{
        font-size: 12px;
    }
    div.row>div{
        padding:0;
    }
}
@media screen and (max-width:1100px){
    .bg_text {
        margin-top:60px;
    }
}
/*ipad兼容*/
@media screen and (min-width:768px) and (max-width:990px){
    .container{
        max-width:100%;
    }
}
@media screen and (min-width:991px) and (max-width:1025px){
    section{
        top:600px;
    }
}
</style>
