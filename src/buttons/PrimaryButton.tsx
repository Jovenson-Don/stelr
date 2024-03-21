import { FC } from "react";

interface PrimaryButtonProps {
  name: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ name }) => {
  const buttonStyle = {
    backgroundColor: "#00A6FB",
    color: "white",
    borderRadius: "500px",
  };
  return <button style={buttonStyle}>{name}</button>;
};

export default PrimaryButton;
