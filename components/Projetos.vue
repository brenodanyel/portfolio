<template>
    <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-4">
            <TextoAnimado class="font-bold text-4xl" label="Portfólio e projetos anteriores" />
            <p>
                Eu já construí vários projetos com diferentes tecnologias para se adequar às necessidades de cada
                cliente. Se você quiser ver mais exemplos do meu trabalho além dos que foram os apresentados neste site,
                por favor
                <RouterLink to="#contato" class="text-orange-400 hover:underline"> entre em contato</RouterLink>.
            </p>
        </div>

        <div>
            <Swiper
                :slides-per-view="perView"
                :coverflow-effect="{
                    scale: 0.8,
                    modifier: 1,
                    slideShadows: true,
                }"
                :modules="modules"
                pagination
                grabCursor
                mousewheel
                autoplay
                effect="coverflow"
            >
                <SwiperSlide v-for="(project, index) in projects" :key="project.name">
                    <div
                        class="p-4 md:p-10 flex items-center justify-between rounded-xl bg-neutral-800/70 hover:bg-neutral-900/70 duration-200"
                        :class2="{ 'lg:flex-row-reverse': index % 2 === 0 }"
                    >
                        <div class="flex flex-col gap-4">
                            <div>
                                <p class="uppercase text-neutral-500 text-sm">{{ project.type }}</p>
                                <TextoAnimado class="text-2xl font-bold" :label="project.name" />
                            </div>

                            <p>{{ project.description }}</p>

                            <p>
                                <span class="font-bold">Construido com: </span>
                                <span>{{ project.technologies.join(", ") }}.</span>
                            </p>

                            <div class="self-start">
                                <a
                                    v-for="link in project.links"
                                    :key="link.name"
                                    target="_blank"
                                    :href="link.link"
                                    class="hover:text-orange-400 duration-200 group flex gap-2"
                                >
                                    <span class="transition-all"> {{ link.name }} </span>
                                    <span class="group-hover:ml-1 transition-all">{{ ">" }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Autoplay, EffectCoverflow, Mousewheel, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [Pagination, Scrollbar, EffectCoverflow, Mousewheel, Autoplay];

const perView = computed(() => {
    if (!process.client) return 1;
    if (window.innerWidth < 768) return 1;
    return 2;
});

const projects = [
    {
        type: "Aplicação full stack",
        name: "Runners Club",
        description:
            "Plataforma para uma empresa especializada em eventos e assessorias de corrida personalizada. Conta com informativos, calendário de eventos, autenticação de usuários, loja virtual e muito mais.",
        technologies: [
            "Typescript",
            "Vue",
            "Quasar",
            "NodeJS",
            "NestJS",
            "Prisma",
            "PostgreSQL",
            "Supabase",
            "Vercel",
            "Docker",
        ],
        links: [{ name: "Runners Club", link: "https://www.oficialrunnersclub.com.br/" }],
    },

    {
        type: "Aplicação full stack + aplicativo nativo windows",
        name: "MTA Launcher",
        description: `
            Um aplicativo permite que os usuários tenham uma melhor experiência ao buscar por servidores de um jogo online.
            A aplicação conta com landing page, sistema de gerenciamento de perfis, etc.
        `,
        technologies: [
            "Typescript",
            "React",
            "NextJS",
            "MaterialUI",
            "NodeJS",
            "Express",
            "Prisma",
            "Planetscale",
            "MySQL",
            "Docker",
            "Tauri",
        ],
        links: [
            { name: "Landing Page", link: "https://www.mta-launcher.com/" },
            { name: "Landing Page (Código)", link: "https://github.com/brenodanyel/mta-launcher-landing-page" },
            { name: "Painel", link: "https://app.mta-launcher.com/" },
            { name: "Painel (Código)", link: "https://github.com/brenodanyel/mta-launcher-painel" },
            { name: "Back End", link: "https://backend-mta-launcher.vercel.app/" },
            { name: "Back End (Código)", link: "https://github.com/brenodanyel/mta-launcher-backend" },
        ],
    },

    {
        type: "Front End",
        name: "Search Devs",
        description: `Aplicação web que permite que usuários busquem perfis de desenvolvedores cadastrados no github.
            É possível visualizar informações pessoais, tecnologias utilizadas, projetos ativos, localização e muito mais.`,
        technologies: ["Typescript", "React", "Material UI"],
        links: [
            { name: "Search Devs", link: "https://search-devs-omega.vercel.app/" },
            { name: "Search Devs (Código)", link: "https://github.com/brenodanyel/search_devs" },
        ],
    },

    {
        type: "API REST",
        name: "MTA-SA API",
        description: `Uma API rest que permite que usuários busquem informações sobre servidores de um jogo online.`,
        technologies: ["Typescript", "NodeJS", "Express"],
        links: [{ name: "MTA-SA API (Código)", link: "https://github.com/brenodanyel/mtasa-api" }],
    },

    {
        type: "Front end app",
        name: "BrenoFlix",
        description: `Uma aplicação web que simula uma plataforma de streaming de vídeos. Inspirada na interface da Netflix.`,
        technologies: ["Typescript", "React"],
        links: [
            { name: "BrenoFlix", link: "https://breno-cloneflix.vercel.app/" },
            { name: "BrenoFlix (Código)", link: "https://github.com/brenodanyel/netflix-clone" },
        ],
    },

    {
        type: "Front end app",
        name: "Random User",
        description: `Uma aplicação web que exibe informações sobre usuários aleatórios. Utiliza a API pública Random User.`,
        technologies: ["Typescript", "React", "Typescript"],
        links: [
            { name: "Random User", link: "https://random-user-sand-five.vercel.app/" },
            { name: "Random User (Código)", link: "https://github.com/brenodanyel/random-user" },
        ],
    },
];
</script>
