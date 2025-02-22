// // Loader.js
// import React from "react";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse">
//       <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
//         <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
//         <div className="w-2/4 h-6 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
//         <div className="w-1/4 h-4 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
//       </div>
//     </div>
//   );
// };

// export default Loader;
// // 

import React from 'react'
import { BounceLoader } from "react-spinners";

const CardSkeleton = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center '>
      <BounceLoader color="#d4d2d2" size={150} />
    </div>
  );
}

export default CardSkeleton