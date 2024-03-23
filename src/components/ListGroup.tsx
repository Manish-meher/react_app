import { Fragment, useState } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  const names = ["Arun", "Vinay", "Kunal", "Mohit"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>Name of Owner</h1>
      <ul className="list-group">
        {names.map((name, index) => (
          <li
            className="list-group-item"
            key={name}
            // onClick={() => console.log({ name, index })}
            // onClick={(event) => console.log(event)}
            onClick={handleClick}
          >
            {name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
