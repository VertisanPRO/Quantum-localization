import Bun from 'bun';
import { ResourceKey, ResourceLanguage } from 'i18next';

const original = import.meta.glob('./**/*.ts', { base: '../src/translations', import: 'translations', eager: true });
const translations = Object.entries(original).reduce((acc, [key, value]) => {
    acc[key.replace('./', '').replace('.ts', '')] = value as ResourceKey;
    return acc;
}, {} as ResourceLanguage);

Bun.write('./languages/en_US.json', JSON.stringify(translations));
