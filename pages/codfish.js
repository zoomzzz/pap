import Head from "next/head";
import Image from "next/image";
import styles from "../styles/page.module.css";
import background from "../assets/background.jpg";
import Navbar from "../components/Navbar";

export default function Home() {
  const { videos, container, backgroundContainer, fill } = styles;
  return (
    <>
      <Head>
        <title>Codfish</title>
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

        <h1>CodFish</h1>

        <div className={videos}>
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/8BRuXSq99nM?autoplay=0"
          />
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/KhHfKbNyzk4?autoplay=0"
          />
          <iframe
            width="620"
            height="415"
            src="https://www.youtube.com/embed/vZjjgw8Nc6Q?autoplay=0"
          />
        </div>
      </main>
    </>
  );
}
