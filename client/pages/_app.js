import { ThemeProvider } from 'styled-components';
import theme from '@/theme/theme';
import { GlobalStyle } from '@/theme/globalStyle';
import Layout from '@/components/Layout/Layout';
import { Provider } from 'react-redux';
import store from '@/store/store';

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>

  )
}

export default MyApp
