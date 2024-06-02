import LinkarrowIcon from "../assets/Linkarrow";
import Subitem from "../common/Subitem";
import styles from "./card.module.css";
import mainstyles from "./main.module.css";

const experience = [
  {
    title: "Lead Frontend Developer",
    description:
      "Develop web components with NextJS and React. Optimize performance with LightHouse. Design architecture using UML and Mermaid. Collaborate in Figma for UI/UX. Lead a team, using Agile Scrum (Jira). Implement MVC, CI/CD, Docker, and multilingual support. Boost engagement with chat services and Web3 wallet using VueJS.",
    badges: [
      "NextJS",
      "React",
      "VueJS",
      "Redux",
      "Typescript",
      "Leaflet",
      "Figma",
    ],
    label: "2022 - 2024",
  },
  {
    title: "Frontend Developer Intern",
    description:
      "Develop and maintain ReactJS web components. Integrate frontend with backend APIs and conduct tests. Design architecture using UML and Mermaid. Assist in project design with Figma. Use Agile Scrum (Jira) to enhance speed. Implement multilingual support.",
    badges: ["React", "Figma", "Redux", "Typescript", "UML"],
    label: "Jun - Aug 2021",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className={mainstyles.section_head}>
        <h2 className="paragraph">Experience</h2>
      </div>
      <div className={styles.section}>
        {experience.map((item) => {
          return <Card key={item.title} {...item} />;
        })}
      </div>
      <br />
      <a style={{ color: "var(--color-contrast)" }} href="/cv.pdf">
        View full CV <LinkarrowIcon fill="var(--color-contrast)" />
      </a>
    </section>
  );
}

function Card({
  title,
  description,
  badges,
  label,
}: {
  title: string;
  description: string;
  badges: string[];
  label: string;
}) {
  return (
    <div className={styles.card}>
      <aside className="caption" style={{ textWrap: "nowrap" }}>
        {label}
      </aside>
      <div className={styles.content}>
        <p className="bold" style={{ color: "var(--color-title)" }}>
          {title}
        </p>
        <p className="subtext noselect">{description}</p>
        <div>
          <Subitem items={badges} />
        </div>
      </div>
    </div>
  );
}
