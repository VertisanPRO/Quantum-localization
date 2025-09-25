import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['./scripts/convert.ts'],
    platform: 'node',
    external: ['bun'],
});
