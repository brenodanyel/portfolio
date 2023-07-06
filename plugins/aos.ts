import AOS from "aos";
import "aos/dist/aos.css";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
    AOS.init({
        offset: -window.innerHeight / 2,
        // disable: window.innerWidth <= 768,
        duration: 600,
        easing: "ease-in-out",
        once: true,
    });
});
