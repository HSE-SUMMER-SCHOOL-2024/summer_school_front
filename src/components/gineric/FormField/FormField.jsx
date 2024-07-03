import style from "./formField.module.css"

const FormField = (field) => {
  return (
    <label className={style.formField}>
      {field.label}:
      <input type={field.type} value={field.value}/>
    </label>
  );
};

export default FormField