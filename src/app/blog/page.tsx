import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { reader } from '@/lib/keystatic/reader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Tips, guides, and insights for Australian community sports clubs on grants, branding, and club management.',
}

export default async function BlogPage() {
  const posts = await reader.collections.posts.all()

  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0
    const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0
    return dateB - dateA
  })

  return (
    <div>
      {/* Hero */}
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Tips, guides, and insights to help your club thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">
                        {post.entry.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {post.entry.excerpt && (
                        <p className="text-muted-foreground mb-4 text-sm">
                          {post.entry.excerpt}
                        </p>
                      )}
                      <div className="text-muted-foreground flex items-center gap-4 text-sm">
                        {post.entry.date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.entry.date).toLocaleDateString(
                              'en-AU',
                              {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              }
                            )}
                          </span>
                        )}
                        {post.entry.author && (
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.entry.author}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center">
              No blog posts yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
