import Bun from 'bun';

const original = import.meta.glob('./**/*.ts', { base: '../src/translations', import: 'translations', eager: true });
const translations = Object.entries(original).reduce(
    (acc, [key, value]) => {
        acc[key.replace('./', '').replace('.ts', '')] = value;
        return acc;
    },
    {} as Record<string, unknown>,
);

Bun.write('./languages/en_US.json', JSON.stringify(translations));
