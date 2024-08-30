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
      <div className={cn(s.top, 'layout-grid hide-on-mobile')}>
        <p className={cn(s['first-line'], 'h1')}>
          Let's <br />
          <span className="contrast">Collab.</span>
        </p>
        {/* <div className={s['shameless-plug']}>
          <p className="h4">Studio Freight</p>
          <p className="p-s">
            An independent creative <br /> studio built on principle
          </p>
        </div> */}
        <p className={cn(s['last-line'], 'h1')}>
          & Start <span className="hide-on-desktop">&nbsp;</span> Projects,{' '}
          <br /> Together &nbsp;
        </p>
        <Button
          className={s.cta}
          arrow
          icon={<Whatsapp />}
          href="https://whatsapp.com"
        >
          Let's talk together
        </Button>
      </div>
      <div className={cn(s.top, 'layout-block hide-on-desktop')}>
        {/* <div className={s['shameless-plug']}>
          <p className="h4">Studio Freight</p>
          <p className="p-s">
            An independent creative <br /> studio built on principle
          </p>
        </div> */}
        <p className={cn(s['first-line'], 'h1')}>
          Let's {''}
          <span className="contrast">Collab</span>
          <br /> &<br /> start Projects,
          <br /> Together
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
        <p className={cn('p-xs', s.tm)}>
          <span>©</span> {new Date().getFullYear()} Collab Studio
        </p>
        <Button
          className={cn(s.cta, 'hide-on-desktop')}
          arrow
          icon={<Whatsapp />}
          href="https://whatsapp.com"
        >
          Let's Talk
        </Button>
      </div>
    </footer>
  )
}
