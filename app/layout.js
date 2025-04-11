import Header from "@/FirstPage/Header";
import "./globals.css";
import StoreProvider from "@/FirstPage/Providers";

export default function RootLayout({ children }) {




  return (
    <html lang="en" webcrx="true">
      <head>
        <link rel="icon" href="https://lh3.googleusercontent.com/a/ACg8ocKWES-QsWR0WlymRMsed03YHdtTCmFdp1Don9SmCHKUCytNZPA=s432-c-no" ></link>
      </head>
      <StoreProvider>
          <body className="">
            <div className={`bg-background w-full min-h-screen flex flex-col gap-10 transition-colors duration-500`}>
              <Header />
              {children}
            </div>
          </body>
      </StoreProvider>
    </html>
  );
}
