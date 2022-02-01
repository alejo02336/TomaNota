import styles from "../styles/NotFound.module.scss";

export default function NotFound() {
  return (
    <section className={styles.Error}>
      <section className={styles["container__error--details"]}>
        <h2>No tienes acceso</h2>
        <p>Página no encontrada</p>
      </section>
    </section>
  );
}
