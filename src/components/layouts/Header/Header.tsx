import Image from "next/image";
import styles from "./header.module.css";
import React from "react";
import Menu from "./menu";

const links = [
  {
    icon: "/github.svg",
    alt: "github",
    link: "https://github.com/maxalash",
  },
  {
    icon: "/linkedin.svg",
    alt: "linkedin",
    link: "https://www.linkedin.com/in/makhmut-zhantleuov-a5088a1b5",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">
          <h1>Makhmut Zhantleuov</h1>
        </a>

        <h2 style={{ marginTop: ".2rem" }}>Middle Frontend Engineer</h2>
        <p
          style={{
            marginTop: "1rem",
            color: "var(--color-medium-blue)",
            width: "320px",
          }}
        >
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <br />
        <br />
        <Menu />
      </div>
      <div className={styles.links}>
        {links.map((item) => {
          return (
            <a key={item.alt} href={item.link} target="_blank">
              <Image src={item.icon} alt={item.alt} width={24} height={24} />
            </a>
          );
        })}
      </div>
    </header>
  );
}
