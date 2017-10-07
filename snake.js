/**
 * Created by wanghan on 2017/10/7.
 */
//snake
//�����߽ڵ����� [] ��
//����һ���ߵĹ��캯��
//���ÿ��  ����
//�����ߵ����� �߽� x y color
//
//����Ⱦ��map  render
//��ҳ���ϵ������
//�����߽���ѭ������div  �����߽�
//����div�Ŀ�� left �� topֵ ��ɫ
//���߽ڷŵ�map��
//���߽ڴ浽������
//
//��������ƶ�
//���������ڶ���
//�ڶ�������һ��
//
//��һ���жϷ��� x+-1 y+-1
//
//��ȡ��ͷ��ʳ������� ���xy���  ����һ���µ��߽�����  �����һ���߽ڴ�����  �µ��߽ڵ������һ���߽ڵ�ֵ
//������Ⱦʳ��
//
//����ɾ��ԭ�����߽�
//�洢���߽���ѭ�� ɾ���߽�
//�������
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
//���ƶ�����
        snake.prototype.move = function (food, map) {
            for (var i = this.body.length - 1; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x
                this.body[i].y = this.body[i - 1].y
            }
            if (this.direction == "right") {  //��ͷ����
                this.body[0].x += 1
            }
            if (this.direction == "left") {  //��ͷ����
                this.body[0].x -= 1
            }
            if (this.direction == "up") {
                this.body[0].y -= 1
            }
            if (this.direction == "down") {
                this.body[0].y += 1
            }
            //��ͷ��ʳ�������
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
                }//��ӵ�����

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