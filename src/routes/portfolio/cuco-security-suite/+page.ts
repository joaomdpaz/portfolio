import { error } from '@sveltejs/kit';
import { translations } from '$lib/i18n';
import type { EntryGenerator} from './$types';

export const entries: EntryGenerator = () {
    return translations.pt.portfolio.items.map((item) => ({ slug: item.slug }));
}

export function load({params}) {
    const {slug} = params;
    const found = translations.pt.portfolio.items.find((i) => i.slug === slug);
    if (!found) error(404, `Page not found`);
    return { slug };
}