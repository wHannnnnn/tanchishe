/**
 * Created by wanghan on 2017/10/7.
 */
//food  ʳ����������ֵ�
//����һ�������� �洢food��
//
//����ʳ�� �� �� ��ɫ ����x y
//��ʼ��
//
//ʳ����Ⱦ��map��
//�����ʳ�����ʳ��
//�� this.x �� this.y �ķ�Χֵ
//����div ʳ��
//�������� ��� ��ɫ ����
//��Ⱦ��map��
//ʳ��div�浽 ������
//
//ɾ��ʳ��
//�������]
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
