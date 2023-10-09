import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss"
import "@/styles/extra.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from 'next/head';
config.autoAddCss = false;

function App({ Component, pageProps }) {
  
  useEffect(()=> {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-Y3K2LH6ZPV');

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTWWNMW7');
  })

  return(<>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTWWNMW7"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <GoogleAnalytics trackPageViews gaMeasurementId='G-TRFWGCFMHL' /> <Component {...pageProps} /></> );
}

export default App;
