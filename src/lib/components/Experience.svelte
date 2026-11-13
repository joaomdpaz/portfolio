<script lang="ts">
    import {translations, type Lang} from '$lib/i18n';

    let {lang}: {lang: Lang} = $props();
    let t = $derived(translations[lang].experience);
</script>

<div>
    <p class="text-3xl font-semibold text-rose-2 text-right">{t.title}</p>
     {#each t.items as item}
     <div class="group grid grid-cols-[1fr_4fr] gap-x-2 mb-4 mt-4 rounded-xl p-4 md:p-5 ring-1 ring-transparent transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out motion-safe:hover:-translate-y-1 hover:bg-rose-1/25 hover:shadow-[0_10px_40px_-10px_rgb(255,188,213,0.35)] hover:ring-rose-1/40">
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