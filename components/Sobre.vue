<template>
    <div class="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div class="flex flex-col gap-6">
            <div>
                <div class="w-fit py-1 px-2 bg-zinc-800 rounded-lg text-xs font-medium cursor-default">
                    ⚡️ Desenvolvedor Full Stack
                </div>
                <TextoAnimado class="font-medium text-5xl" label="Olá, eu sou Breno!" />
            </div>

            <p>
                Sou um desenvolvedor Web Full Stack apaixonado por tecnologia. Minhas habilidades abrangem
                principalmente o ecossistema Javascript/TypeScript, com especialização em React e Vue para o front-end e
                NodeJS para o back-end.
            </p>

            <div class="flex gap-5 items-center">
                <RouterLink to="#contato">
                    <button
                        class="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 font-medium rounded-lg hover:scale-105 duration-75"
                    >
                        Contato
                    </button>
                </RouterLink>

                <div class="flex items-center gap-1">
                    <a target="_blank" v-for="link in social_links" :href="link.link" :key="link.link">
                        <button class="rounded-lg hover:scale-110 duration-75 p-1 hover:text-orange-400">
                            <component :is="link.icon" class="w-6 h-6" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <img
            src="/avatar.webp"
            alt="avatar sorrindo e fazendo sinal de positivo"
            class="w-64 h-64 hover:scale-[1.025] duration-200"
        />
    </div>
</template>

<script setup>
import Github from "./icons/github";
import Linkedin from "./icons/linkedin";
import Twitter from "./icons/twitter";

const social_links = [
    {
        link: "https://github.com/brenodanyel",
        icon: Github,
    },
    {
        link: "https://www.linkedin.com/in/breno-danyel/",
        icon: Linkedin,
    },
    {
        link: "https://twitter.com/DanyelBreno",
        icon: Twitter,
    },
    // {
    //     link: "https://discordapp.com/users/1030090170994786334",
    //     icon: Discord,
    // },
];
</script>
