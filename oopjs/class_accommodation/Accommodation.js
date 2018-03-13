"use strict";

function Accommodation(defaults) {
    defaults = defaults || {};

    this.floors = defaults.floors || 0;
    this.rooms = defaults.rooms || 0;
    this.sharedEntrance = defaults.sharedEntrance || false;
}

Accommodation.prototype.isLocked = false;
Accommodation.prototype.lock = function () {
    this.isLocked = true;
    return this;
};
Accommodation.prototype.unlock = function () {
    this.isLocked = false;
    return this;
};

function House(defaults) {
    // Accommodation.apply(this, [defaults]);
    Accommodation.call(this, defaults);
    this.floors = 2;
}

House.prototype = new Accommodation();
House.prototype.constructor = House;