import style from "./info.module.css"
import FormField from "../../../gineric/FormField/FormField.jsx";
import Button from "../../../gineric/Button/Button.jsx";

// eslint-disable-next-line react/prop-types
const Info = ({name, surname, email}) => {
  return (
    <div className={style.info}>
      <FormField label="Фамилия" type="input" value={surname}/>
      <FormField label="Имя" type="input" value={name}/>
      <FormField label="Почта" type="email" value={email}/>
      <FormField label="Пароль" type="password"/>
      <Button/>
    </div>
  );
};

export default Info