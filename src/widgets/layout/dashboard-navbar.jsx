import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  MobileNav,
  IconButton
} from "@material-tailwind/react";
import * as Flowbite from 'flowbite-react'
import {
  MagnifyingGlassIcon
} from "@heroicons/react/24/solid";
import {
  BellIcon,
} from "@heroicons/react/24/outline";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const navList = (
    <div className="z-10 flex flex-col sm:flex-row sm:justify-between sm:h-[5rem]">
      <div className="flex flex-col sm:flex-row sm:w-full sm:px-[50px] sm:h-[5rem] sm:items-center sm:justify-between">
        <div className="px-4 sm:flex-1 sm:h-[50px] sm:p-0 sm:my-0 md:mr-[20%] lg:mr-[20%]">
          <Flowbite.TextInput icon={MagnifyingGlassIcon} placeholder="Search for company name" style={{height: "50px", width: "100%", background: "white"}} />
        </div>
        <div className="flex justify-between px-4 sm:justify-reverse text-right h-[80px] items-center">
          <button className="w-[50px] h-[50px] text-gray-300 hover:bg-gray-100 rounded-md">
            <BellIcon className="w-[30px] h-[30px] m-auto" />
          </button>
          <button className="px-[20px] h-[50px] ml-[1rem] rounded !shadow-none bg-darkred-600">
            <Typography className="text-[#e6e6e6] font-bold capitalize">
              Reset Password
            </Typography>
          </button>
        </div>
      </div>
      <div className="sm:border-l sm:h-[5rem] items-center flex gap-2 px-4">
        <Flowbite.Avatar
          img="/img/team-3.jpeg"
          rounded={true}
          className="min-w-[40px]"
          />
        <Typography className="text-black sm:hidden lg:block lg:min-w-[100px]">
          Phar. Ayodeji
        </Typography>
      </div>
    </div>
  );
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 640 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`relative lg:transition-all lg:h-[5rem] lg:bg-white items-center lg:p-0 lg:m-0 lg:shadow-[0_10px_30px_rgba(173,173,173,0.2)] ${
        fixedNavbar
          ? "sticky shadow-blue-gray-500/5"
          : "px-0 py-0"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="hidden sm:block">
        {navList}
      </div>
      
      <IconButton
        variant="text"
        className="float-right h-6 w-6 text-inherit text-gray-500 hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>

      <MobileNav open={openNav} className="relative bg-white z-40">
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
