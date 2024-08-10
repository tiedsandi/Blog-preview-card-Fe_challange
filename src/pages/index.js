import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import {Figtree} from 'next/font/google';
import Image from 'next/image';

const figtree = Figtree({subsets: ['latin'], variable: '--font-main'});

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Preview Card - FE Challenge</title>
        <meta name='description' content='Frontend Blog Preview' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${figtree.variable} ${styles.container}`}>
        <div className={styles.imageContainer}>
          <Image alt='hero' src={'./Blog Image.svg'} fill style={{objectFit: 'cover'}} priority />
        </div>

        <section className={styles.main}>
          <div className={styles.tags}>Learning</div>
          <div className={styles.published}>Published 21 Dec 2023</div>
          <h1 className={styles.title}>HTML & CSS foundations</h1>
          <p className={styles.description}>
            These languages are the backbone of every website, defining structure, content, and
            presentation.
          </p>
        </section>
        <div className={styles.footer}>
          <div className={styles.authorImage}>
            <Image src='./Blog Image.svg' alt='Author' fill style={{objectFit: 'cover'}} priority />
          </div>
          <p>Fachran Sandi</p>
        </div>
      </main>
    </>
  );
}
