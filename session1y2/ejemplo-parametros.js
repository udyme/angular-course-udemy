"use strict";
function activar(quien, objecto) {
    if (objecto === void 0) { objecto = "la batiseñal"; }
    var mensaje;
    mensaje = quien + " activ\u00F3 " + objecto;
    return mensaje;
}
console.log(activar("Gordon"));
