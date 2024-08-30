import { useMediaQuery } from '@studio-freight/hamo'
import cn from 'clsx'
import { useStore } from 'lib/store'
import { useEffect, useState } from 'react'
import s from './intro.module.scss'

export const Intro = () => {
  const isMobile = useMediaQuery('(max-width: 800px)')
  const [isLoaded, setIsLoaded] = useState(false)
  const [scroll, setScroll] = useState(false)
  const introOut = useStore(({ introOut }) => introOut)
  const setIntroOut = useStore(({ setIntroOut }) => setIntroOut)
  const lenis = useStore(({ lenis }) => lenis)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [])

  useEffect(() => {
    if (isMobile) {
      lenis.start()
      document.documentElement.classList.toggle('intro', false)
      return
    }

    if (!scroll) {
      document.documentElement.classList.toggle('intro', true)
    }

    if (!lenis) return
    if (scroll) {
      lenis.start()
      document.documentElement.classList.toggle('intro', false)
    } else {
      setTimeout(() => {
        lenis.stop()
      }, 0)

      document.documentElement.classList.toggle('intro', true)
    }
  }, [scroll, lenis, isMobile])

  return (
    <div
      className={cn(s.wrapper, isLoaded && s.out)}
      onTransitionEnd={(e) => {
        e.target.classList.forEach((value) => {
          if (value.includes('out')) {
            setScroll(true)
          }
          if (value.includes('show')) {
            setIntroOut(true)
          }
        })
      }}
    >
      <div className={cn(isLoaded && s.relative)}>
        <LNS isLoaded={isLoaded} fill={'var(--black)'} />
        <EI
          isLoaded={isLoaded}
          fill={'var(--black)'}
          className={cn(introOut && s.translate)}
        />
      </div>
    </div>
  )
}

export const Title = ({ className }) => {
  const introOut = useStore(({ introOut }) => introOut)

  return (
    <div className={className}>
      <LNS fill={'var(--pink)'} />
      <EI
        fill={'var(--pink)'}
        className={cn(introOut && s.translate, s.mobile)}
      />
    </div>
  )
}

const LNS = ({ isLoaded, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1360 453"
      className={cn(s.lns, className)}
    >
      <g fill={fill}>
        <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 2 }}
          d="m263.7 93.9l-194.7-34c-4.4-0.7-8.5 2.7-8.5 7.2v30.6l0.1 28.4c0 3.4 2.3 6.3 5.6 7.1l8.1 1.8c3.3 0.8 5.6 3.8 5.6 7.2l-0.1 212.8c0 4 3.3 7.3 7.3 7.3h171.1c4.1 0 7.3-3.3 7.3-7.3v-58.3c0-4-3.2-7.3-7.3-7.3h-98.9c-4 0-7.3-3.3-7.3-7.3v-119.1c0-4.7 4.3-8.2 8.9-7.2l33.8 7.3c3.4 0.7 5.8 3.7 5.8 7.2v83.5c0 4 3.3 7.3 7.3 7.3h54.7c4 0 7.3-3.3 7.3-7.3v-152.7c0-3.6-2.6-6.6-6.1-7.2z"
        />
        <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 1 }}
          d="m728.1 335.5l-94.5-28.3c-3.1-1-5.3-3.8-5.3-7v-135.3c0-3.2-2-6-5-7l-52.3-17.3c-4.8-1.6-9.6 1.9-9.6 6.9v45.1 11.9 145.7c0 3.2 2.1 6.1 5.2 7l157.3 46.7c4.7 1.4 9.4-2.1 9.4-7v-54.4c0-3.3-2.1-6.1-5.2-7z"
        />
        <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 1 }}
          d="m843.3 264.4v54.5c0 4.8-4.6 8.3-9.3 7l-66.7-18.8-99.5-28.1c-3.1-0.9-5.3-3.8-5.3-7.1v-138.3q0-0.8-0.1-1.5-0.1-0.4-0.1-0.7v-35.5c0-0.9 0.2-9.5 0.2-20.6 0-5.8 5.5-10.1 11.1-8.6l43.7 11.2c7.1 1.8 12.2 8.3 12.2 15.7v128.3c0 3.3 2.2 6.2 5.3 7.1l103.2 28.4c3.1 0.9 5.3 3.7 5.3 7z"
        />
        <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 3 }}
          d="m1349.5 68.7c0-4.5-4-7.9-8.4-7.2l-215 34.1c-3.6 0.6-6.2 3.7-6.2 7.3v253.9c0 3.3 2.2 6.1 5.3 7l180.8 51c4.7 1.3 9.3-2.2 9.3-7.1v-121.2q0-2.5-1.5-4.5l-11.4-14.6c-1-1.3-1.6-2.9-1.6-4.5v-20.4c0-1.9 0.8-3.8 2.1-5.1l10.3-10.5c1.3-1.4 2.1-3.2 2.1-5.1v-68.9c0-3.4 2.2-6.3 5.5-7.1l23.3-6.1c3.2-0.8 5.4-3.7 5.4-7.1zm-103.1 223.5v19.1c0 4.7-4.3 8.1-8.9 7.1l-34.9-8c-3.3-0.7-5.6-3.7-5.6-7.1v-11.1c0-4 3.2-7.3 7.3-7.3h34.8c4 0 7.3 3.3 7.3 7.3zm-49.4-60v-49.7c0-3.6 2.5-6.6 6-7.2l28.5-5c4.5-0.8 8.6 2.7 8.6 7.2v54.7c0 4-3.3 7.3-7.4 7.3h-28.4c-4.1 0-7.3-3.3-7.3-7.3z"
        />
      </g>
    </svg>
  )
}

const EI = ({ isLoaded, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1360 453"
      className={cn(s.lns, className)}
    >
      <g fill={fill}>
        <path
          style={{ '--index': 5 }}
          className={cn(s.start, isLoaded && s.show)}
          d="m520 103.9c0-4-3.3-7.3-7.4-7.3h-194c-4 0-7.3 3.3-7.3 7.3v57.1c0 4 3.1 7.2 7 7.3l6 0.2c4 0.2 7.1 3.4 7.1 7.4v177.2c0 3.2 2.2 6.1 5.3 7l174 48.7c4.6 1.3 9.3-2.2 9.3-7zm-68.8 72.2v136.6c0 4.8-4.5 8.3-9.1 7.1l-30.8-7.8c-3.2-0.9-5.5-3.8-5.5-7.1v-128.8c0-4 3.3-7.3 7.3-7.3h30.8c4 0 7.3 3.3 7.3 7.3z"
        />
        <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 4 }}
          d="m1075.6 103.9c0-4-3.2-7.3-7.3-7.3h-179.7q-0.5 0-1 0l-88-11.6c-4.4-0.5-8.3 2.9-8.3 7.3v62.9c0 3.6 2.6 6.6 6.1 7.2l84.6 14.2c3.5 0.6 6.1 3.7 6.1 7.3v170.2c0 3.1 2 5.9 5 6.9l61.8 20.5c4.7 1.5 9.6-2 9.6-7v-51.8c0-4 3.3-7.3 7.3-7.3h31c4.1 0 7.3 3.3 7.3 7.3v65.3c0 3.3 2.3 6.2 5.4 7l50.9 13.9c4.7 1.3 9.2-2.2 9.2-7zm-68.7 77.4v70.3c0 4-3.3 7.3-7.3 7.3h-30.5c-4.1 0-7.3-3.3-7.3-7.3v-70.6c0-4 3.3-7.3 7.3-7.3l30.5 0.3c4.1 0 7.3 3.3 7.3 7.3z"
        />
      </g>
    </svg>
  )
}
