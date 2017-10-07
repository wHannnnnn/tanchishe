/**
 * Created by wanghan on 2017/10/7.
 */
//snake
//创建蛇节的数组 [] 空
//创建一个蛇的构造函数
//设置宽高  方向
//设置蛇的身体 蛇节 x y color
//
//蛇渲染到map  render
//将页面上的蛇清除
//根据蛇节数循环生成div  就是蛇节
//创建div的宽高 left 和 top值 颜色
//将蛇节放到map中
//将蛇节存到数组中
//
//给蛇添加移动
//第三个到第二个
//第二个到第一个
//
//第一个判断方向 x+-1 y+-1
//
//获取蛇头和食物的坐标 如果xy相等  生成一个新的蛇节数组  将最后一个蛇节存起来  新的蛇节等于最后一个蛇节的值
//重新渲染食物
//
//创建删除原来的蛇节
//存储的蛇节数循环 删除蛇节
//数组清空
(function (window) {
    var snakejie = []

    function snake(width, height, direction) {
        this.width = width || 20
        this.height = height || 20
        this.body = [
            {x: 3, y: 2, color: "yellow"},
            {x: 2, y: 2, color: "blue"},
            {x: 1, y: 2, color: "blue"}
        ]
        this.direction = direction || "right"
    }

    snake.prototype.render = function (map) {
        remove()
        for (var i = 0; i < this.body.length; i++) {
            var adiv = document.createElement("div")
            adiv.style.width = this.width + 'px'
            adiv.style.height = this.height + "px"
            adiv.style.left = this.body[i].x * this.width + "px"
            adiv.style.top = this.body[i].y * this.height + "px"
            adiv.style.backgroundColor = this.body[i].color
            adiv.style.position = "absolute"
            map.appendChild(adiv)
            snakejie.push(adiv)
        }
    }
//蛇移动方法
        snake.prototype.move = function (food, map) {
            for (var i = this.body.length - 1; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x
                this.body[i].y = this.body[i - 1].y
            }
            if (this.direction == "right") {  //蛇头方向
                this.body[0].x += 1
            }
            if (this.direction == "left") {  //蛇头方向
                this.body[0].x -= 1
            }
            if (this.direction == "up") {
                this.body[0].y -= 1
            }
            if (this.direction == "down") {
                this.body[0].y += 1
            }
            //蛇头和食物的坐标
            var headx = this.body[0].x * this.width
            var heady = this.body[0].y * this.height
            var foodx = food.x
            var foody = food.y
            if (headx == foodx && heady == foody) {
                var lastjie = this.body[this.body.length - 1]
                var anewjie = {
                    x: lastjie.x,
                    y: lastjie.y,
                    color: lastjie.color
                }//添加到数组

                this.body.push(anewjie)
                food.render(map)
            }
        }
        function remove() {
            for (var i = 0; i < snakejie.length; i++) {
                snakejie[i].parentNode.removeChild(snakejie[i])
            }
            snakejie = []
        }
    window.snake = snake
})(window)