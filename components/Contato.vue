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

        <form action="https://formsubmit.co/bdls1704@hotmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://bdls.vercel.app/confirmacao-contato" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="your custom message" />

            <div class="flex flex-col gap-2 md:w-[35em]">
                <div class="flex flex-col gap-1">
                    <label for="name" class="text-2xl"> Nome </label>
                    <input
                        type="text"
                        name="name"
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
                        name="email"
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
                        name="_subject"
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
                        name="message"
                        id="message"
                        rows="7"
                        class="border-2 border-gray-300 rounded-md p-2 text-neutral-900"
                        placeholder="Insira abaixo a mensagem que deseja enviar"
                        required
                    />
                </div>

                <button type="submit" class="bg-orange-400 py-2 px-4 rounded-md font-bold">Enviar</button>
            </div>
        </form>
    </div>
</template>
