"use strict";
/**
 * 使用闭包的原因是：将公用（静态）、类私有的变量或函数限制在一个类定义作用域中。
 */
var Accommodation = (function () {
    function Accommodation() {
    }

    var _isLocked = false,
        _isAlarmed = false,
        _alarmMessage = "Alarm activated!";
    var _alarm = function () {
        _isAlarmed = true;
        alert(_alarmMessage);
    };
    var _disableAlarm = function () {
        _isAlarmed = false;
    };

    Accommodation.prototype.lock = function () {
        _isLocked = true;
        _alarm();
    };
    Accommodation.prototype.unlock = function () {
        _isLocked = false;
        _disableAlarm();
    };
    Accommodation.prototype.getIsLocked = function () {
        return _isLocked;
    };
    Accommodation.prototype.getIsAlarmed = function () {
        return _isAlarmed;
    };
    Accommodation.prototype.setAlarmMessage = function (message) {
        _alarmMessage = message;
    };
    return Accommodation;
}());

function House() {
}

House.prototype = new Accommodation();
House.prototype.constructor = House;