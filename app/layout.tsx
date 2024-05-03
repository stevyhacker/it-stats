import {Metadata} from 'next'
import React from 'react';
import './index.css';
import Footer from "../components/Footer/Footer";
import Link from "next/link";

// import * as serviceWorker from '@/serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { GoogleAnalytics } from '@next/third-parties/google'


import {Nunito, Nunito_Sans, Montserrat, Roboto_Condensed} from 'next/font/google'
import Script from "next/script";

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({
    display: 'swap',
    weight: ['400', '600', '700'],
    subsets: ['latin-ext'],
})

const nunito_sans = Nunito_Sans({
    display: 'swap',
    weight: ['400', '600', '700'],
    subsets: ['latin-ext'],
})

const montserrat = Montserrat({
    subsets: ['latin-ext'],
})

const roboto_condensed = Roboto_Condensed({
    display: 'swap',
    weight: ['400', '600', '700'],
    subsets: ['latin-ext'],
})

export const metadata: Metadata = {
    title: 'IT Stats',
    description: 'IT Montenegro - Companies Finance Stats by Year - 2015-2023',
    keywords: 'IT, Montenegro, Finance, Stats, Revenue, ICT, Plate, Firme, Zarade, Crna Gora, Podgorica, Companies, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023',
}

export default function RootLayout({
                                       // Layouts must accept a children prop.
                                       // This will be populated with nested layouts or pages
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en"
              className={`${nunito.className} ${nunito_sans.className} ${roboto_condensed.className} ${montserrat.className}  `}>

        <body>
        <div className="app">
            <Link href={"/"}>
                <h3 className="text-center app-title ">IT Montenegro - Stats by Year</h3>
            </Link>
            {children}
            <br/>
            <Footer/>
        </div>
        </body>
        <Script
            async
            src="https://analytics.eu.umami.is/script.js"
            data-website-id="6fadf732-8530-481c-9ae9-618cf5a8182f"
        />
        <GoogleAnalytics gaId="G-1W2VDRX5R1" />
        </html>
    )
}
