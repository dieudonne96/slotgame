import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [thirdNumber, setThirdNumber] = useState<number>(0);
  const [fourthNumber, setFourthNumber] = useState<number>(0);

  function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handlePlaceBetButtonClick(): void {
    setFirstNumber(generateRandomNumber(1, 9));
    setSecondNumber(generateRandomNumber(1, 9));
    setThirdNumber(generateRandomNumber(1, 9));
    setFourthNumber(generateRandomNumber(1, 9));
  }

  function handleResetButtonClick(): void {
    setFirstNumber(0);
    setSecondNumber(0);
    setThirdNumber(0);
    setFourthNumber(0);
  }

  return (
    <div className="px-8">
      <h1 className="text-3xl font-bold py-8 text-center ">
        Slot Machine Game
      </h1>
      <div className="grid grid-cols-4 gap-4 content-start py-8 align-items: center text-center">
        <div>
          <p>{firstNumber}</p>
        </div>
        <div>
          <p>{secondNumber}</p>
        </div>
        <div>
          <p>{thirdNumber}</p>
        </div>
        <div>
          <p>{fourthNumber}</p>
        </div>
      </div>
      <div className="justify-center items-center text-center">
        <div className="">
          <button onClick={handlePlaceBetButtonClick}>Place bet</button>
        </div>
        <div>
          <button onClick={handleResetButtonClick}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
