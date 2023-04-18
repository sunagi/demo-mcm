import styles from "@/styles/home.module.css";

import { Header } from "@/components/Header";

// TODO: components分離。その際にcssファイルはpagesは以下では読み込まない様修正
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <img src="/kv.png" width="600" height="600" />
      </main>
    </>
  );
}
