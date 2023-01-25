import "../style/single-country.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchAPI from "./FetchAPI";
import SearchContext from "./SearchContext";

function SingleCountry() {
  let {countryName} = useParams();
  let [element, setElement] = useState(null);
  let navigate = useNavigate();

  //Return Serach to Normal
  let [search, setSearch] = useContext(SearchContext);
  setSearch("");

  useEffect(() => {
    let api = "https://restcountries.com/v3.1/name/" + countryName;
    fetchAPI(api, setElement, "");
  }, [])



  if(element !== null) {

    let nativeNames = Object?.values(element[0].name.nativeName)?.map((name) => name.common);

    element = 
      <>
        <div className="flag"> <img src={element[0].flags.png}/> </div>
        <div className="info">
          <h1>{element[0].name.common}</h1>
          <table>
            <tbody>
              <tr>
                <th>الإسم المتعارف:</th>
                <td>{nativeNames.join(", ")}</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th>العاصمة:</th>
                <td>{element[0].capital ? element[0].capital  : "مجهولة"}</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th>النطاق الرسمي:</th>
                <td>{element[0].tld[0] ? element[0].tld[0] : "غير معلوم"}</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th>تعداد السكان:</th>
                <td>{(+element[0].population).toLocaleString()}</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th>العملات المتعملة:</th>
                <td>{
                  element[0].currencies ? 
                  Object.keys(element[0].currencies).join(", ") 
                  : "لا يموجد عملات"
                  }</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th>القارة:</th>
                <td>{element[0].region ? element[0].region : "غير معلوم"}</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th>اللغات المتحدثة:</th>
                <td>{Object.keys(element[0].languages).join(", ")}</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th>المكان بالتحديد:</th>
                <td>{element[0].subregion ? element[0].subregion : "غير معروف"}</td>
              </tr>
            </tbody>
          </table>
          <ul className="borders">
            <span> الحدود:</span>
            {element[0].borders ? element[0].borders.map(el => <li>{el}</li>) : "لا يوجد حدود"}
          </ul>
        </div>
      </>
  }
  

  return (
    <section className="single__country">
      {element}
    </section>
  )
}

export default SingleCountry;