import type DiceNotation from "./DiceNotation"

type CharacterAction = {
    name: string
    diceNotation?: DiceNotation
    description?: string
}

export default CharacterAction