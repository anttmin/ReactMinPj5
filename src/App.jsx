import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  PhotoIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowLeftCircleIcon,
  DocumentTextIcon,
  UserPlusIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/solid";
import {
  FolderIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  EnvelopeIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/solid";

const App = () => {
  const [open, SetOpen] = useState(true);
  const [upBtn, setupBtn] = useState(true);

  const Menu = [
    {
      title: "Dashboard",
      icon: (
        <ArrowsPointingInIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />
      ),
    },
    {
      title: "Pages",
      icon: <DocumentTextIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />,
    },
    {
      title: "Media",
      icon: <PhotoIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />,
      spacing: true,
    },
    {
      title: "Projects",
      icon: <FolderIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />,
      submenu: true,
      submenuItems: [
        { title: "ProjectOne" },
        { title: "ProjectTwo" },
        { title: "ProjectThree" },
      ],
    },
    {
      title: "Analysis",
      icon: (
        <ChartBarSquareIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />
      ),
    },
    {
      title: "Inbox",
      icon: <EnvelopeIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />,
    },
    {
      title: "Profile",
      spacing: true,
      icon: <UserPlusIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />,
    },
    {
      title: "Setting",
      icon: (
        <AdjustmentsVerticalIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />
      ),
    },
    {
      title: "Logout",
      icon: <ArrowUpTrayIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />,
    },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-indigo-950 h-screen  ${
          open ? "w-[13rem]" : "w-[5rem]"
        }  relative p-4`}
      >
        {/* slider title  */}
        <div className="flex">
          <div
            className={`w-7 h-7 bg-indigo-600 rounded-md ${
              !open ? "rotate-0" : "rotate-[360deg]"
            }`}
          >
            <MapPinIcon className={`h-7 w-7 text-yellow-300 p-1`} />
          </div>
          <h1
            className={`text-white font-light ml-2 text-2xl origin-left ${
              !open && "scale-0"
            }`}
          >
            SideBar
          </h1>
          <ArrowLeftCircleIcon
            className={`text-yellow-300 absolute top-3 w-7 -right-4 ${
              !open && "rotate-180"
            } cursor-pointer`}
            onClick={() => SetOpen(!open)}
          />
        </div>
        {/* slider title  */}

        <div className="bg-slate-500 px-5 mt-6 py-1 rounded-md flex items-center">
          <MagnifyingGlassIcon
            className={`w-5 text-white -ml-3 h-auto ${!open ? "w-13" : "w-5"}`}
          />
          <input
            type={"type"}
            placeholder="Search"
            className={`text-white bg-transparent outline-0 border-none w-full ml-2 ${
              !open ? "hidden" : "block"
            }`}
          />
        </div>

        {/* for Icon  */}

        <div className="mt-5">
          {Menu.map((Icons, index) => {
            return (
              <>
                <div
                  key={index}
                  className={` ${
                    Icons.spacing ? "mt-9" : "mt-0"
                  } hover:bg-slate-400 hover:rounded-sm pl-[2px] pr-[2px] flex justify-between ${
                    !open && "hover:bg-inherit"
                  }`}
                >
                  {Icons.icon ? (
                    Icons.icon
                  ) : (
                    <FolderIcon className="w-6 h-6 text-white  mb-2 mt-[2px]" />
                  )}
                  <span
                    className={`text-white font-light ${!open && "hidden"}`}
                  >
                    {Icons.title}
                  </span>

                  {Icons.submenu ? (
                    <ChevronDownIcon
                      className={`w-5 h-5 text-white mt-1 ${
                        !open && "hidden"
                      }  ${!upBtn ? "rotate-180" : "rotate-0"}`}
                      onClick={() => setupBtn(!upBtn)}
                    />
                  ) : null}
                </div>

                {Icons.submenu && !upBtn ?Icons.submenuItems.map((submenuItems,index)=>{
                  return(
                       <div>
                          <span key={index} className={`text-white ml-1 hover:text-blue-500 hover:underline`}>{submenuItems.title}</span>
                       </div>
                  )
                })  :null}
              </>
            );
          })}
        </div>

        {/* for Icon  */}
      </div>
      <div>
        <h2 className="font-bold text-3xl p-4">Home Page</h2>
      </div>
    </div>
  );
};

export default App;

//ChevronDownIcon
