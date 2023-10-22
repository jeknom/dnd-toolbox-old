import { getAllNpcInstances } from "$lib/server/api";

/** @type {import('./$types').PageLoad} */
export async function load() {
    return await getAllNpcInstances()
}