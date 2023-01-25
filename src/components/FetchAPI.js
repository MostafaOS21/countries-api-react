const fetchAPI = async (api, setState, search) => {
  let data;
  try {
    let result = await fetch(api);
    data = await result.json();
    if(search !== "") {
      data = data.filter((el) => {
        let native = false;
        if(el.name.nativeName) {
          let all = Object.values(el.name.nativeName)
          for(let one of all) {
            if(one.official?.includes(search) || one.common?.includes(search)) {
              native = true;
              break;
            }
          }
        }
  
        return el.name.common.includes(search) || native;
      });
    }
    setState(data);
  } catch(err) {
    console.log(err);
  }
};

export default fetchAPI;