import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import dynamic from 'next/dynamic'
import s from './footer.module.scss'

const Whatsapp = dynamic(() => import('icons/whatsapp-white.svg'), {
  ssr: false,
})
const CollabLogo = dynamic(() => import('icons/collabLight.svg'), {
  ssr: false,
})

export const Footer = () => {
  return (
    <footer className={cn('theme-light', s.footer)}>
      <div dir="rtl" className={cn(s.top, 'layout-block hide-on-mobile')}>
        <div className={cn(s.logo)}>
          <span className={cn('contrast', s.lightGreen)}>
            <CollabLogo />
          </span>
        </div>
        <p className={cn(s['first-line'], 'h1', s.arabic)}>ابداع يعكس هويتك</p>

        <Button
          className={cn(s.cta, s.arabic)}
          arrow
          icon={<Whatsapp />}
          href="https://whatsapp.com"
        >
          تواصل معنا الان
        </Button>
      </div>

      {/* ********************************************* */}
      <div dir="rtl" className={cn(s.top, 'layout-block hide-on-desktop')}>
        {/* <div className={s['shameless-plug']}>
          <p className="h4">Studio Freight</p>
          <p className="p-s">
            An independent creative <br /> studio built on principle
          </p>
        </div> */}
        <p className={cn(s['first-line'], 'h1', s.arabic)}>
          <span className={cn('contrast', s.lightGreen)}>
            <CollabLogo />
          </span>
          <br /> ابداع يعكس هويتك
        </p>
      </div>
      <div className={s.bottom}>
        <div className={s.links}>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://instagram.com/collab.iq"
          >
            Instagram
          </Link>
          <Link className={cn(s.link, 'p-xs')} href="https://facebook.com">
            Facebook
          </Link>

          <Link className={cn(s.link, 'p-xs')} href="">
            Designed by Collab Studio
          </Link>
        </div>
        <p className={cn('p-xs', s.tm, s.arabic)}>
          <span>©</span> {new Date().getFullYear()} كولاب استوديو
        </p>
        <Button
          className={cn(s.cta, 'hide-on-desktop', s.arabic)}
          arrow
          icon={<Whatsapp />}
          href="https://whatsapp.com"
        >
          تواصل معنا
        </Button>
      </div>
    </footer>
  )
}
