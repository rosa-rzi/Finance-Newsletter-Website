import React from 'react'
import styles from '../../styles/Footer.module.css'

interface FooterLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
    social?: string;
  }

function Footer({
    legalLinks, 
    socialLinks,
}: {
    legalLinks: Array<FooterLink>;
    socialLinks: Array<FooterLink>;
} ) {
    return (
        <footer className={styles.footer}>
            <span>
                ©2023 All Rights Reserved
            </span>
            <a href="../../public/documents/PRIVACY_POLICY.pdf"
            target="_blank"
            rel="noopener noreferrer">
                Privacy Policy
            </a>
            <a href="../../public/documents/TERMS_OF_USE.pdf"
            target="_blank"
            rel="noopener noreferrer">
                Terms of Use
            </a>
        </footer>
    )
}

export default Footer
