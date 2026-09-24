<script lang="ts">
    import {translations, type Lang} from '$lib/i18n';

    let { lang, onLangChange}: {lang: Lang; onLangChange: (l: Lang) => void} =$props();

    let t = $derived(translations[lang]);
    let links = $derived([
        {label: t.nav.formacao, href: '#formacao'},
        {label: t.nav.experiencia, href: '#experiencia'},
        {label: t.nav.competencias, href: '#competencias'},
        {label: t.nav.portfolio, href: '#portfolio'},
        {label: t.nav.sobre, href: '#sobre'},
    ]);
</script>

<header class="sticky top-0 z-50 bg-brown">
    <div class="mx-auto flex max-w-6xl justify-between items-end px-6 pt-4 pb-4">
        <!-- LEFT: fixed name -->
        <a href="#top" class="text-4xl font-semibold text-cream">{t.hero?.name ?? 'João Paz'}</a>
        <nav class="flex flex-col items-end gap-1">
            <div class="flex gap-2 text-sm tracking-widest">
                <button
                    onclick={() => onLangChange('pt')}
                    class="transition-colors {lang === 'pt' ? 'text-cream underline underline-offset-4' : 'text-rose-3 hover:text-cream'}"
                >PT</button>
                <button
                    onclick={() => onLangChange('en')}
                    class="transition-colors {lang === 'en' ? 'text-cream underline underline-offset-4' : 'text-rose-3 hover:text-cream'}"
                >EN</button>
            </div>
            <ul class="flex flex-wrap justify-end gap-x-6 gap-y-2 text-cream">
                {#each links as link}
                    <li class="hidden md:block"><a href={link.href} class="hover:text-rose transition-colors">{link.label}</a></li>
                {/each}
            </ul>
        </nav>
    </div>
</header>
