import {BrowserRouter} from "react-router-dom";
import AppRouter from './routing/AppRouter'

import './index.css'
import {useEffect, useState} from "react";
import {refreshToken} from "./api/userApi";
import {useDispatch} from "react-redux";
import {setAuthAction} from "./store/userReducers";

function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      refreshToken().then(data => {
        dispatch(setAuthAction(data))
        setLoading(false)
      })
        .catch(() => {
          localStorage.clear()
          window.location.reload();
        })
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <div></div>
  }

  return (
    <div>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;