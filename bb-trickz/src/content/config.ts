// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const artists = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean(),
    img: z.object({ src: z.string(), alt: z.string() }),
    img2: z.object({ src: z.string(), alt: z.string() }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: artists,
};
