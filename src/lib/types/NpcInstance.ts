import type NpcTemplate from "./NpcTemplate"

type NpcInstance = {
    id: string
    name: string
    expand: {
        template: NpcTemplate
    }
    description?: string
}

export default NpcInstance