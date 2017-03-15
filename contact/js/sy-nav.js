
var lastWidth = 0;
var lastPosition = 255;
var navBg = document.getElementById("sy-nav-bg");
var ul = document.getElementById("sy-nav");
var lis = ul.getElementsByTagName("li");
var navBgC = document.getElementById("sy-nav-bg-center");

var mes = document.getElementById("mes");
var wechat = document.getElementById("wechat");

for (var i = 0; i < lis.length; i++) {
    lis[i].index=i;
    lis[i].onmouseover = function () {
        lastWidth = this.offsetWidth;
        var target = this.offsetLeft;
        var wd = this.offsetWidth - 34;
        AniMate(navBg, {"left": target}, 15);
        AniMate(navBgC, {"width": wd})
    };
    lis[i].onmouseout = function () {
        AniMate(navBg, {"left": lastPosition}, 15);
        if(this.index===2){AniMate(navBgC, {"width": lastWidth - 34}, 15);}
        else if(this.index===3){}
        else{AniMate(navBgC, {"width": lastWidth}, 15);}
    };
}
mes.onmouseover = function () {
    wechat.style.display = "block";
};
mes.onmouseout = function () {
    wechat.style.display = "none";
};
$(function () {
    $("img").on("mouseover", function () {
        $(this).toggleClass("rotateDiv");
    })
})
$(function () {
    $("img").on("mouseout", function () {
        $(this).toggleClass("rotateDiv");
    })
})