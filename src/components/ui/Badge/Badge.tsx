import type { BookingStatus } from '@/types'
import s from './Badge.module.scss'

type Variant = BookingStatus | 'active' | 'inactive'

const labels: Record<Variant, string> = {
  confirmed: 'Confirmed', pending: 'Pending', cancelled: 'Cancelled',
  completed: 'Completed', noshow: 'No-show', active: 'Active', inactive: 'Inactive',
}

interface BadgeProps {
  variant: Variant
  label?: string
}

export function Badge({ variant, label }: BadgeProps) {
  return (
    <span className={[s.badge, s[variant]].join(' ')}>
      <span className={s.dot} />
      {label ?? labels[variant]}
    </span>
  )
}

export function BookingBadge({ status }: { status: BookingStatus }) {
  return <Badge variant={status} />
}
