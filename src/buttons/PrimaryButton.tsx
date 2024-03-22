import { FC } from "react";

interface PrimaryButtonProps {
  label: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label }) => {
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
  return <button style={buttonStyle}>{label}</button>;
};

export default PrimaryButton;
