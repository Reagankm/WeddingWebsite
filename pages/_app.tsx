import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  createTheme,
  CSSVariablesResolver,
  MantineProvider,
  virtualColor
} from '@mantine/core';
import { theme } from '../theme';
import './global.css';
import { Josefin_Sans, Julius_Sans_One } from 'next/font/google'
//
// const testTheme = createTheme({
//     colors: {
//         primary: virtualColor({
//             name: 'primary',
//             dark: 'pink',
//             light: 'cyan',
//         }),
//     },
// });

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {

  },
  light: {
    '--mantine-color-body': theme.colors['greyGreen'][4],
    // '--mantine-color-body': theme.colors['mutedGreen'][1],
  },
  dark: {
    '--mantine-color-body': theme.colors['greyGreen'][4],
    // '--mantine-color-body': theme.colors['lightGreen'][4],
    // '--mantine-color-body': theme.colors['mutedGreen'][1],
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} forceColorScheme={'light'} cssVariablesResolver={resolver}
    >
      <Head>
        <title>Middlebrook Ward Wedding</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
