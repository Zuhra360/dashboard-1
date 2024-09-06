import { Button, Title, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const LoginCard = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <Flex h="100vh" justify="center" align="center">
        <Title>Login</Title>
        <Button onClick={handleLogin}>Login</Button>
      </Flex>
    </div>
  );
};
