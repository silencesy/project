/**
 * Created by Administrator on 2016/11/16.
 */
function AniMate(obj, json, time, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacityҪ���⴦��
                //opacityû�е�λ ���������Զ�ת������ֵ ���Բ���parsetInt
                //ȡֵ��Χ 0-1 0.1 0.33 33 Ϊ������ǰ�ļ��㹫ʽ��Ч Ҫ����100��
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacityû�е�λ
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//�㼶����Ҫ���� ֱ�����ü���
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
 * ��ȡ�������ʽ���Ե�ֵ��
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