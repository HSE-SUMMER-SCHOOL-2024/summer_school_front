import './home.css'
import {Link, useLocation} from "react-router-dom";
import {SIGN_IN_ROUTE} from "../../../routing/consts.js";

const Home = () => {

  const isLogin = useLocation().pathname === SIGN_IN_ROUTE
  const link = isLogin ? '/account' : '/signIn';

  return (
    <div className="home">
      <Link to="/blog" className="home__title">
        <div>
          <h1>Посты</h1>
        </div>
      </Link>

      <Link to="/video" className="home__title">
        <div>
          <h1>Видео-семинары</h1>
        </div>
      </Link>

      <Link to={link} className="home__title">
        <div>
          <h1>Личный кабинет</h1>
        </div>
      </Link>
    </div>
  )
}

export default Home