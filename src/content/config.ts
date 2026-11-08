import { defineCollection, z } from 'astro:content';

const localizedString = z.object({
  en: z.string(),
  fr: z.string()
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: localizedString,
    slug: z.string(),
    categories: z.array(z.string()),
    type: z.enum(['film', 'book', 'storyboard']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    status: z.enum(['published', 'draft']).default('published'),
    summary: localizedString,
    description: localizedString,
    role: localizedString,
    credits: z.array(z.object({
      role: z.string(),
      name: z.string()
    })).default([]),
    images: z.array(z.object({
      src: z.string(),
      alt: localizedString,
      width: z.number(),
      height: z.number(),
      caption: localizedString.optional(),
      ratio: z.string().optional()
    })).default([]),
    videos: z.array(z.object({
      platform: z.string(),
      id: z.string(),
      title: z.string().optional()
    })).default([]),
    links: z.array(z.object({
      label: localizedString,
      url: z.string()
    })).default([]),
    relatedProducts: z.array(z.string()).default([]),
    seo: z.object({
      title: localizedString,
      description: localizedString,
      ogImage: z.string().optional()
    })
  }).passthrough()
});

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: localizedString,
    slug: z.string(),
    type: z.enum(['print', 'merch', 'book', 'digital']),
    categories: z.array(z.string()),
    description: localizedString,
    details: z.object({
      dimensions: z.string().optional(),
      material: z.string().optional(),
      finish: z.string().optional(),
      year: z.string().optional()
    }).default({}),
    variants: z.array(z.object({
      name: localizedString,
      priceXof: z.union([z.number(), z.string()]),
      sku: z.string().optional(),
      fedapayUrl: z.string().optional()
    })).default([]),
    currency: z.literal('XOF').default('XOF'),
    availability: z.enum(['available', 'coming-soon', 'pre-order', 'unavailable', 'sold', 'limited']).default('coming-soon'),
    fulfillment: z.object({
      method: z.string().default('print-on-demand'),
      provider: z.string().default('[À CHOISIR]'),
      productionDays: z.union([z.number(), z.string()]).default('[À REMPLIR]')
    }).default({
      method: 'print-on-demand',
      provider: '[À CHOISIR]',
      productionDays: '[À REMPLIR]'
    }),
    edition: z.string().default('open'),
    stock: z.union([z.number(), z.string()]).default(''),
    images: z.array(z.object({
      src: z.string(),
      alt: localizedString,
      width: z.number(),
      height: z.number(),
      ratio: z.string().optional()
    })).default([]),
    relatedSeries: z.string().optional(),
    shippingProfile: z.string().default('standard'),
    checkout: z.object({
      mode: z.enum(['external', 'request', 'none']).default('none'),
      url: z.string().default('')
    }),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    published: z.boolean().default(true),
    seo: z.object({
      title: localizedString,
      description: localizedString,
      ogImage: z.string().optional()
    })
  }).passthrough()
});

export const collections = {
  projects: projectsCollection,
  products: productsCollection
};
