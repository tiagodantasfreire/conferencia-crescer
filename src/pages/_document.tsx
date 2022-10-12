import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <title>Conferência Crescer | Igreja Casa do Pai</title>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <meta name="theme-color" content="#EE0B52" />
        <meta name="msapplication-navbutton-color" content="#EE0B52" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#EE0B52"
        ></meta>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
