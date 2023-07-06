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

        <div id="controls-carousel" class="relative w-full" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-96 overflow-hidden rounded-xl">
                <div
                    v-for="(project, index) in projects"
                    :key="project.name"
                    data-carousel-item
                    class="hidden duration-700 ease-in-out"
                >
                    <div class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
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
                    </div>
                </div>
            </div>

            <!-- Slider arrow left -->
            <button
                class="absolute top-1/2 -translate-y-1/2 left-2 z-30 p-4 active:scale-125 duration-200 bg-neutral-900 rounded-full bg-opacity-40"
                data-carousel-prev
            >
                <IconsArrowLeft />
            </button>

            <!-- Slider arrow right -->
            <button
                class="absolute top-1/2 -translate-y-1/2 right-2 z-30 p-4 active:scale-125 duration-200 bg-neutral-900 rounded-full bg-opacity-40"
                data-carousel-next
            >
                <IconsArrowRight />
            </button>

            <!-- Slider indicators -->
            <div class="absolute z-30 flex gap-3 -bottom-4 left-1/2 -translate-x-1/2">
                <button
                    v-for="(_, index) in projects"
                    type="button"
                    class="w-3 h-3 rounded-full active:scale-125"
                    :data-carousel-slide-to="index"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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
