/**
 * Created by wanghan on 2017/10/7.
 */
//game
//������Ϸ���캯��  ʵ����ʳ�� �� map
//����ԭ�� ��� ��Ϸ��ʼ����  �� ʳ����Ⱦmap��
//��ʱ�� ���̰�
(function (window) {
    function game(map) {
        this.food = new food()
        this.snake = new snake()
        this.map = map
    }

    game.prototype.start = function () {
        this.food.render(this.map)
        this.snake.render(this.map)
        //������ʱ��
        timeron(this)
        bindkey(this)
    }
    function timeron(that) {
        var timer = setInterval(function () {

            that.snake.move(that.food, that.map)
//��ȡ��ͷ����͵�ͼ��Χֵ
            var headx = that.snake.body[0].x * that.snake.width
            var heady = that.snake.body[0].y * that.snake.height
            var amapx = that.map.offsetWidth
            var amapy = that.map.offsetHeight
// �ж��Ƿ������ȥ �Ƿ�ײǽ
            if (headx < 0 || headx >= amapx) { // 39*20==780 ==> 800   800
                // �����ʱ��
                clearInterval(timer);
                alert("Game Over");
                return
            }
            if (heady < 0 || heady >= amapy) {
                // �����ʱ��
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