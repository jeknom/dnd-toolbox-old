import type CombatantAction from "./CombatantAction"

type CombatantTemplate = {
    name: string
    ac: number
    hp: number
    str: number
    dex: number
    int: number
    wis: number
    cha: number
    con: number
    expand?: {
        actions: CombatantAction[] | ''
    }
}

export default CombatantTemplate