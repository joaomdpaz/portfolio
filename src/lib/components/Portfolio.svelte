<script lang="ts">
    import {translations, type Lang} from '$lib/i18n';
    let {lang}: {lang: Lang} = $props();
    let t = $derived(translations[lang].portfolio);
    import {coverUrl} from '$lib/images';
</script>

<div>
    <p class="text-3xl font-semibold text-rose-2 text-right mb-4">{t.title}</p>
    {#each t.items as item}
    <div class="group grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-2 md:gap-x-6 overflow-hidden rounded-xl px-5 pt-5 pb-5 mb-5 ring-1 ring-transparent transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out motion-safe:hover:-translate-y-1 hover:bg-rose-1/25 hover:shadow-[0_10px_40px_-10px_rgb(255,188,213,0.35)] hover:ring-rose-1/40">
    <div class="md:col-1">
        <img src={coverUrl(item.photoName)} alt={item.title}
        class="w-32 h-32 object-cover rounded-lg group-hover:scale-[1.03] transition-transform duration-300 ease-out" />
    </div>
    <div class="md:col-2 md:text-right space-y-1 overflow-hidden">
        <p class="text-base text-rose-2 group-hover:text-rose-3 transition-colors truncate">{item.title}</p>
        <p class="text-sm text-rose-3 leading-relaxed  group-hover:text-brown transition-colors line-clamp-3">{item.description}</p>
    </div>
    </div>
    {/each}
</div>