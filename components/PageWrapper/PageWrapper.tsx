import { Container, Flex, Grid, Space, Center, Stack } from '@mantine/core';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

import vineSvg from '../../assets/vine_thing.svg';
import Header from '../Header/Header';

import styles from './PageWrapper.module.css';

// const Josefin = Josefin_Sans({ weight: '400', subsets: ['latin'] });
// const Julius = Julius_Sans_One({ weight: '400', subsets: ['latin'] });
// const titleFont = Julius;

const PageWrapper = (props: PropsWithChildren) => {
    return (
        <Stack align='stretch' justify='center'>
        <Grid className={styles.mainRoot}>
            <Grid.Col
                span={{base: 2, lg: 2, sm: 3}}>
                <Flex style={{ height: '100vh' }} visibleFrom='md'  direction='col' justify='center' align='center'>
                    <Image className={'bg-opacity-75'} src={vineSvg} />
                </Flex>
                <Flex style={{ height: '100vh' }} hiddenFrom='md'  h='100%' direction='col' justify='center' align='center'>
                    <Image className={'bg-opacity-25'} src={vineSvg} />
                </Flex>
            </Grid.Col>
            <Grid.Col span={{base: 8, lg: 8, sm: 9}}
                      className={styles.mainCol}
            >
                <Stack align='stretch' justify='center'
                >
                    <Header />
                    <Space h="md" />
                    {props.children}
                </Stack>
            </Grid.Col>
            <Grid.Col visibleFrom='md' span={{base: 2}}>
                <Flex style={{ height: '100vh' }} visibleFrom='md' h='100%' direction='col' justify='center' align='center'>
                    <Image className={'bg-opacity-75'} src={vineSvg} />
                </Flex>
            </Grid.Col>
        </Grid>
        </Stack>
    );
};

export default PageWrapper;
