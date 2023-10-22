import type CombatantTemplate from "./CombatantTemplate"

type Combatant = {
    id: string
    name: string
    expand: {
        template: CombatantTemplate | ''
    }
    isPlayer: boolean
    isHostile: boolean
    description?: string
}

export default Combatant