<script>
	import "../app.css";
	import Button, { Label, Group } from '@smui/button'
</script>

<header class="fixed flex justify-between items-center h-10 bg-zinc-800 w-full z-10 opacity-90">
	<p class="px-2">DnD Toolbox</p>
	<nav class="flex gap-2 justify-center py-6">
		<Group variant="outlined">
			<Button href="/" variant="outlined">
				<Label>Home</Label>
			</Button>	
			<Button href="/encounters" variant="outlined">
				<Label>Encounters</Label>
			</Button>
		</Group>
	</nav>
	<p class="pr-2">@jeknom</p>
</header>

<div class="p-4 pt-12">
	<slot />
</div>	