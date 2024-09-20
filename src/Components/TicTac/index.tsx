import { useState } from "react";

function TicTac() {
  const [value, setValue] = useState("");
  const boxesArr = Array(9).fill(value);

  const updateValue = (index: any) => {
    const update = [...boxesArr];
    console.log(update);
    update[index] = setValue("X");

    console.log(index);
  };

  return (
    <>
      <h1 className="mb-20 font-semibold">TIC-TAC-TOE</h1>
      <div className="bg-purple-700 rounded-2xl grid grid-cols-3 gap-4 p-10">
        {boxesArr.map((element, index) => (
          <div
            key={index}
            className="bg-black w-20 h-20 flex items-center justify-center border border-black rounded-2xl text-white"
            onClick={() => updateValue(index)}
          >
            <p>{element}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TicTac;
