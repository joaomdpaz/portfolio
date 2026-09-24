<script lang="ts">
    import {translations, type Lang} from '$lib/i18n';

    let {lang}: {lang: Lang} = $props();
    let t = $derived(translations[lang].experience);
</script>

<div>
    <p class="text-3xl font-semibold text-rose-2 text-right">{t.title}</p>
     {#each t.items as item}
     <div class="grid grid-cols-[1fr_4fr] gap-x-2 mb-6 mt-4">
        <div class="text-right col-2 row-1">
            <p class="text-base text-rose-2 leading-relaxed">{item.role}</p>

        </div>
        <div class="text-left col-1 row-2">
            <p class="text-sm text-rose-2 leading-relaxed">
                {item.yearStart} - {item.yearEnd}
            </p>
        </div>
        <div class="text-right col-2 row-2">
            <p class="text-sm text-rose-2 leading-relaxed">{item.company}</p>
        </div>
        <div class="text-right col-2 row-3">
            {#each item.descriptions as description }
                <p class="text-sm text-rose-3 leading-relaxed">{description}</p>
            {/each}
        </div>
     </div>
     {/each}
</div>