import style from './input.module.css';

// eslint-disable-next-line react/prop-types
const Input = ({text, type, value = '', setValue = () => {}}) => {
  return (
    <label className={style.input}>
      {text}
      <input className={style.inputField}
             type={type}
             onChange={(e) => setValue(e.target.value)}
             value={value}
      />
    </label>
  )
}

export default Input