import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  // const { sidenavType } = controller;

  return (
    <div className="min-h-screen min-w-[640px] p-0 overflow-x-clip">
      <Sidenav
        routes={routes}
        brandImg="/img/logo.png"
      />
      <div className="xl:ml-[236px]">
        <DashboardNavbar />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, children }) => (
                children ? children.map((child) => (
                  <Route exact path={`${path}/${child.path}`} element={child.element} />
                ))
                : ""
              ))
            )}
        </Routes>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
