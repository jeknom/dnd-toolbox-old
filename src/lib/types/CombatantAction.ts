import type DiceNotation from "./DiceNotation"

type CombatantAction = {
    name: string
    diceNotation?: DiceNotation
    description?: string
}

export default CombatantAction