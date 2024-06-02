import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import styles from "./page.module.css";
import Index from "@/components/layouts";
import Providers from "./providers";

export default function Home() {
  return (
    <Providers>
      <div className={styles.app}>
        <ThemeSwitcher />
        <Index />
      </div>
    </Providers>
  );
}
