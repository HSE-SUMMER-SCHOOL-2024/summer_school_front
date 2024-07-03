import "./header.css"
import {Link, useLocation} from "react-router-dom";
import {SIGN_IN_ROUTE} from "../../routing/consts.js";

const Header = () => {

  const isLogin = useLocation().pathname === SIGN_IN_ROUTE
  const link = isLogin ? '/account' : '/signIn';

  return (
    <div className="header">
      <Link to="/" className="header__title">
        <div>
          <h1>Домашняя</h1>
        </div>
      </Link>

      <Link to="/blog" className="header__title">
        <div>
          <h1>Посты</h1>
        </div>
      </Link>

      <Link to="/video" className="header__title">
        <div>
          <h1>Видео-семинары</h1>
        </div>
      </Link>

      <Link to={link} className="header__title">
        <div>
          <h1>Личный кабинет</h1>
        </div>
      </Link>
    </div>
  )
}

export default Header