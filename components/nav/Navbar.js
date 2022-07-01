import Link from "next/link";
import styles from "../../styles/nav.module.css";

export default function Navbar() {
  const { nav, navItems } = styles;
  return (
    <div className={nav}>
      <Link href={"/"} passHref>
        <a>Boots N Cats</a>
      </Link>
      <div className={navItems}>
        <Link href={"/"} passHref>
          <a>Home</a>
        </Link>
        <Link href={"https://discord.gg/yaa3F4Q6/"}>
          <a
            href="https://discord.gg/yaa3F4Q6"
            target={"_blank"}
            rel="noreferrer"
          >
            Join Us
          </a>
        </Link>
      </div>
    </div>
  );
}
