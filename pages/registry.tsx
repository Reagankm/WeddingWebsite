import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { Center, Flex, Grid, Space, Text, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import bird from '../assets/bird.svg';
import person1 from '../assets/person1.svg';
import person2 from '../assets/person2.svg';

export default function Registry() {

    const birdW = 284;
    const birdH = 172;
    const birdScale = 1.5;

    const personScale = .5;
    const person1W = 610;
    const person1H = 602;

    const person2W = 622;
    const person2H = 602;

    return (
        <PageWrapper>
            <Center>
                <Grid>
                    <Grid.Col span={6}>
                        <Flex visibleFrom='md' h='100%' direction='col'
                              justify='center' align='center'>
                            <Image src={person1}
                                   className={'flip-horizontal'}
                                   style={{ objectFit: 'contain' }}
                                   width={person1W * personScale}
                                   height={person1H * personScale}
                            />
                        </Flex>
                        <Flex hiddenFrom='md' h='100%' direction='col'
                              justify='center' align='center'>
                            <Image src={person1}
                                   className={'flip-horizontal'}
                                   style={{ objectFit: 'contain' }}
                                   width={person1W * personScale / 2}
                                   height={person1H * personScale / 2}
                            />
                        </Flex>
                    </Grid.Col>

                    <Grid.Col span={6}>
                        <Flex visibleFrom='md' h='100%' direction='col'
                              justify='center' align='center'>
                            <Image src={person2}
                                   style={{ objectFit: 'contain' }}
                                   width={person2W * personScale}
                                   height={person2H * personScale}
                            />
                        </Flex>
                        <Flex hiddenFrom='md' h='100%' direction='col'
                              justify='center' align='center'>
                            <Image src={person2}
                                   style={{ objectFit: 'contain' }}
                                   width={person2W * personScale / 2}
                                   height={person2H * personScale / 2}
                            />
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Center>

            <Space h='md' />
            <Title order={3}>Instead of a registry, we want your favorite
                book</Title>
            <Space h='sm' />

            <Text>The first conversations we had were about graphic novels and
                Kevin's feminist book club. We never pass a bookstore without
                going in. And many of our dates, past and present, involve just
                sitting at a bar/restaurant/cafe/winery/brewery reading
                together.</Text>
            <Space h='md' />
            <Text>Rather than going the traditional route and registering for
                housewares, we're requesting instead that you give us your
                favorite book.</Text>
            <Space h='md' />
            <Text>This can be anything. We're not snobby about it. Whether your
                favorite book is something from grade school or high school, or
                a Nobel Prize winner, or a comic book, or something you read to
                your kids, or some dense and enlightening serious work of
                non-fiction, or something you listened to as an audio book.
                Doesn't matter.</Text>
            <Space h='md' />
            <Text>If you've finished it and you love it, we'd be honored to
                receive a copy.</Text>
            <Center>
                <Flex visibleFrom='md' h='100%' direction='col' justify='center' align='center'>
                    <Image src={bird}
                           style={{ objectFit: 'contain' }}
                           width={birdW * birdScale}
                           height={birdH * birdScale}
                           alt='a bird with a halo sits atop an open book'
                    />
                </Flex>
                <Flex hiddenFrom='md' h='100%' direction='col' justify='center' align='center'>
                    <Image src={bird}
                           style={{ objectFit: 'contain' }}
                           width={birdW * birdScale / 2}
                           height={birdH * birdScale / 2}
                           alt='a bird with a halo sits atop an open book'
                    />
                </Flex>
            </Center>

        </PageWrapper>
    )
}
