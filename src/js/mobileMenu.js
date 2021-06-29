export default class mobileMenu {

    constructor(elm) {
        this.elm = elm;
        this.burger = document.querySelectorAll(".burger");
        this.nav = document.querySelector(".mobile-menu");
        this.header = document.querySelector(".header");

        this.burger.forEach( btn => {
          btn.addEventListener("click", this.setActiveMenu);
        });
    }

    setActiveMenu = () => {
        this.nav.classList.toggle("show");

        this.burger.forEach( btn => {
            const open = btn.querySelector(".open");
            const close = btn.querySelector(".close");
            open.classList.toggle("show");
            close.classList.toggle("show");
        });

    }
};

