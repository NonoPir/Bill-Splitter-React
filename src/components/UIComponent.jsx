import BillInput from "./BillInput";
import TipSelectComponent from "./TipSelectComponent";
import PeopleNumberInputComponent from "./PeopleNumberInputComponent";
import { useState } from "react";
import BillAmountDisplay from "./BillAmountDisplay";
const UIComponent = () => {
  const [customInputValue, setCustomInputValue] = useState(0);
  const [buttonActive, setButtonActive] = useState(0);
  const [tipButtonIndex, setTipButtonIndex] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [peopleAmount, setPeopleAmount] = useState(0);
  const [isValueZero, setIsValueZero] = useState(null);
  const resetInputValue = "";
  console.log(billAmount, peopleAmount);
  return (
    <>
      <div>
        <h1 id="header" className=" text-4xl w-40 text">
          S P L I T T E R
        </h1>
      </div>
      <div
        id="background"
        className=" flex md:justify-between flex-col md:flex-row md:mt-16 md:p-14 md:w-1/2 text-gray-500 rounded-3xl"
      >
        <div className="flex flex-col justify-between w-96 h-4/5">
          <BillInput
            setBillAmount={setBillAmount}
            billAmount={billAmount}
            resetInputValue={resetInputValue}
          />
          <TipSelectComponent
            setCustomInputValue={setCustomInputValue}
            setTipButtonIndex={setTipButtonIndex}
            setIsValueZero={setIsValueZero}
            peopleAmount={peopleAmount}
            isValueZero={isValueZero}
            buttonActive={buttonActive}
            setButtonActive={setButtonActive}
            customInputValue={customInputValue}
            resetInputValue={resetInputValue}
          />
          <PeopleNumberInputComponent
            isValueZero={isValueZero}
            setIsValueZero={setIsValueZero}
            setPeopleAmount={setPeopleAmount}
            peopleAmount={peopleAmount}
            resetInputValue={resetInputValue}
            customInputValue={customInputValue}
          />
        </div>

        <BillAmountDisplay
          billAmount={billAmount}
          peopleAmount={peopleAmount}
          tipButtonIndex={tipButtonIndex}
          buttonActive={buttonActive}
          customInputValue={customInputValue}
          setCustomInputValue={setCustomInputValue}
          setButtonActive={setButtonActive}
          setTipButtonIndex={setTipButtonIndex}
          setBillAmount={setBillAmount}
          setPeopleAmount={setPeopleAmount}
        />
      </div>
    </>
  );
};

export default UIComponent;
