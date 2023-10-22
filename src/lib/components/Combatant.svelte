<script lang="ts">
	import type Combatant from "$lib/types/Combatant"
    import Stat from '$lib/components/Stat.svelte'
    import CharacterAction from '$lib/components/CharacterAction.svelte'
	import Button, { Label } from "@smui/button";
	import type CombatantAction from "$lib/types/CombatantAction";

    export let participant: Combatant
    export let onRemove: (() => void) | undefined = undefined
    
    let expanded = false

    const tmpl = participant.expand?.template
    const hasTmpl = tmpl !== undefined && tmpl !== ''
    const actions = hasTmpl && tmpl.expand?.actions !== undefined && tmpl.expand?.actions !== '' ? tmpl.expand.actions as CombatantAction[] : []
    const hasActions = actions.length > 0
</script>

<div class="flex flex-row justify-between gap-4 items-center mb-4 {expanded ? 'bg-cyan-900 bg-opacity-50 rounded-md py-2' : ''}">
    <div class="flex flex-col gap-2">
        <h6>{participant.name}</h6>
        {#if hasTmpl}
            <div class="flex flex-row gap-2 items-center">
                <div class="flex flex-row text-sm gap-2 items-center">
                    <Stat stat='hp' value={tmpl.hp} />
                    <Stat stat='ac' value={tmpl.ac} />
                    <p>|</p>
                    <Stat stat='str' value={tmpl.str} />
                    <Stat stat='int' value={tmpl.int} />
                    <Stat stat='dex' value={tmpl.dex} />
                    <Stat stat='wis' value={tmpl.wis} />
                    <Stat stat='con' value={tmpl.con} />
                    <Stat stat='cha' value={tmpl.cha} />
                </div>
            </div>
            {#if expanded && hasActions}
                <h6>Actions</h6>
                {#each actions as action}
                    <CharacterAction action={action} />
                {/each}
            {/if}
        {/if}
        <div class="flex flex-row gap-2">
            {#if hasActions}
                <Button class="text-white" on:click={() => expanded = !expanded} variant='outlined'>
                    <Label class="text-white">
                        {expanded ? 'Less' : 'Expand'}
                    </Label>
                </Button>
            {/if}
            {#if onRemove !== undefined}
                <Button on:click={onRemove} variant='outlined'>
                    <Label>
                        Remove
                    </Label>
                </Button>
            {/if}
        </div>
    </div>
</div>