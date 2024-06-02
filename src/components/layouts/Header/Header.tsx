import Image from "next/image";
import styles from "./header.module.css";
import React from "react";
import Menu from "./menu";
import GithubIcon from "@/components/assets/Github";
import LinkedinIcon from "@/components/assets/Linkedin";
import MailboxIcon from "@/components/assets/Mailbox";

const links = [
  {
    icon: GithubIcon,
    alt: "github",
    link: "https://github.com/maxalash",
  },
  {
    icon: LinkedinIcon,
    alt: "linkedin",
    link: "https://www.linkedin.com/in/makhmut-zhantleuov-a5088a1b5",
  },
  {
    icon: MailboxIcon,
    alt: "Mail",
    link: "mailto:makhmut.zhantleuov@gmail.com",
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
            <a key={item.alt} href={item.link}>
              {item.icon({ fill: "var(--color-medium-blue)" })}
            </a>
          );
        })}
      </div>
    </header>
  );
}
