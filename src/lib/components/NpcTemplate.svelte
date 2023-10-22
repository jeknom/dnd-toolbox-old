<script lang="ts">
	import CharacterAction from "./CharacterAction.svelte";
	import type NpcTemplate from "$lib/types/NpcTemplate";

    export let template: NpcTemplate
</script>

<div>
    <p>AC {template.ac} | HP {template.hp}</p>
    <p class="text-xs">STR {template.str} | DEX {template.dex} | CON {template.con} | WIS {template.wis} | INT {template.int} | CHA {template.cha}</p>
    {#if template?.expand?.actions !== undefined}
        {#each template.expand.actions as action}
            <CharacterAction action={action} />
        {/each}
    {/if}
</div>