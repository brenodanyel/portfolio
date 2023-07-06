<template>
    <div>
        <div class="mx-auto px-8 md:px-24 lg:px-36 flex flex-col">
            <section class="flex items-center min-h-screen">
                <Sobre data-aos="fade-up" />
            </section>

            <section class="py-4">
                <Habilidades />
            </section>

            <section class="py-4">
                <Projetos data-aos="fade-up" />
            </section>

            <section class="py-4 h-screen flex items-center">
                <Contato data-aos="fade-up" id="contato" />
            </section>
        </div>

        <VoltarParaOTopo />
    </div>
</template>
