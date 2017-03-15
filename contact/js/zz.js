/**
 * Created by 能猫白免 on 2016/11/14.
 */
//首页

window.onload= function () {
var contact1=document.getElementById('contact-title');
var contact2=document.getElementById('contact-content');
var contact3=document.getElementById('contact-btn');
    AniMate(contact1,{"left":0},15, function () {
        AniMate(contact2,{"left":0},15,function(){
            AniMate(contact3,{"left":0},15);
        });
    });





var lang=document.getElementById('lang');
var chuan=document.getElementById('chuan');
var shan=document.getElementById('shan');
yunsu(shan,20,100);
yunsu(lang,20,20);
yunsu(chuan,20,100);
function yunsu(obj,target,time) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 1;
       step = leader < target ? step : -step;
        leader=leader+step;
            obj.style.left = leader + "px";
        if(leader===target){target=0;}
        else if(leader===1) {target=20;}
    },time);
}
//行星环绕
var xxy1 = document.getElementById("xxy1");
var xxy2 = document.getElementById("xxy2");

    xingxingyun(xxy2, -10, -4);

xxy2.onmouseover = function () {
    clearInterval( xxy2.timer)
    xingxingyun( xxy2, -10, -1);
}
xxy2.onmouseout = function () {
    clearInterval( xxy2.timer);
    xingxingyun( xxy2, -10, -4);
}
xingxingyun(xxy1, 10, 2);
xxy1.onmouseover = function () {
    clearInterval( xxy1.timer);
    xingxingyun( xxy1, 10, 0.5);
}
xxy1.onmouseout = function () {
    clearInterval( xxy1.timer);
    xingxingyun( xxy1, 10,2);

}
function xingxingyun(obj,leader,step){
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        leader=leader+step;
        obj.style.transform='rotate('+leader+'deg)';
    },22)
}
//huaji
//var qiuEle=document.getElementById('qiu');
//var huaji=document.getElementById('huaji');
//var g = 1;
//var qiu={
//    entity: qiuEle,
//    x:qiuEle.offsetLeft,
//    y:qiuEle.offsetTop,
//    speedX: 5,
//    speedY: 0
//};
//huaji.onmouseover= function () {
//  erweima.style.display='block';
//  kuang.style.display='block';
//};
//huaji.onmouseout= function () {
//  erweima.style.display='none';
//  kuang.style.display='none';
//};
//setInterval(function(){
//    qiu.speedY =  qiu.speedY + g;
//    var step =  qiu.speedY;
//    qiu.y =  qiu.y + step;
//    if (qiu.y > huaji.offsetHeight - qiuEle.offsetHeight) {
//        qiu.speedY=-30;
//    }
//    if ( qiu.y < 0) {
//        qiu.speedY=30;
//    }
//    qiu.entity.style.top =  qiu.y + "px";
//},400)

//旋转木马
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    //获取元素
    var wrap=document.getElementById('wrap');
    var arrow = document.getElementById('arrow');
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    //鼠标经过显示箭头
    wrap.onmouseover = function () {
        AniMate(arrow, {'opacity': 1});
    };
    wrap.onmouseout = function () {
        AniMate(arrow, {'opacity': 0});
    };
    //给每个li赋json值 封装是为了后面更好的调用
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            AniMate(lis[i], config[i]);
        }
    }
    assign();
    //点击左右箭头调整数组
    arrRight.onclick = function () {
        config.push(config.shift());
        assign();
    };
    arrLeft.onclick = function () {
        config.unshift(config.pop());
        assign();
    }
};