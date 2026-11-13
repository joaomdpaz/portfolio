<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import CursorGlow from '$lib/components/CursorGlow.svelte';
	import favicon from '$lib/assets/favicon.svg';
    import BackToTop from '$lib/components/BackToTop.svelte';
    import { locale } from '$lib/locale.svelte';
	import type {Lang} from '$lib/i18n';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar lang={locale.lang} onLangChange={(l: Lang) => (locale.lang=l)}/>
<BackToTop/>
<CursorGlow/>

{@render children()}

