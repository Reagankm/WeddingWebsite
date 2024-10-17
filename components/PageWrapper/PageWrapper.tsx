import { Center, Flex, Grid, Space, Stack } from '@mantine/core';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

import vineSvg from '../../assets/vine_thing.svg';
import Header from '../Header/Header';
import styles from './PageWrapper.module.css';

// const Josefin = Josefin_Sans({ weight: '400', subsets: ['latin'] });
// const Julius = Julius_Sans_One({ weight: '400', subsets: ['latin'] });
// const titleFont = Julius;

const PageWrapper = (props: PropsWithChildren) => {
    const currentYear = (new Date().getFullYear());
    const yearTxt = currentYear === 2024 ? "2024" : "2024 - " + currentYear;
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
                        <Space h='xs' />
                        <Center>
                            © { yearTxt } - Reagan Middlebrook
                            {/*<p>*/}
                            {/*    This website by Reagan Middlebrook is licensed under{' '}*/}
                            {/*    <a*/}
                            {/*        href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"*/}
                            {/*        target="_blank"*/}
                            {/*        rel="license noopener noreferrer"*/}
                            {/*        style={{ display: "inline-block" }}*/}
                            {/*    >*/}
                            {/*        CC BY-SA 4.0*/}
                            {/*        <img*/}
                            {/*            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"*/}
                            {/*            alt="CC icon"*/}
                            {/*            style={{ height: "22px", marginLeft: "3px", verticalAlign: "text-bottom" }}*/}
                            {/*        />*/}
                            {/*        <img*/}
                            {/*            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"*/}
                            {/*            alt="BY icon"*/}
                            {/*            style={{ height: "22px", marginLeft: "3px", verticalAlign: "text-bottom" }}*/}
                            {/*        />*/}
                            {/*        <img*/}
                            {/*            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"*/}
                            {/*            alt="SA icon"*/}
                            {/*            style={{ height: "22px", marginLeft: "3px", verticalAlign: "text-bottom" }}*/}
                            {/*        />*/}
                            {/*    </a>*/}
                            {/*    <p>*/}
                            {/*        <strong>Photo Disclaimer:</strong> The photographs displayed on this site are not owned by me and are used with permission or in accordance with applicable copyright law. These photos may not be copied, distributed, modified, or reused without the explicit permission of the original copyright holder.*/}
                            {/*    </p>*/}
                            {/*</p>*/}

                        </Center>
                        <Space h='xs' />
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
