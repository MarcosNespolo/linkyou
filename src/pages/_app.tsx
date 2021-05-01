import '../styles/global.scss';
import styles from '../styles/app.module.scss';

import Header from '../components/Header';
import Calculator from '../components/Calculator';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Calculator />
    </div>
  )
}

export default MyApp
