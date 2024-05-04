import { CarImg } from '@/widgets/CarImg'
import styles from "./page.module.css";
import { Cars } from '@/widgets/Cars'
import { TradeIn } from '@/widgets/TradeIn'

export default function Home() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.Content}>
          <CarImg />
          <Cars />
          <TradeIn />
        </div>
      </div>
    </>
  );
}