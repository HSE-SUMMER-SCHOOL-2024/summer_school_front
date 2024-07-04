import Header from "../../templates/Header.jsx";
import {Link, useNavigate} from "react-router-dom";
import style from "./login.module.css"
import {SIGN_UP_ROUTE} from "../../../routing/consts.js";
import Input from "../../gineric/input/Input.jsx";
import Button from "../../gineric/Button/Button.jsx";
import {useState} from "react";
import {userLogin} from "../../../api/userApi.js";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const click = () => {
    const user = userLogin({email, password})

    if (user) {
      navigate('/account');
    }
  }

  return (
    <div>
      <Header/>

      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Вход</h1>
          <p>Нет аккаунта?
            <Link to={SIGN_UP_ROUTE}
                  className={style.link}>
              Зарегистрироваться</Link>
          </p>

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

          <Button text="Войти"
                  onClick={click}
          />
        </div>
      </div>
    </div>
  )
}

export default Login