window.onload = function () {

    var json = {
        //初始化
        init: function () {
            //动态添加行
            var htmld = '';
            var row = 1;
            for (var i = 1; i <= 4; i++) {
                htmld = htmld + '<tr>';
                for (var j = 1; j <= 4; j++) {
                    htmld = htmld + '<td id="' + (row++) + '"></td>';
                }
                htmld = htmld + '</tr>';
            }
            document.getElementById("tableHtml").innerHTML = htmld;
             //随机数
             this.tdRandom();
             //随机数
             this.tdRandom();

               //渲染表格
            this.RenderingColor();

        },
        //随机生成1-16 的随机数
        RandomNum: function(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        },
        //随机在格子上生产一个数字
        tdRandom: function () {
            var tdNum = this.RandomNum(1, 16);
            var tdInnerHTML = document.getElementById(tdNum).innerHTML;
            if (tdInnerHTML == "") {
                //随机2-4
                document.getElementById(tdNum).innerHTML = this.RandomNum(1, 2)*2;
            } else {
                if(json.CheckTable()){
                this.tdRandom();
                }
            }
        },
        //向上移动
        Top:function(){
           for(let i=1;i<=4;i++){
               for(let j=i;j<=i+12;j+=4){
                     for(let m=j;m>4;m-=4){
                           this.CompareValue(document.getElementById(m-4),document.getElementById(m));  
                     }
               }
           }
        },
        //向下移动
       Down:function(){
           for(let i=1;i<=4;i++){
               for(let j=i+12;j>=i;j-=4){
                   for(let m=j;m<=12;m+=4){
                      this.CompareValue(document.getElementById(m+4),document.getElementById(m));  
                   }
               }
           }
       },
       //左移动
       Left:function(){
            for(let i=1;i<=13;i+=4){
                for(let j=i;j<=i+3;j++){
                     for(let m=j;m>i;m--){
                        this.CompareValue(document.getElementById(m-1),document.getElementById(m));  
                     }
                }
            }
       },
       //右移动
       Right:function(){
          for(let i=1;i<=13;i+=4){
            for(let j=i+3;j>=i;j--){
                 for(let m=j;m<i+3;m++){
                    this.CompareValue(document.getElementById(m+1),document.getElementById(m));  
                 }
            }
         }
       },
        //比较两个值
        CompareValue:function(before,after){
            //console.log(before,after);
            //碰撞检测
            if(before.innerHTML==after.innerHTML&&before.innerHTML!=""){
                before.innerHTML=before.innerHTML*2;
                after.innerHTML='';
            }
            
            //移动
            if(before.innerHTML!=after.innerHTML&&before.innerHTML==""&&after.innerHTML!=""){
                before.innerHTML=after.innerHTML;
                after.innerHTML='';
            }
        },
        //渲染表格颜色
        RenderingColor: function () {
            var Color = {
                "": "#98676724",
                "2": "#17b6de",
                "4": "#1ddebd",
                "8": "#2cc92c",
                "16": "#ecbac3a8",
                "32":"#277cbda8",
                "64":"#5047c3a8",
                "128":"#9a2baca8",
                "256":"#35c598a8",
                "512":"#d6de75a8",
                "1024":"#d7ad5aa8",
                "2048":"#d9552aa8"
            }
            for (let i = 1; i <= 16; i++) {
                var iValue = document.getElementById(i).innerHTML;
                document.getElementById(i).style.backgroundColor = Color[iValue];
            }
        },
        //检查格子是否填满
        CheckTable:function(){
            let bo=false;
            for(var i=1;i<=16;i++){
                if(document.getElementById(i).innerHTML==""){
                    bo=true;
                    break;
                }
            }
            return bo;
        }
    }
    json.init();

    window.onkeydown=function(e){
        if(e.keyCode=="38") {
            json.Top();
        }
        if(e.keyCode=="40") {
            json.Down();
        }
        if(e.keyCode=="37") {
            json.Left();
        }
        if(e.keyCode=="39") {
            json.Right();
        }

        if(e.keyCode=="38"||e.keyCode=="39"||e.keyCode=="40"||e.keyCode=="37"){
            json.tdRandom();
            json.RenderingColor();
        }
  }
}

