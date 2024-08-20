import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { protest } from '@/theme';
import { Space, Text, Title } from '@mantine/core';
import React from 'react';
import Link from '../components/Link/Link';

export default function Attire() {
    return (
        <PageWrapper>

            <Title order={3}>Apocalyptic Clothing Encouraged</Title>
            <Title style={{fontFamily: protest.style.fontFamily}} order={4}>(But really, you can wear<br />whatever you<br />want)</Title>
            <Space h='sm' />

            <Text>For those who want to participate, please dress up. Here are some ideas
                to get you started.</Text>

            <Link href={'https://www.pinterest.com/middlebrookward/apocalyptic-clothing/'}>
                <Title style={{fontFamily: protest.style.fontFamily}} order={4}>Apocalyptic Clothing Pictures</Title>
            </Link>


            <Text><b>Note</b> that there will probably be at least a couple children
                attending, so make sure it's something you'd be comfortable
                wearing around them. </Text>

            <Space h='sm' />

            <Text>If dressing up isn't for you, that's fine too.
                Anything that makes you feel comfortable and happy is okay to wear.
                For out-of-towners who don't know, Seattle tends to be an only-get-fancy-if-you-want-to kind of place.
                Here are examples of
                things that are acceptable to wear to our wedding:
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



        </PageWrapper>
    )
}
