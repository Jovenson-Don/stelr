import { Outlet } from "react-router-dom";
import LandingPageHeader from "../components/headers/LandingPageHeader";

const MainLayout = () => {
  return (
    <>
      <LandingPageHeader title="Stelr" />
      <Outlet />
    </>
  );
};

export default MainLayout;
