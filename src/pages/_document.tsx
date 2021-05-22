import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
          { /* <!-- Primary Meta Tags --> */}
          <meta name="title" content="League Tools" />
          <meta name="description" content="The best tool of League of Legends today." />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pay-lol-cookieyukasan.vercel.app/" />
          <meta property="og:title" content="League Tools" />
          <meta property="og:description" content="The best tool of League of Legends today." />
          <meta property="og:image" content="https://media.discordapp.net/attachments/630193740149162004/838929383279427634/icon.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://pay-lol-cookieyukasan.vercel.app/" />
          <meta property="twitter:title" content="League Tools" />
          <meta property="twitter:description" content="The best tool of League of Legends today." />
          <meta property="twitter:image" content="https://media.discordapp.net/attachments/630193740149162004/838929383279427634/icon.png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}