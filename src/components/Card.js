import { Link } from "react-router-dom";

import "../style/card.css";
function Card(country) {
  return (
    //{ "/country/" + country.title.replace(/ /g, "_")}
    <Link className="country__card" to={ "/country/" + country.title}>
      <div className="flag-img">
        <img src={country.imgSrc} />
      </div>
      <div className="country__info">
        <h4>{country.title}</h4>
          <table className="other">
            <tbody>
              <tr>
                <td>السكان: </td>
                <td>{(+country.population).toLocaleString()}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>القارة: </td>
                <td>{country.region}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>العاصمة: </td>
                <td>{country.capital?.length > 0 ? country.capital : "غير موجود"}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </Link>
  );
}

export default Card;
