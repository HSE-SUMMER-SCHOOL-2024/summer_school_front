import './home.css'
import {Link} from "react-router-dom";

const Home = () => {
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

      <Link to="/account" className="home__title">
        <div>
          <h1>Личный кабинет</h1>
        </div>
      </Link>
    </div>
  )
}

export default Home