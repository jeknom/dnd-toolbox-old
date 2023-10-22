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

    const addAllPlayers = () => {
        for (const player of data.combatants.filter(c => c.isPlayer)) {
            addParticipant(player)
        }
    }

    const removeParticipant = (participant: Combatant) => {
        participants = participants.filter(p => p.id !== participant.id)
    }
</script>

{#if !encounterStarted}
    <div class="grid grid-cols-6 gap-4 h-[95vh]">
        <div class="col-span-2 flex flex-col gap-2 overflow-y-auto px-4">
            <Title text="NPCs" />
            {#if data.combatants.length === 0}
                <p class="text-gray-500">Add some NPCs</p>
            {/if}
            {#each data.combatants.filter(c => !c.isPlayer) as instance (instance.id)}
                <AddToEncounter name={instance.name} isPlayer={instance.isPlayer} onAdd={() => addParticipant(instance)} />
            {/each}
            <Title text="Players" />
            <div>
                <Button on:click={addAllPlayers}>Add players</Button>
            </div>
            {#each data.combatants.filter(c => c.isPlayer) as instance (instance.id)}
                <AddToEncounter name={instance.name} isPlayer={instance.isPlayer} onAdd={() => addParticipant(instance)} />
            {/each}
            <Title text="Templates" />
            {#each data.templates as instance (instance.id)}
                <AddToEncounter name={instance.name} isPlayer={false} onAdd={() => addParticipant(templateToCombatant(instance))} />
            {/each}
        </div>
        <div class="col-span-4 flex flex-col max-h-fit overflow-y-auto gap-2">
            <Title text="Encounter" />
            {#if participants.length === 0}
                <p class="text-gray-500">Add participants</p>
            {/if}
            {#each participants as participant (participant.id)}
                <Participant participant={participant} onRemove={() => removeParticipant(participant)} />
            {/each}
        </div>
    </div>
    <Button class="fixed right-5 bottom-5 w-22" variant='raised' on:click={() => encounterStarted = true}>Start Encounter!</Button>
{/if}

{#if encounterStarted}
    <Encounter encounter={{ participants: participants.map(p => ({ combatant: p })) }} onStopEncounter={() => encounterStarted = false} />
{/if}
