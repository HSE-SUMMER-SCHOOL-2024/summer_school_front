import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes.jsx";

const AppRouter = () => {

  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Element}) => {
        return <Route key={path} path={path} element={Element}/>
      })}

      {publicRoutes.map(({path, Element}) => {
        return <Route key={path} path={path} element={Element}/>
      })}

      <Route path="*" element={<Navigate to="/notFound"/>}/>

    </Routes>
  )
}

export default AppRouter