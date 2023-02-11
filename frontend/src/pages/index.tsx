import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Jonathan Davis</title>
                <meta name="description" content="A portfolio application"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        <code className={styles.code}>Jonathan Davis</code>
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{' '}
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <div className={styles.center_icon}>
                        <p className={styles.code}>
                            I can't get rid of this dope logo
                        </p>
                    </div>
                </div>

                <div className={styles.grid}>
                    <a
                        href={"/bio"}
                        className={styles.card}
                    >
                        <h2 className={inter.className}>
                            About <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Bio
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}
