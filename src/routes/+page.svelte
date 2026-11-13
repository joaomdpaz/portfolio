<script lang="ts">
    import {locale} from '$lib/locale.svelte';
    import Education from '$lib/components/Education.svelte';
    import Experience from '$lib/components/Experience.svelte';
    import Skills from '$lib/components/Skills.svelte'
    import Portfolio from '$lib/components/Portfolio.svelte'
    import HeroPanel from '$lib/components/HeroPanel.svelte';
    import type { Lang } from '$lib/i18n';
    
    let lang = $state<Lang>(locale.lang);
</script>

<main class="mx-auto max-w-6xl px-6 py-4">
    <div class="grid gap-12 lg:grid-cols-[320px_1fr]">
        <aside class="lg:sticky lg:top-24 lg:self-start">
            <HeroPanel {lang}/>
        </aside>
        <div>
            <section id="formacao" class=" scroll-mt-24 col-2">
                <Education {lang}/>
            </section>
            <section id="experiencia" class=" scroll-mt-24 col-2">
                <Experience {lang}/>
            </section>
            <section id="competencias" class=" scroll-mt-24 col-2">
                <Skills {lang}/>
            </section>
            <section id="portfolio" class=" scroll-mt-24 col-2">
                <Portfolio {lang}/>
            </section>
        </div>
    </div>
</main>