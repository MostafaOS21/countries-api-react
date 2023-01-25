import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import continentContext from "./ContinentContext";
import fetchAPI from "./FetchAPI";
import Filter from "./Filter";
import SearchContext from "./SearchContext";
import SkeletonLoader from "./SkeletonLoader";


function AllCountries() {
  let [countries, setCountries] = useState(null);
  let [search, setSearch] = useContext(SearchContext);
  let [continent, setContinent] = useContext(continentContext);
  let elements;

  useEffect(() => {
    let api = "https://restcountries.com/v3.1/all";
    // const fetchCountries = async (api) => {
    //   let data;
    //   try {
    //     let result = await fetch(api);
    //     data = await result.json();
    //     data = data.filter((el) => {
    //       let native = false;
    //       if(el.name.nativeName) {
    //         let all = Object.values(el.name.nativeName)
    //         for(let one of all) {
    //           if(one.official?.includes(search) || one.common?.includes(search)) {
    //             native = true;
    //             break;
    //           }
    //         }
    //       }

    //       return el.name.common.includes(search) || native;
    //     });
    //     setCountries(data);
    //   } catch(err) {
    //     console.log(err);
    //   }
    // };

    // fetchCountries(api);
    fetchAPI(api, setCountries, search)
  }, [search]);

  if(countries) {
    if(countries.length > 0) {
      elements = countries.filter(el => {
        let cond = false;
        if(continent === "") cond = true;
        else if(continent === "africa") cond = el.continents.includes("Africa");
        else if(continent === "asia") cond = el.continents.includes("Asia");
        else if(continent === "america") {
          cond = el.continents.includes("South America") || el.continents.includes("North America");
        } 
        else if(continent === "europe") cond = el.continents.includes("Europe");
        else if(continent === "oceania") cond = el.continents.includes("Oceania");
        return cond && el.name.common !== "Israel";
      }).map(el => {

          return <Card imgSrc={el["flags"]["png"]} title={el["name"]["official"]}
        population={el["population"]} region={el["region"]} capital={el["capital"]}
        key={`${el["name"]["common"]}${el["population"]}`.toLowerCase()}/>;

      })
    }

    if(countries.length === 0 || elements[0] === undefined)  {
      elements = <h1 className="not__found">الدولة التي تبحث عنها غير موجودة</h1>
    }
  } else {
    elements = new Array(8);

    for(let i = 0; i < 8; i++) {
      elements[i] = <SkeletonLoader key={i}/>
    }
  }
  return (
    <section>
      <Filter />
      <div className="grid-system">
        {elements}
      </div>
    </section>
  );
}

export default AllCountries;
