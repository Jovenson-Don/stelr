import LandingPageHeader from "../headers/LandingPageHeader";
import HeroSection from "./HeroSection";
import { FC } from "react";

interface MainlandingPageProps {}

const MainLandingPage: FC<MainlandingPageProps> = () => {
  return (
    <div>
      <LandingPageHeader title="Stelr" />
      <HeroSection />
    </div>
  );
};

export default MainLandingPage;
