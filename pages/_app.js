import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cader</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Great health insurance!" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
