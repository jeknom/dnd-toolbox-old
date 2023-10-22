<script lang="ts">
	import type Encounter from "$lib/types/Encounter";
	import randomRange from "$lib/utils/randomRange";
	import Textfield from '@smui/textfield'
	import Combatant from "./Combatant.svelte";
	import Button from "@smui/button";

    export let encounter: Encounter
    
    let activeEncounter = structuredClone(encounter)
    let debounceTimer: number

    for (const participant of activeEncounter.participants) {
        participant.initiative = randomRange(1, 20)
    }

    sortEncounter()

    let currentTurnCombatantId: string = activeEncounter.participants[0].combatant.id
    
    const debounceInitiativeChange = (id: string, event: CustomEvent) => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => handleInitiativeChange(id, event.target as HTMLInputElement), 750);
	}

    function handleInitiativeChange(id: string, newValue: HTMLInputElement) {
        let newNum = 0
        try {
            newNum = parseInt(newValue.value)
        } catch {
            console.warn('Could not parse new initiative')
        }

        const idx = activeEncounter.participants.findIndex(p => p.combatant.id === id)
        if (idx != -1) {
            activeEncounter.participants[idx].initiative = newNum
        }

        newValue.blur();
        sortEncounter()
    }

    function nextCombatant() {
        let nextIdx = activeEncounter.participants.findIndex(({ combatant }) => combatant.id === currentTurnCombatantId) + 1
        
        if (nextIdx >= activeEncounter.participants.length) {
            nextIdx = 0
        }

        currentTurnCombatantId = activeEncounter.participants[nextIdx].combatant.id
    }

    function previousCombatant() {
        let nextIdx = activeEncounter.participants.findIndex(({ combatant }) => combatant.id === currentTurnCombatantId) - 1

        if (nextIdx < 0) {
            nextIdx = activeEncounter.participants.length - 1
        }

        currentTurnCombatantId = activeEncounter.participants[nextIdx].combatant.id
    }

    function sortEncounter() {
        const newOrder = structuredClone(activeEncounter.participants).sort((a, b) => (a.initiative ?? 0) < (b.initiative ?? 0) ? 1 : (a.initiative ?? 0) > (b.initiative ?? 0) ? -1 : 0)
        activeEncounter.participants = newOrder
    }

</script>

<div class="flex flex-col gap-2">
    <h1>Encounter started!</h1>
    <div class="flex w-full justify-center items-center gap-2">
        <Button variant='raised' on:click={previousCombatant}>Previous</Button>
        <Button variant='raised' on:click={nextCombatant}>Next</Button>
    </div>
    {#each activeEncounter.participants as participant (participant.combatant.id)}
        <div class="flex flex-row gap-4 p-4 rounded-sm {participant.combatant.id === currentTurnCombatantId ? 'bg-green-400 bg-opacity-20' : ''}">
            <Textfield class='w-14' variant='outlined' value={participant.initiative} on:input={e => debounceInitiativeChange(participant.combatant.id, e)} />
            <Combatant participant={participant.combatant} />
        </div>
    {/each}
</div>