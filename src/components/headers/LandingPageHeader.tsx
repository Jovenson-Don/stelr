import { FC } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { Link } from "react-router-dom";
import logo from "../../../public/artwork/stelrLogoWhiteYellowAccent.svg";

interface LandingPageHeaderProps {
  title?: string;
}

const LandingPageHeader: FC<LandingPageHeaderProps> = () => {
  const headerContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#00A6FB",
    alignItems: "center",
    color: "#fff",
  };

  const logoStyle = {
    width: "9.5em",
    height: "auto",
    top: "1em",
    left: "1em",
    marginLeft: "3em",
  };

  const headerSectionsStyle = {
    display: "flex",
    gap: "20px",
  };

  const navbar = {
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <div style={headerContainerStyle}>
      <Link to="/">
        <img style={logoStyle} src={logo} alt="Stelr Logo" />
      </Link>
      <div style={headerSectionsStyle}>
        <Link style={navbar} to="/about">
          <h2>About Us</h2>
        </Link>
        <Link style={navbar} to="/contact">
          <h2>Contact</h2>
        </Link>
        <Link style={navbar} to="/faq">
          <h2>FAQ</h2>
        </Link>
      </div>
      <div>
        {/* These two buttons will be our fute login and sign up buttons on our homepage. Do not delete. */}
        {/* <PrimaryButton to={"/login"} label="Login" />
        <PrimaryButton to={"/signup"} label="Sign Up" /> */}
        <PrimaryButton to={"/waitlist"} label="Join Our WaitList" />
      </div>
    </div>
  );
};

export default LandingPageHeader;
