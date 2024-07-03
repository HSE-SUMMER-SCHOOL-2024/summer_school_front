import Home from "../components/pages/home/Home.jsx";
import Login from "../components/pages/Login.jsx";
import Registration from "../components/pages/Registration.jsx";
import Account from "../components/pages/account/Account.jsx";
import Blog from "../components/pages/blog/Blog.jsx";
import Video from "../components/pages/video/Video.jsx";
import NoPage from "../components/pages/NoPage.jsx";

import {
  MAIN_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  ACCOUNT_ROUTE,
  BLOGS_ROUTE,
  VIDEOS_ROUTE,
  NO_PAGE_ROUTE,
} from "./consts"

export const authRoutes = [
  {
    path: ACCOUNT_ROUTE,
    Element: <Account/>,
  },
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Element: <Home/>,
  },
  {
    path: SIGN_IN_ROUTE,
    Element: <Login/>,
  },
  {
    path: SIGN_UP_ROUTE,
    Element: <Registration/>,
  },
  {
    path: BLOGS_ROUTE,
    Element: <Blog/>,
  },
  {
    path: VIDEOS_ROUTE,
    Element: <Video/>,
  },
  {
    path: NO_PAGE_ROUTE,
    Element: <NoPage/>,
  },
]