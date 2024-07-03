import "./header.css"
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__title">
        <div>
          <h1>Домашняя</h1>
        </div>
      </Link>

      <Link to="/Blog" className="header__title">
        <div>
          <h1>Посты</h1>
        </div>
      </Link>

      <Link to="/Video" className="header__title">
        <div>
          <h1>Видео-семинары</h1>
        </div>
      </Link>

      <Link to="/Account" className="header__title">
        <div>
          <h1>Личный кабинет</h1>
        </div>
      </Link>
    </div>
  )
}

export default Header