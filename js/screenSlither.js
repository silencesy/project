/**
 * Created by Administrator on 2016/11/16.
 */
/**
 * ����Ļ���� target������Ŀ���ַ
 * @param target
 */
function screenSlither(target){
    clearInterval(timer);
    timer = setInterval(function () {
        var leader = window.pageYOffset;//��ǰҳ�汻��ȥ��ͷ��
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