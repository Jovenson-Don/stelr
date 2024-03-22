import LandingPageHeader from "../headers/LandingPageHeader";
import { FC } from "react";

interface MainlandingPageProps {}

const MainLandingPage: FC<MainlandingPageProps> = () => {
  return (
    <div>
      <LandingPageHeader title="Stelr" />
    </div>
  );
};

export default MainLandingPage;
