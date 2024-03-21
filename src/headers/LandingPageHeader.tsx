import { FC } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

interface LandingPageHeaderProps {
  title?: string;
}

const LandingPageHeader: FC<LandingPageHeaderProps> = ({ title }) => {
  const headerContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  };

  const headerSectionsStyle = {
    display: "flex",
    gap: "20px",
  };

  const titleStyle = {
    color: "#00A6FB",
  };

  return (
    <div style={headerContainerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <div style={headerSectionsStyle}>
        <h2>About Us</h2>
        <h2>Contact</h2>
        <h2>FAQ</h2>
      </div>
      <div>
        <PrimaryButton label="Login" />
        <PrimaryButton label="Sign Up" />
      </div>
    </div>
  );
};

export default LandingPageHeader;
