import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss"
import "@/styles/extra.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function App({ Component, pageProps }) {
  
  useEffect(()=> {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-Y3K2LH6ZPV');
  })

  return(<>

   <GoogleAnalytics trackPageViews gaMeasurementId='G-TRFWGCFMHL' /> <Component {...pageProps} /></> );
}

export default App;
