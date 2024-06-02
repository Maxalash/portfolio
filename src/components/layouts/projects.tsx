import Image from "next/image";
import styles from "./card.module.css";
import mainstyles from "./main.module.css";
import Subitems from "../common/Subitem";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    badges: ["badge 1", "badge 2"],
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    badges: ["badge 3", "badge 4"],
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={mainstyles.section_head}>
        <h2 className="paragraph">Projects</h2>
      </div>
      <div className={styles.section}>
        {projects.map((item) => {
          return <Card key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
}

function Card({
  title,
  description,
  badges,
  image,
}: {
  title: string;
  description: string;
  badges: string[];
  image?: string;
}) {
  return (
    <div className={styles.card}>
      <aside>{image ? <Image src={image} alt="" fill /> : ""}</aside>
      <div className={styles.content}>
        <p className="bold">{title}</p>
        <p className="subtext noselect">{description}</p>
        <div>
          <Subitems items={badges} />
        </div>
      </div>
    </div>
  );
}
