import { useContext, useEffect, useState } from "react";
import "../style/filter.css";
import SearchContext from "./SearchContext";
import ContinentContext from "./ContinentContext";


function Filter() {
  let [search, setSearch] = useContext(SearchContext);
  let [continent, setContinent] = useContext(ContinentContext);

  const showDropdown = () => {
    let element = document.querySelector(".filter .dropdown");
    setTimeout(() => {
      element.classList.toggle("active");
    }, 100);
  }

  const changeSearch = (e) => {
    let inputValue = e.target.value.trim().replace(/[ ]{2}/g, "").toLowerCase();
    if(inputValue.length <= 1) setSearch(inputValue.toUpperCase());
    else setSearch(inputValue.slice(0, 1).toUpperCase() + inputValue.slice(1).toLowerCase());
  }

  const changePlaceholder = () => {
    let continent = document.querySelector(".dropdown .options .active");
    let input = document.querySelector(".continent__filter");
    if(continent) input.placeholder = continent.textContent; 
    else input.placeholder = "اختر القارة";
  }

  

  const setActiveContinent = (e) => {
      if(!e.target.classList.contains("active")) {
        document.querySelector(".dropdown .options .active")?.classList.remove("active");
        setContinent(e.target.classList[0])
        e.target.classList.add("active");
      } else {
        e.target.classList.remove("active");
        setContinent("");
      }
      changePlaceholder();
  }

  return (
    <div className="filter">
      <form>
        <span className="material-symbols-outlined search__icon">search</span>
        <input placeholder="أبحث عن اسم الدولة" onChange={changeSearch}/>
      </form>

      <div className="dropdown">
        <input placeholder="اختر القارة"
          className="continent__filter" readOnly onFocus={showDropdown} onBlur={showDropdown}/>
        <ul className="options">
          <li onClick={setActiveContinent} className="africa">إفريقيا</li>
          <li onClick={setActiveContinent} className="asia">آسيا</li>
          <li onClick={setActiveContinent} className="america">الأميريكيتين</li>
          <li onClick={setActiveContinent} className="europe">أوروبا</li>
          <li onClick={setActiveContinent} className="oceania">أوقيانوسيا</li>
        </ul>
        <span className="material-symbols-outlined expand__more">expand_more</span>
      </div>
    </div>
  );
}

export default Filter;
