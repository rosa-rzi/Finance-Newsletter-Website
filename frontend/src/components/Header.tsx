import React from 'react'
import Link from 'next/link';
import Styles from 'styles/header.module.css'

interface Props {}

function Header(props: Props) {
    const {} = props;

    return (
        <header className={Styles.header}>
            <Link href= "/" className={Styles.btnContainer}>
                <img src="https://res.cloudinary.com/dfbgn4spk/image/upload/v1697612263/logo_letters_35d78fa14c.png" alt="logo" className={Styles.logo}></img>
            </Link>
            <Link href='/' className={Styles.lnk}>
                Home
            </Link>
            <Link href='/articles' className={Styles.lnk}>
                Articles
            </Link>
            <Link href= "https://twitter.com/wallstraven" className={Styles.lnk} target="_blank" rel="noopener noreferrer">
                <img src="https://res.cloudinary.com/dfbgn4spk/image/upload/v1699426944/twitter_2_99883eee8e.png" alt="logo" className={Styles.twitter}></img>
            </Link>
        </header>
    )
}

export default Header
