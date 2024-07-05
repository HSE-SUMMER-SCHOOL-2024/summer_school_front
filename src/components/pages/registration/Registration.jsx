import Header from "../../templates/Header.jsx";
import {Link, useNavigate} from "react-router-dom";
import style from "./registration.module.css"
import {SIGN_IN_ROUTE} from "../../../routing/consts.js";
import Input from "../../gineric/input/Input.jsx";
import Button from "../../gineric/Button/Button.jsx";
import {useState} from "react";
import {userRegistration} from "../../../api/userApi.js";

const Registration = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  const navigate = useNavigate()

  const click = () => {
    const user = userRegistration({email, password, name, surname})

    if (user) {
      navigate(SIGN_IN_ROUTE);
    }
  }

  return (
    <div>
      <Header/>

      <div className={style.registration}>
        <div className={style.registrationForm}>
          <h1>Регистрация</h1>
          <p>Уже есть аккаунт?
            <Link to={SIGN_IN_ROUTE}
                  className={style.link}>
              Войти</Link>
          </p>

          <Input text="Имя"
                 type="input"
                 value={name}
                 setValue={setName}
          />

          <Input text="Фамилия"
                 type="input"
                 value={surname}
                 setValue={setSurname}
          />

          <Input text="Почта"
                 type="email"
                 value={email}
                 setValue={setEmail}
          />

          <Input text="Пароль"
                 type="password"
                 value={password}
                 setValue={setPassword}
          />

          <Button text="Регистрация"
                  onClick={click}
          />
        </div>
      </div>
    </div>
  )
}

export default Registration