const coverModules = import.meta.glob<string>('./assets/portfolio/covers/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const galleryModules = import.meta.glob<string>('./assets/portfolio/gallery/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });

export const coverUrl = (name: string): string => coverModules[`./assets/portfolio/covers/${name}`] ?? '';
export const galleryUrl = (name: string): string => galleryModules[`./assets/portfolio/gallery/${name}`] ?? '';