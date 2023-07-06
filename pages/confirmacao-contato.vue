<template>
    <div class="h-screen flex items-center justify-center">
        <div class="flex flex-col items-center gap-5">
            <img src="/avatar.webp" class="w-96 h-96" />
            <h1 class="text-center text-4xl">Mensagem enviado com sucesso!</h1>
            <RouterLink
                to="/"
                class="bg-orange-400 px-4 py-2 rounded-lg active:scale-110 hover:bg-orange-500 hover:scale-105 duration-200"
            >
                Voltar para o inicio
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Portfólio | Breno Danyel",
    description: "Portfólio de desenvolvimento web e mobile de Breno",
});
</script>
