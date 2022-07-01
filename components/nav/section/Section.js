import Image from "next/image";
import Link from "next/link";
import styles from "./section.module.css";
export default function Section({ background, reference }) {
  const { section, backgrondStyle, sectionContent } = styles;
  return (
    <div className={section}>
      <div className={backgrondStyle}>
        <Image
          objectFit="cover"
          alt="card pic"
          layout="fill"
          src={background}
        />
      </div>

      <div className={sectionContent}>
        <Link href={reference} passHref>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
}
