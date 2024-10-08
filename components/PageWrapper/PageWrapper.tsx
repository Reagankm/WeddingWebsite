import { Flex, Grid, Space, Stack } from '@mantine/core';
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
                <Grid.Col span={{base: 2, lg: 2, xs: 3}}>
                    <Flex style={{ height: '100vh' }} visibleFrom='sm'
                          justify='center' align='center'>
                        <Image priority alt='vine illustration' className={'bg-opacity-75'} src={vineSvg} />
                    </Flex>
                    <Flex style={{ height: '100vh' }} hiddenFrom='sm'  h='100%'// direction='col'
                          justify='center' align='center'>
                        <Image alt='vine illustration' className={'bg-opacity-25'} src={vineSvg} />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={{base: 8, lg: 8, xs: 9}}
                          className={styles.mainCol}>
                    <Stack mb={'2em'} align='stretch' justify='center'>
                        <Header />
                        <Space h="md" />
                        {props.children}
                    </Stack>
                </Grid.Col>
                <Grid.Col visibleFrom='md' span={{base: 2}}>
                    <Flex style={{ height: '100vh' }} visibleFrom='lg' h='100%'
                          justify='center' align='center'>
                        <Image priority alt='vine illustration' className={'bg-opacity-75'} src={vineSvg} />
                    </Flex>
                </Grid.Col>
            </Grid>
        </Stack>
    );
};

export default PageWrapper;
