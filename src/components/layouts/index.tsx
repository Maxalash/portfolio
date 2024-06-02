import About from "./about";
import Experience from "./experience";
import Header from "./Header/Header";
import styles from "./main.module.css";
import Projects from "./projects";

export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
      <main id="content" className={styles.main}>
        <About />
        <Experience />
        {/* <Projects /> */}
        <section>
          <p>
            Feel free to reach out for collaboration, project inquiries, or just
            to discuss the latest in tech and development. Let&apos;s create
            something amazing together!
          </p>
        </section>
      </main>
    </div>
  );
}
