<script lang="ts">
    import Education from '$lib/components/Education.svelte';
    import Experience from '$lib/components/Experience.svelte';
    import HeroPanel from '$lib/components/HeroPanel.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import type { Lang } from '$lib/i18n';

    let lang = $state<Lang>('pt');
</script>
<Navbar {lang} onLangChange={(l: Lang) => (lang=l)} />

<main class="mx-auto max-w-6xl px-6 py-4">
    <div class="grid gap-12 lg:grid-cols-[320px_1fr]">
        <aside class="lg:sticky lg:top-28 lg:self-start">
            <HeroPanel {lang}/>
        </aside>
        <div>
            <section id="formacao" class=" scroll-mt-24 col-2">
                <Education {lang}/>
            </section>
            <section id="experiencia" class=" scroll-mt-24 col-2">
                <Experience {lang}/>
            </section>
            <section id="competencias" class="py-20 scroll-mt-24"><h2 class="text-rose-2 text-2xl">Competências</h2></section>
            <section id="portfolio" class="py-20 scroll-mt-24"><h2 class="text-rose-2 text-2xl">Portfólio</h2></section>
            <section id="sobre" class="py-20 scroll-mt-24"><h2 class="text-rose-2 text-2xl">Sobre o João</h2></section>
        </div>
    </div>
</main>