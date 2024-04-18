import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const App = ({ numberOfIcons = 5 }) => {
  const [Open, setOpen] = useState(true);
  const [Num, SetNum] = useState(0);

  return (
    <div className="wrapper bg-slate-700 mt-4 rounded-lg flex relative">
      <div className={`w-[400px] h-auto p-5 ${!Open ?"translate-x-[-400px]" :"translate-x-[0px]"}`}>
        <StarIcon className="w-6 h-6 text-orange-600" />
        <h2 className="font-bold text-2xl text-white">How did We do?</h2>
        <p className="text-gray-400 mt-3 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iusto
          ipsam atque voluptatibus, recusandae aut sint libero, architecto
          sapiente, consectetur sequi natus. Deleniti modi aspernatur
          perspiciatis neque iste ea hic?
        </p>
        <div className="Btn flex justify-between mb-2">
          {[...Array(numberOfIcons)].map((_, index) => {
            const currentRating = index + 1;
           return(
            <p key={index}>
            <StarIcon
              className="w-5 h-5 text-white hover:text-orange-600"
              value={index} onClick={()=>SetNum(currentRating)}
            />
          </p>
           )
          })}
        </div>
        <div
          className="bg-orange-600 w-[100%] text-center rounded-md p-1"
          onClick={() => setOpen(!Open)}
        >
          <button className="text-white">Submit</button>
        </div>
      </div>

      <div className={`w-[400px] h-auto  absolute   p-3 ${!Open ?"translate-x-[0px]" :"translate-x-[400px]"}`}>
        <img
          src="https://png.pngtree.com/png-clipart/20230923/original/pngtree-emoticonbased-rating-scale-providing-feedback-and-ratings-vector-eps-10-included-png-image_12665327.png"
          alt="img"
          className="w-[200px] mx-auto rounded-[20px] h-auto"
        />
        <div className="bg-slate-800 w-[150px] h-auto p-1 mx-auto rounded-md mt-3">
          <p className="text-white text-sm text-center">Rate 5 out of {Num}</p>
        </div>

        <h2 className="text-white text-2xl font-bold text-center mt-2">
          Thank You!
        </h2>

        <div className="text-center">
          <p className="text-white text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla rem
            expedita aspernatur consectetur ipsam assumenda veritatis enim ea?
            Dolorem modi illo consectetur, molestias sapiente et commodi nisi
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
//${!Open ?"translate-x-[400px]" :"translate-x-[0px]"}
