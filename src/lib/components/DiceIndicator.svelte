<script lang="ts">
    import Button from "@smui/button";
	import type DiceNotation from "$lib/types/DiceNotation";
	import randomRange from "$lib/utils/randomRange";

    export let diceNotation: DiceNotation
    
    let lastRoll: number | null = null

    let diceString = `${diceNotation.multiplier}d${diceNotation.die}`
    if (diceNotation.bonus !== undefined) {
        diceString = `${diceString} +${diceNotation.bonus}`
    }

    function roll() {
        let total = 0;
        for (let i = 0; i < diceNotation.multiplier ?? 0; i++) {
            total += randomRange(1, diceNotation.die);
        }

        if (diceNotation.bonus !== undefined) {
            total += diceNotation.bonus
        }

        lastRoll = total
    }
</script>

<Button on:click={roll}>
    {diceString}
    {#if lastRoll !== null}
        = {lastRoll}
    {/if}
</Button>