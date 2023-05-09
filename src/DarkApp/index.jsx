import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import OutfitTtf from '../assets/Outfit.ttf'
import RobotoMonoTtf from '../assets/RobotoMono.ttf'
import QuicksandTtf from '../assets/Quicksand.ttf'

const FontStyleOverride = (fontName, font) => `
@font-face {
  font-family: '${fontName}';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local('${fontName}'), url(${font}) format('truetype');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
};
`

const theme = createTheme({
  typography: {
    h3: { fontFamily: 'Outfit, sans-serif' },
    h4: { fontFamily: 'Outfit, sans-serif' },
    subtitle1: { fontFamily: 'Quicksand, sans-serif' },
    fontFamily: 'Roboto Mono, Monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ${FontStyleOverride('Outfit', OutfitTtf)}
        ${FontStyleOverride('Roboto Mono', RobotoMonoTtf)}
        ${FontStyleOverride('Quicksand', QuicksandTtf)}
      `,
    },
  },
  palette: { mode: 'dark' },
})

/** Dark theme wrapper for Spp. */
function DarkApp(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}

export default DarkApp
