<script lang="ts">
	type Props = {
		title: string;
		icon?: any;
		children?: any;
	};
	const { title, icon, children }: Props = $props();
</script>

<section class="border rounded m-2 p-2 flex flex-col">
	<div class="flex items-center gap-2">
		{#if icon}
			<svelte:component this={icon} size={20} />
		{/if}
		<h2 class="text-2xl font-semibold mb-1">{title || 'Default title'}</h2>
	</div>

	{#if children}
		{@render children()}
	{:else}
		<p>fallback content</p>
	{/if}
</section>
