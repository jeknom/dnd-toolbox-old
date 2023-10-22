import type CombatantTemplate from "./CombatantTemplate"

type Combatant = {
    id: string
    name: string
    expand: {
        template: CombatantTemplate | ''
    }
    description?: string
}

export default Combatant