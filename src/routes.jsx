import {
  Home,
  Profile,
  Tables,
  Notifications,
  MarketOverview,
  PatientUptake,
  CoPrescription,
  ComparativePrice,
  MoleculePriceAudit,
  PriceElasticity,
  BrandProfitability,
  Performance,
  CompanyBrand,
  CompanySKU,
  TherapyArea,
  MarketSizeModel,
  BrandShare,
  BrandSKU,
  Competitive,
  RegionalPrice
} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { ArrowRightOnRectangleIcon, UserPlusIcon } from "@heroicons/react/24/solid";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      // {
      //   icon: <Squares2X2Icon {...icon} />,
      //   name: "dashboard",
      //   path: "/home",
      //   element: <Home />,
      // },
      {
        name: "Company Analytics",
        path: "company",
        element: <Profile />, 
        children: [
          {
            name: "Performance & Ranking",
            path: "performance",
            element: <Performance />
          },
          {
            name: "Company Brand",
            path: "company-brand",
            element: <CompanyBrand />
          },
          {
            name: "Company SKU",
            path: "company-sku",
            element: <CompanySKU />
          },
        ]
      },
      {
        name: "Therapy area Analytics",
        path: "therapy-area",
        element: <Tables />,
        children: [
          {
            name: "Market overview",
            path: "market-overview",
            element: <MarketOverview />
          },
          {
            name: "therapy area",
            path: "therapy-area",
            element: <TherapyArea />
          },
          {
            name: "market size model",
            path: "market-size-model",
            element: <MarketSizeModel />
          }
        ]
      },
      {
        name: "Brand Analytics",
        path: "brand",
        element: <Notifications />,
        children: [
          {
            name: "Brand Share Analysis",
            path: "brand-share",
            element: <BrandShare />
          },
          {
            name: "Brand SKU",
            path: "brand-sku",
            element: <BrandSKU />
          },
          {
            name: "Competitive Analysis",
            path: "competitive",
            element: <Competitive />
          },
          {
            name: "Patient Uptake",
            path: "patient-uptake",
            element: <PatientUptake />
          },
          {
            name: "Co-prescription Analysis",
            path: "co-prescription",
            element: <CoPrescription />
          },
        ]
      },
      {
        name: "Price Analytics",
        path: "price",
        element: <Notifications />,
        children: [
          {
            name: "Regional Price Analytics",
            path: "regional-price",
            element: <RegionalPrice />
          },
          {
            name: "Comparative Price Analytics",
            path: "comparative-price",
            element: <ComparativePrice />
          },
          {
            name: "Price elasticity",
            path: "price-elasticity",
            element: <PriceElasticity />
          },
          {
            name: "Molecule Price Audit",
            path: "molecule-price-audit",
            element: <MoleculePriceAudit />
          },
          {
            name: "Brand Profitability Analysis",
            path: "brand-profitability",
            element: <BrandProfitability />
          },
        ]
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
