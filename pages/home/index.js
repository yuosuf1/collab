import { useFrame, useRect } from '@studio-freight/hamo'
import cn from 'clsx'

import { Button } from 'components/button'
import { Card } from 'components/card'
import { Title } from 'components/intro'
import { ListItem } from 'components/list-item'
import { projects } from 'content/projects'
import { useScroll } from 'hooks/use-scroll'
import { Layout } from 'layouts/default'
import { button, useControls } from 'leva'
import { clamp, mapRange } from 'lib/maths'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { useIntersection, useWindowSize } from 'react-use'
import s from './home.module.scss'

// const SFDR = dynamic(() => import('icons/sfdr.svg'), { ssr: false })
const Whatsapp = dynamic(() => import('icons/whatsapp.svg'), { ssr: false })

const Parallax = dynamic(
  () => import('components/parallax').then((mod) => mod.Parallax),
  { ssr: false }
)

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const HorizontalSlides = dynamic(
  () =>
    import('components/horizontal-slides').then((mod) => mod.HorizontalSlides),
  { ssr: false }
)

const FeatureCards = dynamic(
  () => import('components/feature-cards').then((mod) => mod.FeatureCards),
  { ssr: false }
)

const WebGL = dynamic(
  () => import('components/webgl').then(({ WebGL }) => WebGL),
  { ssr: false }
)

const HeroTextIn = ({ children, introOut }) => {
  return (
    <div className={cn(s['hide-text'], introOut && s['show-text'])}>
      {children}
    </div>
  )
}

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState()
  const zoomRef = useRef(null)
  const [zoomWrapperRectRef, zoomWrapperRect] = useRect()
  const { height: windowHeight } = useWindowSize()
  const introOut = useStore(({ introOut }) => introOut)

  const [theme, setTheme] = useState('dark')
  const lenis = useStore(({ lenis }) => lenis)

  useControls(
    'lenis',
    () => ({
      stop: button(() => {
        lenis.stop()
      }),
      start: button(() => {
        lenis.start()
      }),
    }),
    [lenis]
  )

  useControls(
    'scrollTo',
    () => ({
      immediate: button(() => {
        lenis.scrollTo(30000, { immediate: true })
      }),
      smoothDuration: button(() => {
        lenis.scrollTo(30000, { lock: true, duration: 10 })
      }),
      smooth: button(() => {
        lenis.scrollTo(30000)
      }),
      forceScrollTo: button(() => {
        lenis.scrollTo(30000, { force: true })
      }),
    }),
    [lenis]
  )

  useEffect(() => {
    if (!lenis) return

    function onClassNameChange(lenis) {
      console.log(lenis.className)
    }

    lenis.on('className change', onClassNameChange)

    return () => {
      lenis.off('className change', onClassNameChange)
    }
  }, [lenis])

  useScroll(({ scroll }) => {
    setHasScrolled(scroll > 10)
    if (!zoomWrapperRect.top) return

    const start = zoomWrapperRect.top + windowHeight * 0.5
    const end = zoomWrapperRect.top + zoomWrapperRect.height - windowHeight

    const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)
    const center = 0.6
    const progress1 = clamp(0, mapRange(0, center, progress, 0, 1), 1)
    const progress2 = clamp(0, mapRange(center - 0.055, 1, progress, 0, 1), 1)
    setTheme(progress2 === 1 ? 'light' : 'dark')

    zoomRef.current.style.setProperty('--progress1', progress1)
    zoomRef.current.style.setProperty('--progress2', progress2)

    if (progress === 1) {
      zoomRef.current.style.setProperty('background-color', 'currentColor')
    } else {
      zoomRef.current.style.removeProperty('background-color')
    }
  })

  const [whyRectRef, whyRect] = useRect()
  const [cardsRectRef, cardsRect] = useRect()
  const [whiteRectRef, whiteRect] = useRect()
  const [featuresRectRef, featuresRect] = useRect()
  const [inuseRectRef, inuseRect] = useRect()

  const addThreshold = useStore(({ addThreshold }) => addThreshold)

  useEffect(() => {
    addThreshold({ id: 'top', value: 0 })
  }, [])

  useEffect(() => {
    const top = whyRect.top - windowHeight / 2
    addThreshold({ id: 'why-start', value: top })
    addThreshold({
      id: 'why-end',
      value: top + whyRect.height,
    })
  }, [whyRect])

  useEffect(() => {
    const top = cardsRect.top - windowHeight / 2
    addThreshold({ id: 'cards-start', value: top })
    addThreshold({ id: 'cards-end', value: top + cardsRect.height })
    addThreshold({
      id: 'red-end',
      value: top + cardsRect.height + windowHeight,
    })
  }, [cardsRect])

  useEffect(() => {
    const top = whiteRect.top - windowHeight
    addThreshold({ id: 'light-start', value: top })
  }, [whiteRect])

  useEffect(() => {
    const top = featuresRect.top
    addThreshold({ id: 'features', value: top })
  }, [featuresRect])

  useEffect(() => {
    const top = inuseRect.top
    addThreshold({ id: 'in-use', value: top })
  }, [inuseRect])

  useEffect(() => {
    const top = lenis?.limit
    addThreshold({ id: 'end', value: top })
  }, [lenis?.limit])

  useScroll((e) => {
    console.log(window.scrollY, e.scroll, e.isScrolling, e.velocity, e.isLocked)
  })

  useFrame(() => {
    console.log('frame', window.scrollY, lenis?.scroll, lenis?.isScrolling)
  }, 1)

  const inUseRef = useRef()

  const [visible, setIsVisible] = useState(false)
  const intersection = useIntersection(inUseRef, {
    threshold: 0.2,
  })
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIsVisible(true)
    }
  }, [intersection])

  return (
    <Layout
      theme={theme}
      seo={{
        title: 'Collab Studio',
        description: 'Creativity reflect your identity.',
      }}
      className={s.home}
    >
      <div className={s.canvas}>
        <WebGL />
      </div>

      <section className={s.hero}>
        <div className="layout-grid-inner">
          <Title className={s.title} />
          <span className={cn(s.sub)}>
            <HeroTextIn introOut={introOut}>
              <h2 className={cn('h3', s.subtitle, s.arabic)}>
                إبداع يعكس هويتك
              </h2>
            </HeroTextIn>
            <HeroTextIn introOut={introOut}>
              <h2 className={cn('p-xs', s.tm, s.arabic)}>
                استوديو ابداعي يختص بالانتاج المرئي و التسويق الرقمي
              </h2>
            </HeroTextIn>
          </span>
        </div>

        <div className={cn(s.bottom, 'layout-grid')}>
          <div
            className={cn(
              'hide-on-mobile',
              s['scroll-hint'],
              hasScrolled && s.hide,
              introOut && s.show
            )}
          >
            <div className={cn(s.text, s.arabic)}>
              <HeroTextIn introOut={introOut}>
                <p>تصفح</p>
              </HeroTextIn>
              <HeroTextIn introOut={introOut}>
                <p>للمزيد</p>
              </HeroTextIn>
            </div>
          </div>
          <h1 className={cn(s.description, 'p-s', s.arabic, s.rtl)}>
            <HeroTextIn introOut={introOut}>
              <p className="p-s">صناعة محتوى ابداعي</p>
            </HeroTextIn>
            <HeroTextIn introOut={introOut}>
              <p className="p-s">بفريق شبابي متميز يمتلك خبرة كبيرة</p>
            </HeroTextIn>
            <HeroTextIn introOut={introOut}>
              <p className="p-s">
                و مدرب لجمع الابداع لإبتكار حلول اعلانية مميزة
              </p>
            </HeroTextIn>
          </h1>
          <Button
            className={cn(s.cta, introOut && s.in, s.arabic)}
            arrow
            icon={<Whatsapp />}
            href="https://whatsapp.com"
          >
            تواصل معنا على واتساب
          </Button>
        </div>
      </section>
      <section dir="rtl" className={s.why} data-lenis-scroll-snap-align="start">
        <div className="layout-grid">
          <h2 className={cn(s.sticky, 'h2', s.arabic)}>
            <AppearTitle>لماذا كولاب استوديو؟</AppearTitle>
          </h2>
          <aside className={s.features} ref={whyRectRef}>
            <div className={s.feature}>
              <p className={cn('p', s.arabic)}>
                كولاب استوديو, استوديو ابداع متكامل يختص في تقديم خدمات الانتاج
                المرئي بمختلف مراحله, نعمل بشغف لتحقيق رؤى عملائنا عبر تحويل
                افكارهم الى محتوى مرئي يعبر عن رسالتهم بوضوح
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4', s.arabic)}>
                فريقنا الشبابي المتميز
              </h3>
              <p className={cn('p', s.arabic)}>
                يمتلك خبرة رائعة وساعات خبرة كبيرة و مدرّب على ان يجمع بين
                الإبداع والتفكير الاستراتيجي مما يمكننا من ابتكار حلول إعلانية
                مبتكرة وفعالة
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4', s.arabic)}>
                رؤيتنا في كولاب استوديو
              </h3>
              <p className={cn('p', s.arabic)}>
                رؤيتنا هي تقديم إنتاجات تتميز بالأصالة والابتكار، حيث نبتعد عن
                التكرار والنمطية لنقدم تجارب بصرية جديدة وغير تقليدية و نسعى إلى
                استخدام أحدث التقنيات والاتجاهات في صناعة المحتوى، مع التركيز
                على تقديم أعمال تتسم بالنقاء والوضوح
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4', s.arabic)}>خدماتنا</h3>
              <p className={cn('p', s.arabic)}>
                نقدم خدمات إنتاج متكاملة تركز على خلق محتوى مرئي يتماشى مع
                أهدافك الاستراتيجية، سواء كان ذلك من خلال الفيديوهات الإعلانية
                أو المحتوى البصري المتنوع، نعمل على تقديم إنتاجات عالية الجودة
                تعزز من تواجد .علامتك التجارية
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section dir="rtl" className={s.rethink}>
        <div className={cn('layout-grid', s.pre, s.arabic)}>
          <div className={s.highlight} data-lenis-scroll-snap-align="start">
            <Parallax speed={-0.5}>
              <p className="h2">
                <AppearTitle>البحث عن اعلانات ابداعية؟</AppearTitle>
              </p>
            </Parallax>
          </div>
          <div className={s.comparison}>
            <Parallax speed={0.5}>
              <p className={cn('p', s.arabic)}>
                عند البحث عن الإعلانات الإبداعية، ركز على العثور على الأساليب
                المبتكرة التي تجذب الانتباه وتُشرك الجمهور. ابحث عن الإعلانات
                التي تتجاوز الحدود، وتستخدم تصاميم فريدة، وتروي قصصاً جذابة عبر
                منصات متنوعة مثل الرقمية والمطبوعة ووسائل التواصل الاجتماعي.
              </p>
            </Parallax>
          </div>
        </div>
        <div className={s.cards} ref={cardsRectRef}>
          <HorizontalSlides>
            <Card
              className={cn(s.card, s.arabic)}
              number="01"
              text="أساليب مبتكرة وجديدة, إعلانات تبرز في السوق التنافسي."
            />
            <Card
              className={cn(s.card, s.arabic)}
              number="02"
              text="محتوى يجذب الانتباه, التركيز على الإعلانات التي تلتقط الانتباه بفعالية."
            />
            <Card
              className={cn(s.card, s.arabic)}
              number="03"
              text="سرد قصصي مثير و إعلانات تروي قصصاً جذابة وملهمة."
            />
            <Card
              className={cn(s.card, s.arabic)}
              number="04"
              text="تصاميم فريدة, البحث عن إعلانات ذات تصميمات مميزة وجذابة. تناسب محتوى هويتك."
            />
            <Card
              className={cn(s.card, s.arabic)}
              number="05"
              text="الخبرة في المنصات ركز على إعلانات تستفيد من منصات متعددة مثل الرقمية ووسائل التواصل الاجتماعي."
            />
          </HorizontalSlides>
        </div>
      </section>
      <section
        ref={(node) => {
          zoomWrapperRectRef(node)
          zoomRef.current = node
        }}
        className={s.solution}
      >
        <div className={s.inner}>
          <div className={s.zoom}>
            <h2
              dir="rtl"
              style={{ fontWeight: 900 }}
              className={cn(s.first, 'h1 vh', s.arabic)}
            >
              لذلك صنعنا <br />
              <span className="contrast">الحلول الابداعية</span>
            </h2>
            <h2 className={cn(s.enter, 'h3 vh')}>
              Collab <br /> Studio
            </h2>
            <h2 dir="rtl" className={cn(s.second, 'h1 vh', s.arabic)}>
              كما يجب ان تكن
            </h2>
          </div>
        </div>
      </section>
      <section className={cn('theme-light', s.featuring)} ref={whiteRectRef}>
        <div className={s.inner}>
          <div dir="rtl" className={cn('layout-block', s.intro, s.arabic)}>
            <p className="p-l">
              اهدافنا نحن في{' '}
              <span className="contrast semi-bold">كولاب استوديو</span> نسعى لأن
              نكون الخيار الأمثل للعملاء الذين يبحثون عن تميز حقيقي في تقديم
              رسائلهم البصرية من خلال التزامنا الثابت بأعلى معايير الجودة
              والابتكار
            </p>
          </div>
        </div>
        <section ref={featuresRectRef}>
          <FeatureCards />
        </section>
      </section>
      <section
        ref={(node) => {
          inuseRectRef(node)
          inUseRef.current = node
        }}
        className={cn('theme-light', s['in-use'], visible && s.visible)}
      >
        <div dir="rtl" className="layout-grid">
          <aside className={s.title}>
            <p className="h3">
              <AppearTitle>
                صنع بواسطة
                <br />
                <span className="grey">كولاب</span>
              </AppearTitle>
            </p>
          </aside>
          <ul dir="ltr" className={s.list}>
            {projects.map(({ title, source, href }, i) => (
              <li key={i}>
                <ListItem
                  title={title}
                  source={source}
                  href={href}
                  index={i}
                  visible={visible}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
