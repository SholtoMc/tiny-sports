import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdoc from '@markdoc/markdoc'
import { Calendar, User } from 'lucide-react'
import { reader } from '@/lib/keystatic/reader'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { MarkdocRenderer } from '@/components/blog/markdoc-renderer'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await reader.collections.posts.all()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await reader.collections.posts.read(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.excerpt || undefined,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await reader.collections.posts.read(slug, {
    resolveLinkedFiles: true,
  })

  if (!post) notFound()

  const content = post.content.node
  const rendered = Markdoc.transform(content)

  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]}
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="text-muted-foreground mt-4 flex items-center gap-4 text-sm">
            {post.date && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-AU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            )}
            {post.author && (
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <MarkdocRenderer content={rendered} />
      </div>
    </div>
  )
}
