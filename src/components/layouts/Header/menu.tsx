"use client";
import styles from "./header.module.css";
import React, { useEffect } from "react";
export default function Menu() {
  useEffect(() => {
    function setActiveClass() {
      const menuItems = document.querySelectorAll(".menuItem");
      const headers = document.getElementsByTagName("section");
      const headerOffsets = Array.from(headers).map((header) => {
        return {
          id: header.id,
          offsetTop: header.offsetTop,
        };
      });

      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      const screenHeight = window.innerHeight / 2;
      let itemId: number;

      headerOffsets.forEach((header, index) => {
        if (scrollPosition + screenHeight >= header.offsetTop) {
          itemId = index;
        }
      });
      menuItems.forEach((link, index) => {
        link.classList.remove(styles.active);
        if (index === itemId) {
          link.classList.add(styles.active);
        }
      });
    }
    setActiveClass();

    window.addEventListener("scroll", setActiveClass);
  }, []);
  return (
    <ul className={styles.menu} style={{ marginTop: "1rem" }}>
      <MenuItem text="ABOUT" link="/#about" />
      <MenuItem text="EXPERIENCE" link="/#experience" />
      {/* <MenuItem text="PROJECTS" link="/#projects" /> */}
    </ul>
  );
}

function MenuItem({ text, link }: { text: string; link: string }) {
  const element = React.useRef<HTMLLIElement>(null);
  return (
    <li className={`caption bold menuItem`} ref={element}>
      <a href={link}>
        <span className={styles.line} /> &emsp;
        {text}
      </a>
    </li>
  );
}
