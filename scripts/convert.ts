import Bun from 'bun';
import { Resource, ResourceLanguage } from 'i18next';

const original = import.meta.glob('./**/*.ts', { base: '../src/translations', import: 'translations', eager: true });
const translations = Object.entries(original).reduce<Resource>((acc, [key, value]) => {
    acc[key.replace('./', '').replace('.ts', '')] = value as ResourceLanguage;
    return acc;
}, {});

Bun.write('./languages/en_US.json', JSON.stringify(translations));
