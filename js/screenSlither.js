/**
 * Created by Administrator on 2016/11/16.
 */
/**
 * 整屏幕滑动 target滑动到目标地址
 * @param target
 */
function screenSlither(target){
    clearInterval(timer);
    timer = setInterval(function () {
        var leader = window.pageYOffset;//当前页面被卷去的头部
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        //console.log(leader);
        window.scrollTo(0, leader);
        if (leader === target) {
            clearInterval(timer);
        }
    }, 20);
}