import styles from "./NotFoundInfo.module.scss";

export const NotFoundInfo: React.FC = () => {
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
};
