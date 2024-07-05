import style from "./info.module.css"
import FormField from "../../../gineric/FormField/FormField.jsx";
import Button from "../../../gineric/Button/Button.jsx";
import {useEffect} from "react";
import {SIGN_IN_ROUTE} from "../../../../routing/consts.js";
import {userLogout} from "../../../../api/userApi.js";
import {setNotAuthAction} from "../../../../store/userReducers.js";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const Info = ({name, surname, email}) => {

  const navigate = useNavigate()

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isAuth) {
      navigate(SIGN_IN_ROUTE);
    }
  }, [isAuth]);

  const click = () => {
    userLogout()
    dispatch(setNotAuthAction())
  }

  return (
    <div className={style.info}>
      <FormField label="Фамилия" type="input" value={surname}/>
      <FormField label="Имя" type="input" value={name}/>
      <FormField label="Почта" type="email" value={email}/>
      <FormField label="Пароль" type="password"/>
      <Button text="Выход" onClick={click}/>
    </div>
  );
};

export default Info