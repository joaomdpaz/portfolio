<script lang="ts">
    import {translations, type Lang} from '$lib/i18n';
    let {lang}: {lang: Lang} = $props();
    let t = $derived(translations[lang].skills);
    const iconModules = import.meta.glob<string>('../assets/*.png', { eager: true, query: '?url', import: 'default' });
const iconUrl = (name: string): string => iconModules[`../assets/${name}`] ?? '';
</script>

<div>
    <p class="text-3xl font-semibold text-rose-2 text-right">{t.title}</p>
    <div class="group grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 mt-5 rounded-xl p-4 md:p-5 ring-1 ring-transparent transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out motion-safe:hover:-translate-y-1 hover:bg-rose-1/25 hover:shadow-[0_10px_40px_-10px_rgb(255,188,213,0.35)] hover:ring-rose-1/40">
        {#each t.items as items}
            <div class="md:row-1 bg-cream-2 rounded-xl">
                <p class="text-base leading-relaxed text-cream text-center m-3">{items.title}</p>
                <img src={iconUrl(items.iconName)} alt="icon" class="w-12 h-12 mx-auto object-contain" />
                <p class="text-sm leading-relaxed text-brown text-center m-3">{items.text}</p>
            </div>
        {/each}
        <div class="md:row-2 md:col-span-3 bg-cream-2 rounded-xl p-5">
            <ul class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1 list-disc list-inside">
                {#each t.techCheck as techCheck}
                    <li class="text-sm leading-relaxed text-brown">{techCheck}</li>
                {/each}
            </ul>
        </div>
        <div class="md:row-3 md:col-span-3 bg-cream-2 rounded-xl p-5 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
            {#each t.languageSkills as languageSkills}
                <div class="grid grid-rows-2">
                    <p class="text-sm text-brown leading-relaxed row-1 text-left font-semibold">{languageSkills.lang}</p>
                    <p class="text-sm text-brown leading-relaxed row-2 text-left">{languageSkills.level}</p>
                </div>
            {/each}
        </div>
    </div>
</div>