import { useRect } from '@studio-freight/hamo'
import cn from 'clsx'

import { Card } from 'components/card'
import { useScroll } from 'hooks/use-scroll'
import { clamp, mapRange } from 'lib/maths'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { useWindowSize } from 'react-use'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

import s from './feature-cards.module.scss'

const cards = [
  { text: 'استوديو ابداعي متكامل' },

  {
    text: 'استتراتيجيات تطوير العلامة التجارية',
  },
  { text: 'كادر شبابي مختص' },
  { text: 'خبرة ابداعية عصرية' },
  {
    text: 'إدارة وسائل التواصل الاجتماعي',
  },
  { text: 'إدارة الحملات الإعلانية' },
  { text: 'إ' },
  { text: '' },
  {
    text: '',
  },
]

export const FeatureCards = () => {
  const element = useRef()
  const [setRef, rect] = useRect()
  const { height: windowHeight } = useWindowSize()

  const [current, setCurrent] = useState()

  useScroll(
    ({ scroll }) => {
      const start = rect.top - windowHeight * 2
      const end = rect.top + rect.height - windowHeight

      const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)

      element.current.style.setProperty(
        '--progress',
        clamp(0, mapRange(rect.top, end, scroll, 0, 1), 1)
      )
      const step = Math.floor(progress * 10)
      setCurrent(step)
    },
    [rect]
  )

  return (
    <div
      ref={(node) => {
        setRef(node)
      }}
      className={s.features}
    >
      <div className={cn('layout-block-inner', s.sticky)}>
        <aside className={s.title}>
          <p className={cn('h3', s.arabic)}>
            <AppearTitle>
              لماذا
              <br />
              <span className="grey">كولاب استوديو؟</span>
            </AppearTitle>
          </p>
        </aside>
        <div ref={element}>
          {cards.map((card, index) => (
            <SingleCard
              key={index}
              index={index}
              text={card.text}
              number={index + 1}
              current={index <= current - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const SingleCard = ({ text, number, index, current }) => {
  return (
    <div
      className={cn(s.card, current && s.current, s.arabic)}
      style={{ '--i': index }}
    >
      <Card background="rgba(138, 143, 130, 0.8)" number={number} text={text} />
    </div>
  )
}
