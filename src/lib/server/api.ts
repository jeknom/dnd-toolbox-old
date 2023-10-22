import { COMBATANT, COMBATANT_TEMPLATE } from '$lib/constants/COLLECTION'
import type Combatant from '$lib/types/Combatant'
import type CombatantTemplate from '$lib/types/CombatantTemplate';
import pb from './pocketbase'

export const getCombatants = async () => {
    const instances = await pb.collection(COMBATANT).getFullList<Combatant>({ expand: 'template.actions' });

    return instances
}

export const getTemplates = async () => {
    const instances = await pb.collection(COMBATANT_TEMPLATE).getFullList<CombatantTemplate>({ expand: 'actions' })

    return instances
}