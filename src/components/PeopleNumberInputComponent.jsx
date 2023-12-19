const PeopleNumberInputComponent = ({
  setPeopleAmount,
  isValueZero,
  setIsValueZero,
  peopleAmount,
}) => {
  const inputValueUpdater = (e) => {
    setPeopleAmount(e);
    e != 0 || (!e.startsWith(0) && setIsValueZero(false));
  };

  return (
    <>
      <div>
        <div className="flex justify-between w-full">
          <h2>Number Of People</h2>
          {isValueZero && <h2 className={"text-red-700"}>Can't be zero</h2>}
        </div>
        <form>
          <div className="relative">
            <input
              value={peopleAmount}
              autoComplete="off"
              onChange={(e) => inputValueUpdater(e.target.value)}
              id="numberInput"
              type="text"
              placeholder="0"
              className={`bg-gray-100 border ${
                isValueZero ? "border-red-600" : " focus:border-teal-500"
              }  absolute rounded-md w-full h-12 pl-6 pr-6 outline-none text-right`}
            />
            <img
              className="absolute mt-3.5 pl-5"
              src="./images/icon-person.svg"
              alt="person icon"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PeopleNumberInputComponent;
