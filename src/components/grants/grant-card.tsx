import Link from 'next/link'
import { Calendar, MapPin, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StatusBadge } from './status-badge'

interface GrantCardProps {
  slug: string
  title: string
  state: string
  status: 'open' | 'closed' | 'upcoming'
  amount?: string | null
  deadline?: string | null
  excerpt?: string | null
}

const stateLabels: Record<string, string> = {
  national: 'National',
  nsw: 'NSW',
  vic: 'VIC',
  qld: 'QLD',
  wa: 'WA',
  sa: 'SA',
  tas: 'TAS',
  act: 'ACT',
  nt: 'NT',
}

export function GrantCard({
  slug,
  title,
  state,
  status,
  amount,
  deadline,
  excerpt,
}: GrantCardProps) {
  return (
    <Link href={`/grants/${slug}`}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg leading-tight">{title}</CardTitle>
            <StatusBadge status={status} />
          </div>
        </CardHeader>
        <CardContent>
          {excerpt && (
            <p className="text-muted-foreground mb-4 text-sm">{excerpt}</p>
          )}
          <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {stateLabels[state] || state}
            </span>
            {amount && (
              <span className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                {amount}
              </span>
            )}
            {deadline && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(deadline).toLocaleDateString('en-AU', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
