import { NPC_INSTANCE, NPC_TEMPLATE } from '$lib/constants/COLLECTION'
import type NpcInstance from '$lib/types/NpcInstance'
import pb from './pocketbase'

export const getAllNpcInstances = async () => {
    const instances = await pb.collection(NPC_INSTANCE).getFullList<NpcInstance>({ expand: 'template.actions' });

    return { instances }
}