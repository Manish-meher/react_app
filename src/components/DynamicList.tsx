import { Fragment, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (items: string) => void;
}

function DynamicList({ items, heading, onSelectItem }: Props) {
  // const selectIndex = 0;
  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {/* {citys.length === 0 ? <p>No record found</p> : null} */}
      {items.length === 0 && <p>No Record Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <div></div>
    </Fragment>
  );
}

export default DynamicList;
