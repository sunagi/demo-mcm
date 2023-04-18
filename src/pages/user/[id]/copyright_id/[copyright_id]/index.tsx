import { Header } from "@/components/Header";
import styles from "@/styles/copyright.module.css";

const mockData = {
  usefor: "Store Music",
  price: "0.0001",
  ratio: "50",
};

export default function Copyright() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <h2>Overview of copyrightNFT</h2>
        <img
          className={styles.image}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          width="260"
          height="260"
        />
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <p className={styles.name}>Use for: </p>
            <p>　{mockData.usefor}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.name}>Price: </p>
            <p>　{mockData.price}ETH</p>
          </div>
          <div className={styles.item}>
            <p className={styles.name}>ratio: </p>
            <p className={styles.name}>0xxxxxxxxxx0000009</p>
            <p>　{mockData.ratio}%</p>
          </div>
        </div>
      </main>
    </>
  );
}
