<template>
    <div class="flex flex-col gap-4">
        <div>
            <p class="uppercase text-xs font-thin text-slate-200 opacity-75">
                Um problema é uma chance para você fazer o seu melhor!
            </p>
            <TextoAnimado label="Habilidades e experiência" class="font-bold text-4xl" />
        </div>

        <div class="flex flex-col gap-3">
            <p>A minha principal área de especialização é o desenvolvimento web, tanto front-end quanto back-end.</p>

            <div>
                <p>
                    Tenho experiências na construção de aplicações front-end utilizando bibliotecas como Vue ou React.
                </p>
                <p>
                    Também tenho experiência no desenvolvimento back-end utilizando Node e seus frameworks mais
                    populares, como Express, Nest, Adonis, etc.
                </p>
            </div>

            <div>
                Visite meu
                <a
                    href="https://www.linkedin.com/in/breno-danyel/"
                    target="_blank"
                    class="text-orange-400 hover:underline"
                >
                    LinkedIn</a
                >, ou
                <a href="/breno-danyel-web-full-stack.pdf" download class="text-orange-400 hover:underline">
                    baixe o meu currículo
                </a>
                para mais detalhes.
            </div>
        </div>

        <div class="grid mx-auto grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5 p-14">
            <div
                class="shadow-2xl flex flex-col items-center gap-5 p-5 rounded-lg hover:scale-105 duration-200"
                v-for="(skill, index) of skills"
                :key="skill.name"
                data-aos="fade-up"
                :data-aos-delay="100 * (index + 1)"
            >
                <component :is="skill.icon" class="text-5xl text-orange-400"></component>
                <div class="text-center">{{ skill.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Adonis from "@/components/icons/adonis.vue";
import Git from "@/components/icons/git.vue";
import Javascript from "@/components/icons/javascript.vue";
import Nest from "@/components/icons/nest.vue";
import Node from "@/components/icons/node.vue";
import Prisma from "@/components/icons/prisma.vue";
import Quasar from "@/components/icons/quasar.vue";
import React from "@/components/icons/react.vue";
import Tailwind from "@/components/icons/tailwind.vue";
import Typescript from "@/components/icons/typescript.vue";
import Vue from "@/components/icons/vue.vue";

const skills = [
    { name: "Git", icon: Git },
    { name: "Javascript", icon: Javascript },
    { name: "Typescript", icon: Typescript },
    { name: "Tailwind", icon: Tailwind },
    { name: "React", icon: React },
    { name: "Vue", icon: Vue },
    { name: "Quasar", icon: Quasar },
    { name: "Node", icon: Node },
    { name: "Nest", icon: Nest },
    { name: "Adonis", icon: Adonis },
    { name: "Prisma", icon: Prisma },
];
</script>
