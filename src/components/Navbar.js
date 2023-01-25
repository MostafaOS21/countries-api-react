
import "../style/navbar.css";
import { Link } from "react-router-dom";



function Navbar() {

  const changeTheme = () => {
    document.body.classList.toggle("dark");

    localStorage.setItem("countries-theme", document.body.classList.contains("dark"));
  }
  console.log();;
  
  // See if theme changed before
  const getTheme = () => {
    if(localStorage.getItem("countries-theme") === "true") 
      document.body.classList.add("dark");
  }

  getTheme();

  return <header>
    <nav>
      <Link to="/countries-api-react">ابحث عن الدولة</Link>
      <div className="main-theme" onClick={changeTheme}>
        <span className="material-symbols-outlined">dark_mode</span>
        الوضع المظلم
      </div>
    </nav>
  </header>
}

export default Navbar;