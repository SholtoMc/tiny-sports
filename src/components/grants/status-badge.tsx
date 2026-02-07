import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  status: 'open' | 'closed' | 'upcoming'
}

const statusConfig = {
  open: {
    label: 'Open',
    className: 'bg-grant-open/10 text-grant-open border-grant-open/20',
  },
  closed: {
    label: 'Closed',
    className: 'bg-grant-closed/10 text-grant-closed border-grant-closed/20',
  },
  upcoming: {
    label: 'Upcoming',
    className:
      'bg-grant-upcoming/10 text-grant-upcoming border-grant-upcoming/20',
  },
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]
  return (
    <Badge variant="outline" className={cn(config.className)}>
      {config.label}
    </Badge>
  )
}
