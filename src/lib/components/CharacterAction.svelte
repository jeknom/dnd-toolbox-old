<script lang="ts">
	import type CombatantAction from "$lib/types/CombatantAction";
	import DiceIndicator from "./DiceIndicator.svelte";

    export let action: CombatantAction;
</script>

<div class="flex flex-col gap-2">
    <div class="flex items-center justify-between gap-2 bg-opacity-30 p-1">
        <p><span class="font-bold">{action.name}</span></p>
        {#if action.hitDice}
            <p>|</p>
            <p>Hit: </p><DiceIndicator diceNotation={action.hitDice} />
        {/if}
        {#if action.damageDice}
            <p>|</p>
            <p>Dmg: </p><DiceIndicator diceNotation={action.damageDice} />
        {/if}
    </div>
    <p class="font-thin">{action.description ?? 'No description'}</p>
</div>
