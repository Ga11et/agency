import { FC } from "react"
import css from './header.module.css'
import { ReactComponent as AgencySVG } from '../../../assets/logo.svg'

type HeaderPropsType = {
    
}
export const Header: FC<HeaderPropsType> = ({  }) => {
    return <>
        <header className={css.container}>
            <div className={css.content}>
                <div className={css.top}>
                    <AgencySVG />
                    <nav className={css.nav}>
                        <a href={'./'} className={css.link}>About</a>
                        <a href={'./'} className={css.link}>Services</a>
                        <a href={'./'} className={css.link}>Pricing</a>
                        <a href={'./'} className={css.link}>Blog</a>
                    </nav>
                    <a href={'./'} className={css.contact}>Contact</a>
                </div>
                <div className={css.main}>
                    <h1 className={css.heading}>Portfolio</h1>
                    <p className={css.paragraph}>
                        Agency provides a full service range including technical skills, design, business understanding.
                    </p>
                </div>
            </div>
        </header>
    </>
}