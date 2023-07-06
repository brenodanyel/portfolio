<template>
    <div class="flex flex-col gap-4">
        <TextoAnimado label="Contato" class="font-bold text-4xl" />

        <p>
            Caso deseje entrar em contato, eu ficarei feliz em te responder o quanto antes! Basta preencher o formulário
            abaixo ou envie um e-mail diretamente para

            <a
                href="mailto:bdls1704@hotmail.com"
                target="_blank"
                class="text-orange-400 hover:underline duration-200 self-start"
            >
                bdls1704@hotmail.com</a
            >.
        </p>

        <form @submit.prevent="submitEmail()">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://bdls.vercel.app/confirmacao-contato" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="your custom message" />

            <div class="flex flex-col gap-2 md:w-[35em]">
                <div class="flex flex-col gap-1">
                    <label for="name" class="text-2xl"> Nome </label>
                    <input
                        type="text"
                        v-model.trim="name"
                        id="name"
                        class="border-2 border-gray-300 rounded-md p-2 text-neutral-900"
                        placeholder="Insira o seu nome"
                        required
                    />
                </div>

                <div class="flex flex-col gap-1">
                    <label for="email" class="text-2xl">E-mail</label>
                    <input
                        type="email"
                        v-model.trim="email"
                        id="email"
                        class="border-2 border-gray-300 rounded-md p-2 text-neutral-900"
                        placeholder="Insira o seu e-mail"
                        required
                    />
                </div>

                <div class="flex flex-col gap-1">
                    <label for="assunto" class="text-2xl">Assunto</label>
                    <input
                        type="text"
                        v-model.trim="subject"
                        id="assunto"
                        class="border-2 border-gray-300 rounded-md p-2 text-neutral-900"
                        placeholder="Insira o assunto que deseja tratar"
                        required
                    />
                </div>

                <div class="flex flex-col gap-1">
                    <label for="message" class="text-2xl">Mensagem</label>
                    <textarea
                        type="text"
                        v-model.trim="message"
                        id="message"
                        rows="7"
                        class="border-2 border-gray-300 rounded-md p-2 text-neutral-900"
                        placeholder="Insira abaixo a mensagem que deseja enviar"
                        required
                    />
                </div>

                <button
                    type="submit"
                    class="bg-orange-400 py-2 px-4 rounded-md font-bold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="loading"
                >
                    <div v-if="loading" class="flex items-center gap-3">
                        <IconsLoading class="animate-spin" />
                        <span>Enviando...</span>
                    </div>
                    <span v-else>Enviar mensagem</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
const { $toast } = useNuxtApp();
const $router = useRouter();

const name = ref("a");
const email = ref("asd@asd.com");
const subject = ref("as");
const message = ref("a");

const loading = ref(false);

async function submitEmail() {
    try {
        loading.value = true;

        const { error } = await useFetch<any>("/api/send-mail", {
            method: "POST",
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value,
            }),
        });

        if (error.value) {
            throw new Error(error.value?.statusMessage);
        }

        $router.push("/confirmacao-contato");

        $toast.success("Mensagem enviada com sucesso!", {
            position: "top-right",
            duration: 5000,
        });

        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
    } catch (e: any) {
        $toast.error(e.message || "Ocorreu um erro ao enviar a mensagem!", {
            position: "top-right",
            duration: 5000,
        });
    } finally {
        loading.value = false;
    }
}
</script>
