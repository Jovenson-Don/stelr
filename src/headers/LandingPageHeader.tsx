import { FC } from "react";
import LoginButton from "../buttons/LoginButton";

interface LandingPageHeaderProps {
  title?: string;
}

const LandingPageHeader: FC<LandingPageHeaderProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <LoginButton name="Login" />
    </div>
  );
};

export default LandingPageHeader;
