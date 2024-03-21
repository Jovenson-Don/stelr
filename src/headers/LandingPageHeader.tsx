import { FC } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

interface LandingPageHeaderProps {
  title?: string;
}

const LandingPageHeader: FC<LandingPageHeaderProps> = ({ title }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#F5F5F5",
  };

  return (
    <div style={containerStyle}>
      <h1>{title}</h1>
      <h4>About Us</h4>
      <h4>Contact</h4>
      <h4>FAQ</h4>
      <PrimaryButton name="Login" />
      <PrimaryButton name="Sign Up" />
    </div>
  );
};

export default LandingPageHeader;
