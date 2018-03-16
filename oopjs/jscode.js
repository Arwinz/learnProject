// 原型式继承
function inheritobject(p) {
    if (p == null) throw TypeError();
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== "object" || t !== "function") throw TypeError();

    // 声明一个过渡函数对象
    function F() {
    }

    // 过渡对象的原型继承父对象
    F.prototype = p;
    // 返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

/**
 * 寄生式继承 继承原型
 * 传递参数 subclass 子类
 * 传递参数 superclass 父类
 **/
function inheritPrototype(subclass, superclass) {
// 复制一份父类的原型副本保存在变量中
    var p = inheritobject(superclass.prototype);
// 修正因为重写子类原型导致子类的constructor属性被修改
    p.constructor = subclass;
// 设置子类的原型
    subclass.prototype = p;
}

//定义父类
function superclass(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

// 定义父类原型方法
superclass.prototype.getName = function () {
    console.log(this.name);
};

// 定义子类
function subclass(name, time) {
    // 构造函数式继承
    superclass.call(this, name);
    // 子类新增属性
    this.time = time;
}

// 寄生式继承父类原型
inheritPrototype(subclass, superclass);
// 子类新增原型方法
subclass.prototype.getTime = function () {
    console.log(this.time);
};

// 图书安全类
var Book = function (title, time, type) {
// 判断执行过程中this是否是当前这个对象(如果是说明是用new创建的)
    if (this instanceof Book) {
        this.title = title;
        this.time = time;
        this.type = type;
// 否则重新创建这个对象
    } else {
        return new Book(title, time, type);
    }
}