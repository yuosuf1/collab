import { useRect } from '@studio-freight/hamo'
import cn from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useIntersection } from 'react-use'
import s from './appear-title.module.scss'

export function AppearTitle({ children, visible = true }) {
  const el = useRef()

  const [intersected, setIntersected] = useState(false)
  const intersection = useIntersection(el, {
    threshold: 1,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIntersected(true)
    }
  }, [intersection])

  const [rectRef, rect] = useRect()

  return (
    <span
      ref={(node) => {
        el.current = node
        rectRef(node)
      }}
      className={cn(s.title, intersected && visible && s.visible, s.arabic)}
    >
      {children}
    </span>
  )
}
