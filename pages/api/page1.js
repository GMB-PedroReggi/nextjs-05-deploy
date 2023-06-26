import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
        <head> 
            <title>Page 1</title>
            <meta name="description" content="Generate by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </head>
    </div>
  )
}
