import styles from "./NotFoundInfo.module.scss";

export function NotFoundInfo() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        ПУСТОТА!!!!!!
      </h1>
      <p className={styles.description}>Тут ничего, уходите!!</p>
    </div>
  );
}
