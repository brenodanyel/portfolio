<template>
    <!-- scroll to top with tailwindcss -->

    <div class="fixed bottom-4 right-8 animate-bounce" v-if="visible">
        <button
            @click="onClick"
            class="bg-neutral-700 hover:bg-neutral-900 duration-200 text-white py-2 px-4 rounded-full"
        >
            <IconsScroll class="text-2xl" />
        </button>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const visible = ref(false);

function handleScrollCheck() {
    if (!process.client) return;
    visible.value = window.scrollY > 100;
}

function onClick() {
    if (!process.client) return;
    window.scroll({ top: 0, behavior: "smooth" });
    router.replace({ hash: "" });
}

onMounted(() => {
    if (!process.client) return;
    document.addEventListener("scroll", handleScrollCheck);
});

onUnmounted(() => {
    if (!process.client) return;
    document.removeEventListener("scroll", handleScrollCheck);
});
</script>
