<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-4">
            <TextoAnimado class="font-bold text-4xl" label="Portfólio e projetos anteriores" />
            <p>
                Eu já construí vários projetos com diferentes tecnologias para se adequar às necessidades de cada
                cliente. Se você quiser ver mais exemplos do meu trabalho além dos que foram os apresentados neste site,
                por favor
                <RouterLink to="#contato" class="text-orange-400 hover:underline"> entre em contato</RouterLink>.
            </p>
        </div>

        <div class="grid gap-5 grid-cols-1">
            <div
                v-for="(project, index) in projects"
                :key="project.name"
                class="flex gap-10 flex-col md:flex-row items-center justify-between shadow-xl bg-neutral-900 bg-opacity-30 p-5 rounded-xl hover:bg-opacity-50 duration-200"
                :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
            >
                <div class="flex flex-col gap-4">
                    <p class="uppercase text-neutral-500 text-sm">{{ project.type }}</p>

                    <TextoAnimado class="text-2xl font-bold" :label="project.name" />

                    <p>{{ project.description }}</p>

                    <p>
                        <span class="font-bold">Construido com: </span>
                        <span>{{ project.technologies.join(", ") }}.</span>
                    </p>

                    <div>
                        <a
                            v-for="link in project.links"
                            :key="link.name"
                            target="_blank"
                            :href="link.link"
                            class="self-start hover:text-orange-400 duration-200 group flex gap-2"
                        >
                            <span class="transition-all"> {{ link.name }} </span>
                            <span class="group-hover:ml-1 transition-all">{{ ">" }}</span>
                        </a>
                    </div>
                </div>

                <img
                    :src="project.images.at(0)"
                    :alt="`Imagem do projeto ${project.name}`"
                    class="w-72 h-9w-72 object-cover rounded-xl"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
    {
        type: "Aplicação de e-commerce",
        name: "Crown Clothing",
        description:
            "Online store built with React and Firebase. It has a complete authentication system, shopping cart, payment processing and more.",
        images: ["https://picsum.photos/500/500"],
        technologies: ["React", "NodeJS", "MongoDB", "Express", "Firebase"],
        links: [
            { name: "Ver o código", link: "" },
            { name: "Visitar o app", link: "" },
        ],
    },
    {
        type: "Aplicação de e-commerce",
        name: "Crown Clothing",
        description:
            "Online store built with React and Firebase. It has a complete authentication system, shopping cart, payment processing and more.",
        images: ["https://picsum.photos/500/500"],
        technologies: ["React", "NodeJS", "MongoDB", "Express", "Firebase"],
        links: [
            { name: "Ver o código", link: "" },
            { name: "Visitar o app", link: "" },
        ],
    },
];
</script>
