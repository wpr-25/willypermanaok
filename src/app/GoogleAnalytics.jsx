"use client"

import Script from "next/script"
import * as gtag from "../app/gtag"

const GoogleAnalytics = () => {

    //You can show in the console the GA_TRACKING_ID to confirm
    console.log(gtag.GA_TRACKING_ID)

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.G-SWLRRNE0EV}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtag.G-SWLRRNE0EV}', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalytics
