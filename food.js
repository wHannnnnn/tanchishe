/**
 * Created by wanghan on 2017/10/7.
 */
//food  食物是随机出现的
//创建一个空数组 存储food数
//
//构造食物 宽 高 颜色 坐标x y
//初始化
//
//食物渲染到map中
//如果有食物清除食物
//求 this.x 和 this.y 的范围值
//创建div 食物
//设置属性 宽高 颜色 坐标
//渲染到map中
//食物div存到 数组中
//
//删除食物
//清空数组]
(function (window) {
    var afood = []

    function food(width, height, color, x, y) {
        this.width = width || 20
        this.height = height || 20
        this.color = color || "green"
        this.x = x || 0
        this.y = y || 0  //zuobiao
    }

    food.prototype.render = function (map) {
        if (afood[0]) {
            remove()
        }
        this.x = parseInt(Math.random() * ( map.offsetWidth / this.width)) * this.width
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height
        var adiv = document.createElement("div")
        adiv.style.width = this.width + "px"
        adiv.style.height = this.height + "px"
        adiv.style.left = this.x + "px"
        adiv.style.top = this.y + "px"
        adiv.style.position = "absolute"
        adiv.style.backgroundColor = this.color
        map.appendChild(adiv)
        afood.push(adiv)
    }
    function remove() {
        afood[0].parentNode.removeChild(afood[0])
        afood = []
    }

    window.food = food
})(window)
