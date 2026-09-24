<script lang="ts">
    import {translations, type Lang} from '$lib/i18n';
    let {lang}: {lang: Lang} = $props();
    let t = $derived(translations[lang].education);
</script>

<div>
    <p class="text-3xl font-semibold text-rose-2 text-right">{t.title}</p>
    {#each t.items as item}
    <div class="grid grid-cols-[1fr_4fr] grid-rows-2 gap-x-2 mb-6 mt-4">
        <div class="text-left col-1 row-1">
            <p class="text-sm text-rose-2 leading-relaxed">
                {item.yearStart} - {item.yearEnd}
            </p>
        </div>
        <div class="text-right col-2 row-1">
            <p class="text-sm text-rose-2 leading-relaxed">
                {item.school}
            </p>
        </div>
        <div class="text-right col-2 row-2">
            <p class="text-sm text-rose-3 leading-relaxed">
                {item.name}
            </p>
        </div>
    </div>
    {/each}
</div>