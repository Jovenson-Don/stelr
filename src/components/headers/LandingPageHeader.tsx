import { FC } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { Link } from "react-router-dom";

interface LandingPageHeaderProps {
  title?: string;
}

const LandingPageHeader: FC<LandingPageHeaderProps> = () => {
  const headerContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#00A6FB",
    alignItems: "center",
  };

  const logo = {
    width: "9.5em",
    height: "auto",
    top: "1em",
    left: "1em",
  };

  const headerSectionsStyle = {
    display: "flex",
    gap: "20px",
  };

  return (
    <div style={headerContainerStyle}>
      <Link to="/">
        <img
          style={logo}
          src="../public/artwork/stelrLogoWhiteYellowAccent.svg"
          alt="Stelr Logo"
        />
      </Link>
      <div style={headerSectionsStyle}>
        <h2>About Us</h2>
        <h2>Contact</h2>
        <h2>FAQ</h2>
      </div>
      <div>
        <PrimaryButton to={"/login"} label="Login" />
        <PrimaryButton to={"/signup"} label="Sign Up" />
      </div>
    </div>
  );
};

export default LandingPageHeader;
