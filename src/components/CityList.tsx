import { Fragment, useState } from "react";

function CityList() {
  const citys = ["Gujrat", "Delhi", "Mumbai", "jammu", "Kerla"];

  // const selectIndex = 0;
  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <Fragment>
      <h1>City List</h1>
      {/* {citys.length === 0 ? <p>No record found</p> : null} */}
      {citys.length === 0 && <p>No Record Found</p>}
      <ul className="list-group">
        {citys.map((city, index) => (
          <li
            key={city}
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>

      <div></div>
    </Fragment>
  );
}

export default CityList;
