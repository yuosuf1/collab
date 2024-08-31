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
      viewBox="-400 0 1860 560"
      className={cn(s.lns, className)}
    >
      <g fill={fill}>
        <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 2 }}
          d="m764.3 179.5l137.4-28.6c3.8-0.8 7.3 2.1 7.3 5.9v54.7c0 3.3 2.7 6 6 6h17.2c3.3 0 6-2.7 6-6v-68.2-51.8-35.3c0-3.8-3.5-6.7-7.2-5.9l-279.8 58.2c-2.8 0.6-4.8 3.1-4.8 5.9v86.2c0 2.1 1.1 4.1 2.9 5.2l157.2 92.7c5.3 3.1 3.1 11.2-3.1 11.2l-59.1 0.1c-1.2 0-2.4-0.4-3.4-1.1-50.9-34.4-75-49.4-84-54.8-2.5-1.5-5.8-1-7.7 1.3-37.2 43.6-48.4 57.7-51.7 61.9-0.8 1.1-1.3 2.4-1.3 3.7v54.9c0 3.4 2.7 6.1 6 6.1h102.8c3.3 0 6 2.7 6 6v2.8c0 2.8-1.9 5.2-4.5 5.9l-211.5 56.1c-2.7 0.7-4.5 3.1-4.5 5.8v75.2c0 4 3.8 6.9 7.6 5.8l242.2-66.4c2.6-0.7 4.4-3.1 4.4-5.8v-79.4c0-3.3 2.7-6 6.1-6h150.2c2.1 0 4.1-1.2 5.2-3.1l36-64.3c1.6-2.8 0.7-6.3-1.9-8l-178.1-115.9c-4.5-3-3.2-9.9 2.1-11z"
        />
        <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 1 }}
          d="m369.6 308.2l66.6-14.6c2.8-0.6 4.8-3.1 4.8-5.9v-198.5c0-4.2-4.3-7.2-8.3-5.6l-79.5 32.2c-2.2 0.9-3.7 3-3.8 5.4l-1.7 45.8c-0.2 4 3.4 7 7.2 6.2 3.8-0.8 7.3 2 7.3 5.9v123.2c0 3.8 3.6 6.7 7.4 5.9z"
        />
        <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 1 }}
          d="m127.4 459.2l47.2 47.1c2.4 2.4 6.2 2.4 8.5 0l47.2-47.1c2.3-2.4 2.3-6.2 0-8.6l-47.2-47.1c-2.3-2.4-6.1-2.4-8.5 0l-47.2 47.1c-2.3 2.4-2.3 6.2 0 8.6z"
        />
        {/*  <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 3 }}
          d="m1349.5 68.7c0-4.5-4-7.9-8.4-7.2l-215 34.1c-3.6 0.6-6.2 3.7-6.2 7.3v253.9c0 3.3 2.2 6.1 5.3 7l180.8 51c4.7 1.3 9.3-2.2 9.3-7.1v-121.2q0-2.5-1.5-4.5l-11.4-14.6c-1-1.3-1.6-2.9-1.6-4.5v-20.4c0-1.9 0.8-3.8 2.1-5.1l10.3-10.5c1.3-1.4 2.1-3.2 2.1-5.1v-68.9c0-3.4 2.2-6.3 5.5-7.1l23.3-6.1c3.2-0.8 5.4-3.7 5.4-7.1zm-103.1 223.5v19.1c0 4.7-4.3 8.1-8.9 7.1l-34.9-8c-3.3-0.7-5.6-3.7-5.6-7.1v-11.1c0-4 3.2-7.3 7.3-7.3h34.8c4 0 7.3 3.3 7.3 7.3zm-49.4-60v-49.7c0-3.6 2.5-6.6 6-7.2l28.5-5c4.5-0.8 8.6 2.7 8.6 7.2v54.7c0 4-3.3 7.3-7.4 7.3h-28.4c-4.1 0-7.3-3.3-7.3-7.3z"
        /> */}
      </g>
    </svg>
  )
}

const EI = ({ isLoaded, className, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-400 0 1860 560"
      className={cn(s.lns, className)}
    >
      <g fill={fill}>
        <path
          style={{ '--index': 5 }}
          className={cn(s.start, isLoaded && s.show)}
          d="m566.5 202.6l16.7-5.8c2.4-0.9 4-3.2 4-5.7v-64.9c0-3.9-3.6-6.8-7.4-5.9l-98.2 24.1c-2.7 0.7-4.6 3.1-4.6 5.9v168.7c0 2.7-1.9 5.1-4.5 5.8l-124.8 33.3c-2.6 0.7-4.5 3.1-4.5 5.8v72.9c0 4 3.8 6.9 7.7 5.9l207.2-57.4c2.6-0.8 4.4-3.1 4.4-5.9v-171.1c0-2.5 1.6-4.8 4-5.7z"
        />
        <path
          className={cn(s.start, isLoaded && s.show)}
          style={{ '--index': 4 }}
          d="m209.2 241.1v4.1c0 3.4 2.7 6.1 6.1 6.1h17.2c3.3 0 6-2.7 6-6.1v-47.9-7.5c0-3.3-2.7-6-6-6h-23.3-65.1c-1.5 0-3 0.6-4.1 1.6l-102.9 97.9c-1.2 1.1-1.9 2.7-1.9 4.3v88.1c0 3.4 2.7 6.1 6 6.1h265.5c3.3 0 6-2.7 6-6.1v-71.1c0-3.4-2.7-6.1-6-6.1h-154.9c-5.4 0-8.1-6.5-4.3-10.3l51.4-51.4c3.8-3.8 10.3-1.1 10.3 4.3z"
        />
      </g>
    </svg>
  )
}
