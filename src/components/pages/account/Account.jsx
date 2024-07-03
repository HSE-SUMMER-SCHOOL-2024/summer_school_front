import './account.module.css'
import Header from "../../templates/Header.jsx";
import style from "./account.module.css"
import Info from "./info/Info.jsx";

// eslint-disable-next-line react/prop-types
function Account() {
  const info = {
    name: 'Vladimir',
    surname: 'Vinogradov',
    email: 'vavinogradov@edu.hse.ru',
  }

  return (
    <div>
      <Header/>

      <div className={style.account}>
        {/* eslint-disable-next-line react/prop-types */}
        <Info name={info.name} surname={info.surname} email={info.email}/>
      </div>
    </div>
  )
}

export default Account
