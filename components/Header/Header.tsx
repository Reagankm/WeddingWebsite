import { Container, Text, Title } from '@mantine/core';
import { Protest_Revolution } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../Navbar';

const Protest = Protest_Revolution({weight: '400', subsets: ['latin']});

export default function Header() {
    return (
        <Container size='xs' p='xs'>
            <Title visibleFrom='md' order={2}>Reagan <Title component='span' inline style={{fontFamily: Protest.style.fontFamily, fontSize:'2rem'}}>&</Title> Kevin</Title>
            <Title hiddenFrom='md' order={3}>Reagan <Title component='span' inline style={{fontFamily: Protest.style.fontFamily, fontSize:'1.16rem'}}>&</Title> Kevin</Title>
            <Navbar />
        </Container>
    );
}
