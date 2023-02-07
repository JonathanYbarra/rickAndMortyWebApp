import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    grey: {
      50: string;
    };
  }
}

const theme = createTheme(
  {
    typography: {
      fontFamily: ['Encode Sans'].join(','),
      h1: {
        fontSize: '3rem',
        fontWeight: 500,
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: 500,
      },
    },
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#2196f3',
      },
      grey: {
        50: '#fafafa',
      },
    },
  },
);

export default theme;
