import type { Metadata } from 'next'
import { reader } from '@/lib/keystatic/reader'
import { GrantCard } from '@/components/grants/grant-card'

export const metadata: Metadata = {
  title: 'Grant Guides',
  description:
    'Browse Australian sport grants with eligibility info, deadlines, and step-by-step application guides.',
}

export default async function GrantsPage() {
  const grants = await reader.collections['grant-guides'].all()

  const sortedGrants = grants.sort((a, b) => {
    const statusOrder = { open: 0, upcoming: 1, closed: 2 }
    const statusA = statusOrder[a.entry.status as keyof typeof statusOrder] ?? 3
    const statusB = statusOrder[b.entry.status as keyof typeof statusOrder] ?? 3
    return statusA - statusB
  })

  return (
    <div>
      {/* Hero */}
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Grant Guides
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Curated guides for Australian sports grants. Find the right
              funding for your club and get step-by-step application help.
            </p>
          </div>
        </div>
      </section>

      {/* Grant listing */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sortedGrants.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedGrants.map((grant) => (
                <GrantCard
                  key={grant.slug}
                  slug={grant.slug}
                  title={grant.entry.title}
                  state={grant.entry.state}
                  status={grant.entry.status as 'open' | 'closed' | 'upcoming'}
                  amount={grant.entry.amount}
                  deadline={grant.entry.deadline}
                  excerpt={grant.entry.excerpt}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center">
              No grant guides available yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
