import type NpcTemplate from "./NpcTemplate"

type EncounterParticipant = {
    id: string
    name: string
    npcTemplate?: NpcTemplate
    description?: string
}

export default EncounterParticipant