import { CarImg } from '@/widgets/CarImg'
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.Content}>
          <CarImg />
        </div>
      </div>
    </>
  );
}