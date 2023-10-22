import type Combatant from "$lib/types/Combatant";
import type CombatantTemplate from "$lib/types/CombatantTemplate";
import { v4 as uuid4 } from 'uuid'

function templateToCombatant(template: CombatantTemplate): Combatant {
    return {
        id: uuid4(),
        name: template.name,
        expand: {
            template,
        },
        isPlayer: false,
        isHostile: false,
        description: 'This is an instance generated from a template',
    }
}

export default templateToCombatant