/**
 * Created by wanghan on 2017/10/7.
 */
//game
//创建游戏构造函数  实例化食物 蛇 map
//函数原型 添加 游戏开始方法  蛇 食物渲染map中
//定时器 键盘绑定
(function (window) {
    function game(map) {
        this.food = new food()
        this.snake = new snake()
        this.map = map
    }

    game.prototype.start = function () {
        this.food.render(this.map)
        this.snake.render(this.map)
        //开启定时器
        timeron(this)
        bindkey(this)
    }
    function timeron(that) {
        var timer = setInterval(function () {

            that.snake.move(that.food, that.map)
//获取蛇头坐标和地图范围值
            var headx = that.snake.body[0].x * that.snake.width
            var heady = that.snake.body[0].y * that.snake.height
            var amapx = that.map.offsetWidth
            var amapy = that.map.offsetHeight
// 判断是否坐标出去 是否撞墙
            if (headx < 0 || headx >= amapx) { // 39*20==780 ==> 800   800
                // 清除定时器
                clearInterval(timer);
                alert("Game Over");
                return
            }
            if (heady < 0 || heady >= amapy) {
                // 清除定时器
                clearInterval(timer);
                alert("Game Over");
                return;
            }
            that.snake.render(that.map);
        }, 200)
    }

    function bindkey(that) {
        bind(document, "keydown", function (e) {
            e = e || event
            if (e.keyCode == 37) {
                that.snake.direction = "left"
            }
            if (e.keyCode == 38) {
                that.snake.direction = "up"
            }
            if (e.keyCode == 39) {
                that.snake.direction = "right"
            }
            if (e.keyCode == 40) {
                that.snake.direction = "down"
            }
        })
    }

    window.game = game
})(window)