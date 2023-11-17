import { useEffect, useState } from "react";
import axios from "axios";

function Filter({ title, type, props, updateFilterParams }) {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/${type}s`)
      .then((res) => setFilterList(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className={type}>
        <label htmlFor={type}>{title}</label>

        <select
          name=""
          id=""
          onChange={(e) => updateFilterParams(e.target.value, type)}
        >
          <option value="tous">Tous</option>
          {filterList.map((tit) => {
            return (
              <option key={tit[props]} value={tit[props]}>
                {tit[props]}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Filter;
