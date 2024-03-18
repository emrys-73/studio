/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { redirect } from '@sveltejs/kit';

export const actions = {

    reset: async ({ request, locals }) => {

        const data = Object.fromEntries(await request.formData()); 

        try {
            await locals.pb.collection('users').requestPasswordReset(data.email);

        } catch (error) {
            console.log("Whomp whomp - password reset fail")
            throw redirect(303, '/password-reset')
        }

        redirect(303, '/login')
        
    }

}