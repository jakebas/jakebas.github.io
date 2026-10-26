import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
export const collections = { writing: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/writing' }), schema: z.object({ title: z.string(), description: z.string().optional(), date: z.coerce.date(), draft: z.boolean().default(false) }) }) };
