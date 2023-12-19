import BillInput from "./BillInput";
import TipSelectComponent from "./TipSelectComponent";
import PeopleNumberInputComponent from "./PeopleNumberInputComponent";
import { useState } from "react";
import BillAmountDisplay from "./BillAmountDisplay";
const UIComponent = () => {
  const [peopleAmount, setPeopleAmount] = useState(0);
  const [isValueZero, setIsValueZero] = useState(undefined);
  console.log(isValueZero);
  return (
    <>
      <div>
        <h1 id="header" className=" text-4xl w-40 text">
          S P L I T T E R
        </h1>
      </div>
      <div
        id="background"
        className=" flex justify-between mt-16 p-14 w-1/2 text-gray-500 rounded-3xl"
      >
        <div className="flex flex-col justify-between w-96 h-4/5">
          <BillInput />
          <TipSelectComponent
            setIsValueZero={setIsValueZero}
            peopleAmount={peopleAmount}
          />
          <PeopleNumberInputComponent
            isValueZero={isValueZero}
            setIsValueZero={setIsValueZero}
            setPeopleAmount={setPeopleAmount}
          />
        </div>
        <BillAmountDisplay />
      </div>
    </>
  );
};

export default UIComponent;
