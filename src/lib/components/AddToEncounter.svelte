<script lang="ts">
	import Button from "@smui/button";
	import Card from "@smui/card";

    export let name: string
    export let onAdd: () => void
</script>

<Card padded class="flex flex-row justify-between items-center">
    <p>{name}</p>
    <Button on:click={onAdd}>Add</Button>
</Card>