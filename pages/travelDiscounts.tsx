import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { Space, Text, Title } from '@mantine/core';
import Link from '../components/Link/Link';
import React from 'react';

export default function TravelDiscounts() {
    return (
        <PageWrapper>

            <Title order={3}>Discounts on Flights</Title>
            <Text>Seattle-Tacoma International Airport (SEA) is the closest
                airport. It's a hub for Alaska Airlines.</Text>
            <Text>We have a <b>discount code that gets 7% off</b> Alaska flights that
                occur anytime between January 24 and February 6, 2025. Go to <Link href={'https://alaskaair.com'}>alaskaair.com</Link>
                {' '}and input Discount Code <b>ECMK733</b> when searching for flights.</Text>
            <Text>You need to book through the website, not in the app, in order
                for the code to work. It's only valid for flights within the contiguous United States (not Alaska or Hawaii).</Text>

            <Space h='sm' />
            <Title order={3}>Discounts on Hotels</Title>

            <Link href={'https://www.hotelsorrento.com/'}>
                <Title order={5} td='underline'>Sorrento Hotel, 900 Madison St, Seattle, WA</Title>
            </Link>
            <Text>The Sorrento Hotel is a cool, old hotel on First Hill in Seattle.
                It's located near transit (street cars, buses, light rail) and
                I-5, as well as a few blocks away from the great nightlife and restaurants
                of nearby Capitol Hill, as well as around the corner from a great coffee
                shop and bakery (named Sugar, it's on the map in the Things To Do section).</Text>
            <Text>We have a <b>discount code for 15% off</b> if you book through <Link href={'https://reservations.travelclick.com/108384?RatePlanId=5504524&discount=events15#/guestsandrooms'}>this link</Link>.</Text>

            <Space h='xs' />
            <Link href={'https://www.marriott.com/en-us/hotels/seafp-four-points-downtown-seattle-center/overview/'}>
                <Title order={5} td='underline'>Four Points by Sheraton, 601 Roy St, Seattle, WA</Title>
            </Link>
            <Text>The Four Points is only a couple blocks away from the Space Needle
                and Seattle Center, as well as being near Lake Union and Highway 99
                which has regular buses that can get you to the light rail and to our venue.</Text>
            <Text>We have rooms at a <b>discounted rate of $115/night</b> for stays
                anywhere in between January 26 and February 5.  (You must make your
                reservation by December 31 or they'll release the rooms they're holding
                for us.)  To book, <Link href={'https://www.marriott.com/events/start.mi?id=1723482010856&key=GRP'}>use this link</Link>.</Text>

            <Space h='xs' />
            <Link href={'https://www.palladianhotel.com/'}>
                <Title order={5} td='underline'>Kimpton Palladian, 2000 Second Ave, Seattle, WA</Title>
            </Link>
            <Text>The Kimpton Palladian is a boutique hotel in Seattle's Belltown neighborhood and is very close
                to the famous Pike Place Market (where they throw the fish...). This offer includes
            free wifi, free coffee from 7am to 10am, free wine from 5pm to 6pm, and free 24 hour gym access.</Text>
            <Text>We have rooms at a <b>discounted rate of $167/night</b> for stays
                anywhere in between January 29 and February 3.  (You must make your
                reservation by December 31 or they'll release the rooms they're holding
                for us.)  To book, <Link href={'https://www.kimptonhotels.com/redirect?path=hd&brandCode=KI&localeCode=en&regionCode=1&hotelCode=SEAPD&_PMID=99801505&GPC=MWS&cn=no&viewfullsite=true'}>use this link</Link>.</Text>


        </PageWrapper>
    )
}
