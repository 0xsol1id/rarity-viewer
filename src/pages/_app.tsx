import React from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/App.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  );
}

export default MyApp;
