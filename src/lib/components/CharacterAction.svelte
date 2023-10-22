<script lang="ts">
	import type CombatantAction from "$lib/types/CombatantAction";
	import DiceIndicator from "./DiceIndicator.svelte";

    export let action: CombatantAction;
</script>

<div class="flex items-center justify-between bg-cyan-900 bg-opacity-30 p-1">
    <p>{action.name}</p>
    {#if action.diceNotation}
        <DiceIndicator diceNotation={action.diceNotation} />
    {/if}
</div>
