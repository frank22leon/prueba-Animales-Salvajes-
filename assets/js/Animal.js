"use strict";

export class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;

    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get Nombre() {
        return this.#nombre;
    }

    get Edad() {
        return this.#edad;
    }

    get Img() {
        return this.#img;
    }

    get comentarios() {
        return this.#comentarios;
    }

    set comentarios(nuevosComentarios) {
        this.#comentarios = nuevosComentarios;
    }

    get sonido() {
        return this.#sonido;
    }

    playerPlay() {
        const player = document.getElementById("player");
        player.setAttribute("src", `/assets/sounds/${this.#sonido}`);
        player.load();
        player.play();
      }
}
