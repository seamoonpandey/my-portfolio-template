import '@/styles/globals.css';
import '../node_modules/normalize.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/components/theme/Theme';
import GlobalStyle from '@/styles/globalStyles';
import { Fragment } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  return (

    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter >
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </Fragment>

  )
}
