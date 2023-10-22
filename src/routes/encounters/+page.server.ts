import { getCombatants, getTemplates } from "$lib/server/api";

/** @type {import('./$types').PageLoad} */
export async function load() {
    const [combatants, templates] = await Promise.all([getCombatants(), getTemplates()])

    return {
        combatants,
        templates,
    }
}