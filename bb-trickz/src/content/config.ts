// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const artists = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string().max(60),
    artist: z.string(),
    description: z.string().max(120),
    date: z.date(),
    draft: z.boolean(),
    img: z.object({ src: z.string(), alt: z.string() }).optional(),
    img2: z.object({ src: z.string(), alt: z.string() }).optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = { artists };
