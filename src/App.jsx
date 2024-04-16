import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const App = () => {
  const [rating, SetRating] = useState(null);
  const [Hover ,SetHover ]  = useState(null)




  return (
    <div>
      <div className="App flex justify-center items-center h-[100vh]">
        {[...Array(5)].map((_, index) => {
          const currentItem = index + 1;
          console.log(currentItem);
          return (
            <div key={index}>
             
              <StarIcon
                className={`w-8 h-8 cursor-pointer ${currentItem <= rating || Hover ?"text-yellow-400" :'text-black' }`}
                value={currentItem}
                onClick={() => SetRating(currentItem)}
                onMouseEnter ={()=> SetHover(currentItem)}
                onMouseLeave={() => SetHover(null)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
//onClick={() => Rating(currentItem)}
