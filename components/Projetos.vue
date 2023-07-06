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
                :space-between="50"
                :modules="modules"
                pagination
                grabCursor
                mousewheel
                autoplay
                effect="coverflow"
            >
                <SwiperSlide v-for="(project, index) in projects" :key="project.name">
                    <div
                        class="p-4 md:p-20 flex gap-10 flex-col lg:flex-row items-center justify-between rounded-xl"
                        :class="{ 'lg:flex-row-reverse': index % 2 === 0 }"
                    >
                        <div class="flex flex-col gap-4">
                            <p class="uppercase text-neutral-500 text-sm">{{ project.type }}</p>

                            <TextoAnimado class="text-2xl font-bold" :label="project.name" />

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
                        <img
                            :src="project.image"
                            :alt="`Imagem do projeto '${project.name}'`"
                            class="w-1/2 h-72 object-cover rounded-xl hidden lg:block"
                        />
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
        type: "Aplicação de e-commerce",
        name: "Crown Clothing 1",
        description:
            "Online store built with React and Firebase. It has a complete authentication system, shopping cart, payment processing and more.",
        image: "https://picsum.photos/500/500",
        technologies: ["React", "NodeJS", "MongoDB", "Express", "Firebase"],
        links: [
            { name: "Ver o código", link: "" },
            { name: "Visitar o app", link: "" },
        ],
    },
    {
        type: "Aplicação de e-commerce",
        name: "Crown Clothing 2",
        description:
            "Online store built with React and Firebase. It has a complete authentication system, shopping cart, payment processing and more.",
        image: "https://picsum.photos/500/500",
        technologies: ["React", "NodeJS", "MongoDB", "Express", "Firebase"],
        links: [
            { name: "Ver o código", link: "" },
            { name: "Visitar o app", link: "" },
        ],
    },
    {
        type: "Aplicação de e-commerce",
        name: "Crown Clothing 3",
        description:
            "Online store built with React and Firebase. It has a complete authentication system, shopping cart, payment processing and more.",
        image: "https://picsum.photos/500/500",
        technologies: ["React", "NodeJS", "MongoDB", "Express", "Firebase"],
        links: [
            { name: "Ver o código", link: "" },
            { name: "Visitar o app", link: "" },
        ],
    },
    {
        type: "Aplicação de e-commerce",
        name: "Crown Clothing 4",
        description:
            "Online store built with React and Firebase. It has a complete authentication system, shopping cart, payment processing and more.",
        image: "https://picsum.photos/500/500",
        technologies: ["React", "NodeJS", "MongoDB", "Express", "Firebase"],
        links: [
            { name: "Ver o código", link: "" },
            { name: "Visitar o app", link: "" },
        ],
    },
];
</script>
