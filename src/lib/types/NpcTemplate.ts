import type CharacterAction from "./CharacterAction"

type NpcTemplate = {
    name: string
    ac: number
    hp: number
    str: number
    dex: number
    int: number
    wis: number
    cha: number
    con: number
    expand: {
        actions?: CharacterAction[]
    }
}

export default NpcTemplate