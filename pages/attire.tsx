import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { protest } from '@/theme';
import { Space, Text, Title } from '@mantine/core';
import React from 'react';
import Link from 'next/link';

export default function Attire() {
    return (
        <PageWrapper>

            <Title order={3}>Apocalyptic Clothing Encouraged</Title>
            <Title style={{fontFamily: protest.style.fontFamily}} order={4}>(But really, you can wear<br />whatever you<br />want)</Title>
            <Space h='sm' />

            <Text>We want you comfortable and happy so wear
                whatever you're going to feel good in.  Some things that are acceptable to wear to our wedding:
                </Text>
            <ul>
                <li>Jeans</li>
                <li>T-shirts</li>
                <li>Suits</li>
                <li>Sport coats</li>
                <li>Fancy dresses</li>
                <li>Unfancy dresses</li>
                <li>Skirts</li>
                <li>Shorts (but you might be cold)</li>
                <li>Socks with sandals (I see what you did there)</li>
            </ul>  It's all fine
                by us.  We're just happy to have you.

            <Text>For those who want to participate, please dress up. Apocalyptic
                clothing can really be anything. Here are some ideas
                to get you started.</Text>

            <Link href={'https://www.pinterest.com/middlebrookward/apocalyptic-clothing/'}>
                <Title style={{fontFamily: protest.style.fontFamily}} order={4}>Apocalyptic Clothing Pictures</Title>
            </Link>


            <Text><b>Note</b> that there will probably be at least a couple children
                attending, so make sure it's something you'd be comfortable
                wearing around them. </Text>

        </PageWrapper>
    )
}
