<template>
    <div>
        <header class="container bg-transparent">
            <div class="row flex-lg-row flex-row-reverse">
                <div class="col-lg-2 col-6">
                <a 
                    href="#" 
                    class="navbar-brand float-right float-lg-none"
                >
                    <img src="../../assets/img/bocweb-logo.png" alt="" class="pt-2"/>
                </a>
                </div>
                <div class="col-lg-8 col-6 navbar navbar-expand-lg">
                <a 
                    href="#content" 
                    class="navbar-toggler" 
                    data-toggle="collapse"
                >
                    <img src="../../assets/img/button.png" alt=""/>
                </a>
                <div id="content" class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="navbar-item p-2">
                            <a 
                                href="#" 
                                class="navbar-link font_14 color_666 "
                            >
                            产品
                            </a>
                            <div class='d-none'>产品详情</div>
                        </li>
                        <li class="navbar-item p-2">
                            <a href="#" class="navbar-link font_14 color_666 ">服务</a></li>
                        <li class="navbar-item p-2"><a href="#" class="navbar-link font_14 color_666 ">开放式厨房</a></li>
                        <li class="navbar-item p-2"><a href="#" class="navbar-link font_14 color_666 ">招商</a></li>
                        <li class="navbar-item p-2"><a href="#" class="navbar-link font_14 color_666 ">口碑</a></li>
                        <li class="navbar-item p-2"><a href="#" class="navbar-link font_14 color_666 ">促销活动</a></li>
                        <li class="navbar-item p-2"><a href="#" class="navbar-link font_14 color_666 ">关于我们</a></li>
                        <li class="navbar-item pr-3 pl-2 pb-2 pt-1 font_14">
                            <a href="#" class=""><img src="../../assets/img/wx-icon.png" alt="" class="img-fluid "/></a>
                            <a href="#" class=""><img src="../../assets/img/tt-icon.png" alt="" class="img-fluid "/></a>
                            <a href="#" class=""><img src="../../assets/img/jd-icon.png" alt="" class="img-fluid "/></a>
                            <a href="#" class=""><img src="../../assets/img/tm-icon.png" alt="" class="img-fluid "/></a>
                        </li>
                        <li class="navbar-item p-2 pl-lg-5"><a href="#" class="navbar-link font_14 color_666 ">登录</a></li>
                        <li class="navbar-item p-2 pl-lg-0"><a href="#" class="navbar-link font_14 color_666 ">注册</a></li>
                    </ul>
                </div>
                </div>
                <div class="col-lg-2 col-12 text-center pl-0 pr-0 pb-5 pb-lg-0">
                    <input type="text" placeholder="网点查询" class="text-center mt-2 my_input font_14 color_666 bg-transparent" /><input type="submit" class="mt-2 my_input font_14  color_666 bg-transparent" value="查询"/>
                </div>
             </div>
        </header>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
}
</script>

<style scoped>
    @import '../../assets/css/basic.css';
    
    .my_input{
        width:60%;
        border:1px solid #666;
        border-radius:15px;
    }
    input.my_input:nth-child(2){
        width:40px;
        margin-left:6px;
        cursor:pointer;
    }
    .search_bg{
        border:0;
    }
    /*ipad兼容*/
    @media screen and (min-width:768px) and (max-width:990px){
    .container{
        max-width:100%;
    }
}
</style>