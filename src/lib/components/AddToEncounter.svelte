<script lang="ts">
	import Button from "@smui/button";
	import Card from "@smui/card";

    export let name: string
    export let isPlayer: boolean
    export let onAdd: () => void
</script>

<Card padded class="flex flex-row justify-between items-center">
    <div class="flex flex-col gap-2">
        <p>{name}</p>
        {#if isPlayer}<p class="font-bold text-green-400">Player</p>{/if}
        {#if !isPlayer}<p class="font-bold text-yellow-400">NPC</p>{/if}
    </div>
    <Button on:click={onAdd}>Add</Button>
</Card>