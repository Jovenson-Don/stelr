import LandingPageHeader from "../headers/LandingPageHeader";
import { FC } from "react";

interface MainlandingPageProps {}

const MainLandingPage: FC<MainlandingPageProps> = () => {
  return (
    <>
      <LandingPageHeader title="Stelr" />
    </>
  );
};

export default MainLandingPage;
