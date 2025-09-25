import { Resource, ResourceLanguage } from 'i18next';

const languages = import.meta.glob('./*.json', { base: '../languages', import: 'default', eager: true });
const resources = Object.entries(languages).reduce<Resource>((acc, [key, value]) => {
    acc[key.replace('./', '').replace('.json', '')] = value as ResourceLanguage;
    return acc;
}, {});

export { resources };
