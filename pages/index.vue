<template>
    <div>
        <section class="h-screen flex items-center bg-neutral-900">
            <div class="px-4 md:px-12 lg:px-28 xl:px-36">
                <Sobre data-aos="fade-up" />
            </div>
        </section>

        <section class="py-36 bg-neutral-800">
            <div class="px-4 md:px-12 lg:px-28 xl:px-36">
                <Habilidades data-aos="fade-up" />
            </div>
        </section>

        <section class="py-36 bg-neutral-900">
            <div class="px-4 md:px-12 lg:px-28 xl:px-36">
                <Projetos data-aos="fade-up" />
            </div>
        </section>

        <section class="py-36 bg-neutral-800">
            <div class="px-4 md:px-12 lg:px-28 xl:px-36">
                <Contato id="contato" data-aos="fade-up" />
            </div>
        </section>

        <VoltarParaOTopo />
    </div>
</template>
