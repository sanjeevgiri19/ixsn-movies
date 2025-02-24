import { useState, useEffect } from "react";

const ResponsiveLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Top Navigation
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">My App</h1>
        {isMobile && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white focus:outline-none"
          >
            ☰ {/* Hamburger Icon */}
      {/* </button>
        )}
      </nav> */}
      {/* Sidebar (Hidden in Mobile View) */} 
      {/* {!isMobile && (
        <aside className="w-64 bg-gray-900 text-white h-screen p-4">
          Sidebar Content
        </aside>
      )} */}
      {/* Modal for Sidebar (Only in Mobile View) */}
      {isMobile && isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg w-3/4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-700"
            >
              ✖
            </button>
            <p>Sidebar Content in Modal</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveLayout;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const MobileMenu = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       {/* Hamburger Menu Button */}
//       <button
//         onClick={toggleModal}
//         className="lg:hidden md:hidden fixed top-4 left-4 z-40 text-white text-2xl focus:outline-none"
//         aria-label="Open Menu"
//       >
//         <i className="ri-menu-line"></i>
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/80 z-50" onClick={closeModal}>
//           <div
//             className="fixed left-0 top-0 h-full w-64 bg-zinc-900 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-4 border-b border-zinc-600">
//               <div className="flex justify-between items-center">
//                 <h1 className="text-white flex items-center font-medium text-2xl">
//                   <i className="ri-tv-fill"></i>
//                   <span className="ml-1 flex-col text-xs tracking-wide leading-tight">
//                     <span className="block">ixsn</span>
//                     <span className="block">movies</span>
//                   </span>
//                 </h1>
//                 <button
//                   onClick={closeModal}
//                   className="text-white p-2 rounded-full hover:bg-zinc-700"
//                   aria-label="Close Menu"
//                 >
//                   <i className="ri-close-line text-2xl"></i>
//                 </button>
//               </div>
//             </div>

//             <nav className="p-4 flex flex-col gap-2 text-base text-zinc-300">
//               <h1 className="text-white font-medium text-base py-3">
//                 New Feeds
//               </h1>
//               <Link
//                 to="/trending"
//                 className="hover:bg-zinc-400/20 hover:text-white rounded-lg px-3 py-2 duration-300"
//                 onClick={closeModal}
//               >
//                 <i className="ri-fire-fill mr-2"></i> Trending
//               </Link>
//               <Link
//                 to="/popular"
//                 className="hover:bg-zinc-400/20 hover:text-white rounded-lg px-3 py-2 duration-300"
//                 onClick={closeModal}
//               >
//                 <i className="ri-bard-fill mr-2"></i> Popular
//               </Link>
//               <Link
//                 to="/movies"
//                 className="hover:bg-zinc-400/20 hover:text-white rounded-lg px-3 py-2 duration-300"
//                 onClick={closeModal}
//               >
//                 <i className="ri-movie-2-fill mr-2"></i> Movies
//               </Link>
//               <Link
//                 to="/tv"
//                 className="hover:bg-zinc-400/20 hover:text-white rounded-lg px-3 py-2 duration-300"
//                 onClick={closeModal}
//               >
//                 <i className="ri-tv-fill mr-2"></i> TV Shows
//               </Link>
//               <Link
//                 to="/person"
//                 className="hover:bg-zinc-400/20 hover:text-white rounded-lg px-3 py-2 duration-300"
//                 onClick={closeModal}
//               >
//                 <i className="ri-team-fill mr-2"></i> Peoples
//               </Link>
//               <Link
//                 to="/recommendations"
//                 className="hover:bg-zinc-400/20 hover:text-white rounded-lg px-3 py-2 duration-300"
//                 onClick={closeModal}
//               >
//                 <i className="ri-bard-fill mr-2"></i> AI
//               </Link>
//               <hr className="my-4 border-none h-[1px] bg-zinc-500" />
//               <h1 className="text-white font-medium text-base py-3">
//                 Web Information
//               </h1>
//               <Link
//                 to="/canvas"
//                 className="hover:bg-zinc-400/20 hover:text-white rounded-lg px-3 py-2 duration-300"
//                 onClick={closeModal}
//               >
//                 <i className="ri-edit-line mr-2"></i> Canvas
//               </Link>
//               <Link
//                 to="/contact"
//                 className="hover:bg-zinc-400/20 hover:text-white rounded-lg px-3 py-2 duration-300"
//                 onClick={closeModal}
//               >
//                 <i className="ri-phone-fill mr-2"></i> Contact
//               </Link>
//               <Link
//                 to="/about"
//                 className="hover:bg-zinc-400/20 hover:text-white rounded-lg px-3 py-2 duration-300"
//                 onClick={closeModal}
//               >
//                 <i className="ri-information-fill mr-2"></i> About
//               </Link>
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MobileMenu;
