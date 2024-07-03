import styles from './title.module.css';

const Title = (text) => {
  return (
    <div className={`${styles.title}`}>
      <h1>{text.title}</h1>
    </div>
  );
};

export default Title