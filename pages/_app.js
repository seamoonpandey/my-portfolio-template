import '@/styles/globals.css';
import '../node_modules/normalize.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/components/theme/Theme';
import GlobalStyle from '@/styles/globalStyles';
import { Fragment } from 'react';

export default function App({ Component, pageProps }) {
  return (

    <Fragment>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>

  )
}
