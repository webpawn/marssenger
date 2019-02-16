<template>
    <div>
        <section style="background: url('http://www.marssenger.com/upload/2018/04/17/15239550621432o51og.jpg') no-repeat;background-size:cover">
            <div class="">
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
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>

<style scoped>
    @import '../../assets/css/basic.css';
    section{
        width:100%;
        /*margin-top: 20px;*/
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
        section{
            position:absolute;
            left:0;top:0;
            z-index:-1;
            height:900px
        }
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
        section{
            height:400px;
            position: relative;
        }
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
