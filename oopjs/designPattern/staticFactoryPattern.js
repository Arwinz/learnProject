var FormFieldFactory = {
    //makeField 方法参数包含2个选项
    // -type，定义所创建的表单域对象的类型，如text、email、button
    // -displayText，基于对象的类型，定义表单域的placeholder或者按钮上显式的文本
    makeField: function (options) {
        "use strict";
        options = options || {};
        var type = options.type || "text",
            displayText = options.displayText || "",
            field;
        switch (type) {
            case "text":
                field = new TextField(displayText);
                break;
            case "email":
                field = new EmailField(displayText);
                break;
            case "button":
                field = new ButtonField(displayText);
                break;
            default:
                field = new TextField(displayText);
        }
        return field;
    }
};

function TextField(displayText) {
    this.displayText = displayText;
}

TextField.prototype.getElement = function () {
    var textField = document.createElement("input");
    textField.setAttribute("type", "text");
    textField.setAttribute("placeholder", this.displayText);
    return textField;
};

function EmailField(displayText) {
    this.displayText = displayText;
}

EmailField.prototype.getElement = function () {
    var emailField = document.createElement("input");
    emailField.setAttribute("type", "email");
    emailField.setAttribute("placeholder", this.displayText);
    return emailField;
};

function ButtonField(displayText) {
    this.displayText = displayText;
}

ButtonField.prototype.getElement = function () {
    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerHTML = this.displayText;
    return button;
};