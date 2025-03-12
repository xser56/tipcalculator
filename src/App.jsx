import { useEffect, useState } from "react";
import "./App.css";
import SelectTip from "./Components/SelectTip";
import { Card } from "flowbite-react";
import Form from "./Components/Form";

function App() {
  const [tipArr, setTipArr] = useState([])

//   useEffect (() => 
//   {
//     setTipArr[5, 10, 15, 25, 50]
//   })

  useEffect(() => 
  {
    setTipArr([5, 10, 15, 25, 50, "Custom"]);
  }, []);

// <div className='grid grid-cols-3 grid-rows-2 gap-y-4'>
//           <SelectTip/>
//           <SelectTip/>
//           <SelectTip/>
//           <SelectTip/>
//           <SelectTip/>
//           <SelectTip/>
//         </div>

{/* <div className="grid grid-cols-3 grid-rows-2 gap-y-4">
{tipArr.map((tip, index) => (
  <SelectTip key={index} value={tip} />
))}
</div> */}

  return (
    <>
      <body className="font-spaceMono bg-neutral-light-grayish-cyan">

        <header className="flex justify-center pt-[5rem] font-bold text-neutral-dark-grayish-cyan text-[24px] ">S P L I</header>
        <header className="flex justify-center pb-20 font-bold text-neutral-dark-grayish-cyan text-[24px] ">T T E R</header>

    <div className="flex justify-center">
    <Card className="rounded-xl w-full max-w-[900px] p-1">
      <div className="grid grid-cols-2 ">

      {/* Left Side */}
      <div>
        <h5 className="text-xl tracking-tight text-neutral-dark-grayish-cyan font-bold font-spaceMono">
          Bill
        </h5>
          <Form />
        <p className="font-bold text-neutral-dark-grayish-cyan text-[16px] pt-6 pb-3">
          Select Tip %
        </p>

        <div className="grid grid-cols-3 grid-rows-2 gap-y-4">
      {tipArr.map((tipArr, index) => 
      (
        <SelectTip key={index} value={tipArr} />
      ))}
    </div>

          <h5 className="text-1xl tracking-tight text-neutral-dark-grayish-cyan font-bold pt-8 pb-1">
          Number of People 
        </h5>
          <Form />
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-2 bg-neutral-very-dark-cyan px-10 pt-12 rounded-xl">

      <div className="bg-neutral-very-dark-cyan rounded-lg">
        <div className="text-white font-bold text-[16px] pb-10">
          Tip Amount
          <p className="text-neutral-grayish-cyan">/ person</p>
        </div>
        <div className="text-white font-bold mt-4 text-[16px]">
          Total
          <p className="text-neutral-grayish-cyan">/ person</p>
        </div>
      </div>

      <div className="bg-neutral-very-dark-cyan rounded-lg">
        <div className="text-primary-cyan font-bold flex justify-end text-5xl pb-10">
          $4.27     
        </div>
        <div className="text-primary-cyan font-bold mt-4 flex justify-end text-5xl">
          $32.79
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-primary-cyan text-neutral-very-dark-cyan rounded-md w-[20rem] h-10 font-bold">
          RESET
        </button>
      </div>
      
      </div>
            </div>

    </Card>
</div>
      </body>
    </>
  );
}

export default App;
