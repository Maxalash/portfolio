import About from "./about";
import Header from "./Header/Header";
import styles from "./main.module.css";
import Projects from "./projects";

export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
      <main id="content" className={styles.main}>
        <About />
        <Projects />
      </main>
    </div>
  );
}
