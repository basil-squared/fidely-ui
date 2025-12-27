import type { MetadataRoute } from 'next'
import { docs } from '~/.velite'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fidely-ui.vercel.app'

  const docsPages: MetadataRoute.Sitemap = docs.map((doc) => ({
    url: `${baseUrl}/docs/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      priority: 0.9,
    },
    ...docsPages,
  ]
}
