<template>
    <div>
        <footer>
            <div class="container bg-white">
                <div class="row  pt-0 pt-lg-5 pb-2">
                <div class="col-lg-2 col-12 position-relative">
                    <ul>
                    <li class="mb-2"><a href="#" class="font_16 text-dark" >产品</a></li>
                    </ul>
                    <hr class="d-block d-lg-none mb-0"/>
                    <a href="#ul1" class="my_coll_button" data-toggle="collapse">
                    <img class='mr-2' src="../../assets/img/arrow-tobottom.png" alt=""/>
                    </a>
                    <ul id="ul1" class="collapse my_coll_content">
                    <li><a href="#">集成灶</a></li>
                    <li><a href="#">水槽</a></li>
                    <li><a href="#">橱柜</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-12 position-relative">
                    <ul>
                    <li class="mb-2"><a href="#" class="font_16 text-dark">关于</a></li>
                    </ul>
                    <hr class="d-block d-lg-none mb-0"/>
                    <a href="#ul2" class="my_coll_button" data-toggle="collapse">
                    <img  class='mr-2' src="../../assets/img/arrow-tobottom.png" alt=""/>
                    </a>
                    <ul id="ul2" class="collapse my_coll_content">
                    <li><a href="#">火星人简介</a></li>
                    <li><a href="#">企业文化</a></li>
                    <li><a href="#">大事记</a></li>
                    <li><a href="#">荣誉资质</a></li>
                    <li><a href="#">加入我们</a></li>
                    <li><a href="#">联系我们</a></li>
                    <li><a href="#">公司诠释</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-12">
                    <ul>
                    <li class="mb-2"><a href="#" class="font_16 text-dark">服务</a></li>
                    </ul>
                    <hr class="d-block d-lg-none mb-0"/>
                    <a href="#ul3" class="my_coll_button" data-toggle="collapse">
                    <img   class='mr-2' src="../../assets/img/arrow-tobottom.png" alt=""/>
                    </a>
                    <ul id="ul3" class="collapse my_coll_content">
                    <li><a href="#">日常使用</a></li>
                    <li><a href="#">服务体验</a></li>
                    <li><a href="#">关于服务</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-12">
                    <ul>
                    <li class="mb-2"><a href="#" class="font_16 text-dark">品牌新闻</a></li>
                    </ul>
                    <hr class="d-block d-lg-none mb-0"/>
                    <a href="#ul4" class="my_coll_button" data-toggle="collapse">
                    <img   class='mr-2' src="../../assets/img/arrow-tobottom.png" alt=""/>
                    </a>
                    <ul id="ul4" class="collapse my_coll_content">
                    <li><a href="#">促销活动</a></li>
                    <li><a href="#">品牌新闻</a></li>
                    <li><a href="#">品牌视频</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-12">
                    <ul>
                    <li class="mb-2"><a href="#" class="font_16 text-dark">招商</a></li>
                    </ul>
                    <hr class="d-block d-lg-none mb-0"/>
                    <a href="#ul5" class="my_coll_button" data-toggle="collapse">
                    <img   class='mr-2' src="../../assets/img/arrow-tobottom.png" alt=""/>
                    </a>
                    <ul id="ul5" class="collapse my_coll_content">
                    <li><a href="#">经销加盟</a></li>
                    <li><a href="#">联系方式</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-12 mt-2 mt-lg-0">
                    <div class="text-lg-right text-center">
                    <a href="#" class="font_16 color_333"><img src="../../assets/img/phone_sever.png" alt=""/> &nbsp;在线客服</a>
                    <span class="d-lg-block d-inline-block">400-888-8490</span>
                    <span class="d-lg-block d-inline-block font_12 color_666">7天24小时客服热线</span>
                    </div>
                </div>
                </div>
            </div>
            <div class="mt-lg-5">
                <div class="container bg-transparent">
                <div class="d-flex justify-content-between text-center bg-transparent font_16 color_666">
                    <div><a href="#"><img src="../../assets/img/back-top.png" alt="" class=""/></a></div>
                    火星人集成灶解决开放式厨房油烟问题 ，浙ICP备10206523号-1   2018 中国集成灶十大品牌排名之一
                    <div><a href="#"><img src="../../assets/img/back-top.png" alt="" class="" /></a></div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    @import '../../assets/css/basic.css';
    footer>div:last-child{
        height:88px;
        width:100%;
        background:#eee;
    }
    footer>div:last-child:before{
        display: table;
        content: "";
    }
    div.row>div.col-lg-2>ul>li>a{
        font-size:12px;
        color:#888;
    }
    @media screen and (min-width:991px){
    footer{
        width:100%;
        position: absolute;
        top: 1350px;
    }
    .my_coll_button{
        display:none;
    }
    .my_coll_content{
        display:block!important;
    }
    footer>div:last-child>div.container{
        margin-top:33px;
    }
}
/*ipad兼容*/
@media screen and (min-width:768px) and (max-width:990px){
    .container{
        max-width:100%;
    }
}
@media screen and (min-width:991px) and (max-width:1025px){
    footer{
        top:1000px;
    }
}
@media screen and (max-width:990px){
    .my_coll_button{
        /*display:block;*/
        position:absolute;
        top:12px;
        right:8px;
    }
    footer>div>div.row>div>ul>li{
        padding-top:13px;
        padding-left:10px;
    }
    footer>div:last-child>div.container{
        margin-top:10px;
    }
}
</style>