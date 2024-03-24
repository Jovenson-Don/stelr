import { FC } from "react";
import { Link } from "react-router-dom";

interface PrimaryButtonProps {
  label: string;
  to?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label, to }) => {
  const buttonStyle = {
    backgroundColor: "#00A6FB",
    color: "white",
    borderRadius: "3em",
    padding: "1em",
    border: "none",
    cursor: "pointer",
    margin: ".5em",
    fontSize: "1em",
  };
  return to ? (
    <Link to={to}>
      <button style={buttonStyle}>{label}</button>
    </Link>
  ) : (
    <button style={buttonStyle}>{label}</button>
  );
};

export default PrimaryButton;
