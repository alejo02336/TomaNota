// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <section className={styles.Home}>
      <section className={styles["home-banner"]}>
        <p className={styles["title-home"]}>TomaNota</p>
        <p>
          Web app que permita desplegar foros donde se pueden compartir:
          recomendaciones, experiencias, zona inseguras y demás funcionalidades
          para crear una comunidad. Cabe añadir que la información personal no
          será visible por otros usuarios, siende de forma anónima para guardar
          la privacidad de la persona.
        </p>
      </section>
    </section>
  );
}
