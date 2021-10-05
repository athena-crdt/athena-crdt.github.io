import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import RoadMap from '../components/roadmap/RoadMap';
import ScrollTop from '../components/scrolltop/ScrollTop';
import styles from '../styles/Home.module.scss';
import fs from 'fs';

const Main: NextPage = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Athena</title>
        <meta name="description" content="Athena Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="js/swiper-bundle.min.js" defer />
        <script src="js/main.min.js" defer />
      </Head>

      <Header {...props} />
      <main className={styles.main + ' main'}>
        <Home {...props} />
        <About {...props} />
        <RoadMap {...props} />
        <Contact {...props} />
      </main>
      <Footer {...props} />
      <ScrollTop />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = JSON.parse(
    fs.readFileSync('data/config.json', { encoding: 'utf-8' })
  );
  return {
    props: { ...data },
  };
};

export default Main;
