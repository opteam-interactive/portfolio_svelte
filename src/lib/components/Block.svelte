<script lang="ts">
	type Props = {
		title: string;
		icon?: any;
		children?: any;
		color?: string;
	};
	const { title, icon, color, children }: Props = $props();

	const hoverClasses = {
		teal: 'hover:border-teal-500',
		purple: 'hover:border-fuchsia-500',
		pink: 'hover:border-pink-500',
		emerald: 'hover:border-emerald-300',
		cyan: 'hover:border-cyan-500',
		indigo: 'hover:border-indigo-500'
	};
</script>

<section class="border rounded m-2 p-2 flex flex-col transition {hoverClasses[color] || ''}">
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
