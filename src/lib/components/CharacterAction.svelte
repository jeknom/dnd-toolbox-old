<script lang="ts">
	import type CharacterAction from "$lib/types/CharacterAction";
	import DiceIndicator from "./DiceIndicator.svelte";

    export let action: CharacterAction;
</script>

<div class="flex items-center justify-between bg-cyan-900 bg-opacity-30 p-1">
    <p>{action.name}</p>
    {#if action.diceNotation}
        <DiceIndicator diceNotation={action.diceNotation} />
    {/if}
</div>
