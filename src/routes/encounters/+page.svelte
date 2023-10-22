<script lang="ts">
	import type Combatant from '$lib/types/Combatant.js'
	import Participant from '$lib/components/Combatant.svelte';
	import AddToEncounter from '$lib/components/AddToEncounter.svelte';
    import Encounter from '$lib/components/Encounter.svelte';
    import type TEncounter from '$lib/types/Encounter';
    import { v4 as uuid4 } from 'uuid'
	import Title from '$lib/components/Title.svelte';
	import Button from '@smui/button';
	import templateToCombatant from '$lib/utils/templateToCombatant.js';

    export let data;
    export let participants: Combatant[] = [];
    
    let encounterStarted = false

    const addParticipant = (participant: Combatant) => {
        console.log(participant)
        const clonedList = structuredClone(participants)
        
        let duplicateCount = 0
        for (const p of clonedList) {
            if (p.name.includes(participant.name)) {
                duplicateCount++
            }
        }

        let name = duplicateCount > 0 ? `${participant.name} (${duplicateCount.toString()})` : participant.name

        clonedList.push({ 
            ...participant,
            name,
            // New ID assigned for the encounter so we can diffrentiate between same type of instances
            id: uuid4()
        })

        participants = clonedList
    }

    const removeParticipant = (participant: Combatant) => {
        participants = participants.filter(p => p.id !== participant.id)
    }
</script>

{#if !encounterStarted}
    <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1 flex flex-col gap-2">
            <Title text="Combatants" />
            {#if data.combatants.length === 0}
                <p class="text-gray-500">Add some NPCs</p>
            {/if}
            {#each data.combatants as instance}
                <AddToEncounter name={instance.name} onAdd={() => addParticipant(instance)} />
            {/each}
            <Title text="Templates" />
            {#each data.templates as instance}
                <AddToEncounter name={instance.name} onAdd={() => addParticipant(templateToCombatant(instance))} />
            {/each}
        </div>
        <div class="col-span-2 flex flex-col max-h-fit overflow-y-auto gap-2">
            <Title text="Encounter" />
            {#if participants.length === 0}
                <p class="text-gray-500">Add participants</p>
            {/if}
            {#each participants as participant}
                <Participant participant={participant} onRemove={() => removeParticipant(participant)} />
            {/each}
        </div>
    </div>
    <Button class="fixed right-5 bottom-5 w-22" variant='raised' on:click={() => encounterStarted = true}>Start Encounter!</Button>
{/if}

{#if encounterStarted}
    <Encounter encounter={{ participants: participants.map(p => ({ combatant: p })) }} />
    <Button class="fixed right-5 bottom-5 w-22" variant='raised' on:click={() => encounterStarted = false}>Stop</Button>
{/if}
