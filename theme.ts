import { createTheme, MantineColorsTuple } from '@mantine/core';
import {
    Julius_Sans_One,
    Libre_Baskerville,
    Protest_Revolution
} from 'next/font/google';

// Text
const Libre = Libre_Baskerville({weight: '400', subsets: ['latin']});

// Display
export const protest = Protest_Revolution(
    {weight: '400',
        subsets: ['latin'],
        display: 'swap',
        adjustFontFallback: false

    });
const Julius = Julius_Sans_One({ weight: '400', subsets: ['latin'] });
const titleFont = Julius;


const grGreen: MantineColorsTuple = ['#C2C8C1', '#B8BFB7', '#ADB5AD', '#A3ACA2',
//'#B3BDB2',
    '#97a497',
    //'#99A398',
    '#8A9389',	'#7A827A',	'#6B726A',	'#5C625B',	'#4D524C']
const lGreen: MantineColorsTuple = ['#C7CEB9', '#C0C8B1', '#B9C2A8', '#A7AF97', '#949B86', '#828876', '#6F7465', '#5D6154', '#4A4E43', '#4A4E43'];
const mGreen: MantineColorsTuple = ['#9BA376', '#8B935F', '#7A8448', '#7A8448', '#59651A', '#505B17', '#475115', '#3E4712', '#353D10', '#2D330D'];
const mPurple: MantineColorsTuple = ['#AFA0C1', '#A392B8', '#9885AF', '#8C77A6', '#7E6B95', '#705F85', '#625374', '#544764', '#463C53', '#383042'];
export const theme = createTheme({
  /* Put your mantine theme override here */
    colors: {
        mutedGreen: mGreen,
        mutedPurple: mPurple,
        lightGreen: lGreen,
        greyGreen: grGreen,
    },
    //scale: 1.25,
    components: {
        HTML: {
            styles: (theme: any) => ({
                root: {
                    backgroundColor: theme.fn.themeColor('pink', theme.fn.primaryShade),
                    //backgroundColor: theme.colorScheme === 'dark' ? theme.colors['muted-green'][7] : '#96A497',
                    //color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                },
            }),
        },
      Body: {
          styles: (theme: any) => ({
              root: {
                  backgroundColor: theme.fn.themeColor('pink', theme.fn.primaryShade),
                  //backgroundColor: theme.colorScheme === 'dark' ? theme.colors['muted-green'][7] : '#96A497',
                  //color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              },

          }),
      },
    },
    headings: {
        fontFamily: titleFont.style.fontFamily,
        sizes: {
            h1: {
                fontSize: '4rem',
                fontWeight: '400',
            },
            h2: {
                fontSize: '3rem',
                fontWeight: '400',
            },
            h3: {
                fontSize: '2rem',
                fontWeight: '400',
            },
            h4: {
                fontSize: '1.5rem',
            },
            h5: {
                fontSize: '1.2rem',
            }
        }
    },
    fontFamily: Libre.style.fontFamily,
    fontSizes: {

    },
    breakpoints: {
        xs: '0em',
    },
    other: {
        globalStyles: (theme: any) => ({
            ':root': {
                '--mantine-color-body': 'var(--mantine-color-muted-purple-filled)',
                '--mantine-color-text': 'var(--mantine-color-muted-green-text)',
            },
            'html': {
                backgroundColor: theme.fn.themeColor('muted-purple', theme.fn.primaryShade()),
                color: theme.fn.themeColor('muted-green', theme.fn.primaryShade()),
            },
        }),
    },

});

//export const theme = mergeMantineTheme(DEFAULT_THEME, testTheme);
