import cn from 'clsx'
import { Link } from 'components/link'
import dynamic from 'next/dynamic'
import s from './list-item.module.scss'

const Arrow = dynamic(() => import('icons/arrow-diagonal.svg'), { ssr: false })

export const ListItem = ({
  className,
  title,
  source,
  href,
  visible,
  index,
}) => {
  return (
    <Link
      href={href}
      className={cn(className, s.item, visible && s.visible)}
      style={{ '--i': index }}
    >
      <div dir="rtl" className={cn(s.inner, s.arabic)}>
        <div className={s.title}>
          <span className={s.text}>{title}</span>
          <Arrow className={s.arrow} />
        </div>
        <div className={s.source}>
          <span>{source}</span>
        </div>
      </div>
    </Link>
  )
}
