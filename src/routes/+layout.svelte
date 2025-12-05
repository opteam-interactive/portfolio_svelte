<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<div class="flex flex-col flex-1 border p-2 m-2 rounded">
		{@render children()}
	</div>
	<footer>Footer</footer>
</div>
