function activar(quien: string,objecto:string="la batiseñal"): string {
    let mensaje: string;
    mensaje = `${quien} activó ${objecto}`; 
    return mensaje;
}

console.log(activar("Gordon"));