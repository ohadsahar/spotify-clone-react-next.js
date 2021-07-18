import { ThemeProvider } from 'styled-components';
import theme from '@/theme/theme';
import { GlobalStyle } from '@/theme/globalStyle';
import Layout from '@/components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
