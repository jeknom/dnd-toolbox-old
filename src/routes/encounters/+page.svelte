<script lang="ts">
	import type EncounterParticipant from '$lib/types/EncounterParticipant.js';
	import Participant from '$lib/components/EncounterParticipant.svelte';
	import AddToEncounter from '$lib/components/AddToEncounter.svelte';
	import randomRange from '$lib/utils/randomRange.js';
    import { v4 as uuid4 } from 'uuid'
	import type NpcInstance from '$lib/types/NpcInstance.js';
	import sortAlphabetical from '$lib/utils/sortAlphabetical.js';
	import Title from '$lib/components/Title.svelte';
	import Button from '@smui/button';

    export let data;
    export let participants: EncounterParticipant[] = [];

    const instanceToParticipant = ({ name, expand, description }: NpcInstance) => ({
        id: uuid4(),
        name: name,
        initiative: randomRange(1, 20),
        npcTemplate: expand.template,
        description: description,
    })

    const addParticipant = (participant: EncounterParticipant) => {
        const clonedList = structuredClone(participants)
        clonedList.push(participant)
        clonedList.sort((a, b) => sortAlphabetical(a.name, b.name))

        participants = clonedList
    }

    const removeParticipant = (participant: EncounterParticipant) => {
        participants = participants.filter(p => p.id !== participant.id)
    }
</script>


<div class="grid grid-cols-3 gap-4">
    <div class="col-span-1 flex flex-col gap-4">
        <div>
            <Title text="Players" />
            {#if true}
                <p class="text-gray-500">Add some players</p>
            {/if}
        </div>
        <div>
            <Title text="NPCs" />
            {#if data.instances.length === 0}
                <p class="text-gray-500">Add some NPCs</p>
            {/if}
            {#each data.instances as instance}
                <AddToEncounter name={instance.name} onAdd={() => addParticipant(instanceToParticipant(instance))} />
            {/each}
        </div>
    </div>
    <div class="col-span-2 flex flex-col max-h-fit overflow-y-auto">
        <Title text="Encounter" />
        {#if participants.length === 0}
            <p class="text-gray-500">Add participants</p>
        {/if}
        {#each participants as participant}
            <Participant participant={participant} onRemove={() => removeParticipant(participant)} />
        {/each}
    </div>
</div>

<Button class="fixed right-5 bottom-5 w-22" variant='raised'>Start Encounter!</Button>
