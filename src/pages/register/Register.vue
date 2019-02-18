<template>
    <div>
        <div id='particles-js' >
            <!-- <div class="" >
                <table style="border-collapse: separate;border-spacing: 5px 10px;">
                <tr>
                    <th colspan="2" class="font_24">用户注册</th>
                </tr>
                <tr>
                    <td>用户名</td>
                    <td><input type="text" autofocus placeholder="名称6~12位英文或数字"/></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><input type="password" placeholder="密码6~12位英文或数字"/></td>
                </tr>
                <tr>
                    <td>确认密码</td>
                    <td><input type="password"/></td>
                </tr>
                <tr>
                    <th colspan="2" class="text-center">
                    <button class="btn btn-dark w-50 border-0" style="background-color: rgba(62,40,12,0.3);">注册</button>
                    </th>
                </tr>
                </table>
            </div> -->
        </div>
    </div>
</template>

<script>
import particles from 'particles.js'
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
    },
    mounted(){
        particlesJS.load('particles-js', '@/assets/particle/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }
}
</script>

<style scoped>
    @import '../../assets/css/basic.css';
    #particles-js{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
    }
    section>div{
        background-color:rgba(200,200,200,0.3)!important;
    }
    section>div>table{
        color:#3e280c;
    }
    section>div>table tr>td{
    text-align: justify;
        text-justify:distribute-all-lines;
        text-align-last:justify
    }
    section input{
        background-color:transparent;
        border:1px  solid  #3e280c;
    }
    @media screen and (min-width:991px){
        section>div{
            border-radius: 20px;
            width:500px;
            height:400px;
            position:absolute;
            left:50%;
            top:50%;
            margin-top:-200px;
            margin-left:-250px;
        }
        section>div>table{
            height:300px;
            width:300px;
            position:absolute;
            left:50%;
            top:50%;
            margin-top:-150px;
            margin-left:-150px;

        }
    }
    @media screen and (max-width:990px){
        section>div{
            width:100%;
            height: 250px;
            position: absolute;
            top:50%;
            margin-top:-125px;
        }
        section>div>table{
            color:white;
            width: 300px;
            height: 200px;
            position: absolute;
            top:50%;
            left:50%;
            margin-top:-100px;
            margin-left:-150px;
        }
        section>div>table input{
            border:1px solid white
        }
    }
</style>
