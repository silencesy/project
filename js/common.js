/**
 * Created by jf on 2016/8/18.
 */

/**
 *获取下一个元素节点
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && 1 !== next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}

/**
 *获取上一个元素节点
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var next = element.previousSibling;
        while (next && 1 !== next.nodeType) {
            next = next.previousSibling;
        }
        return next;
    }
}

/**
 * 封装 获取当前元素的第一个子元素
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var el = element.firstChild;//第一个子节点
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;//往后找
        }
        return el;
    }
    //return element.children[0];
}

/**
 * 封装 获取当前元素的最后一个子元素
 * @param element
 * @returns {*}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var el = element.lastChild;
        while (el && 1 !== el.nodeType) {
            el = el.previousSibling;//上一个兄弟节点
        }
        return el;
    }
    //return element.children[element.children.length-1];
}

/**
 * 获取内部文本的兼容方法
 * @param element
 * @returns {string}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}//兼容性 获取内部文本的兼容方法 当浏览器不支持innerText时，则使用textContent。

/**
 * 设置内部文本的兼容方法
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}
//chrome 两个都支持
//FF 新版两个都支持 旧版本的只支持textContent
//IE 新版的两个都支持 旧版本支持innerText

/**
 * 获取下一个兄弟元素 的兼容方法
 * @param element
 * @returns {*}
 */
function getNextElementSibling(element) {
    if (element.nextElementSibling) {//能找到
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;//下一个兄弟节点
        //如果next是我们想要的 就返回 如果不是我们想要的 就一直找
        while (next && 1 !== next.nodeType) {//有 并且 不是我们要的
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获取上一个兄弟元素 的兼容方法
 * @param element
 * @returns {*}
 */
function getpreviousElementSibling(element) {
    if (element.nextElementSibling) {//能找到
        return element.previousElementSibling;
    } else {
        var previous = element.previousSibling;//上一个兄弟节点
        //如果previous是我们想要的 就返回 如果不是我们想要的 就一直找
        while (previous && 1 !== previous.nodeType) {//有 并且 不是我们要的
            previous = previous.previousSibling;
        }
        return next;
    }
}
/**
 * arr数组方法调用
 * @param arr 数组
 * @param fn  调用的方法如sort(arr, function (a, b) {return a - b;});
 * @returns {*}
 */
function sort(arr, fn) {
    for (var i = 0; i < arr.length - 1; i++) {
        var flag = true;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (fn(arr[j], arr[j + 1]) > 0) {    //方法判断区域
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
    return arr;
}
/**
 * 比较2个或者3个的数中最大的
 * @param a
 * @param b
 * @param c
 * @returns {*}
 */
function getMax(a, b, c) {
    if (getMax.arguments.length === 2) {
        return a > b ? a : b;
    }
    if (getMax.arguments.length === 3) {
        return (a > b ? a : b) > c ? (a > b ? a : b) : c;
    }
}
/**
 *兼容ie678的getElementsByClassName 获取类名
 * @param element
 * @param className
 * @returns {Array}
 */
function getElementsByClassName(element, className) {
    //找到所有的标签 判断是否有这个类名 有就放到数组里
    var filterArr = [];
    var elements = element.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        var nameArr = elements[i].className.split(" ");
        for (var j = 0; j < nameArr.length; j++) {
            if (nameArr[j] === className) {
                filterArr.push(elements[i]);
                break;
            }
        }
    }
    return filterArr;
}
/**
 * 让页面前后的onload事件都执行。
 * @param fn
 */
function addLoadEvent(fn) {
    var oldOnLoad = window.onload;
    //检查现在的window.onload是否绑定了事件
    //console.log(oldOnLoad);
    if (typeof oldOnLoad === "function") {//说明之前绑定了事件
        window.onload = function () {
            oldOnLoad();//之前的要执行
            fn();//传入的新的要绑定的将来也要执行
        };
    } else {
        window.onload = fn;//之前没有绑定onload事件，执行新的onload事件。
    }
}
///**
// * 返回要寻找的字符在字符串中的位置（同一个字符，每一个的位置都显示出来）
// * @param str
// * @param x
// */
//function findStr(str, x) {
//    num = str.indexOf(x, num + 1);
//    if (num !== -1) {
//        console.log(num);
//        findStr(str, x);
//    }
//}
/**
 * 修改某元素类名中的一个
 * @param element
 * @param oldStr
 * @param newStr
 */
function replaceClassName(element, oldStr, newStr) {
    var arr = element.className.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldStr) {
            arr[i] = newStr;
        }
    }
    element.className = arr.join(" ");
}
/**
 * 寻找元素下面 所有类名叫show的标签
 * @param element
 * @param className
 * @returns {Array}
 */
function getElementsByClassName(element, className) {
    //找到所有的标签 判断是否有这个类名 有就放到数组里
    var filterArr = [];
    var elements = element.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        var nameArr = elements[i].className.split(" ");
        for (var j = 0; j < nameArr.length; j++) {
            if (nameArr[j] === className) {
                filterArr.push(elements[i]);
                break;
            }
        }
    }
    return filterArr;
}
/**
 * 解决window.onload事件后面书写的覆盖前面的函数。
 * @param fn
 */
function addLoadEvent(fn) {
    var oldOnLoad = window.onload;
    //检查现在的window.onload是否绑定了事件
    //console.log(oldOnLoad);
    if (typeof oldOnLoad === "function") {//说明之前绑定了事件
        window.onload = function () {
            oldOnLoad();//之前的要执行
            fn();//传入的新的要绑定的将来也要执行
        };
    } else {
        window.onload = fn;
    }
}
/**
 * 设置动画移动函数
 * @param obj
 * @param target
 */
function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 30;
        step = leader < target ? step : -step;
        if (Math.abs(target - leader) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15);
}
/**
 * 获取当前调用者被卷曲的头部的高度或者是宽度。
 * @returns {{top: number, left: number}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
/**
 * 缓动原理及函数
 * @param obj
 * @param target
 */
function aniMate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        obj.style.left = leader + "px";
        if (leader === target) {
            clearInterval(obj.timer);
        }
    }, 15);
}
/**
 * 给任何对象设置值，并设置渐变的效果。
 * @param obj
 * @param json
 * @param time
 * @param fn
 * @constructor
 */
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
