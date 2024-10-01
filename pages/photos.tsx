import Link from '@/components/Link/Link';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { Container, Text } from '@mantine/core';
import Image from "next/image";
import React from 'react';
import {
    RenderImageContext,
    RenderImageProps,
    RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

export default function Photos() {

    const photos = [
        {
            src: "/photos/reagan-kevin-eng-shkweddings_021_websize.jpg",
            alt: "ventress the scottie dog in front of kevin and reagan",
            width: 1024 / 10,
            height: 683 / 10
        },
        {
            src: "/photos/reagan-kevin-eng-shkweddings_053_websize.jpg",
            alt: "ventress the scottie dog in front of kevin and reagan",
            width: 683 / 10,
            height: 1024 / 10
        },
        {
            src: "/photos/reagan-kevin-eng-shkweddings_056_websize.jpg",
            alt: "ventress the scottie dog in front of kevin and reagan",
            width: 1024 / 10,
            height: 683 / 10
        },
        {
            src: "/photos/reagan-kevin-eng-shkweddings_126_websize.jpg",
            alt: "ventress the scottie dog in front of kevin and reagan",
            width: 1024 / 10,
            height: 683 / 10
        },
        {
            src: "/photos/reagan-kevin-eng-shkweddings_144_websize.jpg",
            alt: "ventress the scottie dog in front of kevin and reagan",
            width: 1024 / 10,
            height: 683 / 10
        },
        {
            src: "/photos/reagan-kevin-eng-shkweddings_167_websize.jpg",
            alt: "ventress the scottie dog in front of kevin and reagan",
            width: 1024 / 10,
            height: 683 / 10
        },
        {
            src: "/photos/reagan-kevin-eng-shkweddings_170_websize.jpg",
            alt: "ventress the scottie dog in front of kevin and reagan",
            width: 683 / 10,
            height: 1024 / 10
        },

    ];

    function renderNextImage(
        { alt = "", title, sizes }: RenderImageProps,
        { photo, width, height }: RenderImageContext,
    ) {
        return (
            <div
                style={{
                    width: "100%",
                    height: height,
                    position: "relative",
                    aspectRatio: `${width} / ${height}`,
                }}
            >
                <Image
                    fill
                    src={photo}
                    alt={alt ? alt : photo.src}
                    title={title}
                    placeholder={"blurDataURL" in photo ? "blur" : undefined}
                />
            </div>
        );
    }

    return (
        <PageWrapper>
            <Container>
                {/*<Title order={2}>Engagement Photos</Title>*/}
                <Text>Here is a small selection. To view the rest of the engagement photos, go here:{` `}
                <Link href={'https://shkweddings.pic-time.com/-reagankevinengagement'}>Engagement photos by Sarah Kusz</Link></Text>
            </Container>
            <RowsPhotoAlbum
                photos={photos}
                render={{ image: renderNextImage }}
                defaultContainerWidth={500}
            />

        </PageWrapper>
    )
}
