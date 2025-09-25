import { ResourceKey, ResourceLanguage } from 'i18next';

const languages = import.meta.glob('./*.json', { base: '../languages', import: 'default', eager: true });
const resources = Object.entries(languages).reduce((acc, [key, value]) => {
    acc[key.replace('./', '').replace('.json', '')] = value as ResourceKey;
    return acc;
}, {} as ResourceLanguage);

export { resources };
