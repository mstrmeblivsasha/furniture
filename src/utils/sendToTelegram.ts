const TELEGRAM_CHAT_ID = "@MaysterMebliv";
// const TELEGRAM_CHAT_ID = "@TestDailyRent";
const telegramApi = process.env.TELEGRAM_API;

import { TypeContactsSchema } from "@/zodShemas/contactsShema";

export const sendToTelegram = async (formData: TypeContactsSchema) => {
    const { userName, phone, message } = formData;

    let text = `Шановний MaysterMebliv, ${userName} написав повідомлення: ${message} та залишив тел: ${phone} `;

    try {
        const response = await fetch(telegramApi as string, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            }),
        });

        if (response.ok) {
            console.log("To telegram sent:", formData);
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
};
