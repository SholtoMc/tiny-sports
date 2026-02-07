import type { MetadataRoute } from 'next'
import { reader } from '@/lib/keystatic/reader'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://tinysports.com.au'

  const staticPages = [
    '',
    '/about',
    '/services',
    '/grants',
    '/impact',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const grants = await reader.collections['grant-guides'].all()
  const grantPages = grants.map((grant) => ({
    url: `${baseUrl}/grants/${grant.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const posts = await reader.collections.posts.all()
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.entry.date ? new Date(post.entry.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...grantPages, ...blogPages]
}
