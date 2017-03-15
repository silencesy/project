/**
 * Created by meiling on 2016/11/15.
 */


window.onload = function () {


    //头像特效开始
    var peo = document.getElementById("peo");
    var people = document.getElementById("people");
    var people1 = document.getElementById("people1");
    var people2 = document.getElementById("people2");
    people.style.display = "block";
    people.onmouseover = function () {
        people1.style.backgroundImage = "url(image/people1_1.png)";
        people2.style.backgroundImage = "url(image/people2_1.png)";
        people.style.backgroundColor = "#cccccc";
        peo.style.backgroundColor = "white";
    };
    people.onmouseout = function () {
        people1.style.backgroundImage = "";
        people2.style.backgroundImage = "";
        people.style.backgroundColor = "";
        peo.style.backgroundColor = "";
    };
    //头像特效结束
    /*people.onmouseover = function(){
     animate(peo,{"width":130,"height":130,"top":-2,"left":-2})
     };*/
    function animate(obj, json, fn) {//json attr, target
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {//json 属性名:属性值 k:json[k]
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }

                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

    //波浪特效开始
    var lang2 = document.getElementById("lang2");
    var lang3 = document.getElementById("lang3");
    var speed1 = 0;
    var speed2 = 0;
    setInterval(function () {
        speed1 = speed1 + 1;
        lang2.style.backgroundPositionX = speed1 + "px";
    }, 30);
    setInterval(function () {
        speed2 = speed2 - 1;
        lang3.style.backgroundPositionX = speed2 + "px";
    }, 30);
    //波浪特效结束

    //电话号码显示特效开始
    var img4 = document.getElementById("img4");
    var a4 = document.getElementById("a4");
    a4.onmouseover = function () {
        img4.style.display = "block";
    };
    a4.onmouseout = function () {
        img4.style.display = "none";
    };
    //电话显示特效消失

    //content特效开始
    var child_1 = document.getElementById("child_1");
    var box2 = document.getElementById("box2");
    var box1 = document.getElementById("box1");
    var bg1 = document.getElementById("bg1");
    child_1.onmouseover = function () {
        animate(box1, {"left": -300, "opacity": 1});
        animate(box2, {"left": -5, "opacity": 0.35});
        animate(bg1, {"z-index": -4})
    };
    child_1.onmouseout = function () {
        animate(box1, {"left": 0, "opacity": 0});
        animate(box2, {"left": 110, "opacity": 0})
    };
    var child_2 = document.getElementById("child_2");
    var box3_1 = document.getElementById("box3_1");
    var box3_2 = document.getElementById("box3_2");
    child_2.onmouseover = function () {
        animate(box3_1, {"top": -90, "opacity": 0.35});
        animate(box3_2, {"top": -140, "opacity": 1})
    };
    child_2.onmouseout = function () {
        animate(box3_1, {"top": 200, "opacity": 0});
        animate(box3_2, {"top": 0, "opacity": 0})
    };
    var child_4 = document.getElementById("child_4");
    var box4_1 = document.getElementById("box4_1");
    var box4_2 = document.getElementById("box4_2");
    child_4.onmouseover = function () {
        animate(box4_1, {"left": 230, "opacity": 0.35});
        animate(box4_2, {"left": 330, "opacity": 1})
    };
    child_4.onmouseout = function () {
        animate(box4_1, {"left": -20, "opacity": 0});
        animate(box4_2, {"left": -14, "opacity": 0})
    };
    var child_5 = document.getElementById("child_5");
    var box5_1 = document.getElementById("box5_1");
    var box5_2 = document.getElementById("box5_2");
    child_5.onmouseover = function () {
        animate(box5_1, {"left": -5, "opacity": 0.35});
        animate(box5_2, {"left": -300, "opacity": 1})
    };
    child_5.onmouseout = function () {
        animate(box5_1, {"left": 110, "opacity": 0});
        animate(box5_2, {"left": 0, "opacity": 0})
    };
    var child_6 = document.getElementById("child_6");
    var box6_1 = document.getElementById("box6_1");
    var box6_2 = document.getElementById("box6_2");
    child_6.onmouseover = function () {
        animate(box6_1, {"top": 200, "opacity": 0.35});
        animate(box6_2, {"top": 290, "opacity": 1})
    };
    child_6.onmouseout = function () {
        animate(box6_1, {"top": 100, "opacity": 0});
        animate(box6_2, {"top": 100, "opacity": 0})
    };
    var child_7 = document.getElementById("child_7");
    var box7_1 = document.getElementById("box7_1");
    var box7_2 = document.getElementById("box7_2");
    child_7.onmouseover = function () {
        animate(box7_1, {"left": 240, "opacity": 0.35});
        animate(box7_2, {"left": 330, "opacity": 1})
    };
    child_7.onmouseout = function () {
        animate(box7_1, {"left": -20, "opacity": 0});
        animate(box7_2, {"left": -14, "opacity": 0})
    };

    function animate(obj, json, fn) {//json attr, target
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {//json 属性名:属性值 k:json[k]
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }

                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 20);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

    //    content特效结束
};
$(function () {
    //abou特效开始
    $(".child1").mouseenter(function () {
        $(this).children(".child1_img").stop().animate({"left": "17px"}, 300);
        $(this).children(".child1_content").stop().animate({"left": "147px"}, 300);
    })
    $(".child1").mouseleave(function () {
        $(this).children(".child1_img").stop().animate({"left": "29px"}, 300);
        $(this).children(".child1_content").stop().animate({"left": "135px"}, 300);
    })
    //abou特效结束

    // message特效开始
    $(".cooperate > div > a").mouseenter(function () {
        var index = $(this).index();
        index = index + 1;
        $(this).find("img").attr("src", "images/case/logo" + index + "On.png");
    });
    $(".cooperate > div > a").mouseleave(function () {
        var index = $(this).index();
        index = index + 1;
        $(this).find("img").attr("src", "images/case/logo" + index + ".png");
    });
    //abou特效结束

    //轮播图特效开始
    $(".dian>.dianchild").mouseenter(function () {
        $(this).addClass("hover").siblings("div").removeClass("hover");
        var index = $(this).index();
        $(".lbcontent").find("div").eq(index).stop().fadeIn(1000).siblings("div").stop().fadeOut(1000);
    });
    //轮播图特效结束
    $(window).on("scroll",function() {
        var sTop = window.innerHeight - 1000;
        var scTop = $(document).scrollTop();
        var childTop =  $(".content").offset().top;
        var titleTop = $(".titles").offset().top;
        if(childTop  < sTop+ scTop) {
            $(".content > div").css("transform", "scale(1)");
        }
        if(titleTop  < sTop+ scTop + 1000) {
            $(".title1").css({
                "transform": "translateY(0%)",
                "opacity": "1"
            });
            $(".title2").css({
                "transform": "translateY(0%)",
                "opacity": "1"
            });
        }

        for(var i = 0; i < $(".cooperate img").length; i++){
            var coTop = $(".cooperate img").eq(i).offset().top;
            if(coTop  < sTop+ scTop + 900) {
                $(".cooperate img").css({
                    "transform": "rotateZ(360deg)"
                });
            }
        }

        var wh = $(window).scrollTop();
        if(wh>=600){
            $(".headred").show(300);
            $(".headyellow").show(500);
            $(".headblue").show(700);
            $(".link").animate({
                "left":"56px",
                "opacity":"1"
            },1000);
            $(".title1").animate({"top":0,"opacity":1},800,function(){
                $(".title2").animate({"top":70,"opacity":1},500)
            })
        }
    });

});
