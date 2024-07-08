import style from './button.module.css';

// eslint-disable-next-line react/prop-types,no-unused-vars
const Button = ({text, onClick = () => {}, args = ['a']}) => {



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