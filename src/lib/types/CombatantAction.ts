import type DiceNotation from "./DiceNotation"

type CombatantAction = {
    name: string
    damageDice?: DiceNotation
    hitDice?: DiceNotation
    description?: string
}

export default CombatantAction