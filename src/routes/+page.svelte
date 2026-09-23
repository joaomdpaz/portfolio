<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import type { Lang } from '$lib/i18n';

    let lang = $state<Lang>('pt');
</script>
<Navbar {lang} onLangChange={(l: Lang) => (lang=l)} />

<main class="mx-auto max-w-6xl px-6">
    <section id="formacao" class="py-20 scroll-mt-24"><h2 class="text-rose text-2xl">Formação</h2></section>
    <section id="experiencia" class="py-20 scroll-mt-24"><h2 class="text-rose text-2xl">Experiência Profissional</h2></section>
    <section id="competencias" class="py-20 scroll-mt-24"><h2 class="text-rose text-2xl">Competências</h2></section>
    <section id="portfolio" class="py-20 scroll-mt-24"><h2 class="text-rose text-2xl">Portfólio</h2></section>
    <section id="sobre" class="py-20 scroll-mt-24"><h2 class="text-rose text-2xl">Sobre o João</h2></section>
</main>