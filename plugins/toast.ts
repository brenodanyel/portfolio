import { defineNuxtPlugin } from "nuxt/app";

//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-bootstrap.css";

import { useToast } from "vue-toast-notification";
const toast = useToast();

export default defineNuxtPlugin(({ $config }) => {
    return {
        provide: {
            toast,
        },
    };
});
