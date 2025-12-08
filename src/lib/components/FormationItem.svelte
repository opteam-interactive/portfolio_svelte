<script lang="ts">
	import { slide } from 'svelte/transition';
	type Props = {
		title: string;
		year: string;
		location: string;
		description: string;
		details?: string;
	};

	const { title, location, year, description, details } = $props();
	let detailsOpen = $state(false);
</script>

<div class="flex flex-col" onclick={() => (detailsOpen = !detailsOpen)}>
	<div class="flex text-xl gap-2">
		<p class="opacity-50">{year}</p>
		<span>-</span>
		<h3>{title}</h3>
	</div>
	<p>{location}</p>
	<p>{description}</p>
	{#if detailsOpen}
		<div transition:slide>
			<p>
				{details}
			</p>
		</div>
	{/if}
</div>

<style>
</style>
