import style from './button.module.css';

const Button = () => {
  return (
    <button className={style.button} type="button">
      Сохранить
    </button>
  );
};

export default Button