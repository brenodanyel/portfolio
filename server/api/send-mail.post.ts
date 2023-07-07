import { Resend } from "resend";
import * as validator from "validator";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
    const { name, email, subject, message } = await readBody(event);

    if (typeof name !== "string" || name.length < 5)
        throw createError({ statusCode: 400, statusMessage: "O nome deve ter pelo menos 5 caracteres" });

    if (typeof email !== "string" || !validator.isEmail(email))
        throw createError({ statusCode: 400, statusMessage: "O e-mail deve ser válido" });

    if (typeof subject !== "string" || subject.length < 5)
        throw createError({ statusCode: 400, statusMessage: "O assunto deve ter pelo menos 3 caracteres" });

    if (typeof message !== "string" || message.length < 5)
        throw createError({ statusCode: 400, statusMessage: "A mensagem deve ter pelo menos 5 caracteres" });

    try {
        await resend.emails.send({
            from: `${name} <porfolio@resend.dev>`,
            to: ["bdls1704@hotmail.com"],
            subject: `Contato Portfolio `,
            html: `
                Nome: ${name}, <br /> <br />
                Email: ${email},  <br /> <br />
                Assunto: ${subject},  <br /> <br />
                Mensagem: <br />
                ${message}
            `,
        });

        return { message: "E-mail enviado com sucesso" };
    } catch (error) {
        return error;
    }
});
