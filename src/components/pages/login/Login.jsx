import Header from "../../templates/Header.jsx";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header/>
      <h1>Вход</h1>
      <div className="login-container">
        <input/>
        <input/>
      </div>

      <Link to="/signUp">
        <div>
          <p>Зарегистрироваться</p>
        </div>
      </Link>
    </div>
  )
}

export default Login