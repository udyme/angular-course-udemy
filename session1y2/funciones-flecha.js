"use strict";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + " smash");
        }, 1000);
    }
};
hulk.smash();
