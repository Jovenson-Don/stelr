import { FC } from "react";
import { Link } from "react-router-dom";

interface PrimaryButtonProps {
  label: string;
  to?: string;
  dynamicPadding?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  label,
  to,
  dynamicPadding,
}) => {
  const buttonStyle = {
    backgroundColor: "#ff5400",
    color: "white",
    borderRadius: ".5em",
    padding: dynamicPadding || "1em",
    border: "1px solid white",
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
