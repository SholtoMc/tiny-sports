import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdoc from '@markdoc/markdoc'
import { Calendar, MapPin, DollarSign, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { reader } from '@/lib/keystatic/reader'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { StatusBadge } from '@/components/grants/status-badge'
import { MarkdocRenderer } from '@/components/blog/markdoc-renderer'
import { Button } from '@/components/ui/button'

const stateLabels: Record<string, string> = {
  national: 'National',
  nsw: 'New South Wales',
  vic: 'Victoria',
  qld: 'Queensland',
  wa: 'Western Australia',
  sa: 'South Australia',
  tas: 'Tasmania',
  act: 'ACT',
  nt: 'Northern Territory',
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const grants = await reader.collections['grant-guides'].all()
  return grants.map((grant) => ({ slug: grant.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const grant = await reader.collections['grant-guides'].read(slug)
  if (!grant) return { title: 'Grant Not Found' }

  return {
    title: grant.title,
    description: grant.excerpt || undefined,
  }
}

export default async function GrantPage({ params }: PageProps) {
  const { slug } = await params
  const grant = await reader.collections['grant-guides'].read(slug, {
    resolveLinkedFiles: true,
  })

  if (!grant) notFound()

  const content = grant.content.node
  const rendered = Markdoc.transform(content)

  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Grants', href: '/grants' }, { label: grant.title }]}
        />

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <StatusBadge
              status={grant.status as 'open' | 'closed' | 'upcoming'}
            />
            <span className="text-muted-foreground flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4" />
              {stateLabels[grant.state] || grant.state}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {grant.title}
          </h1>

          {grant.excerpt && (
            <p className="text-muted-foreground mt-4 text-lg">
              {grant.excerpt}
            </p>
          )}

          <div className="bg-muted/30 mt-6 flex flex-wrap gap-6 rounded-lg border p-4">
            {grant.amount && (
              <div className="flex items-center gap-2">
                <DollarSign className="text-primary h-5 w-5" />
                <div>
                  <p className="text-muted-foreground text-xs">Amount</p>
                  <p className="font-semibold">{grant.amount}</p>
                </div>
              </div>
            )}
            {grant.deadline && (
              <div className="flex items-center gap-2">
                <Calendar className="text-primary h-5 w-5" />
                <div>
                  <p className="text-muted-foreground text-xs">Deadline</p>
                  <p className="font-semibold">
                    {new Date(grant.deadline).toLocaleDateString('en-AU', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <MarkdocRenderer content={rendered} />

        {/* CTA */}
        <div className="mt-12 rounded-lg border bg-teal-50 p-8 text-center">
          <h2 className="text-xl font-bold">Need help with this grant?</h2>
          <p className="text-muted-foreground mt-2">
            Tiny Sports can help you prepare a strong application.
          </p>
          <Button asChild className="mt-4">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
