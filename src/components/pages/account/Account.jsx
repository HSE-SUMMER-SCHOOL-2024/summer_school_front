import './account.module.css'
import Header from "../../templates/Header.jsx";
import style from "./account.module.css"
import Info from "./info/Info.jsx";
import {useSelector} from "react-redux";

function Account() {

  const user = useSelector(state => state.user)

  return (
    <div>
      <Header/>

      <div className={style.account}>
        <Info name={user.name} surname={user.surname} email={user.email}/>
      </div>
    </div>
  )
}

export default Account
