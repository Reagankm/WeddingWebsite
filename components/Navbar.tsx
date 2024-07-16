import { Container, Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const paths = [
        { href: '/', label: 'Home' },
        { href: '/attire', label: 'Attire' },
        //{ href: '/faqs', label: 'FAQs' },
        { href: '/registry', label: 'Registry' },
        //{ href: '/schedule', label: 'Schedule' },
        //{ href: '/travel', label: 'Travel' },
    ];

    const router = useRouter();
    console.log('router: ', router);

    return (
        <Container className="navbar">
            {paths.map(link => (
                <div className="listItem" key={link.href}>
                    <div className={router.pathname === link.href ? 'active' : ''}>
                        <Link className={styles.navbarLink} href={link.href} >
                            <Text fz={'1.25rem'}>{link.label}</Text>
                        </Link>
                        <div className={`underline ${router.pathname === link.href ? 'active' : ''}`}></div>
                    </div>
                </div>
            ))}
        </Container>
    );
}
