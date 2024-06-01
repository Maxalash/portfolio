import styles from "./page.module.css";
import Index from "@/components/layouts";

export default function Home() {
  return (
    <div className={styles.app}>
      <Index />
    </div>
  );
}
