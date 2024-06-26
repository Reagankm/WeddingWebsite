import { Center, Container, Grid, Space, Title } from '@mantine/core';
import {
    Bungee_Shade,
    Expletus_Sans,
    Josefin_Sans,
    Julius_Sans_One,
    Overlock_SC,
    Protest_Revolution,
    Tenor_Sans
} from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';

import PageWrapper from '@/components/PageWrapper/PageWrapper';

const Julius = Julius_Sans_One({ weight: '400', subsets: ['latin'] });

const Tenor = Tenor_Sans({weight: '400', subsets: ['latin']});
const Protest = Protest_Revolution({weight: '400', subsets: ['latin']});
const Expletus = Expletus_Sans({weight: '400', subsets: ['latin']});
const Bungee = Bungee_Shade({weight: '400', subsets: ['latin']});
const Overlock = Overlock_SC({weight: '400', subsets: ['latin']});
const Josefin = Josefin_Sans({ weight: '400', subsets: ['latin'] });
const victorian = localFont({src: '../assets/fonts/Victorian Supremacy Demo.otf'});

const HomePage = () => {
    return (
        <PageWrapper>
            {/*<Center>*/}
            <Grid>
                <Grid.Col>
                    <Container size={'md'} p={'xl'} visibleFrom='md'>
                        <Title>Kevin Ward</Title>
                        <Center>
                        <Title style={{fontFamily: Protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                        </Center>
                        <Title>Reagan Middlebrook</Title>
                    </Container>

                    <Container size={'xs'} p={'xl'} hiddenFrom='md'>
                        <Title order={2} >Kevin Ward</Title>
                        <Center>
                            <Title  order={2} style={{fontFamily: Protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                        </Center>
                        <Title  order={2}>Reagan Middlebrook</Title>
                    </Container>

                    <Space h="xl" />

                    <Container>
                        <Title order={2}>February 1, 2025</Title>
                        <Title order={2} >Save the Date</Title>
                    </Container>

                </Grid.Col>
            </Grid>
            {/*</Center>*/}
        </PageWrapper>
    )
}

export default HomePage;
