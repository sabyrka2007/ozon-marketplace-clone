import { topMenu } from '@/components/layout/TopMenu/top-menu.data'
import Link from 'next/link'
import cn from 'clsx'

export const TopMenu = () => {
  return (
    <nav className="flex gap-5 items-center mx-5">
      {topMenu.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className={cn(
            'flex gap-1 items-center transition-all hover:opacity-100 hover:text-primary opacity-50',
            item.variant === 'fresh' && 'text-green-600 opacity-100',
          )}
        >
          {item.icon && <item.icon
            size={16}
            className="mr-0.5"
          />}
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}