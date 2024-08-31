import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import dynamic from 'next/dynamic'
import s from './footer.module.scss'

const Whatsapp = dynamic(() => import('icons/whatsapp-white.svg'), {
  ssr: false,
})

export const Footer = () => {
  return (
    <footer className={cn('theme-light', s.footer)}>
      <div dir="rtl" className={cn(s.top, 'layout-grid hide-on-mobile')}>
        <p className={cn(s['first-line'], 'h1', s.arabic)}>
          كن مع {''}
          <span className="contrast">كولاب</span>
        </p>

        <p className={cn(s['last-line'], 'h1', s.arabic)}>
          و لنبدأ <span className="hide-on-desktop">&nbsp;</span> معا &nbsp;
        </p>
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
          تواصل مع {''}
          <span className="contrast">كولاب</span>
          <br /> و ابدأ مشوار
          <br /> الإبداع
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
