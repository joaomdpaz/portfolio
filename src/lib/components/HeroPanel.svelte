<script lang="ts">
    import {translations, type Lang} from '$lib/i18n';
    import photo from '$lib/assets/heroPhoto.jpeg';
    let {lang}: {lang: Lang} = $props();
    let t = $derived(translations[lang].hero);
</script>


<div class="space-y-2">
    <div class="space-y-1 text-2xl font-semibold text-rose-2">
        {#each t.roles as role}<p>{role}</p>{/each}
    </div>
    <img src={photo} alt={t.photoAlt} class="aspect-square w-full max-w-70 object-cover rounded-xl"/>
    <p class="max-w-70 text-sm leading-relaxed text-rose-3">{t.desc}</p>
</div>