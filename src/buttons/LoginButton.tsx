import { FC } from "react";

interface LoginButtonProps {
  name: string;
}

const LoginButton: FC<LoginButtonProps> = ({ name }) => {
  return <button>{name}</button>;
};

export default LoginButton;
