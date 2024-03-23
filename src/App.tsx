import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import CityList from "./components/CityList";
import DynamicList from "./components/DynamicList";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Bus", "Car", "Airplane", "Train", "Truck"];

  const handOnSelectItem = (items: string) => {
    console.log(items);
  };

  // return (
  //   <div>
  //     <ListGroup />
  //   </div>
  // );

  // return (
  //   <div>
  //     <CityList />
  //   </div>
  // );

  // return (
  //   <div>
  //     <DynamicList
  //       items={items}
  //       heading="Dynamic List"
  //       onSelectItem={handOnSelectItem}
  //     />
  //   </div>
  // );

  // return (
  //   <div>
  //     <Alert>
  //       <h1>hello world</h1>
  //     </Alert>
  //   </div>
  // );

  // const handleButtonClick = () => {
  //   console.log("clicked");
  // };

  const [alertVisible, setAlertVisibilty] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibilty(false);
          }}
        >
          Data is Imorted
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibilty(true);
        }}
        color="danger"
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
