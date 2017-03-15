/**
 * Created by longbo on 2016/11/16.
 */
window.onload = function() {

    $(function(){
        //轮播图
        var li = $(".banner-slide>ul").children("li").eq(0).clone(true);
        $(".banner-slide>ul").append(li);
        $(".banner-slide").mouseenter(function() {
            $(".arrow").animate({"opacity": 1});
            clearInterval(timer);
        })
        $(".banner-slide").mouseleave(function() {
            $(".arrow").animate({"opacity": 0});
            timer = setInterval(function(){
                $(".right").click();
            }, 3000);
        })
        var pic = 0;
        $(".right").click(function(){
            if(pic === 3) {
                pic = 0;
                $(".banner-slide>ul").css("left", "0")
            }
            pic++;
            var target = -pic*1366 + "px";
            $(".banner-slide>ul").animate({"left": target},500);
            $(".banner-slide>ul").children().eq(pic-1).siblings().animate({"opacity":0});
            $(".banner-slide>ul").children().eq(pic).animate({"opacity":1});
        })
        $(".left").click(function(){
            if(pic === 0) {
                pic = 3;
                $(".banner-slide>ul").css("left", "-4098px")
            }
            pic--;
            var target = -pic*1366 + "px";
            $(".banner-slide>ul").animate({"left": target,"opcity": 1})
        })
        timer = setInterval(function(){
            $(".right").click();
        }, 3000);

        //cooperata部分鼠标悬停换图
        $(".cooperate > div > a").mouseenter(function() {
            var index = $(this).index();
            index = index + 1;
            $(this).find("img").attr("src", "images/case/logo"+index+"On.png");
        });
        $(".cooperate > div > a").mouseleave(function() {
            var index = $(this).index();
            index = index + 1;
            $(this).find("img").attr("src", "images/case/logo"+index+".png");
        });

        //固定侧边栏telephone显示
        var img4 = document.getElementById("img4");
        var a4 = document.getElementById("a4");
        a4.onmouseover = function(){
            img4.style.display = "block";
        };
        a4.onmouseout = function(){
            img4.style.display = "none";
        };

        //页面加载时动画
        var length = $(".main-content a").length;
        $(window).on("scroll",function() {
            var sTop = window.innerHeight - 100;
            var scTop = $(document).scrollTop();
            for (var i = 0; i < length; i++) {
                var imgTop = $(".main-content a").eq(i).offset().top;
                if(imgTop  < sTop+ scTop) {
                    $(".main-img").eq(i).css("top", "100px");
                    $(".main-content > a").eq(i).css("transform", "translateY(-100px)");
                }
            }

            //cooperate 部分动画
            for(var i = 0; i < $(".cooperate img").length; i++){
                var coTop = $(".cooperate img").eq(i).offset().top;
                if(coTop  < sTop+ scTop) {
                    $(".cooperate img").css({
                        "transform": "rotateZ(360deg)"
                    });
                }
            }
        });




        //导航背景移动
        var flag = true;
        var navBg = document.getElementById("sy-nav-bg");
        var header = document.getElementById("sy-header");
        var header2 = document.getElementById("sy-header2");
        var ul = document.getElementById("sy-nav");
        var lis = ul.getElementsByTagName("li");
        var navBgC = document.getElementById("sy-nav-bg-center");
        var zone = document.getElementById("zone");
        var microblog = document.getElementById("microblog");
        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function () {
                var target = this.offsetLeft;
                var wd = this.offsetWidth - 34;
                AniMate(navBg, {"left": target}, 15);
                AniMate(navBgC, {"width": wd})
            };
            lis[i].onmouseout = function () {
                AniMate(navBg, {"left": 97}, 15);
                AniMate(navBgC, {"width": 47}, 15)
            };
        }
        $(function () {
            $("#mes").on("mouseenter", function() {
                $(".sy-wechat").stop().slideDown(300);
            });
            $("#mes").on("mouseleave", function() {
                $(".sy-wechat").stop().slideUp(300);
            });
        });

        function AniMate(obj, json, time, fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var flag = true;
                for (var k in json) {
                    if (k === "opacity") {//opacity要特殊处理
                        //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                        //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                        var leader = getStyle(obj, k) * 100;
                        var target = json[k] * 100;
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        obj.style[k] = leader / 100;//opacity没有单位
                    } else if (k === "zIndex") {
                        obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
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
            }, time);
        }
        /**
         * 获取计算后样式属性的值。
         * @param obj
         * @param attr
         * @returns {*}
         */
        function getStyle(obj, attr) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(obj, null)[attr];
            } else {
                return obj.currentStyle[attr];
            }
        }
    });


};