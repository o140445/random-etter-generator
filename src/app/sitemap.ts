import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.random-letter-generator.com'
  const languages = ['', '/de', '/fr', '/it', '/es', '/pt', '/ja', '/ko']
  const currentDate = new Date()

  // 主页（所有语言版本）
  const homePages = languages.map(lang => ({
    url: `${baseUrl}${lang}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 1,
  }))

  // 博客页面
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/why-use-a-random-letter-generator`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-generate-random-letters-in-python`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/random-letters-vs-random-words`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/creative-classroom-activities-using-random-letter-generator`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-random-letters-can-boost-your-brainpower`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ]

  // 法律页面
  const legalPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  return [
    ...homePages,
    ...blogPages,
    ...legalPages,
  ]
} 