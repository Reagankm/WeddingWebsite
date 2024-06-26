import { Container, Flex, Grid, Space } from '@mantine/core';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

import vineSvg from '../../assets/vine_thing.svg';
import Header from '../Header/Header';

// const Josefin = Josefin_Sans({ weight: '400', subsets: ['latin'] });
// const Julius = Julius_Sans_One({ weight: '400', subsets: ['latin'] });
// const titleFont = Julius;

const PageWrapper = (props: PropsWithChildren) => {
    return (
        <Grid>
            <Grid.Col span={{base: 2, sm: 3, lg: 2}}>
                <Flex visibleFrom='md' h='100%' direction='col' justify='center' align='center'>
                    <Image className={'bg-opacity-75'} src={vineSvg} />
                </Flex>
                <Flex hiddenFrom='md'  h='100%' direction='col' justify='center' align='center'>
                    <Image className={'bg-opacity-25'} src={vineSvg} />
                </Flex>
            </Grid.Col>
            <Grid.Col span={{base: 8, sm: 9, lg: 8}}>
                <Container>
                    <Header />
                    <Space h="md" />
                    {props.children}
                </Container>
            </Grid.Col>
            <Grid.Col visibleFrom='md' span={{base: 2}}>
                <Flex visibleFrom='md' h='100%' direction='col' justify='center' align='center'>
                    <Image className={'bg-opacity-75'} src={vineSvg} />
                </Flex>
            </Grid.Col>
        </Grid>
    );
};

export default PageWrapper;
