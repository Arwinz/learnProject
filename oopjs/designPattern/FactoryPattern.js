// 安全模式创建的工厂类
var Factory = function (type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
};
// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java: function (content) {
        //将内容保存在content里面以备日后使用
        this.content = content;
        //创建对象时，通过闭包，直接执行，将内容按需求的样式插入到页面内
        (function (content) {
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.color = "green";
            document.getElementById("container").appendchild(div);
        })(content);
    },
    Javascript: function (content) {
        // ……
    },
    UI: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.border = "1px solid red";
            document.getElementById("container").appendchild(div);
        })(content);
    },
    php: function (content) {
        // ……
    }
};