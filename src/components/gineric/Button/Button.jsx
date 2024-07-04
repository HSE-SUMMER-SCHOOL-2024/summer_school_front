import style from './button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({text, onClick}) => {
  return (
    <button className={style.button}
            type="button"
            onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button