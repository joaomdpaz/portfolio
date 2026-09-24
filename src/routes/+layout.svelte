<script lang="ts">
	import './layout.css';
	import CursorGlow from '$lib/components/CursorGlow.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<CursorGlow/>
{@render children()}
