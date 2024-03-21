import { FC } from "react";

interface PrimaryButtonProps {
  label: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ label }) => {
  const buttonStyle = {
    backgroundColor: "#00A6FB",
    color: "white",
    borderRadius: "500px",
    padding: "20px 20px",
    border: "none",
    cursor: "pointer",
    margin: ".5em",
    fontSize: "1em",
  };
  return <button style={buttonStyle}>{label}</button>;
};

export default PrimaryButton;
