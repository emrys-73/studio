/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { redirect } from '@sveltejs/kit'
import { serializeNonPOJOs } from '$lib/utils.ts';
import OpenAI from "openai";

const openai = new OpenAI();

export const load = async ({ locals, params }) => {

    const getAssistants = async () => {
        try {
            const myAssistants = serializeNonPOJOs(await openai.beta.assistants.list({
                order: "desc",
                limit: "3",
              }))

            console.log(myAssistants)
            return myAssistants;

        } catch (error) {
            console.log("Whomp whomp")
        }
    }

    return {
        assistants: await getAssistants()
    }
}
