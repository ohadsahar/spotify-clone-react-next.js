import { ThemeProvider } from 'styled-components';
import theme from '@/theme/theme';
import { GlobalStyle } from '@/theme/globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
