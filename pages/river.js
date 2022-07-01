import Head from "next/head";
import Image from "next/image";
import styles from "../styles/page.module.css";
import background from "../assets/background.jpg";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  const { videos, container, backgroundContainer, fill } = styles;
  return (
    <>
      <Head>
        <title>River</title>
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

        <h1>River</h1>
        <div className={videos}>
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/Nfw_Udad52c?autoplay=0"
          />
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/BKkmwUHo2o0?autoplay=0"
          />
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/wqVKTt0l888?autoplay=0"
          />
        </div>
      </main>
    </>
  );
}
