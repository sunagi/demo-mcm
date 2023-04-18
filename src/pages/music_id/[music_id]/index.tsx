import React from "react";
import { UnityWebGL } from "../../../components/UnityWebGL";
import { Header } from "@/components/Header";
import styles from "@/styles/home.module.css";

const Index: React.FC = () => {
  return (
    <div>
      <main className={styles.main}>
        <Header />
        <UnityWebGL
          buildUrl="/unity-webgl/index.html"
          width="1000"
          height="2000"
        />
      </main>
    </div>
  );
};

export default Index;
