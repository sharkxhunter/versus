import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import {
  Avatar,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import { Sidebar } from "flowbite-react";

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-b from-darkred-400 via-darkred-700 to-darkred-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };

  return (
    <Sidebar className="h-[0px]">
      <div
        className={`${sidenavTypes[sidenavType]} ${
          openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 h-[calc(100vh)] w-[236px] transition-transform duration-300 xl:translate-x-0 overflow-auto shadow-[0_15px_60px_rgba(125,14,46,0.4)]`}
      >
        <div
          key="logo"
          className={`relative mb-[50px] ${
            sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
          }`}
        >
          <Link to="/" className="flex items-center gap-4 pt-[25px] px-[45px]">
            <Avatar src={brandImg} size="lg" className="w-72 px-3 object-contain rounded-none"/>
          </Link>
          <IconButton
            variant="text"
            color="white"
            size="sm"
            ripple={false}
            className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            onClick={() => setOpenSidenav(dispatch, false)}
          >
            <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
          </IconButton>
        </div>

        <Sidebar.Items className="m-0" key="sidebar">
          {routes.map(({ layout, title, pages }, key) => (
            <Sidebar.ItemGroup key={key} className="p-[0px] mb-4 flex flex-col space-y-0 border-none">
              { layout === "dashboard" ?
                <li key="dashboard" className="p-[0px] border-t border-white/20 h-[4rem] items-center">
                  <NavLink to={`/${layout}/home`} key="dashboard">
                    <div className="flex justify-center items-center text-darkred-500 h-[4rem] bg-white hover:bg-white/20 hover:text-white rounded-l-none rounded-r-md">
                      <Squares2X2Icon className="w-5 h-5 text-inherit" />&nbsp;
                      <Typography
                        color="inherit"
                        className="font-medium"
                      >
                        DASHBOARD
                      </Typography>
                    </div>
                  </NavLink>
                </li>
                : ""
              }

              {pages.map(({ icon, name, path, children }) => (
                // Nav item begin
                <div key={name} className="border-t border-white/20">
                  { children ?
                      <Sidebar.Collapse
                        label={name}
                        className="flex items-center pl-[20px] py-0 h-[4rem] rounded rounded-l-none capitalize !text-white justify-between hover:!bg-white/20"
                      >
                        {children.map((child) => (
                          <li key={child.name} className="p-[0px] h-[4rem] items-center">
                            <NavLink to={`/${layout}/${path}/${child.path}`}>
                              {({isActive}) => (
                                <div className={`flex items-center text-white h-[4rem] hover:bg-white/20 rounded-l-none rounded-r-md ${
                                  isActive ? "bg-darkred-200/50" : ""
                                }`}>
                                  { isActive ? <span className="rounded w-[6px] border border-[3px] border-white h-[4rem]"></span> : "" }
                                  <Typography
                                    color="inherit"
                                    className="font-medium capitalize pl-[45px]"
                                  >
                                    {child.name}
                                  </Typography>
                                </div>
                              )}
                            </NavLink>
                          </li>
                        ))}
                      </Sidebar.Collapse>
                    :
                      (<li key={name} className="p-[0px] h-[4rem] items-center">
                        <NavLink to={`/${layout}/${path}`}>
                          {({isActive}) => (
                            <div className={`flex items-center text-white h-[4rem] hover:bg-white/20 rounded-l-none rounded-r-md ${
                              isActive ? "bg-darkred-200/50" : ""
                            }`}>
                              { isActive ? <span className="rounded w-[6px] border border-[3px] border-white h-[4rem]"></span> : "" }
                              <Typography
                                color="inherit"
                                className="flex items-center font-medium capitalize pl-[30px]"
                              >
                                { icon ? icon : "" }&nbsp;
                                {name}
                              </Typography>
                            </div>
                          )}
                        </NavLink>
                      </li>)
                  }
                </div>
              ))}


            </Sidebar.ItemGroup>
          ))}
        </Sidebar.Items>
      </div>
    </Sidebar>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo.png",
  brandName: "Material Tailwind React",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidenav.jsx";

export default Sidenav;
