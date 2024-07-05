import style from "./formField.module.css"

// eslint-disable-next-line react/prop-types
const FormField = ({label, type, value = '', setValue = () => {}}) => {
  return (
    <label className={style.formField}>
      {label}:
      <input type={type}
             style={{
               height: '30px',
             }}
             onChange={(e) => setValue(e.target.value)}
             value={value}
      />
    </label>
  );
};

export default FormField