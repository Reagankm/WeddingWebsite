import { Container, Title } from '@mantine/core';
import { Protest_Revolution } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

const Protest = Protest_Revolution({weight: '400', subsets: ['latin']});

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault(); // Prevent navigation if already on the homepage
    }
  };

    return (
        <Container fluid size='xs' p='xs'>
            {/* For medium and large screens */}
            <Link className={styles.titleLink} href={'/'} onClick={handleClick}>
                <Title visibleFrom='md' order={3}>Reagan <Title component='span' style={{fontFamily: Protest.style.fontFamily, fontSize:'2rem'}}>&</Title> Kevin</Title>
            </Link>

            {/* For small screens */}
            <Link className={styles.titleLink} href={'/'} onClick={handleClick}>
                <Title hiddenFrom='md' order={3}>Reagan <Title component='span' style={{fontFamily: Protest.style.fontFamily, fontSize:'1.75rem'}}>&</Title> Kevin</Title>
            </Link>

            {/* For everybody */}
            <Navbar />
        </Container>
    );
}
