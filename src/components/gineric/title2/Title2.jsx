import styles from './title2.module.css';

const Title2 = (text) => {
  return (
    <div className={`${styles.title}`}>
      <h2>{text.title}</h2>
    </div>
  );
};

export default Title2