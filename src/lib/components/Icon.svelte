<script lang="ts">
	const { icon, size = 20, color = 'currentColor' } = $props();
</script>

<!-- Remove class="stroke-white" - use stroke prop instead -->
<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke={color}
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	{@html icon}
</svg>
