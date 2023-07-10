// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const artists = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string().max(20),
    artist: z.string(),
    description: z.string().max(160),
    genre: z.string().optional(),
    date: z.date(),
    draft: z.boolean().optional(),
    state: z.boolean().optional(),
    img: z.object({ src: z.string(), alt: z.string() }).optional(),
    img2: z.object({ src: z.string(), alt: z.string() }).optional(),
    img3: z.object({ src: z.string(), alt: z.string() }).optional(),
    video: z.object({ src: z.string(), alt: z.string() }).optional(),
    socials: z
      .object({
        instagram: z.number(),
        tiktok: z.number(),
        spotify: z.number(),
        twitter: z.number(),
      })
      .optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = { artists };
