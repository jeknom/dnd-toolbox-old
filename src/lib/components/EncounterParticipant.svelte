<script lang="ts">
	import type EncounterParticipant from "$lib/types/EncounterParticipant";
    import Textfield from '@smui/textfield';
    import Stat from '$lib/components/Stat.svelte'
    import CharacterAction from '$lib/components/CharacterAction.svelte'
	import Button, { Label } from "@smui/button";

    export let participant: EncounterParticipant
    export let onRemove: () => void
    
    let expanded = false

    const tmpl = participant.npcTemplate
</script>

<div class="flex flex-row justify-between gap-4 items-center mb-4 {expanded ? 'bg-cyan-900 bg-opacity-50 rounded-md py-2' : ''}">
    <div class="flex flex-col gap-2">
        <h6>{participant.name}</h6>
        <div class="flex flex-row gap-2 items-center">
            {#if tmpl !== undefined}
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
            {/if}
        </div>
        {#if expanded && tmpl?.expand.actions !== undefined}
            <h6>Actions</h6>
            {#each tmpl.expand.actions as action}
                <CharacterAction action={action} />
            {/each}
        {/if}
        <div class="flex flex-row gap-2">
            {#if tmpl?.expand.actions !== undefined}
                <Button class="text-white" on:click={() => expanded = !expanded} variant='outlined'>
                    <Label class="text-white">
                        {expanded ? 'Less' : 'Expand'}
                    </Label>
                </Button>
            {/if}
            <Button on:click={onRemove} variant='outlined'>
                <Label>
                    Remove
                </Label>
            </Button>
        </div>
    </div>
</div>