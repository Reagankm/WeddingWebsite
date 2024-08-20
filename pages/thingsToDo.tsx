import men from '@/assets/menAtBar.svg';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { Flex, Space, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from '../components/Link/Link';
import React from 'react';

export default function ThingsToDo() {
    const menW = 1707;
    const menH = 1149;
    const menScale = .4;

    return (
        <PageWrapper>
            <Title order={3}>Things To Do</Title>

            <Text>We have too many recommendations to list here, so we
                made <Link href={'https://www.google.com/maps/d/u/0/edit?mid=1ZHISOQfDBqCc14bhewJ3GMv_cdKbCAE&usp=sharing'}>this Google map</Link>
                {' '}where you can view them all and easily see
                if there's something cool near you.</Text>

            <Text>We also want to call out <Link href={'https://www.walk-seattle.com/'}>Seattle Free Walking Tours</Link>, which does funny and informative walking tours of Pike Place Market and downtown/Pioneer Square.</Text>
            <Text>And also <Link href={'https://www.walk-seattle.com/'}>Tours by Carter</Link> which has a really cool walking tour of 6 women who helped shape Seattle, including a madame, a snake oil salesman, and a mayor.</Text>

            <Space h='xs' />
            <Flex visibleFrom='md' h='100%' //direction='col'
                  justify='center' align='center'>
                <Image priority
                       src={men}
                       className={'bg-opacity-75'}
                       alt='old timey men and women at a bar'
                       style={{ objectFit: 'contain' }}
                       width={menW * menScale}
                       height={menH * menScale}
                />
            </Flex>


        </PageWrapper>
    )
}
