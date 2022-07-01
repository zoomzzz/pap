import Head from "next/head";
import Image from "next/image";
import styles from "../styles/page.module.css";
import background from "../assets/background.jpg";
import Navbar from "../components/nav/navbar";

export default function Home() {
  const { videos, container, backgroundContainer, fill } = styles;
  return (
    <>
      <Head>
        <title>B-Art</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={container}>
        <div className={backgroundContainer}>
          <Image
            objectFit="cover"
            alt="card pic"
            layout="fill"
            src={background}
          />
        </div>

        <h1>B-Art</h1>
        <div className={videos}>
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/e_o8QNxHOMw?autoplay=0"
          />
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/OVEhkkCK6PQ?autoplay=0"
          />
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/MhBk3_akVVI?autoplay=0"
          />
        </div>
      </main>
    </>
  );
}
