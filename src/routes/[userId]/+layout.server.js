/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { redirect } from '@sveltejs/kit'


export const load = async ({ locals, params }) => {
    const getUser = async () => {
        if (locals.user) {
            return locals.user
        }   
        redirect (303, '/login')
    }

    return {
        user: await getUser()
    }
}
