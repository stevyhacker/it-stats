import {Metadata} from 'next'
import React from 'react';
import './index.css';
import './App.css';
import Footer from "../components/Footer/Footer";
import Link from "next/link";

// import * as serviceWorker from '@/serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'typeface-nunito'
// import 'typeface-nunito-sans'
// import 'typeface-montserrat'
// import 'typeface-anton'
// import 'typeface-roboto-condensed'


import {Nunito, Nunito_Sans, Montserrat, Roboto_Condensed} from 'next/font/google'

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

        </html>
    )
}
