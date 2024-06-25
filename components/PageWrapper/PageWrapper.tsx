import { Box, Center, Title, Container } from '@mantine/core';
import { Josefin_Sans, Julius_Sans_One } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

// const Josefin = Josefin_Sans({ weight: '400', subsets: ['latin'] });
// const Julius = Julius_Sans_One({ weight: '400', subsets: ['latin'] });
// const titleFont = Julius;


const paths = [
    { href: '/', label: 'Home' },
    // { href: '/attire', label: 'Attire' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/registry', label: 'Registry' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/travel', label: 'Travel' },
];

const Navbar = () => {

    const router = useRouter();
    console.log('router: ', router);

    return (

        <Container className="navbar">
            {paths.map(link => (
                <div className="listItem" key={link.href}>
                    <div className={router.pathname === link.href ? 'active' : ''}>
                        <Link href={link.href} >
                            {link.label}
                        </Link>
                        <div className={`underline ${router.pathname === link.href ? 'active' : ''}`}></div>
                    </div>
                </div>
            ))}
        </Container>
    );
}


const PageWrapper = (props: PropsWithChildren) => {
    return (
        <Box>
            <Center>
                <Box>
                    <Title>Reagan & Kevin</Title>
                    <Navbar />
                </Box>
            </Center>
            {props.children}
        </Box>
    );
};

export default PageWrapper;
