/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { redirect } from "@sveltejs/kit";


export const POST = ({ locals }) => {
    locals.pb.authStore.clear()
    locals.user = undefined;

    throw redirect(303, '/login')
}