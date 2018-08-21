let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout(() => {
            console.log(this.nombre + " smash");
        }, 1000);
    }
}

hulk.smash();