import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error}>
      <h2 className={styles.error__message}>Something went wrong</h2>
    </div>
  );
};

export { Error };
