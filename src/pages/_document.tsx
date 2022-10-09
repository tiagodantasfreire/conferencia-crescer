import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <title>Conferência Crescer | Igreja Casa do Pai</title>
      <Head>
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
  );
}
