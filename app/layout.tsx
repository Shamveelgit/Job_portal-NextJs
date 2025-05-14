import React from "react";
import "./globals.css";
import Head from "next/head";
import StoreProvider from "../FirstPage/StoreProvider";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}


export default function RootLayout({ children }: {children : React.ReactNode}) {



  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="https://lh3.googleusercontent.com/a/ACg8ocKWES-QsWR0WlymRMsed03YHdtTCmFdp1Don9SmCHKUCytNZPA=s432-c-no" ></link>
      </Head>
      <StoreProvider>
        <body className="">
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
